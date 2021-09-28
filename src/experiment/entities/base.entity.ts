import { PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @CreateDateColumn({ nullable: true })
  createadAt?: Date;

  @CreateDateColumn({ nullable: true })
  updateAt?: Date;
}
