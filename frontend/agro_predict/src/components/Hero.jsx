import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = ({ navigateToSection }) => {
  const { t } = useTranslation();
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__text">
            <h1 className="hero__title">{t('financial.hero.title')}</h1>
            <p className="hero__description">{t('financial.hero.description')}</p>
            <div className="hero__actions">
              <button 
                className="btn btn--primary btn--lg" 
                onClick={() => navigateToSection('calculator')}
              >
                {t('financial.hero.cta_calculate')}
              </button>
              <button 
                className="btn btn--outline btn--lg" 
                onClick={() => navigateToSection('schemes')}
              >
                {t('financial.hero.cta_explore')}
              </button>
            </div>
          </div>
          <div className="hero__stats">
            <div className="stat-card">
              <div className="stat-card__number">{t('financial.hero.stats.investment_value')}</div>
              <div className="stat-card__label">{t('financial.hero.stats.investment_label')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">{t('financial.hero.stats.beneficiaries_value')}</div>
              <div className="stat-card__label">{t('financial.hero.stats.beneficiaries_label')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-card__number">{t('financial.hero.stats.schemes_value')}</div>
              <div className="stat-card__label">{t('financial.hero.stats.schemes_label')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
