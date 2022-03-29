import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  Stack,
  useColorMode,
  Text,
  Box,
  Container,
  Center,
} from "@chakra-ui/react";
import Image from "next/image";
import { FunctionComponent } from "react";
import darkTransparentLogoVertical from "../../public/dark_transparent_logo_vertical.svg";
import lightTransparentLogoVertical from "../../public/light_transparent_logo_vertical.svg";

const Layout: FunctionComponent = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center minHeight="100vh">
      <Container marginY={10} maxWidth="xl">
        <Stack spacing={10}>
          <Box maxWidth={300} alignSelf="center">
            <Image
              src={
                colorMode === "dark"
                  ? darkTransparentLogoVertical
                  : lightTransparentLogoVertical
              }
              alt="Trinity University Coffee Club Vertical Logo"
            />
          </Box>
          <Box>{children}</Box>
          <Stack align="center" justify="center">
            <Stack
              as="footer"
              direction="row"
              spacing={10}
              alignItems="center"
              justifyItems="center"
            >
              <Stack>
                <Button
                  leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                  onClick={() => toggleColorMode()}
                  variant="ghost"
                  size="sm"
                >
                  {`${colorMode === "light" ? "Dark" : "Light"} Mode`}
                </Button>
              </Stack>
            </Stack>
            <Text fontSize="sm" color="secondary">
              &copy; Trinity University
            </Text>
          </Stack>
        </Stack>
      </Container>
    </Center>
  );
};

export default Layout;
