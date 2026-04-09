import { useState } from 'react';
import { Code, Trophy, Home, Users, Hammer } from 'lucide-react';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'Sports', 'Real Estate', 'Manpower', 'Construction'];

  const projects = [
    {
      title: 'Enterprise Resource Planning System',
      category: 'Technology',
      company: 'NP Tech Solution',
      description: 'Developed a comprehensive ERP system for a multinational corporation, streamlining operations across 15 countries.',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-700',
      stats: ['500+ Users', '15 Countries', '99.9% Uptime']
    },
    {
      title: 'National Sports Championship',
      category: 'Sports',
      company: 'NP Sports',
      description: 'Organized and managed a national-level sports championship with over 2,000 participants and 50,000 spectators.',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-green-500 to-green-700',
      stats: ['2000+ Athletes', '50k Spectators', '10 Sports']
    },
    {
      title: 'Skyline Commercial Complex',
      category: 'Real Estate',
      company: 'NP Property Hold',
      description: 'Developed a premium commercial complex featuring retail spaces, offices, and entertainment facilities.',
      icon: <Home className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-700',
      stats: ['200k sq ft', '100+ Tenants', '$50M Value']
    },
    {
      title: 'Global Tech Staffing Initiative',
      category: 'Manpower',
      company: 'NP Manpower Supply',
      description: 'Successfully recruited and placed 500+ IT professionals for leading technology companies worldwide.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-700',
      stats: ['500+ Placements', '50+ Companies', '20 Countries']
    },
    {
      title: 'Modern Residential Township',
      category: 'Construction',
      company: 'NP Design and Construction',
      description: 'Designed and constructed a sustainable residential township with 300 homes, parks, and community facilities.',
      icon: <Hammer className="w-6 h-6" />,
      color: 'from-red-500 to-red-700',
      stats: ['300 Homes', '50 Acres', 'LEED Certified']
    },
    {
      title: 'AI-Powered Healthcare Platform',
      category: 'Technology',
      company: 'NP Tech Solution',
      description: 'Built an innovative healthcare platform using AI for patient management and diagnostic assistance.',
      icon: <Code className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-700',
      stats: ['100k+ Patients', 'AI-Powered', '50+ Hospitals']
    },
    {
      title: 'Youth Sports Development Program',
      category: 'Sports',
      company: 'NP Sports',
      description: 'Established a comprehensive youth sports program training 1,000+ young athletes annually.',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-green-500 to-green-700',
      stats: ['1000+ Youth', '20 Coaches', '5 Sports']
    },
    {
      title: 'Luxury Waterfront Villas',
      category: 'Real Estate',
      company: 'NP Property Hold',
      description: 'Developed exclusive waterfront villas featuring premium amenities and stunning views.',
      icon: <Home className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-700',
      stats: ['50 Villas', 'Waterfront', 'Luxury Amenities']
    },
    {
      title: 'Corporate Restructuring Project',
      category: 'Manpower',
      company: 'NP Manpower Supply',
      description: 'Managed workforce transition for a major corporate merger, relocating and training 200+ employees.',
      icon: <Users className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-700',
      stats: ['200+ Employees', 'Zero Layoffs', '100% Success']
    },
    {
      title: 'Smart City Infrastructure',
      category: 'Construction',
      company: 'NP Design and Construction',
      description: 'Delivered critical infrastructure including roads, utilities, and public facilities for a smart city project.',
      icon: <Hammer className="w-6 h-6" />,
      color: 'from-red-500 to-red-700',
      stats: ['10km Roads', 'Smart Systems', '$100M Project']
    }
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div id="projects" className="pt-16 bg-gray-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects across various industries.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${project.color} text-white rounded-lg mb-4`}>
                    {project.icon}
                  </div>
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-gray-500">{project.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stats.map((stat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {stat}
                      </span>
                    ))}
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

export default Projects;
