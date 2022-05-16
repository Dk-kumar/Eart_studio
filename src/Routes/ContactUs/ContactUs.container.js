import { useState } from "react";
import ContactUs from "./ContactUs.component";

const ContactUsContainer = () => {
  let formState = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [userInputs, setInputs] = useState(formState);

  const containerStates = {
    userInputs: userInputs,
  };

  const containerFunctions = {
    handleOnChange: (event) => handleOnChange(event),
    onSubmit: () => onSubmit(),
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "phone") {
      if (isNaN(value)) return false;
    }
    setInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const onSubmit = () => {
    console.log(userInputs);
  };

  return <ContactUs {...containerStates} {...containerFunctions} />;
};

export default ContactUsContainer;
