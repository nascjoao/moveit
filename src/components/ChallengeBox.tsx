import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    return(
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challengeNotActive}>
                <strong>Inicie um ciclo para receber desafios</strong>
                <img src="icons/level-up.svg" alt="Arrow Up"/>
                <p>Avance de level completando os desafios.</p>
            </div>
        </div>
    )
}