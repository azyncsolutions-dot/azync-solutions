import React from 'react';
import { Helmet } from 'react-helmet-async';
import Badge from '../components/ui/Badge';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | AZync Solutions</title>
        <meta name="description" content="Privacy Policy for AZync Solutions. Learn how we handle form submissions, contact information, and third-party services like Vercel." />
        <link rel="canonical" href="https://www.azyncsolutions.com/privacy" />
      </Helmet>

      <section className="pt-36 pb-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <Badge className="mb-6">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-jakarta font-bold text-brand-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-brand-gray text-sm mb-8">
            Last Updated: March 2026 | AZync Solutions (Islamabad, Pakistan)
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-brand border border-brand-border space-y-8 text-brand-dark font-sans leading-relaxed">
            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">1. Information We Collect</h2>
              <p className="text-brand-gray">
                AZync Solutions collects information that you voluntarily provide to us when contacting us, requesting a quote, or scheduling a product demo. This includes your name, email address, phone number, company name, and project requirements submitted via our contact forms or email (<a href="mailto:contact@azyncsolutions.com" className="text-brand-blue underline">contact@azyncsolutions.com</a>).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">2. How We Use Your Information</h2>
              <p className="text-brand-gray">
                We use the collected information solely to:
              </p>
              <ul className="list-disc list-inside text-brand-gray mt-2 space-y-1">
                <li>Respond to project inquiries, quote requests, and support communications.</li>
                <li>Design, develop, and deliver software services, AI voice receptionists, and automation systems.</li>
                <li>Send project updates and administrative notices.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">3. We Do Not Sell Your Data</h2>
              <p className="text-brand-gray">
                We never sell, rent, lease, or trade your personal information or business data to third parties or data brokers under any circumstances.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">4. Third-Party Infrastructure & Services</h2>
              <p className="text-brand-gray">
                To run our web platform and deliver AI solutions, we work with trusted infrastructure providers:
              </p>
              <ul className="list-disc list-inside text-brand-gray mt-2 space-y-1">
                <li><strong>Vercel:</strong> Web hosting and edge serverless infrastructure.</li>
                <li><strong>Voice & AI Services:</strong> Powers our 24/7 AI voice receptionists (e.g., Riley) and custom workflow integrations. Client data is handled with strict confidentiality.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">5. Contact Us</h2>
              <p className="text-brand-gray">
                If you have any questions regarding this Privacy Policy, please email us at <a href="mailto:contact@azyncsolutions.com" className="text-brand-blue underline font-semibold">contact@azyncsolutions.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
