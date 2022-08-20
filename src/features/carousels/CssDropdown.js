import styled, { css } from "styled-components";

const StyledWrapper = styled.div``;

const StyledMenu = styled.span`
  position: absolute;
  z-index: 1;
  top: 5.5rem;
  left: 0;
  display: block;
  width: 100%;
  padding: 1rem 0;
  background: #5e2ea7;
  border-radius: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition-property: transform, opacity, visibility;
  transition-duration: 0.35s;
`;

const transition1 = css`
  & ${StyledMenu} {
    transform: translateY(1rem);
  }

  & input:checked ~ ${StyledMenu} {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

const transition2 = css`
  & ${StyledMenu} {
  }

  & input:checked ~ ${StyledMenu} {
    visibility: visible;
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const transition3 = css`
  & ${StyledMenu} {
    transform: scaleY(0);
    transform-origin: 0% 0%;
  }

  & input:checked ~ ${StyledMenu} {
    visibility: visible;
    opacity: 1;
    transform: scaleY(1);
  }
`;

const transition4 = css`
  & ${StyledMenu} {
    transform: translate(-2rem, -2.5rem) scale(0);
    transform-origin: 100% 0%;
  }

  & input:checked ~ ${StyledMenu} {
    visibility: visible;
    opacity: 1;
    transform: translate(0) scale(1);
  }
`;

const transition5 = css`
  & ${StyledMenu} {
    backface-visibility: hidden;
    transform: rotate3d(1, 0, 0, -90deg);
    transform-origin: 0% 0%;
  }

  & input:checked ~ ${StyledMenu} {
    visibility: visible;
    opacity: 1;
    transform: rotate3d(0, 0, 0, 0);
  }
`;

const StyledLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  perspective: 1000px;
  z-index: 1000;

  ${(p) => p.transition === 1 && transition1};
  ${(p) => p.transition === 2 && transition2};
  ${(p) => p.transition === 3 && transition3};
  ${(p) => p.transition === 4 && transition4};
  ${(p) => p.transition === 5 && transition5};
  ${(p) => p.transition === 6 && transition6};
  ${(p) => p.transition === 7 && transition7};
  ${(p) => p.transition === 8 && transition8};
`;

const StyledHeader = styled.span`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  width: 14rem;
  height: 3rem;
  padding: 0.75rem 1.5rem 0.75rem 1.75rem;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.96);
  background: #8f44fd;
`;

const StyledHeaderText = styled.span`
  font-size: 1.25rem;
`;

const StyledHeaderIcon = styled.span`
  font-size: 2rem;
  color: white;
  transition: transform 0.35s;
`;

const StyledInput = styled.input`
  position: absolute;
  transform: scale(0);

  &:checked ~ ${StyledHeader} ${StyledHeaderIcon} {
    transform: rotate(-180deg);
  }
`;

const StyledMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 3rem;
  padding: 0 1rem;
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.96);
`;

const StyledMenuButtonFlag = styled.img`
  width: 2.5rem;
`;

const items = [
  {
    name: "France",
    flag: "fr",
  },
  {
    name: "Paraguay",
    flag: "pr",
  },
  {
    name: "Sierra Leonne",
    flag: "sl",
  },
];

const Wrapper = ({ className, transition }) => {
  return (
    <StyledWrapper className={className}>
      <StyledLabel transition={transition} for="country-input">
        <StyledInput type="checkbox" id="country-input" />
        <StyledHeader>
          <StyledHeaderText>Select Country</StyledHeaderText>
          <StyledHeaderIcon className="uil uil-angle-down"></StyledHeaderIcon>
        </StyledHeader>
        <StyledMenu>
          {items.map((item) => (
            <StyledMenuButton>
              <StyledMenuButtonFlag
                src={`https://www.countryflags.io/${item.flag}/flat/64.png`}
              />
              {item.name}
            </StyledMenuButton>
          ))}
        </StyledMenu>
      </StyledLabel>
    </StyledWrapper>
  );
};

export default Wrapper;
