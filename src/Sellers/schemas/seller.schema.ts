import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class Identification {
  @Prop({ required: true })
  typeIdentity: string;

  @Prop({ required: true })
  rut: string;
}

const IdentificationSchema = SchemaFactory.createForClass(Identification);

@Schema()
class Address {
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

const AddressSchema = SchemaFactory.createForClass(Address);

@Schema()
class Data {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  rut: string;

  @Prop({ required: true })
  bankName: string;

  @Prop({ required: true })
  typeAccount: string;

  @Prop({ required: true })
  accountNumber: number;

  @Prop({ required: true })
  email: string;
}

const DataSchema = SchemaFactory.createForClass(Data);

@Schema()
class paymentMethods {
  @Prop({ required: true })
  typePayment: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true, type: DataSchema })
  data: Data;
}

const paymentMethodsSchema = SchemaFactory.createForClass(paymentMethods);

export type SellerDocument = Seller & Document;

@Schema()
export class Seller {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true, type: IdentificationSchema })
  identification: Identification;

  @Prop({ required: true, type: AddressSchema })
  address: Address;

  @Prop({ required: true, type: [paymentMethodsSchema] })
  paymentDetails: paymentMethods[];

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
