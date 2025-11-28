import { Lightbulb, AlertTriangle, AlertCircle, FileCode } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = 'tip' | 'warning' | 'important' | 'example';

interface CalloutBoxProps {
  type: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig = {
  tip: {
    icon: Lightbulb,
    defaultTitle: "Tip",
    bgClass: "bg-blue-50 dark:bg-blue-950/30",
    borderClass: "border-blue-200 dark:border-blue-800",
    iconClass: "text-blue-600 dark:text-blue-400",
    titleClass: "text-blue-900 dark:text-blue-100",
  },
  warning: {
    icon: AlertTriangle,
    defaultTitle: "Warning",
    bgClass: "bg-amber-50 dark:bg-amber-950/30",
    borderClass: "border-amber-200 dark:border-amber-800",
    iconClass: "text-amber-600 dark:text-amber-400",
    titleClass: "text-amber-900 dark:text-amber-100",
  },
  important: {
    icon: AlertCircle,
    defaultTitle: "Important",
    bgClass: "bg-rose-50 dark:bg-rose-950/30",
    borderClass: "border-rose-200 dark:border-rose-800",
    iconClass: "text-rose-600 dark:text-rose-400",
    titleClass: "text-rose-900 dark:text-rose-100",
  },
  example: {
    icon: FileCode,
    defaultTitle: "Example",
    bgClass: "bg-emerald-50 dark:bg-emerald-950/30",
    borderClass: "border-emerald-200 dark:border-emerald-800",
    iconClass: "text-emerald-600 dark:text-emerald-400",
    titleClass: "text-emerald-900 dark:text-emerald-100",
  },
};

const CalloutBox = ({ type, title, children, className }: CalloutBoxProps) => {
  const config = calloutConfig[type];
  const Icon = config.icon;
  const displayTitle = title || config.defaultTitle;

  return (
    <div
      className={cn(
        "my-8 rounded-xl border-l-4 p-6",
        config.bgClass,
        config.borderClass,
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className={cn("flex-shrink-0 mt-0.5", config.iconClass)}>
          <Icon className="h-5 w-5" strokeWidth={2} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={cn("font-semibold text-lg mb-2", config.titleClass)}>
            {displayTitle}
          </h4>
          <div className="text-muted-foreground leading-relaxed [&>p]:mb-2 [&>p:last-child]:mb-0 [&>ul]:my-2 [&>ol]:my-2 [&>ul>li]:my-1 [&>ol>li]:my-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalloutBox;






