import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entity/orders.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Orders]),
    ],
    controllers: [OrdersController],
    providers: [OrdersService]
})
export class OrdersModule { }
