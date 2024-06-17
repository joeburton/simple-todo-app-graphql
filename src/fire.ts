import { Response } from "express";

export default function handler(res: Response) {
  res.status(200).json({ message: "Set this day on fire!" });
}
