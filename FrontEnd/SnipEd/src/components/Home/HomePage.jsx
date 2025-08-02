import React from "react";

// --- SVG Icons (Replaces lucide-react for portability) ---
const Play = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);
const ArrowRight = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
);
const Sparkles = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 3 3 9 9-3-9-3z"></path><path d="M12 12 9 3l-3 9 3 9 9-3z"></path><path d="m21 21-3-9-9 3 9 3z"></path></svg>
);
const Users = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);
const BookOpen = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);
const Zap = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);
const Star = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);
const TrendingUp = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
);
const Eye = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const Heart = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);

// --- Component Data ---
const categories = [
  { name: "Comedy", icon: "😂", gradient: "from-amber-400 via-orange-500 to-red-500", count: "2.1M", description: "Laugh out loud" },
  { name: "Tech", icon: "⚡", gradient: "from-blue-400 via-cyan-500 to-teal-500", count: "1.8M", description: "Future is now" },
  { name: "Coding", icon: "💻", gradient: "from-green-400 via-emerald-500 to-teal-500", count: "1.2M", description: "Build the future" },
  { name: "Education", icon: "🎓", gradient: "from-purple-400 via-violet-500 to-indigo-500", count: "950K", description: "Learn anything" },
  { name: "Skincare", icon: "✨", gradient: "from-pink-400 via-rose-500 to-red-500", count: "1.5M", description: "Glow up journey" },
];

const creators = [
  { name: "Alex Chen", category: "Tech", followers: "2.3M", avatar: "https://placehold.co/80x80/1a1a1a/fff/png?text=AC", verified: true },
  { name: "Sarah Kim", category: "Skincare", followers: "1.8M", avatar: "https://placehold.co/80x80/1a1a1a/fff/png?text=SK", verified: true },
  { name: "Mike Johnson", category: "Comedy", followers: "3.1M", avatar: "https://placehold.co/80x80/1a1a1a/fff/png?text=MJ", verified: true },
];

const features = [
    { icon: Zap, title: "Distraction-Free", description: "One category at a time. No mixed feeds. Pure focus.", gradient: "from-yellow-400 to-orange-500" },
    { icon: Users, title: "Expert Creators", description: "Learn from specialists who master their craft.", gradient: "from-purple-400 to-pink-500" },
    { icon: BookOpen, title: "Premium Courses", description: "Structured learning paths with certification.", gradient: "from-blue-400 to-cyan-500" },
];

const stats = [
    { label: "Active Creators", value: "50K+", icon: Users },
    { label: "Video Hours", value: "2M+", icon: Play },
    { label: "Course Sales", value: "$10M+", icon: TrendingUp },
    { label: "Happy Learners", value: "1M+", icon: Heart },
];


export default function LandingPage() {

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs md:text-sm font-medium text-gray-300">Live now: 50K+ creators online</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">Snip.</span><br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">Learn.</span><br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Master.</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            The world's first distraction-free learning platform. Snip knowledge into bite-sized content, focus deeply, and master skills through vertical videos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16 px-4">
            <a href="/auth">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 group">
                <Play className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:scale-110 transition-transform inline-block" />
                Start Learning Free
              </button>
            </a>
            <a href="/categories">
              <button className="w-full sm:w-auto border-2 border-white/20 text-white hover:bg-white/5 text-base md:text-lg px-8 md:px-12 py-4 md:py-6 rounded-xl md:rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent">
                Explore Categories
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 inline-block" />
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-white/5 to-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform backdrop-blur-sm border border-white/10">
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-purple-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Focus</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            One category. Zero distractions. Maximum learning.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-7xl mx-auto">
          {categories.map((category) => (
            <div key={category.name} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 cursor-pointer group hover:scale-105 hover:shadow-2xl rounded-lg">
              <div className="p-6 md:p-8 text-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${category.gradient} rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-2xl md:text-3xl">{category.icon}</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm mb-3 md:mb-4">{category.description}</p>
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Eye className="w-3 h-3 mr-1" />
                    {category.count}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Why <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">SnipEd</span>?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 rounded-lg">
              <div className="p-6 md:p-8 text-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Creators Spotlight */}
      <section className="relative z-10 container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            Meet Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Stars</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300">Top creators sharing their expertise</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {creators.map((creator, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 group hover:scale-105 rounded-lg">
              <div className="p-6 md:p-8 text-center">
                <div className="relative mb-4 md:mb-6">
                  <img src={creator.avatar} alt={creator.name} className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto border-4 border-purple-500/50 group-hover:border-purple-400 transition-colors" />
                  {creator.verified && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 md:-bottom-2 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-black">
                      <Star className="w-3 h-3 md:w-4 md:h-4 text-white fill-current" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2">{creator.name}</h3>
                <p className="text-purple-400 text-sm mb-1 md:mb-2">{creator.category} Expert</p>
                <p className="text-gray-400 text-sm">{creator.followers} followers</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl md:rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transform</span> Your Learning?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Join the revolution of focused, distraction-free education. Your future self will thank you.
            </p>
            <a href="/auth">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg md:text-xl px-12 md:px-16 py-6 md:py-8 rounded-xl md:rounded-2xl shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 group">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 group-hover:rotate-12 transition-transform inline-block" />
                Start Your Journey
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform inline-block" />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8 md:py-12 mt-12 md:mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-white">SnipEd</span>
            </div>
            <div className="text-gray-400 text-xs md:text-sm text-center">
              © 2025 SnipEd. Crafted with ❤ for focused learners.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}