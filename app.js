const express = require('express');
const path = require('path');
const routes = require('./routes/routes');

this.app = express();
this.PORT = 3000;

// Middleware to parse JSON requests
this.app.use(express.json());

// Serve static files from the "public" directory
this.app.use(express.static(path.join(__dirname, 'views')));

// Use the routes defined in routes.js
this.app.use('/', routes);

this.app.listen(this.PORT, () => {
    console.log(`Server is running on http://localhost:${this.PORT}`);
});



// class App {
//     constructor() {
//         this.app = express();
//         this.PORT = 3000;

//     }

//     start() {
//         this.app.listen(this.PORT, () => {
//             console.log(`Server is running on http://localhost:${this.PORT}`);
//         });
//     }
// }

// const app = new App();
// app.start();