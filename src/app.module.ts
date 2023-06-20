import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './config/db/data-source';
import { OrdersModule } from './orders/orders.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options), // In production use false
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
