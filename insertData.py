import sqlite3

# Connect to the database
conn = sqlite3.connect('database.sqlite')
cursor = conn.cursor()

# Open your spreadsheet data (replace with your method)
with open('airport.csv', 'r') as csvfile:
    # Skip header row (if present)
    next(csvfile)
    for row in csvfile:
        # Parse the CSV row and create a list of values
        data = [value.strip() for value in row.split(',')]
        
        print(data)
        # data = data[0].split(' ')
        # print(len(data))
        sql = "INSERT INTO Airports (id, icao_code, iata_code, name, type, city_id, country_id, continent_id, website_url, created_at, updated_at, latitude_deg, longitude_deg, elevation_ft, wikipedia_link) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
        # print(sql)

        # Insert data into the table (replace with your column names)
        # cursor.execute(sql, data)

        try:
            # Execute the SQL statement
            cursor.execute(sql, data)

            # Commit the transaction
            conn.commit()
            print("Data inserted successfully!")

        except sqlite3.Error as e:
            # print(f"Error inserting data: {e}")
            pass


# Commit changes and close connection
conn.commit()
conn.close()
