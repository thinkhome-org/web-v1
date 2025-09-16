"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useWebRTC() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const supportsWebRTC = useFeatureSupport("webrtc");

  const getUserMedia = async (constraints?: MediaStreamConstraints) => {
    if (!supportsWebRTC || typeof navigator === "undefined" || !navigator.mediaDevices) {
      setError(new Error("WebRTC not supported"));
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
      setStream(mediaStream);
      setLoading(false);
      return mediaStream;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("getUserMedia failed");
      setError(error);
      setLoading(false);
      return null;
    }
  };

  const getDisplayMedia = async (constraints?: DisplayMediaStreamConstraints) => {
    if (!supportsWebRTC || typeof navigator === "undefined" || !navigator.mediaDevices) {
      setError(new Error("WebRTC not supported"));
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const mediaStream = await navigator.mediaDevices.getDisplayMedia(constraints);
      setStream(mediaStream);
      setLoading(false);
      return mediaStream;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("getDisplayMedia failed");
      setError(error);
      setLoading(false);
      return null;
    }
  };

  const enumerateDevices = async () => {
    if (!supportsWebRTC || typeof navigator === "undefined" || !navigator.mediaDevices) {
      setError(new Error("WebRTC not supported"));
      return [];
    }

    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      return devices;
    } catch (err) {
      const error = err instanceof Error ? err : new Error("enumerateDevices failed");
      setError(error);
      return [];
    }
  };

  const stopStream = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    return () => {
      stopStream();
    };
  }, []);

  return {
    stream,
    error,
    loading,
    supportsWebRTC,
    getUserMedia,
    getDisplayMedia,
    enumerateDevices,
    stopStream
  };
}
