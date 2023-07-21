import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class PaymentMethodDto {
  @IsString()
  type: string;

  @IsString()
  description: string;
}

export class AddressDto {
  @IsString()
  street: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsString()
  zip: string;

  @IsString()
  country: string;
}

export class CustomerDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  password: string;

  @ValidateNested({ each: true })
  @IsOptional()
  @Type(() => PaymentMethodDto)
  paymentMethods: PaymentMethodDto[];

  @ValidateNested()
  @IsOptional()
  @Type(() => AddressDto)
  shippingAddress: AddressDto;

  @ValidateNested()
  @IsOptional()
  @Type(() => AddressDto)
  billingAddress: AddressDto;

  createdAt: Date;
  updatedAt: Date;
}
