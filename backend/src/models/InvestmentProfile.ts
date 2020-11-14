import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm'
import Investment from './Investment'
import InvestorProfile from './InvestorProfile'

@Entity("investment_profile")
export default class InvestmentProfile{
  @PrimaryGeneratedColumn('increment')
  id:number;

 @ManyToOne(() => Investment, investment => investment.profile)
 @JoinColumn({ name:"investment_id"})
 investment:Investment;

@ManyToOne(() => InvestorProfile, investorProfile => investorProfile.investments)
@JoinColumn({ name:"profile_id"})
profile: InvestorProfile;


}