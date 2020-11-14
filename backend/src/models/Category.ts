import {Entity,Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm'
import Investment from './Investment'

@Entity("category")
export default class Category{
  @PrimaryGeneratedColumn('increment')
  id:number;

  @Column()
  name:string;

 @OneToMany(()=> Investment, investment => investment.category,{
   cascade:["insert","update"]
 })
 @JoinColumn({ name:"category_id"})
 investments:Investment[]
}