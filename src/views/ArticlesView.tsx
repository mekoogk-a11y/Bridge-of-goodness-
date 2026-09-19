import React, { useState } from 'react';
import { PageId, Language, Article } from '../types';
import { FEATURED_MASTER_ARTICLE, ALL_ARTICLES } from '../data/contentData';
import { FileText, Search, User, Calendar, Clock, Tag, ArrowRight, ArrowLeft, Share2, Sparkles, BookOpen } from 'lucide-react';

interface ArticlesViewProps {
  pageId: PageId;
  onNavigate: (page: PageId) => void;
  lang: Language;
}

export const ArticlesView: React.FC<ArticlesViewProps> = ({ pageId, onNavigate, lang }) => {
  const isEn = lang === 'en';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(
    pageId === 'featured-article' ? FEATURED_MASTER_ARTICLE : null
  );

  const categories = [
    { id: 'all', labelAr: 'كافة المقالات', labelEn: 'All Articles' },
    { id: 'South Sudan', labelAr: 'جنوب السودان', labelEn: 'South Sudan' },
    { id: 'Education', labelAr: 'التعليم', labelEn: 'Education' },
    { id: 'Health', labelAr: 'الصحة', labelEn: 'Health' },
    { id: 'Youth', labelAr: 'الشباب', labelEn: 'Youth' },
    { id: 'Water', labelAr: 'المياه', labelEn: 'Water' },
    { id: 'Food Security', labelAr: 'الأمن الغذائي', labelEn: 'Food Security' },
    { id: 'Humanitarian', labelAr: 'الإغاثة والكرامة', labelEn: 'Humanitarian' },
    { id: 'Development', labelAr: 'الفكر التنموي', labelEn: 'Development' },
  ];

  const filteredArticles = ALL_ARTICLES.filter((art) => {
    const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      art.titleAr.toLowerCase().includes(q) ||
      art.titleEn.toLowerCase().includes(q) ||
      art.authorAr.toLowerCase().includes(q) ||
      art.excerptAr.toLowerCase().includes(q);
    return matchesCategory && (searchQuery === '' || matchesSearch);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header with Breadcrumb */}
      <div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-2">
          <button onClick={() => onNavigate('home')} className="hover:text-[#087EA4]">
            {isEn ? 'Home' : 'الرئيسية'}
          </button>
          <span>/</span>
          <span className="text-[#087EA4]">
            {pageId === 'featured-article' && (isEn ? 'Master Editorial' : 'المقال الرئيسي')}
            {pageId === 'articles' && (isEn ? 'Articles & Blog' : 'المقالات والأفكار')}
            {pageId === 'news' && (isEn ? 'Foundational News' : 'أخبار مرحلة التأسيس')}
            {pageId === 'hope-stories' && (isEn ? 'Stories of Resilience' : 'قصص الأمل')}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#092B3A] tracking-tight">
              {isEn ? 'Editorial & Knowledge Hub' : 'المنصة المعرفية والمقالات التحريرية'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              {isEn
                ? 'Essays, research perspectives, and conceptual reflections on human development, community resilience, and sustainable future pathways in South Sudan.'
                : 'رؤى فكرية ودراسات تنموية وتحليلات سياقية تستكشف سبل الانتقال بالإنسان والمجتمع في جنوب السودان من الحاجة إلى الفرصة والإنتاج.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedArticle(FEATURED_MASTER_ARTICLE);
                onNavigate('featured-article');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                pageId === 'featured-article'
                  ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              ⭐ {isEn ? 'Master Editorial' : 'المقال الرئيسي'}
            </button>
            <button
              onClick={() => {
                setSelectedArticle(null);
                onNavigate('articles');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                pageId === 'articles'
                  ? 'bg-[#092B3A] text-[#F2B84B] shadow'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              📚 {isEn ? 'All Articles' : 'كافة المقالات'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. IF A SINGLE ARTICLE IS SELECTED OR PAGE IS FEATURED ARTICLE */}
      {selectedArticle ? (
        <article className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 border border-slate-200 shadow-xl space-y-8">
          {/* Top Meta info */}
          <div className="space-y-4 border-b border-slate-100 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#087EA4]/10 text-[#087EA4]">
                {selectedArticle.category}
              </span>

              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedArticle.date || selectedArticle.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedArticle.readTime || (isEn ? selectedArticle.readTimeEn : selectedArticle.readTimeAr)}
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#092B3A] leading-tight">
              {isEn ? selectedArticle.titleEn : selectedArticle.titleAr}
            </h2>

            {/* Author Box */}
            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-12 rounded-2xl bg-[#092B3A] text-[#F2B84B] flex items-center justify-center font-bold text-base">
                KZ
              </div>
              <div>
                <h3 className="font-bold text-sm text-[#092B3A]">
                  {isEn ? selectedArticle.authorEn : selectedArticle.authorAr}
                </h3>
                <p className="text-xs text-slate-500">
                  {isEn ? 'Development Writer & Vision Co-Author' : 'كاتب وباحث تنموي - صاحب الفكرة'}
                </p>
              </div>
            </div>
          </div>

          {/* Mandatory Editorial Disclaimer */}
          <div className="p-4 bg-[#F8FAFC] rounded-2xl border-s-4 border-[#087EA4] text-xs text-slate-700 leading-relaxed italic">
            {isEn
              ? 'Notice: This editorial reflects an intellectual developmental perspective within the conceptual framework of Bridges of Goodness, and does not constitute an official statistical report.'
              : '«هذا المقال يعبر عن رؤية تحريرية ضمن التصور الفكري لمبادرة جسور الخير، وليس تقريراً إحصائياً رسمياً.»'}
          </div>

          {/* Article Banner Image */}
          {selectedArticle.imageUrl && (
            <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg bg-slate-900">
              <img
                src={selectedArticle.imageUrl}
                alt={isEn ? selectedArticle.titleEn : selectedArticle.titleAr}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          )}

          {/* Article Full Body */}
          <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed text-base sm:text-lg space-y-6">
            {(isEn ? selectedArticle.contentEn : selectedArticle.contentAr)
              .split('\n\n')
              .map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3
                      key={index}
                      className="text-xl sm:text-2xl font-black text-[#092B3A] pt-4 border-t border-slate-100"
                    >
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return <p key={index}>{paragraph}</p>;
              })}
          </div>

          {/* Return button */}
          <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedArticle(null);
                onNavigate('articles');
              }}
              className="text-xs sm:text-sm font-bold text-[#087EA4] hover:text-[#092B3A] flex items-center gap-1.5"
            >
              {isEn ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              <span>{isEn ? 'Back to All Articles' : 'العودة لقائمة المقالات'}</span>
            </button>
          </div>
        </article>
      ) : (
        /* 3. ARTICLES FEED WITH SEARCH AND CATEGORIES */
        <div className="space-y-8">
          {/* Search and Filters Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEn ? 'Search articles, topics, author...' : 'بحث في المقالات والموضوعات...'}
                className="w-full text-xs sm:text-sm ps-9 pe-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#087EA4]"
              />
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`text-xs px-3 py-1.5 rounded-xl transition-all ${
                    selectedCategory === c.id
                      ? 'bg-[#092B3A] text-[#F2B84B] font-bold shadow-sm'
                      : 'bg-[#F8FAFC] text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {isEn ? c.labelEn : c.labelAr}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.map((art) => (
              <div
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                className="bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#087EA4] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {art.imageUrl && (
                    <div className="relative h-44 -mx-6 -mt-6 mb-5 overflow-hidden bg-slate-100">
                      <img
                        src={art.imageUrl}
                        alt={isEn ? art.titleEn : art.titleAr}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#087EA4]/10 text-[#087EA4]">
                      {art.category}
                    </span>
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime || (isEn ? art.readTimeEn : art.readTimeAr)}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#092B3A] group-hover:text-[#087EA4] transition-colors leading-snug mb-2">
                    {isEn ? art.titleEn : art.titleAr}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {isEn ? art.excerptEn : art.excerptAr}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700">
                    {isEn ? art.authorEn : art.authorAr}
                  </span>
                  <span className="font-bold text-[#087EA4] flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">
                    <span>{isEn ? 'Read article' : 'قراءة المقال'}</span>
                    {isEn ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700">
                {isEn ? 'No articles match your search criteria.' : 'لم يتم العثور على مقالات مطابقة لبحثك.'}
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 text-xs text-[#087EA4] font-bold underline"
              >
                {isEn ? 'Reset filters' : 'إعادة ضبط البحث'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
