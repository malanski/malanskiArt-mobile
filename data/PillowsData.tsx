import PillowGeisha from '../assets/images/products/products_icon/pillow_geisha.png'
import PillowKoi from '../assets/images/products/products_icon/pillow_koi.png'
import PillowRose from '../assets/images/products/products_icon/pillow_rose.png'
import PillowElephant from '../assets/images/products/products_icon/pillow_elephant.png'
import PillowTartaruga from '../assets/images/products/products_icon/pillow_tartaruga.png'
import PillowGirassois from '../assets/images/products/products_icon/pillow_girassois.png'
import PillowLibelula from '../assets/images/products/products_icon/pillow_libelula.png'
import PillowBesouro from '../assets/images/products/products_icon/pillow_besouro.png'

import PillowGeishaBig from '../assets/images/products/products_img/pillow_geisha.png'
import PillowKoiBig from '../assets/images/products/products_img/pillow_koi.png'
import PillowRoseBig from '../assets/images/products/products_img/pillow_rose.png'
import PillowElephantBig from '../assets/images/products/products_img/pillow_elephant.png'
import PillowTartarugaBig from '../assets/images/products/products_img/pillow_tartaruga.png'
import PillowGirassoisBig from '../assets/images/products/products_img/pillow_girassois.png'
import PillowLibelulaBig from '../assets/images/products/products_img/pillow_libelula.png'
import PillowBesouroBig from '../assets/images/products/products_img/pillow_besouro.png'

export const allPillowArray = [
  PillowGeishaBig,
  PillowKoiBig,
  PillowRoseBig,
  PillowElephantBig,
  PillowTartarugaBig,
  PillowGirassoisBig,
  PillowLibelulaBig,
  PillowBesouroBig,
]

const ItemDescription =
  'Fofinhas, antialérgicas, zíper invisível, macias e 100% poliéster'
const category = 'Almofadas'
const ItemPrice = 79.9
const ItemOptions = ['40x40cm', '50x50cm']
const productId = ItemPrice * ItemDescription.length
const PillowsDataList = [
  { id: 801,
    name: `${category} Geisha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: PillowGeisha,
    imgSrc: [PillowGeishaBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/pillows/geisha-na-nuvem-voadora-nanquim-e-lapis-aquarela',
  },
  { id: 802,
    name: `${category}  Carpas`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: PillowKoi,
    imgSrc: [PillowKoiBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/pillows/peixes-carpas-flores-koi-colorido',
  },
  { id: 803,
    name: `${category}  Rosa`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: PillowRose,
    imgSrc: [PillowRoseBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/pillows/rosa-grande-rosa-cristal',
  },
  { id: 804,
    name: `${category}  Elefante`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: PillowElephant,
    imgSrc: [PillowElephantBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/pillows/elefante-espiral-invertido',
  },
  { id: 805,
    name: `${category}  Tartaruga`,
    description: ItemDescription,
    options: ['45x30cm', 'Capa', 'Enchimento'],
    iconSrc: PillowTartaruga,
    imgSrc: [PillowTartarugaBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/rectangular-pillows/tartaruga-marinha-pontilhismo-terceiro-olho',
  },
  { id: 806,
    name: `${category}  Girassóis`,
    description: ItemDescription,
    options: ['45x30cm', 'Capa', 'Enchimento'],
    iconSrc: PillowGirassois,
    imgSrc: [PillowGirassoisBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/rectangular-pillows/girassois-e-margaridas-cheio-verde',
  },
  { id: 807,
    name: `${category}  Libélula`,
    description: ItemDescription,
    options: ['45x30cm', 'Capa', 'Enchimento'],
    iconSrc: PillowLibelula,
    imgSrc: [PillowLibelulaBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/rectangular-pillows/libelula-na-floresta',
  },
  { id: 808,
    name: `${category}  Besouro`,
    description: ItemDescription,
    options: ['45x30cm', 'Capa', 'Enchimento'],
    iconSrc: PillowBesouro,
    imgSrc: [PillowBesouroBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/rectangular-pillows/grande-besouro-voador-magenta-viva',
  },
]

export default PillowsDataList
