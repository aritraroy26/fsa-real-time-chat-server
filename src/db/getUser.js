import { db } from "./db";

export const getUser = async (userId) => {
  return db.getConnection().collection("users").findOne({ id: userId });
};
