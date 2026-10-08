import React from 'react';
import { Helmet } from 'react-helmet-async';
import Badge from '../components/ui/Badge';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | AZync Solutions</title>
        <meta name="description" content="Terms of Service for AZync Solutions. Review terms governing our software development services, AI voice receptionists, and website usage." />
        <link rel="canonical" href="https://www.azyncsolutions.com/terms" />
      </Helmet>

      <section className="pt-36 pb-20 bg-brand-light relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
          <Badge className="mb-6">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-jakarta font-bold text-brand-dark mb-4">
            Terms of Service
          </h1>
          <p className="text-brand-gray text-sm mb-8">
            Last Updated: March 2026 | AZync Solutions (Islamabad, Pakistan)
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-brand border border-brand-border space-y-8 text-brand-dark font-sans leading-relaxed">
            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">1. Services</h2>
              <p className="text-brand-gray">
                AZync Solutions provides software development services, AI voice agent integrations (including Riley for HVAC businesses), web application development, and technical consulting. All services are governed by written client proposals or contract terms agreed upon prior to project initiation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">2. Intellectual Property</h2>
              <p className="text-brand-gray">
                Upon full payment of agreed fees, clients retain ownership of custom software deliverables created specifically for their project, subject to third-party underlying APIs (e.g., Anthropic Claude API) and open-source licenses where applicable.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">3. Use of AI Technologies</h2>
              <p className="text-brand-gray">
                Our AI voice receptionists and workflow tools use Claude API by Anthropic. Clients and users agree to comply with Anthropic's Acceptable Use Policy when interacting with integrated AI features.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">4. Limitation of Liability</h2>
              <p className="text-brand-gray">
                AZync Solutions strives to maintain high reliability and performance across all delivered software. However, we are not liable for indirect or consequential damages resulting from third-party API downtime or external network failures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-jakarta font-bold mb-3">5. Contact Information</h2>
              <p className="text-brand-gray">
                For questions regarding these Terms, contact us at <a href="mailto:contact@azyncsolutions.com" className="text-brand-blue underline font-semibold">contact@azyncsolutions.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
