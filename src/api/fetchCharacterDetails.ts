import type {HttpClient} from '@/lib/httpClient';
import type {Character} from '@/types/api';

export default async function fetchCharacterDetails(
	httpClient: HttpClient,
	characterId: number,
) {
	const result = await httpClient
		.get(`character/${characterId}`)
		.json<Character>();
	return result;
}
