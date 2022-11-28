import { Router } from 'express';
import {
  createHero,
  deleteHero,
  getHeroById,
  listHeros,
  updateHero,
} from './controller';
import { upload } from '../../middlewares/upload';
import { validate } from '../../middlewares/validate';
import { updateHeroSchema } from './validations';
import { pagination } from '../../middlewares/pagination';

const router = Router();

router
  .route('/')
  .post(upload.single('hero'), createHero)
  .get(pagination(), listHeros);

router
  .route('/:id')
  .get(getHeroById)
  .patch(validate(updateHeroSchema), updateHero)
  .delete(deleteHero);

export { router as HeroRouter };
