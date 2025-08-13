
// import { useState } from 'react';
// import { Globe, ChevronDown } from 'lucide-react';
// import { useInternationalization } from '@/hooks/useInternationalization';

// export const LanguageSelector = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { currentCountry, setCountry, countries } = useInternationalization();

//   const handleCountrySelect = (countryCode: string) => {
//     setCountry(countryCode);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
//       >
//         <Globe className="h-5 w-5 text-gray-700" />
//         <span className="text-sm font-medium">{currentCountry.flag} {currentCountry.language.toUpperCase()}</span>
//         <ChevronDown className="h-4 w-4 text-gray-500" />
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//           <div className="py-2">
//             {countries.map((country) => (
//               <button
//                 key={country.code}
//                 onClick={() => handleCountrySelect(country.code)}
//                 className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
//                   currentCountry.code === country.code ? 'bg-blue-50 text-blue-600' : ''
//                 }`}
//               >
//                 <span className="flex items-center space-x-3">
//                   <span>{country.flag}</span>
//                   <span>{country.name}</span>
//                   <span className="text-sm text-gray-500">({country.language.toUpperCase()})</span>
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// import { useState } from 'react';
// import { Globe, ChevronDown } from 'lucide-react';
// import { useInternationalization } from '@/hooks/useInternationalization';

// export const LanguageSelector = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const { currentCountry, setCountry, countries } = useInternationalization();

//   const handleCountrySelect = (countryCode: string) => {
//     setCountry(countryCode);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
//       >
//         <Globe className="h-5 w-5 text-gray-700" />
//         <span className="text-sm font-medium">
//           {currentCountry.flag} {currentCountry.language.toUpperCase()}
//         </span>
//         <ChevronDown className="h-4 w-4 text-gray-500" />
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
//           <div className="py-2 max-h-60 overflow-y-auto"> {/* Scrollable container */}
//             {countries.map((country) => (
//               <button
//                 key={country.code}
//                 onClick={() => handleCountrySelect(country.code)}
//                 className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
//                   currentCountry.code === country.code ? 'bg-blue-50 text-blue-600' : ''
//                 }`}
//               >
//                 <span className="flex items-center space-x-3">
//                   <span>{country.flag}</span>
//                   <span>{country.name}</span>
//                   <span className="text-sm text-gray-500">({country.language.toUpperCase()})</span>
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useInternationalization } from '@/hooks/useInternationalization';

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { currentCountry, setCountry, countries } = useInternationalization();

  const handleCountrySelect = (countryCode: string) => {
    setCountry(countryCode);
    setIsOpen(false);
    setSearchTerm(''); // reset search after selection
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <Globe className="h-5 w-5 text-gray-700" />
        <span className="text-sm font-medium">
          {currentCountry.flag} {currentCountry.language.toUpperCase()}
        </span>
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-2">
            <input
              type="text"
              placeholder="Search language..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div className="py-2 max-h-60 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleCountrySelect(country.code)}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                    currentCountry.code === country.code ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  <span className="flex items-center space-x-3">
                    <span>{country.flag}</span>
                    <span>{country.name}</span>
                    <span className="text-sm text-gray-500">
                      ({country.language.toUpperCase()})
                    </span>
                  </span>
                </button>
              ))
            ) : (
              <p className="text-center text-sm text-gray-500 px-4 py-2">No languages found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
