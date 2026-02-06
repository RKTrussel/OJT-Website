import React from "react";
import { ListChecks, Settings, CheckCircle } from "lucide-react";

const ProjectDetails = () => {
  return (
    <div>
      {/* ================= PROJECT DETAILS ================= */}
      <section className="mb-16 md:mb-28">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
          Project Details
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Scope */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm text-center md:text-left">
            <ListChecks className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              Scope
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              (3-STOREY BUILDING)
            </p>
          </div>

          {/* MQP Process */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm">
            <Settings className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-6 mx-auto text-blue-600" />
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">
              Manufacturing Quality Plan (MQP) Process
            </h3>

            <div className="relative ml-4">
              <div className="absolute left-3 top-0 h-full border-l-2 border-gray-300"></div>

              {[
                {
                  step: "1",
                  title: "Specific Order of Materials & P.O.",
                  desc: "Place orders according to production plan to ensure proper material availability.",
                  color: "bg-red-100 text-red-700",
                },
                {
                  step: "2",
                  title: "Source – Site of Materials",
                  desc: "Identify and secure the source of materials needed for production.",
                  color: "bg-green-100 text-green-700",
                },
                {
                  step: "3",
                  title: "Sampling and Laboratory Test",
                  desc: "Perform quality checks through sampling and lab testing to ensure standards.",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  step: "4",
                  title: "Forecasting & Scheduling / Survey of Site",
                  desc: "Plan timelines, forecast material needs, and survey the site for readiness.",
                  color: "bg-green-100 text-green-700",
                },
                {
                  step: "5",
                  title: "Loading – Volume Check & Delivery",
                  desc: "Check volumes during loading and ensure delivery matches the order.",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  step: "6",
                  title: "Site Dumping – Spreading & Compaction",
                  desc: "Distribute and compact materials properly on site.",
                  color: "bg-green-100 text-green-700",
                },
                {
                  step: "7",
                  title: "Final Checking",
                  desc: "Perform final inspection to validate material quality and placement.",
                  color: "bg-red-100 text-red-700",
                },
              ].map((item, i) => (
                <div key={i} className="mb-8 relative pl-10">
                  <div
                    className={`absolute left-0 top-0 w-6 h-6 rounded-full flex items-center justify-center ${item.color} font-semibold`}
                  >
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-sm sm:text-base mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm text-center md:text-left">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 mx-auto" />
            <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">
              Result
            </h3>
            <p className="text-base sm:text-lg text-gray-700">
              Delivered a durable, safer roadway with improved traffic flow and
              reduced maintenance requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
