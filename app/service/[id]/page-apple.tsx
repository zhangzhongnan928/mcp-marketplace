'use client';

import React from 'react';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import { 
  ShieldCheckIcon, 
  ServerIcon, 
  ArrowPathIcon, 
  CursorArrowRaysIcon,
  ArrowUpRightIcon,
  ChatBubbleLeftRightIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import IntegrationButtonApple from '../../../components/IntegrationButtonApple';

// Types
type ServicePageAppleProps = {
  params: {
    id: string;
  };
};

// Mock service data - in a real app, this would come from an API
const getServiceData = (id: string) => {
  const services = {
    'data-analysis': {
      id: 'data-analysis',
      name: 'Data Analysis Suite',
      description: 'Powerful data analysis tools that integrate with your AI assistants.',
      longDescription: 'The Data Analysis Suite provides comprehensive tools for analyzing structured data through your AI assistant. Upload any data file and get instant insights, visualizations, and recommendations. The suite includes statistical analysis, predictive modeling, and data visualization capabilities that help you make sense of complex datasets without requiring technical expertise.',
      category: 'Data & Analytics',
      pricing: {
        free: true,
        freeTier: 'Basic data analysis with limited file size',
        paid: '$9.99 per month',
        paidFeatures: [
          'Unlimited file size',
          'Advanced analytics',
          'Data visualization export',
          'Custom reporting'
        ]
      },
      rating: 4.8,
      reviews: 125,
      provider: 'DataCraft AI',
      lastUpdated: '2025-02-15',
      image: '/services/data-analysis.png',
      features: [
        'CSV, Excel, and SQL database support',
        'Custom visualization generation',
        'Statistical analysis and insights',
        'Data cleansing and preprocessing',
        'Export capabilities to multiple formats'
      ],
      requirements: [
        'Claude 3.5 or higher',
        'Access to file upload in your Claude client'
      ]
    },
    'web-search': {
      id: 'web-search',
      name: 'Web Search Pro',
      description: 'Give your AI assistant the power to search the web in real-time.',
      longDescription: 'Web Search Pro extends your AI assistant with the ability to search the web for the most current information. Whether you're researching a topic, fact-checking, or looking for the latest news, Web Search Pro provides direct access to search results and web pages through your AI. It maintains context from your original query, delivering more relevant and focused results than using a separate search engine.',
      category: 'Research',
      pricing: {
        free: false,
        freeTier: null,
        paid: '$4.99 per month',
        paidFeatures: [
          'Unlimited searches',
          'Deep web results',
          'Image search capabilities',
          'Search history and bookmarking'
        ]
      },
      rating: 4.7,
      reviews: 208,
      provider: 'SearchConnect',
      lastUpdated: '2025-01-28',
      image: '/services/web-search.png',
      features: [
        'Real-time web search results',
        'News and current events updates',
        'Academic and research paper access',
        'Context-aware search refinement',
        'Citation and source tracking'
      ],
      requirements: [
        'Claude 3.0 or higher',
        'Stable internet connection'
      ]
    },
    // Add other service data as needed
  };

  return services[id as keyof typeof services];
};

// UI Components
function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[0, 1, 2, 3, 4].map((star) => (
        <StarIcon
          key={star}
          className={`${
            rating > star ? 'text-yellow-400' : 'text-gray-200'
          } h-5 w-5 flex-shrink-0`}
          aria-hidden="true"
        />
      ))}
      <span className="ml-2 text-sm text-gray-500">{rating} out of 5</span>
    </div>
  );
}

