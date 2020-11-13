import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategoriesTypes1605295653298 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"categories_types",
            columns:[
              {
                name: "id",
                type: "integer", 
                unsigned:true,
                isPrimary:true,
                isGenerated: true,
                generationStrategy: "increment"
              },
              {
                name: "name",
                type:"varchar",
              }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("investor_profile")

    }
}
