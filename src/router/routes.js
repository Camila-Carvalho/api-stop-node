const express = require('express')
const router = express.Router();
const db = require('../db.js');
const StartGameController = require('../controller/game/startGameController')
const StopGameController = require('../controller/game/stopGameController')
const ExistingRoomController = require('../controller/roomConfiguration/existingRoomController')
const NewRoomController = require('../controller/roomConfiguration/newRoomController')

const Sala = require('../model/Sala.js');

router.post('/roomConfiguration/existingRoom', (req, res) => {
    const room = req.body;
    const existingRoom = ExistingRoomController.existingRoom(room);
    res.send(existingRoom);
});

/* Inicio teste Camila */
router.post('/roomConfiguration/newRoom', async (req, res) =>{
    const newRoom = req.body;
    const createRoom = NewRoomController.newRoom(newRoom);

    await Sala.create({"CodigoSala":"12345678911", "NumeroJogadores": 3, "NomeJogadorCriador":"CamilaPostman01"});

    res.send(createRoom);
});

router.get('/rooms', (req, res) => {
    const salas = null;
    res.send(salas);
});

/* Fim teste Camila */

router.post('/game/startGame', (req, res) => {
    const startGame = req.body;

    const playGame = StartGameController.startGame(startGame);

    res.send(playGame);
});

router.post('/game/stopGame', (req, res) =>{
    const stopGame = req.body;

    const finalGame = StopGameController.stopGame(stopGame);

    res.send(finalGame);
});

module.exports = router;