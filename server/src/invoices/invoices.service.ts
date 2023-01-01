import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Invoice, InvoiceDocument } from 'src/invoices/schema/invoice.schema';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/invoice.dto';
import { IInvoice } from './interfaces/invoice.interface';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<InvoiceDocument>,
  ) {}

  async create(createInvoiceDto: CreateInvoiceDto): Promise<IInvoice> {
    console.log(mongoose.connection.readyState);

    const createInvoice = await this.invoiceModel.create(createInvoiceDto);
    return createInvoice;
  }

  async findAll(): Promise<IInvoice[]> {
    return this.invoiceModel.find().exec();
  }

  async findOne(invoiceId: string): Promise<IInvoice> {
    return this.invoiceModel.findOne({ invoiceId: invoiceId }).exec();
  }

  async updateOne(
    invoiceId: string,
    updateInvoiceDto: UpdateInvoiceDto,
  ): Promise<void> {
    this.invoiceModel.findOneAndUpdate(
      { invoiceId: invoiceId },
      updateInvoiceDto,
      function (err, doc) {
        if (err) return console.log(err.message);
        return console.log(`success`);
      },
    );
  }

  async updateMany(): Promise<void> {
    const updateDoc = {
      $set: {
        status: 'Not paid',
      },
    };
    const result = await this.invoiceModel.updateMany({}, updateDoc);
    console.log(`Updated ${result.modifiedCount} documents`);
  }

  async deleteOne(invoiceId: string) {
    return this.invoiceModel.deleteOne({ invoiceId: invoiceId });
  }

  async countStatus(): Promise<number> {
    const paidCount = await this.invoiceModel.aggregate([
      { $match: { status: 'Paid' } },
    ]);
    return paidCount.length;
  }
}
