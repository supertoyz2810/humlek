import { CartProps } from "@/types/shop/cart.types";
import { PostProps } from "@/types/post/post.types";
import { CATEGORY_TYPE } from "./category-type.constants";
import { CafeProps } from "@/types/cafe/cafe.types";
import { LOCATION_CITY } from "./cafe-location.constant";
import { CafeCategoryProps } from "@/types/cafe/cafe-category.types";

export const dataCartTable: CartProps[] = [
  {
    id: "m5gr84i9",
    productName: "Caffe",
    productSize: "L",
    productAmount: 2,
    productPrice: 31600,
    productType: "drink",
  },
  {
    id: "3u1reuv4",
    productName: "Caffe",
    productSize: "L",
    productAmount: 2,
    productPrice: 242000,
    productType: "drink",
  },
  {
    id: "derv1ws0",
    productName: "Caffe",
    productSize: "L",
    productAmount: 2,
    productPrice: 83700,
    productType: "drink",
  },
  {
    id: "5kma53ae",
    productName: "Caffe",
    productSize: "L",
    productAmount: 1,
    productPrice: 8740,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 72100,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 72100,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 72100,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 72100,
    productType: "drink",
  },
  {
    id: "bhqecj4p",
    productName: "Caffe",
    productSize: "M",
    productAmount: 5,
    productPrice: 721000,
    productType: "drink",
  },
];

export const dataPost: PostProps[] = [
  {
    username: "username1",
    createDate: "5 giờ trước",
    postDetail: {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d8ac999-99eb-4672-ae8b-0bf3193ad818_1600x1091.png",
        "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fyidefa3p63uovby4joxt.jpg",
        "https://png.pngtree.com/background/20210712/original/pngtree-realistic-abstract-background-design-picture-image_1178946.jpg",
      ],
    },
    postComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 5,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
  },
  {
    username: "username1",
    createDate: "5 giờ trước",
    postDetail: {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d8ac999-99eb-4672-ae8b-0bf3193ad818_1600x1091.png",
      ],
    },
    postComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 5,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
  },
  {
    username: "username1",
    createDate: "5 giờ trước",
    postDetail: {
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d8ac999-99eb-4672-ae8b-0bf3193ad818_1600x1091.png",
        "https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d8ac999-99eb-4672-ae8b-0bf3193ad818_1600x1091.png",
      ],
    },
    postComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 5,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
  },
];

