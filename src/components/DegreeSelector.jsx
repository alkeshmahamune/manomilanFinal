import React, { useState,useEffect } from 'react';
import { X } from 'lucide-react';


const EducationSelector = ({ onEducationChange }) => {
  const [selectedDegrees, setSelectedDegrees] = useState([]);

  useEffect(() => {
    // Whenever selectedDegrees changes, update the parent
    onEducationChange(selectedDegrees);
  }, [selectedDegrees, onEducationChange]);

  const educationCategories = [
    {
      category: 'Medicine',
      degrees: ['MBBS', 'MD', 'MS', 'DM', 'MCh', 'DNB', 'BAMS', 'BHMS', 'BDS', 'MDS', 'BPT', 'MPT']
    },
    {
      category: 'Engineering', 
      degrees: ['B.Tech', 'B.E', 'M.Tech', 'M.E', 'Diploma', 'BE CSE', 'BE ECE', 'BE Mech']
    },
    {
      category: 'Science',
      degrees: ['BSc', 'MSc', 'BSc Physics', 'BSc Chemistry', 'BSc Biology', 'BSc Math', 'BSc IT']
    },
    {
      category: 'Commerce',
      degrees: ['BCom', 'MCom', 'BBA', 'MBA', 'CA', 'CS', 'CMA', 'ACCA']
    },
    {
      category: 'Arts',
      degrees: ['BA', 'MA', 'BA English', 'BA History', 'BA Economics', 'BFA', 'MFA']
    },
    {
      category: 'Law',
      degrees: ['LLB', 'LLM', 'BA LLB', 'BBA LLB', 'BCom LLB']
    }
  ];

  const toggleDegree = (degree) => {
    if (selectedDegrees.includes(degree)) {
      setSelectedDegrees(prev => prev.filter(d => d !== degree));
    } else if (selectedDegrees.length < 5) {
      setSelectedDegrees(prev => [...prev, degree]);
    }
  };

  const removeDegree = (degree) => {
    setSelectedDegrees(prev => prev.filter(d => d !== degree));
  };

  return (
    <div className="max-w-8xl mx-auto bg-white rounded-lg shadow-lg">
      {/* Selected Degrees */}
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium text-red-900">Selected Qualifications</span>
          <span className="text-sm text-gray-600">({selectedDegrees.length}/5)</span>
        </div>
        <div className="flex flex-wrap gap-2 min-h-8">
          {selectedDegrees.length === 0 ? (
            <span className="text-gray-500 text-sm italic">No qualifications selected</span>
          ) : (
            selectedDegrees.map((degree) => (
              <span
                key={degree}
                className="inline-flex items-center gap-1 bg-red-900 text-white px-3 py-1 rounded-full text-sm"
              >
                {degree}
                <button
                  type="button"
                  onClick={() => removeDegree(degree)}
                  className="ml-1 hover:bg-red-800 rounded-full p-0.5"
                >
                  <X size={12} />
                </button>
              </span>
            ))
          )}
        </div>
      </div>

      {/* Education Table */}
      <div className="p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-red-900">
              <th className="text-left py-3 px-4 font-semibold text-red-900">Category</th>
              <th className="text-left py-3 px-4 font-semibold text-red-900">Available Degrees</th>
            </tr>
          </thead>
          <tbody>
            {educationCategories.map((category, index) => (
              <tr key={category.category} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-4 px-4 font-medium text-gray-900 align-top w-32">
                  {category.category}
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-2">
                    {category.degrees.map((degree) => {
                      const isSelected = selectedDegrees.includes(degree);
                      const isDisabled = !isSelected && selectedDegrees.length >= 5;
                      
                      return (
                        <button
                          key={degree}
                          type="button"
                          onClick={() => toggleDegree(degree)}
                          disabled={isDisabled}
                          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                            isSelected
                              ? 'bg-red-900 text-white'
                              : isDisabled
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-red-100 text-red-900 hover:bg-red-200 border border-red-300'
                          }`}
                        >
                          {degree}
                        </button>
                      );
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="p-3 bg-gray-50 rounded-b-lg text-center">
        <p className="text-sm text-gray-600">Click on degrees to select/deselect them</p>
      </div>
    </div>
  );
};

export default EducationSelector;