/* eslint-disable no-param-reassign */
/**
=========================================================
*  React - v2.1.0
=========================================================

* Product Page: https://researchgrips.com/
* Copyright 2024 (https://Vivian-Aniebonam)

Coded by Vivian-Aniebonam

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function TabsSimple() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  return (
    <Container>
      <Grid container item justifyContent="center" xs={12} lg={4} mx="auto">
        <AppBar position="static">
          <Tabs value={activeTab} onChange={handleTabType}>
            <Tab label="My Profile" />
            <Tab label="Dashboard" />
          </Tabs>
        </AppBar>
      </Grid>
    </Container>
  );
}

export default TabsSimple;
