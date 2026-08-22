
"use client"

import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export type StatusIndicatorProps = HTMLAttributes<HTMLSpanElement> & {
  status: "online" | "offline" | "maintenance" | "degraded"
}

export const StatusIndicator = ({ className, status, ...props }: StatusIndicatorProps) => (
  <span className={cn("relative flex h-2 w-2", "group", status, className)} {...(props as HTMLAttributes<HTMLSpanElement>)}>
    <span
      className={cn(
        "absolute inline-flex h-full w-full group-[:not(.offline)]:animate-ping rounded-full opacity-75",
        "group-[.online]:bg-emerald-500",
        "group-[.offline]:bg-gray-500",
        "group-[.maintenance]:bg-blue-500",
        "group-[.degraded]:bg-amber-500",
      )}
    />
    <span
      className={cn(
        "relative inline-flex h-2 w-2 rounded-full",
        "group-[.online]:bg-emerald-500",
        "group-[.offline]:bg-gray-500",
        "group-[.maintenance]:bg-blue-500",
        "group-[.degraded]:bg-amber-500",
      )}
    />
  </span>
)
