import { useLocation } from "react-router-dom";
import { RoundedIcon } from "../../icons";
import { UsaFlagIcon } from "../../icons/usa-flag";
import { Card } from "./components";
import { Grid, Home as HomeComponent } from "./style";
export const Node = () => {
  const { state } = useLocation();
  // console.log("state:", state);

  return (
    <HomeComponent>
      <div className="container">
        <h2>ZKHIVE NODE DAPP</h2>
        <Grid>
          <div id="item-0" data-aos="zoom-in">
            <Card
              title="Viruses detected"
              value={state?.virusesDetected}
              src="/assets/images/node-01.png"
            />
          </div>
          <div id="item-1" data-aos="zoom-in">
            <Card
              title="Number of scans"
              value={state?.scansCount}
              src="/assets/images/node-02.png"
            />
          </div>
          <div id="item-2" data-aos="zoom-in">
            <Card
              title="Node Uptime"
              value={state?.uptime}
              src="/assets/images/node-01.png"
            />
          </div>
          <div id="item-3" data-aos="zoom-in" className="item-4">
            <Card
              title="Node ID"
              value={<p>{state?.id}</p>}
              src="/assets/images/node-05.png"
            />
            <img src="/assets/images/image-01.png" className="img-1" />
            <img src="/assets/images/image-02.png" className="img-2" />
          </div>
          <div id="item-4" data-aos="zoom-in">
            <Card
              title={
                <span className="active_status">
                  <RoundedIcon />
                  {state?.status}
                </span>
              }
              value={"Node Status"}
              src="/assets/images/node-01.png"
            />
          </div>
          <div id="item-5" data-aos="zoom-in">
            <Card
              title="Node Type"
              value={state?.type}
              src="/assets/images/node-04.png"
            />
          </div>
          <div id="item-6" data-aos="zoom-in">
            <Card
              value={
                <span className="active_status_flag">
                  <UsaFlagIcon />
                  {state?.locationCountry}, {state?.loactionCity}
                </span>
              }
              title="Location"
              src="/assets/images/last-button.png"
            />
          </div>
          <div id="item-7" data-aos="zoom-in">
            <Card
              value={state?.earnings + " " + state?.earningsType}
              isButton
              buttonTitle="Claim now"
              // title="Node Uptime"
              src="/assets/images/node-08.png"
            />
          </div>
        </Grid>
      </div>
    </HomeComponent>
  );
};
