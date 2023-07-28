import { useEffect, useState } from 'react';

// Redux
import { useSelector } from "react-redux";
import { AppDispatch, RootState, useAppDispatch } from "./store/store";
import useFirstRender from './hooks/useIsFirstRender';
import { getAccessCookie, getRefreshCookie } from './helpers/cookies.helpers';
import { getCurrentUser, logout, refreshToken, setToken } from './slices/authSlice';
import Router from './routes/routes';

function App() {
  const dispatch: AppDispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const rejected = useSelector((state: RootState) => state.auth.rejected);
  const lastRejected = useSelector(
      (state: RootState) => state.auth.lastRejected
  );

  const isFirstRender = useFirstRender();
  const accessCookie = getAccessCookie();
  const refreshCookie = getRefreshCookie();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
      !!accessCookie
  );

  useEffect(() => {
    rejected && refreshCookie && refresh(refreshCookie);
    // eslint-disable-next-line
  }, [rejected]);

  useEffect(() => {
    if (lastRejected) {
       dispatch(logout());
       setIsAuthenticated(false);
    }
    // eslint-disable-next-line
  }, [lastRejected]);

  useEffect(() => {
      !isFirstRender && setIsAuthenticated(!!user);
      // eslint-disable-next-line
  }, [user]);

  useEffect(() => {
      if (isAuthenticated) {
        dispatch(setToken(accessCookie));
        dispatch(getCurrentUser());
      }
      // eslint-disable-next-line
  }, []);

  const refresh = async (refresh: string) => {
    const result = await dispatch(refreshToken(refresh));

    if (refreshToken.fulfilled.match(result)) {
       const resultUser = await dispatch(getCurrentUser());
       if (getCurrentUser.fulfilled.match(resultUser)) {
          setIsAuthenticated(true);
       }
    }
  };

  return <Router isAuthenticated={isAuthenticated} />;
}

export default App;
