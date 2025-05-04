import type {HttpClient} from '@/lib/httpClient';
import type {Character} from '@/types/api';

export default async function fetchLikedCharacters(
	httpClient: HttpClient,
	ids?: number[],
) {
	const idsParam = ids ? `/${ids.join(',')}` : '';
	const result = await httpClient
		.get(`character${idsParam}`)
		.json<Character[]>();
	return result;
}
