import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import clsx from "clsx";
import { useFormModal } from "../form/FormModal";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  showArrow?: boolean;
};

export function CTAButton({
  children,
  variant = "primary",
  className,
  showArrow = true,
}: Props) {
  const { open } = useFormModal();
  const base = variant === "primary" ? "cta-primary" : "cta-secondary";

  return (
    <button
      type="button"
      onClick={open}
      className={clsx(base, "group", className)}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          strokeWidth={2.5}
        />
      )}
    </button>
  );
}
