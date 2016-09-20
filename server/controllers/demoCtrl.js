const StattleshipAPI = require('node-stattleship');

const API_TOKEN = require('../secret').token;

const stattleship = new StattleshipAPI(API_TOKEN);


let params = {
  team_id: "mlb-oak"
};

exports.getPlayers = function() {
    console.log('getting players...');
    return stattleship.players('baseball', 'mlb', params)
      .then(function(players) {
        players.forEach(function(element, index, array) {
          console.log(element.name);
        });
      });
  }
  // stattleship.players('baseball', 'mlb', params).then(function(players) {
  //   players.forEach(function(element, index, array) {
  //     console.log(element.name);
  //   });
  // });