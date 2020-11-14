import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTask1605327963476 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"task",
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
              },
              {
                name: "instruction",
                type:"varchar",
              },
              
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("task")

    }


}
