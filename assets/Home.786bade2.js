import{d as n,s as a,r as s,t as c,h as t,a as l}from"./index.98a068a9.js";import{u as i}from"./counter.06be5220.js";var m=n({name:"HelloWorld",props:{title:{type:[String,Number],default:""}},setup(r,u){const{count:e}=a(i()),o=s({});return{...c(o),count:e}},render(){return t("div",[this.count])}});const d=()=>l;var h=n({name:"Home",setup(r,u){const{increment:e}=i(),o=d(),p=s({});return{...c(p),increment:e,router:o}},render(){const{count:r,router:u}=this;return t("div",{style:"font-size: 14px"},[t("div",{style:"font-size: 24px;"},["\u8FD9\u662F\u4E00\u6BB5\u6CA1\u7528\u7684\u6587\u5B57"]),t("h1",["\u8FD9\u662F\u4E00\u6BB5\u6CA1\u7528\u7684\u6587\u5B57"]),t("button",{on:{click:()=>u.push("/WebGpu")}},["WebGpu"]),t("button",{on:{click:e=>this.increment()}},["\u70B9\u51FB++"]),t(m)])}});export{h as default};