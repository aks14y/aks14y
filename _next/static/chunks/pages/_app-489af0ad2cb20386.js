(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(6949)}])},6949:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(5893),o=n(7294),i=n(6769);let u=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),a=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function l(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize(),n="function"==typeof t.getTextInfo?t.getTextInfo():t.textInfo;if(n)return"rtl"===n.direction;if(t.script)return u.has(t.script)}let t=e.split("-")[0];return a.has(t)}let c=Symbol.for("react-aria.i18n.locale");function s(){let e="undefined"!=typeof window&&window[c]||"undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:l(e)?"rtl":"ltr"}}let d=s(),f=new Set;function v(){for(let e of(d=s(),f))e(d)}let m=o.createContext(null);function p(e){let{locale:t,children:n}=e,r=function(){let e=(0,i.Av)(),[t,n]=(0,o.useState)(d);return((0,o.useEffect)(()=>(0===f.size&&window.addEventListener("languagechange",v),f.add(n),()=>{f.delete(n),0===f.size&&window.removeEventListener("languagechange",v)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}(),u=t?{locale:t,direction:l(t)?"rtl":"ltr"}:r;return o.createElement(m.Provider,{value:u},n)}new WeakMap;var h=n(8974),b=n(1620),g=({children:e,locale:t="en-US",navigate:n,...o})=>{let i=e;return n&&(i=(0,r.jsx)(h.pG,{navigate:n,children:i})),(0,r.jsx)(p,{locale:t,children:(0,r.jsx)(b.N3,{...o,children:i})})};let E=["light","dark"],y="(prefers-color-scheme: dark)",w="undefined"==typeof window,T=(0,o.createContext)(void 0),L=e=>(0,o.useContext)(T)?o.createElement(o.Fragment,null,e.children):o.createElement(S,e),N=["light","dark"],S=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:u=N,defaultTheme:a=n?"system":"light",attribute:l="data-theme",value:c,children:s,nonce:d})=>{let[f,v]=(0,o.useState)(()=>k(i,a)),[m,p]=(0,o.useState)(()=>k(i)),h=c?Object.values(c):u,b=(0,o.useCallback)(e=>{let o=e;if(!o)return;"system"===e&&n&&(o=C());let i=c?c[o]:o,u=t?x():null,s=document.documentElement;if("class"===l?(s.classList.remove(...h),i&&s.classList.add(i)):i?s.setAttribute(l,i):s.removeAttribute(l),r){let e=E.includes(a)?a:null,t=E.includes(o)?o:e;s.style.colorScheme=t}null==u||u()},[]),g=(0,o.useCallback)(e=>{v(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),w=(0,o.useCallback)(t=>{let r=C(t);p(r),"system"===f&&n&&!e&&b("system")},[f,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(y);return e.addListener(w),w(e),()=>e.removeListener(w)},[w]),(0,o.useEffect)(()=>{let e=e=>{e.key===i&&g(e.newValue||a)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[g]),(0,o.useEffect)(()=>{b(null!=e?e:f)},[e,f]);let L=(0,o.useMemo)(()=>({theme:f,setTheme:g,forcedTheme:e,resolvedTheme:"system"===f?m:f,themes:n?[...u,"system"]:u,systemTheme:n?m:void 0}),[f,g,e,m,n,u]);return o.createElement(T.Provider,{value:L},o.createElement(R,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:i,themes:u,defaultTheme:a,attribute:l,value:c,children:s,attrs:h,nonce:d}),s)},R=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:u,value:a,attrs:l,nonce:c})=>{let s="system"===u,d="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${l.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=i?E.includes(u)&&u?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${u}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let o=a?a[e]:e,u=t?e+"|| ''":`'${o}'`,l="";return i&&r&&!t&&E.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||o?`c.add(${u})`:"null":o&&(l+=`d[s](n,${u})`),l},m=e?`!function(){${d}${v(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${s})){var t='${y}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${v(a?"x[e]":"e",!0)}}${s?"":"else{"+v(u,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${v(a?"x[e]":"e",!0)}}else{${v(u,!1,!1)};}${f}}catch(t){}}();`;return o.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:m}})},()=>!0),k=(e,t)=>{let n;if(!w){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},x=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},C=e=>(e||(e=window.matchMedia(y)),e.matches?"dark":"light");var M=n(4183),P=n.n(M),F=n(1163);function A(e){let{Component:t,pageProps:n}=e,o=(0,F.useRouter)();return(0,r.jsx)(g,{navigate:o.push,children:(0,r.jsx)(L,{children:(0,r.jsx)("main",{className:P().className,children:(0,r.jsx)(t,{...n})})})})}n(7952)},7952:function(){},4183:function(e){e.exports={style:{fontFamily:"'__Roboto_Flex_69d38c', '__Roboto_Flex_Fallback_69d38c'",fontStyle:"normal"},className:"__className_69d38c"}},1163:function(e,t,n){e.exports=n(6885)},8628:function(e,t,n){"use strict";n.d(t,{Fx:function(){return N},MT:function(){return c},kc:function(){return R}});var r=n(8974),o=n(7294),i=n(4355);function u(e){let t=(0,r.r3)(e);if("virtual"===(0,i.Jz)()){let n=t.activeElement;(0,r.QB)(()=>{t.activeElement===n&&e.isConnected&&(0,r.Ao)(e)})}else(0,r.Ao)(e)}let a=o.createContext(null),l=null;function c(e){let t,n,{children:i,contain:u,restoreFocus:c,autoFocus:s}=e,d=(0,o.useRef)(null),f=(0,o.useRef)(null),w=(0,o.useRef)([]),{parentNode:N}=(0,o.useContext)(a)||{},S=(0,o.useMemo)(()=>new T({scopeRef:w}),[w]);(0,r.bt)(()=>{let e=N||L.root;if(L.getTreeNode(e.scopeRef)&&l&&!b(l,e.scopeRef)){let t=L.getTreeNode(l);t&&(e=t)}e.addChild(S),L.addNode(S)},[S,N]),(0,r.bt)(()=>{let e=L.getTreeNode(w);e&&(e.contain=!!u)},[u]),(0,r.bt)(()=>{var e;let t=null===(e=d.current)||void 0===e?void 0:e.nextSibling,n=[];for(;t&&t!==f.current;)n.push(t),t=t.nextSibling;w.current=n},[i]),(0,r.bt)(()=>{if(c||u)return;let e=w.current,t=(0,r.r3)(e?e[0]:void 0),n=e=>{let t=e.target;p(t,w.current)?l=w:h(t)||(l=null)};return t.addEventListener("focusin",n,!1),null==e||e.forEach(e=>e.addEventListener("focusin",n,!1)),()=>{t.removeEventListener("focusin",n,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",n,!1))}},[w,c,u]),t=(0,o.useRef)(),n=(0,o.useRef)(),(0,r.bt)(()=>{let e=w.current;if(!u){n.current&&(cancelAnimationFrame(n.current),n.current=void 0);return}let o=(0,r.r3)(e?e[0]:void 0),i=e=>{if("Tab"!==e.key||e.altKey||e.ctrlKey||e.metaKey||!m(w))return;let t=o.activeElement,n=w.current;if(!n||!p(t,n))return;let r=y(v(n),{tabbable:!0},n);if(!t)return;r.currentNode=t;let i=e.shiftKey?r.previousNode():r.nextNode();i||(r.currentNode=e.shiftKey?n[n.length-1].nextElementSibling:n[0].previousElementSibling,i=e.shiftKey?r.previousNode():r.nextNode()),e.preventDefault(),i&&g(i,!0)},a=e=>{(!l||b(l,w))&&p(e.target,w.current)?(l=w,t.current=e.target):m(w)&&!h(e.target,w)?t.current?t.current.focus():l&&l.current&&E(l.current):m(w)&&(t.current=e.target)},c=e=>{n.current&&cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>{if(o.activeElement&&m(w)&&!h(o.activeElement,w)){if(l=w,o.body.contains(e.target)){var n;t.current=e.target,null===(n=t.current)||void 0===n||n.focus()}else l.current&&E(l.current)}})};return o.addEventListener("keydown",i,!1),o.addEventListener("focusin",a,!1),null==e||e.forEach(e=>e.addEventListener("focusin",a,!1)),null==e||e.forEach(e=>e.addEventListener("focusout",c,!1)),()=>{o.removeEventListener("keydown",i,!1),o.removeEventListener("focusin",a,!1),null==e||e.forEach(e=>e.removeEventListener("focusin",a,!1)),null==e||e.forEach(e=>e.removeEventListener("focusout",c,!1))}},[w,u]),(0,r.bt)(()=>()=>{n.current&&cancelAnimationFrame(n.current)},[n]),function(e,t,n){let i=(0,o.useRef)("undefined"!=typeof document?(0,r.r3)(e.current?e.current[0]:void 0).activeElement:null);(0,r.bt)(()=>{let o=e.current,i=(0,r.r3)(o?o[0]:void 0);if(!t||n)return;let u=()=>{(!l||b(l,e))&&p(i.activeElement,e.current)&&(l=e)};return i.addEventListener("focusin",u,!1),null==o||o.forEach(e=>e.addEventListener("focusin",u,!1)),()=>{i.removeEventListener("focusin",u,!1),null==o||o.forEach(e=>e.removeEventListener("focusin",u,!1))}},[e,n]),(0,r.bt)(()=>{let o=(0,r.r3)(e.current?e.current[0]:void 0);if(!t)return;let i=t=>{if("Tab"!==t.key||t.altKey||t.ctrlKey||t.metaKey||!m(e))return;let n=o.activeElement;if(!p(n,e.current))return;let r=L.getTreeNode(e);if(!r)return;let i=r.nodeToRestore,u=y(o.body,{tabbable:!0});u.currentNode=n;let a=t.shiftKey?u.previousNode():u.nextNode();if(i&&o.body.contains(i)&&i!==o.body||(i=void 0,r.nodeToRestore=void 0),(!a||!p(a,e.current))&&i){u.currentNode=i;do a=t.shiftKey?u.previousNode():u.nextNode();while(p(a,e.current));(t.preventDefault(),t.stopPropagation(),a)?g(a,!0):h(i)?g(i,!0):n.blur()}};return n||o.addEventListener("keydown",i,!0),()=>{n||o.removeEventListener("keydown",i,!0)}},[e,t,n]),(0,r.bt)(()=>{var n;let o=(0,r.r3)(e.current?e.current[0]:void 0);if(!t)return;let u=L.getTreeNode(e);if(u)return u.nodeToRestore=null!==(n=i.current)&&void 0!==n?n:void 0,()=>{let n=L.getTreeNode(e);if(!n)return;let r=n.nodeToRestore;if(t&&r&&(p(o.activeElement,e.current)||o.activeElement===o.body&&function(e){let t=L.getTreeNode(l);for(;t&&t.scopeRef!==e;){if(t.nodeToRestore)return!1;t=t.parent}return(null==t?void 0:t.scopeRef)===e}(e))){let t=L.clone();requestAnimationFrame(()=>{if(o.activeElement===o.body){let n=t.getTreeNode(e);for(;n;){if(n.nodeToRestore&&n.nodeToRestore.isConnected){g(n.nodeToRestore);return}n=n.parent}for(n=t.getTreeNode(e);n;){if(n.scopeRef&&n.scopeRef.current&&L.getTreeNode(n.scopeRef)){E(n.scopeRef.current,!0);return}n=n.parent}}})}}},[e,t])}(w,c,u),function(e,t){let n=o.useRef(t);(0,o.useEffect)(()=>{if(n.current){l=e;let t=(0,r.r3)(e.current?e.current[0]:void 0);!p(t.activeElement,l.current)&&e.current&&E(e.current)}n.current=!1},[e])}(w,s),(0,o.useEffect)(()=>{let e=(0,r.r3)(w.current?w.current[0]:void 0).activeElement,t=null;if(p(e,w.current)){for(let n of L.traverse())n.scopeRef&&p(e,n.scopeRef.current)&&(t=n);t===L.getTreeNode(w)&&(l=t.scopeRef)}},[w]),(0,r.bt)(()=>()=>{var e,t,n;let r=null!==(n=null===(t=L.getTreeNode(w))||void 0===t?void 0:null===(e=t.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==n?n:null;(w===l||b(w,l))&&(!r||L.getTreeNode(r))&&(l=r),L.removeTreeNode(w)},[w]);let R=(0,o.useMemo)(()=>({focusNext(e={}){let t=w.current,{from:n,tabbable:o,wrap:i,accept:u}=e,a=n||(0,r.r3)(t[0]).activeElement,l=t[0].previousElementSibling,c=y(v(t),{tabbable:o,accept:u},t);c.currentNode=p(a,t)?a:l;let s=c.nextNode();return!s&&i&&(c.currentNode=l,s=c.nextNode()),s&&g(s,!0),s},focusPrevious(e={}){let t=w.current,{from:n,tabbable:o,wrap:i,accept:u}=e,a=n||(0,r.r3)(t[0]).activeElement,l=t[t.length-1].nextElementSibling,c=y(v(t),{tabbable:o,accept:u},t);c.currentNode=p(a,t)?a:l;let s=c.previousNode();return!s&&i&&(c.currentNode=l,s=c.previousNode()),s&&g(s,!0),s},focusFirst(e={}){let t=w.current,{tabbable:n,accept:r}=e,o=y(v(t),{tabbable:n,accept:r},t);o.currentNode=t[0].previousElementSibling;let i=o.nextNode();return i&&g(i,!0),i},focusLast(e={}){let t=w.current,{tabbable:n,accept:r}=e,o=y(v(t),{tabbable:n,accept:r},t);o.currentNode=t[t.length-1].nextElementSibling;let i=o.previousNode();return i&&g(i,!0),i}}),[]),k=(0,o.useMemo)(()=>({focusManager:R,parentNode:S}),[S,R]);return o.createElement(a.Provider,{value:k},o.createElement("span",{"data-focus-scope-start":!0,hidden:!0,ref:d}),i,o.createElement("span",{"data-focus-scope-end":!0,hidden:!0,ref:f}))}let s=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"],d=s.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])";s.push('[tabindex]:not([tabindex="-1"]):not([disabled])');let f=s.join(':not([hidden]):not([tabindex="-1"]),');function v(e){return e[0].parentElement}function m(e){let t=L.getTreeNode(l);for(;t&&t.scopeRef!==e;){if(t.contain)return!1;t=t.parent}return!0}function p(e,t){return!!e&&!!t&&t.some(t=>t.contains(e))}function h(e,t=null){if(e instanceof Element&&e.closest("[data-react-aria-top-layer]"))return!0;for(let{scopeRef:n}of L.traverse(L.getTreeNode(t)))if(n&&p(e,n.current))return!0;return!1}function b(e,t){var n;let r=null===(n=L.getTreeNode(t))||void 0===n?void 0:n.parent;for(;r;){if(r.scopeRef===e)return!0;r=r.parent}return!1}function g(e,t=!1){if(null==e||t){if(null!=e)try{e.focus()}catch(e){}}else try{u(e)}catch(e){}}function E(e,t=!0){let n=e[0].previousElementSibling,r=v(e),o=y(r,{tabbable:t},e);o.currentNode=n;let i=o.nextNode();t&&!i&&((o=y(r=v(e),{tabbable:!1},e)).currentNode=n,i=o.nextNode()),g(i)}function y(e,t,n){let o=(null==t?void 0:t.tabbable)?f:d,i=(0,r.r3)(e).createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(e){var i;return(null==t?void 0:null===(i=t.from)||void 0===i?void 0:i.contains(e))?NodeFilter.FILTER_REJECT:e.matches(o)&&function e(t,n){return"#comment"!==t.nodeName&&function(e){let t=(0,r.kR)(e);if(!(e instanceof t.HTMLElement)&&!(e instanceof t.SVGElement))return!1;let{display:n,visibility:o}=e.style,i="none"!==n&&"hidden"!==o&&"collapse"!==o;if(i){let{getComputedStyle:t}=e.ownerDocument.defaultView,{display:n,visibility:r}=t(e);i="none"!==n&&"hidden"!==r&&"collapse"!==r}return i}(t)&&!t.hasAttribute("hidden")&&("DETAILS"!==t.nodeName||!n||"SUMMARY"===n.nodeName||t.hasAttribute("open"))&&(!t.parentElement||e(t.parentElement,t))}(e)&&(!n||p(e,n))&&(!(null==t?void 0:t.accept)||t.accept(e))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return(null==t?void 0:t.from)&&(i.currentNode=t.from),i}class w{get size(){return this.fastMap.size}getTreeNode(e){return this.fastMap.get(e)}addTreeNode(e,t,n){let r=this.fastMap.get(null!=t?t:null);if(!r)return;let o=new T({scopeRef:e});r.addChild(o),o.parent=r,this.fastMap.set(e,o),n&&(o.nodeToRestore=n)}addNode(e){this.fastMap.set(e.scopeRef,e)}removeTreeNode(e){if(null===e)return;let t=this.fastMap.get(e);if(!t)return;let n=t.parent;for(let e of this.traverse())e!==t&&t.nodeToRestore&&e.nodeToRestore&&t.scopeRef&&t.scopeRef.current&&p(e.nodeToRestore,t.scopeRef.current)&&(e.nodeToRestore=t.nodeToRestore);let r=t.children;n&&(n.removeChild(t),r.size>0&&r.forEach(e=>n&&n.addChild(e))),this.fastMap.delete(t.scopeRef)}*traverse(e=this.root){if(null!=e.scopeRef&&(yield e),e.children.size>0)for(let t of e.children)yield*this.traverse(t)}clone(){var e,t;let n=new w;for(let r of this.traverse())n.addTreeNode(r.scopeRef,null!==(t=null===(e=r.parent)||void 0===e?void 0:e.scopeRef)&&void 0!==t?t:null,r.nodeToRestore);return n}constructor(){this.fastMap=new Map,this.root=new T({scopeRef:null}),this.fastMap.set(null,this.root)}}class T{addChild(e){this.children.add(e),e.parent=this}removeChild(e){this.children.delete(e),e.parent=void 0}constructor(e){this.children=new Set,this.contain=!1,this.scopeRef=e.scopeRef}}let L=new w;function N(e={}){let{autoFocus:t=!1,isTextInput:n,within:r}=e,u=(0,o.useRef)({isFocused:!1,isFocusVisible:t||(0,i.E)()}),[a,l]=(0,o.useState)(!1),[c,s]=(0,o.useState)(()=>u.current.isFocused&&u.current.isFocusVisible),d=(0,o.useCallback)(()=>s(u.current.isFocused&&u.current.isFocusVisible),[]),f=(0,o.useCallback)(e=>{u.current.isFocused=e,l(e),d()},[d]);(0,i.mG)(e=>{u.current.isFocusVisible=e,d()},[],{isTextInput:n});let{focusProps:v}=(0,i.KK)({isDisabled:r,onFocusChange:f}),{focusWithinProps:m}=(0,i.L_)({isDisabled:!r,onFocusWithinChange:f});return{isFocused:a,isFocusVisible:c,focusProps:r?m:v}}let S=o.createContext(null);function R(e,t){let{focusProps:n}=(0,i.KK)(e),{keyboardProps:a}=(0,i.v5)(e),l=(0,r.dG)(n,a),c=function(e){let t=(0,o.useContext)(S)||{};(0,r.lE)(t,e);let{ref:n,...i}=t;return i}(t),s=e.isDisabled?{}:c,d=(0,o.useRef)(e.autoFocus);return(0,o.useEffect)(()=>{d.current&&t.current&&u(t.current),d.current=!1},[t]),{focusableProps:(0,r.dG)({...l,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},s)}}},4355:function(e,t,n){"use strict";n.d(t,{E:function(){return N},Jz:function(){return S},KK:function(){return s},L_:function(){return x},XI:function(){return K},mG:function(){return k},mk:function(){return a},v5:function(){return H}});var r=n(8974),o=n(7294);new WeakMap;let i=o.createContext({register:()=>{}});i.displayName="PressResponderContext";Symbol("linkClicked");let u=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function a({children:e}){let t=(0,o.useMemo)(()=>({register:()=>{}}),[]);return o.createElement(i.Provider,{value:t},e)}class l{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(e,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=e}}function c(e){let t=(0,o.useRef)({isFocused:!1,observer:null});(0,r.bt)(()=>{let e=t.current;return()=>{e.observer&&(e.observer.disconnect(),e.observer=null)}},[]);let n=(0,r.iW)(t=>{null==e||e(t)});return(0,o.useCallback)(e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLInputElement||e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLSelectElement){t.current.isFocused=!0;let r=e.target;r.addEventListener("focusout",e=>{t.current.isFocused=!1,r.disabled&&n(new l("blur",e)),t.current.observer&&(t.current.observer.disconnect(),t.current.observer=null)},{once:!0}),t.current.observer=new MutationObserver(()=>{if(t.current.isFocused&&r.disabled){var e;null===(e=t.current.observer)||void 0===e||e.disconnect();let n=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:n})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:n}))}}),t.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[n])}function s(e){let{isDisabled:t,onFocus:n,onBlur:r,onFocusChange:i}=e,u=(0,o.useCallback)(e=>{if(e.target===e.currentTarget)return r&&r(e),i&&i(!1),!0},[r,i]),a=c(u),l=(0,o.useCallback)(e=>{e.target===e.currentTarget&&document.activeElement===e.target&&(n&&n(e),i&&i(!0),a(e))},[i,n,a]);return{focusProps:{onFocus:!t&&(n||i||r)?l:void 0,onBlur:!t&&(r||i)?u:void 0}}}let d=null,f=new Set,v=!1,m=!1,p=!1,h={Tab:!0,Escape:!0};function b(e,t){for(let n of f)n(e,t)}function g(e){m=!0,e.metaKey||!(0,r.V5)()&&e.altKey||e.ctrlKey||"Control"===e.key||"Shift"===e.key||"Meta"===e.key||(d="keyboard",b("keyboard",e))}function E(e){d="pointer",("mousedown"===e.type||"pointerdown"===e.type)&&(m=!0,b("pointer",e))}function y(e){(0,r.Zj)(e)&&(m=!0,d="virtual")}function w(e){e.target!==window&&e.target!==document&&(m||p||(d="virtual",b("virtual",e)),m=!1,p=!1)}function T(){m=!1,p=!0}function L(){if("undefined"==typeof window||v)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){m=!0,e.apply(this,arguments)},document.addEventListener("keydown",g,!0),document.addEventListener("keyup",g,!0),document.addEventListener("click",y,!0),window.addEventListener("focus",w,!0),window.addEventListener("blur",T,!1),"undefined"!=typeof PointerEvent?(document.addEventListener("pointerdown",E,!0),document.addEventListener("pointermove",E,!0),document.addEventListener("pointerup",E,!0)):(document.addEventListener("mousedown",E,!0),document.addEventListener("mousemove",E,!0),document.addEventListener("mouseup",E,!0)),v=!0}function N(){return"pointer"!==d}function S(){return d}"undefined"!=typeof document&&("loading"!==document.readyState?L():document.addEventListener("DOMContentLoaded",L));let R=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function k(e,t,n){L(),(0,o.useEffect)(()=>{let t=(t,r)=>{var o,i;(!(((null==n?void 0:n.isTextInput)||(null==r?void 0:r.target)instanceof HTMLInputElement&&!R.has(null==r?void 0:null===(i=r.target)||void 0===i?void 0:i.type)||(null==r?void 0:r.target)instanceof HTMLTextAreaElement||(null==r?void 0:r.target)instanceof HTMLElement&&(null==r?void 0:r.target.isContentEditable))&&"keyboard"===t&&r instanceof KeyboardEvent)||h[r.key])&&e(N())};return f.add(t),()=>{f.delete(t)}},t)}function x(e){let{isDisabled:t,onBlurWithin:n,onFocusWithin:r,onFocusWithinChange:i}=e,u=(0,o.useRef)({isFocusWithin:!1}),a=(0,o.useCallback)(e=>{u.current.isFocusWithin&&!e.currentTarget.contains(e.relatedTarget)&&(u.current.isFocusWithin=!1,n&&n(e),i&&i(!1))},[n,i,u]),l=c(a),s=(0,o.useCallback)(e=>{u.current.isFocusWithin||document.activeElement!==e.target||(r&&r(e),i&&i(!0),u.current.isFocusWithin=!0,l(e))},[r,i,l]);return t?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:s,onBlur:a}}}let C=!1,M=0;function P(){C=!0,setTimeout(()=>{C=!1},50)}function F(e){"touch"===e.pointerType&&P()}function A(){if("undefined"!=typeof document)return"undefined"!=typeof PointerEvent?document.addEventListener("pointerup",F):document.addEventListener("touchend",P),M++,()=>{--M>0||("undefined"!=typeof PointerEvent?document.removeEventListener("pointerup",F):document.removeEventListener("touchend",P))}}function K(e){let{onHoverStart:t,onHoverChange:n,onHoverEnd:r,isDisabled:i}=e,[u,a]=(0,o.useState)(!1),l=(0,o.useRef)({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;(0,o.useEffect)(A,[]);let{hoverProps:c,triggerHoverEnd:s}=(0,o.useMemo)(()=>{let e=(e,r)=>{if(l.pointerType=r,i||"touch"===r||l.isHovered||!e.currentTarget.contains(e.target))return;l.isHovered=!0;let o=e.currentTarget;l.target=o,t&&t({type:"hoverstart",target:o,pointerType:r}),n&&n(!0),a(!0)},o=(e,t)=>{if(l.pointerType="",l.target=null,"touch"===t||!l.isHovered)return;l.isHovered=!1;let o=e.currentTarget;r&&r({type:"hoverend",target:o,pointerType:t}),n&&n(!1),a(!1)},u={};return"undefined"!=typeof PointerEvent?(u.onPointerEnter=t=>{C&&"mouse"===t.pointerType||e(t,t.pointerType)},u.onPointerLeave=e=>{!i&&e.currentTarget.contains(e.target)&&o(e,e.pointerType)}):(u.onTouchStart=()=>{l.ignoreEmulatedMouseEvents=!0},u.onMouseEnter=t=>{l.ignoreEmulatedMouseEvents||C||e(t,"mouse"),l.ignoreEmulatedMouseEvents=!1},u.onMouseLeave=e=>{!i&&e.currentTarget.contains(e.target)&&o(e,"mouse")}),{hoverProps:u,triggerHoverEnd:o}},[t,n,r,i,l]);return(0,o.useEffect)(()=>{i&&s({currentTarget:l.target},l.pointerType)},[i]),{hoverProps:c,isHovered:u}}function _(e){if(!e)return;let t=!0;return n=>{e({...n,preventDefault(){n.preventDefault()},isDefaultPrevented:()=>n.isDefaultPrevented(),stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}}),t&&n.stopPropagation()}}function H(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:_(e.onKeyDown),onKeyUp:_(e.onKeyUp)}}}},1620:function(e,t,n){"use strict";n.d(t,{aV:function(){return v},N3:function(){return d}});var r=n(7294),o=n(8628),i=n(4355),u=n(3935),a=n(6769);"undefined"!=typeof document&&window.visualViewport,new WeakMap,"undefined"!=typeof document&&window.visualViewport,"undefined"!=typeof document&&window.visualViewport;let l=r.createContext(null);function c(e){let{children:t}=e,n=(0,r.useContext)(l),[o,i]=(0,r.useState)(0),u=(0,r.useMemo)(()=>({parent:n,modalCount:o,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,o]);return r.createElement(l.Provider,{value:u},t)}function s(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,r.useContext)(l))&&t.modalCount>0||null}};return r.createElement("div",{"data-overlay-container":!0,...e,...n})}function d(e){return r.createElement(c,null,r.createElement(s,e))}new WeakMap;let f=r.createContext(null);function v(e){let t=(0,a.Av)(),{portalContainer:n=t?null:document.body,isExiting:l}=e,[c,s]=(0,r.useState)(!1),d=(0,r.useMemo)(()=>({contain:c,setContain:s}),[c,s]);if(!n)return null;let v=e.children;return e.disableFocusManagement||(v=r.createElement(o.MT,{restoreFocus:!0,contain:c&&!l},v)),v=r.createElement(f.Provider,{value:d},r.createElement(i.mk,null,v)),u.createPortal(v,n)}},6769:function(e,t,n){"use strict";n.d(t,{Av:function(){return l}});var r=n(7294);String(Math.round(1e10*Math.random()));let o=r.createContext(!1);function i(){return!1}function u(){return!0}function a(e){return()=>{}}function l(){return"function"==typeof r.useSyncExternalStore?r.useSyncExternalStore(a,i,u):(0,r.useContext)(o)}"undefined"!=typeof window&&window.document&&window.document.createElement,new WeakMap,r.useId},8974:function(e,t,n){"use strict";n.d(t,{pG:function(){return R},tS:function(){return l},zL:function(){return h},Ao:function(){return b},r3:function(){return c},kR:function(){return s},gn:function(){return L},V5:function(){return w},Zj:function(){return H},cr:function(){return $},dG:function(){return d},nG:function(){return k},QB:function(){return F},iW:function(){return u},xi:function(){return A},bt:function(){return i},yU:function(){return K},lE:function(){return _}});var r=n(7294),o=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(r&&(r+=" "),r+=t);return r};let i="undefined"!=typeof document?r.useLayoutEffect:()=>{};function u(e){let t=(0,r.useRef)(null);return i(()=>{t.current=e},[e]),(0,r.useCallback)((...e)=>{let n=t.current;return n(...e)},[])}"undefined"!=typeof window&&window.document&&window.document.createElement;let a=new Map;function l(...e){return(...t)=>{for(let n of e)"function"==typeof n&&n(...t)}}let c=e=>{var t;return null!==(t=null==e?void 0:e.ownerDocument)&&void 0!==t?t:document},s=e=>{if(e&&"window"in e&&e.window===e)return e;let t=c(e);return t.defaultView||window};function d(...e){let t={...e[0]};for(let n=1;n<e.length;n++){let r=e[n];for(let e in r){let n=t[e],i=r[e];"function"==typeof n&&"function"==typeof i&&"o"===e[0]&&"n"===e[1]&&e.charCodeAt(2)>=65&&90>=e.charCodeAt(2)?t[e]=l(n,i):("className"===e||"UNSAFE_className"===e)&&"string"==typeof n&&"string"==typeof i?t[e]=o(n,i):"id"===e&&n&&i?t.id=function(e,t){if(e===t)return e;let n=a.get(e);if(n)return n(t),t;let r=a.get(t);return r?(r(e),e):t}(n,i):t[e]=void 0!==i?i:n}}return t}let f=new Set(["id"]),v=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),m=new Set(["href","target","rel","download","ping","referrerPolicy"]),p=/^(data-.*)$/;function h(e,t={}){let{labelable:n,isLink:r,propNames:o}=t,i={};for(let t in e)Object.prototype.hasOwnProperty.call(e,t)&&(f.has(t)||n&&v.has(t)||r&&m.has(t)||(null==o?void 0:o.has(t))||p.test(t))&&(i[t]=e[t]);return i}function b(e){if(function(){if(null==g){g=!1;try{document.createElement("div").focus({get preventScroll(){return g=!0,!0}})}catch(e){}}return g}())e.focus({preventScroll:!0});else{let t=function(e){for(var t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}(e);e.focus(),function(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}(t)}}let g=null;function E(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent))}function y(e){var t;return"undefined"!=typeof window&&null!=window.navigator&&e.test((null===(t=window.navigator.userAgentData)||void 0===t?void 0:t.platform)||window.navigator.platform)}function w(){return y(/^Mac/i)}function T(){return y(/^iPad/i)||w()&&navigator.maxTouchPoints>1}function L(){return y(/^iPhone/i)||T()}function N(){return E(/Android/i)}let S=(0,r.createContext)({isNative:!0,open:function(e,t){x(e,e=>k(e,t))}});function R(e){let{children:t,navigate:n}=e,o=(0,r.useMemo)(()=>({isNative:!1,open:(e,t)=>{x(e,e=>{let r;(r=e.getAttribute("target"))&&"_self"!==r||e.origin!==location.origin||e.hasAttribute("download")||t.metaKey||t.ctrlKey||t.altKey||t.shiftKey?k(e,t):n(e.pathname+e.search+e.hash)})}}),[n]);return r.createElement(S.Provider,{value:o},t)}function k(e,t,n=!0){var r,o;let{metaKey:i,ctrlKey:u,altKey:a,shiftKey:l}=t;E(/Firefox/i)&&(null===(o=window.event)||void 0===o?void 0:null===(r=o.type)||void 0===r?void 0:r.startsWith("key"))&&"_blank"===e.target&&(w()?i=!0:u=!0);let c=E(/AppleWebKit/i)&&!E(/Chrome/i)&&w()&&!T()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:i,ctrlKey:u,altKey:a,shiftKey:l}):new MouseEvent("click",{metaKey:i,ctrlKey:u,altKey:a,shiftKey:l,bubbles:!0,cancelable:!0});k.isOpening=n,b(e),e.dispatchEvent(c),k.isOpening=!1}function x(e,t){if(e instanceof HTMLAnchorElement)t(e);else if(e.hasAttribute("data-href")){let n=document.createElement("a");n.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(n.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(n.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(n.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(n.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(n.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(n),t(n),e.removeChild(n)}}k.isOpening=!1;let C=new Map,M=new Set;function P(){if("undefined"==typeof window)return;let e=t=>{let n=C.get(t.target);if(n&&(n.delete(t.propertyName),0===n.size&&(t.target.removeEventListener("transitioncancel",e),C.delete(t.target)),0===C.size)){for(let e of M)e();M.clear()}};document.body.addEventListener("transitionrun",t=>{let n=C.get(t.target);n||(n=new Set,C.set(t.target,n),t.target.addEventListener("transitioncancel",e)),n.add(t.propertyName)}),document.body.addEventListener("transitionend",e)}function F(e){requestAnimationFrame(()=>{0===C.size?e():M.add(e)})}function A(){let e=(0,r.useRef)(new Map),t=(0,r.useCallback)((t,n,r,o)=>{let i=(null==o?void 0:o.once)?(...t)=>{e.current.delete(r),r(...t)}:r;e.current.set(r,{type:n,eventTarget:t,fn:i,options:o}),t.addEventListener(n,r,o)},[]),n=(0,r.useCallback)((t,n,r,o)=>{var i;let u=(null===(i=e.current.get(r))||void 0===i?void 0:i.fn)||r;t.removeEventListener(n,u,o),e.current.delete(r)},[]),o=(0,r.useCallback)(()=>{e.current.forEach((e,t)=>{n(e.eventTarget,e.type,t,e.options)})},[n]);return(0,r.useEffect)(()=>o,[o]),{addGlobalListener:t,removeGlobalListener:n,removeAllGlobalListeners:o}}function K(e){let{ref:t,onResize:n}=e;(0,r.useEffect)(()=>{let e=null==t?void 0:t.current;if(e){if(!(void 0!==window.ResizeObserver))return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)};{let t=new window.ResizeObserver(e=>{e.length&&n()});return t.observe(e),()=>{e&&t.unobserve(e)}}}},[n,t])}function _(e,t){i(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref.current=null}})}function H(e){return 0===e.mozInputSource&&!!e.isTrusted||(N()&&e.pointerType?"click"===e.type&&1===e.buttons:0===e.detail&&!e.pointerType)}function $(e){return!N()&&0===e.width&&0===e.height||1===e.width&&1===e.height&&0===e.pressure&&0===e.detail&&"mouse"===e.pointerType}"undefined"!=typeof document&&("loading"!==document.readyState?P():document.addEventListener("DOMContentLoaded",P)),"undefined"!=typeof document&&window.visualViewport}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);