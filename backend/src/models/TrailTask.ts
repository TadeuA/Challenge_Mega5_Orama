import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne } from 'typeorm'
import Task from './Task'
import Trail from './Trail'
@Entity("investment_profile")
export default class TrailTask{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @ManyToOne(() => Trail, trail => trail.tasks)
  @JoinColumn({ name:"trail_id"})
  trail:Trail;

  @ManyToOne(() => Task, task => task.trails)
  @JoinColumn({ name:"task_id"})
  task:Task;
 
}