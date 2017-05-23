# Houston Book Link [![Build Status](https://travis-ci.org/rmoscowitz/houston-elibrary-portal.svg?branch=master)](https://travis-ci.org/rmoscowitz/houston-elibrary-portal)
See our [Houston Hackathon](https://houstonhackathon5.devpost.com/submissions) submission.

## Technology stack
* Python script to scrape Overdrive APIs for library entities (/extractor)
* Postgres to store scraped library entries from Overdrive
* Node express server to expose endpoints for use by front-end
* [CreateReactApp](https://github.com/facebookincubator/create-react-app) for React front-end, with Bootstrap & ionicons

## To serve application
* Checkout and navigate into the repo
* Install node from https://nodejs.org/en/download/
* Run ```npm start``` in the base directory to start up Node express server and expose front-end

## Contributing
* Please make changes in feature branches and submit a pull request to master.
* New collaborators welcome!

![Houston Book Link logo](https://raw.githubusercontent.com/rmoscowitz/houston-elibrary-portal/master/src/logo3.png)
