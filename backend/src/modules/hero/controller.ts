import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

export const createHero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;

  try {
    const result = await prisma.hero.create({
      data: {
        name,
        picture: req.file?.path.replaceAll('\\', '/'),
      },
    });
    return res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const listHeros = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const findOptions = {
      skip: Number(req.query.skip),
      take: Number(req.query.take),
    };

    if (req.query.cursor)
      Object.assign(findOptions, {
        cursor: {
          id: Number(req.query.cursor),
        },
      });

    const result = await prisma.hero.findMany({
      ...findOptions,
    });
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const getHeroById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  try {
    const result = await prisma.hero.findFirst({
      where: {
        id: Number(id),
      },
    });

    const statusCode = result ? 200 : 404;

    return res.status(statusCode).send(result);
  } catch (error) {
    next(error);
  }
};

export const updateHero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const result = await prisma.hero.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
      },
    });

    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

export const deleteHero = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await prisma.hero.delete({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
