import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Eligibility = () => {
  const [formData, setFormData] = useState({
    landOwnership: '',
    annualIncome: '',
    familyIncome: '',
    caste: 'general',
    gender: 'male',
    isFarmer: 'yes',
    hasKcc: 'no',
    isPensioner: 'no',
    paysTax: 'no'
  });
  
  const [results, setResults] = useState(null);
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const checkEligibility = (e) => {
    e.preventDefault();
    
    const eligibleSchemes = [];
    const { 
      landOwnership, 
      annualIncome, 
      familyIncome, 
      caste, 
      gender, 
      isFarmer,
      hasKcc,
      isPensioner,
      paysTax
    } = formData;
    
    const annualIncomeNum = parseFloat(annualIncome) || 0;
    const familyIncomeNum = parseFloat(familyIncome) || 0;
    const landOwnershipNum = parseFloat(landOwnership) || 0;
    
    // PM-KISAN Eligibility
    if (isFarmer === 'yes' && landOwnershipNum > 0 && 
        isPensioner === 'no' && paysTax === 'no' && familyIncomeNum < 1000000) {
      eligibleSchemes.push({
        name: 'PM Kisan Samman Nidhi',
        description: 'Income support of ₹6,000 per year in three equal installments',
        reason: 'You meet the basic eligibility criteria for small and marginal farmers.'
      });
    }
    
    // KCC Eligibility
    if (isFarmer === 'yes' && landOwnershipNum > 0) {
      eligibleSchemes.push({
        name: 'Kisan Credit Card (KCC)',
        description: 'Credit access with interest subvention benefits',
        reason: 'All farmers with land ownership are eligible for KCC.'
      });
    }
    
    // PMFBY Eligibility
    if (isFarmer === 'yes' && landOwnershipNum > 0) {
      eligibleSchemes.push({
        name: 'PM Fasal Bima Yojana',
        description: 'Crop insurance with low premium rates',
        reason: 'Available to all farmers growing notified crops in notified areas.'
      });
    }
    
    // Special schemes for women farmers
    if (gender === 'female' && isFarmer === 'yes') {
      eligibleSchemes.push({
        name: 'Mahila Kisan Sashaktikaran Pariyojana',
        description: 'Special support for women farmers',
        reason: 'Special provisions and higher subsidies for women farmers.'
      });
    }
    
    // Special schemes for SC/ST farmers
    if ((caste === 'sc' || caste === 'st') && isFarmer === 'yes') {
      eligibleSchemes.push({
        name: 'Special Schemes for SC/ST Farmers',
        description: 'Additional benefits and subsidies',
        reason: 'Special schemes available for SC/ST category farmers.'
      });
    }
    
    // Special schemes for small farmers
    if (landOwnershipNum > 0 && landOwnershipNum <= 2) {
      eligibleSchemes.push({
        name: 'Special Schemes for Small Farmers',
        description: 'Additional support for small and marginal farmers',
        reason: 'You qualify as a small/marginal farmer.'
      });
    }
    
    setResults({
      eligibleSchemes,
      totalEligible: eligibleSchemes.length,
      profile: {
        landOwnership: landOwnershipNum,
        annualIncome: annualIncomeNum,
        familyIncome: familyIncomeNum,
        caste,
        gender,
        isFarmer,
        hasKcc,
        isPensioner,
        paysTax
      }
    });
  };

  return (
    <section id="eligibility" className="eligibility">
      <div className="container">
        <h2 className="section-title">{t('financial.eligibility.title')}</h2>
        <div className="eligibility__content">
          <form onSubmit={checkEligibility} className="eligibility-form">
            <div className="form-group">
              <label htmlFor="landOwnership">{t('financial.eligibility.land_label')}</label>
              <input
                type="number"
                id="landOwnership"
                name="landOwnership"
                value={formData.landOwnership}
                onChange={handleChange}
                min="0"
                step="0.1"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="annualIncome">{t('financial.eligibility.annual_income_label')}</label>
              <input
                type="number"
                id="annualIncome"
                name="annualIncome"
                value={formData.annualIncome}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="familyIncome">{t('financial.eligibility.family_income_label')}</label>
              <input
                type="number"
                id="familyIncome"
                name="familyIncome"
                value={formData.familyIncome}
                onChange={handleChange}
                min="0"
                required
              />
            </div>
            
            <div className="form-group">
              <label>{t('financial.eligibility.category_label')}</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="caste"
                    value="general"
                    checked={formData.caste === 'general'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.cat_general')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="caste"
                    value="obc"
                    checked={formData.caste === 'obc'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.cat_obc')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="caste"
                    value="sc"
                    checked={formData.caste === 'sc'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.cat_sc')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="caste"
                    value="st"
                    checked={formData.caste === 'st'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.cat_st')}
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>{t('financial.eligibility.gender_label')}</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.male')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.female')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.other')}
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>{t('financial.eligibility.is_farmer_label')}</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="isFarmer"
                    value="yes"
                    checked={formData.isFarmer === 'yes'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.yes')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="isFarmer"
                    value="no"
                    checked={formData.isFarmer === 'no'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.no')}
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>{t('financial.eligibility.has_kcc_label')}</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hasKcc"
                    value="yes"
                    checked={formData.hasKcc === 'yes'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.yes')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasKcc"
                    value="no"
                    checked={formData.hasKcc === 'no'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.no')}
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>{t('financial.eligibility.is_pensioner_label')}</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="isPensioner"
                    value="yes"
                    checked={formData.isPensioner === 'yes'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.yes')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="isPensioner"
                    value="no"
                    checked={formData.isPensioner === 'no'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.no')}
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>{t('financial.eligibility.pays_tax_label')}</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="paysTax"
                    value="yes"
                    checked={formData.paysTax === 'yes'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.yes')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="paysTax"
                    value="no"
                    checked={formData.paysTax === 'no'}
                    onChange={handleChange}
                  />
                  {t('financial.eligibility.no')}
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn--primary">
              {t('financial.eligibility.submit')}
            </button>
          </form>
          
          {results && (
            <div className="eligibility-results">
              <h3>{t('financial.eligibility.results_title')}</h3>
              
              {results.totalEligible > 0 ? (
                <>
                  <div className="results-summary">
                    <p dangerouslySetInnerHTML={{ __html: t('financial.eligibility.summary_text', { count: results.totalEligible }) }} />
                  </div>
                  
                  <div className="eligible-schemes">
                    <h4>{t('financial.eligibility.eligible_title')}</h4>
                    <div className="schemes-list">
                      {results.eligibleSchemes.map((scheme, index) => (
                        <div key={index} className="scheme-card">
                          <h5>{scheme.name}</h5>
                          <p className="scheme-description">{scheme.description}</p>
                          <p className="scheme-reason"><strong>{t('financial.eligibility.why_qualify')}</strong> {scheme.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="next-steps">
                    <h4>{t('financial.eligibility.next_steps_title')}</h4>
                    <ol>
                      <li>{t('financial.eligibility.next_1')}</li>
                      <li>{t('financial.eligibility.next_2')}</li>
                      <li>{t('financial.eligibility.next_3')}</li>
                      <li>{t('financial.eligibility.next_4')}</li>
                    </ol>
                  </div>
                </>
              ) : (
                <div className="no-eligibility">
                  <p>{t('financial.eligibility.no_eligibility_1')}</p>
                  <p>{t('financial.eligibility.no_eligibility_2')}</p>
                  <p>{t('financial.eligibility.no_eligibility_3')}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
