import {Entity,Column, PrimaryGeneratedColumn, JoinColumn, OneToMany,  ManyToOne, OneToOne} from 'typeorm'
import User from './User'
import InvestmentProfile from './InvestmentProfile'
import Trail from './Trail'

@Entity("investor_profile")
export default class InvestorProfile{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  name:string;

  @OneToMany(() => User, user => user.profile,{
    cascade:['update', 'insert']
  })
  @JoinColumn({ name:"profile_id"})
  users:User[];

  @OneToMany(() => InvestmentProfile, investmentProfile => investmentProfile.profile,{
    cascade:['update', 'insert']
  })
  @JoinColumn({ name:"profile_id"})
  investments: InvestmentProfile[];

  @OneToOne(() => Trail, trail => trail.profile,{
    cascade:['update', 'insert']
  })
  @JoinColumn({ name:"profile_id"})
  trail: Trail

}