import { Images } from "../../utils";

export type TProductItem = {
  id: number;
  shop_name?: string;
  image?: string;
  title?: string;
  date?: string;
  price?: number;
  quantity?: number;
  transaction_id?: string;
  status?: string;
  total?: number;
};

export type TMerchantItem = {
  id: number;
  image: string;
  title: string;
};

export const ongoingOrderData = [
  {
    id: 0,
    shop_name: "The Body Shop",
    image: Images.bodyButter,
    title: "Strawberry Body Butter",
    date: "22 Feb 2022",
    price: 377.3,
    quantity: 2,
    transaction_id: "#FC12345",
    status: "Ready for Shipment",
    total: 377.3 * 2,
  },
  {
    id: 1,
    shop_name: "Uwitan",
    image: Images.rattanChair,
    title: "New Beranda Rattan Chair",
    date: "22 Feb 2022",
    price: 925.0,
    quantity: 1,
    transaction_id: "#FC12345",
    status: "Shipped",
    total: 925.0,
  },
];

export const compltedOrderData = [
  {
    id: 0,
    shop_name: "The Body Shop",
    image: Images.bodyButter,
    title: "Strawberry Body Butter",
    date: "22 Feb 2022",
    price: 269.100,
    quantity: 2,
    transaction_id: "#FC12345",
    status: "Delivered",
    total: 269.100,
  },
];

export const merchantData = [
  {
    id: 0,
    image: Images.bodyShop,
    title: "The Body Sh",
  },
  {
    id: 1,
    image: Images.senka,
    title: "Senka",
  },
  {
    id: 2,
    image: Images.mediheal,
    title: "Mediheal",
  },
  {
    id: 3,
    image: Images.debellin,
    title: "Debellin",
  },
  {
    id: 4,
    image: Images.uwitan,
    title: "Uwitan",
  },
  {
    id: 5,
    image: Images.thenblank,
    title: "Thenblank",
  },
  {
    id: 6,
    image: Images.uniqlo,
    title: "Uniqlo",
  },
];

export const lastViewedItemsData = [
  {
    id: 0,
    image: Images.showerGel,
    shop_name: "Strawberry Body Butter",
    title: "Strawberry Shower Gel 250ml",
    price: 925.0,
  },
  {
    id: 1,
    image: Images.yogurt,
    shop_name: "Strawberry Body Butter",
    title: "Strawberry Body Yogurt 200ml",
    price: 925.0,
  },
  {
    id: 2,
    image: Images.jasmineShowerGel,
    shop_name: "Strawberry Body Butter",
    title: "Winter Jasmine Shower Gel 250ml",
    price: 925.0,
  },
  {
    id: 3,
    image: Images.showerGel,
    shop_name: "Strawberry Body Butter",
    title: "Tea Tree Skin Clearing Foaming Cleanser 150ml",
    price: 925.0,
  },
  {
    id: 4,
    image: Images.yogurt,
    shop_name: "Strawberry Body Butter",
    title: "Kindness & Pear Shower Gel 250ml",
    price: 925.0,
  },
];


export const walletData = [  
  {
    id: 0,
    title: "GoPay",
    description: "Link your GoPay Account",
    image: Images.goPay,
    isDefault: false,
    isAdd: false,
    isActivated: false,
  },
  {
    id: 1,
    title: "ShopeePay",
    description: "Link your ShopeePay Account",
    image: Images.shopeePay,
    isDefault: false,
    isAdd: false,
    isActivated: false,
  },
];

export const creditCardData = [
  {
    id: 0,
    title: "Visa",
    description: "**** 0488",
    image: Images.visa,
    isDefault: false,
    isAdd: false,
    isActivated: false,
  },
];

export const courierData = [
  {
    id: 0,
    title: "AnterAja",
    description: "Pengirman (2-3 hari)",
    image: Images.anterAja,
    isDefault: false,
    isAdd: false,
    isActivated: false,
    price: "Rp 17.00",
  },
];
