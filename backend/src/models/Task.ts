import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import TrailTask from './TrailTask'
import UserTask from './UserTask'

@Entity("investment_profile")
export default class Task{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  name:string;

  @Column()
  instruction:string;

  @OneToMany(() => TrailTask, trailTask => trailTask.task,{
    cascade:['update', 'insert']
  })
  @JoinColumn({ name:"task_id"})
  trails:TrailTask[];

  @OneToMany(() => UserTask, userTask => userTask.task,{
    cascade:['update', 'insert']
  })
  @JoinColumn({ name:"task_id"})
  users: UserTask[];
}