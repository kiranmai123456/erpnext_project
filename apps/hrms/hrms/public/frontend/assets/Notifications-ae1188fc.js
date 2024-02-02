import{G as x,g as C,e as N,r as h,c,w as o,u as e,o as a,b as n,a as t,p as g,n as i,t as p,d as $,x as j,F as B,q as R,s as V,N as I,Q as D,R as z}from"./index-a4ebe9d4.js";import A from"./EmployeeAvatar-7cb223ed.js";import{n as l,u as d}from"./notifications-2188d3ee.js";import"./Avatar.vue_vue_type_script_setup_true_lang-bcd6ccc1.js";const L={class:"flex flex-col h-screen w-screen"},M={class:"w-full sm:w-96"},S={class:"flex flex-row bg-white shadow-sm py-4 px-3 items-center justify-between border-b sticky top-0 z-10"},T={class:"flex flex-row items-center"},F=t("h2",{class:"text-xl font-semibold text-gray-900"},"Notifications",-1),H={class:"flex flex-col gap-4 mt-5 p-4"},q={key:0,class:"flex flex-row justify-between items-center"},E={class:"text-lg text-gray-800 font-semibold"},G={key:1,class:"flex flex-col bg-white rounded"},P={class:"flex flex-col gap-0.5 grow ml-3"},Q=["innerHTML"],U={class:"text-xs font-normal text-gray-500"},Z={__name:"Notifications",setup(Y){x("$user");const b=x("$dayjs"),w=C(),f=N({url:"hrms.api.mark_all_notifications_as_read",onSuccess(){l.reload()}});function k(r){l.setValue.submit({name:r,read:1},{onSuccess:()=>{d.reload()}})}function v(r){return{name:`${r.reference_document_type.replace(/\s+/g,"")}DetailView`,params:{id:r.reference_document_name}}}return(r,u)=>{const _=h("Button"),y=h("router-link");return a(),c(e(z),null,{default:o(()=>[n(e(D),{class:"ion-padding"},{default:o(()=>{var m;return[t("div",L,[t("div",M,[t("header",S,[t("div",T,[n(_,{variant:"ghost",class:"!pl-0 hover:bg-white",onClick:u[0]||(u[0]=s=>e(w).back())},{default:o(()=>[n(e(g),{name:"chevron-left",class:"h-5 w-5"})]),_:1}),F])]),t("div",H,[e(d).data?(a(),i("div",q,[t("div",E,p(e(d).data)+" Unread ",1),n(_,{variant:"outline",class:"ml-auto",onClick:e(f).submit,loading:e(f).loading},{prefix:o(()=>[n(e(g),{name:"check-circle",class:"w-4"})]),default:o(()=>[$(" Mark all as read ")]),_:1},8,["onClick","loading"])])):j("",!0),(m=e(l).data)!=null&&m.length?(a(),i("div",G,[(a(!0),i(B,null,R(e(l).data,s=>(a(),c(y,{class:V(["flex flex-row items-start p-4 justify-between border-b before:mt-3","before:content-[''] before:mr-2 before:shrink-0 before:w-1.5 before:h-1.5 before:rounded-full",s.read?"bg-white-500":"before:bg-blue-500"]),key:s.name,to:v(s),onClick:J=>k(s.name)},{default:o(()=>[n(A,{userID:s.from_user,size:"lg"},null,8,["userID"]),t("div",P,[t("div",{class:"text-sm leading-5 font-normal text-gray-800",innerHTML:s.message},null,8,Q),t("div",U,p(e(b)(s.creation).fromNow()),1)])]),_:2},1032,["class","to","onClick"]))),128))])):(a(),c(I,{key:2,message:"You have no notifications"}))])])])]}),_:1})]),_:1})}}};export{Z as default};