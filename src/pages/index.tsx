import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Icon,
  IconButton,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorMode,
  Wrap,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Head from "next/head";
import Image from "next/image";
import darkLogoVertical from "../../public/dark_logo_vertical.svg";
import lightLogoVertical from "../../public/light_logo_vertical.svg";
import darkBrandmark from "../../public/dark_brandmark.svg";
import lightBrandmark from "../../public/light_brandmark.svg";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const description =
    "Join Trinity's most uplifting club as we share our love of coffee!";

  return (
    <>
      <Head>
        <title>Coffee Club</title>
        <meta name="description" content={description} />
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
      <Center minHeight="100vh">
        <Container marginY={10} maxWidth="xl">
          <Stack spacing={20}>
            <Box maxWidth={300} alignSelf="center" opacity={0.5}>
              <Image
                src={
                  colorMode === "dark" ? darkLogoVertical : lightLogoVertical
                }
                alt="Trinity University Coffee Club Vertical Logo"
              />
            </Box>
            <Stack align="center" spacing={5}>
              <Heading>Connect With Us</Heading>
              <Text fontSize="lg" textAlign="center">
                {description}
              </Text>
              <Stack>
                <Link
                  variant="social"
                  href="https://www.instagram.com/tucoffeeclub/"
                  isExternal
                >
                  <Icon
                    fontSize="2xl"
                    aria-label="Instagram"
                    as={AiFillInstagram}
                  />
                  @tucoffeeclub
                </Link>
                <Link
                  variant="social"
                  href="mailto:fkeller@trinity.edu"
                  isExternal
                >
                  <Icon fontSize="2xl" aria-label="Email" as={AiFillMail} />
                  fkeller@trinity.edu
                </Link>
              </Stack>
            </Stack>
            <Stack align="center" justify="center" opacity={0.5}>
              <Stack
                as="footer"
                direction="row"
                spacing={10}
                alignItems="center"
                justifyItems="center"
              >
                <Stack>
                  <Button
                    leftIcon={
                      colorMode === "light" ? <MoonIcon /> : <SunIcon />
                    }
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
        </Container>
      </Center>
    </>
  );
};

export default Home;
