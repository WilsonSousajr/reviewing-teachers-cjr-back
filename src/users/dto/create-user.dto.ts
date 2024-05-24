import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsInt()
  id: number;
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'Precisa de Senha!!' })
  @IsStrongPassword()
  password: string;
  @IsString()
  name: string;
  @IsString()
  @IsOptional()
  picture: string;
  @IsString()
  departament: string;
  @IsString()
  course: string;
}
