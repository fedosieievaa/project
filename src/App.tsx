import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { store } from './store/store';
import { api } from './api/index';
import { Languages } from 'components/Languages/Languages';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { Typography } from 'components/Typography/Typography';
import { useTranslation } from 'react-i18next';

enum InputTypes {
    primary = 'primary',
    success = 'success',
    error = 'error',
    disabled = 'disabled',
}
enum ButtonTypes {
    primary = 'primary',
    success = 'success',
    error = 'error',
    disabled = 'disabled',
    loading = 'loading',
}

function App() {
    const { t } = useTranslation();
    const [isLight, setIsLight] = useState(false);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [buttonStatus, setButtonStatus] = useState(ButtonTypes.primary);
    const [inputStatus, setInputStatus] = useState(InputTypes.primary);

    useEffect(() => {
        store.addTodo('Add MobX store.');
        // eslint-disable-next-line no-console
        console.log(store.tasks);
        // eslint-disable-next-line no-console
        console.log(api);
    }, []);

    return (
        <div className={`${styles.app} ${isLight
            ? styles.light
            : ''}`}>
            <Languages />
            <div className={styles.switchTheme}>
                <Button
                    status={ButtonTypes.primary}
                    onClick={() => {
                        setIsLight(!isLight);
                    }}
                    text={<Typography text={isLight
                        ? 'dark-mode'
                        : 'light-mode'} isLight={isLight} />}
                    isLight={isLight}
                />
            </div>
            <div className={styles.form}>
                <Typography text="submit-data" style={styles.paragraph} />
                <Input
                    status={inputStatus}
                    placeholder={t('input-placeholder')}
                    onChange={(e: any) => {
                        setInputValue(e.target.value);
                        if (e.target.value.length > 10) {
                            setInputStatus(InputTypes.error);
                        }
                        if (e.target.value.length < 10) {
                            setInputStatus(InputTypes.success);
                        }
                        if (e.target.value.length === 0) {
                            setInputStatus(InputTypes.primary);
                        }
                    }}
                    value={inputValue}
                    isLight={isLight}
                />
                <Button
                    status={buttonStatus}
                    onClick={() => {
                        setButtonStatus(ButtonTypes.loading);
                        setTimeout(() => {
                            setButtonStatus(ButtonTypes.success);
                            setIsModalOpened(true);
                        }, 2000);
                    }}
                    text={<Typography text="submit" isLight={isLight} />}
                    isLight={isLight}
                />
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laborum, atque necessitatibus illo a
                tenetur aut rerum quaerat? Ex unde eligendi commodi dolor. Nostrum mollitia doloribus ex architecto
                temporibus deleniti quam dolores sit natus facilis officia unde cupiditate odit incidunt libero
                repellendus modi voluptates et quod, quibusdam recusandae tempora omnis voluptatem atque! Porro,
                similique, molestias dolore ipsa perspiciatis necessitatibus esse officiis voluptatibus tempora magnam
                ipsam. Quidem fuga doloremque natus magni voluptates accusantium minus reiciendis possimus! Architecto
                temporibus soluta fuga repudiandae cupiditate eos culpa iste voluptate hic assumenda dolorem tempora,
                quos modi dicta facilis vel impedit maiores illo eaque similique! Non.
            </div>
            {isModalOpened && (
                <Modal
                    close={() => {
                        setIsModalOpened(false);
                    }}
                >
                    <div className={styles.randomText}>
                        <h3>Your data:</h3>
                        <div>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, modi exercitationem
                            numquam voluptates labore velit laudantium accusantium molestias at, eius voluptate odio
                            aspernatur eveniet enim, placeat ea nostrum id doloremque sint debitis? Consequatur,
                            assumenda itaque fugit molestiae voluptatum in reiciendis omnis ipsum natus repudiandae
                            tenetur deserunt quia quas optio corporis quis neque alias accusantium dolorum non nulla
                            dolorem. Omnis sed provident libero ea voluptates ipsa ratione iusto odit quibusdam sint
                            vitae modi non ipsam, nobis voluptatum, blanditiis pariatur in? Corporis accusantium,
                            necessitatibus ullam id cupiditate harum ratione accusamus rerum quas iure, eius at vitae
                            praesentium fuga labore voluptatem nemo veritatis expedita quaerat distinctio dicta!
                            Inventore ea magni dicta eligendi aut. Vel aspernatur aliquid dolor laborum consequatur
                            laboriosam mollitia possimus distinctio nostrum rem recusandae inventore, voluptatem nemo
                            nihil placeat minima quisquam illum. Aliquam cum non perspiciatis magnam, odio facere quos
                            nobis qui asperiores rerum magni recusandae, voluptatibus, consequatur temporibus sit
                            numquam id incidunt eum quo culpa dolor fugiat corporis. Ut enim totam sit tempore
                            recusandae sed a dolores numquam magni, illum molestias unde, ratione et aliquam.
                            Consequatur amet, debitis animi odit, laudantium distinctio quis nulla maiores voluptas
                            temporibus veritatis eos alias laborum laboriosam. Minima veniam ipsam non quasi, harum
                            quisquam eum placeat totam asperiores numquam amet! Pariatur labore rem aperiam ipsum
                            dolores eveniet molestias tempora! Vero fugit non expedita dolore? Iusto, laboriosam
                            exercitationem quasi, inventore laborum aut assumenda repellendus quis, quam ipsa eos
                            voluptates optio quidem illo consectetur. Nesciunt laborum tempore dicta veniam sapiente,
                            perspiciatis unde enim rem iste atque incidunt reprehenderit quibusdam adipisci quam magnam
                            dolore quae deleniti voluptas obcaecati odio a? Velit aut incidunt voluptatem dignissimos
                            blanditiis, atque facilis eos modi saepe reprehenderit itaque voluptatibus nihil possimus.
                            Saepe quidem reiciendis quasi laborum ut cumque, cupiditate aliquam ab voluptates qui labore
                            obcaecati laudantium reprehenderit optio praesentium ipsum vitae? Error, omnis.
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default App;
