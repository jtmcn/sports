const StattleshipAPI = require('node-stattleship');

const API_TOKEN = require('../secret').token;

const stattleship = new StattleshipAPI(API_TOKEN);


let params = {
  //   team_id: "nfl-den"
};

exports.getTeams = function() {
  console.log('getting teams...');
  return stattleship.teams('football', 'nfl', params);
}