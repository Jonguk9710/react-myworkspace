import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import BarChartSample from "./BarChartSample";

import { useEffect, useState } from "react";
import api from "../../api/opendata";
import Covid from "../covid19/Covid";
import covidApi from "../../api/covid";

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

const transformLocationData = (source, sido, covidData) => {
  if (source.length === 0) return [];

  covidData.filter((item) => {
    if (item.name === sido) {
      return (sido = item.location);
    }
    return sido;
  });

  console.log(sido);

  const transData = [];
  let item = {};
  source.map((covid) => {
    if (covid.gubun === sido) {
      item.stdDay = covid.stdDay.substr(7, 6);
      item.incDec = parseInt(covid.incDec);
      transData.unshift(item);
      item = {};
    }
    return transData;
  });
  return transData;
};

const CovidRisk = () => {
  const classes = useStyles();
  const [sido, setSido] = useState("");
  const [source, setSource] = useState([]);
  const [covidData, setCovidData] = useState([]);

  const gubun = covidData.map((a) => a.name);

  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchCovidDaily();
      setSource(result.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const result = await covidApi.fetch();
      setCovidData(result.data);
    };
    getData();
  }, []);

  return (
    // Grid 컨테이너 선언
    // spacing: Grid Item(내부요소) 들의 띄어쓰기
    <Grid container spacing={2} className={classes.container}>
      {/* Grid 아이템 선언 lg사이즈 이상일 때 2칸 */}
      {/* item 공간 핪이 12개가되면 다음행으로 넘어감 */}
      {/* 1행 */}
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={7} lg={6}>
        <Paper className={classes.paper}>
          <h3>지역별 코로나19 위험도</h3>
          <Covid />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} lg={4}>
        <Paper className={classes.paper} style={{ height: "63vh" }}>
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
          <BarChartSample
            data={transformLocationData(source, sido, covidData)}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
export default CovidRisk;
