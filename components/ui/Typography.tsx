import { cn } from '@/lib/utils';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

export const Typography1 = ({ children, className }: HeadingProps) => {
  return <h1 className={cn('text-5xl font-medium', className)}>{children}</h1>;
};

export const Typography2 = ({ children, className }: HeadingProps) => {
  return (
    <h2 className={cn('text-4.5xl font-medium tracking-[2px]', className)}>
      {children}
    </h2>
  );
};

export const Typography3 = ({ children, className }: HeadingProps) => {
  return (
    <h3
      className={cn(
        'text-xl font-medium leading-6.5 tracking-[5px]',
        className
      )}
    >
      {children}
    </h3>
  );
};

export const TypographyP = ({ children, className }: ParagraphProps) => {
  return (
    <p className={cn('text-pretty text-base leading-6.5', className)}>
      {children}
    </p>
  );
};
