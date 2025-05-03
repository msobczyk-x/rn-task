import {Typography} from '@/components/ui/Typography';
import {View} from 'react-native';
import {styles} from './CharacterListHeader.styled';
import {SearchBar} from '@/components/SearchBar';
const CharacterListHeader = () => {
  return (
    <View style={[styles.container]}>
      <Typography variant="heading">Characters</Typography>
      <SearchBar />
    </View>
  );
};

export default CharacterListHeader;
