import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema()
class topSellingItems {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Product', required: true })
  productId: Types.ObjectId;

  @Prop({ required: true })
  productName: string;

  @Prop({ required: true })
  quantitySold: number;

  @Prop({ required: true })
  revenueGenerated: number;
}

const topSellingItemsSchema = SchemaFactory.createForClass(topSellingItems);

@Schema()
class SalesByCategory {
  @Prop({ required: true })
  categoryName: string;

  @Prop({ required: true })
  totalSales: number;

  @Prop({ required: true })
  totalItemsSold: number;
}

const SalesByCategorySchema = SchemaFactory.createForClass(SalesByCategory);

export type StadisticDocument = Stadistic & Document;

@Schema()
export class Stadistic {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Seller', required: true })
  sellerId: Types.ObjectId;

  @Prop({ required: true })
  year: number;

  @Prop({ required: true })
  month: number;

  @Prop({ required: true })
  totalSales: number;

  @Prop({ required: true })
  totalItemsSold: number;

  @Prop({ required: true, type: [topSellingItemsSchema] })
  topSellingItems: topSellingItems[];

  @Prop({ required: true, type: [SalesByCategorySchema] })
  salesByCategory: SalesByCategory[];
}

export const StadisticSchema = SchemaFactory.createForClass(Stadistic);
