import { FC } from "react";
import Popup from "./Popup";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";

const CopyToClipboard: FC = () => {
  const email = "rofetisov@mail.ru";
  
  const {copyToClipboard,isNotificationVisible,message,progress} = useCopyToClipboard(email)

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
