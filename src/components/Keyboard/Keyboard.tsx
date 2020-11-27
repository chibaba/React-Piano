import React, { FunctionComponent } from 'react';

import { OctavesRange , selectKey} from "../../domain/keyboard"
import { MidiValue, notes } from "../../domain/note";
import  {Key} from "../Key/Key";

export interface KeyboardProps {
  loading: boolean
  play: (note: MidiValue) => Promise<void>
  stop: (note:MidiValue) => Promise<void>
}


export const Keyboard: FunctionComponent<KeyboardProps> = ({
  loading,
  stop,
  play
}) => {

  <div className="Keyboard">
      {notes.map(({ midi, type, index, octave}) => {
        const label = selectKey(octave as OctavesRange, index)
      return ( 
         <Key key={midi} type={type} label={label} disabled={loading} onDown={()=> play(midi)} onUp={() => stop(midi)}/>
      )
      })}
    </div>
  )
}