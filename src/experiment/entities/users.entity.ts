import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('users')
export class Users extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  device_token: string;
}
