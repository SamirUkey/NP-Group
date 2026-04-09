import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'NP Tech Solution',
      location: 'New York, USA',
      type: 'Full-time',
      salary: '$120k - $160k',
      description: 'Join our innovative tech team to build cutting-edge software solutions for global clients.',
      requirements: ['5+ years experience', 'React/Node.js', 'Cloud platforms', 'Team leadership']
    },
    {
      title: 'Sports Event Manager',
      company: 'NP Sports',
      location: 'London, UK',
      type: 'Full-time',
      salary: '$70k - $90k',
      description: 'Organize and manage world-class sporting events and tournaments.',
      requirements: ['3+ years in sports management', 'Event planning', 'Team coordination', 'Budget management']
    },
    {
      title: 'Real Estate Investment Analyst',
      company: 'NP Property Hold',
      location: 'Dubai, UAE',
      type: 'Full-time',
      salary: '$80k - $110k',
      description: 'Analyze property investments and develop strategic acquisition plans.',
      requirements: ['Finance degree', 'Real estate experience', 'Market analysis', 'Financial modeling']
    },
    {
      title: 'Recruitment Specialist',
      company: 'NP Manpower Supply',
      location: 'Singapore',
      type: 'Full-time',
      salary: '$50k - $70k',
      description: 'Source and place top talent across various industries and regions.',
      requirements: ['2+ years recruitment', 'Communication skills', 'Client management', 'Talent assessment']
    },
    {
      title: 'Project Architect',
      company: 'NP Design and Construction',
      location: 'Toronto, Canada',
      type: 'Full-time',
      salary: '$90k - $120k',
      description: 'Lead architectural design for commercial and residential projects.',
      requirements: ['Architecture degree', '5+ years experience', 'AutoCAD/Revit', 'Project management']
    },
    {
      title: 'Full Stack Developer',
      company: 'NP Tech Solution',
      location: 'Remote',
      type: 'Contract',
      salary: '$100k - $140k',
      description: 'Build scalable web applications using modern technologies.',
      requirements: ['3+ years experience', 'JavaScript/TypeScript', 'React/Node.js', 'Database design']
    },
    {
      title: 'Athletic Trainer',
      company: 'NP Sports',
      location: 'Los Angeles, USA',
      type: 'Full-time',
      salary: '$55k - $75k',
      description: 'Develop and implement training programs for professional athletes.',
      requirements: ['Sports science degree', 'Training certification', 'Athlete development', 'Injury prevention']
    },
    {
      title: 'Property Manager',
      company: 'NP Property Hold',
      location: 'Sydney, Australia',
      type: 'Full-time',
      salary: '$65k - $85k',
      description: 'Oversee property operations and tenant relations for commercial buildings.',
      requirements: ['Property management experience', 'Communication skills', 'Legal knowledge', 'Problem-solving']
    }
  ];

  return (
    <div id="careers" className="pt-16 bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Join Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your career with NP Group. Explore exciting opportunities across our diverse portfolio of companies.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Work With Us?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-lg">Growth Opportunities</h4>
                <p className="text-blue-100">Advance your career across multiple industries with continuous learning and development.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Competitive Benefits</h4>
                <p className="text-blue-100">Enjoy comprehensive benefits packages including health insurance, retirement plans, and more.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-lg">Diverse Environment</h4>
                <p className="text-blue-100">Work in a multicultural, inclusive environment that values diversity and innovation.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-blue-900 font-semibold">{job.company}</p>
                  </div>
                  <Briefcase className="text-blue-900 w-8 h-8" />
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{job.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-900 text-sm rounded-full"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Don't See the Right Role?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
              Submit Your Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
