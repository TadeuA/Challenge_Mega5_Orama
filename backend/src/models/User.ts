import {Entity, Column, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate,  ManyToOne, JoinColumn, OneToMany, JoinColumn}from 'typeorm';
import bcrypt from "bcryptjs";
import InvestorProfile from "./InvestorProfile"
import UserInvestment from './UserInvestment';
import UserTask from './UserTask'
import UserTrail from './UserTrail'

@Entity('user')
export default class User{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    nickname: string;
    
    @Column()
    email: string;

    @Column()
    whastsapp: number;

    @Column()
    patrimony: number;

    @Column()
    password: string;

    @Column()
    passwordResetToken: string;

    @Column()
    passwordResetExpires:Date;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    @ManyToOne(() => InvestorProfile, investorProfile => investorProfile.users)
    @JoinColumn({ name: 'profile_id'})
    profile: InvestorProfile;

    @OneToMany(() => UserInvestment, userInvestment => userInvestment.user,{
        cascade:['insert', 'update']
    })
    @JoinColumn({ name:"user_id"})
    investments: UserInvestment[];

    @OneToMany(() => UserTrail, userTrail => userTrail.user,{
        cascade:['insert', 'update']
    })
    @JoinColumn({ name:"user_id"})
    trails: UserTrail[];

    @OneToMany(() => UserTask, userTask => userTask.user,{
        cascade:['insert', 'update']
    })
    @JoinColumn({ name:"user_id"})
    tasks: UserTask[];
}