export enum RouteName {
  //  main pages
  Home = "/",
  Login = "/login",
  Register = "/register",
  Services = "/services",
  Aboutus = "/aboutus",
  Contactus = "/contactus",
  ProviderDetails = "/providerdetails/:providerId",

  MyEvents = "/myevents/:userId",
  Profile = "/profile/:userId",

  // provider
  MyServices = "/myservices/:id",

  EventDetails = "/eventdetails/:eventId",

  AdminDashboard = "/admindashboard/:id",
}
