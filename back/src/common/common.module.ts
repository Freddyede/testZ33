import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { Access } from './entity/access.entity';
import { Role } from './entity/role.entity';
import { User } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';
import { RoleRepository } from './repository/role.repository';
import { AccessRepository } from './repository/access.repository';
import { RolesAccessEntity } from './entity/role_access.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...databaseConfig, autoLoadEntities: true }),
    TypeOrmModule.forFeature([RolesAccessEntity, Access, Role, User]),
  ],
  providers: [AccessRepository, RoleRepository, UserRepository],
  exports: [TypeOrmModule.forFeature([RolesAccessEntity, Access, Role, User])],
})
export class CommonModule {}
