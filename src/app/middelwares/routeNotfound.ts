import { Request, Response, NextFunction } from "express";

export function routeNotFoundHandler(req: Request, res: Response, next: NextFunction) {
  return res.status(404).json({ message: 'route not found' })
}