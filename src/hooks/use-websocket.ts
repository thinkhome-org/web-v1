"use client";

import { useEffect, useState, useRef } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useWebSocket(url: string, options?: {
  onOpen?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  onError?: (event: Event) => void;
  onMessage?: (event: MessageEvent) => void;
  protocols?: string | string[];
}) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [readyState, setReadyState] = useState<number>(WebSocket.CLOSED);
  const [error, setError] = useState<Event | null>(null);
  const supportsWebSocket = useFeatureSupport("websocket");
  const socketRef = useRef<WebSocket | null>(null);

  const connect = () => {
    if (!supportsWebSocket || typeof WebSocket === "undefined") {
      setError(new Event("WebSocket not supported"));
      return;
    }

    try {
      const ws = new WebSocket(url, options?.protocols);
      socketRef.current = ws;
      setSocket(ws);

      ws.onopen = (event) => {
        setReadyState(ws.readyState);
        options?.onOpen?.(event);
      };

      ws.onclose = (event) => {
        setReadyState(ws.readyState);
        options?.onClose?.(event);
      };

      ws.onerror = (event) => {
        setError(event);
        options?.onError?.(event);
      };

      ws.onmessage = (event) => {
        options?.onMessage?.(event);
      };
    } catch (err) {
      setError(err instanceof Event ? err : new Event("WebSocket connection failed"));
    }
  };

  const disconnect = () => {
    if (socketRef.current) {
      socketRef.current.close();
      socketRef.current = null;
      setSocket(null);
      setReadyState(WebSocket.CLOSED);
    }
  };

  const send = (data: string | ArrayBuffer | Blob) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(data);
    }
  };

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, []);

  return {
    socket,
    readyState,
    error,
    supportsWebSocket,
    connect,
    disconnect,
    send
  };
}
