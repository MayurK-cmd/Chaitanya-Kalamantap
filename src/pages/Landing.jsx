import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Zap,
  Clock,
  AlertCircle,
  CheckCircle,
  IndianRupee,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Import hero image
import heroImage from '../assets/images/hero.jpg';

// Import gallery images
import gallery1 from '../assets/images/gallery/image1.jpg';
import gallery2 from '../assets/images/gallery/image2.jpg';
import gallery3 from '../assets/images/gallery/image3.jpg';
import gallery4 from '../assets/images/gallery/image4.jpg';
import gallery5 from '../assets/images/gallery/image5.jpg';
import gallery6 from '../assets/images/gallery/image6.jpg';
import gallery7 from '../assets/images/gallery/image7.jpg';
import gallery8 from '../assets/images/gallery/image8.jpg';
import gallery9 from '../assets/images/gallery/image9.jpg';
import gallery10 from '../assets/images/gallery/image10.jpg';
import gallery11 from '../assets/images/gallery/image11.jpg';

export default function Landing() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const phoneNumber = "+91 9686794687 "; 

  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11
  ];

  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const packages = [
    {
      id: 1,
      title: "Marriage",
      price: 50000,
      deposit: 5000,
      note: "Dual Marriage: ₹10,000 extra",
      icon: "💍",
      color: "from-rose-500 to-pink-600"
    },
    {
      id: 2,
      title: "Reception/Engagement/Upanayana",
      subtitle: "One day Programs",
      price: 30000,
      deposit: 5000,
      icon: "🎉",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Small Functions",
      subtitle: "Birthday, Kubusa, Naming Ceremony, Anniversary",
      price: 22000,
      deposit: 4000,
      icon: "🎂",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  const additionalCharges = [
    { service: "Electricity", rate: "As per actual consumption", unit: "" },
    { service: "Generator Usage", rate: "500", unit: "per hour" },
    { service: "Labour", rate: "450", unit: "per person (1 labour per 50 guests)" },
    { service: "Hot Water", rate: "1,500", unit: "per day" }
  ];

  const conditions = [
    { icon: <AlertCircle className="w-5 h-5" />, text: "DJ sound system is not permitted", type: "warning" },
    { icon: <AlertCircle className="w-5 h-5" />, text: "Full payment required at booking - NO REFUND policy", type: "warning" },
    { icon: <Clock className="w-5 h-5" />, text: "Hall must be vacated by 4:00 PM on the following day", type: "info" },
    { icon: <Calendar className="w-5 h-5" />, text: "For marriages, 24-hour rental concludes by 4:00 PM next day", type: "info" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Decoration services available with us", type: "success" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Bhajantri services available on request", type: "success" }
  ];

   
 console.log("K̤͉͐̋̈́͆̀͑͠ͅư̴̤̯̹͉̤̱̻̖̣͙̰̝̹͆͂̊͐̀ͣ̾͐ͣ̓̐̇̐͘l̷̨̨̜̤̦͚̟̰̜̫͌̀͆̂͗ͬ͆̇ͫ͘̚͟͞͡k̡̛̻̝̠̝̜̈́͌̑̔̓́ͦ̉̾͠͡ͅā̶̴̢͇̻̟̤̫̀̓̍͌̀̆͘͝͡r̶̙̙̱̩̣͚̜̯͖̹̤ͧͥͫ̅̓̉ͫͦ͌͞͞n̘̺̫̜̫̰̦̹̎͊͒͠͞į̷̸̶̶͓̣͎̮̫̥͈̺͔̖̣̮̞̑ͤ̋͆ͣͫ̊̽̒̒ͪͩͤ̾͝Ả̸̢̛̭̠̫̲̪͇͎̻̹̳̲̣̺͛̊ͫ̀͊̾̃͋ͬ̈ͩ̀͟͞͠l̴̴̶̸̨̨͔̯̻̟̯͎̼͍̦̯̹͓̘̈̇͋͆͌ͧ́͂̍ͥ̅̔̍̍̈͛͛͊͒ͣ̚͢͢͞͝͞ͅg̥̠̤͔̗̱͑͗͊̀̒́͢͟͡_̴̴̧̖̫͎̬͇͇̱̜̯̻͚̆͛̈ͦ̏͌̀̎͘͡͠͞͞͡ǒ̍͞_̵̸̳͎̫̗̦̰̟͇ͭ͆̃͐ͪ̄ͦ͘͜");
  console.log("K̤͉͐̋̈́͆̀͑͠ͅư̴̤̯̹͉̤̱̻̖̣͙̰̝̹͆͂̊͐̀ͣ̾͐ͣ̓̐̇̐͘l̷̨̨̜̤̦͚̟̰̜̫͌̀͆̂͗ͬ͆̇ͫ͘̚͟͞͡k̡̛̻̝̠̝̜̈́͌̑̔̓́ͦ̉̾͠͡ͅā̶̴̢͇̻̟̤̫̀̓̍͌̀̆͘͝͡r̶̙̙̱̩̣͚̜̯͖̹̤ͧͥͫ̅̓̉ͫͦ͌͞͞n̘̺̫̜̫̰̦̹̎͊͒͠͞į̷̸̶̶͓̣͎̮̫̥͈̺͔̖̣̮̞̑ͤ̋͆ͣͫ̊̽̒̒ͪͩͤ̾͝Ả̸̢̛̭̠̫̲̪͇͎̻̹̳̲̣̺͛̊ͫ̀͊̾̃͋ͬ̈ͩ̀͟͞͠l̴̴̶̸̨̨͔̯̻̟̯͎̼͍̦̯̹͓̘̈̇͋͆͌ͧ́͂̍ͥ̅̔̍̍̈͛͛͊͒ͣ̚͢͢͞͝͞ͅg̥̠̤͔̗̱͑͗͊̀̒́͢͟͡_̴̴̧̖̫͎̬͇͇̱̜̯̻͚̆͛̈ͦ̏͌̀̎͘͡͠͞͞͡ǒ̍͞_̵̸̳͎̫̗̦̰̟͇ͭ͆̃͐ͪ̄ͦ͘͜");
  console.log("K̤͉͐̋̈́͆̀͑͠ͅư̴̤̯̹͉̤̱̻̖̣͙̰̝̹͆͂̊͐̀ͣ̾͐ͣ̓̐̇̐͘l̷̨̨̜̤̦͚̟̰̜̫͌̀͆̂͗ͬ͆̇ͫ͘̚͟͞͡k̡̛̻̝̠̝̜̈́͌̑̔̓́ͦ̉̾͠͡ͅā̶̴̢͇̻̟̤̫̀̓̍͌̀̆͘͝͡r̶̙̙̱̩̣͚̜̯͖̹̤ͧͥͫ̅̓̉ͫͦ͌͞͞n̘̺̫̜̫̰̦̹̎͊͒͠͞į̷̸̶̶͓̣͎̮̫̥͈̺͔̖̣̮̞̑ͤ̋͆ͣͫ̊̽̒̒ͪͩͤ̾͝Ả̸̢̛̭̠̫̲̪͇͎̻̹̳̲̣̺͛̊ͫ̀͊̾̃͋ͬ̈ͩ̀͟͞͠l̴̴̶̸̨̨͔̯̻̟̯͎̼͍̦̯̹͓̘̈̇͋͆͌ͧ́͂̍ͥ̅̔̍̍̈͛͛͊͒ͣ̚͢͢͞͝͞ͅg̥̠̤͔̗̱͑͗͊̀̒́͢͟͡_̴̴̧̖̫͎̬͇͇̱̜̯̻͚̆͛̈ͦ̏͌̀̎͘͡͠͞͞͡ǒ̍͞_̵̸̳͎̫̗̦̰̟͇ͭ͆̃͐ͪ̄ͦ͘͜");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-orange-700">
                Chaitanya Kalamantap
              </h1>
              <p className="text-sm text-slate-600 mt-1">Ashwathpura ShriRam Seva Sangha (R)</p>
            </div>
            <div className="flex items-center gap-2 text-slate-700 bg-slate-50 px-4 py-2 rounded-full">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Sarovar Nagar, Dharwad</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image Section */}
      <section className="relative w-full h-96 sm:h-[500px] lg:h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="Chaitanya Kalamantap Hall"
          className="w-full h-full object-cover animate-fadeIn"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent animate-fadeIn"></div>
        <div className="absolute bottom-0 left-0 right-0 text-white p-8 sm:p-12 animate-slideUp">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Your Perfect Venue for Every Celebration
            </h2>
            <p className="text-lg sm:text-xl mb-6 opacity-90 max-w-2xl animate-slideUp" style={{ animationDelay: '0.4s' }}>
              Premium banquet hall in the heart of Dharwad, perfect for weddings, receptions, and special occasions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp" style={{ animationDelay: '0.6s' }}>
              <button
                onClick={scrollToPackages}
                className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition shadow-xl text-lg cursor-pointer"
              >
                View Packages
              </button>
              <button
                onClick={() => setShowContactModal(true)}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition text-lg cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Rental Packages</h2>
          <p className="text-slate-600 text-lg">Effective from 01-11-2025</p>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`bg-gradient-to-r ${pkg.color} p-4 text-white`}>
                <div className="flex items-start gap-3">
                  <span className="text-3xl flex-shrink-0">{pkg.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold leading-tight break-words">{pkg.title}</h3>
                    {pkg.subtitle && <p className="text-xs sm:text-sm opacity-90 mt-1 break-words">{pkg.subtitle}</p>}
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Rental Amount:</span>
                  <span className="text-2xl font-bold text-slate-800">₹{pkg.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Deposit:</span>
                  <span className="text-lg font-semibold text-slate-700">₹{pkg.deposit.toLocaleString()}</span>
                </div>
                {pkg.note && (
                  <div className="bg-rose-50 border-l-4 border-rose-400 p-3 rounded">
                    <p className="text-sm text-rose-700">{pkg.note}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Package</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">Details</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Rental Amount</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-slate-700">Deposit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {packages.map(pkg => (
                <tr key={pkg.id} className="hover:bg-slate-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{pkg.icon}</span>
                      <span className="font-semibold text-slate-800">{pkg.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-slate-600">{pkg.subtitle || '-'}</p>
                    {pkg.note && <p className="text-rose-600 text-sm mt-1">{pkg.note}</p>}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-2xl font-bold text-slate-800">₹{pkg.price.toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-lg font-semibold text-slate-700">₹{pkg.deposit.toLocaleString()}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Additional Charges */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-50 rounded-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-8 text-center">Additional Charges</h2>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-slate-700">Service</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-slate-700">Rate</th>
                <th className="px-4 sm:px-6 py-4 text-left text-sm font-semibold text-slate-700 hidden sm:table-cell">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {additionalCharges.map((charge, index) => (
                <tr key={index} className="hover:bg-slate-50 transition">
                  <td className="px-4 sm:px-6 py-4 font-medium text-slate-800">{charge.service}</td>
                  <td className="px-4 sm:px-6 py-4">
                    {charge.rate === "As per actual consumption" ? (
                      <span className="text-slate-600 text-sm">{charge.rate}</span>
                    ) : (
                      <span className="text-lg font-semibold text-slate-800">₹{charge.rate}</span>
                    )}
                  </td>
                  <td className="px-4 sm:px-6 py-4 text-slate-600 text-sm hidden sm:table-cell">{charge.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 text-center">Terms & Conditions</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {conditions.map((condition, index) => {
            const bgColor =
              condition.type === 'warning'
                ? 'bg-amber-50 border-amber-200'
                : condition.type === 'success'
                ? 'bg-emerald-50 border-emerald-200'
                : 'bg-blue-50 border-blue-200';
            const iconColor =
              condition.type === 'warning'
                ? 'text-amber-600'
                : condition.type === 'success'
                ? 'text-emerald-600'
                : 'text-blue-600';

            return (
              <div key={index} className={`flex items-start gap-4 p-4 rounded-xl border-2 ${bgColor} transition hover:shadow-md`}>
                <div className={`${iconColor} mt-0.5 flex-shrink-0`}>{condition.icon}</div>
                <p className="text-slate-700 text-sm sm:text-base">{condition.text}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <p className="text-slate-600 text-lg font-medium">Rates effective from: 01-11-2025</p>
        </div>
      </section>

      {/* Location */}
      <section className="bg-gradient-to-br from-slate-100 to-blue-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 text-center">Visit Us</h2>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8894745689!2d75.0!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDMwJzAwLjAiTiA3NcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
            <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-700 to-slate-800 text-white">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Chaitanya Kalamantap</h3>
                  <p className="text-slate-200 flex items-center gap-2 justify-center sm:justify-start">
                    <MapPin className="w-4 h-4" />
                    Sarovar Nagar, Hubli-Dharwad
                  </p>
                </div>
                <a
                  href="https://maps.app.goo.gl/KhFRMJrDZujcC16A7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition shadow-lg whitespace-nowrap inline-flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 text-center">Gallery</h2>
        
        {/* Mobile Carousel */}
        <div className="md:hidden relative">
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img
              src={galleryImages[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
            >
              <ChevronLeft className="w-6 h-6 text-slate-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
            >
              <ChevronRight className="w-6 h-6 text-slate-800" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div 
              key={index} 
              className="relative aspect-video rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group animate-fadeInUp cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Chaitanya Kalamantap</h3>
            <p className="text-slate-400">Ashwathpura ShriRam Seva Sangha (R)</p>
            <p className="text-slate-400">Hubli-Dharwad</p>
            <div className="pt-6 mt-6 border-t border-slate-700">
              <p className="text-slate-500 text-sm">
                © 2025 Chaitanya Kalamantap Committee. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm mt-4">
                Coded and maintained by{' '}
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition underline"
                >
                  KulkarniAlgo
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setShowContactModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-slate-800 mb-2">Contact Us</h3>
              <p className="text-slate-600 text-lg">For bookings and inquiries</p>
            </div>

            <div className="space-y-4">
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-lg text-center text-xl cursor-pointer"
              >
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span>{phoneNumber}</span>
                </div>
              </a>

              <div className="text-center pt-4 border-t border-slate-200">
                <p className="text-slate-500 text-sm mb-2">Or visit us at</p>
                <p className="text-slate-700 font-medium">Sarovar Nagar, Dharwad</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale {
          animation: scale 0.2s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
}