import { StyledNormalLink } from './style';
import { LinkProps } from './types';

const Link = ({
  children,
  type="text",
  ...rest
}: LinkProps): JSX.Element => {
  return (
    <StyledNormalLink
      $type={type}
      $active={false}
      {...rest}
    >
      {children}
    </StyledNormalLink>
  );
};


export { Link };
