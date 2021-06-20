import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import BarChartSample from "./BarChartSample";
import LineChartSample from "./LineChartSample";
import { useEffect, useState } from "react";
import api from "../../api/opendata";

const useStyles = makeStyles((theme) => ({
  // 내부 페이퍼에 스타일을 지정
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  // 화면이 1280px 이상이면 그리드 컨테이너 위쪽에 마진을 줌.
  container: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },
  },
}));

const transformLocationData = (source, sido) => {
  if (source.length === 0) return [];

  let sidoData = source.filter(function (covid) {
    return covid.gubun === sido;
  });
  return sidoData;
};
const Home = () => {
  const classes = useStyles();
  const [sido, setSido] = useState("");
  const [source, setSource] = useState([]);

  const gubun = source.map((a) => a.gubun);

  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchCovidDaily();
      setSource(result.data);
    };
    getData();
  }, []);
  return (
    // Grid 컨테이너 선언
    // spacing: Grid Item(내부요소) 들의 띄어쓰기
    <Grid container spacing={3} className={classes.container}>
      {/* Grid 아이템 선언 lg사이즈 이상일 때 2칸 */}
      {/* item 공간 핪이 12개가되면 다음행으로 넘어감 */}
      {/* 1행 */}
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={7} lg={6}>
        <Paper className={classes.paper} style={{ height: "30vh" }}>
          <h3>시도별 코로나19 현황</h3>
          <BarChartSample data={source} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} lg={4}>
        <Paper className={classes.paper} style={{ height: "30vh" }}>
          <h3>
            <Select
              value={sido}
              onChange={(event) => {
                setSido(event.target.value);
              }}
            >
              {gubun.map((sido, index) => (
                <MenuItem key={`menu-${sido}}`} value={sido}>
                  {gubun[index]}
                </MenuItem>
              ))}
            </Select>
            {"\u00A0"} 코로나19 현황
          </h3>
          <LineChartSample data={transformLocationData(source, sido)} />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={12} lg={10}>
        <Paper className={classes.paper} style={{ height: "50vh" }} />
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
    </Grid>
  );
};
export default Home;
