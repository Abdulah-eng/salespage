import React, { useState, useEffect } from 'react';
import { ChevronDown, Star, Check, Lock, TrendingUp, Zap } from 'lucide-react';

const SalesPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    setAnimateElements(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    { icon: '📊', text: 'Step-by-step roadmap from $0 to $1 billion revenue' },
    { icon: '🔬', text: 'Insider secrets from Korean beauty manufacturing' },
    { icon: '💰', text: 'Exact pricing, margins & financial projections' },
    { icon: '🌟', text: 'Complete 100-company competitive intelligence' },
    { icon: '📱', text: 'Marketing strategy with proven channel allocation' },
    { icon: '⏰', text: 'Timeline: Launch to profitability in 18 months' }
  ];

  const testimonials = [
    {
      name: "Jennifer M.",
      role: "Beauty Entrepreneur",
      text: "This guide saved me 6 months of research. The manufacturer contacts alone are worth $2,000.",
      rating: 5
    },
    {
      name: "David K.",
      role: "E-commerce Founder",
      text: "The financial projections are incredibly detailed. Used them to secure $500K in funding.",
      rating: 5
    },
    {
      name: "Sarah L.",
      role: "Brand Consultant",
      text: "Finally, a complete resource that actually understands Korean supply chains. Worth every penny.",
      rating: 5
    }
  ];

  const sections = [
    {
      number: '01',
      title: 'Market Entry Blueprint',
      description: 'Discover how to launch your private label Korean beauty brand in 9 months with proven stage-by-stage guidance covering product development, regulatory compliance, and initial marketing.'
    },
    {
      number: '02',
      title: 'The Billion Dollar Playbook',
      description: 'Follow a detailed 10-year financial roadmap showing exactly how to scale from $3.6M (Year 1) to $1.2B+ revenue with realistic metrics at every stage.'
    },
    {
      number: '03',
      title: 'Korean Manufacturing Mastery',
      description: 'Access proprietary information on Korea\'s top 10 manufacturers, their capabilities, pricing structures, and how to negotiate contracts that protect your margins.'
    },
    {
      number: '04',
      title: '100 Company Intelligence Report',
      description: 'Complete analysis of industry leaders, emerging brands, and contract manufacturers. Understand competitive positioning, pricing strategies, and market opportunities.'
    },
    {
      number: '05',
      title: 'Marketing & Growth Strategy',
      description: 'Proven channel allocation model, influencer partnership tactics, and customer acquisition strategies that deliver 3-5x ROAS and build lasting brand equity.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Premium animated background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-emerald-500/20 py-3' : 'py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            K-BEAUTY
          </div>
          <button className="px-8 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-all transform hover:scale-105">
            Get Access Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`mb-6 transform transition-all duration-1000 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-sm font-semibold text-emerald-400 mb-8">
              🚀 THE BLUEPRINT THAT BUILT BILLION-DOLLAR K-BEAUTY EMPIRES
            </span>
          </div>

          <h1 className={`text-6xl lg:text-7xl font-black mb-8 leading-tight transform transition-all duration-1000 delay-200 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Build Your <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">$1 Billion</span> Korean Beauty Empire
          </h1>

          <p className={`text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-1000 delay-300 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            The complete playbook used by successful entrepreneurs to launch private label Korean beauty brands, scale to market dominance, and build billion-dollar valuations in the fastest-growing beauty segment globally.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-12 transform transition-all duration-1000 delay-400 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/50">
              Get the Complete Guide → $1,000
            </button>
            <button className="px-10 py-4 bg-slate-800 hover:bg-slate-700 border border-emerald-500/50 hover:border-emerald-400 rounded-xl font-bold text-lg transition-all">
              See Inside First
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center transform transition-all duration-1000 delay-500 ${animateElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">100+</div>
              <div className="text-slate-400 mt-2">Korean Beauty Companies Analyzed</div>
            </div>
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">$1B+</div>
              <div className="text-slate-400 mt-2">Revenue Roadmap (Year 7)</div>
            </div>
            <div>
              <div className="text-4xl font-black bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">7 Years</div>
              <div className="text-slate-400 mt-2">Path to Unicorn Status</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-emerald-400" />
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="relative z-10 py-24 px-6 border-t border-emerald-500/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">What You'll Get Inside</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-emerald-500/30 rounded-2xl hover:border-emerald-400/60 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
                style={{
                  animation: animateElements ? `slideIn 0.6s ease-out ${idx * 0.1}s both` : 'none'
                }}
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <p className="text-lg text-slate-200">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-20 text-center">The 5-Part Framework</h2>
          
          <div className="space-y-16">
            {sections.map((section, idx) => (
              <div key={idx} className="flex gap-12 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <span className="text-3xl font-black text-white">{section.number}</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-3xl font-bold mb-4 group-hover:text-emerald-400 transition-colors">{section.title}</h3>
                  <p className="text-lg text-slate-300 leading-relaxed">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Financial Proof Section */}
      <div className="relative z-10 py-24 px-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-y border-emerald-500/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">The Billion Dollar Path</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { year: 'Year 1', revenue: '$3.6M', status: 'Foundation' },
              { year: 'Year 3', revenue: '$72M', status: 'Acceleration' },
              { year: 'Year 5', revenue: '$600M', status: 'Maturation' },
              { year: 'Year 7', revenue: '$1.2B+', status: 'Domination' }
            ].map((milestone, idx) => (
              <div key={idx} className="p-8 bg-slate-800/60 border border-emerald-500/40 rounded-xl text-center hover:border-emerald-400 transition-all">
                <div className="text-sm font-semibold text-emerald-400 mb-2">{milestone.year}</div>
                <div className="text-4xl font-black mb-3">{milestone.revenue}</div>
                <div className="text-slate-400">{milestone.status}</div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/50 border border-emerald-500/30 rounded-2xl p-8">
            <p className="text-center text-slate-300 text-lg">
              <span className="font-bold text-emerald-400">This isn't theoretical.</span> These numbers are based on actual K-beauty company performance data, financial modeling from successful entrepreneurs, and proven market dynamics in the fastest-growing beauty segment.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">What Industry Leaders Say</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-emerald-500/30 rounded-2xl p-8 hover:border-emerald-400/60 transition-all transform hover:scale-105">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-emerald-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="relative z-10 py-24 px-6 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-y border-emerald-500/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">Inside the Guide</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Lock className="w-8 h-8 text-emerald-400" />
                Main Guide (33 Pages)
              </h3>
              <ul className="space-y-4">
                {[
                  'Complete market analysis & opportunity sizing',
                  '4-phase launch framework (Month 0-9)',
                  'Product development & sourcing guide',
                  'Branding & positioning strategy',
                  '10-year financial roadmap to $1B',
                  'Marketing channel allocation & ROAS',
                  'KPI benchmarks by growth stage',
                  'Risk management & contingencies'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Zap className="w-8 h-8 text-cyan-400" />
                Company Directory (20 Pages)
              </h3>
              <ul className="space-y-4">
                {[
                  'Tier 1: Mega-cap conglomerates ($1B+)',
                  'Tier 2: Large-cap established brands',
                  'Tier 3-4: Mid-cap & emerging brands',
                  'Tier 5: Contract manufacturers (ODM/OEM)',
                  '10 detailed manufacturer profiles',
                  'Tier 6: Tech-driven startups',
                  'Tier 7: International K-beauty leaders',
                  'Performance metrics by tier'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <Check className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Value Breakdown */}
      <div className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">Why This Guide is Worth $1,000+</h2>
          
          <div className="space-y-6">
            {[
              {
                value: '$15,000+',
                breakdown: 'Typical cost for K-beauty market research reports (Mordor Intelligence, Grand View Research)',
              },
              {
                value: '$20,000+',
                breakdown: 'Business consultant fees for 20-40 hours of beauty industry strategy work',
              },
              {
                value: '$8,000+',
                breakdown: 'Value of manufacturer contact networks and sourcing relationships included',
              },
              {
                value: '$5,000+',
                breakdown: 'Cost of financial modeling and projections from industry experts',
              },
              {
                value: '$3,000+',
                breakdown: 'Estimated value from competitive intelligence on 100 companies',
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start p-6 bg-slate-800/40 border border-emerald-500/30 rounded-xl">
                <div className="text-3xl font-black text-emerald-400 min-w-fit">{item.value}</div>
                <div className="text-slate-300 pt-1">{item.breakdown}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/50 rounded-2xl text-center">
            <div className="text-4xl font-black mb-4">Total Value: $51,000+</div>
            <div className="text-xl text-slate-300">Your investment: <span className="font-bold text-emerald-400">$1,000</span></div>
            <div className="text-lg text-slate-400 mt-4">ROI: <span className="text-emerald-400 font-bold">5,000%+</span></div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-32 px-6 border-t border-emerald-500/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-black mb-8">Ready to Build Your Billion Dollar Brand?</h2>
          
          <p className="text-xl text-slate-300 mb-12">
            The Korean beauty market is growing 12.5% annually. Every month you wait, new competitors enter. Get the complete playbook today and start building.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="px-12 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/50">
              Get Instant Access → $1,000
            </button>
          </div>

          <p className="text-slate-400 text-sm">
            ✓ Instant digital delivery (PDF) · ✓ Lifetime access · ✓ 30-day money-back guarantee
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-emerald-500/20 py-12 px-6 text-center text-slate-400">
        <p>© 2024 K-Beauty Business Guide. All rights reserved.</p>
        <p className="mt-4 text-sm">Built for entrepreneurs serious about building beauty empires.</p>
      </footer>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default SalesPage;
