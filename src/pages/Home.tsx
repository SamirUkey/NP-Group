import { ArrowRight, Building2, Users, TrendingUp, Award } from 'lucide-react';
import CompanyCard from '../components/CompanyCard';

const Home = () => {
  const companies = [
    {
      name: 'NP Design and Construction',
      description: 'Innovative architecture, quality construction services, and modern infrastructure development.',
      url: 'https://np-design-construction.vercel.app/',
      icon: '🏗️',
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'NP Tech Solution',
      description: 'Leading IT services provider offering software development, web & app solutions, and digital transformation.',
      url: 'https://np-tech-solution.vercel.app/',
      icon: '💻',
      color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'NP Land Hold',
      description: 'Premium real estate services, property investment opportunities, and strategic land development.',
      url: 'https://np-property-hold.vercel.app/',
      icon: '🏢',
      color: 'from-orange-500 to-orange-700'
    },
    {
      name: 'NP Sports',
      description: 'Professional sports management, event organization, and comprehensive training programs for athletes.',
      url: 'https://np-sports.vercel.app/',
      icon: '⚽',
      color: 'from-green-500 to-green-700'
    },
    
    {
      name: 'NP Manpower Supply',
      description: 'Comprehensive staffing solutions, recruitment services, and workforce management expertise.',
      url: 'https://np-manpower.vercel.app/',
      icon: '👥',
      color: 'from-purple-500 to-purple-700'
    },
    
  ];

  const highlights = [
    { icon: <Building2 className="w-8 h-8" />, value: '5+', label: 'Business Sectors' },
    { icon: <Users className="w-8 h-8" />, value: '1000+', label: 'Clients Served' },
    { icon: <TrendingUp className="w-8 h-8" />, value: '15+', label: 'Years Experience' },
    { icon: <Award className="w-8 h-8" />, value: '500+', label: 'Projects Completed' }
  ];

  return (
    <div id="home" className="pt-16">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Empowering Businesses
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Across Industries
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              NP Group is a diversified business conglomerate delivering excellence in technology, sports, real estate, manpower, and construction.
            </p>
            <button
              onClick={() => document.querySelector('#companies')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Companies
              <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-900 rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.value}</h3>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Companies</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our diverse portfolio of businesses, each excelling in their respective industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <CompanyCard key={index} {...company} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
