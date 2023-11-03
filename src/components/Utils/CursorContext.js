import React, { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const useCursorContext = () => {
  return useContext(CursorContext);
};

export const CursorProvider = ({ children }) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const value = {
    mouseX,
    setMouseX,
    mouseY,
    setMouseY,
  };

  return <CursorContext.Provider value={value}>{children}</CursorContext.Provider>;
};
