import React, { FunctionComponent } from 'react';

import { OctavesRange , selectKey} from "../../domain/keyboard"
import { notes } from "../../domain/note";
import  {Key} from "../Key/Key";

export const Keyboard: FunctionComponent = () => {
  return ( 
    <div className="Keyboard">
      {notes.map(({ midi, type, index, octave}) => {
        const label = selectKey(octave as OctavesRange, index)
        return <Key key={midi} type={type} label={label} />
      })}
    </div>
  )
}