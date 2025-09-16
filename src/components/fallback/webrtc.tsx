"use client";

import { ReactNode, useEffect, useState } from "react";
import { useWebRTC } from "@/hooks/use-webrtc";

interface WebRTCProps {
  children: ReactNode;
  fallback?: ReactNode;
  constraints?: MediaStreamConstraints;
  onStream?: (stream: MediaStream) => void;
  onError?: (error: Error) => void;
}

export function WebRTC({
  children,
  fallback = null,
  constraints,
  onStream,
  onError
}: WebRTCProps) {
  const { stream, error, getUserMedia, supportsWebRTC } = useWebRTC();
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(() => {
    if (stream) {
      setIsStreaming(true);
      onStream?.(stream);
    }
  }, [stream, onStream]);

  useEffect(() => {
    if (error) {
      onError?.(error);
    }
  }, [error, onError]);

  const handleGetUserMedia = async () => {
    if (supportsWebRTC) {
      await getUserMedia(constraints);
    }
  };

  return (
    <>
      {supportsWebRTC && isStreaming ? (
        children
      ) : (
        <div>
          {fallback}
          <button onClick={handleGetUserMedia}>Start Camera</button>
        </div>
      )}
    </>
  );
}
