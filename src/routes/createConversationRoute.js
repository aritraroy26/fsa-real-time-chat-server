import { createConversation } from "../db";

export const createConversationRoute = {
  method: "post",
  path: "/api/conversation",
  handler: async (req, res) => {
    const { name, memberIds } = req.body;
    const { user_id: userId } = req.user;
    const insertedId = await createConversation(name, [...memberIds, userId]);
    return res.status(200).json(insertedId);
  },
};
