import React from 'react';
import { SparklesIcon } from './icons';

interface ReviewInputProps {
  restaurantName: string;
  setRestaurantName: (name: string) => void;
  reviewText: string;
  setReviewText: (text: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

const ReviewInput: React.FC<ReviewInputProps> = ({
  restaurantName,
  setRestaurantName,
  reviewText,
  setReviewText,
  onGenerate,
  isLoading,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg space-y-6">
      <div>
        <label htmlFor="restaurant-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Restaurant Name
        </label>
        <input
          id="restaurant-name"
          type="text"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          placeholder="e.g., The Gourmet Garden"
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          disabled={isLoading}
        />
      </div>

      <div>
        <label htmlFor="review-text" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
          Customer Review
        </label>
        <textarea
          id="review-text"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Paste the customer's review here..."
          rows={10}
          className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
          disabled={isLoading}
        />
      </div>

      <button
        onClick={onGenerate}
        disabled={isLoading || !reviewText.trim() || !restaurantName.trim()}
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-slate-400 disabled:dark:bg-slate-600 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5 mr-2" />
            Generate Reply
          </>
        )}
      </button>
    </div>
  );
};

export default ReviewInput;
