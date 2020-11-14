import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createInvestmentProfile1605326059188 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"investment_profile",
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
                name: "investment_id",
                type:"integer",
              },
              {
                name: "profile_id",
                type:"integer",
              },
             
            ],
            foreignKeys:[
                {
                    name:"investmentId",
                    columnNames: [ "investment_id"],
                    referencedTableName:"investment",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                },
                {
                    name:"profileID",
                    columnNames: [ "profile_id"],
                    referencedTableName:"investor_profile",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                },
              
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("investment_profile")

    }

}
