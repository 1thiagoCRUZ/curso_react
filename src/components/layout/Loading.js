import styles from './Loading.module.css'
import loadind from '../../img/loading.svg'

function Loading() {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loadind} alt="Loading" />
        </div>
    )
}
export default Loading