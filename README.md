# TravelSphere

## Table of contents
* [User Story](#user-story)
* [Description](#description)
* [Motivation](#motivation)
* [Technologies](#technologies)
* [Challanges](#challanges)
* [Successes](#successes)
* [Process](#process)
* [Directions for Future Development](#directions-for-future-development)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Results](#results)
* [Contributers](#contributers)

## User Story
AS A traveler
I WANT an application where I can plan trips with my friends and family
SO THAT all our trip information is in one place

## Description
TravelSphere is your one-stop spot for planning a trip with your friends and family. Simply create a trip, sign up using your unique trip ID, and invite your fellow travelers to join. You and your friends will have a private dashboard to share ideas, tasks, and more.

Our app includes key features:
* Easy and appealing
* Add itinerary ideas, make comments, and add items to a to-do list
* Make plans on a private dashboard
* Lots of fun!

## Motivation
Our motivation for this project was to create an application that was a spin on the tech blog projects we did in the challenge and module. When brainstorming ideas, we all had vacations coming up with friends and thought an app to plan it all in one place would be useful. We wanted to use all the skills we've learned to make an application where we can share ideas, ccomment on those ideas, and create our own group dashboards.

## Technologies
This project was created using:
* VS Code
* HTML
* CSS
* JavaScript
* Git/GitHub
* MySQL
* Insomnia
* Node.js
* Heroku
* Sequelize
* Express
* Express-Session
* Connect-Session-Sequelize
* Handlebars
* Dotenv
* Mysql2
* Bcrypt
* Adobe Fonts (Typekit)
* ansi-colors

## Challenges
* GitHub Process
* Working around different schedules and skill levels
* Differences in individual coding processes
* Implementing new functionality that was a little different than the challenge and module project
* Figuring out the functionality to create a trip and sign up in tandem

## Successes
* Created an application that satisfies MVP requirements
* Had good group creativity/brainstorming
* Designed a clean and user-friendly UI

## Process
### STEP 1. - SETUP
* Create a GitHub repository
* Created issues and assigned to group members
* Organized folder and file directory structure.
* Installed necessary packages
* Imported Sequelize connection and synced database

### STEP 2. - SETUP MODELS
* Created Trip, Member, Post, ListItem, and Comment models
* Established associations between models
* Created seed files for each of the models

### STEP 3. - SETUP API AND HOME ROUTES
* Created API routes for Trip, Member, Post, ListItem, and Comment
* Created home routes and dashboard routes
* Used Insomnia to test all routes 

### STEP 4. - HANDLEBARS
* Created HTML and CSS templates to use as Handlebars template
* Used template to create handlebars views, layouts, partials
* Insert variables into handlebars layouts

### STEP 5. - CREATE FUNCTIONALITY
* Wrote JavaScript functionality for application
* Added middleware to authenticate login
* Added necessary helpers

### STEP 6. - FINALIZE
* Finished Readme
* Pushed everything to the main branch
* Deployed to Heroku

## Directions for Future Development
* Add the ability to edit and delete items, posts, and comments
* Add the ability to filter the itinerary items into categories, such as food/drink, attraction, tour, etc.
* Add calendar functionality to build an itinerary
* Allow users to plan multiple trips under one profile
* Integrate other common travel applications, such as Airbnb, Trip Advisor, Splitwise, etc.
* Implement functionality so the banner image can change to the location of the user-input destination

## Installation
Clone this repository. Open the terminal and type the following to install all the packages:
```
npm install
```

## Usage
To run this application, type the following into the command line:

```
npm start
``` 

Open another terminal to the side and type the following into the command line:

```
npm run seed
``` 

## Credits
* Adobe Fonts/Typekit: https://fonts.adobe.com/
* Sequelize: https://sequelize.org/
* Handlebars: https://handlebarsjs.com/
* npm: https://www.npmjs.com/

## Results
* [Heroku URL]()
* [GitHub Repository](https://github.com/etrenholm/TravelSphere)


![mockup](/utils/images/project2-mockup1.png)
![mockup](/utils/images/project2-mockup2.png)
![mockup](/utils/images/project2-mockup3.png)
![mockup](/utils/images/project2-mockup4.png)


## Contributers
* Craig Maguire: https://github.com/CrMaguire
* Joshua Puente De La Vega: https://github.com/JoshuaPDLV
* Erica Trenholm: https://github.com/etrenholm
* Ryan Zubayer: https://github.com/ryanzubayer

### ©️ May 2022
