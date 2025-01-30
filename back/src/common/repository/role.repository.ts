import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '../entity/role.entity';

export class RoleRepository extends Repository<Role> {
  constructor(@InjectRepository(User) roleRepository: Repository<Role>) {
    super(
      roleRepository.target,
      roleRepository.manager,
      roleRepository.queryRunner,
    );
  }
}
