import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCategoriesInvestment1605295430635 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"categories_investment",
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
                name:"investment_id",
                type: "number",
              },
              {
                name:"category_type_id",
                type: "number",
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
                    name:"CategoryId",
                    columnNames: [ "category_type_id"],
                    referencedTableName:"categories_types",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                }
            ]

        
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories_investment")

    }

}
