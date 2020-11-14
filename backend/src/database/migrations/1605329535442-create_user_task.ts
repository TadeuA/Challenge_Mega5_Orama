import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserTask1605329535442 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"user_task",
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
                name: "complete",
                type:"boolean",
                default: false
              },
              {
                name: "user_id",
                type:"integer",
              },
              {
                name: "task_id",
                type:"integer",
              },
              
            ],
            foreignKeys:[
                {
                    name:"taskId",
                    columnNames: [ "task_id"],
                    referencedTableName:"task",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                },
                {
                    name:"userID",
                    columnNames: [ "user_id"],
                    referencedTableName:"user",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"

                },
              
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("task")

    }
}
