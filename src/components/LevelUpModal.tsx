import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>5</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo level!</p>

                <button><img src="icons/close.svg" alt="Fechar modal"/></button>
            </div>
        </div>
    )
}