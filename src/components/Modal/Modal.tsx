import styles from './Modal.module.scss';
type Props = {
    close: () => void;
    children: any;
    isLight?: boolean;
};
export const Modal = ({ close, children, isLight }: Props) => {
    return (
        <div className={`${styles.container} ${isLight
            ? styles.light
            : ''}`}>
            <div className={styles.modal}>
                <span className={styles.close} onClick={close}>
                    x
                </span>
                {children}
            </div>
        </div>
    );
};
