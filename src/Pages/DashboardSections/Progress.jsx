import { FaCalendarAlt } from "react-icons/fa";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { IoIosArrowDown } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

import person1 from "../../assets/Project_Person/person1.jpg";
import person2 from "../../assets/Project_Person/person2.avif";
import person3 from "../../assets/Project_Person/person3.avif";

import project1 from "../../assets/Fourcard/star-image/Element.png";
import { BsThreeDotsVertical } from "react-icons/bs";

const projectList = [
  {
    id: 1,
    image: project1,
    title: "Mobile Banking",
    total: "48 Projects",
    completed: "3 Completed",
    bg: "bg-[#ABCA0E]",
  },
  {
    id: 2,
    image: project1,
    title: "Dashboard UI",
    total: "36 Projects",
    completed: "12 Completed",
    bg: "bg-[#E99D10]",
  },
  {
    id: 3,
    image: project1,
    title: "E-commerce App",
    total: "28 Projects",
    completed: "7 Completed",
    bg: "bg-[#D24545]",
  },
];

const projects = [
  {
    id: 1,
    image: person1,
    date: "12 July 2026",
    progress: 80,
  },
  {
    id: 2,
    image: person2,
    date: "18 July 2026",
    progress: 75,
  },
  {
    id: 3,
    image: person3,
    date: "25 July 2026",
    progress: 50,
  },
];

export default function Progress() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-[15px] mt-[15px]">
      {/* Left */}
      <div className="xl:col-span-8 bg-white border border-[#E8E7EC] rounded-3xl p-2 h-[274px]">
        {/* Header */}
        <div className="flex justify-between items-center  p-2">
          <h2 className="text-[18px] font-semibold">Projects Progress</h2>

          <div className="flex items-center gap-4">
            <button className="flex h-10 items-center gap-2 rounded-xl border border-[#E8E7EC] bg-white px-4 text-[14px] font-medium text-[#4B5563] shadow-sm transition-all duration-200 hover:border-[#ACC822] hover:text-[#ACC822]">
              <span>Recent</span>
              <IoIosArrowDown className="text-sm" />
            </button>

            <button className="text-[#ACC822] text-[14px] font-regular hover:underline">
              See All
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 p-1 gap-4 h-[197px] ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl p-2 border border-[#E8E7EC] overflow-hidden hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt=""
                  className="w-full p-2 rounded-2xl h-[122px] object-cover mx-auto"
                />

                {/* Status */}
                <span className="absolute left-3 top-2 mt-2 rounded-md bg-[#ACC822] px-2 py-1 text-[12px] text-black">
                  In Progress
                </span>

                {/* Three Dots */}
                <button className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center ">
                  <BsThreeDotsVertical size={16} className="text-white" />
                </button>
              </div>

              {/* Body */}
              <div className="p-2">
                <div className="flex justify-between">
                  {/* Left */}
                  <div>
                    <p className="text-[12px] text-[#777777]">Due Date:</p>

                    <div className="flex items-center gap-2 ">
                      <FaCalendarAlt className="" />

                      <p className="text-[14px] font-regular">{project.date}</p>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="w-[32px] h-[32px]">
                    <CircularProgressbar
                      value={project.progress}
                      text={`${project.progress}%`}
                      strokeWidth={14}
                      styles={{
                        path: {
                          stroke: "#ACC822",
                          strokeLinecap: "round",
                        },
                        trail: {
                          stroke: "#ECECEC",
                        },
                        text: {
                          fill: "#1F2937",
                          fontSize: "26px",
                          fontWeight: "600",
                        },
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="xl:col-span-4 h-[274px] rounded-3xl border border-[#E8E7EC] bg-white p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-2">
          <h2 className="text-[17px] font-semibold text-[#1F2937]">
            Project Name
          </h2>

          <button className="text-[13px] font-medium text-[#ACC822] hover:underline">
            See All
          </button>
        </div>

        {/* Project List */}
        <div className="flex-1 space-y-0.5">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all duration-300 hover:bg-[#F7F8F5] cursor-pointer"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className={`h-10 w-10 rounded-full object-cover ${project.bg}`}
              />

              {/* Content */}
              <div>
                <h3 className="text-[14px] font-semibold leading-none text-[#1F2937]">
                  {project.title}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-[11px] text-[#8B8B8B]">
                  <span>{project.total}</span>

                  <span className="h-1 w-1 rounded-full bg-[#BDBDBD]" />

                  <span>{project.completed}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create Project */}
        <div className="pt-1">
          <div className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all duration-300 hover:bg-[#F7F8F5] cursor-pointer">
            {/* Dashed Circle */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#ACC822]">
              <FiPlus size={18} className="text-[#ACC822]" />
            </div>

            {/* Text */}
            <h3 className="text-[14px] font-semibold text-[#1F2937]">
              Create Project
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
