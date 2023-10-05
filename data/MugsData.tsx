import MugsMandalaRed from '../assets/images/products/products_icon/mugs_rose_white.png'
import MugsSunflower from '../assets/images/products/products_icon/mugs_firefly.png'
import MugsTurtleOrange from '../assets/images/products/products_icon/mugs_bee_black.png'
import MugsRedWings from '../assets/images/products/products_icon/mugs_eagle_wings.png'

import MugsMandalaRedBig from '../assets/images/products/products_img/mugs_rose_white.png'
import MugsMandalaRedBack from '../assets/images/products/products_img/mugs_rose_white_back.png'
import MugsSunflowerBig from '../assets/images/products/products_img/mugs_firefly.png'
import MugsSunflowerBack from '../assets/images/products/products_img/mugs_firefly_back.png'
import MugsTurtleOrangeBig from '../assets/images/products/products_img/mugs_bee_black.png'
import MugsTurtleOrangeBack from '../assets/images/products/products_img/mugs_bee_black_back.png'
import MugsRedWingsBig from '../assets/images/products/products_img/mugs_eagle_wings.png'
import MugsRedWingsBack from '../assets/images/products/products_img/mugs_eagle_wings_back.png'

const ItemDescription =
  'Alça anti-térmica. Pode ir ao micro-ondas, freezer e lava-louças'
const category = 'Caneca'
const ItemPrice = 64.9
const ItemOptions = ['300ml', 'Cerâmica premium']
const productId = ItemPrice * ItemDescription.length

const MugsDataList = [
  { id: 701,
    name: `${category} Rosa`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: MugsMandalaRed,
    imgSrc: [MugsMandalaRedBig, MugsMandalaRedBack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/mugs/rosa-grande-rosa-cristal',
  },
  { id: 702,
    name: `${category} Libélula`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: MugsSunflower,
    imgSrc: [MugsSunflowerBig, MugsSunflowerBack],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/mugs/libelulas-branco',
  },
  { id: 703,
    name: `${category} Abelha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: MugsTurtleOrange,
    imgSrc: [MugsTurtleOrangeBig, MugsTurtleOrangeBack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/mugs/abelha-rainha-preto-e-branco',
  },
  { id: 704,
    name: `${category} Águia`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: MugsRedWings,
    imgSrc: [MugsRedWingsBig, MugsRedWingsBack],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/mugs/aguia-bate-asas',
  },
]

export default MugsDataList
