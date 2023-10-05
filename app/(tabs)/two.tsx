import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import FullTshirtsDataList from '../../data/FullShirtsData';
import TshirtsDataList from '../../data/TshirtsData';
import LeggingsDataList from '../../data/LeggingsData';
import SweatShirtsDataList from '../../data/SweatShirtsData';
import { SetStateAction, useState } from 'react';

const allData = [
  ...FullTshirtsDataList,
  ...TshirtsDataList,
  ...LeggingsDataList,
  ...SweatShirtsDataList,
]
const dataSources = [
  { name: 'Clothes', data: allData },
  { name: 'Full Prints', data: FullTshirtsDataList },
  { name: 'T-shirts', data: TshirtsDataList },
  { name: 'Leggings', data: LeggingsDataList },
  { name: 'Sweat Shirts', data: SweatShirtsDataList },
]

export default function TabTwoScreen() {
  const [activeDataIndex, setActiveDataIndex] = useState(0)
  const toggleDataSource = (index: SetStateAction<number>) => {
    setActiveDataIndex(index)
  }
  const currentDataSource = dataSources[activeDataIndex]

  return (
    <View style={styles.container}>
      <EditScreenInfo
        allPropData={currentDataSource.data}
        propToggleDataSource={toggleDataSource}
        propDataSource={dataSources}
        currentDataSourceName={currentDataSource.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: 45
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
