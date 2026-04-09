import { ExternalLink, Code, Trophy, Home, Users, Hammer } from 'lucide-react';

const Companies = () => {
  const companies = [
    {
      name: 'NP Tech Solution',
      icon: <Code className="w-12 h-12" />,
      tagline: 'Innovating the Digital Future',
      description: 'NP Tech Solution is your trusted partner for comprehensive IT services and digital transformation. We specialize in cutting-edge software development, innovative web and mobile applications, cloud solutions, and enterprise technology consulting.',
      services: ['Custom Software Development', 'Web & Mobile Apps', 'Cloud Solutions', 'IT Consulting', 'Digital Transformation', 'AI & Machine Learning'],
      url: 'https://np-tech-solution.vercel.app/',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'NP Sports',
      icon: <Trophy className="w-12 h-12" />,
      tagline: 'Excellence in Sports Management',
      description: 'NP Sports delivers world-class sports management services, organizing premier sporting events, and providing professional training programs. We nurture athletic talent and create memorable sporting experiences.',
      services: ['Sports Event Management', 'Athlete Training Programs', 'Sports Facility Management', 'Tournament Organization', 'Sports Consulting', 'Youth Development'],
      url: 'https://np-sports.vercel.app/',
      color: 'from-green-500 to-green-700',
      bgColor: 'bg-green-50'
    },
    {
      name: 'NP Property Hold',
      icon: <Home className="w-12 h-12" />,
      tagline: 'Building Your Property Portfolio',
      description: 'NP Property Hold is a premier real estate investment and property management company. We offer strategic property acquisition, land development, commercial real estate solutions, and investment advisory services.',
      services: ['Property Investment', 'Real Estate Consulting', 'Land Development', 'Commercial Properties', 'Property Management', 'Investment Advisory'],
      url: 'https://np-property-hold.vercel.app/',
      color: 'from-orange-500 to-orange-700',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'NP Manpower Supply',
      icon: <Users className="w-12 h-12" />,
      tagline: 'Your Workforce Partner',
      description: 'NP Manpower Supply provides comprehensive staffing and recruitment solutions. We connect talented professionals with organizations, offering permanent placement, temporary staffing, and complete workforce management services.',
      services: ['Recruitment Services', 'Temporary Staffing', 'Executive Search', 'Workforce Management', 'HR Consulting', 'Talent Acquisition'],
      url: 'https://np-manpower.vercel.app/',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'bg-purple-50'
    },
    {
      name: 'NP Design and Construction',
      icon: <Hammer className="w-12 h-12" />,
      tagline: 'Building Tomorrow Today',
      description: 'NP Design and Construction delivers innovative architectural design and superior construction services. From residential projects to large-scale infrastructure, we bring visions to life with precision and quality.',
      services: ['Architectural Design', 'Construction Management', 'Infrastructure Development', 'Residential Construction', 'Commercial Buildings', 'Project Planning'],
      url: 'https://np-design-construction.vercel.app/',
      color: 'from-red-500 to-red-700',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div id="companies" className="pt-16 bg-gray-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Companies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of industry-leading companies, each delivering exceptional value in their respective sectors.
            </p>
          </div>

          <div className="space-y-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`${company.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div>
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${company.color} text-white rounded-2xl mb-6`}>
                      {company.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{company.name}</h3>
                    <p className="text-lg font-semibold text-gray-700 mb-4">{company.tagline}</p>
                    <p className="text-gray-700 mb-6 leading-relaxed">{company.description}</p>
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center bg-gradient-to-r ${company.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Visit Website
                      <ExternalLink className="ml-2" size={18} />
                    </a>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Key Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {company.services.map((service, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${company.color} rounded-full`}></div>
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Companies;