export const dataCafe: CafeProps[] = [
  {
    id: "1",
    username: "username1",
    createDate: "5 giờ trước",
    cafeDetails: {
      title: "Phuc Long Cafe & Tea",
      phoneNumber: "23456789",
      cafeLogo:
        "https://upload.wikimedia.org/wikipedia/vi/thumb/3/32/Logo_Ph%C3%BAc_Long.svg/516px-Logo_Ph%C3%BAc_Long.svg.png?20240331120545",
      thumbnail:
        "https://doanhnghiephoinhap.vn/stores/news_dataimages/doanhnghiephoinhapvn/122022/09/02/phuc-long-dang-la-ga-de-trung-vang-cua-masan-26-.8287.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/35379526_1724945860908379_3062394875564523520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i8-4I9QEaaIQ7kNvgFmx5x4&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=A6zvV2Uy-F95FCOTSE7e3Ra&oh=00_AYCAK2c8pDt8BjzUfGtCVv-3Rf8Q4a1q40MQaJI7L4-6Hw&oe=6770F5BF",
        "https://scontent.fhan4-5.fna.fbcdn.net/v/t1.6435-9/35285824_1724945834241715_3263744514359033856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UOf2Sp7JI3cQ7kNvgFstM3j&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=Aeojyxc4lXC3jr3JVO-p12L&oh=00_AYBKw497VSI13hdjlOyyf5yaNiErjnat8g9FjU5DUyAVcA&oe=6770EB2C",
        "https://scontent.fhan4-5.fna.fbcdn.net/v/t1.6435-9/35358682_1724945750908390_5266540433667784704_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HIhZaP3_TSkQ7kNvgGIFix3&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=AsWfGZqY7Y_cYCq7mBwmatI&oh=00_AYDutDEQU4njCPbgFO2Z9yNcwH10C_lWbMgWyPLsqqROkQ&oe=6770E5D6",
        "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.6435-9/35298487_1724945627575069_8546917007017115648_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=hJ2teQS17kYQ7kNvgFxKuCh&_nc_zt=23&_nc_ht=scontent.fhan3-2.fna&_nc_gid=Afy2q4o_8F8jUxsX8Zbk3Ff&oh=00_AYCH7n4MSLmGIfQ7Jaqyy9ytVfi5G1NKr6quk6Wr-98wLg&oe=6770E091",
      ],
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "10:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        street: "1B-1B1, Đường Cộng Hoà",
        district: "Tân Bình",
        ward: "4",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
      ],
      cafeTheme: {
        primaryColor: "green",
        secondaryColor: "white",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 645789,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: true,
    isOnPromotion: true,
    isHoldingEvents: true,
  },
  {
    id: "2",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Katinat Saigon Kafe",
      phoneNumber: "23456789",
      thumbnail: "https://mkt.1cdn.vn/2023/06/29/katinat.jpeg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.6435-9/35379526_1724945860908379_3062394875564523520_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i8-4I9QEaaIQ7kNvgFmx5x4&_nc_zt=23&_nc_ht=scontent.fhan3-3.fna&_nc_gid=A6zvV2Uy-F95FCOTSE7e3Ra&oh=00_AYCAK2c8pDt8BjzUfGtCVv-3Rf8Q4a1q40MQaJI7L4-6Hw&oe=6770F5BF",
        "https://scontent.fhan4-5.fna.fbcdn.net/v/t1.6435-9/35285824_1724945834241715_3263744514359033856_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=UOf2Sp7JI3cQ7kNvgFstM3j&_nc_zt=23&_nc_ht=scontent.fhan4-5.fna&_nc_gid=Aeojyxc4lXC3jr3JVO-p12L&oh=00_AYBKw497VSI13hdjlOyyf5yaNiErjnat8g9FjU5DUyAVcA&oe=6770EB2C",
      ],
      cafeLogo:
        "https://cdn.haitrieu.com/wp-content/uploads/2022/06/logo-katinat-text.png",
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "10:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        street: "533, Đường Nguyễn Tri Phương",
        district: "10",
        ward: "8",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "Study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "#3b82f6",
        secondaryColor: "yellow",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 5,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
  },
  {
    id: "3",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "The Cafe House - Tô Ngọc Vân",
      phoneNumber: "23456789",
      thumbnail:
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van1_980973528ceb4b968f3e56efd0d54bc4.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van2_c926f060794e4b7b889392fbf3f7a98a.jpg",
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van3_7629d26087d942e78f8e09f0cca148f4.jpg",
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van4_8661e3426ba1471fbbd04042f4ce58af.jpg",
        "https://file.hstatic.net/1000075078/file/hcm-to-ngoc-van6_0b450ced0b0d4b4083fcbee86e8bc71a.jpg",
      ],
      cafeLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Coffee_House_logo.svg/512px-The_Coffee_House_logo.svg.png",
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "10:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.THUDUC,
        street: "116, Tô Ngọc Vân",
        district: "",
        ward: "Linh Tây",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
        {
          id: "4",
          cafeCategoryName: "Overnight",
        },
        {
          id: "5",
          cafeCategoryName: "Rooftop",
        },
        {
          id: "6",
          cafeCategoryName: "cozy",
        },
        {
          id: "7",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "#d5b026",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 999,
    totalDislike: 315,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: true,
  },
  {
    id: "4",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Highlands Cafe Nguyễn Trãi",
      phoneNumber: "23456789",
      thumbnail:
        "https://phucthanhan.com.vn/wp-content/uploads/2024/02/highland-scaled.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      cafeLogo:
        "https://download.logo.wine/logo/Highlands_Coffee/Highlands_Coffee-Logo.wine.png",
      contentImg: [
        "https://lh3.googleusercontent.com/p/AF1QipPTZ5G91BKLNSK9H9xPDqcOGax-IP6LdfKtAdk_=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMuXB2TNdDSwwu2HOztWbIaveBX9hOY2BrCUEw_=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMFjFZxp4Po-LCfsLIl9VcTjq0vtsedey4fz_4=s680-w680-h510",
      ],
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "10:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        street: "210, Đ. Nguyễn Trãi",
        district: "1",
        ward: "Phạm Ngũ Lão",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "#be964c",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 7463235,
    totalDislike: 1062132,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: false,
    isHoldingEvents: false,
  },
  {
    id: "5",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Trung Nguyên Legend Café",
      phoneNumber: "23456789",
      thumbnail:
        "https://thietkecafedep.com.vn/upload/images/thi-cong-noi-that/coffee/he-thong-trung-nguyen/12-Alexandre-de-Rhodes-Ben-Nghe-Quan-1/noi-that-quan-cafe-trung-nguyen-legend-12-alexandre-de-rhodes-quan-1-35.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://lh3.googleusercontent.com/p/AF1QipNMyu8TO-bOR95gnlznYPH16fWw2EiqeqdpkMUb=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipPQfQ7Va3yU_hCVyI6KLK4t-itDYLNybmpgVNv1=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipNxDl6VCFRxJY5OiblLxKvepv_ndC11GZIIAjKV=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipN2Q3NWjPAH9rRqASuxfWdqQ7jFELBRu6D2uidO=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipOc4r0nDAaQQ1T3GD6FhxAkTnUUZDmexQCy8-s-=s680-w680-h510",
      ],
      cafeLogo:
        "https://thietkelogo.vn/wp-content/uploads/2016/03/logo-cf-trung-nguyen.png",
      cafeOperation: {
        openingTime: "07:30",
        closingTime: "10:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        street: "116 -117 -118 Đ. Bãi Sậy",
        district: "6",
        ward: "1",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "gray",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 6953,
    totalDislike: 200,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
  },
  {
    id: "6",
    username: "username1",
    createDate: "10 giờ trước",
    cafeDetails: {
      title: "Starbucks Nguyen Hue",
      phoneNumber: "23456789",
      thumbnail:
        "https://danangfantasticity.com/wp-content/uploads/2024/10/starbucks-bach-dang-da-nang-03.jpg",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      contentImg: [
        "https://lh3.googleusercontent.com/p/AF1QipODm9K7nremADzCj7Dk09MnkDtmfll8KZC5jvJf=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipOaaIrBp2J3UOdeKeqDyxnG5crmCwHqYUKWiFB9=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMR_TsQSYcFVR1t5veKf09HxW_HzHg9vl9m2iCc=s680-w680-h510",
        "https://lh3.googleusercontent.com/p/AF1QipMWzv4uZ5jPL2KUgjXEPEgZJX-SWC1-f5OVAt9O=s680-w680-h510",
      ],
      cafeLogo:
        "https://cdn.freebiesupply.com/logos/large/2x/starbucks-coffee-logo-png-transparent.png",
      cafeOperation: {
        openingTime: "06:30",
        closingTime: "10:00",
        openingDay: [1, 2, 3, 4, 5, 6, 7, 8],
      },
      cafeLocation: {
        city: LOCATION_CITY.HOCHIMINH,
        street: "99, Đường Nguyễn Huệ",
        district: "1",
        ward: "Bến Nghé",
      },
      cafeCategory: [
        {
          id: "1",
          cafeCategoryName: "study",
        },
        {
          id: "2",
          cafeCategoryName: "space",
        },
        {
          id: "3",
          cafeCategoryName: "cozy",
        },
      ],
      cafeTheme: {
        primaryColor: "#006241",
        secondaryColor: "black",
      },
    },
    cafeComments: [
      {
        content: "Test comment",
        createDate: "2 giờ trước",
      },
    ],
    totalLike: 10603,
    totalDislike: 2,
    totalComment: 10,
    totalShare: 5,
    isTodayMenu: false,
    isOnPromotion: true,
    isHoldingEvents: false,
  },
];

export const dataCafeCategory: CafeCategoryProps[] = [
  {
    id: "1",
    cafeCategoryName: "Study",
  },
  {
    id: "2",
    cafeCategoryName: "Cozy",
  },
  {
    id: "3",
    cafeCategoryName: "Space",
  },
  {
    id: "4",
    cafeCategoryName: "Music",
  },
  {
    id: "5",
    cafeCategoryName: "Overnight",
  },
  {
    id: "6",
    cafeCategoryName: "Rooftop",
  },
  {
    id: "7",
    cafeCategoryName: "Lakeview",
  },
  {
    id: "8",
    cafeCategoryName: "Cityview",
  },
  {
    id: "9",
    cafeCategoryName: "Reserve",
  },
  {
    id: "10",
    cafeCategoryName: "Decoration",
  },
];