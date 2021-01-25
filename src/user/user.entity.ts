import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ length: 40, unique: true })
  email: string;

  @Column({ length: 256, nullable: false })
  password: string;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 12 })
  phone: string;
}