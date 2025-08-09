import React from 'react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Punjab',
      story: 'Thanks to the PM Kisan Samman Nidhi, I was able to purchase high-quality seeds and fertilizers which increased my crop yield by 40%.',
      scheme: 'PM Kisan Samman Nidhi'
    },
    {
      id: 2,
      name: 'Sunita Devi',
      location: 'Bihar',
      story: 'The Kisan Credit Card helped me get a loan at a very low interest rate to buy a new tractor. Now I can cultivate more land in less time.',
      scheme: 'Kisan Credit Card'
    },
    {
      id: 3,
      name: 'Vijay Reddy',
      location: 'Andhra Pradesh',
      story: 'PM Fasal Bima Yojana saved me from huge losses when my crops were damaged due to unexpected rains. The claim process was smooth and quick.',
      scheme: 'PM Fasal Bima Yojana'
    }
  ];

  return (
    <section id="success-stories" className="success-stories">
      <div className="container">
        <h2 className="section-title">Success Stories</h2>
        <p className="section-subtitle">Hear from farmers who have benefited from government schemes</p>
        
        <div className="stories-grid">
          {stories.map(story => (
            <div key={story.id} className="story-card">
              <div className="story-content">
                <p className="story-text">"{story.story}"</p>
                <div className="story-meta">
                  <span className="story-name">{story.name}</span>
                  <span className="story-location">{story.location}</span>
                </div>
                <div className="story-scheme">
                  <span>Beneficiary of:</span> {story.scheme}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
