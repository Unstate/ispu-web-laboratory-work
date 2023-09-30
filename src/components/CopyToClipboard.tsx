import { FC, useEffect, useState } from "react";
import Popup from "./Popup";

const CopyToClipboard: FC = () => {
  const email = "rofetisov@mail.ru";
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

  return (
    <div>
      <button
        className=" hover:text-[#FF5824] hover:cursor-pointer transition-all ease-in text-black text-2xl px-4 py-2 rounded"
        onClick={copyToClipboard}
      >
        Email
      </button>
      {isNotificationVisible && (
        <div>
          <Popup
            message={message}
            visible={isNotificationVisible}
            progress={progress}
          />
        </div>
      )}
    </div>
  );
};

export default CopyToClipboard;
