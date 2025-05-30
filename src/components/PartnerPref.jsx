import React, { useState,useCallback } from 'react';
import EducationSelector from './DegreeSelector';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="space-y-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-[#7d0a0a] file:text-white hover:file:bg-[#6a0909] file:cursor-pointer"
      />
      {selectedFile && (
        <p className="text-xs text-gray-600">Selected: {selectedFile.name}</p>
      )}
    </div>
  );
};

const PartnerPreferences = () => {
  const [formData, setFormData] = useState({
    ageFrom: '',
    ageTo: '',
    heightFrom: '',
    heightTo: '',
    education: '',
    occupation: 'PrivateService',
    maritalStatus: 'Unmarried',
    income: '',
    caste: '',
    workingLocation: '',
    workingCity: '',
    socialMedia: ''
  });

  const ageOptions = Array.from({ length: 51 }, (_, i) => i + 18); // 18 to 68
  
  const heightOptions = Array.from({ length: 4 }, (_, i) => i + 4) // 4 to 7 feet
    .flatMap((feet) =>
      Array.from({ length: 12 }, (_, inch) => {
        const label = `${feet}' ${inch}"`;
        return { value: label, label };
      })
    );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  
    const handleEducationChange = useCallback((education) => {
    setFormData(prev => ({ ...prev, education }));
  }, [setFormData]);

  return (
    <div className="max-w-8xl mx-auto p-6 bg-white">
      
      {/* Form Container */}
      <div>
        
        {/* Physical Preferences Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Physical Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                  Age Range
              </label>
              <div className="flex gap-2">
                <select
                  name="ageFrom"
                  value={formData.ageFrom}
                  onChange={handleInputChange}
                  className="flex-1 border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
                >
                  <option value="">From</option>
                  {ageOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
                <select
                  name="ageTo"
                  value={formData.ageTo}
                  onChange={handleInputChange}
                  className="flex-1 border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
                >
                  <option value="">To</option>
                  {ageOptions.map((age) => (
                    <option key={age} value={age}>
                      {age}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                  Height Range
              </label>
              <div className="flex gap-2">
                <select
                  name="heightFrom"
                  value={formData.heightFrom}
                  onChange={handleInputChange}
                  className="flex-1 border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
                >
                  <option value="">From</option>
                  {heightOptions.map((height) => (
                    <option key={height.value} value={height.value}>
                      {height.label}
                    </option>
                  ))}
                </select>
                <select
                  name="heightTo"
                  value={formData.heightTo}
                  onChange={handleInputChange}
                  className="flex-1 border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
                >
                  <option value="">To</option>
                  {heightOptions.map((height) => (
                    <option key={height.value} value={height.value}>
                      {height.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Educational & Professional Preferences */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Educational & Professional Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2 w-full col-span-1 md:col-span-2 lg:col-span-3">
              <label className="block text-sm font-medium text-[#7d0a0a]">
              Education Level
              </label>
              <EducationSelector onEducationChange={handleEducationChange} />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Occupation
              </label>
              <select
                name="occupation"
                value={formData.occupation}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
              >
                <option value="PrivateService">Private Service</option>
                <option value="GovermentService">Government Service</option>
                <option value="Service_Business_practice">Service + Business/Practice</option>
                <option value="Business">Business</option>
                <option value="Student_Intern">Student/Internship</option>
                <option value="NotWorking">Not Working</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Monthly Income
              </label>
              <select
                name="income"
                value={formData.income}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
              >
                <option value="">Select Income</option>
                <option value="10000">₹10,000</option>
                <option value="20000">₹20,000</option>
                <option value="30000">₹30,000</option>
                <option value="40000">₹40,000</option>
                <option value="50000">₹50,000</option>
                <option value="75000">₹75,000</option>
                <option value="100000">₹1,00,000</option>
                <option value="150000">₹1,50,000+</option>
              </select>
            </div>
          </div>
        </div>

        {/* Personal Preferences */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Personal Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
              >
                <option value="Unmarried">Unmarried</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
                <option value="DivorceinProcess">Divorce in Process</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Caste
              </label>
              <select
                name="caste"
                value={formData.caste}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
              >
                <option value="">Select Caste</option>
                <option value="kunbimarathaHindu">Kunbi, Maratha, Hindu</option>
                <option value="brahmin">Brahmin</option>
                <option value="kshatriya">Kshatriya</option>
                <option value="vaishya">Vaishya</option>
                <option value="other">Other</option>
                <option value="no_preference">No Preference</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Social Media
              </label>
              <input
                type="text"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleInputChange}
                placeholder="Optional"
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Location Preferences */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Location Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Working Location (State, Country)
              </label>
              <select
                name="workingLocation"
                value={formData.workingLocation}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
              >
                <option value="">Select Location</option>
                <option value="maharashtraindia">Maharashtra, India</option>
                <option value="delhiindia">Delhi, India</option>
                <option value="karnatakaindia">Karnataka, India</option>
                <option value="gujaratindia">Gujarat, India</option>
                <option value="tamilnaduindia">Tamil Nadu, India</option>
                <option value="usausa">USA</option>
                <option value="canadacanada">Canada</option>
                <option value="ukuk">United Kingdom</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Working Location (City, District)
              </label>
              <select
                name="workingCity"
                value={formData.workingCity}
                onChange={handleInputChange}
                className="w-full border border-gray-300 px-3 py-2.5 outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all duration-200 rounded-lg bg-white text-gray-700"
              >
                <option value="">Select City</option>
                <option value="NagpurNagpur">Nagpur, Nagpur</option>
                <option value="MumbaiMumbai">Mumbai, Mumbai</option>
                <option value="PunePune">Pune, Pune</option>
                <option value="NashikNashik">Nashik, Nashik</option>
                <option value="AurangabadAurangabad">Aurangabad, Aurangabad</option>
              </select>
            </div>
          </div>
        </div>

        {/* Photo Upload Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#7d0a0a] mb-4 flex items-center">
            <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
            Photo Upload
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#7d0a0a]">
                Upload Your Photo
              </label>
              <FileUpload />
              <p className="text-xs text-gray-500">
                Upload a clear, recent photo. Accepted formats: JPG, PNG, GIF (Max 5MB)
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PartnerPreferences;