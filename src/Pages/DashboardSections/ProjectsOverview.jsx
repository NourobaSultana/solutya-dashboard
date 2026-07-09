import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FiChevronDown } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdArrowOutward } from "react-icons/md";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { month: "Jan", value: 800 },
  { month: "", value: 450 },
  { month: "", value: 430 },
  { month: "Feb", value: 800 },
  { month: "", value: 800 },
  { month: "", value: 400 },
  { month: "Mar", value: 500 },
  { month: "", value: 800 },
  { month: "", value: 700 },
  { month: "Apr", value: 800 },
  { month: "", value: 810 },
  { month: "", value: 820 },
  { month: "May", value: 824 },
  { month: "", value: 600 },
  { month: "", value: 500 },
  { month: "Jun", value: 800 },
  { month: "", value: 700 },
  { month: "Jul", value: 800 },
  { month: "", value: 700 },
  { month: "", value: 600 },
];

const trafficData = [
  { name: "Dribble", value: 26, color: "#1F1F1F" },
  { name: "Instagram", value: 18, color: "#C5E71D" },
  { name: "Dribbble", value: 12, color: "#ACC822" },
  { name: "Twitter", value: 44, color: "#8C8C8C" },
];

const recentClients = [
  {
    id: 1,
    name: "John Anderson",
    image: "https://i.pravatar.cc/150?img=11",
    time: "30 min ago",
  },
  {
    id: 2,
    name: "Sophia Carter",
    image: "https://i.pravatar.cc/150?img=32",
    time: "45 min ago",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "https://i.pravatar.cc/150?img=15",
    time: "1 hour ago",
  },
  {
    id: 4,
    name: "Emma Wilson",
    image: "https://i.pravatar.cc/150?img=44",
    time: "2 hours ago",
  },
  {
    id: 5,
    name: "Daniel Smith",
    image: "https://i.pravatar.cc/150?img=21",
    time: "3 hours ago",
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl bg-black px-3 py-2 shadow-lg">
        <p className="text-center text-[12px] font-regular text-white/70">
          {label} {label && "2025"}
        </p>

        <p className="mt-1 text-center text-[14px] font-regular text-white">
          {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};
const ProjectsOverview = () => {
  return (
    <div>
      <div
        className="grid gap-4 mt-4 "
        style={{ gridTemplateColumns: "2.06fr 1fr 1.12fr" }}
      >
        <div>
          <div className=" flex h-[354px] flex-col rounded-3xl border border-gray-200 bg-white p-4">
            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[18px] font-semibold text-[#1B1B1B]">
                Project Overview
              </h2>

              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-[13px] font-medium text-[#252525] transition hover:bg-gray-50">
                  Yearly
                  <FiChevronDown size={16} />
                </button>

                <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2 text-[13px] font-medium text-[#252525] transition hover:bg-gray-50">
                  View Report
                  <MdArrowOutward size={16} />
                </button>
              </div>
            </div>

            {/* Graph */}
            <div className="min-h-0 flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{
                    top: 8,
                    right: 10,
                    left: -18,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient
                      id="projectGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#ACC822" stopOpacity={0.7} />
                      <stop
                        offset="100%"
                        stopColor="#ACC822"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="#ECECEC"
                    strokeDasharray="5 5"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#7A7A7A", fontSize: 12 }}
                  />

                  <YAxis
                    domain={[0, 1600]}
                    ticks={[0, 100, 200, 400, 600, 800, 1000, 1600]}
                    interval={0}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#7A7A7A", fontSize: 12 }}
                  />

                  <Tooltip content={<CustomTooltip />} cursor={false} />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ACC822"
                    strokeWidth={2}
                    fill="url(#projectGradient)"
                    dot={false}
                    activeDot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-[354px] rounded-3xl border border-[#E8E7EC] bg-white p-4 flex flex-col">
            {/* Header */}
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-[18px] font-semibold text-[#1F2937]">
                Recent Clients
              </h2>

              <button className="text-[14px] font-medium text-[#ACC822] transition hover:underline">
                See All
              </button>
            </div>

            {/* Client List */}
            <div className="flex-1 space-y-1 overflow-hidden">
              {recentClients.map((client) => (
                <div
                  key={client.id}
                  className="flex items-center gap-1 rounded-2xl p-1 transition-all duration-300 hover:bg-[#F7F8F5] cursor-pointer"
                >
                  {/* Avatar */}
                  <img
                    src={client.image}
                    alt={client.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />

                  {/* Content */}
                  <div className="flex flex-col">
                    <h3 className="text-[15px] font-semibold text-[#1F2937]">
                      {client.name}
                    </h3>

                    <p className="mt-0.5 text-[12px] text-[#9CA3AF]">
                      {client.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="h-[354px] rounded-3xl border border-[#E8E7EC] bg-white p-4 shadow-sm">
            {/* Header */}
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-[18px] font-semibold text-[#1F2937]">
                Top Traffic
              </h2>

              <button className="flex items-center gap-2 rounded-xl border border-[#E8E7EC] px-3 py-2 text-[13px] font-medium text-[#444] transition hover:border-[#ACC822] hover:text-[#ACC822]">
                Weekly
                <FiChevronDown size={15} />
              </button>
            </div>

            {/* Chart */}
            <div className="relative mx-auto h-[170px] w-[170px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData}
                    innerRadius={38}
                    outerRadius={70}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              {/* Percentage Labels */}

              <span className="absolute border border-black left-2 top-5 rounded-full bg-[#ACC822] px-2 py-1 text-[11px] font-semibold">
                18%
              </span>

              <span className="absolute right-0 border border-black top-14 rounded-full bg-[#ACC822] px-2 py-1 text-[11px] font-semibold">
                26%
              </span>

              <span className="absolute border border-black bottom-4 right-5 rounded-full bg-[#ACC822] px-2 py-1 text-[11px] font-semibold">
                44%
              </span>

              <span className="absolute border border-black bottom-17 -left-2 rounded-full bg-[#ACC822] px-2 py-1 text-[11px] font-semibold">
                12%
              </span>
            </div>

            {/* Legend */}

            <div className="mt-6 grid grid-cols-2 gap-y-4 px-2">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-[#ACC822]" />
                <span className="text-[14px] text-[#7B7B7B]">Facebook</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-[#1F1F1F]" />
                <span className="text-[14px] text-[#7B7B7B]">Dribbble</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-[#C5E71D]" />
                <span className="text-[14px] text-[#7B7B7B]">Instagram</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-[#8D8D8D]" />
                <span className="text-[14px] text-[#8C8C8C]">Twitter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
