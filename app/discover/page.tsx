'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import IntegrationButtonApple from '../../components/IntegrationButtonApple';

// Mock data for MCP services
const mcpServices = [
  {
    id: 'data-analysis',
    name: 'Data Analysis Suite',
    description: 'Powerful data analysis tools that integrate with your AI assistants. Upload spreadsheets, CSVs, and databases for instant insights.',
    category: 'Data & Analytics',
    pricing: 'Free / $9.99/mo',
    rating: 4.8,
    reviews: 125,
  },
  {
    id: 'web-search',
    name: 'Web Search Pro',
    description: 'Give your AI assistant the power to search the web in real-time. Get up-to-date information and comprehensive research capabilities.',
    category: 'Research & Information',
    pricing: '$4.99/mo',
    rating: 4.7,
    reviews: 208,
  },
  {
    id: 'code-assistant',
    name: 'Code Assistant',
    description: 'Supercharge your AI with advanced coding capabilities. Access GitHub repositories, run code, and get expert programming assistance.',
    category: 'Development',
    pricing: '$12.99/mo',
    rating: 4.9,
    reviews: 312,
  },
  {
    id: 'image-generator',
    name: 'AI Image Generator',
    description: 'Create stunning images directly through your AI assistant. From concept art to photorealistic images, all with simple prompts.',
    category: 'Creative',
    pricing: '$7.99/mo',
    rating: 4.6,
    reviews: 173,
  },
  {
    id: 'document-manager',
    name: 'Document Manager',
    description: 'Seamlessly manage, edit, and collaborate on documents through your AI assistant. Works with all major document formats.',
    category: 'Productivity',
    pricing: '$6.99/mo',
    rating: 4.5,
    reviews: 98,
  },
  {
    id: 'calendar-assistant',
    name: 'Calendar Assistant',
    description: 'Let your AI manage your schedule. Book meetings, send invites, and organize your time efficiently.',
    category: 'Productivity',
    pricing: '$3.99/mo',
    rating: 4.4,
    reviews: 87,
  },
];

const categories = [
  { name: 'All', value: 'all' },
  { name: 'Data & Analytics', value: 'Data & Analytics' },
  { name: 'Research & Information', value: 'Research & Information' },
  { name: 'Development', value: 'Development' },
  { name: 'Creative', value: 'Creative' },
  { name: 'Productivity', value: 'Productivity' },
];

// Map of service IDs to custom image URLs
const serviceImages = {
  'data-analysis': '/images/data-analysis.svg',
  'web-search': '/images/web-search.svg',
  'code-assistant': '/images/code-assistant.svg',
  'image-generator': '/images/image-generator.svg',
  'document-manager': '/images/document-manager.svg',
  'calendar-assistant': '/images/calendar-assistant.svg',
};

// Service Card Component
function ServiceCard({ service }: { service: any }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Get the appropriate image for this service
  const imageUrl = serviceImages[service.id as keyof typeof serviceImages] || '/images/default-service.svg';

  return (
    <div 
      className={`group relative overflow-hidden transition-all duration-300 ease-in-out transform ${
        isHovered ? 'shadow-lg scale-102' : 'shadow-md'
      } rounded-lg bg-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      }}
    >
      {/* Service image with smooth zoom effect on hover */}
      <div className="aspect-h-2 aspect-w-3 overflow-hidden">
        <div className="w-full h-52 relative overflow-hidden">
          <img
            src={imageUrl}
            alt={service.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <div className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
              <svg className="h-3.5 w-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 text-xs font-medium text-gray-700">{service.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Service info with animated height on hover */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
            {service.category}
          </span>
        </div>

        <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          <Link href={`/service/${service.id}`} className="hover:underline">
            {service.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{service.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">{service.pricing}</div>
          <div className="text-xs text-gray-500">{service.reviews} reviews</div>
        </div>

        {/* Button section with improved visibility */}
        <div className="mt-4 flex space-x-3">
          <Link 
            href={`/service/${service.id}`}
            className="flex-1 text-center text-sm font-medium rounded-md py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-900 transition-colors"
          >
            Details
          </Link>
          <div className="flex-1">
            <IntegrationButtonApple 
              serviceName={service.name} 
              serviceId={service.id} 
              type="claude" 
              compact={true}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleServices, setVisibleServices] = useState<typeof mcpServices>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter services based on search query and category
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate a slight loading delay for the animation effect
    setTimeout(() => {
      const filtered = mcpServices.filter((service) => {
        const matchesSearch = 
          searchQuery === '' || 
          service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          service.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory =
          selectedCategory === 'all' || service.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
      });
      
      setVisibleServices(filtered);
      setIsLoading(false);
    }, 300);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with search */}
      <div className="relative overflow-hidden bg-blue-600 pb-16 sm:pb-20">
        <div className="absolute inset-0">
          <img
            src="/images/discover-bg.jpg"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 to-blue-700/90 mix-blend-multiply" />
        </div>
        
        <div className="relative pt-10 pb-10 sm:pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              Discover MCP Services
            </h1>
            <p className="mt-4 max-w-lg mx-auto text-xl text-blue-100 sm:max-w-3xl">
              Browse and integrate powerful services with your AI assistants
            </p>
            
            {/* Search bar */}
            <div className="mt-8 sm:mx-auto sm:max-w-lg sm:px-6">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-md border-0 py-3 pl-10 pr-4 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="relative -mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-1 sm:px-6 overflow-x-auto scrollbar-hide">
            <div className="flex flex-nowrap space-x-4 py-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`${
                    selectedCategory === category.value
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  } px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 whitespace-nowrap`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services grid with staggered animation */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div 
                key={i} 
                className="h-80 rounded-lg bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        ) : visibleServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service, index) => (
              <div 
                key={service.id}
                className="opacity-0 animate-fade-slide-up"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-lg font-medium text-gray-900">No services found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-slide-up {
          animation: fadeSlideUp 0.5s ease-out;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
