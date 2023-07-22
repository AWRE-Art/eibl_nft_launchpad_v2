"use client";

import styles from "@/styles/Information.module.css";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import EdInBetweenLines from "./information/EdInBetweenLines";
import AINFTs from "./information/AINFTs";

const Information = () => {
  const color = "white";

  return (
    <div className={styles.primary}>
      {/* <div className={styles.container}> */}
      <Tabs variant='enclosed' color='white'>
        <TabList>
          <Tab>Ed in Between Lines</Tab>
          <Tab>AI NFTs</Tab>
        </TabList>
        <TabPanels>
          <TabPanel className={styles.container}>
            <EdInBetweenLines />
          </TabPanel>
          <TabPanel className={styles.container}>
            <AINFTs />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* </div> */}
    </div>
  );
};

export default Information;
