import { ArrowLeft, Image, Users, Camera, ChevronDown, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Media() {
  const [isOCDropdownOpen, setIsOCDropdownOpen] = useState(false);
  const [isClosingDropdownOpen, setIsClosingDropdownOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/media/black-background.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-6">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center">
            <div className="w-32 h-20 mx-auto mb-4 overflow-hidden">
              <img
                src="/media/symbol-white.png"
                alt="SRM MUN 2026"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold mb-2">Gallery</h1>
            <p className="text-gray-300 text-sm">Official Media Release - SRM MUN 2026</p>
          </div>
        </div>

        {/* Media Links */}
        <div className="space-y-4">
          
          {/* IPP Drive */}
          <a href="https://drive.google.com/drive/folders/1JIqH2VQZ8ll1r1ZRIpsCIsMoENt-fdkn?usp=sharing" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Image size={32} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">IPP Drive</h3>
                  <p className="text-gray-300 text-sm">
                    Official coverage of SRM MUN 2026 by the delegates of International Press Photojournalism.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Media Team Drive */}
          <a href="https://drive.google.com/drive/folders/1GVg8d9F0A_U0Zrf4Nt8QeiqnkArVNK-x?usp=sharing" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <Users size={32} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">Event Coverage Drive</h3>
                  <p className="text-gray-300 text-sm">
                    Catch up on the official event coverage drive for SRM MUN 2026.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* OC Photos Drive with Dropdown */}
          <div>
            <div 
              onClick={() => setIsOCDropdownOpen(!isOCDropdownOpen)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Camera size={32} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-xl mb-2">OC Photos Drive</h3>
                      <p className="text-gray-300 text-sm">
                        Organizing Committee photos and behind the scenes content for SRM MUN 2026
                      </p>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-gray-300 transition-transform duration-300 ${isOCDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isOCDropdownOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-2 pl-4">
                {/* Camera Pictures */}
                <a 
                  href="https://drive.google.com/drive/folders/1Vq18M4ZDTmw9Du_zfakdGCANwhkzkAOu?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center flex-shrink-0">
                      <Camera size={20} strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-base">Camera Pictures</h4>
                  </div>
                </a>

                {/* Control Room Pictures */}
                <a 
                  href="https://drive.google.com/drive/folders/1WQarvNjMQgBDmiN7Nj3-vyvRF0cJJtzA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-base">Control Room Coverage</h4>
                  </div>
                </a>

                {/* End Credits Clips */}
                <a 
                  href="https://drive.google.com/drive/folders/1CNr9mkl30mhK139iskUTMXq9AX1Hh8Ea" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center flex-shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-base">End Credits Clips</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Closing Ceremony Coverage with Dropdown */}
          <div>
            <div 
              onClick={() => setIsClosingDropdownOpen(!isClosingDropdownOpen)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Closing Ceremony - Clips</h3>
                      <p className="text-gray-300 text-sm">
                        Video coverage from the closing ceremony of SRM MUN 2026
                      </p>
                    </div>
                    <ChevronDown 
                      size={24} 
                      className={`text-gray-300 transition-transform duration-300 ${isClosingDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown Menu */}
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isClosingDropdownOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="space-y-2 pl-4">
                {/* iPhone */}
                <a 
                  href="https://drive.google.com/drive/folders/1jXPu74YT4qNFE20O2BZjD9FjLRxwxOkc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Smartphone size={20} strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-base">iPhone</h4>
                  </div>
                </a>

                {/* Camera */}
                <a 
                  href="https://drive.google.com/drive/folders/1rNnDf1xLCwuqDQ5wJtJ79TwxRe3_5msb?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="block bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Camera size={20} strokeWidth={2} />
                    </div>
                    <h4 className="font-semibold text-base">Camera</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          2026 / SRM MUN Society
        </div>
      </div>
    </div>
  );
}

export default Media;
