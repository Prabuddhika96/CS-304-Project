import { Box, Button, Tab } from "@mui/material";
import CalenderElement from "components/Elements/CalenderElement";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { reviews } from "docs/reviews";
import { Events } from "docs/Event";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import logo from "img/logo.png";

import { AiOutlineClose } from "react-icons/ai";
import { RouteName } from "constant/routeName";
import ProviderDetailsCard from "components/Cards/ProviderDetailsCard";
import SuccessSnakBar from "components/Snak Bars/SuccessSnakBar";
import Reviews from "components/Cards/Reviews";
import Carousel from "components/Carousel/Carousel";
import ServiceProviderSkeleton from "skeleton/Service Provider/ServiceProviderSkeleton";
import { toast } from "react-toastify";
import ProviderService from "Services/Provider/ProviderServices";
import React from "react";
import PackageServices from "Services/Packages/PackageService";
import { Package } from "types/Packages";
import BookNowDropdownPackages from "components/Drop Downs/BookNowDropdownPackages";
import BookNowDropDownEvents from "components/Drop Downs/BookNowDropDownEvents";
import EventServices from "Services/Event/EventServices";
import { Event } from "types/Event";
import { AddToEvent } from "types/AddToEvent";
import AddToEventService from "Services/AddToEvent/AddToEventService";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PackageList from "components/Elements/PackageList";

