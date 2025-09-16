"use client";

import { useEffect, useRef, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

interface UseMutationObserverOptions {
  attributes?: boolean;
  childList?: boolean;
  subtree?: boolean;
  characterData?: boolean;
  attributeOldValue?: boolean;
  characterDataOldValue?: boolean;
  attributeFilter?: string[];
}

export function useMutationObserver(
  callback: MutationCallback,
  options: UseMutationObserverOptions = {}
) {
  const [mutations, setMutations] = useState<MutationRecord[]>([]);
  const elementRef = useRef<Element | null>(null);
  const supportsMutationObserver = useFeatureSupport("mutationObserver");

  useEffect(() => {
    if (!supportsMutationObserver || !elementRef.current) return;

    const observer = new MutationObserver((mutationList) => {
      setMutations(mutationList);
      callback(mutationList, observer);
    });

    observer.observe(elementRef.current, options);

    return () => {
      observer.disconnect();
    };
  }, [supportsMutationObserver, options, callback]);

  return {
    elementRef,
    mutations
  };
}
