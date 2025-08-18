import React, { useState } from 'react';
import { farmerData } from '../data/farmerData';
import { useTranslation } from 'react-i18next';

const Calculator = () => {
  const [formData, setFormData] = useState({
    landHolding: '',
    farmerType: 'small',
    selectedSchemes: {}
  });
  const [results, setResults] = useState(null);
  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        selectedSchemes: {
          ...prev.selectedSchemes,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const calculateBenefits = (e) => {
    e.preventDefault();
    
    const selectedSchemes = Object.keys(formData.selectedSchemes).filter(
      scheme => formData.selectedSchemes[scheme]
    );
    
    if (selectedSchemes.length === 0) {
      alert(t('financial.calculator.alert_select_one'));
      return;
    }
    
    const landHolding = parseFloat(formData.landHolding) || 0;
    const profile = farmerData.farmer_profiles[formData.farmerType] || {};

    const schemeEntries = farmerData.schemes;

    const getBenefitForScheme = (schemeKey) => {
      const s = schemeEntries[schemeKey] || {};
      const desc = s.description || '';
      switch (schemeKey) {
        case 'PM_KISAN':
          return {
            name: s.name,
            amount: profile.pm_kisan ?? 0,
            description: desc || 'Annual income support of ₹6,000 in three installments'
          };
        case 'KCC':
          return {
            name: s.name,
            amount: profile.kcc_saving ?? 0,
            description: desc || 'Estimated annual interest savings via subvention'
          };
        case 'PMFBY':
          return {
            name: s.name,
            amount: -(profile.pmfby_premium ?? 0),
            description: desc || 'Out-of-pocket premium towards crop insurance'
          };
        case 'SMAM':
          return {
            name: s.name,
            amount: profile.smam_subsidy ?? 0,
            description: desc || 'Subsidy for agricultural machinery and equipment'
          };
        case 'PKVY':
          // Assistance often per hectare; approximate by landHolding if numeric
          {
            const base = profile.pkvy_assistance ?? 0;
            return {
              name: s.name,
              amount: base,
              description: desc || 'Assistance towards organic farming practices'
            };
          }
        case 'AIF':
          // Interest subvention benefit approximation: aif_loan * (interest_subvention/100) for 1 year
          {
            const loan = profile.aif_loan ?? 0;
            const sub = typeof s.interest_subvention === 'number' ? s.interest_subvention : 3;
            const annualBenefit = Math.round((loan * sub) / 100);
            return {
              name: s.name,
              amount: annualBenefit,
              description: `${desc || 'Interest subvention benefit'}`
            };
          }
        case 'PM_KUSUM':
          return {
            name: s.name,
            amount: 0,
            description: desc || 'Subsidy reduces pump cost; treated as non-cash here'
          };
        case 'RYTHU_BANDHU':
          // Per-acre per-season support
          {
            const perAcre = typeof s.amount_per_acre_per_season === 'number' ? s.amount_per_acre_per_season : 0;
            const seasons = typeof s.seasons_per_year === 'number' ? s.seasons_per_year : 0;
            const amt = Math.round(perAcre * seasons * landHolding);
            return {
              name: s.name,
              amount: amt,
              description: desc || 'Investment support per acre per season (approx by land holding)'
            };
          }
        case 'ANNADATA_SUKHIBHAVA':
          return {
            name: s.name,
            amount: typeof s.amount === 'number' ? s.amount : 0,
            description: desc || 'State annual support including central + state share'
          };
        case 'PMKMY':
          return {
            name: s.name,
            amount: 0,
            description: desc || 'Pension benefit at age 60 (non-cash in current year)'
          };
        case 'eNAM':
          return {
            name: s.name,
            amount: 0,
            description: desc || 'Market linkage platform benefit (non-cash)'
          };
        case 'SHG_BANK_LINKAGE':
          return {
            name: s.name,
            amount: profile.shg_access ?? profile.shg_loan ?? 0,
            description: desc || 'Credit access via SHGs; using accessible credit as proxy'
          };
        case 'JLG_FINANCING':
          return {
            name: s.name,
            amount: profile.jlg_loan ?? 0,
            description: desc || 'Group lending access; using loan limit as proxy benefit'
          };
        case 'PM_VAN_DHAN':
          return {
            name: s.name,
            amount: profile.van_dhan_support ?? 0,
            description: desc || 'Value addition support for forest produce'
          };
        case 'PVTG_DEVELOPMENT':
          return {
            name: s.name,
            amount: profile.pvtg_assistance ?? 0,
            description: desc || 'Targeted assistance for PVTG families'
          };
        case 'EMRS':
          return {
            name: s.name,
            amount: 0,
            description: profile.emrs_education ? `${profile.emrs_education}` : (desc || 'Education support (non-monetary)')
          };
        default:
          return {
            name: s.name || schemeKey,
            amount: 0,
            description: desc || 'Benefit not quantified in calculator'
          };
      }
    };
    
    const benefits = selectedSchemes.map(getBenefitForScheme).filter(Boolean);
    
    const totalBenefits = benefits.reduce((sum, benefit) => sum + benefit.amount, 0);
    
    setResults({
      benefits,
      total: totalBenefits,
      landHolding,
      farmerType: formData.farmerType
    });
  };

  return (
    <section id="calculator" className="calculator">
      <div className="container">
        <h2 className="section-title">{t('financial.calculator.title')}</h2>
        <div className="calculator__content">
          <form onSubmit={calculateBenefits} className="calculator-form">
            <div className="form-group">
              <label htmlFor="landHolding">{t('financial.calculator.land_label')}</label>
              <input
                type="number"
                id="landHolding"
                name="landHolding"
                value={formData.landHolding}
                onChange={handleInputChange}
                min="0"
                step="0.1"
                required
              />
            </div>
            
            <div className="form-group">
              <label>{t('financial.calculator.farmer_type_label')}</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="farmerType"
                    value="small"
                    checked={formData.farmerType === 'small'}
                    onChange={handleInputChange}
                  />
                  {t('financial.calculator.farmer_small')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="farmerType"
                    value="medium"
                    checked={formData.farmerType === 'medium'}
                    onChange={handleInputChange}
                  />
                  {t('financial.calculator.farmer_medium')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="farmerType"
                    value="large"
                    checked={formData.farmerType === 'large'}
                    onChange={handleInputChange}
                  />
                  {t('financial.calculator.farmer_large')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="farmerType"
                    value="tribal_small"
                    checked={formData.farmerType === 'tribal_small'}
                    onChange={handleInputChange}
                  />
                  {t('financial.calculator.farmer_tribal_small')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="farmerType"
                    value="marginal_woman"
                    checked={formData.farmerType === 'marginal_woman'}
                    onChange={handleInputChange}
                  />
                  {t('financial.calculator.farmer_marginal_woman')}
                </label>
                <label>
                  <input
                    type="radio"
                    name="farmerType"
                    value="tenant_farmer"
                    checked={formData.farmerType === 'tenant_farmer'}
                    onChange={handleInputChange}
                  />
                  {t('financial.calculator.farmer_tenant')}
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>{t('financial.calculator.select_schemes')}</label>
              <div className="checkbox-group">
                {Object.entries(farmerData.schemes).map(([key, scheme]) => (
                  <label key={key} className="checkbox-label">
                    <input
                      type="checkbox"
                      name={key}
                      checked={formData.selectedSchemes[key] || false}
                      onChange={handleInputChange}
                    />
                    {scheme.name}
                  </label>
                ))}
              </div>
            </div>
            
            <button type="submit" className="btn btn--primary">
              {t('financial.calculator.submit')}
            </button>
          </form>
          
          {results && (
            <div className="calculator-results">
              <h3>{t('financial.calculator.results_title')}</h3>
              <div className="results-summary">
                <div className="result-item">
                  <span className="result-label">{t('financial.calculator.result_land')}</span>
                  <span className="result-value">{results.landHolding} acres</span>
                </div>
                <div className="result-item">
                  <span className="result-label">{t('financial.calculator.result_farmer_type')}</span>
                  <span className="result-value">
                    {results.farmerType === 'small' ? t('financial.calculator.type_small') : 
                     results.farmerType === 'medium' ? t('financial.calculator.type_medium') : t('financial.calculator.type_large')}{t('financial.calculator.type_suffix_farmer')}
                  </span>
                </div>
              </div>
              
              <div className="benefits-list">
                <h4>{t('financial.calculator.benefits_breakdown')}</h4>
                <ul>
                  {results.benefits.map((benefit, index) => (
                    <li key={index} className="benefit-item">
                      <span className="benefit-name">{benefit.name}:</span>
                      <span className={`benefit-amount ${benefit.amount >= 0 ? 'positive' : 'negative'}`}>
                        {benefit.amount >= 0 ? '+' : ''}{benefit.amount.toLocaleString('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })}
                      </span>
                      <div className="benefit-description">{benefit.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="total-benefits">
                <span className="total-label">{t('financial.calculator.total_label')}</span>
                <span className={`total-amount ${results.total >= 0 ? 'positive' : 'negative'}`}>
                  {results.total >= 0 ? '+' : ''}{results.total.toLocaleString('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                  })}
                </span>
              </div>
              
              <div className="results-note">
                <p>{t('financial.calculator.note')}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
