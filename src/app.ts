import express from 'express';

import './database/connections';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

export default app;
