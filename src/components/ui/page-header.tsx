import { cn } from "../../lib/utils";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  date?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  date,
  alignment = "left",
  className
}: PageHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  return (
    <div className={cn(
      "mb-8 space-y-2",
      alignmentClasses[alignment],
      className
    )}>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {subtitle}
        </p>
      )}
      {date && (
        <p className="text-sm text-gray-500 dark:text-gray-500">
          Aktualizováno: {date}
        </p>
      )}
    </div>
  );
}

export default PageHeader;