import * as admin from "firebase-admin";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.authtoken;
    const authUser = await admin.auth().verifyIdToken(token);
    req.user = authUser;
    next();
  } catch (err) {
    res
      .status(401)
      .json({ message: "You must be logged in to access these resources" });
  }
};
