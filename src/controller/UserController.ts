import User from '../model/User'
import * as jwt from 'jsonwebtoken'
import * as bcryptjs from 'bcryptjs'
import { Request, Response } from "express";

function generateToken (params = {}) {
  return jwt.sign({ params }, process.env.SECRET, {
    expiresIn: 86400
  })
}

export async function UserCreate (request, response) {
  try {
    const user = await User.create(request.body)
    user.password = undefined
    return response.json({ user, token: generateToken({ id: user.id }) })
  } catch (err) {
    return response
      .status(400)
      .send({ error: 'Bad Request', errorMessage: err })
  }
}
export async function AuthenticateEmail(request: Request, response: Response) {
    const { email, password } = request.body;
    try {
        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return response.status(400).send({ error: "User not Found" });
        }

        if (!(await bcryptjs.compare(password, user.password))) {
            return response.status(400).send({ error: "Senha Invalida" });
        }
        user.password = undefined;
        response.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {}
}
