import { Target, Eye, Heart, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and ethical behavior in all our business dealings.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, continuously improving our services and solutions.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We embrace change and continuously seek innovative solutions to meet evolving needs.'
    }
  ];

  const leadership = [
    {
      name: 'John Anderson',
      position: 'Group CEO',
      description: 'Leading NP Group with over 20 years of experience in business development and strategic management.'
    },
    {
      name: 'Sarah Mitchell',
      position: 'Chief Operating Officer',
      description: 'Overseeing operations across all subsidiaries with expertise in organizational excellence.'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Financial Officer',
      description: 'Managing financial strategy and investment decisions with a proven track record of success.'
    }
  ];

  return (
    <div id="about" className="pt-16 bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About NP Group</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              NP Group is a dynamic multi-industry conglomerate with a proven track record of excellence across technology, sports, real estate, manpower, and construction sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Eye className="w-10 h-10 text-blue-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a globally recognized business group that transforms industries through innovation, excellence, and sustainable practices, creating lasting value for all stakeholders.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <Target className="w-10 h-10 text-blue-900 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver exceptional solutions across diverse industries, empowering businesses and communities through innovation, integrity, and unwavering commitment to excellence.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-900 text-white rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-blue-900 transition-all duration-300 hover:shadow-lg">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 text-center mb-2">{leader.name}</h4>
                  <p className="text-blue-900 font-semibold text-center mb-3">{leader.position}</p>
                  <p className="text-gray-600 text-center leading-relaxed">{leader.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
