import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUserIdByNickname = async (nickname: string) => {
  const user = await prisma.user.findUnique({
    where: {
      nickname: nickname,
    },
  });
  if (user) {
    return user.id;
  }
};

const getAnimalIdByName = async (name: string) => {
  const animal = await prisma.animal.findUnique({
    where: {
      name: name,
    },
  });
  if (animal) {
    return animal.id;
  }
};

const getTagIdsByNames = async (tags: string[]) => {
  const tagObjects = await prisma.tag.findMany({
    where: {
      name: {
        in: tags,
      },
    },
  });
  return tagObjects.map((x) => x.id);
};

const createImpression = async (
  senderId: number,
  receiverId: number,
  animalId: number,
  TagIds: number[],
  type: number,
  comment: string
) => {
  const result = await prisma.impression.create({
    data: {
      senderId: senderId,
      receiverId: receiverId,
      type: type,
      animalId: animalId,
      comment: comment,
    },
  });
  console.log(result);
  return result;
};

const impressionService = {
  getUserIdByNickname,
  getAnimalIdByName,
  getTagIdsByNames,
  createImpression,
};

export default impressionService;
