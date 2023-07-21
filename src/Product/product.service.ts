import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/product.dto';
import { Product, ProductDocument } from './schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModule: Model<ProductDocument>,
  ) {}

  async findAll(): Promise<ProductDocument[]> {
    const product = await this.productModule.find();
    return product;
  }

  async getProduct(productID: string): Promise<ProductDocument> {
    const product = await this.productModule.findById(productID);
    return product;
  }
  async createProduct(CreateProductDTO: CreateProductDto) {
    const product = await new this.productModule(CreateProductDTO);
    return await product.save();
  }

  async deleteProduct(productID: string): Promise<ProductDocument> {
    const deleteProduct = await this.productModule.findByIdAndDelete(productID);
    return deleteProduct;
  }
  async updateProduct(
    productID: string,
    CreateProductDTO: CreateProductDto,
  ): Promise<ProductDocument> {
    const updatedProduct = await this.productModule.findByIdAndUpdate(
      productID,
      CreateProductDTO,
      { new: true },
    );
    return updatedProduct;
  }
}
