import styles from './Loader.module.scss';

type Props = {
    isLight: boolean;
};

export const Loader = ({ isLight }: Props) => {
    return (
        <div className={`${styles.loader} ${isLight ? styles.light : ''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};
