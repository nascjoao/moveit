import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    const challengeActive = true

    return(
        <div className={styles.challengeBoxContainer}>
            { challengeActive ? (
            <div className={styles.challengeActive}>
                <strong>Finalize o ciclo<br /> para receber desafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Arrow Up"/>
                    Complete-os e ganhe<br />experiência e avance de leve.
                </p>
            </div>
            ) : (
            <div className={styles.challengeNotActive}>
                <strong>Inicie um ciclo<br /> para receber desafios</strong>
                <img src="icons/level-up.svg" alt="Arrow Up"/>
                <p>Avance de level completando os desafios.</p>
            </div>
            )}
        </div>
    )
}