import React from "react";
import "./Help.css";
const Help = () => {
  return (
    <div className="">
      <div className="pagebg py-28 px-20 flex justify-center items-center flex-col text-center relative z-10">
        <div className="w-[10vh] relative z-10">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="512"
              height="512"
              x="0"
              y="0"
              viewBox="0 0 96 96"
              className="w-[16vh] h-[16vh]"
            >
              <g>
                <path
                  d="M8.314 27.536 6.089 30.52c-1.023 1.372-1.412 3.121-1.066 4.798s1.395 3.13 2.877 3.985L25.874 49.68a6.002 6.002 0 0 0 8.512-2.823 3.09 3.09 0 0 1 1.292-1.451l24.307-13.973a5.437 5.437 0 0 0 4.659-.231 1 1 0 0 0 .413-1.353l-4.225-7.946a.997.997 0 0 0-1.353-.413 5.46 5.46 0 0 0-2.797 3.733l-16.456 8.065 4.768-11.077a2.998 2.998 0 0 0-1.255-3.785L26.035 8.204a3 3 0 0 0-3.905.806l-2.016 2.704-5.547-3.203a3.967 3.967 0 0 0-3.035-.398 3.972 3.972 0 0 0-2.429 1.863l-4.565 7.908a4.025 4.025 0 0 0 .141 4.227l3.637 5.427zm51.289-3.684 3.15 5.927a3.461 3.461 0 0 1-2.089-.224l-1.023-1.923-1.022-1.923c.127-.71.473-1.356.983-1.856zM37.549 36.099c.304.288.753.357 1.13.174l18.477-9.056 1.439 2.707L34.68 43.671a5.112 5.112 0 0 0-2.134 2.395 4.002 4.002 0 0 1-5.674 1.882L8.898 37.571a4.003 4.003 0 0 1-1.207-5.855l2.661-3.568c.011-.015.023-.028.033-.044l10.869-14.576 20.263 11.698-4.198 9.753c-.165.385-.073.831.229 1.12zM23.733 10.204a.998.998 0 0 1 1.302-.268l17.704 10.222a.999.999 0 0 1 .418 1.261l-.843 1.958-19.855-11.463 1.274-1.708zM6.269 18.883l4.565-7.908a1.998 1.998 0 0 1 2.731-.732l5.343 3.085-9.327 12.508-3.243-4.839a2.01 2.01 0 0 1-.07-2.113zM91.554 57.812c-.223-.147-5.51-3.605-10.477-2.743-5.182.901-8.642 4.782-8.489 9.473-1.867 1.911-2.865 4.619-3.356 7.41a9.387 9.387 0 0 0-1.67-2.212c.563-5.068-1.76-7.448-5.423-9.407-1.298-.693-2.616-.881-3.892-1.062-2.31-.328-4.697-.667-7.729-4.012a1 1 0 0 0-1.739.615c-.019.314-.404 7.771 3.438 12.323 2.54 3.01 5.89 4.599 9.192 4.599 1.734 0 3.447-.465 5.03-1.365 1.453 1.577 2.203 3.799 2.331 6.783-1.51.209-3.013.376-4.851.337-3.282-.062-9.154.894-11.173 8.183a1.001 1.001 0 0 0 .964 1.267h31.752a.998.998 0 0 0 .989-1.146c-1.033-7.029-7.772-9.362-12.069-9.251-1.314.042-2.496.177-3.627.331-.007-.13-.007-.266-.016-.393a.98.98 0 0 0 .066-.325c0-3.109.448-8.216 3.057-11.097 1.447.978 2.771 1.396 4.045 1.396 1.619 0 3.159-.661 4.776-1.655 1.074-.66 1.775-1.545 2.454-2.401 1.194-1.508 2.429-3.066 6.068-3.834a1 1 0 0 0 .347-1.811zm-37.808 9.095c-2.106-2.495-2.737-6.186-2.916-8.571 2.752 2.292 5.145 2.632 7.136 2.915 1.204.171 2.243.318 3.229.846 2.815 1.505 4.441 3.032 4.456 6.161-1.807-1.08-3.14-1.744-4.313-2.326-1.265-.628-2.356-1.17-3.76-2.089a.999.999 0 1 0-1.096 1.672c1.503.985 2.699 1.58 3.966 2.208 1.161.577 2.478 1.23 4.266 2.304.019.011.034.026.053.037-3.626 1.629-7.991.436-11.021-3.157zm20.698 12.696c2.301-.105 8.271.982 9.786 6.396H55.097c1.826-4.584 5.729-5.509 8.778-5.449 2.235.044 4.056-.196 5.803-.445.043.006.081.025.126.025a.993.993 0 0 0 .425-.102c1.373-.197 2.69-.378 4.215-.425zm9.125-17.388c-.622.786-1.159 1.465-1.933 1.94-2.26 1.389-3.953 1.898-6.138.638.03-.017.056-.038.086-.055 1.331-.716 2.958-1.729 4.266-2.543.704-.438 1.293-.807 1.646-1.006a1 1 0 0 0-.986-1.74c-.368.209-.982.591-1.717 1.048-1.261.786-2.821 1.756-4.085 2.44.588-2.957 3.145-5.28 6.711-5.899 2.494-.437 5.189.5 6.983 1.333-2.609 1.036-3.819 2.563-4.833 3.843zM46.792 57.812c-.223-.147-5.511-3.605-10.477-2.743-5.182.901-8.642 4.782-8.489 9.473-1.867 1.911-2.865 4.619-3.356 7.41a9.387 9.387 0 0 0-1.67-2.212c.563-5.068-1.76-7.448-5.423-9.407-1.299-.693-2.617-.881-3.892-1.062-2.31-.328-4.697-.667-7.729-4.012a1.001 1.001 0 0 0-1.739.615c-.019.314-.404 7.771 3.437 12.323 2.54 3.01 5.891 4.599 9.193 4.599 1.734 0 3.447-.465 5.03-1.365 1.453 1.577 2.203 3.799 2.331 6.783-1.511.209-3.016.376-4.852.337-3.277-.052-9.153.894-11.172 8.183a1.001 1.001 0 0 0 .964 1.267H40.7a.998.998 0 0 0 .989-1.146c-1.034-7.029-7.779-9.362-12.07-9.251-1.313.042-2.496.177-3.626.331-.007-.13-.007-.266-.016-.393a.98.98 0 0 0 .066-.325c0-3.109.448-8.216 3.057-11.097 1.447.978 2.771 1.396 4.045 1.396 1.619 0 3.159-.661 4.776-1.655 1.074-.66 1.775-1.545 2.454-2.401 1.194-1.508 2.429-3.066 6.068-3.834a1 1 0 0 0 .347-1.811zM8.983 66.907c-2.105-2.495-2.736-6.186-2.915-8.571 2.752 2.292 5.145 2.632 7.136 2.915 1.203.171 2.243.318 3.229.846 2.815 1.505 4.441 3.032 4.456 6.161-1.807-1.08-3.14-1.744-4.313-2.326-1.265-.628-2.356-1.17-3.76-2.089a.999.999 0 1 0-1.096 1.672c1.503.985 2.699 1.58 3.966 2.208 1.161.577 2.478 1.23 4.266 2.304.019.011.034.026.053.038-3.625 1.629-7.99.436-11.022-3.157zm20.698 12.696c2.305-.105 8.272.982 9.787 6.396H10.336c1.824-4.585 5.712-5.515 8.777-5.449 2.235.047 4.058-.194 5.805-.445.043.006.081.025.125.025a.993.993 0 0 0 .425-.102c1.372-.197 2.689-.378 4.214-.425zm9.126-17.388c-.622.786-1.159 1.465-1.933 1.94-2.259 1.389-3.953 1.898-6.138.638.03-.017.056-.038.086-.055 1.331-.716 2.958-1.729 4.266-2.543.704-.438 1.293-.807 1.646-1.006a1 1 0 0 0-.986-1.74c-.368.209-.982.591-1.717 1.048-1.261.786-2.821 1.756-4.085 2.44.588-2.957 3.145-5.28 6.711-5.899 2.496-.437 5.189.5 6.983 1.333-2.609 1.036-3.819 2.563-4.833 3.843z"
                  fill="#fff7f7"
                  opacity="1"
                  data-original="#000000"
                ></path>
                <path
                  d="M64.079 44.96c-2.065 0-4.696 4.79-4.696 7.066 0 2.59 2.106 4.696 4.696 4.696s4.696-2.106 4.696-4.696c0-2.218-2.68-7.066-4.696-7.066zm0 9.763a2.7 2.7 0 0 1-2.696-2.696c0-1.583 1.909-4.693 2.652-5.048.771.438 2.74 3.46 2.74 5.048a2.7 2.7 0 0 1-2.696 2.696zM67.805 43.546a4.123 4.123 0 0 0 4.118-4.118c0-1.971-2.308-6.119-4.118-6.119-1.965 0-4.119 4.295-4.119 6.119a4.123 4.123 0 0 0 4.119 4.118zm-.021-8.175c.681.531 2.139 2.837 2.139 4.057 0 1.168-.95 2.118-2.118 2.118s-2.119-.95-2.119-2.118c0-1.202 1.389-3.545 2.099-4.057zM75.148 52.76a4.124 4.124 0 0 0 4.119-4.119c0-1.971-2.308-6.119-4.119-6.119-1.964 0-4.118 4.295-4.118 6.119a4.124 4.124 0 0 0 4.118 4.119zm-.021-8.176c.681.53 2.14 2.837 2.14 4.057 0 1.169-.95 2.119-2.119 2.119s-2.118-.95-2.118-2.119c0-1.202 1.389-3.546 2.098-4.057z"
                  fill="#fff7f7"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </p>
        </div>
        <div className="relative z-10 py-2">
          <h2 className="py-2 lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-[#fff] font-semibold lg:leading-[50px]">
            We Are Right Here To Help You Realize Your Green Dream <br></br>{" "}
            CALL US: <span className="text-[#828E4C]">+8801746770324</span>
          </h2>
          <button className="bg-[#828E4C] hover:bg-[#fff] hover:text-[#262626] duration-300 text-[#fff] px-6 py-3 text-[14px] font-medium tracking-[2px] my-4">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Help;
