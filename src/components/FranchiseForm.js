"use client";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const FranchiseForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    emailId: "",
    pincode: "",
    stateName: "",
    cityName: "",
    preferredTime: "",
    locationPreference: "",
    ownFranchisee: "No",
    ownRetailSpace: "No",
    propertyAvailability: "",
    areaOfProperty: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You can add API call or email functionality here
    alert("Thank you for your enquiry! We will contact you soon.");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Register for the Kalika franchisee
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FaTimes className="text-xl text-gray-600" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Mobile No.<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your mobile number"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Email Id<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="emailId"
                  value={formData.emailId}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Pincode<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter pincode"
                />
                <p className="text-sm text-blue-500 mt-1 flex items-center">
                  <span className="mr-1">ℹ️</span>
                  Enter Pincode for State & City
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  State Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="stateName"
                  value={formData.stateName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter state name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  City Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="cityName"
                  value={formData.cityName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter city name"
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Preferred time for discussion<span className="text-red-500">*</span>
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select preferred time</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Location Preference<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="locationPreference"
                  value={formData.locationPreference}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter location preference"
                />
              </div>
            </div>

            {/* Radio Button Questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-3 font-medium">
                  Do you own any franchisee
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ownFranchisee"
                      value="Yes"
                      checked={formData.ownFranchisee === "Yes"}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ownFranchisee"
                      value="No"
                      checked={formData.ownFranchisee === "No"}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600"
                    />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-3 font-medium">
                  Do you own a retail space
                </label>
                <div className="flex space-x-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ownRetailSpace"
                      value="Yes"
                      checked={formData.ownRetailSpace === "Yes"}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="ownRetailSpace"
                      value="No"
                      checked={formData.ownRetailSpace === "No"}
                      onChange={handleInputChange}
                      className="mr-2 text-blue-600"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            {/* Dropdown Questions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Property Availability
                </label>
                <select
                  name="propertyAvailability"
                  value={formData.propertyAvailability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select property availability</option>
                  <option value="Immediately Available">Immediately Available</option>
                  <option value="Within 1 Month">Within 1 Month</option>
                  <option value="Within 3 Months">Within 3 Months</option>
                  <option value="Within 6 Months">Within 6 Months</option>
                  <option value="Looking for Property">Looking for Property</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Area of property available
                </label>
                <select
                  name="areaOfProperty"
                  value={formData.areaOfProperty}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select area of property</option>
                  <option value="500-1000 sq ft">500-1000 sq ft</option>
                  <option value="1000-2000 sq ft">1000-2000 sq ft</option>
                  <option value="2000-3000 sq ft">2000-3000 sq ft</option>
                  <option value="3000-5000 sq ft">3000-5000 sq ft</option>
                  <option value="Above 5000 sq ft">Above 5000 sq ft</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300"
              >
                Send Enquiry
              </button>
            </div>

            {/* Contact Info */}
            <div className="text-center pt-4 border-t">
              <p className="text-gray-600">
                Have More Questions? Write to Us at{" "}
                <a
                  href="mailto:sales@kalikaindustries.com"
                  className="text-blue-500 hover:underline"
                >
                  sales@kalikaindustries.com
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;