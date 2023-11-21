import { useEffect, useRef, useState } from "react";

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
    const data = [30, 50, 80, 120, 200];

    // Размеры канваса
    //@ts-ignore
    const canvasWidth = canvas.width;
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

const SixLab = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [inputs, setInputs] = useState({
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
    x3: 0,
    y3: 0,
    showForm: false,
  });

  const drawGraph = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, 200, 200);

        const { x1, x2, y1, y2, x3 } = inputs;
        const numberX1 = Number(x1);
        const numberX2 = Number(x2);
        const numberX3 = Number(x3);
        const numberY1 = Number(y1);
        const numberY2 = Number(y2);

        const b =
          numberY1 - numberX1 * ((numberY2 - numberY1) / (numberX2 - numberX1));
        const a = (numberY2 - numberY1) / (numberX2 - numberX1);
        const y3 = a * numberX3 + b;

        context.strokeStyle = "#109bfc";
        context.lineWidth = 0.5;

        context.beginPath();
        context.moveTo(100, 100);
        context.lineTo(100, 0);
        context.moveTo(100, 100);
        context.lineTo(100, 200);
        context.moveTo(100, 100);
        context.lineTo(0, 100);
        context.moveTo(100, 100);
        context.lineTo(200, 100);
        context.moveTo(100, 0);
        context.lineTo(103, 3);
        context.moveTo(100, 0);
        context.lineTo(97, 3);
        context.moveTo(200, 100);
        context.lineTo(197, 103);
        context.moveTo(200, 100);
        context.lineTo(197, 97);
        context.font = "normal 8px sans-serif";
        context.moveTo(100 + numberX1, 100 - numberY1);
        context.lineTo(100 + numberX2, 100 - numberY2);
        context.lineTo(100 + numberX3, 100 - y3);
        context.stroke();

        context.stroke();

        setInputs({ ...inputs, y3: y3 });
      }
    }
  };

  const showForm = () => {
    setInputs({ ...inputs, showForm: true });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs({ ...inputs, [id]: value });
  };
  return (
    <div>
      <canvas ref={canvasRef} id="my1s" width="200" height="200"></canvas>
      <br />
      <div className="flex gap-10">
        <input type="button" value="Input variables" onClick={showForm} />
        <input type="button" value="Draw graph" onClick={drawGraph} />
      </div>
      {inputs.showForm && (
        <div>
          <p>
            <label>
              X1:{" "}
              <input id="x1" value={inputs.x1} onChange={handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Y1:{" "}
              <input id="y1" value={inputs.y1} onChange={handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              X2:{" "}
              <input id="x2" value={inputs.x2} onChange={handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              Y2:{" "}
              <input id="y2" value={inputs.y2} onChange={handleInputChange} />
            </label>
          </p>
          <p>
            <label>
              X3:{" "}
              <input id="x3" value={inputs.x3} onChange={handleInputChange} />
            </label>
          </p>
          <p className="border border-red-500">
            <label>
              Y3: <input id="y3" value={inputs.y3} disabled />
            </label>
          </p>
        </div>
      )}

      <BarChart />
    </div>
  );
};

export default SixLab;
