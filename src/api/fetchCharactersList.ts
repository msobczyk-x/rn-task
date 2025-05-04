import type {HttpClient} from '@/lib/httpClient';
import type {Character, CharacterFilter, Info} from '@/types/api';

export type FetchCharacterListParams = CharacterFilter;

export default async function fetchCharacterList(
	httpClient: HttpClient,
	params: FetchCharacterListParams,
	ids?: number[],
) {
	const result = await httpClient
		.get(`character${ids ? `/${ids.join(',')}` : ''}`, {
			searchParams: {
				...params,
			},
		})
		.json<Info<Character[]>>();
	return result;
}
