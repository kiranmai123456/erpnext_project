import u from"./EmployeeAdvanceItem-7a62e569.js";import{r as o,o as t,n as l,F as _,q as f,c as m,w as a,b as n,a as y,d as x}from"./index-a4ebe9d4.js";import"./Badge.vue_vue_type_script_setup_true_lang-c7a62ffe.js";import"./workflow-91dd932b.js";import"./EmployeeAvatar-7cb223ed.js";import"./Avatar.vue_vue_type_script_setup_true_lang-bcd6ccc1.js";import"./EmployeeAdvanceIcon-613127b5.js";const v={key:0,class:"flex flex-col bg-white rounded mt-5 overflow-auto"},w={class:"flex flex-col bg-white w-full py-5 px-3.5 mt-0 border-none"},F={__name:"EmployeeAdvanceBalance",props:{items:{type:Array}},setup(i){const r=i;return(b,h)=>{var c;const s=o("router-link"),p=o("Button"),d=o("EmptyState");return(c=r.items)!=null&&c.length?(t(),l("div",v,[(t(!0),l(_,null,f(r.items,e=>(t(),m(s,{key:e.name,to:{name:"EmployeeAdvanceDetailView",params:{id:e.name}},class:"flex flex-row p-3.5 items-center justify-between border-b cursor-pointer"},{default:a(()=>[n(u,{doc:e},null,8,["doc"])]),_:2},1032,["to"]))),128)),n(s,{to:{name:"EmployeeAdvanceFormView"}},{default:a(({navigate:e})=>[y("div",w,[n(p,{onClick:e,variant:"subtle",class:"py-5 text-base"},{default:a(()=>[x(" Request an Advance ")]),_:2},1032,["onClick"])])]),_:1})])):(t(),m(d,{key:1,message:"You have no advances"}))}}};export{F as default};
