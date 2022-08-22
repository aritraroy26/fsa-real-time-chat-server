import { db } from "./db";

export const getAllUsers = async () => {
  return await db.getConnection().collection("users").find({}).toArray();
};
