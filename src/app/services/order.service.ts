import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor() {
    let dataLength = 6;
    let page = 1;
    let startPagePosition = page * dataLength - dataLength;
    let endPagePosition = page * dataLength;
    endPagePosition =
      this.orders.length < endPagePosition
        ? this.orders.length
        : endPagePosition; //For last row

    for (let con = startPagePosition; con < endPagePosition; con++) {
      this.newDataset.push(this.orders[con]);
    }
  }
  newDataset: any[] = [];
  public orders = [
    {
      OrderNumber: 16118,
      OrderDate: '8/3/2019 20:25',
      ItemName: 'Pizza',
      Quantity: 2,
      ProductPrice: 14,
      Totalproducts: 6,
    },
    {
      OrderNumber: 16119,
      OrderDate: '5/3/2019 20:25',
      ItemName: 'Burger',
      Quantity: 1,
      ProductPrice: 6,
      Totalproducts: 6,
    },
    {
      OrderNumber: 16120,
      OrderDate: '8/5/2018 20:25',
      ItemName: 'Noodles',
      Quantity: 1,
      ProductPrice: 6,
      Totalproducts: 6,
    },

    {
      OrderNumber: 16121,
      OrderDate: '8/13/2015 20:25',
      ItemName: 'Frankie',
      Quantity: 1,
      ProductPrice: 5,
      Totalproducts: 6,
    },
    {
      OrderNumber: 16122,
      OrderDate: '8/3/2019 20:25',
      ItemName: 'Sandwich',
      Quantity: 5,
      ProductPrice: 15,
      Totalproducts: 6,
    },
    {
      OrderNumber: 16123,
      OrderDate: '8/3/2019 10:25',
      ItemName: 'Pasta',
      Quantity: 3,
      ProductPrice: 12,
      Totalproducts: 6,
    },

    {
      OrderNumber: 16124,
      OrderDate: '8/3/2019 20:17',
      ItemName: 'Plain Naan',
      Quantity: 1,
      ProductPrice: 2.6,
      Totalproducts: 7,
    },
    {
      OrderNumber: 16125,
      OrderDate: '8/3/2019 20:17',
      ItemName: 'Mushroom Rice',
      Quantity: 1,
      ProductPrice: 3.95,
      Totalproducts: 7,
    },
    {
      OrderNumber: 16126,
      OrderDate: '8/3/2019 20:17',
      ItemName: 'Tandoori Chicken (1/4)',
      Quantity: 1,
      ProductPrice: 4.95,
      Totalproducts: 7,
    },

    {
      OrderNumber: 16127,
      OrderDate: '8/3/2019 20:17',
      ItemName: 'Vindaloo - Lamb',
      Quantity: 1,
      ProductPrice: 7.95,
      Totalproducts: 7,
    },
  ];
  loadPage(page: number) {
    let dataLength = 6;
    // let pageNumber = 2;
    let startPagePosition = page * dataLength - dataLength;
    let endPagePosition = page * dataLength;
    endPagePosition =
      this.orders.length < endPagePosition
        ? this.orders.length
        : endPagePosition;
    this.newDataset = [];
    for (let con = startPagePosition; con < endPagePosition; con++) {
      this.newDataset.push(this.orders[con]);
    }
  }
}
