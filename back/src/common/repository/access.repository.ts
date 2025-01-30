import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Access } from '../entity/access.entity';

export class AccessRepository extends Repository<Access> {
  constructor(@InjectRepository(Access) roleRepository: Repository<Access>) {
    super(
      roleRepository.target,
      roleRepository.manager,
      roleRepository.queryRunner,
    );
  }
}
