import { Module } from "@nestjs/common";
import { Orders } from "src/orders/entity/orders.entity";
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
    .then(() => {
        console.log('db connection success!');
    })
    .catch((err) => {
        console.log('db connection failed');
    })