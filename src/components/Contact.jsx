import React, { useEffect, useState } from "react";
import contactImage from "../assets/img/contactGif.gif";
import { GiCrossMark } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { ScaleLoader } from "react-spinners";

const Contact = ({ props }) => {
  const contactFormSchema = z.object({
    first: z.string().min(1, { message: "Name is required" }),
    last: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z
      .string()
      .min(0, { message: "Message must be at least 10 characters long" })
      .refine(
        (val) => val.split(" ").filter((word) => word.length > 0).length <= 80,
        { message: "Message must be 80 words or fewer" }
      ),
  });

  const [inputs, setInputs] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  const [warning, setWarning] = useState("");
  const publicKey = "MT5c7ZkiIluvMc2eE";
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    let data = {
      service_id: "service_lnkyj88",
      template_id: "template_h3htq9a",
      user_id: publicKey,

      template_params: inputs,
    };

    const result = contactFormSchema.safeParse(inputs);

    if (!result.success) {
      const errors = result.error.format();
      setLoading(false);

      if (errors.firstName) {
        setWarning("Name: " + errors.name._errors[0]);
        return;
      }

      if (errors.lastName) {
        setWarning("Last Name: " + errors.lastName._errors[0]);
        return;
      }
      if (errors.email) {
        setWarning("Email: " + errors.email._errors[0]);
        return;
      }
      if (errors.message) {
        setWarning("Message: " + errors.message._errors[0]);
        return;
      }
    } else {
      console.log();
      emailjs
        .send(data.service_id, data.template_id, inputs, data.user_id)
        .then((e) => {
          setTimeout(() => {
            handleToggle();
          }, 1000);
          setWarning("Submitted");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleToggle = () => {
    if (props.isVisible) {
      setHasAnimated(false);
      setHasAnimated(true);
    }
    setTimeout(() => {
      props.setIsVisible(!props.isVisible);
    }, 200);
  };
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <AnimatePresence>
      {props.isVisible && (
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          exit={{ x: "-100vw" }}
          transition={{ type: "spring", stiffness: 60 }}
          onAnimationComplete={() => setHasAnimated(!hasAnimated)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            //  transform: "translateY(-50%)",
          }}
          className={`fixed flex z-50 top-0 rounded-xl p-5 h-screen bg-opacity-45  justify-center transition-colors items-center w-full
     ${hasAnimated ? "bg-black" : "bg-transparent"}`}
        >
          <div className="relative  bg-[#414145] shadow-[0px_0px_56px_-7px_#394866] text-white rounded-lg flex justify-center items-center ">
            <div className="absolute top-5 right-5">
              <GiCrossMark
                onClick={handleToggle}
                className="text-white text-lg cursor-pointer"
              />
            </div>
            <div className="flex justify-between w-full p-4 h-full">
              <div className="md:flex hidden justify-center  items-center">
                <img width={400} src={contactImage} alt="Contact" />
              </div>
              <div className="pt-4 form-breal:w-[50%]">
                <div>
                  <h3 className="text-4xl font-bold form-breal:text-left text-center w-full ">
                    Thank You For Reaching Us
                  </h3>
                </div>
                <div>
                  <div className=" mt-5  flex justify-center flex-col items-center">
                    <div className="flex form-breal:flex-row flex-col">
                      <div className="flex  mr-2 flex-col">
                        <label
                          htmlFor="first"
                          className="text-gray-500 text-center form-breal:text-left text-sm"
                        >
                          First name
                        </label>
                        <input
                          value={inputs.first}
                          onChange={(e) => {
                            setInputs({ ...inputs, first: e.target.value });
                          }}
                          type="text"
                          id="first"
                          className="p-2 border text-black border-gray-500  rounded-xl outline-none"
                          placeholder="First name"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="last"
                          className="text-gray-500 text-center form-breal:text-left  text-sm"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          value={inputs.last}
                          onChange={(e) => {
                            setInputs({ ...inputs, last: e.target.value });
                          }}
                          id="last"
                          className="p-2 w-[95%] border text-black border-gray-500  rounded-xl outline-none"
                          placeholder="Last name"
                        />
                      </div>
                    </div>
                    <div className="w-full mt-5">
                      <div className="flex flex-col mr-5">
                        <label
                          htmlFor="email"
                          className="text-gray-500 text-center form-breal:text-left  text-sm"
                        >
                          Email
                        </label>
                        <input
                          value={inputs.email}
                          onChange={(e) => {
                            setInputs({ ...inputs, email: e.target.value });
                          }}
                          type="mail"
                          id="email"
                          className="p-2  border text-black border-gray-500  rounded-xl outline-none"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col w-full">
                      <label
                        htmlFor="country"
                        className="text-gray-500 text-sm text-center form-breal:text-left "
                      >
                        Message
                      </label>
                      <textarea
                        value={inputs.message}
                        onChange={(e) => {
                          setInputs({ ...inputs, message: e.target.value });
                        }}
                        type="text"
                        className="form-breal:h-36 text-black  border p-2 w-[95%] border-gray-500  rounded-xl outline-none"
                        placeholder="message"
                      />
                    </div>
                    <p className="text-center mt-1">{warning}</p>
                    <div className="mt-5 w-full">
                      <button
                        className="w-[95%] py-2 text-white rounded-lg bg-[#7494a1] 
                cursor-pointer flex justify-center items-center   transition-all "
                        onClick={handleSubmit}
                      >
                        {loading ? (
                          <ScaleLoader color="#ffffff" height={15} />
                        ) : (
                          "Send Message"
                        )}{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Contact;
