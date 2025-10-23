import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar, Users, Zap, Clock, AlertCircle, CheckCircle, IndianRupee, X } from 'lucide-react';

export default function Landing() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  
  const phoneNumber = "+91 1234567890"; // Replace with actual number
  
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-blue-900 text-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djEwaC0yVjE2aDJ6bTQgMHYxMGgtMlYxNmgyem00IDB2MTBoLTJWMTZoMnptLTI0IDB2MTBoLTJWMTZoMnptLTQgMHYxMGgtMlYxNmgyem0tNCAwdjEwaC0yVjE2aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Your Perfect Venue for<br />Every Celebration
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Premium banquet hall in the heart of Dharwad, perfect for weddings, receptions, and special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToPackages}
              className="bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition shadow-xl cursor-pointer text-lg"
            >
              View Packages
            </button>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition cursor-pointer text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="packages-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Rental Packages</h2>
          <p className="text-slate-600 text-lg">Effective from 01-11-2025</p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold">Program Details</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Rental Amount</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Deposit</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Remarks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="hover:bg-slate-50 transition">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">💍</span>
                    <div>
                      <div className="font-semibold text-slate-800 text-lg">Marriage</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-2xl font-bold text-slate-800">₹50,000</div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-lg font-semibold text-slate-600">₹5,000</div>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-block bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                    Dual Marriage: +₹10,000
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🎉</span>
                    <div>
                      <div className="font-semibold text-slate-800 text-lg">Reception / Engagement / Upanayana</div>
                      <div className="text-sm text-slate-500">One day programs</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-2xl font-bold text-slate-800">₹30,000</div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-lg font-semibold text-slate-600">₹5,000</div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-slate-500">—</span>
                </td>
              </tr>
              <tr className="hover:bg-slate-50 transition">
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🎂</span>
                    <div>
                      <div className="font-semibold text-slate-800 text-lg">Small Functions</div>
                      <div className="text-sm text-slate-500">Birthday, Kubusa, Naming Ceremony, Anniversary</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-2xl font-bold text-slate-800">₹22,000</div>
                </td>
                <td className="px-6 py-5">
                  <div className="text-lg font-semibold text-slate-600">₹4,000</div>
                </td>
                <td className="px-6 py-5">
                  <span className="text-slate-500">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className={`bg-gradient-to-r ${pkg.color} p-4 text-white`}>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{pkg.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold">{pkg.title}</h3>
                    {pkg.subtitle && <p className="text-sm opacity-90">{pkg.subtitle}</p>}
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
      </section>

      {/* Additional Charges Table */}
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
            const bgColor = condition.type === 'warning' ? 'bg-amber-50 border-amber-200' : 
                           condition.type === 'success' ? 'bg-emerald-50 border-emerald-200' : 
                           'bg-blue-50 border-blue-200';
            const iconColor = condition.type === 'warning' ? 'text-amber-600' : 
                             condition.type === 'success' ? 'text-emerald-600' : 
                             'text-blue-600';
            
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

      {/* Location Section */}
      <section className="bg-gradient-to-br from-slate-100 to-blue-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-10 text-center">Visit Us</h2>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.0234!2d74.9988!3d15.4602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI3JzM2LjciTiA3NMKwNTknNTUuNyJF!5e0!3m2!1sen!2sin!4v1234567890"
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

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Chaitanya Kalamantap</h3>
            <p className="text-slate-400">Ashwathpura ShriRam Seva Sangha (R)</p>
            <p className="text-slate-400">Hubli-Dharwad</p>
            <div className="pt-6 mt-6">
              <p className="text-slate-500 text-sm">© 2025 Chaitanya Kalamantap Committee. All rights reserved.</p>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <p className="text-slate-500 text-sm">
                  Coded and maintained by{' '}
                  <a 
                    href="https://github.com/KeyurGK" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition underline"
                  >
                    KeyurGK
                  </a>
                  {' '}and{' '}
                  <a 
                    href="https://github.com/MayurK-cmd" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition underline"
                  >
                    MayurK
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowContactModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale" onClick={(e) => e.stopPropagation()}>
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
      `}</style>
    </div>
  );
}