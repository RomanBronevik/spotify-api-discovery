import {
  SpotifyAudioAnalysisAPIResponse,
  SpotifyAudioAnalysisSectionsAPIResponse,
  SpotifyAudioAnalysisMetaAPIResponse,
  SpotifyAudioAnalysisBeatsAPIResponse,
  SpotifyAudioAnalysisBarsAPIResponse,
  SpotifyAudioAnalysisSegmentsAPIResponse,
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
   * @param {SpotifyAudioAnalysisAPIResponse} audioAnalysis
   * @memberof SpotifyAudioAnalysis
   */
  constructor(audioAnalysis: SpotifyAudioAnalysisAPIResponse) {
    this.bars = new SpotifyAudioAnalysisBars(audioAnalysis.bars);
    this.beats = new SpotifyAudioAnalysisBeats(audioAnalysis.beats);
    this.meta = new SpotifyAudioAnalysisMeta(audioAnalysis.meta);
    this.sections = new SpotifyAudioAnalysisSections(audioAnalysis.sections);
    this.segments = new SpotifyAudioAnalysisSegments(audioAnalysis.segments);
    this.tatums = audioAnalysis.tatums.map(
      tatum => new SpotifyAudioAnalysisTatum(tatum)
    );
    this.track = new SpotifyAudioAnalysisTrack(audioAnalysis.track);
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
    this.start = audioAnalysisBars.start;
    this.duration = audioAnalysisBars.duration;
    this.confidence = audioAnalysisBars.confidence;
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
   * @param {SpotifyAudioAnalysisBeatsAPIResponse} audioAnalysisBeats
   * @memberof SpotifyAudioAnalysisBeats
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
   * @param {SpotifyAudioAnalysisMetaAPIResponse} audioAnalysisMeta
   * @memberof SpotifyAudioAnalysisMeta
   */
  constructor(audioAnalysisMeta: SpotifyAudioAnalysisMetaAPIResponse) {
    this.analyzerVersion = audioAnalysisMeta.analyzer_version;
    this.platform = audioAnalysisMeta.platform;
    this.detailedStatus = audioAnalysisMeta.detailed_status;
    this.statusCode = audioAnalysisMeta.status_code;
    this.timestamp = audioAnalysisMeta.timestamp;
    this.analysisTime = audioAnalysisMeta.analysis_time;
    this.inputProcess = audioAnalysisMeta.input_process;
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
   * @param {SpotifyAudioAnalysisSectionsAPIResponse} audioAnalysisSections
   * @memberof SpotifyAudioAnalysisSections
   */
  constructor(audioAnalysisSections: SpotifyAudioAnalysisSectionsAPIResponse) {
    this.start = audioAnalysisSections.start;
    this.duration = audioAnalysisSections.duration;
    this.confidence = audioAnalysisSections.confidence;
    this.loudness = audioAnalysisSections.loudness;
    this.tempo = audioAnalysisSections.tempo;
    this.tempoConfidence = audioAnalysisSections.tempo_confidence;
    this.key = audioAnalysisSections.key;
    this.keyConfidence = audioAnalysisSections.key_confidence;
    this.mode = audioAnalysisSections.mode;
    this.modeConfidence = audioAnalysisSections.mode_confidence;
    this.timeSignature = audioAnalysisSections.time_signature;
    this.timeSignatureConfidence =
      audioAnalysisSections.time_signature_confidence;
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
   * @param {SpotifyAudioAnalysisSegmentsAPIResponse} audioAnalysisSegments
   * @memberof SpotifyAudioAnalysisSegments
   */
  constructor(audioAnalysisSegments: SpotifyAudioAnalysisSegmentsAPIResponse) {
    this.start = audioAnalysisSegments.start;
    this.duration = audioAnalysisSegments.duration;
    this.confidence = audioAnalysisSegments.confidence;
    this.loudnessStart = audioAnalysisSegments.loudness_start;
    this.loudnessMaxTime = audioAnalysisSegments.loudness_max_time;
    this.loudnessEnd = audioAnalysisSegments.loudness_end;
    this.pitches = audioAnalysisSegments.pitches;
    this.timbre = audioAnalysisSegments.timbre;
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
   * @param {any} audioAnalysisTatum
   * @memberof SpotifyAudioAnalysisTatum
   */
  constructor(audioAnalysisTatum) {
    this.start = audioAnalysisTatum.start;
    this.duration = audioAnalysisTatum.duration;
    this.confidence = audioAnalysisTatum.confidence;
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
   * @param {SpotifyAudioAnalysisTrackAPIResponse} audioAnalysisTrack
   * @memberof SpotifyAudioAnalysisTrack
   */
  constructor(audioAnalysisTrack: SpotifyAudioAnalysisTrackAPIResponse) {
    this.numSamples = audioAnalysisTrack.num_samples;
    this.duration = audioAnalysisTrack.duration;
    this.sampleMD5 = audioAnalysisTrack.sample_md5;
    this.offsetSeconds = audioAnalysisTrack.offset_seconds;
    this.windowSeconds = audioAnalysisTrack.window_seconds;
    this.analysisSampleRate = audioAnalysisTrack.analysis_sample_rate;
    this.analysisChannels = audioAnalysisTrack.analysis_channels;
    this.endOfFadeIn = audioAnalysisTrack.end_of_fade_in;
    this.startOfFadeOut = audioAnalysisTrack.start_of_fade_out;
    this.loudness = audioAnalysisTrack.loudness;
    this.tempo = audioAnalysisTrack.tempo;
    this.tempoConfidence = audioAnalysisTrack.tempo_confidence;
    this.timeSignature = audioAnalysisTrack.time_signature;
    this.key = audioAnalysisTrack.key;
    this.keyConfidence = audioAnalysisTrack.key_confidence;
    this.mode = audioAnalysisTrack.mode;
    this.modeConfidence = audioAnalysisTrack.mode_confidence;
    this.codestring = audioAnalysisTrack.codestring;
    this.codeVersion = audioAnalysisTrack.code_version;
    this.echoprintstring = audioAnalysisTrack.echoprintstring;
    this.echoprintVersion = audioAnalysisTrack.echoprint_version;
    this.synchstring = audioAnalysisTrack.synchstring;
    this.synchVersion = audioAnalysisTrack.synch_version;
    this.rythmstring = audioAnalysisTrack.rythmstring;
    this.rythmVersion = audioAnalysisTrack.rythm_version;
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
