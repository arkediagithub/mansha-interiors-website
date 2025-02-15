import { Link } from "react-router-dom";

const ContactPhoneNumber = ({ phoneNumber }) => {
  const numbers = phoneNumber.description.split("/");
  return (
    <div>
      {numbers.map((number, i) => (
        <Link key={i} to={`tel:+91${number}`} className="hover:text-roti-500">
          +91{number} {i < numbers.length - 1 ? "/ " : ""}
        </Link>
      ))}
    </div>
  );
};

export default ContactPhoneNumber;
