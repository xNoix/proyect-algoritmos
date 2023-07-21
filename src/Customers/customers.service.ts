import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer, CustomerDocument } from './schemas/customers.schema';
import { Model } from 'mongoose';
import { CustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModule: Model<CustomerDocument>,
  ) {}

  async findCustomerByEmail(email: string): Promise<CustomerDocument> {
    const customer = await this.customerModule.findOne({ email: email });
    return customer;
  }

  async createCustomer(CustomerDto: CustomerDto) {
    const customer = await new this.customerModule(CustomerDto);
    return await customer.save();
  }
}
