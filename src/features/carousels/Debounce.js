import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const heroes = [
  {
    superhero: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    characters: "Bruce Wayne",
  },
  {
    superhero: "Black Canary",
    publisher: "DC Comics",
    alter_ego: "Dinah Drake",
    first_appearance: "Flash Comics #86",
    characters: "Dinah Drake, Dinah Lance",
  },
  {
    superhero: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    characters: "Dan Garret, Ted Kord, Jaime Reyes",
  },
  {
    superhero: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    characters: "Steve Rogers",
  },
  {
    superhero: "Cyclops",
    publisher: "Marvel Comics",
    alter_ego: "Scott Summers",
    first_appearance: "X-Men #1",
    characters: "Scott Summers",
  },
  {
    superhero: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    characters: "Matthew Michael Murdock",
  },
  {
    superhero: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    characters: "Jay Garrick, Barry Allen, Wally West, Bart Allen",
  },
  {
    superhero: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "More Fun Comics #73",
    characters: "Oliver Queen",
  },
  {
    superhero: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    characters:
      "Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz",
  },
  {
    superhero: "Hawkeye",
    publisher: "Marvel Comics",
    alter_ego: "Clinton Francis Barton",
    first_appearance: "Tales of Suspense #57",
    characters: "Clinton Francis Barton",
  },
  {
    superhero: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    characters: "Bruce Banner",
  },
  {
    superhero: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    characters: "Tony Stark",
  },
  {
    superhero: "Martian Manhunter",
    publisher: "DC Comics",
    alter_ego: "J'onn J'onzz",
    first_appearance: "Detective Comics #225",
    characters: "Martian Manhunter",
  },
  {
    superhero: "Robin/Nightwing",
    publisher: "DC Comics",
    alter_ego: "Dick Grayson",
    first_appearance: "Detective Comics #38",
    characters: "Dick Grayson",
  },
  {
    superhero: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    characters: "Norrin Radd",
  },
  {
    superhero: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    characters: "Peter Parker",
  },
  {
    superhero: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    characters: "Kal-El",
  },
  {
    superhero: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    characters: "Thor Odinson",
  },
  {
    superhero: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    characters: "James Howlett",
  },
  {
    superhero: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "All Star Comics #8",
    characters: "Princess Diana",
  },
];

const StyledWrapper = styled.div``;

const StyledTextboxWrapper = styled.div`
  position: relative;
`;

const StyledIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.96);
  font-size: 22px;
`;

const StyledTextbox = styled.input`
  height: 4.5rem;
  width: 16rem;
  padding: 0 1.5rem;
  border-radius: 10px;
  border: 0;
  background: #212025;
  color: #f9f9f9;
  font-size: 1.25rem;
  outline: none;
  transition: all 0.3s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.65);
  }
`;

const StyledResults = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  background: #212025;
  color: #f9f9f9;
`;

const StyledResultsInner = styled.div`
  padding: 0.75rem 1rem;
`;

const StyledResultsItemIcon = styled.span`
  color: inherit;
  opacity: 0;
  font-size: 1.5rem;
`;

const StyledResultsItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  padding: 0 0.5rem;
  font-size: 1rem;
  color: #f9f9f9;

  &:hover {
    background: #36343e;
  }

  &:hover ${StyledResultsItemIcon} {
    opacity: 1;
  }
`;

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

const Wrapper = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearching(true);
      setResults(
        heroes.filter((o) =>
          o.superhero.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setSearching(false);
    } else {
      setResults([]);
      setSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <StyledWrapper className={className}>
      <StyledTextboxWrapper>
        <StyledTextbox
          placeholder="Start Searching"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <StyledIcon className="uil uil-search" />
        <StyledResults>
          {!!results?.length && (
            <StyledResultsInner>
              {results?.map((item) => (
                <StyledResultsItem>
                  {item.superhero}
                  <StyledResultsItemIcon className="uil uil-angle-right"></StyledResultsItemIcon>
                </StyledResultsItem>
              ))}
            </StyledResultsInner>
          )}
        </StyledResults>
      </StyledTextboxWrapper>
    </StyledWrapper>
  );
};

export default Wrapper;
