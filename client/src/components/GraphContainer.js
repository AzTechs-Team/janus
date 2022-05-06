import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    time: 5,
  },
  {
    name: "Tue",
    time: 8,
  },
  {
    name: "Wed",
    time: 2,
  },
  {
    name: "Thur",
    time: 4.5,
  },
  {
    name: "Fri",
    time: 3,
  },
  {
    name: "Sat",
    time: 5,
  },
  {
    name: "Sun",
    time: 2,
  },
];

const GraphContainer = () => {
  return (
    <Box
      pt={4}
      px={6}
      bgColor="accent.700"
      borderRadius="xl"
      width={{ base: 900, xl: 1000, "2xl": 1090 }}
      height={{ base: 320, "2xl": 360 }}
    >
      <Text
        pb={{ base: 4, "2xl": 8 }}
        pt={2}
        fontWeight="bold"
        pl={6}
        fontSize="xl"
        color="accent.100"
      >
        Summary
      </Text>
      <div
        style={{
          width: "100%",
          height: "80%",
          marginBottom: "12px",
        }}
      >
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="purple" x1="0" y1="0" x2="0" y2="1">
                <stop offset="15%" stopColor="#9C9DF3" stopOpacity={1} />
                <stop offset="85%" stopColor="#29293E" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity="0.7" />
            <XAxis dataKey="name" tick={{ stroke: "#D6D6FE", fontSize: 11 }} />
            <YAxis tick={{ stroke: "#D6D6FE", fontSize: 11 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#29293E",
                color: "#fff",
                borderRadius: "12px",
              }}
            />
            <Area
              type="monotone"
              dataKey="time"
              stroke="#8884d8"
              fill="url(#purple)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default GraphContainer;
