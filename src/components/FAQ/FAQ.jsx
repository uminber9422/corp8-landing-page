import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaHeadset, FaBook, FaShieldAlt, FaRocket, FaCogs, FaUsersCog } from 'react-icons/fa';

const FAQ = () => {
  const [selected, setSelected] = useState(null);

  const categories = [
    {
      id: 'security',
      icon: FaShieldAlt,
      title: 'Security & Compliance',
      questions: [
        {
          id: 1,
          question: "What security certifications does Corp8.ai have?",
          answer: "Corp8.ai maintains the highest security standards with SOC 2 Type II, ISO 27001, HIPAA, and GDPR compliance. Our infrastructure is regularly audited and penetration tested. We also support custom security requirements for enterprise clients.",
        },
        {
          id: 2,
          question: "How is enterprise data protected?",
          answer: "We implement multiple layers of security including end-to-end encryption, role-based access control (RBAC), and VPC isolation. Enterprise data is processed in dedicated environments with custom security policies and audit logging.",
        },
      ],
    },
    {
      id: 'integration',
      icon: FaCogs,
      title: 'Enterprise Integration',
      questions: [
        {
          id: 3,
          question: "Can Corp8.ai integrate with our existing systems?",
          answer: "Yes, Corp8.ai offers enterprise-grade APIs and custom integrations. We support major enterprise systems including SAP, Salesforce, and Microsoft Azure. Our team provides dedicated integration support and documentation.",
        },
        {
          id: 4,
          question: "What deployment options are available?",
          answer: "We offer flexible deployment options including cloud-hosted (multi-tenant or dedicated), hybrid-cloud, and on-premises solutions. Enterprise clients can choose their preferred cloud provider (AWS, Azure, GCP) and region.",
        },
      ],
    },
    {
      id: 'scalability',
      icon: FaRocket,
      title: 'Performance & Scalability',
      questions: [
        {
          id: 5,
          question: "How does Corp8.ai handle enterprise-scale workloads?",
          answer: "Our infrastructure is built for enterprise scale, handling millions of operations daily. We provide dedicated resources, auto-scaling capabilities, and 99.99% uptime SLA. Load balancing and performance optimization are built-in.",
        },
        {
          id: 6,
          question: "What are the system requirements?",
          answer: "Corp8.ai is cloud-native and requires minimal on-premise resources. For enterprise deployments, we provide detailed specifications and can adapt to your infrastructure requirements.",
        },
      ],
    },
    {
      id: 'support',
      icon: FaUsersCog,
      title: 'Enterprise Support',
      questions: [
        {
          id: 7,
          question: "What level of support is provided?",
          answer: "Enterprise clients receive 24/7 priority support with dedicated account managers and SLA-backed response times. We also provide implementation support, training, and quarterly business reviews.",
        },
        {
          id: 8,
          question: "How does the onboarding process work?",
          answer: "Our enterprise onboarding includes dedicated project management, technical implementation support, security review, and custom training programs. We work closely with your team to ensure successful deployment.",
        },
      ],
    },
  ];

  return (
    <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-bold md:text-4xl md:leading-tight text-neutral-800">
          Enterprise
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-accent-600"> FAQ</span>
        </h2>
        <p className="mt-4 text-lg text-neutral-600">
          Common questions about Corp8.ai enterprise solutions
        </p>
      </div>

      {/* FAQ Categories */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {categories.map((category) => (
          <div key={category.id} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center gap-x-3">
              <category.icon className="w-6 h-6 text-primary-600" />
              <h3 className="text-xl font-semibold text-neutral-800">{category.title}</h3>
            </div>

            {/* Questions */}
            <div className="space-y-3">
              {category.questions.map((q) => (
                <div
                  key={q.id}
                  className="group relative bg-white border border-neutral-200 rounded-2xl hover:border-transparent hover:shadow-lg transition-all duration-300"
                >
                  <button
                    className="w-full text-left"
                    onClick={() => setSelected(selected === q.id ? null : q.id)}
                  >
                    <div className="px-6 py-4 flex justify-between items-center">
                      <h4 className="text-base font-medium text-neutral-800 pr-6">{q.question}</h4>
                      <div className={`flex-shrink-0 ms-6 ${selected === q.id ? 'text-primary-600' : 'text-neutral-400'}`}>
                        {selected === q.id ? (
                          <FaChevronUp className="w-4 h-4 transition-transform duration-300" />
                        ) : (
                          <FaChevronDown className="w-4 h-4 transition-transform duration-300" />
                        )}
                      </div>
                    </div>
                    {selected === q.id && (
                      <div className="px-6 pb-4">
                        <div className="border-t border-neutral-200 pt-3">
                          <p className="text-neutral-600">{q.answer}</p>
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex flex-col items-center">
          <p className="text-lg font-medium text-neutral-800 mb-4">
            Need more information?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-x-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              <FaHeadset className="w-4 h-4" />
              Enterprise Support
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-x-2 bg-white text-neutral-800 px-6 py-3 rounded-full font-medium border border-neutral-200 hover:border-primary-600 hover:shadow-lg transition-all duration-300"
            >
              <FaBook className="w-4 h-4" />
              Documentation
            </a>
          </div>
          <p className="mt-4 text-neutral-600">
            24/7 enterprise support • Custom solutions • Dedicated account team
          </p>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 right-0 -z-10">
        <div className="w-64 h-64 bg-gradient-to-r from-primary-600/10 to-accent-600/10 rounded-full filter blur-3xl opacity-70"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10">
        <div className="w-64 h-64 bg-gradient-to-r from-accent-600/10 to-primary-600/10 rounded-full filter blur-3xl opacity-70"></div>
      </div>
    </section>
  );
};

export default FAQ;
