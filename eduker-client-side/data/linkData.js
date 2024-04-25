const links = [
  {
    id: 1,
    url: "/",
    name: "Home",
  },

  {
    id: 2,
    url: "/team",
    name: "Team",
  },

  {
    id: 3,
    url: "/services",
    name: "Services",
    submenu: [
      // {
      //     id:1,
      //     url:'/services',
      //     name:'Course Style 1'
      // },
      {
        id: 2,
        url: "/courses-style-two",
        name: "Course Style 2",
      },
      // {
      //     id:3,
      //     url:'/course-sidebar',
      //     name:'Course Sidebar'
      // },
      {
        id: 4,
        url: "/course-details",
        name: "Course Details",
      },
    ],
  },

  {
    id: 4,
    url: "/about",
    name: "Pages",
    submenu: [
      {
        id: 1,
        url: "/events",
        name: "Our Events",
      },
      {
        id: 2,
        url: "/event-details",
        name: "Event Details",
      },
      //   {
      //     id: 3,
      //     url: "/team",
      //     name: "Team",
      //   },
      //   {
      //     id: 4,
      //     url: "/team-details",
      //     name: "Team Details",
      //   },
      {
        id: 5,
        url: "/404-page",
        name: "404 Error",
      },
      // {
      //     id:6,
      //     url:'/my-profile',
      //     name:'My Profile'
      // },
      // {
      //     id:7,
      //     url:'/my-courses',
      //     name:'My Courses'
      // },
      {
        id: 8,
        url: "/sign-in",
        name: "Sign In",
      },
      {
        id: 9,
        url: "/sign-up",
        name: "Sign Up",
      },
      {
        id: 10,
        url: "/cart",
        name: "Cart",
      },
      {
        id: 11,
        url: "/checkout",
        name: "Checkout",
      },
    ],
  },

  {
    id: 5,
    url: "/blog",
    name: "Blog",
    submenu: [
      {
        id: 1,
        url: "/blog",
        name: "Blog",
      },
      {
        id: 2,
        url: "/blog-details",
        name: "Blog Details",
      },
    ],
  },

<<<<<<< HEAD
    {
        id:5,
        url:'/blog',
        name:'Blog',
        submenu:[
            {
                id:1,
                url:'/blog',
                name:'Blog'
            },
            {
                id:2,
                url:'/blog-details',
                name:'Blog Details'
            },
        ]
    },
    {
        id: 7,
        url: '/admin',
        name: 'Admin',
        submenu: [
            {
                id: 1,
                url: '/admin/dashboard',
                name: 'Dashboard',
            },
            {
                id: 2,
                url: '/admin/users',
                name: 'Users',
            },
            {
                id: 3,
                url: '/admin/settings',
                name: 'Settings',
            },
        ],
    },
=======
  {
    id: 6,
    url: "/contact",
    name: "Contact",
  },
];
>>>>>>> cfdf2742e61a39e8ff470c5f71ee5fa59bd7a9e6

export default links;
