import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUserInvestment1605326898219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"user_investment",
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
                name: "user_id",
                type:"integer",
              },
              {
                name: "amount_invested",
                type:"decimal",
                precision:2
              },
              {
                name: "yield",
                type:"decimal",
                precision:2
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
                    name:"userID",
                    columnNames: [ "user_id"],
                    referencedTableName:"user",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                },
              
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_investment")

    }

}
