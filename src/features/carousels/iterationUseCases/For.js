import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

const boxSize = 56;
const duration = 5000;
const eitherSide = 20;
const delay = 3;

const square = css`
  width: ${boxSize}px;
  min-width: ${boxSize}px;
  max-width: ${boxSize}px;
  height: ${boxSize}px;
  min-height: ${boxSize}px;
  max-height: ${boxSize}px;
`;

const StyledCard = styled.div``;

const StyledButton = styled.button``;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #8f44fd;
  color: white;
  border: 1px solid #252325;
  transform: translateY(-50px);
`;

const psuedoStyles = css`
  content: "";
  position: absolute;
  z-index: 4;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${(p) => p.theme.lenSm1};
  background: ${(p) => p.theme.colorPrimary};
`;

const StyledBoxBorder = styled.div`
  border: 2px solid #252325;
  position: relative;
  overflow: hidden;
  border-radius: ${(p) => p.theme.lenSm1};
  background: ${(p) => p.theme.colorPrimary};
  padding: ${(p) => p.theme.lenSm1};
  ${square};
  &::before {
    ${psuedoStyles};
    top: 0;
    bottom: auto;
  }
  &::after {
    ${psuedoStyles};
    top: auto;
    bottom: 0;
  }
`;

const StyledBox = styled.div`
  background: ${(p) => p.theme.colorCardBackground};
  flex: 1 0 ${boxSize};
  height: 100%;
`;

const animation = (index) => keyframes`
    0% { transform: translateY(0); }
    ${index !== 0 && `${index * delay}%`} { transform: translateY(0); }
    ${`${index * delay + 80}%`} { transform: translateY(${
  eitherSide * boxSize
}px); }
    100% { transform: translateY(${eitherSide * boxSize}px); }
  `;

const StyledBoxNumbers = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${boxSize}px;
  min-width: ${boxSize}px;
  max-width: ${boxSize}px;
  animation: ${(p) => animation(p.index)} ${duration}ms;
`;

const StyledBoxNumber = styled.div`
  width: ${boxSize}px;
  height: ${boxSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const digits = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const line1 = [];
const line2 = [];
const line3 = [];
const line4 = [];
const line5 = [];

for (let i = 0; i < eitherSide; i++) {
  line1.push(digits[getRandomInt(0, digits.length - 1)]);
  line2.push(digits[getRandomInt(0, digits.length - 1)]);
  line3.push(digits[getRandomInt(0, digits.length - 1)]);
  line4.push(digits[getRandomInt(0, digits.length - 1)]);
  line5.push(digits[getRandomInt(0, digits.length - 1)]);
}

const data = [line1, line2, line3, line4, line5];

const Wrapper = () => {
  const code = "A34DF";

  const [isRevealed, setRevealed] = useState(false);

  const codes = [
    code.substr(0, 1),
    code.substr(1, 1),
    code.substr(2, 1),
    code.substr(3, 1),
    code.substr(4, 1),
  ];

  useEffect(() => {
    setTimeout(() => {
      setRevealed(true);
      setTimeout(() => {
        setRevealed(false);
      }, 5000);
    }, duration);
  }, []);

  return (
    <StyledCard>
      <StyledWrapper>
        {data.map((line, index) => (
          <StyledBoxBorder>
            <StyledBox>
              <StyledBoxNumbers index={index}>
                {!isRevealed && (
                  <>
                    {line.map((row) => (
                      <StyledBoxNumber>{row}</StyledBoxNumber>
                    ))}
                    <StyledBoxNumber>{codes[index]}</StyledBoxNumber>
                    {line.map((row) => (
                      <StyledBoxNumber>{row}</StyledBoxNumber>
                    ))}
                  </>
                )}
                {isRevealed && (
                  <StyledBoxNumber>{codes[index]}</StyledBoxNumber>
                )}
              </StyledBoxNumbers>
            </StyledBox>
          </StyledBoxBorder>
        ))}
      </StyledWrapper>
    </StyledCard>
  );
};

export default Wrapper;
