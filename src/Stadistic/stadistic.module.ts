import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Stadistic, StadisticSchema } from './schemas/stadistic.schema';
import { StadisticController } from './stadistic.controller';
import { StadisticService } from './stadistic.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Stadistic.name, schema: StadisticSchema },
    ]),
  ],
  controllers: [StadisticController],
  providers: [StadisticService],
})
export class StadisticModule {}
