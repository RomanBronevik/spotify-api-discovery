/**
 * SpotifyRecommendationsParameters
 *
 * @export
 * @class SpotifyRecommendationsParameters
 */
export class SpotifyRecommendationsParameters {
  /**
   * Creates an instance of SpotifyRecommendationsParameters.
   *
   * @param {SpotifyRecommendationsParameters} params
   * @memberof SpotifyRecommendationsParameters
   */
  constructor(params: Partial<SpotifyRecommendationsParameters>) {
    Object.keys(params).forEach(key => {
      this[key] = params[key];
    });
  }

  /**
   * Load SpotifyRecommendationsParameters from JSON
   *
   * @static
   * @param {*} params
   * @returns
   * @memberof SpotifyRecommendationsParameters
   */
  static fromJSON(params: any) {
    return new this({
      limit: params.limit,
      market: params.market,
      max: SpotifyRecommendationsParametersMaxTunableValues.fromJson(params),
      min: SpotifyRecommendationsParametersMinTunableValues.fromJson(params),
      seedArtists: params.seed_artists,
      seedGenres: params.seed_genres,
      seedTracks: params.seed_tracks,
      target: SpotifyRecommendationsParametersTargetTunableValues.fromJson(
        params
      )
    });
  }

  /**
   * Converts SpotifyRecommendationsParameters to JSON
   *
   * @returns
   * @memberof SpotifyRecommendationsParameters
   */
  public toJSON() {
    const json = {
      limit: this.limit,
      market: this.market,
      seed_artists: this.seedArtists,
      seed_genres: this.seedGenres,
      seed_tracks: this.seedTracks
    };

    const max = this.max.toJSON();
    Object.keys(max).forEach(key => {
      json[`max_${key}`] = max[key];
    });

    const min = this.min.toJSON();
    Object.keys(min).forEach(key => {
      json[`min_${key}`] = min[key];
    });

    const target = this.target.toJSON();
    Object.keys(target).forEach(key => {
      json[`target_${key}`] = target[key];
    });

    return json;
  }

  /**
   * Optional. The target size of the list of recommended tracks. For seeds
   * with unusually small pools or when highly restrictive filtering is applied,
   * it may be impossible to generate the requested number of recommended
   * tracks. Debugging information for such cases is available in the response.
   * Default: 20. Minimum: 1. Maximum: 100.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParameters
   */
  public limit?: number;

  /**
   * Optional. An ISO 3166-1 alpha-2 country code. Provide this parameter if
   * you want to apply Track Relinking. Because min_*, max_* and target_* are
   * applied to pools before relinking, the generated results may not precisely
   * match the filters applied. Original, non-relinked tracks are available via
   * the linked_from attribute of the relinked track response.
   *
   * @type {string}
   * @memberof SpotifyRecommendationsParameters
   */
  public market?: string;

  /**
   * Optional. Multiple values. For each tunable track attribute, a hard
   * ceiling on the selected track attribute’s value can be provided. See
   * tunable track attributes below for the list of available options. For
   * example, max_instrumentalness=0.35 would filter out most tracks that are
   * likely to be instrumental.
   *
   * @type {SpotifyRecommendationsParametersTunableValues}
   * @memberof SpotifyRecommendationsParameters
   */
  public max?: SpotifyRecommendationsParametersTunableValues;

  /**
   * Optional. Multiple values. For each tunable track attribute, a hard floor
   * on the selected track attribute’s value can be provided. See tunable track
   * attributes below for the list of available options. For example,
   * min_tempo=140 would restrict results to only those tracks with a tempo of
   * greater than 140 beats per minute.
   *
   * @type {SpotifyRecommendationsParametersTunableValues}
   * @memberof SpotifyRecommendationsParameters
   */
  public min?: SpotifyRecommendationsParametersTunableValues;

  /**
   * A comma separated list of Spotify IDs for seed artists. Up to 5 seed values
   * may be provided in any combination of seed_artists, seed_tracks and
   * seed_genres.
   *
   * @type {string[]}
   * @memberof SpotifyRecommendationsParameters
   */
  public seedArtists?: string[];

  /**
   * A comma separated list of any genres in the set of available genre seeds.
   * Up to 5 seed values may be provided in any combination of seed_artists,
   * seed_tracks and seed_genres.
   *
   * @type {string[]}
   * @memberof SpotifyRecommendationsParameters
   */
  public seedGenres?: string[];

  /**
   * A comma separated list of Spotify IDs for a seed track. Up to 5 seed values
   * may be provided in any combination of seed_artists, seed_tracks and
   * seed_genres.
   *
   * @type {string[]}
   * @memberof SpotifyRecommendationsParameters
   */
  public seedTracks?: string[];

