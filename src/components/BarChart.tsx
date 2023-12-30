import {useEffect, useRef} from "react";

const BarChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            console.error("Canvas element not found.");
            return;
        }
        //@ts-ignore
        const ctx = canvas.getContext('2d');

        // Данные для диаграммы (придуманные)
        const data = [30, 50, 80, 120, 200,300];

        // Размеры канваса
        //@ts-ignore
        const canvasHeight = canvas.height;

        // Максимальное значение данных для нормализации
        const maxDataValue = Math.max(...data);

        // Ширина и отступ столбцов
        const barWidth = 40;
        const barMargin = 20;

        // Начальные координаты для первого столбца
        let x = 50;
        let y = canvasHeight - 30;

        // Рисование столбчатой диаграммы
        data.forEach(value => {
            // Нормализация значения относительно максимального значения
            const normalizedValue = (value / maxDataValue) * (canvasHeight - 60);

            // Рисование столбца
            ctx.fillStyle = 'blue';
            ctx.fillRect(x, y - normalizedValue, barWidth, normalizedValue);

            // Рисование значения над столбцом
            ctx.fillStyle = 'black';
            ctx.fillText(value.toString(), x + barWidth / 2, y - normalizedValue - 5);

            // Переход к следующему столбцу
            x += barWidth + barMargin;
        });
    }, []);

    return <canvas ref={canvasRef} width={400} height={300} style={{ border: '1px solid #ccc' }} />;
};

export default BarChart;