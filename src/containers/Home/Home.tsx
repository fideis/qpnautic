import React, { useMemo } from 'react';
import { Content } from 'native-base';
import { ContainerProps } from '../types';
import { Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MapGrid } from '../../components/MapGrid/MapGrid';
import { TouchableIdol } from '../../components/TouchableIdol/TouchableIdol';

const useStylesheet = () => {
  const { width: windowWidth } = Dimensions.get('window')
  return useMemo(() => StyleSheet.create({
    contentContainer: {
      flex: 1,
    },
    grid: {
      alignItems: 'center',
    },
    gridRow: {
      width: windowWidth / 2,
      height: windowWidth / 2,
    },
    gridItemIcon: {
      fontSize: windowWidth / 4,
    }
  }), [windowWidth])
}

export const Home = (props: ContainerProps) => {
  const navigation = useNavigation();

  const style = useStylesheet()
  return (
    <Content contentContainerStyle={style.contentContainer}>
      <MapGrid<Parameters<typeof TouchableIdol>[0]>
        style={style.grid}
        rowStyle={style.gridRow}
        items={useMemo(() => [
          [{
            iconStyle: style.gridItemIcon,
            iconName: 'layers',
            labelText: 'Esercizio',
            onPress: () => navigation.navigate('Exercize'),
          }, {
            iconStyle: style.gridItemIcon,
            iconName: 'map',
            labelText: 'Teoria',
            onPress: () => navigation.navigate('Teory'),
          }], [{
            iconStyle: style.gridItemIcon,
            iconName: 'list',
            labelText: 'Quiz Esame',
            onPress: () => navigation.navigate('Quiz'),
          }, {
            iconStyle: style.gridItemIcon,
            iconName: 'settings',
            labelText: 'Impostazioni',
            onPress: () => navigation.navigate('Settings'),
          }]
        ], [navigation])}
        component={TouchableIdol}
      />
    </Content>
  )
};