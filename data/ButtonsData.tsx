import Buttons from '../assets/images/products/products_icon/buttons_lion.png'
import ButtonsButterfly from '../assets/images/products/products_icon/buttons_butterfly.png'
import ButtonsLionFlower from '../assets/images/products/products_icon/buttons_lion_flower.png'
import Buttonseagle from '../assets/images/products/products_icon/buttons_eagle.png'

import ButtonsBig from '../assets/images/products/products_img/buttons_lion.png'
import ButtonsButterflyBig from '../assets/images/products/products_img/buttons_butterfly.png'
import ButtonsLionFlowerBig from '../assets/images/products/products_img/buttons_lion_flower.png'
import ButtonseagleBig from '../assets/images/products/products_img/buttons_eagle.png'

const ItemDescription =
  'Broches de banho, acabamento em película brilhante de polietileno, fecho	de alfinete em alumínio, 4,5cm de diâmetro'
const category = 'Broche'
const ItemPrice = 9.9
const ItemOptions = ['4,5 centímetros']
const productId = ItemPrice * ItemDescription.length
const ButtonsDataList = [
  { id: 201,
    name: `${category} Leão`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: Buttons,
    imgSrc: [ButtonsBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/buttons/leao-cruz-pontilhismo',
  },
  { id: 202,
    name: `${category} Borboleta`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: ButtonsButterfly,
    imgSrc: [ButtonsButterflyBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/buttons/borboleta-e-rosas-de-afrodite-rosa-lavado',
  },
  { id: 203,
    name: `${category} Leão Floral`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: ButtonsLionFlower,
    imgSrc: [ButtonsLionFlowerBig],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/buttons/leao-floral-espiral',
  },
  { id: 204,
    name: `${category} Águia`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: Buttonseagle,
    imgSrc: [ButtonseagleBig],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/buttons/aguia-na-cabreiragem',
  },
]

export default ButtonsDataList
