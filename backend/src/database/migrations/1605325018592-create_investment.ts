import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createInvestment1605325018592 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"investment",
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
                name: "earnings_forecast",
                type:"decimal",
                precision:2
              },
              
              {
                name: "how_long",
                type:"varchar",
              },
              {
                name: "category_id",
                type:"integer",
              },
              
            ],
            foreignKeys:[
                {
                    name:"categoryId",
                    columnNames: [ "category_id"],
                    referencedTableName:"category_id",
                    referencedColumnNames: ["id"],
                    onUpdate: "CASCADE",
                },
            ]
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("investment")

    }

}
