import * as mongoose from 'mongoose';

export const SpotifyAudioAnalysisBarsSchema = new mongoose.Schema({
  start: Number,
  duration: Number,
  confidence: Number
});

export const SpotifyAudioAnalysisBeatsSchema = new mongoose.Schema({
  start: Number,
  duration: Number,
  confidence: Number
});

export const SpotifyAudioAnalysisMetaSchema = new mongoose.Schema({
  analyzerVersion: String,
  platform: String,
  detailedStatus: String,
  statusCode: Number,
  timestamp: Number,
  analysisTime: Number,
  inputProcess: String
});

export const SpotifyAudioAnalysisSectionsSchema = new mongoose.Schema({
  start: Number,
  duration: Number,
  confidence: Number,
  loudness: Number,
  tempo: Number,
  tempoConfidence: Number,
  key: Number,
  keyConfidence: Number,
  mode: Number,
  modeConfidence: Number,
  timeSignature: Number,
  timeSignatureConfidence: Number
});

export const SpotifyAudioAnalysisSegmentsSchema = new mongoose.Schema({
  start: Number,
  duration: Number,
  confidence: Number,
  loudnessStart: Number,
  loudnessMaxTime: Number,
  loudnessEnd: Number,
  pitches: [Number],
  timbre: [Number]
});

export const SpotifyAudioAnalysisTrackSchema = new mongoose.Schema({
  numSamples: Number,
  duration: Number,
  sampleMD5: String,
  offsetSeconds: Number,
  windowSeconds: Number,
  analysisSampleRate: Number,
  analysisChannels: Number,
  endOfFadeIn: Number,
  startOfFadeOut: Number,
  loudness: Number,
  tempo: Number,
  tempoConfidence: Number,
  timeSignature: Number,
  timeSignatureConfidence: Number,
  key: Number,
  keyConfidence: Number,
  mode: Number,
  modeConfidence: Number,
  codestring: String,
  codeVersion: Number,
  echoprintstring: String,
  echoprintVersion: Number,
  synchstring: String,
  synchVersion: Number,
  rythmstring: String,
  rythmVersion: Number
});

export const SpotifyAudioAnalysisTatumSchema = new mongoose.Schema({
  start: Number,
  duration: Number,
  confidence: Number
});

export const SpotifyAudioAnalysisSchema = new mongoose.Schema({
  bars: SpotifyAudioAnalysisBarsSchema,
  beats: SpotifyAudioAnalysisBeatsSchema,
  meta: SpotifyAudioAnalysisMetaSchema,
  sections: SpotifyAudioAnalysisSectionsSchema,
  segments: SpotifyAudioAnalysisSegmentsSchema,
  tatums: [SpotifyAudioAnalysisTatumSchema],
  track: SpotifyAudioAnalysisTrackSchema
});
