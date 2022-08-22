import { db } from "./db";

export const getUserConversation = async (userId) => {
  return await db
    .getConnection()
    .collection("conversations")
    .find({ memberIds: userId })
    .toArray();
};
