import React, { useState } from 'react';

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
        <h2 className="section-title">Check Your Eligibility</h2>
        <div className="eligibility__content">
          <form onSubmit={checkEligibility} className="eligibility-form">
            <div className="form-group">
              <label htmlFor="landOwnership">Land Ownership (in acres):</label>
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
              <label htmlFor="annualIncome">Annual Income (in ₹):</label>
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
              <label htmlFor="familyIncome">Family Annual Income (in ₹):</label>
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
              <label>Category:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="caste"
                    value="general"
                    checked={formData.caste === 'general'}
                    onChange={handleChange}
                  />
                  General
                </label>
                <label>
                  <input
                    type="radio"
                    name="caste"
                    value="obc"
                    checked={formData.caste === 'obc'}
                    onChange={handleChange}
                  />
                  OBC
                </label>
                <label>
                  <input
                    type="radio"
                    name="caste"
                    value="sc"
                    checked={formData.caste === 'sc'}
                    onChange={handleChange}
                  />
                  SC
                </label>
                <label>
                  <input
                    type="radio"
                    name="caste"
                    value="st"
                    checked={formData.caste === 'st'}
                    onChange={handleChange}
                  />
                  ST
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>Gender:</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === 'male'}
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === 'female'}
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={formData.gender === 'other'}
                    onChange={handleChange}
                  />
                  Other
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>Are you a farmer?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="isFarmer"
                    value="yes"
                    checked={formData.isFarmer === 'yes'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="isFarmer"
                    value="no"
                    checked={formData.isFarmer === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>Do you already have a Kisan Credit Card?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="hasKcc"
                    value="yes"
                    checked={formData.hasKcc === 'yes'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="hasKcc"
                    value="no"
                    checked={formData.hasKcc === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>Are you a pensioner receiving more than ₹10,000/month?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="isPensioner"
                    value="yes"
                    checked={formData.isPensioner === 'yes'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="isPensioner"
                    value="no"
                    checked={formData.isPensioner === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label>Do you pay income tax?</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    name="paysTax"
                    value="yes"
                    checked={formData.paysTax === 'yes'}
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="paysTax"
                    value="no"
                    checked={formData.paysTax === 'no'}
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>
            
            <button type="submit" className="btn btn--primary">
              Check Eligibility
            </button>
          </form>
          
          {results && (
            <div className="eligibility-results">
              <h3>Eligibility Results</h3>
              
              {results.totalEligible > 0 ? (
                <>
                  <div className="results-summary">
                    <p>Based on your profile, you are eligible for <strong>{results.totalEligible} government schemes</strong>.</p>
                  </div>
                  
                  <div className="eligible-schemes">
                    <h4>Eligible Schemes:</h4>
                    <div className="schemes-list">
                      {results.eligibleSchemes.map((scheme, index) => (
                        <div key={index} className="scheme-card">
                          <h5>{scheme.name}</h5>
                          <p className="scheme-description">{scheme.description}</p>
                          <p className="scheme-reason"><strong>Why you qualify:</strong> {scheme.reason}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="next-steps">
                    <h4>Next Steps:</h4>
                    <ol>
                      <li>Click on 'Apply Now' next to any scheme to start your application</li>
                      <li>Gather necessary documents (Aadhaar, Land Records, Bank Details, etc.)</li>
                      <li>Visit your nearest Common Service Center (CSC) for assistance</li>
                      <li>For any queries, call Kisan Call Center: 1800-180-1551</li>
                    </ol>
                  </div>
                </>
              ) : (
                <div className="no-eligibility">
                  <p>Based on the information provided, you may not be eligible for the major central government schemes at this time.</p>
                  <p>However, you may still be eligible for state-specific schemes. Please visit your nearest agriculture office for more information.</p>
                  <p>You may also want to check back later as scheme guidelines and eligibility criteria may change.</p>
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
