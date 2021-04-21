(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["36b87311"],{"0374":function(e,n,t){"use strict";t.d(n,"a",function(){return q}),t.d(n,"i",function(){return I}),t.d(n,"s",function(){return M}),t.d(n,"m",function(){return T}),t.d(n,"j",function(){return E}),t.d(n,"n",function(){return x}),t.d(n,"t",function(){return B}),t.d(n,"k",function(){return D}),t.d(n,"h",function(){return C}),t.d(n,"e",function(){return k}),t.d(n,"r",function(){return F}),t.d(n,"q",function(){return R}),t.d(n,"p",function(){return N}),t.d(n,"o",function(){return V}),t.d(n,"d",function(){return L}),t.d(n,"c",function(){return W}),t.d(n,"g",function(){return Q}),t.d(n,"f",function(){return Z}),t.d(n,"l",function(){return G}),t.d(n,"b",function(){return J});var r=t("5640"),i=t.n(r),a=t("9530"),u=t.n(a);function o(){var e=i()(["\n  query CheckUserStatus($id:ID!) {\n    userStatus( where: {id: $id} ) {\n      id\n      userStatus\n    }\n  }\n"]);return o=function(){return e},e}function s(){var e=i()(["\n  mutation ResendTempPwdMutation($id: ID!){\n    resetUserTempPwd(where: {id : $id}) {\n      id\n    }\n  }\n"]);return s=function(){return e},e}function f(){var e=i()(["\n  mutation DisableUserMutation($id: ID!){\n    disableUser(where: {id: $id}) {\n      id\n      disabled\n    }\n  }\n"]);return f=function(){return e},e}function d(){var e=i()(["\n  mutation EnableUserMutation($id: ID!){\n    enableUser(where: {id: $id}) {\n      id\n      disabled\n    }\n  }\n"]);return d=function(){return e},e}function c(){var e=i()(["\n  mutation CreateUserAndAvatarMutation($name: String!, $email: String!, $timezone: String!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $username: String!, $organization: OrganizationUpdateOneWithoutUsersInput, $state: String) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        email: $email\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n        organization: $organization\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return c=function(){return e},e}function l(){var e=i()(["\n  mutation CreateUserMutation($name: String!, $email: String!, $timezone: String!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $username: String!, $organization: OrganizationUpdateOneWithoutUsersInput, $state: String){\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        email: $email\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        organization: $organization\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return l=function(){return e},e}function m(){var e=i()(["\n  mutation UpdateProfileMutation($name: String!, $timezone: String!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $state: String) {\n    updateProfile(\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return m=function(){return e},e}function p(){var e=i()(["\n  mutation UpdateProfileMutation($name: String!, $timezone: String!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $state: String) {\n    updateProfile(\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return p=function(){return e},e}function g(){var e=i()(["\n  mutation updateUserMutation($name: String!, $timezone: String!, $id: ID!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $organization: OrganizationUpdateOneWithoutUsersInput, $state: String) {\n    updateUser(\n      where: {id: $id}\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n        organization: $organization\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return g=function(){return e},e}function v(){var e=i()(["\n  mutation updateUserMutation($name: String!, $timezone: String!, $id: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $organization: OrganizationUpdateOneWithoutUsersInput, $state: String) {\n    updateUser(\n      where: {id: $id}\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        organization: $organization\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return v=function(){return e},e}function h(){var e=i()(["\n  mutation deleteUserMutation($id: ID!) {\n    deleteUser(where: {id: $id }) {\n      id\n    }\n  }\n"]);return h=function(){return e},e}function b(){var e=i()(["\n  query me {\n    me {\n      id\n      sub\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        id\n        url\n        secret\n      }\n      organization {\n        id\n        name\n      }\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      isPublisher\n      username\n    }\n  }\n"]);return b=function(){return e},e}function $(){var e=i()(["\n  query ProfileQuery {\n    user: profile {\n      ...UserFragment\n    }\n  }\n  ","\n"]);return $=function(){return e},e}function y(){var e=i()(["\n  query userQuery($id: ID!) {\n    user( where: {id: $id} ) {\n      ...UserFragment\n    }\n  }\n  ","\n"]);return y=function(){return e},e}function P(){var e=i()(["\n  subscription UsersSubscription {\n    userSubscription {\n      mutation\n      node {\n        id\n        sub\n        name\n        email\n        avatar {\n          id\n          url\n          secret\n        }\n        createdAt\n        updatedAt\n        isAdmin\n        isTeacher\n        isParent\n        isStudent\n        disabled\n      }\n      previousValues {\n        id\n      }\n    }\n  }\n"]);return P=function(){return e},e}function S(){var e=i()(["\n  query TeachersQuery($first: Int, $after: String) {\n    teachers(orderBy: name_ASC, first: $first, after: $after) {\n      ...UserFragment\n    }\n  }\n  ","\n"]);return S=function(){return e},e}function O(){var e=i()(["\n  query OrgUsersQuery($first: Int, $after: String) {\n    orgUsers(orderBy: name_ASC, first: $first, after: $after) {\n      ...UserFragment\n    }\n  }\n  ","\n"]);return O=function(){return e},e}function _(){var e=i()(["\n  query SignupEnabled {\n    signupEnabled {\n      isEnabled\n      message\n    }\n  }\n"]);return _=function(){return e},e}function w(){var e=i()(["\n  query AllUsersQuery($first: Int, $skip: Int, $where: UserWhereInput) {\n    users(orderBy: name_ASC, first: $first, skip: $skip, where: $where) {\n      id\n      name\n      organization {\n        id\n        name\n      }\n    }\n  }\n"]);return w=function(){return e},e}function U(){var e=i()(["\n  query NumUsersQuery($where: UserWhereInput) {\n    numUsers(where: $where)\n  }\n"]);return U=function(){return e},e}function j(){var e=i()(["\n  query AllUsersQuery($first: Int, $skip: Int, $where: UserWhereInput) {\n    users(orderBy: name_ASC, first: $first, skip: $skip, where: $where) {\n      ...UserFragment\n      awsStatus\n    }\n  }\n  ","\n"]);return j=function(){return e},e}function A(){var e=i()(["\n  fragment UserFragment on User {\n    id\n    name\n    email\n    avatar {\n      id\n      url\n      secret\n    }\n    createdAt\n    updatedAt\n    isAdmin\n    isTeacher\n    isParent\n    isStudent\n    disabled\n    username\n    timezone\n    state\n    organization {\n      id\n      name\n    }\n  }\n"]);return A=function(){return e},e}var z=u()(A()),q=u()(j(),z),I=u()(U()),M=u()(w()),T=u()(_()),E=u()(O(),z),x=u()(S(),z),B=(u()(P()),u()(y(),z)),D=u()($(),z),C=u()(b()),k=u()(h()),F=u()(v(),z),R=u()(g(),z),N=u()(p(),z),V=u()(m(),z),L=u()(l(),z),W=u()(c(),z),Q=u()(d()),Z=u()(f()),G=u()(s()),J=u()(o())},1045:function(e,n,t){},1331:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=(0,r.regex)("integer",/^-?[0-9]*$/);n.default=i},1973:function(e,n,t){e.exports=t("5bba")},"2a12":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e){return(0,r.withParams)({type:"maxLength",max:e},function(n){return!(0,r.req)(n)||(0,r.len)(n)<=e})};n.default=i},3360:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.withParams)({type:"and"},function(){for(var e=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return n.length>0&&n.reduce(function(n,t){return n&&t.apply(e,r)},!0)})};n.default=i},"3a54":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);n.default=i},"45b8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=(0,r.regex)("numeric",/^[0-9]*$/);n.default=i},"46bc":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e){return(0,r.withParams)({type:"maxValue",max:e},function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+n<=+e})};n.default=i},"494d":function(e,n,t){e.exports=t("e1b7")},"522e":function(e,n,t){var r=t("f772"),i=t("ebfd").onFreeze;t("ce7e")("freeze",function(e){return function(n){return e&&r(n)?e(i(n)):n}})},5640:function(e,n,t){var r=t("1973"),i=t("494d");function a(e,n){return n||(n=e.slice(0)),i(r(e,{raw:{value:i(n)}}))}e.exports=a},"5bba":function(e,n,t){t("9d98");var r=t("584a").Object;e.exports=function(e,n){return r.defineProperties(e,n)}},"5d75":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,a=(0,r.regex)("email",i);n.default=a},"5db3":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e){return(0,r.withParams)({type:"minLength",min:e},function(n){return!(0,r.req)(n)||(0,r.len)(n)>=e})};n.default=i},6235:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=(0,r.regex)("alpha",/^[a-zA-Z]*$/);n.default=i},6417:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e){return(0,r.withParams)({type:"not"},function(n,t){return!(0,r.req)(n)||!e.call(this,n,t)})};n.default=i},"772d":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,a=(0,r.regex)("url",i);n.default=a},"78ef":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"withParams",{enumerable:!0,get:function(){return r.default}}),n.regex=n.ref=n.len=n.req=void 0;var r=i(t("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===a(e)){for(var n in e)return!0;return!1}return!!String(e).length};n.req=u;var o=function(e){return Array.isArray(e)?e.length:"object"===a(e)?Object.keys(e).length:String(e).length};n.len=o;var s=function(e,n,t){return"function"===typeof e?e.call(n,t):t[e]};n.ref=s;var f=function(e,n){return(0,r.default)({type:e},function(e){return!u(e)||n.test(e)})};n.regex=f},8750:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r="web"===Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,THEME:"mat",MODE:"spa",ONESIGNAL_APP_ID:void 0,ONESIGNAL_SAFARI_WEB_ID:void 0,MIZZEN_NATIVE_APP_TARGET:void 0,VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"}).BUILD?t("cb69").withParams:t("0234").withParams,i=r;n.default=i},"91d3":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},function(n){if(!(0,r.req)(n))return!0;if("string"!==typeof n)return!1;var t="string"===typeof e&&""!==e?n.split(e):12===n.length||16===n.length?n.match(/.{2}/g):null;return null!==t&&(6===t.length||8===t.length)&&t.every(a)})};n.default=i;var a=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"9d98":function(e,n,t){var r=t("63b6");r(r.S+r.F*!t("8e60"),"Object",{defineProperties:t("7e90")})},aa82:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},function(n,t){return!(0,r.ref)(e,this,t)||(0,r.req)(n)})};n.default=i},b5ae:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(n,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"numeric",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(n,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(n,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(n,"macAddress",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(n,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(n,"minLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(n,"required",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(n,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(n,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(n,"sameAs",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(n,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(n,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(n,"and",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(n,"not",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(n,"minValue",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(n,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(n,"integer",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(n,"decimal",{enumerable:!0,get:function(){return O.default}}),n.helpers=void 0;var r=U(t("6235")),i=U(t("3a54")),a=U(t("45b8")),u=U(t("ec11")),o=U(t("5d75")),s=U(t("c99d")),f=U(t("91d3")),d=U(t("2a12")),c=U(t("5db3")),l=U(t("d4f4")),m=U(t("aa82")),p=U(t("e652")),g=U(t("b6cb")),v=U(t("772d")),h=U(t("d294")),b=U(t("3360")),$=U(t("6417")),y=U(t("eb66")),P=U(t("46bc")),S=U(t("1331")),O=U(t("c301")),_=w(t("78ef"));function w(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}function U(e){return e&&e.__esModule?e:{default:e}}n.helpers=_},b6cb:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e){return(0,r.withParams)({type:"sameAs",eq:e},function(n,t){return n===(0,r.ref)(e,this,t)})};n.default=i},c301:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);n.default=i},c99d:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=(0,r.withParams)({type:"ipAddress"},function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var n=e.split(".");return 4===n.length&&n.every(a)});n.default=i;var a=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var n=0|+e;return n>=0&&n<=255}},cb69:function(e,n,t){"use strict";(function(e){function t(e){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,n){return"object"===t(e)&&void 0!==n?n:e(function(){})},a=r.vuelidate?r.vuelidate.withParams:i;n.withParams=a}).call(this,t("c8ba"))},d1d7:function(e,n,t){"use strict";var r=t("1045"),i=t.n(r);n["default"]=i.a},d294:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.withParams)({type:"or"},function(){for(var e=this,t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return n.length>0&&n.reduce(function(n,t){return n||t.apply(e,r)},!1)})};n.default=i},d4f4:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=(0,r.withParams)({type:"required"},r.req);n.default=i},dd00:function(e,n,t){e.exports=t.p+"img/mizzen_by_mott_logo.3486509f.png"},e1b7:function(e,n,t){t("522e"),e.exports=t("584a").Object.freeze},e652:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},function(n,t){return!!(0,r.ref)(e,this,t)||(0,r.req)(n)})};n.default=i},e928:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("q-page",{staticClass:"row justify-center",attrs:{padding:""}},[r("div",{staticClass:"simple-signup"},[r("div",{staticClass:"simple-header"},[r("img",{attrs:{alt:"Mott logo",src:t("dd00"),height:"72px"}}),r("h3",{staticClass:"simple-header-text"},[e._v("\n        Thank You!\n      ")])]),r("div",{staticClass:"simple-header",staticStyle:{"margin-top":"40px","margin-bottom":"40px"}},[r("div",{staticClass:"q-body-2"},[e._v("Welcome to the Mizzen By Mott Community. Please verify your account below:")])]),r("div",{staticClass:"row items-center justify-between no-wrap"},[r("q-field",{staticStyle:{"flex-grow":"1"},attrs:{error:e.$v.code.$error,"error-label":"Enter the verification code sent to your email address"}},[r("q-input",{staticClass:"verification-code",attrs:{"float-label":"Verification Code"},on:{blur:e.$v.code.$touch},model:{value:e.code,callback:function(n){e.code="string"===typeof n?n.trim():n},expression:"code"}})],1)],1),r("div",{staticClass:"row justify-center"},[r("q-btn",{staticClass:"full-width q-mt-lg q-mb-sm",attrs:{"no-caps":"",size:"lg","icon-right":"arrow_forward",label:"Confirm",loading:e.loading,color:"primary",disable:e.$v.$invalid},on:{click:e.confirm}},[r("q-spinner-facebook",{attrs:{slot:"loading"},slot:"loading"})],1)],1),r("div",{staticClass:"row justify-center"},[r("q-btn",{attrs:{flat:"",label:"Resend verification code",color:"grey-8"},on:{click:e.resend}})],1),r("div",{staticClass:"row justify-center"},[r("q-btn",{attrs:{flat:"",label:"Return to Sign In",color:"grey-8"},on:{click:e.signIn}})],1)])])},i=[];r._withStripped=!0;t("96cf");var a=t("c973"),u=t.n(a),o=(t("6b54"),t("3156")),s=t.n(o),f=t("00ef"),d=t("d67a"),c=t("b5ae"),l=t("2f62"),m=t("0374"),p={name:"confirmEmail",data:function(){return{username:"",code:"",error:"",loading:!1,step:0}},mounted:function(){this.signupUser&&this.signupUser.username?this.username=this.signupUser.username:this.$router.push("/")},validations:{code:{required:c["required"]}},computed:s()({notify:function(){return this.$q.notify}},Object(l["c"])("app",["signupUser","signupOrg"])),methods:s()({confirm:function(e){var n=this;this.loading=!0,f["a"].confirmSignUp(this.username,this.code.toString()).then(function(){n.authorizeUser()}).catch(function(e){return n.setError(e)})},resend:function(){var e=this;f["a"].resendSignUp(this.username).then(function(){e.notify({message:"A verification code has been sent to your email account.",type:"positive"})}).catch(function(n){return e.setError(n)})},signIn:function(){this.$router.push("/auth/signIn")},setError:function(e){var n=this,t=e.message||e;this.loading=!1,this.login_error=!0,this.$q.dialog({title:"Error",message:t}).then(function(){n.login_error=!1})},authorizeUser:function(){var e=this;f["a"].signIn(this.signupUser.username,this.signupUser.password).then(function(n){return d["a"].commit("setUser",n),0===e.step?e.$apollo.query({query:m["h"]}).then(function(n){setTimeout(e.signOut,500)}):e.resetSession(),n}).catch(function(e){console.log("Error",e)})},signOut:function(){var e=this;f["a"].signOut().then(function(){d["a"].commit("setUser",null),e.step+=1,setTimeout(e.authorizeUser,500)}).catch(function(n){return e.$q.notify({message:n,type:"negative"})})},resetSession:function(){var e=u()(regeneratorRuntime.mark(function e(){var n,t,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f["a"].currentAuthenticatedUser();case 3:return n=e.sent,e.next=6,f["a"].currentSession();case 6:t=e.sent,n.refreshSession(t.refreshToken,function(e,n){e?console.log("Errors",e,n):(d["a"].commit("setCurrentSession",n),r.loading=!1,r.setSignupUser({}),r.signupOrg?(r.setSignupOrg(null),r.$router.push("/signup/invite")):r.$router.push("/signup/welcome_slideshow"))}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log("Unable to refresh Token",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},Object(l["b"])({setSignupUser:"app/setSignupUser",setSignupOrg:"app/setSignupOrg"}))},g=p,v=t("2877"),h=t("d1d7"),b=Object(v["a"])(g,r,i,!1,null,null,null);"function"===typeof h["default"]&&Object(h["default"])(b),b.options.__file="confirmEmail.vue";n["default"]=b.exports},eb66:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e){return(0,r.withParams)({type:"minValue",min:e},function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+n>=+e})};n.default=i},ec11:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),i=function(e,n){return(0,r.withParams)({type:"between",min:e,max:n},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+e<=+t&&+n>=+t})};n.default=i}}]);