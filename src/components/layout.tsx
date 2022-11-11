import {
  Button,
  Stack,
  useColorMode,
  Box,
  Container,
  Center,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import darkTransparentLogoVertical from '../../public/dark_transparent_logo_vertical.svg';
import lightTransparentLogoVertical from '../../public/light_transparent_logo_vertical.svg';
import { GiCoffeeBeans } from 'react-icons/gi';

const Layout: FunctionComponent = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center minHeight="100vh">
      <Container>
        <Stack spacing={10} alignItems="center">
          <Box maxWidth={300}>
            <Image
              src={
                colorMode === 'dark'
                  ? darkTransparentLogoVertical
                  : lightTransparentLogoVertical
              }
              alt="Trinity University Coffee Club Vertical Logo"
            />
          </Box>
          <Box>{children}</Box>
          <Button
            leftIcon={<GiCoffeeBeans />}
            onClick={() => toggleColorMode()}
            variant="ghost"
          >
            {`${colorMode === 'light' ? 'Dark' : 'Light'} Roast`}
          </Button>
        </Stack>
      </Container>
    </Center>
  );
};

export default Layout;
