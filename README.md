Project Name: HavaHavai-Airport

Description:
This Node.js application serves as a simple API to retrieve airport information based on IATA code. 
It utilizes Sequelize for database interaction with SQLite and defines models for Airport, City, and Country entities.

Requirements:
Node.js and npm (or yarn) package manager installed on your system.
Installation:

Clone this repository or download the project files.
Open a terminal in the project directory.
Run npm install (or yarn install) to install required dependencies.
Running the Application:

Ensure you have a database.sqlite file in the project directory (or create one).
Run node app.js to start the server.
The server will listen on port 4000 by default (or the environment variable PORT if set).
API Endpoint:

GET /airport?iata_code={iata_code}: Retrieves airport details based on the provided IATA code.

Example Acceptable Query parameters:
Access http://localhost:4000/airport?iata_code=AGR
Access http://localhost:4000/airport?iata_code=AGX
in your browser or use an HTTP client like Postman to send a GET request with the desired IATA code as a query parameter.

Response Format:
The API returns a JSON response containing airport information, including:

id: Airport identifier (integer)
icao_code: ICAO code (string)
iata_code: IATA code (string)
name: Airport name (string)
type: Airport type (string)
latitude_deg: Latitude in degrees (float)
longitude_deg: Longitude in degrees (float)
elevation_ft: Elevation in feet (integer)
address: Nested object containing information about the associated city:
id: City identifier (integer)
name: City name (string)
country_id: Foreign key referencing the Country table (integer)
is_active: Flag indicating if the city is active (boolean)
lat: City latitude (float)
long: City longitude (float)
country: Nested object with details about the associated country:
id: Country identifier (integer)
name: Country name (string)
country_code_two: Two-letter ISO country code (string)
country_code_three: Three-letter ISO country code (string)
mobile_code: Country mobile code (string)
continent_id: Foreign key referencing the continent table (integer) (Optional, depending on your data model)
Error Handling:

The API returns a JSON response with a status code and message for errors:
404: Airport not found (when the provided IATA code doesn't match a record in the database)
500: Internal server error (for unexpected issues)





