import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import Category from './Category'
import InvestmentProfile from './InvestmentProfile'
import InvestorProfile from './InvestorProfile';
import UserInvestment from './UserInvestment'

@Entity("investment")
export default class Investment{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  name:string;

  @Column()
  description:string;

  @Column()
  earnings_forecast:number;
  
  @Column()
  hot_long:string;

 @ManyToOne(() => Category, category => category.investments)
 @JoinColumn({ name:"category_id"})
 category:Category;

 @OneToMany(() => InvestmentProfile, investmentProfile => investmentProfile.investment,{
   cascade:['update','insert']
 })
 @JoinColumn({ name:"investment_id"})
 profile: InvestorProfile[];
  
 @OneToMany(() => UserInvestment, userInvestment => userInvestment.investment,{
   cascade:['update','insert']
 })
 @JoinColumn({ name:"investment_id"})
 users: UserInvestment[];
}