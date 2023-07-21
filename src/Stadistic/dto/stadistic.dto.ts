import { Type } from 'class-transformer';
import { IsMongoId, IsNumber, IsString, ValidateNested } from 'class-validator';

class topSellingItems {
    @IsMongoId()
  productId: string;

  @IsString()
  productName: string;

  @IsNumber()
  quantitySold: number;

  @IsNumber()
  revenueGenerated: number;
}

class salesByCategory {
  @IsString()
  categoryName: string;

  @IsNumber()
  totalSales: number;

  @IsNumber()
  totalItemsSold: number;
}

export class StadisticDto {
  @IsMongoId()
  sellerId: string;

  @IsNumber()
  year: number;

  @IsNumber()
  month: number;

  @IsNumber()
  totalSales: number;

  @IsNumber()
  totalItemsSold: number;

  @ValidateNested()
  @Type(() => topSellingItems)
  topSellingItems: topSellingItems;

  @ValidateNested()
  @Type(() => salesByCategory)
  salesByCategory: salesByCategory[];
}
