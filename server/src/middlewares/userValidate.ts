import type { NextFunction, Request, Response } from 'express'
import type { ZodError } from 'zod'

import userModel from '../models/userModel.js'
import { userCreateSchema, userUpdateSchema } from '../schemas/usersSchema.js'
import { type User } from '../types/User.js'
import { ApiError } from '../utils/ApiError.js'
import decodeTokenToGetId from '../utils/DecodeTokenToGetId.js'

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
  const name = req.body.name
  const password = req.body.password

  if (email === undefined || password === undefined || name === undefined) {
    next(ApiError.internal('Invalid email or password or name!'))
  }
  if (email?.length === 0 || password?.length === 0 || name?.length === 0) {
    next(
      ApiError.badRequest(
        'Email or password or name is not given! Please enter again!'
      )
    )
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
  const email = req.body.email
  const password = req.body.password

  if (email === undefined || password === undefined) {
    next(ApiError.internal('Invalid email or password!'))
  }

  if (email?.length === 0 || password?.length === 0) {
    next(
      ApiError.badRequest('Email or password is not given! Please enter again!')
    )
  }

  next()
}

export async function verifyTokenToAuthorizeAdmin(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  let token

  if (
    req.headers.authorization != null &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = decodeTokenToGetId(token)

      const user = (await userModel
        .findById(decoded?.id)
        .select('-password')) as User

      const role = user?.role

      if (role === null) {
        next(
          ApiError.unauthorized(
            'You provided an invalid token! You are basically not authorized to access any routes!'
          )
        )
      }

      if (role !== 'admin') {
        next(
          ApiError.unauthorized(
            'You are not an admin! You cannot be allowed to access this!'
          )
        )
      }

      req.params.userId = user?.id
      next()
    } catch (error) {
      next(
        ApiError.unauthorized(
          'No API token is provided or there is something wrong with token to decode!'
        )
      )
    }
  } else {
    next(ApiError.unauthorized('No API token is provided!'))
  }
}

export async function verifyTokenToAuthorizeUser(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  let token

  if (
    req.headers.authorization != null &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = decodeTokenToGetId(token)

      const user = (await userModel
        .findById(decoded?.id)
        .select('-password')) as User

      const role = user?.role

      if (role === null) {
        next(
          ApiError.unauthorized(
            'You provided an invalid token! You are basically not authorized to access any routes!'
          )
        )
      }
      req.params.userId = user?.id
      next()
    } catch (error) {
      next(
        ApiError.unauthorized(
          'No API token is provided or there is something wrong with token to decode!'
        )
      )
    }
  } else {
    next(ApiError.unauthorized('No API token is provided!'))
  }
}
