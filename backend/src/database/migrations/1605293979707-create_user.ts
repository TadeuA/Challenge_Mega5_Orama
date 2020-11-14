import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1605293979707 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"user",
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
                name:"name",
                type: "varchar"
              },
              {
                name:"nickname",
                type: "varchar"
              },
              {
                name:"email",
                type: "varchar"
              },
              {
                name:"whastsapp",
                type: "integer"
              },
              {
                name:"password",
                type: "varchar"
              },
              {
                name:"patrimony",
                type: "decimal",
                precision:2
              },
              {
                name:"passwordResetToken",
                type: "varchar",
                default:null,
                isNullable:true
              },
              {
                name:"passwordResetExpires",
                type: "date",
                default: null,
                isNullable:true
              },
              {
                name:"profile_id",
                type: "integer",
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
    await queryRunner.dropTable("user")
        
    }

}
