import { useEffect } from "react";
import { scrollWindowToTop } from "../helpers";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  const { pathname, search } = location;

  useEffect(() => {
    scrollWindowToTop();
  }, [pathname, search]);

  return null;
};
