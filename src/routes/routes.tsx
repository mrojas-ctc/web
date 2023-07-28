// Router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Views
import Dashboard from "../views/Dashboard/Dashboard";
import SignIn from "../views/SignIn/Login";
import LandingLayout from "../components/templates/LandingLayout/LandingLayout";
import Landing from "../views/Landing/Landing";

interface Props {
   isAuthenticated: boolean;
}

const Router: React.FC<Props> = ({ isAuthenticated }) => {
   return (
      <BrowserRouter>
         <Routes>
            {isAuthenticated ? (
               <>
                  <Route path="/dashboard" element={<Dashboard />} />

                  <Route path="*" element={<Navigate to="/dashboard" />} />
               </>
            ) : (
               <>
                  <Route path="/" element={<Landing />} />

                  <Route path="*" element={<Navigate to="/" />} />
               </>
            )}
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
