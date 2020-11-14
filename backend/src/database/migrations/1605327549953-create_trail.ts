import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTrail1605327549953 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"trail",
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
                name: "description",
                type:"varchar",
              },
              {
                name: "profile_id",
                type:"integer",
              },
             
            ],
            foreignKeys:[
                {
                    name:"investorType",
                    columnNames: [ "profile_id"],
                    referencedTableName:"investor_profile",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                }
              
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("trail")

    }

}
