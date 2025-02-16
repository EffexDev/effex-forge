import { Button } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useState } from 'react';

const ContactForm = () => {
  const [domainName, setDomainName] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [websiteRequest, setWebsiteRequest] = useState('');
  const [businessName, setBusinessName] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (!domainName || !businessDescription || !websiteRequest || !businessName) {
      alert('Please fill in all required fields');
      return;
    }

    const subject = `Quote Request | ${businessName}`;
    const body = `Requested Domain: \n${domainName}\n\n` +
                 `Business Overview:\n${businessDescription}\n\n` +
                 `Website Needs:\n${websiteRequest}`;

    window.location.href = `mailto:enquiries@effexforge.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-dvw sm:w-200 mx-auto p-6 bg-gray-900/80 text-white rounded-lg space-y-6">
    <div className="space-y-1 pb-2">
      <label>
        Business Name <span className="text-red-500">*</span>
        <input
          className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"
          type="text"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
          required
          placeholder="Enter your business name"
        />
      </label>
    </div>

    <div className="space-y-1 pb-2">
      <label>
        Business Overview <span className="text-red-500">*</span>
        <textarea
        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"          value={businessDescription}
          onChange={(e) => setBusinessDescription(e.target.value)}
          required
          placeholder="Brief description of your business"
          rows={4}
        />
      </label>
    </div>

    <div className="space-y-1 pb-2">
      <label>
        Requested Domain Name <span className="text-red-500">*</span>
        <input
        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"          type="text"
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
          required
          placeholder="example.com"
        />
      </label>
    </div>

    <div className="space-y-1 pb-2">
      <label>
        Website Requirements <span className="text-red-500">*</span>
        <textarea
        className="mt-1 block w-full px-3 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white text-black"          value={websiteRequest}
          onChange={(e) => setWebsiteRequest(e.target.value)}
          required
          placeholder="Describe what you need for your website"
          rows={4}
        />
      </label>
    </div>

    <Button 
    type="submit"
    variant="contained"
    endIcon={<Send />}
    >Submit</Button>
    </form>
  );
};

export default ContactForm;