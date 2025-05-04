import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Typography} from '../Typography';
import {styles} from './Checkbox.styled';

type CheckboxProps = {
	label: string;
	status: boolean;
	value: string;
	onChange: (value: string) => void;
};

const Checkbox = ({label, value, onChange, status}: CheckboxProps) => {
	const handlePress = () => {
		onChange(value);
	};

	const checkboxStyle = status
		? [styles.checkbox, styles.checkedBox]
		: [styles.checkbox, styles.uncheckedBox];

	return (
		<TouchableOpacity
			style={styles.container}
			onPress={handlePress}
			activeOpacity={0.7}>
			<View style={checkboxStyle}>
				{status && <Text style={styles.checkmark}>✓</Text>}
			</View>
			<Typography variant="bodyText" style={styles.label}>
				{label}
			</Typography>
		</TouchableOpacity>
	);
};

export default Checkbox;
