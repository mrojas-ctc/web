
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState, useAppDispatch } from "../../../store/store";
import IconArrow from "../../atoms/icons/IconArrow";

import "./homeLayout.scss";

import imgUser from "../../../assets/img/imgUser.png";
import { logout } from "../../../slices/authSlice";
import UserHeader from "../../molecules/UserHeader";

interface Props {
  children?:any;
}

const HomeLayout: React.FC<Props> = ({ 
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
    <main className="home-layout">
      <div className="home-layout__title">
        {children}
        <div>
          <UserHeader
              isOpen={true}
              img={imgUser}
              user={user}
              handleLogout={handleLogout}
          />
         </div>
      </div>
      <div className="home-layout__body">
        <div className="home-layout__body--wiki">
          <div className="home-layout__text">
            <p>Accede la Wiki de profesores</p>
            <a href="https://wiki2.crackthecode.la/login" target="_blank" rel="noreferrer">Ir a Wiki <IconArrow/></a>
          </div>
          <div className="home-layout__image">
            <img src="https://ctc-lms.s3-sa-east-1.amazonaws.com/images/bo/books.svg" alt="wiki"/>
          </div>
        </div>
        <div className="home-layout__body--ze">
          <div className="home-layout__text">
            <p>Accede a la Zona de Estudiantes</p>
            <a href="https://aprende.crackthecode.la/login/index.php" target="_blank" rel="noreferrer">Ir a Zona de Estudiantes <IconArrow/></a>
          </div>
          <div className="home-layout__image">
            <img src="https://ctc-lms.s3-sa-east-1.amazonaws.com/images/bo/laptop-home.svg" alt="ze"/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
