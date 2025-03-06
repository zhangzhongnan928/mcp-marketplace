'use client';

import { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

interface IntegrationButtonProps {
  serviceName: string;
  serviceId: string;
  className?: string;
  type: 'claude' | 'cursor' | 'other';
}

export default function IntegrationButton({
  serviceName,
  serviceId,
  className = '',
  type,
}: IntegrationButtonProps) {
  const [integrationState, setIntegrationState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseStyles = "rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 w-full flex items-center justify-center";
  
  const getButtonStyles = () => {
    if (integrationState === 'success') {
      return `${baseStyles} bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600 ${className}`;
    }
    
    if (type === 'claude') {
      return `${baseStyles} bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600 ${className}`;
    }
    
    return `${baseStyles} bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${className}`;
  };

  const getButtonText = () => {
    if (integrationState === 'loading') return 'Adding...';
    if (integrationState === 'success') return 'Added Successfully';
    if (integrationState === 'error') return 'Failed to Add';
    return `Add to ${type === 'claude' ? 'Claude' : type === 'cursor' ? 'Cursor' : 'Your Assistant'}`;
  };

  const handleIntegration = async () => {
    setIntegrationState('loading');
    setIsModalOpen(true);
    
    // Mock the integration process
    setTimeout(() => {
      // In a real application, we would call an API to handle the integration
      setIntegrationState('success');
    }, 1500);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (integrationState === 'success') {
      // Keep the success state visually on the button
      // but don't reset the modal state
    } else {
      setIntegrationState('idle');
    }
  };

  return (
    <>
      <button
        type="button"
        className={getButtonStyles()}
        onClick={handleIntegration}
        disabled={integrationState === 'loading' || integrationState === 'success'}
      >
        {integrationState === 'success' && (
          <CheckCircleIcon className="mr-1.5 h-5 w-5" aria-hidden="true" />
        )}
        <span>{getButtonText()}</span>
      </button>

      {/* Integration modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <div className="sm:flex sm:items-start">
              {integrationState === 'success' ? (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                  <CheckCircleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
              ) : (
                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg className="h-6 w-6 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              )}

              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {integrationState === 'success' 
                    ? `${serviceName} Added Successfully!` 
                    : `Adding ${serviceName} to ${type === 'claude' ? 'Claude' : type === 'cursor' ? 'Cursor' : 'Your Assistant'}`}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {integrationState === 'success' 
                      ? `You can now use ${serviceName} directly from ${type === 'claude' ? 'Claude' : type === 'cursor' ? 'Cursor' : 'your assistant'}.`
                      : `Please wait while we configure ${serviceName} for your assistant.`}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 sm:ml-3 sm:w-auto"
                onClick={closeModal}
              >
                {integrationState === 'success' ? 'Close' : 'Cancel'}
              </button>
              
              {integrationState === 'success' && type === 'claude' && (
                <button
                  type="button"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Open Claude
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
