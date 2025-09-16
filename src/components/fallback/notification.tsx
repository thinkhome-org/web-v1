"use client";

import { ReactNode, useEffect, useState } from "react";
import { useNotification } from "@/hooks/use-notification";

interface NotificationProps {
  children: ReactNode;
  fallback?: ReactNode;
  title: string;
  options?: NotificationOptions;
  onShow?: (notification: Notification) => void;
  onClose?: () => void;
}

export function Notification({
  children,
  fallback = null,
  title,
  options,
  onShow,
  onClose
}: NotificationProps) {
  const { permission, showNotification, closeNotification, supportsNotification } = useNotification();
  const [notification, setNotification] = useState<Notification | null>(null);

  const handleShow = async () => {
    if (permission === "granted") {
      const notif = showNotification(title, options);
      if (notif) {
        setNotification(notif);
        onShow?.(notif);
      }
    }
  };

  const handleClose = () => {
    closeNotification();
    setNotification(null);
    onClose?.();
  };

  return (
    <>
      {supportsNotification && permission === "granted" ? (
        <div>
          {children}
          <button onClick={handleShow}>Show Notification</button>
          {notification && (
            <button onClick={handleClose}>Close Notification</button>
          )}
        </div>
      ) : (
        fallback
      )}
    </>
  );
}
