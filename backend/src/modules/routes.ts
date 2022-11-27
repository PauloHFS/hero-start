import { Router } from 'express';
import { HeroRouter } from './hero/router';

const routes = Router();

routes.use('/hero', HeroRouter);

export { routes };
