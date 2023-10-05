import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import CapsDataList from '../../data/CapsData';
import ButtonsDataList from '../../data/ButtonsData';
import TowelsDataList from '../../data/TowelsData';
import FlipflopsDataList from '../../data/FlipflopsData';
import { SetStateAction, useState } from 'react';

const allData = [
  ...CapsDataList,
  ...ButtonsDataList,
  ...TowelsDataList,
  ...FlipflopsDataList,
]
const dataSources = [
  { name: 'Accessories', data: allData },
  { name: 'Caps', data: CapsDataList },
  { name: 'Buttons', data: ButtonsDataList },
  { name: 'Towels', data: TowelsDataList },
  { name: 'FlipFlops', data: FlipflopsDataList },
]


export default function TabAccessoriesScreen() {
  const [activeDataIndex, setActiveDataIndex] = useState(0)

  const toggleDataSource = (index: SetStateAction<number>) => {
    setActiveDataIndex(index)
  }

  const currentDataSource = dataSources[activeDataIndex]
  return (
    <View style={styles.container}>
      <EditScreenInfo
        allPropData={currentDataSource.data}
        propDataSource={dataSources}
        propToggleDataSource={toggleDataSource}
        currentDataSourceName={currentDataSource.name}
      />
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
