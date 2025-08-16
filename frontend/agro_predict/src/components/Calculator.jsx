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
    const profile = farmerData.farmer_profiles[formData.farmerType];
    
    const benefits = selectedSchemes.reduce((acc, scheme) => {
      switch(scheme) {
        case 'PM_KISAN':
          acc.push({
            name: 'PM Kisan Samman Nidhi',
            amount: profile.pm_kisan,
            description: 'Annual income support of ₹6,000 in three installments'
          });
          break;
        case 'KCC':
          acc.push({
            name: 'Kisan Credit Card',
            amount: profile.kcc_saving,
            description: 'Annual interest savings on agricultural credit'
          });
          break;
        case 'PMFBY':
          acc.push({
            name: 'PM Fasal Bima Yojana',
            amount: -profile.pmfby_premium,
            description: 'Crop insurance premium for comprehensive coverage'
          });
          break;
        case 'SMAM':
          acc.push({
            name: 'Agriculture Mechanization',
            amount: profile.smam_subsidy,
            description: 'Subsidy for agricultural machinery and equipment'
          });
          break;
        case 'PKVY':
          acc.push({
            name: 'Paramparagat Krishi',
            amount: profile.pkvy_assistance,
            description: 'Financial assistance for organic farming practices'
          });
          break;
        default:
          break;
      }
      return acc;
    }, []);
    
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
