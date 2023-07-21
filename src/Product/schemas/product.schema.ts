import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  imagesURL: string[];

  @Prop({ required: true })
  categories: string[];

  @Prop()
  manufacturer?: string;

  @Prop()
  brand?: string;

  @Prop({ required: true })
  seller: string;

  @Prop({ required: true })
  stock: number;

  @Prop()
  tags?: string[];

  @Prop()
  reviews?: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
