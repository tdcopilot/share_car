import{d as h,u as _,a as f,o as d,b as l,c as p,g as m,s as k,e as x,f as g,h as y,i as R}from"./index-dZcXP5vc.js";const b={class:"flex items-center justify-center h-[100vh]"},v=R("div",{class:"loader"},null,-1),B=[v],j=h({__name:"Redirect",setup(E){const s=_(),o=f();function n(){const{code:e,state:t}=o.query;if(typeof e!="string"||typeof t!="string"){s.replace("home");return}m({code:e,state:t}).then(r=>{const{expire:a,token:c,refresh_token:i,refresh_token_expire:u}=r;k(a),x(c),g(i),y(u)}).finally(()=>{s.replace("home")})}return d(n),(e,t)=>(l(),p("div",b,B))}});export{j as default};