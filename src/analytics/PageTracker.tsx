import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", "G-J1ZEQKQHPN", {
        page_path: location.pathname + location.hash,
      });
    } 
  }, [location]);

  return null;
};

export default PageTracker;