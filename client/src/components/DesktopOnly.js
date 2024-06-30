import { useNavigate, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";

const DesktopOnlyRoute = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isMobile) {
      navigate("/mobile-restricted", {
        state: { from: location },
        replace: true,
      });
    }
  }, [navigate, location]);

  return !isMobile ? children : null;
};

export default DesktopOnlyRoute;
