import { createContext, useContext, useState } from 'react';
import { chairColors, cushionColors } from '../styles/colors';

const CustomizationContext = createContext({});

export const CustomizationProvider = ({ children }) => {
    const [material, setMaterial] = useState('leather');
    const [legs, setLegs] = useState(1);
    const [chairColor, setChairColor] = useState(chairColors[0].color);
    const [cushionColor, setCushionColor] = useState(cushionColors[0].color);

    return (
        <CustomizationContext.Provider value={{
            material,
            setMaterial,
            legs,
            setLegs,
            chairColor,
            setChairColor,
            cushionColor,
            setCushionColor
        }}>
            {children}
        </CustomizationContext.Provider>
    );
};

export const useCustomization = () => {
    const context = useContext(CustomizationContext);
    return context;
};