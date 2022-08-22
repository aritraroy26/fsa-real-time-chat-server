import { getAllUsers } from "../db";

export const getAllUsersRoute = {
  method: "get",
  path: "/api/users",
  handler: async (req, res) => {
    const users = await getAllUsers();
    return res.status(200).json(users);
  },
};
