import { Request, Response } from "express";
import { authService } from "../service";

const login = async (req: Request, res: Response) => {
  const { nickname, password } = req.body;

  const data = await authService.getUserByNickname(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const authController = {
  login,
};

export default authController;
