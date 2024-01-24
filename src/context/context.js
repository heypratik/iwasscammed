import { createContext, useState } from "react";    

export const Message_data = createContext(null);

export default function Context({ children }) {

    const [activeStep, setActiveStep] = useState(null)

    function completeSteps(stepNumber, type) {
      localStorage.setItem(`${stepNumber}-${type}`, 'Done');
    }

    function checkStep(stepNumber, type) {
      if (localStorage.getItem(`${stepNumber}-${type}`) === 'Done') {
        return true;
      } else {
        return false;
      }
    }
  
    return (
      <Message_data.Provider value={{ activeStep, setActiveStep, completeSteps, checkStep }}>
        {children}
      </Message_data.Provider>
    );
  }