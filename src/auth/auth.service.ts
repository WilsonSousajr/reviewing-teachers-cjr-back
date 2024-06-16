import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload: JwtPayload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    return {
      access_token: token,
    };
  }

  async register(createUserDto: CreateUserDto) {
    console.log('Registering user with DTO:', createUserDto);

    const saltRounds = 10;

    if (!createUserDto.password) {
      throw new Error('Password is missing in createUserDto');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

    console.log('Hashed password:', hashedPassword);

    const user = await this.usersService.create({
      ...createUserDto,
      password: hashedPassword,
      picture: createUserDto.picture || '',
    });

    const payload: JwtPayload = { email: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);

    return {
      user,
      access_token: token,
    };
  }

  async findUserById(id: number) {
    return await this.usersService.findOne(id);
  }

  async validatePassword(userId: number, currentPassword: string): Promise<boolean> {
    const user = await this.usersService.findOne(userId);
    if (!user) {
      return false;
    }
    return bcrypt.compare(currentPassword, user.password);
  }
}
