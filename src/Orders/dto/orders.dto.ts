import {
  IsMongoId,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @IsMongoId()
  productId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  quantity: number;

  @IsNotEmpty()
  price: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  orderNumber: string;

  @IsMongoId()
  customerId: string;

  @IsNotEmpty()
  @IsString()
  status: string;

  @IsNotEmpty()
  @IsString()
  paymentStatus: string;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  @IsNotEmpty()
  @IsString()
  shippingAddress: string;

  @IsNotEmpty()
  @IsString()
  shippingMethod: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];

  @IsNotEmpty()
  createdAt: Date;

  @IsNotEmpty()
  updatedAt: Date;
}
