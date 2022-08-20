import { rgba } from "polished";

import Reel from "components/Reel";
import Reel2 from "components/Reel2";
import ReelGodzilla from "components/ReelGodzilla";
import Cover from "components/Cover";
import Result from "components/Result";
import UseCase from "components/UseCase";

import react from "assets/react.png";
import css from "assets/css.png";

import ThePerfectButton from "features/carousels/ThePerfectButton";
import ReactBurgerIcon from "features/carousels/ReactBurgerIcon";
import ThemedSvg from "features/carousels/ThemedSvg";
import BlinkingCursor from "features/carousels/BlinkingCursor";
import CssDropdown from "features/carousels/CssDropdown";

import UseCase1 from "features/carousels/buttons/GradientBorder";
import UseCase2 from "features/carousels/buttons/GradientFillLeft";
import UseCase3 from "features/carousels/buttons/DetonateButton";
import UseCase4 from "features/carousels/buttons/GlowingButton";
import UseCase5 from "features/carousels/buttons/PressButton";
import UseCase6 from "features/carousels/keyframeUseCases/Waves";
import UseCase7 from "features/carousels/keyframeUseCases/Blink";
import UseCase8 from "features/carousels/keyframeUseCases/Rock";

import uc1Code from "assets/uc1.png";
import uc2Code from "assets/uc2.png";
import uc3Code from "assets/uc3.png";
import uc4Code from "assets/uc4.png";
import uc5Code from "assets/uc5.png";
import uc6Code from "assets/uc6.png";
import uc7Code from "assets/uc7.png";
import uc8Code from "assets/uc8.png";

const routes = [
  {
    isReel: true,
    component: Reel,
    name: "Reel",
    path: "/reel",
    // background: "linear-gradient(45deg,#09080a,#3E3D42)",
    background: "#100f10",
  },
  {
    isReel: true,
    component: Reel2,
    name: "Reel 2",
    path: "/reel2",
    // background: "linear-gradient(45deg,#09080a,#3E3D42)",
    background: "#100f10",
  },
  {
    isReel: true,
    component: ReelGodzilla,
    name: "ReelGodzilla",
    path: "/reel-godzilla",
    background: "linear-gradient(45deg,#260d56,#8401ba)",
  },
  {
    component: Cover,
    name: "Cover",
    series: "React JS",
    title1: "Let's",
    title2: "Learn",
    title3: "GSAP",
    coverImage: null,
    coverImageSize: 380,
    coverImageX: 194,
    coverImageY: 476,
    highlight: {
      rowIndex: 2,
      wordIndex: 0,
    },
    path: "/cover",
    background: "#100F10",
  },
  {
    component: Result,
    name: "Result",
    path: "/result",
    background: "#100F10",
    color: rgba("white", 0.96),
  },
  {
    component: UseCase,
    name: "Use Case 1",
    path: "/use-case1",
    background: "#100F10",
    useCaseTitle: "Fill up",
    useCaseDescription: null,
    useCaseCode: null,
    useCaseComponent: <UseCase1 />,
  },
  {
    component: UseCase,
    name: "Use Case 2",
    path: "/use-case2",
    background: "#100F10",
    useCaseTitle: "Fill right",
    useCaseDescription: null,
    useCaseCode: null,
    useCaseComponent: <UseCase2 />,
  },
  {
    component: UseCase,
    name: "Use Case 3",
    path: "/use-case3",
    background: "#100F10",
    useCaseTitle: "Angry shake",
    useCaseDescription: null,
    useCaseCode: null,
    useCaseComponent: <UseCase3 />,
  },
  {
    component: UseCase,
    name: "Use Case 4",
    path: "/use-case4",
    background: "#100F10",
    useCaseTitle: "Intense glow",
    useCaseDescription: null,
    useCaseCode: null,
    useCaseComponent: <UseCase4 />,
  },
  {
    component: UseCase,
    name: "Use Case 5",
    path: "/use-case5",
    background: "#6d2eff",
    useCaseTitle: "",
    useCaseDescription: "",
    useCaseCode: null,
    useCaseComponent: <UseCase5 />,
  },
  {
    component: UseCase,
    name: "Use Case 6",
    path: "/use-case6",
    background: "#252325",
    useCaseTitle: "Waves",
    useCaseDescription: "",
    useCaseCode: uc6Code,
    useCaseComponent: <UseCase6 />,
  },
  {
    component: UseCase,
    name: "Use Case 7",
    path: "/use-case7",
    background: "#24223e",
    useCaseTitle: "Blink",
    useCaseDescription: "",
    useCaseCode: uc7Code,
    useCaseComponent: <UseCase7 />,
  },
  {
    component: UseCase,
    name: "Use Case 8",
    path: "/use-case8",
    background: "#3e206e",
    useCaseTitle: "Rock",
    useCaseDescription: "",
    useCaseCode: uc8Code,
    useCaseComponent: <UseCase8 />,
  },
];

export default routes;
