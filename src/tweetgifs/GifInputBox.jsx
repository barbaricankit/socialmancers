import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { debounce } from 'lodash';
import { useCallback } from 'react';
import { useTweet } from '.';
import { getGif } from '../data/gif-setup';

const GifInputBox = () => {
  const { tweetDispatch } = useTweet();

  //eslint-disable-next-line
  const debouncedValue = useCallback(
    debounce(async value => {
      const data = await getGif(value);
      tweetDispatch({ type: 'GIF_RESULTS', payload: { gifs: data } });
    }, 1000),
    []
  );

  const getGifs = async value => {
    debouncedValue(value);
  };

  return (
    <Box p={2}>
      <Input
        type="text"
        placeholder="Search..."
        className="gif_input"
        _focus="none"
        onChange={e => getGifs(e.target.value)}
      />
    </Box>
  );
};

export default GifInputBox;
