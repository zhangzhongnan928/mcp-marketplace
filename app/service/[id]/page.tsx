import React from 'react';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import { ShieldCheckIcon, ServerIcon, ArrowPathIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';

// Types
type ServicePageProps = {
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
      description: 'Powerful data analysis tools that integrate with your AI assistants. Upload spreadsheets, CSVs, and databases for instant insights.',
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
      description: 'Give your AI assistant the power to search the web in real-time. Get up-to-date information and comprehensive research capabilities.',
      longDescription: 'Web Search Pro extends your AI assistant with the ability to search the web for the most current information. Whether you're researching a topic, fact-checking, or looking for the latest news, Web Search Pro provides direct access to search results and web pages through your AI. It maintains context from your original query, delivering more relevant and focused results than using a separate search engine.',
      category: 'Research & Information',
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
      <span className="ml-2 text-sm text-gray-500">({rating} out of 5 stars)</span>
    </div>
  );
}

export default function ServicePage({ params }: ServicePageProps) {
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
              className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Browse all services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <div className="flex items-center">
                <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Home
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link href="/discover" className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Discover
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-500">{service.name}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Service image */}
          <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
            <div className="h-80 w-full bg-gray-100 flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
          </div>

          {/* Service info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{service.name}</h1>
            
            <div className="mt-3">
              <h2 className="sr-only">Service rating</h2>
              <Rating rating={service.rating} />
              <p className="text-sm text-gray-500">{service.reviews} reviews</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6 text-base text-gray-700">
                <p>{service.longDescription}</p>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-lg font-medium text-gray-900">Provider Information</h2>
              <div className="mt-2 text-sm text-gray-500">
                <p>Provider: {service.provider}</p>
                <p>Last Updated: {service.lastUpdated}</p>
                <p>Category: {service.category}</p>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Pricing</h2>
              <div className="mt-2 text-sm text-gray-500">
                {service.pricing.free && (
                  <div className="mb-2">
                    <p className="font-semibold">Free Tier:</p>
                    <p>{service.pricing.freeTier}</p>
                  </div>
                )}
                <div>
                  <p className="font-semibold">Premium: {service.pricing.paid}</p>
                  <ul className="mt-2 list-disc pl-5">
                    {service.pricing.paidFeatures.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-medium text-gray-900">Integration</h2>
              <div className="mt-4 space-y-4">
                <button
                  type="button"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 w-full flex items-center justify-center"
                >
                  <span>Add to Claude</span>
                </button>
                <button
                  type="button"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-full flex items-center justify-center"
                >
                  <span>Add to Cursor</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Features</h2>
              <ul className="mt-4 space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CursorArrowRaysIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-sm text-gray-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">Requirements</h2>
              <ul className="mt-4 space-y-4">
                {service.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <ServerIcon className="h-5 w-5 text-blue-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-sm text-gray-500">{requirement}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Security section */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-lg font-medium text-gray-900">Security & Privacy</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <ShieldCheckIcon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                <h3 className="ml-3 text-base font-medium text-gray-900">End-to-End Encryption</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                All data sent to and from this service is encrypted using industry-standard protocols.
                Your data remains secure and private.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center">
                <ArrowPathIcon className="h-8 w-8 text-primary-600" aria-hidden="true" />
                <h3 className="ml-3 text-base font-medium text-gray-900">No Data Retention</h3>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                This service does not store your data after processing. Once your session ends,
                all uploaded and processed data is permanently deleted.
              </p>
            </div>
          </div>
        </div>

        {/* Related services section */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-lg font-medium text-gray-900">You might also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Sample related services - would be dynamic in real app */}
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="h-40 w-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700">
                  <Link href="#">Data Visualization Pro</Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">$6.99/month</p>
              </div>
            </div>
            <div className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="h-40 w-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-sm text-gray-700">
                  <Link href="#">AI Research Assistant</Link>
                </h3>
                <p className="mt-1 text-sm text-gray-500">$7.99/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
