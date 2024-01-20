'use client'
import React, { createContext, useRef } from 'react';

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const topPageRef = useRef(null);
    const projectsRef = useRef(null);
    const achievementRef = useRef(null);
    const contactMeRef = useRef(null);
    const aboutMeRef = useRef(null);

    const scrollToTopPage = () => {
        topPageRef.current?.scrollIntoView({ behavior: 'instant' });
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
    const scrollToAboutMe = () => {
        aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <ScrollContext.Provider value={{ topPageRef, projectsRef, achievementRef, contactMeRef, scrollToTopPage, scrollToProject, scrollToAchievements, scrollToContactMe, aboutMeRef, scrollToAboutMe }}>
            {children}
        </ScrollContext.Provider>
    );
}; 