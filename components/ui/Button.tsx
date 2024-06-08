import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'rounded-lg px-6 h-14 text-base leading-4 transition-colors hover:bg-peach-100 hover:text-white focus-visible:outline-none focus-visible:ring-1',
  {
    variants: {
      variant: {
        white: 'bg-white text-grey-900',
        peach: 'bg-peach-500 text-white'
      }
    },
    defaultVariants: {
      variant: 'white'
    }
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const ButtonComponent = asChild ? Slot : 'button';
    return (
      <ButtonComponent
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
