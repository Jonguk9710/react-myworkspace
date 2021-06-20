import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartSample = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="gubun" fontsize={"12px"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="신규 확진자 수" dataKey="incDec" fill="#ff6f00" />
        <Bar name="사망자 수" dataKey="deathCnt" fill="#f70202" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartSample;
