import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate, useOutletContext } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Calendar, ShieldCheck, Share2, Phone, CheckCircle2, MessageCircle } from 'lucide-react';
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
    image: article.noticeImage ? `https://advocate-pandya.com${article.noticeImage}` : 'https://advocate-pandya.com/assets/team/gaurav-pandya-office.webp',
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
      name: 'GD PANDYA ASSOCIATES',
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
        <title>{`${article.shortTitle} | GD PANDYA ASSOCIATES, Jamnagar - 361001`}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <link rel="canonical" href={`https://advocate-pandya.com/insights/${article.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://advocate-pandya.com/insights/${article.slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:image" content={article.noticeImage ? `https://advocate-pandya.com${article.noticeImage}` : 'https://advocate-pandya.com/assets/team/gaurav-pandya-office.webp'} />
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

      <div className="bg-[#F7FAFC] py-16 lg:py-24 text-[#0E1F33]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <div className="mb-8">
            <Link
              to="/insights"
              className="inline-flex items-center text-xs font-semibold text-[#4A5B70] hover:text-[#0E1F33] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              <span>Back to all legal insights</span>
            </Link>
          </div>

          {/* Article Header */}
          <header className="space-y-4 pb-8 border-b border-[rgba(14,31,51,0.10)]">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="px-3 py-1 rounded-full font-semibold uppercase tracking-wider text-[#A8803A] bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)]">
                {article.category}
              </span>
              {article.newspaper && (
                <span className="px-3 py-1 rounded-full font-semibold text-[#0E1F33] bg-white border border-[rgba(14,31,51,0.12)]">
                  {article.newspaper}
                </span>
              )}
              <span className="text-[#738499] flex items-center ml-2">
                <Clock className="w-3.5 h-3.5 mr-1" />
                {article.readTime}
              </span>
              <span className="text-[#738499] flex items-center ml-2">
                <Calendar className="w-3.5 h-3.5 mr-1" />
                {new Date(article.publishDate).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] leading-tight tracking-tight">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed font-sans pt-1">
              {article.excerpt}
            </p>

            {/* Author Byline */}
            <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-[rgba(14,31,51,0.06)]">
              <div className="flex items-center space-x-3">
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover object-top border border-[rgba(14,31,51,0.12)]"
                />
                <div>
                  <p className="text-xs font-semibold text-[#0E1F33]">{article.author.name}</p>
                  <p className="text-[11px] text-[#738499]">{article.author.title} · GD PANDYA ASSOCIATES</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-[rgba(14,31,51,0.12)] bg-white text-xs text-[#4A5B70] hover:text-[#0E1F33] transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </header>

          {/* Newspaper Scan / Notice Document Viewer */}
          {article.noticeImage && (
            <div className="my-10 bg-white p-3 rounded-2xl border border-[rgba(14,31,51,0.12)] card-shadow">
              <div className="rounded-xl overflow-hidden border border-[rgba(14,31,51,0.08)] bg-slate-900">
                <img
                  src={article.noticeImage}
                  alt={`Published Press Clipping: ${article.title}`}
                  className="w-full h-auto object-contain max-h-[600px] mx-auto"
                />
              </div>
              <p className="text-[11px] text-center text-[#738499] mt-2">
                Published Press Document &amp; Case Record · GD PANDYA ASSOCIATES, Jamnagar - 361001
              </p>
            </div>
          )}

          {/* Article Body */}
          <div className="py-8 space-y-8 text-sm sm:text-base text-[#4A5B70] leading-relaxed">
            {article.content.map((sec, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#0E1F33]">
                  {sec.heading}
                </h2>
                <div className="whitespace-pre-line text-xs sm:text-sm leading-relaxed">
                  {sec.body}
                </div>
              </section>
            ))}
          </div>

          {/* Key Legal Takeaways Box */}
          {article.takeaways && article.takeaways.length > 0 && (
            <div className="my-10 p-6 sm:p-8 rounded-xl bg-white border border-[rgba(14,31,51,0.12)] card-shadow space-y-4">
              <div className="flex items-center space-x-2 text-[#0E1F33]">
                <ShieldCheck className="w-5 h-5 text-[#A8803A]" />
                <h3 className="font-serif text-xl font-semibold">Key Legal Takeaways</h3>
              </div>
              <ul className="space-y-2.5">
                {article.takeaways.map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-[#4A5B70]">
                    <CheckCircle2 className="w-4 h-4 text-[#A8803A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Regulatory Disclaimer */}
          <div className="p-4 bg-[#EEF3F8] rounded-lg border border-[rgba(14,31,51,0.08)] text-[11px] text-[#738499] leading-relaxed my-8">
            <strong>Bar Council of India Disclaimer:</strong> The legal insights and court reports presented on this page are published solely for general informational and academic discussion. They do not constitute formal legal opinion or legal advice. Users facing similar matters should obtain independent legal counsel based on the specific facts of their case.
          </div>

          {/* Direct Consultation Card */}
          <div className="mt-12 p-8 rounded-2xl bg-[#0E1F33] text-white space-y-5">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal">
              Facing a similar legal matter or court summons?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Consult Advocate Gaurav D. Pandya at <strong>GD PANDYA ASSOCIATES</strong> for a thorough examination of your case documents, title records, or trademark application.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={openConsultation}
                className="inline-flex items-center justify-center px-5 py-3 bg-[#A8803A] hover:bg-[#8F6C2E] text-white rounded-lg text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </button>
              <a
                href={FIRM_DETAILS.social.phone}
                className="inline-flex items-center justify-center px-5 py-3 bg-white/10 hover:bg-white/15 text-white rounded-lg text-xs font-semibold border border-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-[#A8803A]" />
                <span>Call Chambers: +91 98985 98184</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
