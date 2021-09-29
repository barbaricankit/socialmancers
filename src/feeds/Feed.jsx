import { Box } from '@chakra-ui/layout';
import { FeedLikeCount, FeedDescription, FeedHeader } from '.';

const Feed = ({ feed }) => {
  return (
    <Box m={4}>
      <FeedHeader user={feed.postedBy} date={feed.postedDate} />
      <FeedDescription desc={feed.desc} gif={feed.gif} />

      <FeedLikeCount feed={feed} />
    </Box>
  );
};

export default Feed;
