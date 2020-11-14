import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserTrail1605329235631 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"user_trail",
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
                name: "user_id",
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
        await queryRunner.dropTable("user_trail")

    }
}
