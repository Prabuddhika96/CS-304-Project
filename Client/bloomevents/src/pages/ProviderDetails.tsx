import { Button } from "@mui/material";
import CalenderElement from "components/Elements/CalenderElement";
import PackageTabs from "components/Elements/PackageTabs";
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
import BookRequest from "types/BookRequest";
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

function ProviderDetails() {
  let { providerId } = useParams();

  const [user, setuser] = useState<any>();
  const [provider, setProvider] = useState<any>();

  useEffect(() => {
    let logged = localStorage.getItem("loggedUser");
    if (logged) {
      setuser(JSON.parse(logged));
    } else {
      setuser(null);
    }
  }, [localStorage.getItem("loggedUser")]);

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

  const des =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perferendis corrupti sapiente maiores. Amet reprehenderit natus deserunt labore iste laborum, quam numquam possimus, obcaecati voluptatibus ut dolore tempore est ducimus.";

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

  const [values, setValues] = useState<BookRequest>({
    eventId: 0,
    packageId: 0,
    userId: userId,
    timestamp: "",
  });

  useEffect(() => {
    setValues({
      eventId: eventId,
      packageId: packageId,
      userId: userId,
      timestamp: timestamp ? timestamp : "",
    });
    setSuccessAddEvent(successAddEvent);
  }, [eventId, packageId, userId, successAddEvent]);

  const handleAddToEvent = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (values.eventId === 0 || values.packageId === 0) {
      setEmptyFeild(true);
    } else {
      setOpenbook(false);
      setSuccessAddEvent(true);
    }
  };

  return (
    <div>
      {provider ? (
        <div>
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

                  {Events && packages && (
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
                        {Events && (
                          <BookNowDropDownEvents
                            array={Events}
                            title="Event"
                            func={setEventId}
                            val={values.eventId}
                          />
                        )}

                        {packages && (
                          <BookNowDropdownPackages
                            array={packages}
                            title="Package"
                            func={setPackageId}
                            val={values.packageId}
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
          <div className="flex justify-center w-11/12 mx-auto mt-16">
            <div className="w-7/12 px-8">
              <PackageTabs packages={packages} />
            </div>

            <div className="w-5/12 px-8">
              <Reviews reviews={reviews} />
            </div>
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
        <>
          <ServiceProviderSkeleton />
        </>
      )}
    </div>
  );
}

export default ProviderDetails;
