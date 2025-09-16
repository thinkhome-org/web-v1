"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useWebAssembly() {
  const [module, setModule] = useState<WebAssembly.Module | null>(null);
  const [instance, setInstance] = useState<WebAssembly.Instance | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const supportsWebAssembly = useFeatureSupport("webassembly");

  const compile = async (bytes: ArrayBuffer) => {
    if (!supportsWebAssembly || typeof WebAssembly === "undefined") {
      setError(new Error("WebAssembly not supported"));
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const wasmModule = await WebAssembly.compile(bytes);
      setModule(wasmModule);
      setLoading(false);
      return wasmModule;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("WebAssembly compilation failed");
      setError(error);
      setLoading(false);
      return null;
    }
  };

  const instantiate = async (bytes: ArrayBuffer, importObject?: WebAssembly.Imports) => {
    if (!supportsWebAssembly || typeof WebAssembly === "undefined") {
      setError(new Error("WebAssembly not supported"));
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const wasmInstance = await WebAssembly.instantiate(bytes, importObject);
      setInstance(wasmInstance.instance);
      setLoading(false);
      return wasmInstance;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("WebAssembly instantiation failed");
      setError(error);
      setLoading(false);
      return null;
    }
  };

  const compileStreaming = async (source: Response | Promise<Response>) => {
    if (!supportsWebAssembly || typeof WebAssembly === "undefined") {
      setError(new Error("WebAssembly not supported"));
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const wasmModule = await WebAssembly.compileStreaming(source);
      setModule(wasmModule);
      setLoading(false);
      return wasmModule;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("WebAssembly streaming compilation failed");
      setError(error);
      setLoading(false);
      return null;
    }
  };

  const instantiateStreaming = async (source: Response | Promise<Response>, importObject?: WebAssembly.Imports) => {
    if (!supportsWebAssembly || typeof WebAssembly === "undefined") {
      setError(new Error("WebAssembly not supported"));
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const wasmInstance = await WebAssembly.instantiateStreaming(source, importObject);
      setInstance(wasmInstance.instance);
      setLoading(false);
      return wasmInstance;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("WebAssembly streaming instantiation failed");
      setError(error);
      setLoading(false);
      return null;
    }
  };

  const validate = (bytes: ArrayBuffer) => {
    if (!supportsWebAssembly || typeof WebAssembly === "undefined") {
      return false;
    }

    try {
      return WebAssembly.validate(bytes);
    } catch (err) {
      return false;
    }
  };

  return {
    module,
    instance,
    error,
    loading,
    supportsWebAssembly,
    compile,
    instantiate,
    compileStreaming,
    instantiateStreaming,
    validate
  };
}
