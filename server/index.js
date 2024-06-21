const express = require('express');
const socket = require('socket.io');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

app.get('*', (req, res) => {
    res.send('Use as API for socket backend');
});

const server = app.listen(port, () => {
    console.log(`Running at port ${port}`);
});
const io = socket(server);

// Lobbies for clients
const lobbies = {};

io.on('connect', (socket) => {
    socket.on('new_connection', data => {
        if (lobbies[data]) {
            lobbies[data].push(socket);
            lobbies[data][0].emit('join_connection', {
                to: 1
            });
            lobbies[data][1].emit('join_connection', {
                to: 0
            });
        } else {
            lobbies[data] = new Array(1);
            lobbies[data][0] = socket;
        }
        // console.log(Object.keys(lobbies));
    });

    socket.on('choice', (data) => {
        const { option, lobby, to } = data;
        if (lobbies[lobby].length === 2) {
            lobbies[lobby][to].emit('option', {
                choice: option,
                from: 1 - to
            });
        }
    });

    socket.on('again', (data) => {
        const { lobby, to } = data;
        if (lobbies[lobby].length === 2) {
            lobbies[lobby][to].emit('play', {
                from: 1 - to
            });
        }
    })
});