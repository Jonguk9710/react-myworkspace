import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartSample = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stdDay" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          name="신규 확진자 수"
          type="monotone"
          dataKey="incDec"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          name="사망자 수"
          type="monotone"
          dataKey="deathCnt"
          stroke="#82ca9d"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineChartSample;
