import {
  addMessageToConversation,
  getCanUserAccessConversation,
  getConversation,
} from "../db";

export const createPostMessageListener = (socket, io) => ({
  name: "postMessage",
  handler: async ({ text, conversationId }) => {
    const { user_id: userId } = socket.user;
    const userIsAuthorized = await getCanUserAccessConversation(
      userId,
      conversationId
    );
    if (userIsAuthorized) {
      await addMessageToConversation(text, userId, conversationId);
      const updateConversation = await getConversation(conversationId);
      //io.to(conversationId) sends the message to the room created using this conversationId in server.js
      //meaning all users of that particular conversation receives the message
      io.to(conversationId).emit(
        "updatedMessages",
        updateConversation.messages
      );
    }
  },
});
