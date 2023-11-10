import userModel from '../models/userModel.js'
import { type authRequest } from '../types/request/authRequest.js'
import bcrypt from "bcrypt"
import { type authRequestForLogIn } from '../types/request/authRequestForLogIn.js'
import { authResponseForLogIn } from '../types/response/authResponseForLogIn.js'
import getToken from '../utils/getToken.js'

export default {
  registerUser: async function registerUser(
    authRequestBody: authRequest
  ): Promise<string | null> {
    const isEmailExists = await userModel.exists({ email: authRequestBody.email })

    if (isEmailExists !== null) {
      return null;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(authRequestBody.password, salt);

    await userModel.create({
        name: authRequestBody.name,
        email: authRequestBody.email,
        password: hashedPassword
    })

    return "Register user successfully"
  },
  logIn: async function logIn(
    authRequestBody: authRequestForLogIn
  ): Promise<authResponseForLogIn | null> {
    const email = authRequestBody.email;
    const password = authRequestBody.password;

    const user = await userModel.findOne({ email: email })

    if (user === null) {
      return null;
    }

    if (user?.password !== undefined && user?.password !== null) {
      const validated = await bcrypt.compare(password, user.password as string);
      
      if (!validated) {
        return null;
      }

      return {
        email: user?.email as string,
        name: user?.name as string,
        tokenId: getToken(user.id)
      }
    } else {
      return null;
    }

  },
}

