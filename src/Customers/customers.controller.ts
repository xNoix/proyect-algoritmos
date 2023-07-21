import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomerDto } from './dto/customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}

  @Get('/find/:email')
  async CustomerByEmail(@Param('email') email: string) {
    return this.customerService.findCustomerByEmail(email);
  }

  @Post('/create')
  async CreateCustomer(@Res() res, @Body() customerDto: CustomerDto) {
    await this.customerService.createCustomer(customerDto);
    return res.status(HttpStatus.OK).json({
      message: 'Customer Created',
    });
  }
}
