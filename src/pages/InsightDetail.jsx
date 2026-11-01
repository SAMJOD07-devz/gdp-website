import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate, useOutletContext } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, ShieldCheck, Share2, Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { INSIGHTS_ARTICLES } from '../data/insightsData';
import { FIRM_DETAILS } from '../data/firmData';

export default function InsightDetail() {
  const { slug } = useParams();
  const { openConsultation } = useOutletContext();
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: 'https://advocate-pandya.com/assets/team/gaurav-pandya-office.webp',
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.title,
      url: 'https://advocate-pandya.com/about',
    },
    publisher: {
      '@type': 'LegalService',
      name: 'GD Pandya Associates',
      logo: {
        '@type': 'ImageObject',
        url: 'https://advocate-pandya.com/assets/logo.webp',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://advocate-pandya.com/insights/${article.slug}`,
    },
    keywords: article.keywords.join(', '),
  };

  return (
    <>
      <Helmet>
        <title>{`${article.shortTitle} | GD Pandya Associates, Jamnagar`}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <link rel="canonical" href={`https://advocate-pandya.com/insights/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://advocate-pandya.com/insights/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content="https://advocate-pandya.com/assets/team/gaurav-pandya-office.webp" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://advocate-pandya.com/' },
              { '@type': 'ListItem', position: 2, name: 'Legal Insights', item: 'https://advocate-pandya.com/insights' },
              { '@type': 'ListItem', position: 3, name: article.shortTitle, item: `https://advocate-pandya.com/insights/${article.slug}` },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-[#F7FAFC] py-14 sm:py-20 text-[#0E1F33]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back link */}
          <div className="mb-8">
            <Link
              to="/insights"
              className="inline-flex items-center text-xs font-semibold text-[#4A5B70] hover:text-[#0E1F33] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" strokeWidth={1.5} />
              <span>Back to all legal guides</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-[rgba(14,31,51,0.10)]">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded font-semibold uppercase tracking-wider bg-[#EEF3F8] text-[#A8803A] border border-[rgba(14,31,51,0.08)]">
                {article.category}
              </span>
              <span className="text-[#738499] flex items-center">
                <Clock className="w-3 h-3 mr-1" strokeWidth={1.5} />
                {article.readTime}
              </span>
              <span className="text-[#738499] flex items-center">
                <Calendar className="w-3 h-3 mr-1" strokeWidth={1.5} />
                {article.publishDate}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[2.65rem] font-normal text-[#0E1F33] leading-tight tracking-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed pt-1">
              {article.excerpt}
            </p>

            {/* Author row */}
            <div className="pt-4 flex items-center justify-between border-t border-[rgba(14,31,51,0.06)]">
              <div className="flex items-center space-x-3">
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover border border-[rgba(14,31,51,0.12)]"
                  width="40"
                  height="40"
                />
                <div>
                  <p className="text-xs font-semibold text-[#0E1F33]">{article.author.name}</p>
                  <p className="text-[11px] text-[#738499]">{article.author.title} · Jamnagar</p>
                </div>
              </div>

              <a
                href={`https://wa.me/919898598184?text=Hello%20Advocate%20Pandya%2C%20I%20read%20your%20article%20on%20${encodeURIComponent(article.shortTitle)}%20and%20would%20like%20to%20consult.`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center text-xs font-medium text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                <span>Ask via WhatsApp</span>
              </a>
            </div>
          </header>

          {/* Key Takeaways Box */}
          <div className="my-10 rounded-xl bg-white border border-[rgba(14,31,51,0.12)] p-6 sm:p-7 card-shadow">
            <h3 className="font-serif text-lg font-semibold text-[#0E1F33] mb-3 flex items-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-[#A8803A]" strokeWidth={1.5} />
              Key Legal Takeaways
            </h3>
            <ul className="space-y-2.5">
              {article.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-[#4A5B70] leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Main Body */}
          <div className="space-y-10 text-sm sm:text-base text-[#0E1F33] leading-relaxed font-sans">
            {article.content.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="font-serif text-2xl font-normal text-[#0E1F33] tracking-tight">
                  {section.heading}
                </h2>
                <div className="text-[#4A5B70] leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {section.body}
                </div>
              </section>
            ))}
          </div>

          {/* Legal Disclaimer Box (BCI Compliant) */}
          <div className="mt-12 rounded-xl bg-[#EEF3F8] border border-[rgba(14,31,51,0.10)] p-5 text-xs text-[#738499] leading-relaxed">
            <p className="font-semibold text-[#0E1F33] mb-1">Legal Notice &amp; Disclaimer:</p>
            <p>
              This publication is provided strictly for academic and informational purposes under the rules of the Bar Council of India. It does not constitute legal advice, solicitation, or create an advocate-client relationship. Legal outcomes depend on individual case facts. Consult counsel before taking action.
            </p>
          </div>

          {/* Chamber Action Strip */}
          <div className="mt-10 rounded-xl bg-white border border-[rgba(14,31,51,0.12)] p-6 sm:p-8 card-shadow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-normal text-[#0E1F33]">
                Have a related case or dispute?
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5B70]">
                Schedule an appointment at our Jamnagar chambers for document review and advisory.
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={openConsultation}
                className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors"
              >
                <span>Book Consultation</span>
              </button>
              <a
                href={FIRM_DETAILS.social.phone}
                className="inline-flex items-center justify-center text-xs font-medium text-[#0E1F33] bg-white border border-[rgba(14,31,51,0.12)] px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-1 text-[#A8803A]" strokeWidth={1.5} />
                <span>Call Chambers</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

