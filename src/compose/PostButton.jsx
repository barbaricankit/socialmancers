import { Button } from '@chakra-ui/button';
import { useTweet } from '.';
import { v4 } from 'uuid';
let moment = require('moment');

const PostButton = () => {
  const { tweetState: state, tweetDispatch: dispatch } = useTweet();

  const addPost = () => {
    dispatch({
      type: 'ADD_TWEET_TO_FEEDS',
      payload: {
        feed: {
          id: v4(),
          desc: state.tweet,
          postedBy: 'Ankit Singhania',
          postedDate: moment().format('lll'),
          gif: state.gif,
          likes: 0,
        },
      },
    });
    dispatch({ type: 'RESET_ALL' });
  };

  return (
    <Button
      p={'0rem 2rem'}
      disabled={state.gif || state.tweet ? false : true}
      borderRadius="2rem"
      cursor="pointer"
      _hover="none"
      bg="#1298ff"
      color="white"
      onClick={() => addPost()}
    >
      Post
    </Button>
  );
};

export default PostButton;
