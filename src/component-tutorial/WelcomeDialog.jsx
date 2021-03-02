import FancyBorder from "./FancyBorder";

const WelcomeDialog = (props) => {
  return (
    <FancyBorder>
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  );
};

export default WelcomeDialog;
