import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createInvestment1605294984517 implements MigrationInterface {

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
            ],
            
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("investment")

    }

}
