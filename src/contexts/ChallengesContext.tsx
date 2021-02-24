import { createContext, ReactNode, useState } from "react";

interface ChallengesProviderProps {
    children: ReactNode
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    levelUp: () => void;
    newChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    function levelUp() {
        setLevel(level + 1)
    }

    function newChallenge() {
        console.log('New Challenge!')
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            newChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}