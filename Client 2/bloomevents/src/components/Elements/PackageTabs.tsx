import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { Package } from "types/Packages";
import { toast } from "react-toastify";
import PackageServices from "Services/Packages/PackageService";

// import {packages1} from 'docs/packages1';

function PackageTabs({ packages }: any) {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <div className="flex w-full">
            <div className="w-4/12">
              {packages ? (
                <Box
                  sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                  }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                    orientation="vertical">
                    {packages.map((p: any, i: number) => (
                      <Tab
                        label={p.packageName}
                        value={(i + 1).toString()}
                        key={i}
                      />
                    ))}
                  </TabList>
                </Box>
              ) : (
                <></>
              )}
            </div>

            {/* description */}
            <div className="w-8/12">
              {packages ? (
                <div>
                  {packages.map((p: any, i: number) => (
                    <TabPanel value={(i + 1).toString()} key={i}>
                      {p.description}
                    </TabPanel>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </TabContext>
      </Box>
    </div>
  );
}

export default PackageTabs;
