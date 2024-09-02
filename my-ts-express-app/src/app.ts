import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import formRoutes from './routes/formRoutes';

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST']
}));

app.use('/', formRoutes);

export default app;