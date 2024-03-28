import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function TooltipBtn(props: any) {
  const { children, tooltiptext, ..._props } = props;
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button {..._props}>{children}</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltiptext}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
