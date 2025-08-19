import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { farmerData } from '../data/farmerData';

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

    const addScheme = (key, reason) => {
      const scheme = farmerData.schemes[key];
      if (!scheme) return;
      eligibleSchemes.push({
        name: scheme.name,
        description: scheme.description,
        reason
      });
    };

    const isSmallOrMarginal = landOwnershipNum > 0 && landOwnershipNum <= 2;
    const isSCST = caste === 'sc' || caste === 'st';
    const isFarmerBool = isFarmer === 'yes';
    const hasLand = landOwnershipNum > 0;

    // PM-KISAN
    if (
      isFarmerBool && hasLand && isPensioner === 'no' && paysTax === 'no' && familyIncomeNum < 1000000
    ) {
      addScheme('PM_KISAN', 'Meets core criteria: landholder farmer, non-taxpayer, non-pensioner, income below threshold.');
    }

    // KCC
    if (isFarmerBool && hasLand) {
      addScheme('KCC', 'Landholder farmers are eligible for KCC with interest subvention.');
    }

    // PMFBY
    if (isFarmerBool && hasLand) {
      addScheme('PMFBY', 'Available for farmers growing notified crops in notified areas.');
    }

    // SMAM (Machinery subsidy)
    if (isFarmerBool && hasLand) {
      addScheme('SMAM', isSCST || gender === 'female' ? 'Eligible with higher subsidy as Woman/SC/ST farmer.' : 'Eligible for machinery subsidy support.');
    }

    // PKVY (Organic farming assistance)
    if (isFarmerBool) {
      addScheme('PKVY', 'Eligible for organic farming assistance; per-hectare support available.');
    }

    // PM-KUSUM (Solar pumps)
    if (isFarmerBool && hasLand) {
      addScheme('PM_KUSUM', 'Eligible for solar pump subsidy; rates vary by region.');
    }

    // SHG-Bank Linkage (women focus but open wider)
    if (gender === 'female' || isSCST || isSmallOrMarginal) {
      addScheme('SHG_BANK_LINKAGE', 'Priority access via SHG-Bank linkage (women/SC/ST/small farmers).');
    }

    // JLG (useful for landless/tenant)
    if (!hasLand) {
      addScheme('JLG_FINANCING', 'Suitable for landless/tenant/small farmers via group credit without collateral.');
    }

    // Tribal-focused programs
    if (caste === 'st') {
      addScheme('PM_VAN_DHAN', 'Tribal livelihood enhancement through Van Dhan Kendras.');
      addScheme('PM_JANMAN', 'Targeted development for PVTGs and tribal communities.');
      addScheme('PM_JUGA', 'Comprehensive tribal village development support.');
      addScheme('PVTG_DEVELOPMENT', 'Focused benefits for Particularly Vulnerable Tribal Groups.');
      addScheme('EMRS', 'Education support via tribal residential schools.');
    }

    // Small/Marginal farmer general hint
    if (isSmallOrMarginal) {
      addScheme('RYTHU_BANDHU', 'Small/marginal farmers benefit more from per-acre/state support where applicable.');
    }

    // Soil Health Card (useful for all farmers)
    if (isFarmerBool) {
      addScheme('SOIL_HEALTH_CARD', 'All farmers can obtain a Soil Health Card every 2-3 years to guide balanced fertiliser use.');
    }

    // e-NAM (market linkage)
    if (isFarmerBool) {
      addScheme('eNAM', 'Eligible to register on e-NAM for better market access and transparent pricing.');
    }

    // AIF (Agricultural Infrastructure Fund) – conservative suggestion when farmer has land
    if (isFarmerBool && hasLand) {
      addScheme('AIF', 'If planning post-harvest or farm-gate infrastructure, you can explore AIF with 3% interest subvention.');
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
