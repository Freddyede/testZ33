import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Access } from './access.entity';
import { Role } from './role.entity';

@Entity('roles_access')
export class RolesAccessEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Role, { cascade: false, nullable: true })
  @JoinColumn({ name: 'roles_id' })
  roles: Role;
  @ManyToOne(() => Access, { cascade: false, nullable: true })
  @JoinColumn({ name: 'access_id' })
  access: Access;
}
