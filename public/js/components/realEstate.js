webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Mike'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Your choice did not match any listings";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'box') {
          // THIS IS BOX VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-img' },
                      ' '
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/05/2017'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.state,
                  ' '
                )
              )
            )
          );
        } else {
          // THIS IS LONG VIEW
          return _react2.default.createElement(
            'div',
            { className: 'col-md-12 col-lg-6', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'address' },
                  listing.address
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-3' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-img' },
                      ' '
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-md-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'user-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'user-name' },
                        'Nina Smith'
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'post-date' },
                        '05/05/2017'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'floor-space' },
                        _react2.default.createElement('i', { className: 'fa fa-square-o', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.floorSpace,
                          ' ft\xB2'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'bedrooms' },
                        _react2.default.createElement('i', { className: 'fa fa-bed', 'aria-hidden': 'true' }),
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rooms,
                          ' bedrooms'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'view-btn' },
                      'View Listing'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'location' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                  ' ',
                  listing.city,
                  ', ',
                  listing.state,
                  ' '
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change, paceholder: 'Search for listing type....' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            this.props.globalState.filteredData.length,
            ' results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fa fa-th-list', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fa fa-th', 'aria-hidden': 'true', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.loopListings()
          )
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var listingsData = [{
    address: '98-40 57th Ave',
    city: 'Corona',
    state: 'NY',
    rooms: 3,
    price: 18000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center', 'pool'],
    homeType: 'Luxury_Apartment',
    image: 'https://qns.com/wp-content/uploads/2015/04/Rooftop-pool.jpg'
}, {
    address: '62-60 99th St',
    city: 'Corona',
    state: 'NY',
    rooms: 4,
    price: 4000,
    floorSpace: 1200,
    extras: ['elevator', 'gym', 'doorman'],
    homeType: 'Penthouse_Apartment',
    image: 'https://www.rentthedrake.com/wp-content/uploads/2018/01/Rego-Park-Neighborhood-shoot-Queens-Facade-print.jpg'
}, {
    address: '102-12 Otis Ave',
    city: 'Corona',
    state: 'NY',
    rooms: 7,
    price: 16000,
    floorSpace: 8000,
    extras: ['elevator', 'gym', 'business center', 'guest apartment', 'pool', 'driver', 'bulletproof glass'],
    homeType: 'Penthouse_Apartment',
    image: 'https://media.equityapartments.com/images/c_crop,x_0,y_0,w_1920,h_1080/c_fill,w_1920,h_1080/q_80/4039-14/beatrice-apartments-penthouse.jpg'
}, {
    address: '98-40 57th Ave',
    city: 'Corona',
    state: 'NY',
    rooms: 3,
    price: 9500,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'https://qns.com/wp-content/uploads/2015/04/Rooftop-pool.jpg'
}, {
    address: '6355 Peachtree Dunwoody Rd NE',
    city: 'Atlanta',
    state: 'GA',
    rooms: 3,
    price: 30000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Penthouse_Apartment',
    image: 'http://www.peachtreedunwoodyplace.com/img/home-slider/4.jpg'
}, {
    address: '299 North Highland Ave NE',
    city: 'Atlanta',
    state: 'GA',
    rooms: 3,
    price: 15000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'https://inmanquarter.com/wp-content/uploads/2017/05/IMG_0251-HDR.jpg'
}, {
    address: '3443 Kingboro Rd NE',
    city: 'Atlanta',
    state: 'GA',
    rooms: 3,
    price: 7500,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'http://www.kingsboro-apartments.com/img/home-slider/4.jpg'
}, {
    address: '1261 NW Overton Street',
    city: 'Portland',
    state: 'OR',
    rooms: 3,
    price: 85000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'http://nvportland.com/wp-content/uploads/2016/03/home-services-ammenities-v3.jpg'
}, {
    address: '210 Water St',
    city: 'Portland',
    state: 'OR',
    rooms: 3,
    price: 6000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'http://lovewigs88.com/wp-content/uploads/2018/05/3-bedroom-apartments-portland-lovely-46-lovely-2-bedroom-apartments-portland-home-decor-idea-of-3-bedroom-apartments-portland.jpg'
}, {
    address: '107 N Cook St',
    city: 'Portland',
    state: 'OR',
    rooms: 3,
    price: 19000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Penthouse_Apartment',
    image: 'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-1t2d31r8-berkshire-communities/g5-cl-55mv3nfrp-cook-street/uploads/dgp_9922-edit-web.jpg'
}, {
    address: '601 S Washington St',
    city: 'Seattle',
    state: 'WA',
    rooms: 3,
    price: 10200,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-icwh344r-acacia-capital-corporation-client/g5-cl-5403pf75n-metrpolitan-park-apartments/uploads/metropolitan-hero.jpg'
}, {
    address: '583 Battery St',
    city: 'Seattle',
    state: 'WA',
    rooms: 3,
    price: 9000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'https://www.highrises.com/images/slideshow/1157571608.jpg'
}, {
    address: '27 Microsoft Wy',
    city: 'Seattle',
    state: 'WA',
    rooms: 3,
    price: 4000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Penthouse_Apartment',
    image: 'http://winduprocketapps.com/wp-content/uploads/2018/07/luxury-apartments-downtown-seattle-contemporary-apartment-design-beautiful-penthouses-that-s-pertaining-to-26.jpg'
}, {
    address: '10701 S IH 35 Frontage Rd',
    city: 'Austin',
    state: 'TX',
    rooms: 3,
    price: 8000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'https://res.cloudinary.com/g5-assets-cld/image/upload/x_0,y_365,h_3283,w_5472,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1200,w_2000/g5/g5-c-5dnck0825-management-support/g5-cl-1hz3e4iyr1-onion-creek-luxury-apartments/uploads/07_Full_Res_Onion_Creek_Apartments_sgz3h4.jpg'
}, {
    address: '13535 Lyndhurst Street',
    city: 'Austin',
    state: 'TX',
    rooms: 3,
    price: 15000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'https://i.pinimg.com/originals/ea/63/44/ea6344c3646ca55ce749538559cac431.jpg'
}, {
    address: '3201 Esperanza Crossing ',
    city: 'Austin',
    state: 'TX',
    rooms: 3,
    price: 11000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center'],
    homeType: 'Luxury_Apartment',
    image: 'https://thekenzieliving.com/assets/images/bg-home-1a.jpg'
}, {
    address: '3101 Maglioco Dr',
    city: 'San Jose',
    state: 'CA',
    rooms: 2,
    price: 9000,
    floorSpace: 5200,
    extras: ['elevator', 'gym', 'business center', 'private card access', 'concierge service'],
    homeType: 'Luxury_Apartment',
    image: 'https://g5-assets-cld-res.cloudinary.com/image/upload/q_auto,f_auto,fl_lossy/g5/g5-c-imgkhas5-woodmont-real-estate-services-client/g5-cl-1ge3chfo1c-livorno-square/uploads/livorno-home-hero.jpg'
}, {
    address: '3201 Loma Verde Dr',
    city: 'San Jose',
    state: 'CA',
    rooms: 1,
    price: 1200,
    floorSpace: 624,
    extras: ['elevator', 'gym', 'pool', 'business center', 'laundry'],
    homeType: 'Luxury_Apartment',
    image: 'https://commoncdn.entrata.com/images/thumbNailer.php?src=/media_library/2213/556cde0c59fe6380.jpg&w=1400&h=782&c=100'
}, {
    address: '3737 Casa Verde St',
    city: 'San Jose',
    state: 'CA',
    rooms: 2,
    price: 7000,
    floorSpace: 6000,
    extras: ['elevator', 'gym', 'scoial lounge', 'dog park'],
    homeType: 'Luxury_Apartment',
    image: 'https://i.ytimg.com/vi/_x-8FAo3iqo/maxresdefault.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(99);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(100);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(101);

var _listingsData2 = _interopRequireDefault(_listingsData);

var _Footer = __webpack_require__(98);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Mike',
      listingsData: _listingsData2.default,
      city: 'All',
      homeType: 'All',
      bedrooms: '0',
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      gym: false,
      doorman: false,
      driver: false,
      business_center: false,
      bullet_proof_glass: false,
      guest_apartment: false,
      concierge: false,
      poolhouse: false,
      outdoor_kitchen: false,
      pool_table: false,
      filteredData: _listingsData2.default,
      populateFormsData: '',
      sortby: 'price-dsc',
      view: 'box',
      search: ''
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {

      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({
        listingsData: listingsData
      });
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedrooms;
      });

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      if (this.state.sortby == 'price-dsc') {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == 'price-asc') {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var city = item.city.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = city.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      // city
      var cities = this.state.listingsData.map(function (item) {
        return item.city;
      });
      cities = new Set(cities);
      cities = [].concat(_toConsumableArray(cities));

      cities = cities.sort();

      // homeType
      var homeTypes = this.state.listingsData.map(function (item) {
        return item.homeType;
      });
      homeTypes = new Set(homeTypes);
      homeTypes = [].concat(_toConsumableArray(homeTypes));

      homeTypes = homeTypes.sort();

      // bedrooms
      var bedrooms = this.state.listingsData.map(function (item) {
        return item.rooms;
      });
      bedrooms = new Set(bedrooms);
      bedrooms = [].concat(_toConsumableArray(bedrooms));

      bedrooms = bedrooms.sort();

      this.setState({
        populateFormsData: {
          homeTypes: homeTypes,
          bedrooms: bedrooms,
          cities: cities
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state, changeView: this.changeView })
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Mike'
    };
    _this.cities = _this.cities.bind(_this);
    _this.homeTypes = _this.homeTypes.bind(_this);
    _this.bedrooms = _this.bedrooms.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'cities',
    value: function cities() {
      if (this.props.globalState.populateFormsData.cities != undefined) {
        var cities = this.props.globalState.populateFormsData.cities;


        console.log(cities);
        return cities.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'homeTypes',
    value: function homeTypes() {
      if (this.props.globalState.populateFormsData.homeTypes != undefined) {
        var homeTypes = this.props.globalState.populateFormsData.homeTypes;


        console.log(homeTypes);
        return homeTypes.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'bedrooms',
    value: function bedrooms() {
      if (this.props.globalState.populateFormsData.bedrooms != undefined) {
        var bedrooms = this.props.globalState.populateFormsData.bedrooms;


        console.log(bedrooms);
        return bedrooms.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item,
            '+ BR'
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.cities()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'homeType' },
            'Home Type'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Homes'
            ),
            this.homeTypes()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'room' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'rooms', className: 'filters bedrooms', onChange: this.props.change },
            this.bedrooms()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price (Min. - Max.)'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Sq. ft (Min. - Max.)'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters amenities' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Amenities'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Elevators'
              ),
              _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              _react2.default.createElement('input', { name: 'finished_basement', value: 'finished_basement', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Door Man'
              ),
              _react2.default.createElement('input', { name: 'doorman', value: 'doorman', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Driver'
              ),
              _react2.default.createElement('input', { name: 'driver', value: 'driver', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Business Center'
              ),
              _react2.default.createElement('input', { name: 'business_center', value: 'business_center', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Bullet Proof Glass'
              ),
              _react2.default.createElement('input', { name: 'bullet_proof_glass', value: 'bullet_proof_glass', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Guest Apartment'
              ),
              _react2.default.createElement('input', { name: 'guest_apartment', value: 'guest_apartment', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Concierge Service'
              ),
              _react2.default.createElement('input', { name: 'concierge', value: 'concierge', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Poolhouse'
              ),
              _react2.default.createElement('input', { name: 'poolhouse', value: 'poolhouse', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Outdoor Kitchen'
              ),
              _react2.default.createElement('input', { name: 'outdoor_kitchen', value: 'outdoor_kitchen', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'amenities' },
              _react2.default.createElement(
                'span',
                null,
                'Pool Table'
              ),
              _react2.default.createElement('input', { name: 'pool_table', value: 'pool_table', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "footer",
                    null,
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "p",
                            null,
                            "\xA9 2018 Affluent Digital, LLC"
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "app-btns" },
                            _react2.default.createElement(
                                "button",
                                null,
                                " ",
                                _react2.default.createElement("i", { className: "fab fa-google-play" }),
                                " Download The App ",
                                _react2.default.createElement("br", null),
                                " on the Play Store "
                            ),
                            _react2.default.createElement(
                                "button",
                                null,
                                " ",
                                _react2.default.createElement("i", { className: "fab fa-apple" }),
                                " Download The App ",
                                _react2.default.createElement("br", null),
                                " on the App Store "
                            )
                        ),
                        _react2.default.createElement(
                            "ul",
                            null,
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement("i", { className: "fab fa-twitter" })
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement("i", { className: "fab fa-facebook-f" })
                                )
                            ),
                            _react2.default.createElement(
                                "li",
                                null,
                                _react2.default.createElement(
                                    "a",
                                    { href: "#" },
                                    _react2.default.createElement("i", { className: "fab fa-pinterest" })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "header",
          null,
          _react2.default.createElement(
            "div",
            { className: "logo" },
            _react2.default.createElement("img", { src: "/img/upscalepad-logo.png" })
          ),
          _react2.default.createElement(
            "nav",
            null,
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Create Ads"
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              "About Us"
            ),
            _react2.default.createElement(
              "a",
              { href: "#" },
              "Login"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "register-btn" },
              "Register"
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[103]);