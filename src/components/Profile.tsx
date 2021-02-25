import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/nascjoao.png" alt="João Victor Nascimento"/>
            <div>
                <strong>João Victor Nascimento</strong>
                <p>
                    <img src="icons/level.svg" alt="Arrow Up"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}