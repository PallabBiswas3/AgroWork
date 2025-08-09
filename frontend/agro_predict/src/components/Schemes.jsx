import React, { useState } from 'react';

const Schemes = ({ schemes }) => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const handleSchemeClick = (schemeKey) => {
    setSelectedScheme(schemeKey === selectedScheme ? null : schemeKey);
  };

  return (
    <section id="schemes" className="schemes">
      <div className="container">
        <h2 className="section-title">Government Schemes for Farmers</h2>
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
                  {selectedScheme === key ? '−' : '+'}
                </span>
              </div>
              
              {selectedScheme === key && (
                <div className="scheme-card__details">
                  <p className="scheme-card__description">{scheme.description}</p>
                  
                  <div className="scheme-stats">
                    {scheme.amount && (
                      <div className="scheme-stat">
                        <span className="scheme-stat__label">Amount:</span>
                        <span className="scheme-stat__value">₹{scheme.amount.toLocaleString()}</span>
                      </div>
                    )}
                    
                    {scheme.frequency && (
                      <div className="scheme-stat">
                        <span className="scheme-stat__label">Frequency:</span>
                        <span className="scheme-stat__value">{scheme.frequency}</span>
                      </div>
                    )}
                    
                    {scheme.interest_rate && (
                      <div className="scheme-stat">
                        <span className="scheme-stat__label">Interest Rate:</span>
                        <span className="scheme-stat__value">{scheme.interest_rate}%</span>
                      </div>
                    )}
                    
                    {scheme.beneficiaries && (
                      <div className="scheme-stat">
                        <span className="scheme-stat__label">Beneficiaries:</span>
                        <span className="scheme-stat__value">{scheme.beneficiaries}</span>
                      </div>
                    )}
                  </div>
                  
                  {scheme.eligibility && (
                    <div className="scheme-eligibility">
                      <h4>Eligibility:</h4>
                      <p>{scheme.eligibility}</p>
                      {scheme.exclusions && scheme.exclusions.length > 0 && (
                        <>
                          <h4>Exclusions:</h4>
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
