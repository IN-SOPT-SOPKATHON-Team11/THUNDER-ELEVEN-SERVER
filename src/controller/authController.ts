import { Request, Response } from "express";
import { authService } from "../service";

const login = async (req: Request, res: Response) => {
  const { nickname, password } = req.body;

  let previousData = await authService.getUserByNickname(nickname);
  const data = { access_token: previousData?.id };

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공" });
};

const authController = {
  login,
};

export default authController;
