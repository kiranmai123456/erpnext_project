if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),t={module:{uri:r},exports:a,require:u};e[r]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Avatar.vue_vue_type_script_setup_true_lang-bcd6ccc1.js",revision:null},{url:"assets/Badge.vue_vue_type_script_setup_true_lang-c7a62ffe.js",revision:null},{url:"assets/BaseLayout-f257e0f4.js",revision:null},{url:"assets/CheckInPanel-3530c0fa.js",revision:null},{url:"assets/claims-f75f8ebf.js",revision:null},{url:"assets/CustomIonModal-fbd62d68.js",revision:null},{url:"assets/Dashboard-38018af0.js",revision:null},{url:"assets/Dashboard-479811bb.js",revision:null},{url:"assets/Dashboard-6034e0aa.js",revision:null},{url:"assets/Detail-5b334081.js",revision:null},{url:"assets/EmployeeAdvanceBalance-c9525dd8.js",revision:null},{url:"assets/EmployeeAdvanceIcon-613127b5.js",revision:null},{url:"assets/EmployeeAdvanceItem-7a62e569.js",revision:null},{url:"assets/EmployeeAvatar-7cb223ed.js",revision:null},{url:"assets/ErrorMessage-12ee4fcd.js",revision:null},{url:"assets/ExpenseAdvancesTable-8a25950b.js",revision:null},{url:"assets/ExpenseClaimItem-6d589627.js",revision:null},{url:"assets/ExpenseClaimSummary-6b508cfa.js",revision:null},{url:"assets/ExpenseItems-3d849b0a.js",revision:null},{url:"assets/ExpensesTable-c2cc8bd1.js",revision:null},{url:"assets/ExpenseTaxesTable-cd852a43.js",revision:null},{url:"assets/FileUploaderView-60e84c6b.css",revision:null},{url:"assets/FileUploaderView-a3ca4199.js",revision:null},{url:"assets/focus-visible-9c13edeb.js",revision:null},{url:"assets/FontColor-fd931217.js",revision:null},{url:"assets/Form-2c5c1877.js",revision:null},{url:"assets/Form-2dbfb777.js",revision:null},{url:"assets/Form-2f99025d.js",revision:null},{url:"assets/FormattedField-7a8ff0b9.js",revision:null},{url:"assets/formatters-c8b2d612.js",revision:null},{url:"assets/FormField-9f64adb7.js",revision:null},{url:"assets/FormView-73b2e90b.js",revision:null},{url:"assets/Holidays-349829b1.js",revision:null},{url:"assets/Home-2d8a5b02.js",revision:null},{url:"assets/index-253c3aa8.css",revision:null},{url:"assets/index-a4ebe9d4.js",revision:null},{url:"assets/index9-6ca1762a.js",revision:null},{url:"assets/input-shims-b8dd3eea.js",revision:null},{url:"assets/InsertImage-b11a7169.js",revision:null},{url:"assets/InsertLink-dc647989.js",revision:null},{url:"assets/InsertVideo-cfafba5e.js",revision:null},{url:"assets/InvalidEmployee-3182d40e.js",revision:null},{url:"assets/ios.transition-c8d28500.js",revision:null},{url:"assets/LeaveBalance-1b87486d.js",revision:null},{url:"assets/LeaveRequestItem-6af1d335.js",revision:null},{url:"assets/leaves-a1e54b4b.js",revision:null},{url:"assets/List-0181269f.js",revision:null},{url:"assets/List-1ed95d79.js",revision:null},{url:"assets/List-75ecc143.js",revision:null},{url:"assets/ListFiltersActionSheet-f9ad78dc.js",revision:null},{url:"assets/ListView-4b1ee5e2.js",revision:null},{url:"assets/Login-ca3794f4.js",revision:null},{url:"assets/md.transition-8b36eb5b.js",revision:null},{url:"assets/notifications-2188d3ee.js",revision:null},{url:"assets/Notifications-ae1188fc.js",revision:null},{url:"assets/Profile-b82f240c.js",revision:null},{url:"assets/ProfileInfoModal-ed6010b1.js",revision:null},{url:"assets/QuickLinks-97fd6079.js",revision:null},{url:"assets/realtime-e523faa8.js",revision:null},{url:"assets/RequestList-1b3d6b4b.js",revision:null},{url:"assets/RequestList-34df9ee3.css",revision:null},{url:"assets/RequestPanel-6ed3e2c2.js",revision:null},{url:"assets/SalaryDetailTable-005aac0f.js",revision:null},{url:"assets/SalarySlipItem-d1eba2c1.js",revision:null},{url:"assets/SemicircleChart-1490664a.js",revision:null},{url:"assets/status-tap-010bbd54.js",revision:null},{url:"assets/swipe-back-6c83d0b1.js",revision:null},{url:"assets/TabButtons-719fe1a3.js",revision:null},{url:"assets/workflow-91dd932b.js",revision:null},{url:"assets/WorkflowActionSheet-ae154554.css",revision:null},{url:"assets/WorkflowActionSheet-b6437bf3.js",revision:null},{url:"index.html",revision:"3ca1d8c7553dab9c6b16be025872453e"},{url:"registerSW.js",revision:"6e657efe7c551004de3f6998ba2cb958"},{url:"manifest.webmanifest",revision:"e95a602f0ad2277bf63bd8d8edbdd426"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
