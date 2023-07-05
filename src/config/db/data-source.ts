import { Module } from "@nestjs/common";
import { OrderStatus, Orders } from "src/orders/entity/orders.entity";
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: 'postgres', 
    host: 'localhost',
    port: 5432, // By default
    username: 'postgres',
    password: 'hanghaeplus',
    database: 'postgres',
    entities: [Orders],
    synchronize: true,
   });

AppDataSource.initialize()
    .then((db) => {
        console.log('db connection success!');
        const orderRepository = db.manager.getRepository(Orders);
        let order = new Orders(); 
        order.sequence = 1;
        order.userId = 'user-001';
        order.shopName = '흑심돈까스';
        order.status = OrderStatus.AwaitingPayment;
        orderRepository.save(order);
    })
    .catch((err) => {
        console.log('db connection failed');
    })