import { ArrowLeft, Image, Users, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

function Media() {
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
          <a href="#" target="_blank" rel="noopener noreferrer" className="block">
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
          <a href="#" target="_blank" rel="noopener noreferrer" className="block">
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

          {/* OC Photos Drive */}
          <a href="#" target="_blank" rel="noopener noreferrer" className="block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Camera size={32} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2">OC Photos Drive</h3>
                  <p className="text-gray-300 text-sm">
                    Organizing Committee photos and behind the scenes content for SRM MUN 2026
                  </p>
                </div>
              </div>
            </div>
          </a>

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
