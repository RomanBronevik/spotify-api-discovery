import { SpotifyFieldFilterType } from './../../types/enums/spotify-field-filter-type.enum';
import { SpotifySearchTagType } from './../../types/enums/spotify-search-tag-type.enum';

const keywordMetadataKey = Symbol('keyword');

const keyword = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => {
  let existingKeywordParameters: number[] =
    Reflect.getOwnMetadata(keywordMetadataKey, target, propertyKey) || [];
  existingKeywordParameters.push(parameterIndex);
  Reflect.defineMetadata(
    keywordMetadataKey,
    existingKeywordParameters,
    target,
    propertyKey
  );
};

const formatKeyword = (
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<Function>
) => {
  let method = descriptor.value;

  descriptor.value = function() {
    let keywordParameters: number[] = Reflect.getOwnMetadata(
      keywordMetadataKey,
      target,
      propertyName
    );

    if (keywordParameters) {
      keywordParameters.forEach(parameterIndex => {
        if (
          parameterIndex >= arguments.length ||
          arguments[parameterIndex] === undefined
        ) {
          throw new Error('Missing keyword argument.');
        } else {
          if (arguments[parameterIndex].includes(' ')) {
            arguments[parameterIndex] = `"${keyword}"`;
          }
        }
      });
    }

    return method.apply(this, arguments);
  };
};

/**
 * SpotifyQuery
 *
 * @export
 * @class SpotifyQuery
 */
export class SpotifyQuery {
  /**
   * Creates an instance of SpotifyQuery.
   *
   * @param {string} querystring
   * @memberof SpotifyQuery
   */
  constructor(querystring: string) {
    this.querystring = querystring || '';
  }

  /**
   * Add a keyword to the query
   *
   * @param {string} keyword
   * @returns
   * @memberof SpotifyQuery
   */
  @formatKeyword
  public addKeyword(@keyword keyword: string) {
    if (this.querystring && this.querystring.length) {
      this.querystring.concat(' ').concat(keyword);
    } else {
      this.querystring = keyword;
    }

    return this;
  }

  /**
   * Add a OR operator to the query
   *
   * @returns
   * @memberof SpotifyQuery
   */
  @formatKeyword
  public addOR() {
    if (this.querystring && this.querystring.length) {
      this.querystring.concat(' OR');
    } else {
      throw new Error('Cannot add operator as querystring is empty.');
    }

    return this;
  }

  /**
   * Add a NOT operator to the query
   *
   * @returns
   * @memberof SpotifyQuery
   */
  public addNOT() {
    if (this.querystring && this.querystring.length) {
      this.querystring.concat(' NOT');
    } else {
      throw new Error('Cannot add operator as querystring is empty.');
    }

    return this;
  }

  /**
   * Add a AND operator to the query
   *
   * @returns
   * @memberof SpotifyQuery
   */
  public addAND() {
    if (this.querystring && this.querystring.length) {
      this.querystring.concat(' AND');
    } else {
      throw new Error('Cannot add operator as querystring is empty.');
    }

    return this;
  }

  /**
   * Add a field filter to the query
   *
   * @param {SpotifyFieldFilterType} fieldType
   * @param {string} value
   * @returns
   * @memberof SpotifyQuery
   */
  public addFieldFilter(fieldType: SpotifyFieldFilterType, value: string) {
    if (this.querystring && this.querystring.length) {
      this.querystring
        .concat(' ')
        .concat(fieldType)
        .concat(':')
        .concat(value);
    } else {
      this.querystring = fieldType.concat(':').concat(value);
    }

    return this;
  }

  /**
   * Add filter over years to the query
   *
   * @param {number} startYear
   * @param {number} [endYear]
   * @returns
   * @memberof SpotifyQuery
   */
  public addYearFilter(startYear: number, endYear?: number) {
    if (this.querystring && this.querystring.length) {
      this.querystring
        .concat(' year:')
        .concat(`${startYear.toString()}${endYear ? `-${endYear}` : ''}`);
    } else {
      this.querystring = 'year:'.concat(
        `${startYear.toString()}${endYear ? `-${endYear}` : ''}`
      );
    }

    return this;
  }

  /**
   * Add a search tag to the query
   *
   * @param {SpotifySearchTagType} tag
   * @returns
   * @memberof SpotifyQuery
   */
  public addTag(tag: SpotifySearchTagType) {
    if (this.querystring && this.querystring.length) {
      this.querystring.concat(' ').concat(`tag:${tag}`);
    } else {
      this.querystring = `tag:${tag}`;
    }

    return this;
  }

  /**
   * Returns a valid query for Spotify search API
   *
   * @returns {string}
   * @memberof SpotifyQuery
   */
  public toString(): string {
    return this.querystring.replace(' ', '%20').replace('"', '%22');
  }

  /**
   * @private
   * @type {string}
   * @memberof SpotifyQuery
   */
  private querystring: string;
}
