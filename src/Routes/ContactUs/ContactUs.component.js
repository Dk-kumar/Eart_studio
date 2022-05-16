import NavBarContainer from "../../Component/NavBar/NavBar.container";
import Fields from "../../Component/Fields/Fields.component";
import { Values } from "../../Constant";
import "./ContactUs.style.scss";

const ContactUs = (props) => {
  const { userInputs } = props;
  const { handleOnChange, onSubmit } = props;

  const { fullName, email, phone, message } = userInputs;

  const renderForms = () => {
    return (
      <div className="form-wrapper">
        <Fields
          type={"text"}
          value={fullName}
          name={"fullName"}
          onChange={handleOnChange}
          placeholder={Values.FullName}
        />
        <Fields
          type={"email"}
          value={email}
          name={"email"}
          onChange={handleOnChange}
          placeholder={Values.Email}
        />
        <Fields
          type={"text"}
          value={phone}
          name={"phone"}
          onChange={handleOnChange}
          placeholder={Values.Phone}
          maxLength="10"
        />
        <Fields
          type={"text"}
          value={message}
          name={"message"}
          onChange={handleOnChange}
          placeholder={Values.Message}
        />
        <div className="submit-btn">
          <button onClick={() => onSubmit()} type="button">
            Submit
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="contactUS-container">
      <NavBarContainer />
      {renderForms()}
    </div>
  );
};

export default ContactUs;
