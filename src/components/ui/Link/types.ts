import React from "react";

type LinkTypes = 'primary' | 'text';
type AnimationCenter = 'left' | 'right' | 'center';

interface LinkProps extends Omit<React.ComponentPropsWithoutRef<'a'>, 'type'> {
  /** Type of link to use, if text, link will be plain text */
  type?: LinkTypes;
  /** Where to start the border animation for the link, at the rigth of the word, left, or center of the word / link text */
  animationCenter?: AnimationCenter | false;
}

interface StyledLinkProps {
  $active: boolean;
  $type: LinkTypes;
  $center: AnimationCenter | false;
}

export type { LinkProps, StyledLinkProps };