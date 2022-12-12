import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {
    let dataLength = 6;
    let pageNumber = 1;
    let startPagePosition = pageNumber * dataLength - dataLength;
    let endPagePosition = pageNumber * dataLength;
    endPagePosition =
      this.menu1.length < endPagePosition ? this.menu1.length : endPagePosition;
    for (let i = startPagePosition; i < endPagePosition; i++) {
      this.newDataset.push(this.menu1[i]);
    }
  }
  newDataset: any[] = [];
  public menu1 = [
    {
      id: 1,
      img: '../assets/images/burger.png',
      title: 'Burger',
      price: '6',
      cooktime: '20-30',
    },
    {
      id: 2,
      img: '../assets/images/pizza.jpg',
      title: 'Pizza',
      price: '7',
      cooktime: '20-30',
    },
    {
      id: 3,
      img: '../assets/images/sandwich.jpg',
      title: 'Sandwich',
      price: '3',
      cooktime: '20-30',
    },
    {
      id: 4,
      img: '../assets/images/frankie.jpg',
      title: 'Frankie',
      price: '5',
      cooktime: '20-30',
    },
    {
      id: 5,
      img: '../assets/images/noodles.jpg',
      title: 'Noodles',
      price: '6',
      cooktime: '20-30',
    },
    {
      id: 6,
      img: '../assets/images/pasta.jpg',
      title: 'Pasta',
      price: '4',
      cooktime: '20-30',
    },
    {
      id: 7,
      img: '../assets/images/manchurian.jpg',
      title: 'Manchurian',
      price: '4',
      cooktime: '20-30',
    },
    {
      id: 8,
      img: '../assets/images/fried Rice.jpg',
      title: 'Fried Rice',
      price: '5',
      cooktime: '20-30',
    },
    {
      id: 9,
      img: '../assets/images/momos.jpg',
      title: 'Momos',
      price: '3',
      cooktime: '20-30',
    },
  ];
  loadData(value: number) {
    let dataLength = 6;
    let pageNumber = value;
    let startPagePosition = pageNumber * dataLength - dataLength;
    let endPagePosition = pageNumber * dataLength;
    endPagePosition =
      this.menu1.length < endPagePosition ? this.menu1.length : endPagePosition;
    this.newDataset = [];
    for (let i = startPagePosition; i < endPagePosition; i++) {
      this.newDataset.push(this.menu1[i]);
    }
  }
}
