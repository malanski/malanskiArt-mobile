import teeSwRedDragon from '../assets/images/products/products_icon/tee_sw_red_dragon.png'
import teeSwOctoColor from '../assets/images/products/products_icon/tee_sw_octo_color.png'
import teeSwOctoColorInv from '../assets/images/products/products_icon/tee_sw_octo_inv.png'
import teeSwButterflyPink from '../assets/images/products/products_icon/tee_sw_butterfly_pink.png'
import teeSwSnake from '../assets/images/products/products_icon/tee_sw_snake.png'
import teeSwGeisha from '../assets/images/products/products_icon/tee_sw_geisha.png'
import teeSwKoi from '../assets/images/products/products_icon/tee_sw_koi_fish_flowers.png'
import teeSwTattoo from '../assets/images/products/products_icon/tee_sw_tattoo_grey.png'

// BiG Images
import teeSwRedDragonBig from '../assets/images/products/products_img/tee_sw_red_dragon.png'
import teeSwRedDragonBlack from '../assets/images/products/products_img/tee_sw_red_dragon_black.png'

import teeSwOctoColorBig from '../assets/images/products/products_img/tee_sw_octo_color.png'
import teeSwOctoColorBlack from '../assets/images/products/products_img/tee_sw_octo_color_black.png'

import teeSwOctoColorInvBig from '../assets/images/products/products_img/tee_sw_octo_inv.png'
import teeSwOctoColorInvBlack from '../assets/images/products/products_img/tee_sw_octo_inv_black.png'

import teeSwButterflyPinkBig from '../assets/images/products/products_img/tee_sw_butterfly_pink.png'
import teeSwButterflyPinkGrey from '../assets/images/products/products_img/tee_sw_butterfly_pink_grey.png'
import teeSwButterflyPinkBlack from '../assets/images/products/products_img/tee_sw_butterfly_pink_black.png'

import teeSwSnakeBig from '../assets/images/products/products_img/tee_sw_snake.png'
import teeSwSnakeGrey from '../assets/images/products/products_img/tee_sw_snake_grey.png'

import teeSwGeishaBig from '../assets/images/products/products_img/tee_sw_geisha.png'
import teeSwGeishaBlack from '../assets/images/products/products_img/tee_sw_geisha_black.png'

import teeSwKoiBig from '../assets/images/products/products_img/tee_sw_koi_fish_flowers.png'
import teeSwKoiBlack from '../assets/images/products/products_img/tee_sw_koi_fish_flowers_black.png'

import teeSwTattooBig from '../assets/images/products/products_img/tee_sw_tattoo.png'
import teeSwTattooGrey from '../assets/images/products/products_img/tee_sw_tattoo_grey.png'
import teeSwTattooBlack from '../assets/images/products/products_img/tee_sw_tattoo_black.png'

export const allSweatArray = [
  teeSwRedDragonBig,
  teeSwRedDragonBlack,
  teeSwOctoColorBig,
  teeSwOctoColorBlack,
  teeSwOctoColorInvBig,
  teeSwOctoColorInvBlack,
  teeSwButterflyPinkBig,
  teeSwButterflyPinkBlack,
  teeSwSnakeBig,
  teeSwSnakeGrey,
  teeSwGeishaBig,
  teeSwGeishaBlack,
  teeSwKoiBig,
  teeSwKoiBlack,
  teeSwTattooBig,
  teeSwTattooBlack,
]

const ItemDescription =
  'Disponível em vários tamanhos, 85% algodão, 15% poliéster'
const category = 'Moletons'
const ItemPrice = 184.9
const ItemOptions = ['Preto', 'Branco', 'Cinza']
const productId = ItemPrice * ItemDescription.length

const SweatShirtsDataList = [
  { id: 1001,
    name: `${category} Dragão Vermelho`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwRedDragon,
    imgSrc: [teeSwRedDragonBig, teeSwRedDragonBlack],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/sweatshirts/dragao-vermelho',
  },
  { id: 1002,
    name: `${category} Octógama Colorido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwOctoColor,
    imgSrc: [teeSwOctoColorBig, teeSwOctoColorBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/crisantemo-octograma-estrela-colorido',
  },
  { id: 1003,
    name: `${category} Octógama Invertido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwOctoColorInv,
    imgSrc: [teeSwOctoColorInvBig, teeSwOctoColorInvBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/crisantemo-octograma-estrela-invertido',
  },
  { id: 1004,
    name: `${category} Borboleta Rosa`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwButterflyPink,
    imgSrc: [
      teeSwButterflyPinkBig,
      teeSwButterflyPinkBlack,
      teeSwButterflyPinkGrey,
    ],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/borboleta-e-rosas-de-afrodite-rosa-lavado',
  },
  { id: 1005,
    name: `${category} Serpente`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwSnake,
    imgSrc: [teeSwSnakeBig, teeSwSnakeGrey],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/sweatshirts/cobra-serpente',
  },
  { id: 1006,
    name: `${category} Geisha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwGeisha,
    imgSrc: [teeSwGeishaBig, teeSwGeishaBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/geisha-na-nuvem-voadora-nanquim-e-lapis-aquarela',
  },
  { id: 1007,
    name: `${category} Carpas`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwKoi,
    imgSrc: [teeSwKoiBig, teeSwKoiBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/geisha-na-nuvem-voadora-nanquim-e-lapis-aquarela',
  },
  { id: 1008,
    name: `${category} Tattoo`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeSwTattoo,
    imgSrc: [teeSwTattooBlack, teeSwTattooBig, teeSwTattooGrey],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/sweatshirts/geisha-na-nuvem-voadora-nanquim-e-lapis-aquarela',
  },
]

export default SweatShirtsDataList
