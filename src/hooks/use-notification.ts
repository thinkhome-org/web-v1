"use client";

import { useEffect, useState } from "react";
import { useFeatureSupport } from "./use-browser-support";

export function useNotification() {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [notification, setNotification] = useState<Notification | null>(null);
  const supportsNotification = useFeatureSupport("notification");

  useEffect(() => {
    if (supportsNotification && typeof window !== "undefined" && "Notification" in window) {
      setPermission(Notification.permission);
    }
  }, [supportsNotification]);

  const requestPermission = async (): Promise<NotificationPermission> => {
    if (!supportsNotification || typeof window === "undefined" || !("Notification" in window)) {
      return "denied";
    }

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      return result;
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      return "denied";
    }
  };

  const showNotification = (title: string, options?: NotificationOptions) => {
    if (!supportsNotification || typeof window === "undefined" || !("Notification" in window)) {
      return null;
    }

    if (permission !== "granted") {
      console.warn("Notification permission not granted");
      return null;
    }

    try {
      const notification = new Notification(title, options);
      setNotification(notification);
      return notification;
    } catch (error) {
      console.error("Error showing notification:", error);
      return null;
    }
  };

  const closeNotification = () => {
    if (notification) {
      notification.close();
      setNotification(null);
    }
  };

  return {
    permission,
    notification,
    supportsNotification,
    requestPermission,
    showNotification,
    closeNotification
  };
}
