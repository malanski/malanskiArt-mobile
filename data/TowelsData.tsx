import Towels from '../assets/images/products/products_icon/towel_lion.png'
import TowelsTurtle from '../assets/images/products/products_icon/towel_turtle.png'
import TowelsMoon from '../assets/images/products/products_icon/towel_moon_flower.png'
import TowelsVitruvian from '../assets/images/products/products_icon/towel_vitruviano.png'

import TowelsBig from '../assets/images/products/products_img/towel_lion.png'
import TowelsTurtleBig from '../assets/images/products/products_img/towel_turtle.png'
import TowelsMoonBig from '../assets/images/products/products_img/towel_moon_flower.png'
import TowelsVitruvianBig from '../assets/images/products/products_img/towel_vitruviano.png'

const ItemDescription =
  'Toalhas de banho, de praia e de rosto com, tecido felpudo de poliéster'
const category = 'Toalha'
const ItemPrice = 84.9
const ItemOptions = ['Banho/Praia', 'Rosto']
const productId = ItemPrice * ItemDescription.length 

const TowelsDataList = [
  { id: 1201,
    name: `${category} Leão Iluminado`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: Towels,
    imgSrc: [TowelsBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/towels/leao-iluminado',
  },
  { id: 1202,
    name: `${category} Tartaruga`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: TowelsTurtle,
    imgSrc: [TowelsTurtleBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/towels/tartaruga-marinha-nadapontilhismo-azul-aquarela',
  },
  { id: 1203,
    name: `${category} Lua`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: TowelsMoon,
    imgSrc: [TowelsMoonBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/towels/lua-floral-verde',
  },
  { id: 1204,
    name: `${category} Vitruviana`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: TowelsVitruvian,
    imgSrc: [TowelsVitruvianBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/towels/vitruviano',
  },
]

export default TowelsDataList
