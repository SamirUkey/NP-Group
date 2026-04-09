import { Code, Trophy, Home, Users, Hammer, CheckCircle } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      company: 'NP Tech Solution',
      icon: <Code className="w-10 h-10" />,
      color: 'from-blue-500 to-blue-700',
      services: [
        {
          title: 'Software Development',
          description: 'Custom enterprise solutions tailored to your business needs',
          features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
        },
        {
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure and migration services',
          features: ['Cloud Migration', 'DevOps', 'Infrastructure Management', 'Cloud Security']
        },
        {
          title: 'Digital Transformation',
          description: 'Modernize your business with cutting-edge technology',
          features: ['Process Automation', 'AI Integration', 'Data Analytics', 'Digital Strategy']
        }
      ]
    },
    {
      company: 'NP Sports',
      icon: <Trophy className="w-10 h-10" />,
      color: 'from-green-500 to-green-700',
      services: [
        {
          title: 'Event Management',
          description: 'Professional organization of sports events and tournaments',
          features: ['Tournament Planning', 'Venue Management', 'Logistics Coordination', 'Media Coverage']
        },
        {
          title: 'Training Programs',
          description: 'Comprehensive athletic training and development',
          features: ['Youth Training', 'Professional Coaching', 'Fitness Programs', 'Skills Development']
        },
        {
          title: 'Sports Consulting',
          description: 'Expert guidance for sports organizations and athletes',
          features: ['Career Planning', 'Performance Analysis', 'Team Building', 'Sports Marketing']
        }
      ]
    },
    {
      company: 'NP Property Hold',
      icon: <Home className="w-10 h-10" />,
      color: 'from-orange-500 to-orange-700',
      services: [
        {
          title: 'Property Investment',
          description: 'Strategic real estate investment opportunities',
          features: ['Investment Analysis', 'Portfolio Management', 'Market Research', 'ROI Optimization']
        },
        {
          title: 'Land Development',
          description: 'Comprehensive land acquisition and development services',
          features: ['Site Selection', 'Planning & Zoning', 'Development Management', 'Infrastructure']
        },
        {
          title: 'Property Management',
          description: 'Full-service property maintenance and administration',
          features: ['Tenant Management', 'Maintenance Services', 'Rent Collection', 'Legal Compliance']
        }
      ]
    },
    {
      company: 'NP Manpower Supply',
      icon: <Users className="w-10 h-10" />,
      color: 'from-purple-500 to-purple-700',
      services: [
        {
          title: 'Recruitment Services',
          description: 'End-to-end talent acquisition solutions',
          features: ['Candidate Sourcing', 'Screening & Selection', 'Background Checks', 'Onboarding Support']
        },
        {
          title: 'Workforce Management',
          description: 'Comprehensive workforce planning and optimization',
          features: ['Staff Scheduling', 'Performance Tracking', 'Training Coordination', 'Compliance Management']
        },
        {
          title: 'Executive Search',
          description: 'Specialized recruitment for leadership positions',
          features: ['C-Level Recruitment', 'Leadership Assessment', 'Succession Planning', 'Executive Coaching']
        }
      ]
    },
    {
      company: 'NP Design and Construction',
      icon: <Hammer className="w-10 h-10" />,
      color: 'from-red-500 to-red-700',
      services: [
        {
          title: 'Architectural Design',
          description: 'Innovative and functional architectural solutions',
          features: ['Concept Development', '3D Visualization', 'Technical Drawings', 'Interior Design']
        },
        {
          title: 'Construction Management',
          description: 'Professional oversight of construction projects',
          features: ['Project Planning', 'Budget Management', 'Quality Control', 'Safety Compliance']
        },
        {
          title: 'Infrastructure Development',
          description: 'Large-scale infrastructure and civil engineering',
          features: ['Roads & Highways', 'Utilities', 'Public Facilities', 'Urban Planning']
        }
      ]
    }
  ];

  return (
    <div id="services" className="pt-16 bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions across multiple industries, delivered with excellence and innovation.
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.color} text-white rounded-xl mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{category.company}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-gray-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className={`w-5 h-5 bg-gradient-to-r ${category.color} text-transparent mr-2 mt-0.5 flex-shrink-0`} style={{ color: 'inherit' }} />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
