import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders.controller';
import { OrdersRepositoryService } from './repository/orders-repository.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './entity/orders.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Orders]),
    ],
    controllers: [OrdersController],
    providers: [OrdersRepositoryService]
})
export class OrdersModule { }
