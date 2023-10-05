import FlopsMandalaRed from '../assets/images/products/products_icon/flipflops_mandala_red.png'
import FlopsSunflower from '../assets/images/products/products_icon/flipflops_sunflower.png'
import FlopsTurtleOrange from '../assets/images/products/products_icon/flipflops_turtle_orange.png'
import FlopsRedWings from '../assets/images/products/products_icon/flipflops_red_wings.png'

import FlopsMandalaRedBig from '../assets/images/products/products_img/flipflops_mandala_red.png'
import FlopsSunflowerBig from '../assets/images/products/products_img/flipflops_sunflower.png'
import FlopsTurtleOrangeBig from '../assets/images/products/products_img/flipflops_turtle_orange.png'
import FlopsRedWingsBig from '../assets/images/products/products_img/flipflops_red_wings.png'

const ItemDescription =
  'Em tamanhos do 23 ao 46. Borracha premium e varias cores de tiras'
const category = 'Chinelo'
const ItemPrice = 79.9
const ItemOptions = ['Tradicional', 'Slim']
const productId = ItemPrice * ItemDescription.length

const FlipflopsDataList = [
  { id: 401,
    name: `${category} Mandala Vermelha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: FlopsMandalaRed,
    imgSrc: [FlopsMandalaRedBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/flipflops/fractal-mandala-preto',
  },
  { id: 402,
    name: `${category} Girassóis`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: FlopsSunflower,
    imgSrc: [FlopsSunflowerBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/flipflops/girassois-e-margaridas-verde-claro',
  },
  { id: 403,
    name: `${category} Tartarugas de Olho`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: FlopsTurtleOrange,
    imgSrc: [FlopsTurtleOrangeBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/flipflops/tartaruga-marinha-pontilhismo-terceiro-olho',
  },
  { id: 404,
    name: `${category} asas para os seus pés`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: FlopsRedWings,
    imgSrc: [FlopsRedWingsBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/flipflops/asas-de-carcara-vermelho-e-branco',
  },
]

export default FlipflopsDataList
