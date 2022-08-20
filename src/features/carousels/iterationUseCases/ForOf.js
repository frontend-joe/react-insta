import { useState } from "react";

import styled, { keyframes, css } from "styled-components";

const StyledWrapper = styled.div`
  background: #171517;
  padding: 1.5rem;
  width: 18rem;
  border-radius: 0.5rem;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  height: 2.25rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    margin: 0;
  }
`;

const StyledLabel = styled.label``;

const StyledCheckbox = styled.div`
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #00adf6;
`;

const StyledCheckboxCheck = styled.div`
  width: 2px;
  height: 12px;
  background: white;
  transform: rotate(45deg) translateX(1px) translateY(-1px);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 6px;
    height: 2px;
    background: white;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledCheckbox} {
    background: white;
  }
`;

const StyledCheckboxText = styled.div`
  flex: 1 1 auto;
  color: white;
`;

const StyledDownloadButton = styled.button`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1rem;
  transition: all 0.35s;
  height: 2.75rem;

  &:disabled {
    color: rgba(255, 255, 255, 0.1);
  }

  &:hover:not(:disabled) {
    color: rgba(255, 255, 255, 0.96);
  }
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const spinnerVisibleStyles = css`
  visibility: visible;
  opacity: 1;
`;

const StyledSpinner = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: white;
  visibility: hidden;
  opacity: 0;

  ${(p) => p.isVisible && spinnerVisibleStyles};

  transition: all 0.35s;
  animation: ${spin} 1.25s infinite linear;
`;

const Wrapper = () => {
  const [items, setItems] = useState([
    {
      name: "Topbar-Logo.png",
      isChecked: false,
      isDownloading: false,
    },
    {
      name: "Footer-Logo.png",
      isChecked: false,
      isDownloading: false,
    },
    {
      name: "Main-Icon.svg",
      isChecked: false,
      isDownloading: false,
    },
  ]);

  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleChange = (e, i) => {
    const itemsCopy = items.slice();

    const item = itemsCopy[i];
    item.isChecked = !e.target.checked;

    setItems(itemsCopy);

    console.log("handleChange", items);
  };

  const isButtonDisabled = !items.some((o) => o.isChecked) && !downloadComplete;

  const isDownloading = items.some((o) => o.isDownloading);

  const handleButtonClicked = () => {
    const itemsCopy = items.slice();

    for (let item of itemsCopy) {
      if (item.isChecked) {
        item.isDownloading = true;
      }
    }

    setItems(itemsCopy);

    setTimeout(() => {
      const itemsCopy2 = items.slice();

      for (let item of itemsCopy2) {
        item.isChecked = false;
        item.isDownloading = false;
      }

      setItems(itemsCopy2);

      setDownloadComplete(true);
    }, 3000);
  };

  return (
    <StyledWrapper>
      {items.map((item, index) => (
        <StyledRow>
          <StyledLabel>
            <StyledInput
              type="checkbox"
              onChange={(e) => handleChange(e, index)}
            />
            <StyledCheckbox>
              <StyledCheckboxCheck />
            </StyledCheckbox>
          </StyledLabel>
          <StyledCheckboxText>{item.name}</StyledCheckboxText>
          {
            <StyledSpinner
              isVisible={item.isDownloading && !downloadComplete}
            />
          }
        </StyledRow>
      ))}
      <StyledDownloadButton
        onClick={handleButtonClicked}
        disabled={isButtonDisabled}
      >
        {isDownloading ? (
          "Downloading images ..."
        ) : downloadComplete ? (
          "Downloading complete  👍"
        ) : (
          <>
            Download Selected Images ({items.filter((o) => o.isChecked).length})
          </>
        )}
      </StyledDownloadButton>
    </StyledWrapper>
  );
};

export default Wrapper;
