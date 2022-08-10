import { Languages } from 'components/languages/Languages';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './App.module.scss';
import { store } from './store/store';
import { api } from './api/index';

function App() {
    const [isLight, setIsLight] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        store.addTodo('Add MobX store.');
        console.log(store.tasks);
        console.log(api);
    }, []);

    return (
        <div className={`${styles.app} ${isLight ? styles.light : ''}`}>
            <Languages />
            <button
                className={styles.button}
                onClick={() => {
                    setIsLight(!isLight);
                }}
            >
                {isLight ? t('dark-mode') : t('light-mode')}
            </button>
            <p className={styles.paragraph}>{t('hello-world')}</p>
        </div>
    );
}

export default App;
