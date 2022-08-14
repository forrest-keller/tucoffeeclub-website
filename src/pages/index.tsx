import { Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Layout from '../components/layout';
import SEO from '../components/seo';
import socials from '../helpers/socials';
import Social from '../components/social';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Stack align="center">
          <Stack>
            <Social {...socials.mailingList} />
            <Social {...socials.instagram} />
            <Social {...socials.email} />
          </Stack>
        </Stack>
      </Layout>
    </>
  );
};

export default Home;
