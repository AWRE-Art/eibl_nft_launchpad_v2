"use client";

import styles from "@/styles/Information.module.css";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

import Bio from "./information/Bio";
import Exhibition from "./information/Exhibition";
import AIExamples from "./information/AIExamples";

const Information = () => {
  const color = "white";

  return (
    <div className={styles.primary}>
      {/* <div className={styles.container}> */}
      <Tabs variant='enclosed' color='white'>
        <TabList>
          <Tab>Bio</Tab>
          <Tab>Exhibition</Tab>
          <Tab>AI Examples</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={styles.container}>
            <Bio />
          </TabPanel>
          <TabPanel className={styles.container}>
            <Exhibition />
          </TabPanel>
          <TabPanel className={styles.container}>
            <AIExamples />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* </div> */}
    </div>
  );
};

export default Information;
