import { User } from '../users/entities/user.entity'; 

declare module 'express' {
  export interface Request {
    user: User;
  }
}