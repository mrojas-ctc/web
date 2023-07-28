import React, { useState } from "react";

// Router
import { Link } from "react-router-dom";

import "./userHeader.scss";

interface Props {
   user: any;
   img: any;
   isOpen: boolean;
   handleLogout: () => void;
}

const UserDropdown: React.FC<Props> = ({ user, img, handleLogout, isOpen }) => {
   const [isVisible, setIsVisible] = useState(false);

   return (
      <>
         <div
            onClick={() => setIsVisible(!isVisible)}
            className={`user-header ${
               isOpen ? "user-header--open" : "user-header--close"
            } ${
               isVisible ? "user-header--active" : "user-header--inactive"
            }`}
         >
            {!isOpen && (
               <div
                  className="user-header"
                  onClick={() => setIsVisible(!isVisible)}
               >
                  <img
                     className="user-header__img"
                     src={img}
                     alt={`${user?.first_name} ${user?.last_name}`}
                  />
               </div>
            )}
            {isOpen && (
               <div className="user-header__img-container">
                  <img
                     className="user-header__img"
                     src={img}
                     alt={`${user?.first_name} ${user?.last_name}`}
                  />
               </div>
            )}
         </div>
         {isVisible && (
            <div
               className="user-header__modal-container"
               onClick={() => setIsVisible(false)}
            >
               <ul
                  className={`user-header__modal ${
                     isOpen
                        ? "user-header__modal--open"
                        : "user-header__modal--close"
                  }`}
               >
                  <li className="user-header__modal-item-name">
                     {user
                        ? `${user?.first_name.split(" ")[0]} ${
                             user?.last_name[0]
                          }.`
                        : ""}
                  </li>
                  <li
                     className={`user-header__modal-item-username ${
                        user?.username.length > 25 &&
                        "user-header__modal-item-username--split"
                     }`}
                  >
                     {user?.username}
                  </li>
                  <li className="user-header__modal-item user-header__modal-item--disabled">
                     Perfil
                  </li>
                  {user.permission.name === "Teacher" ? (
                     <Link
                        className="user-header__modal-link-item"
                        to={`teachers/teacher-availability/teacher-profile/${user.id}`}
                     >
                        Perfil de profesor
                     </Link>
                  ) : null}
                  <li className="user-header__modal-item user-header__modal-item--disabled">
                     Configuración
                  </li>
                  <li
                     className="user-header__modal-item"
                     onClick={handleLogout}
                  >
                     Salir
                  </li>
               </ul>
            </div>
         )}
         {isVisible && <></>}
      </>
   );
};

export default UserDropdown;
