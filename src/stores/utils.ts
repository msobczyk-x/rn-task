import AsyncStorage from '@react-native-async-storage/async-storage';
import {atom} from 'jotai';
import type {WritableAtom} from 'jotai';

export function atomWithAsyncStorage<T>(
	key: string,
	initialValue: T,
): WritableAtom<T, [T | ((prev: T) => T)], void> {
	const baseAtom = atom<T>(initialValue);

	baseAtom.onMount = (setValue: (value: T) => void): void => {
		(async () => {
			const item = await AsyncStorage.getItem(key);
			if (item !== null) {
				setValue(JSON.parse(item) as T);
			}
		})();
	};

	const derivedAtom = atom<T, [T | ((prev: T) => T)], void>(
		get => get(baseAtom),
		(get, set, update: T | ((prev: T) => T)) => {
			const nextValue =
				typeof update === 'function'
					? (update as (prev: T) => T)(get(baseAtom))
					: update;
			set(baseAtom, nextValue);
			AsyncStorage.setItem(key, JSON.stringify(nextValue));
		},
	);

	return derivedAtom;
}
