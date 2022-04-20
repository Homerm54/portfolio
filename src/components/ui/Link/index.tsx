import { StyledNormalLink } from './style';
import { LinkProps } from './types';

const Link = ({
  children,
  type = "text",
  animationCenter = 'left',
  ...rest
}: LinkProps): JSX.Element => {
  return (
    <StyledNormalLink
      $type={type}
      $active={false}
      $center={animationCenter}
      {...rest}
    >
      {children}
    </StyledNormalLink>
  );
};


export { Link };
