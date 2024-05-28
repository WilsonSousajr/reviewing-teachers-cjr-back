import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Precisa de Email!!' })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'Precisa de Senha!!' })
  @IsStrongPassword()
  password: string;
  @IsNotEmpty({ message: 'Precisa de Nome!!' })
  @IsString()
  name: string;
  @IsOptional()
  picture: string;
  @IsString()
  departament: string;
  @IsString()
  course: string;
}
