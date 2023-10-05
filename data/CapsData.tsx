import boneAbelhaPb from '../assets/images/products/products_icon/bone_abelha_pb.png'
import boneCrisantemoHex from '../assets/images/products/products_icon/bone_crisantemo_hexa.png'
import boneHexaInv from '../assets/images/products/products_icon/bone_hexa_inv.png'
import boneOctaInv from '../assets/images/products/products_icon/bone_octo_inv.png'

import boneAbelhaPbBig from '../assets/images/products/products_img/bone_abelha_pb.png'
import boneAbelhaPbBlack from '../assets/images/products/products_img/bone_abelha_black.png'
import boneCrisantemoHexBig from '../assets/images/products/products_img/crisantemo_hexa.png'
import boneCrisantemoHexBlack from '../assets/images/products/products_img/crisantemo_hexa_black.png'
import boneHexaInvBig from '../assets/images/products/products_img/bone_hexa_inv.png'
import boneHexaInvBlue from '../assets/images/products/products_img/bone_hexa_inv-Blue.png'
import boneOctaInvBig from '../assets/images/products/products_img/bone_octo_inv.png'
import boneOctaInvRed from '../assets/images/products/products_img/bone_octo_inv_red.png'

const ItemDescription =
  'Bonés em brim, estampados com arte minimalista disponível em diversas cores no modelo americano de aba anatômica.'
const category = 'Boné'
const ItemPrice = 99.9
const ItemOptions = ['preto', 'branco', 'azul', 'vermelho', 'rosa']
const productId = ItemPrice * ItemDescription.length

const CapsDataList = [
  { id: 301,
    name: `${category} Abelha Rainha`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: boneAbelhaPb,
    imgSrc: [boneAbelhaPbBig, boneAbelhaPbBlack],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/caps/abelha-rainha-preto-e-branco',
  },
  { id: 302,
    name: `${category} Crisântemo Hexagrama`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: boneCrisantemoHex,
    imgSrc: [boneCrisantemoHexBig, boneCrisantemoHexBlack],
    price: ItemPrice,
    buyLink: 'https://www.colab55.com/@malanskiart/caps/crisantemo-hexagrama',
  },
  { id: 303,
    name: `${category} Hexagrama invertido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: boneHexaInv,
    imgSrc: [boneHexaInvBig, boneHexaInvBlue],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/caps/crisantemo-e-estrela-hexagrama-vermelho?c=pink',
  },
  { id: 304,
    name: `${category} Octagrama invertido`,
    description: ItemDescription,
    options: ItemOptions,
    iconSrc: boneOctaInv,
    imgSrc: [boneOctaInvBig, boneOctaInvRed],
    price: ItemPrice,
    buyLink:
      'https://www.colab55.com/@malanskiart/caps/crisantemo-octograma-estrela-invertido?c=black',
  },
]

export default CapsDataList
