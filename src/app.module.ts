import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/db/data-source';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';
import { SellersModule } from './sellers/sellers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options), // In production use false
    OrdersModule, SellersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
