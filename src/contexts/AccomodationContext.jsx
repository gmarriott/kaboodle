import React from "react";

export const accomodationContextDefaults = {
    filter: "",
    setFilter: Function,
};

export const AccomodationContext = React.createContext(accomodationContextDefaults);
export const useAccomodationContext = () => React.useContext(AccomodationContext);

export const AccomodationProvider = ({ children }) => {
    const [filter, setFilter] = React.useState("");

    // provider wrapper which allows the app to use the filter set function and value
    return (
        <AccomodationContext.Provider
            value={{
                filter,
                setFilter,
            }}
        >
            {children}
        </AccomodationContext.Provider>
    );
};
