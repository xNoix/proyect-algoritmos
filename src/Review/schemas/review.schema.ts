import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';

export type ReviewDocumment = Review & Document;

@Schema()
export class Review {
  @Prop({ type: SchemaTypes.ObjectId, ref: 'Product', required: true })
  productId: Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Customer', required: true })
  customerId: Types.ObjectId;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  comment: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
