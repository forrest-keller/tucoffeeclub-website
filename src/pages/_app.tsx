import {
  ChakraProvider,
  extendTheme,
  Stack,
  ThemeOverride,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { AppProps } from 'next/app';

const themeOverride: ThemeOverride = {
  semanticTokens: {
    colors: {
      brand: {
        default: '#4c2b00',
        _dark: '#b29e84',
      },
      primary: {
        default: '#171819',
        _dark: '#f2f2f2',
      },
      secondary: {
        default: '#818387',
        _dark: '#b1b4b5',
      },
      background: {
        default: '#ded5c9',
        _dark: '#3b3225',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'primary',
      },
    },
    Text: {
      baseStyle: {
        color: 'primary',
      },
    },
    Divider: {
      baseStyle: {
        borderColor: 'secondary',
      },
    },
    Button: {
      variants: {
        outline: {
          borderColor: 'primary',
          color: 'primary',
          _hover: {
            backgroundColor: 'transparent',
            borderColor: 'secondary',
            color: 'secondary',
          },
        },
        ghost: {
          color: 'secondary',
          _hover: {
            backgroundColor: 'transparent',
            color: 'primary',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        textColor: 'brand',
      },
      variants: {
        social: {
          width: 'max-content',
          fontSize: 'lg',
          lineHeight: 'initial',
          display: 'grid',
          gridAutoFlow: 'column',
          gap: 2,
        },
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        // bg: mode("#ded5c9", "#3b3225")(props),
        bg: 'background',
      },
    }),
  },
  config: {
    initialColorMode: 'system',
  },
};

const theme = extendTheme(themeOverride);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
