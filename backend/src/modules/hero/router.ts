import { Router } from 'express';
import { createHero, deleteHero, listHeros, updateHero } from './controller';

const router = Router();

router.route('/').post(createHero).get(listHeros);

router.route('/:id').patch(updateHero).delete(deleteHero);

export { router as HeroRouter };
