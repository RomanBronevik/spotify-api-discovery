import { SpotifyAudioFeaturesAPIResponse } from './../interfaces/spotify-audio-features-api-response.interface';
import { SpotifyEntityType } from '../../types/types/spotify-entity-type.type';

/**
 * SpotifyAudioFeatures
 *
 * @export
 * @class SpotifyAudioFeatures
 */
export class SpotifyAudioFeatures {
  /**
   * Creates an instance of SpotifyAudioFeatures.
   *
   * @param {SpotifyAudioFeaturesAPIResponse} audioFeatures
   * @memberof SpotifyAudioFeatures
   */
  constructor(audioFeatures: SpotifyAudioFeaturesAPIResponse) {
    this.id = audioFeatures.id;

    this.acousticness = audioFeatures.acousticness;
    this.analysisURL = audioFeatures.analysis_url;
    this.danceability = audioFeatures.danceability;
    this.durationMs = audioFeatures.duration_ms;
    this.energy = audioFeatures.energy;
    this.instrumentalness = audioFeatures.instrumentalness;
    this.key = audioFeatures.key;
    this.liveness = audioFeatures.liveness;
    this.loudness = audioFeatures.loudness;
    this.mode = audioFeatures.mode;
    this.speechiness = audioFeatures.speechiness;
    this.tempo = audioFeatures.tempo;
    this.timeSignature = audioFeatures.time_signature;
    this.trackHref = audioFeatures.track_href;
    this.type = audioFeatures.type;
    this.uri = audioFeatures.uri;
    this.valence = audioFeatures.valence;
  }

  /**
   * The Spotify ID for the track.
   *
   * @type {string}
   * @memberof SpotifyAudioFeatures
   */
  readonly id: string;

  /**
   * A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0
   * represents high confidence the track is acoustic.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly acousticness: number;

  /**
   * An HTTP URL to access the full audio analysis of this track. An access
   * token is required to access this data.
   *
   * @type {string}
   * @memberof SpotifyAudioFeatures
   */
  readonly analysisURL: string;

  /**
   * Danceability describes how suitable a track is for dancing based on a
   * combination of musical elements including tempo, rhythm stability, beat
   * strength, and overall regularity. A value of 0.0 is least danceable and 1.0
   * is most danceable.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly danceability: number;

  /**
   * The duration of the track in milliseconds.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly durationMs: number;

  /**
   * Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of
   * intensity and activity. Typically, energetic tracks feel fast, loud, and
   * noisy. For example, death metal has high energy, while a Bach prelude
   * scores low on the scale. Perceptual features contributing to this attribute
   * include dynamic range, perceived loudness, timbre, onset rate, and general
   * entropy.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly energy: number;

  /**
   * Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are
   * treated as instrumental in this context. Rap or spoken word tracks are
   * clearly “vocal”. The closer the instrumentalness value is to 1.0, the
   * greater likelihood the track contains no vocal content. Values above 0.5
   * are intended to represent instrumental tracks, but confidence is higher as
   * the value approaches 1.0.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly instrumentalness: number;

  /**
   * The key the track is in. Integers map to pitches using standard Pitch Class
   * notation . E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly key: number;

  /**
   * Detects the presence of an audience in the recording. Higher liveness
   * values represent an increased probability that the track was performed
   * live. A value above 0.8 provides strong likelihood that the track is live.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly liveness: number;

  /**
   * The overall loudness of a track in decibels (dB). Loudness values are
   * averaged across the entire track and are useful for comparing relative
   * loudness of tracks. Loudness is the quality of a sound that is the primary
   * psychological correlate of physical strength (amplitude). Values typical
   * range between -60 and 0 db.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly loudness: number;

  /**
   * Mode indicates the modality (major or minor) of a track, the type of scale
   * from which its melodic content is derived. Major is represented by 1 and
   * minor is 0.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly mode: number;

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
   * @memberof SpotifyAudioFeatures
   */
  readonly speechiness: number;

  /**
   * The overall estimated tempo of a track in beats per minute (BPM). In
   * musical terminology, tempo is the speed or pace of a given piece and
   * derives directly from the average beat duration.
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly tempo: number;

  /**
   * An estimated overall time signature of a track. The time signature (meter)
   * is a notational convention to specify how many beats are in each bar
   * (or measure).
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly timeSignature: number;

  /**
   * A link to the Web API endpoint providing full details of the track.
   *
   * @type {string}
   * @memberof SpotifyAudioFeatures
   */
  readonly trackHref: string;

  /**
   * The object type: “audio_features”
   *
   * @type {SpotifyEntityType}
   * @memberof SpotifyAudioFeatures
   */
  readonly type: SpotifyEntityType;

  /**
   * The Spotify URI for the track.
   *
   * @type {string}
   * @memberof SpotifyAudioFeatures
   */
  readonly uri: string;

  /**
   * A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a
   * track. Tracks with high valence sound more positive (e.g. happy, cheerful,
   * euphoric), while tracks with low valence sound more negative (e.g. sad,
   * depressed, angry).
   *
   * @type {number}
   * @memberof SpotifyAudioFeatures
   */
  readonly valence: number;
}
