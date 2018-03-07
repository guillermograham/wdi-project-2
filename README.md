# wdi-project-2

Living in Barcelona for 7 years, I often encountered tourists that were looking for bars showing British sporting events.

Local bars generally list the events that they are showing on their websites or Facebook pages. However, if potential viewers are not aware of these bars, this is irrelevant.

### Installation and Setup

**Run locally**

* Download or clone the GitHub repo

**View online**

* View on Heroku
* View on GitHub

### Technologies used

During the creation of this project, I used the following technologies:

* HTML 5
* SCSS
* JavaScript (ECMAScript 6)
* jQuery
* Git
* GitHub
* Heroku
* bcrypt
* Bluebird
* Body-parser
* EJS
* Express
* Express MethodOverride
* Gulp
* Method-override
* Moment.js
* MongoDB
* Mongoose
* Morgan
* Node.js

### Challenges faced

I faced a challenge when creating a search box on the front page. The search box is to allow users to search for all of the games featuring a particular sports team.

The searched-for team could be the home team or the away team in a fixture, meaning that the search function needs to search 2 fields of the fixture schema. I had to write code that would ensure this happens.

### Where next?

* Search function that will generate results from partially-typed inputs ('Stoke' rather than 'Stoke City').
* Predictive search input.
* Tap into Premier League API so that new fixtures are automatically generated.
* Bars can only add fixtures to their bars, rather than anyone being able to add a fixture to any bar.
* Sorting results from previously mentioned search function - sort them by date as the results from homeTeam are generated first, then awayTeam.