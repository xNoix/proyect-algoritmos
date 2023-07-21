import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { StadisticModule } from './stadistic/stadistic.module';
import { SellersModule } from './sellers/sellers.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    ProductModule,
    CustomersModule,
    OrdersModule,
    StadisticModule,
    SellersModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
