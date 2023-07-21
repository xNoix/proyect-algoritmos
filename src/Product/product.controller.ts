import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  HttpStatus,
  Res,
  Body,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/')
  async findAll() {
    return this.productService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Post('/create')
  async createProduct(@Res() res, @Body() CreateProductDTO: CreateProductDto) {
    await this.productService.createProduct(CreateProductDTO);
    return res.status(HttpStatus.OK).json({
      message: 'recieved',
    });
  }

  @Delete('/delete')
  async deleteProduct(@Res() res, @Query('productID') productID) {
    const productDeleted = await this.productService.deleteProduct(productID);
    if (!productDeleted) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Product Deleted Succesfully',
      productDeleted,
    });
  }

  @Put('/update')
  async updateProduct(
    @Res() res,
    @Body() CreateProductDTO: CreateProductDto,
    @Query('productID') productID,
  ) {
    const updatedProduct = await this.productService.updateProduct(
      productID,
      CreateProductDTO,
    );
    if (!updatedProduct) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Succesfully',
      updatedProduct,
    });
  }
}
