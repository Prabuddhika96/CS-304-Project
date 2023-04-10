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
import { districts } from "docs/districts";
import { TextField } from "@mui/material";

interface Option {
  value: string;
  label: string;
}

function Services() {
  // get categories
  const [categories, setCategories] = useState<Category[]>();
  const [autoCategories, setAutoCategories] = useState<Option[]>([]);
  const [selectCategory, setSelectCategory] = useState<any>(null);

  useEffect(() => {
    CategoryService.getAllCategories().then((res: any) => {
      if (res.data.status === 1) {
        const categories = res.data.data;
        const autoCategories = categories.map((category: Category) => ({
          value: category.categoryId,
          label: category.categoryName,
        }));
        setCategories(categories);
        setAutoCategories(autoCategories);
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  // get districts
  const [district, setDistrict] = useState<any>();
  const [autoDistricts, setAutoDistricts] = useState<Option[]>([]);
  const [selectDistrict, setSelectDistrict] = useState<any>(null);

  useEffect(() => {
    const districtSet = districts;
    const autoDistrictSet = districtSet.map((d: any) => ({
      value: d.id,
      label: d.district,
    }));
    setDistrict(districtSet);
    setAutoDistricts(autoDistrictSet);
  }, []);

  // get services
  const [services, setServices] = useState<Array<ServiceProvider>>();
  const [filteredServices, setFilteredServices] =
    useState<Array<ServiceProvider>>(); // for filter purpose

  useEffect(() => {
    ProviderService.getAllServices().then((res: any) => {
      if (res.data.status === 1) {
        setServices(res.data.data);
        setFilteredServices(res.data.data);
        // console.log(res.data.data);
        return;
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  const [searchName, setSearchName] = useState<any>("");

  // data filtering
  useEffect(() => {
    setSelectCategory(selectCategory);
    // console.log(searchName);
    if (selectCategory !== null) {
      if (selectDistrict !== null) {
        if (searchName !== "") {
          const filteredData = services?.filter(
            (emp: any) =>
              emp.categoryId === selectCategory.value &&
              emp.district === selectDistrict.label &&
              emp.businessName.toLowerCase().includes(searchName.toLowerCase())
          );
          setFilteredServices(filteredData);
        } else {
          const filteredData = services?.filter(
            (emp: any) =>
              emp.categoryId === selectCategory.value &&
              emp.district === selectDistrict.label
          );
          setFilteredServices(filteredData);
        }
      } else {
        if (searchName !== "") {
          const filteredData = services?.filter(
            (emp: any) =>
              emp.categoryId === selectCategory.value &&
              emp.businessName.toLowerCase().includes(searchName.toLowerCase())
          );
          setFilteredServices(filteredData);
        } else {
          const filteredData = services?.filter(
            (emp: any) => emp.categoryId === selectCategory.value
          );
          setFilteredServices(filteredData);
        }
      }
    } else {
      if (selectDistrict !== null) {
        if (searchName !== "") {
          const filteredData = services?.filter(
            (emp: any) => (emp: any) =>
              emp.district === selectDistrict.label &&
              emp.businessName.toLowerCase().includes(searchName.toLowerCase())
          );
          setFilteredServices(filteredData);
        } else {
          const filteredData = services?.filter(
            (emp: any) => emp.district === selectDistrict.label
          );
          setFilteredServices(filteredData);
        }
      } else {
        if (searchName !== "") {
          const filteredData = services?.filter(
            (emp: any) => (emp: any) =>
              emp.businessName.toLowerCase().includes(searchName.toLowerCase())
          );
          setFilteredServices(filteredData);
        } else {
          setFilteredServices(services);
        }
      }
    }
  }, [selectCategory, selectDistrict, searchName]);

  return (
    <div className="w-full pt-24">
      {/* search section */}
      <div className="flex justify-around w-11/12 py-2 mx-auto bg-[#ffd8a9a9] border-2 border-[#ffa537] border-solid rounded-lg">
        <div className="w-3/12">
          <AutoComplete
            array={autoCategories}
            label={"Category"}
            selectedOption={setSelectCategory}
          />
        </div>

        <div className="w-3/12">
          <AutoComplete
            array={autoDistricts}
            label={"District"}
            selectedOption={setSelectDistrict}
          />
        </div>

        <div className="w-3/12">
          <TextField
            color="warning"
            id="outlined"
            label="Provider Name"
            className="form-textfield-double bg-[#ffe6b76c]"
            onChange={(e) => {
              setSearchName(e.target.value);
            }}
            sx={{ width: "100%" }}
            variant="outlined"
          />
        </div>
      </div>

      {/* service cards */}
      <div className="service-card-area">
        {filteredServices ? (
          <>
            {filteredServices.map((c: any, i: number) => (
              <div>
                <Link
                  to={{
                    pathname: `${RouteName.ProviderDetails.replace(
                      ":providerId",
                      c.providerId.toString()
                    )}`,
                  }}
                  key={i}>
                  <ServiceCard provider={c} />
                </Link>
              </div>
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
