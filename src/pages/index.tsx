import { Heading, Icon, Link, Stack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { GiPhotoCamera } from 'react-icons/gi';
import { GoMailRead } from 'react-icons/go'
import Layout from '../components/layout';
import SEO from '../components/seo';

const Home: NextPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <Stack align="center" spacing={10}>
          <Stack direction={{ base: "column", md: "row" }} spacing={10} textAlign="center">
            <Stack spacing={1}>
              <Heading fontSize="md" color="secondary">President</Heading>
              <Heading fontSize="xl">Forrest Keller</Heading>
            </Stack>
            <Stack spacing={1}>
              <Heading fontSize="md" color="secondary">Vice President</Heading>
              <Heading fontSize="xl">William Hinson</Heading>
            </Stack>
          </Stack>
          <Stack spacing={5} align="center">
            <Link variant="social" href={"https://docs.google.com/forms/d/e/1FAIpQLSf0TQf2LS5CiicxndaGTV-q8K7UsYhF1oZXDuT5nYnmCVq4ug/viewform?usp=sf_link"} isExternal>
              <Icon fontSize="xl" as={GoMailRead} />
              Mailing List
            </Link>
            <Link variant="social" href={"https://www.instagram.com/tucoffeeclub/"} isExternal>
              <Icon fontSize="2xl" as={GiPhotoCamera} />
              Instagram
            </Link>
          </Stack>
        </Stack>
      </Layout>
    </>
  );
};

export default Home;
