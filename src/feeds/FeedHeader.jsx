import { Box, Flex } from '@chakra-ui/layout';
import { FeedDate, FeedUser, UserAvatar } from '.';

const FeedHeader = ({ user, date }) => {
  return (
    <Box m={2}>
      <Flex alignItems={'center'}>
        <UserAvatar user={user} />
        <Flex flexDir="column" alignItems="flex-start" ml={2}>
          <FeedUser user={user} />
          <FeedDate date={date} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default FeedHeader;
