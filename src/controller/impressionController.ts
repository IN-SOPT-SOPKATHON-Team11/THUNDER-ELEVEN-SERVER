import { reverse } from "dns";
import { Request, Response } from "express";
import { impressionService } from "../service";

const createImpression = async (req: Request, res: Response) => {
  const { ReceiverNickname, type, tags, animal, comment } = req.body;

  // 현재 User의 id 가져오기
  if (req.headers.authorization) {
    const senderId = req.headers.authorization.split("Bearer ")[1];
    console.log(senderId);

    // 목표 대상인 User의 nickname으로 ID 가져오기
    let receiverId = await impressionService.getUserIdByNickname(
      ReceiverNickname
    );
    console.log(receiverId);

    // animal에 해당하는 Animal ID 찾기
    let animalId = await impressionService.getAnimalIdByName(animal);

    // tag에 해당하는 Tag ID 목록 찾기
    let letTagIds = await impressionService.getTagIdsByNames(tags);

    // 객체 생성
    if (receiverId && animalId) {
      let data = await impressionService.createImpression(
        +senderId,
        receiverId,
        animalId,
        letTagIds,
        type,
        comment
      );
    }
  }

  return res.status(201).json({ status: 201, message: "인상 남기기 성공" });
};

const impressionController = {
  createImpression,
};

export default impressionController;
