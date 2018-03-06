import {
  SpotifyAudioAnalysisAPIResponse,
  SpotifyAudioAnalysisBarsAPIResponse,
  SpotifyAudioAnalysisBeatsAPIResponse,
  SpotifyAudioAnalysisMetaAPIResponse,
  SpotifyAudioAnalysisSectionsAPIResponse,
  SpotifyAudioAnalysisSegmentsAPIResponse,
  SpotifyAudioAnalysisTatumAPIResponse,
  SpotifyAudioAnalysisTrackAPIResponse
} from './../interfaces/spotify-audio-analysis-api-response.interface';

/**
 * This feature is still under development @ Spotify. Sorry for the lack of
 * documentation. Coming in future releases.
 */

/**
 * SpotifyAudioAnalysis
 *
 * @export
 * @class SpotifyAudioAnalysis
 */
export class SpotifyAudioAnalysis {
  /**
   * Creates an instance of SpotifyAudioAnalysis.
   *
   * @param {SpotifyAudioAnalysis} audioAnalysis
   * @memberof SpotifyAudioAnalysis
   */
  constructor(audioAnalysis: SpotifyAudioAnalysis) {
    Object.keys(audioAnalysis).forEach(key => {
      this[key] = audioAnalysis[key];
    });
  }

  /**
   * Load SpotifyAudioAnalysis from JSON
   *
   * @static
   * @param {SpotifyAudioAnalysisAPIResponse} audioAnalysis
   * @returns
   * @memberof SpotifyAudioAnalysis
   */
  static fromJSON(audioAnalysis: SpotifyAudioAnalysisAPIResponse) {
    return new this({
      bars: SpotifyAudioAnalysisBars.fromJSON(audioAnalysis.bars),
      beats: SpotifyAudioAnalysisBeats.fromJSON(audioAnalysis.beats),
      meta: SpotifyAudioAnalysisMeta.fromJSON(audioAnalysis.meta),
      sections: SpotifyAudioAnalysisSections.fromJSON(audioAnalysis.sections),
      segments: SpotifyAudioAnalysisSegments.fromJSON(audioAnalysis.segments),
      tatums: audioAnalysis.tatums.map(tatum =>
        SpotifyAudioAnalysisTatum.fromJSON(tatum)
      ),
      track: SpotifyAudioAnalysisTrack.fromJSON(audioAnalysis.track)
    });
  }

  /**
   *
   *
   * @type {SpotifyAudioAnalysisBars}
   * @memberof SpotifyAudioAnalysis
   */
  readonly bars: SpotifyAudioAnalysisBars;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisBeats}
   * @memberof SpotifyAudioAnalysis
   */
  readonly beats: SpotifyAudioAnalysisBeats;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisMeta}
   * @memberof SpotifyAudioAnalysis
   */
  readonly meta: SpotifyAudioAnalysisMeta;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisSections}
   * @memberof SpotifyAudioAnalysis
   */
  readonly sections: SpotifyAudioAnalysisSections;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisSegments}
   * @memberof SpotifyAudioAnalysis
   */
  readonly segments: SpotifyAudioAnalysisSegments;

  /**
   *
   *
   * @type {SpotifyAudioAnalysisTatums}
   * @memberof SpotifyAudioAnalysis
   */
  readonly tatums: SpotifyAudioAnalysisTatum[];

  /**
   *
   *
   * @type {SpotifyAudioAnalysisTrack}
   * @memberof SpotifyAudioAnalysis
   */
  readonly track: SpotifyAudioAnalysisTrack;
}

/**
 * SpotifyAudioAnalysisBars
 *
 * @export
 * @class SpotifyAudioAnalysisBars
 */
export class SpotifyAudioAnalysisBars {
  /**
   * Creates an instance of SpotifyAudioAnalysisBars.
   *
   * @param {SpotifyAudioAnalysisBarsAPIResponse} audioAnalysisBars
   * @memberof SpotifyAudioAnalysisBars
   */
  constructor(audioAnalysisBars: SpotifyAudioAnalysisBarsAPIResponse) {
    Object.keys(audioAnalysisBars).forEach(key => {
      this[key] = audioAnalysisBars[key];
    });
  }

