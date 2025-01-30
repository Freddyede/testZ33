import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'text', nullable: false })
  token: string;
  @Column({ type: 'datetime', nullable: true })
  token_at: Date; // refresh token date
}
