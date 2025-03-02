import React from "react";
import {
  Pill,
  Calendar,
  History,
  Phone,
  ClipboardPlus,
  FileSearch,
} from "lucide-react";
import { usageStep } from "../utils/const";

function App() {
  const featureCard = [
    {
      icon: <Pill className="w-8 h-8 text-blue-600" />,
      title: "Add Medicaments",
      description: "",
    },
    {
      icon: <ClipboardPlus className="w-8 h-8 text-blue-600" />,
      title: "Add Prescription",
      description: "",
    },
    {
      icon: <FileSearch className="w-8 h-8 text-blue-600" />,
      title: "Find Items",
      description: "",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Manage Your Medications Smarter
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Dwayati helps you track prescriptions, prevent duplicates, and
              maintain your medical history - all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
                Download App
              </button>
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-md">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1 transform hover:scale-102 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Medication Management"
              className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-12">
            Why Choose Dwayati?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featureCard.map((item) => {
              return (
                <React.Fragment key={item.title}>
                  <FeatureCard
                    description={item.description}
                    icon={item.icon}
                    title={item.title}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-12">
            How Dwayati Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {usageStep.map((item) => {
              return (
                <React.Fragment key={item.title}>
                  <Step
                    number={item.number}
                    title={item.title}
                    description={item.description}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-center text-white transform hover:scale-[1.02] transition-all duration-300 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Control of Your Medications?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Join thousands of users who trust Dwayati for their medication
              management
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Dwayati
              </h3>
              <p className="text-gray-400">
                Your personal medication management assistant
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Medication Tracking
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Smart Reminders
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Medical History
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Prescription Management
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Privacy Policy
                </li>
                <li className="hover:text-blue-400 transition-colors cursor-pointer">
                  Terms of Service
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-400">Contact Us</h4>
              <div className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                <Phone size={20} />
                <span>1-800-DWAYATI</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Dwayati. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-blue-50 cursor-pointer">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center transform hover:scale-105 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
