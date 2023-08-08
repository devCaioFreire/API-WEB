import { prisma } from "../../prisma";

interface DataItems {
  id: number;
  ean: number;
  description: string;
  // DataSale    DataSale ? @relation(fields: [dataSaleId], references: [id])
  dataSaleId: number;
};

interface DataSaleRequest {
  id: number,
  totalValue: number,
  paymentMethod: string,
  discount: number,
  cashChange: number,
  sellerId: number,
  items: Array<DataItems>
}

export class DataSaleService {
  async execute({ id, totalValue, paymentMethod, discount, cashChange, sellerId, items }: DataSaleRequest) {
    const formattedItems = items.map(item => ({
      id: item.id,
      ean: item.ean,
      description: item.description,
    }));

    const dataSales = await prisma.dataSale.create({
      data: {
        id,
        totalValue,
        paymentMethod,
        discount,
        cashChange,
        sellerId,
        items: {
          create: formattedItems
        },
      },
      select: {
        id: true,
        totalValue: true,
        paymentMethod: true,
        discount: true,
        cashChange: true,
        sellerId: true,
        items: true
      },
    });

    return dataSales;
  }
}