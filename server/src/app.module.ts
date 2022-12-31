import { MiddlewareConsumer, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { CustomerController } from './customers/customer.controller';
import { CustomerModule } from './customers/customer.module';
import { InvoicesModule } from './invoices/invoices.module';
import { logger } from './logger.middleware';

dotenv.config();
console.log(process.env.DB_CONN_STRING);

@Module({
  imports: [
    CustomerModule,
    MongooseModule.forRoot(`${process.env.DB_CONN_STRING}`),
    InvoicesModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CustomerController);
  }
}
