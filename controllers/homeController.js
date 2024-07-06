const path = require('path');
const rpsChoice = require('../models/rpsChoice');

class homeController {
    static renderHomePage(res) {
        res.sendFile(path.join(__dirname, '../views/index.html'));
    }

    static playGame(req, res) {
        const playerChoice = req.body.choice.toLowerCase();
        const result = rpsChoice.play(playerChoice);
        res.json(result);
    }
}

module.exports = homeController;