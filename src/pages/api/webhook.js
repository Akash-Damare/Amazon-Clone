import { buffer } from "micro";
import * as admin from "firebase-admin";

export default async (req, res) => {
  res.status(404).json({ message: "Forbidden page" });
};
