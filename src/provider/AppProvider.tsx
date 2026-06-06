"use client";
import { createContext, useState, useMemo } from "react";
import { AppContextType } from "@/types/custom-d-t";

// Define default context value
const defaultContextValue: AppContextType = {
    openOffcanvas: false,
    setOpenOffcanvas: () => { },
    openCartOffcanvas: false,
    setOpenCartOffcanvas: () => { },
    toggleCartOffcanvas: () => { },
    toggleOffcanvas: () => { },
    toggleModal: () => { },
    openSearch: false,
    setOpenSearch: () => { },
    toggleSearch: () => { },
    openModal: false
};

export const AppContext = createContext<AppContextType>(defaultContextValue);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [openOffcanvas, setOpenOffcanvas] = useState<boolean>(false);
    const [openCartOffcanvas, setOpenCartOffcanvas] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);


    const contextValue: AppContextType = useMemo(() => ({
        openOffcanvas,
        setOpenOffcanvas,
        openCartOffcanvas,
        setOpenCartOffcanvas,
        toggleOffcanvas: () => setOpenOffcanvas(prev => !prev),
        toggleCartOffcanvas: () => setOpenCartOffcanvas(prev => !prev),
        openSearch,
        setOpenSearch,
        toggleSearch: () => setOpenSearch(prev => !prev),
        toggleModal: () => setOpenModal(prev => !prev),
        openModal
    }), [openOffcanvas, openCartOffcanvas, openSearch, openModal]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
