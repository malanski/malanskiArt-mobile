import BagAbelha from '../assets/images/products/products_icon/bag_abelha.png'
import BagEagle from '../assets/images/products/products_icon/bag_eagle.png'
import BagElephant from '../assets/images/products/products_icon/bag_elephant.png'
import BagVitruviano from '../assets/images/products/products_icon/bag_vitruviano.png'

import BagAbelhaBig from '../assets/images/products/products_img/bag_abelha.png'
import BagEagleBig from '../assets/images/products/products_img/bag_eagle.png'
import BagElephantBig from '../assets/images/products/products_img/bag_elephant.png'
import BagVitruvianoBig from '../assets/images/products/products_img/bag_vitruviano.png'

const ItemDescription =
  'Tamanho: 43 x 45 cm, a impressão é digital frente e verso em tecido sarjado 150gsm 100% poliéster'
const category = 'Bolsa'
const ItemPrice = 89.9
const ItemOptions = ['Alça 30cm', 'Sem zipper']
const productId = ItemPrice * ItemDescription.length 

const TotebagsList = [
  { id: 1101,
    name: `${category} Abelha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: BagAbelha,
    imgSrc: [BagAbelhaBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/totebags/abelha-rainha-preto-e-branco',
  },
  { id: 1102,
    name: `${category} Águia`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: BagEagle,
    imgSrc: [BagEagleBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/totebags/aguia-bate-asas',
  },
  { id: 1103,
    name: `${category} Elefante`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: BagElephant,
    imgSrc: [BagElephantBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/totebags/elefante-espiral-invertido',
  },
  { id: 1104,
    name: `${category} Vitruviano`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: BagVitruviano,
    imgSrc: [BagVitruvianoBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/totebags/vitruviano',
  },
]

export default TotebagsList
