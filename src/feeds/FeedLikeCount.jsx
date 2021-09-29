import { Flex, Text } from '@chakra-ui/layout';
import { AiFillLike } from 'react-icons/ai';
import { useTweet } from '.';

const FeedLikeCount = ({ feed }) => {
  const { tweetDispatch } = useTweet();
  return (
    <Flex
      m={4}
      fontSize="md"
      alignItems="center"
      onClick={() =>
        tweetDispatch({ type: 'LIKED_DISLIKED_TWEET', payload: { feed } })
      }
    >
      <AiFillLike color={feed.isLiked && 'blue'} />
      <Text ml={1}>{feed.likes}</Text>
    </Flex>
  );
};

export default FeedLikeCount;
