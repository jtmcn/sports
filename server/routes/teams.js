const teamsCtrl = require('../controllers/teamsCtrl.js');

module.exports = function(server) {

  server.get('/nfl/teams', function(req, res) {

    teamsCtrl.getTeams().then(function(allTeams) {
      console.log('send teams!')
      res.send(allTeams);
    });
  });
};