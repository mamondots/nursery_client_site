import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="xl:px-20 px-8 bg-[#EFEFE3] w-full py-16">
        <div className="grid lg:grid-cols-2">
          <div className="border flex flex-col gap-8 py-12 lg:px-12 px-4">
            <div className="flex items-center gap-4">
              <p className="px-3 py-3 border border-[#c5c5c5] bg-[#fff] text-xl text-[#828E4C]">
                <FaMapMarkerAlt />
              </p>
              <div>
                <h2 className="font-semibold text-lg"> Office Address</h2>
                <p className="text-[#797979]">Mirpur-0, Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="px-3 py-3 border border-[#c5c5c5] bg-[#fff] text-xl text-[#828E4C]">
                <FaPhone />
              </p>
              <div>
                <h2 className="font-semibold text-lg"> Phone</h2>
                <p className="text-[#797979]">+8801746770324</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="px-3 py-3 border border-[#c5c5c5] bg-[#fff] text-xl text-[#828E4C]">
                <MdEmail />
              </p>
              <div>
                <h2 className="font-semibold text-lg"> Mail</h2>
                <p className="text-[#797979]">almamon757@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="px-2 py-2 hover:bg-[#828E4C] hover:text-[#fff] duration-300 cursor-pointer border border-[#c5c5c5] bg-[#fff] text-xl text-[#828E4C]">
                <FaFacebookF />
              </p>

              <p className="px-2 py-2 hover:bg-[#828E4C] hover:text-[#fff] duration-300 cursor-pointer border border-[#c5c5c5] bg-[#fff] text-xl text-[#828E4C]">
                <FaTwitter />
              </p>

              <p className="px-2 py-2 hover:bg-[#828E4C] hover:text-[#fff] duration-300 cursor-pointer border border-[#c5c5c5] bg-[#fff] text-xl text-[#828E4C]">
                <FaInstagram />
              </p>

              <p className="px-2 py-2 hover:bg-[#828E4C] hover:text-[#fff] duration-300 cursor-pointer border border-[#c5c5c5] bg-[#fff] text-xl text-[#828E4C]">
                <FaWhatsapp />
              </p>
            </div>
          </div>

          <div className="bg-[#fff] lg:px-12 px-4 py-8">
            <div className="text-center">
              <p className="font-semibold text-[#828E4C]">CONTACT US</p>
              <h2 className="text-2xl font-semibold py-2">
                Get In Touch Contact
              </h2>
            </div>

            <div>
              <form action="" className="flex flex-col w-full gap-4 mt-4">
                <input
                  className="py-3 px-6 outline-none bg-[#EFEFE3] text-sm font-medium border"
                  type="text"
                  placeholder="Your Name..."
                />
                <input
                  className="py-3 px-6 outline-none bg-[#EFEFE3] text-sm font-medium border"
                  type="email"
                  placeholder="Your Email..."
                />
                <textarea
                  className="py-3 px-6 outline-none bg-[#EFEFE3] text-sm font-medium border"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Your Text..."
                ></textarea>

                <input
                  className="py-3 px-6 outline-none bg-[#828E4C] hover:bg-[#262626] hover:text-[#828E4C] duration-300 cursor-pointer text-[#fff] text-sm font-medium border"
                  type="submit"
                  value="SUBMIT"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.700322525578!2d90.34355868346044!3d23.794581992123337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0e96fce29dd%3A0x6ccd9e51aba9e64d!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1720851894201!5m2!1sen!2sbd"
          width="600"
          height="450"
          loading="lazy"
          className="w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
