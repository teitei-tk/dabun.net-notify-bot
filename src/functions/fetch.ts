import { Request, Response } from "express";

export const fetchFunction = (_: Request, res: Response) => {
  return res.status(200).json({
    message: "success"
  });
};
