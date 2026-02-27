import React from 'react';
import type { LucideIcon } from 'lucide-react';
import { Code, TrendingUp, Globe } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-emerald-950/10 border border-emerald-900/20 backdrop-blur-lg rounded-3xl p-8 text-center border-white/10">
    <div className="mb-4 flex justify-center">
      <Icon className="w-12 h-12 text-emerald-500" />
    </div>
    <h3 className="text-2xl tracking-tight font-semibold text-white mb-3">{title}</h3>
    <p className="text-emerald-300">{description}</p>
  </div>
);

export const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl tracking-tight font-semibold text-center text-white mb-16">
          My Core Passions
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Code}
            title="Python Coding Wizardry"
            description="Building robust applications, automating tasks, and solving complex problems with elegant Python code. From web development to data science, I craft solutions that work."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Strategic Trading Insights"
            description="Navigating financial markets with data-driven strategies. Developing algorithmic trading systems and analyzing market trends to identify opportunities and manage risk."
          />
          <FeatureCard
            icon={Globe}
            title="Global Travel Enthusiast"
            description="Exploring diverse cultures and landscapes across the globe. Documenting adventures and gaining new perspectives that fuel creativity and innovation."
          />
        </div>
      </div>
    </section>
  );
};