  /**
   * Load SpotifyAudioAnalysisBars from JSON
   *
   * @static
   * @param {SpotifyAudioAnalysisBarsAPIResponse} audioAnalysisBars
   * @returns
   * @memberof SpotifyAudioAnalysisBars
   */
  static fromJSON(audioAnalysisBars: SpotifyAudioAnalysisBarsAPIResponse) {
    return new this({
      start: audioAnalysisBars.start,
      duration: audioAnalysisBars.duration,
      confidence: audioAnalysisBars.confidence
    });
  }

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBars
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBars
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBars
   */
  readonly confidence: number;
}

/**
 * SpotifyAudioAnalysisBeats
 *
 * @export
 * @class SpotifyAudioAnalysisBeats
 */
export class SpotifyAudioAnalysisBeats {
  /**
   * Creates an instance of SpotifyAudioAnalysisBeats.
   *
   * @param {SpotifyAudioAnalysisBeats} audioAnalysisBeats
   * @memberof SpotifyAudioAnalysisBeats
   */
  constructor(audioAnalysisBeats: SpotifyAudioAnalysisBeats) {
    Object.keys(audioAnalysisBeats).forEach(key => {
      this[key] = audioAnalysisBeats[key];
    });
  }

  /**
   * Load SpotifyAudioAnalysisBeats from JSON
   *
   * @static
   * @param {SpotifyAudioAnalysisBeatsAPIResponse} audioAnalysisBeats
   * @returns
   * @memberof SpotifyAudioAnalysisBeats
   */
  static fromJSON(audioAnalysisBeats: SpotifyAudioAnalysisBeatsAPIResponse) {
    return new this({
      start: audioAnalysisBeats.start,
      duration: audioAnalysisBeats.duration,
      confidence: audioAnalysisBeats.confidence
    });
  }

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBeats
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBeats
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisBeats
   */
  readonly confidence: number;
}

/**
 * SpotifyAudioAnalysisMeta
 *
 * @export
 * @class SpotifyAudioAnalysisMeta
 */
export class SpotifyAudioAnalysisMeta {
  /**
   * Creates an instance of SpotifyAudioAnalysisMeta.
   *
   * @param {SpotifyAudioAnalysisMeta} audioAnalysisMeta
   * @memberof SpotifyAudioAnalysisMeta
   */
  constructor(audioAnalysisMeta: SpotifyAudioAnalysisMeta) {
    Object.keys(audioAnalysisMeta).forEach(key => {
      this[key] = audioAnalysisMeta[key];
    });
  }

  /**
   * Load SpotifyAudioAnalysisMeta from JSON
   *
   * @static
   * @param {SpotifyAudioAnalysisMetaAPIResponse} audioAnalysisMeta
   * @returns
   * @memberof SpotifyAudioAnalysisMeta
   */
  static fromJSON(audioAnalysisMeta: SpotifyAudioAnalysisMetaAPIResponse) {
    return new this({
      analyzerVersion: audioAnalysisMeta.analyzer_version,
      platform: audioAnalysisMeta.platform,
      detailedStatus: audioAnalysisMeta.detailed_status,
      statusCode: audioAnalysisMeta.status_code,
      timestamp: audioAnalysisMeta.timestamp,
      analysisTime: audioAnalysisMeta.analysis_time,
      inputProcess: audioAnalysisMeta.input_process
    });
  }

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisMeta
   */
  readonly analyzerVersion: string;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisMeta
   */
  readonly platform: string;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisMeta
   */
  readonly detailedStatus: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisMeta
   */
  readonly statusCode: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisMeta
   */
  readonly timestamp: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisMeta
   */
  readonly analysisTime: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisMeta
   */
  readonly inputProcess: string;
}

/**
 * SpotifyAudioAnalysisSections
 *
 * @export
 * @class SpotifyAudioAnalysisSections
 */
export class SpotifyAudioAnalysisSections {
  /**
   * Creates an instance of SpotifyAudioAnalysisSections.
   *
   * @param {SpotifyAudioAnalysisSections} audioAnalysisSections
   * @memberof SpotifyAudioAnalysisSections
   */
  constructor(audioAnalysisSections: SpotifyAudioAnalysisSections) {
    Object.keys(audioAnalysisSections).forEach(key => {
      this[key] = audioAnalysisSections[key];
    });
  }

