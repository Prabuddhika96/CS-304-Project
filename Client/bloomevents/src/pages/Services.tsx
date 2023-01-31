import ServiceCard from "components/Cards/ServiceCard";
import image from "img/new/image8.jpg";
import { Link } from "react-router-dom";

import { Provider, useEffect, useState } from "react";

import Select from "react-select";
import { colourOptions } from "docs/data";
import { cards } from "docs/cards";
import { RouteName } from "constant/routeName";
import { ServiceProvider } from "types/ServiceProvider";
import ProviderService from "Services/Provider/ProviderServices";
import { toast } from "react-toastify";
import SimpleBackdrop from "components/Backdrop/SimpleBackdrop";

function Services() {
  const [isClearable /*, setIsClearable*/] = useState(true);

  const [services, setServices] = useState<Array<ServiceProvider>>();

  useEffect(() => {
    ProviderService.getAllServices().then((res: any) => {
      if (res.data.status == 1) {
        setServices(res.data.data);
        //console.log(res.data);
        return;
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  console.log(services);

  return (
    <div className="w-full pt-24">
      {/* search section */}
      <div className="flex justify-around w-full mx-auto">
        <div className="w-3/12">
          <Select
            className=" basic-single"
            classNamePrefix="Category"
            defaultValue={colourOptions[0]}
            // isDisabled={isDisabled}
            // isLoading={isLoading}
            isClearable={isClearable}
            // isRtl={isRtl}
            // isSearchable={isSearchable}
            name="color"
            onChange={(e) => {
              console.log(e?.value);
            }}
            options={colourOptions}
          />
        </div>

        <div className="w-3/12">
          <Select
            className="w-full basic-single"
            classNamePrefix="Category"
            defaultValue={colourOptions[0]}
            isClearable={isClearable}
            name="color"
            onChange={(e) => {
              console.log(e?.value);
            }}
            options={colourOptions}
          />
        </div>

        <div className="w-5/12">
          <Select
            className="w-full basic-single"
            classNamePrefix="Category"
            defaultValue={colourOptions[0]}
            isClearable={isClearable}
            name="color"
            onChange={(e) => {
              console.log(e?.value);
            }}
            options={colourOptions}
          />
        </div>
      </div>

      {/* service cards */}
      <div className="service-card-area">
        {services ? (
          <>
            {services.map((c: any, i: number) => (
              <Link
                to={{
                  pathname: `${RouteName.ProviderDetails.replace(
                    ":providerId",
                    c.providerId.toString()
                  )}`,
                }}
                key={i}>
                <ServiceCard
                  image={image}
                  providerName={c.businessName}
                  district={c.district}
                  category={c.categoryName}
                  packageCount={3}
                  description={c.description}
                  ratings={c.rating}
                />
              </Link>
            ))}
          </>
        ) : (
          <>
            <SimpleBackdrop />
          </>
        )}
      </div>
    </div>
  );
}

export default Services;
