import React from "react";
import { FiPhone, FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-4 sm:mt-6 rounded-2xl sm:rounded-3xl border border-[#E8E7EC] bg-white overflow-hidden">
      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        {/* Top */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
          {/* Company */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#ACC822]/15">
                <FiBriefcase className="text-[#ACC822] text-xl sm:text-2xl" />
              </div>

              <div>
                <h2 className="text-lg sm:text-xl font-bold text-[#1B1B1B]">
                  Solutya Pvt. Ltd.
                </h2>

                <p className="text-xs sm:text-sm text-[#767676]">
                  Innovative Digital Solutions
                </p>
              </div>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#767676]">
              We build modern digital products with innovative technology and
              user-focused solutions that help businesses grow.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="mb-5 text-lg font-semibold text-[#1B1B1B]">
              Contact
            </h3>

            <div className="space-y-5 w-full">
              {/* Phone */}
              <div className="flex flex-col items-center gap-2 md:flex-row md:items-start md:gap-3">
                <div className="rounded-xl bg-[#ACC822]/15 p-2">
                  <FiPhone className="text-[#ACC822]" />
                </div>

                <div>
                  <p className="text-xs text-[#767676]">Phone</p>
                  <p className="text-sm sm:text-base font-medium text-[#1B1B1B]">
                    01329659900
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col items-center gap-2 md:flex-row md:items-start md:gap-3">
                <div className="rounded-xl bg-[#ACC822]/15 p-2">
                  <FiMail className="text-[#ACC822]" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-[#767676]">Email</p>

                  <p className="break-all text-sm sm:text-base font-medium text-[#1B1B1B]">
                    contact@solutya.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:col-span-2 xl:col-span-1">
            <h3 className="mb-5 text-lg font-semibold text-[#1B1B1B]">
              Office Address
            </h3>

            <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
              <div className="rounded-xl bg-[#ACC822]/15 p-2">
                <FiMapPin className="text-[#ACC822]" />
              </div>

              <p className="text-sm leading-7 text-[#767676]">
                House 1/C (Opposite Building of Zirkon Tower, Level-5), Road-02,
                Sector-03, Uttara, Dhaka-1230, Bangladesh.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-[#E8E7EC] pt-5">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <p className="text-center md:text-left text-sm leading-6 text-[#767676]">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#1B1B1B]">
                Solutya Pvt. Ltd.
              </span>{" "}
              All rights reserved.
            </p>

            <span className="rounded-full bg-[#ACC822]/15 px-4 py-2 text-sm font-medium text-[#ACC822]">
              Powered by Solutya
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
