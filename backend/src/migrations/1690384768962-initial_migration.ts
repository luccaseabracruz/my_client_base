import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1690384768962 implements MigrationInterface {
    name = 'InitialMigration1690384768962'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(70) NOT NULL, "email" character varying(70) NOT NULL, "password" character varying(120) NOT NULL, "full_name" character varying(120) NOT NULL, "phone_number" character varying NOT NULL, "isAdmin" boolean NOT NULL DEFAULT false, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
