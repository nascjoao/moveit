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
    counterActive: boolean;
    levelUp: () => void;
    newChallenge: () => void;
    waitForChallenge: () => void;
    resetChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({children}: ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [counterActive, setCounterActive] = useState(false)

    function levelUp() {
        setLevel(level + 1)
    }

    function newChallenge() {
        setCounterActive(false)
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        setActiveChallenge(challenges[randomChallengeIndex])
    }

    function waitForChallenge() {
        setCounterActive(true)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            activeChallenge,
            counterActive,
            levelUp,
            newChallenge,
            waitForChallenge,
            resetChallenge
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}