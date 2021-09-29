import { Box } from '@chakra-ui/layout';
import { ComposeFooter, ComposeHeader } from '.';

const Compose = () => {
  return (
    <Box m={2} mt={2} bg={'white'} boxShadow="dark-lg" p={3}>
      <ComposeHeader />
      <ComposeFooter />
    </Box>
  );
};

export default Compose;
