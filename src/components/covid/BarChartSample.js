import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const incDecColor = (val) => {
  let color = "#329fff";

  if (val >= 0 && val < 10) {
    color = "#1fcf33";
  } else if (val >= 10 && val < 100) {
    color = "#ff8400";
  } else if (val >= 100) {
    color = "#ff0000";
  }

  return color;
};

const BarChartSample = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="stdDay" fontsize={"12px"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name="신규 확진자 수" dataKey="incDec">
          {data.map((covid, index) => (
            <Cell
              key={`incDec-${index}`}
              fill={incDecColor(covid.incDec)}
            ></Cell>
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartSample;
