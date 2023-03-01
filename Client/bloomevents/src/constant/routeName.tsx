export enum RouteName {
  //  main pages
  Home = "/",
  Login = "/login",
  Register = "/register",
  Services = "/services",
  Aboutus = "/aboutus",
  Contactus = "/contactus",
  ProviderDetails = "/providerdetails/:providerId",

  MyEvents = "/:userId/myevents",
  Profile = "/:id/profile",

  // provider
  MyServices = "/myservices/:id",

  EventDetails = "/eventdetails/:eventId",

  AdminDashboard = "/admindashboard/:id",
}
