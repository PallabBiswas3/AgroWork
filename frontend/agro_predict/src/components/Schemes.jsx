import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Schemes = ({ schemes }) => {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const { t } = useTranslation();

  const handleSchemeClick = (schemeKey) => {
    setSelectedScheme(schemeKey === selectedScheme ? null : schemeKey);
  };

  return (
    <section id="schemes" className="schemes">
      <div className="container">
        <h2 className="section-title">{t('financial.schemes.title')}</h2>
        <div className="schemes__grid">
          {Object.entries(schemes).map(([key, scheme]) => (
            <div 
              key={key} 
              className={`scheme-card ${selectedScheme === key ? 'expanded' : ''}`}
              onClick={() => handleSchemeClick(key)}
            >
              <div className="scheme-card__header">
                <h3>{scheme.name}</h3>
                <span className="scheme-card__toggle">
                  {selectedScheme === key ? t('financial.schemes.expand_minus') : t('financial.schemes.expand_plus')}
                </span>
              </div>
              
              {selectedScheme === key && (
                <div className="scheme-card__details">
                  <p className="scheme-card__description">{scheme.description}</p>
                  
                  <div className="scheme-stats">
                    {scheme.amount && (
                      <div className="scheme-stat">
                        <span className="scheme-stat__label">{t('financial.schemes.amount')}</span>
                        <span className="scheme-stat__value">₹{scheme.amount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    {scheme.frequency && (
                      <div className="scheme-stat">
                        <span className="scheme-stat__label">{t('financial.schemes.frequency')}</span>
                        <span className="scheme-stat__value">{scheme.frequency}</span>
                      </div>
                    )}
                    
                    {scheme.interest_rate && (
                      <div className="scheme-stat">
                        <span className="scheme-stat__label">{t('financial.schemes.interest_rate')}</span>
                        <span className="scheme-stat__value">{scheme.interest_rate}%</span>
                      </div>
                    )}
                    
                    {scheme.beneficiaries && (
                      <div className="scheme-stat">
                        <span className="scheme-stat__label">{t('financial.schemes.beneficiaries')}</span>
                        <span className="scheme-stat__value">{scheme.beneficiaries}</span>
                      </div>
                    )}
                  </div>
                  
                  {scheme.eligibility && (
                    <div className="scheme-eligibility">
                      <h4>{t('financial.schemes.eligibility')}</h4>
                      <p>{scheme.eligibility}</p>
                      {scheme.exclusions && scheme.exclusions.length > 0 && (
                        <>
                          <h4>{t('financial.schemes.exclusions')}</h4>
                          <ul>
                            {scheme.exclusions.map((exclusion, index) => (
                              <li key={index}>{exclusion}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schemes;
