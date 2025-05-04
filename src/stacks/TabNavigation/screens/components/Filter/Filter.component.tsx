import {Expand} from '@/components/icons';
import {Button} from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import {Checkbox} from '@/components/ui/Checkbox';
import {Typography} from '@/components/ui/Typography';
import {speciesFilterAtom, statusFilterAtom} from '@/stores/filters';
import {useAtom} from 'jotai';
import {useState} from 'react';
import {View} from 'react-native';
import {styles} from './Filter.styled';
const Filter = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [statusFilter, setStatusFilter] = useAtom(statusFilterAtom);
	const [speciesFilter, setSpeciesFilter] = useAtom(speciesFilterAtom);
	const [localStatusFilter, setLocalStatusFilter] = useState<string>(
		() => statusFilter,
	);
	const [localSpeciesFilter, setLocalSpeciesFilter] = useState<string>(
		() => speciesFilter,
	);
	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};
	const resetFilters = () => {
		setLocalStatusFilter('');
		setLocalSpeciesFilter('');
		setSpeciesFilter('');
		setStatusFilter('');
	};

	const saveFilters = () => {
		setSpeciesFilter(localSpeciesFilter);
		setStatusFilter(localStatusFilter);
		toggleExpand();
	};

	return (
		<View style={styles.container}>
			<Button
				style={[styles.buttonStyle, isExpanded && styles.buttonStyleExpanded]}
				icon={<Expand isExpanded={isExpanded} />}
				variant="contained"
				text="Filter"
				onPress={toggleExpand}
			/>
			{isExpanded && (
				<Card style={styles.filterContainer}>
					<View style={styles.filterContent}>
						<Typography style={styles.labelText} variant="labelMedium">
							Status
						</Typography>
						<Checkbox
							status={localStatusFilter === 'Alive'}
							value="Alive"
							label="Alive"
							onChange={() => {
								if (localStatusFilter === 'Alive') {
									setLocalStatusFilter('');
								} else {
									setLocalStatusFilter('Alive');
								}
							}}
						/>
						<Checkbox
							status={localStatusFilter === 'Dead'}
							value="Dead"
							label="Dead"
							onChange={() => {
								if (localStatusFilter === 'Dead') {
									setLocalStatusFilter('');
								} else {
									setLocalStatusFilter('Dead');
								}
							}}
						/>
						<Checkbox
							status={localStatusFilter === 'Unknown'}
							value="Unknown"
							label="Unknown"
							onChange={() => {
								if (localStatusFilter === 'Unknown') {
									setLocalStatusFilter('');
								} else {
									setLocalStatusFilter('Unknown');
								}
							}}
						/>
					</View>
					<View style={styles.filterContent}>
						<Typography style={styles.labelText} variant="labelMedium">
							Species
						</Typography>
						<Checkbox
							status={localSpeciesFilter === 'Human'}
							value="Human"
							label="Human"
							onChange={() => {
								if (localSpeciesFilter === 'Human') {
									setLocalSpeciesFilter('');
								} else {
									setLocalSpeciesFilter('Human');
								}
							}}
						/>
						<Checkbox
							status={localSpeciesFilter === 'Humanoid'}
							value="Humanoid"
							label="Humanoid"
							onChange={() => {
								if (localSpeciesFilter === 'Humanoid') {
									setLocalSpeciesFilter('');
								} else {
									setLocalSpeciesFilter('Humanoid');
								}
							}}
						/>
					</View>
					<View style={styles.filterContainerFooter}>
						<Button variant="outlined" text="Reset" onPress={resetFilters} />
						<Button variant="contained" text="Apply" onPress={saveFilters} />
					</View>
				</Card>
			)}
		</View>
	);
};

export default Filter;
