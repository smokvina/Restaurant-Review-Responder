import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ReviewInput from './components/ReviewInput';
import ResponseDisplay from './components/ResponseDisplay';
import { generateReviewReply } from './services/geminiService';

const App: React.FC = () => {
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [reviewText, setReviewText] = useState<string>('');
  const [generatedResponse, setGeneratedResponse] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = useCallback(async () => {
    if (!reviewText.trim() || !restaurantName.trim()) {
      setError('Please enter both a restaurant name and a review.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedResponse('');

    try {
      const response = await generateReviewReply(reviewText, restaurantName);
      setGeneratedResponse(response);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }, [reviewText, restaurantName]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
          <div className="lg:pr-4">
             <ReviewInput
              restaurantName={restaurantName}
              setRestaurantName={setRestaurantName}
              reviewText={reviewText}
              setReviewText={setReviewText}
              onGenerate={handleGenerate}
              isLoading={isLoading}
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:pl-4">
            <ResponseDisplay
              isLoading={isLoading}
              error={error}
              response={generatedResponse}
            />
          </div>
        </div>
      </main>
      <footer className="text-center p-4 mt-8 text-sm text-slate-500">
        <p>Powered by Gemini AI</p>
      </footer>
    </div>
  );
};

export default App;
