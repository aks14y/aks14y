(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7464)}])},1258:function(e,r,a){"use strict";var t=a(5893);a(7294),r.Z=e=>{let{icon:r,isLarge:a,color:n}=e;return(0,t.jsx)(r,{className:"".concat(n||"text-secondary"," ").concat(a?"text-5xl":"text-xl"," ")})}},3490:function(e,r,a){"use strict";a.d(r,{Z:function(){return h}});var t=a(5893);a(7294);var n=a(7735),s=a(9583),o=a(1664),l=a.n(o),i=()=>{let e=[{link:"https://nextjs.org/",icon:n.Xou},{link:"https://nextui.org/",icon:n.CcB},{link:"https://undraw.co/",icon:s.m3W}];return(0,t.jsx)("section",{className:"p-2 md:p-8 bg-primary text-black",children:(0,t.jsx)("div",{className:"container mx-auto",children:(0,t.jsxs)("div",{className:"flex md:flex-row flex-col text-xl justify-center gap-2 items-center",children:[(0,t.jsxs)("div",{className:"flex flex-row gap-2",children:[(0,t.jsx)("p",{children:"Built with"}),e.map((e,r)=>(0,t.jsx)(l(),{href:e.link,children:(0,t.jsx)(e.icon,{className:"text-2xl"})},r))]}),(0,t.jsxs)("p",{className:"block",children:["feel free to"," ",(0,t.jsx)("a",{className:"underline",href:"https://github.com/aks14y",children:"fork this repo."})]})]})})})},d=a(4515),c=a(9479),u=a(5336),m=a(8661),g=a(1233),p=a(7806),x=a(9332),b=()=>{let e=(0,x.usePathname)();return(0,t.jsxs)(d.R,{maxWidth:"full",className:"text-primary",classNames:{item:["flex","relative","h-full","items-center"]},children:[(0,t.jsx)(c.U,{justify:"start",children:(0,t.jsx)(u.H,{children:(0,t.jsx)("p",{className:"text-inherit text-3xl",children:"Akshay A"})})}),(0,t.jsx)(c.U,{justify:"end",children:(0,t.jsx)(m.L,{})}),(0,t.jsxs)(g.$,{className:"bg-primary md:!h-1/2 md:w-1/4 md:ml-auto md:mr-12 p-12",children:[[{name:"Home",route:"/"},{name:"About",route:"/about"},{name:"Timeline",route:"/timeline"}].map((r,a)=>(0,t.jsx)(p.h,{children:(0,t.jsx)(l(),{className:"font-bold leading-9\n                ".concat(r.route===e?"text-secondary":"text-purple","\n              "),href:r.route,children:r.name})},a)),(0,t.jsxs)("div",{className:"pt-5 font-medium leading-10",children:[(0,t.jsx)("p",{className:"text-secondary",children:"SAY HELLO"}),(0,t.jsx)(l(),{href:"mailto:akshay4362847@gmail.com",className:"text-purple",children:"akshay4362847@gmail.com"})]})]})]})},h=e=>{let{children:r}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(b,{}),r,(0,t.jsx)(i,{})]})}},7464:function(e,r,a){"use strict";a.r(r),a.d(r,{default:function(){return $}});var t=a(5893),n=a(3490),s=a(1664),o=a.n(s),l=a(7294),i=a(9583),d=a(1649),c=a(1258),[u,m]=(0,a(6347).k)({name:"ButtonGroupContext",strict:!1}),g=a(262),p=a(8628),x=a(8974),b=a(1744),h=new Set(["id","type","style","title","role","tabIndex","htmlFor","width","height","abbr","accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","challenge","charset","checked","cite","class","className","cols","colSpan","command","content","contentEditable","contextMenu","controls","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","dropzone","encType","for","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","hidden","high","href","hrefLang","httpEquiv","icon","inputMode","isMap","itemId","itemProp","itemRef","itemScope","itemType","kind","label","lang","list","loop","manifest","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","open","optimum","pattern","ping","placeholder","poster","preload","radioGroup","referrerPolicy","readOnly","rel","required","rows","rowSpan","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","slot","sortable","span","spellCheck","src","srcDoc","srcSet","start","step","target","translate","typeMustMatch","useMap","value","wmode","wrap"]),f=new Set(["onCopy","onCut","onPaste","onLoad","onError","onWheel","onScroll","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerEnter","onPointerLeave","onPointerUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd"]),y=/^(data-.*)$/,v=/^(aria-.*)$/,w=/^(on[A-Z].*)$/;function j(e,r={}){let{labelable:a=!0,enabled:t=!0,propNames:n,omitPropNames:s,omitEventNames:o}=r,l={};if(!t)return e;for(let r in e)!((null==s?void 0:s.has(r))||(null==o?void 0:o.has(r))&&w.test(r)||w.test(r)&&!f.has(r))&&(Object.prototype.hasOwnProperty.call(e,r)&&(h.has(r)||a&&v.test(r)||(null==n?void 0:n.has(r))||y.test(r))||w.test(r))&&(l[r]=e[r]);return l}var N={solid:{default:"bg-default text-default-foreground",primary:"bg-primary text-primary-foreground",secondary:"bg-secondary text-secondary-foreground",success:"bg-success text-success-foreground",warning:"bg-warning text-warning-foreground",danger:"bg-danger text-danger-foreground",foreground:"bg-foreground text-background"},shadow:{default:"shadow-lg shadow-default/50 bg-default text-default-foreground",primary:"shadow-lg shadow-primary/40 bg-primary text-primary-foreground",secondary:"shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",success:"shadow-lg shadow-success/40 bg-success text-success-foreground",warning:"shadow-lg shadow-warning/40 bg-warning text-warning-foreground",danger:"shadow-lg shadow-danger/40 bg-danger text-danger-foreground",foreground:"shadow-lg shadow-foreground/40 bg-foreground text-background"},bordered:{default:"bg-transparent border-default text-foreground",primary:"bg-transparent border-primary text-primary",secondary:"bg-transparent border-secondary text-secondary",success:"bg-transparent border-success text-success",warning:"bg-transparent border-warning text-warning",danger:"bg-transparent border-danger text-danger",foreground:"bg-transparent border-foreground text-foreground"},flat:{default:"bg-default/40 text-default-foreground",primary:"bg-primary/20 text-primary",secondary:"bg-secondary/20 text-secondary",success:"bg-success/20 text-success-600 dark:text-success",warning:"bg-warning/20 text-warning-600 dark:text-warning",danger:"bg-danger/20 text-danger dark:text-danger-500",foreground:"bg-foreground/10 text-foreground"},faded:{default:"border-default bg-default-100 text-default-foreground",primary:"border-default bg-default-100 text-primary",secondary:"border-default bg-default-100 text-secondary",success:"border-default bg-default-100 text-success",warning:"border-default bg-default-100 text-warning",danger:"border-default bg-default-100 text-danger",foreground:"border-default bg-default-100 text-foreground"},light:{default:"bg-transparent text-default-foreground",primary:"bg-transparent text-primary",secondary:"bg-transparent text-secondary",success:"bg-transparent text-success",warning:"bg-transparent text-warning",danger:"bg-transparent text-danger",foreground:"bg-transparent text-foreground"},ghost:{default:"border-default text-default-foreground hover:!bg-default",primary:"border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",secondary:"border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",success:"border-success text-success hover:!text-success-foreground hover:!bg-success",warning:"border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",danger:"border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",foreground:"border-foreground text-foreground hover:!bg-foreground"}},k=a(8290),_=a(5512),S=(0,k.tv)({base:["z-0","group","relative","inline-flex","items-center","justify-center","box-border","appearance-none","outline-none","select-none","whitespace-nowrap","min-w-max","font-normal","subpixel-antialiased","overflow-hidden","tap-highlight-transparent",..._.Dh],variants:{variant:{solid:"",bordered:"border-medium bg-transparent",light:"bg-transparent",flat:"",faded:"border-medium",shadow:"",ghost:"border-medium bg-transparent"},size:{sm:"px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small",md:"px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium",lg:"px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large"},color:{default:"",primary:"",secondary:"",success:"",warning:"",danger:""},radius:{none:"rounded-none",sm:"rounded-small",md:"rounded-medium",lg:"rounded-large",full:"rounded-full"},fullWidth:{true:"w-full"},isDisabled:{true:"opacity-disabled pointer-events-none"},isInGroup:{true:"[&:not(:first-child):not(:last-child)]:rounded-none"},isIconOnly:{true:"px-unit-0 !gap-unit-0",false:"[&>svg]:max-w-[theme(spacing.unit-8)]"},disableAnimation:{true:"!transition-none",false:"data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none"}},defaultVariants:{size:"md",variant:"solid",color:"default",fullWidth:!1,isDisabled:!1,isInGroup:!1,disableAnimation:!1},compoundVariants:[{variant:"solid",color:"default",class:N.solid.default},{variant:"solid",color:"primary",class:N.solid.primary},{variant:"solid",color:"secondary",class:N.solid.secondary},{variant:"solid",color:"success",class:N.solid.success},{variant:"solid",color:"warning",class:N.solid.warning},{variant:"solid",color:"danger",class:N.solid.danger},{variant:"shadow",color:"default",class:N.shadow.default},{variant:"shadow",color:"primary",class:N.shadow.primary},{variant:"shadow",color:"secondary",class:N.shadow.secondary},{variant:"shadow",color:"success",class:N.shadow.success},{variant:"shadow",color:"warning",class:N.shadow.warning},{variant:"shadow",color:"danger",class:N.shadow.danger},{variant:"bordered",color:"default",class:N.bordered.default},{variant:"bordered",color:"primary",class:N.bordered.primary},{variant:"bordered",color:"secondary",class:N.bordered.secondary},{variant:"bordered",color:"success",class:N.bordered.success},{variant:"bordered",color:"warning",class:N.bordered.warning},{variant:"bordered",color:"danger",class:N.bordered.danger},{variant:"flat",color:"default",class:N.flat.default},{variant:"flat",color:"primary",class:N.flat.primary},{variant:"flat",color:"secondary",class:N.flat.secondary},{variant:"flat",color:"success",class:N.flat.success},{variant:"flat",color:"warning",class:N.flat.warning},{variant:"flat",color:"danger",class:N.flat.danger},{variant:"faded",color:"default",class:N.faded.default},{variant:"faded",color:"primary",class:N.faded.primary},{variant:"faded",color:"secondary",class:N.faded.secondary},{variant:"faded",color:"success",class:N.faded.success},{variant:"faded",color:"warning",class:N.faded.warning},{variant:"faded",color:"danger",class:N.faded.danger},{variant:"light",color:"default",class:[N.light.default,"data-[hover=true]:bg-default/40"]},{variant:"light",color:"primary",class:[N.light.primary,"data-[hover=true]:bg-primary/20"]},{variant:"light",color:"secondary",class:[N.light.secondary,"data-[hover=true]:bg-secondary/20"]},{variant:"light",color:"success",class:[N.light.success,"data-[hover=true]:bg-success/20"]},{variant:"light",color:"warning",class:[N.light.warning,"data-[hover=true]:bg-warning/20"]},{variant:"light",color:"danger",class:[N.light.danger,"data-[hover=true]:bg-danger/20"]},{variant:"ghost",color:"default",class:N.ghost.default},{variant:"ghost",color:"primary",class:N.ghost.primary},{variant:"ghost",color:"secondary",class:N.ghost.secondary},{variant:"ghost",color:"success",class:N.ghost.success},{variant:"ghost",color:"warning",class:N.ghost.warning},{variant:"ghost",color:"danger",class:N.ghost.danger},{isInGroup:!0,class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,size:"sm",class:"rounded-none first:rounded-s-small last:rounded-e-small"},{isInGroup:!0,size:"md",class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,size:"lg",class:"rounded-none first:rounded-s-large last:rounded-e-large"},{isInGroup:!0,isRounded:!0,class:"rounded-none first:rounded-s-full last:rounded-e-full"},{isInGroup:!0,radius:"none",class:"rounded-none first:rounded-s-none last:rounded-e-none"},{isInGroup:!0,radius:"sm",class:"rounded-none first:rounded-s-small last:rounded-e-small"},{isInGroup:!0,radius:"md",class:"rounded-none first:rounded-s-medium last:rounded-e-medium"},{isInGroup:!0,radius:"lg",class:"rounded-none first:rounded-s-large last:rounded-e-large"},{isInGroup:!0,radius:"full",class:"rounded-none first:rounded-s-full last:rounded-e-full"},{isInGroup:!0,variant:["ghost","bordered"],color:"default",className:_.Zs.default},{isInGroup:!0,variant:["ghost","bordered"],color:"primary",className:_.Zs.primary},{isInGroup:!0,variant:["ghost","bordered"],color:"secondary",className:_.Zs.secondary},{isInGroup:!0,variant:["ghost","bordered"],color:"success",className:_.Zs.success},{isInGroup:!0,variant:["ghost","bordered"],color:"warning",className:_.Zs.warning},{isInGroup:!0,variant:["ghost","bordered"],color:"danger",className:_.Zs.danger},{isIconOnly:!0,size:"sm",class:"min-w-unit-8 w-unit-8 h-unit-8"},{isIconOnly:!0,size:"md",class:"min-w-unit-10 w-unit-10 h-unit-10"},{isIconOnly:!0,size:"lg",class:"min-w-unit-12 w-unit-12 h-unit-12"},{variant:["solid","faded","flat","bordered","shadow"],class:"data-[hover=true]:opacity-hover"}]});(0,k.tv)({base:"inline-flex items-center justify-center h-auto",variants:{fullWidth:{true:"w-full"}},defaultVariants:{fullWidth:!1}});var C=a(5759),I=a(4355),D=a(4377),M=(0,k.tv)({slots:{base:"relative inline-flex flex-col gap-2 items-center justify-center",wrapper:"relative flex",circle1:["absolute","w-full","h-full","rounded-full","animate-spinner-ease-spin","border-2","border-solid","border-t-transparent","border-l-transparent","border-r-transparent"],circle2:["absolute","w-full","h-full","rounded-full","opacity-75","animate-spinner-linear-spin","border-2","border-dotted","border-t-transparent","border-l-transparent","border-r-transparent"],label:"text-foreground dark:text-foreground-dark font-regular"},variants:{size:{sm:{wrapper:"w-5 h-5",circle1:"border-2",circle2:"border-2",label:"text-small"},md:{wrapper:"w-8 h-8",circle1:"border-3",circle2:"border-3",label:"text-medium"},lg:{wrapper:"w-10 h-10",circle1:"border-3",circle2:"border-3",label:"text-large"}},color:{current:{circle1:"border-b-current",circle2:"border-b-current"},white:{circle1:"border-b-white",circle2:"border-b-white"},default:{circle1:"border-b-default",circle2:"border-b-default"},primary:{circle1:"border-b-primary",circle2:"border-b-primary"},secondary:{circle1:"border-b-secondary",circle2:"border-b-secondary"},success:{circle1:"border-b-success",circle2:"border-b-success"},warning:{circle1:"border-b-warning",circle2:"border-b-warning"},danger:{circle1:"border-b-danger",circle2:"border-b-danger"}},labelColor:{foreground:{label:"text-foreground"},primary:{label:"text-primary"},secondary:{label:"text-secondary"},success:{label:"text-success"},warning:{label:"text-warning"},danger:{label:"text-danger"}}},defaultVariants:{size:"md",color:"primary",labelColor:"foreground"}}),T=a(9869),G=(0,D.Gp)((e,r)=>{let{slots:a,classNames:n,label:s,getSpinnerProps:o}=function(e){let[r,a]=(0,D.oe)(e,M.variantKeys),{children:t,className:n,classNames:s,label:o,...i}=r,d=(0,l.useMemo)(()=>M({...a}),[...Object.values(a)]),c=(0,T.W)(null==s?void 0:s.base,n),u=o||t,m=(0,l.useMemo)(()=>u&&"string"==typeof u?u:i["aria-label"]?"":"Loading",[t,u,i["aria-label"]]),g=(0,l.useCallback)(()=>({"aria-label":m,className:d.base({class:c}),...i}),[m,d,c,i]);return{label:u,slots:d,classNames:s,getSpinnerProps:g}}({...e});return(0,t.jsxs)("div",{ref:r,...o(),children:[(0,t.jsxs)("div",{className:a.wrapper({class:null==n?void 0:n.wrapper}),children:[(0,t.jsx)("i",{className:a.circle1({class:null==n?void 0:n.circle1})}),(0,t.jsx)("i",{className:a.circle2({class:null==n?void 0:n.circle2})})]}),s&&(0,t.jsx)("span",{className:a.label(),children:s})]})});G.displayName="NextUI.Spinner";var P=a(1526),E=a(2951),z=(e,r,a)=>Math.min(Math.max(e,r),a),A=e=>{let{ripples:r=[],motionProps:a,color:n="currentColor",style:s,onClear:o}=e;return(0,t.jsx)(t.Fragment,{children:r.map(e=>{let r=z(.01*e.size,.2,e.size>100?.75:.5);return(0,t.jsx)(P.M,{mode:"popLayout",children:(0,t.jsx)(E.E.span,{animate:{transform:"scale(2)",opacity:0},className:"nextui-ripple",exit:{opacity:0},initial:{transform:"scale(0)",opacity:.35},style:{position:"absolute",backgroundColor:n,borderRadius:"100%",transformOrigin:"center",pointerEvents:"none",zIndex:10,top:e.y,left:e.x,width:`${e.size}px`,height:`${e.size}px`,...s},transition:{duration:r},onAnimationComplete:()=>{o(e.key)},...a})},e.key)})})};A.displayName="NextUI.Ripple";var F=(0,D.Gp)((e,r)=>{let{Component:a,domRef:n,children:s,styles:o,spinnerSize:i,spinner:d=(0,t.jsx)(G,{color:"current",size:i}),spinnerPlacement:c,startContent:u,endContent:h,isLoading:f,disableRipple:y,getButtonProps:v,getRippleProps:w,isIconOnly:N}=function(e){var r,a,t,n,s,o,i,d;let c=m(),u=!!c,{ref:h,as:f,children:y,startContent:v,endContent:w,autoFocus:N,className:k,spinner:_,fullWidth:D=null!=(r=null==c?void 0:c.fullWidth)&&r,size:M=null!=(a=null==c?void 0:c.size)?a:"md",color:T=null!=(t=null==c?void 0:c.color)?t:"default",variant:G=null!=(n=null==c?void 0:c.variant)?n:"solid",disableAnimation:P=null!=(s=null==c?void 0:c.disableAnimation)&&s,radius:E=null==c?void 0:c.radius,disableRipple:z=null!=(o=null==c?void 0:c.disableRipple)&&o,isDisabled:A=null!=(i=null==c?void 0:c.isDisabled)&&i,isIconOnly:F=null!=(d=null==c?void 0:c.isIconOnly)&&d,isLoading:O=!1,spinnerPlacement:B="start",onPress:L,onClick:R,...Z}=e,U=f||"button",W="string"==typeof U,K=(0,b.gy)(h),{isFocusVisible:H,isFocused:J,focusProps:V}=(0,p.Fx)({autoFocus:N}),X=A||O,$=(0,l.useMemo)(()=>S({size:M,color:T,variant:G,radius:E,fullWidth:D,isDisabled:X,isInGroup:u,disableAnimation:P,isIconOnly:F,className:k}),[M,T,G,E,D,X,u,F,P,k]),{onClick:q,onClear:Y,ripples:Q}=function(e={}){let[r,a]=(0,l.useState)([]),t=(0,l.useCallback)(e=>{let r=e.currentTarget,t=Math.max(r.clientWidth,r.clientHeight),n=r.getBoundingClientRect();a(r=>[...r,{key:`${r.length.toString()}-${Math.floor(1e6*Math.random())}`,size:t,x:e.clientX-n.x-t/2,y:e.clientY-n.y-t/2}])},[]),n=(0,l.useCallback)(e=>{a(r=>r.filter(r=>r.key!==e))},[]);return{ripples:r,onClick:t,onClear:n,...e}}(),ee=(0,l.useCallback)(e=>{z||X||P||!K.current||q(e)},[z,X,P,K,q]),{buttonProps:er,isPressed:ea}=(0,C.j)({elementType:f,isDisabled:X,onPress:L,onClick:(0,x.tS)(R,ee),...Z},K),{isHovered:et,hoverProps:en}=(0,I.XI)({isDisabled:X}),es=(0,l.useCallback)((e={})=>({"data-disabled":(0,g.PB)(X),"data-focus":(0,g.PB)(J),"data-pressed":(0,g.PB)(ea),"data-focus-visible":(0,g.PB)(H),"data-hover":(0,g.PB)(et),"data-loading":(0,g.PB)(O),...(0,x.dG)(er,V,en,j(Z,{enabled:W}),j(e))}),[O,X,J,ea,W,H,et,er,V,en,Z]),eo=e=>(0,l.isValidElement)(e)?(0,l.cloneElement)(e,{"aria-hidden":!0,focusable:!1,tabIndex:-1}):null,el=eo(v),ei=eo(w),ed=(0,l.useMemo)(()=>({sm:"sm",md:"sm",lg:"md"})[M],[M]),ec=(0,l.useCallback)(()=>({ripples:Q,onClear:Y}),[Q,Y]);return{Component:U,children:y,domRef:K,spinner:_,styles:$,startContent:el,endContent:ei,isLoading:O,spinnerPlacement:B,spinnerSize:ed,disableRipple:z,getButtonProps:es,getRippleProps:ec,isIconOnly:F}}({...e,ref:r});return(0,t.jsxs)(a,{ref:n,className:o,...v(),children:[u,f&&"start"===c&&d,f&&N?null:s,f&&"end"===c&&d,h,!y&&(0,t.jsx)(A,{...w()})]})});F.displayName="NextUI.Button";var O=a(316),B=a.n(O),L=a(5675),R=a.n(L),Z={src:"/_next/static/media/programmer.f8aaf67d.svg",height:572,width:787,blurWidth:0,blurHeight:0},U={src:"/_next/static/media/steps.c077b38d.svg",height:521,width:918,blurWidth:0,blurHeight:0},W={src:"/_next/static/media/more.7717f945.svg",height:465,width:784,blurWidth:0,blurHeight:0},K=a(231),H=a(155),J=a(7106),V=a(7735),X=()=>{let[e,r]=(0,l.useState)(0),a=[{name:"LinkedIn",link:"https://www.linkedin.com/in/aks14y/",icon:i.ltd},{name:"Github",link:"https://github.com/aks14y",icon:i.hJX},{name:"Instagram",link:"https://instagram.com/aks14y",icon:i.Zf_}],s=[{name:"React",icon:i.huN,selectable:!0},{name:"CSS",icon:K.r8,selectable:!0},{name:"Design",icon:i._TT,selectable:!0},{name:"Repository",icon:H.Hff,selectable:!0},{name:"Fetching",icon:J.AKZ,selectable:!0},{name:"Testing",icon:V.va7,selectable:!0},{name:"JavaScript",icon:H.ESE,selectable:!0},{name:"HTML",icon:i.gtO,selectable:!1},{name:"NextJs",icon:J.cTn,selectable:!1},{name:"TypeScript",icon:V.WZi,selectable:!1}];return(0,t.jsxs)(n.Z,{children:[(0,t.jsx)("section",{className:"p-4 md:p-8",children:(0,t.jsx)("div",{className:"container mx-auto lg:px-36 lg:pt-32",children:(0,t.jsxs)("div",{className:"flex flex-row justify-between flex-wrap",children:[(0,t.jsxs)("div",{className:"space-y-10 lg:w-2/4",children:[(0,t.jsxs)("div",{className:"text-7xl font-semibold text-primary",children:["Frontend ",(0,t.jsx)("br",{})," Developer",(0,t.jsx)("span",{className:"text-white",children:"."})]}),(0,t.jsxs)("div",{className:"font-light text-xl basis-2/3 leading-normal text-secondary",children:["I’m a JavaScript Front-End developer based in Kochi, India"," ",(0,t.jsx)("br",{})," who is passionate about building applications and learning ",(0,t.jsx)("br",{})," new technologies in the front end domain."]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium text-lg mb-5 text-primary",children:"Interested in my work? Lets connect!"}),(0,t.jsx)("div",{className:"flex gap-2",children:a.map((e,r)=>(0,t.jsxs)(o(),{className:"border-2 rounded-2xl h-8 border-purple hover:bg-slate-900 text-neutral-400 hover:text-white flex items-center",href:e.link,children:[(0,t.jsx)("div",{className:"ml-2",children:(0,t.jsx)(c.Z,{icon:e.icon})}),(0,t.jsx)("span",{className:"px-1.5 text-base mt-0 ",children:e.name})]},r))})]})]}),(0,t.jsx)(R(),{src:Z,alt:"programmer",className:"lg:w-2/4 mt-16 lg:mt-0 w-auto"})]})})}),(0,t.jsx)("section",{className:"p-8",children:(0,t.jsx)("div",{className:"container mx-auto lg:px-36 pt-16",children:(0,t.jsxs)("div",{className:"flex flex-wrap w-full",children:[(0,t.jsx)("div",{className:"border-2 border-purple md:border-r-secondary bg-purple text-secondary py-36 lg:pr-24 px-12 md:w-1/2 w-full",children:(0,t.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,t.jsxs)("h4",{className:"text-5xl font-bold leading-tight",children:["Know me ",(0,t.jsx)("br",{})," more?"]}),(0,t.jsx)(R(),{src:W,alt:"more",className:"w-64"}),(0,t.jsxs)("p",{className:"text-xl font-semibold leading-normal",children:["My Professional Profile and ",(0,t.jsx)("br",{})," Personal Passions"]}),(0,t.jsxs)(F,{as:o(),href:"/about",className:"bg-black text-secondary hover:bg-purple border-2 border-black hover:border-black hover:border-3 pl-2 py-6 uppercase",children:[(0,t.jsx)("p",{className:"text-xl",children:"See my bio"}),(0,t.jsx)(d.fNt,{className:"text-5xl ml-4 ".concat(B().animateFlow)})]})]})}),(0,t.jsx)("div",{className:"border-2 border-purple bg-black text-secondary py-36 lg:pr-24 px-12 md:w-1/2 w-full ",children:(0,t.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,t.jsxs)("h4",{className:"text-5xl font-bold leading-tight",children:["Journey ",(0,t.jsx)("br",{}),"through time!"]}),(0,t.jsx)(R(),{src:U,alt:"steps",className:"w-64"}),(0,t.jsxs)("p",{className:"text-xl font-semibold leading-normal",children:["A Snapshot of my Milestones and",(0,t.jsx)("br",{})," Achievements"," "]}),(0,t.jsxs)(F,{as:o(),href:"/timeline",className:"bg-purple text-secondary hover:bg-black border-2 border-black hover:text-purple hover:border-purple pl-2 py-6 uppercase",children:[(0,t.jsx)("p",{className:"text-xl",children:"See my steps"}),(0,t.jsx)(d.fNt,{className:"text-9xl ml-4 ".concat(B().animateFlow)})]})]})})]})})}),(0,t.jsx)("section",{className:"p-8",children:(0,t.jsx)("div",{className:"container mx-auto lg:px-36 pt-16",children:(0,t.jsxs)("div",{className:"py-16 w-full",children:[(0,t.jsx)("h4",{className:"text-4xl font-medium text-primary leading-tight",children:"Skill Set"}),(0,t.jsxs)("div",{className:"flex flex-wrap",children:[(0,t.jsx)("div",{className:"flex flex-wrap flex-row justify-center lg:justify-between gap-4 lg:w-1/2 mt-5",children:s.map((a,n)=>(0,t.jsxs)("div",{className:"text-secondary shadow-secondary px-32 py-4 flex flex-col items-center w-28 rounded-md ".concat(a.selectable?"hover:bg-zinc-900 hover:cursor-pointer shadow-md":""," ").concat(e===n?"bg-zinc-900":"bg-purple"," "),onClick:()=>{a.selectable&&r(n)},children:[(0,t.jsx)(c.Z,{icon:a.icon,isLarge:!0,color:"text-secondary"}),(0,t.jsx)("h6",{children:a.name})]},n))}),(0,t.jsx)("div",{className:"lg:w-1/2 xl:px-8 mt-5 py-1 mx-auto",children:(0,t.jsx)(t.Fragment,{children:[{idx:0,name:"React",sub:[{name:"State Management",content:["Redux","Redux Toolkit","Apollo Client"]},{name:"Styling",content:["Styled Components","Material UI","Reactstrap","React Bootstrap"]}]},{idx:1,name:"CSS3",sub:[{name:"Frameworks",content:["Bootstrap","Tailwind"]},{name:"Types",content:["SASS","Styled Components","CSS Modules"]}]},{idx:2,name:"UI/UX Design",sub:[{name:"Tools",content:["Figma","Adobe XD","Zeplin"]}]},{idx:3,name:"Repository",sub:[{name:"Platforms",content:["Github","Azure DevOps","Gitlab"]}]},{idx:4,name:"Data Fetching",sub:[{name:"API's",content:["REST","Graphql"]}]},{idx:5,name:"Testing",sub:[{name:"Browser Library",content:["React testing library","Playwright"]}]},{idx:6,name:"JavaScript",sub:[{name:"Libraries",content:["Axios","Jest","Single-spa","MomentJs"]}]}].filter((e,r)=>0===e.idx).map((e,r)=>(0,t.jsxs)(l.Fragment,{children:[(0,t.jsx)("div",{className:"border-2 border-primary p-4 w-60 font-extrabold text-lg text-center",children:e.name}),(0,t.jsx)("div",{className:"pl-4",children:(0,t.jsx)("div",{className:"flex flex-col",children:e.sub.map((e,r)=>(0,t.jsx)(l.Fragment,{children:(0,t.jsx)("div",{className:"pl-40 border-l-2 border-dotted h-full border-secondary",children:(0,t.jsxs)("div",{className:"relative border-2  border-primary after:w-40 after:h-3 p-4 mt-3 after:absolute after:border-b-2 after:border-dotted after:border-secondary after:content-[''] after:top-1/2 after:left-0 after:-translate-y-1/2 after:-translate-x-full",children:[(0,t.jsx)("span",{className:"font-bold text-lg",children:e.name}),(0,t.jsx)("ul",{className:"list-none p-2",children:e.content.map((e,r)=>(0,t.jsx)(l.Fragment,{children:(0,t.jsx)("li",{children:e})},r))})]})})},r))})})]},r))})})]})]})})})]})},$=()=>(0,t.jsx)(X,{})},316:function(e){e.exports={animate:"test_animate__KYhl2",animateDelay0s:"test_animateDelay0s__R3xCD",animateDelay1s:"test_animateDelay1s__3B9ak",animateDelay2s:"test_animateDelay2s__AtakB",animateDelay3s:"test_animateDelay3s__Zq1uU",animateDelay4s:"test_animateDelay4s__y1lfZ",animateDelay5s:"test_animateDelay5s__239ch",animateFlow:"test_animateFlow__4fC0V",flow:"test_flow__MdUBK",content:"test_content__Gsauv",slideInTop:"test_slideInTop__dOOag"}}},function(e){e.O(0,[415,445,907,778,260,866,969,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);