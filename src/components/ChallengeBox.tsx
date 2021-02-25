import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, counterActive, resetChallenge, completeChallenge } = useContext(ChallengesContext)

    const { resetCountdown } = useContext(CountdownContext)

    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return(
        <div className={styles.challengeBoxContainer}>
            { !counterActive ? (
                <>
                { !activeChallenge ? (
                <div className={styles.challengeNotActive}>
                    <strong>Inicie um ciclo<br /> para receber desafios</strong>
                    <img src="icons/level-up.svg" alt="Arrow Up"/>
                    <p>Avance de level completando os desafios.</p>
                </div>
                ) : (
                <div className={styles.challengeActive}>
                    <header>Ganhe { activeChallenge.amount } xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio!</strong>
                        <p>{ activeChallenge.description }</p>
                    </main>
                    <footer>
                        <button className={styles.challengeFailed} onClick={handleChallengeFailed}>Falhei</button>
                        <button className={styles.challengeSucceeded} onClick={handleChallengeSucceeded}>Completei</button>
                    </footer>
                </div>
                ) }
                </>
            ) : (
            <div className={styles.challengeLoading}>
                <strong>Finalize o ciclo<br /> para receber desafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Arrow Up"/>
                    Complete-os e ganhe<br />experiência e avance de leve.
                </p>
            </div>
            ) }
            
        </div>
    )
}