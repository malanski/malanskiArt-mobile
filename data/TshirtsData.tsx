import teeRedDragon from '../assets/images/products/products_icon/tee_red_dragon.png'
import teeOctoInv from '../assets/images/products/products_icon/tee_octo_inv.png'
import teeRoseSing from '../assets/images/products/products_icon/tee_rose_sing.png'
import teeKoiFishFlowers from '../assets/images/products/products_icon/tee_koi_fish_flowers.png'
import teeMoon from '../assets/images/products/products_icon/tee_moon_man.png'
import teeElephant from '../assets/images/products/products_icon/tee_elephant.png'
import teeKatana from '../assets/images/products/products_icon/tee_katana.png'
import teeGeoElephant from '../assets/images/products/products_icon/tee_geo_elephant.png'

import teeRedDragonBig from '../assets/images/products/products_img/tee_red_dragon.png'
import teeRedDragonBlack from '../assets/images/products/products_img/tee_red_dragon_black.png'
import teeRedDragonGirlRed from '../assets/images/products/products_img/tee_red_dragon_girl_red.png'
import teeRedDragonGirlBle from '../assets/images/products/products_img/tee_red_dragon_girl_blue.png'

import teeOctoInvBig from '../assets/images/products/products_img/tee_octo_inv.png'
import teeOctoInvBlack from '../assets/images/products/products_img/tee_octo_inv_black.png'
import teeOctoInvGirlGrey from '../assets/images/products/products_img/tee_octo_inv_girl_grey.png'
import teeOctoInvGirlBlue from '../assets/images/products/products_img/tee_octo_inv_girl_blue.png'

import teeKoiFishFlowersBig from '../assets/images/products/products_img/tee_koi_fish_flowers.png'
import teeKoiFishFlowersGreen from '../assets/images/products/products_img/tee_koi_fish_flowers_green.png'
import teeKoiFishFlowersManBlue from '../assets/images/products/products_img/tee_koi_fish_flowers_man_blue.png'
import teeKoiFishFlowersManBlack from '../assets/images/products/products_img/tee_koi_fish_flowers_man_black.png'

import teeRoseSingBig from '../assets/images/products/products_img/tee_rose_sing.png'
import teeRoseSingWhite from '../assets/images/products/products_img/tee_rose_sing_white.png'
import teeRoseSingManRed from '../assets/images/products/products_img/tee_rose_sing_man_red.png'
import teeRoseSingManGrey from '../assets/images/products/products_img/tee_rose_sing_man_grey.png'
import teeMoonBig from '../assets/images/products/products_img/tee_moon_grey.png'
import teeMoonGrey from '../assets/images/products/products_img/tee_moon_black.png'
import teeMoonMan from '../assets/images/products/products_img/tee_moon_man.png'
import teeElephantBig from '../assets/images/products/products_img/tee_elephant.png'
import teeElephantGreen from '../assets/images/products/products_img/tee_elephant_green.png'
import teeKatanaBig from '../assets/images/products/products_img/tee_katana.png'
import teeKatanaMan from '../assets/images/products/products_img/tee_katana_man.png'
import teeGeoElephantBig from '../assets/images/products/products_img/tee_geo_elephant.png'
import teeGeoElephantMan from '../assets/images/products/products_img/tee_geo_elephant_man.png'

export const allTShirtsArray = [
  teeRedDragonBig,
  teeRedDragonBlack,
  teeRedDragonGirlRed,
  teeRedDragonGirlBle,
  teeOctoInvBig,
  teeOctoInvBlack,
  teeOctoInvGirlGrey,
  teeOctoInvGirlBlue,
  teeKoiFishFlowersBig,
  teeKoiFishFlowersGreen,
  teeKoiFishFlowersManBlue,
  teeKoiFishFlowersManBlack,
  teeRoseSingBig,
  teeRoseSingWhite,
  teeRoseSingManRed,
  teeRoseSingManGrey,
  teeMoonBig,
  teeMoonGrey,
  teeMoonMan,
  teeElephantBig,
  teeElephantGreen,
  teeKatanaBig,
  teeKatanaMan,
  teeGeoElephantBig,
  teeGeoElephantMan,
]

const ItemDescription =
  'Camisetas estampadas em varias cores e tamanhos. Impressão da estampa é frontal. Malha fio 30, 100% algodão, nos modelos Regular, Baby Long (mais acinturada e comprida) e e também Infantil (do n°2 ao n°14).'
const category = 'Camiseta'
const ItemPrice = 119.9
const ItemOptions = ['Regular', 'Baby Long', 'Infantil', 'Várias cores']
const productId = ItemPrice * ItemDescription.length 

const TshirtsDataList = [
  { id: 1301,
    name: `${category} Dragão Vermelho`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeRedDragon,
    imgSrc: [
      teeRedDragonBig,
      teeRedDragonBlack,
      teeRedDragonGirlRed,
      teeRedDragonGirlBle,
    ],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/tees/dragao-vermelho',
  },
  { id: 1302,
    name: `${category} Crisântemo Octógama`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeOctoInv,
    imgSrc: [
      teeOctoInvBig,
      teeOctoInvBlack,
      teeOctoInvGirlGrey,
      teeOctoInvGirlBlue,
    ],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/tees/crisantemo-octograma-estrela-invertido',
  },
  { id: 1303,
    name: `${category}  Carpas Flores`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeKoiFishFlowers,
    imgSrc: [
      teeKoiFishFlowersBig,
      teeKoiFishFlowersGreen,
      teeKoiFishFlowersManBlue,
      teeKoiFishFlowersManBlack,
    ],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/tees/peixes-koi-carpas-flores',
  },
  { id: 1304,
    name: `${category} Rosa Singular`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeRoseSing,
    imgSrc: [
      teeRoseSingBig,
      teeRoseSingWhite,
      teeRoseSingManRed,
      teeRoseSingManGrey,
    ],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/tees/rosa-singular',
  },
  { id: 1305,
    name: `${category} Lua Floral`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeMoon,
    imgSrc: [teeMoonMan, teeMoonBig, teeMoonGrey],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/tees/lua-floral-verde',
  },
  { id: 1306,
    name: `${category} Elefante`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeElephant,
    imgSrc: [teeElephantBig, teeElephantGreen],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/tees/geometria-elefante',
  },
  { id: 1307,
    name: `${category} Katana`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeKatana,
    imgSrc: [teeKatanaBig, teeKatanaMan],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/tees/sol-katana-dupla-lapis-aquarela',
  },
  { id: 1308,
    name: `${category} Elefante Áureo`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: teeGeoElephant,
    imgSrc: [teeGeoElephantBig, teeGeoElephantMan],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/tees/elefante-espiral-invertido',
  },
]

export default TshirtsDataList
