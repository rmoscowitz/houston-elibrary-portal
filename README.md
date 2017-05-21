# houston-elibrary-portal
Houston Hackathon 2017 Project

Prerequisites:
* Apply for membership for any Overdrive-based library system (in this case Harris county and City of Houston)

Technology stack:
* Python script to scrape Overdrive APIs for library entities (/extractor)
* Postgres to store scraped library entries from Overdrive
* Node express server to expose endpoints for use by front-end
* CreateReactApp (https://github.com/facebookincubator/create-react-app) for React front-end

To serve application:
* Checkout and navigate into the repo
* Install node from https://nodejs.org/en/download/
* run ```npm run start-prod``` in the base directory to start up Node express server and expose front-end

Items still to do:

* Flatten the project so the react app is served statically instead of using a proxy to communicate with express server
