import React, { useState,useCallback } from 'react';
import EducationSelector from './DegreeSelector'

const EducationCareerForm = () => {
  const [formData, setFormData] = useState({
    education: '',
    jobPos: '',
    companyName: '',
    designation: '',
    personalNo: '',
    addresswork: '',
    workcity: '',
    workstate: '',
    addressHome: '',
    homecity: '',
    homestate: ''
  });

  const handleEducationChange = useCallback((education) => {
  setFormData(prev => ({ ...prev, education }));
}, [setFormData]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white">


      {/* Form Container */}
      <div className=" rounded-xl p-6">
        
        {/* Education Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Educational Background
          </h3>
          
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Highest Educational Qualification
                <span className="text-red-500 ml-1">*</span>
              </label>
              <EducationSelector onEducationChange={handleEducationChange} />
            </div>
          </div>
        </div>

        {/* Professional Information Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Professional Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Job Title/Position
              </label>
              <input
                type="text"
                id="jobPos"
                value={formData.jobPos}
                onChange={handleInputChange}
                placeholder="Enter Job Title"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Company/Organization Name
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter Organization Name"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Nature of Work/Designation
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="designation"
                value={formData.designation}
                onChange={handleInputChange}
                placeholder="Enter Designation"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Candidate Number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="personalNo"
                value={formData.personalNo}
                onChange={handleInputChange}
                minLength="10"
                maxLength="10"
                placeholder="Enter 10-digit Number"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Work Address Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Work Address
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Work Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="addresswork"
                value={formData.addresswork}
                onChange={handleInputChange}
                placeholder="Enter Work Address"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Work City
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="workcity"
                value={formData.workcity}
                onChange={handleInputChange}
                placeholder="Enter Work City"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Work State
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="workstate"
                value={formData.workstate}
                onChange={handleInputChange}
                placeholder="Enter Work State"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Parent's Address Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Parent's Address
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Parent's Address
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="addressHome"
                value={formData.addressHome}
                onChange={handleInputChange}
                placeholder="Enter Parent's Address"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Parent's City
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="homecity"
                value={formData.homecity}
                onChange={handleInputChange}
                placeholder="Enter Parent's City"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Parent's State
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="homestate"
                value={formData.homestate}
                onChange={handleInputChange}
                placeholder="Enter Parent's State"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EducationCareerForm;