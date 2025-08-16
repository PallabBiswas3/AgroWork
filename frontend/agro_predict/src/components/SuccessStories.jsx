import React from 'react';
import { useTranslation } from 'react-i18next';

import { farmerData } from '../data/farmerData';

const SuccessStories = ({ stories = farmerData.successStories }) => {
  const { t } = useTranslation();
  return (
    <section id="success-stories" className="success-stories">
      <div className="container">
        <h2 className="section-title">{t('financial.success.title')}</h2>
        <p className="section-subtitle">{t('financial.success.subtitle')}</p>

        <div className="stories__grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-card__profile">
                <div className="story-card__avatar" aria-hidden>
                  🧑‍🌾
                </div>
                <div className="story-card__info">
                  <h4>{story.name}</h4>
                  <p>{story.location}</p>
                </div>
              </div>
              <div className="story-card__content">
                <p>"{story.story}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
