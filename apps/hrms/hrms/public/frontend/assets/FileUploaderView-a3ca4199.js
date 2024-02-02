import{_ as k,h as _,r as F,o as u,n as f,a as e,b as o,u as a,p as w,F as D,q as B,t as g,w as i,d as p,y as m,Z as I,I as U,x as A,B as N,C as S}from"./index-a4ebe9d4.js";import{F as M}from"./WorkflowActionSheet-b6437bf3.js";const h=n=>(N("data-v-80243cf5"),n=n(),S(),n),P={class:"flex flex-col gap-3 py-4"},$={class:"file-select"},j=h(()=>e("h2",{class:"text-base font-semibold text-gray-800 pb-4"},"Attachments",-1)),q={class:"select-button cursor-pointer"},E={class:"flex flex-col w-full border shadow-sm items-center rounded p-3 gap-2"},L=h(()=>e("span",{class:"block text-sm font-normal leading-5 text-gray-700"}," Upload images or documents ",-1)),O={key:0,class:"w-full"},R={class:"w-full flex flex-col items-center gap-2"},T={class:"flex flex-row items-center justify-between text-gray-700 text-sm"},Z=["onClick"],z=h(()=>e("h2",{class:"text-lg font-bold"},"Delete Attachment",-1)),G={class:"font-bold"},H={class:"flex flex-row gap-4"},J={__name:"FileUploaderView",props:{modelValue:{type:Object,required:!0}},emits:["handle-file-select","handle-file-delete"],setup(n,{emit:v}){let l=_(!1),d=_(!1),c=_({});function y(r){c.value=r,d.value=!0}function b(r){c.value=r,l.value=!0}function V(){v("handle-file-delete",c.value),l.value=!1}return(r,s)=>{const x=F("Button");return u(),f("div",P,[e("label",$,[j,e("div",q,[e("div",E,[o(a(w),{name:"upload",class:"h-6 w-6 text-gray-700"}),L]),e("input",{class:"hidden",ref:"input",type:"file",multiple:"",accept:"*",onChange:s[0]||(s[0]=t=>v("handle-file-select",t))},null,544)])]),n.modelValue.length?(u(),f("div",O,[e("ul",R,[(u(!0),f(D,null,B(n.modelValue,(t,C)=>(u(),f("li",{class:"bg-gray-100 rounded p-2 w-full",key:C},[e("div",T,[e("span",{class:"grow",onClick:K=>y(t)},g(t.file_name||t.name),9,Z),o(a(w),{name:"x",class:"h-4 w-4 cursor-pointer text-gray-700",onClick:()=>b(t)},null,8,["onClick"])])]))),128))]),o(a(I),{modelValue:a(l),"onUpdate:modelValue":s[2]||(s[2]=t=>m(l)?l.value=t:l=t)},{"body-title":i(()=>[z]),"body-content":i(()=>[e("p",null,[p(" Are you sure you want to delete the attachment "),e("span",G,g(a(c).file_name),1),p(" ? ")])]),actions:i(()=>[e("div",H,[o(x,{variant:"outline",class:"py-5 w-full",onClick:s[1]||(s[1]=t=>m(l)?l.value=!1:l=!1)},{default:i(()=>[p(" Cancel ")]),_:1}),o(x,{variant:"solid",theme:"red",onClick:V,class:"py-5 w-full"},{default:i(()=>[p(" Delete ")]),_:1})])]),_:1},8,["modelValue"]),o(a(U),{ref:"modal","is-open":a(d),onDidDismiss:s[3]||(s[3]=t=>m(d)?d.value=!1:d=!1)},{default:i(()=>[o(M,{file:a(c)},null,8,["file"])]),_:1},8,["is-open"])])):A("",!0)])}}},X=k(J,[["__scopeId","data-v-80243cf5"]]);export{X as default};