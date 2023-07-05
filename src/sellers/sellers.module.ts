import { Module } from '@nestjs/common';
import { SellersController } from './controllers/sellers.controller';

@Module({
  controllers: [SellersController]
})
export class SellersModule {}
