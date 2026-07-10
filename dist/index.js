"use strict";var p=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var f=p(function(H,y){
function g(e,r,i,t,s,a,v,n){var u,o,x,c,q;if(e<=0||r<=0)return a;for(o=s,u=n,c=0;c<e;c++){for(x=i[o],q=0;q<r;q++)a[u]=x,u+=v;o+=t}return a}y.exports=g
});var m=p(function(I,j){
var d=require('@stdlib/strided-base-stride2offset/dist'),h=f();function w(e,r,i,t,s,a){var v=d(e,t),n=d(e*r,a);return h(e,r,i,t,v,s,a,n)}j.exports=w
});var E=p(function(J,_){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=m(),A=f();z(R,"ndarray",A);_.exports=R
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=E(),l,b=C(B(__dirname,"./native.js"));D(b)?l=F:l=b;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
