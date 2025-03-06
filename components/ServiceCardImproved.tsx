'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import IntegrationButtonApple from './IntegrationButtonApple';

interface ServiceCardImprovedProps {
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

// Map of service IDs to custom image URLs
const serviceImages = {
  'data-analysis': '/images/data-analysis.svg',
  'web-search': '/images/web-search.svg',
  'code-assistant': '/images/code-assistant.svg',
  'image-generator': '/images/image-generator.svg',
  'document-manager': '/images/document-manager.svg',
  'calendar-assistant': '/images/calendar-assistant.svg',
};

export default function ServiceCardImproved({ service }: ServiceCardImprovedProps) {
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
              <StarIcon className="h-3.5 w-3.5 text-yellow-400" />
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
