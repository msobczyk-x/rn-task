import {atom} from 'jotai';
import {atomWithAsyncStorage} from './utils';

type LikedCharactersState = {
	likedCharacters: number[];
};

const likedCharactersAtom = atomWithAsyncStorage<LikedCharactersState>(
	'likedCharacters',
	{
		likedCharacters: [],
	},
);

const likedCharactersActions = {
	like: atom(null, (get, set, characterId: number) => {
		const currentState = get(likedCharactersAtom);
		const isAlreadyLiked = currentState.likedCharacters.includes(characterId);

		if (isAlreadyLiked) {
			set(likedCharactersAtom, {
				likedCharacters: currentState.likedCharacters.filter(
					id => id !== characterId,
				),
			});
		} else {
			set(likedCharactersAtom, {
				likedCharacters: [...currentState.likedCharacters, characterId],
			});
		}
	}),
};

export {likedCharactersAtom, likedCharactersActions};
