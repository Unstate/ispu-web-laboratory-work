import { FC } from "react";

interface PopupProps {
  message: string;
  visible: boolean;
  progress: number;
}

const Popup: FC<PopupProps> = ({ message, visible, progress }) => {
  return (
    <>
      {visible && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
          <div className="bg-white border-black border-[1px] rounded-md w-1/6 h-1/6 flex flex-col items-center justify-center text-xl px-8 py-2 gap-8">
            {message}
            <div className="flex items-end  relative w-full h-2 bg-gray-200 rounded">
              <div
                className="h-2 bg-[#FF5824] rounded "
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
