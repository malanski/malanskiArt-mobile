import LegMandala from '../assets/images/products/products_icon/leggings_mandala.png'
import LegTattoSnake from '../assets/images/products/products_icon/leggings_tattoo_snake.png'
import LegLeaves from '../assets/images/products/products_icon/leggings_leaves.png'
import LegSnake from '../assets/images/products/products_icon/leggings_snake.png'

import LegMandalaBig from '../assets/images/products/products_img/leggings_mandala.png'
import LegMandalaBack from '../assets/images/products/products_img/leggings_mandala_back.png'
import LegTattoSnakeBig from '../assets/images/products/products_img/leggings_tattoo_snake.png'
import LegTattoSnakeBack from '../assets/images/products/products_img/leggings_tattoo_snake_back.png'
import LegLeavesBig from '../assets/images/products/products_img/leggings_leaves.png'
import LegLeavesBack from '../assets/images/products/products_img/leggings_leaves_back.png'
import LegSnakeBig from '../assets/images/products/products_img/leggings_snake.png'
import LegSnakeBack from '../assets/images/products/products_img/leggings_snake_back.png'

const ItemDescription =
  'Cós alto e tecido elástico , feita em lycra de poliéster com proteção UV 50 '
const category = 'Leggings'
const ItemPrice = 144.9
const ItemOptions = ['Tamanho Único', '36 ao 44']
const productId = ItemPrice * ItemDescription.length

const LeggingsDataList = [
  { id: 601,
    name: `${category} Mandala`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: LegMandala,
    imgSrc: [LegMandalaBig, LegMandalaBack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/leggings/fractal-mandala-branco',
  },
  { id: 602,
    name: `${category} Tattoo`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: LegTattoSnake,
    imgSrc: [LegTattoSnakeBig, LegTattoSnakeBack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/leggings/cobra-serpente-flores-e-folhas',
  },
  { id: 603,
    name: `${category} Folhas`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: LegLeaves,
    imgSrc: [LegLeavesBig, LegLeavesBack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/leggings/folhagem-floral-verde-marmore',
  },
  { id: 604,
    name: `${category} Serpente`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: LegSnake,
    imgSrc: [LegSnakeBig, LegSnakeBack],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/leggings/cobra-serpente',
  },
]

export default LeggingsDataList
