import { Request, Response } from "express";
import { authService } from "../service";

const login = async (req: Request, res: Response) => {
  // const { nickname, password } = req.body;

  // let previousData = await authService.getUserByNickname(nickname);
  // let data = { access_token: previousData?.id };

  // if (!data) {
  //   return res.status(404).json({
  //     status: 404,
  //     message: "아이디 혹은 비밀번호를 다시 확인해주세요",
  //   });
  // }
  const data = {
    access_token: "46c42141-5d7b-4e3f-91b3-110e79c0adc4",
  };
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const me = async (req: Request, res: Response) => {
  const data = {
    user: {
      nickname: "현우",
    },
    firstImpression: {
      tag: "사나운",
      animal: "사자",
    },
    currentImpression: {
      tag: "낙관적인",
      animal: "곰",
    },
  };
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const authController = {
  login,
  me,
};

export default authController;
