import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('access')
export class Access {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
