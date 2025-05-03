import {Expand} from '@/components/icons';
import {Button} from '@/components/ui/Button';
import {View} from 'react-native';
import {styles} from './Filter.styled';
const Filter = () => {
	return (
		<View style={styles.container}>
			<Button
				style={[styles.buttonStyle]}
				icon={<Expand isExpanded={false} />}
				variant="contained"
				text="Filter"
			/>
		</View>
	);
};

export default Filter;
