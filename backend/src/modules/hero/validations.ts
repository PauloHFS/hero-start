import { z } from 'zod';

export const updateHeroSchema = z.object({
  params: z.object({
    id: z.string(),
  }),
  body: z.object({
    name: z.string().min(2),
  }),
});
