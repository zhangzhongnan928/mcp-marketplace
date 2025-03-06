import React from 'react';
import Link from 'next/link';
import IntegrationButton from '../../components/IntegrationButton';

// Mock data for MCP services
const mcpServices = [
  {
    id: 'data-analysis',
    name: 'Data Analysis Suite',
    description: 'Powerful data analysis tools that integrate with your AI assistants. Upload spreadsheets, CSVs, and databases for instant insights.',
    category: 'Data & Analytics',
    pricing: 'Free / $9.99 per month',
    rating: 4.8,
    reviews: 125,
    image: '/services/data-analysis.png',
  },
  {
    id: 'web-search',
    name: 'Web Search Pro',
    description: 'Give your AI assistant the power to search the web in real-time. Get up-to-date information and comprehensive research capabilities.',
    category: 'Research & Information',
    pricing: '$4.99 per month',
    rating: 4.7,
    reviews: 208,
    image: '/services/web-search.png',
  },
  {
    id: 'code-assistant',
    name: 'Code Assistant',
    description: 'Supercharge your AI with advanced coding capabilities. Access GitHub repositories, run code, and get expert programming assistance.',
    category: 'Development',
    pricing: '$12.99 per month',
    rating: 4.9,
    reviews: 312,
    image: '/services/code-assistant.png',
  },
  {
    id: 'image-generator',
    name: 'AI Image Generator',
    description: 'Create stunning images directly through your AI assistant. From concept art to photorealistic images, all with simple prompts.',
    category: 'Creative',
    pricing: '$7.99 per month',
    rating: 4.6,
    reviews: 173,
    image: '/services/image-generator.png',
  },
  {
    id: 'document-manager',
    name: 'Document Manager',
    description: 'Seamlessly manage, edit, and collaborate on documents through your AI assistant. Works with all major document formats.',
    category: 'Productivity',
    pricing: '$6.99 per month',
    rating: 4.5,
    reviews: 98,
    image: '/services/document-manager.png',
  },
  {
    id: 'calendar-assistant',
    name: 'Calendar Assistant',
    description: 'Let your AI manage your schedule. Book meetings, send invites, and organize your time efficiently.',
    category: 'Productivity',
    pricing: '$3.99 per month',
    rating: 4.4,
    reviews: 87,
    image: '/services/calendar-assistant.png',
  },
];

export default function DiscoverPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Discover MCP Services</h1>
            <p className="mt-4 text-lg text-gray-500">
              Browse and integrate powerful services with your AI assistants
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {mcpServices.map((service) => (
                <div key={service.id} className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <div className="h-64 w-full bg-gray-100 flex items-center justify-center text-gray-400">
                      {/* Placeholder for service image */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        <Link href={`/service/${service.id}`} className="hover:underline">
                          {service.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{service.category}</p>
                      <p className="mt-1 text-sm text-gray-900">{service.pricing}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                      <svg className="ml-1 h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">{service.description}</p>
                  <div className="mt-4 flex space-x-2">
                    <Link
                      href={`/service/${service.id}`}
                      className="flex-1 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-center"
                    >
                      Details
                    </Link>
                    <div className="flex-1">
                      <IntegrationButton 
                        serviceName={service.name} 
                        serviceId={service.id} 
                        type="claude" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