  /**
   * Load SpotifyAudioAnalysisSections from JSON
   *
   * @static
   * @param {SpotifyAudioAnalysisSectionsAPIResponse} audioAnalysisSections
   * @returns
   * @memberof SpotifyAudioAnalysisSections
   */
  static fromJSON(
    audioAnalysisSections: SpotifyAudioAnalysisSectionsAPIResponse
  ) {
    return new this({
      start: audioAnalysisSections.start,
      duration: audioAnalysisSections.duration,
      confidence: audioAnalysisSections.confidence,
      loudness: audioAnalysisSections.loudness,
      tempo: audioAnalysisSections.tempo,
      tempoConfidence: audioAnalysisSections.tempo_confidence,
      key: audioAnalysisSections.key,
      keyConfidence: audioAnalysisSections.key_confidence,
      mode: audioAnalysisSections.mode,
      modeConfidence: audioAnalysisSections.mode_confidence,
      timeSignature: audioAnalysisSections.time_signature,
      timeSignatureConfidence: audioAnalysisSections.time_signature_confidence
    });
  }

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly loudness: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly tempo: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly tempoConfidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly key: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly keyConfidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly mode: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly modeConfidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly timeSignature: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSections
   */
  readonly timeSignatureConfidence: number;
}

/**
 * SpotifyAudioAnalysisSegments
 *
 * @export
 * @class SpotifyAudioAnalysisSegments
 */
export class SpotifyAudioAnalysisSegments {
  /**
   * Creates an instance of SpotifyAudioAnalysisSegments.
   *
   * @param {SpotifyAudioAnalysisSegments} audioAnalysisSegments
   * @memberof SpotifyAudioAnalysisSegments
   */
  constructor(audioAnalysisSegments: SpotifyAudioAnalysisSegments) {
    Object.keys(audioAnalysisSegments).forEach(key => {
      this[key] = audioAnalysisSegments[key];
    });
  }

  /**
   * Load SpotifyAudioAnalysisSegments from JSON
   *
   * @static
   * @param {SpotifyAudioAnalysisSegmentsAPIResponse} audioAnalysisSegments
   * @returns
   * @memberof SpotifyAudioAnalysisSegments
   */
  static fromJSON(
    audioAnalysisSegments: SpotifyAudioAnalysisSegmentsAPIResponse
  ) {
    return new this({
      start: audioAnalysisSegments.start,
      duration: audioAnalysisSegments.duration,
      confidence: audioAnalysisSegments.confidence,
      loudnessStart: audioAnalysisSegments.loudness_start,
      loudnessMaxTime: audioAnalysisSegments.loudness_max_time,
      loudnessMax: audioAnalysisSegments.loudness_max,
      loudnessEnd: audioAnalysisSegments.loudness_end,
      pitches: audioAnalysisSegments.pitches,
      timbre: audioAnalysisSegments.timbre
    });
  }

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly confidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly loudnessStart: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly loudnessMaxTime: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly loudnessMax: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly loudnessEnd: number;

  /**
   *
   *
   * @type {number[]}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly pitches: number[];

  /**
   *
   *
   * @type {number[]}
   * @memberof SpotifyAudioAnalysisSegments
   */
  readonly timbre: number[];
}

/**
 * SpotifyAudioAnalysisTatum
 *
 * @export
 * @class SpotifyAudioAnalysisTatum
 */
export class SpotifyAudioAnalysisTatum {
  /**
   * Creates an instance of SpotifyAudioAnalysisTatum.
   *
   * @param {SpotifyAudioAnalysisTatum} audioAnalysisTatum
   * @memberof SpotifyAudioAnalysisTatum
   */
  constructor(audioAnalysisTatum: SpotifyAudioAnalysisTatum) {
    Object.keys(audioAnalysisTatum).forEach(key => {
      this[key] = audioAnalysisTatum[key];
    });
  }

