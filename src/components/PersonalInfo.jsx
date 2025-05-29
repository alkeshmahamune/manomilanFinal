import React, { useContext } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import  {useFormContext } from './Context.jsx'


const PersonalInfo = () => {

    const {formData,setFormData}=useFormContext()
    

  const cities = [
    { city: 'Mumbai', state: 'Maharashtra', country: 'India' },
    { city: 'Delhi', state: 'Delhi', country: 'India' },
    { city: 'Bangalore', state: 'Karnataka', country: 'India' },
    { city: 'Chennai', state: 'Tamil Nadu', country: 'India' },
    { city: 'Kolkata', state: 'West Bengal', country: 'India' },
    { city: 'Hyderabad', state: 'Telangana', country: 'India' },
    { city: 'Pune', state: 'Maharashtra', country: 'India' },
    { city: 'Ahmedabad', state: 'Gujarat', country: 'India' },
    { city: 'Surat', state: 'Gujarat', country: 'India' },
    { city: 'Jaipur', state: 'Rajasthan', country: 'India' }
  ];

  const languages = [
    'Marathi', 'Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 
    'Bengali', 'Gujarati', 'Punjabi', 'Odia', 'Assamese'
  ];

  const nationalities = [
    'Indian', 'American', 'British', 'Canadian', 'Australian', 'German', 
    'French', 'Italian', 'Japanese', 'Chinese', 'Other'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Check if marital status triggers children modal
    if (field === 'maritalStatus' && ['divorced', 'widowed', 'divorceInProgress'].includes(value)) {
      setShowChildrenModal(true);
    }
  };

  const handleNationalityChange = (nationality) => {
    setFormData(prev => ({
      ...prev,
      nationality: prev.nationality.includes(nationality)
        ? prev.nationality.filter(n => n !== nationality)
        : [...prev.nationality, nationality]
    }));
  };

  const handleChildrenData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (field === 'numberOfChildren') {
      const numChildren = parseInt(value) || 0;
      const newChildren = Array.from({ length: numChildren }, (_, i) => ({
        id: i + 1,
        gender: '',
        dateOfBirth: '',
        livesWith: ''
      }));
      setFormData(prev => ({
        ...prev,
        children: newChildren
      }));
    }
  };

  const updateChildData = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      children: prev.children.map((child, i) => 
        i === index ? { ...child, [field]: value } : child
      )
    }));
  };

  const closeChildrenModal = () => {
    setShowChildrenModal(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
      
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Middle Name</label>
          <input
            type="text"
            value={formData.middleName}
            onChange={(e) => handleInputChange('middleName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>

      {/* Gender and Date/Time */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
          <select
            value={formData.gender}
            onChange={(e) => handleInputChange('gender', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
          <input
            type="time"
            value={formData.selectTime}
            onChange={(e) => handleInputChange('selectTime', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Place Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Native Place *</label>
          <select
            value={formData.nativePlace}
            onChange={(e) => handleInputChange('nativePlace', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Native Place</option>
            {cities.map((place, index) => (
              <option key={index} value={`${place.city}, ${place.state}, ${place.country}`}>
                {place.city}, {place.state}, {place.country}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Place of Birth (Village)</label>
          <input
            type="text"
            value={formData.placeOfBirth}
            onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter village name"
          />
        </div>
      </div>

      {/* Height */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Height (Feet)</label>
          <select
            value={formData.heightFeet}
            onChange={(e) => handleInputChange('heightFeet', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Feet</option>
            {[4, 5, 6, 7].map(feet => (
              <option key={feet} value={feet}>{feet} ft</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Height (Inches)</label>
          <select
            value={formData.heightInches}
            onChange={(e) => handleInputChange('heightInches', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Inches</option>
            {Array.from({length: 12}, (_, i) => (
              <option key={i} value={i}>{i} in</option>
            ))}
          </select>
        </div>
      </div>

      {/* Caste and Religion */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subcaste</label>
          <input
            type="text"
            value={formData.subcaste}
            onChange={(e) => handleInputChange('subcaste', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Caste</label>
          <input
            type="text"
            value={formData.caste}
            onChange={(e) => handleInputChange('caste', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
          <input
            type="text"
            value={formData.religion}
            onChange={(e) => handleInputChange('religion', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Occupation and Income */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Occupation *</label>
          <select
            value={formData.occupation}
            onChange={(e) => handleInputChange('occupation', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="PrivateService">Private Service</option>
            <option value="government service">Government Service</option>
            <option value="service+bussiness">Service + Business/Practice</option>
            <option value="business">Business</option>
            <option value="studentInternship">Student/Internship</option>
            <option value="NotWorking">Not Working</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
          <input
            type="number"
            value={formData.monthlyIncome}
            onChange={(e) => handleInputChange('monthlyIncome', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter monthly income"
          />
        </div>
      </div>

      {/* Nationality and Mother Tongue */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nationality (Multiple Selection)</label>
          <div className="border border-gray-300 rounded-md p-3 max-h-32 overflow-y-auto">
            {nationalities.map(nationality => (
              <label key={nationality} className="flex items-center space-x-2 mb-1">
                <input
                  type="checkbox"
                  checked={formData.nationality.includes(nationality)}
                  onChange={() => handleNationalityChange(nationality)}
                  className="rounded"
                />
                <span className="text-sm">{nationality}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mother Tongue</label>
          <select
            value={formData.motherTongue}
            onChange={(e) => handleInputChange('motherTongue', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {languages.map(lang => (
              <option key={lang} value={lang.toLowerCase()}>{lang}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Family Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Father's Full Name</label>
          <input
            type="text"
            value={formData.fatherName}
            onChange={(e) => handleInputChange('fatherName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Full Name</label>
          <input
            type="text"
            value={formData.motherName}
            onChange={(e) => handleInputChange('motherName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Maternal Uncle Surname</label>
          <input
            type="text"
            value={formData.maternalUncleSurname}
            onChange={(e) => handleInputChange('maternalUncleSurname', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Parent's Contact No.</label>
          <input
            type="tel"
            value={formData.parentContact}
            onChange={(e) => handleInputChange('parentContact', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp No.</label>
          <input
            type="tel"
            value={formData.whatsappNo}
            onChange={(e) => handleInputChange('whatsappNo', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Alternate No.</label>
          <input
            type="tel"
            value={formData.alternateNo}
            onChange={(e) => handleInputChange('alternateNo', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Siblings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Brothers</label>
          <div className="flex space-x-4">
            {['0', '1', '2', '3', '3+'].map(option => (
              <label key={option} className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="brothers"
                  value={option}
                  checked={formData.brothers === option}
                  onChange={(e) => handleInputChange('brothers', e.target.value)}
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sisters</label>
          <div className="flex space-x-4">
            {['0', '1', '2', '3', '3+'].map(option => (
              <label key={option} className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="sisters"
                  value={option}
                  checked={formData.sisters === option}
                  onChange={(e) => handleInputChange('sisters', e.target.value)}
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Divyang and Marital Status */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Divyang</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="divyang"
                value="yes"
                checked={formData.divyang === 'yes'}
                onChange={(e) => handleInputChange('divyang', e.target.value)}
              />
              <span className="text-sm">Yes</span>
            </label>
            <label className="flex items-center space-x-1">
              <input
                type="radio"
                name="divyang"
                value="no"
                checked={formData.divyang === 'no'}
                onChange={(e) => handleInputChange('divyang', e.target.value)}
              />
              <span className="text-sm">No</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
          <select
            value={formData.maritalStatus}
            onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
            <option value="divorceInProgress">Divorce in Progress</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
