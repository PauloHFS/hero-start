import { NextFunction, Request, Response } from 'express';

export const pagination = (
  skip: string = '0',
  take: string = '10',
  cursor?: string
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    req.query.skip ||= skip;
    req.query.take ||= take;
    req.query.cursor ||= cursor;
    next();
  };
};
