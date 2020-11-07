import { InstrumentName } from "soundfont-player";
import { MidiValue } from "../../domain/note";

interface Settings {
  AudioContext: AudioContextType
}

interface Adapted {
  loading: boolean
  current: Optional<InstrumentName>

  load(instrument?: InstrumentName): Promise<void>

  play(note: MidValue): Promise<void>
  stop(note: MidiValue): Promise<void>

}

export function useSoundfont({ AudioContext }: Settings): Adapted {
  let activeNodes: AudioNodesRegistry = {}
}