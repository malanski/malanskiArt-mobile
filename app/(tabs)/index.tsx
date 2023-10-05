import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import FlipflopsDataList from '../../data/FlipflopsData'
import MugsDataList from '../../data/MugsData'
import ApronsDataList from '../../data/ApronsData'
import ButtonsDataList from '../../data/ButtonsData'
import CapsDataList from '../../data/CapsData'
import FullTshirtsDataList from '../../data/FullShirtsData'
import LeggingsDataList from '../../data/LeggingsData'
import PillowsDataList from '../../data/PillowsData'
import SketchbookDataList from '../../data/SketchbookData'
import SweatShirtsDataList from '../../data/SweatShirtsData'
import TotebagsList from '../../data/TotebagsData'
import TowelsDataList from '../../data/TowelsData'
import TshirtsDataList from '../../data/TshirtsData'
import { SetStateAction, useState } from 'react';

const allData = [
  ...FullTshirtsDataList,
  ...TshirtsDataList,
  ...CapsDataList,
  ...ButtonsDataList,
  ...TotebagsList,
  ...MugsDataList,
  ...LeggingsDataList,
  ...PillowsDataList,
  ...FlipflopsDataList,
  ...TowelsDataList,
  ...SweatShirtsDataList,
  ...SketchbookDataList,
  ...ApronsDataList,
]
const dataSources = [
  { name: 'All Products', data: allData },
  { name: 'Full Prints', data: FullTshirtsDataList },
  { name: 'T-shirts', data: TshirtsDataList },
  { name: 'Leggings', data: LeggingsDataList },
  { name: 'Sweat Shirts', data: SweatShirtsDataList },
  { name: 'Caps', data: CapsDataList },
  { name: 'Buttons', data: ButtonsDataList },
  { name: 'ToteBags', data: TotebagsList },
  { name: 'Aprons', data: ApronsDataList },
  { name: 'Sketchbook', data: SketchbookDataList },
  { name: 'Towel', data: TowelsDataList },
  { name: 'Mugs', data: MugsDataList },
  { name: 'Pillow', data: PillowsDataList },
  { name: 'FlipFlops', data: FlipflopsDataList },
]
export default function TabOneScreen() {
  const [activeDataIndex, setActiveDataIndex] = useState(0)
  const toggleDataSource = (index: SetStateAction<number>) => {
    setActiveDataIndex(index)
  }
  const currentDataSource = dataSources[activeDataIndex]
  // const currentDataSource = {name: 'All Products'}

  return (
    <View style={styles.container}>
      <EditScreenInfo
        allPropData={currentDataSource.data}
        propDataSource={dataSources}
        propToggleDataSource={toggleDataSource}
        currentDataSourceName={currentDataSource.name}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
