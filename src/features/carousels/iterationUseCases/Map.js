import styled, { keyframes } from "styled-components";

const StyledWrapper = styled.div``;

const card1 = keyframes`
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const card2 = keyframes`
  0 {
    opacity: 0;
  }
  30% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const card3 = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledCard = styled.div`
  background: #171517;
  border-left: 0.325rem solid #1ac0a2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16rem;
  height: 4rem;
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  opacity: 0;

  ${(p) => p.hideBorder && "border-color: transparent"};

  animation: ${(p) =>
      p.index === 0
        ? card1
        : p.index === 1
        ? card2
        : p.index === 2
        ? card3
        : null}
    4s infinite ease-out;
`;

const StyledChip = styled.div`
  padding: 0.25rem 0.75rem;
  background: #1ac0a2;
  color: #171517;
  border-radius: 0.325rem;
  font-size: 0.75rem;
`;

const users = [
  { name: "Joe Harrison", age: 36 },
  { name: "Dave Whitehead", age: 23 },
  { name: "Arthur Harrison", age: 2 },
];

const usersWithStatus = users.map((u) => ({
  ...u,
  status: u.age >= 18 ? "18+" : "",
}));

const Wrapper = () => {
  return (
    <StyledWrapper>
      {usersWithStatus.map((o, i) => (
        <StyledCard hideBorder={!o.status} index={i}>
          {o.name}
          {o.status && <StyledChip>{o.status}</StyledChip>}
        </StyledCard>
      ))}
    </StyledWrapper>
  );
};

export default Wrapper;
