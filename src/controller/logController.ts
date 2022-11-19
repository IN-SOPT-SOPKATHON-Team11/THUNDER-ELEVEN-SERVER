import { Request, Response } from "express";
import { logService } from "../service";

const logs = async (req: Request, res: Response) => {
  const data = {
    logs: [
      {
        senderNickname: "송현",
        firstImpression: {
          tag: "연구원",
          animal: "곰",
        },
        currentImpression: {
          tag: "과제 버스기사",
          animal: "곰",
        },
      },
      {
        senderNickname: "안누",
        firstImpression: {
          tag: "스티브 잡스",
          animal: "곰",
        },
        currentImpression: {
          tag: "낭만 시인",
          animal: "사자",
        },
      },
      {
        senderNickname: "정연",
        firstImpression: {
          tag: "사나운",
          animal: "사자",
        },
        currentImpression: {
          tag: "낙관적인",
          animal: "곰",
        },
      },
      {
        senderNickname: "한빛",
        firstImpression: {
          tag: "사나운",
          animal: "사자",
        },
        currentImpression: {
          tag: "귀여운",
          animal: "토끼",
        },
      },
    ],
  };
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const logsComments = async (req: Request, res: Response) => {
  const data = {
    senderNickname: "송현",
    logs: [
      {
        type: 1,
        impression: {
          tag: "낭만 시인",
          animal: "사자",
        },
        comment:
          "첫 만남 때 너가 재밌게 떠드는 모습을 봐서 되게 유쾌한 사람인줄 알았어",
      },
      {
        type: 1,
        impression: {
          tag: "귀여운",
          animal: "사자",
        },
        comment:
          "첫 만남 때 너가 재밌게 떠드는 모습을 봐서 되게 유쾌한 사람인줄 알았어",
      },
      {
        type: 1,
        impression: {
          tag: "귀여운",
          animal: "사자",
        },
        comment:
          "첫 만남 때 너가 재밌게 떠드는 모습을 봐서 되게 유쾌한 사람인줄 알았어",
      },
      {
        type: 1,
        impression: {
          tag: "귀여운",
          animal: "사자",
        },
        comment:
          "첫 만남 때 너가 재밌게 떠드는 모습을 봐서 되게 유쾌한 사람인줄 알았어",
      },
      {
        type: 0,
        impression: {
          tag: "귀여운",
          animal: "사자",
        },
        comment:
          "첫 만남 때 너가 재밌게 떠드는 모습을 봐서 되게 유쾌한 사람인줄 알았어",
      },
    ],
  };
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

const logController = {
  logs,
  logsComments,
};

export default logController;
