import React, {FunctionComponent} from "react"

export const NoAudioMessage: FunctionComponent = () => {
  return (
    <div>
      <p>Sorry, This is not going to work :-(</p>
      <p>
        Seems like your browser dosent Support<code>Audio API</code>
        .
      </p>
    </div>
  )
}