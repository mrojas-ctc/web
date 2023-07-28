import { useRef, useEffect } from "react";

export const useFirstRender = () => {
  const isFirstRenderRef = useRef(true);
  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);
  return isFirstRenderRef.current;
};

export default useFirstRender;
