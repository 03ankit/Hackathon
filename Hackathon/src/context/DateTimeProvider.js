import { createContext, useState } from "react";

const dateContext = createContext({});

export const DateTimeProvider = ({ children }) => {
  const [data, setData] = useState({});
  return (
    <dateContext.Provider value={{ data,setData}}>
      {children}
    </dateContext.Provider>
  );
};

export default dateContext;
// import { createContext, useState } from "react";
// export const dateContext = createContext({});