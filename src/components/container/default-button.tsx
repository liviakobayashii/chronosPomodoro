import { Button } from "../ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils"; 

type DefaultButtonProps = {
  onClick?: () => void;
  fullWidth?: boolean;
}

export default function DefaultButton({ onClick, fullWidth }: DefaultButtonProps) {
  return (
    <Button
      onClick={onClick}
      size="lg"
      className={cn(
        "filter hover:brightness-75 text-black",
        fullWidth && "w-full"
      )}
    >
      <Icon icon="octicon:play-16" width={20} height={20} />
    </Button>
  );
}
