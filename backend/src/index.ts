import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';
import { routes } from './modules/routes';

const server = express();

server.use(express.json());
server.use(routes);

server.get('/health', (req, res) => {
  return res.send('up!');
});

server.listen(process.env.PORT ?? '3333', () =>
  console.log(`\n\t🚀 Running on localhost:${process.env.PORT ?? '3333'} 🚀\n`)
);
