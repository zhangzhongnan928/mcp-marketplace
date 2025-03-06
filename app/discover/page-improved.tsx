'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import ServiceCardImproved from '../../components/ServiceCardImproved';

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
    category: 'Research',
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
  { name: 'Research', value: 'Research' },
  { name: 'Development', value: 'Development' },
  { name: 'Creative', value: 'Creative' },
  { name: 'Productivity', value: 'Productivity' },
];

export default function DiscoverPageImproved() {
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
      <div className="relative overflow-hidden bg-blue-600 pb-32">
        <div className="absolute inset-0">
          <img
            src="/images/discover-bg.jpg"
            alt="Background"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 to-blue-700/90 mix-blend-multiply" />
        </div>
        
        <div className="relative pt-16 pb-32 sm:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Discover MCP Services
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-blue-100 sm:max-w-3xl">
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
                  className="block w-full rounded-md border-0 py-4 pl-10 pr-4 text-gray-900 shadow-lg ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div className="relative -mt-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
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
                <ServiceCardImproved service={service} />
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
