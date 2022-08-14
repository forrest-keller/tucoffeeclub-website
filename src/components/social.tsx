import { Icon, Link } from '@chakra-ui/react';
import { FunctionComponent } from 'react';
import { IconType } from 'react-icons';

export interface SocialProps {
  name: string;
  identifier?: string;
  url: string;
  icon: IconType;
}

const Social: FunctionComponent<SocialProps> = ({
  icon,
  name,
  url,
  identifier,
}) => {
  return (
    <Link variant="social" href={url} isExternal>
      <Icon fontSize="2xl" aria-label={name} as={icon} />
      {identifier ? `${name} (${identifier})` : name}
    </Link>
  );
};

export default Social;
