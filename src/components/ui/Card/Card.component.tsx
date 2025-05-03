import type {StyleProp, ViewStyle} from 'react-native';
import {View} from 'react-native';
import {styles} from './Card.styled';
type CardProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const CardComponent = ({children, style}: CardProps) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

export default CardComponent;
