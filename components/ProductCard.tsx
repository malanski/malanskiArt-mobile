import React, { useState } from 'react';
import { StyleSheet, Image, ImageSourcePropType, View, Modal, Pressable } from 'react-native';
import { Text } from './Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface IPropsProductData {
  srcIcon: ImageSourcePropType
  srcImg: any[]
  itemName: string
  itemPrice: number
}

export function ProductCard({ srcIcon, itemName, itemPrice, srcImg }: IPropsProductData) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const changeImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <View style={styles.productCard}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image source={srcIcon} style={styles.productIcon} />
      </TouchableOpacity>
      <Text style={styles.productText}>{itemName}</Text>
      <Text style={[styles.productText, styles.productTextPrice]}>R$ {itemPrice}</Text>

      <Modal
        style={styles.centeredView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.textStyle}>{itemName}</Text>
            <View style={styles.modalImages}>

              <Image source={srcImg[currentImageIndex]} style={styles.productImage} />
              {srcImg.length > 1 && 
                <View style={styles.modalImageNav}>
                  {srcImg.map((imgSrc, index) => (
                    <Pressable
                      onPress={() => changeImage(index)}
                      key={index}>
                        <Image source={imgSrc} style={styles.productImageNav} />
                    </Pressable>
                  ))}
                </View>
              }
            </View>
          </View>

          <View style={styles.modalOption}>
            <Pressable >
              <Text style={styles.button}>Buy</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonClose}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  productText: {
    textAlign: 'center',
  },
  productTextPrice: {
    color: 'rgba(220, 212, 71, 0.867)3',
    fontSize: 18
  },

  productCard: {
    borderWidth: 2,
    borderColor: 'rgba(179, 177, 177, 0.867)3',
    padding: 8,
    borderRadius: 8,
    margin: 4,
    // flex: 1,
    justifyContent: 'space-between',
    width: '47%',
    height: 350
  },
  productIcon: {
    width: '100%'
  },
 
  centeredView: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    borderWidth: 2,
    borderColor: 'white',
    margin: 20,
    backgroundColor: 'rgb(56, 56, 56)',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    width: '50%'
  },
  productImage: {
    width: 350,
    height: 350,
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  modalImageNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    width: '100%'
  },

  productImageNav: {
    marginHorizontal: 8,
    marginVertical: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    width: 80,
    height: 80
  },
  button: {
    borderRadius: 100,
    backgroundColor: 'rgba(55, 128, 59, 0.703)',
    padding: 10,
    elevation: 2,
    color: 'rgb(199, 199, 199)',

  },
  buttonClose: {
    backgroundColor: 'rgb(98, 36, 36)',
    padding: 10,
    elevation: 2,
    color: 'rgb(199, 199, 199)',
    borderRadius: 100,
  },
  textStyle: {
    color: 'rgb(199, 199, 199)',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    textTransform: "uppercase",
    marginBottom: 32
  },
  modalImages: {
    // backgroundColor: 'rgb(56, 56, 56)',
    borderRadius: 8,
    fontSize: 17,
    marginBottom: 15,
    textAlign: 'center',
    color: 'rgb(199, 199, 199)',

  },
});
