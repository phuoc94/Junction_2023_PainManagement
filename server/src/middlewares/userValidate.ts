import type { NextFunction, Request, Response } from 'express'
import type { ZodError } from 'zod'

import { userCreateSchema, userUpdateSchema } from '../schemas/usersSchema.js'
import { ApiError } from '../utils/ApiError.js'

export async function validateCreateUser(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  try {
    await userCreateSchema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    next()
  } catch (error) {
    const e = error as ZodError
    const errorMessages: string[] = []
    JSON.parse(e.message).forEach((element: any) => {
      errorMessages.push(element.message)
    })

    next(ApiError.badRequest('Bad request.', errorMessages.join(' ')))
  }
}

export async function validateUpdateUser(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  try {
    await userUpdateSchema.parseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
    })
    next()
  } catch (error) {
    const e = error as ZodError
    const errorMessages: string[] = []
    JSON.parse(e.message).forEach((element: any) => {
      errorMessages.push(element.message)
    })

    next(ApiError.badRequest('Bad request.', errorMessages.join(' ')))
  }
}

export async function validateEmailOrRequestNotEmptyInRegister(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  // Test the email against the regex
  const email = req.body.email
  const name = req.body.name;
  const password = req.body.password;

  if (email.length === 0 || password.length === 0 || name.length === 0) {
    next(ApiError.badRequest('Email or password or name is not given! Please enter again!'))
  }

  if (!emailRegex.test(email)) {
    next(ApiError.badRequest('Email is not valid! Please enter again!'))
  }

  next()
}

export async function validateEmailAndPasswordExists(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  const email = req.body.email;
  const password = req.body.password;

  if (email.length === 0 || password.length === 0) {
    next(ApiError.badRequest('Email or password is not given! Please enter again!'))
  }

  next()
}