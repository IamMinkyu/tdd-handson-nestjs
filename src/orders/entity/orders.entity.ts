
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { v1 as uuid } from 'uuid';

export enum OrderStatus  {
    Pending,
    AwaitingPayment,
    AwaitingShipment,
    Completed,
}

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    sequence: number

    @Column()
    userId: string

    @Column()
    shopId: string
    
    @Column()
    shopName: string

    @Column()
    itemId: string

    @Column()
    price: number

    @Column({
        type: "int",
        enum: OrderStatus,
        default: OrderStatus.Pending
    })
    status: OrderStatus

    @Column()
    paymentTransactionId: string

    @Column()
    placedAtUtc: Date

    @Column()
    startedAtUtc?: Date

    @Column()
    paidAtUtc?: Date
    
    @Column()
    shippedAtUtc: Date;
}