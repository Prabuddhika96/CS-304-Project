import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "img/logo.png";
import HeaderBtnLink from "./NavElement/HeaderBtnLink";

import { RouteName } from "constant/routeName";
import LoggedUserNav from "./Logged User/LoggedUserNav";
import UserMode from "./Nav Options/UserMode";
import ProviderMode from "./Nav Options/ProviderMode";
import { Provider } from "docs/Provider";

function Header() {
  const navigate = useNavigate();
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 50)
      );
    }
  }, []);

  const [user, setuser] = useState<any>();

  useEffect(() => {
    let logged = localStorage.getItem("loggedUser");
    if (logged) {
      setuser(JSON.parse(logged));
    } else {
      setuser(null);
    }
  }, [localStorage.getItem("loggedUser")]);

  const [proMode, setproMode] = useState<boolean>(false);
  const handleClick = () => {
    if (proMode) {
      setproMode(false);
      navigate(RouteName.Services);
    } else {
      setproMode(true);
      navigate(
        RouteName.ProviderDashboard.replace(":id", Provider.user_id.toString())
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("ProviderMode", JSON.stringify(proMode));
    // console.log(localStorage.getItem("ProviderMode1"));
  }, [proMode]);

  return (
    <div>
      <header
        className={`px-50 py-[13px] text-center text-[#fff] bg-[#f3cd9ec4]  flex justify-between z-50 top-0 w-full ease-in-out duration-200 fixed ${
          small ? "py-[13px]" : "py-[13px]"
        }`}>
        <div className="w-2/12 pl-20 text-left">
          <Link to={RouteName.Home}>
            <img src={logo} alt="" className="w-20 hover:shadow-lg" />
          </Link>
        </div>

        {/* options */}
        {proMode ? (
          <div className="pl-20 text-left">
            <ProviderMode />
          </div>
        ) : (
          <div>
            <UserMode />
          </div>
        )}

        {/* for login btns */}
        {user ? (
          <div className="flex pr-8">
            <LoggedUserNav
              func={handleClick}
              promode={proMode}
              name={`${
                user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
              } ${
                user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)
              }`}
              //name={"hdhdh"}
              func1={setuser}
            />
          </div>
        ) : (
          <div className="right-0 text-right text-[#000]">
            <ul className="flex pt-4 pr-12 list-none">
              <HeaderBtnLink address={RouteName.Login} name={"Login"} />
              <HeaderBtnLink address={RouteName.Register} name={"Register"} />
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
