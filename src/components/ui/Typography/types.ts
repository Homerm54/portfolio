/** Variations in the style of the Typography available */
type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline'
  | 'subtitle1';

type NativeProps = React.ComponentPropsWithoutRef<'span'>;

interface TypographyProps extends NativeProps {
  /** Variant of the Typography */
  variant: Variants;
  /** Which HTML component to use */
  component?: keyof HTMLElementTagNameMap;
  /** Vertical and Horizontal margin for the text */
  spacing?: { x?: number; y?: number };
}

interface TypographyStyleProps {
  $variant: Variants;
  $spacing: { x?: number; y?: number };
}

export type { TypographyStyleProps, Variants, TypographyProps };
