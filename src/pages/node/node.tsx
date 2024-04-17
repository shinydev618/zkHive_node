import { Card } from "./components";
import { Grid, Home as HomeComponent } from "./style";
export const Node = () => {
  return (
    <HomeComponent>
      <div className="container">
        <h2>ZKHIVE NODE DAPP</h2>
        <Grid>
          <div id="item-0">
            <Card
              title="Viruses detected"
              value={23}
              src="/assets/images/node-01.png"
            />
          </div>
          <div id="item-1">
            <Card
              title="Number of scans"
              value={56}
              src="/assets/images/node-02.png"
            />
          </div>
          <div id="item-2">
            <Card
              title="Node earnings"
              value={"0.15 ETH"}
              src="/assets/images/node-03.png"
            />
          </div>
          <div id="item-3" className="item-4">
            <Card
              title="Node name"
              value={<p>000xx00x0xxxxxxX00000xxxx0</p>}
              src="/assets/images/node-05.png"
            />
          </div>
          <div id="item-4">
            <Card
              title="Active"
              value={"Node Status"}
              src="/assets/images/node-01.png"
            />
          </div>
          <div id="item-5">
            <Card
              title="Node Type"
              value={"001"}
              src="/assets/images/node-04.png"
            />
          </div>
          <div id="item-6">
            <Card
              value="Node Location"
              title="US, New York"
              src="/assets/images/node-07.png"
            />
          </div>
          <div id="item-7">
            <Card
              value="Node Location"
              title="US, New York"
              src="/assets/images/node-08.png"
            />
          </div>
        </Grid>
      </div>
    </HomeComponent>
  );
};
