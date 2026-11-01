import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useOutletContext } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Scale, Landmark, ChevronRight, Search } from 'lucide-react';
import { INSIGHTS_ARTICLES } from '../data/insightsData';

export default function Insights() {
  const { openConsultation } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Landmark Verdicts & Press', 'Real Estate & Title Law', 'Intellectual Property & Trademarks', 'Banking & Commercial Recovery'];

  const filteredArticles = INSIGHTS_ARTICLES.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Legal Insights & Practice Guides | GD Pandya Associates, Jamnagar</title>
        <meta
          name="description"
          content="Authoritative legal guides and statutory analysis on property title search, trademark registration, and cheque bounce laws in Jamnagar and Gujarat by Advocate Gaurav D. Pandya."
        />
        <meta
          name="keywords"
          content="Gujarat legal guides, property title search Jamnagar, trademark registration Gujarat, cheque bounce Section 138 lawyer, law firm blog Jamnagar"
        />
        <link rel="canonical" href="https://advocate-pandya.com/insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocate-pandya.com/insights" />
        <meta property="og:title" content="Legal Insights & Practical Guides | GD Pandya Associates" />
        <meta
          property="og:description"
          content="Practical legal guidance for individuals and businesses across Gujarat on property verification, trademark registration, and banking litigation."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://advocate-pandya.com/' },
              { '@type': 'ListItem', position: 2, name: 'Legal Insights', item: 'https://advocate-pandya.com/insights' },
            ],
          })}
        </script>
      </Helmet>

      <div className="bg-[#F7FAFC] py-16 lg:py-24 text-[#0E1F33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-3 pb-8 border-b border-[rgba(14,31,51,0.10)]">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#A8803A]">
              Practical Jurisprudence &amp; Guidance
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
              Legal Insights &amp; Practice Guides
            </h1>
            <p className="text-sm sm:text-base text-[#4A5B70] leading-relaxed pt-2">
              Statutory analysis, procedural timelines, and due-diligence protocols for citizens and businesses across Jamnagar, Saurashtra, and Gujarat. Authored by our chamber advocates.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0E1F33] text-white shadow-xs'
                      : 'bg-white text-[#4A5B70] border border-[rgba(14,31,51,0.10)] hover:text-[#0E1F33] hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative max-w-xs w-full">
              <Search className="w-4 h-4 text-[#738499] absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search legal guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-[rgba(14,31,51,0.12)] rounded-lg text-[#0E1F33] placeholder:text-[#738499] focus:outline-none focus:border-[#A8803A]"
              />
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="rounded-xl bg-white border border-[rgba(14,31,51,0.10)] card-shadow overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Newspaper Notice Thumbnail (if present) */}
                  {article.noticeImage && (
                    <div className="relative aspect-[16/9] bg-[#EEF3F8] overflow-hidden border-b border-[rgba(14,31,51,0.08)]">
                      <img
                        src={article.noticeImage}
                        alt={article.title}
                        className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300 filter contrast-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#0E1F33] border border-[rgba(14,31,51,0.12)] shadow-xs">
                          {article.newspaper || 'Press Record'}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-7 space-y-3.5">
                    <div className="flex items-center justify-between text-[11px] text-[#738499]">
                      <span className="font-semibold text-[#A8803A] uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" strokeWidth={1.5} />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl font-normal text-[#0E1F33] group-hover:text-[#A8803A] transition-colors leading-snug">
                      <Link to={`/insights/${article.slug}`}>
                        {article.shortTitle}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#4A5B70] leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-[rgba(14,31,51,0.06)] flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <img
                        src={article.author.image}
                        alt={article.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[rgba(14,31,51,0.10)]"
                        loading="lazy"
                        width="28"
                        height="28"
                      />
                      <div className="text-[11px] leading-tight">
                        <span className="font-medium text-[#0E1F33] block">{article.author.name}</span>
                        <span className="text-[#738499]">{article.publishDate}</span>
                      </div>
                    </div>

                    <Link
                      to={`/insights/${article.slug}`}
                      className="inline-flex items-center text-xs font-semibold text-[#0E1F33] group-hover:text-[#A8803A] transition-colors"
                    >
                      <span>Read {article.noticeImage ? 'Verdict' : 'Guide'}</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Consultation CTA Strip */}
          <div className="mt-16 rounded-xl bg-[#EEF3F8] border border-[rgba(14,31,51,0.10)] p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-serif text-xl font-normal text-[#0E1F33]">
                Need tailored counsel for a specific legal matter?
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5B70]">
                Our advocates review property documents, trademark objections, and litigation cases directly in chambers.
              </p>
            </div>
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold text-white bg-[#0E1F33] hover:bg-[#162C47] rounded-lg shadow-sm transition-colors shrink-0"
            >
              <span>Schedule Chamber Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" strokeWidth={1.5} />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

