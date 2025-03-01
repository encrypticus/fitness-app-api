import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableExercises1736086507264 implements MigrationInterface {
  name = 'CreateTableExercises1736086507264';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "exercises" ("id" SERIAL NOT NULL, "bodyPart" json NOT NULL, "equipment" json NOT NULL, "gifUrl" character varying NOT NULL, "name" json NOT NULL, "target" json NOT NULL, "secondaryMuscles" json NOT NULL, "instructions" json NOT NULL, CONSTRAINT "PK_c4c46f5fa89a58ba7c2d894e3c3" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "exercises"`);
  }
}
