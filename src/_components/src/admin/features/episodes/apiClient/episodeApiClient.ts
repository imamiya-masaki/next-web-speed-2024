import { inject } from 'regexparam';

import type { DeleteEpisodeRequestParams } from '@/schema/src/api/episodes/DeleteEpisodeRequestParams';
import type { DeleteEpisodeResponse } from '@/schema/src/api/episodes/DeleteEpisodeResponse';
import type { GetEpisodeListRequestQuery } from '@/schema/src/api/episodes/GetEpisodeListRequestQuery';
import type { GetEpisodeListResponse } from '@/schema/src/api/episodes/GetEpisodeListResponse';
import type { GetEpisodeRequestParams } from '@/schema/src/api/episodes/GetEpisodeRequestParams';
import type { GetEpisodeResponse } from '@/schema/src/api/episodes/GetEpisodeResponse';
import type { PatchEpisodeRequestBody } from '@/schema/src/api/episodes/PatchEpisodeRequestBody';
import type { PatchEpisodeRequestParams } from '@/schema/src/api/episodes/PatchEpisodeRequestParams';
import type { PatchEpisodeResponse } from '@/schema/src/api/episodes/PatchEpisodeResponse';
import type { PostEpisodeRequestBody } from '@/schema/src/api/episodes/PostEpisodeRequestBody';
import type { PostEpisodeResponse } from '@/schema/src/api/episodes/PostEpisodeResponse';

import type { DomainSpecificApiClientInterface } from '../../../lib/api/DomainSpecificApiClientInterface';
import { apiClient } from '../../../lib/api/apiClient';

type EpisodeApiClient = DomainSpecificApiClientInterface<{
  delete: [{ params: DeleteEpisodeRequestParams }, DeleteEpisodeResponse];
  fetch: [{ params: GetEpisodeRequestParams }, GetEpisodeResponse];
  fetchList: [{ query: GetEpisodeListRequestQuery }, GetEpisodeListResponse];
  post: [{ body: PostEpisodeRequestBody }, PostEpisodeResponse];
  update: [{ body: PatchEpisodeRequestBody; params: PatchEpisodeRequestParams }, PatchEpisodeResponse];
}>;

export const episodeApiClient: EpisodeApiClient = {
  delete: async ({ params }) => {
    const response = await apiClient.delete<DeleteEpisodeResponse>(inject('api/v1/episodes/:episodeId', params));
    return response.data;
  },
  delete$$key: (options) => [
    {
      method: 'delete',
      requestUrl: '/api/v1/episodes/:episodeId',
    },
    options,
  ],
  fetch: async ({ params }) => {
    const response = await apiClient.get<GetEpisodeResponse>(inject('api/v1/episodes/:episodeId', params));
    return response.data;
  },
  fetch$$key: (options) => [
    {
      method: 'get',
      requestUrl: '/api/v1/episodes/:episodeId',
    },
    options,
  ],
  fetchList: async ({ query }) => {
    const response = await apiClient
      .get<GetEpisodeListResponse>(inject('api/v1/episodes', {}), { searchParams: query })
    return response.data;
  },
  fetchList$$key: (options) => [
    {
      method: 'get',
      requestUrl: '/api/v1/episodes',
    },
    options,
  ],
  post: async ({ body }) => {
    const response = await apiClient.post<PostEpisodeResponse>(inject('api/v1/episodes', {}), body );
    return response.data;
  },
  post$$key: (options) => [
    {
      method: 'post',
      requestUrl: '/api/v1/episodes',
    },
    options,
  ],
  update: async ({ body, params }) => {
    const response = await apiClient
      .patch<PatchEpisodeResponse>(inject('api/v1/episodes/:episodeId', params), body );
    return response.data;
  },
  update$$key: (options) => [
    {
      method: 'patch',
      requestUrl: '/api/v1/episodes/:episodeId',
    },
    options,
  ],
};
