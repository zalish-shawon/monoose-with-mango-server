import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';

const app = express();

app.use(cors())
app.use(express.json());

app.listen(config.PORT, () => {
    console.log(`Mango server is running on port ${ config.PORT }`);
});

app.get('/', (req, res) => {
    res.send('Welcome to the Mango server!');
});


async function server() {
    try {
        
        await mongoose.connect(config.DATABASE_URL!);
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error starting the server:', error);
    }
}

server();

