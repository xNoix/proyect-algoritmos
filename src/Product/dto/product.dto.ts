import { IsString, IsNumber, IsArray } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsArray()
  imagesURL: string[];

  @IsArray()
  categories: string[];

  @IsString()
  manufacturer: string;

  @IsString()
  brand: string;

  @IsString()
  seller: string;

  @IsNumber()
  stock: number;

  @IsArray()
  tags: string[];

  @IsArray()
  reviews: string[];

  createdAt: Date;
}
