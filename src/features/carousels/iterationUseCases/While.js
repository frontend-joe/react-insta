import { useState } from "react";

import styled, { keyframes, css } from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  color: white;
  background: #171517;
  padding: 1.5rem;
  width: 18rem;
  height: 14rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const StyledButton = styled.button`
  background: #8f44fd;
  color: white;
  border-radius: 0.5rem;
  height: 2rem;
  padding: 0 0.75rem;
`;

const StyledPitch = styled.div`
  height: 14rem;
  display: flex;
`;

const StyledVsBlock = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  color: white;
  background: #171517;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.06);

  & > span {
    transform: translateY(-2px);
  }
`;

const StyledLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: rgba(255, 255, 255, 0.06);
`;

const overlayVisibleStyles = css`
  visibility: visible;
  opacity: 1;
`;

const StyledOverlay = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(p) => p.isVisible && overlayVisibleStyles};

  transition: all 0.35s;
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpinner = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-left-color: white;
  margin-bottom: 0.75rem;
  animation: ${spin} 1.25s infinite linear;
`;

const StyledSpinnerLabel = styled.div`
  color: white;

  font-size: 0.875rem;
`;

const StyledPlayerColumn = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const StyledPlayerRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
`;

const StyledTotalScore = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
`;

const players = [
  { name: "Joe", score: 86 },
  { name: "Dan", score: 96 },
  { name: "Pete", score: 87 },
  { name: "Cal", score: 82 },
  { name: "Will", score: 81 },
  { name: "Ray", score: 85 },
  { name: "Tyler", score: 92 },
  { name: "Tom", score: 95 },
  { name: "Jack", score: 86 },
  { name: "Caz", score: 89 },
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const Wrapper = () => {
  const [teamsPicked, setTeamsPicked] = useState(false);
  const [isPicking, setPicking] = useState(false);

  const [pickedTeam1, setPickedTeam1] = useState([]);
  const [pickedTeam2, setPickedTeam2] = useState([]);

  const [pickedTeam1Score, setPickedTeam1Score] = useState([]);
  const [pickedTeam2Score, setPickedTeam2Score] = useState([]);

  const pickTeams = () => {
    setPicking(true);
    setTeamsPicked(false);

    let counter = 0;

    while (!teamsPicked) {
      if (counter > 50) {
        break;
      }

      let shuffledPlayers = shuffle(players);

      let team1 = [];
      let team2 = [];

      for (let i = 0; i < shuffledPlayers.length / 2; i++) {
        team1.push(players[i === 0 ? 0 : i * 2]);
        team2.push(players[i === 0 ? 1 : i * 2 + 1]);
      }

      const team1Score = team1
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);

      const team2Score = team2
        .map((obj) => obj.score)
        .reduce((a, b) => a + b, 0);

      console.log("team1", team1);
      console.log("team1Score", team1Score);

      console.log("team2", team2);
      console.log("team2Score", team2Score);

      if (Math.abs(team1Score - team2Score) < 5) {
        console.log("we've found good teams break!!!");
        setPickedTeam1(team1);
        setPickedTeam2(team2);

        setPickedTeam1Score(team1Score);
        setPickedTeam2Score(team2Score);

        setTimeout(() => {
          setPicking(false);
          setTeamsPicked(true);
        }, 3000);
      }

      counter++;
    }
  };

  return (
    <StyledWrapper>
      <StyledOverlay isVisible={isPicking}>
        <StyledSpinner />
        <StyledSpinnerLabel>Picking Teams ...</StyledSpinnerLabel>
      </StyledOverlay>
      <StyledHeader>
        Pickr 2.0
        <StyledButton onClick={pickTeams}>Pick Teams</StyledButton>
      </StyledHeader>
      <StyledPitch>
        {teamsPicked && (
          <>
            <StyledPlayerColumn>
              {pickedTeam1.map((p) => (
                <StyledPlayerRow>
                  {p.name} ({p.score})
                </StyledPlayerRow>
              ))}
              <StyledTotalScore>Total: {pickedTeam1Score}</StyledTotalScore>
            </StyledPlayerColumn>

            <StyledPlayerColumn>
              {pickedTeam2.map((p) => (
                <StyledPlayerRow>
                  {p.name} ({p.score})
                </StyledPlayerRow>
              ))}
              <StyledTotalScore>Total: {pickedTeam2Score}</StyledTotalScore>
            </StyledPlayerColumn>
          </>
        )}

        <StyledLine />
        <StyledVsBlock>
          <span>vs</span>
        </StyledVsBlock>
      </StyledPitch>
    </StyledWrapper>
  );
};

export default Wrapper;