  /**
   * Load SpotifyAudioAnalysisTatum from JSON
   *
   * @static
   * @param {SpotifyAudioAnalysisTatumAPIResponse} audioAnalysisTatum
   * @returns
   * @memberof SpotifyAudioAnalysisTatum
   */
  static fromJSON(audioAnalysisTatum: SpotifyAudioAnalysisTatumAPIResponse) {
    return new this({
      start: audioAnalysisTatum.start,
      duration: audioAnalysisTatum.duration,
      confidence: audioAnalysisTatum.confidence
    });
  }

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTatum
   */
  readonly start: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTatum
   */
  readonly duration: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTatum
   */
  readonly confidence: number;
}

/**
 * SpotifyAudioAnalysisTrack
 *
 * @export
 * @class SpotifyAudioAnalysisTrack
 */
export class SpotifyAudioAnalysisTrack {
  /**
   * Creates an instance of SpotifyAudioAnalysisTrack.
   *
   * @param {SpotifyAudioAnalysisTrack} audioAnalysisTrack
   * @memberof SpotifyAudioAnalysisTrack
   */
  constructor(audioAnalysisTrack: SpotifyAudioAnalysisTrack) {
    Object.keys(audioAnalysisTrack).forEach(key => {
      this[key] = audioAnalysisTrack[key];
    });
  }

  /**
   * Load SpotifyAudioAnalysisTrack from JSON
   *
   * @static
   * @param {SpotifyAudioAnalysisTrackAPIResponse} audioAnalysisTrack
   * @returns
   * @memberof SpotifyAudioAnalysisTrack
   */
  static fromJSON(audioAnalysisTrack: SpotifyAudioAnalysisTrackAPIResponse) {
    return new this({
      numSamples: audioAnalysisTrack.num_samples,
      duration: audioAnalysisTrack.duration,
      sampleMD5: audioAnalysisTrack.sample_md5,
      offsetSeconds: audioAnalysisTrack.offset_seconds,
      windowSeconds: audioAnalysisTrack.window_seconds,
      analysisSampleRate: audioAnalysisTrack.analysis_sample_rate,
      analysisChannels: audioAnalysisTrack.analysis_channels,
      endOfFadeIn: audioAnalysisTrack.end_of_fade_in,
      startOfFadeOut: audioAnalysisTrack.start_of_fade_out,
      loudness: audioAnalysisTrack.loudness,
      tempo: audioAnalysisTrack.tempo,
      tempoConfidence: audioAnalysisTrack.tempo_confidence,
      timeSignature: audioAnalysisTrack.time_signature,
      timeSignatureConfidence: audioAnalysisTrack.time_signature_confidence,
      key: audioAnalysisTrack.key,
      keyConfidence: audioAnalysisTrack.key_confidence,
      mode: audioAnalysisTrack.mode,
      modeConfidence: audioAnalysisTrack.mode_confidence,
      codestring: audioAnalysisTrack.codestring,
      codeVersion: audioAnalysisTrack.code_version,
      echoprintstring: audioAnalysisTrack.echoprintstring,
      echoprintVersion: audioAnalysisTrack.echoprint_version,
      synchstring: audioAnalysisTrack.synchstring,
      synchVersion: audioAnalysisTrack.synch_version,
      rythmstring: audioAnalysisTrack.rythmstring,
      rythmVersion: audioAnalysisTrack.rythm_version
    });
  }

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly numSamples: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly duration: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly sampleMD5: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly offsetSeconds: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly windowSeconds: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly analysisSampleRate: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly analysisChannels: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly endOfFadeIn: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly startOfFadeOut: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly loudness: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly tempo: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly tempoConfidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly timeSignature: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly timeSignatureConfidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly key: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly keyConfidence: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly mode: number;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly modeConfidence: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly codestring: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly codeVersion: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly echoprintstring: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly echoprintVersion: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly synchstring: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly synchVersion: number;

  /**
   *
   *
   * @type {string}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly rythmstring: string;

  /**
   *
   *
   * @type {number}
   * @memberof SpotifyAudioAnalysisTrack
   */
  readonly rythmVersion: number;
}
