import { Divider } from "@material-ui/core";

import CovidForm from "./CovidForm";
import CovidList from "./CovidList";

const Covid = () => {
  return (
    <>
      <Divider style={{ marginTop: "1rem", marginBottom: "2rem" }} />
      <CovidForm />
      <CovidList />
    </>
  );
};

export default Covid;
