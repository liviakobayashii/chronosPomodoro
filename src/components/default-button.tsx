import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

type DefaultButtonProps = React.ComponentProps<typeof Button> & {
  fullWidth?: boolean;
  icon: string
  action?: 'start' | 'stop';
};

export default function DefaultButton({
  fullWidth,
  icon,
  action = 'start',
  className,
  ...props
}: DefaultButtonProps) {
  const baseClasses = "filter hover:brightness-75 my-5";
  const colorClasses =
    action === 'stop'
      ? 'bg-red-500 text-white'
      : 'bg-primary text-black';

  return (
    <Button
      className={cn(
        baseClasses,
        fullWidth && 'w-full',
        colorClasses,
        className
      )}
      {...props}
    >
      <Icon icon={icon} width={25} height={25} />
    </Button>
  );
}
