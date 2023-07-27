import { getRounds, hashSync } from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 70, unique: true })
  username: string;

  @Column({ type: "varchar", length: 70, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 120 })
  full_name: string;

  @Column()
  phone_number: string;

  @Column({ type: "boolean", default: false })
  isAdmin: boolean;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @CreateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncripted = getRounds(this.password);

    if (!isEncripted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
