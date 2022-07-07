import jwt from "jsonwebtoken";

export default function decodeCookie(token){
  const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
  return decoded;
}