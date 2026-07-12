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

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, ChartTooltip, Legend, ChartDataLabels);

const datas = {
  labels: ["Facebook", "Dribble", "Instagram", "Twitter"],

  datasets: [
    {
      data: [44, 26, 18, 12],

      backgroundColor: ["#8C8C8C", "#1F1F1F", "#C5E71D", "#ACC822"],

      borderColor: "#fff",
      borderWidth: 0,
      hoverOffset: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: "52%",

  plugins: {
    legend: {
      display: false,
    },

    tooltip: {
      enabled: true,
    },

    datalabels: {
      color: "#111",
      backgroundColor: "#C8E71D",
      borderColor: "#111",
      borderWidth: 2,
      borderRadius: 50,

      padding: {
        top: 6,
        bottom: 6,
        left: 10,
        right: 10,
      },

      font: {
        size: 12,
        weight: "700",
      },

      formatter: (value) => `${value}%`,

      offset: 2,

      clip: false,
    },
  },
};

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
        className="
          grid gap-4 
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-[2.06fr_1fr_1.12fr]
        "
      >
        {/* PROJECT OVERVIEW */}
        <div className="md:col-span-2 xl:col-span-1">
          <div className="flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-4">
            {/* Header */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-[16px] sm:text-[18px] font-semibold text-[#1B1B1B]">
                Project Overview
              </h2>

              <div className="flex flex-wrap items-center gap-2">
                <button className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-gray-200 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-medium text-[#252525] transition hover:bg-gray-50">
                  Yearly
                  <FiChevronDown size={16} />
                </button>

                <button className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-gray-200 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-medium text-[#252525] transition hover:bg-gray-50">
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

                  <Tooltip
                    content={<CustomTooltip />}
                    cursor={{
                      stroke: "#ACC822",
                      strokeWidth: 1,
                      strokeDasharray: "4 4",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#ACC822"
                    strokeWidth={2}
                    fill="url(#projectGradient)"
                    dot={false}
                    activeDot={{
                      r: 6,
                      fill: "#ACC822",
                      stroke: "#fff",
                      strokeWidth: 3,
                      style: {
                        cursor: "pointer",
                      },
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* RECENT CLIENTS */}
        <div className="h-full rounded-3xl border border-[#E8E7EC] bg-white p-4 sm:p-5 shadow-sm flex flex-col">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-semibold text-[#1F2937]">
              Recent Clients
            </h2>

            <button className="text-sm font-medium text-[#ACC822] transition-colors hover:text-[#8FB500]">
              See All
            </button>
          </div>

          {/* Client List */}
          <div className="flex-1 space-y-2 overflow-y-auto pr-1">
            {recentClients.map((client) => (
              <div
                key={client.id}
                className="flex items-center gap-3 rounded-2xl p-2 transition-all duration-300 hover:bg-[#F7F8F5] cursor-pointer"
              >
                {/* Avatar */}
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-11 w-11 rounded-full object-cover flex-shrink-0"
                />

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm sm:text-[15px] font-semibold text-[#1F2937]">
                    {client.name}
                  </h3>

                  <p className="mt-0.5 text-xs text-[#9CA3AF]">{client.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOP TRAFFIC */}
        <div className="rounded-3xl border border-[#E8E7EC] bg-white p-5 shadow-sm">
          {/* Header */}

          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-[18px] font-semibold">Top Traffic</h2>

            <button className="flex items-center gap-1.5 sm:gap-2 rounded-xl border border-gray-200 px-2.5 sm:px-3 py-1.5 sm:py-2 text-[12px] sm:text-[13px] font-medium text-[#252525] transition hover:bg-gray-50">
              Weekly
              <FiChevronDown size={16} />
            </button>
          </div>

          {/* Chart */}

          <div className="mx-auto h-[220px] w-[220px]">
            <Doughnut data={datas} options={options} />
          </div>

          {/* Legend */}

          <div className="mt-8 grid grid-cols-2 gap-y-4">
            <div className="flex items-center gap-3">
              <span className="h-3.5 w-3.5 rounded bg-[#B7D71A]" />
              <p className="text-[#767676]">Facebook</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3.5 w-3.5 rounded bg-[#232323]" />
              <p className="text-[#767676]">Dribbble</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3.5 w-3.5 rounded bg-[#D6F521]" />
              <p className="text-[#767676]">Instagram</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3.5 w-3.5 rounded bg-[#AFAFAF]" />
              <p className="text-[#767676]">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