function ProviderDetails() {
  let { providerId } = useParams();

  const [user, setuser] = useState<any>();
  const [provider, setProvider] = useState<any>();

  useEffect(() => {
    setTimeout(() => {
      let logged = localStorage.getItem("loggedUser");
      if (logged) {
        setuser(JSON.parse(logged));
        let ProviderMode = localStorage.getItem("ProviderMode");
        if (ProviderMode) {
          ProviderMode = JSON.parse(ProviderMode);
          if (ProviderMode) {
            navigate(
              RouteName.MyServices.replace(":id", user?.userId.toString())
            );
          }
        }
      } else {
        setuser(null);
      }
    }, 1000);
  }, [
    localStorage.getItem("loggedUser"),
    localStorage.getItem("ProviderMode"),
  ]);

  React.useEffect(() => {
    ProviderService.getProvider(providerId).then((res: any) => {
      if (res.data.status == 1) {
        setProvider(res.data.data);
        return;
      } else {
        //toast.error(res.data.message);
      }
    });
  }, []);

  // get packages
  const [packages, setPackages] = useState<Array<Package>>();

  React.useEffect(() => {
    PackageServices.getPackagesByProviderId(providerId).then((res: any) => {
      if (res.data.status == 1) {
        setPackages(res.data.data);
        return;
      } else {
        //toast.error(res.data.message);
      }
    });
  }, []);

  // get user events
  const [events, setEvents] = useState<Array<Event>>();
  React.useEffect(() => {
    setTimeout(() => {
      EventServices.getEventsByUserId(1).then((res: any) => {
        if (res.data.status == 1) {
          const filteredData = res.data.data?.filter(
            (emp: any) => emp.placed == false
          );
          setEvents(filteredData);
          //console.log(res.data.data);
          return;
        } else {
          //toast.error(res.data.message);
        }
      });
    }, 1000);
  }, []);

  // more Info
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //book Now
  const navigate = useNavigate();
  const [openbook, setOpenbook] = useState(false);

  const handleClickOpenBook = () => {
    if (user) {
      setOpenbook(true);
    } else {
      navigate(RouteName.Login);
    }
  };

  const handleCloseBook = () => {
    setOpenbook(false);
  };

  // choose event
  const [successAddEvent, setSuccessAddEvent] = useState<boolean>(false);
  const [emptyField, setEmptyFeild] = useState<boolean>(false);

  const [eventId, setEventId] = useState<any | 0>(0);
  const [packageId, setPackageId] = useState<any | 0>(0);
  const [userId, setUserId] = useState<any | 0>(0);
  const [timestamp, setTimestamp] = useState<any | null>(null);

  const [values, setValues] = useState<AddToEvent>({
    addToEventId: 0,
    eventId: 0,
    packagesPackageId: 0,
    isApproved: false,
    isPlaced: false,
  });

  useEffect(() => {
    setValues({
      addToEventId: 0,
      eventId: eventId,
      packagesPackageId: packageId,
      isApproved: false,
      isPlaced: false,
    });
    setSuccessAddEvent(successAddEvent);
  }, [eventId, packageId, userId, successAddEvent]);

  const handleAddToEvent = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (values.eventId === 0 || values.packagesPackageId === 0) {
      setEmptyFeild(true);
    } else {
      if (user == null) {
        navigate(RouteName.Login);
        return;
      }
      setTimeout(async () => {
        const result = await AddToEventService.addPackageToEvent(values);
        //console.log(result);
        if (result.data.status == 1) {
          setOpenbook(false);
          setSuccessAddEvent(true);
          console.log(values);
        } else {
          toast.error("Adding Failed");
        }
      }, 1000);
    }
  };

  // package and review
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      {provider ? (
        <div>
          {/* <ServiceProviderSkeleton /> */}
          <div className="flex justify-around w-full pt-24">
            <div className="w-8/12 px-16">
              <div className="flex mb-5">
                <div className="">
                  <img src={logo} alt="" className="w-28" />
                </div>
                <div>
                  <h1 className="text-4xl text-[#c26d06]">
                    {provider.businessName}
                  </h1>
                  <h1 className="text-lg">{provider.categoryName}</h1>
                </div>
              </div>

              {/* <SwiperElemet width={"850px"} height={"500px"} thumbnails={true} time={4000} b_radius={"10px"}/> */}
              <Carousel />
            </div>

            <div className="w-4/12 px-8 mt-[80px]">
              <h1 className="text-lg text-[#000] uppercase">Avalble Slots</h1>
              <div className="bottom-0 mt-5">
                <CalenderElement />
              </div>

              <div>
                <div className="flex justify-around w-10/12 mt-5">
                  <Button
                    variant="contained"
                    color="success"
                    className="!bg-[#bd6800] hover:!bg-[#965200]"
                    onClick={handleClickOpen}>
                    More Infomation
                  </Button>

                  {Events && packages && user && (
                    <Button
                      variant="contained"
                      color="secondary"
                      className="!bg-[#bd6800] hover:!bg-[#965200]"
                      onClick={handleClickOpenBook}>
                      Add to Event
                    </Button>
                  )}
                </div>

                {/* // more information */}
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                  <DialogActions>
                    <h1 onClick={handleClose}>
                      <AiOutlineClose className="p-1 text-2xl text-red-700 hover:bg-red-300" />
                    </h1>
                  </DialogActions>

                  <DialogTitle id="alert-dialog-title">
                    <div className="flex items-center">
                      <img src={logo} alt="" className="w-20" />
                      <h1 className="text-3xl">{provider.businessName}</h1>
                    </div>
                  </DialogTitle>

                  <DialogContent>
                    <ProviderDetailsCard providerDetails={provider} />
                  </DialogContent>
                </Dialog>

                {/* //add to Event */}
                <div className="flex items-center justify-start w-4/12 px-16 mt-16">
                  <Dialog open={openbook} onClose={handleCloseBook}>
                    <DialogActions>
                      <h1 onClick={handleCloseBook}>
                        <AiOutlineClose className="p-1 text-2xl text-red-700 hover:bg-red-300" />
                      </h1>
                    </DialogActions>

                    <DialogTitle>
                      Make your day with {provider.businessName}
                    </DialogTitle>

                    <DialogContent>
                      <div className="w-[11/12]">
                        {events && user && (
                          <BookNowDropDownEvents
                            array={events}
                            title="Event"
                            func={setEventId}
                            val={values.eventId}
                          />
                        )}

                        {packages && user && (
                          <BookNowDropdownPackages
                            array={packages}
                            title="Package"
                            func={setPackageId}
                            val={values.packagesPackageId}
                          />
                        )}
                      </div>
                    </DialogContent>

                    <DialogActions>
                      <Button
                        onClick={handleAddToEvent}
                        variant="contained"
                        className="!bg-[#bd6800] hover:!bg-[#965200]">
                        Add to Event
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>

          {/* package Details */}
          <div>
            <Box
              sx={{ width: "80%", margin: "50px auto", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example">
                    <Tab label="Packages" value="1" />
                    <Tab label="Customer Reviews" value="2" />
                    {/* <Tab label="Item Three" value="3" /> */}
                  </TabList>
                </Box>

                <TabPanel value="1">
                  {packages ? <PackageList packages={packages} /> : <></>}
                </TabPanel>

                <TabPanel value="2">
                  {reviews ? <Reviews reviews={reviews} /> : <></>}
                </TabPanel>
              </TabContext>
            </Box>
          </div>

          <div className="absolute bottom-0 left-0">
            {successAddEvent && (
              <SuccessSnakBar
                func={setSuccessAddEvent}
                type="success"
                val={successAddEvent}
                msg={"Successfully Added !"}
              />
            )}
            {emptyField && (
              <SuccessSnakBar
                func={setEmptyFeild}
                type="error"
                val={emptyField}
                msg={"You can not have empty fields !"}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="w-full">
          <ServiceProviderSkeleton />
        </div>
      )}
    </div>
  );
}

export default ProviderDetails;
