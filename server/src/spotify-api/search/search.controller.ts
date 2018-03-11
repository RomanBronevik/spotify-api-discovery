import { Controller, Get, Query } from '@nestjs/common';

import { SpotifySearchEntityType } from '../types/enums/spotify-search-entity-type.enum';
import { AccessToken } from './../../authentication/access-token.decorator';
import { SpotifySearchResult } from './classes/spotify-search-result.class';
import { SearchService } from './search.service';

/**
 * SearchController
 *
 * @export
 * @class SearchController
 */
@Controller('search')
export class SearchController {
  /**
   * Creates an instance of SearchController.
   *
   * @param {SearchService} searchService
   * @memberof SearchController
   */
  constructor(private readonly searchService: SearchService) {}

  /**
   * Search for an Item
   *
   * @param {string} accessToken
   * @param {string} query
   * @param {string} [type]
   * @param {string} [market]
   * @param {number} [limit]
   * @param {number} [offset]
   * @returns {Promise<SpotifySearchResult>}
   * @memberof SearchController
   */
  @Get()
  async search(
    @AccessToken() accessToken: string,
    @Query('query') query: string,
    @Query('type') type?: SpotifySearchEntityType,
    @Query('market') market?: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ): Promise<SpotifySearchResult> {
    return this.searchService.search(
      accessToken,
      query,
      type.split[','],
      market,
      limit,
      offset
    );
  }
}
