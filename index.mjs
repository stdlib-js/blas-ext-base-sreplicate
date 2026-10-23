// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.3-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.1-esm/index.mjs";function t(r,e,t,n,s,d,i,o){var a,f,m,l,u;if(r<=0||e<=0)return d;for(f=s,a=o,l=0;l<r;l++){for(m=t[f],u=0;u<e;u++)d[a]=m,a+=i;f+=n}return d}function n(r,n,s,d,i,o){return t(r,n,s,d,e(r,d),i,o,e(r*n,o))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
