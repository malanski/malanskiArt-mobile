import React, { SetStateAction } from 'react';
import { FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ProductCard } from './ProductCard';
import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';


interface IPropsAllData {
  allPropData: ArrayLike<any>
  currentDataSourceName: string
  propDataSource: {
    name: string;
    data: {
        id: number;
        name: string;
        description: string;
        options: string[];
        iconSrc: any;
        imgSrc: any[];
        price: number;
        buyLink: string;
    }[];
  }[]
  propToggleDataSource: (index: SetStateAction<number>) => void
}


export default function EditScreenInfo({ allPropData, currentDataSourceName, propDataSource, propToggleDataSource }: IPropsAllData) {
  return (
    <View>
      <View style={styles.ContentContainer}>
        {/* <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Malanskiart Store
        </Text>
        <View style={styles.helpContainer}>
          <ExternalLink
            style={styles.helpLink}
            href="https://www.redbubble.com/people/malanskiart/explore">
            <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
              Tap here if you want to buy directly at the main store
            </Text>
          </ExternalLink>
        </View> */}
        <FlatList
          contentContainerStyle={{
            paddingBottom: 32
            // flexDirection: 'row',
            // flexWrap:'wrap'
            // justifyContent: 'space-between'
          }}
          data={propDataSource}
          horizontal={false}
          numColumns={2}
          keyExtractor={item => item.name}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.navBar}
              onPress={() => propToggleDataSource(index)}>
              <Text style={styles.navBarText}>{item.name}</Text>
            </TouchableOpacity>

          )}
        />
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          {currentDataSourceName}
        </Text>

        <FlatList
          horizontal={false}
          numColumns={2}
          data={allPropData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              srcIcon={item.iconSrc}
              srcImg={item.imgSrc}
              itemName={item.name}
              itemPrice={item.price} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContentContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  navBar: {
    width: '47%',
    borderWidth: 1,
    borderColor: 'rgb(96, 209, 100)',
    borderRadius: 4,
    padding: 4,
    margin: 4

  },
  navBarText: {
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },

});
