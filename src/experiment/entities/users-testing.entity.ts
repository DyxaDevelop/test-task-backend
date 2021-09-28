import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('user-testing')
export class UsersTesting extends BaseEntity {
  @Column({ type: 'varchar', length: 100, nullable: false })
  device_token: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  price: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  button_color: string;
}
