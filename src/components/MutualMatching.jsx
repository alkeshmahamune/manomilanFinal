import React, { useState } from 'react';
import { 
  Home, 
  Users, 
  UserCheck, 
  Package, 
  UserX, 
  User, 
  Heart, 
  Phone, 
  Star, 
  Settings, 
  Lock, 
  Mail, 
  MessageSquare, 
  Inbox, 
  Send, 
  Edit3,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import MatrimonyCards from './MatrimonyCards';

const ProfileDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [expandedSections, setExpandedSections] = useState({
    account: true,
    profile: false,
    settings: false,
    services: false,
    messageBox: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sidebarItems = {
    account: {
      title: 'Account',
      icon: User,
      items: [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'subscriptions', label: 'Subscriptions', icon: Users },
        { id: 'subscribedBy', label: 'Subscribed By', icon: UserCheck },
        { id: 'packages', label: 'Packages', icon: Package },
        { id: 'inactivate', label: 'Inactivate', icon: UserX }
      ]
    },
    profile: {
      title: 'Profile',
      icon: User,
      items: [
        { id: 'basicInfo', label: 'Basic Information', icon: User },
        { id: 'familyInfo', label: 'Family Information', icon: Users },
        { id: 'contactDetails', label: 'Contact Details', icon: Phone },
        { id: 'kundaliDetails', label: 'Kundali Details', icon: Star },
        { id: 'expectations', label: 'Expectations', icon: Heart }
      ]
    },
    settings: {
      title: 'Settings',
      icon: Settings,
      items: [
        { id: 'changePassword', label: 'Change Password', icon: Lock },
        { id: 'changeEmail', label: 'Change Email', icon: Mail }
      ]
    },
    services: {
      title: 'Services',
      icon: Heart,
      items: [
        { id: 'marriageServices', label: 'Marriage Services', icon: Heart }
      ]
    },
    messageBox: {
      title: 'Message Box',
      icon: MessageSquare,
      items: [
        { id: 'inbox', label: 'Inbox', icon: Inbox },
        { id: 'sent', label: 'Sent', icon: Send },
        { id: 'compose', label: 'Compose', icon: Edit3 }
      ]
    }
  };

  const renderContent = () => {
    const contentMap = {
      home: {
        title: 'Dashboard Home',
        content: (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">Total Matches</h3>
                <p className="text-3xl font-bold">156</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">Active Subscriptions</h3>
                <p className="text-3xl font-bold">3</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">Messages</h3>
                <p className="text-3xl font-bold">24</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white">
                <h3 className="text-lg font-semibold mb-2">Profile Views</h3>
                <p className="text-3xl font-bold">89</p>
              </div>
            </div>
            
            <MatrimonyCards/>
          </div>
        )
      },
      subscriptions: {
        title: 'My Subscriptions',
        content: (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Active Subscriptions</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Premium Plan</h4>
                      <p className="text-gray-600">Expires: Dec 31, 2025</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Active</span>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">Premium Plus</h4>
                      <p className="text-gray-600">Expires: Jan 15, 2026</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      subscribedBy: {
        title: 'Subscribed By Others',
        content: (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Users Who Subscribed to Your Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      A
                    </div>
                    <div>
                      <h4 className="font-semibold">Amit Kumar</h4>
                      <p className="text-gray-600 text-sm">Premium Member</p>
                    </div>
                  </div>
                </div>
                <div className="border rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      P
                    </div>
                    <div>
                      <h4 className="font-semibold">Priya Sharma</h4>
                      <p className="text-gray-600 text-sm">Gold Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      packages: {
        title: 'Available Packages',
        content: (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-blue-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Basic</h3>
                <p className="text-3xl font-bold mb-4">₹999<span className="text-lg font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>10 Profile Views</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic Matching</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Email Support</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Choose Plan
                </button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-purple-200">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Premium</h3>
                <p className="text-3xl font-bold mb-4">₹1999<span className="text-lg font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unlimited Profile Views</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced Matching</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Priority Support</li>
                </ul>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Choose Plan
                </button>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm border-2 border-gold-200">
                <h3 className="text-xl font-semibold mb-4 text-yellow-600">Premium Plus</h3>
                <p className="text-3xl font-bold mb-4">₹2999<span className="text-lg font-normal">/month</span></p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Everything in Premium</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Personal Consultant</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>24/7 Support</li>
                </ul>
                <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        )
      },
      basicInfo: {
        title: 'Basic Information',
        content: (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth</label>
                <input type="date" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="ex 5.8" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your highest education" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Your profession" />
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        )
      },
      inbox: {
        title: 'Inbox',
        content: (
          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="p-4 border-b">
                <h3 className="text-lg font-semibold">Messages</h3>
              </div>
              <div className="divide-y">
                <div className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      A
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Amit Kumar</h4>
                        <span className="text-sm text-gray-500">2 min ago</span>
                      </div>
                      <p className="text-gray-600 text-sm">Hello! I found your profile interesting...</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                      P
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">Priya Sharma</h4>
                        <span className="text-sm text-gray-500">1 hour ago</span>
                      </div>
                      <p className="text-gray-600 text-sm">Thank you for your interest in my profile...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      },
      compose: {
        title: 'Compose Message',
        content: (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter recipient name or ID" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter message subject" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg h-32" placeholder="Write your message here..."></textarea>
              </div>
              <div className="flex space-x-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  Save Draft
                </button>
              </div>
            </div>
          </div>
        )
      }
    };

    // Default content for other sections
    const defaultContent = {
      title: activeSection.charAt(0).toUpperCase() + activeSection.slice(1).replace(/([A-Z])/g, ' $1'),
      content: (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-gray-600">Content for {activeSection.replace(/([A-Z])/g, ' $1')} will be displayed here.</p>
        </div>
      )
    };

    return contentMap[activeSection] || defaultContent;
  };

  const currentContent = renderContent();

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg fixed h-full overflow-y-auto">
        {/* Sidebar Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-800 p-6 text-white">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-blue-100 text-sm">Premium Member</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4">
          {Object.entries(sidebarItems).map(([sectionKey, section]) => {
            const SectionIcon = section.icon;
            const isExpanded = expandedSections[sectionKey];
            
            return (
              <div key={sectionKey} className="mb-4">
                <button
                  onClick={() => toggleSection(sectionKey)}
                  className="w-full flex items-center justify-between p-3 text-left font-semibold text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <SectionIcon className="w-5 h-5" />
                    <span>{section.title}</span>
                  </div>
                  {/* {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />} */}
                </button>
                
                {/* {isExpanded && ( */}
                  <div className="ml-8 mt-2 space-y-1">
                    {section.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveSection(item.id)}
                          className={`w-full flex items-center space-x-3 p-2 text-left rounded-lg transition-colors ${
                            activeSection === item.id
                              ? 'bg-red-100 text-red-700'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          <ItemIcon className="w-4 h-4" />
                          <span className="text-sm">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                {/* )} */}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-80 flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{currentContent.title}</h1>
            <p className="text-gray-600 mt-2">Manage your profile and settings</p>
          </div>
          
          {currentContent.content}
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;