import { MigrationInterface, QueryRunner } from "typeorm";

export class ModifyContactEntity1690468469509 implements MigrationInterface {
    name = 'ModifyContactEntity1690468469509'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "full_name" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying(70) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "full_name" character varying NOT NULL`);
    }

}
