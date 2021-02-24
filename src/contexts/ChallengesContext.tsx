import { createContext, ReactNode, useState } from "react";

import challenges from '../../challenges.json'

interface ChallengesProviderProps {
    children: ReactNode
}

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void;
    newChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    function levelUp() {
        setLevel(level + 1)
    }

    function newChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        setActiveChallenge(challenges[randomChallengeIndex])
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            newChallenge,
            activeChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}