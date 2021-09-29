import { Box } from '@chakra-ui/layout';
import { GifInputBox, ViewGifs } from '.';

const GifModal = () => {
  return (
    <Box
      bg={'white'}
      pos="absolute"
      top={'2.5rem'}
      left={5}
      zIndex={2}
      className="gif-modal"
    >
      <GifInputBox />
      <ViewGifs />
    </Box>
  );
};

export default GifModal;
