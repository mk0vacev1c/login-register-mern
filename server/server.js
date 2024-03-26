import express from "express";
import cors from 'cors';
import morgan from 'morgan';

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

// Start Server
app.listen(port, () => {
    console.log(`Server connected to http://localhost:${port}`);
})
