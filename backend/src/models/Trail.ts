import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, OneToOne } from 'typeorm'
import InvestorProfile from './InvestorProfile'
import TrailTask from './TrailTask'
import UserTrail from './UserTrail'

@Entity("investment_profile")
export default class Trail{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  name:string;

  @Column()
  description:string;

  @OneToOne(() => InvestorProfile, investorProfile => investorProfile.trail)
  @JoinColumn({ name: "profile_id"})
  profile: InvestorProfile;

  @OneToMany(() => TrailTask, trailTask => trailTask.trail,{
    cascade:['update', 'insert']
  })
  @JoinColumn({ name :"tr;ail_id"})
  tasks:TrailTask[];

  @OneToMany(() => UserTrail, userTrail => userTrail.trail,{
    cascade:['update', 'insert']
  })
  @JoinColumn({ name : "trail_id"})
  users: UserTrail[];

}