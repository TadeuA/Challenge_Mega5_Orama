import {Entity,Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm'
import Investment from './Investment'
import User from './User'

@Entity("user_investment")
export default class UserInvestment{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  amount_invested:number;

  @Column()
  yield:number;

  @ManyToOne(() => Investment, investment => investment.users)
  @JoinColumn({ name:"investment_id"})
  investment:Investment;

  @ManyToOne(() => User, user => user.investments)
  @JoinColumn({ name:"user_id"})
  user:User;
}