import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import User from './User'
import Trail from './Trail'

@Entity("investment_profile")
export default class UserTrail{
  @PrimaryGeneratedColumn('increment')
  id:number;

 @ManyToOne(() => User, user => user.trails)
 @JoinColumn({ name:"user_id"})
 user:User;

 @ManyToOne(() => Trail, trail => trail.users)
 @JoinColumn({ name:"trail_id"})
 trail:Trail;
}