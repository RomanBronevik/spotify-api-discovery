/**
 * This feature is still under development @ Spotify. Sorry for the lack of
 * documentation. Coming in future releases.
 */

/**
 * SpotifyAudioAnalysisAPIResponse
 *
 * @export
 * @class SpotifyAudioAnalysisAPIResponse
 */
export class SpotifyAudioAnalysisAPIResponse {
  /**
   *
   *
   * @type {SpotifyAudioAnalysisBarsAPIResponse}
   * @memberof SpotifyAudioAnalysisAPIResponse
   */
  readonly bars: SpotifyAudioAnalysisBarsAPIResponse;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisBeatsAPIResponse}
   * @memberof SpotifyAudioAnalysisAPIResponse
   */
  readonly beats: SpotifyAudioAnalysisBeatsAPIResponse;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisMetaAPIResponse}
   * @memberof SpotifyAudioAnalysisAPIResponse
   */
  readonly meta: SpotifyAudioAnalysisMetaAPIResponse;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisSectionsAPIResponse}
   * @memberof SpotifyAudioAnalysisAPIResponse
   */
  readonly sections: SpotifyAudioAnalysisSectionsAPIResponse;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisSegmentsAPIResponse}
   * @memberof SpotifyAudioAnalysisAPIResponse
   */
  readonly segments: SpotifyAudioAnalysisSegmentsAPIResponse;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisTatumAPIResponse}
   * @memberof SpotifyAudioAnalysisAPIResponse
   */
  readonly tatums: SpotifyAudioAnalysisTatumAPIResponse[];

  /**
   *
   *
   * @type {SpotifyAudioAnalysisTrackAPIResponse}
   * @memberof SpotifyAudioAnalysisAPIResponse
   */
  readonly track: SpotifyAudioAnalysisTrackAPIResponse;
}

/**
 * SpotifyAudioAnalysisBarsAPIResponse
 *
 * @export
 * @class SpotifyAudioAnalysisBarsAPIResponse
 */
export class SpotifyAudioAnalysisBarsAPIResponse {
  /**
   * Creates an instance of SpotifyAudioAnalysisBarsAPIResponse.
   *
   * @param {SpotifyAudioAnalysisBarsAPIResponse} audioAnalysisBars
   * @memberof SpotifyAudioAnalysisBarsAPIResponse
   */
  constructor(audioAnalysisBars: SpotifyAudioAnalysisBarsAPIResponse) {
    this.start = audioAnalysisBars.start;
    this.duration = audioAnalysisBars.duration;
    this.confidence = audioAnalysisBars.confidence;
  }

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBarsAPIResponse
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBarsAPIResponse
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBarsAPIResponse
   */
  readonly confidence: number;
}

/**
 * SpotifyAudioAnalysisBeatsAPIResponse
 *
 * @export
 * @class SpotifyAudioAnalysisBeatsAPIResponse
 */
export class SpotifyAudioAnalysisBeatsAPIResponse {
  /**
   * Creates an instance of SpotifyAudioAnalysisBeatsAPIResponse.
   *
   * @param {SpotifyAudioAnalysisBeatsAPIResponse} audioAnalysisBeats
   * @memberof SpotifyAudioAnalysisBeatsAPIResponse
   */
  constructor(audioAnalysisBeats: SpotifyAudioAnalysisBeatsAPIResponse) {
    this.start = audioAnalysisBeats.start;
    this.duration = audioAnalysisBeats.duration;
    this.confidence = audioAnalysisBeats.confidence;
  }

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBeatsAPIResponse
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBeatsAPIResponse
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBeatsAPIResponse
   */
  readonly confidence: number;
}

/**
 * SpotifyAudioAnalysisMetaAPIResponse
 *
 * @export
 * @class SpotifyAudioAnalysisMetaAPIResponse
 */
export class SpotifyAudioAnalysisMetaAPIResponse {
  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisMetaAPIResponse
   */
  readonly analyzer_version: string;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisMetaAPIResponse
   */
  readonly platform: string;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisMetaAPIResponse
   */
  readonly detailed_status: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisMetaAPIResponse
   */
  readonly status_code: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisMetaAPIResponse
   */
  readonly timestamp: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisMetaAPIResponse
   */
  readonly analysis_time: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisMetaAPIResponse
   */
  readonly input_process: string;
}

/**
 * SpotifyAudioAnalysisSectionsAPIResponse
 *
 * @export
 * @class SpotifyAudioAnalysisSectionsAPIResponse
 */
export class SpotifyAudioAnalysisSectionsAPIResponse {
  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly loudness: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly tempo: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly tempo_confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly key: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly key_confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly mode: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly mode_confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly time_signature: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSectionsAPIResponse
   */
  readonly time_signature_confidence: number;
}

/**
 * SpotifyAudioAnalysisSegmentsAPIResponse
 *
 * @export
 * @class SpotifyAudioAnalysisSegmentsAPIResponse
 */
export class SpotifyAudioAnalysisSegmentsAPIResponse {
  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly loudness_start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly loudness_max_time: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly loudness_max: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly loudness_end: number;

  /**
   *
   *
   * @type {number[]}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly pitches: number[];

  /**
   *
   *
   * @type {number[]}
   * @memberof SpotifyAudioAnalysisSegmentsAPIResponse
   */
  readonly timbre: number[];
}

/**
 * SpotifyAudioAnalysisTatumAPIResponse
 *
 * @export
 * @class SpotifyAudioAnalysisTatumAPIResponse
 */
export class SpotifyAudioAnalysisTatumAPIResponse {
  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTatumAPIResponse
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTatumAPIResponse
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTatumAPIResponse
   */
  readonly confidence: number;
}

/**
 * SpotifyAudioAnalysisTrackAPIResponse
 *
 * @export
 * @class SpotifyAudioAnalysisTrackAPIResponse
 */
export class SpotifyAudioAnalysisTrackAPIResponse {
  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly num_samples: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly duration: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly sample_md5: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly offset_seconds: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly window_seconds: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly analysis_sample_rate: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly analysis_channels: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly end_of_fade_in: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly start_of_fade_out: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly loudness: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly tempo: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly tempo_confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly time_signature: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly time_signature_confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly key: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly key_confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly mode: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly mode_confidence: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly codestring: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly code_version: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly echoprintstring: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly echoprint_version: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly synchstring: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly synch_version: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly rythmstring: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrackAPIResponse
   */
  readonly rythm_version: number;
}
