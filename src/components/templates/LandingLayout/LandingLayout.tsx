
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState, useAppDispatch } from "../../../store/store";

import "./landingLayout.scss";

import banner2 from "../../../assets/logo-gamejam.png";
import banner3 from "../../../assets/banner3.png";
import { logout } from "../../../slices/authSlice";
import UserHeader from "../../molecules/UserHeader";
import Typography from "../../atoms/Typography/Typography";
import ctcLogo from "../../../assets/ctclogo.png";
import Carousel from "../../atoms/Carousel/Carousel";

interface Props {
  children?:any;
}

const LandingLayout: React.FC<Props> = ({ 
  children
}) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <main className="landing-layout">
      <div className="landing-layout__logo">
        <a className="LinkRoll" href="/">
          <span className="LinkRoll-text">
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>J</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>o</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>o</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>n</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>a</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>s</span>
            <span className="LinkRoll-char -empty" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>&nbsp;</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>S</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>a</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>n</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>d</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>e</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>l</span>
            <span className="LinkRoll-char" style={{transform: "translateY(0%) skewX(0deg) translateZ(0px)", opacity: 1}}>l</span>
          </span>
        </a>
        <img src={ctcLogo} width="100" alt="CTC Logo" />
      </div>
      <header className="landing-layout__header">
        <Typography
            bold
            type="paragraph1"
            variation="mobile"
            color="#e6cd56"
        >
            Bienvenido
        </Typography>
        <Typography
            bold
            type="paragraph1"
            variation="mobile"
            color="#e6cd56"
        >
            Bienvenido
        </Typography>
        <Typography
            bold
            type="paragraph1"
            variation="mobile"
            color="#e6cd56"
        >
            Bienvenido
        </Typography>
        <Typography
            bold
            type="paragraph1"
            variation="mobile"
            color="#e6cd56"
        >
            Bienvenido
        </Typography>
      </header>
      <section  className="landing-layout__banner">
        <img src={banner2} width="600" alt="banner2" />
      </section>
      <section className="landing-layout__message">
        <Typography
            bold
            type="h2"
            variation="mobile"
            color="white"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam dicta temporibus sunt? Explicabo, similique fugiat hic iure natus id commodi, quis eos nihil voluptas minima est aspernatur aliquam repellat perspiciatis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam dicta temporibus sunt? Explicabo, similique fugiat hic iure natus id commodi, quis eos nihil voluptas minima est aspernatur aliquam repellat perspiciatis.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam dicta temporibus sunt? Explicabo, similique fugiat hic iure natus id commodi, quis eos nihil voluptas minima est aspernatur aliquam repellat perspiciatis.
        </Typography>
      </section>
      <section className="landing-layout__information">
        <div className="landing-layout__information--text">
          <Typography
              bold
              type="h3"
              variation="mobile"
              color="#e6cd56"
          >
              Bienvenido
          </Typography>
          <Typography
              bold
              type="paragraph1"
              variation="mobile"
              color="white"
          >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ipsum, excepturi aut officiis quasi, deleniti placeat maiores tenetur quod, illum minima nostrum laudantium aspernatur! Ullam cum autem perspiciatis. Iusto, pariatur.
          </Typography>
        </div>
        <div className="landing-layout__information--image">
          <img src={banner3} alt="banner3" />
        </div>
      </section>
      <section className="landing-layout__carousel">
        <Carousel
          images={[banner2,banner2,banner2]}
        ></Carousel>
      </section>
    </main>
  );
};

export default LandingLayout;
