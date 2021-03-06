import { NavigationProp, ParamListBase, Route } from '@react-navigation/native';

export declare interface ContainerProps<R extends {}> {
  route?: Route<string, R>
  navigation?: NavigationProp<ParamListBase>
}