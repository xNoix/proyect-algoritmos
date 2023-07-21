import { Module } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { SellersController } from './sellers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Seller, SellerSchema } from './schemas/seller.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Seller.name, schema: SellerSchema }]),
  ],
  providers: [SellersService],
  controllers: [SellersController],
})
export class SellersModule {}
