import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import PersonalInfo from './PersonalInfo';
import  { useFormContext } from './Context.jsx'


const MultiStepRegistrationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showChildrenModal, setShowChildrenModal] = useState(false);
  const { formData, setFormData } = useFormContext();

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderPersonalInfo = () => (
    <PersonalInfo/>
  );

  const renderChildrenModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Children Information</h3>
          <button
            onClick={closeChildrenModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Do you have children?</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="hasChildren"
                  value="yes"
                  checked={formData.hasChildren === 'yes'}
                  onChange={(e) => handleChildrenData('hasChildren', e.target.value)}
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="hasChildren"
                  value="no"
                  checked={formData.hasChildren === 'no'}
                  onChange={(e) => handleChildrenData('hasChildren', e.target.value)}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {formData.hasChildren === 'yes' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Children</label>
                {parseInt(formData.numberOfChildren) <= 3 ? (
                  <div className="flex space-x-4">
                    {['1', '2', '3', '3+'].map(option => (
                      <label key={option} className="flex items-center space-x-1">
                        <input
                          type="radio"
                          name="numberOfChildren"
                          value={option}
                          checked={formData.numberOfChildren === option}
                          onChange={(e) => handleChildrenData('numberOfChildren', e.target.value)}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <input
                    type="number"
                    value={formData.numberOfChildren}
                    onChange={(e) => handleChildrenData('numberOfChildren', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                  />
                )}
              </div>

              {formData.numberOfChildren === '3+' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Enter exact number</label>
                  <input
                    type="number"
                    value={formData.numberOfChildren === '3+' ? '' : formData.numberOfChildren}
                    onChange={(e) => handleChildrenData('numberOfChildren', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="4"
                    placeholder="Enter number greater than 3"
                  />
                </div>
              )}

              {formData.children.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-medium">Children Details</h4>
                  {formData.children.map((child, index) => (
                    <div key={child.id} className="border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium mb-3">Child {index + 1}</h5>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                          <div className="flex space-x-4">
                            <label className="flex items-center space-x-1">
                              <input
                                type="radio"
                                name={`childGender${index}`}
                                value="boy"
                                checked={child.gender === 'boy'}
                                onChange={(e) => updateChildData(index, 'gender', e.target.value)}
                              />
                              <span>Boy</span>
                            </label>
                            <label className="flex items-center space-x-1">
                              <input
                                type="radio"
                                name={`childGender${index}`}
                                value="girl"
                                checked={child.gender === 'girl'}
                                onChange={(e) => updateChildData(index, 'gender', e.target.value)}
                              />
                              <span>Girl</span>
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                          <input
                            type="date"
                            value={child.dateOfBirth}
                            onChange={(e) => updateChildData(index, 'dateOfBirth', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Lives With</label>
                          <select
                            value={child.livesWith}
                            onChange={(e) => updateChildData(index, 'livesWith', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            <option value="">Select</option>
                            <option value="me">With Me</option>
                            <option value="exPartner">With Ex-Partner</option>
                            <option value="relatives">With Relatives</option>
                            <option value="hostel">Hostel/Boarding</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={closeChildrenModal}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Save & Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 2 - Additional Information</h2>
      <p className="text-gray-600">This is where you can add the remaining form fields for step 2.</p>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 3 - More Details</h2>
      <p className="text-gray-600">This is where you can add the remaining form fields for step 3.</p>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Step 4 - Final Information</h2>
      <p className="text-gray-600">This is where you can add the remaining form fields for step 4.</p>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderPersonalInfo();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderPersonalInfo();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-600">Step {currentStep} of 4</span>
            <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className={`text-xs ${currentStep >= 1 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
              Personal Info
            </span>
            <span className={`text-xs ${currentStep >= 2 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
              Step 2
            </span>
            <span className={`text-xs ${currentStep >= 3 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
              Step 3
            </span>
            <span className={`text-xs ${currentStep >= 4 ? 'text-blue-600 font-medium' : 'text-gray-400'}`}>
              Final Step
            </span>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`flex items-center px-6 py-2 rounded-md font-medium ${
                currentStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              <ChevronLeft size={20} className="mr-1" />
              Previous
            </button>

            <div className="flex space-x-3">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 font-medium"
              >
                Save Draft
              </button>
              
              {currentStep === 4 ? (
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 font-medium"
                >
                  Submit Application
                </button>
              ) : (
                <button
                  onClick={nextStep}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
                >
                  Next
                  <ChevronRight size={20} className="ml-1" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Form Data Preview (for debugging) */}
        {/* {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 bg-gray-100 rounded-lg p-4">
            <h3 className="font-medium mb-2">Form Data (Debug):</h3>
            <pre className="text-xs overflow-x-auto">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
        )} */}
      </div>

      {/* Children Modal */}
      {showChildrenModal && renderChildrenModal()}
    </div>
  );
};

export default MultiStepRegistrationForm;