import { Box } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import { useTweet } from '../context';

const TextBox = () => {
  const { tweetState: state, tweetDispatch: dispatch } = useTweet();
  return (
    <Box flexGrow={1}>
      <Textarea
        border={'none'}
        _focus={'none'}
        placeholder="Write Something here..."
        ml={2}
        resize="none"
        value={state.tweet}
        h="7rem"
        onChange={e =>
          dispatch({ type: 'ADD_TWEET', payload: { value: e.target.value } })
        }
      />
    </Box>
  );
};

export default TextBox;
