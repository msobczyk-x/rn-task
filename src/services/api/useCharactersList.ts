import fetchCharacterList from '@/api/fetchCharactersList';
import type {HttpClient} from '@/lib/httpClient';
import type {Character, CharacterFilter, Info} from '@/types/api';
import {useInfiniteQuery} from '@tanstack/react-query';

export default function useCharactersList(
	httpClient: HttpClient,
	filters = {} as Omit<CharacterFilter, 'page'>,
) {
	return useInfiniteQuery<Info<Character[]>, Error>({
		queryKey: ['character', 'list', filters],
		queryFn: async ({pageParam}) => {
			return await fetchCharacterList(httpClient, {
				...filters,
				page: pageParam as number,
			});
		},
		initialPageParam: 1,
		getNextPageParam: lastPage => {
			if (!lastPage.info?.next) return undefined;
			const nextUrl = new URL(lastPage?.info.next);
			const nextPage = nextUrl.searchParams.get('page');
			return nextPage ? Number.parseInt(nextPage) : undefined;
		},
		staleTime: 1000 * 60 * 60,
	});
}
