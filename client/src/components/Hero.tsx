import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1>
              <span className="block text-sm font-semibold uppercase tracking-wide text-indigo-600 mb-1">
                Your Alumni Network
              </span>
              <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                <span className="text-gray-900">Reconnect, Network, </span>
                <span className="text-indigo-900">Grow Together</span>
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Join a vibrant community of alumni where meaningful connections lead to 
              extraordinary opportunities. Expand your professional network, find mentorship, 
              and grow your career.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-900 hover:bg-indigo-800 transition-colors">
                  Join Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-800 bg-white border-indigo-100 hover:bg-indigo-50 transition-colors">
                  Learn More
                </button>
              </div>
              <p className="mt-3 text-sm text-gray-500">
                Already a member? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign in</a>
              </p>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img
                  className="w-full transform transition duration-500 hover:scale-105"
                  src="https://images.pexels.com/photos/5905885/pexels-photo-5905885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Alumni networking at an event"
                />
                <div className="absolute inset-0 bg-indigo-900 mix-blend-multiply opacity-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;