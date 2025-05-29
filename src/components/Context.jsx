import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    selectTime: '',
    nativePlace: '',
    placeOfBirth: '',
    heightFeet: '',
    heightInches: '',
    subcaste: '',
    caste: '',
    religion: '',
    occupation: 'PrivateService',
    monthlyIncome: '',
    nationality: [],
    motherTongue: 'marathi',
    fatherName: '',
    motherName: '',
    maternalUncleSurname: '',
    parentContact: '',
    whatsappNo: '',
    alternateNo: '',
    brothers: '',
    sisters: '',
    divyang: '',
    maritalStatus: '',
    // Children data
    hasChildren: '',
    numberOfChildren: '',
    children: []
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
