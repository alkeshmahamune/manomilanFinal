import React, { useState } from "react";
import {
  ArrowLeft,
  Heart,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  Phone,
  Mail,
  Users,
  Star,
  Home,
  User,
  Currency,
  CurrencyIcon,
  IndianRupee,
  Scale,
  LucideChevronRight,
} from "lucide-react";

const MatrimonyCards = () => {
  const [currentView, setCurrentView] = useState("cards"); // 'cards' or 'profile'
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      height:`5'10"`,
      profession: "Software Engineer",
      location: "Mumbai, Maharashtra",
      education: "B.Tech Computer Science",
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s",
      religion: "Hindu",
      caste: "Brahmin,Uchhabramhin,Hindu",
      maritalSts:"Unmarried",
      height: "5'4\"",
      income: "8-10 LPA",
      family: "Nuclear Family",
      hobbies: ["Reading", "Cooking", "Dancing"],
      about:
        "I'm a passionate software engineer who loves creating innovative solutions. Looking for a life partner who shares similar values and supports each other's dreams.",
      phone: "+91 98765 43210",
      email: "priya.sharma@email.com",
      workLoc:"Akola,Maharashtra,India",
      sect:"malkari"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      age: 29,
      height:`5'10"`,
      profession: "Investment Banker",
      location: "Delhi, NCR",
      education: "MBA Finance",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      religion: "Hindu",
      caste: "Brahmin,Uchhabramhin,Hindu",
      maritalSts:"Unmarried",
      height: "5'10\"",
      income: "15-20 LPA",
      family: "Joint Family",
      hobbies: ["Cricket", "Photography", "Traveling"],
      about:
        "Working in investment banking with a passion for finance and travel. Seeking a caring and understanding partner to share life's beautiful journey.",
      phone: "+91 98765 43211",
      email: "rahul.mehta@email.com",
      workLoc:"Akola,Maharashtra,India",
      sect:"malkari"
    },
    {
      id: 3,
      name: "Ananya Reddy",
      age: 24,
      height:`5'10"`,
      profession: "Doctor",
      location: "Bangalore, Karnataka",
      education: "MBBS",
      photo:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop",
      religion: "Hindu",
      caste: "Brahmin,Uchhabramhin,Hindu",
      maritalSts:"Unmarried",
      height: "5'6\"",
      income: "12-15 LPA",
      family: "Nuclear Family",
      hobbies: ["Yoga", "Music", "Volunteering"],
      about:
        "Dedicated doctor committed to helping others. Looking for someone who values compassion, family, and making a positive impact in the community.",
      phone: "+91 98765 43212",
      email: "ananya.reddy@email.com",
      workLoc:"Akola,Maharashtra,India",
      sect:"malkari"
    },
  ];

  const openProfile = (profile) => {
    setSelectedProfile(profile);
    setCurrentView("profile");
  };

  const goHome = () => {
    setCurrentView("cards");
    setSelectedProfile(null);
  };

  const ProfileCard = ({ profile }) => (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden border border-gray-100"
      onClick={() => openProfile(profile)}
    >
      <div className="relative">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-full h-70 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <Heart className="w-5 h-5 text-pink-500" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
            <div className="space-y-2">
             <p className="text-gray-700 text-3xl font-semibold flex items-center gap-2">
            <User className="w-6 h-6  text-blue-500" />
            {profile.id}
          </p>
           <p className="text-gray-600 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {profile.age} years
            </p> 
          </div>
        </div>

        <div className="space-y-2 mb-4">
            
         
          <p className="text-gray-700 flex items-center gap-2">
            <LucideChevronRight className="w-4 h-4 text-blue-500" />
            {profile.height}
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <LucideChevronRight className="w-4 h-4 text-green-500" />
            {profile.caste}
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <LucideChevronRight className="w-4 h-4 text-green-500" />
            {profile.sect}
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-purple-500" />
            {profile.education}
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-purple-500" />
            {profile.income}
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-500" />
            {profile.workLoc}
          </p>
        </div>

        <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 px-4 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 text-sm">
          Subscribe to Connect
        </button>
      </div>
    </div>
  );

  const ProfilePage = ({ profile }) => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      {/* Header with Home Button */}
      <div className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={goHome}
              className="flex items-center gap-3 text-gray-700 hover:text-pink-600 transition-colors duration-300 group"
            >
              <div className="bg-gray-100 group-hover:bg-pink-100 p-2 rounded-lg transition-colors duration-300">
                <Home className="w-5 h-5" />
              </div>
              <span className="font-medium">Back to Home</span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"></div>
              <span className="font-semibold text-gray-800">
                MatrimonyConnect
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-80 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-20 left-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
              <p className="text-xl opacity-90">{profile.profession}</p>
            </div>
            <div className="absolute top-8 right-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Profile Image */}
            <div className="lg:w-1/3 p-8">
              <div className="relative -mt-16 lg:-mt-20">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-48 h-60 mx-auto rounded-xl shadow-xl border-4 border-white object-cover"
                />
              </div>
            </div>

            {/* Profile Details */}
            <div className="lg:w-2/3 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-800">
                      Age & Personal
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span className="font-medium">{profile.age} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Height:</span>
                      <span className="font-medium">{profile.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Religion:</span>
                      <span className="font-medium">{profile.religion}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Caste:</span>
                      <span className="font-medium">{profile.caste}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="w-6 h-6 text-green-600" />
                    <h4 className="font-semibold text-gray-800">
                      Professional
                    </h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Profession:</span>
                      <span className="font-medium">{profile.profession}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Education:</span>
                      <span className="font-medium">{profile.education}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Income:</span>
                      <span className="font-medium">{profile.income}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{profile.location}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-purple-600" />
                    <h4 className="font-semibold text-gray-800">Family</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Family Type:</span>
                      <span className="font-medium">{profile.family}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Heart className="w-6 h-6 text-pink-600" />
                    <h4 className="font-semibold text-gray-800">Interests</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {profile.hobbies.map((hobby, index) => (
                      <span
                        key={index}
                        className="bg-white px-3 py-1 rounded-full text-sm font-medium text-pink-600 border border-pink-200"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl mb-8">
                <h4 className="font-semibold text-gray-800 mb-4 text-lg">
                  About {profile.name}
                </h4>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {profile.about}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 px-6 rounded-lg font-medium hover:from-pink-600 hover:to-rose-600 transition-all duration-300 text-sm">
                  Subscribe to Connect
                </button>
                <button className="border-2 border-pink-500 text-pink-500 py-2 px-6 rounded-lg font-medium hover:bg-pink-50 transition-all duration-300 text-sm">
                  Save Profile
                </button>
              </div>

              {/* Contact Section */}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Contact Information</h4>
                <div className="flex gap-6 justify-center">
                  <a 
                    href={`tel:${profile.phone}`} 
                    className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors duration-300 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">+91 98745-85412</span>
                  </a>
                  <a 
                    href={`mailto:${profile.email}`} 
                    className="flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors duration-300 text-sm"
                  >
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium capitalize">xyz colony, ybx colana, nagpur, maharashtra, india</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CardsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {currentView === "cards" ? (
        <CardsPage />
      ) : (
        <ProfilePage profile={selectedProfile} />
      )}
    </div>
  );
};

export default MatrimonyCards;
