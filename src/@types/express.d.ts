declare namespace Express {
  interface Request {
    userId: string,
    id: string,
    user: User
  }
}