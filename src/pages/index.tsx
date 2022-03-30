import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import socials from "../helpers/socials";
import Social from "../components/social";

const Home: NextPage = () => {
  const description = "Sharing our love of coffee with the Trinity community.";

  return (
    <>
      <SEO description={description} />
      <Layout>
        <Stack spacing={5} align="center">
          <Heading>Get Connected</Heading>
          <Stack>
            <Social {...socials.mailingList} />
            <Social {...socials.calendar} />
            <Social {...socials.googleDrive} />
            <Social {...socials.instagram} />
            <Social {...socials.email} />
          </Stack>
        </Stack>
      </Layout>
    </>
  );
};

export default Home;
