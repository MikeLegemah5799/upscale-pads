var listingsData = [
    {
        address: '98-40 57th Ave',
        city: 'Corona',
        state: 'NY',
        rooms: 3,
        price: 18000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center',
            'pool'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://qns.com/wp-content/uploads/2015/04/Rooftop-pool.jpg'
    },
    {
        address: '62-60 99th St',
        city: 'Corona',
        state: 'NY',
        rooms: 4,
        price: 4000,
        floorSpace: 1200,
        extras: [
            'elevator',
            'gym',
            'doorman'
        ],
        homeType: 'Penthouse_Apartment',
        image: 'https://www.rentthedrake.com/wp-content/uploads/2018/01/Rego-Park-Neighborhood-shoot-Queens-Facade-print.jpg'
    },
    {
        address: '102-12 Otis Ave',
        city: 'Corona',
        state: 'NY',
        rooms: 7,
        price: 16000,
        floorSpace: 8000,
        extras: [
            'elevator',
            'gym',
            'business center',
            'guest apartment',
            'pool',
            'driver',
            'bulletproof glass'
        ],
        homeType: 'Penthouse_Apartment',
        image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4039-14/beatrice-apartments-penthouse.jpg'
    },
    {
        address: '98-40 57th Ave',
        city: 'Corona',
        state: 'NY',
        rooms: 3,
        price: 9500,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://qns.com/wp-content/uploads/2015/04/Rooftop-pool.jpg'
    },
    {
        address: '6355 Peachtree Dunwoody Rd NE',
        city: 'Atlanta',
        state: 'GA',
        rooms: 3,
        price: 30000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Penthouse_Apartment',
        image: 'http://www.peachtreedunwoodyplace.com/img/home-slider/4.jpg'
    },
    {
        address: '299 North Highland Ave NE',
        city: 'Atlanta',
        state: 'GA',
        rooms: 3,
        price: 15000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://inmanquarter.com/wp-content/uploads/2017/05/IMG_0251-HDR.jpg'
    },
    {
        address: '3443 Kingboro Rd NE',
        city: 'Atlanta',
        state: 'GA',
        rooms: 3,
        price: 7500,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'http://www.kingsboro-apartments.com/img/home-slider/4.jpg'
    },
    {
        address: '1261 NW Overton Street',
        city: 'Portland',
        state: 'OR',
        rooms: 3,
        price: 85000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'http://nvportland.com/wp-content/uploads/2016/03/home-services-ammenities-v3.jpg'
    },
    {
        address: '210 Water St',
        city: 'Portland',
        state: 'OR',
        rooms: 3,
        price: 6000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'http://lovewigs88.com/wp-content/uploads/2018/05/3-bedroom-apartments-portland-lovely-46-lovely-2-bedroom-apartments-portland-home-decor-idea-of-3-bedroom-apartments-portland.jpg'
    },
    {
        address: '107 N Cook St',
        city: 'Portland',
        state: 'OR',
        rooms: 3,
        price: 19000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Penthouse_Apartment',
        image: 'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-1t2d31r8-berkshire-communities/g5-cl-55mv3nfrp-cook-street/uploads/dgp_9922-edit-web.jpg'
    },
    {
        address: '601 S Washington St',
        city: 'Seattle',
        state: 'WA',
        rooms: 3,
        price: 10200,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-icwh344r-acacia-capital-corporation-client/g5-cl-5403pf75n-metrpolitan-park-apartments/uploads/metropolitan-hero.jpg'
    },
    {
        address: '583 Battery St',
        city: 'Seattle',
        state: 'WA',
        rooms: 3,
        price: 9000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://www.highrises.com/images/slideshow/1157571608.jpg'
    },
    {
        address: '27 Microsoft Wy',
        city: 'Seattle',
        state: 'WA',
        rooms: 3,
        price: 4000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Penthouse_Apartment',
        image: 'http://winduprocketapps.com/wp-content/uploads/2018/07/luxury-apartments-downtown-seattle-contemporary-apartment-design-beautiful-penthouses-that-s-pertaining-to-26.jpg'
    },
    {
        address: '10701 S IH 35 Frontage Rd',
        city: 'Austin',
        state: 'TX',
        rooms: 3,
        price: 8000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_365,h_3283,w_5472,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-5dnck0825-management-support/g5-cl-1hz3e4iyr1-onion-creek-luxury-apartments/uploads/07_Full_Res_Onion_Creek_Apartments_sgz3h4.jpg'
    },
    {
        address: '13535 Lyndhurst Street',
        city: 'Austin',
        state: 'TX',
        rooms: 3,
        price: 15000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://i.pinimg.com/originals/ea/63/44/ea6344c3646ca55ce749538559cac431.jpg'
    },
    {
        address: '3201 Esperanza Crossing ',
        city: 'Austin',
        state: 'TX',
        rooms: 3,
        price: 11000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://thekenzieliving.com/assets/images/bg-home-1a.jpg'
    },
    {
        address: '3101 Maglioco Dr',
        city: 'San Jose',
        state: 'CA',
        rooms: 2,
        price: 9000,
        floorSpace: 5200,
        extras: [
            'elevator',
            'gym',
            'business center',
            'private card access',
            'concierge service'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-imgkhas5-woodmont-real-estate-services-client/g5-cl-1ge3chfo1c-livorno-square/uploads/livorno-home-hero.jpg'
    },
    {
        address: '3201 Loma Verde Dr',
        city: 'San Jose',
        state: 'CA',
        rooms: 1,
        price: 1200,
        floorSpace: 624,
        extras: [
            'elevator',
            'gym',
            'pool',
            'business center',
            'laundry'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/2213/556cde0c59fe6380.jpg&w=1400&h=782&c=100'
    },
    {
        address: '3737 Casa Verde St',
        city: 'San Jose',
        state: 'CA',
        rooms: 2,
        price: 7000,
        floorSpace:6000,
        extras: [
            'elevator',
            'gym',
            'scoial lounge',
            'dog park'
        ],
        homeType: 'Luxury_Apartment',
        image: 'https://i.ytimg.com/vi/_x-8FAo3iqo/maxresdefault.jpg'
    }
];

export default listingsData;