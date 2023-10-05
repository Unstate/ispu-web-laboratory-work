import { useEffect, useState } from "react";

export const useCopyToClipboard = (email:string) => {
    const [isNotificationVisible, setNotificationVisible] =
    useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [progress, setProgress] = useState<number>(100);

  const showNotification = () => {
    setNotificationVisible(true);
    setProgress(100);

    const intervalId = setInterval(() => {
      setProgress((prevProgress) => prevProgress - 1);
    }, 20);

    setTimeout(() => {
      setNotificationVisible(false);
      setMessage("");
      clearInterval(intervalId);
    }, 2000); // Скрыть уведомление через 2 секунды
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setMessage("Email успешно скопирован");
        showNotification();
      })
      .catch(() => {
        setMessage("Ошибка копирования в буфер обмена");
        showNotification();
      });
  };

  useEffect(() => {
    if (isNotificationVisible) {
      const progressTimeout = setTimeout(() => {
        setNotificationVisible(false);
        setMessage("");
      }, 2000);

      return () => {
        clearTimeout(progressTimeout);
      };
    }
  }, [isNotificationVisible]);
  
  return {message, setMessage,progress,setProgress, copyToClipboard, isNotificationVisible}
}