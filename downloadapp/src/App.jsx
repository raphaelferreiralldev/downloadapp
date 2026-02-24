import { useState } from 'react';

function App() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = import.meta.env.BASE_URL + 'app-release.apk';
      link.download = 'app-release.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 1500);
  };

  return (
    <div className="container">
      <div className="glass-card">
        <div className="icon-wrapper">
          <svg
            className="android-icon"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM16.0374 15.3414L16.0374 15.3414C16.0374 15.3414 16.0374 15.3414 16.0374 15.3414ZM17.2081 12.015L18.8415 9.17291C18.9103 9.05354 18.869 8.9009 18.7493 8.83177C18.6295 8.76263 18.4761 8.80393 18.4069 8.9238L16.7461 11.815C15.2818 11.1444 13.6872 10.7634 12.0003 10.7634C10.313 10.7634 8.7181 11.1444 7.25367 11.815L5.5928 8.9242C5.524 8.80434 5.37059 8.76303 5.25087 8.83216C5.13116 8.9013 5.08986 9.05393 5.15865 9.1733L6.79153 12.0146C4.04164 13.5359 2.19329 16.4429 2 19.8279H22C21.8067 16.4433 19.9584 13.5363 17.2081 12.015ZM6.47648 16.8906C5.96101 16.8906 5.54345 16.4719 5.54345 15.955C5.54345 15.438 5.96101 15.0194 6.47648 15.0194C6.99153 15.0194 7.4091 15.438 7.4091 15.955C7.4091 16.4719 6.99153 16.8906 6.47648 16.8906ZM17.5235 16.8906C17.0081 16.8906 16.5905 16.4719 16.5905 15.955C16.5905 15.438 17.0081 15.0194 17.5235 15.0194C18.039 15.0194 18.4565 15.438 18.4565 15.955C18.4565 16.4719 18.039 16.8906 17.5235 16.8906Z" />
          </svg>
        </div>

        <button
          className={`download-btn ${downloading ? 'downloading' : ''}`}
          onClick={handleDownload}
          disabled={downloading}
        >
          {downloading ? (
            <span className="loader"></span>
          ) : (
            <>
              <svg className="download-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download APK
            </>
          )}
        </button>
      </div>
      <div className="background-glow"></div>
    </div >
  );
}

export default App;
