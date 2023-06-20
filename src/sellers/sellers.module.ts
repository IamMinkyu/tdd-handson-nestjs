import { Module } from '@nestjs/common';
import { SellersController } from './sellers.controller';

@Module({
  controllers: [SellersController]
})
export class SellersModule {}
