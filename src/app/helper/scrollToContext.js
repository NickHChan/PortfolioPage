'use client'
import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const topPageRef = useRef(null);
    const projectsRef = useRef(null);
    const achievementRef = useRef(null);
    const contactMeRef = useRef(null)

    const scrollToTopPage = () => {
        topPageRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToProject = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToAchievements = () => {
        achievementRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToContactMe = () => {
        contactMeRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <ScrollContext.Provider value={{ topPageRef, projectsRef, achievementRef, contactMeRef, scrollToTopPage, scrollToProject, scrollToAchievements, scrollToContactMe }}>
            {children}
        </ScrollContext.Provider>
    );
}; 