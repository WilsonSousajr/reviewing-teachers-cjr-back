import { Controller, Post, Body, UseInterceptors, UploadedFile, UseGuards, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return this.authService.login(req.user);
  }

  @Post('register')
  @UseInterceptors(FileInterceptor('picture', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
      },
    }),
  }))
  async register(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log('Received createUserDto:', createUserDto);
    console.log('Received file:', file);
    
    if (file) {
      createUserDto.picture = file.filename;
    }

    return this.authService.register(createUserDto);
  }

  @Post('validate-password')
  async validatePassword(@Body() body: { userId: number; currentPassword: string }) {
    const isValid = await this.authService.validatePassword(body.userId, body.currentPassword);
    return { valid: isValid };
  }
}
