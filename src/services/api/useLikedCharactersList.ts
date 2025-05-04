import fetchLikedCharacters from '@/api/fetchLikedCharacters';
import type {HttpClient} from '@/lib/httpClient';
import type {Character} from '@/types/api';
import {useQuery} from '@tanstack/react-query';

export default function useLikedCharacters(
	httpClient: HttpClient,
	characterIds: number[],
) {
	return useQuery<Character[], Error>({
		queryKey: ['character', 'list', characterIds],
		queryFn: async () => {
			return await fetchLikedCharacters(httpClient, characterIds);
		},
		staleTime: 1000 * 60 * 60,
		enabled: Boolean(characterIds.length),
	});
}
