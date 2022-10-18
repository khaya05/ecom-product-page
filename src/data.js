import {
  product_1,
  product_2,
  product_3,
  product_4,
  product_1_thumb,
  product_2_thumb,
  product_3_thumb,
  product_4_thumb,
} from './assets';

import { nanoid } from 'nanoid';

export const images = [
  {
    id: nanoid(),
    name: 'product_1',
    url: product_1,
    thumb: product_1_thumb,
  },
  {
    id: nanoid(),
    name: 'product_2',
    url: product_2,
    thumb: product_2_thumb,
  },
  {
    id: nanoid(),
    name: 'product_3',
    url: product_3,
    thumb: product_3_thumb,
  },
  {
    id: nanoid(),
    name: 'product_4',
    url: product_4,
    thumb: product_4_thumb,
  },
];

export const links = ['collection', 'men', 'women', 'about', 'contact'];

// export const products = [
//   {
//     id: nanoid(),
//     name: 'fall limited edition sneakers',
//     originalPrice: 250,
//     discount: 50,
//     currentPrice: this.originalPrice * (this.discount / 100),
//     desc: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
//   },
// ];
