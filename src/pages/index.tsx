import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorMode,
  Wrap,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Head from "next/head";
import Image from "next/image";
import darkLogoVertical from "../../public/dark_logo_vertical.svg";
import lightLogoVertical from "../../public/light_logo_vertical.svg";
import darkBrandmark from "../../public/dark_brandmark.svg";
import lightBrandmark from "../../public/light_brandmark.svg";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>Coffee Club</title>
        <meta
          name="description"
          content="Join Trinity's most uplifting club as we learn, drink, and share our love of coffee!"
        />
        <link
          rel="icon"
          href="/favicon_light.ico"
          media="(prefers-color-scheme:no-preference)"
        />
        <link
          rel="icon"
          href="/favicon_dark.ico"
          media="(prefers-color-scheme:dark)"
        />
        <link
          rel="icon"
          href="/favicon_light.ico"
          media="(prefers-color-scheme:light)"
        />
      </Head>
      <Stack minHeight="100vh">
        <Container marginY={10} maxWidth="xl">
          <Stack spacing={10}>
            <Box maxWidth={300} alignSelf="center">
              <Image
                src={
                  colorMode === "dark" ? darkLogoVertical : lightLogoVertical
                }
                alt="Trinity University Coffee Club Vertical Logo"
              />
            </Box>
            <Stack>
              <Heading>Connect With Us</Heading>
              <Text fontSize="lg">
                {`Join Trinity's most uplifting club as we share our
            love of coffee!`}
              </Text>
              <Wrap></Wrap>
            </Stack>
          </Stack>
        </Container>
        <Spacer />
        <Stack align="center" justify="center" paddingY={5}>
          <Stack
            as="footer"
            direction="row"
            spacing={10}
            alignItems="center"
            justifyItems="center"
          >
            <Box maxWidth={50} opacity={0.5}>
              <Image
                src={colorMode === "dark" ? darkBrandmark : lightBrandmark}
                alt="Trinity University Coffee Club Vertical Logo"
              />
            </Box>
            <Stack>
              <Button
                leftIcon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                onClick={() => toggleColorMode()}
                variant="outline"
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
    </>
  );
};

export default Home;
