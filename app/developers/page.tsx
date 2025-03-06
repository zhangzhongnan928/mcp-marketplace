import React from 'react';
import Link from 'next/link';
import { CodeBracketIcon, CubeIcon, CurrencyDollarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    name: 'Create your MCP service',
    description: 'Develop a service that follows the Model Context Protocol specifications to extend AI assistant capabilities.',
    href: '#',
    icon: CodeBracketIcon,
  },
  {
    name: 'Test and validate',
    description: 'Use our developer tools to test your service integration with Claude and other MCP compatible assistants.',
    href: '#',
    icon: CubeIcon,
  },
  {
    name: 'Publish to marketplace',
    description: 'Submit your service for review and publish it on the MCP Marketplace for users to discover and use.',
    href: '#',
    icon: DocumentTextIcon,
  },
  {
    name: 'Monetize your service',
    description: 'Set your pricing structure and earn recurring revenue from users who subscribe to your service.',
    href: '#',
    icon: CurrencyDollarIcon,
  },
];

const faqs = [
  {
    question: 'What is the Model Context Protocol?',
    answer: 'The Model Context Protocol (MCP) is a standardized way for AI assistants to communicate with external tools and services. It allows developers to create capabilities that extend what AI assistants can do, while providing a seamless experience for users.',
  },
  {
    question: 'How do I get started developing an MCP service?',
    answer: 'To get started, you\'ll need to sign up for a developer account, review the MCP documentation, and use our SDK to create your service. We provide templates and examples to help you get started quickly.',
  },
  {
    question: 'What types of services can I build?',
    answer: 'You can build a wide variety of services including data analysis tools, content generation utilities, web search capabilities, specialized knowledge bases, productivity enhancers, and much more. If it can be accessed via an API, it can likely be turned into an MCP service.',
  },
  {
    question: 'How does the review process work?',
    answer: 'Once you submit your service, our team will review it to ensure it meets our quality, security, and functionality standards. This typically takes 3-5 business days. We\'ll provide feedback if any changes are needed before your service can be published.',
  },
  {
    question: 'How do payments work?',
    answer: 'You set the pricing for your service. When users subscribe, we handle all payment processing and pay you monthly. We retain a small percentage as a platform fee, which covers payment processing, hosting, and marketing of your service.',
  },
];

export default function DevelopersPage() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-primary-600/10 ring-1 ring-primary-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Build MCP Services for AI Assistants
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                Join our developer community and create powerful services that extend AI assistant capabilities.
                Reach users directly through their favorite AI tools and earn recurring revenue.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Get Started
                </Link>
                <Link href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  View Documentation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mt-10 w-full max-w-lg">
              <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-900 shadow-xl sm:w-full">
                <div className="h-full w-full flex items-center justify-center text-gray-500 bg-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Process section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">Developer Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Build and Publish MCP Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Follow these steps to create, test, publish, and monetize your MCP services on our marketplace.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <step.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {step.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{step.description}</p>
                  <p className="mt-6">
                    <Link href={step.href} className="text-sm font-semibold leading-6 text-primary-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features section */}
      <div className="bg-primary-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Developer Benefits</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Build on MCP Marketplace?
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p className="text-lg font-semibold leading-8 text-gray-900">Reach a Growing User Base</p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Connect with users of Claude, Cursor, and other AI assistants that support the Model Context Protocol.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold leading-8 text-gray-900">Subscription Revenue</p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Create recurring revenue streams with subscription-based pricing for your services.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold leading-8 text-gray-900">Simple Integration</p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Our SDK and documentation make it easy to build, test, and deploy MCP-compatible services.
                </p>
              </div>
              <div className="relative pl-16">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold leading-8 text-gray-900">Security and Trust</p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Our platform handles authentication, billing, and user management so you can focus on your service's core functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.question} className="pt-6">
                <dt>
                  <h3 className="text-base font-semibold leading-7 text-gray-900">{faq.question}</h3>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to start building?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join our developer program and create the next generation of MCP services.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Sign up
              </Link>
              <Link href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
