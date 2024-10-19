import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');
  const content = {
    en: 'Hello!',
    uk: 'Привіт!'
  };

  const switchLanguage = () => setLanguage(language === 'en' ? 'uk' : 'en');

  return (
    <div>
      <button onClick={switchLanguage}>
        {language === 'en' ? 'Switch to Ukrainian' : 'Switch to English'}
      </button>
      <p>{content[language]}</p>
    </div>
  );
};

export default LanguageSwitcher;
