import { Flex } from '@chakra-ui/layout';
import { GifButton, PostButton } from '.';

const ComposeFooter = () => {
  return (
    <Flex justify="space-between">
      <GifButton />
      <PostButton />
    </Flex>
  );
};

export default ComposeFooter;
