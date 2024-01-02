import {TTictactoe} from "../constants/tictactoe.ts";

export type WinResult = {
    winner: 'X' | 'O' | null | 'draw';
    positions: number[];
} | null;

export const checkEndGame = (board:TTictactoe[]): WinResult  => {

    const winPatterns: number[][] = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтальные линии
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикальные линии
        [0, 4, 8], [2, 4, 6]             // Диагонали
    ];

    // Проверка выигрышных комбинаций
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a].value && board[a].value === board[b].value && board[a].value === board[c].value) {
            return {
                winner: board[a].value,
                positions: [a, b, c]
            };
        }
    }

    // Проверка на ничью
    if (board.every(cell => cell.value !== null)) {
        return { winner: 'draw', positions: [] };
    }

    return null; // Игра не завершена
}

export const checkIncludes = (array:number[], id:number):boolean => {
    return array.includes(id)
}