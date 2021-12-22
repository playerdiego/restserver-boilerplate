const express = require('express');
const cors = require('cors');
const userRouter  = require('../routes/userRoutes');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        this.middleware();

        this.routes();
    };

    middleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    };

    routes() {
        
        this.app.use(this.usersPath, userRouter);

    };

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando en el puerto 8080');
        });
    };

};

module.exports = Server;