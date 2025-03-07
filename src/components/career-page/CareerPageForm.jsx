import { useState } from "react";
import { IconX } from "@tabler/icons-react";

const CareerPageForm = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  // const accessKey = "8036b690-2d80-4c79-83d6-bb72e6cca4c2";
  const accessKey = "4d199e88-28b8-4a31-b339-946abeb57d7d";

  // form submit function
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setLoading(false);
      console.log("Success", data);
      event.target.reset();

      // Wait for 500 milisecond before closing the modal
      setTimeout(() => {
        document.getElementById("career_page_form_modal").close();
      }, 500);
    } else {
      setLoading(false);
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="modal-box">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-lg text-center">Careers!</h3>
        <div className="modal-action m-0">
          <form method="dialog">
            <button className="btn-circle btn-ghost grid place-items-center w-8 h-8">
              <IconX stroke={2} size={"75%"} />
            </button>
          </form>
        </div>
      </div>

      <p className="py-4 text-sm">
        Please fill out the form below. We will be in touch shortly.
      </p>
      <form
        onSubmit={onSubmit}
        noValidate=""
        className="flex flex-col text-black py-4 space-y-4 md:py-0 px-1"
      >
        <div className="join">
          <label className="block flex-1">
            <span className="mb-2 text-black sr-only">Full Name</span>
            <input
              required
              type="text"
              name="Full_Name"
              placeholder="Full Name"
              className="block input input-bordered w-full rounded-e-none focus:outline-none"
            />
          </label>

          <label className="block flex-1">
            <span className="mb-2 text-black sr-only">Email Address</span>
            <input
              required
              type="email"
              name="Email_Address"
              placeholder="Email Address"
              className="block input input-bordered w-full rounded-s-none focus:outline-none"
            />
          </label>
        </div>

        <label className="block">
          <span className="mb-2 text-black sr-only">Phone Number</span>
          <input
            required
            type="number"
            name="Phone_Number"
            placeholder="Phone Number"
            className="block input input-bordered w-full focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="mb-2 text-black sr-only">Select Position</span>
          <select
            required
            name="Select_Position"
            className="select select-bordered w-full focus:outline-none text-gray-500"
          >
            <option disabled selected>
              Select Position
            </option>
            <option>Interns</option>
            <option>Designers</option>
            <option>Supervisors</option>
            <option>HR/Receptionist</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 text-black sr-only">
            Why should we hire you?
          </span>
          <textarea
            required
            name="Why_should_we_hire_you?"
            className="block w-full textarea textarea-bordered focus:outline-none"
            placeholder="Why should we hire you?"
          ></textarea>
        </label>

        {/* <label className="block">
          <span className="mb-2 text-black sr-only">
            Resume or Portfolio file input
          </span>
          <input
            type="file"
            disabled
            name="Resume_or_Portfolio_file"
            className="file-input file-input-bordered text-gray-500 w-full focus:outline-none"
          />
          <span className="text-xs text-gray-600">
            It is a Pro feature, isn&apos;t available in free plan.
          </span>
        </label> */}

        <button
          type="submit"
          className="btn btn-neutral text-base md:text-xl font-normal"
        >
          {loading && (
            <>
              <span className="loading loading-spinner"></span>
            </>
          )}
          Submit
        </button>

        <span className="text-center">{result}</span>
      </form>
      <p className="py-1 text-xs text-center">
        Press ESC key or click the Close button below to close the form
      </p>
    </div>
  );
};

export default CareerPageForm;
