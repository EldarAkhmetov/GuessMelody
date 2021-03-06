import React, {PureComponent} from 'react';
import AudioPlayer from '../../components/audio-player/audio-player.jsx';

const withActivePlayer = (Component) => {
  class WithActivePlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePlayer: -1
      };
    }

    render() {
      const {activePlayer} = this.state;
      return <Component
        {...this.props}
        renderPlayer={(it, i) => {
          return <AudioPlayer
            key={`track-${i}-${it.src}-${it.artist}`}
            src={it.src}
            isPlaying={i === activePlayer}
            onPlayButtonClick={() => {
              this.setState((prevState) => ({
                activePlayer: prevState.activePlayer === i ? -1 : i
              }));
            }}
          />;
        }}
      />;
    }
  }

  WithActivePlayer.propTypes = {};

  return WithActivePlayer;
};

export default withActivePlayer;
