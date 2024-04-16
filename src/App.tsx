import { Box } from "@mui/material";
import styled from "styled-components";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

const App = () => {
  return (
    <StyledComponent>
      <NotificationContainer />
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default App;
