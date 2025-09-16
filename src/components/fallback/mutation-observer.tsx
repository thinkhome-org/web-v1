"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { useMutationObserver } from "@/hooks/use-mutation-observer";

interface MutationObserverProps {
  children: ReactNode;
  fallback?: ReactNode;
  onMutation?: (mutations: MutationRecord[]) => void;
  options?: MutationObserverInit;
}

export function MutationObserver({
  children,
  fallback = null,
  onMutation,
  options
}: MutationObserverProps) {
  const { elementRef, mutations } = useMutationObserver(
    (mutationList) => {
      onMutation?.(mutationList);
    },
    options
  );

  return (
    <div ref={elementRef}>
      {mutations.length > 0 ? children : fallback}
    </div>
  );
}
