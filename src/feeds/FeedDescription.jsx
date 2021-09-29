import { Box, Text } from '@chakra-ui/layout';
import { PlayGif } from '.';

const FeedDescription = ({ desc, gif }) => {
  return (
    <Box m={4}>
      <Text fontSize="md">{desc}</Text>
      <PlayGif gif={gif} className={'post-gif-player'} />
    </Box>
  );
};

export default FeedDescription;
