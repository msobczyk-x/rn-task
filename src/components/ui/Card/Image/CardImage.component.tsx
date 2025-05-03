import type {ViewStyle, StyleProp} from 'react-native';
import {View, Image} from 'react-native';
import {styles} from './CardImage.styled';
import {useMemo} from 'react';

type CardImageVariant = 'small' | 'large';

type CardImageProps = {
  imageUrl: string;
  style?: StyleProp<ViewStyle>;
  button?: React.ReactNode;
  variant?: CardImageVariant;
};

const CardImage = ({
  imageUrl,
  style,
  button,
  variant = 'small',
}: CardImageProps) => {
  const containerStyle = useMemo(
    () => [styles.base, variant === 'small' ? styles.small : styles.large],
    [variant],
  );
  return (
    <View style={[containerStyle, style]}>
      <Image source={{uri: imageUrl}} style={[styles.image]} />
      {button && <View style={[styles.buttonContainer]}>{button}</View>}
    </View>
  );
};

export default CardImage;
