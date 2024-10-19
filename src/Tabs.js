import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
  const content = ['Content for Tab 1', 'Content for Tab 2', 'Content for Tab 3'];

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button 
            key={index} 
            onClick={() => setActiveTab(index)}
            style={{ fontWeight: activeTab === index ? 'bold' : 'normal' }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{content[activeTab]}</div>
    </div>
  );
};

export default Tabs;
