import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useOutletContext } from 'react-router-dom';
import { BookOpen, Clock, Calendar, ArrowRight, ShieldCheck, Scale, Landmark, ChevronRight, Search, FileText } from 'lucide-react';
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
        <title>Legal Insights &amp; Landmark Verdicts | GD PANDYA ASSOCIATES, Jamnagar - 361001</title>
        <meta
          name="description"
          content="Authoritative legal articles, landmark court rulings, and public notices in Jamnagar - 361001 and Gujarat by GD PANDYA ASSOCIATES. Digjam Mill verdict, JADA compensation order, property title search, and trademark laws."
        />
        <meta
          name="keywords"
          content="Jamnagar court verdicts, Digjam Mill land case, JADA demolition case, Gujarat legal articles, property title search Jamnagar 361001, trademark registration Gujarat, cheque bounce Section 138 lawyer"
        />
        <link rel="canonical" href="https://advocate-pandya.com/insights" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advocate-pandya.com/insights" />
        <meta property="og:title" content="Legal Insights &amp; Published Notices | GD PANDYA ASSOCIATES" />
        <meta
          property="og:description"
          content="Landmark judgments, published court orders, and practice guides across Jamnagar - 361001 and Gujarat."
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
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)] text-xs font-semibold uppercase tracking-wider text-[#A8803A]">
              <span>Senior Experience with Young Enthusiasm</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0E1F33] tracking-tight">
              Legal Insights &amp; Published Notices.
            </h1>
            <p className="text-base sm:text-lg text-[#4A5B70] leading-relaxed">
              Landmark court verdicts, official press reports, and statutory legal guidance published by <strong>GD PANDYA ASSOCIATES</strong> across Jamnagar - 361001 and Gujarat.
            </p>
          </div>

          {/* Search & Category Filter Bar */}
          <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0E1F33] text-white shadow-xs'
                      : 'bg-white text-[#4A5B70] hover:text-[#0E1F33] border border-[rgba(14,31,51,0.10)] hover:bg-[#EEF3F8]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#738499] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search verdicts, notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 rounded-lg bg-white border border-[rgba(14,31,51,0.14)] text-xs text-[#0E1F33] placeholder-[#738499] focus:outline-none focus:border-[#A8803A] focus:ring-1 focus:ring-[#A8803A]"
              />
            </div>

          </div>

          {/* Articles Grid */}
          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-xl border border-[rgba(14,31,51,0.10)] card-shadow">
              <p className="font-serif text-lg text-[#0E1F33]">No legal insights match your search criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="mt-3 text-xs font-semibold text-[#A8803A] underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.slug}
                  className="rounded-xl bg-white border border-[rgba(14,31,51,0.10)] overflow-hidden card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Newspaper Document Thumbnail if available */}
                    {article.noticeImage ? (
                      <div className="relative aspect-[16/10] bg-[#EEF3F8] overflow-hidden border-b border-[rgba(14,31,51,0.08)]">
                        <img
                          src={article.noticeImage}
                          alt={article.title}
                          className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-[#0E1F33]/90 text-white text-[10px] uppercase font-semibold px-2 py-0.5 rounded shadow-xs">
                          {article.newspaper || 'Published Press'}
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 pb-0 flex items-center justify-between text-xs text-[#738499]">
                        <span className="inline-block px-2.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider text-[#A8803A] bg-[#EEF3F8] border border-[rgba(14,31,51,0.08)]">
                          {article.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3.5 h-3.5 mr-1" />
                          {article.readTime}
                        </span>
                      </div>
                    )}

                    <div className="p-6 space-y-3">
                      {article.noticeImage && (
                        <div className="flex items-center justify-between text-[11px] text-[#738499]">
                          <span className="font-semibold text-[#A8803A] uppercase tracking-wider">
                            {article.category}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-3.5 h-3.5 mr-1" />
                            {article.readTime}
                          </span>
                        </div>
                      )}

                      <h2 className="font-serif text-xl font-normal text-[#0E1F33] leading-snug group-hover:text-[#A8803A] transition-colors">
                        <Link to={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-[#4A5B70] leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-[rgba(14,31,51,0.06)] mt-4">
                    <div className="pt-3 flex items-center justify-between text-xs">
                      <span className="text-[#738499] flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.publishDate).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>

                      <Link
                        to={`/insights/${article.slug}`}
                        className="font-semibold text-[#0E1F33] group-hover:text-[#A8803A] inline-flex items-center transition-colors"
                      >
                        <span>Read analysis</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Consultation CTA Banner */}
          <div className="mt-16 p-8 rounded-2xl bg-white border border-[rgba(14,31,51,0.12)] card-shadow flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1 max-w-xl">
              <h3 className="font-serif text-2xl font-normal text-[#0E1F33]">
                Require legal counsel on an active property dispute or case notice?
              </h3>
              <p className="text-xs sm:text-sm text-[#4A5B70]">
                Schedule an in-person case scrutiny with Advocate Gaurav D. Pandya at our Jamnagar chambers.
              </p>
            </div>
            <button
              onClick={openConsultation}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0E1F33] hover:bg-[#162C47] text-white rounded-lg text-xs font-semibold shadow-sm transition-colors shrink-0 cursor-pointer"
            >
              <span>Schedule Case Review</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>
      </div>
    </>
  );
}
