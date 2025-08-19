import React, { useState } from 'react';

const Apply = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    aadhaarNumber: '',
    mobileNumber: '',
    email: '',
    scheme: '',
    landRecords: null,
    aadhaarDocument: null,
    bankDetails: {
      accountNumber: '',
      ifscCode: '',
      bankName: '',
      branch: ''
    },
    termsAgreed: false
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (name.includes('bankDetails.')) {
      const bankField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        bankDetails: {
          ...prev.bankDetails,
          [bankField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="form-step">
      <h3>Personal Information</h3>
      <div className="form-group">
        <label htmlFor="fullName">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="aadhaarNumber">Aadhaar Number *</label>
        <input
          type="text"
          id="aadhaarNumber"
          name="aadhaarNumber"
          value={formData.aadhaarNumber}
          onChange={handleChange}
          pattern="[0-9]{12}"
          title="Please enter a valid 12-digit Aadhaar number"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="mobileNumber">Mobile Number *</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          pattern="[0-9]{10}"
          title="Please enter a valid 10-digit mobile number"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-actions">
        <button type="button" className="btn btn--primary" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="form-step">
      <h3>Scheme Selection</h3>
      <div className="form-group">
        <label htmlFor="scheme">Select Scheme *</label>
        <select
          id="scheme"
          name="scheme"
          value={formData.scheme}
          onChange={handleChange}
          required
        >
          <option value="">-- Select a scheme --</option>
          <option value="PM_KISAN">PM Kisan Samman Nidhi</option>
          <option value="KCC">Kisan Credit Card</option>
          <option value="PMFBY">PM Fasal Bima Yojana</option>
          <option value="SMAM">Agriculture Mechanization (SMAM)</option>
          <option value="PKVY">Paramparagat Krishi Vikas Yojana</option>
        </select>
      </div>
      <div className="apply-guidelines">
        <h4>General Application Instructions</h4>
        <ul className="bullet-list">
          <li><strong>Eligibility:</strong> Varies by scheme. Verify on the official portal or at your District Agriculture Office.</li>
          <li><strong>Common documents:</strong> Aadhaar, bank passbook, mobile number, recent photo, land record or tenancy proof, and category certificate (if applicable).</li>
          <li><strong>How to apply:</strong> Online via the official scheme portal, or offline at CSC/Bank/PACS/District Agriculture Office.</li>
          <li><strong>Processing time:</strong> Typically 2–6 weeks depending on verification and bank processing.</li>
          <li><strong>Tips:</strong> Ensure your IFSC and account number are correct, names match Aadhaar, and keep photocopies of all documents.</li>
        </ul>
      </div>
      
      <div className="form-group">
        <label>Upload Documents</label>
        <div className="file-upload">
          <label htmlFor="aadhaarDocument">Aadhaar Card *</label>
          <input
            type="file"
            id="aadhaarDocument"
            name="aadhaarDocument"
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
            required
          />
          {formData.aadhaarDocument && (
            <div className="file-info">
              {formData.aadhaarDocument.name}
            </div>
          )}
        </div>
        
        <div className="file-upload">
          <label htmlFor="landRecords">Land Records (Optional)</label>
          <input
            type="file"
            id="landRecords"
            name="landRecords"
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          {formData.landRecords && (
            <div className="file-info">
              {formData.landRecords.name}
            </div>
          )}
        </div>
      </div>
      
      <div className="form-actions">
        <button type="button" className="btn btn--outline" onClick={prevStep}>
          Back
        </button>
        <button type="button" className="btn btn--primary" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="form-step">
      <h3>Bank Details</h3>
      <p className="form-note">
        Please provide your bank account details for direct benefit transfer.
      </p>
      
      <div className="form-group">
        <label htmlFor="bankName">Bank Name *</label>
        <input
          type="text"
          id="bankName"
          name="bankDetails.bankName"
          value={formData.bankDetails.bankName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number *</label>
          <input
            type="text"
            id="accountNumber"
            name="bankDetails.accountNumber"
            value={formData.bankDetails.accountNumber}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="ifscCode">IFSC Code *</label>
          <input
            type="text"
            id="ifscCode"
            name="bankDetails.ifscCode"
            value={formData.bankDetails.ifscCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label htmlFor="branch">Branch Name *</label>
        <input
          type="text"
          id="branch"
          name="bankDetails.branch"
          value={formData.bankDetails.branch}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group checkbox-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
            required
          />
          <span>I hereby declare that the information provided is true and correct to the best of my knowledge.</span>
        </label>
      </div>
      
      <div className="form-actions">
        <button type="button" className="btn btn--outline" onClick={prevStep}>
          Back
        </button>
        <button 
          type="submit" 
          className="btn btn--primary"
          disabled={!formData.termsAgreed || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="application-success">
      <div className="success-icon">✓</div>
      <h3>Application Submitted Successfully!</h3>
      <p>Your application has been received and is being processed.</p>
      <p><strong>Application ID:</strong> {Math.random().toString(36).substr(2, 10).toUpperCase()}</p>
      <p>You will receive an SMS and email with further instructions.</p>
      <button 
        className="btn btn--primary"
        onClick={() => {
          setCurrentStep(1);
          setIsSubmitted(false);
        }}
      >
        Apply for Another Scheme
      </button>
    </div>
  );

  if (isSubmitted) {
    return (
      <section id="apply" className="apply">
        <div className="container">
          <h2 className="section-title">Apply for Scheme</h2>
          <div className="apply__content">
            {renderSuccess()}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="apply" className="apply">
      <div className="container">
        <h2 className="section-title">Apply for Scheme</h2>
        <div className="apply__content">
          <div className="form-progress">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Personal Info</span>
            </div>
            <div className={`progress-line ${currentStep >= 2 ? 'active' : ''}`}></div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Scheme & Docs</span>
            </div>
            <div className={`progress-line ${currentStep >= 3 ? 'active' : ''}`}></div>
            <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Bank Details</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="application-form">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </form>
          
          <div className="help-section">
            <h4>Need Help?</h4>
            <p>Call us at <a href="tel:18001801551">1800-180-1551</a> (Toll Free)</p>
            <p>Visit your nearest Common Service Center (CSC) for assistance with the application process.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apply;
