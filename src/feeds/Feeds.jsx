import { Box } from '@chakra-ui/layout';
import { useTweet, Feed } from '.';

const Feeds = () => {
  const { tweetState } = useTweet();

  return (
    <Box mt={8}>
      <hr />
      {tweetState.feeds?.map(feed => (
        <Box key={feed.id}>
          <Feed feed={feed} />
          <hr />
        </Box>
      ))}
      <hr />
    </Box>
  );
};

export default Feeds;
