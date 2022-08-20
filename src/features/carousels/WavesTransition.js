import { useState, useEffect } from "react";

import styled, { css, keyframes } from "styled-components";

import Chart from "react-apexcharts";

const wavesIn = keyframes`
  0% { transform: translateY(125%); }
  50% { transform: translateY(125%); }
  100% { transform: translateY(0); }
`;

const sharedStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const StyledWave = styled.div`
  ${sharedStyles};
  z-index: 10;
  transform: scale(1.1) rotate(180deg);
`;

const StyledWaveSecond = styled.div`
  ${sharedStyles};
  z-index: 11;
  transform: scale(1.1);
`;

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const sceneDuration = 1750;

const optionsBase = {
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  grid: {
    show: false,
    padding: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    floating: true,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    min: 0,
    max: 100,
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  stroke: {
    show: false,
  },
  fill: {
    colors: ["#8e44fd"],
    opacity: 1,
    type: "solid",
  },
  tooltip: {
    enabled: false,
  },
};

const optionsFirst = {
  ...optionsBase,
  chart: {
    ...optionsBase.chart,
    animations: {
      easing: "easein",
      dynamicAnimation: {
        enabled: true,
        speed: sceneDuration,
      },
    },
  },
};

const optionsSecond = {
  ...optionsBase,
  chart: {
    ...optionsBase.chart,
    animations: {
      easing: "easeout",
      dynamicAnimation: {
        enabled: true,
        speed: sceneDuration,
      },
    },
  },
};

const Wrapper = () => {
  let counter = 0;

  const [firstChartShown, setFirstChartShown] = useState(false);
  const [data, setData] = useState([-30, -10, 0, -10, -20]);
  const [dataSecond, setDataSecond] = useState([100, 100, 120, 100, 100]);

  useEffect(() => {
    setData([100, 100, 100, 100, 100]);

    var timer = setInterval(() => {
      if (counter === 1) {
        setFirstChartShown(true);
        setDataSecond([0, 0, 0, 0, 0]);
      } else if (counter === 2) {
        setData([100, 100, 100, 100, 100]);
      }

      if (counter > 10) {
        clearInterval(timer);
      }

      counter++;
    }, sceneDuration / 2);

    return () => clearInterval(timer);
  }, []);

  const shouldShowFirstChart = counter < 2;

  return (
    <>
      <StyledWave style={{ visibility: firstChartShown && "hidden" }}>
        <Chart
          options={optionsFirst}
          series={[
            {
              name: "a",
              data: data,
            },
          ]}
          type="area"
          height="750px"
          width="600px"
        />
      </StyledWave>
      <StyledWaveSecond
        style={{ visibility: !firstChartShown ? "hidden" : "visible" }}
      >
        <Chart
          options={optionsSecond}
          series={[
            {
              name: "b",
              data: dataSecond,
            },
          ]}
          type="area"
          height="750px"
          width="600px"
        />
      </StyledWaveSecond>
    </>
  );
};

export default Wrapper;
