import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../common/repository/user.repository';
import { UserDto } from '../../common/dto/user.dto';
import { genSalt, hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../common/entity/user.entity';
import { Role } from '../../common/entity/role.entity';
import { RoleRepository } from '../../common/repository/role.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Role) private roleRepository: RoleRepository,
    @InjectRepository(User) private userRepository: UserRepository,
  ) {}

  async register(user: UserDto) {
    try {
      user.password = await hash(user.password, await genSalt(10));
      user.created_at = new Date();
      user.updated_at = new Date();
      user.role =
        user.email == 'root@gmail.com'
          ? await this.roleRepository.findOneBy({ id: 1 })
          : await this.roleRepository.findOneBy({ id: 2 });
      await this.userRepository.save(user);
      return {
        message: 'User created successfully.',
        statut: 201,
      };
    } catch (error) {
      return {
        message: 'User already exist',
        status: 500,
      };
    }
  }
}
