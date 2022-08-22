import { getUserConversation } from "../db";

export const getUserConversationsRoute = {
  method: "get",
  path: "/api/users/:id/conversations",
  handler: async (req, res) => {
    const { id: userId } = req.params;
    if (req.user.user_id !== userId) {
      return res.status(403).json({ message: "Forbidden" });
    }
    const conversations = await getUserConversation(userId);
    res.status(200).json(conversations);
  },
};
