import { Router } from 'express';
import { createHero, deleteHero, listHeros, updateHero } from './controller';
import { upload } from '../../middlewares/upload';

const router = Router();

router.route('/').post(upload.single('hero'), createHero).get(listHeros);

router.route('/:id').patch(updateHero).delete(deleteHero);

export { router as HeroRouter };
