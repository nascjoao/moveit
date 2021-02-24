import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, counterActive } = useContext(ChallengesContext)

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
                    <strong>Finalize o ciclo<br /> para receber desafios</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Arrow Up"/>
                        Complete-os e ganhe<br />experiência e avance de leve.
                        { activeChallenge.description }
                    </p>
                </div>
                ) }
                </>
            ) : (
            <div className={styles.challengeActive}>
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