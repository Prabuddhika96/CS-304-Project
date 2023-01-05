import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import {packages} from 'docs/packages';

function PackageTabs() {
    const [value, setValue] = React.useState('1');  

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <div>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                
                {packages.map((p:any,i:number)=>(
                  <Tab label={p.name} className={`w-[${Math.floor(100/packages.length)}%] overflow-auto whitespace-nowrap`} value={(i+1).toString()} key={i} />
                ))}

              </TabList>
            </Box>

              {packages.map((p:any,i:number)=>(
                <TabPanel value={(i+1).toString()} key={i}>{p.des}</TabPanel>
              ))}

          </TabContext>
        </Box>
      </div>
    );
}

export default PackageTabs