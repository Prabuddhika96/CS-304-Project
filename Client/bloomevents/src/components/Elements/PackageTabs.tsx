import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// import {packages} from 'docs/packages';

function PackageTabs( {packages}:any ) {
    const [value, setValue] = React.useState('1');  

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };
  
    return (
      <div className=''>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <div className="flex w-full">
             
              <div className='w-4/12'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' ,display: 'flex'}}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" orientation="vertical">                
                    {packages.map((p:any,i:number)=>(
                      <Tab label={p.name} value={(i+1).toString()} key={i} />
                    ))}
                  </TabList>
                </Box>
              </div>

              <div className='w-8/12'>
                {packages.map((p:any,i:number)=>(
                  <TabPanel value={(i+1).toString()} key={i} >{p.des}</TabPanel>
                ))}
              </div>
              
            </div>
          </TabContext>
        </Box>
      </div>
    );
}

export default PackageTabs