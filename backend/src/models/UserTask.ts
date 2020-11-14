import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import User from './User'
import Task from './Task'

@Entity("investment_profile")
export default class UserTask{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  complete:boolean;

  @ManyToOne(() => User, user => user.tasks)
  @JoinColumn({ name:"user_id"})
  user : User;

  @ManyToOne(() => Task, task => task.users)
  @JoinColumn({ name:"task_id"})
  task : Task;
}