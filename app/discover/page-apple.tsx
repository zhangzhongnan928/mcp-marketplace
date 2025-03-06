'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import ServiceCardApple from '../../components/ServiceCardApple';

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

export default function DiscoverPageApple() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Filter services based on search query and category
  const filteredServices = mcpServices.filter((service) => {
    const matchesSearch = 
      searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="animate-fade-in bg-white">
      {/* Hero section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Discover MCP Services
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              Browse and integrate powerful services with your AI assistants
            </p>
            
            {/* Search bar */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-md border-0 py-3 pl-4 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600"
                />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md px-2 text-gray-400 hover:text-gray-500"
                  >
                    <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category filters */}
      <div className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="hidden space-x-8 sm:flex">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`text-sm font-medium ${
                    selectedCategory === category.value
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  } py-4 px-1`}
                  onClick={() => setSelectedCategory(category.value)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="sm:hidden">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={() => setShowFilters(!showFilters)}
              >
                <AdjustmentsHorizontalIcon className="-ml-0.5 mr-1 h-5 w-5" aria-hidden="true" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      {showFilters && (
        <div className="sm:hidden border-b border-gray-200 py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                    selectedCategory === category.value
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setShowFilters(false);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Services grid */}
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <ServiceCardApple key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900">No services found</h3>
            <p className="mt-1 text-gray-500">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
