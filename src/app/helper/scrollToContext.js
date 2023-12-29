'use client'
import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const projectsRef = useRef(null);

    const scrollToProject = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ScrollContext.Provider value={{ projectsRef, scrollToProject }}>
            {children}
        </ScrollContext.Provider>
    );
};