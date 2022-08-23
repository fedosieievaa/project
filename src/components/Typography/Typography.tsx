import { useTranslation } from 'react-i18next';
import styles from './Typography.module.scss';

type Props = {
    text: string;
    style?: any;
    isLight?: boolean;
};

export const Typography = ({ text, style, isLight }: Props) => {
    const { t } = useTranslation();

    return (<div className={`${styles.text} ${isLight
        ? styles.light
        : ''} ${style}`}>{t(text)}</div>);
};
