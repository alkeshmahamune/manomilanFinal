import React, { useState } from "react";

const SpecialInfo = () => {
  // const { formData, setFormData } = useContext(FormContext);

  const [formData, setFormData] = useState({
    sect: "",
    manglik: "",
    gotra: "",
    foodChoices: "",
    spectacles: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <>
      <h3 className="text-lg font-semibold text-[#7d0a0a] p-4 mb-4 flex items-center">
        <span className="w-2 h-2 bg-[#7d0a0a] rounded-full mr-2"></span>
        Special Information
      </h3>

      <div className="w-full p-4 flex justify-between flex-wrap gap-6">
        {/* Sect Selection */}
        <div className="w-[20%] min-w-[200px]">
          <label htmlFor="sect" className="block text-[#7d0a0a] mb-1">
            Sect:
          </label>
          <select
            name="sect"
            id="sect"
            // value={formData.sect || ""}

            className="w-full border border-gray-400 p-2 rounded-[10px] outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all"
          >
            <option value="">Choose</option>
            <option value="kabir panthi">Kabir Panthi</option>
            <option value="warkari">Warkari</option>
            <option value="malkari">Malkari</option>
            <option value="mahanubhav">Mahanubhav</option>
          </select>
        </div>

        {/* Manglik Status */}
        <div className="w-[20%] min-w-[200px]">
          <label htmlFor="manglik" className="block text-[#7d0a0a] mb-1">
            Manglik:
          </label>
          <select
            name="manglik"
            id="manglik"
            value={formData.manglik || ""}
            className="w-full border border-gray-400 p-2 rounded-[10px] outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all"
          >
            <option value="">Choose</option>
            <option value="manglik">Manglik</option>
            <option value="non-manglik">Non Manglik</option>
            <option value="partial manglik(soumya mangal)">
              Partially Manglik (Soumya Mangal)
            </option>
          </select>
        </div>

        {/* Gotra */}
        <div className="w-[20%] min-w-[200px]">
          <label htmlFor="gotra" className="block text-[#7d0a0a] mb-1">
            Gotra:
          </label>
          <input
            type="text"
            id="gotra"
            name="gotra"
            value={formData.gotra || ""}
            placeholder="Enter Your Gotra"
            className="w-full border border-gray-400 px-2 py-2 rounded-[10px] outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all"
          />
        </div>

        {/* Food Choices */}
        <div className="w-[20%] min-w-[200px]">
          <label htmlFor="food" className="block text-[#7d0a0a] mb-1">
            Food Choices:
          </label>
          <select
            name="food"
            id="food"
            value={formData.foodChoices || ""}
            className="w-full border border-gray-400 p-2 rounded-[10px] outline-none hover:border-[#7d0a0a] focus:border-[#7d0a0a] transition-all"
          >
            <option value="">Choose</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non Vegetarian</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        {/* Spectacles */}
        <div className="w-[20%] min-w-[200px]">
          <label className="block text-[#7d0a0a] mb-1">Spectacles:</label>
          <div className="flex gap-4 mt-2 items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="spectacles"
                value="Yes"
                checked={formData.spectacles === "Yes"}
                onChange={(e) =>
                  handleInputChange("spectacles", e.target.value)
                }
                className="w-4 h-4 cursor-pointer"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="spectacles"
                value="No"
                checked={formData.spectacles === "No"}
                onChange={(e) =>
                  handleInputChange("spectacles", e.target.value)
                }
                className="w-4 h-4 cursor-pointer"
              />
              <span>No</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialInfo;
