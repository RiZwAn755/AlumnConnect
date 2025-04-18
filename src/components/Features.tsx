import React from 'react';
import { FEATURES } from '../constants';
import { Users, Calendar, Award, Briefcase } from 'lucide-react';

const Features: React.FC = () => {
  // Map to get the correct icon component based on the icon name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="h-10 w-10 text-indigo-900" />;
      case 'calendar':
        return <Calendar className="h-10 w-10 text-indigo-900" />;
      case 'award':
        return <Award className="h-10 w-10 text-indigo-900" />;
      case 'briefcase':
        return <Briefcase className="h-10 w-10 text-indigo-900" />;
      default:
        return <Users className="h-10 w-10 text-indigo-900" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our platform offers powerful tools to help you connect, grow, and thrive.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.title}
              className="relative p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-md bg-indigo-50 text-indigo-700 mb-4">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;