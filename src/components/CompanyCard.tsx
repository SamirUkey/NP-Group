import { ExternalLink } from 'lucide-react';

interface CompanyCardProps {
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
}

const CompanyCard = ({ name, description, url, icon, color }: CompanyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <div className="p-6">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700 transition-colors duration-200"
        >
          Visit Website
          <ExternalLink className="ml-2" size={18} />
        </a>
      </div>
    </div>
  );
};

export default CompanyCard;
