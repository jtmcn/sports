const demoCtrl = require('../controllers/demoCtrl.js');

module.exports = function(server) {

  server.get('/demo', function(req, res) {

    demoCtrl.getPlayers().then(function(allPlayers) {
      console.log('send players!')
      res.send(allPlayers);
    });
  });
};