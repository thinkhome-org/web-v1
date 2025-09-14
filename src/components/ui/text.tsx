/**
 * Text komponenty s design systémem
 * Poskytuje konzistentní typografii napříč aplikací
 */

import React from 'react';
import { cn } from '@/lib/utils';
import { 
  getTextStyle, 
  getTextColor, 
  type TextStyleKey, 
  type TextColorKey 
} from '@/lib/design-system';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.JSX.IntrinsicElements;
  color?: TextColorKey;
  variant?: TextStyleKey;
  mode?: 'light' | 'dark';
}

export function Text({ 
  children, 
  className, 
  style, 
  as: Component = 'p',
  color = 'body',
  variant = 'body',
  mode = 'light',
  ...props 
}: TextProps) {
  const textStyle = getTextStyle(variant, color, mode);
  
  return (
    <Component
      className={cn('', className)}
      style={{
        ...textStyle,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

// Specifické textové komponenty
export function Title({ 
  children, 
  className, 
  color = 'title',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="h1"
      variant="title"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Subtitle({ 
  children, 
  className, 
  color = 'subtitle',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="h2"
      variant="subtitle"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Section({ 
  children, 
  className, 
  color = 'title',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="h3"
      variant="section"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Subsection({ 
  children, 
  className, 
  color = 'title',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="h4"
      variant="subsection"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Heading({ 
  children, 
  className, 
  color = 'title',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="h5"
      variant="heading"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Body({ 
  children, 
  className, 
  color = 'body',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="p"
      variant="body"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Large({ 
  children, 
  className, 
  color = 'body',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="p"
      variant="large"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Small({ 
  children, 
  className, 
  color = 'secondary',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="p"
      variant="small"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Tiny({ 
  children, 
  className, 
  color = 'secondary',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="span"
      variant="tiny"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Link({ 
  children, 
  className, 
  color = 'link',
  hoverColor = 'linkHover',
  mode = 'light',
  href,
  ...props 
}: Omit<TextProps, 'variant'> & { 
  hoverColor?: TextColorKey;
  href?: string;
}) {
  const linkStyle = getTextStyle('link', color, mode);
  const hoverStyle = getTextColor(hoverColor, mode);
  
  return (
    <a
      href={href}
      className={cn(
        'transition-colors duration-200 hover:underline',
        className
      )}
      style={{
        ...linkStyle,
      } as React.CSSProperties}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = hoverStyle;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = linkStyle.color || '';
      }}
      {...props}
    >
      {children}
    </a>
  );
}

export function Code({ 
  children, 
  className, 
  color = 'body',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="code"
      variant="code"
      color={color}
      mode={mode}
      className={cn(
        'bg-muted px-1.5 py-0.5 rounded text-sm',
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Quote({ 
  children, 
  className, 
  color = 'secondary',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="blockquote"
      variant="quote"
      color={color}
      mode={mode}
      className={cn(
        'border-l-4 border-muted pl-4 my-4',
        className
      )}
      {...props}
    >
      {children}
    </Text>
  );
}

export function Button({ 
  children, 
  className, 
  color = 'body',
  mode = 'light',
  ...props 
}: Omit<TextProps, 'variant'>) {
  return (
    <Text
      as="span"
      variant="button"
      color={color}
      mode={mode}
      className={cn('', className)}
      {...props}
    >
      {children}
    </Text>
  );
}
