const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
mongoose.connect(dbURI);

const Bar = require('../models/bar.js');
const User = require('../models/user.js');
const Match = require('../models/match.js');

Bar.collection.drop();
User.collection.drop();
Match.collection.drop();

Match
  .create([{
    competition: 'Premier League',
    date: 'Sat Feb 24 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Arsenal',
    awayTeam: 'AFC Bournemouth'
  },{
    competition: 'Premier League',
    date: 'Sat Feb 24 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Burnley',
    awayTeam: 'Chelsea'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 03 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Manchester City',
    awayTeam: 'Manchester United'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 03 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Arsenal',
    awayTeam: 'Liverpool'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 03 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Tottenham',
    awayTeam: 'Everton'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 10 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Leicester City',
    awayTeam: 'Arsenal'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 10 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Watford',
    awayTeam: 'West Ham'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 10 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Crystal Palace',
    awayTeam: 'Huddersfield'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 10 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Newcastle United',
    awayTeam: 'Brighton'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 17 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Southampton',
    awayTeam: 'Stoke City'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 17 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'West Brom',
    awayTeam: 'Swansea City'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 17 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Manchester United',
    awayTeam: 'Chelsea'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 17 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Manchester City',
    awayTeam: 'Tottenham'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 17 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Everton',
    awayTeam: 'Liverpool'
  },{
    competition: 'Premier League',
    date: 'Sat Mar 17 2018 15:00:00 GMT+0000 (GMT)',
    homeTeam: 'Leicester City',
    awayTeam: 'West Ham'
  }])
  .then((matches) => {
    console.log(`${matches.length} matches created!`);
    return User
      .create([{
        username: 'irish-bar-fan',
        email: 'irish-bar-fan@gmail.com',
        password: 'password',
        passwordConfirmation: 'password'
      },{
        username: 'football-fan',
        email: 'football-fan@gmail.com',
        password: 'password',
        passwordConfirmation: 'password'
      }])
      .then((users) => {
        console.log(`${users.length} users created!`);
        return Bar.create([{
          name: 'George Payne',
          createdBy: users[0],
          imageOne: 'https://media.timeout.com/images/102872216/image.jpg',
          address: {
            line1: 5,
            line2: 'Plaza Urquinaona',
            city: 'Barcelona',
            postcode: '08010'
          },
          website: 'https://www.thegeorgepayne.com/',
          telephone: 934815294,
          fixtures: [matches[0], matches[1], matches[4], matches[8]],
          description: 'The George Payne Irish Bar. The best party in Barcelona. We are open all day with the finest food and drink deals in Catalunya. Great pub food, fantastic music and a wide selection of beer. '
        },{
          name: 'Grizzly 72 Sports Bar',
          createdBy: users[0],
          imageOne: 'https://static1.squarespace.com/static/586eccb6f5e23106781c0aba/t/5873e498c534a5d5acca4bbb/1483990213104/tvs+and+flags.jpg?format=2500w',
          address: {
            line2: 'Gran Via De Les Corts Catalans',
            city: 'Barcelona',
            postcode: '08011'
          },
          telephone: 34680961707,
          fixtures: [matches[0], matches[1], matches[2], matches[4], matches[8]],
          description: 'Grizzly 72 Sports Bar. The best party in Barcelona. We are open all day with the finest food and drink deals in Catalunya. Great pub food, fantastic music and a wide selection of beer. '
        },{
          name: 'Shenanigans',
          createdBy: users[1],
          imageOne: 'https://www.shenanigansbarcelona.com/blog/wp-content/uploads/2014/11/Quiet-Man-Pub-Barcelona-2-702x336.jpg',
          address: {
            line1: 11,
            line2: 'Carrer Marques de Barbara',
            city: 'Barcelona',
            postcode: '08001'
          },
          website: 'https://www.shenanigansbarcelona.com/',
          telephone: 934495294,
          fixtures: [matches[5], matches[6], matches[7], matches[8], matches[10]],
          description: 'Friendly family-owned Irish pub in the centre of Barcelona. Come and enjoy the great craic, live sports, friendly staff & our huge selection of beers.'
        },{
          name: 'Dunne\'s Irish Bar and Restaurant',
          createdBy: users[1],
          imageOne: 'https://media-cdn.tripadvisor.com/media/photo-s/06/6b/8a/a5/caption.jpg',
          address: {
            line1: 19,
            line2: 'Via Laietana',
            city: 'Barcelona',
            postcode: '08003'
          },
          website: 'http://dunnesirishbar.com/',
          telephone: 934940294,
          fixtures: [matches[9], matches[11], matches[12], matches[13], matches[14]],
          description: 'Dunne\'s Irish Pub and Restaurant is a replication of some of the authentic elements that make the great pubs of Ireland truly unique. This pub and restaurant has high vaulted ceilings with newly replicted authenticate wooden bars and a stunningly beautiful wooden floor. Born of painstaking attention to decorative detail and insistence on true craftsmanship, this Irish pub is pleasing to the eye as well as to the palette. We hope to provide you with a place of solace away from the hustle and bustle of Barcelona city life where you and your friends can enjoy the friendly, buzzing atmosphere.'
        }]);
      });
  })
  .then((bars) => {
    console.log(`${bars.length} bars created!`);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
