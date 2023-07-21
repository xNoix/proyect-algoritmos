import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class PaymentMethod {
  @Prop({ required: true })
  typePayment: string;

  @Prop({ required: true })
  description: string;
}
const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);

@Schema()
class ShippingAddress {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  zip: string;

  @Prop({ required: true })
  country: string;
}
const ShippingAddressSchema = SchemaFactory.createForClass(ShippingAddress);

export type CustomerDocument = Customer & Document;

@Schema()
export class Customer {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: false, type: PaymentMethodSchema })
  paymentMethods: PaymentMethod[];

  @Prop({ required: false, type: ShippingAddressSchema })
  shippingAddress: ShippingAddress;

  @Prop({ required: false, type: ShippingAddressSchema })
  billingAddress: ShippingAddress;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