export default function ServicePageApple({ params }: ServicePageAppleProps) {
  const service = getServiceData(params.id);

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Service not found</h1>
          <p className="mt-4 text-lg text-gray-500">
            The service you are looking for does not exist or has been removed.
          </p>
          <div className="mt-6">
            <Link
              href="/discover"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline-none"
            >
              Browse all services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <div>
                  <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <Link href="/discover" className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                    Discover
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="h-4 w-4 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="ml-2 text-sm font-medium text-gray-900">{service.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          {/* Service image and details */}
          <div>
            {/* Service image */}
            <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.name}
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-50">
                  <svg
                    className="h-24 w-24 text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
              )}
            </div>

            {/* Provider info */}
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Provider</p>
                <p className="text-base font-medium text-gray-900">{service.provider}</p>
              </div>
              <Rating rating={service.rating} />
            </div>

            {/* Last updated */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Last updated: {service.lastUpdated}
              </p>
            </div>
          </div>

          {/* Service info */}
          <div className="mt-10 lg:mt-0">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                {service.category}
              </span>
              <span className="text-sm text-gray-500">{service.reviews} reviews</span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">{service.name}</h1>
            
            <div className="mt-5 space-y-6">
              <p className="text-lg text-gray-500">{service.longDescription}</p>
            </div>

            {/* Pricing info */}
            <div className="mt-8 border rounded-2xl p-6 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900">Pricing</h2>
              
              {service.pricing.free && (
                <div className="mt-4 p-4 bg-white rounded-xl shadow-sm">
                  <p className="font-medium text-gray-900">Free Tier</p>
                  <p className="mt-1 text-sm text-gray-500">{service.pricing.freeTier}</p>
                </div>
              )}

              <div className="mt-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-gray-900">Premium</p>
                  <p className="font-medium text-blue-600">{service.pricing.paid}</p>
                </div>
                <ul className="mt-2 space-y-2">
                  {service.pricing.paidFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-500">
                      <span className="mr-2 mt-0.5 text-blue-600">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Integration buttons */}
            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Integration</h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <IntegrationButtonApple
                  serviceName={service.name}
                  serviceId={service.id}
                  type="claude"
                  variant="primary"
                />
                <IntegrationButtonApple
                  serviceName={service.name}
                  serviceId={service.id}
                  type="cursor"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features and requirements */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-medium text-gray-900">Features</h2>
              <ul className="mt-4 space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CursorArrowRaysIcon className="h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                    <span className="ml-3 text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-medium text-gray-900">Requirements</h2>
              <ul className="mt-4 space-y-3">
                {service.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <ServerIcon className="h-5 w-5 flex-shrink-0 text-blue-600" aria-hidden="true" />
                    <span className="ml-3 text-sm text-gray-500">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Security and privacy */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-medium text-gray-900">Security & Privacy</h2>
          <p className="mt-2 text-lg text-gray-500">
            We take security and privacy seriously. Here's how we protect your data:
          </p>
          <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                <h3 className="ml-3 text-base font-medium text-gray-900">End-to-End Encryption</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                All data sent to and from this service is encrypted using industry-standard protocols.
                Your data remains secure and private.
              </p>
            </div>
            <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center">
                <ArrowPathIcon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                <h3 className="ml-3 text-base font-medium text-gray-900">No Data Retention</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                This service does not store your data after processing. Once your session ends,
                all uploaded and processed data is permanently deleted.
              </p>
            </div>
          </div>
        </div>

        {/* Related services */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium text-gray-900">You might also like</h2>
            <Link href="/discover" className="text-sm font-medium text-blue-600 hover:text-blue-500">
              View all services <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Related service cards would go here */}
            <div className="group relative rounded-2xl bg-white shadow-sm overflow-hidden">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100">
                <div className="h-full w-full bg-gray-50 flex items-center justify-center">
                  <svg className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">Data Visualization Pro</h3>
                <p className="mt-1 text-sm text-gray-500">$6.99/month</p>
              </div>
            </div>
            <div className="group relative rounded-2xl bg-white shadow-sm overflow-hidden">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden bg-gray-100">
                <div className="h-full w-full bg-gray-50 flex items-center justify-center">
                  <svg className="h-10 w-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">AI Research Assistant</h3>
                <p className="mt-1 text-sm text-gray-500">$7.99/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
