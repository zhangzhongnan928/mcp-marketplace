import React from 'react';
import Link from 'next/link';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Simple Integration',
    description:
      'Add any MCP service to your AI assistant with a single click. No complex setup or configuration required.',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Secure and Private',
    description:
      'All MCP services follow strict security and privacy guidelines. Your data is encrypted and protected at all times.',
    icon: LockClosedIcon,
  },
  {
    name: 'Seamless Experience',
    description:
      'Once integrated, MCP services work directly within your AI assistant. No need to switch between different applications.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Growing Ecosystem',
    description:
      'Our marketplace is constantly expanding with new services and capabilities to enhance your AI assistant.',
    icon: ServerIcon,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-600 to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                About MCP Marketplace
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Empowering AI assistants with specialized capabilities through the Model Context Protocol.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center pt-24">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Extend Your AI</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What is MCP Marketplace?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            MCP Marketplace is a platform that connects AI assistants with specialized services through the Model Context Protocol (MCP). Our platform allows users to discover, subscribe to, and instantly integrate powerful tools and capabilities with their AI assistants like Claude and Cursor.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* How it works section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Simple Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How MCP Marketplace Works
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">Discover</h3>
              <p className="mt-2 text-base leading-7 text-gray-600 text-center">
                Browse our marketplace for services that enhance your AI assistant with specialized capabilities.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">Subscribe</h3>
              <p className="mt-2 text-base leading-7 text-gray-600 text-center">
                Choose the services you want and subscribe to them with transparent pricing and no hidden fees.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">Integrate</h3>
              <p className="mt-2 text-base leading-7 text-gray-600 text-center">
                With one click, add the service to your AI assistant and start using its capabilities immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What is MCP section */}
      <div className="bg-primary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">The Technology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What is Model Context Protocol?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Model Context Protocol (MCP) is a technology developed by Anthropic that allows AI assistants like Claude to integrate with external tools and services. It enables AI assistants to access specialized capabilities while maintaining context and providing a seamless user experience.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="rounded-lg bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold leading-8 text-gray-900">Key features of MCP:</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-gray-600">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seamless integration with AI assistants</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Standardized communication protocol</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enhanced security and privacy</span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-6 flex-none text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Extensible architecture for diverse applications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to enhance your AI assistant?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Explore our marketplace and discover the perfect services to extend your AI's capabilities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/discover"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Browse Services
              </Link>
              <Link href="/developers" className="text-sm font-semibold leading-6 text-white">
                Become a Developer <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
