'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import IntegrationButtonApple from './IntegrationButtonApple';

interface ServiceCardAppleProps {
  service: {
    id: string;
    name: string;
    description: string;
    category: string;
    pricing: string;
    rating: number;
    reviews: number;
    image?: string;
  };
}

export default function ServiceCardApple({ service }: ServiceCardAppleProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`group relative rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-300 ${
        isHovered ? 'shadow-md transform -translate-y-1' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service image */}
      <div className="aspect-h-9 aspect-w-16 bg-gray-100 overflow-hidden">
        {service.image ? (
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-50">
            <svg
              className="h-12 w-12 text-gray-300"
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

      {/* Service info */}
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-xs font-medium text-blue-600">{service.category}</div>
          <div className="flex items-center">
            <StarIcon className="h-3.5 w-3.5 text-yellow-400" />
            <span className="ml-1 text-xs font-medium text-gray-600">{service.rating}</span>
          </div>
        </div>

        <h3 className="text-base font-semibold text-gray-900">
          <Link href={`/service/${service.id}`} className="hover:text-blue-600 transition-colors">
            {service.name}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{service.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm font-medium text-gray-900">{service.pricing}</div>
        </div>

        <div className="mt-4 flex space-x-3">
          <Link 
            href={`/service/${service.id}`}
            className="text-sm font-medium rounded-lg px-3 py-1.5 bg-gray-50 hover:bg-gray-100 text-gray-900 ring-1 ring-gray-200 flex-1 text-center"
          >
            Details
          </Link>
          <div className="flex-1">
            <IntegrationButtonApple
              serviceName={service.name}
              serviceId={service.id}
              type="claude"
              compact={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
