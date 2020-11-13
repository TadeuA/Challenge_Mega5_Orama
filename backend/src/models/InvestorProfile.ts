import {Entity,Column, PrimaryGeneratedColumn } from 'typeorm'


@Entity("investor_profile")
export default class InvestorProfile{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  name:string;
}