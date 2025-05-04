import fetchCharacterDetails from '@/api/fetchCharacterDetails';
import type {HttpClient} from '@/lib/httpClient';
import type {Character} from '@/types/api';
import {useQuery} from '@tanstack/react-query';

export default function useCharacterDetails(
	httpClient: HttpClient,
	characterId: number,
) {
	return useQuery<Character, Error>({
		queryKey: ['character', 'details', characterId],
		queryFn: async () => {
			return await fetchCharacterDetails(httpClient, characterId);
		},
		staleTime: 1000 * 60 * 60,
		enabled: Boolean(characterId),
	});
}
