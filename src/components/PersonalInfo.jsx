import React, { useState } from "react";
import { X, User, Calendar, MapPin, Phone, Users } from "lucide-react";
import Select from "react-select";


const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dob: "",
    birthTime: "",
    nativePlace: "",
    placeOfBirth: "",
    maritalStatus: "Unmarried",
    height: "5'4\"",
    occupation: "privateService",
    monthlyIncome: "",
    nationality: "India",
    caste: "",
    motherTongue: "marathi",
    fatherName: "",
    motherName: "",
    mamkul: "",
    parentNumber: "",
    wpNo: "",
    alternateNo: "",
    brother: "",
    sister: "",
    divyang: "no",
  });

  const [showChildrenPopup, setShowChildrenPopup] = useState(false);
  const [showChildrenDetailsPopup, setShowChildrenDetailsPopup] = useState(false);
  const [hasChildren, setHasChildren] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [customChildrenCount, setCustomChildrenCount] = useState("");
  const [childrenDetails, setChildrenDetails] = useState([]);
  
  const generateHeightOptions = () => {
  const options = [];
  for (let feet = 4; feet <= 6; feet++) {
    for (let inch = 0; inch <= 11; inch++) {
      const totalInches = feet * 12 + inch;
      if (totalInches >= 54 && totalInches <= 78) { // 4'6" to 6'6"
        const label = `${feet}'${inch}"`;
        options.push(
          <option key={label} value={label}>
            {label}
          </option>
        );
      }
    }
  }
  return options;
};


  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Show children popup for divorced/widowed
    if (
      field === "maritalStatus" &&
      (value === "Divorced" || value === "Widowed")
    ) {
      setShowChildrenPopup(true);
    }
  };

  const handleChildrenResponse = (response) => {
    setHasChildren(response);
    setShowChildrenPopup(false);
    if (response === "yes") {
      setShowChildrenDetailsPopup(true);
    }
  };

  const handleChildrenCountSelection = (count) => {
    const finalCount =
      count === "more" ? parseInt(customChildrenCount) : parseInt(count);
    setNumberOfChildren(finalCount);

    // Initialize children details array
    const newChildrenDetails = Array(finalCount)
      .fill(null)
      .map(() => ({
        gender: "",
        dob: "",
        livingWith: "",
      }));
    setChildrenDetails(newChildrenDetails);
  };

  const handleChildDetailChange = (index, field, value) => {
    const updatedDetails = [...childrenDetails];
    updatedDetails[index] = {
      ...updatedDetails[index],
      [field]: value,
    };
    setChildrenDetails(updatedDetails);
  };

  const closeChildrenDetailsPopup = () => {
    setShowChildrenDetailsPopup(false);
    setNumberOfChildren("");
    setCustomChildrenCount("");
    setChildrenDetails([]);
  };

  const nationalityOptions = [
  { value: "Indian", label: "Indian" },
  { value: "American", label: "American" },
  { value: "Canadian", label: "Canadian" },
  { value: "British", label: "British" },
  { value: "Australian", label: "Australian" },
  { value: "Other", label: "Other" },
  ];

  const handleNationalityChange = (selectedOptions) => {
    handleInputChange("nationality", selectedOptions || []);
  };

  const isModalOpen = showChildrenPopup || showChildrenDetailsPopup;

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-8xl mx-auto px-4">
        {/* Form */}
        <div
          className={`bg-white rounded-lg p-8 transition-all duration-300 ${
            isModalOpen ? "blur-sm pointer-events-none" : ""
          }`}
        >
          <div className="space-y-6">
            {/* Name Fields Row */}
            <div className="flex w-[100%] flex-wrap gap-6">
              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter first name"
                />
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Middle Name
                </label>
                <input
                  type="text"
                  value={formData.middleName}
                  onChange={(e) =>
                    handleInputChange("middleName", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter middle name"
                />
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter last name"
                />
              </div>

              {/* Gender, DOB, Birth Time Row */}
              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Gender *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                    />
                    Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={(e) =>
                        handleInputChange("gender", e.target.value)
                      }
                    />
                    Female
                  </label>
                </div>
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleInputChange("dob", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                />
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Birth Time
                </label>
                <input
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) =>
                    handleInputChange("birthTime", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                />
              </div>

              {/* Location Fields Row */}

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Native Place
                </label>
                <input
                  type="text"
                  value={formData.nativePlace}
                  onChange={(e) =>
                    handleInputChange("nativePlace", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter native place"
                />
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Place of Birth
                </label>
                <input
                  type="text"
                  value={formData.placeOfBirth}
                  onChange={(e) =>
                    handleInputChange("placeOfBirth", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter place of birth"
                />
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Marital Status *
                </label>
                <select
                  value={formData.maritalStatus}
                  onChange={(e) =>
                    handleInputChange("maritalStatus", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                >
                  <option value="Unmarried">Unmarried</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Divorcedinprocess">Divorce In Process</option>
                  <option value="Widowed">Widowed</option>
                </select>
              </div>

              {/* Physical and Professional Details Row */}
              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Height
                </label>
                <select
                  value={formData.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                >
                  <option value="" disabled>
                    Select height
                  </option>
                  {generateHeightOptions()}
                </select>
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Occupation
                </label>
                <select
                  value={formData.occupation}
                  onChange={(e) =>
                    handleInputChange("occupation", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                >
                  <option value="privateService">Private Service</option>
                  <option value="government">Government Service</option>
                  <option value="business">Business</option>
                  <option value="professional">Professional</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Monthly Income
                </label>
                <input
                  type="text"
                  value={formData.monthlyIncome}
                  onChange={(e) =>
                    handleInputChange("monthlyIncome", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter monthly income"
                />
              </div>

              {/* Cultural Details Row */}
              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Nationality
                </label>
                <Select
                  isMulti
                  options={nationalityOptions}
                  value={formData.nationality}
                  onChange={handleNationalityChange}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Select up to 2 nationalities"
                  isSearchable
                  closeMenuOnSelect={false}
                  noOptionsMessage={() => "No matching nationality"}
                />
                {formData.nationality.length < 1 && (
                  <p className="text-xs text-red-600 mt-1">
                    At least 1 nationality is required.
                  </p>
                )}
                {formData.nationality.length > 2 && (
                  <p className="text-xs text-red-600 mt-1">
                    You can select a maximum of 2 nationalities.
                  </p>
                )}
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Caste
                </label>
                <select
                  value={formData.caste}
                  onChange={(e) => handleInputChange("caste", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                >
                  <option value="">Select caste</option>
                  <option value="Kunbi,Maratha,Hindu">Kunbi,Maratha,Hindu</option>
                  <option value="Kunbi,Maratha,Hindu">Kunbi,Maratha,Hindu</option>
                  <option value="Kunbi,Maratha,Hindu">Kunbi,Maratha,Hindu</option>
                </select>
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Mother Tongue
                </label>
                <input
                  type="text"
                  value={formData.motherTongue}
                  onChange={(e) =>
                    handleInputChange("motherTongue", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                />
              </div>

              {/* Family Details Row */}
              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Father's Name
                </label>
                <input
                  type="text"
                  value={formData.fatherName}
                  onChange={(e) =>
                    handleInputChange("fatherName", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter father's name"
                />
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Mother's Name
                </label>
                <input
                  type="text"
                  value={formData.motherName}
                  onChange={(e) =>
                    handleInputChange("motherName", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter mother's name"
                />
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Mamkul
                </label>
                <input
                  type="text"
                  value={formData.mamkul}
                  onChange={(e) => handleInputChange("mamkul", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter mamkul"
                />
              </div>

              {/* Contact Details Row */}
              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Parent Number
                </label>
                <input
                  type="tel"
                  value={formData.parentNumber}
                  onChange={(e) =>
                    handleInputChange("parentNumber", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter parent's number"
                />
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  value={formData.wpNo}
                  onChange={(e) => handleInputChange("wpNo", e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter WhatsApp number"
                />
              </div>

              <div className="w-[20%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Alternate Number
                </label>
                <input
                  type="tel"
                  value={formData.alternateNo}
                  onChange={(e) =>
                    handleInputChange("alternateNo", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                  placeholder="Enter alternate number"
                />
              </div>

              {/* Siblings and Other Details Row */}
              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Number of Brothers
                </label>
                <div className="flex flex-wrap gap-2">
                  {[0, 1, 2, 3, 4].map((num) => (
                    <label
                      key={`brother-${num}`}
                      className="flex items-center gap-1"
                    >
                      <input
                        type="radio"
                        name="brother"
                        value={num}
                        checked={formData.brother == num}
                        onChange={(e) =>
                          handleInputChange("brother", e.target.value)
                        }
                      />
                      {num}
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Number of Sisters
                </label>
                <div className="flex flex-wrap gap-2">
                  {[0, 1, 2, 3, 4].map((num) => (
                    <label
                      key={`sister-${num}`}
                      className="flex items-center gap-1"
                    >
                      <input
                        type="radio"
                        name="sister"
                        value={num}
                        checked={formData.sister == num}
                        onChange={(e) =>
                          handleInputChange("sister", e.target.value)
                        }
                      />
                      {num}
                    </label>
                  ))}
                </div>
              </div>

              <div className="w-[23%] min-w-[200px]">
                <label className="block text-sm font-medium text-[#7d0a0a] mb-2">
                  Divyang (Differently Abled)
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="divyang"
                      value="Yes"
                      checked={formData.divyang === "Yes"}
                      onChange={(e) =>
                        handleInputChange("divyang", e.target.value)
                      }
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input
                      type="radio"
                      name="divyang"
                      value="No"
                      checked={formData.divyang === "No"}
                      onChange={(e) =>
                        handleInputChange("divyang", e.target.value)
                      }
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Children Popup */}
      {showChildrenPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#7d0a0a]">
                Children Information
              </h3>
              <button
                onClick={() => setShowChildrenPopup(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">Do you have children?</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleChildrenResponse("yes")}
                className="flex-1 px-4 py-2 bg-[#7d0a0a] text-white rounded-lg hover:bg-red-800 transition-colors shadow-md"
              >
                Yes
              </button>
              <button
                onClick={() => handleChildrenResponse("no")}
                className="flex-1 px-4 py-2 border border-[#7d0a0a] text-[#7d0a0a] rounded-lg hover:bg-[#7d0a0a] hover:text-white transition-colors shadow-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Children Details Popup */}
      {showChildrenDetailsPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#7d0a0a]">
                Children Details
              </h3>
              <button
                onClick={closeChildrenDetailsPopup}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!numberOfChildren && (
              <div>
                <p className="text-gray-600 mb-4">
                  How many children do you have?
                </p>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() =>
                        handleChildrenCountSelection(num.toString())
                      }
                      className="px-4 py-2 border border-[#7d0a0a] text-[#7d0a0a] rounded-lg hover:bg-[#7d0a0a] hover:text-white transition-colors shadow-md"
                    >
                      {num} {num === 1 ? "Child" : "Children"}
                    </button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={customChildrenCount}
                    onChange={(e) => setCustomChildrenCount(e.target.value)}
                    placeholder="More than 3"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                    min="4"
                  />
                  <button
                    onClick={() => handleChildrenCountSelection("more")}
                    disabled={
                      !customChildrenCount || parseInt(customChildrenCount) < 4
                    }
                    className="px-4 py-2 bg-[#7d0a0a] text-white rounded-lg hover:bg-red-800 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed shadow-md"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}

            {numberOfChildren && childrenDetails.length > 0 && (
              <div>
                <p className="text-gray-600 mb-4">
                  Please provide details for each child:
                </p>
                <div className="space-y-6">
                  {childrenDetails.map((child, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                    >
                      <h4 className="font-medium text-[#7d0a0a] mb-3">
                        Child {index + 1}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Gender
                          </label>
                          <div className="flex space-x-4">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name={`gender-${index}`}
                                value="boy"
                                checked={child.gender === "boy"}
                                onChange={(e) =>
                                  handleChildDetailChange(
                                    index,
                                    "gender",
                                    e.target.value
                                  )
                                }
                                className="mr-2 text-[#7d0a0a] focus:ring-[#7d0a0a]"
                              />
                              Boy
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                name={`gender-${index}`}
                                value="girl"
                                checked={child.gender === "girl"}
                                onChange={(e) =>
                                  handleChildDetailChange(
                                    index,
                                    "gender",
                                    e.target.value
                                  )
                                }
                                className="mr-2 text-[#7d0a0a] focus:ring-[#7d0a0a]"
                              />
                              Girl
                            </label>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            value={child.dob}
                            onChange={(e) =>
                              handleChildDetailChange(
                                index,
                                "dob",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Living With
                          </label>
                          <select
                            value={child.livingWith}
                            onChange={(e) =>
                              handleChildDetailChange(
                                index,
                                "livingWith",
                                e.target.value
                              )
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7d0a0a] focus:border-transparent"
                          >
                            <option value="">Select</option>
                            <option value="me">With Me</option>
                            <option value="spouse">With Ex-Spouse</option>
                            <option value="relatives">With Relatives</option>
                            <option value="hostel">Hostel/Boarding</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={closeChildrenDetailsPopup}
                    className="px-6 py-2 bg-[#7d0a0a] text-white rounded-lg hover:bg-red-800 transition-colors shadow-md"
                  >
                    Save Details
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