  /**
   * Optional. Multiple values. For each of the tunable track attributes
   * (below) a target value may be provided. Tracks with the attribute values
   * nearest to the target values will be preferred. For example, you might
   * request target_energy=0.6 and target_danceability=0.8. All target values
   * will be weighed equally in ranking results.
   *
   * @type {SpotifyRecommendationsParametersTunableValues}
   * @memberof SpotifyRecommendationsParameters
   */
  public target?: SpotifyRecommendationsParametersTunableValues;
}

/**
 * SpotifyRecommendationsParametersTunableValues
 *
 * @class SpotifyRecommendationsParametersTunableValues
 */
class SpotifyRecommendationsParametersTunableValues {
  /**
   * Creates an instance of SpotifyRecommendationsParametersTunableValues.
   *
   * @param {SpotifyRecommendationsParametersTunableValues} tunableValues
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  constructor(
    tunableValues: Partial<SpotifyRecommendationsParametersTunableValues>
  ) {
    Object.keys(tunableValues).forEach(key => {
      this[key] = tunableValues[key];
    });
  }

  /**
   * Load tunable values from json object
   *
   * @static
   * @param {*} tunableValues
   * @returns {SpotifyRecommendationsParametersTunableValues}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  static fromJson(tunableValues: any) {
    return new this({
      acousticness:
        tunableValues[`${this['tunableValueKey'] || ''}_acousticness`],
      danceability:
        tunableValues[`${this['tunableValueKey'] || ''}_danceability`],
      durationMs: tunableValues[`${this['tunableValueKey'] || ''}_durationMs`],
      energy: tunableValues[`${this['tunableValueKey'] || ''}_energy`],
      instrumentalness:
        tunableValues[`${this['tunableValueKey'] || ''}_instrumentalness`],
      key: tunableValues[`${this['tunableValueKey'] || ''}_key`],
      liveness: tunableValues[`${this['tunableValueKey'] || ''}_liveness`],
      loudness: tunableValues[`${this['tunableValueKey'] || ''}_loudness`],
      mode: tunableValues[`${this['tunableValueKey'] || ''}_mode`],
      popularity: tunableValues[`${this['tunableValueKey'] || ''}_popularity`],
      speechiness:
        tunableValues[`${this['tunableValueKey'] || ''}_speechiness`],
      tempo: tunableValues[`${this['tunableValueKey'] || ''}_tempo`],
      timeSignature:
        tunableValues[`${this['tunableValueKey'] || ''}_timeSignature`],
      valence: tunableValues[`${this['tunableValueKey'] || ''}_valence`]
    });
  }

  /**
   * Convert SpotifyRecommendationsParametersTunableValues to JSON
   *
   * @returns {*}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public toJSON() {
    return {
      acousticness: this.acousticness,
      danceability: this.danceability,
      duration_ms: this.durationMs,
      energy: this.energy,
      instrumentalness: this.instrumentalness,
      key: this.key,
      liveness: this.liveness,
      loudness: this.loudness,
      mode: this.mode,
      popularity: this.popularity,
      speechiness: this.speechiness,
      tempo: this.tempo,
      time_signature: this.timeSignature,
      valence: this.valence
    };
  }

  /**
   * A confidence measure from 0.0 to 1.0 of whether the track is acoustic.
   * 1.0 represents high confidence the track is acoustic.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public acousticness?: number;

  /**
   * Danceability describes how suitable a track is for dancing based on a
   * combination of musical elements including tempo, rhythm stability, beat
   * strength, and overall regularity. A value of 0.0 is least danceable and 1.0
   * is most danceable.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public danceability?: number;

  /**
   * 	The duration of the track in milliseconds.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public durationMs?: number;

  /**
   * Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of
   * intensity and activity. Typically, energetic tracks feel fast, loud, and
   * noisy. For example, death metal has high energy, while a Bach prelude
   * scores low on the scale. Perceptual features contributing to this attribute
   * include dynamic range, perceived loudness, timbre, onset rate, and general
   * entropy.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public energy?: number;

  /**
   * Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are
   * treated as instrumental in this context. Rap or spoken word tracks are
   * clearly “vocal”. The closer the instrumentalness value is to 1.0, the
   * greater likelihood the track contains no vocal content. Values above 0.5
   * are intended to represent instrumental tracks, but confidence is higher as
   * the value approaches 1.0.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public instrumentalness?: number;

  /**
   * The key the track is in. Integers map to pitches using standard Pitch Class
   * notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public key?: number;

  /**
   * Detects the presence of an audience in the recording. Higher liveness
   * values represent an increased probability that the track was performed
   * live. A value above 0.8 provides strong likelihood that the track is live.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public liveness?: number;

  /**
   * The overall loudness of a track in decibels (dB). Loudness values are
   * averaged across the entire track and are useful for comparing relative
   * loudness of tracks. Loudness is the quality of a sound that is the primary
   * psychological correlate of physical strength (amplitude). Values typical
   * range between -60 and 0 db.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public loudness?: number;

  /**
   * Mode indicates the modality (major or minor) of a track, the type of scale
   * from which its melodic content is derived. Major is represented by 1 and
   * minor is 0.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public mode?: number;

  /**
   * The popularity of the track. The value will be between 0 and 100, with 100
   * being the most popular. The popularity is calculated by algorithm and is
   * based, in the most part, on the total number of plays the track has had
   * and how recent those plays are. Note: When applying track relinking via
   * the market parameter, it is expected to find relinked tracks with
   * popularities that do not match min_*, max_*and target_* popularities.
   * These relinked tracks are accurate replacements for unplayable tracks
   * with the expected popularity scores. Original, non-relinked tracks are
   * available via the linked_from attribute of the relinked track response.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public popularity?: number;

  /**
   * Speechiness detects the presence of spoken words in a track. The more
   * exclusively speech-like the recording (e.g. talk show, audio book, poetry),
   * the closer to 1.0 the attribute value. Values above 0.66 describe tracks
   * that are probably made entirely of spoken words. Values between 0.33 and
   * 0.66 describe tracks that may contain both music and speech, either in
   * sections or layered, including such cases as rap music. Values below 0.33
   * most likely represent music and other non-speech-like tracks.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public speechiness?: number;

  /**
   * The overall estimated tempo of a track in beats per minute (BPM). In
   * musical terminology, tempo is the speed or pace of a given piece and
   * derives directly from the average beat duration.
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public tempo?: number;

  /**
   * An estimated overall time signature of a track. The time signature (meter)
   * is a notational convention to specify how many beats are in each bar
   * (or measure).
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public timeSignature?: number;

  /**
   * A measure from 0.0 to 1.0 describing the musical positiveness conveyed by
   * a track. Tracks with high valence sound more positive (e.g. happy,
   * cheerful, euphoric), while tracks with low valence sound more negative
   * (e.g. sad, depressed, angry).
   *
   * @type {number}
   * @memberof SpotifyRecommendationsParametersTunableValues
   */
  public valence?: number;
}

