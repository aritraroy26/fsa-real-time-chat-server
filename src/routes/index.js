import { createConversationRoute } from "./createConversationRoute";
import { getAllUsersRoute } from "./getAllUsersRoute";
import { getUserConversationsRoute } from "./getUserConversationsRoute";
export { protectRoute } from "./protectRoute";

export const routes = [
  getUserConversationsRoute,
  createConversationRoute,
  getAllUsersRoute,
];
