import React, { useState } from 'react';
import { DownloadIcon, Monitor } from 'lucide-react';

const DownloadSection = () => {
  const [notifyEmail, setNotifyEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      setIsSubscribed(true);
      // In a real app, this would send the email to a backend service
      setTimeout(() => {
        setIsSubscribed(false);
        setNotifyEmail('');
      }, 3000);
    }
  };
  const systemRequirements = [
    { label: "Operating System", value: "Windows 10 or later" },
    { label: "RAM", value: "4GB minimum (8GB recommended)" },
    { label: "Download Size", value: "~83MB installer" },
    { label: "Storage", value: "~250MB after installation" },
    { label: "Internet", value: "Required for Spotify connection" },
    { label: "Spotify", value: "Premium or Free account" }
  ];

  return (
    <section id="download" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Download LyricsFloat v1.0.0
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LyricsFloat Desktop is now available! Download the first release and enjoy real-time synced lyrics. It's completely free to use!
          </p>
          <div className="mt-8">
            <a
              href="https://github.com/sonisumit7904/LyricsFloat_Desktop_Releases/releases/download/v1.0.0/LyricsFloat_Desktop.Setup.1.0.0.exe" // Updated download link
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-400 hover:bg-green-500 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center space-x-2 shadow-lg hover:shadow-green-400/25"
            >
              <DownloadIcon className="h-5 w-5" />
              <span>Download LyricsFloat v1.0.0</span>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mt-16">
          {/* System Requirements */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Monitor className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">System Requirements</h3>
            </div>
            <div className="space-y-4">
              {systemRequirements.map((req, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-700 last:border-b-0">
                  <span className="text-gray-300 font-medium">{req.label}</span>
                  <span className="text-white text-sm">{req.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;