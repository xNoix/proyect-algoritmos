import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

@Schema()
class Items {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Product', required: true })
  productId: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  price: number;
}

const ItemsSchema = SchemaFactory.createForClass(Items);

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ required: true })
  orderNumber: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Customer', required: true })
  customerId: Types.ObjectId;

  @Prop({ required: true })
  status: string;

  @Prop({ required: true })
  paymentStatus: string;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop({ required: true })
  shippingAddress: string;

  @Prop({ required: true })
  shippingMethod: string;

  @Prop({ required: true, type: [ItemsSchema] })
  items: Items[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
