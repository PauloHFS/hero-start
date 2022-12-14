import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { routes } from './modules/routes';

const server = express();

server.use(morgan('short'));
server.use(express.json());
server.use(cors());
server.use(
  helmet({
    crossOriginResourcePolicy: {
      policy: 'cross-origin',
    },
  })
);
server.use(routes);
server.use('/public', express.static(process.cwd() + '/public'));

server.get('/health', (req, res) => {
  return res.send('up!');
});

server.listen(process.env.PORT ?? '3333', () =>
  console.log(`\n\tš Running on localhost:${process.env.PORT ?? '3333'} š\n`)
);
