import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { mainSaga } from './saga';
import { AppContext, initialState, reducer } from './reducers';
import useSagaReducer from 'use-saga-reducer';
import { ContainerProps } from '../types';

export const App = (props: ContainerProps) => {
  const navigation = useNavigation()
  const [appState, appDispatch] = useSagaReducer(mainSaga, reducer, initialState, undefined, {
    context: { navigation }});
  
  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {appState.isAppLoaded && props.navigator}
    </AppContext.Provider>
  )
};
