import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { CreateInvoiceDto, UpdateInvoiceDto } from './dto/invoice.dto';
import { IInvoice } from './interfaces/invoice.interface';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoiceService: InvoicesService) {}
  @Get()
  async findAll(): Promise<IInvoice[]> {
    return this.invoiceService.findAll();
  }

  @Get(':invoiceId')
  async findOne(@Param() params): Promise<IInvoice> {
    return this.invoiceService.findOne(params.invoiceId);
  }

  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    if (!createInvoiceDto) return;
    return this.invoiceService.create(createInvoiceDto);
  }

  @Patch(':invoiceId')
  async update(@Param() params, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    if (!updateInvoiceDto) return;
    return this.invoiceService.updateOne(params.invoiceId, updateInvoiceDto);
  }

  @Patch('')
  async updateMany() {
    return this.invoiceService.updateMany();
  }

  @Delete(':invoiceId')
  async delete(@Param() params) {
    return this.invoiceService.deleteOne(params.invoiceId);
  }
}
