//types for station dashboard navigation

export type iBars = {
  pic: any;
  routeName: string;
  cl: string;
  bd: string;
  hov: string;
};

//types for managing props state for the station sidebar
export type authPropsData = {
  title: string;
  desc: string;
  backgroundColor: string;
  CardColor: string;
};

export type mobileNav = {
  firstIcon: any;
  firstText: string;
  firstLink: string;
  secondIcon: any;
  secondText: string;
  secondLink: string;
  thirdIcon: any;
  popUp?: boolean;
  logOut?: boolean;
  thirdLink?: any;
  fourthIcon: any;
  fourthText: string;
  fourthLink: string;
  fifthIcon: any;
  fifthText: string;
  fifthLink: string;
  colours: string;
};

export type agentData = {
  _id: string;
  phoneNumber: string;
  name: string;
  email: string;
  password: string;
  address: string;
  station: string;
  ConfirmPassword: string;
};

//types for managening our station details
export type stationData = {
  _id: string;
  email: string;
  password: string;
  station: string;
  request: string;
};

export type registercarrying = {
  name: string;
  phoneNumber: number;
  address: string;
};

//types for managing user details
export type userData = {
  _id: string;
  name: string;
  email: string;
  phoneNumber: number;
  stationName: string | any;
  role: string;
  address: string;
  password: string;
  numberOfRequests: number;
};

//types for managing global buttons
export type GlobalButtonProp = {
  padding?: string;
  bg?: string;
  col?: string;
  text?: string;
  bghovercolor?: string;
  hgt?: string;
  bor?: string;
  hovCol?: string;
  width: string;
  //come back and make this compulsory
  onClick?: () => Promise<void>;
};

export type stationHeader = {
  bg: string;
  title: string;
  subtitle: string;
};
