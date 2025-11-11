import React, { useState, useEffect } from 'react';
import { CopyIcon, CheckIcon } from './icons';

interface ResponseDisplayProps {
  isLoading: boolean;
  error: string | null;
  response: string;
}

const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ isLoading, error, response }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (response) {
      setCopied(false);
    }
  }, [response]);

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 dark:text-slate-400">AI is crafting the perfect reply...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center text-red-500 bg-red-100 dark:bg-red-900/20 p-4 rounded-md">
          <p className="font-semibold">An Error Occurred</p>
          <p>{error}</p>
        </div>
      );
    }

    if (response) {
      return (
        <div className="relative">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded-md transition-colors"
            title="Copy to clipboard"
          >
            {copied ? (
              <CheckIcon className="w-5 h-5 text-green-500" />
            ) : (
              <CopyIcon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            )}
          </button>
          <pre className="whitespace-pre-wrap bg-slate-100 dark:bg-slate-900/50 p-6 rounded-md font-sans text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {response}
          </pre>
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center text-center">
        <p className="text-slate-500 dark:text-slate-400">
          The generated reply will appear here once you submit a review.
        </p>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg h-full min-h-[400px] flex flex-col justify-center">
      <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200">Generated Reply Draft</h2>
      <div className="flex-grow flex items-center justify-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default ResponseDisplay;
