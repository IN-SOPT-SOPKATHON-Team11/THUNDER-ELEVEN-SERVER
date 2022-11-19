import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getUserByNickname = async (nickname: string) => {
  const user = await prisma.user.findMany({
    where: {
      nickname: nickname,
    },
  });

  return user;
};

const authService = {
  getUserByNickname,
};

export default authService;
