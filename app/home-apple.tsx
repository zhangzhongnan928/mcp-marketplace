'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import ServiceCardApple from '../components/ServiceCardApple';

// Featured services data for the home page
const featuredServices = [
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
];

// Value propositions for MCP Marketplace
const valueProps = [
  {
    title: 'One-Click Integration',
    description: 'Add powerful capabilities to your AI assistant with a single click. No complex setup or configuration required.',
    color: 'bg-blue-50',
    icon: (
      <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Secure & Private',
    description: 'Your data remains encrypted and protected. Services follow strict security guidelines and privacy standards.',
    color: 'bg-green-50',
    icon: (
      <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'Seamless Experience',
    description: 'MCP services work directly within your AI assistant. No need to switch between different applications.',
    color: 'bg-purple-50',
    icon: (
      <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  }
];

export default function HomeApple() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="animate-fade-in">
      {/* Hero section */}
      <div className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Enhance your AI assistant</span>{' '}
                  <span className="block text-blue-600 xl:inline">with MCP services</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Discover and integrate powerful Model Context Protocol services that expand what your AI assistant can do.
                  One-click integration with Claude and other AI tools.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/discover"
                      className="flex w-full items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg"
                    >
                      Explore Services
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/about"
                      className="flex w-full items-center justify-center rounded-md bg-gray-100 px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-200 md:py-4 md:px-10 md:text-lg"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-br from-blue-50 to-indigo-100 sm:h-72 md:h-96 lg:h-full lg:w-full">
            <div className="flex h-full items-center justify-center">
              <svg
                className="h-64 w-64 text-blue-600 opacity-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9.5 2A1.5 1.5 0 0 0 8 3.5v3A1.5 1.5 0 0 0 9.5 8h3A1.5 1.5 0 0 0 14 6.5v-3A1.5 1.5 0 0 0 12.5 2h-3zm3 8A1.5 1.5 0 0 0 11 11.5v3A1.5 1.5 0 0 0 12.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16 10h-3zm-8 0A1.5 1.5 0 0 0 3 11.5v3A1.5 1.5 0 0 0 4.5 16h3A1.5 1.5 0 0 0 9 14.5v-3A1.5 1.5 0 0 0 7.5 10h-3zm3 8A1.5 1.5 0 0 0 4.5 19.5h3A1.5 1.5 0 0 0 9 18v-1.5A1.5 1.5 0 0 0 7.5 15h-3A1.5 1.5 0 0 0 3 16.5v3zm8 0A1.5 1.5 0 0 0 11 19.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5v3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Value propositions section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600">Why MCP Marketplace</p>
            <h2 className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              A better way to enhance your AI
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Model Context Protocol allows AI assistants to integrate with specialized services,
              expanding their capabilities while providing a seamless experience.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
              {valueProps.map((prop) => (
                <div key={prop.title} className="relative">
                  <div className={`absolute flex h-12 w-12 items-center justify-center rounded-md ${prop.color}`}>
                    {prop.icon}
                  </div>
                  <div className="ml-16">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">{prop.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{prop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured services section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Discover popular MCP services that can enhance your AI assistant's capabilities
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-lg gap-8 lg:max-w-none lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCardApple key={service.id} service={service} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/discover"
              className="inline-flex items-center text-base font-medium text-blue-600 hover:text-blue-500"
            >
              View all services
              <ArrowRightIcon className="ml-1 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            <span className="block">Ready to enhance your AI assistant?</span>
            <span className="block text-blue-200">Get started with MCP Marketplace today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/discover"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-base font-medium text-blue-600 hover:bg-gray-50"
              >
                Get started
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="/developers"
                className="inline-flex items-center justify-center rounded-md bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-blue-400"
              >
                For developers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