/**
 * SpotifyRecommendationsParametersMinTunableValues
 *
 * @export
 * @class SpotifyRecommendationsParametersMinTunableValues
 * @extends {SpotifyRecommendationsParametersTunableValues}
 */
export class SpotifyRecommendationsParametersMinTunableValues extends SpotifyRecommendationsParametersTunableValues {
  private static tunableValueKey = 'min';

  /**
   * Creates an instance of SpotifyRecommendationsParametersMixTunableValues.
   *
   * @param {SpotifyRecommendationsParametersTunableValues} tunableValues
   * @memberof SpotifyRecommendationsParametersMixTunableValues
   */
  constructor(tunableValues: SpotifyRecommendationsParametersTunableValues) {
    super(tunableValues);
  }
}

/**
 * SpotifyRecommendationsParametersMaxTunableValues
 *
 * @export
 * @class SpotifyRecommendationsParametersMaxTunableValues
 * @extends {SpotifyRecommendationsParametersTunableValues}
 */
export class SpotifyRecommendationsParametersMaxTunableValues extends SpotifyRecommendationsParametersTunableValues {
  private static tunableValueKey = 'max';

  /**
   * Creates an instance of SpotifyRecommendationsParametersMaxTunableValues.
   *
   * @param {SpotifyRecommendationsParametersTunableValues} tunableValues
   * @memberof SpotifyRecommendationsParametersMaxTunableValues
   */
  constructor(tunableValues: SpotifyRecommendationsParametersTunableValues) {
    super(tunableValues);
  }
}

/**
 * SpotifyRecommendationsParametersTargetTunableValues
 *
 * @export
 * @class SpotifyRecommendationsParametersTargetTunableValues
 * @extends {SpotifyRecommendationsParametersTunableValues}
 */
export class SpotifyRecommendationsParametersTargetTunableValues extends SpotifyRecommendationsParametersTunableValues {
  private static tunableValueKey = 'target';

  /**
   * Creates an instance of SpotifyRecommendationsParametersTargetTunableValues.
   *
   * @param {SpotifyRecommendationsParametersTunableValues} tunableValues
   * @memberof SpotifyRecommendationsParametersTargetTunableValues
   */
  constructor(tunableValues: SpotifyRecommendationsParametersTunableValues) {
    super(tunableValues);
  }
}
