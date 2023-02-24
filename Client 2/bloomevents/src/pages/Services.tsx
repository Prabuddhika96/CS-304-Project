import ServiceCard from "components/Cards/ServiceCard";
import image from "img/new/image8.jpg";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { RouteName } from "constant/routeName";
import { ServiceProvider } from "types/ServiceProvider";
import ProviderService from "Services/Provider/ProviderServices";
import { toast } from "react-toastify";
import { Category } from "types/Category";
import CategoryService from "Services/Category/CategoryService";
import ServiceCardSkeleton from "skeleton/ServiceCardSkeleton/ServiceCardSkeleton";
import AutoComplete from "components/AutoComplete/AutoComplete";

function Services() {
  const [isClearable /*, setIsClearable*/] = useState(true);

  const [services, setServices] = useState<Array<ServiceProvider>>();
  const [categories, setCategories] = useState<Array<Category>>();

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

  useEffect(() => {
    CategoryService.getAllCategories().then((res: any) => {
      if (res.data.status == 1) {
        setCategories(res.data.data);
        //console.log(res.data);
        return;
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  //console.log(categories);

  return (
    <div className="w-full pt-24">
      {/* search section */}
      <div className="flex justify-around w-full mx-auto">
        <div className="w-3/12">
          <AutoComplete />
        </div>

        <div className="w-3/12">
          <AutoComplete />
        </div>

        <div className="w-3/12">
          <AutoComplete />
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
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
            <ServiceCardSkeleton />
          </>
        )}
      </div>
    </div>
  );
}

export default Services;
