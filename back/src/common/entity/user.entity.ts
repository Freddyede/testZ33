import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  email: string;
  @Column()
  cities: string;
  @Column()
  postalCode: string;
  @Column()
  municipalities: string;
  @Column()
  username: string;
  @Column({ nullable: true })
  avatar: string;
  @Column()
  password: string;
  @OneToOne(() => Role)
  @JoinColumn({ name: 'role_id' })
  role: Role;
  @Column({ type: 'datetime', nullable: true })
  created_at: Date;
  @Column({ type: 'datetime', nullable: true })
  updated_at: Date;
}
