import { Router } from 'express';
import { createHero, deleteHero, listHeros, updateHero } from './controller';
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
  .patch(validate(updateHeroSchema), updateHero)
  .delete(deleteHero);

export { router as HeroRouter };
