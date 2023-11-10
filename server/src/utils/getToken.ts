import jwt from "jsonwebtoken";
import dotenv from 'dotenv'

dotenv.config()

const JWT_SECRET = String(process.env.JWT_SECRET)
const JWT_EXPIRE = Number(process.env.JWT_EXPIRE)
function getToken(id : string) {
    return jwt.sign({ id: id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
}

export default getToken;