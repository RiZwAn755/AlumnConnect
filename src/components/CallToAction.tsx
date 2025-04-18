import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Ready to reconnect with your alumni network?
        </h2>
        <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
          Join thousands of graduates who are already growing their careers 
          through our global alumni community.
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-col sm:flex-row">
          <button className="px-8 py-3 bg-white text-indigo-900 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Join Now
          </button>
          <button className="px-8 py-3 bg-transparent text-white border border-white rounded-md font-medium hover:bg-indigo-800 transition-colors flex items-center justify-center sm:justify-start">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;