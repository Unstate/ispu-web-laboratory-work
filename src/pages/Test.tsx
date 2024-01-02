import styles from '../styles/test.module.scss'
import {tictactoeData, TTictactoe} from "../constants/tictactoe.ts";
import {useEffect, useState} from "react";
import {checkEndGame, checkIncludes} from "../utils/checkEndGame.ts";
import clsx from "clsx";

const Test = () => {

    const [data, setData] = useState<TTictactoe[]>(tictactoeData)
    const [currentPlayer, setCurrentPlayer] = useState<string>('1')
    const [result, setResult] = useState(checkEndGame(data))

    const handleOnClick = (id: number) => {
        if (currentPlayer === '1') {
            setData(data.map((dataElement: TTictactoe) =>
                dataElement.id === id
                    ?
                    {
                        ...dataElement,
                        value: 'X'
                    }
                    : dataElement)
            )
            setCurrentPlayer('2')
        } else if (currentPlayer === '2') {
            setData(data.map((dataElement: TTictactoe) =>
                dataElement.id === id
                    ?
                    {
                        ...dataElement,
                        value: 'O'
                    }
                    : dataElement)
            )
            setCurrentPlayer('1')
        }
    }

    const handleRestart = () => {
        setData(tictactoeData)
        setResult(checkEndGame(tictactoeData))
        setCurrentPlayer('1')
    }

    useEffect(() => {
        setResult(checkEndGame(data))
    }, [data])

    return (
        <main className={styles.wrapper}>
            <div className={styles.infoAboutPlayer}>
                {result === null ?
                    <p>Текущий игрок: {currentPlayer.length && currentPlayer === '1' ? 'X' : 'O'}</p> : null}
                <div className={styles.endGameInfoWrapper}>
                    {result !== null
                        ?
                        <>
                            <p>
                                {result !== null
                                    ? result.winner && result.winner !== 'draw' ? `Победил игрок: ${result.winner}`
                                        : 'Ничья'
                                    : null}
                            </p>
                            <button className={styles.restartButton} onClick={(e) => {
                                e.preventDefault()
                                handleRestart()
                            }}>Перезапустить
                            </button>
                        </>
                        : null}
                </div>
            </div>
            <section className={styles.tictactoeContainer}>
                {data.map((tic: TTictactoe) =>
                    <div
                        key={tic.id}
                        className={clsx(styles.item, {
                            [styles.winItem]: result ? checkIncludes(result.positions, tic.id) : false,
                            [styles.notWinItem]: result ? !checkIncludes(result.positions, tic.id) : false
                        })}
                        onClick={() => result === null ? handleOnClick(tic.id) : () => {
                        }}>
                        {tic.value ? tic.value : null}
                    </div>)}
            </section>
        </main>
    )
}

export default Test