const demoCtrl = require('../controllers/demoCtrl.js');

module.exports = function(server) {

  server.get('/players', function(req, res) {

    let allPlayers = demoCtrl.getPlayers();

    console.log(allPlayers)

    res.send(allPlayers);
  });
};