let GifPlayer = require('react-gif-player');

const PlayGif = ({ gif, className }) => {
  return (
    <>
      {gif && (
        <GifPlayer
          className="play_gif"
          gif={gif?.images?.original.url}
          still={gif?.images?.original.webp}
        />
      )}
    </>
  );
};

export default PlayGif;
