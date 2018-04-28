
# NY Times News Scraper

## Purpose
Demonstrates web scraping and database manipulation via Mongoose in a React environment.

## Localhost preparation
If cloning into local environment, the application requires a .env file containing your NY Times API key. Include the environmental variable `REACT_APP_NYTAPIKEY=<your key>` in your .env file, and place the file in the `/client` folder.

## Usage
When the application is loaded, you may search the New York Times API for articles using the topic query field and optionally providing beginning and ending years for searching. When results are returned, you may click the "save" button on any article to save it to the database. The "Saved" page will display all saved articles, and provide buttons for their removal from the database.

## Unimplemented features
Some code is included (with access lines commented out) outlining an unfinished structure for appending comments to each saved article.

### Server Module Dependencies
`body-parser`
`mongoose`
`dotenv`

### Client Module Dependencies
`react-router-dom`
`dotenv`
`axios`
`react-moment`
`react-bootstrap`