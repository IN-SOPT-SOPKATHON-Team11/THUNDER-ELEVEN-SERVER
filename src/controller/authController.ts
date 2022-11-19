import { Request, Response } from "express";
import { authService } from "../service";

const login = async (req: Request, res: Response) => {
  const { nickname, password } = req.body;

  let previousData = await authService.getUserByNickname(nickname);
  const data = { access_token: previousData?.id };

  if (!data) {
    return res.status(404).json({
      status: 404,
      message: "아이디 혹은 비밀번호를 다시 확인해주세요",
    });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const authController = {
  login,
};

export default authController;
