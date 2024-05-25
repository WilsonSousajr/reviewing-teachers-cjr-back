import {
  IsBase64,
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
  @IsNotEmpty({ message: 'Precisa de Email!!' })
  @IsEmail()
  email: string;
  @IsNotEmpty({ message: 'Precisa de Senha!!' })
  @IsStrongPassword()
  password: string;
  @IsNotEmpty({ message: 'Precisa de Nome!!' })
  @IsString()
  name: string;
  @IsBase64()
  @IsOptional()
  picture: Buffer;
  @IsString()
  departament: string;
  @IsString()
  course: string;
}
