import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, Users, Camera, Heart, Check, Book, HeartHandshake } from 'lucide-react';
import PersonalInfo from './PersonalInfo.jsx';
import EducationCareerForm from './EduCrr.jsx';
import PartnerPreferences from './PartnerPref.jsx';
import SpecialInfo from './SpecialInfo.jsx';

const MatrimonialFormStructure = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { id: 1, title: "Personal", icon: User },
    { id: 2, title: "Education", icon: Book },
    { id: 3, title: "Partner Pref", icon: Heart },
    { id: 4, title: "Special Info", icon: HeartHandshake }
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch(currentStep) {
      case 1:
        return <PersonalInfo/>
      case 2:
        return <EducationCareerForm/>
      case 3:
        return <PartnerPreferences/>
      case 4:
        return <SpecialInfo/>
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  currentStep > step.id 
                    ? 'bg-green-500 text-white' 
                    : currentStep === step.id 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-200 text-gray-400'
                }`}>
                  {currentStep > step.id ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  currentStep >= step.id ? 'text-gray-800' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          
          {/* Progress Line */}
          <div className="relative">
            <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full rounded"></div>
            <div 
              className="absolute top-0 left-0 h-1 bg-red-600 rounded transition-all duration-500"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-lg mb-6">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }, (_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index + 1 === currentStep
                    ? 'bg-red-600 w-8'
                    : index + 1 < currentStep
                      ? 'bg-green-500'
                      : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>

          <button
            onClick={currentStep === totalSteps ? () => alert('Form Submitted!') : nextStep}
            className="flex items-center space-x-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-200"
          >
            <span>{currentStep === totalSteps ? 'Submit' : 'Next'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Login Button */}
        <div className="text-center mt-6">
          <button className="text-red-600 hover:text-red-700 font-medium">
            Already have an account? Login here
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatrimonialFormStructure;