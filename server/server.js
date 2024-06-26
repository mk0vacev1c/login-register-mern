import express from "express";
import cors from 'cors';
import morgan from 'morgan';
import connect from "./database/conn.js";
import router from "./router/route.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan());
app.disable('x-powered-by');

const port = 8080;

// HTTP GET REQ
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

// Api routes
app.use('/api', router)

// Start Server only when conn is valid
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })        
    } catch (error) {
        console.log('Cannot connect to server')
    }
}).catch(error => {
    console.log("Invalid database!")
})

