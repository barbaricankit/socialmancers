import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useTweet, GifModal } from '../tweetgifs';
import giflogo from './gif.png';

const GifButton = () => {
  const {
    tweetState: { showGifModal },
    tweetDispatch,
  } = useTweet();

  return (
    <Box pos="relative">
      <Button
        p={'0 5rem 0 1rem'}
        borderRadius="2rem"
        bg="#cadbec"
        cursor="pointer"
        _hover="none"
        onClick={() => tweetDispatch({ type: 'SHOW_HIDE_GIF_MODAL' })}
      >
        <Image src={giflogo} alt="GIF" className="img_size" />
        <Box>GIF</Box>
      </Button>
      {showGifModal && <GifModal />}
    </Box>
  );
};

export default GifButton;
