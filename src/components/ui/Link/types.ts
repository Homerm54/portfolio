import React from "react";

type LinkTypes = 'primary' | 'text';

interface LinkProps extends Omit<React.ComponentPropsWithoutRef<'a'>, 'type'> {
  /** Type of link to use, if text, link will be plain text */
  type?: LinkTypes;
}

interface StyledLinkProps {
  $active: boolean;
  $type: LinkTypes;
}

export type { LinkProps, StyledLinkProps };