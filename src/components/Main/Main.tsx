import React,  {FunctionComponent} from 'react';
import {Keyboard} from "../Keyboard/Keyboard"
import { NoAudioMessage } from "../NoAudioMessage/NoAudioMessage"
import { useAudioContext} from "../AudioContextProvider/useAudioContext"


export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext()
  return !!AudioContext ? <Keyboard /> : <NoAudioMessage />
}