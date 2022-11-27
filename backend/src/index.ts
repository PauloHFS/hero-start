import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import { routes } from './modules/routes';

const server = express();

server.use(morgan('tiny'));
server.use(express.json());
server.use(helmet());
server.use(routes);
server.use(express.static('public'));

server.get('/health', (req, res) => {
  return res.send('up!');
});

server.listen(process.env.PORT ?? '3333', () =>
  console.log(`\n\t🚀 Running on localhost:${process.env.PORT ?? '3333'} 🚀\n`)
);
