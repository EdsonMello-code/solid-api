import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUser1603725552523 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          isNullable: true,
        },

        {
          name: 'name',
          type: 'varchar',
        },

        {
          name: 'email',
          type: 'varchar',
          isUnique: true
        },

        {
          name: 'password',
          type: 'varchar',
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}
