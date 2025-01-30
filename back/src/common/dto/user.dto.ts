import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsStrongPassword,
} from 'class-validator';
import { Role } from '../entity/role.entity';

export class UserDto {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  cities: string;
  @IsNotEmpty()
  postalCode: string;
  @IsNotEmpty()
  municipalities: string;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  avatar: string;
  @IsStrongPassword({
    minLength: 8,
    minLowercase: 2,
    minNumbers: 2,
    minSymbols: 2,
    minUppercase: 2,
  })
  password: string;
  @IsEmpty()
  token: string;
  @IsEmpty()
  role: Role;
  @IsEmpty()
  updated_at: Date;
  @IsEmpty()
  created_at: Date;
}
