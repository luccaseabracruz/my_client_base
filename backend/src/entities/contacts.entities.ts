import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entities";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 120 })
  full_name: string;

  @Column({ type: "varchar", length: 70 })
  email: string;

  @Column()
  phone_number: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @CreateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}

export { Contact };
