import i18next from 'i18next';
import React from 'react';
import style from './Languages.module.scss';

export const Languages = () => {
    const languages = [
        {
            code: 'es',
            name: 'ES',
        },
        {
            code: 'en',
            name: 'EN',
        },
        {
            code: 'ua',
            name: 'UA',
        },
    ];

    return (
        <div className={style.languages}>
            {languages.map(({ name, code }) => (
                <button
                    key={code}
                    className={style.language}
                    onClick={() => {
                        i18next.changeLanguage(code);
                    }}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};
