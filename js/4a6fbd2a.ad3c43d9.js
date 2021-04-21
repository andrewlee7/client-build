(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4a6fbd2a"],{"0374":function(e,n,t){"use strict";t.d(n,"a",function(){return q}),t.d(n,"i",function(){return U}),t.d(n,"s",function(){return x}),t.d(n,"m",function(){return z}),t.d(n,"j",function(){return T}),t.d(n,"n",function(){return F}),t.d(n,"t",function(){return D}),t.d(n,"k",function(){return B}),t.d(n,"h",function(){return k}),t.d(n,"e",function(){return C}),t.d(n,"r",function(){return E}),t.d(n,"q",function(){return R}),t.d(n,"p",function(){return V}),t.d(n,"o",function(){return N}),t.d(n,"d",function(){return L}),t.d(n,"c",function(){return Q}),t.d(n,"g",function(){return W}),t.d(n,"f",function(){return H}),t.d(n,"l",function(){return Z}),t.d(n,"b",function(){return G});var r=t("5640"),a=t.n(r),i=t("9530"),u=t.n(i);function o(){var e=a()(["\n  query CheckUserStatus($id:ID!) {\n    userStatus( where: {id: $id} ) {\n      id\n      userStatus\n    }\n  }\n"]);return o=function(){return e},e}function s(){var e=a()(["\n  mutation ResendTempPwdMutation($id: ID!){\n    resetUserTempPwd(where: {id : $id}) {\n      id\n    }\n  }\n"]);return s=function(){return e},e}function d(){var e=a()(["\n  mutation DisableUserMutation($id: ID!){\n    disableUser(where: {id: $id}) {\n      id\n      disabled\n    }\n  }\n"]);return d=function(){return e},e}function c(){var e=a()(["\n  mutation EnableUserMutation($id: ID!){\n    enableUser(where: {id: $id}) {\n      id\n      disabled\n    }\n  }\n"]);return c=function(){return e},e}function f(){var e=a()(["\n  mutation CreateUserAndAvatarMutation($name: String!, $email: String!, $timezone: String!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $username: String!, $organization: OrganizationUpdateOneWithoutUsersInput, $state: String) {\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        email: $email\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n        organization: $organization\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return f=function(){return e},e}function l(){var e=a()(["\n  mutation CreateUserMutation($name: String!, $email: String!, $timezone: String!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $username: String!, $organization: OrganizationUpdateOneWithoutUsersInput, $state: String){\n    createUser(\n      data: {\n        name: $name\n        username: $username\n        email: $email\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        organization: $organization\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return l=function(){return e},e}function m(){var e=a()(["\n  mutation UpdateProfileMutation($name: String!, $timezone: String!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $state: String) {\n    updateProfile(\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return m=function(){return e},e}function p(){var e=a()(["\n  mutation UpdateProfileMutation($name: String!, $timezone: String!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $state: String) {\n    updateProfile(\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return p=function(){return e},e}function g(){var e=a()(["\n  mutation updateUserMutation($name: String!, $timezone: String!, $id: ID!, $avatarId: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $organization: OrganizationUpdateOneWithoutUsersInput, $state: String) {\n    updateUser(\n      where: {id: $id}\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        avatar: {\n          connect: { id: $avatarId }\n        }\n        organization: $organization\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return g=function(){return e},e}function v(){var e=a()(["\n  mutation updateUserMutation($name: String!, $timezone: String!, $id: ID!, $isAdmin: Boolean, $isTeacher: Boolean, $isStudent: Boolean, $isParent: Boolean, $organization: OrganizationUpdateOneWithoutUsersInput, $state: String) {\n    updateUser(\n      where: {id: $id}\n      data: {\n        name: $name\n        timezone: $timezone\n        isAdmin: $isAdmin\n        isTeacher: $isTeacher\n        isStudent: $isStudent\n        isParent: $isParent\n        organization: $organization\n        state: $state\n      }\n    ){\n      ...UserFragment\n    }\n  }\n  ","\n"]);return v=function(){return e},e}function h(){var e=a()(["\n  mutation deleteUserMutation($id: ID!) {\n    deleteUser(where: {id: $id }) {\n      id\n    }\n  }\n"]);return h=function(){return e},e}function $(){var e=a()(["\n  query me {\n    me {\n      id\n      sub\n      name\n      email\n      timezone\n      disabled\n      avatar {\n        id\n        url\n        secret\n      }\n      organization {\n        id\n        name\n      }\n      isAdmin\n      isTeacher\n      isStudent\n      isParent\n      isPublisher\n      username\n    }\n  }\n"]);return $=function(){return e},e}function b(){var e=a()(["\n  query ProfileQuery {\n    user: profile {\n      ...UserFragment\n    }\n  }\n  ","\n"]);return b=function(){return e},e}function y(){var e=a()(["\n  query userQuery($id: ID!) {\n    user( where: {id: $id} ) {\n      ...UserFragment\n    }\n  }\n  ","\n"]);return y=function(){return e},e}function P(){var e=a()(["\n  subscription UsersSubscription {\n    userSubscription {\n      mutation\n      node {\n        id\n        sub\n        name\n        email\n        avatar {\n          id\n          url\n          secret\n        }\n        createdAt\n        updatedAt\n        isAdmin\n        isTeacher\n        isParent\n        isStudent\n        disabled\n      }\n      previousValues {\n        id\n      }\n    }\n  }\n"]);return P=function(){return e},e}function S(){var e=a()(["\n  query TeachersQuery($first: Int, $after: String) {\n    teachers(orderBy: name_ASC, first: $first, after: $after) {\n      ...UserFragment\n    }\n  }\n  ","\n"]);return S=function(){return e},e}function _(){var e=a()(["\n  query OrgUsersQuery($first: Int, $after: String) {\n    orgUsers(orderBy: name_ASC, first: $first, after: $after) {\n      ...UserFragment\n    }\n  }\n  ","\n"]);return _=function(){return e},e}function w(){var e=a()(["\n  query SignupEnabled {\n    signupEnabled {\n      isEnabled\n      message\n    }\n  }\n"]);return w=function(){return e},e}function O(){var e=a()(["\n  query AllUsersQuery($first: Int, $skip: Int, $where: UserWhereInput) {\n    users(orderBy: name_ASC, first: $first, skip: $skip, where: $where) {\n      id\n      name\n      organization {\n        id\n        name\n      }\n    }\n  }\n"]);return O=function(){return e},e}function M(){var e=a()(["\n  query NumUsersQuery($where: UserWhereInput) {\n    numUsers(where: $where)\n  }\n"]);return M=function(){return e},e}function j(){var e=a()(["\n  query AllUsersQuery($first: Int, $skip: Int, $where: UserWhereInput) {\n    users(orderBy: name_ASC, first: $first, skip: $skip, where: $where) {\n      ...UserFragment\n      awsStatus\n    }\n  }\n  ","\n"]);return j=function(){return e},e}function A(){var e=a()(["\n  fragment UserFragment on User {\n    id\n    name\n    email\n    avatar {\n      id\n      url\n      secret\n    }\n    createdAt\n    updatedAt\n    isAdmin\n    isTeacher\n    isParent\n    isStudent\n    disabled\n    username\n    timezone\n    state\n    organization {\n      id\n      name\n    }\n  }\n"]);return A=function(){return e},e}var I=u()(A()),q=u()(j(),I),U=u()(M()),x=u()(O()),z=u()(w()),T=u()(_(),I),F=u()(S(),I),D=(u()(P()),u()(y(),I)),B=u()(b(),I),k=u()($()),C=u()(h()),E=u()(v(),I),R=u()(g(),I),V=u()(p(),I),N=u()(m(),I),L=u()(l(),I),Q=u()(f(),I),W=u()(c()),H=u()(d()),Z=u()(s()),G=u()(o())},"11c1":function(e,n,t){var r=t("c437"),a=t("c64e"),i=a;i.v1=r,i.v4=a,e.exports=i},1331:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=(0,r.regex)("integer",/^-?[0-9]*$/);n.default=a},1973:function(e,n,t){e.exports=t("5bba")},"1d6a":function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-page",{staticClass:"message-view"},[t("loading",{attrs:{query:e.$apollo.queries.message}},[e.message.id?t("scroll",{attrs:{id:"scrollContainer"}},[t("div",{staticClass:"q-ma-md q-pt-md"},[t("q-chat-message",{attrs:{label:"Start of messages"}}),t("q-chat-message",{attrs:{name:e.message.from.name,stamp:e._f("toShortDate")(e.message.createdAt),sent:e.message.from.isMe}},[t("template",{slot:"avatar"},[e.message.from.avatar?t("aws-image",{staticClass:"q-message-avatar",attrs:{src:e.message.from.avatar}}):t("q-icon",{staticClass:"q-message-avatar ",attrs:{name:"person"}})],1),t("template",{slot:"default"},[e._v("\n            "+e._s(e.message.body)+"\n          ")])],2),e._l(e.message.replies,function(n){return t("q-chat-message",{key:n.id,attrs:{name:n.from.name,stamp:e._f("toShortDate")(n.createdAt),sent:n.from.isMe}},[t("template",{slot:"avatar"},[n.from.avatar?t("aws-image",{staticClass:"q-message-avatar",attrs:{src:n.from.avatar}}):t("q-icon",{staticClass:"q-message-avatar",attrs:{name:"person"}})],1),n.attachment?t("template",{slot:"default"},[t("aws-image",{staticClass:"responsive",attrs:{src:n.attachment}})],1):t("template",{slot:"default"},[e._v("\n            "+e._s(n.body)+"\n          ")])],2)})],2)]):e._e(),t("input",{ref:"uploader",staticStyle:{opacity:"0"},attrs:{type:"file"},on:{change:e.upload}}),t("q-layout-footer",{staticStyle:{"box-shadow":"none","border-top":"1px solid #ddd"}},[t("div",{staticClass:"flex q-pa-sm items-start",staticStyle:{width:"100%",background:"#f6f6f6"}},[t("q-btn",{staticClass:"q-mr-sm",staticStyle:{background:"#fff",border:"1px solid #ddd",padding:"12px 16px"},attrs:{flat:"",color:"primary_dk"},on:{click:e.selectFile}},[t("i",{staticClass:"fa fa-image"})]),t("q-input",{staticClass:"text-dark bg-white round-borders",staticStyle:{"box-shadow":"inset 0px 1px 2px rgba(0,0,0,0.15)",border:"1px solid #ddd","flex-grow":"1"},attrs:{inverted:"",placeholder:"Enter a reply...",color:"#000"},on:{blur:e.$v.reply.$touch},model:{value:e.reply,callback:function(n){e.reply=n},expression:"reply"}}),t("q-btn",{staticClass:"q-ml-sm",staticStyle:{padding:"11px 16px"},attrs:{color:"primary",disabled:this.canNotSave},on:{click:this.sendReply}},[e._v("Send")])],1)])],1)],1)},a=[];r._withStripped=!0;t("7f7f");var i=t("3156"),u=t.n(i),o=t("2f62"),s=t("eb42"),d=t("ccbf"),c=t("0374"),f=t("79f8"),l=t("5012"),m=t("40c0"),p=t("fcab"),g=t("b5ae"),v=t("11c1"),h=t("9755"),$={name:"MessageView",mixins:[m["a"],f["a"]],components:{awsImage:p["a"],awsUpload:l["a"]},data:function(){return{message:{},sending:!1,deleteMutation:s["b"],reply:null,me:null,attachment:null}},validations:{reply:{required:g["required"],maxLength:Object(g["maxLength"])(400)}},created:function(){this.updateActions()},beforeDestroy:function(){this.pageMeta()},watch:{canNotSave:function(){this.updateActions()},"message.from.name":function(){this.updateHeader()}},computed:{canNotSave:function(){return this.$v.$invalid||this.sending},title:function(){return"this message"},itemId:function(){return this.$route.params.id}},methods:u()({selectFile:function(){this.$refs.uploader.click()},upload:function(){var e=this,n=this.$refs.uploader.files[0];if(n){this.$q.loadingBar.start();var t=Object(v["v4"])(),r=this;h["a"].put(t,n,{contentType:n.type}).then(function(t){n.__awsResult=t,e.createFileRecord(n,function(e,n){console.log("Uploaded",e,n),r.$apollo.mutate({mutation:s["f"],variables:{messageId:r.itemId,attachment:{connect:{id:e}}}}).then(function(e){r.$q.loadingBar.stop(),r.$q.notify({message:"File attachment sent",type:"positive"}),r.$apollo.queries.message.refetch()})})}).catch(function(e){console.log("Error uploading file",n,e)})}},createFileRecord:function(e,n){var t={name:e.name,size:e.size,secret:e.__awsResult.key,contentType:e.type,title:"message attachment"};this.$apollo.mutate({mutation:d["a"],variables:t}).then(function(t){e.__fileId=t.data.createFile.id,n(e.__fileId,t)})},updateHeader:function(){this.pageMeta({title:this.message.subject?this.message.subject:"No Subject",subtitle:this.formatHeader(this.message)+" >"})},updateActions:function(){this.headerActions([{icon:"fa fa-trash",handler:this.delete}])},sendReply:function(){var e=this;this.sending=!0,this.$v.$touch(),this.$v.$invalid||this.$apollo.mutate({mutation:s["f"],variables:{messageId:this.itemId,body:this.reply}}).then(function(n){e.sending=!1,e.$q.notify({message:"Message reply sent",type:"positive"}),e.reply=""})}},Object(o["b"])({headerActions:"app/setHeaderActions",pageMeta:"app/setPageMeta"})),apollo:{message:{query:s["e"],variables:function(){return{id:this.itemId}},skip:function(){return!this.itemId},subscribeToMore:[{variables:function(){return{id:this.itemId}},document:s["g"],updateQuery:function(e,n){n.subscriptionData;this.$apollo.queries.message.refetch()}}]},me:{query:c["h"],fetchPolicy:"cache-and-network"}}},b=$,y=t("2877"),P=Object(y["a"])(b,r,a,!1,null,null,null);P.options.__file="MessageView.vue";n["default"]=P.exports},2366:function(e,n){for(var t=[],r=0;r<256;++r)t[r]=(r+256).toString(16).substr(1);function a(e,n){var r=n||0,a=t;return[a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],"-",a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]],a[e[r++]]].join("")}e.exports=a},"2a12":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e){return(0,r.withParams)({type:"maxLength",max:e},function(n){return!(0,r.req)(n)||(0,r.len)(n)<=e})};n.default=a},3360:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.withParams)({type:"and"},function(){for(var e=this,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n.length>0&&n.reduce(function(n,t){return n&&t.apply(e,r)},!0)})};n.default=a},"3a54":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);n.default=a},"40c0":function(e,n,t){"use strict";t.d(n,"a",function(){return r});t("a481");var r={methods:{delete:function(){var e=this;this.$q.dialog({title:"Are you sure you want to delete ".concat(this.title,"?"),ok:"Delete",cancel:"Cancel"}).then(function(n){e.$apollo.mutate({mutation:e.deleteMutation,variables:{id:e.itemId}}).then(function(n){e.$q.notify({message:"".concat(e.title," was deleted sucessfully"),type:"negative"});var t=e.deleteRoute||e.$route.meta.backRoute;e.$router.replace("/".concat(t))})}).catch(function(){})}}}},"45b8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=(0,r.regex)("numeric",/^[0-9]*$/);n.default=a},"46bc":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e){return(0,r.withParams)({type:"maxValue",max:e},function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+n<=+e})};n.default=a},"494d":function(e,n,t){e.exports=t("e1b7")},5012:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-field",{attrs:{label:e.label,icon:e.icon,helper:e.helper}},[e.asset&&e.asset.id?[e.showLink?t("aws-link",{attrs:{src:e.asset}}):t("aws-image",{staticClass:"responsive",attrs:{src:e.asset}})]:e._e(),t("q-uploader",{ref:"uploader",attrs:{url:"",extensions:e.allowedExtensions,"auto-expand":"","upload-factory":e.uploadFactory,"hide-upload-button":""},on:{add:e.fileAdded,"remove:cancel":e.fileRemoved,"remove:abort":e.fileRemoved,uploaded:e.fileRemoved}})],2)},a=[];r._withStripped=!0;t("7f7f"),t("551c");var i=t("9755"),u=t("fcab"),o=t("11c1"),s=t("ccbf"),d=t("99d8"),c={name:"awsUpload",props:{asset:Object,assetTitle:String,label:String,icon:String,helper:String,value:Array,extensions:String,showLink:Boolean},components:{awsImage:u["a"],awsLink:d["a"]},created:function(){this.$root.$on("trigger-uploads",this.triggerUpload),this.$root.$on("reset-uploaders",this.resetUploader)},destroyed:function(){this.$root.$off("trigger-uploads",this.triggerUpload),this.$root.$off("reset-uploaders",this.resetUploader)},computed:{allowedExtensions:function(){return this.extensions?this.extensions:".gif,.jpg,.jpeg,.png"}},methods:{triggerUpload:function(){this.$refs.uploader.upload()},resetUploader:function(){this.$refs.uploader.reset()},uploadFactory:function(e,n){var t=this,r=Object(o["v4"])();return n(10),new Promise(function(a,u){i["a"].put(r,e,{contentType:e.type}).then(function(r){n(75),e.__awsResult=r,t.createFileRecord(e,function(){a(e)})}).catch(function(n){u(e,n)})})},fileAdded:function(e,n){this.$store.commit("app/pushUploadQueue",e)},fileRemoved:function(e){this.$store.commit("app/removeFromUploadQueue",e)},createFileRecord:function(e,n){var t=this,r={name:e.name,size:e.size,secret:e.__awsResult.key,contentType:e.type,title:this.assetTitle};this.$apollo.mutate({mutation:s["a"],variables:r}).then(function(r){e.__fileId=r.data.createFile.id,void 0!==t.value&&null!==t.value&&(t.value[0]=r.data.createFile.id),n(r)})}}},f=c,l=t("2877"),m=Object(l["a"])(f,r,a,!1,null,null,null);m.options.__file="awsUpload.vue";n["a"]=m.exports},"522e":function(e,n,t){var r=t("f772"),a=t("ebfd").onFreeze;t("ce7e")("freeze",function(e){return function(n){return e&&r(n)?e(a(n)):n}})},5640:function(e,n,t){var r=t("1973"),a=t("494d");function i(e,n){return n||(n=e.slice(0)),a(r(e,{raw:{value:a(n)}}))}e.exports=i},"5bba":function(e,n,t){t("9d98");var r=t("584a").Object;e.exports=function(e,n){return r.defineProperties(e,n)}},"5d75":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,i=(0,r.regex)("email",a);n.default=i},"5db3":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e){return(0,r.withParams)({type:"minLength",min:e},function(n){return!(0,r.req)(n)||(0,r.len)(n)>=e})};n.default=a},6235:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=(0,r.regex)("alpha",/^[a-zA-Z]*$/);n.default=a},6417:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e){return(0,r.withParams)({type:"not"},function(n,t){return!(0,r.req)(n)||!e.call(this,n,t)})};n.default=a},"772d":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,r.regex)("url",a);n.default=i},"78ef":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"withParams",{enumerable:!0,get:function(){return r.default}}),n.regex=n.ref=n.len=n.req=void 0;var r=a(t("8750"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var u=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var n in e)return!0;return!1}return!!String(e).length};n.req=u;var o=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};n.len=o;var s=function(e,n,t){return"function"===typeof e?e.call(n,t):t[e]};n.ref=s;var d=function(e,n){return(0,r.default)({type:e},function(e){return!u(e)||n.test(e)})};n.regex=d},"79f8":function(e,n,t){"use strict";t.d(n,"a",function(){return r});t("7f7f");var r={methods:{formatTo:function(e){return e.to.map(function(e){return e.name}).join(", ")},formatHeader:function(e){var n=e.to.concat([e.from]),t=n.filter(function(e){return!e.isMe}).map(function(e){return e.name}).join(", ");return t||e.from.name}}}},8750:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r="web"===Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,THEME:"mat",MODE:"spa",ONESIGNAL_APP_ID:void 0,ONESIGNAL_SAFARI_WEB_ID:void 0,MIZZEN_NATIVE_APP_TARGET:void 0,VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"}).BUILD?t("cb69").withParams:t("0234").withParams,a=r;n.default=a},"91d3":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},function(n){if(!(0,r.req)(n))return!0;if("string"!==typeof n)return!1;var t="string"===typeof e&&""!==e?n.split(e):12===n.length||16===n.length?n.match(/.{2}/g):null;return null!==t&&(6===t.length||8===t.length)&&t.every(i)})};n.default=a;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},"9d98":function(e,n,t){var r=t("63b6");r(r.S+r.F*!t("8e60"),"Object",{defineProperties:t("7e90")})},aa82:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},function(n,t){return!(0,r.ref)(e,this,t)||(0,r.req)(n)})};n.default=a},b5ae:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"alpha",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(n,"alphaNum",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(n,"numeric",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(n,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(n,"email",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(n,"ipAddress",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(n,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(n,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(n,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(n,"required",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(n,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(n,"requiredUnless",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(n,"sameAs",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(n,"url",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(n,"or",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(n,"and",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(n,"not",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(n,"minValue",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(n,"maxValue",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(n,"integer",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(n,"decimal",{enumerable:!0,get:function(){return _.default}}),n.helpers=void 0;var r=M(t("6235")),a=M(t("3a54")),i=M(t("45b8")),u=M(t("ec11")),o=M(t("5d75")),s=M(t("c99d")),d=M(t("91d3")),c=M(t("2a12")),f=M(t("5db3")),l=M(t("d4f4")),m=M(t("aa82")),p=M(t("e652")),g=M(t("b6cb")),v=M(t("772d")),h=M(t("d294")),$=M(t("3360")),b=M(t("6417")),y=M(t("eb66")),P=M(t("46bc")),S=M(t("1331")),_=M(t("c301")),w=O(t("78ef"));function O(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};r.get||r.set?Object.defineProperty(n,t,r):n[t]=e[t]}return n.default=e,n}function M(e){return e&&e.__esModule?e:{default:e}}n.helpers=w},b6cb:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e){return(0,r.withParams)({type:"sameAs",eq:e},function(n,t){return n===(0,r.ref)(e,this,t)})};n.default=a},c301:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);n.default=a},c437:function(e,n,t){var r,a,i=t("e1f4"),u=t("2366"),o=0,s=0;function d(e,n,t){var d=n&&t||0,c=n||[];e=e||{};var f=e.node||r,l=void 0!==e.clockseq?e.clockseq:a;if(null==f||null==l){var m=i();null==f&&(f=r=[1|m[0],m[1],m[2],m[3],m[4],m[5]]),null==l&&(l=a=16383&(m[6]<<8|m[7]))}var p=void 0!==e.msecs?e.msecs:(new Date).getTime(),g=void 0!==e.nsecs?e.nsecs:s+1,v=p-o+(g-s)/1e4;if(v<0&&void 0===e.clockseq&&(l=l+1&16383),(v<0||p>o)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");o=p,s=g,a=l,p+=122192928e5;var h=(1e4*(268435455&p)+g)%4294967296;c[d++]=h>>>24&255,c[d++]=h>>>16&255,c[d++]=h>>>8&255,c[d++]=255&h;var $=p/4294967296*1e4&268435455;c[d++]=$>>>8&255,c[d++]=255&$,c[d++]=$>>>24&15|16,c[d++]=$>>>16&255,c[d++]=l>>>8|128,c[d++]=255&l;for(var b=0;b<6;++b)c[d+b]=f[b];return n||u(c)}e.exports=d},c64e:function(e,n,t){var r=t("e1f4"),a=t("2366");function i(e,n,t){var i=n&&t||0;"string"==typeof e&&(n="binary"===e?new Array(16):null,e=null),e=e||{};var u=e.random||(e.rng||r)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,n)for(var o=0;o<16;++o)n[i+o]=u[o];return n||a(u)}e.exports=i},c99d:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=(0,r.withParams)({type:"ipAddress"},function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var n=e.split(".");return 4===n.length&&n.every(i)});n.default=a;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var n=0|+e;return n>=0&&n<=255}},cb69:function(e,n,t){"use strict";(function(e){function t(e){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},a=function(e,n){return"object"===t(e)&&void 0!==n?n:e(function(){})},i=r.vuelidate?r.vuelidate.withParams:a;n.withParams=i}).call(this,t("c8ba"))},ccbf:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t("5640"),a=t.n(r),i=t("9530"),u=t.n(i);function o(){var e=a()(["\n  mutation CreateFileMutation($name: String, $size: Int, $secret: String, $contentType: String, $url: String, $title: String){\n    createFile(\n      data: {\n        name: $name\n        size: $size\n        secret: $secret\n        contentType: $contentType\n        url: $url\n        title: $title\n      }\n    ){\n      id\n    }\n  }\n"]);return o=function(){return e},e}var s=u()(o())},d294:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.withParams)({type:"or"},function(){for(var e=this,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return n.length>0&&n.reduce(function(n,t){return n||t.apply(e,r)},!1)})};n.default=a},d4f4:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=(0,r.withParams)({type:"required"},r.req);n.default=a},e1b7:function(e,n,t){t("522e"),e.exports=t("584a").Object.freeze},e1f4:function(e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var r=new Uint8Array(16);e.exports=function(){return t(r),r}}else{var a=new Array(16);e.exports=function(){for(var e,n=0;n<16;n++)0===(3&n)&&(e=4294967296*Math.random()),a[n]=e>>>((3&n)<<3)&255;return a}}},e652:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},function(n,t){return!!(0,r.ref)(e,this,t)||(0,r.req)(n)})};n.default=a},eb42:function(e,n,t){"use strict";t.d(n,"c",function(){return h}),t.d(n,"d",function(){return $}),t.d(n,"g",function(){return b}),t.d(n,"a",function(){return y}),t.d(n,"f",function(){return P}),t.d(n,"e",function(){return S}),t.d(n,"b",function(){return _});var r=t("5640"),a=t.n(r),i=t("9530"),u=t.n(i);function o(){var e=a()(["\n  mutation deleteMessage($id: ID!) {\n    deleteMessage(where: {id: $id }) {\n      id\n    }\n  }\n"]);return o=function(){return e},e}function s(){var e=a()(["\n  query MessageQuery($id: ID!) {\n    message(where: {id: $id}) {\n      ...MessageFragment\n      replies {\n        ...MessageFragment\n      }\n    }\n  }\n  ","\n"]);return s=function(){return e},e}function d(){var e=a()(["\n  mutation MessageAttachmentMutation($messageId: ID!, $fileId: Int) {\n    replyMessage(\n      where: {id: $messageId}\n      data: {\n        attachment: {connect: {id: $fileId}}\n      }\n    ) {\n      ...MessageFragment\n    }\n  }\n  ","\n"]);return d=function(){return e},e}function c(){var e=a()(["\n  mutation MessageReplyMutation($messageId: ID!, $body: String, $attachment: FileCreateOneInput) {\n    replyMessage(\n      where: {id: $messageId}\n      data: {\n        body: $body,\n        attachment: $attachment\n      }\n    ) {\n      ...MessageFragment\n    }\n  }\n  ","\n"]);return c=function(){return e},e}function f(){var e=a()(["\n  mutation CreateMessageMutation($to: [ID!]!, $subject: String, $body: String) {\n    createMessage(\n      data: {\n        to: $to\n        subject: $subject\n        body: $body\n      }\n    ) {\n      ...MessageFragment\n    }\n  }\n  ","\n"]);return f=function(){return e},e}function l(){var e=a()(["\n  subscription MessageSubscription($id: ID!) {\n    messageSubscription(\n      where: {\n        id: $id\n      }\n    ) {\n      mutation\n      node {\n        ...MessageFragment\n      }\n      previousValues {\n        id\n      }\n    }\n  }\n  ","\n"]);return l=function(){return e},e}function m(){var e=a()(["\n  subscription InboxSubscription {\n    inboxSubscription {\n      mutation\n      node {\n        ...MessageFragment\n      }\n      previousValues {\n        id\n      }\n    }\n  }\n  ","\n"]);return m=function(){return e},e}function p(){var e=a()(["\n  query InboxQuery($first: Int) {\n    inbox(\n      first: $first\n      orderBy: createdAt_DESC\n    ) {\n      ...MessageFragment\n    }\n  }\n  ","\n"]);return p=function(){return e},e}function g(){var e=a()(["\n  fragment MessageFragment on Message {\n    id\n    from {\n      id\n      sub\n      name\n      isMe\n      avatar {\n        id\n        secret\n      }\n    }\n    to {\n      id\n      sub\n      name\n      isMe\n      avatar {\n        id\n        secret\n      }\n    }\n    parent {\n      id\n    }\n    attachment {\n      id\n      secret\n    }\n    subject\n    body\n    createdAt\n  }\n"]);return g=function(){return e},e}var v=u()(g()),h=u()(p(),v),$=u()(m(),v),b=u()(l(),v),y=u()(f(),v),P=u()(c(),v),S=(u()(d(),v),u()(s(),v)),_=u()(o())},eb66:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e){return(0,r.withParams)({type:"minValue",min:e},function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+n>=+e})};n.default=a},ec11:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t("78ef"),a=function(e,n){return(0,r.withParams)({type:"between",min:e,max:n},function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+e<=+t&&+n>=+t})};n.default=a}}]);