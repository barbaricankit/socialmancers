import { Box } from '@chakra-ui/layout';
import { useTweet } from '.';
let GifPlayer = require('react-gif-player');

const ViewGifs = () => {
  const {
    tweetState: { gifs },
    tweetDispatch,
  } = useTweet();

  return (
    <Box mt={2}>
      {gifs?.map(gif => (
        <GifPlayer
          key={gif.id}
          style={{ margin: 'auto' }}
          gif={gif?.images.fixed_width.url}
          still={gif?.images.fixed_width.webp}
          onClick={() => {
            tweetDispatch({ type: 'ADD_GIF', payload: { gif } });
            tweetDispatch({ type: 'SHOW_HIDE_GIF_MODAL' });
          }}
        />
      ))}
    </Box>
  );
};

export default ViewGifs;
