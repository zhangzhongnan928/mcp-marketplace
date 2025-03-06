'use client';

import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

interface IntegrationButtonAppleProps {
  serviceName: string;
  serviceId: string;
  className?: string;
  type: 'claude' | 'cursor' | 'other';
  variant?: 'primary' | 'secondary';
  compact?: boolean;
}

export default function IntegrationButtonApple({
  serviceName,
  serviceId,
  className = '',
  type,
  variant = 'primary',
  compact = false,
}: IntegrationButtonAppleProps) {
  const [integrationState, setIntegrationState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Apple-inspired button styles
  const baseStyles = compact
    ? "text-sm font-medium rounded-lg px-3 py-1.5 focus:outline-none transition-all duration-300 flex items-center justify-center"
    : "text-sm font-medium rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 flex items-center justify-center";
  
  const getButtonStyles = () => {
    if (integrationState === 'success') {
      return `${baseStyles} bg-green-500 hover:bg-green-600 text-white shadow-sm ${className}`;
    }
    
    if (variant === 'primary') {
      return `${baseStyles} bg-blue-600 hover:bg-blue-700 text-white shadow-sm ${className}`;
    }
    
    return `${baseStyles} bg-gray-50 hover:bg-gray-100 text-gray-900 ring-1 ring-gray-200 ${className}`;
  };

  const getButtonText = () => {
    if (integrationState === 'loading') return 'Adding...';
    if (integrationState === 'success') return 'Added';
    if (integrationState === 'error') return 'Try Again';

    if (compact) {
      return 'Add';
    }
    
    return `Add to ${type === 'claude' ? 'Claude' : type === 'cursor' ? 'Cursor' : 'Your Assistant'}`;
  };

  const handleIntegration = async () => {
    if (integrationState === 'success') return;
    
    setIntegrationState('loading');
    setIsModalOpen(true);
    
    // Mock the integration process with a delay
    setTimeout(() => {
      setIntegrationState('success');
    }, 1500);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Keep success state on the button
  };

  return (
    <>
      <button
        type="button"
        className={getButtonStyles()}
        onClick={handleIntegration}
        disabled={integrationState === 'loading'}
      >
        {integrationState === 'success' && (
          <CheckIcon className="mr-1.5 h-4 w-4" aria-hidden="true" />
        )}
        <span>{getButtonText()}</span>
      </button>

      {/* Integration modal */}
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-center">
                    {integrationState === 'loading' ? (
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <svg className="h-6 w-6 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </div>
                    ) : (
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                      </div>
                    )}
                  </div>

                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {integrationState === 'loading' 
                        ? `Adding ${serviceName}` 
                        : `${serviceName} Added Successfully`}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {integrationState === 'loading' 
                          ? `Please wait while we configure ${serviceName} for your assistant.`
                          : `You can now use ${serviceName} with ${type === 'claude' ? 'Claude' : type === 'cursor' ? 'Cursor' : 'your assistant'}.`}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    {integrationState === 'success' && (
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none sm:col-start-2 sm:text-sm"
                        onClick={closeModal}
                      >
                        Done
                      </button>
                    )}
                    <button
                      type="button"
                      className={`mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:col-start-1 sm:mt-0 sm:text-sm ${
                        integrationState === 'success' ? '' : 'sm:col-span-2'
                      }`}
                      onClick={closeModal}
                    >
                      {integrationState === 'loading' ? 'Cancel' : 'Close'}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
