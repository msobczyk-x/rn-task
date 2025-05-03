import {View} from 'react-native';
import {Typography} from '../../Typography';
import {styles} from './CardFeature.styled';
type CardFeatureProps = {
  label: string;
  value: string;
};
const CardFeature = ({label, value}: CardFeatureProps) => {
  return (
    <View style={[styles.container]}>
      <Typography style={styles.labelText} variant="labelSmall">
        {label}
      </Typography>
      <Typography style={styles.valueText} variant="bodyText">
        {value}
      </Typography>
    </View>
  );
};

export default CardFeature;
