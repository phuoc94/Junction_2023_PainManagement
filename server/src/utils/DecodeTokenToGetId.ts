import jwt from "jsonwebtoken";
import { decodeType } from "../types/response/DecodeType.js";

import dotenv from 'dotenv'
dotenv.config()
const JWT_SECRET = String(process.env.JWT_SECRET);

function decodeTokenToGetId (token: string) : decodeType {

    const decode = jwt.verify(token, JWT_SECRET) as decodeType;

    return decode
}

export default decodeTokenToGetId;