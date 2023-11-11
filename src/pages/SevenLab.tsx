import { useEffect, useRef, useState } from "react";
import styles from "../styles/SevenLab.module.scss";
import clsx from "clsx";
import { useCardHover } from "../hooks/useCardHover";

const SevenLab = () => {
  const dinoRef = useRef<HTMLDivElement | null>(null);
  const cactusRef = useRef<HTMLDivElement | null>(null);
  const [counter, setCounter] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const { handleNotHover, handleOnHover, isHover } = useCardHover();
  const setDinoJump = () => {
    if (isHover) return;
    handleOnHover();
    setTimeout(() => {
      handleNotHover();
    }, 300);
  };

  useEffect(() => {
    const gameInterval = setInterval(() => {
      const dino = dinoRef.current;
      const cactus = cactusRef.current;

      if (dino && cactus) {
        const characterTop = parseInt(
          window.getComputedStyle(dino).getPropertyValue("top"),
          10
        );
        const blockLeft = parseInt(
          window.getComputedStyle(cactus).getPropertyValue("left"),
          10
        );

        if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
          if (cactus) {
            cactus.style.animation = "none";
            setIsGameOver(true);
            clearInterval(gameInterval);
            alert(`Game Over. Score: ${Math.floor(counter / 60)}`);
            setCounter(0);
            if (cactus) {
              cactus.style.animation = "block 1s infinite linear";
            }
            setIsGameOver(false);
          }
        } else {
          setCounter((prevCounter) => prevCounter + 1);
        }
      }
    }, 10);

    return () => clearInterval(gameInterval);
  }, [counter]);

  return (
    <main className={clsx(styles.wrapper)} onClick={setDinoJump}>
      <div>
        <div className={clsx(styles.wrapper_gameWindow)}>
          <div
            ref={dinoRef}
            className={clsx(styles.wrapper_gameWindow_dino, {
              [styles.jump]: isHover,
              [styles.gameOver]: isGameOver,
            })}
          ></div>
          <div
            ref={cactusRef}
            className={clsx(styles.wrapper_gameWindow_cactus)}
          ></div>
        </div>
        <p>Score: {Math.floor((counter) / 60)}</p>
      </div>
    </main>
  );
};

export default SevenLab;
