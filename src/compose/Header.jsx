import { Flex, Box } from '@chakra-ui/layout';
import { FaTimes } from 'react-icons/fa';
import { TextBox, UserAvatar, PlayGif, useTweet } from '.';

const ComposeHeader = () => {
  const {
    tweetState: { gif },
    tweetDispatch,
  } = useTweet();

  const removeGifs = () => {
    tweetDispatch({ type: 'REMOVE_GIF' });
  };
  return (
    <Flex>
      <UserAvatar user={'Ankit Singhania'} />
      <Box flexGrow={1} mb={2}>
        <TextBox />
        <Box pos="relative" className="post-gif-player">
          <PlayGif gif={gif} />
          <FaTimes className="cross_icon" onClick={() => removeGifs()} />
        </Box>
      </Box>
    </Flex>
  );
};

export default ComposeHeader;
