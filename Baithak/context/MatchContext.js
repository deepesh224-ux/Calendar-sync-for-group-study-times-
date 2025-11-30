import React, { createContext, useState, useContext } from 'react';

const MatchContext = createContext();

const initialMatches = [
    { name: 'Alice', subject: 'Math', availability: 'Mon 5pm' },
    { name: 'Bob', subject: 'Math', availability: 'Wed 3pm' },
    { name: 'Carol', subject: 'History', availability: 'Tue 2pm' },
];

export const MatchProvider = ({ children }) => {
    const [matches, setMatches] = useState(initialMatches);
    const [mymatches, setMymatches] = useState([]);

    const addMyMatch = (match) => {
        setMymatches((prevMatches) => [...prevMatches, match]);
    };

    const addMatch = (match) => {
        setMatches((prevMatches) => [...prevMatches, match]);
    };

    return (
        <MatchContext.Provider value={{ matches, setMatches, addMatch, mymatches, setMymatches, addMyMatch }}>
            {children}
        </MatchContext.Provider>
    );
};

export const useMatches = () => useContext(MatchContext);
