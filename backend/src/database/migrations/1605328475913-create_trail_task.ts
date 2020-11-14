import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTrailTask1605328475913 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"trail_task",
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
                name: "task_id",
                type:"integer",
              },
              {
                name: "trail_id",
                type:"integer",
              },
              
            ],
            foreignKeys:[
                {
                    name:"trailId",
                    columnNames: [ "trail_id"],
                    referencedTableName:"trail",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"
                },
                {
                    name:"taskID",
                    columnNames: [ "task_id"],
                    referencedTableName:"task",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE"

                },
              
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("trail_task")

    }
}
