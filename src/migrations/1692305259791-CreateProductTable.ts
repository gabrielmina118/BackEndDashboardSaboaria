import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProductTable1692305259791 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'photo',
            type: 'varchar',
          },
          {
            name: 'price',
            type: 'decimal',
          },
          {
            name: 'quantity',
            type: 'integer',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'size',
            type: 'varchar',
          },
          {
            name: 'categorieId',
            type: 'uuid',
          },
          {
            name: 'essenceId',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
