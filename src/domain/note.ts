export type NoteType = "natural" | "flat" | "sharp"
export type NotePitch = "A" | "B" | "C" |"D"| "E" | "F" | "G"
export type OctaveIndex = "1" | "2" | "3" | "4" | "5" |"6"| "7"| "8"


export type MidiValue =number
export type PitchIndex = number


export interface Note {
  midi: MidiValue
  type: NoteType
}

const C1_MIDI_NUMBER = 24
const C4_MIDI_NUMBER = 60
const B5_MIDI_NUMBER = 83

export const LOWER_NOTE = C4_MIDI_NUMBER
export const HIGER_NOTE = B5_MIDI_NUMBER
export const SEMINOTE_IN_OCTAVE = 12


export const NATURAL_PITCH_INDICES:PitchIndex[] = [
  0,
  2,
  4,
  5,
  7,
  9,
  11
]