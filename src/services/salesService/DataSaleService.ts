import { prisma } from "../../prisma";

interface DataItems {
  id: number;
  ean: string;
  description: string;
  quantity: number;
};

interface DataSaleRequest {
  totalValue: number,
  paymentMethod: string,
  discount: number,
  cashChange: number,
  sellerId: number,
  items: Array<DataItems>
}

export class DataSaleService {
  async execute({ totalValue, paymentMethod, discount, cashChange, sellerId, items }: DataSaleRequest) {
    const dataSales = await prisma.dataSale.create({
      data: {
        totalValue,
        paymentMethod,
        discount,
        cashChange,
        sellerId,
        items: {
          create: items.map(item => ({
            ean: item.ean,
            description: item.description,
            quantity: item.quantity,
          }))
        },
      },
      include: {
        items: true, // This will include the items in the returned dataSales object
      },
    });

    return dataSales;
  }
}