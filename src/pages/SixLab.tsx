import { Chart } from "chart.js/auto";
import { useEffect, useMemo, useRef } from "react";
import regression from "regression";

const SixLab = () => {
  const dataT = useMemo(()=> {
    return [{x:15,y:-20},{x:10,y:0},{x:5,y:20}]
  },[])
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const regressionData = dataT.map(point => [point.x, point.y]);
        //@ts-ignore
        const result = regression.linear(regressionData);
        // const result = regression.linear([[1,3],[2,7],[3,7]]);

        const regressionLine = result.points.map(point => ({
          x: point[0],
          y: result.equation[0] * point[0] + result.equation[1],
        }));

        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            datasets: [
              {
                label: 'Data',
                data: dataT,
                showLine: false,
                pointRadius: 5,
              },
              {
                label: 'Regression Line',
                data: regressionLine,
                borderColor: 'red',
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                min: Math.min(...dataT.map(point => point.x)) - 1, 
                max: Math.max(...dataT.map(point => point.x)) + 1, 
              },
              y: {
                type: 'linear',
                min: Math.min(...dataT.map(point => point.y)) - 1, 
                max: Math.max(...dataT.map(point => point.y)) + 1, 
              },
            },
          },
        });
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [dataT]);

  const predict = (input: number) => {
    if (dataT.length === 0) return 'No data for regression';
    const result = regression.linear(dataT.map(point => [point.x, point.y]));
    const prediction = result.equation[0] * input + result.equation[1];
    return `Prediction for input ${input}: ${prediction}`;
  };

  return (
    <div style={{ width: '400px', height: '300px' }}>
      <canvas ref={chartRef} width={400} height={400} />
      <div>{predict(5)}</div>
    </div>
  );
};

export default SixLab;
