"use strict";var Im=Math.pow;var rs=(Dm,U,Qi)=>new Promise((Ka,Gl)=>{var kl=ji=>{try{ss(Qi.next(ji))}catch(ac){Gl(ac)}},Qa=ji=>{try{ss(Qi.throw(ji))}catch(ac){Gl(ac)}},ss=ji=>ji.done?Ka(ji.value):Promise.resolve(ji.value).then(kl,Qa);ss((Qi=Qi.apply(Dm,U)).next())});(self.webpackChunk=self.webpackChunk||[]).push([[905],{17654:function(Dm,U){Object.defineProperty(U,"__esModule",{value:!0});const Qi="146",Ka={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gl={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},kl=0,Qa=1,ss=2,ji=3,ac=0,bu=1,Vl=2,ea=3,Ln=0,nn=1,Wt=2,vn=0,ta=1,Ii=2,Tr=3,oc=4,Hl=5,wr=100,Eu=101,as=102,Wl=103,Xl=104,ql=200,Yl=201,Tu=202,wu=203,Zl=204,Jl=205,$l=206,Kl=207,Au=208,Ru=209,Cu=210,Lu=0,Pu=1,Iu=2,cc=3,Du=4,lc=5,Uu=6,Nu=7,ja=0,Fu=1,eo=2,Di=0,Ou=1,er=2,Bu=3,zu=4,Gu=5,hc=300,Ar=301,Ui=302,ai=303,yi=304,tr=306,Rr=1e3,rn=1001,Cr=1002,wt=1003,os=1004,sn=1004,na=1005,Um=1005,kt=1006,ku=1007,an=1007,Lr=1008,Nm=1008,Gn=1009,cf=1010,nr=1011,Ql=1012,Vu=1013,Ni=1014,Fi=1015,Yn=1016,Oi=1017,ia=1018,Pr=1020,jl=1021,Ir=1022,Zn=1023,Jn=1024,Hu=1025,Dr=1026,$n=1027,cs=1028,Wu=1029,eh=1030,Xu=1031,th=1033,to=33776,ra=33777,sa=33778,aa=33779,no=35840,uc=35841,dc=35842,fc=35843,nh=36196,ih=37492,pc=37496,mc=37808,gc=37809,_c=37810,xc=37811,yc=37812,vc=37813,Mc=37814,Sc=37815,bc=37816,Ec=37817,Tc=37818,wc=37819,Ac=37820,Rc=37821,Cc=36492,Lc=2200,qu=2201,rh=2202,oa=2300,ca=2301,Pc=2302,ls=2400,hs=2401,Ur=2402,us=2500,io=2501,la=0,ha=1,Ic=2,Bi=3e3,Vt=3001,lf=3200,hf=3201,ds=0,sh=1,fs="",zi="srgb",Nr="srgb-linear",ps=0,Dc=7680,ms=7681,_t=7682,Gi=7683,Yu=34055,Fm=34056,ah=5386,Om=512,Bm=513,zm=514,Gm=515,km=516,Vm=517,Hm=518,uf=519,Uc=35044,Wm=35048,Xm=35040,qm=35045,Ym=35049,df=35041,ff=35046,pf=35050,mf=35042,gf="100",oh="300 es",Nc=1035;class ir{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(i)===-1&&a[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const l=a.slice(0);for(let u=0,m=l.length;u<m;u++)l[u].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ro=1234567;const ua=Math.PI/180,Fc=180/Math.PI;function oi(){const f=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(En[f&255]+En[f>>8&255]+En[f>>16&255]+En[f>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[a&255]+En[a>>8&255]+En[a>>16&255]+En[a>>24&255]).toLowerCase()}function on(f,t,i){return Math.max(t,Math.min(i,f))}function Zu(f,t){return(f%t+t)%t}function Zm(f,t,i,a,l){return a+(f-t)*(l-a)/(i-t)}function Jm(f,t,i){return f!==t?(i-f)/(t-f):0}function Oc(f,t,i){return(1-i)*f+i*t}function $m(f,t,i,a){return Oc(f,t,1-Math.exp(-i*a))}function Ju(f,t=1){return t-Math.abs(Zu(f,t*2)-t)}function ch(f,t,i){return f<=t?0:f>=i?1:(f=(f-t)/(i-t),f*f*(3-2*f))}function rr(f,t,i){return f<=t?0:f>=i?1:(f=(f-t)/(i-t),f*f*f*(f*(f*6-15)+10))}function Bc(f,t){return f+Math.floor(Math.random()*(t-f+1))}function Fr(f,t){return f+Math.random()*(t-f)}function Pn(f){return f*(.5-Math.random())}function _f(f){f!==void 0&&(ro=f);let t=ro+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function da(f){return f*ua}function so(f){return f*Fc}function kn(f){return(f&f-1)===0&&f!==0}function Xt(f){return Math.pow(2,Math.ceil(Math.log(f)/Math.LN2))}function ao(f){return Math.pow(2,Math.floor(Math.log(f)/Math.LN2))}function Km(f,t,i,a,l){const u=Math.cos,m=Math.sin,g=u(i/2),v=m(i/2),M=u((t+a)/2),E=m((t+a)/2),A=u((t-a)/2),o=m((t-a)/2),e=u((a-t)/2),n=m((a-t)/2);switch(l){case"XYX":f.set(g*E,v*A,v*o,g*M);break;case"YZY":f.set(v*o,g*E,v*A,g*M);break;case"ZXZ":f.set(v*A,v*o,g*E,g*M);break;case"XZX":f.set(g*E,v*n,v*e,g*M);break;case"YXY":f.set(v*e,g*E,v*n,g*M);break;case"ZYZ":f.set(v*n,v*e,g*E,g*M);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Or(f,t){switch(t.constructor){case Float32Array:return f;case Uint16Array:return f/65535;case Uint8Array:return f/255;case Int16Array:return Math.max(f/32767,-1);case Int8Array:return Math.max(f/127,-1);default:throw new Error("Invalid component type.")}}function Dt(f,t){switch(t.constructor){case Float32Array:return f;case Uint16Array:return Math.round(f*65535);case Uint8Array:return Math.round(f*255);case Int16Array:return Math.round(f*32767);case Int8Array:return Math.round(f*127);default:throw new Error("Invalid component type.")}}var Qm=Object.freeze({__proto__:null,DEG2RAD:ua,RAD2DEG:Fc,generateUUID:oi,clamp:on,euclideanModulo:Zu,mapLinear:Zm,inverseLerp:Jm,lerp:Oc,damp:$m,pingpong:Ju,smoothstep:ch,smootherstep:rr,randInt:Bc,randFloat:Fr,randFloatSpread:Pn,seededRandom:_f,degToRad:da,radToDeg:so,isPowerOfTwo:kn,ceilPowerOfTwo:Xt,floorPowerOfTwo:ao,setQuaternionFromProperEuler:Km,normalize:Dt,denormalize:Or});class Ue{constructor(t=0,i=0){Ue.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,a=this.y,l=t.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y;return i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const a=Math.cos(i),l=Math.sin(i),u=this.x-t.x,m=this.y-t.y;return this.x=u*a-m*l+t.x,this.y=u*l+m*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kn{constructor(){Kn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,i,a,l,u,m,g,v,M){const E=this.elements;return E[0]=t,E[1]=l,E[2]=g,E[3]=i,E[4]=u,E[5]=v,E[6]=a,E[7]=m,E[8]=M,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(t,i,a){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,u=this.elements,m=a[0],g=a[3],v=a[6],M=a[1],E=a[4],A=a[7],o=a[2],e=a[5],n=a[8],r=l[0],s=l[3],c=l[6],h=l[1],d=l[4],p=l[7],_=l[2],y=l[5],S=l[8];return u[0]=m*r+g*h+v*_,u[3]=m*s+g*d+v*y,u[6]=m*c+g*p+v*S,u[1]=M*r+E*h+A*_,u[4]=M*s+E*d+A*y,u[7]=M*c+E*p+A*S,u[2]=o*r+e*h+n*_,u[5]=o*s+e*d+n*y,u[8]=o*c+e*p+n*S,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],m=t[4],g=t[5],v=t[6],M=t[7],E=t[8];return i*m*E-i*g*M-a*u*E+a*g*v+l*u*M-l*m*v}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],m=t[4],g=t[5],v=t[6],M=t[7],E=t[8],A=E*m-g*M,o=g*v-E*u,e=M*u-m*v,n=i*A+a*o+l*e;if(n===0)return this.set(0,0,0,0,0,0,0,0,0);const r=1/n;return t[0]=A*r,t[1]=(l*M-E*a)*r,t[2]=(g*a-l*m)*r,t[3]=o*r,t[4]=(E*i-l*v)*r,t[5]=(l*u-g*i)*r,t[6]=e*r,t[7]=(a*v-M*i)*r,t[8]=(m*i-a*u)*r,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,a,l,u,m,g){const v=Math.cos(u),M=Math.sin(u);return this.set(a*v,a*M,-a*(v*m+M*g)+m+t,-l*M,l*v,-l*(-M*m+v*g)+g+i,0,0,1),this}scale(t,i){const a=this.elements;return a[0]*=t,a[3]*=t,a[6]*=t,a[1]*=i,a[4]*=i,a[7]*=i,this}rotate(t){const i=Math.cos(t),a=Math.sin(t),l=this.elements,u=l[0],m=l[3],g=l[6],v=l[1],M=l[4],E=l[7];return l[0]=i*u+a*v,l[3]=i*m+a*M,l[6]=i*g+a*E,l[1]=-a*u+i*v,l[4]=-a*m+i*M,l[7]=-a*g+i*E,this}translate(t,i){const a=this.elements;return a[0]+=t*a[2],a[3]+=t*a[5],a[6]+=t*a[8],a[1]+=i*a[2],a[4]+=i*a[5],a[7]+=i*a[8],this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<9;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function xf(f){for(let t=f.length-1;t>=0;--t)if(f[t]>=65535)return!0;return!1}const jm={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function oo(f,t){return new jm[f](t)}function zc(f){return document.createElementNS("http://www.w3.org/1999/xhtml",f)}function fa(f){return f<.04045?f*.0773993808:Math.pow(f*.9478672986+.0521327014,2.4)}function lh(f){return f<.0031308?f*12.92:1.055*Math.pow(f,.41666)-.055}const $u={[zi]:{[Nr]:fa},[Nr]:{[zi]:lh}},Qn={legacyMode:!0,get workingColorSpace(){return Nr},set workingColorSpace(f){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(f,t,i){if(this.legacyMode||t===i||!t||!i)return f;if($u[t]&&$u[t][i]!==void 0){const a=$u[t][i];return f.r=a(f.r),f.g=a(f.g),f.b=a(f.b),f}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(f,t){return this.convert(f,this.workingColorSpace,t)},toWorkingColorSpace:function(f,t){return this.convert(f,t,this.workingColorSpace)}},Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={r:0,g:0,b:0},ki={h:0,s:0,l:0},Tn={h:0,s:0,l:0};function mt(f,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?f+(t-f)*6*i:i<1/2?t:i<2/3?f+(t-f)*6*(2/3-i):f}function hh(f,t){return t.r=f.r,t.g=f.g,t.b=f.b,t}class ue{constructor(t,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,i===void 0&&a===void 0?this.set(t):this.setRGB(t,i,a)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=zi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qn.toWorkingColorSpace(this,i),this}setRGB(t,i,a,l=Nr){return this.r=t,this.g=i,this.b=a,Qn.toWorkingColorSpace(this,l),this}setHSL(t,i,a,l=Nr){if(t=Zu(t,1),i=on(i,0,1),a=on(a,0,1),i===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+i):a+i-a*i,m=2*a-u;this.r=mt(m,u,t+1/3),this.g=mt(m,u,t),this.b=mt(m,u,t-1/3)}return Qn.toWorkingColorSpace(this,l),this}setStyle(t,i=zi){function a(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let u;const m=l[1],g=l[2];switch(m){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return this.r=Math.min(255,parseInt(u[1],10))/255,this.g=Math.min(255,parseInt(u[2],10))/255,this.b=Math.min(255,parseInt(u[3],10))/255,Qn.toWorkingColorSpace(this,i),a(u[4]),this;if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g))return this.r=Math.min(100,parseInt(u[1],10))/100,this.g=Math.min(100,parseInt(u[2],10))/100,this.b=Math.min(100,parseInt(u[3],10))/100,Qn.toWorkingColorSpace(this,i),a(u[4]),this;break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(g)){const v=parseFloat(u[1])/360,M=parseFloat(u[2])/100,E=parseFloat(u[3])/100;return a(u[4]),this.setHSL(v,M,E,i)}break}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],m=u.length;if(m===3)return this.r=parseInt(u.charAt(0)+u.charAt(0),16)/255,this.g=parseInt(u.charAt(1)+u.charAt(1),16)/255,this.b=parseInt(u.charAt(2)+u.charAt(2),16)/255,Qn.toWorkingColorSpace(this,i),this;if(m===6)return this.r=parseInt(u.charAt(0)+u.charAt(1),16)/255,this.g=parseInt(u.charAt(2)+u.charAt(3),16)/255,this.b=parseInt(u.charAt(4)+u.charAt(5),16)/255,Qn.toWorkingColorSpace(this,i),this}return t&&t.length>0?this.setColorName(t,i):this}setColorName(t,i=zi){const a=Ku[t.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=lh(t.r),this.g=lh(t.g),this.b=lh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=zi){return Qn.fromWorkingColorSpace(hh(this,Qt),t),on(Qt.r*255,0,255)<<16^on(Qt.g*255,0,255)<<8^on(Qt.b*255,0,255)<<0}getHexString(t=zi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nr){Qn.fromWorkingColorSpace(hh(this,Qt),i);const a=Qt.r,l=Qt.g,u=Qt.b,m=Math.max(a,l,u),g=Math.min(a,l,u);let v,M;const E=(g+m)/2;if(g===m)v=0,M=0;else{const A=m-g;switch(M=E<=.5?A/(m+g):A/(2-m-g),m){case a:v=(l-u)/A+(l<u?6:0);break;case l:v=(u-a)/A+2;break;case u:v=(a-l)/A+4;break}v/=6}return t.h=v,t.s=M,t.l=E,t}getRGB(t,i=Nr){return Qn.fromWorkingColorSpace(hh(this,Qt),i),t.r=Qt.r,t.g=Qt.g,t.b=Qt.b,t}getStyle(t=zi){return Qn.fromWorkingColorSpace(hh(this,Qt),t),t!==zi?`color(${t} ${Qt.r} ${Qt.g} ${Qt.b})`:`rgb(${Qt.r*255|0},${Qt.g*255|0},${Qt.b*255|0})`}offsetHSL(t,i,a){return this.getHSL(ki),ki.h+=t,ki.s+=i,ki.l+=a,this.setHSL(ki.h,ki.s,ki.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,a){return this.r=t.r+(i.r-t.r)*a,this.g=t.g+(i.g-t.g)*a,this.b=t.b+(i.b-t.b)*a,this}lerpHSL(t,i){this.getHSL(ki),t.getHSL(Tn);const a=Oc(ki.h,Tn.h,i),l=Oc(ki.s,Tn.s,i),u=Oc(ki.l,Tn.l,i);return this.setHSL(a,l,u),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ue.NAMES=Ku;let dt;class Gc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{dt===void 0&&(dt=zc("canvas")),dt.width=t.width,dt.height=t.height;const a=dt.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=dt}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const i=zc("canvas");i.width=t.width,i.height=t.height;const a=i.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const l=a.getImageData(0,0,t.width,t.height),u=l.data;for(let m=0;m<u.length;m++)u[m]=fa(u[m]/255)*255;return a.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(fa(i[a]/255)*255):i[a]=fa(i[a]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class gs{constructor(t=null){this.isSource=!0,this.uuid=oi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let m=0,g=l.length;m<g;m++)l[m].isDataTexture?u.push(Qu(l[m].image)):u.push(Qu(l[m]))}else u=Qu(l);a.url=u}return i||(t.images[this.uuid]=a),a}}function Qu(f){return typeof HTMLImageElement!="undefined"&&f instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&f instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&f instanceof ImageBitmap?Gc.getDataURL(f):f.data?{data:Array.from(f.data),width:f.width,height:f.height,type:f.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let co=0;class qt extends ir{constructor(t=qt.DEFAULT_IMAGE,i=qt.DEFAULT_MAPPING,a=rn,l=rn,u=kt,m=Lr,g=Zn,v=Gn,M=1,E=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:co++}),this.uuid=oi(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=i,this.wrapS=a,this.wrapT=l,this.magFilter=u,this.minFilter=m,this.anisotropy=M,this.format=g,this.internalFormat=null,this.type=v,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=E,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData),i||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rr:t.x=t.x-Math.floor(t.x);break;case rn:t.x=t.x<0?0:1;break;case Cr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rr:t.y=t.y-Math.floor(t.y);break;case rn:t.y=t.y<0?0:1;break;case Cr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}qt.DEFAULT_IMAGE=null,qt.DEFAULT_MAPPING=hc;class Nt{constructor(t=0,i=0,a=0,l=1){Nt.prototype.isVector4=!0,this.x=t,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,a,l){return this.x=t,this.y=i,this.z=a,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,u=this.w,m=t.elements;return this.x=m[0]*i+m[4]*a+m[8]*l+m[12]*u,this.y=m[1]*i+m[5]*a+m[9]*l+m[13]*u,this.z=m[2]*i+m[6]*a+m[10]*l+m[14]*u,this.w=m[3]*i+m[7]*a+m[11]*l+m[15]*u,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,a,l,u;const v=t.elements,M=v[0],E=v[4],A=v[8],o=v[1],e=v[5],n=v[9],r=v[2],s=v[6],c=v[10];if(Math.abs(E-o)<.01&&Math.abs(A-r)<.01&&Math.abs(n-s)<.01){if(Math.abs(E+o)<.1&&Math.abs(A+r)<.1&&Math.abs(n+s)<.1&&Math.abs(M+e+c-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const d=(M+1)/2,p=(e+1)/2,_=(c+1)/2,y=(E+o)/4,S=(A+r)/4,x=(n+s)/4;return d>p&&d>_?d<.01?(a=0,l=.707106781,u=.707106781):(a=Math.sqrt(d),l=y/a,u=S/a):p>_?p<.01?(a=.707106781,l=0,u=.707106781):(l=Math.sqrt(p),a=y/l,u=x/l):_<.01?(a=.707106781,l=.707106781,u=0):(u=Math.sqrt(_),a=S/u,l=x/u),this.set(a,l,u,i),this}let h=Math.sqrt((s-n)*(s-n)+(A-r)*(A-r)+(o-E)*(o-E));return Math.abs(h)<.001&&(h=1),this.x=(s-n)/h,this.y=(A-r)/h,this.z=(o-E)/h,this.w=Math.acos((M+e+c-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this.w=t.w+(i.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class In extends ir{constructor(t=1,i=1,a={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Nt(0,0,t,i),this.scissorTest=!1,this.viewport=new Nt(0,0,t,i);const l={width:t,height:i,depth:1};this.texture=new qt(l,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=a.generateMipmaps!==void 0?a.generateMipmaps:!1,this.texture.internalFormat=a.internalFormat!==void 0?a.internalFormat:null,this.texture.minFilter=a.minFilter!==void 0?a.minFilter:kt,this.depthBuffer=a.depthBuffer!==void 0?a.depthBuffer:!0,this.stencilBuffer=a.stencilBuffer!==void 0?a.stencilBuffer:!1,this.depthTexture=a.depthTexture!==void 0?a.depthTexture:null,this.samples=a.samples!==void 0?a.samples:0}setSize(t,i,a=1){(this.width!==t||this.height!==i||this.depth!==a)&&(this.width=t,this.height=i,this.depth=a,this.texture.image.width=t,this.texture.image.height=i,this.texture.image.depth=a,this.dispose()),this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new gs(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sr extends qt{constructor(t=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=wt,this.minFilter=wt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ju extends In{constructor(t=1,i=1,a=1){super(t,i),this.isWebGLArrayRenderTarget=!0,this.depth=a,this.texture=new sr(null,t,i,a),this.texture.isRenderTargetTexture=!0}}class uh extends qt{constructor(t=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:a,depth:l},this.magFilter=wt,this.minFilter=wt,this.wrapR=rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eg extends In{constructor(t=1,i=1,a=1){super(t,i),this.isWebGL3DRenderTarget=!0,this.depth=a,this.texture=new uh(null,t,i,a),this.texture.isRenderTargetTexture=!0}}class tg extends In{constructor(t=1,i=1,a=1,l={}){super(t,i,l),this.isWebGLMultipleRenderTargets=!0;const u=this.texture;this.texture=[];for(let m=0;m<a;m++)this.texture[m]=u.clone(),this.texture[m].isRenderTargetTexture=!0}setSize(t,i,a=1){if(this.width!==t||this.height!==i||this.depth!==a){this.width=t,this.height=i,this.depth=a;for(let l=0,u=this.texture.length;l<u;l++)this.texture[l].image.width=t,this.texture[l].image.height=i,this.texture[l].image.depth=a;this.dispose()}return this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.texture.length=0;for(let i=0,a=t.texture.length;i<a;i++)this.texture[i]=t.texture[i].clone(),this.texture[i].isRenderTargetTexture=!0;return this}}class jn{constructor(t=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=a,this._w=l}static slerpFlat(t,i,a,l,u,m,g){let v=a[l+0],M=a[l+1],E=a[l+2],A=a[l+3];const o=u[m+0],e=u[m+1],n=u[m+2],r=u[m+3];if(g===0){t[i+0]=v,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(g===1){t[i+0]=o,t[i+1]=e,t[i+2]=n,t[i+3]=r;return}if(A!==r||v!==o||M!==e||E!==n){let s=1-g;const c=v*o+M*e+E*n+A*r,h=c>=0?1:-1,d=1-c*c;if(d>Number.EPSILON){const _=Math.sqrt(d),y=Math.atan2(_,c*h);s=Math.sin(s*y)/_,g=Math.sin(g*y)/_}const p=g*h;if(v=v*s+o*p,M=M*s+e*p,E=E*s+n*p,A=A*s+r*p,s===1-g){const _=1/Math.sqrt(v*v+M*M+E*E+A*A);v*=_,M*=_,E*=_,A*=_}}t[i]=v,t[i+1]=M,t[i+2]=E,t[i+3]=A}static multiplyQuaternionsFlat(t,i,a,l,u,m){const g=a[l],v=a[l+1],M=a[l+2],E=a[l+3],A=u[m],o=u[m+1],e=u[m+2],n=u[m+3];return t[i]=g*n+E*A+v*e-M*o,t[i+1]=v*n+E*o+M*A-g*e,t[i+2]=M*n+E*e+g*o-v*A,t[i+3]=E*n-g*A-v*o-M*e,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,a,l){return this._x=t,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i){const a=t._x,l=t._y,u=t._z,m=t._order,g=Math.cos,v=Math.sin,M=g(a/2),E=g(l/2),A=g(u/2),o=v(a/2),e=v(l/2),n=v(u/2);switch(m){case"XYZ":this._x=o*E*A+M*e*n,this._y=M*e*A-o*E*n,this._z=M*E*n+o*e*A,this._w=M*E*A-o*e*n;break;case"YXZ":this._x=o*E*A+M*e*n,this._y=M*e*A-o*E*n,this._z=M*E*n-o*e*A,this._w=M*E*A+o*e*n;break;case"ZXY":this._x=o*E*A-M*e*n,this._y=M*e*A+o*E*n,this._z=M*E*n+o*e*A,this._w=M*E*A-o*e*n;break;case"ZYX":this._x=o*E*A-M*e*n,this._y=M*e*A+o*E*n,this._z=M*E*n-o*e*A,this._w=M*E*A+o*e*n;break;case"YZX":this._x=o*E*A+M*e*n,this._y=M*e*A+o*E*n,this._z=M*E*n-o*e*A,this._w=M*E*A-o*e*n;break;case"XZY":this._x=o*E*A-M*e*n,this._y=M*e*A-o*E*n,this._z=M*E*n+o*e*A,this._w=M*E*A+o*e*n;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+m)}return i!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const a=i/2,l=Math.sin(a);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,a=i[0],l=i[4],u=i[8],m=i[1],g=i[5],v=i[9],M=i[2],E=i[6],A=i[10],o=a+g+A;if(o>0){const e=.5/Math.sqrt(o+1);this._w=.25/e,this._x=(E-v)*e,this._y=(u-M)*e,this._z=(m-l)*e}else if(a>g&&a>A){const e=2*Math.sqrt(1+a-g-A);this._w=(E-v)/e,this._x=.25*e,this._y=(l+m)/e,this._z=(u+M)/e}else if(g>A){const e=2*Math.sqrt(1+g-a-A);this._w=(u-M)/e,this._x=(l+m)/e,this._y=.25*e,this._z=(v+E)/e}else{const e=2*Math.sqrt(1+A-a-g);this._w=(m-l)/e,this._x=(u+M)/e,this._y=(v+E)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let a=t.dot(i)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(on(this.dot(t),-1,1)))}rotateTowards(t,i){const a=this.angleTo(t);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const a=t._x,l=t._y,u=t._z,m=t._w,g=i._x,v=i._y,M=i._z,E=i._w;return this._x=a*E+m*g+l*M-u*v,this._y=l*E+m*v+u*g-a*M,this._z=u*E+m*M+a*v-l*g,this._w=m*E-a*g-l*v-u*M,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const a=this._x,l=this._y,u=this._z,m=this._w;let g=m*t._w+a*t._x+l*t._y+u*t._z;if(g<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,g=-g):this.copy(t),g>=1)return this._w=m,this._x=a,this._y=l,this._z=u,this;const v=1-g*g;if(v<=Number.EPSILON){const e=1-i;return this._w=e*m+i*this._w,this._x=e*a+i*this._x,this._y=e*l+i*this._y,this._z=e*u+i*this._z,this.normalize(),this._onChangeCallback(),this}const M=Math.sqrt(v),E=Math.atan2(M,g),A=Math.sin((1-i)*E)/M,o=Math.sin(i*E)/M;return this._w=m*A+this._w*o,this._x=a*A+this._x*o,this._y=l*A+this._y*o,this._z=u*A+this._z*o,this._onChangeCallback(),this}slerpQuaternions(t,i,a){return this.copy(t).slerp(i,a)}random(){const t=Math.random(),i=Math.sqrt(1-t),a=Math.sqrt(t),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),a*Math.sin(u),a*Math.cos(u),i*Math.sin(l))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(t=0,i=0,a=0){Z.prototype.isVector3=!0,this.x=t,this.y=i,this.z=a}set(t,i,a){return a===void 0&&(a=this.z),this.x=t,this.y=i,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ci.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ci.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,a=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*a+u[6]*l,this.y=u[1]*i+u[4]*a+u[7]*l,this.z=u[2]*i+u[5]*a+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,a=this.y,l=this.z,u=t.elements,m=1/(u[3]*i+u[7]*a+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*a+u[8]*l+u[12])*m,this.y=(u[1]*i+u[5]*a+u[9]*l+u[13])*m,this.z=(u[2]*i+u[6]*a+u[10]*l+u[14])*m,this}applyQuaternion(t){const i=this.x,a=this.y,l=this.z,u=t.x,m=t.y,g=t.z,v=t.w,M=v*i+m*l-g*a,E=v*a+g*i-u*l,A=v*l+u*a-m*i,o=-u*i-m*a-g*l;return this.x=M*v+o*-u+E*-g-A*-m,this.y=E*v+o*-m+A*-u-M*-g,this.z=A*v+o*-g+M*-m-E*-u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,a=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*a+u[8]*l,this.y=u[1]*i+u[5]*a+u[9]*l,this.z=u[2]*i+u[6]*a+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(i,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,a){return this.x=t.x+(i.x-t.x)*a,this.y=t.y+(i.y-t.y)*a,this.z=t.z+(i.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const a=t.x,l=t.y,u=t.z,m=i.x,g=i.y,v=i.z;return this.x=l*v-u*g,this.y=u*m-a*v,this.z=a*g-l*m,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const a=t.dot(this)/i;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return ed.copy(this).projectOnVector(t),this.sub(ed)}reflect(t){return this.sub(ed.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(t)/i;return Math.acos(on(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,a=this.y-t.y,l=this.z-t.z;return i*i+a*a+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,a){const l=Math.sin(i)*t;return this.x=l*Math.sin(a),this.y=Math.cos(i)*t,this.z=l*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,a){return this.x=t*Math.sin(i),this.y=a,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,a=Math.sqrt(1-Im(t,2));return this.x=a*Math.cos(i),this.y=a*Math.sin(i),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new Z,ci=new jn;class vi{constructor(t=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){let i=1/0,a=1/0,l=1/0,u=-1/0,m=-1/0,g=-1/0;for(let v=0,M=t.length;v<M;v+=3){const E=t[v],A=t[v+1],o=t[v+2];E<i&&(i=E),A<a&&(a=A),o<l&&(l=o),E>u&&(u=E),A>m&&(m=A),o>g&&(g=o)}return this.min.set(i,a,l),this.max.set(u,m,g),this}setFromBufferAttribute(t){let i=1/0,a=1/0,l=1/0,u=-1/0,m=-1/0,g=-1/0;for(let v=0,M=t.count;v<M;v++){const E=t.getX(v),A=t.getY(v),o=t.getZ(v);E<i&&(i=E),A<a&&(a=A),o<l&&(l=o),E>u&&(u=E),A>m&&(m=A),o>g&&(g=o)}return this.min.set(i,a,l),this.max.set(u,m,g),this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=pa.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0)if(i&&a.attributes!=null&&a.attributes.position!==void 0){const u=a.attributes.position;for(let m=0,g=u.count;m<g;m++)pa.fromBufferAttribute(u,m).applyMatrix4(t.matrixWorld),this.expandByPoint(pa)}else a.boundingBox===null&&a.computeBoundingBox(),Br.copy(a.boundingBox),Br.applyMatrix4(t.matrixWorld),this.union(Br);const l=t.children;for(let u=0,m=l.length;u<m;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,pa),pa.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,a;return t.normal.x>0?(i=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),i<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),dh.subVectors(this.max,xs),_s.subVectors(t.a,xs),lo.subVectors(t.b,xs),zt.subVectors(t.c,xs),bt.subVectors(lo,_s),zr.subVectors(zt,lo),wn.subVectors(_s,zt);let i=[0,-bt.z,bt.y,0,-zr.z,zr.y,0,-wn.z,wn.y,bt.z,0,-bt.x,zr.z,0,-zr.x,wn.z,0,-wn.x,-bt.y,bt.x,0,-zr.y,zr.x,0,-wn.y,wn.x,0];return!td(i,_s,lo,zt,dh)||(i=[1,0,0,0,1,0,0,0,1],!td(i,_s,lo,zt,dh))?!1:(ho.crossVectors(bt,zr),i=[ho.x,ho.y,ho.z],td(i,_s,lo,zt,dh))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return pa.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(pa).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Vi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],pa=new Z,Br=new vi,_s=new Z,lo=new Z,zt=new Z,bt=new Z,zr=new Z,wn=new Z,xs=new Z,dh=new Z,ho=new Z,ma=new Z;function td(f,t,i,a,l){for(let u=0,m=f.length-3;u<=m;u+=3){ma.fromArray(f,u);const g=l.x*Math.abs(ma.x)+l.y*Math.abs(ma.y)+l.z*Math.abs(ma.z),v=t.dot(ma),M=i.dot(ma),E=a.dot(ma);if(Math.max(-Math.max(v,M,E),Math.min(v,M,E))>g)return!1}return!0}const ei=new vi,J=new Z,kc=new Z;class ys{constructor(t=new Z,i=-1){this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const a=this.center;i!==void 0?a.copy(i):ei.setFromPoints(t).getCenter(a);let l=0;for(let u=0,m=t.length;u<m;u++)l=Math.max(l,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const a=this.center.distanceToSquared(t);return i.copy(t),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;J.subVectors(t,this.center);const i=J.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(J,l/a),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(J.copy(t.center).add(kc)),this.expandByPoint(J.copy(t.center).sub(kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new Z,Hi=new Z,Mi=new Z,li=new Z,vs=new Z,Gr=new Z,Ms=new Z;class Si{constructor(t=new Z,i=new Z(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.direction).multiplyScalar(a).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Mn.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Mn.copy(this.direction).multiplyScalar(i).add(this.origin),Mn.distanceToSquared(t))}distanceSqToSegment(t,i,a,l){Hi.copy(t).add(i).multiplyScalar(.5),Mi.copy(i).sub(t).normalize(),li.copy(this.origin).sub(Hi);const u=t.distanceTo(i)*.5,m=-this.direction.dot(Mi),g=li.dot(this.direction),v=-li.dot(Mi),M=li.lengthSq(),E=Math.abs(1-m*m);let A,o,e,n;if(E>0)if(A=m*v-g,o=m*g-v,n=u*E,A>=0)if(o>=-n)if(o<=n){const r=1/E;A*=r,o*=r,e=A*(A+m*o+2*g)+o*(m*A+o+2*v)+M}else o=u,A=Math.max(0,-(m*o+g)),e=-A*A+o*(o+2*v)+M;else o=-u,A=Math.max(0,-(m*o+g)),e=-A*A+o*(o+2*v)+M;else o<=-n?(A=Math.max(0,-(-m*u+g)),o=A>0?-u:Math.min(Math.max(-u,-v),u),e=-A*A+o*(o+2*v)+M):o<=n?(A=0,o=Math.min(Math.max(-u,-v),u),e=o*(o+2*v)+M):(A=Math.max(0,-(m*u+g)),o=A>0?u:Math.min(Math.max(-u,-v),u),e=-A*A+o*(o+2*v)+M);else o=m>0?-u:u,A=Math.max(0,-(m*o+g)),e=-A*A+o*(o+2*v)+M;return a&&a.copy(this.direction).multiplyScalar(A).add(this.origin),l&&l.copy(Mi).multiplyScalar(o).add(Hi),e}intersectSphere(t,i){Mn.subVectors(t.center,this.origin);const a=Mn.dot(this.direction),l=Mn.dot(Mn)-a*a,u=t.radius*t.radius;if(l>u)return null;const m=Math.sqrt(u-l),g=a-m,v=a+m;return g<0&&v<0?null:g<0?this.at(v,i):this.at(g,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/i;return a>=0?a:null}intersectPlane(t,i){const a=this.distanceToPlane(t);return a===null?null:this.at(a,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let a,l,u,m,g,v;const M=1/this.direction.x,E=1/this.direction.y,A=1/this.direction.z,o=this.origin;return M>=0?(a=(t.min.x-o.x)*M,l=(t.max.x-o.x)*M):(a=(t.max.x-o.x)*M,l=(t.min.x-o.x)*M),E>=0?(u=(t.min.y-o.y)*E,m=(t.max.y-o.y)*E):(u=(t.max.y-o.y)*E,m=(t.min.y-o.y)*E),a>m||u>l||((u>a||isNaN(a))&&(a=u),(m<l||isNaN(l))&&(l=m),A>=0?(g=(t.min.z-o.z)*A,v=(t.max.z-o.z)*A):(g=(t.max.z-o.z)*A,v=(t.min.z-o.z)*A),a>v||g>l)||((g>a||a!==a)&&(a=g),(v<l||l!==l)&&(l=v),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,i,a,l,u){vs.subVectors(i,t),Gr.subVectors(a,t),Ms.crossVectors(vs,Gr);let m=this.direction.dot(Ms),g;if(m>0){if(l)return null;g=1}else if(m<0)g=-1,m=-m;else return null;li.subVectors(this.origin,t);const v=g*this.direction.dot(Gr.crossVectors(li,Gr));if(v<0)return null;const M=g*this.direction.dot(vs.cross(li));if(M<0||v+M>m)return null;const E=-g*li.dot(Ms);return E<0?null:this.at(E/m,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,i,a,l,u,m,g,v,M,E,A,o,e,n,r,s){const c=this.elements;return c[0]=t,c[4]=i,c[8]=a,c[12]=l,c[1]=u,c[5]=m,c[9]=g,c[13]=v,c[2]=M,c[6]=E,c[10]=A,c[14]=o,c[3]=e,c[7]=n,c[11]=r,c[15]=s,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(t){const i=this.elements,a=t.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(t){const i=this.elements,a=t.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,a){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,i,a){return this.set(t.x,i.x,a.x,0,t.y,i.y,a.y,0,t.z,i.z,a.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,a=t.elements,l=1/bi.setFromMatrixColumn(t,0).length(),u=1/bi.setFromMatrixColumn(t,1).length(),m=1/bi.setFromMatrixColumn(t,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*u,i[5]=a[5]*u,i[6]=a[6]*u,i[7]=0,i[8]=a[8]*m,i[9]=a[9]*m,i[10]=a[10]*m,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,a=t.x,l=t.y,u=t.z,m=Math.cos(a),g=Math.sin(a),v=Math.cos(l),M=Math.sin(l),E=Math.cos(u),A=Math.sin(u);if(t.order==="XYZ"){const o=m*E,e=m*A,n=g*E,r=g*A;i[0]=v*E,i[4]=-v*A,i[8]=M,i[1]=e+n*M,i[5]=o-r*M,i[9]=-g*v,i[2]=r-o*M,i[6]=n+e*M,i[10]=m*v}else if(t.order==="YXZ"){const o=v*E,e=v*A,n=M*E,r=M*A;i[0]=o+r*g,i[4]=n*g-e,i[8]=m*M,i[1]=m*A,i[5]=m*E,i[9]=-g,i[2]=e*g-n,i[6]=r+o*g,i[10]=m*v}else if(t.order==="ZXY"){const o=v*E,e=v*A,n=M*E,r=M*A;i[0]=o-r*g,i[4]=-m*A,i[8]=n+e*g,i[1]=e+n*g,i[5]=m*E,i[9]=r-o*g,i[2]=-m*M,i[6]=g,i[10]=m*v}else if(t.order==="ZYX"){const o=m*E,e=m*A,n=g*E,r=g*A;i[0]=v*E,i[4]=n*M-e,i[8]=o*M+r,i[1]=v*A,i[5]=r*M+o,i[9]=e*M-n,i[2]=-M,i[6]=g*v,i[10]=m*v}else if(t.order==="YZX"){const o=m*v,e=m*M,n=g*v,r=g*M;i[0]=v*E,i[4]=r-o*A,i[8]=n*A+e,i[1]=A,i[5]=m*E,i[9]=-g*E,i[2]=-M*E,i[6]=e*A+n,i[10]=o-r*A}else if(t.order==="XZY"){const o=m*v,e=m*M,n=g*v,r=g*M;i[0]=v*E,i[4]=-A,i[8]=M*E,i[1]=o*A+r,i[5]=m*E,i[9]=e*A-n,i[2]=n*A-e,i[6]=g*E,i[10]=r*A+o}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fh,t,ph)}lookAt(t,i,a){const l=this.elements;return hi.subVectors(t,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ti.crossVectors(a,hi),ti.lengthSq()===0&&(Math.abs(a.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ti.crossVectors(a,hi)),ti.normalize(),uo.crossVectors(hi,ti),l[0]=ti.x,l[4]=uo.x,l[8]=hi.x,l[1]=ti.y,l[5]=uo.y,l[9]=hi.y,l[2]=ti.z,l[6]=uo.z,l[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const a=t.elements,l=i.elements,u=this.elements,m=a[0],g=a[4],v=a[8],M=a[12],E=a[1],A=a[5],o=a[9],e=a[13],n=a[2],r=a[6],s=a[10],c=a[14],h=a[3],d=a[7],p=a[11],_=a[15],y=l[0],S=l[4],x=l[8],b=l[12],T=l[1],C=l[5],R=l[9],w=l[13],P=l[2],L=l[6],I=l[10],O=l[14],F=l[3],N=l[7],k=l[11],D=l[15];return u[0]=m*y+g*T+v*P+M*F,u[4]=m*S+g*C+v*L+M*N,u[8]=m*x+g*R+v*I+M*k,u[12]=m*b+g*w+v*O+M*D,u[1]=E*y+A*T+o*P+e*F,u[5]=E*S+A*C+o*L+e*N,u[9]=E*x+A*R+o*I+e*k,u[13]=E*b+A*w+o*O+e*D,u[2]=n*y+r*T+s*P+c*F,u[6]=n*S+r*C+s*L+c*N,u[10]=n*x+r*R+s*I+c*k,u[14]=n*b+r*w+s*O+c*D,u[3]=h*y+d*T+p*P+_*F,u[7]=h*S+d*C+p*L+_*N,u[11]=h*x+d*R+p*I+_*k,u[15]=h*b+d*w+p*O+_*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],a=t[4],l=t[8],u=t[12],m=t[1],g=t[5],v=t[9],M=t[13],E=t[2],A=t[6],o=t[10],e=t[14],n=t[3],r=t[7],s=t[11],c=t[15];return n*(+u*v*A-l*M*A-u*g*o+a*M*o+l*g*e-a*v*e)+r*(+i*v*e-i*M*o+u*m*o-l*m*e+l*M*E-u*v*E)+s*(+i*M*A-i*g*e-u*m*A+a*m*e+u*g*E-a*M*E)+c*(-l*g*E-i*v*A+i*g*o+l*m*A-a*m*o+a*v*E)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,a){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=a),this}invert(){const t=this.elements,i=t[0],a=t[1],l=t[2],u=t[3],m=t[4],g=t[5],v=t[6],M=t[7],E=t[8],A=t[9],o=t[10],e=t[11],n=t[12],r=t[13],s=t[14],c=t[15],h=A*s*M-r*o*M+r*v*e-g*s*e-A*v*c+g*o*c,d=n*o*M-E*s*M-n*v*e+m*s*e+E*v*c-m*o*c,p=E*r*M-n*A*M+n*g*e-m*r*e-E*g*c+m*A*c,_=n*A*v-E*r*v-n*g*o+m*r*o+E*g*s-m*A*s,y=i*h+a*d+l*p+u*_;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/y;return t[0]=h*S,t[1]=(r*o*u-A*s*u-r*l*e+a*s*e+A*l*c-a*o*c)*S,t[2]=(g*s*u-r*v*u+r*l*M-a*s*M-g*l*c+a*v*c)*S,t[3]=(A*v*u-g*o*u-A*l*M+a*o*M+g*l*e-a*v*e)*S,t[4]=d*S,t[5]=(E*s*u-n*o*u+n*l*e-i*s*e-E*l*c+i*o*c)*S,t[6]=(n*v*u-m*s*u-n*l*M+i*s*M+m*l*c-i*v*c)*S,t[7]=(m*o*u-E*v*u+E*l*M-i*o*M-m*l*e+i*v*e)*S,t[8]=p*S,t[9]=(n*A*u-E*r*u-n*a*e+i*r*e+E*a*c-i*A*c)*S,t[10]=(m*r*u-n*g*u+n*a*M-i*r*M-m*a*c+i*g*c)*S,t[11]=(E*g*u-m*A*u-E*a*M+i*A*M+m*a*e-i*g*e)*S,t[12]=_*S,t[13]=(E*r*l-n*A*l+n*a*o-i*r*o-E*a*s+i*A*s)*S,t[14]=(n*g*l-m*r*l-n*a*v+i*r*v+m*a*s-i*g*s)*S,t[15]=(m*A*l-E*g*l+E*a*v-i*A*v-m*a*o+i*g*o)*S,this}scale(t){const i=this.elements,a=t.x,l=t.y,u=t.z;return i[0]*=a,i[4]*=l,i[8]*=u,i[1]*=a,i[5]*=l,i[9]*=u,i[2]*=a,i[6]*=l,i[10]*=u,i[3]*=a,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(t,i,a){return this.set(1,0,0,t,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),a=Math.sin(t);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const a=Math.cos(i),l=Math.sin(i),u=1-a,m=t.x,g=t.y,v=t.z,M=u*m,E=u*g;return this.set(M*m+a,M*g-l*v,M*v+l*g,0,M*g+l*v,E*g+a,E*v-l*m,0,M*v-l*g,E*v+l*m,u*v*v+a,0,0,0,0,1),this}makeScale(t,i,a){return this.set(t,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,i,a,l,u,m){return this.set(1,a,u,0,t,1,m,0,i,l,1,0,0,0,0,1),this}compose(t,i,a){const l=this.elements,u=i._x,m=i._y,g=i._z,v=i._w,M=u+u,E=m+m,A=g+g,o=u*M,e=u*E,n=u*A,r=m*E,s=m*A,c=g*A,h=v*M,d=v*E,p=v*A,_=a.x,y=a.y,S=a.z;return l[0]=(1-(r+c))*_,l[1]=(e+p)*_,l[2]=(n-d)*_,l[3]=0,l[4]=(e-p)*y,l[5]=(1-(o+c))*y,l[6]=(s+h)*y,l[7]=0,l[8]=(n+d)*S,l[9]=(s-h)*S,l[10]=(1-(o+r))*S,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,a){const l=this.elements;let u=bi.set(l[0],l[1],l[2]).length();const m=bi.set(l[4],l[5],l[6]).length(),g=bi.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Vn.copy(this);const M=1/u,E=1/m,A=1/g;return Vn.elements[0]*=M,Vn.elements[1]*=M,Vn.elements[2]*=M,Vn.elements[4]*=E,Vn.elements[5]*=E,Vn.elements[6]*=E,Vn.elements[8]*=A,Vn.elements[9]*=A,Vn.elements[10]*=A,i.setFromRotationMatrix(Vn),a.x=u,a.y=m,a.z=g,this}makePerspective(t,i,a,l,u,m){const g=this.elements,v=2*u/(i-t),M=2*u/(a-l),E=(i+t)/(i-t),A=(a+l)/(a-l),o=-(m+u)/(m-u),e=-2*m*u/(m-u);return g[0]=v,g[4]=0,g[8]=E,g[12]=0,g[1]=0,g[5]=M,g[9]=A,g[13]=0,g[2]=0,g[6]=0,g[10]=o,g[14]=e,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,a,l,u,m){const g=this.elements,v=1/(i-t),M=1/(a-l),E=1/(m-u),A=(i+t)*v,o=(a+l)*M,e=(m+u)*E;return g[0]=2*v,g[4]=0,g[8]=0,g[12]=-A,g[1]=0,g[5]=2*M,g[9]=0,g[13]=-o,g[2]=0,g[6]=0,g[10]=-2*E,g[14]=-e,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,a=t.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(t,i=0){for(let a=0;a<16;a++)this.elements[a]=t[a+i];return this}toArray(t=[],i=0){const a=this.elements;return t[i]=a[0],t[i+1]=a[1],t[i+2]=a[2],t[i+3]=a[3],t[i+4]=a[4],t[i+5]=a[5],t[i+6]=a[6],t[i+7]=a[7],t[i+8]=a[8],t[i+9]=a[9],t[i+10]=a[10],t[i+11]=a[11],t[i+12]=a[12],t[i+13]=a[13],t[i+14]=a[14],t[i+15]=a[15],t}}const bi=new Z,Vn=new ot,fh=new Z(0,0,0),ph=new Z(1,1,1),ti=new Z,uo=new Z,hi=new Z,fo=new ot,mh=new jn;class Dn{constructor(t=0,i=0,a=0,l=Dn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,a,l=this._order){return this._x=t,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,a=!0){const l=t.elements,u=l[0],m=l[4],g=l[8],v=l[1],M=l[5],E=l[9],A=l[2],o=l[6],e=l[10];switch(i){case"XYZ":this._y=Math.asin(on(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-E,e),this._z=Math.atan2(-m,u)):(this._x=Math.atan2(o,M),this._z=0);break;case"YXZ":this._x=Math.asin(-on(E,-1,1)),Math.abs(E)<.9999999?(this._y=Math.atan2(g,e),this._z=Math.atan2(v,M)):(this._y=Math.atan2(-A,u),this._z=0);break;case"ZXY":this._x=Math.asin(on(o,-1,1)),Math.abs(o)<.9999999?(this._y=Math.atan2(-A,e),this._z=Math.atan2(-m,M)):(this._y=0,this._z=Math.atan2(v,u));break;case"ZYX":this._y=Math.asin(-on(A,-1,1)),Math.abs(A)<.9999999?(this._x=Math.atan2(o,e),this._z=Math.atan2(v,u)):(this._x=0,this._z=Math.atan2(-m,M));break;case"YZX":this._z=Math.asin(on(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-E,M),this._y=Math.atan2(-A,u)):(this._x=0,this._y=Math.atan2(g,e));break;case"XZY":this._z=Math.asin(-on(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(o,M),this._y=Math.atan2(g,u)):(this._x=Math.atan2(-E,e),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,a){return fo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fo,i,a)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Dn.DefaultOrder="XYZ",Dn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ei{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nd=0;const Vc=new Z,ui=new jn,Wi=new ot,ga=new Z,_a=new Z,po=new Z,gt=new jn,xa=new Z(1,0,0),Ti=new Z(0,1,0),yf=new Z(0,0,1),ng={type:"added"},kr={type:"removed"};class At extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=At.DefaultUp.clone();const t=new Z,i=new Dn,a=new jn,l=new Z(1,1,1);function u(){a.setFromEuler(i,!1)}function m(){i.setFromQuaternion(a,void 0,!1)}i._onChange(u),a._onChange(m),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new ot},normalMatrix:{value:new Kn}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=At.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=At.DefaultMatrixWorldAutoUpdate,this.layers=new Ei,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ui.setFromAxisAngle(t,i),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,i){return ui.setFromAxisAngle(t,i),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(xa,t)}rotateY(t){return this.rotateOnAxis(Ti,t)}rotateZ(t){return this.rotateOnAxis(yf,t)}translateOnAxis(t,i){return Vc.copy(t).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(xa,t)}translateY(t){return this.translateOnAxis(Ti,t)}translateZ(t){return this.translateOnAxis(yf,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Wi.copy(this.matrixWorld).invert())}lookAt(t,i,a){t.isVector3?ga.copy(t):ga.set(t,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wi.lookAt(_a,ga,this.up):Wi.lookAt(ga,_a,this.up),this.quaternion.setFromRotationMatrix(Wi),l&&(Wi.extractRotation(l.matrixWorld),ui.setFromRotationMatrix(Wi),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ng)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(kr)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const i=this.children[t];i.parent=null,i.dispatchEvent(kr)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const m=this.children[a].getObjectByProperty(t,i);if(m!==void 0)return m}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,t,po),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,gt,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++){const u=i[a];(u.matrixWorldAutoUpdate===!0||t===!0)&&u.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,m=l.length;u<m;u++){const g=l[u];g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",a={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON()));function u(g,v){return g[v.uuid]===void 0&&(g[v.uuid]=v.toJSON(t)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const g=this.geometry.parameters;if(g!==void 0&&g.shapes!==void 0){const v=g.shapes;if(Array.isArray(v))for(let M=0,E=v.length;M<E;M++){const A=v[M];u(t.shapes,A)}else u(t.shapes,v)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const g=[];for(let v=0,M=this.material.length;v<M;v++)g.push(u(t.materials,this.material[v]));l.material=g}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let g=0;g<this.children.length;g++)l.children.push(this.children[g].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let g=0;g<this.animations.length;g++){const v=this.animations[g];l.animations.push(u(t.animations,v))}}if(i){const g=m(t.geometries),v=m(t.materials),M=m(t.textures),E=m(t.images),A=m(t.shapes),o=m(t.skeletons),e=m(t.animations),n=m(t.nodes);g.length>0&&(a.geometries=g),v.length>0&&(a.materials=v),M.length>0&&(a.textures=M),E.length>0&&(a.images=E),A.length>0&&(a.shapes=A),o.length>0&&(a.skeletons=o),e.length>0&&(a.animations=e),n.length>0&&(a.nodes=n)}return a.object=l,a;function m(g){const v=[];for(const M in g){const E=g[M];delete E.metadata,v.push(E)}return v}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let a=0;a<t.children.length;a++){const l=t.children[a];this.add(l.clone())}return this}}At.DefaultUp=new Z(0,1,0),At.DefaultMatrixAutoUpdate=!0,At.DefaultMatrixWorldAutoUpdate=!0;const Yt=new Z,ar=new Z,gh=new Z,di=new Z,Vr=new Z,mo=new Z,id=new Z,Ss=new Z,Xi=new Z,go=new Z;class Un{constructor(t=new Z,i=new Z,a=new Z){this.a=t,this.b=i,this.c=a}static getNormal(t,i,a,l){l.subVectors(a,i),Yt.subVectors(t,i),l.cross(Yt);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,a,l,u){Yt.subVectors(l,i),ar.subVectors(a,i),gh.subVectors(t,i);const m=Yt.dot(Yt),g=Yt.dot(ar),v=Yt.dot(gh),M=ar.dot(ar),E=ar.dot(gh),A=m*M-g*g;if(A===0)return u.set(-2,-1,-1);const o=1/A,e=(M*v-g*E)*o,n=(m*E-g*v)*o;return u.set(1-e-n,n,e)}static containsPoint(t,i,a,l){return this.getBarycoord(t,i,a,l,di),di.x>=0&&di.y>=0&&di.x+di.y<=1}static getUV(t,i,a,l,u,m,g,v){return this.getBarycoord(t,i,a,l,di),v.set(0,0),v.addScaledVector(u,di.x),v.addScaledVector(m,di.y),v.addScaledVector(g,di.z),v}static isFrontFacing(t,i,a,l){return Yt.subVectors(a,i),ar.subVectors(t,i),Yt.cross(ar).dot(l)<0}set(t,i,a){return this.a.copy(t),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(t,i,a,l){return this.a.copy(t[i]),this.b.copy(t[a]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,a,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yt.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Yt.cross(ar).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Un.getBarycoord(t,this.a,this.b,this.c,i)}getUV(t,i,a,l,u){return Un.getUV(t,this.a,this.b,this.c,i,a,l,u)}containsPoint(t){return Un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const a=this.a,l=this.b,u=this.c;let m,g;Vr.subVectors(l,a),mo.subVectors(u,a),Ss.subVectors(t,a);const v=Vr.dot(Ss),M=mo.dot(Ss);if(v<=0&&M<=0)return i.copy(a);Xi.subVectors(t,l);const E=Vr.dot(Xi),A=mo.dot(Xi);if(E>=0&&A<=E)return i.copy(l);const o=v*A-E*M;if(o<=0&&v>=0&&E<=0)return m=v/(v-E),i.copy(a).addScaledVector(Vr,m);go.subVectors(t,u);const e=Vr.dot(go),n=mo.dot(go);if(n>=0&&e<=n)return i.copy(u);const r=e*M-v*n;if(r<=0&&M>=0&&n<=0)return g=M/(M-n),i.copy(a).addScaledVector(mo,g);const s=E*n-e*A;if(s<=0&&A-E>=0&&e-n>=0)return id.subVectors(u,l),g=(A-E)/(A-E+(e-n)),i.copy(l).addScaledVector(id,g);const c=1/(s+r+o);return m=r*c,g=o*c,i.copy(a).addScaledVector(Vr,m).addScaledVector(mo,g)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ig=0;class Nn extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ig++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=ta,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Zl,this.blendDst=Jl,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dc,this.stencilZFail=Dc,this.stencilZPass=Dc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const a=t[i];if(a===void 0){console.warn("THREE.Material: '"+i+"' parameter is undefined.");continue}const l=this[i];if(l===void 0){console.warn("THREE."+this.type+": '"+i+"' is not a property of this material.");continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const a={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(a.blending=this.blending),this.side!==Ln&&(a.side=this.side),this.vertexColors&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=this.transparent),a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.stencilWrite=this.stencilWrite,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(a.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(a.wireframe=this.wireframe),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=this.flatShading),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),JSON.stringify(this.userData)!=="{}"&&(a.userData=this.userData);function l(u){const m=[];for(const g in u){const v=u[g];delete v.metadata,m.push(v)}return m}if(i){const u=l(t.textures),m=l(t.images);u.length>0&&(a.textures=u),m.length>0&&(a.images=m)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let u=0;u!==l;++u)a[u]=i[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hr extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new Z,Hc=new Ue;class Bt{constructor(t,i,a){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=a===!0,this.usage=Uc,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,i,a){t*=this.itemSize,a*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[a+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Hc.fromBufferAttribute(this,i),Hc.applyMatrix3(t),this.setXY(i,Hc.x,Hc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix3(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let i=0,a=this.count;i<a;i++)cn.fromBufferAttribute(this,i),cn.applyMatrix4(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)cn.fromBufferAttribute(this,i),cn.applyNormalMatrix(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)cn.fromBufferAttribute(this,i),cn.transformDirection(t),this.setXYZ(i,cn.x,cn.y,cn.z);return this}set(t,i=0){return this.array.set(t,i),this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Or(i,this.array)),i}setX(t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Or(i,this.array)),i}setY(t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Or(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Or(i,this.array)),i}setW(t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,a){return t*=this.itemSize,this.normalized&&(i=Dt(i,this.array),a=Dt(a,this.array)),this.array[t+0]=i,this.array[t+1]=a,this}setXYZ(t,i,a,l){return t*=this.itemSize,this.normalized&&(i=Dt(i,this.array),a=Dt(a,this.array),l=Dt(l,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this}setXYZW(t,i,a,l,u){return t*=this.itemSize,this.normalized&&(i=Dt(i,this.array),a=Dt(a,this.array),l=Dt(l,this.array),u=Dt(u,this.array)),this.array[t+0]=i,this.array[t+1]=a,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Uc&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class vf extends Bt{constructor(t,i,a){super(new Int8Array(t),i,a)}}class It extends Bt{constructor(t,i,a){super(new Uint8Array(t),i,a)}}class qi extends Bt{constructor(t,i,a){super(new Uint8ClampedArray(t),i,a)}}class Wr extends Bt{constructor(t,i,a){super(new Int16Array(t),i,a)}}class Wc extends Bt{constructor(t,i,a){super(new Uint16Array(t),i,a)}}class Xr extends Bt{constructor(t,i,a){super(new Int32Array(t),i,a)}}class bs extends Bt{constructor(t,i,a){super(new Uint32Array(t),i,a)}}class _o extends Bt{constructor(t,i,a){super(new Uint16Array(t),i,a),this.isFloat16BufferAttribute=!0}}class nt extends Bt{constructor(t,i,a){super(new Float32Array(t),i,a)}}class rd extends Bt{constructor(t,i,a){super(new Float64Array(t),i,a)}}let sd=0;const ni=new ot,xo=new At,pn=new Z,fi=new vi,un=new vi,mn=new Z;class ct extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xf(t)?bs:Wc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,a=0){this.groups.push({start:t,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new Kn().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,i,a){return ni.makeTranslation(t,i,a),this.applyMatrix4(ni),this}scale(t,i,a){return ni.makeScale(t,i,a),this.applyMatrix4(ni),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pn).negate(),this.translate(pn.x,pn.y,pn.z),this}setFromPoints(t){const i=[];for(let a=0,l=t.length;a<l;a++){const u=t[a];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new nt(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let a=0,l=i.length;a<l;a++){const u=i[a];fi.setFromBufferAttribute(u),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(t){const a=this.boundingSphere.center;if(fi.setFromBufferAttribute(t),i)for(let u=0,m=i.length;u<m;u++){const g=i[u];un.setFromBufferAttribute(g),this.morphTargetsRelative?(mn.addVectors(fi.min,un.min),fi.expandByPoint(mn),mn.addVectors(fi.max,un.max),fi.expandByPoint(mn)):(fi.expandByPoint(un.min),fi.expandByPoint(un.max))}fi.getCenter(a);let l=0;for(let u=0,m=t.count;u<m;u++)mn.fromBufferAttribute(t,u),l=Math.max(l,a.distanceToSquared(mn));if(i)for(let u=0,m=i.length;u<m;u++){const g=i[u],v=this.morphTargetsRelative;for(let M=0,E=g.count;M<E;M++)mn.fromBufferAttribute(g,M),v&&(pn.fromBufferAttribute(t,M),mn.add(pn)),l=Math.max(l,a.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.array,l=i.position.array,u=i.normal.array,m=i.uv.array,g=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*g),4));const v=this.getAttribute("tangent").array,M=[],E=[];for(let T=0;T<g;T++)M[T]=new Z,E[T]=new Z;const A=new Z,o=new Z,e=new Z,n=new Ue,r=new Ue,s=new Ue,c=new Z,h=new Z;function d(T,C,R){A.fromArray(l,T*3),o.fromArray(l,C*3),e.fromArray(l,R*3),n.fromArray(m,T*2),r.fromArray(m,C*2),s.fromArray(m,R*2),o.sub(A),e.sub(A),r.sub(n),s.sub(n);const w=1/(r.x*s.y-s.x*r.y);isFinite(w)&&(c.copy(o).multiplyScalar(s.y).addScaledVector(e,-r.y).multiplyScalar(w),h.copy(e).multiplyScalar(r.x).addScaledVector(o,-s.x).multiplyScalar(w),M[T].add(c),M[C].add(c),M[R].add(c),E[T].add(h),E[C].add(h),E[R].add(h))}let p=this.groups;p.length===0&&(p=[{start:0,count:a.length}]);for(let T=0,C=p.length;T<C;++T){const R=p[T],w=R.start,P=R.count;for(let L=w,I=w+P;L<I;L+=3)d(a[L+0],a[L+1],a[L+2])}const _=new Z,y=new Z,S=new Z,x=new Z;function b(T){S.fromArray(u,T*3),x.copy(S);const C=M[T];_.copy(C),_.sub(S.multiplyScalar(S.dot(C))).normalize(),y.crossVectors(x,C);const w=y.dot(E[T])<0?-1:1;v[T*4]=_.x,v[T*4+1]=_.y,v[T*4+2]=_.z,v[T*4+3]=w}for(let T=0,C=p.length;T<C;++T){const R=p[T],w=R.start,P=R.count;for(let L=w,I=w+P;L<I;L+=3)b(a[L+0]),b(a[L+1]),b(a[L+2])}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Bt(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let o=0,e=a.count;o<e;o++)a.setXYZ(o,0,0,0);const l=new Z,u=new Z,m=new Z,g=new Z,v=new Z,M=new Z,E=new Z,A=new Z;if(t)for(let o=0,e=t.count;o<e;o+=3){const n=t.getX(o+0),r=t.getX(o+1),s=t.getX(o+2);l.fromBufferAttribute(i,n),u.fromBufferAttribute(i,r),m.fromBufferAttribute(i,s),E.subVectors(m,u),A.subVectors(l,u),E.cross(A),g.fromBufferAttribute(a,n),v.fromBufferAttribute(a,r),M.fromBufferAttribute(a,s),g.add(E),v.add(E),M.add(E),a.setXYZ(n,g.x,g.y,g.z),a.setXYZ(r,v.x,v.y,v.z),a.setXYZ(s,M.x,M.y,M.z)}else for(let o=0,e=i.count;o<e;o+=3)l.fromBufferAttribute(i,o+0),u.fromBufferAttribute(i,o+1),m.fromBufferAttribute(i,o+2),E.subVectors(m,u),A.subVectors(l,u),E.cross(A),a.setXYZ(o+0,E.x,E.y,E.z),a.setXYZ(o+1,E.x,E.y,E.z),a.setXYZ(o+2,E.x,E.y,E.z);this.normalizeNormals(),a.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let i=0,a=t.count;i<a;i++)mn.fromBufferAttribute(t,i),mn.normalize(),t.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function t(g,v){const M=g.array,E=g.itemSize,A=g.normalized,o=new M.constructor(v.length*E);let e=0,n=0;for(let r=0,s=v.length;r<s;r++){g.isInterleavedBufferAttribute?e=v[r]*g.data.stride+g.offset:e=v[r]*E;for(let c=0;c<E;c++)o[n++]=M[e++]}return new Bt(o,E,A)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ct,a=this.index.array,l=this.attributes;for(const g in l){const v=l[g],M=t(v,a);i.setAttribute(g,M)}const u=this.morphAttributes;for(const g in u){const v=[],M=u[g];for(let E=0,A=M.length;E<A;E++){const o=M[E],e=t(o,a);v.push(e)}i.morphAttributes[g]=v}i.morphTargetsRelative=this.morphTargetsRelative;const m=this.groups;for(let g=0,v=m.length;g<v;g++){const M=m[g];i.addGroup(M.start,M.count,M.materialIndex)}return i}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const M in v)v[M]!==void 0&&(t[M]=v[M]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const v in a){const M=a[v];t.data.attributes[v]=M.toJSON(t.data)}const l={};let u=!1;for(const v in this.morphAttributes){const M=this.morphAttributes[v],E=[];for(let A=0,o=M.length;A<o;A++){const e=M[A];E.push(e.toJSON(t.data))}E.length>0&&(l[v]=E,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const m=this.groups;m.length>0&&(t.data.groups=JSON.parse(JSON.stringify(m)));const g=this.boundingSphere;return g!==null&&(t.data.boundingSphere={center:g.center.toArray(),radius:g.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(i));const l=t.attributes;for(const M in l){const E=l[M];this.setAttribute(M,E.clone(i))}const u=t.morphAttributes;for(const M in u){const E=[],A=u[M];for(let o=0,e=A.length;o<e;o++)E.push(A[o].clone(i));this.morphAttributes[M]=E}this.morphTargetsRelative=t.morphTargetsRelative;const m=t.groups;for(let M=0,E=m.length;M<E;M++){const A=m[M];this.addGroup(A.start,A.count,A.materialIndex)}const g=t.boundingBox;g!==null&&(this.boundingBox=g.clone());const v=t.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xc=new ot,Es=new Si,Ze=new ys,Zt=new Z,Hn=new Z,Fn=new Z,ad=new Z,On=new Z,ya=new Z,_h=new Z,Jt=new Z,va=new Z,Ft=new Ue,xh=new Ue,yh=new Ue,od=new Z,vh=new Z;class gn extends At{constructor(t=new ct,i=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,m=l.length;u<m;u++){const g=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=u}}}}raycast(t,i){const a=this.geometry,l=this.material,u=this.matrixWorld;if(l===void 0||(a.boundingSphere===null&&a.computeBoundingSphere(),Ze.copy(a.boundingSphere),Ze.applyMatrix4(u),t.ray.intersectsSphere(Ze)===!1)||(Xc.copy(u).invert(),Es.copy(t.ray).applyMatrix4(Xc),a.boundingBox!==null&&Es.intersectsBox(a.boundingBox)===!1))return;let m;const g=a.index,v=a.attributes.position,M=a.morphAttributes.position,E=a.morphTargetsRelative,A=a.attributes.uv,o=a.attributes.uv2,e=a.groups,n=a.drawRange;if(g!==null)if(Array.isArray(l))for(let r=0,s=e.length;r<s;r++){const c=e[r],h=l[c.materialIndex],d=Math.max(c.start,n.start),p=Math.min(g.count,Math.min(c.start+c.count,n.start+n.count));for(let _=d,y=p;_<y;_+=3){const S=g.getX(_),x=g.getX(_+1),b=g.getX(_+2);m=yo(this,h,t,Es,v,M,E,A,o,S,x,b),m&&(m.faceIndex=Math.floor(_/3),m.face.materialIndex=c.materialIndex,i.push(m))}}else{const r=Math.max(0,n.start),s=Math.min(g.count,n.start+n.count);for(let c=r,h=s;c<h;c+=3){const d=g.getX(c),p=g.getX(c+1),_=g.getX(c+2);m=yo(this,l,t,Es,v,M,E,A,o,d,p,_),m&&(m.faceIndex=Math.floor(c/3),i.push(m))}}else if(v!==void 0)if(Array.isArray(l))for(let r=0,s=e.length;r<s;r++){const c=e[r],h=l[c.materialIndex],d=Math.max(c.start,n.start),p=Math.min(v.count,Math.min(c.start+c.count,n.start+n.count));for(let _=d,y=p;_<y;_+=3){const S=_,x=_+1,b=_+2;m=yo(this,h,t,Es,v,M,E,A,o,S,x,b),m&&(m.faceIndex=Math.floor(_/3),m.face.materialIndex=c.materialIndex,i.push(m))}}else{const r=Math.max(0,n.start),s=Math.min(v.count,n.start+n.count);for(let c=r,h=s;c<h;c+=3){const d=c,p=c+1,_=c+2;m=yo(this,l,t,Es,v,M,E,A,o,d,p,_),m&&(m.faceIndex=Math.floor(c/3),i.push(m))}}}}function rg(f,t,i,a,l,u,m,g){let v;if(t.side===nn?v=a.intersectTriangle(m,u,l,!0,g):v=a.intersectTriangle(l,u,m,t.side!==Wt,g),v===null)return null;vh.copy(g),vh.applyMatrix4(f.matrixWorld);const M=i.ray.origin.distanceTo(vh);return M<i.near||M>i.far?null:{distance:M,point:vh.clone(),object:f}}function yo(f,t,i,a,l,u,m,g,v,M,E,A){Zt.fromBufferAttribute(l,M),Hn.fromBufferAttribute(l,E),Fn.fromBufferAttribute(l,A);const o=f.morphTargetInfluences;if(u&&o){_h.set(0,0,0),Jt.set(0,0,0),va.set(0,0,0);for(let n=0,r=u.length;n<r;n++){const s=o[n],c=u[n];s!==0&&(ad.fromBufferAttribute(c,M),On.fromBufferAttribute(c,E),ya.fromBufferAttribute(c,A),m?(_h.addScaledVector(ad,s),Jt.addScaledVector(On,s),va.addScaledVector(ya,s)):(_h.addScaledVector(ad.sub(Zt),s),Jt.addScaledVector(On.sub(Hn),s),va.addScaledVector(ya.sub(Fn),s)))}Zt.add(_h),Hn.add(Jt),Fn.add(va)}f.isSkinnedMesh&&(f.boneTransform(M,Zt),f.boneTransform(E,Hn),f.boneTransform(A,Fn));const e=rg(f,t,i,a,Zt,Hn,Fn,od);if(e){g&&(Ft.fromBufferAttribute(g,M),xh.fromBufferAttribute(g,E),yh.fromBufferAttribute(g,A),e.uv=Un.getUV(od,Zt,Hn,Fn,Ft,xh,yh,new Ue)),v&&(Ft.fromBufferAttribute(v,M),xh.fromBufferAttribute(v,E),yh.fromBufferAttribute(v,A),e.uv2=Un.getUV(od,Zt,Hn,Fn,Ft,xh,yh,new Ue));const n={a:M,b:E,c:A,normal:new Z,materialIndex:0};Un.getNormal(Zt,Hn,Fn,n.normal),e.face=n}return e}class Ts extends ct{constructor(t=1,i=1,a=1,l=1,u=1,m=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:a,widthSegments:l,heightSegments:u,depthSegments:m};const g=this;l=Math.floor(l),u=Math.floor(u),m=Math.floor(m);const v=[],M=[],E=[],A=[];let o=0,e=0;n("z","y","x",-1,-1,a,i,t,m,u,0),n("z","y","x",1,-1,a,i,-t,m,u,1),n("x","z","y",1,1,t,a,i,l,m,2),n("x","z","y",1,-1,t,a,-i,l,m,3),n("x","y","z",1,-1,t,i,a,l,u,4),n("x","y","z",-1,-1,t,i,-a,l,u,5),this.setIndex(v),this.setAttribute("position",new nt(M,3)),this.setAttribute("normal",new nt(E,3)),this.setAttribute("uv",new nt(A,2));function n(r,s,c,h,d,p,_,y,S,x,b){const T=p/S,C=_/x,R=p/2,w=_/2,P=y/2,L=S+1,I=x+1;let O=0,F=0;const N=new Z;for(let k=0;k<I;k++){const D=k*C-w;for(let B=0;B<L;B++){const Q=B*T-R;N[r]=Q*h,N[s]=D*d,N[c]=P,M.push(N.x,N.y,N.z),N[r]=0,N[s]=0,N[c]=y>0?1:-1,E.push(N.x,N.y,N.z),A.push(B/S),A.push(1-k/x),O+=1}}for(let k=0;k<x;k++)for(let D=0;D<S;D++){const B=o+D+L*k,Q=o+D+L*(k+1),ge=o+(D+1)+L*(k+1),re=o+(D+1)+L*k;v.push(B,Q,re),v.push(Q,ge,re),F+=6}g.addGroup(e,F,b),e+=F,o+=O}}static fromJSON(t){return new Ts(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Qe(f){const t={};for(const i in f){t[i]={};for(const a in f[i]){const l=f[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?t[i][a]=l.clone():Array.isArray(l)?t[i][a]=l.slice():t[i][a]=l}}return t}function Wn(f){const t={};for(let i=0;i<f.length;i++){const a=Qe(f[i]);for(const l in a)t[l]=a[l]}return t}function sg(f){const t=[];for(let i=0;i<f.length;i++)t.push(f[i].clone());return t}const pi={clone:Qe,merge:Wn};var cd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vo=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cd,this.fragmentShader=vo,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qe(t.uniforms),this.uniformsGroups=sg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const m=this.uniforms[l].value;m&&m.isTexture?i.uniforms[l]={type:"t",value:m.toJSON(t).uuid}:m&&m.isColor?i.uniforms[l]={type:"c",value:m.getHex()}:m&&m.isVector2?i.uniforms[l]={type:"v2",value:m.toArray()}:m&&m.isVector3?i.uniforms[l]={type:"v3",value:m.toArray()}:m&&m.isVector4?i.uniforms[l]={type:"v4",value:m.toArray()}:m&&m.isMatrix3?i.uniforms[l]={type:"m3",value:m.toArray()}:m&&m.isMatrix4?i.uniforms[l]={type:"m4",value:m.toArray()}:i.uniforms[l]={value:m}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class ws extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(-i[8],-i[9],-i[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rt extends ws{constructor(t=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Fc*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ua*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fc*2*Math.atan(Math.tan(ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,i,a,l,u,m){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=u,this.view.height=m,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(ua*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,u=-.5*l;const m=this.view;if(this.view!==null&&this.view.enabled){const v=m.fullWidth,M=m.fullHeight;u+=m.offsetX*l/v,i-=m.offsetY*a/M,l*=m.width/v,a*=m.height/M}const g=this.filmOffset;g!==0&&(u+=t*g/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-a,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const pt=90,Ma=1;class As extends At{constructor(t,i,a){super(),this.type="CubeCamera",this.renderTarget=a;const l=new Rt(pt,Ma,t,i);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new Z(1,0,0)),this.add(l);const u=new Rt(pt,Ma,t,i);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new Z(-1,0,0)),this.add(u);const m=new Rt(pt,Ma,t,i);m.layers=this.layers,m.up.set(0,0,1),m.lookAt(new Z(0,1,0)),this.add(m);const g=new Rt(pt,Ma,t,i);g.layers=this.layers,g.up.set(0,0,-1),g.lookAt(new Z(0,-1,0)),this.add(g);const v=new Rt(pt,Ma,t,i);v.layers=this.layers,v.up.set(0,-1,0),v.lookAt(new Z(0,0,1)),this.add(v);const M=new Rt(pt,Ma,t,i);M.layers=this.layers,M.up.set(0,-1,0),M.lookAt(new Z(0,0,-1)),this.add(M)}update(t,i){this.parent===null&&this.updateMatrixWorld();const a=this.renderTarget,[l,u,m,g,v,M]=this.children,E=t.getRenderTarget(),A=t.toneMapping,o=t.xr.enabled;t.toneMapping=Di,t.xr.enabled=!1;const e=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0),t.render(i,l),t.setRenderTarget(a,1),t.render(i,u),t.setRenderTarget(a,2),t.render(i,m),t.setRenderTarget(a,3),t.render(i,g),t.setRenderTarget(a,4),t.render(i,v),a.texture.generateMipmaps=e,t.setRenderTarget(a,5),t.render(i,M),t.setRenderTarget(E),t.toneMapping=A,t.xr.enabled=o,a.texture.needsPMREMUpdate=!0}}class Rs extends qt{constructor(t,i,a,l,u,m,g,v,M,E){t=t!==void 0?t:[],i=i!==void 0?i:Ar,super(t,i,a,l,u,m,g,v,M,E),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ld extends In{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},l=[a,a,a,a,a,a];this.texture=new Rs(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:kt}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.encoding=i.encoding,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ts(5,5,5),u=new jt({name:"CubemapFromEquirect",uniforms:Qe(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:nn,blending:vn});u.uniforms.tEquirect.value=i;const m=new gn(l,u),g=i.minFilter;return i.minFilter===Lr&&(i.minFilter=kt),new As(1,10,this).update(t,m),i.minFilter=g,m.geometry.dispose(),m.material.dispose(),this}clear(t,i,a,l){const u=t.getRenderTarget();for(let m=0;m<6;m++)t.setRenderTarget(this,m),t.clear(i,a,l);t.setRenderTarget(u)}}const Cs=new Z,Mo=new Z,So=new Kn;class or{constructor(t=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,a,l){return this.normal.set(t,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,a){const l=Cs.subVectors(a,i).cross(Mo.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,i){const a=t.delta(Cs),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(a).multiplyScalar(u).add(t.start)}intersectsLine(t){const i=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return i<0&&a>0||a<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const a=i||So.getNormalMatrix(t),l=this.coplanarPoint(Cs).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new ys,Sa=new Z;class ba{constructor(t=new or,i=new or,a=new or,l=new or,u=new or,m=new or){this.planes=[t,i,a,l,u,m]}set(t,i,a,l,u,m){const g=this.planes;return g[0].copy(t),g[1].copy(i),g[2].copy(a),g[3].copy(l),g[4].copy(u),g[5].copy(m),this}copy(t){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t){const i=this.planes,a=t.elements,l=a[0],u=a[1],m=a[2],g=a[3],v=a[4],M=a[5],E=a[6],A=a[7],o=a[8],e=a[9],n=a[10],r=a[11],s=a[12],c=a[13],h=a[14],d=a[15];return i[0].setComponents(g-l,A-v,r-o,d-s).normalize(),i[1].setComponents(g+l,A+v,r+o,d+s).normalize(),i[2].setComponents(g+u,A+M,r+e,d+c).normalize(),i[3].setComponents(g-u,A-M,r-e,d-c).normalize(),i[4].setComponents(g-m,A-E,r-n,d-h).normalize(),i[5].setComponents(g+m,A+E,r+n,d+h).normalize(),this}intersectsObject(t){const i=t.geometry;return i.boundingSphere===null&&i.computeBoundingSphere(),qr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(qr)}intersectsSprite(t){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(t.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(t){const i=this.planes,a=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(a)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Sa.x=l.normal.x>0?t.max.x:t.min.x,Sa.y=l.normal.y>0?t.max.y:t.min.y,Sa.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Sa)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qc(){let f=null,t=!1,i=null,a=null;function l(u,m){i(u,m),a=f.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(a=f.requestAnimationFrame(l),t=!0)},stop:function(){f.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){f=u}}}function Mf(f,t){const i=t.isWebGL2,a=new WeakMap;function l(M,E){const A=M.array,o=M.usage,e=f.createBuffer();f.bindBuffer(E,e),f.bufferData(E,A,o),M.onUploadCallback();let n;if(A instanceof Float32Array)n=f.FLOAT;else if(A instanceof Uint16Array)if(M.isFloat16BufferAttribute)if(i)n=f.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else n=f.UNSIGNED_SHORT;else if(A instanceof Int16Array)n=f.SHORT;else if(A instanceof Uint32Array)n=f.UNSIGNED_INT;else if(A instanceof Int32Array)n=f.INT;else if(A instanceof Int8Array)n=f.BYTE;else if(A instanceof Uint8Array)n=f.UNSIGNED_BYTE;else if(A instanceof Uint8ClampedArray)n=f.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+A);return{buffer:e,type:n,bytesPerElement:A.BYTES_PER_ELEMENT,version:M.version}}function u(M,E,A){const o=E.array,e=E.updateRange;f.bindBuffer(A,M),e.count===-1?f.bufferSubData(A,0,o):(i?f.bufferSubData(A,e.offset*o.BYTES_PER_ELEMENT,o,e.offset,e.count):f.bufferSubData(A,e.offset*o.BYTES_PER_ELEMENT,o.subarray(e.offset,e.offset+e.count)),e.count=-1)}function m(M){return M.isInterleavedBufferAttribute&&(M=M.data),a.get(M)}function g(M){M.isInterleavedBufferAttribute&&(M=M.data);const E=a.get(M);E&&(f.deleteBuffer(E.buffer),a.delete(M))}function v(M,E){if(M.isGLBufferAttribute){const o=a.get(M);(!o||o.version<M.version)&&a.set(M,{buffer:M.buffer,type:M.type,bytesPerElement:M.elementSize,version:M.version});return}M.isInterleavedBufferAttribute&&(M=M.data);const A=a.get(M);A===void 0?a.set(M,l(M,E)):A.version<M.version&&(u(A.buffer,M,E),A.version=M.version)}return{get:m,remove:g,update:v}}class Ea extends ct{constructor(t=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:a,heightSegments:l};const u=t/2,m=i/2,g=Math.floor(a),v=Math.floor(l),M=g+1,E=v+1,A=t/g,o=i/v,e=[],n=[],r=[],s=[];for(let c=0;c<E;c++){const h=c*o-m;for(let d=0;d<M;d++){const p=d*A-u;n.push(p,-h,0),r.push(0,0,1),s.push(d/g),s.push(1-c/v)}}for(let c=0;c<v;c++)for(let h=0;h<g;h++){const d=h+M*c,p=h+M*(c+1),_=h+1+M*(c+1),y=h+1+M*c;e.push(d,p,y),e.push(p,_,y)}this.setIndex(e),this.setAttribute("position",new nt(n,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(s,2))}static fromJSON(t){return new Ea(t.width,t.height,t.widthSegments,t.heightSegments)}}var Sf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Mh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,An=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ag=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ta="vec3 transformed = vec3( position );",bo=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xn=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
		float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
		float x2 = x * x;
		float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
		return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,og=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,	0.0556434,
		-1.5371385,	1.8760108, -0.2040259,
		-0.4985314,	0.0415560,	1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cr=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rn=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Eo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,To=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ug=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ls=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wa="gl_FragColor = linearToOutputTexel( gl_FragColor );",Th=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_g=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,bg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Eg=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Cg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Lg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(		0, 1,		0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pg=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ig=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ug=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ng=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fg=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Og=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qg=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Jg=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,e_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,t_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,n_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,i_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,r_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,a_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,h_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
							f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
							texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
							f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,p_=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,m_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,g_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,__=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,x_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,y_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,b_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(	1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,	1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,	1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,T_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,w_=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,A_=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,R_=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,C_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,L_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,P_=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,I_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mt={alphamap_fragment:Sf,alphamap_pars_fragment:Mh,alphatest_fragment:Sh,alphatest_pars_fragment:An,aomap_fragment:ag,aomap_pars_fragment:bh,begin_vertex:Ta,beginnormal_vertex:bo,bsdfs:Xn,iridescence_fragment:og,bumpmap_pars_fragment:bf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:cg,clipping_planes_pars_vertex:lg,clipping_planes_vertex:cr,color_fragment:Eh,color_pars_fragment:Rn,color_pars_vertex:Eo,color_vertex:To,common:Tf,cube_uv_reflection_fragment:Yc,defaultnormal_vertex:wf,displacementmap_pars_vertex:hd,displacementmap_vertex:hg,emissivemap_fragment:ug,emissivemap_pars_fragment:Ls,encodings_fragment:wa,encodings_pars_fragment:Th,envmap_fragment:wh,envmap_common_pars_fragment:Af,envmap_pars_fragment:dg,envmap_pars_vertex:Zc,envmap_physical_pars_fragment:Eg,envmap_vertex:fg,fog_vertex:pg,fog_pars_vertex:mg,fog_fragment:gg,fog_pars_fragment:_g,gradientmap_pars_fragment:xg,lightmap_fragment:yg,lightmap_pars_fragment:vg,lights_lambert_fragment:Mg,lights_lambert_pars_fragment:Sg,lights_pars_begin:bg,lights_toon_fragment:Tg,lights_toon_pars_fragment:wg,lights_phong_fragment:Ag,lights_phong_pars_fragment:Rg,lights_physical_fragment:Cg,lights_physical_pars_fragment:Lg,lights_fragment_begin:Pg,lights_fragment_maps:Ig,lights_fragment_end:Dg,logdepthbuf_fragment:Ug,logdepthbuf_pars_fragment:Ng,logdepthbuf_pars_vertex:Fg,logdepthbuf_vertex:Og,map_fragment:Bg,map_pars_fragment:zg,map_particle_fragment:Gg,map_particle_pars_fragment:kg,metalnessmap_fragment:Vg,metalnessmap_pars_fragment:Hg,morphcolor_vertex:Wg,morphnormal_vertex:Xg,morphtarget_pars_vertex:qg,morphtarget_vertex:Yg,normal_fragment_begin:Zg,normal_fragment_maps:Jg,normal_pars_fragment:$g,normal_pars_vertex:Kg,normal_vertex:Qg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:e_,clearcoat_normal_fragment_maps:t_,clearcoat_pars_fragment:n_,iridescence_pars_fragment:i_,output_fragment:r_,packing:s_,premultiplied_alpha_fragment:a_,project_vertex:o_,dithering_fragment:c_,dithering_pars_fragment:l_,roughnessmap_fragment:h_,roughnessmap_pars_fragment:u_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:f_,shadowmap_vertex:p_,shadowmask_pars_fragment:m_,skinbase_vertex:g_,skinning_pars_vertex:__,skinning_vertex:x_,skinnormal_vertex:y_,specularmap_fragment:v_,specularmap_pars_fragment:M_,tonemapping_fragment:S_,tonemapping_pars_fragment:b_,transmission_fragment:E_,transmission_pars_fragment:T_,uv_pars_fragment:w_,uv_pars_vertex:A_,uv_vertex:R_,uv2_pars_fragment:C_,uv2_pars_vertex:L_,uv2_vertex:P_,worldpos_vertex:I_,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},We={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Kn},uv2Transform:{value:new Kn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kn}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Kn}}},lr={basic:{uniforms:Wn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Wn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new ue(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Wn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Wn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Wn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new ue(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Wn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Wn([We.points,We.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Wn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Wn([We.common,We.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Wn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Wn([We.sprite,We.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kn},t2D:{value:null}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Wn([We.common,We.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Wn([We.lights,We.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};lr.physical={uniforms:Wn([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};function cy(f,t,i,a,l,u,m){const g=new ue(0);let v=u===!0?0:1,M,E,A=null,o=0,e=null;function n(s,c){let h=!1,d=c.isScene===!0?c.background:null;d&&d.isTexture&&(d=(c.backgroundBlurriness>0?i:t).get(d));const p=f.xr,_=p.getSession&&p.getSession();_&&_.environmentBlendMode==="additive"&&(d=null),d===null?r(g,v):d&&d.isColor&&(r(d,1),h=!0),(f.autoClear||h)&&f.clear(f.autoClearColor,f.autoClearDepth,f.autoClearStencil),d&&(d.isCubeTexture||d.mapping===tr)?(E===void 0&&(E=new gn(new Ts(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Qe(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),E.geometry.deleteAttribute("normal"),E.geometry.deleteAttribute("uv"),E.onBeforeRender=function(y,S,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(E.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(E)),E.material.uniforms.envMap.value=d,E.material.uniforms.flipEnvMap.value=d.isCubeTexture&&d.isRenderTargetTexture===!1?-1:1,E.material.uniforms.backgroundBlurriness.value=c.backgroundBlurriness,(A!==d||o!==d.version||e!==f.toneMapping)&&(E.material.needsUpdate=!0,A=d,o=d.version,e=f.toneMapping),E.layers.enableAll(),s.unshift(E,E.geometry,E.material,0,0,null)):d&&d.isTexture&&(M===void 0&&(M=new gn(new Ea(2,2),new jt({name:"BackgroundMaterial",uniforms:Qe(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),M.geometry.deleteAttribute("normal"),Object.defineProperty(M.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(M)),M.material.uniforms.t2D.value=d,d.matrixAutoUpdate===!0&&d.updateMatrix(),M.material.uniforms.uvTransform.value.copy(d.matrix),(A!==d||o!==d.version||e!==f.toneMapping)&&(M.material.needsUpdate=!0,A=d,o=d.version,e=f.toneMapping),M.layers.enableAll(),s.unshift(M,M.geometry,M.material,0,0,null))}function r(s,c){a.buffers.color.setClear(s.r,s.g,s.b,c,m)}return{getClearColor:function(){return g},setClearColor:function(s,c=1){g.set(s),v=c,r(g,v)},getClearAlpha:function(){return v},setClearAlpha:function(s){v=s,r(g,v)},render:n}}function ly(f,t,i,a){const l=f.getParameter(f.MAX_VERTEX_ATTRIBS),u=a.isWebGL2?null:t.get("OES_vertex_array_object"),m=a.isWebGL2||u!==null,g={},v=s(null);let M=v,E=!1;function A(P,L,I,O,F){let N=!1;if(m){const k=r(O,I,L);M!==k&&(M=k,e(M.object)),N=c(P,O,I,F),N&&h(P,O,I,F)}else{const k=L.wireframe===!0;(M.geometry!==O.id||M.program!==I.id||M.wireframe!==k)&&(M.geometry=O.id,M.program=I.id,M.wireframe=k,N=!0)}F!==null&&i.update(F,f.ELEMENT_ARRAY_BUFFER),(N||E)&&(E=!1,x(P,L,I,O),F!==null&&f.bindBuffer(f.ELEMENT_ARRAY_BUFFER,i.get(F).buffer))}function o(){return a.isWebGL2?f.createVertexArray():u.createVertexArrayOES()}function e(P){return a.isWebGL2?f.bindVertexArray(P):u.bindVertexArrayOES(P)}function n(P){return a.isWebGL2?f.deleteVertexArray(P):u.deleteVertexArrayOES(P)}function r(P,L,I){const O=I.wireframe===!0;let F=g[P.id];F===void 0&&(F={},g[P.id]=F);let N=F[L.id];N===void 0&&(N={},F[L.id]=N);let k=N[O];return k===void 0&&(k=s(o()),N[O]=k),k}function s(P){const L=[],I=[],O=[];for(let F=0;F<l;F++)L[F]=0,I[F]=0,O[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:O,object:P,attributes:{},index:null}}function c(P,L,I,O){const F=M.attributes,N=L.attributes;let k=0;const D=I.getAttributes();for(const B in D)if(D[B].location>=0){const ge=F[B];let re=N[B];if(re===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),ge===void 0||ge.attribute!==re||re&&ge.data!==re.data)return!0;k++}return M.attributesNum!==k||M.index!==O}function h(P,L,I,O){const F={},N=L.attributes;let k=0;const D=I.getAttributes();for(const B in D)if(D[B].location>=0){let ge=N[B];ge===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(ge=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(ge=P.instanceColor));const re={};re.attribute=ge,ge&&ge.data&&(re.data=ge.data),F[B]=re,k++}M.attributes=F,M.attributesNum=k,M.index=O}function d(){const P=M.newAttributes;for(let L=0,I=P.length;L<I;L++)P[L]=0}function p(P){_(P,0)}function _(P,L){const I=M.newAttributes,O=M.enabledAttributes,F=M.attributeDivisors;I[P]=1,O[P]===0&&(f.enableVertexAttribArray(P),O[P]=1),F[P]!==L&&((a.isWebGL2?f:t.get("ANGLE_instanced_arrays"))[a.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,L),F[P]=L)}function y(){const P=M.newAttributes,L=M.enabledAttributes;for(let I=0,O=L.length;I<O;I++)L[I]!==P[I]&&(f.disableVertexAttribArray(I),L[I]=0)}function S(P,L,I,O,F,N){a.isWebGL2===!0&&(I===f.INT||I===f.UNSIGNED_INT)?f.vertexAttribIPointer(P,L,I,F,N):f.vertexAttribPointer(P,L,I,O,F,N)}function x(P,L,I,O){if(a.isWebGL2===!1&&(P.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;d();const F=O.attributes,N=I.getAttributes(),k=L.defaultAttributeValues;for(const D in N){const B=N[D];if(B.location>=0){let Q=F[D];if(Q===void 0&&(D==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),D==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const ge=Q.normalized,re=Q.itemSize,W=i.get(Q);if(W===void 0)continue;const he=W.buffer,ye=W.type,_e=W.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ae=Q.data,we=ae.stride,j=Q.offset;if(ae.isInstancedInterleavedBuffer){for(let K=0;K<B.locationSize;K++)_(B.location+K,ae.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let K=0;K<B.locationSize;K++)p(B.location+K);f.bindBuffer(f.ARRAY_BUFFER,he);for(let K=0;K<B.locationSize;K++)S(B.location+K,re/B.locationSize,ye,ge,we*_e,(j+re/B.locationSize*K)*_e)}else{if(Q.isInstancedBufferAttribute){for(let ae=0;ae<B.locationSize;ae++)_(B.location+ae,Q.meshPerAttribute);P.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ae=0;ae<B.locationSize;ae++)p(B.location+ae);f.bindBuffer(f.ARRAY_BUFFER,he);for(let ae=0;ae<B.locationSize;ae++)S(B.location+ae,re/B.locationSize,ye,ge,re*_e,re/B.locationSize*ae*_e)}}else if(k!==void 0){const ge=k[D];if(ge!==void 0)switch(ge.length){case 2:f.vertexAttrib2fv(B.location,ge);break;case 3:f.vertexAttrib3fv(B.location,ge);break;case 4:f.vertexAttrib4fv(B.location,ge);break;default:f.vertexAttrib1fv(B.location,ge)}}}}y()}function b(){R();for(const P in g){const L=g[P];for(const I in L){const O=L[I];for(const F in O)n(O[F].object),delete O[F];delete L[I]}delete g[P]}}function T(P){if(g[P.id]===void 0)return;const L=g[P.id];for(const I in L){const O=L[I];for(const F in O)n(O[F].object),delete O[F];delete L[I]}delete g[P.id]}function C(P){for(const L in g){const I=g[L];if(I[P.id]===void 0)continue;const O=I[P.id];for(const F in O)n(O[F].object),delete O[F];delete I[P.id]}}function R(){w(),E=!0,M!==v&&(M=v,e(M.object))}function w(){v.geometry=null,v.program=null,v.wireframe=!1}return{setup:A,reset:R,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:d,enableAttribute:p,disableUnusedAttributes:y}}function hy(f,t,i,a){const l=a.isWebGL2;let u;function m(M){u=M}function g(M,E){f.drawArrays(u,M,E),i.update(E,u,1)}function v(M,E,A){if(A===0)return;let o,e;if(l)o=f,e="drawArraysInstanced";else if(o=t.get("ANGLE_instanced_arrays"),e="drawArraysInstancedANGLE",o===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}o[e](u,M,E,A),i.update(E,u,A)}this.setMode=m,this.render=g,this.renderInstances=v}function uy(f,t,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");a=f.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(S){if(S==="highp"){if(f.getShaderPrecisionFormat(f.VERTEX_SHADER,f.HIGH_FLOAT).precision>0&&f.getShaderPrecisionFormat(f.FRAGMENT_SHADER,f.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&f.getShaderPrecisionFormat(f.VERTEX_SHADER,f.MEDIUM_FLOAT).precision>0&&f.getShaderPrecisionFormat(f.FRAGMENT_SHADER,f.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const m=typeof WebGL2RenderingContext!="undefined"&&f instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&f instanceof WebGL2ComputeRenderingContext;let g=i.precision!==void 0?i.precision:"highp";const v=u(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const M=m||t.has("WEBGL_draw_buffers"),E=i.logarithmicDepthBuffer===!0,A=f.getParameter(f.MAX_TEXTURE_IMAGE_UNITS),o=f.getParameter(f.MAX_VERTEX_TEXTURE_IMAGE_UNITS),e=f.getParameter(f.MAX_TEXTURE_SIZE),n=f.getParameter(f.MAX_CUBE_MAP_TEXTURE_SIZE),r=f.getParameter(f.MAX_VERTEX_ATTRIBS),s=f.getParameter(f.MAX_VERTEX_UNIFORM_VECTORS),c=f.getParameter(f.MAX_VARYING_VECTORS),h=f.getParameter(f.MAX_FRAGMENT_UNIFORM_VECTORS),d=o>0,p=m||t.has("OES_texture_float"),_=d&&p,y=m?f.getParameter(f.MAX_SAMPLES):0;return{isWebGL2:m,drawBuffers:M,getMaxAnisotropy:l,getMaxPrecision:u,precision:g,logarithmicDepthBuffer:E,maxTextures:A,maxVertexTextures:o,maxTextureSize:e,maxCubemapSize:n,maxAttributes:r,maxVertexUniforms:s,maxVaryings:c,maxFragmentUniforms:h,vertexTextures:d,floatFragmentTextures:p,floatVertexTextures:_,maxSamples:y}}function dy(f){const t=this;let i=null,a=0,l=!1,u=!1;const m=new or,g=new Kn,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(A,o,e){const n=A.length!==0||o||a!==0||l;return l=o,i=E(A,e,0),a=A.length,n},this.beginShadows=function(){u=!0,E(null)},this.endShadows=function(){u=!1,M()},this.setState=function(A,o,e){const n=A.clippingPlanes,r=A.clipIntersection,s=A.clipShadows,c=f.get(A);if(!l||n===null||n.length===0||u&&!s)u?E(null):M();else{const h=u?0:a,d=h*4;let p=c.clippingState||null;v.value=p,p=E(n,o,d,e);for(let _=0;_!==d;++_)p[_]=i[_];c.clippingState=p,this.numIntersection=r?this.numPlanes:0,this.numPlanes+=h}};function M(){v.value!==i&&(v.value=i,v.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function E(A,o,e,n){const r=A!==null?A.length:0;let s=null;if(r!==0){if(s=v.value,n!==!0||s===null){const c=e+r*4,h=o.matrixWorldInverse;g.getNormalMatrix(h),(s===null||s.length<c)&&(s=new Float32Array(c));for(let d=0,p=e;d!==r;++d,p+=4)m.copy(A[d]).applyMatrix4(h,g),m.normal.toArray(s,p),s[p+3]=m.constant}v.value=s,v.needsUpdate=!0}return t.numPlanes=r,t.numIntersection=0,s}}function fy(f){let t=new WeakMap;function i(m,g){return g===ai?m.mapping=Ar:g===yi&&(m.mapping=Ui),m}function a(m){if(m&&m.isTexture&&m.isRenderTargetTexture===!1){const g=m.mapping;if(g===ai||g===yi)if(t.has(m)){const v=t.get(m).texture;return i(v,m.mapping)}else{const v=m.image;if(v&&v.height>0){const M=new ld(v.height/2);return M.fromEquirectangularTexture(f,m),t.set(m,M),m.addEventListener("dispose",l),i(M.texture,m.mapping)}else return null}}return m}function l(m){const g=m.target;g.removeEventListener("dispose",l);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function u(){t=new WeakMap}return{get:a,dispose:u}}class ud extends ws{constructor(t=-1,i=1,a=1,l=-1,u=.1,m=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=a,this.bottom=l,this.near=u,this.far=m,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,a,l,u,m){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=u,this.view.height=m,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=a-t,m=a+t,g=l+i,v=l-i;if(this.view!==null&&this.view.enabled){const M=(this.right-this.left)/this.view.fullWidth/this.zoom,E=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=M*this.view.offsetX,m=u+M*this.view.width,g-=E*this.view.offsetY,v=g-E*this.view.height}this.projectionMatrix.makeOrthographic(u,m,g,v,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Jc=4,D_=[.125,.215,.35,.446,.526,.582],wo=20,Rf=new ud,U_=new ue;let Cf=null;const Ao=(1+Math.sqrt(5))/2,$c=1/Ao,N_=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Ao,$c),new Z(0,Ao,-$c),new Z($c,0,Ao),new Z(-$c,0,Ao),new Z(Ao,$c,0),new Z(-Ao,$c,0)];class Lf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,a=.1,l=100){Cf=this._renderer.getRenderTarget(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,a,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=O_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cf),t.scissorTest=!1,dd(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ar||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cf=this._renderer.getRenderTarget();const a=i||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Yn,format:Zn,encoding:Bi,depthBuffer:!1},l=F_(t,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(t,i,a);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=py(u)),this._blurMaterial=my(u,t,i)}return l}_compileMaterial(t){const i=new gn(this._lodPlanes[0],t);this._renderer.compile(i,Rf)}_sceneToCubeUV(t,i,a,l){const g=new Rt(90,1,i,a),v=[1,-1,1,1,1,1],M=[1,1,1,-1,-1,-1],E=this._renderer,A=E.autoClear,o=E.toneMapping;E.getClearColor(U_),E.toneMapping=Di,E.autoClear=!1;const e=new Hr({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),n=new gn(new Ts,e);let r=!1;const s=t.background;s?s.isColor&&(e.color.copy(s),t.background=null,r=!0):(e.color.copy(U_),r=!0);for(let c=0;c<6;c++){const h=c%3;h===0?(g.up.set(0,v[c],0),g.lookAt(M[c],0,0)):h===1?(g.up.set(0,0,v[c]),g.lookAt(0,M[c],0)):(g.up.set(0,v[c],0),g.lookAt(0,0,M[c]));const d=this._cubeSize;dd(l,h*d,c>2?d:0,d,d),E.setRenderTarget(l),r&&E.render(n,g),E.render(t,g)}n.geometry.dispose(),n.material.dispose(),E.toneMapping=o,E.autoClear=A,t.background=s}_textureToCubeUV(t,i){const a=this._renderer,l=t.mapping===Ar||t.mapping===Ui;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=O_());const u=l?this._cubemapMaterial:this._equirectMaterial,m=new gn(this._lodPlanes[0],u),g=u.uniforms;g.envMap.value=t;const v=this._cubeSize;dd(i,0,0,3*v,2*v),a.setRenderTarget(i),a.render(m,Rf)}_applyPMREM(t){const i=this._renderer,a=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),m=N_[(l-1)%N_.length];this._blur(t,l-1,l,u,m)}i.autoClear=a}_blur(t,i,a,l,u){const m=this._pingPongRenderTarget;this._halfBlur(t,m,i,a,l,"latitudinal",u),this._halfBlur(m,t,a,a,l,"longitudinal",u)}_halfBlur(t,i,a,l,u,m,g){const v=this._renderer,M=this._blurMaterial;m!=="latitudinal"&&m!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const E=3,A=new gn(this._lodPlanes[l],M),o=M.uniforms,e=this._sizeLods[a]-1,n=isFinite(u)?Math.PI/(2*e):2*Math.PI/(2*wo-1),r=u/n,s=isFinite(u)?1+Math.floor(E*r):wo;s>wo&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${s} samples when the maximum is set to ${wo}`);const c=[];let h=0;for(let S=0;S<wo;++S){const x=S/r,b=Math.exp(-x*x/2);c.push(b),S===0?h+=b:S<s&&(h+=2*b)}for(let S=0;S<c.length;S++)c[S]=c[S]/h;o.envMap.value=t.texture,o.samples.value=s,o.weights.value=c,o.latitudinal.value=m==="latitudinal",g&&(o.poleAxis.value=g);const{_lodMax:d}=this;o.dTheta.value=n,o.mipInt.value=d-a;const p=this._sizeLods[l],_=3*p*(l>d-Jc?l-d+Jc:0),y=4*(this._cubeSize-p);dd(i,_,y,3*p,2*p),v.setRenderTarget(i),v.render(A,Rf)}}function py(f){const t=[],i=[],a=[];let l=f;const u=f-Jc+1+D_.length;for(let m=0;m<u;m++){const g=Math.pow(2,l);i.push(g);let v=1/g;m>f-Jc?v=D_[m-f+Jc-1]:m===0&&(v=0),a.push(v);const M=1/(g-2),E=-M,A=1+M,o=[E,E,A,E,A,A,E,E,A,A,E,A],e=6,n=6,r=3,s=2,c=1,h=new Float32Array(r*n*e),d=new Float32Array(s*n*e),p=new Float32Array(c*n*e);for(let y=0;y<e;y++){const S=y%3*2/3-1,x=y>2?0:-1,b=[S,x,0,S+2/3,x,0,S+2/3,x+1,0,S,x,0,S+2/3,x+1,0,S,x+1,0];h.set(b,r*n*y),d.set(o,s*n*y);const T=[y,y,y,y,y,y];p.set(T,c*n*y)}const _=new ct;_.setAttribute("position",new Bt(h,r)),_.setAttribute("uv",new Bt(d,s)),_.setAttribute("faceIndex",new Bt(p,c)),t.push(_),l>Jc&&l--}return{lodPlanes:t,sizeLods:i,sigmas:a}}function F_(f,t,i){const a=new In(f,t,i);return a.texture.mapping=tr,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function dd(f,t,i,a,l){f.viewport.set(t,i,a,l),f.scissor.set(t,i,a,l)}function my(f,t,i){const a=new Float32Array(wo),l=new Z(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${f}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function O_(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function B_(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Pf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function gy(f){let t=new WeakMap,i=null;function a(g){if(g&&g.isTexture){const v=g.mapping,M=v===ai||v===yi,E=v===Ar||v===Ui;if(M||E)if(g.isRenderTargetTexture&&g.needsPMREMUpdate===!0){g.needsPMREMUpdate=!1;let A=t.get(g);return i===null&&(i=new Lf(f)),A=M?i.fromEquirectangular(g,A):i.fromCubemap(g,A),t.set(g,A),A.texture}else{if(t.has(g))return t.get(g).texture;{const A=g.image;if(M&&A&&A.height>0||E&&A&&l(A)){i===null&&(i=new Lf(f));const o=M?i.fromEquirectangular(g):i.fromCubemap(g);return t.set(g,o),g.addEventListener("dispose",u),o.texture}else return null}}}return g}function l(g){let v=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&v++;return v===M}function u(g){const v=g.target;v.removeEventListener("dispose",u);const M=t.get(v);M!==void 0&&(t.delete(v),M.dispose())}function m(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:m}}function _y(f){const t={};function i(a){if(t[a]!==void 0)return t[a];let l;switch(a){case"WEBGL_depth_texture":l=f.getExtension("WEBGL_depth_texture")||f.getExtension("MOZ_WEBGL_depth_texture")||f.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=f.getExtension("EXT_texture_filter_anisotropic")||f.getExtension("MOZ_EXT_texture_filter_anisotropic")||f.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=f.getExtension("WEBGL_compressed_texture_s3tc")||f.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||f.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=f.getExtension("WEBGL_compressed_texture_pvrtc")||f.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=f.getExtension(a)}return t[a]=l,l}return{has:function(a){return i(a)!==null},init:function(a){a.isWebGL2?i("EXT_color_buffer_float"):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(a){const l=i(a);return l===null&&console.warn("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function xy(f,t,i,a){const l={},u=new WeakMap;function m(A){const o=A.target;o.index!==null&&t.remove(o.index);for(const n in o.attributes)t.remove(o.attributes[n]);o.removeEventListener("dispose",m),delete l[o.id];const e=u.get(o);e&&(t.remove(e),u.delete(o)),a.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,i.memory.geometries--}function g(A,o){return l[o.id]===!0||(o.addEventListener("dispose",m),l[o.id]=!0,i.memory.geometries++),o}function v(A){const o=A.attributes;for(const n in o)t.update(o[n],f.ARRAY_BUFFER);const e=A.morphAttributes;for(const n in e){const r=e[n];for(let s=0,c=r.length;s<c;s++)t.update(r[s],f.ARRAY_BUFFER)}}function M(A){const o=[],e=A.index,n=A.attributes.position;let r=0;if(e!==null){const h=e.array;r=e.version;for(let d=0,p=h.length;d<p;d+=3){const _=h[d+0],y=h[d+1],S=h[d+2];o.push(_,y,y,S,S,_)}}else{const h=n.array;r=n.version;for(let d=0,p=h.length/3-1;d<p;d+=3){const _=d+0,y=d+1,S=d+2;o.push(_,y,y,S,S,_)}}const s=new(xf(o)?bs:Wc)(o,1);s.version=r;const c=u.get(A);c&&t.remove(c),u.set(A,s)}function E(A){const o=u.get(A);if(o){const e=A.index;e!==null&&o.version<e.version&&M(A)}else M(A);return u.get(A)}return{get:g,update:v,getWireframeAttribute:E}}function yy(f,t,i,a){const l=a.isWebGL2;let u;function m(o){u=o}let g,v;function M(o){g=o.type,v=o.bytesPerElement}function E(o,e){f.drawElements(u,e,g,o*v),i.update(e,u,1)}function A(o,e,n){if(n===0)return;let r,s;if(l)r=f,s="drawElementsInstanced";else if(r=t.get("ANGLE_instanced_arrays"),s="drawElementsInstancedANGLE",r===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}r[s](u,e,g,o*v,n),i.update(e,u,n)}this.setMode=m,this.setIndex=M,this.render=E,this.renderInstances=A}function xt(f){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,m,g){switch(i.calls++,m){case f.TRIANGLES:i.triangles+=g*(u/3);break;case f.LINES:i.lines+=g*(u/2);break;case f.LINE_STRIP:i.lines+=g*(u-1);break;case f.LINE_LOOP:i.lines+=g*u;break;case f.POINTS:i.points+=g*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",m);break}}function l(){i.frame++,i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:a}}function He(f,t){return f[0]-t[0]}function Yi(f,t){return Math.abs(t[1])-Math.abs(f[1])}function Ah(f,t,i){const a={},l=new Float32Array(8),u=new WeakMap,m=new Nt,g=[];for(let M=0;M<8;M++)g[M]=[M,0];function v(M,E,A,o){const e=M.morphTargetInfluences;if(t.isWebGL2===!0){const n=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,r=n!==void 0?n.length:0;let s=u.get(E);if(s===void 0||s.count!==r){let L=function(){w.dispose(),u.delete(E),E.removeEventListener("dispose",L)};s!==void 0&&s.texture.dispose();const d=E.morphAttributes.position!==void 0,p=E.morphAttributes.normal!==void 0,_=E.morphAttributes.color!==void 0,y=E.morphAttributes.position||[],S=E.morphAttributes.normal||[],x=E.morphAttributes.color||[];let b=0;d===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let T=E.attributes.position.count*b,C=1;T>t.maxTextureSize&&(C=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const R=new Float32Array(T*C*4*r),w=new sr(R,T,C,r);w.type=Fi,w.needsUpdate=!0;const P=b*4;for(let I=0;I<r;I++){const O=y[I],F=S[I],N=x[I],k=T*C*4*I;for(let D=0;D<O.count;D++){const B=D*P;d===!0&&(m.fromBufferAttribute(O,D),R[k+B+0]=m.x,R[k+B+1]=m.y,R[k+B+2]=m.z,R[k+B+3]=0),p===!0&&(m.fromBufferAttribute(F,D),R[k+B+4]=m.x,R[k+B+5]=m.y,R[k+B+6]=m.z,R[k+B+7]=0),_===!0&&(m.fromBufferAttribute(N,D),R[k+B+8]=m.x,R[k+B+9]=m.y,R[k+B+10]=m.z,R[k+B+11]=N.itemSize===4?m.w:1)}}s={count:r,texture:w,size:new Ue(T,C)},u.set(E,s),E.addEventListener("dispose",L)}let c=0;for(let d=0;d<e.length;d++)c+=e[d];const h=E.morphTargetsRelative?1:1-c;o.getUniforms().setValue(f,"morphTargetBaseInfluence",h),o.getUniforms().setValue(f,"morphTargetInfluences",e),o.getUniforms().setValue(f,"morphTargetsTexture",s.texture,i),o.getUniforms().setValue(f,"morphTargetsTextureSize",s.size)}else{const n=e===void 0?0:e.length;let r=a[E.id];if(r===void 0||r.length!==n){r=[];for(let p=0;p<n;p++)r[p]=[p,0];a[E.id]=r}for(let p=0;p<n;p++){const _=r[p];_[0]=p,_[1]=e[p]}r.sort(Yi);for(let p=0;p<8;p++)p<n&&r[p][1]?(g[p][0]=r[p][0],g[p][1]=r[p][1]):(g[p][0]=Number.MAX_SAFE_INTEGER,g[p][1]=0);g.sort(He);const s=E.morphAttributes.position,c=E.morphAttributes.normal;let h=0;for(let p=0;p<8;p++){const _=g[p],y=_[0],S=_[1];y!==Number.MAX_SAFE_INTEGER&&S?(s&&E.getAttribute("morphTarget"+p)!==s[y]&&E.setAttribute("morphTarget"+p,s[y]),c&&E.getAttribute("morphNormal"+p)!==c[y]&&E.setAttribute("morphNormal"+p,c[y]),l[p]=S,h+=S):(s&&E.hasAttribute("morphTarget"+p)===!0&&E.deleteAttribute("morphTarget"+p),c&&E.hasAttribute("morphNormal"+p)===!0&&E.deleteAttribute("morphNormal"+p),l[p]=0)}const d=E.morphTargetsRelative?1:1-h;o.getUniforms().setValue(f,"morphTargetBaseInfluence",d),o.getUniforms().setValue(f,"morphTargetInfluences",l)}}return{update:v}}function z_(f,t,i,a){let l=new WeakMap;function u(v){const M=a.render.frame,E=v.geometry,A=t.get(v,E);return l.get(A)!==M&&(t.update(A),l.set(A,M)),v.isInstancedMesh&&(v.hasEventListener("dispose",g)===!1&&v.addEventListener("dispose",g),i.update(v.instanceMatrix,f.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,f.ARRAY_BUFFER)),A}function m(){l=new WeakMap}function g(v){const M=v.target;M.removeEventListener("dispose",g),i.remove(M.instanceMatrix),M.instanceColor!==null&&i.remove(M.instanceColor)}return{update:u,dispose:m}}const If=new qt,Df=new sr,Uf=new uh,Nf=new Rs,Ff=[],Kc=[],Aa=new Float32Array(16),fd=new Float32Array(9),Ps=new Float32Array(4);function Is(f,t,i){const a=f[0];if(a<=0||a>0)return f;const l=t*i;let u=Ff[l];if(u===void 0&&(u=new Float32Array(l),Ff[l]=u),t!==0){a.toArray(u,0);for(let m=1,g=0;m!==t;++m)g+=i,f[m].toArray(u,g)}return u}function dn(f,t){if(f.length!==t.length)return!1;for(let i=0,a=f.length;i<a;i++)if(f[i]!==t[i])return!1;return!0}function ln(f,t){for(let i=0,a=t.length;i<a;i++)f[i]=t[i]}function hr(f,t){let i=Kc[t];i===void 0&&(i=new Int32Array(t),Kc[t]=i);for(let a=0;a!==t;++a)i[a]=f.allocateTextureUnit();return i}function Ro(f,t){const i=this.cache;i[0]!==t&&(f.uniform1f(this.addr,t),i[0]=t)}function Of(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(f.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;f.uniform2fv(this.addr,t),ln(i,t)}}function pd(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(f.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(f.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(dn(i,t))return;f.uniform3fv(this.addr,t),ln(i,t)}}function G_(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(f.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;f.uniform4fv(this.addr,t),ln(i,t)}}function Bf(f,t){const i=this.cache,a=t.elements;if(a===void 0){if(dn(i,t))return;f.uniformMatrix2fv(this.addr,!1,t),ln(i,t)}else{if(dn(i,a))return;Ps.set(a),f.uniformMatrix2fv(this.addr,!1,Ps),ln(i,a)}}function Rh(f,t){const i=this.cache,a=t.elements;if(a===void 0){if(dn(i,t))return;f.uniformMatrix3fv(this.addr,!1,t),ln(i,t)}else{if(dn(i,a))return;fd.set(a),f.uniformMatrix3fv(this.addr,!1,fd),ln(i,a)}}function k_(f,t){const i=this.cache,a=t.elements;if(a===void 0){if(dn(i,t))return;f.uniformMatrix4fv(this.addr,!1,t),ln(i,t)}else{if(dn(i,a))return;Aa.set(a),f.uniformMatrix4fv(this.addr,!1,Aa),ln(i,a)}}function zf(f,t){const i=this.cache;i[0]!==t&&(f.uniform1i(this.addr,t),i[0]=t)}function Gf(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(f.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;f.uniform2iv(this.addr,t),ln(i,t)}}function md(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(f.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;f.uniform3iv(this.addr,t),ln(i,t)}}function V_(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(f.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;f.uniform4iv(this.addr,t),ln(i,t)}}function H_(f,t){const i=this.cache;i[0]!==t&&(f.uniform1ui(this.addr,t),i[0]=t)}function W_(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(f.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(dn(i,t))return;f.uniform2uiv(this.addr,t),ln(i,t)}}function X_(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(f.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(dn(i,t))return;f.uniform3uiv(this.addr,t),ln(i,t)}}function q_(f,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(f.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(dn(i,t))return;f.uniform4uiv(this.addr,t),ln(i,t)}}function Y_(f,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(f.uniform1i(this.addr,l),a[0]=l),i.setTexture2D(t||If,l)}function Z_(f,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(f.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(t||Uf,l)}function J_(f,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(f.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(t||Nf,l)}function $_(f,t,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(f.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(t||Df,l)}function kf(f){switch(f){case 5126:return Ro;case 35664:return Of;case 35665:return pd;case 35666:return G_;case 35674:return Bf;case 35675:return Rh;case 35676:return k_;case 5124:case 35670:return zf;case 35667:case 35671:return Gf;case 35668:case 35672:return md;case 35669:case 35673:return V_;case 5125:return H_;case 36294:return W_;case 36295:return X_;case 36296:return q_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return $_}}function Vf(f,t){f.uniform1fv(this.addr,t)}function Hf(f,t){const i=Is(t,this.size,2);f.uniform2fv(this.addr,i)}function Wf(f,t){const i=Is(t,this.size,3);f.uniform3fv(this.addr,i)}function Xf(f,t){const i=Is(t,this.size,4);f.uniform4fv(this.addr,i)}function qf(f,t){const i=Is(t,this.size,4);f.uniformMatrix2fv(this.addr,!1,i)}function Yf(f,t){const i=Is(t,this.size,9);f.uniformMatrix3fv(this.addr,!1,i)}function Zf(f,t){const i=Is(t,this.size,16);f.uniformMatrix4fv(this.addr,!1,i)}function Jf(f,t){f.uniform1iv(this.addr,t)}function Co(f,t){f.uniform2iv(this.addr,t)}function _n(f,t){f.uniform3iv(this.addr,t)}function xn(f,t){f.uniform4iv(this.addr,t)}function Ch(f,t){f.uniform1uiv(this.addr,t)}function K_(f,t){f.uniform2uiv(this.addr,t)}function Q_(f,t){f.uniform3uiv(this.addr,t)}function j_(f,t){f.uniform4uiv(this.addr,t)}function e0(f,t,i){const a=this.cache,l=t.length,u=hr(i,l);dn(a,u)||(f.uniform1iv(this.addr,u),ln(a,u));for(let m=0;m!==l;++m)i.setTexture2D(t[m]||If,u[m])}function t0(f,t,i){const a=this.cache,l=t.length,u=hr(i,l);dn(a,u)||(f.uniform1iv(this.addr,u),ln(a,u));for(let m=0;m!==l;++m)i.setTexture3D(t[m]||Uf,u[m])}function n0(f,t,i){const a=this.cache,l=t.length,u=hr(i,l);dn(a,u)||(f.uniform1iv(this.addr,u),ln(a,u));for(let m=0;m!==l;++m)i.setTextureCube(t[m]||Nf,u[m])}function i0(f,t,i){const a=this.cache,l=t.length,u=hr(i,l);dn(a,u)||(f.uniform1iv(this.addr,u),ln(a,u));for(let m=0;m!==l;++m)i.setTexture2DArray(t[m]||Df,u[m])}function r0(f){switch(f){case 5126:return Vf;case 35664:return Hf;case 35665:return Wf;case 35666:return Xf;case 35674:return qf;case 35675:return Yf;case 35676:return Zf;case 5124:case 35670:return Jf;case 35667:case 35671:return Co;case 35668:case 35672:return _n;case 35669:case 35673:return xn;case 5125:return Ch;case 36294:return K_;case 36295:return Q_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return e0;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return n0;case 36289:case 36303:case 36311:case 36292:return i0}}class s0{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.setValue=kf(i.type)}}class a0{constructor(t,i,a){this.id=t,this.addr=a,this.cache=[],this.size=i.size,this.setValue=r0(i.type)}}class o0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,a){const l=this.seq;for(let u=0,m=l.length;u!==m;++u){const g=l[u];g.setValue(t,i[g.id],a)}}}const gd=/(\w+)(\])?(\[|\.)?/g;function $f(f,t){f.seq.push(t),f.map[t.id]=t}function c0(f,t,i){const a=f.name,l=a.length;for(gd.lastIndex=0;;){const u=gd.exec(a),m=gd.lastIndex;let g=u[1];const v=u[2]==="]",M=u[3];if(v&&(g=g|0),M===void 0||M==="["&&m+2===l){$f(i,M===void 0?new s0(g,f,t):new a0(g,f,t));break}else{let A=i.map[g];A===void 0&&(A=new o0(g),$f(i,A)),i=A}}}class Lh{constructor(t,i){this.seq=[],this.map={};const a=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const u=t.getActiveUniform(i,l),m=t.getUniformLocation(i,u.name);c0(u,m,this)}}setValue(t,i,a,l){const u=this.map[i];u!==void 0&&u.setValue(t,a,l)}setOptional(t,i,a){const l=i[a];l!==void 0&&this.setValue(t,a,l)}static upload(t,i,a,l){for(let u=0,m=i.length;u!==m;++u){const g=i[u],v=a[g.id];v.needsUpdate!==!1&&g.setValue(t,v.value,l)}}static seqWithValue(t,i){const a=[];for(let l=0,u=t.length;l!==u;++l){const m=t[l];m.id in i&&a.push(m)}return a}}function Kf(f,t,i){const a=f.createShader(t);return f.shaderSource(a,i),f.compileShader(a),a}let l0=0;function h0(f,t){const i=f.split(`
`),a=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let m=l;m<u;m++){const g=m+1;a.push(`${g===t?">":" "} ${g}: ${i[m]}`)}return a.join(`
`)}function u0(f){switch(f){case Bi:return["Linear","( value )"];case Vt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",f),["Linear","( value )"]}}function Qf(f,t,i){const a=f.getShaderParameter(t,f.COMPILE_STATUS),l=f.getShaderInfoLog(t).trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const m=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+h0(f.getShaderSource(t),m)}else return l}function d0(f,t){const i=u0(t);return"vec4 "+f+"( vec4 value ) { return LinearTo"+i[0]+i[1]+"; }"}function f0(f,t){let i;switch(t){case Ou:i="Linear";break;case er:i="Reinhard";break;case Bu:i="OptimizedCineon";break;case zu:i="ACESFilmic";break;case Gu:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+f+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function p0(f){return[f.extensionDerivatives||f.envMapCubeUVHeight||f.bumpMap||f.tangentSpaceNormalMap||f.clearcoatNormalMap||f.flatShading||f.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(f.extensionFragDepth||f.logarithmicDepthBuffer)&&f.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",f.extensionDrawBuffers&&f.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(f.extensionShaderTextureLOD||f.envMap||f.transmission)&&f.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qc).join(`
`)}function m0(f){const t=[];for(const i in f){const a=f[i];a!==!1&&t.push("#define "+i+" "+a)}return t.join(`
`)}function g0(f,t){const i={},a=f.getProgramParameter(t,f.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const u=f.getActiveAttrib(t,l),m=u.name;let g=1;u.type===f.FLOAT_MAT2&&(g=2),u.type===f.FLOAT_MAT3&&(g=3),u.type===f.FLOAT_MAT4&&(g=4),i[m]={type:u.type,location:f.getAttribLocation(t,m),locationSize:g}}return i}function Qc(f){return f!==""}function jf(f,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return f.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ep(f,t){return f.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _d(f){return f.replace(_0,x0)}function x0(f,t){const i=Mt[t];if(i===void 0)throw new Error("Can not resolve #include <"+t+">");return _d(i)}const y0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tp(f){return f.replace(y0,v0)}function v0(f,t,i,a){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function np(f){let t="precision "+f.precision+` float;
precision `+f.precision+" int;";return f.precision==="highp"?t+=`
#define HIGH_PRECISION`:f.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:f.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function M0(f){let t="SHADOWMAP_TYPE_BASIC";return f.shadowMapType===bu?t="SHADOWMAP_TYPE_PCF":f.shadowMapType===Vl?t="SHADOWMAP_TYPE_PCF_SOFT":f.shadowMapType===ea&&(t="SHADOWMAP_TYPE_VSM"),t}function S0(f){let t="ENVMAP_TYPE_CUBE";if(f.envMap)switch(f.envMapMode){case Ar:case Ui:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function b0(f){let t="ENVMAP_MODE_REFLECTION";if(f.envMap)switch(f.envMapMode){case Ui:t="ENVMAP_MODE_REFRACTION";break}return t}function E0(f){let t="ENVMAP_BLENDING_NONE";if(f.envMap)switch(f.combine){case ja:t="ENVMAP_BLENDING_MULTIPLY";break;case Fu:t="ENVMAP_BLENDING_MIX";break;case eo:t="ENVMAP_BLENDING_ADD";break}return t}function T0(f){const t=f.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:a,maxMip:i}}function w0(f,t,i,a){const l=f.getContext(),u=i.defines;let m=i.vertexShader,g=i.fragmentShader;const v=M0(i),M=S0(i),E=b0(i),A=E0(i),o=T0(i),e=i.isWebGL2?"":p0(i),n=m0(u),r=l.createProgram();let s,c,h=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(s=[n].filter(Qc).join(`
`),s.length>0&&(s+=`
`),c=[e,n].filter(Qc).join(`
`),c.length>0&&(c+=`
`)):(s=[np(i),"#define SHADER_NAME "+i.shaderName,n,i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.supportsVertexTextures?"#define VERTEX_TEXTURES":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+E:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.displacementMap&&i.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qc).join(`
`),c=[e,np(i),"#define SHADER_NAME "+i.shaderName,n,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+M:"",i.envMap?"#define "+E:"",i.envMap?"#define "+A:"",o?"#define CUBEUV_TEXEL_WIDTH "+o.texelWidth:"",o?"#define CUBEUV_TEXEL_HEIGHT "+o.texelHeight:"",o?"#define CUBEUV_MAX_MIP "+o.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMap&&i.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",i.normalMap&&i.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",i.specularColorMap?"#define USE_SPECULARCOLORMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEENCOLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.vertexTangents?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUvs?"#define USE_UV":"",i.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Di?"#define TONE_MAPPING":"",i.toneMapping!==Di?Mt.tonemapping_pars_fragment:"",i.toneMapping!==Di?f0("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.encodings_pars_fragment,d0("linearToOutputTexel",i.outputEncoding),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qc).join(`
`)),m=_d(m),m=jf(m,i),m=ep(m,i),g=_d(g),g=jf(g,i),g=ep(g,i),m=tp(m),g=tp(g),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,s=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+s,c=["#define varying in",i.glslVersion===oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const d=h+s+m,p=h+c+g,_=Kf(l,l.VERTEX_SHADER,d),y=Kf(l,l.FRAGMENT_SHADER,p);if(l.attachShader(r,_),l.attachShader(r,y),i.index0AttributeName!==void 0?l.bindAttribLocation(r,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(r,0,"position"),l.linkProgram(r),f.debug.checkShaderErrors){const b=l.getProgramInfoLog(r).trim(),T=l.getShaderInfoLog(_).trim(),C=l.getShaderInfoLog(y).trim();let R=!0,w=!0;if(l.getProgramParameter(r,l.LINK_STATUS)===!1){R=!1;const P=Qf(l,_,"vertex"),L=Qf(l,y,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(r,l.VALIDATE_STATUS)+`

Program Info Log: `+b+`
`+P+`
`+L)}else b!==""?console.warn("THREE.WebGLProgram: Program Info Log:",b):(T===""||C==="")&&(w=!1);w&&(this.diagnostics={runnable:R,programLog:b,vertexShader:{log:T,prefix:s},fragmentShader:{log:C,prefix:c}})}l.deleteShader(_),l.deleteShader(y);let S;this.getUniforms=function(){return S===void 0&&(S=new Lh(l,r)),S};let x;return this.getAttributes=function(){return x===void 0&&(x=g0(l,r)),x},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(r),this.program=void 0},this.name=i.shaderName,this.id=l0++,this.cacheKey=t,this.usedTimes=1,this.program=r,this.vertexShader=_,this.fragmentShader=y,this}let A0=0;class R0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,a=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(a),m=this._getShaderCacheForMaterial(t);return m.has(l)===!1&&(m.add(l),l.usedTimes++),m.has(u)===!1&&(m.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let a=i.get(t);return a===void 0&&(a=new Set,i.set(t,a)),a}_getShaderStage(t){const i=this.shaderCache;let a=i.get(t);return a===void 0&&(a=new xd(t),i.set(t,a)),a}}class xd{constructor(t){this.id=A0++,this.code=t,this.usedTimes=0}}function ip(f,t,i,a,l,u,m){const g=new Ei,v=new R0,M=[],E=l.isWebGL2,A=l.logarithmicDepthBuffer,o=l.vertexTextures;let e=l.precision;const n={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function r(x,b,T,C,R){const w=C.fog,P=R.geometry,L=x.isMeshStandardMaterial?C.environment:null,I=(x.isMeshStandardMaterial?i:t).get(x.envMap||L),O=I&&I.mapping===tr?I.image.height:null,F=n[x.type];x.precision!==null&&(e=l.getMaxPrecision(x.precision),e!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",e,"instead."));const N=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,k=N!==void 0?N.length:0;let D=0;P.morphAttributes.position!==void 0&&(D=1),P.morphAttributes.normal!==void 0&&(D=2),P.morphAttributes.color!==void 0&&(D=3);let B,Q,ge,re;if(F){const we=lr[F];B=we.vertexShader,Q=we.fragmentShader}else B=x.vertexShader,Q=x.fragmentShader,v.update(x),ge=v.getVertexShaderID(x),re=v.getFragmentShaderID(x);const W=f.getRenderTarget(),he=x.alphaTest>0,ye=x.clearcoat>0,_e=x.iridescence>0;return{isWebGL2:E,shaderID:F,shaderName:x.type,vertexShader:B,fragmentShader:Q,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:e,instancing:R.isInstancedMesh===!0,instancingColor:R.isInstancedMesh===!0&&R.instanceColor!==null,supportsVertexTextures:o,outputEncoding:W===null?f.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:Bi,map:!!x.map,matcap:!!x.matcap,envMap:!!I,envMapMode:I&&I.mapping,envMapCubeUVHeight:O,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===sh,tangentSpaceNormalMap:x.normalMapType===ds,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Vt,clearcoat:ye,clearcoatMap:ye&&!!x.clearcoatMap,clearcoatRoughnessMap:ye&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!x.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!x.iridescenceMap,iridescenceThicknessMap:_e&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===ta,alphaMap:!!x.alphaMap,alphaTest:he,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!w,useFog:x.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:A,skinning:R.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:D,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:m.numPlanes,numClipIntersection:m.numIntersection,dithering:x.dithering,shadowMapEnabled:f.shadowMap.enabled&&T.length>0,shadowMapType:f.shadowMap.type,toneMapping:x.toneMapped?f.toneMapping:Di,physicallyCorrectLights:f.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Wt,flipSided:x.side===nn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:E||a.has("EXT_frag_depth"),rendererExtensionDrawBuffers:E||a.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:E||a.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function s(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const T in x.defines)b.push(T),b.push(x.defines[T]);return x.isRawShaderMaterial===!1&&(c(b,x),h(b,x),b.push(f.outputEncoding)),b.push(x.customProgramCacheKey),b.join()}function c(x,b){x.push(b.precision),x.push(b.outputEncoding),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.combine),x.push(b.vertexUvs),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function h(x,b){g.disableAll(),b.isWebGL2&&g.enable(0),b.supportsVertexTextures&&g.enable(1),b.instancing&&g.enable(2),b.instancingColor&&g.enable(3),b.map&&g.enable(4),b.matcap&&g.enable(5),b.envMap&&g.enable(6),b.lightMap&&g.enable(7),b.aoMap&&g.enable(8),b.emissiveMap&&g.enable(9),b.bumpMap&&g.enable(10),b.normalMap&&g.enable(11),b.objectSpaceNormalMap&&g.enable(12),b.tangentSpaceNormalMap&&g.enable(13),b.clearcoat&&g.enable(14),b.clearcoatMap&&g.enable(15),b.clearcoatRoughnessMap&&g.enable(16),b.clearcoatNormalMap&&g.enable(17),b.iridescence&&g.enable(18),b.iridescenceMap&&g.enable(19),b.iridescenceThicknessMap&&g.enable(20),b.displacementMap&&g.enable(21),b.specularMap&&g.enable(22),b.roughnessMap&&g.enable(23),b.metalnessMap&&g.enable(24),b.gradientMap&&g.enable(25),b.alphaMap&&g.enable(26),b.alphaTest&&g.enable(27),b.vertexColors&&g.enable(28),b.vertexAlphas&&g.enable(29),b.vertexUvs&&g.enable(30),b.vertexTangents&&g.enable(31),b.uvsVertexOnly&&g.enable(32),x.push(g.mask),g.disableAll(),b.fog&&g.enable(0),b.useFog&&g.enable(1),b.flatShading&&g.enable(2),b.logarithmicDepthBuffer&&g.enable(3),b.skinning&&g.enable(4),b.morphTargets&&g.enable(5),b.morphNormals&&g.enable(6),b.morphColors&&g.enable(7),b.premultipliedAlpha&&g.enable(8),b.shadowMapEnabled&&g.enable(9),b.physicallyCorrectLights&&g.enable(10),b.doubleSided&&g.enable(11),b.flipSided&&g.enable(12),b.useDepthPacking&&g.enable(13),b.dithering&&g.enable(14),b.specularIntensityMap&&g.enable(15),b.specularColorMap&&g.enable(16),b.transmission&&g.enable(17),b.transmissionMap&&g.enable(18),b.thicknessMap&&g.enable(19),b.sheen&&g.enable(20),b.sheenColorMap&&g.enable(21),b.sheenRoughnessMap&&g.enable(22),b.decodeVideoTexture&&g.enable(23),b.opaque&&g.enable(24),x.push(g.mask)}function d(x){const b=n[x.type];let T;if(b){const C=lr[b];T=pi.clone(C.uniforms)}else T=x.uniforms;return T}function p(x,b){let T;for(let C=0,R=M.length;C<R;C++){const w=M[C];if(w.cacheKey===b){T=w,++T.usedTimes;break}}return T===void 0&&(T=new w0(f,b,x,u),M.push(T)),T}function _(x){if(--x.usedTimes===0){const b=M.indexOf(x);M[b]=M[M.length-1],M.pop(),x.destroy()}}function y(x){v.remove(x)}function S(){v.dispose()}return{getParameters:r,getProgramCacheKey:s,getUniforms:d,acquireProgram:p,releaseProgram:_,releaseShaderCache:y,programs:M,dispose:S}}function C0(){let f=new WeakMap;function t(u){let m=f.get(u);return m===void 0&&(m={},f.set(u,m)),m}function i(u){f.delete(u)}function a(u,m,g){f.get(u)[m]=g}function l(){f=new WeakMap}return{get:t,remove:i,update:a,dispose:l}}function Ph(f,t){return f.groupOrder!==t.groupOrder?f.groupOrder-t.groupOrder:f.renderOrder!==t.renderOrder?f.renderOrder-t.renderOrder:f.material.id!==t.material.id?f.material.id-t.material.id:f.z!==t.z?f.z-t.z:f.id-t.id}function yd(f,t){return f.groupOrder!==t.groupOrder?f.groupOrder-t.groupOrder:f.renderOrder!==t.renderOrder?f.renderOrder-t.renderOrder:f.z!==t.z?t.z-f.z:f.id-t.id}function rp(){const f=[];let t=0;const i=[],a=[],l=[];function u(){t=0,i.length=0,a.length=0,l.length=0}function m(A,o,e,n,r,s){let c=f[t];return c===void 0?(c={id:A.id,object:A,geometry:o,material:e,groupOrder:n,renderOrder:A.renderOrder,z:r,group:s},f[t]=c):(c.id=A.id,c.object=A,c.geometry=o,c.material=e,c.groupOrder=n,c.renderOrder=A.renderOrder,c.z=r,c.group=s),t++,c}function g(A,o,e,n,r,s){const c=m(A,o,e,n,r,s);e.transmission>0?a.push(c):e.transparent===!0?l.push(c):i.push(c)}function v(A,o,e,n,r,s){const c=m(A,o,e,n,r,s);e.transmission>0?a.unshift(c):e.transparent===!0?l.unshift(c):i.unshift(c)}function M(A,o){i.length>1&&i.sort(A||Ph),a.length>1&&a.sort(o||yd),l.length>1&&l.sort(o||yd)}function E(){for(let A=t,o=f.length;A<o;A++){const e=f[A];if(e.id===null)break;e.id=null,e.object=null,e.geometry=null,e.material=null,e.group=null}}return{opaque:i,transmissive:a,transparent:l,init:u,push:g,unshift:v,finish:E,sort:M}}function L0(){let f=new WeakMap;function t(a,l){const u=f.get(a);let m;return u===void 0?(m=new rp,f.set(a,[m])):l>=u.length?(m=new rp,u.push(m)):m=u[l],m}function i(){f=new WeakMap}return{get:t,dispose:i}}function P0(){const f={};return{get:function(t){if(f[t.id]!==void 0)return f[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Z,color:new ue};break;case"SpotLight":i={position:new Z,direction:new Z,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return f[t.id]=i,i}}}function sp(){const f={};return{get:function(t){if(f[t.id]!==void 0)return f[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return f[t.id]=i,i}}}let I0=0;function D0(f,t){return(t.castShadow?2:0)-(f.castShadow?2:0)+(t.map?1:0)-(f.map?1:0)}function U0(f,t){const i=new P0,a=sp(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let E=0;E<9;E++)l.probe.push(new Z);const u=new Z,m=new ot,g=new ot;function v(E,A){let o=0,e=0,n=0;for(let C=0;C<9;C++)l.probe[C].set(0,0,0);let r=0,s=0,c=0,h=0,d=0,p=0,_=0,y=0,S=0,x=0;E.sort(D0);const b=A!==!0?Math.PI:1;for(let C=0,R=E.length;C<R;C++){const w=E[C],P=w.color,L=w.intensity,I=w.distance,O=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)o+=P.r*L*b,e+=P.g*L*b,n+=P.b*L*b;else if(w.isLightProbe)for(let F=0;F<9;F++)l.probe[F].addScaledVector(w.sh.coefficients[F],L);else if(w.isDirectionalLight){const F=i.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity*b),w.castShadow){const N=w.shadow,k=a.get(w);k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,l.directionalShadow[r]=k,l.directionalShadowMap[r]=O,l.directionalShadowMatrix[r]=w.shadow.matrix,p++}l.directional[r]=F,r++}else if(w.isSpotLight){const F=i.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(P).multiplyScalar(L*b),F.distance=I,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,l.spot[c]=F;const N=w.shadow;if(w.map&&(l.spotLightMap[S]=w.map,S++,N.updateMatrices(w),w.castShadow&&x++),l.spotLightMatrix[c]=N.matrix,w.castShadow){const k=a.get(w);k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,l.spotShadow[c]=k,l.spotShadowMap[c]=O,y++}c++}else if(w.isRectAreaLight){const F=i.get(w);F.color.copy(P).multiplyScalar(L),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),l.rectArea[h]=F,h++}else if(w.isPointLight){const F=i.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity*b),F.distance=w.distance,F.decay=w.decay,w.castShadow){const N=w.shadow,k=a.get(w);k.shadowBias=N.bias,k.shadowNormalBias=N.normalBias,k.shadowRadius=N.radius,k.shadowMapSize=N.mapSize,k.shadowCameraNear=N.camera.near,k.shadowCameraFar=N.camera.far,l.pointShadow[s]=k,l.pointShadowMap[s]=O,l.pointShadowMatrix[s]=w.shadow.matrix,_++}l.point[s]=F,s++}else if(w.isHemisphereLight){const F=i.get(w);F.skyColor.copy(w.color).multiplyScalar(L*b),F.groundColor.copy(w.groundColor).multiplyScalar(L*b),l.hemi[d]=F,d++}}h>0&&(t.isWebGL2||f.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=We.LTC_FLOAT_1,l.rectAreaLTC2=We.LTC_FLOAT_2):f.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=We.LTC_HALF_1,l.rectAreaLTC2=We.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=o,l.ambient[1]=e,l.ambient[2]=n;const T=l.hash;(T.directionalLength!==r||T.pointLength!==s||T.spotLength!==c||T.rectAreaLength!==h||T.hemiLength!==d||T.numDirectionalShadows!==p||T.numPointShadows!==_||T.numSpotShadows!==y||T.numSpotMaps!==S)&&(l.directional.length=r,l.spot.length=c,l.rectArea.length=h,l.point.length=s,l.hemi.length=d,l.directionalShadow.length=p,l.directionalShadowMap.length=p,l.pointShadow.length=_,l.pointShadowMap.length=_,l.spotShadow.length=y,l.spotShadowMap.length=y,l.directionalShadowMatrix.length=p,l.pointShadowMatrix.length=_,l.spotLightMatrix.length=y+S-x,l.spotLightMap.length=S,l.numSpotLightShadowsWithMaps=x,T.directionalLength=r,T.pointLength=s,T.spotLength=c,T.rectAreaLength=h,T.hemiLength=d,T.numDirectionalShadows=p,T.numPointShadows=_,T.numSpotShadows=y,T.numSpotMaps=S,l.version=I0++)}function M(E,A){let o=0,e=0,n=0,r=0,s=0;const c=A.matrixWorldInverse;for(let h=0,d=E.length;h<d;h++){const p=E[h];if(p.isDirectionalLight){const _=l.directional[o];_.direction.setFromMatrixPosition(p.matrixWorld),u.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(u),_.direction.transformDirection(c),o++}else if(p.isSpotLight){const _=l.spot[n];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(c),_.direction.setFromMatrixPosition(p.matrixWorld),u.setFromMatrixPosition(p.target.matrixWorld),_.direction.sub(u),_.direction.transformDirection(c),n++}else if(p.isRectAreaLight){const _=l.rectArea[r];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(c),g.identity(),m.copy(p.matrixWorld),m.premultiply(c),g.extractRotation(m),_.halfWidth.set(p.width*.5,0,0),_.halfHeight.set(0,p.height*.5,0),_.halfWidth.applyMatrix4(g),_.halfHeight.applyMatrix4(g),r++}else if(p.isPointLight){const _=l.point[e];_.position.setFromMatrixPosition(p.matrixWorld),_.position.applyMatrix4(c),e++}else if(p.isHemisphereLight){const _=l.hemi[s];_.direction.setFromMatrixPosition(p.matrixWorld),_.direction.transformDirection(c),s++}}}return{setup:v,setupView:M,state:l}}function ap(f,t){const i=new U0(f,t),a=[],l=[];function u(){a.length=0,l.length=0}function m(A){a.push(A)}function g(A){l.push(A)}function v(A){i.setup(a,A)}function M(A){i.setupView(a,A)}return{init:u,state:{lightsArray:a,shadowsArray:l,lights:i},setupLights:v,setupLightsView:M,pushLight:m,pushShadow:g}}function N0(f,t){let i=new WeakMap;function a(u,m=0){const g=i.get(u);let v;return g===void 0?(v=new ap(f,t),i.set(u,[v])):m>=g.length?(v=new ap(f,t),g.push(v)):v=g[m],v}function l(){i=new WeakMap}return{get:a,dispose:l}}class Ra extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ih extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vd(f,t,i){let a=new ba;const l=new Ue,u=new Ue,m=new Nt,g=new Ra({depthPacking:hf}),v=new Ih,M={},E=i.maxTextureSize,A={0:nn,1:Ln,2:Wt},o=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:op,fragmentShader:F0}),e=o.clone();e.defines.HORIZONTAL_PASS=1;const n=new ct;n.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const r=new gn(n,o),s=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu,this.render=function(p,_,y){if(s.enabled===!1||s.autoUpdate===!1&&s.needsUpdate===!1||p.length===0)return;const S=f.getRenderTarget(),x=f.getActiveCubeFace(),b=f.getActiveMipmapLevel(),T=f.state;T.setBlending(vn),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let C=0,R=p.length;C<R;C++){const w=p[C],P=w.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;l.copy(P.mapSize);const L=P.getFrameExtents();if(l.multiply(L),u.copy(P.mapSize),(l.x>E||l.y>E)&&(l.x>E&&(u.x=Math.floor(E/L.x),l.x=u.x*L.x,P.mapSize.x=u.x),l.y>E&&(u.y=Math.floor(E/L.y),l.y=u.y*L.y,P.mapSize.y=u.y)),P.map===null){const O=this.type!==ea?{minFilter:wt,magFilter:wt}:{};P.map=new In(l.x,l.y,O),P.map.texture.name=w.name+".shadowMap",P.camera.updateProjectionMatrix()}f.setRenderTarget(P.map),f.clear();const I=P.getViewportCount();for(let O=0;O<I;O++){const F=P.getViewport(O);m.set(u.x*F.x,u.y*F.y,u.x*F.z,u.y*F.w),T.viewport(m),P.updateMatrices(w,O),a=P.getFrustum(),d(_,y,P.camera,w,this.type)}P.isPointLightShadow!==!0&&this.type===ea&&c(P,y),P.needsUpdate=!1}s.needsUpdate=!1,f.setRenderTarget(S,x,b)};function c(p,_){const y=t.update(r);o.defines.VSM_SAMPLES!==p.blurSamples&&(o.defines.VSM_SAMPLES=p.blurSamples,e.defines.VSM_SAMPLES=p.blurSamples,o.needsUpdate=!0,e.needsUpdate=!0),p.mapPass===null&&(p.mapPass=new In(l.x,l.y)),o.uniforms.shadow_pass.value=p.map.texture,o.uniforms.resolution.value=p.mapSize,o.uniforms.radius.value=p.radius,f.setRenderTarget(p.mapPass),f.clear(),f.renderBufferDirect(_,null,y,o,r,null),e.uniforms.shadow_pass.value=p.mapPass.texture,e.uniforms.resolution.value=p.mapSize,e.uniforms.radius.value=p.radius,f.setRenderTarget(p.map),f.clear(),f.renderBufferDirect(_,null,y,e,r,null)}function h(p,_,y,S,x,b){let T=null;const C=y.isPointLight===!0?p.customDistanceMaterial:p.customDepthMaterial;if(C!==void 0?T=C:T=y.isPointLight===!0?v:g,f.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0){const R=T.uuid,w=_.uuid;let P=M[R];P===void 0&&(P={},M[R]=P);let L=P[w];L===void 0&&(L=T.clone(),P[w]=L),T=L}return T.visible=_.visible,T.wireframe=_.wireframe,b===ea?T.side=_.shadowSide!==null?_.shadowSide:_.side:T.side=_.shadowSide!==null?_.shadowSide:A[_.side],T.alphaMap=_.alphaMap,T.alphaTest=_.alphaTest,T.clipShadows=_.clipShadows,T.clippingPlanes=_.clippingPlanes,T.clipIntersection=_.clipIntersection,T.displacementMap=_.displacementMap,T.displacementScale=_.displacementScale,T.displacementBias=_.displacementBias,T.wireframeLinewidth=_.wireframeLinewidth,T.linewidth=_.linewidth,y.isPointLight===!0&&T.isMeshDistanceMaterial===!0&&(T.referencePosition.setFromMatrixPosition(y.matrixWorld),T.nearDistance=S,T.farDistance=x),T}function d(p,_,y,S,x){if(p.visible===!1)return;if(p.layers.test(_.layers)&&(p.isMesh||p.isLine||p.isPoints)&&(p.castShadow||p.receiveShadow&&x===ea)&&(!p.frustumCulled||a.intersectsObject(p))){p.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,p.matrixWorld);const C=t.update(p),R=p.material;if(Array.isArray(R)){const w=C.groups;for(let P=0,L=w.length;P<L;P++){const I=w[P],O=R[I.materialIndex];if(O&&O.visible){const F=h(p,O,S,y.near,y.far,x);f.renderBufferDirect(y,null,C,F,p,I)}}}else if(R.visible){const w=h(p,R,S,y.near,y.far,x);f.renderBufferDirect(y,null,C,w,p,null)}}const T=p.children;for(let C=0,R=T.length;C<R;C++)d(T[C],_,y,S,x)}}function O0(f,t,i){const a=i.isWebGL2;function l(){let q=!1;const ee=new Nt;let Se=null;const ve=new Nt(0,0,0,0);return{setMask:function(se){Se!==se&&!q&&(f.colorMask(se,se,se,se),Se=se)},setLocked:function(se){q=se},setClear:function(se,Ve,$e,Ke,je){je===!0&&(se*=Ke,Ve*=Ke,$e*=Ke),ee.set(se,Ve,$e,Ke),ve.equals(ee)===!1&&(f.clearColor(se,Ve,$e,Ke),ve.copy(ee))},reset:function(){q=!1,Se=null,ve.set(-1,0,0,0)}}}function u(){let q=!1,ee=null,Se=null,ve=null;return{setTest:function(se){se?he(f.DEPTH_TEST):ye(f.DEPTH_TEST)},setMask:function(se){ee!==se&&!q&&(f.depthMask(se),ee=se)},setFunc:function(se){if(Se!==se){switch(se){case Lu:f.depthFunc(f.NEVER);break;case Pu:f.depthFunc(f.ALWAYS);break;case Iu:f.depthFunc(f.LESS);break;case cc:f.depthFunc(f.LEQUAL);break;case Du:f.depthFunc(f.EQUAL);break;case lc:f.depthFunc(f.GEQUAL);break;case Uu:f.depthFunc(f.GREATER);break;case Nu:f.depthFunc(f.NOTEQUAL);break;default:f.depthFunc(f.LEQUAL)}Se=se}},setLocked:function(se){q=se},setClear:function(se){ve!==se&&(f.clearDepth(se),ve=se)},reset:function(){q=!1,ee=null,Se=null,ve=null}}}function m(){let q=!1,ee=null,Se=null,ve=null,se=null,Ve=null,$e=null,Ke=null,je=null;return{setTest:function(Ge){q||(Ge?he(f.STENCIL_TEST):ye(f.STENCIL_TEST))},setMask:function(Ge){ee!==Ge&&!q&&(f.stencilMask(Ge),ee=Ge)},setFunc:function(Ge,ft,St){(Se!==Ge||ve!==ft||se!==St)&&(f.stencilFunc(Ge,ft,St),Se=Ge,ve=ft,se=St)},setOp:function(Ge,ft,St){(Ve!==Ge||$e!==ft||Ke!==St)&&(f.stencilOp(Ge,ft,St),Ve=Ge,$e=ft,Ke=St)},setLocked:function(Ge){q=Ge},setClear:function(Ge){je!==Ge&&(f.clearStencil(Ge),je=Ge)},reset:function(){q=!1,ee=null,Se=null,ve=null,se=null,Ve=null,$e=null,Ke=null,je=null}}}const g=new l,v=new u,M=new m,E=new WeakMap,A=new WeakMap;let o={},e={},n=new WeakMap,r=[],s=null,c=!1,h=null,d=null,p=null,_=null,y=null,S=null,x=null,b=!1,T=null,C=null,R=null,w=null,P=null;const L=f.getParameter(f.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,O=0;const F=f.getParameter(f.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),I=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),I=O>=2);let N=null,k={};const D=f.getParameter(f.SCISSOR_BOX),B=f.getParameter(f.VIEWPORT),Q=new Nt().fromArray(D),ge=new Nt().fromArray(B);function re(q,ee,Se){const ve=new Uint8Array(4),se=f.createTexture();f.bindTexture(q,se),f.texParameteri(q,f.TEXTURE_MIN_FILTER,f.NEAREST),f.texParameteri(q,f.TEXTURE_MAG_FILTER,f.NEAREST);for(let Ve=0;Ve<Se;Ve++)f.texImage2D(ee+Ve,0,f.RGBA,1,1,0,f.RGBA,f.UNSIGNED_BYTE,ve);return se}const W={};W[f.TEXTURE_2D]=re(f.TEXTURE_2D,f.TEXTURE_2D,1),W[f.TEXTURE_CUBE_MAP]=re(f.TEXTURE_CUBE_MAP,f.TEXTURE_CUBE_MAP_POSITIVE_X,6),g.setClear(0,0,0,1),v.setClear(1),M.setClear(0),he(f.DEPTH_TEST),v.setFunc(cc),be(!1),De(Qa),he(f.CULL_FACE),te(vn);function he(q){o[q]!==!0&&(f.enable(q),o[q]=!0)}function ye(q){o[q]!==!1&&(f.disable(q),o[q]=!1)}function _e(q,ee){return e[q]!==ee?(f.bindFramebuffer(q,ee),e[q]=ee,a&&(q===f.DRAW_FRAMEBUFFER&&(e[f.FRAMEBUFFER]=ee),q===f.FRAMEBUFFER&&(e[f.DRAW_FRAMEBUFFER]=ee)),!0):!1}function ae(q,ee){let Se=r,ve=!1;if(q)if(Se=n.get(ee),Se===void 0&&(Se=[],n.set(ee,Se)),q.isWebGLMultipleRenderTargets){const se=q.texture;if(Se.length!==se.length||Se[0]!==f.COLOR_ATTACHMENT0){for(let Ve=0,$e=se.length;Ve<$e;Ve++)Se[Ve]=f.COLOR_ATTACHMENT0+Ve;Se.length=se.length,ve=!0}}else Se[0]!==f.COLOR_ATTACHMENT0&&(Se[0]=f.COLOR_ATTACHMENT0,ve=!0);else Se[0]!==f.BACK&&(Se[0]=f.BACK,ve=!0);ve&&(i.isWebGL2?f.drawBuffers(Se):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Se))}function we(q){return s!==q?(f.useProgram(q),s=q,!0):!1}const j={[wr]:f.FUNC_ADD,[Eu]:f.FUNC_SUBTRACT,[as]:f.FUNC_REVERSE_SUBTRACT};if(a)j[Wl]=f.MIN,j[Xl]=f.MAX;else{const q=t.get("EXT_blend_minmax");q!==null&&(j[Wl]=q.MIN_EXT,j[Xl]=q.MAX_EXT)}const K={[ql]:f.ZERO,[Yl]:f.ONE,[Tu]:f.SRC_COLOR,[Zl]:f.SRC_ALPHA,[Cu]:f.SRC_ALPHA_SATURATE,[Au]:f.DST_COLOR,[$l]:f.DST_ALPHA,[wu]:f.ONE_MINUS_SRC_COLOR,[Jl]:f.ONE_MINUS_SRC_ALPHA,[Ru]:f.ONE_MINUS_DST_COLOR,[Kl]:f.ONE_MINUS_DST_ALPHA};function te(q,ee,Se,ve,se,Ve,$e,Ke){if(q===vn){c===!0&&(ye(f.BLEND),c=!1);return}if(c===!1&&(he(f.BLEND),c=!0),q!==Hl){if(q!==h||Ke!==b){if((d!==wr||y!==wr)&&(f.blendEquation(f.FUNC_ADD),d=wr,y=wr),Ke)switch(q){case ta:f.blendFuncSeparate(f.ONE,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA);break;case Ii:f.blendFunc(f.ONE,f.ONE);break;case Tr:f.blendFuncSeparate(f.ZERO,f.ONE_MINUS_SRC_COLOR,f.ZERO,f.ONE);break;case oc:f.blendFuncSeparate(f.ZERO,f.SRC_COLOR,f.ZERO,f.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ta:f.blendFuncSeparate(f.SRC_ALPHA,f.ONE_MINUS_SRC_ALPHA,f.ONE,f.ONE_MINUS_SRC_ALPHA);break;case Ii:f.blendFunc(f.SRC_ALPHA,f.ONE);break;case Tr:f.blendFuncSeparate(f.ZERO,f.ONE_MINUS_SRC_COLOR,f.ZERO,f.ONE);break;case oc:f.blendFunc(f.ZERO,f.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}p=null,_=null,S=null,x=null,h=q,b=Ke}return}se=se||ee,Ve=Ve||Se,$e=$e||ve,(ee!==d||se!==y)&&(f.blendEquationSeparate(j[ee],j[se]),d=ee,y=se),(Se!==p||ve!==_||Ve!==S||$e!==x)&&(f.blendFuncSeparate(K[Se],K[ve],K[Ve],K[$e]),p=Se,_=ve,S=Ve,x=$e),h=q,b=null}function Re(q,ee){q.side===Wt?ye(f.CULL_FACE):he(f.CULL_FACE);let Se=q.side===nn;ee&&(Se=!Se),be(Se),q.blending===ta&&q.transparent===!1?te(vn):te(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.premultipliedAlpha),v.setFunc(q.depthFunc),v.setTest(q.depthTest),v.setMask(q.depthWrite),g.setMask(q.colorWrite);const ve=q.stencilWrite;M.setTest(ve),ve&&(M.setMask(q.stencilWriteMask),M.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),M.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Fe(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(f.SAMPLE_ALPHA_TO_COVERAGE):ye(f.SAMPLE_ALPHA_TO_COVERAGE)}function be(q){T!==q&&(q?f.frontFace(f.CW):f.frontFace(f.CCW),T=q)}function De(q){q!==kl?(he(f.CULL_FACE),q!==C&&(q===Qa?f.cullFace(f.BACK):q===ss?f.cullFace(f.FRONT):f.cullFace(f.FRONT_AND_BACK))):ye(f.CULL_FACE),C=q}function Oe(q){q!==R&&(I&&f.lineWidth(q),R=q)}function Fe(q,ee,Se){q?(he(f.POLYGON_OFFSET_FILL),(w!==ee||P!==Se)&&(f.polygonOffset(ee,Se),w=ee,P=Se)):ye(f.POLYGON_OFFSET_FILL)}function Xe(q){q?he(f.SCISSOR_TEST):ye(f.SCISSOR_TEST)}function it(q){q===void 0&&(q=f.TEXTURE0+L-1),N!==q&&(f.activeTexture(q),N=q)}function $(q,ee,Se){Se===void 0&&(N===null?Se=f.TEXTURE0+L-1:Se=N);let ve=k[Se];ve===void 0&&(ve={type:void 0,texture:void 0},k[Se]=ve),(ve.type!==q||ve.texture!==ee)&&(N!==Se&&(f.activeTexture(Se),N=Se),f.bindTexture(q,ee||W[q]),ve.type=q,ve.texture=ee)}function V(){const q=k[N];q!==void 0&&q.type!==void 0&&(f.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function G(){try{f.compressedTexImage2D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function fe(){try{f.compressedTexImage3D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ie(){try{f.texSubImage2D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function xe(){try{f.texSubImage3D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{f.compressedTexSubImage2D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Le(){try{f.compressedTexSubImage3D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ce(){try{f.texStorage2D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ie(){try{f.texStorage3D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{f.texImage2D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(){try{f.texImage3D.apply(f,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Je(q){Q.equals(q)===!1&&(f.scissor(q.x,q.y,q.z,q.w),Q.copy(q))}function X(q){ge.equals(q)===!1&&(f.viewport(q.x,q.y,q.z,q.w),ge.copy(q))}function z(q,ee){let Se=A.get(ee);Se===void 0&&(Se=new WeakMap,A.set(ee,Se));let ve=Se.get(q);ve===void 0&&(ve=f.getUniformBlockIndex(ee,q.name),Se.set(q,ve))}function me(q,ee){const ve=A.get(ee).get(q);E.get(q)!==ve&&(f.uniformBlockBinding(ee,ve,q.__bindingPointIndex),E.set(q,ve))}function Ne(){f.disable(f.BLEND),f.disable(f.CULL_FACE),f.disable(f.DEPTH_TEST),f.disable(f.POLYGON_OFFSET_FILL),f.disable(f.SCISSOR_TEST),f.disable(f.STENCIL_TEST),f.disable(f.SAMPLE_ALPHA_TO_COVERAGE),f.blendEquation(f.FUNC_ADD),f.blendFunc(f.ONE,f.ZERO),f.blendFuncSeparate(f.ONE,f.ZERO,f.ONE,f.ZERO),f.colorMask(!0,!0,!0,!0),f.clearColor(0,0,0,0),f.depthMask(!0),f.depthFunc(f.LESS),f.clearDepth(1),f.stencilMask(4294967295),f.stencilFunc(f.ALWAYS,0,4294967295),f.stencilOp(f.KEEP,f.KEEP,f.KEEP),f.clearStencil(0),f.cullFace(f.BACK),f.frontFace(f.CCW),f.polygonOffset(0,0),f.activeTexture(f.TEXTURE0),f.bindFramebuffer(f.FRAMEBUFFER,null),a===!0&&(f.bindFramebuffer(f.DRAW_FRAMEBUFFER,null),f.bindFramebuffer(f.READ_FRAMEBUFFER,null)),f.useProgram(null),f.lineWidth(1),f.scissor(0,0,f.canvas.width,f.canvas.height),f.viewport(0,0,f.canvas.width,f.canvas.height),o={},N=null,k={},e={},n=new WeakMap,r=[],s=null,c=!1,h=null,d=null,p=null,_=null,y=null,S=null,x=null,b=!1,T=null,C=null,R=null,w=null,P=null,Q.set(0,0,f.canvas.width,f.canvas.height),ge.set(0,0,f.canvas.width,f.canvas.height),g.reset(),v.reset(),M.reset()}return{buffers:{color:g,depth:v,stencil:M},enable:he,disable:ye,bindFramebuffer:_e,drawBuffers:ae,useProgram:we,setBlending:te,setMaterial:Re,setFlipSided:be,setCullFace:De,setLineWidth:Oe,setPolygonOffset:Fe,setScissorTest:Xe,activeTexture:it,bindTexture:$,unbindTexture:V,compressedTexImage2D:G,compressedTexImage3D:fe,texImage2D:ze,texImage3D:Be,updateUBOMapping:z,uniformBlockBinding:me,texStorage2D:ce,texStorage3D:Ie,texSubImage2D:ie,texSubImage3D:xe,compressedTexSubImage2D:Me,compressedTexSubImage3D:Le,scissor:Je,viewport:X,reset:Ne}}function B0(f,t,i,a,l,u,m){const g=l.isWebGL2,v=l.maxTextures,M=l.maxCubemapSize,E=l.maxTextureSize,A=l.maxSamples,o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,e=/OculusBrowser/g.test(typeof navigator=="undefined"?"":navigator.userAgent),n=new WeakMap;let r;const s=new WeakMap;let c=!1;try{c=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch($){}function h($,V){return c?new OffscreenCanvas($,V):zc("canvas")}function d($,V,G,fe){let ie=1;if(($.width>fe||$.height>fe)&&(ie=fe/Math.max($.width,$.height)),ie<1||V===!0)if(typeof HTMLImageElement!="undefined"&&$ instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&$ instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&$ instanceof ImageBitmap){const xe=V?ao:Math.floor,Me=xe(ie*$.width),Le=xe(ie*$.height);r===void 0&&(r=h(Me,Le));const ce=G?h(Me,Le):r;return ce.width=Me,ce.height=Le,ce.getContext("2d").drawImage($,0,0,Me,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Me+"x"+Le+")."),ce}else return"data"in $&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),$;return $}function p($){return kn($.width)&&kn($.height)}function _($){return g?!1:$.wrapS!==rn||$.wrapT!==rn||$.minFilter!==wt&&$.minFilter!==kt}function y($,V){return $.generateMipmaps&&V&&$.minFilter!==wt&&$.minFilter!==kt}function S($){f.generateMipmap($)}function x($,V,G,fe,ie=!1){if(g===!1)return V;if($!==null){if(f[$]!==void 0)return f[$];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+$+"'")}let xe=V;return V===f.RED&&(G===f.FLOAT&&(xe=f.R32F),G===f.HALF_FLOAT&&(xe=f.R16F),G===f.UNSIGNED_BYTE&&(xe=f.R8)),V===f.RG&&(G===f.FLOAT&&(xe=f.RG32F),G===f.HALF_FLOAT&&(xe=f.RG16F),G===f.UNSIGNED_BYTE&&(xe=f.RG8)),V===f.RGBA&&(G===f.FLOAT&&(xe=f.RGBA32F),G===f.HALF_FLOAT&&(xe=f.RGBA16F),G===f.UNSIGNED_BYTE&&(xe=fe===Vt&&ie===!1?f.SRGB8_ALPHA8:f.RGBA8),G===f.UNSIGNED_SHORT_4_4_4_4&&(xe=f.RGBA4),G===f.UNSIGNED_SHORT_5_5_5_1&&(xe=f.RGB5_A1)),(xe===f.R16F||xe===f.R32F||xe===f.RG16F||xe===f.RG32F||xe===f.RGBA16F||xe===f.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function b($,V,G){return y($,G)===!0||$.isFramebufferTexture&&$.minFilter!==wt&&$.minFilter!==kt?Math.log2(Math.max(V.width,V.height))+1:$.mipmaps!==void 0&&$.mipmaps.length>0?$.mipmaps.length:$.isCompressedTexture&&Array.isArray($.image)?V.mipmaps.length:1}function T($){return $===wt||$===os||$===na?f.NEAREST:f.LINEAR}function C($){const V=$.target;V.removeEventListener("dispose",C),w(V),V.isVideoTexture&&n.delete(V)}function R($){const V=$.target;V.removeEventListener("dispose",R),L(V)}function w($){const V=a.get($);if(V.__webglInit===void 0)return;const G=$.source,fe=s.get(G);if(fe){const ie=fe[V.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&P($),Object.keys(fe).length===0&&s.delete(G)}a.remove($)}function P($){const V=a.get($);f.deleteTexture(V.__webglTexture);const G=$.source,fe=s.get(G);delete fe[V.__cacheKey],m.memory.textures--}function L($){const V=$.texture,G=a.get($),fe=a.get(V);if(fe.__webglTexture!==void 0&&(f.deleteTexture(fe.__webglTexture),m.memory.textures--),$.depthTexture&&$.depthTexture.dispose(),$.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)f.deleteFramebuffer(G.__webglFramebuffer[ie]),G.__webglDepthbuffer&&f.deleteRenderbuffer(G.__webglDepthbuffer[ie]);else{if(f.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&f.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&f.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let ie=0;ie<G.__webglColorRenderbuffer.length;ie++)G.__webglColorRenderbuffer[ie]&&f.deleteRenderbuffer(G.__webglColorRenderbuffer[ie]);G.__webglDepthRenderbuffer&&f.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if($.isWebGLMultipleRenderTargets)for(let ie=0,xe=V.length;ie<xe;ie++){const Me=a.get(V[ie]);Me.__webglTexture&&(f.deleteTexture(Me.__webglTexture),m.memory.textures--),a.remove(V[ie])}a.remove(V),a.remove($)}let I=0;function O(){I=0}function F(){const $=I;return $>=v&&console.warn("THREE.WebGLTextures: Trying to use "+$+" texture units while this GPU supports only "+v),I+=1,$}function N($){const V=[];return V.push($.wrapS),V.push($.wrapT),V.push($.wrapR||0),V.push($.magFilter),V.push($.minFilter),V.push($.anisotropy),V.push($.internalFormat),V.push($.format),V.push($.type),V.push($.generateMipmaps),V.push($.premultiplyAlpha),V.push($.flipY),V.push($.unpackAlignment),V.push($.encoding),V.join()}function k($,V){const G=a.get($);if($.isVideoTexture&&Xe($),$.isRenderTargetTexture===!1&&$.version>0&&G.__version!==$.version){const fe=$.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(G,$,V);return}}i.bindTexture(f.TEXTURE_2D,G.__webglTexture,f.TEXTURE0+V)}function D($,V){const G=a.get($);if($.version>0&&G.__version!==$.version){ye(G,$,V);return}i.bindTexture(f.TEXTURE_2D_ARRAY,G.__webglTexture,f.TEXTURE0+V)}function B($,V){const G=a.get($);if($.version>0&&G.__version!==$.version){ye(G,$,V);return}i.bindTexture(f.TEXTURE_3D,G.__webglTexture,f.TEXTURE0+V)}function Q($,V){const G=a.get($);if($.version>0&&G.__version!==$.version){_e(G,$,V);return}i.bindTexture(f.TEXTURE_CUBE_MAP,G.__webglTexture,f.TEXTURE0+V)}const ge={[Rr]:f.REPEAT,[rn]:f.CLAMP_TO_EDGE,[Cr]:f.MIRRORED_REPEAT},re={[wt]:f.NEAREST,[os]:f.NEAREST_MIPMAP_NEAREST,[na]:f.NEAREST_MIPMAP_LINEAR,[kt]:f.LINEAR,[ku]:f.LINEAR_MIPMAP_NEAREST,[Lr]:f.LINEAR_MIPMAP_LINEAR};function W($,V,G){if(G?(f.texParameteri($,f.TEXTURE_WRAP_S,ge[V.wrapS]),f.texParameteri($,f.TEXTURE_WRAP_T,ge[V.wrapT]),($===f.TEXTURE_3D||$===f.TEXTURE_2D_ARRAY)&&f.texParameteri($,f.TEXTURE_WRAP_R,ge[V.wrapR]),f.texParameteri($,f.TEXTURE_MAG_FILTER,re[V.magFilter]),f.texParameteri($,f.TEXTURE_MIN_FILTER,re[V.minFilter])):(f.texParameteri($,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri($,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE),($===f.TEXTURE_3D||$===f.TEXTURE_2D_ARRAY)&&f.texParameteri($,f.TEXTURE_WRAP_R,f.CLAMP_TO_EDGE),(V.wrapS!==rn||V.wrapT!==rn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),f.texParameteri($,f.TEXTURE_MAG_FILTER,T(V.magFilter)),f.texParameteri($,f.TEXTURE_MIN_FILTER,T(V.minFilter)),V.minFilter!==wt&&V.minFilter!==kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const fe=t.get("EXT_texture_filter_anisotropic");if(V.type===Fi&&t.has("OES_texture_float_linear")===!1||g===!1&&V.type===Yn&&t.has("OES_texture_half_float_linear")===!1)return;(V.anisotropy>1||a.get(V).__currentAnisotropy)&&(f.texParameterf($,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(V.anisotropy,l.getMaxAnisotropy())),a.get(V).__currentAnisotropy=V.anisotropy)}}function he($,V){let G=!1;$.__webglInit===void 0&&($.__webglInit=!0,V.addEventListener("dispose",C));const fe=V.source;let ie=s.get(fe);ie===void 0&&(ie={},s.set(fe,ie));const xe=N(V);if(xe!==$.__cacheKey){ie[xe]===void 0&&(ie[xe]={texture:f.createTexture(),usedTimes:0},m.memory.textures++,G=!0),ie[xe].usedTimes++;const Me=ie[$.__cacheKey];Me!==void 0&&(ie[$.__cacheKey].usedTimes--,Me.usedTimes===0&&P(V)),$.__cacheKey=xe,$.__webglTexture=ie[xe].texture}return G}function ye($,V,G){let fe=f.TEXTURE_2D;(V.isDataArrayTexture||V.isCompressedArrayTexture)&&(fe=f.TEXTURE_2D_ARRAY),V.isData3DTexture&&(fe=f.TEXTURE_3D);const ie=he($,V),xe=V.source;i.bindTexture(fe,$.__webglTexture,f.TEXTURE0+G);const Me=a.get(xe);if(xe.version!==Me.__version||ie===!0){i.activeTexture(f.TEXTURE0+G),f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL,V.flipY),f.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),f.pixelStorei(f.UNPACK_ALIGNMENT,V.unpackAlignment),f.pixelStorei(f.UNPACK_COLORSPACE_CONVERSION_WEBGL,f.NONE);const Le=_(V)&&p(V.image)===!1;let ce=d(V.image,Le,!1,E);ce=it(V,ce);const Ie=p(ce)||g,ze=u.convert(V.format,V.encoding);let Be=u.convert(V.type),Je=x(V.internalFormat,ze,Be,V.encoding,V.isVideoTexture);W(fe,V,Ie);let X;const z=V.mipmaps,me=g&&V.isVideoTexture!==!0,Ne=Me.__version===void 0||ie===!0,q=b(V,ce,Ie);if(V.isDepthTexture)Je=f.DEPTH_COMPONENT,g?V.type===Fi?Je=f.DEPTH_COMPONENT32F:V.type===Ni?Je=f.DEPTH_COMPONENT24:V.type===Pr?Je=f.DEPTH24_STENCIL8:Je=f.DEPTH_COMPONENT16:V.type===Fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),V.format===Dr&&Je===f.DEPTH_COMPONENT&&V.type!==Ql&&V.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),V.type=Ni,Be=u.convert(V.type)),V.format===$n&&Je===f.DEPTH_COMPONENT&&(Je=f.DEPTH_STENCIL,V.type!==Pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),V.type=Pr,Be=u.convert(V.type))),Ne&&(me?i.texStorage2D(f.TEXTURE_2D,1,Je,ce.width,ce.height):i.texImage2D(f.TEXTURE_2D,0,Je,ce.width,ce.height,0,ze,Be,null));else if(V.isDataTexture)if(z.length>0&&Ie){me&&Ne&&i.texStorage2D(f.TEXTURE_2D,q,Je,z[0].width,z[0].height);for(let ee=0,Se=z.length;ee<Se;ee++)X=z[ee],me?i.texSubImage2D(f.TEXTURE_2D,ee,0,0,X.width,X.height,ze,Be,X.data):i.texImage2D(f.TEXTURE_2D,ee,Je,X.width,X.height,0,ze,Be,X.data);V.generateMipmaps=!1}else me?(Ne&&i.texStorage2D(f.TEXTURE_2D,q,Je,ce.width,ce.height),i.texSubImage2D(f.TEXTURE_2D,0,0,0,ce.width,ce.height,ze,Be,ce.data)):i.texImage2D(f.TEXTURE_2D,0,Je,ce.width,ce.height,0,ze,Be,ce.data);else if(V.isCompressedTexture)if(V.isCompressedArrayTexture){me&&Ne&&i.texStorage3D(f.TEXTURE_2D_ARRAY,q,Je,z[0].width,z[0].height,ce.depth);for(let ee=0,Se=z.length;ee<Se;ee++)X=z[ee],V.format!==Zn?ze!==null?me?i.compressedTexSubImage3D(f.TEXTURE_2D_ARRAY,ee,0,0,0,X.width,X.height,ce.depth,ze,X.data,0,0):i.compressedTexImage3D(f.TEXTURE_2D_ARRAY,ee,Je,X.width,X.height,ce.depth,0,X.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?i.texSubImage3D(f.TEXTURE_2D_ARRAY,ee,0,0,0,X.width,X.height,ce.depth,ze,Be,X.data):i.texImage3D(f.TEXTURE_2D_ARRAY,ee,Je,X.width,X.height,ce.depth,0,ze,Be,X.data)}else{me&&Ne&&i.texStorage2D(f.TEXTURE_2D,q,Je,z[0].width,z[0].height);for(let ee=0,Se=z.length;ee<Se;ee++)X=z[ee],V.format!==Zn?ze!==null?me?i.compressedTexSubImage2D(f.TEXTURE_2D,ee,0,0,X.width,X.height,ze,X.data):i.compressedTexImage2D(f.TEXTURE_2D,ee,Je,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?i.texSubImage2D(f.TEXTURE_2D,ee,0,0,X.width,X.height,ze,Be,X.data):i.texImage2D(f.TEXTURE_2D,ee,Je,X.width,X.height,0,ze,Be,X.data)}else if(V.isDataArrayTexture)me?(Ne&&i.texStorage3D(f.TEXTURE_2D_ARRAY,q,Je,ce.width,ce.height,ce.depth),i.texSubImage3D(f.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ze,Be,ce.data)):i.texImage3D(f.TEXTURE_2D_ARRAY,0,Je,ce.width,ce.height,ce.depth,0,ze,Be,ce.data);else if(V.isData3DTexture)me?(Ne&&i.texStorage3D(f.TEXTURE_3D,q,Je,ce.width,ce.height,ce.depth),i.texSubImage3D(f.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ze,Be,ce.data)):i.texImage3D(f.TEXTURE_3D,0,Je,ce.width,ce.height,ce.depth,0,ze,Be,ce.data);else if(V.isFramebufferTexture){if(Ne)if(me)i.texStorage2D(f.TEXTURE_2D,q,Je,ce.width,ce.height);else{let ee=ce.width,Se=ce.height;for(let ve=0;ve<q;ve++)i.texImage2D(f.TEXTURE_2D,ve,Je,ee,Se,0,ze,Be,null),ee>>=1,Se>>=1}}else if(z.length>0&&Ie){me&&Ne&&i.texStorage2D(f.TEXTURE_2D,q,Je,z[0].width,z[0].height);for(let ee=0,Se=z.length;ee<Se;ee++)X=z[ee],me?i.texSubImage2D(f.TEXTURE_2D,ee,0,0,ze,Be,X):i.texImage2D(f.TEXTURE_2D,ee,Je,ze,Be,X);V.generateMipmaps=!1}else me?(Ne&&i.texStorage2D(f.TEXTURE_2D,q,Je,ce.width,ce.height),i.texSubImage2D(f.TEXTURE_2D,0,0,0,ze,Be,ce)):i.texImage2D(f.TEXTURE_2D,0,Je,ze,Be,ce);y(V,Ie)&&S(fe),Me.__version=xe.version,V.onUpdate&&V.onUpdate(V)}$.__version=V.version}function _e($,V,G){if(V.image.length!==6)return;const fe=he($,V),ie=V.source;i.bindTexture(f.TEXTURE_CUBE_MAP,$.__webglTexture,f.TEXTURE0+G);const xe=a.get(ie);if(ie.version!==xe.__version||fe===!0){i.activeTexture(f.TEXTURE0+G),f.pixelStorei(f.UNPACK_FLIP_Y_WEBGL,V.flipY),f.pixelStorei(f.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),f.pixelStorei(f.UNPACK_ALIGNMENT,V.unpackAlignment),f.pixelStorei(f.UNPACK_COLORSPACE_CONVERSION_WEBGL,f.NONE);const Me=V.isCompressedTexture||V.image[0].isCompressedTexture,Le=V.image[0]&&V.image[0].isDataTexture,ce=[];for(let ee=0;ee<6;ee++)!Me&&!Le?ce[ee]=d(V.image[ee],!1,!0,M):ce[ee]=Le?V.image[ee].image:V.image[ee],ce[ee]=it(V,ce[ee]);const Ie=ce[0],ze=p(Ie)||g,Be=u.convert(V.format,V.encoding),Je=u.convert(V.type),X=x(V.internalFormat,Be,Je,V.encoding),z=g&&V.isVideoTexture!==!0,me=xe.__version===void 0||fe===!0;let Ne=b(V,Ie,ze);W(f.TEXTURE_CUBE_MAP,V,ze);let q;if(Me){z&&me&&i.texStorage2D(f.TEXTURE_CUBE_MAP,Ne,X,Ie.width,Ie.height);for(let ee=0;ee<6;ee++){q=ce[ee].mipmaps;for(let Se=0;Se<q.length;Se++){const ve=q[Se];V.format!==Zn?Be!==null?z?i.compressedTexSubImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,0,0,ve.width,ve.height,Be,ve.data):i.compressedTexImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,X,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?i.texSubImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,0,0,ve.width,ve.height,Be,Je,ve.data):i.texImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se,X,ve.width,ve.height,0,Be,Je,ve.data)}}}else{q=V.mipmaps,z&&me&&(q.length>0&&Ne++,i.texStorage2D(f.TEXTURE_CUBE_MAP,Ne,X,ce[0].width,ce[0].height));for(let ee=0;ee<6;ee++)if(Le){z?i.texSubImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ce[ee].width,ce[ee].height,Be,Je,ce[ee].data):i.texImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,X,ce[ee].width,ce[ee].height,0,Be,Je,ce[ee].data);for(let Se=0;Se<q.length;Se++){const se=q[Se].image[ee].image;z?i.texSubImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,0,0,se.width,se.height,Be,Je,se.data):i.texImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,X,se.width,se.height,0,Be,Je,se.data)}}else{z?i.texSubImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Be,Je,ce[ee]):i.texImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,X,Be,Je,ce[ee]);for(let Se=0;Se<q.length;Se++){const ve=q[Se];z?i.texSubImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,0,0,Be,Je,ve.image[ee]):i.texImage2D(f.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Se+1,X,Be,Je,ve.image[ee])}}}y(V,ze)&&S(f.TEXTURE_CUBE_MAP),xe.__version=ie.version,V.onUpdate&&V.onUpdate(V)}$.__version=V.version}function ae($,V,G,fe,ie){const xe=u.convert(G.format,G.encoding),Me=u.convert(G.type),Le=x(G.internalFormat,xe,Me,G.encoding);a.get(V).__hasExternalTextures||(ie===f.TEXTURE_3D||ie===f.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,Le,V.width,V.height,V.depth,0,xe,Me,null):i.texImage2D(ie,0,Le,V.width,V.height,0,xe,Me,null)),i.bindFramebuffer(f.FRAMEBUFFER,$),Fe(V)?o.framebufferTexture2DMultisampleEXT(f.FRAMEBUFFER,fe,ie,a.get(G).__webglTexture,0,Oe(V)):(ie===f.TEXTURE_2D||ie>=f.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=f.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&f.framebufferTexture2D(f.FRAMEBUFFER,fe,ie,a.get(G).__webglTexture,0),i.bindFramebuffer(f.FRAMEBUFFER,null)}function we($,V,G){if(f.bindRenderbuffer(f.RENDERBUFFER,$),V.depthBuffer&&!V.stencilBuffer){let fe=f.DEPTH_COMPONENT16;if(G||Fe(V)){const ie=V.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Fi?fe=f.DEPTH_COMPONENT32F:ie.type===Ni&&(fe=f.DEPTH_COMPONENT24));const xe=Oe(V);Fe(V)?o.renderbufferStorageMultisampleEXT(f.RENDERBUFFER,xe,fe,V.width,V.height):f.renderbufferStorageMultisample(f.RENDERBUFFER,xe,fe,V.width,V.height)}else f.renderbufferStorage(f.RENDERBUFFER,fe,V.width,V.height);f.framebufferRenderbuffer(f.FRAMEBUFFER,f.DEPTH_ATTACHMENT,f.RENDERBUFFER,$)}else if(V.depthBuffer&&V.stencilBuffer){const fe=Oe(V);G&&Fe(V)===!1?f.renderbufferStorageMultisample(f.RENDERBUFFER,fe,f.DEPTH24_STENCIL8,V.width,V.height):Fe(V)?o.renderbufferStorageMultisampleEXT(f.RENDERBUFFER,fe,f.DEPTH24_STENCIL8,V.width,V.height):f.renderbufferStorage(f.RENDERBUFFER,f.DEPTH_STENCIL,V.width,V.height),f.framebufferRenderbuffer(f.FRAMEBUFFER,f.DEPTH_STENCIL_ATTACHMENT,f.RENDERBUFFER,$)}else{const fe=V.isWebGLMultipleRenderTargets===!0?V.texture:[V.texture];for(let ie=0;ie<fe.length;ie++){const xe=fe[ie],Me=u.convert(xe.format,xe.encoding),Le=u.convert(xe.type),ce=x(xe.internalFormat,Me,Le,xe.encoding),Ie=Oe(V);G&&Fe(V)===!1?f.renderbufferStorageMultisample(f.RENDERBUFFER,Ie,ce,V.width,V.height):Fe(V)?o.renderbufferStorageMultisampleEXT(f.RENDERBUFFER,Ie,ce,V.width,V.height):f.renderbufferStorage(f.RENDERBUFFER,ce,V.width,V.height)}}f.bindRenderbuffer(f.RENDERBUFFER,null)}function j($,V){if(V&&V.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(f.FRAMEBUFFER,$),!(V.depthTexture&&V.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(V.depthTexture).__webglTexture||V.depthTexture.image.width!==V.width||V.depthTexture.image.height!==V.height)&&(V.depthTexture.image.width=V.width,V.depthTexture.image.height=V.height,V.depthTexture.needsUpdate=!0),k(V.depthTexture,0);const fe=a.get(V.depthTexture).__webglTexture,ie=Oe(V);if(V.depthTexture.format===Dr)Fe(V)?o.framebufferTexture2DMultisampleEXT(f.FRAMEBUFFER,f.DEPTH_ATTACHMENT,f.TEXTURE_2D,fe,0,ie):f.framebufferTexture2D(f.FRAMEBUFFER,f.DEPTH_ATTACHMENT,f.TEXTURE_2D,fe,0);else if(V.depthTexture.format===$n)Fe(V)?o.framebufferTexture2DMultisampleEXT(f.FRAMEBUFFER,f.DEPTH_STENCIL_ATTACHMENT,f.TEXTURE_2D,fe,0,ie):f.framebufferTexture2D(f.FRAMEBUFFER,f.DEPTH_STENCIL_ATTACHMENT,f.TEXTURE_2D,fe,0);else throw new Error("Unknown depthTexture format")}function K($){const V=a.get($),G=$.isWebGLCubeRenderTarget===!0;if($.depthTexture&&!V.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");j(V.__webglFramebuffer,$)}else if(G){V.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)i.bindFramebuffer(f.FRAMEBUFFER,V.__webglFramebuffer[fe]),V.__webglDepthbuffer[fe]=f.createRenderbuffer(),we(V.__webglDepthbuffer[fe],$,!1)}else i.bindFramebuffer(f.FRAMEBUFFER,V.__webglFramebuffer),V.__webglDepthbuffer=f.createRenderbuffer(),we(V.__webglDepthbuffer,$,!1);i.bindFramebuffer(f.FRAMEBUFFER,null)}function te($,V,G){const fe=a.get($);V!==void 0&&ae(fe.__webglFramebuffer,$,$.texture,f.COLOR_ATTACHMENT0,f.TEXTURE_2D),G!==void 0&&K($)}function Re($){const V=$.texture,G=a.get($),fe=a.get(V);$.addEventListener("dispose",R),$.isWebGLMultipleRenderTargets!==!0&&(fe.__webglTexture===void 0&&(fe.__webglTexture=f.createTexture()),fe.__version=V.version,m.memory.textures++);const ie=$.isWebGLCubeRenderTarget===!0,xe=$.isWebGLMultipleRenderTargets===!0,Me=p($)||g;if(ie){G.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)G.__webglFramebuffer[Le]=f.createFramebuffer()}else{if(G.__webglFramebuffer=f.createFramebuffer(),xe)if(l.drawBuffers){const Le=$.texture;for(let ce=0,Ie=Le.length;ce<Ie;ce++){const ze=a.get(Le[ce]);ze.__webglTexture===void 0&&(ze.__webglTexture=f.createTexture(),m.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(g&&$.samples>0&&Fe($)===!1){const Le=xe?V:[V];G.__webglMultisampledFramebuffer=f.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(f.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ce=0;ce<Le.length;ce++){const Ie=Le[ce];G.__webglColorRenderbuffer[ce]=f.createRenderbuffer(),f.bindRenderbuffer(f.RENDERBUFFER,G.__webglColorRenderbuffer[ce]);const ze=u.convert(Ie.format,Ie.encoding),Be=u.convert(Ie.type),Je=x(Ie.internalFormat,ze,Be,Ie.encoding,$.isXRRenderTarget===!0),X=Oe($);f.renderbufferStorageMultisample(f.RENDERBUFFER,X,Je,$.width,$.height),f.framebufferRenderbuffer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0+ce,f.RENDERBUFFER,G.__webglColorRenderbuffer[ce])}f.bindRenderbuffer(f.RENDERBUFFER,null),$.depthBuffer&&(G.__webglDepthRenderbuffer=f.createRenderbuffer(),we(G.__webglDepthRenderbuffer,$,!0)),i.bindFramebuffer(f.FRAMEBUFFER,null)}}if(ie){i.bindTexture(f.TEXTURE_CUBE_MAP,fe.__webglTexture),W(f.TEXTURE_CUBE_MAP,V,Me);for(let Le=0;Le<6;Le++)ae(G.__webglFramebuffer[Le],$,V,f.COLOR_ATTACHMENT0,f.TEXTURE_CUBE_MAP_POSITIVE_X+Le);y(V,Me)&&S(f.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(xe){const Le=$.texture;for(let ce=0,Ie=Le.length;ce<Ie;ce++){const ze=Le[ce],Be=a.get(ze);i.bindTexture(f.TEXTURE_2D,Be.__webglTexture),W(f.TEXTURE_2D,ze,Me),ae(G.__webglFramebuffer,$,ze,f.COLOR_ATTACHMENT0+ce,f.TEXTURE_2D),y(ze,Me)&&S(f.TEXTURE_2D)}i.unbindTexture()}else{let Le=f.TEXTURE_2D;($.isWebGL3DRenderTarget||$.isWebGLArrayRenderTarget)&&(g?Le=$.isWebGL3DRenderTarget?f.TEXTURE_3D:f.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Le,fe.__webglTexture),W(Le,V,Me),ae(G.__webglFramebuffer,$,V,f.COLOR_ATTACHMENT0,Le),y(V,Me)&&S(Le),i.unbindTexture()}$.depthBuffer&&K($)}function be($){const V=p($)||g,G=$.isWebGLMultipleRenderTargets===!0?$.texture:[$.texture];for(let fe=0,ie=G.length;fe<ie;fe++){const xe=G[fe];if(y(xe,V)){const Me=$.isWebGLCubeRenderTarget?f.TEXTURE_CUBE_MAP:f.TEXTURE_2D,Le=a.get(xe).__webglTexture;i.bindTexture(Me,Le),S(Me),i.unbindTexture()}}}function De($){if(g&&$.samples>0&&Fe($)===!1){const V=$.isWebGLMultipleRenderTargets?$.texture:[$.texture],G=$.width,fe=$.height;let ie=f.COLOR_BUFFER_BIT;const xe=[],Me=$.stencilBuffer?f.DEPTH_STENCIL_ATTACHMENT:f.DEPTH_ATTACHMENT,Le=a.get($),ce=$.isWebGLMultipleRenderTargets===!0;if(ce)for(let Ie=0;Ie<V.length;Ie++)i.bindFramebuffer(f.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),f.framebufferRenderbuffer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0+Ie,f.RENDERBUFFER,null),i.bindFramebuffer(f.FRAMEBUFFER,Le.__webglFramebuffer),f.framebufferTexture2D(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0+Ie,f.TEXTURE_2D,null,0);i.bindFramebuffer(f.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.bindFramebuffer(f.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<V.length;Ie++){xe.push(f.COLOR_ATTACHMENT0+Ie),$.depthBuffer&&xe.push(Me);const ze=Le.__ignoreDepthValues!==void 0?Le.__ignoreDepthValues:!1;if(ze===!1&&($.depthBuffer&&(ie|=f.DEPTH_BUFFER_BIT),$.stencilBuffer&&(ie|=f.STENCIL_BUFFER_BIT)),ce&&f.framebufferRenderbuffer(f.READ_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]),ze===!0&&(f.invalidateFramebuffer(f.READ_FRAMEBUFFER,[Me]),f.invalidateFramebuffer(f.DRAW_FRAMEBUFFER,[Me])),ce){const Be=a.get(V[Ie]).__webglTexture;f.framebufferTexture2D(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0,f.TEXTURE_2D,Be,0)}f.blitFramebuffer(0,0,G,fe,0,0,G,fe,ie,f.NEAREST),e&&f.invalidateFramebuffer(f.READ_FRAMEBUFFER,xe)}if(i.bindFramebuffer(f.READ_FRAMEBUFFER,null),i.bindFramebuffer(f.DRAW_FRAMEBUFFER,null),ce)for(let Ie=0;Ie<V.length;Ie++){i.bindFramebuffer(f.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),f.framebufferRenderbuffer(f.FRAMEBUFFER,f.COLOR_ATTACHMENT0+Ie,f.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);const ze=a.get(V[Ie]).__webglTexture;i.bindFramebuffer(f.FRAMEBUFFER,Le.__webglFramebuffer),f.framebufferTexture2D(f.DRAW_FRAMEBUFFER,f.COLOR_ATTACHMENT0+Ie,f.TEXTURE_2D,ze,0)}i.bindFramebuffer(f.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}}function Oe($){return Math.min(A,$.samples)}function Fe($){const V=a.get($);return g&&$.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&V.__useRenderToTexture!==!1}function Xe($){const V=m.render.frame;n.get($)!==V&&(n.set($,V),$.update())}function it($,V){const G=$.encoding,fe=$.format,ie=$.type;return $.isCompressedTexture===!0||$.isVideoTexture===!0||$.format===Nc||G!==Bi&&(G===Vt?g===!1?t.has("EXT_sRGB")===!0&&fe===Zn?($.format=Nc,$.minFilter=kt,$.generateMipmaps=!1):V=Gc.sRGBToLinear(V):(fe!==Zn||ie!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),V}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=k,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=Q,this.rebindTextures=te,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Fe}function cp(f,t,i){const a=i.isWebGL2;function l(u,m=null){let g;if(u===Gn)return f.UNSIGNED_BYTE;if(u===Oi)return f.UNSIGNED_SHORT_4_4_4_4;if(u===ia)return f.UNSIGNED_SHORT_5_5_5_1;if(u===cf)return f.BYTE;if(u===nr)return f.SHORT;if(u===Ql)return f.UNSIGNED_SHORT;if(u===Vu)return f.INT;if(u===Ni)return f.UNSIGNED_INT;if(u===Fi)return f.FLOAT;if(u===Yn)return a?f.HALF_FLOAT:(g=t.get("OES_texture_half_float"),g!==null?g.HALF_FLOAT_OES:null);if(u===jl)return f.ALPHA;if(u===Zn)return f.RGBA;if(u===Jn)return f.LUMINANCE;if(u===Hu)return f.LUMINANCE_ALPHA;if(u===Dr)return f.DEPTH_COMPONENT;if(u===$n)return f.DEPTH_STENCIL;if(u===cs)return f.RED;if(u===Ir)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),f.RGBA;if(u===Nc)return g=t.get("EXT_sRGB"),g!==null?g.SRGB_ALPHA_EXT:null;if(u===Wu)return f.RED_INTEGER;if(u===eh)return f.RG;if(u===Xu)return f.RG_INTEGER;if(u===th)return f.RGBA_INTEGER;if(u===to||u===ra||u===sa||u===aa)if(m===Vt)if(g=t.get("WEBGL_compressed_texture_s3tc_srgb"),g!==null){if(u===to)return g.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===ra)return g.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===sa)return g.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===aa)return g.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(g=t.get("WEBGL_compressed_texture_s3tc"),g!==null){if(u===to)return g.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===ra)return g.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===sa)return g.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===aa)return g.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===no||u===uc||u===dc||u===fc)if(g=t.get("WEBGL_compressed_texture_pvrtc"),g!==null){if(u===no)return g.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===uc)return g.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===dc)return g.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===fc)return g.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===nh)return g=t.get("WEBGL_compressed_texture_etc1"),g!==null?g.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===ih||u===pc)if(g=t.get("WEBGL_compressed_texture_etc"),g!==null){if(u===ih)return m===Vt?g.COMPRESSED_SRGB8_ETC2:g.COMPRESSED_RGB8_ETC2;if(u===pc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:g.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===mc||u===gc||u===_c||u===xc||u===yc||u===vc||u===Mc||u===Sc||u===bc||u===Ec||u===Tc||u===wc||u===Ac||u===Rc)if(g=t.get("WEBGL_compressed_texture_astc"),g!==null){if(u===mc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:g.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===gc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:g.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===_c)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:g.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===xc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:g.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===yc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:g.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===vc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:g.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===Mc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:g.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Sc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:g.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===bc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:g.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Ec)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:g.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Tc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:g.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===wc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:g.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===Ac)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:g.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===Rc)return m===Vt?g.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:g.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Cc)if(g=t.get("EXT_texture_compression_bptc"),g!==null){if(u===Cc)return m===Vt?g.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:g.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return u===Pr?a?f.UNSIGNED_INT_24_8:(g=t.get("WEBGL_depth_texture"),g!==null?g.UNSIGNED_INT_24_8_WEBGL:null):f[u]!==void 0?f[u]:null}return{convert:l}}class Md extends Rt{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lo extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lp={type:"move"};class Sd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,a){let l=null,u=null,m=null;const g=this._targetRay,v=this._grip,M=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(M&&t.hand){m=!0;for(const r of t.hand.values()){const s=i.getJointPose(r,a);if(M.joints[r.jointName]===void 0){const h=new Lo;h.matrixAutoUpdate=!1,h.visible=!1,M.joints[r.jointName]=h,M.add(h)}const c=M.joints[r.jointName];s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.jointRadius=s.radius),c.visible=s!==null}const E=M.joints["index-finger-tip"],A=M.joints["thumb-tip"],o=E.position.distanceTo(A.position),e=.02,n=.005;M.inputState.pinching&&o>e+n?(M.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!M.inputState.pinching&&o<=e-n&&(M.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else v!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,a),u!==null&&(v.matrix.fromArray(u.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),u.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(u.linearVelocity)):v.hasLinearVelocity=!1,u.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(u.angularVelocity)):v.hasAngularVelocity=!1));g!==null&&(l=i.getPose(t.targetRaySpace,a),l===null&&u!==null&&(l=u),l!==null&&(g.matrix.fromArray(l.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),l.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(l.linearVelocity)):g.hasLinearVelocity=!1,l.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(l.angularVelocity)):g.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return g!==null&&(g.visible=l!==null),v!==null&&(v.visible=u!==null),M!==null&&(M.visible=m!==null),this}}class hp extends qt{constructor(t,i,a,l,u,m,g,v,M,E){if(E=E!==void 0?E:Dr,E!==Dr&&E!==$n)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&E===Dr&&(a=Ni),a===void 0&&E===$n&&(a=Pr),super(null,l,u,m,g,v,E,a,M),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=g!==void 0?g:wt,this.minFilter=v!==void 0?v:wt,this.flipY=!1,this.generateMipmaps=!1}}class z0 extends ir{constructor(t,i){super();const a=this;let l=null,u=1,m=null,g="local-floor",v=null,M=null,E=null,A=null,o=null,e=null;const n=i.getContextAttributes();let r=null,s=null;const c=[],h=[],d=new Rt;d.layers.enable(1),d.viewport=new Nt;const p=new Rt;p.layers.enable(2),p.viewport=new Nt;const _=[d,p],y=new Md;y.layers.enable(1),y.layers.enable(2);let S=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let k=c[N];return k===void 0&&(k=new Sd,c[N]=k),k.getTargetRaySpace()},this.getControllerGrip=function(N){let k=c[N];return k===void 0&&(k=new Sd,c[N]=k),k.getGripSpace()},this.getHand=function(N){let k=c[N];return k===void 0&&(k=new Sd,c[N]=k),k.getHandSpace()};function b(N){const k=h.indexOf(N.inputSource);if(k===-1)return;const D=c[k];D!==void 0&&D.dispatchEvent({type:N.type,data:N.inputSource})}function T(){l.removeEventListener("select",b),l.removeEventListener("selectstart",b),l.removeEventListener("selectend",b),l.removeEventListener("squeeze",b),l.removeEventListener("squeezestart",b),l.removeEventListener("squeezeend",b),l.removeEventListener("end",T),l.removeEventListener("inputsourceschange",C);for(let N=0;N<c.length;N++){const k=h[N];k!==null&&(h[N]=null,c[N].disconnect(k))}S=null,x=null,t.setRenderTarget(r),o=null,A=null,E=null,l=null,s=null,F.stop(),a.isPresenting=!1,a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){u=N,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){g=N,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return v||m},this.setReferenceSpace=function(N){v=N},this.getBaseLayer=function(){return A!==null?A:o},this.getBinding=function(){return E},this.getFrame=function(){return e},this.getSession=function(){return l},this.setSession=function(N){return rs(this,null,function*(){if(l=N,l!==null){if(r=t.getRenderTarget(),l.addEventListener("select",b),l.addEventListener("selectstart",b),l.addEventListener("selectend",b),l.addEventListener("squeeze",b),l.addEventListener("squeezestart",b),l.addEventListener("squeezeend",b),l.addEventListener("end",T),l.addEventListener("inputsourceschange",C),n.xrCompatible!==!0&&(yield i.makeXRCompatible()),l.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const k={antialias:l.renderState.layers===void 0?n.antialias:!0,alpha:n.alpha,depth:n.depth,stencil:n.stencil,framebufferScaleFactor:u};o=new XRWebGLLayer(l,i,k),l.updateRenderState({baseLayer:o}),s=new In(o.framebufferWidth,o.framebufferHeight,{format:Zn,type:Gn,encoding:t.outputEncoding,stencilBuffer:n.stencil})}else{let k=null,D=null,B=null;n.depth&&(B=n.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,k=n.stencil?$n:Dr,D=n.stencil?Pr:Ni);const Q={colorFormat:i.RGBA8,depthFormat:B,scaleFactor:u};E=new XRWebGLBinding(l,i),A=E.createProjectionLayer(Q),l.updateRenderState({layers:[A]}),s=new In(A.textureWidth,A.textureHeight,{format:Zn,type:Gn,depthTexture:new hp(A.textureWidth,A.textureHeight,D,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:n.stencil,encoding:t.outputEncoding,samples:n.antialias?4:0});const ge=t.properties.get(s);ge.__ignoreDepthValues=A.ignoreDepthValues}s.isXRRenderTarget=!0,this.setFoveation(1),v=null,m=yield l.requestReferenceSpace(g),F.setContext(l),F.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}})};function C(N){for(let k=0;k<N.removed.length;k++){const D=N.removed[k],B=h.indexOf(D);B>=0&&(h[B]=null,c[B].dispatchEvent({type:"disconnected",data:D}))}for(let k=0;k<N.added.length;k++){const D=N.added[k];let B=h.indexOf(D);if(B===-1){for(let ge=0;ge<c.length;ge++)if(ge>=h.length){h.push(D),B=ge;break}else if(h[ge]===null){h[ge]=D,B=ge;break}if(B===-1)break}const Q=c[B];Q&&Q.dispatchEvent({type:"connected",data:D})}}const R=new Z,w=new Z;function P(N,k,D){R.setFromMatrixPosition(k.matrixWorld),w.setFromMatrixPosition(D.matrixWorld);const B=R.distanceTo(w),Q=k.projectionMatrix.elements,ge=D.projectionMatrix.elements,re=Q[14]/(Q[10]-1),W=Q[14]/(Q[10]+1),he=(Q[9]+1)/Q[5],ye=(Q[9]-1)/Q[5],_e=(Q[8]-1)/Q[0],ae=(ge[8]+1)/ge[0],we=re*_e,j=re*ae,K=B/(-_e+ae),te=K*-_e;k.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(te),N.translateZ(K),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const Re=re+K,be=W+K,De=we-te,Oe=j+(B-te),Fe=he*W/be*Re,Xe=ye*W/be*Re;N.projectionMatrix.makePerspective(De,Oe,Fe,Xe,Re,be)}function L(N,k){k===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(k.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(l===null)return;y.near=p.near=d.near=N.near,y.far=p.far=d.far=N.far,(S!==y.near||x!==y.far)&&(l.updateRenderState({depthNear:y.near,depthFar:y.far}),S=y.near,x=y.far);const k=N.parent,D=y.cameras;L(y,k);for(let Q=0;Q<D.length;Q++)L(D[Q],k);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),N.matrix.copy(y.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale);const B=N.children;for(let Q=0,ge=B.length;Q<ge;Q++)B[Q].updateMatrixWorld(!0);D.length===2?P(y,d,p):y.projectionMatrix.copy(d.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(A!==null)return A.fixedFoveation;if(o!==null)return o.fixedFoveation},this.setFoveation=function(N){A!==null&&(A.fixedFoveation=N),o!==null&&o.fixedFoveation!==void 0&&(o.fixedFoveation=N)};let I=null;function O(N,k){if(M=k.getViewerPose(v||m),e=k,M!==null){const D=M.views;o!==null&&(t.setRenderTargetFramebuffer(s,o.framebuffer),t.setRenderTarget(s));let B=!1;D.length!==y.cameras.length&&(y.cameras.length=0,B=!0);for(let Q=0;Q<D.length;Q++){const ge=D[Q];let re=null;if(o!==null)re=o.getViewport(ge);else{const he=E.getViewSubImage(A,ge);re=he.viewport,Q===0&&(t.setRenderTargetTextures(s,he.colorTexture,A.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(s))}let W=_[Q];W===void 0&&(W=new Rt,W.layers.enable(Q),W.viewport=new Nt,_[Q]=W),W.matrix.fromArray(ge.transform.matrix),W.projectionMatrix.fromArray(ge.projectionMatrix),W.viewport.set(re.x,re.y,re.width,re.height),Q===0&&y.matrix.copy(W.matrix),B===!0&&y.cameras.push(W)}}for(let D=0;D<c.length;D++){const B=h[D],Q=c[D];B!==null&&Q!==void 0&&Q.update(B,k,v||m)}I&&I(N,k),e=null}const F=new qc;F.setAnimationLoop(O),this.setAnimationLoop=function(N){I=N},this.dispose=function(){}}}function G0(f,t){function i(r,s){r.fogColor.value.copy(s.color),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)}function a(r,s,c,h,d){s.isMeshBasicMaterial||s.isMeshLambertMaterial?l(r,s):s.isMeshToonMaterial?(l(r,s),E(r,s)):s.isMeshPhongMaterial?(l(r,s),M(r,s)):s.isMeshStandardMaterial?(l(r,s),A(r,s),s.isMeshPhysicalMaterial&&o(r,s,d)):s.isMeshMatcapMaterial?(l(r,s),e(r,s)):s.isMeshDepthMaterial?l(r,s):s.isMeshDistanceMaterial?(l(r,s),n(r,s)):s.isMeshNormalMaterial?l(r,s):s.isLineBasicMaterial?(u(r,s),s.isLineDashedMaterial&&m(r,s)):s.isPointsMaterial?g(r,s,c,h):s.isSpriteMaterial?v(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}function l(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map),s.alphaMap&&(r.alphaMap.value=s.alphaMap),s.bumpMap&&(r.bumpMap.value=s.bumpMap,r.bumpScale.value=s.bumpScale,s.side===nn&&(r.bumpScale.value*=-1)),s.displacementMap&&(r.displacementMap.value=s.displacementMap,r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap),s.normalMap&&(r.normalMap.value=s.normalMap,r.normalScale.value.copy(s.normalScale),s.side===nn&&r.normalScale.value.negate()),s.specularMap&&(r.specularMap.value=s.specularMap),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);const c=t.get(s).envMap;if(c&&(r.envMap.value=c,r.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap){r.lightMap.value=s.lightMap;const p=f.physicallyCorrectLights!==!0?Math.PI:1;r.lightMapIntensity.value=s.lightMapIntensity*p}s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity);let h;s.map?h=s.map:s.specularMap?h=s.specularMap:s.displacementMap?h=s.displacementMap:s.normalMap?h=s.normalMap:s.bumpMap?h=s.bumpMap:s.roughnessMap?h=s.roughnessMap:s.metalnessMap?h=s.metalnessMap:s.alphaMap?h=s.alphaMap:s.emissiveMap?h=s.emissiveMap:s.clearcoatMap?h=s.clearcoatMap:s.clearcoatNormalMap?h=s.clearcoatNormalMap:s.clearcoatRoughnessMap?h=s.clearcoatRoughnessMap:s.iridescenceMap?h=s.iridescenceMap:s.iridescenceThicknessMap?h=s.iridescenceThicknessMap:s.specularIntensityMap?h=s.specularIntensityMap:s.specularColorMap?h=s.specularColorMap:s.transmissionMap?h=s.transmissionMap:s.thicknessMap?h=s.thicknessMap:s.sheenColorMap?h=s.sheenColorMap:s.sheenRoughnessMap&&(h=s.sheenRoughnessMap),h!==void 0&&(h.isWebGLRenderTarget&&(h=h.texture),h.matrixAutoUpdate===!0&&h.updateMatrix(),r.uvTransform.value.copy(h.matrix));let d;s.aoMap?d=s.aoMap:s.lightMap&&(d=s.lightMap),d!==void 0&&(d.isWebGLRenderTarget&&(d=d.texture),d.matrixAutoUpdate===!0&&d.updateMatrix(),r.uv2Transform.value.copy(d.matrix))}function u(r,s){r.diffuse.value.copy(s.color),r.opacity.value=s.opacity}function m(r,s){r.dashSize.value=s.dashSize,r.totalSize.value=s.dashSize+s.gapSize,r.scale.value=s.scale}function g(r,s,c,h){r.diffuse.value.copy(s.color),r.opacity.value=s.opacity,r.size.value=s.size*c,r.scale.value=h*.5,s.map&&(r.map.value=s.map),s.alphaMap&&(r.alphaMap.value=s.alphaMap),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let d;s.map?d=s.map:s.alphaMap&&(d=s.alphaMap),d!==void 0&&(d.matrixAutoUpdate===!0&&d.updateMatrix(),r.uvTransform.value.copy(d.matrix))}function v(r,s){r.diffuse.value.copy(s.color),r.opacity.value=s.opacity,r.rotation.value=s.rotation,s.map&&(r.map.value=s.map),s.alphaMap&&(r.alphaMap.value=s.alphaMap),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let c;s.map?c=s.map:s.alphaMap&&(c=s.alphaMap),c!==void 0&&(c.matrixAutoUpdate===!0&&c.updateMatrix(),r.uvTransform.value.copy(c.matrix))}function M(r,s){r.specular.value.copy(s.specular),r.shininess.value=Math.max(s.shininess,1e-4)}function E(r,s){s.gradientMap&&(r.gradientMap.value=s.gradientMap)}function A(r,s){r.roughness.value=s.roughness,r.metalness.value=s.metalness,s.roughnessMap&&(r.roughnessMap.value=s.roughnessMap),s.metalnessMap&&(r.metalnessMap.value=s.metalnessMap),t.get(s).envMap&&(r.envMapIntensity.value=s.envMapIntensity)}function o(r,s,c){r.ior.value=s.ior,s.sheen>0&&(r.sheenColor.value.copy(s.sheenColor).multiplyScalar(s.sheen),r.sheenRoughness.value=s.sheenRoughness,s.sheenColorMap&&(r.sheenColorMap.value=s.sheenColorMap),s.sheenRoughnessMap&&(r.sheenRoughnessMap.value=s.sheenRoughnessMap)),s.clearcoat>0&&(r.clearcoat.value=s.clearcoat,r.clearcoatRoughness.value=s.clearcoatRoughness,s.clearcoatMap&&(r.clearcoatMap.value=s.clearcoatMap),s.clearcoatRoughnessMap&&(r.clearcoatRoughnessMap.value=s.clearcoatRoughnessMap),s.clearcoatNormalMap&&(r.clearcoatNormalScale.value.copy(s.clearcoatNormalScale),r.clearcoatNormalMap.value=s.clearcoatNormalMap,s.side===nn&&r.clearcoatNormalScale.value.negate())),s.iridescence>0&&(r.iridescence.value=s.iridescence,r.iridescenceIOR.value=s.iridescenceIOR,r.iridescenceThicknessMinimum.value=s.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum.value=s.iridescenceThicknessRange[1],s.iridescenceMap&&(r.iridescenceMap.value=s.iridescenceMap),s.iridescenceThicknessMap&&(r.iridescenceThicknessMap.value=s.iridescenceThicknessMap)),s.transmission>0&&(r.transmission.value=s.transmission,r.transmissionSamplerMap.value=c.texture,r.transmissionSamplerSize.value.set(c.width,c.height),s.transmissionMap&&(r.transmissionMap.value=s.transmissionMap),r.thickness.value=s.thickness,s.thicknessMap&&(r.thicknessMap.value=s.thicknessMap),r.attenuationDistance.value=s.attenuationDistance,r.attenuationColor.value.copy(s.attenuationColor)),r.specularIntensity.value=s.specularIntensity,r.specularColor.value.copy(s.specularColor),s.specularIntensityMap&&(r.specularIntensityMap.value=s.specularIntensityMap),s.specularColorMap&&(r.specularColorMap.value=s.specularColorMap)}function e(r,s){s.matcap&&(r.matcap.value=s.matcap)}function n(r,s){r.referencePosition.value.copy(s.referencePosition),r.nearDistance.value=s.nearDistance,r.farDistance.value=s.farDistance}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function k0(f,t,i,a){let l={},u={},m=[];const g=i.isWebGL2?f.getParameter(f.MAX_UNIFORM_BUFFER_BINDINGS):0;function v(h,d){const p=d.program;a.uniformBlockBinding(h,p)}function M(h,d){let p=l[h.id];p===void 0&&(n(h),p=E(h),l[h.id]=p,h.addEventListener("dispose",s));const _=d.program;a.updateUBOMapping(h,_);const y=t.render.frame;u[h.id]!==y&&(o(h),u[h.id]=y)}function E(h){const d=A();h.__bindingPointIndex=d;const p=f.createBuffer(),_=h.__size,y=h.usage;return f.bindBuffer(f.UNIFORM_BUFFER,p),f.bufferData(f.UNIFORM_BUFFER,_,y),f.bindBuffer(f.UNIFORM_BUFFER,null),f.bindBufferBase(f.UNIFORM_BUFFER,d,p),p}function A(){for(let h=0;h<g;h++)if(m.indexOf(h)===-1)return m.push(h),h;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function o(h){const d=l[h.id],p=h.uniforms,_=h.__cache;f.bindBuffer(f.UNIFORM_BUFFER,d);for(let y=0,S=p.length;y<S;y++){const x=p[y];if(e(x,y,_)===!0){const b=x.value,T=x.__offset;typeof b=="number"?(x.__data[0]=b,f.bufferSubData(f.UNIFORM_BUFFER,T,x.__data)):(x.value.isMatrix3?(x.__data[0]=x.value.elements[0],x.__data[1]=x.value.elements[1],x.__data[2]=x.value.elements[2],x.__data[3]=x.value.elements[0],x.__data[4]=x.value.elements[3],x.__data[5]=x.value.elements[4],x.__data[6]=x.value.elements[5],x.__data[7]=x.value.elements[0],x.__data[8]=x.value.elements[6],x.__data[9]=x.value.elements[7],x.__data[10]=x.value.elements[8],x.__data[11]=x.value.elements[0]):b.toArray(x.__data),f.bufferSubData(f.UNIFORM_BUFFER,T,x.__data))}}f.bindBuffer(f.UNIFORM_BUFFER,null)}function e(h,d,p){const _=h.value;if(p[d]===void 0)return typeof _=="number"?p[d]=_:p[d]=_.clone(),!0;if(typeof _=="number"){if(p[d]!==_)return p[d]=_,!0}else{const y=p[d];if(y.equals(_)===!1)return y.copy(_),!0}return!1}function n(h){const d=h.uniforms;let p=0;const _=16;let y=0;for(let S=0,x=d.length;S<x;S++){const b=d[S],T=r(b);if(b.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=p,S>0){y=p%_;const C=_-y;y!==0&&C-T.boundary<0&&(p+=_-y,b.__offset=p)}p+=T.storage}return y=p%_,y>0&&(p+=_-y),h.__size=p,h.__cache={},this}function r(h){const d=h.value,p={boundary:0,storage:0};return typeof d=="number"?(p.boundary=4,p.storage=4):d.isVector2?(p.boundary=8,p.storage=8):d.isVector3||d.isColor?(p.boundary=16,p.storage=12):d.isVector4?(p.boundary=16,p.storage=16):d.isMatrix3?(p.boundary=48,p.storage=48):d.isMatrix4?(p.boundary=64,p.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),p}function s(h){const d=h.target;d.removeEventListener("dispose",s);const p=m.indexOf(d.__bindingPointIndex);m.splice(p,1),f.deleteBuffer(l[d.id]),delete l[d.id],delete u[d.id]}function c(){for(const h in l)f.deleteBuffer(l[h]);m=[],l={},u={}}return{bind:v,update:M,dispose:c}}function V0(){const f=zc("canvas");return f.style.display="block",f}function up(f={}){this.isWebGLRenderer=!0;const t=f.canvas!==void 0?f.canvas:V0(),i=f.context!==void 0?f.context:null,a=f.depth!==void 0?f.depth:!0,l=f.stencil!==void 0?f.stencil:!0,u=f.antialias!==void 0?f.antialias:!1,m=f.premultipliedAlpha!==void 0?f.premultipliedAlpha:!0,g=f.preserveDrawingBuffer!==void 0?f.preserveDrawingBuffer:!1,v=f.powerPreference!==void 0?f.powerPreference:"default",M=f.failIfMajorPerformanceCaveat!==void 0?f.failIfMajorPerformanceCaveat:!1;let E;i!==null?E=i.getContextAttributes().alpha:E=f.alpha!==void 0?f.alpha:!1;let A=null,o=null;const e=[],n=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Bi,this.physicallyCorrectLights=!1,this.toneMapping=Di,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const r=this;let s=!1,c=0,h=0,d=null,p=-1,_=null;const y=new Nt,S=new Nt;let x=null,b=t.width,T=t.height,C=1,R=null,w=null;const P=new Nt(0,0,b,T),L=new Nt(0,0,b,T);let I=!1;const O=new ba;let F=!1,N=!1,k=null;const D=new ot,B=new Ue,Q=new Z,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return d===null?C:1}let W=i;function he(H,oe){for(let Ee=0;Ee<H.length;Ee++){const le=H[Ee],Pe=t.getContext(le,oe);if(Pe!==null)return Pe}return null}try{const H={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:m,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qi}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",X,!1),t.addEventListener("webglcontextcreationerror",z,!1),W===null){const oe=["webgl2","webgl","experimental-webgl"];if(r.isWebGL1Renderer===!0&&oe.shift(),W=he(oe,H),W===null)throw he(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(H){throw console.error("THREE.WebGLRenderer: "+H.message),H}let ye,_e,ae,we,j,K,te,Re,be,De,Oe,Fe,Xe,it,$,V,G,fe,ie,xe,Me,Le,ce,Ie;function ze(){ye=new _y(W),_e=new uy(W,ye,f),ye.init(_e),Le=new cp(W,ye,_e),ae=new O0(W,ye,_e),we=new xt(W),j=new C0,K=new B0(W,ye,ae,j,_e,Le,we),te=new fy(r),Re=new gy(r),be=new Mf(W,_e),ce=new ly(W,ye,be,_e),De=new xy(W,be,we,ce),Oe=new z_(W,De,be,we),ie=new Ah(W,_e,K),V=new dy(j),Fe=new ip(r,te,Re,ye,_e,ce,V),Xe=new G0(r,j),it=new L0,$=new N0(ye,_e),fe=new cy(r,te,Re,ae,Oe,E,m),G=new vd(r,Oe,_e),Ie=new k0(W,we,_e,ae),xe=new hy(W,ye,we,_e),Me=new yy(W,ye,we,_e),we.programs=Fe.programs,r.capabilities=_e,r.extensions=ye,r.properties=j,r.renderLists=it,r.shadowMap=G,r.state=ae,r.info=we}ze();const Be=new z0(r,W);this.xr=Be,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const H=ye.get("WEBGL_lose_context");H&&H.loseContext()},this.forceContextRestore=function(){const H=ye.get("WEBGL_lose_context");H&&H.restoreContext()},this.getPixelRatio=function(){return C},this.setPixelRatio=function(H){H!==void 0&&(C=H,this.setSize(b,T,!1))},this.getSize=function(H){return H.set(b,T)},this.setSize=function(H,oe,Ee){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}b=H,T=oe,t.width=Math.floor(H*C),t.height=Math.floor(oe*C),Ee!==!1&&(t.style.width=H+"px",t.style.height=oe+"px"),this.setViewport(0,0,H,oe)},this.getDrawingBufferSize=function(H){return H.set(b*C,T*C).floor()},this.setDrawingBufferSize=function(H,oe,Ee){b=H,T=oe,C=Ee,t.width=Math.floor(H*Ee),t.height=Math.floor(oe*Ee),this.setViewport(0,0,H,oe)},this.getCurrentViewport=function(H){return H.copy(y)},this.getViewport=function(H){return H.copy(P)},this.setViewport=function(H,oe,Ee,le){H.isVector4?P.set(H.x,H.y,H.z,H.w):P.set(H,oe,Ee,le),ae.viewport(y.copy(P).multiplyScalar(C).floor())},this.getScissor=function(H){return H.copy(L)},this.setScissor=function(H,oe,Ee,le){H.isVector4?L.set(H.x,H.y,H.z,H.w):L.set(H,oe,Ee,le),ae.scissor(S.copy(L).multiplyScalar(C).floor())},this.getScissorTest=function(){return I},this.setScissorTest=function(H){ae.setScissorTest(I=H)},this.setOpaqueSort=function(H){R=H},this.setTransparentSort=function(H){w=H},this.getClearColor=function(H){return H.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor.apply(fe,arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha.apply(fe,arguments)},this.clear=function(H=!0,oe=!0,Ee=!0){let le=0;H&&(le|=W.COLOR_BUFFER_BIT),oe&&(le|=W.DEPTH_BUFFER_BIT),Ee&&(le|=W.STENCIL_BUFFER_BIT),W.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",X,!1),t.removeEventListener("webglcontextcreationerror",z,!1),it.dispose(),$.dispose(),j.dispose(),te.dispose(),Re.dispose(),Oe.dispose(),ce.dispose(),Ie.dispose(),Fe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",ve),Be.removeEventListener("sessionend",se),k&&(k.dispose(),k=null),Ve.stop()};function Je(H){H.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),s=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),s=!1;const H=we.autoReset,oe=G.enabled,Ee=G.autoUpdate,le=G.needsUpdate,Pe=G.type;ze(),we.autoReset=H,G.enabled=oe,G.autoUpdate=Ee,G.needsUpdate=le,G.type=Pe}function z(H){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",H.statusMessage)}function me(H){const oe=H.target;oe.removeEventListener("dispose",me),Ne(oe)}function Ne(H){q(H),j.remove(H)}function q(H){const oe=j.get(H).programs;oe!==void 0&&(oe.forEach(function(Ee){Fe.releaseProgram(Ee)}),H.isShaderMaterial&&Fe.releaseShaderCache(H))}this.renderBufferDirect=function(H,oe,Ee,le,Pe,qe){oe===null&&(oe=ge);const rt=Pe.isMesh&&Pe.matrixWorld.determinant()<0,st=Ye(H,oe,Ee,le,Pe);ae.setMaterial(le,rt);let yt=Ee.index;const Ut=Ee.attributes.position;if(yt===null){if(Ut===void 0||Ut.count===0)return}else if(yt.count===0)return;let Et=1;le.wireframe===!0&&(yt=De.getWireframeAttribute(Ee),Et=2),ce.setup(Pe,le,st,Ee,yt);let Tt,$t=xe;yt!==null&&(Tt=be.get(yt),$t=Me,$t.setIndex(Tt));const Sr=yt!==null?yt.count:Ut.count,Ja=Ee.drawRange.start*Et,sc=Ee.drawRange.count*Et,br=qe!==null?qe.start*Et:0,Ot=qe!==null?qe.count*Et:1/0,Y=Math.max(Ja,br),de=Math.min(Sr,Ja+sc,br+Ot)-1,Te=Math.max(0,de-Y+1);if(Te!==0){if(Pe.isMesh)le.wireframe===!0?(ae.setLineWidth(le.wireframeLinewidth*re()),$t.setMode(W.LINES)):$t.setMode(W.TRIANGLES);else if(Pe.isLine){let pe=le.linewidth;pe===void 0&&(pe=1),ae.setLineWidth(pe*re()),Pe.isLineSegments?$t.setMode(W.LINES):Pe.isLineLoop?$t.setMode(W.LINE_LOOP):$t.setMode(W.LINE_STRIP)}else Pe.isPoints?$t.setMode(W.POINTS):Pe.isSprite&&$t.setMode(W.TRIANGLES);if(Pe.isInstancedMesh)$t.renderInstances(Y,Te,Pe.count);else if(Ee.isInstancedBufferGeometry){const pe=Math.min(Ee.instanceCount,Ee._maxInstanceCount);$t.renderInstances(Y,Te,pe)}else $t.render(Y,Te)}},this.compile=function(H,oe){function Ee(le,Pe,qe){le.transparent===!0&&le.side===Wt?(le.side=nn,le.needsUpdate=!0,St(le,Pe,qe),le.side=Ln,le.needsUpdate=!0,St(le,Pe,qe),le.side=Wt):St(le,Pe,qe)}o=$.get(H),o.init(),n.push(o),H.traverseVisible(function(le){le.isLight&&le.layers.test(oe.layers)&&(o.pushLight(le),le.castShadow&&o.pushShadow(le))}),o.setupLights(r.physicallyCorrectLights),H.traverse(function(le){const Pe=le.material;if(Pe)if(Array.isArray(Pe))for(let qe=0;qe<Pe.length;qe++){const rt=Pe[qe];Ee(rt,H,le)}else Ee(Pe,H,le)}),n.pop(),o=null};let ee=null;function Se(H){ee&&ee(H)}function ve(){Ve.stop()}function se(){Ve.start()}const Ve=new qc;Ve.setAnimationLoop(Se),typeof self!="undefined"&&Ve.setContext(self),this.setAnimationLoop=function(H){ee=H,Be.setAnimationLoop(H),H===null?Ve.stop():Ve.start()},Be.addEventListener("sessionstart",ve),Be.addEventListener("sessionend",se),this.render=function(H,oe){if(oe!==void 0&&oe.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(s===!0)return;H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(oe),oe=Be.getCamera()),H.isScene===!0&&H.onBeforeRender(r,H,oe,d),o=$.get(H,n.length),o.init(),n.push(o),D.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),O.setFromProjectionMatrix(D),N=this.localClippingEnabled,F=V.init(this.clippingPlanes,N,oe),A=it.get(H,e.length),A.init(),e.push(A),$e(H,oe,0,r.sortObjects),A.finish(),r.sortObjects===!0&&A.sort(R,w),F===!0&&V.beginShadows();const Ee=o.state.shadowsArray;if(G.render(Ee,H,oe),F===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),fe.render(A,H),o.setupLights(r.physicallyCorrectLights),oe.isArrayCamera){const le=oe.cameras;for(let Pe=0,qe=le.length;Pe<qe;Pe++){const rt=le[Pe];Ke(A,H,rt,rt.viewport)}}else Ke(A,H,oe);d!==null&&(K.updateMultisampleRenderTarget(d),K.updateRenderTargetMipmap(d)),H.isScene===!0&&H.onAfterRender(r,H,oe),ce.resetDefaultState(),p=-1,_=null,n.pop(),n.length>0?o=n[n.length-1]:o=null,e.pop(),e.length>0?A=e[e.length-1]:A=null};function $e(H,oe,Ee,le){if(H.visible===!1)return;if(H.layers.test(oe.layers)){if(H.isGroup)Ee=H.renderOrder;else if(H.isLOD)H.autoUpdate===!0&&H.update(oe);else if(H.isLight)o.pushLight(H),H.castShadow&&o.pushShadow(H);else if(H.isSprite){if(!H.frustumCulled||O.intersectsSprite(H)){le&&Q.setFromMatrixPosition(H.matrixWorld).applyMatrix4(D);const rt=Oe.update(H),st=H.material;st.visible&&A.push(H,rt,st,Ee,Q.z,null)}}else if((H.isMesh||H.isLine||H.isPoints)&&(H.isSkinnedMesh&&H.skeleton.frame!==we.render.frame&&(H.skeleton.update(),H.skeleton.frame=we.render.frame),!H.frustumCulled||O.intersectsObject(H))){le&&Q.setFromMatrixPosition(H.matrixWorld).applyMatrix4(D);const rt=Oe.update(H),st=H.material;if(Array.isArray(st)){const yt=rt.groups;for(let Ut=0,Et=yt.length;Ut<Et;Ut++){const Tt=yt[Ut],$t=st[Tt.materialIndex];$t&&$t.visible&&A.push(H,rt,$t,Ee,Q.z,Tt)}}else st.visible&&A.push(H,rt,st,Ee,Q.z,null)}}const qe=H.children;for(let rt=0,st=qe.length;rt<st;rt++)$e(qe[rt],oe,Ee,le)}function Ke(H,oe,Ee,le){const Pe=H.opaque,qe=H.transmissive,rt=H.transparent;o.setupLightsView(Ee),qe.length>0&&je(Pe,oe,Ee),le&&ae.viewport(y.copy(le)),Pe.length>0&&Ge(Pe,oe,Ee),qe.length>0&&Ge(qe,oe,Ee),rt.length>0&&Ge(rt,oe,Ee),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function je(H,oe,Ee){const le=_e.isWebGL2;k===null&&(k=new In(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Yn:Gn,minFilter:Lr,samples:le&&u===!0?4:0})),r.getDrawingBufferSize(B),le?k.setSize(B.x,B.y):k.setSize(ao(B.x),ao(B.y));const Pe=r.getRenderTarget();r.setRenderTarget(k),r.clear();const qe=r.toneMapping;r.toneMapping=Di,Ge(H,oe,Ee),r.toneMapping=qe,K.updateMultisampleRenderTarget(k),K.updateRenderTargetMipmap(k),r.setRenderTarget(Pe)}function Ge(H,oe,Ee){const le=oe.isScene===!0?oe.overrideMaterial:null;for(let Pe=0,qe=H.length;Pe<qe;Pe++){const rt=H[Pe],st=rt.object,yt=rt.geometry,Ut=le===null?rt.material:le,Et=rt.group;st.layers.test(Ee.layers)&&ft(st,oe,Ee,yt,Ut,Et)}}function ft(H,oe,Ee,le,Pe,qe){H.onBeforeRender(r,oe,Ee,le,Pe,qe),H.modelViewMatrix.multiplyMatrices(Ee.matrixWorldInverse,H.matrixWorld),H.normalMatrix.getNormalMatrix(H.modelViewMatrix),Pe.onBeforeRender(r,oe,Ee,le,H,qe),Pe.transparent===!0&&Pe.side===Wt?(Pe.side=nn,Pe.needsUpdate=!0,r.renderBufferDirect(Ee,oe,le,Pe,H,qe),Pe.side=Ln,Pe.needsUpdate=!0,r.renderBufferDirect(Ee,oe,le,Pe,H,qe),Pe.side=Wt):r.renderBufferDirect(Ee,oe,le,Pe,H,qe),H.onAfterRender(r,oe,Ee,le,Pe,qe)}function St(H,oe,Ee){oe.isScene!==!0&&(oe=ge);const le=j.get(H),Pe=o.state.lights,qe=o.state.shadowsArray,rt=Pe.state.version,st=Fe.getParameters(H,Pe.state,qe,oe,Ee),yt=Fe.getProgramCacheKey(st);let Ut=le.programs;le.environment=H.isMeshStandardMaterial?oe.environment:null,le.fog=oe.fog,le.envMap=(H.isMeshStandardMaterial?Re:te).get(H.envMap||le.environment),Ut===void 0&&(H.addEventListener("dispose",me),Ut=new Map,le.programs=Ut);let Et=Ut.get(yt);if(Et!==void 0){if(le.currentProgram===Et&&le.lightsStateVersion===rt)return ne(H,st),Et}else st.uniforms=Fe.getUniforms(H),H.onBuild(Ee,st,r),H.onBeforeCompile(st,r),Et=Fe.acquireProgram(st,yt),Ut.set(yt,Et),le.uniforms=st.uniforms;const Tt=le.uniforms;(!H.isShaderMaterial&&!H.isRawShaderMaterial||H.clipping===!0)&&(Tt.clippingPlanes=V.uniform),ne(H,st),le.needsLights=ke(H),le.lightsStateVersion=rt,le.needsLights&&(Tt.ambientLightColor.value=Pe.state.ambient,Tt.lightProbe.value=Pe.state.probe,Tt.directionalLights.value=Pe.state.directional,Tt.directionalLightShadows.value=Pe.state.directionalShadow,Tt.spotLights.value=Pe.state.spot,Tt.spotLightShadows.value=Pe.state.spotShadow,Tt.rectAreaLights.value=Pe.state.rectArea,Tt.ltc_1.value=Pe.state.rectAreaLTC1,Tt.ltc_2.value=Pe.state.rectAreaLTC2,Tt.pointLights.value=Pe.state.point,Tt.pointLightShadows.value=Pe.state.pointShadow,Tt.hemisphereLights.value=Pe.state.hemi,Tt.directionalShadowMap.value=Pe.state.directionalShadowMap,Tt.directionalShadowMatrix.value=Pe.state.directionalShadowMatrix,Tt.spotShadowMap.value=Pe.state.spotShadowMap,Tt.spotLightMatrix.value=Pe.state.spotLightMatrix,Tt.spotLightMap.value=Pe.state.spotLightMap,Tt.pointShadowMap.value=Pe.state.pointShadowMap,Tt.pointShadowMatrix.value=Pe.state.pointShadowMatrix);const $t=Et.getUniforms(),Sr=Lh.seqWithValue($t.seq,Tt);return le.currentProgram=Et,le.uniformsList=Sr,Et}function ne(H,oe){const Ee=j.get(H);Ee.outputEncoding=oe.outputEncoding,Ee.instancing=oe.instancing,Ee.skinning=oe.skinning,Ee.morphTargets=oe.morphTargets,Ee.morphNormals=oe.morphNormals,Ee.morphColors=oe.morphColors,Ee.morphTargetsCount=oe.morphTargetsCount,Ee.numClippingPlanes=oe.numClippingPlanes,Ee.numIntersection=oe.numClipIntersection,Ee.vertexAlphas=oe.vertexAlphas,Ee.vertexTangents=oe.vertexTangents,Ee.toneMapping=oe.toneMapping}function Ye(H,oe,Ee,le,Pe){oe.isScene!==!0&&(oe=ge),K.resetTextureUnits();const qe=oe.fog,rt=le.isMeshStandardMaterial?oe.environment:null,st=d===null?r.outputEncoding:d.isXRRenderTarget===!0?d.texture.encoding:Bi,yt=(le.isMeshStandardMaterial?Re:te).get(le.envMap||rt),Ut=le.vertexColors===!0&&!!Ee.attributes.color&&Ee.attributes.color.itemSize===4,Et=!!le.normalMap&&!!Ee.attributes.tangent,Tt=!!Ee.morphAttributes.position,$t=!!Ee.morphAttributes.normal,Sr=!!Ee.morphAttributes.color,Ja=le.toneMapped?r.toneMapping:Di,sc=Ee.morphAttributes.position||Ee.morphAttributes.normal||Ee.morphAttributes.color,br=sc!==void 0?sc.length:0,Ot=j.get(le),Y=o.state.lights;if(F===!0&&(N===!0||H!==_)){const lt=H===_&&le.id===p;V.setState(le,H,lt)}let de=!1;le.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Y.state.version||Ot.outputEncoding!==st||Pe.isInstancedMesh&&Ot.instancing===!1||!Pe.isInstancedMesh&&Ot.instancing===!0||Pe.isSkinnedMesh&&Ot.skinning===!1||!Pe.isSkinnedMesh&&Ot.skinning===!0||Ot.envMap!==yt||le.fog===!0&&Ot.fog!==qe||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==V.numPlanes||Ot.numIntersection!==V.numIntersection)||Ot.vertexAlphas!==Ut||Ot.vertexTangents!==Et||Ot.morphTargets!==Tt||Ot.morphNormals!==$t||Ot.morphColors!==Sr||Ot.toneMapping!==Ja||_e.isWebGL2===!0&&Ot.morphTargetsCount!==br)&&(de=!0):(de=!0,Ot.__version=le.version);let Te=Ot.currentProgram;de===!0&&(Te=St(le,oe,Pe));let pe=!1,Ce=!1,et=!1;const tt=Te.getUniforms(),at=Ot.uniforms;if(ae.useProgram(Te.program)&&(pe=!0,Ce=!0,et=!0),le.id!==p&&(p=le.id,Ce=!0),pe||_!==H){if(tt.setValue(W,"projectionMatrix",H.projectionMatrix),_e.logarithmicDepthBuffer&&tt.setValue(W,"logDepthBufFC",2/(Math.log(H.far+1)/Math.LN2)),_!==H&&(_=H,Ce=!0,et=!0),le.isShaderMaterial||le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshStandardMaterial||le.envMap){const lt=tt.map.cameraPosition;lt!==void 0&&lt.setValue(W,Q.setFromMatrixPosition(H.matrixWorld))}(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&tt.setValue(W,"isOrthographic",H.isOrthographicCamera===!0),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial||le.isShadowMaterial||Pe.isSkinnedMesh)&&tt.setValue(W,"viewMatrix",H.matrixWorldInverse)}if(Pe.isSkinnedMesh){tt.setOptional(W,Pe,"bindMatrix"),tt.setOptional(W,Pe,"bindMatrixInverse");const lt=Pe.skeleton;lt&&(_e.floatVertexTextures?(lt.boneTexture===null&&lt.computeBoneTexture(),tt.setValue(W,"boneTexture",lt.boneTexture,K),tt.setValue(W,"boneTextureSize",lt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ut=Ee.morphAttributes;if((ut.position!==void 0||ut.normal!==void 0||ut.color!==void 0&&_e.isWebGL2===!0)&&ie.update(Pe,Ee,le,Te),(Ce||Ot.receiveShadow!==Pe.receiveShadow)&&(Ot.receiveShadow=Pe.receiveShadow,tt.setValue(W,"receiveShadow",Pe.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(at.envMap.value=yt,at.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),Ce&&(tt.setValue(W,"toneMappingExposure",r.toneMappingExposure),Ot.needsLights&&Ae(at,et),qe&&le.fog===!0&&Xe.refreshFogUniforms(at,qe),Xe.refreshMaterialUniforms(at,le,C,T,k),Lh.upload(W,Ot.uniformsList,at,K)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Lh.upload(W,Ot.uniformsList,at,K),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&tt.setValue(W,"center",Pe.center),tt.setValue(W,"modelViewMatrix",Pe.modelViewMatrix),tt.setValue(W,"normalMatrix",Pe.normalMatrix),tt.setValue(W,"modelMatrix",Pe.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const lt=le.uniformsGroups;for(let ht=0,vt=lt.length;ht<vt;ht++)if(_e.isWebGL2){const Kt=lt[ht];Ie.update(Kt,Te),Ie.bind(Kt,Te)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Te}function Ae(H,oe){H.ambientLightColor.needsUpdate=oe,H.lightProbe.needsUpdate=oe,H.directionalLights.needsUpdate=oe,H.directionalLightShadows.needsUpdate=oe,H.pointLights.needsUpdate=oe,H.pointLightShadows.needsUpdate=oe,H.spotLights.needsUpdate=oe,H.spotLightShadows.needsUpdate=oe,H.rectAreaLights.needsUpdate=oe,H.hemisphereLights.needsUpdate=oe}function ke(H){return H.isMeshLambertMaterial||H.isMeshToonMaterial||H.isMeshPhongMaterial||H.isMeshStandardMaterial||H.isShadowMaterial||H.isShaderMaterial&&H.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return h},this.getRenderTarget=function(){return d},this.setRenderTargetTextures=function(H,oe,Ee){j.get(H.texture).__webglTexture=oe,j.get(H.depthTexture).__webglTexture=Ee;const le=j.get(H);le.__hasExternalTextures=!0,le.__hasExternalTextures&&(le.__autoAllocateDepthBuffer=Ee===void 0,le.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),le.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(H,oe){const Ee=j.get(H);Ee.__webglFramebuffer=oe,Ee.__useDefaultFramebuffer=oe===void 0},this.setRenderTarget=function(H,oe=0,Ee=0){d=H,c=oe,h=Ee;let le=!0,Pe=null,qe=!1,rt=!1;if(H){const yt=j.get(H);yt.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(W.FRAMEBUFFER,null),le=!1):yt.__webglFramebuffer===void 0?K.setupRenderTarget(H):yt.__hasExternalTextures&&K.rebindTextures(H,j.get(H.texture).__webglTexture,j.get(H.depthTexture).__webglTexture);const Ut=H.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(rt=!0);const Et=j.get(H).__webglFramebuffer;H.isWebGLCubeRenderTarget?(Pe=Et[oe],qe=!0):_e.isWebGL2&&H.samples>0&&K.useMultisampledRTT(H)===!1?Pe=j.get(H).__webglMultisampledFramebuffer:Pe=Et,y.copy(H.viewport),S.copy(H.scissor),x=H.scissorTest}else y.copy(P).multiplyScalar(C).floor(),S.copy(L).multiplyScalar(C).floor(),x=I;if(ae.bindFramebuffer(W.FRAMEBUFFER,Pe)&&_e.drawBuffers&&le&&ae.drawBuffers(H,Pe),ae.viewport(y),ae.scissor(S),ae.setScissorTest(x),qe){const yt=j.get(H.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+oe,yt.__webglTexture,Ee)}else if(rt){const yt=j.get(H.texture),Ut=oe||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,yt.__webglTexture,Ee||0,Ut)}p=-1},this.readRenderTargetPixels=function(H,oe,Ee,le,Pe,qe,rt){if(!(H&&H.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let st=j.get(H).__webglFramebuffer;if(H.isWebGLCubeRenderTarget&&rt!==void 0&&(st=st[rt]),st){ae.bindFramebuffer(W.FRAMEBUFFER,st);try{const yt=H.texture,Ut=yt.format,Et=yt.type;if(Ut!==Zn&&Le.convert(Ut)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Tt=Et===Yn&&(ye.has("EXT_color_buffer_half_float")||_e.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Et!==Gn&&Le.convert(Et)!==W.getParameter(W.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Et===Fi&&(_e.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Tt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}oe>=0&&oe<=H.width-le&&Ee>=0&&Ee<=H.height-Pe&&W.readPixels(oe,Ee,le,Pe,Le.convert(Ut),Le.convert(Et),qe)}finally{const yt=d!==null?j.get(d).__webglFramebuffer:null;ae.bindFramebuffer(W.FRAMEBUFFER,yt)}}},this.copyFramebufferToTexture=function(H,oe,Ee=0){const le=Math.pow(2,-Ee),Pe=Math.floor(oe.image.width*le),qe=Math.floor(oe.image.height*le);K.setTexture2D(oe,0),W.copyTexSubImage2D(W.TEXTURE_2D,Ee,0,0,H.x,H.y,Pe,qe),ae.unbindTexture()},this.copyTextureToTexture=function(H,oe,Ee,le=0){const Pe=oe.image.width,qe=oe.image.height,rt=Le.convert(Ee.format),st=Le.convert(Ee.type);K.setTexture2D(Ee,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,Ee.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Ee.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,Ee.unpackAlignment),oe.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,le,H.x,H.y,Pe,qe,rt,st,oe.image.data):oe.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,le,H.x,H.y,oe.mipmaps[0].width,oe.mipmaps[0].height,rt,oe.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,le,H.x,H.y,rt,st,oe.image),le===0&&Ee.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(H,oe,Ee,le,Pe=0){if(r.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const qe=H.max.x-H.min.x+1,rt=H.max.y-H.min.y+1,st=H.max.z-H.min.z+1,yt=Le.convert(le.format),Ut=Le.convert(le.type);let Et;if(le.isData3DTexture)K.setTexture3D(le,0),Et=W.TEXTURE_3D;else if(le.isDataArrayTexture)K.setTexture2DArray(le,0),Et=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,le.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,le.unpackAlignment);const Tt=W.getParameter(W.UNPACK_ROW_LENGTH),$t=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Sr=W.getParameter(W.UNPACK_SKIP_PIXELS),Ja=W.getParameter(W.UNPACK_SKIP_ROWS),sc=W.getParameter(W.UNPACK_SKIP_IMAGES),br=Ee.isCompressedTexture?Ee.mipmaps[0]:Ee.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,br.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,br.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,H.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,H.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,H.min.z),Ee.isDataTexture||Ee.isData3DTexture?W.texSubImage3D(Et,Pe,oe.x,oe.y,oe.z,qe,rt,st,yt,Ut,br.data):Ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Et,Pe,oe.x,oe.y,oe.z,qe,rt,st,yt,br.data)):W.texSubImage3D(Et,Pe,oe.x,oe.y,oe.z,qe,rt,st,yt,Ut,br),W.pixelStorei(W.UNPACK_ROW_LENGTH,Tt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,$t),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Sr),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ja),W.pixelStorei(W.UNPACK_SKIP_IMAGES,sc),Pe===0&&le.generateMipmaps&&W.generateMipmap(Et),ae.unbindTexture()},this.initTexture=function(H){H.isCubeTexture?K.setTextureCube(H,0):H.isData3DTexture?K.setTexture3D(H,0):H.isDataArrayTexture||H.isCompressedArrayTexture?K.setTexture2DArray(H,0):K.setTexture2D(H,0),ae.unbindTexture()},this.resetState=function(){c=0,h=0,d=null,ae.reset(),ce.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class dp extends up{}dp.prototype.isWebGL1Renderer=!0;class Dh{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new ue(t),this.density=i}clone(){return new Dh(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Uh{constructor(t,i=1,a=1e3){this.isFog=!0,this.name="",this.color=new ue(t),this.near=i,this.far=a}clone(){return new Uh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class fp extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.backgroundBlurriness=this.backgroundBlurriness),i}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Nh{constructor(t,i){this.isInterleavedBuffer=!0,this.array=t,this.stride=i,this.count=t!==void 0?t.length/i:0,this.usage=Uc,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,i,a){t*=this.stride,a*=i.stride;for(let l=0,u=this.stride;l<u;l++)this.array[t+l]=i.array[a+l];return this}set(t,i=0){return this.array.set(t,i),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const i=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(i,this.stride);return a.setUsage(this.usage),a}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new Z;class Ds{constructor(t,i,a,l=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=a,this.normalized=l===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,a=this.data.count;i<a;i++)Bn.fromBufferAttribute(this,i),Bn.applyMatrix4(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(t){for(let i=0,a=this.count;i<a;i++)Bn.fromBufferAttribute(this,i),Bn.applyNormalMatrix(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}transformDirection(t){for(let i=0,a=this.count;i<a;i++)Bn.fromBufferAttribute(this,i),Bn.transformDirection(t),this.setXYZ(i,Bn.x,Bn.y,Bn.z);return this}setX(t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=Or(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=Or(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=Or(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=Or(i,this.array)),i}setXY(t,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=Dt(i,this.array),a=Dt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this}setXYZ(t,i,a,l){return t=t*this.data.stride+this.offset,this.normalized&&(i=Dt(i,this.array),a=Dt(a,this.array),l=Dt(l,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this.data.array[t+2]=l,this}setXYZW(t,i,a,l,u){return t=t*this.data.stride+this.offset,this.normalized&&(i=Dt(i,this.array),a=Dt(a,this.array),l=Dt(l,this.array),u=Dt(u,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=a,this.data.array[t+2]=l,this.data.array[t+3]=u,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return new Bt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Ds(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const i=[];for(let a=0;a<this.count;a++){const l=a*this.data.stride+this.offset;for(let u=0;u<this.itemSize;u++)i.push(this.data.array[l+u])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bd extends Nn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Po;const jc=new Z,Io=new Z,Do=new Z,Uo=new Ue,No=new Ue,pp=new ot,Fo=new Z,Ca=new Z,Fh=new Z,mp=new Ue,Ed=new Ue,gp=new Ue;class _p extends At{constructor(t){if(super(),this.isSprite=!0,this.type="Sprite",Po===void 0){Po=new ct;const i=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new Nh(i,5);Po.setIndex([0,1,2,0,2,3]),Po.setAttribute("position",new Ds(a,3,0,!1)),Po.setAttribute("uv",new Ds(a,2,3,!1))}this.geometry=Po,this.material=t!==void 0?t:new bd,this.center=new Ue(.5,.5)}raycast(t,i){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Io.setFromMatrixScale(this.matrixWorld),pp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Do.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Io.multiplyScalar(-Do.z);const a=this.material.rotation;let l,u;a!==0&&(u=Math.cos(a),l=Math.sin(a));const m=this.center;el(Fo.set(-.5,-.5,0),Do,m,Io,l,u),el(Ca.set(.5,-.5,0),Do,m,Io,l,u),el(Fh.set(.5,.5,0),Do,m,Io,l,u),mp.set(0,0),Ed.set(1,0),gp.set(1,1);let g=t.ray.intersectTriangle(Fo,Ca,Fh,!1,jc);if(g===null&&(el(Ca.set(-.5,.5,0),Do,m,Io,l,u),Ed.set(0,1),g=t.ray.intersectTriangle(Fo,Fh,Ca,!1,jc),g===null))return;const v=t.ray.origin.distanceTo(jc);v<t.near||v>t.far||i.push({distance:v,point:jc.clone(),uv:Un.getUV(jc,Fo,Ca,Fh,mp,Ed,gp,new Ue),face:null,object:this})}copy(t,i){return super.copy(t,i),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function el(f,t,i,a,l,u){Uo.subVectors(f,i).addScalar(.5).multiply(a),l!==void 0?(No.x=u*Uo.x-l*Uo.y,No.y=l*Uo.x+u*Uo.y):No.copy(Uo),f.copy(t),f.x+=No.x,f.y+=No.y,f.applyMatrix4(pp)}const tl=new Z,La=new Z;class xp extends At{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const i=t.levels;for(let a=0,l=i.length;a<l;a++){const u=i[a];this.addLevel(u.object.clone(),u.distance)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,i=0){i=Math.abs(i);const a=this.levels;let l;for(l=0;l<a.length&&!(i<a[l].distance);l++);return a.splice(l,0,{distance:i,object:t}),this.add(t),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const i=this.levels;if(i.length>0){let a,l;for(a=1,l=i.length;a<l&&!(t<i[a].distance);a++);return i[a-1].object}return null}raycast(t,i){if(this.levels.length>0){tl.setFromMatrixPosition(this.matrixWorld);const l=t.ray.origin.distanceTo(tl);this.getObjectForDistance(l).raycast(t,i)}}update(t){const i=this.levels;if(i.length>1){tl.setFromMatrixPosition(t.matrixWorld),La.setFromMatrixPosition(this.matrixWorld);const a=tl.distanceTo(La)/t.zoom;i[0].object.visible=!0;let l,u;for(l=1,u=i.length;l<u&&a>=i[l].distance;l++)i[l-1].object.visible=!1,i[l].object.visible=!0;for(this._currentLevel=l-1;l<u;l++)i[l].object.visible=!1}}toJSON(t){const i=super.toJSON(t);this.autoUpdate===!1&&(i.object.autoUpdate=!1),i.object.levels=[];const a=this.levels;for(let l=0,u=a.length;l<u;l++){const m=a[l];i.object.levels.push({object:m.object.uuid,distance:m.distance})}return i}}const Oh=new Z,Td=new Nt,yp=new Nt,H0=new Z,vp=new ot;class Mp extends gn{constructor(t,i){super(t,i),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ot,this.bindMatrixInverse=new ot}copy(t,i){return super.copy(t,i),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,i){this.skeleton=t,i===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),i=this.matrixWorld),this.bindMatrix.copy(i),this.bindMatrixInverse.copy(i).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Nt,i=this.geometry.attributes.skinWeight;for(let a=0,l=i.count;a<l;a++){t.fromBufferAttribute(i,a);const u=1/t.manhattanLength();u!==1/0?t.multiplyScalar(u):t.set(1,0,0,0),i.setXYZW(a,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,i){const a=this.skeleton,l=this.geometry;Td.fromBufferAttribute(l.attributes.skinIndex,t),yp.fromBufferAttribute(l.attributes.skinWeight,t),Oh.copy(i).applyMatrix4(this.bindMatrix),i.set(0,0,0);for(let u=0;u<4;u++){const m=yp.getComponent(u);if(m!==0){const g=Td.getComponent(u);vp.multiplyMatrices(a.bones[g].matrixWorld,a.boneInverses[g]),i.addScaledVector(H0.copy(Oh).applyMatrix4(vp),m)}}return i.applyMatrix4(this.bindMatrixInverse)}}class Bh extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Pa extends qt{constructor(t=null,i=1,a=1,l,u,m,g,v,M=wt,E=wt,A,o){super(null,m,g,v,M,E,l,u,A,o),this.isDataTexture=!0,this.image={data:t,width:i,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nl=new ot,zh=new ot;class il{constructor(t=[],i=[]){this.uuid=oi(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let a=0,l=this.bones.length;a<l;a++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){const a=new ot;this.bones[t]&&a.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(a)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];a&&a.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){const a=this.bones[t];a&&(a.parent&&a.parent.isBone?(a.matrix.copy(a.parent.matrixWorld).invert(),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale))}}update(){const t=this.bones,i=this.boneInverses,a=this.boneMatrices,l=this.boneTexture;for(let u=0,m=t.length;u<m;u++){const g=t[u]?t[u].matrixWorld:zh;nl.multiplyMatrices(g,i[u]),nl.toArray(a,u*16)}l!==null&&(l.needsUpdate=!0)}clone(){return new il(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Xt(t),t=Math.max(t,4);const i=new Float32Array(t*t*4);i.set(this.boneMatrices);const a=new Pa(i,t,t,Zn,Fi);return a.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=a,this.boneTextureSize=t,this}getBoneByName(t){for(let i=0,a=this.bones.length;i<a;i++){const l=this.bones[i];if(l.name===t)return l}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let a=0,l=t.bones.length;a<l;a++){const u=t.bones[a];let m=i[u];m===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",u),m=new Bh),this.bones.push(m),this.boneInverses.push(new ot().fromArray(t.boneInverses[a]))}return this.init(),this}toJSON(){const t={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const i=this.bones,a=this.boneInverses;for(let l=0,u=i.length;l<u;l++){const m=i[l];t.bones.push(m.uuid);const g=a[l];t.boneInverses.push(g.toArray())}return t}}class Yr extends Bt{constructor(t,i,a,l=1){super(t,i,a),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const zn=new ot,Us=new ot,Oo=[],Bo=new ot,Zr=new gn;class Ia extends gn{constructor(t,i,a){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Yr(new Float32Array(a*16),16),this.instanceColor=null,this.count=a,this.frustumCulled=!1;for(let l=0;l<a;l++)this.setMatrixAt(l,Bo)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}raycast(t,i){const a=this.matrixWorld,l=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0)for(let u=0;u<l;u++){this.getMatrixAt(u,zn),Us.multiplyMatrices(a,zn),Zr.matrixWorld=Us,Zr.raycast(t,Oo);for(let m=0,g=Oo.length;m<g;m++){const v=Oo[m];v.instanceId=u,v.object=this,i.push(v)}Oo.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Yr(new Float32Array(this.instanceMatrix.count*3),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fn extends Nn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Da=new Z,zo=new Z,wd=new ot,Go=new Si,Ns=new ys;class Zi extends At{constructor(t=new ct,i=new fn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[0];for(let l=1,u=i.count;l<u;l++)Da.fromBufferAttribute(i,l-1),zo.fromBufferAttribute(i,l),a[l]=a[l-1],a[l]+=Da.distanceTo(zo);t.setAttribute("lineDistance",new nt(a,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const a=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,m=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Ns.copy(a.boundingSphere),Ns.applyMatrix4(l),Ns.radius+=u,t.ray.intersectsSphere(Ns)===!1)return;wd.copy(l).invert(),Go.copy(t.ray).applyMatrix4(wd);const g=u/((this.scale.x+this.scale.y+this.scale.z)/3),v=g*g,M=new Z,E=new Z,A=new Z,o=new Z,e=this.isLineSegments?2:1,n=a.index,s=a.attributes.position;if(n!==null){const c=Math.max(0,m.start),h=Math.min(n.count,m.start+m.count);for(let d=c,p=h-1;d<p;d+=e){const _=n.getX(d),y=n.getX(d+1);if(M.fromBufferAttribute(s,_),E.fromBufferAttribute(s,y),Go.distanceSqToSegment(M,E,o,A)>v)continue;o.applyMatrix4(this.matrixWorld);const x=t.ray.origin.distanceTo(o);x<t.near||x>t.far||i.push({distance:x,point:A.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this})}}else{const c=Math.max(0,m.start),h=Math.min(s.count,m.start+m.count);for(let d=c,p=h-1;d<p;d+=e){if(M.fromBufferAttribute(s,d),E.fromBufferAttribute(s,d+1),Go.distanceSqToSegment(M,E,o,A)>v)continue;o.applyMatrix4(this.matrixWorld);const y=t.ray.origin.distanceTo(o);y<t.near||y>t.far||i.push({distance:y,point:A.clone().applyMatrix4(this.matrixWorld),index:d,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,m=l.length;u<m;u++){const g=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=u}}}}}const Ad=new Z,Gh=new Z;class Ji extends Zi{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,a=[];for(let l=0,u=i.count;l<u;l+=2)Ad.fromBufferAttribute(i,l),Gh.fromBufferAttribute(i,l+1),a[l]=l===0?0:a[l-1],a[l+1]=a[l]+Ad.distanceTo(Gh);t.setAttribute("lineDistance",new nt(a,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rd extends Zi{constructor(t,i){super(t,i),this.isLineLoop=!0,this.type="LineLoop"}}class ko extends Nn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const rl=new ot,kh=new Si,sl=new ys,al=new Z;class Cd extends At{constructor(t=new ct,i=new ko){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=t.material,this.geometry=t.geometry,this}raycast(t,i){const a=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,m=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),sl.copy(a.boundingSphere),sl.applyMatrix4(l),sl.radius+=u,t.ray.intersectsSphere(sl)===!1)return;rl.copy(l).invert(),kh.copy(t.ray).applyMatrix4(rl);const g=u/((this.scale.x+this.scale.y+this.scale.z)/3),v=g*g,M=a.index,A=a.attributes.position;if(M!==null){const o=Math.max(0,m.start),e=Math.min(M.count,m.start+m.count);for(let n=o,r=e;n<r;n++){const s=M.getX(n);al.fromBufferAttribute(A,s),Ld(al,s,v,l,t,i,this)}}else{const o=Math.max(0,m.start),e=Math.min(A.count,m.start+m.count);for(let n=o,r=e;n<r;n++)al.fromBufferAttribute(A,n),Ld(al,n,v,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,m=l.length;u<m;u++){const g=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=u}}}}}function Ld(f,t,i,a,l,u,m){const g=kh.distanceSqToPoint(f);if(g<i){const v=new Z;kh.closestPointToPoint(f,v),v.applyMatrix4(a);const M=l.ray.origin.distanceTo(v);if(M<l.near||M>l.far)return;u.push({distance:M,distanceToRay:Math.sqrt(g),point:v,index:t,face:null,object:m})}}class W0 extends qt{constructor(t,i,a,l,u,m,g,v,M){super(t,i,a,l,u,m,g,v,M),this.isVideoTexture=!0,this.minFilter=m!==void 0?m:kt,this.magFilter=u!==void 0?u:kt,this.generateMipmaps=!1;const E=this;function A(){E.needsUpdate=!0,t.requestVideoFrameCallback(A)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(A)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Sp extends qt{constructor(t,i,a){super({width:t,height:i}),this.isFramebufferTexture=!0,this.format=a,this.magFilter=wt,this.minFilter=wt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Fs extends qt{constructor(t,i,a,l,u,m,g,v,M,E,A,o){super(null,m,g,v,M,E,l,u,A,o),this.isCompressedTexture=!0,this.image={width:i,height:a},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class Pd extends Fs{constructor(t,i,a,l,u,m){super(t,i,a,u,m),this.isCompressedArrayTexture=!0,this.image.depth=l,this.wrapR=rn}}class bp extends qt{constructor(t,i,a,l,u,m,g,v,M){super(t,i,a,l,u,m,g,v,M),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const a=this.getUtoTmapping(t);return this.getPoint(a,i)}getPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return i}getSpacedPoints(t=5){const i=[];for(let a=0;a<=t;a++)i.push(this.getPointAt(a/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let a,l=this.getPoint(0),u=0;i.push(0);for(let m=1;m<=t;m++)a=this.getPoint(m/t),u+=a.distanceTo(l),i.push(u),l=a;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const a=this.getLengths();let l=0;const u=a.length;let m;i?m=i:m=t*a[u-1];let g=0,v=u-1,M;for(;g<=v;)if(l=Math.floor(g+(v-g)/2),M=a[l]-m,M<0)g=l+1;else if(M>0)v=l-1;else{v=l;break}if(l=v,a[l]===m)return l/(u-1);const E=a[l],o=a[l+1]-E,e=(m-E)/o;return(l+e)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const m=this.getPoint(l),g=this.getPoint(u),v=i||(m.isVector2?new Ue:new Z);return v.copy(g).sub(m).normalize(),v}getTangentAt(t,i){const a=this.getUtoTmapping(t);return this.getTangent(a,i)}computeFrenetFrames(t,i){const a=new Z,l=[],u=[],m=[],g=new Z,v=new ot;for(let e=0;e<=t;e++){const n=e/t;l[e]=this.getTangentAt(n,new Z)}u[0]=new Z,m[0]=new Z;let M=Number.MAX_VALUE;const E=Math.abs(l[0].x),A=Math.abs(l[0].y),o=Math.abs(l[0].z);E<=M&&(M=E,a.set(1,0,0)),A<=M&&(M=A,a.set(0,1,0)),o<=M&&a.set(0,0,1),g.crossVectors(l[0],a).normalize(),u[0].crossVectors(l[0],g),m[0].crossVectors(l[0],u[0]);for(let e=1;e<=t;e++){if(u[e]=u[e-1].clone(),m[e]=m[e-1].clone(),g.crossVectors(l[e-1],l[e]),g.length()>Number.EPSILON){g.normalize();const n=Math.acos(on(l[e-1].dot(l[e]),-1,1));u[e].applyMatrix4(v.makeRotationAxis(g,n))}m[e].crossVectors(l[e],u[e])}if(i===!0){let e=Math.acos(on(u[0].dot(u[t]),-1,1));e/=t,l[0].dot(g.crossVectors(u[0],u[t]))>0&&(e=-e);for(let n=1;n<=t;n++)u[n].applyMatrix4(v.makeRotationAxis(l[n],e*n)),m[n].crossVectors(l[n],u[n])}return{tangents:l,normals:u,binormals:m}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ol extends mi{constructor(t=0,i=0,a=1,l=1,u=0,m=Math.PI*2,g=!1,v=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=a,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=m,this.aClockwise=g,this.aRotation=v}getPoint(t,i){const a=i||new Ue,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const m=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(m?u=0:u=l),this.aClockwise===!0&&!m&&(u===l?u=-l:u=u-l);const g=this.aStartAngle+t*u;let v=this.aX+this.xRadius*Math.cos(g),M=this.aY+this.yRadius*Math.sin(g);if(this.aRotation!==0){const E=Math.cos(this.aRotation),A=Math.sin(this.aRotation),o=v-this.aX,e=M-this.aY;v=o*E-e*A+this.aX,M=o*A+e*E+this.aY}return a.set(v,M)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Vh extends ol{constructor(t,i,a,l,u,m){super(t,i,a,a,l,u,m),this.isArcCurve=!0,this.type="ArcCurve"}}function Os(){let f=0,t=0,i=0,a=0;function l(u,m,g,v){f=u,t=g,i=-3*u+3*m-2*g-v,a=2*u-2*m+g+v}return{initCatmullRom:function(u,m,g,v,M){l(m,g,M*(g-u),M*(v-m))},initNonuniformCatmullRom:function(u,m,g,v,M,E,A){let o=(m-u)/M-(g-u)/(M+E)+(g-m)/E,e=(g-m)/E-(v-m)/(E+A)+(v-g)/A;o*=E,e*=E,l(m,g,o,e)},calc:function(u){const m=u*u,g=m*u;return f+t*u+i*m+a*g}}}const cl=new Z,Id=new Os,Vo=new Os,Bs=new Os;class Ua extends mi{constructor(t=[],i=!1,a="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=a,this.tension=l}getPoint(t,i=new Z){const a=i,l=this.points,u=l.length,m=(u-(this.closed?0:1))*t;let g=Math.floor(m),v=m-g;this.closed?g+=g>0?0:(Math.floor(Math.abs(g)/u)+1)*u:v===0&&g===u-1&&(g=u-2,v=1);let M,E;this.closed||g>0?M=l[(g-1)%u]:(cl.subVectors(l[0],l[1]).add(l[0]),M=cl);const A=l[g%u],o=l[(g+1)%u];if(this.closed||g+2<u?E=l[(g+2)%u]:(cl.subVectors(l[u-1],l[u-2]).add(l[u-1]),E=cl),this.curveType==="centripetal"||this.curveType==="chordal"){const e=this.curveType==="chordal"?.5:.25;let n=Math.pow(M.distanceToSquared(A),e),r=Math.pow(A.distanceToSquared(o),e),s=Math.pow(o.distanceToSquared(E),e);r<1e-4&&(r=1),n<1e-4&&(n=r),s<1e-4&&(s=r),Id.initNonuniformCatmullRom(M.x,A.x,o.x,E.x,n,r,s),Vo.initNonuniformCatmullRom(M.y,A.y,o.y,E.y,n,r,s),Bs.initNonuniformCatmullRom(M.z,A.z,o.z,E.z,n,r,s)}else this.curveType==="catmullrom"&&(Id.initCatmullRom(M.x,A.x,o.x,E.x,this.tension),Vo.initCatmullRom(M.y,A.y,o.y,E.y,this.tension),Bs.initCatmullRom(M.z,A.z,o.z,E.z,this.tension));return a.set(Id.calc(v),Vo.calc(v),Bs.calc(v)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new Z().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dd(f,t,i,a,l){const u=(a-t)*.5,m=(l-i)*.5,g=f*f,v=f*g;return(2*i-2*a+u+m)*v+(-3*i+3*a-2*u-m)*g+u*f+i}function Hh(f,t){const i=1-f;return i*i*t}function Ep(f,t){return 2*(1-f)*f*t}function X0(f,t){return f*f*t}function Jr(f,t,i,a){return Hh(f,t)+Ep(f,i)+X0(f,a)}function ll(f,t){const i=1-f;return i*i*i*t}function Tp(f,t){const i=1-f;return 3*i*i*f*t}function qn(f,t){return 3*(1-f)*f*f*t}function wp(f,t){return f*f*f*t}function Ho(f,t,i,a,l){return ll(f,t)+Tp(f,i)+qn(f,a)+wp(f,l)}class Wh extends mi{constructor(t=new Ue,i=new Ue,a=new Ue,l=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new Ue){const a=i,l=this.v0,u=this.v1,m=this.v2,g=this.v3;return a.set(Ho(t,l.x,u.x,m.x,g.x),Ho(t,l.y,u.y,m.y,g.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Xh extends mi{constructor(t=new Z,i=new Z,a=new Z,l=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=a,this.v3=l}getPoint(t,i=new Z){const a=i,l=this.v0,u=this.v1,m=this.v2,g=this.v3;return a.set(Ho(t,l.x,u.x,m.x,g.x),Ho(t,l.y,u.y,m.y,g.y),Ho(t,l.z,u.z,m.z,g.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Na extends mi{constructor(t=new Ue,i=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Ue){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i){const a=i||new Ue;return a.copy(this.v2).sub(this.v1).normalize(),a}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $r extends mi{constructor(t=new Z,i=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new Z){const a=i;return t===1?a.copy(this.v2):(a.copy(this.v2).sub(this.v1),a.multiplyScalar(t).add(this.v1)),a}getPointAt(t,i){return this.getPoint(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends mi{constructor(t=new Ue,i=new Ue,a=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new Ue){const a=i,l=this.v0,u=this.v1,m=this.v2;return a.set(Jr(t,l.x,u.x,m.x),Jr(t,l.y,u.y,m.y)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yh extends mi{constructor(t=new Z,i=new Z,a=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=a}getPoint(t,i=new Z){const a=i,l=this.v0,u=this.v1,m=this.v2;return a.set(Jr(t,l.x,u.x,m.x),Jr(t,l.y,u.y,m.y),Jr(t,l.z,u.z,m.z)),a}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wi extends mi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Ue){const a=i,l=this.points,u=(l.length-1)*t,m=Math.floor(u),g=u-m,v=l[m===0?m:m-1],M=l[m],E=l[m>l.length-2?l.length-1:m+1],A=l[m>l.length-3?l.length-1:m+2];return a.set(Dd(g,v.x,M.x,E.x,A.x),Dd(g,v.y,M.y,E.y,A.y)),a}copy(t){super.copy(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,a=this.points.length;i<a;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,a=t.points.length;i<a;i++){const l=t.points[i];this.points.push(new Ue().fromArray(l))}return this}}var Zh=Object.freeze({__proto__:null,ArcCurve:Vh,CatmullRomCurve3:Ua,CubicBezierCurve:Wh,CubicBezierCurve3:Xh,EllipseCurve:ol,LineCurve:Na,LineCurve3:$r,QuadraticBezierCurve:qh,QuadraticBezierCurve3:Yh,SplineCurve:wi});class Jh extends mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);t.equals(i)||this.curves.push(new Na(i,t))}getPoint(t,i){const a=t*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=a){const m=l[u]-a,g=this.curves[u],v=g.getLength(),M=v===0?0:1-m/v;return g.getPointAt(M,i)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let a=0,l=this.curves.length;a<l;a++)i+=this.curves[a].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let a=0;a<=t;a++)i.push(this.getPoint(a/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let a;for(let l=0,u=this.curves;l<u.length;l++){const m=u[l],g=m.isEllipseCurve?t*2:m.isLineCurve||m.isLineCurve3?1:m.isSplineCurve?t*m.points.length:t,v=m.getPoints(g);for(let M=0;M<v.length;M++){const E=v[M];a&&a.equals(E)||(i.push(E),a=E)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,a=t.curves.length;i<a;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,a=this.curves.length;i<a;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,a=t.curves.length;i<a;i++){const l=t.curves[i];this.curves.push(new Zh[l.type]().fromJSON(l))}return this}}class Wo extends Jh{constructor(t){super(),this.type="Path",this.currentPoint=new Ue,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,a=t.length;i<a;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const a=new Na(this.currentPoint.clone(),new Ue(t,i));return this.curves.push(a),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,a,l){const u=new qh(this.currentPoint.clone(),new Ue(t,i),new Ue(a,l));return this.curves.push(u),this.currentPoint.set(a,l),this}bezierCurveTo(t,i,a,l,u,m){const g=new Wh(this.currentPoint.clone(),new Ue(t,i),new Ue(a,l),new Ue(u,m));return this.curves.push(g),this.currentPoint.set(u,m),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),a=new wi(i);return this.curves.push(a),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,a,l,u,m){const g=this.currentPoint.x,v=this.currentPoint.y;return this.absarc(t+g,i+v,a,l,u,m),this}absarc(t,i,a,l,u,m){return this.absellipse(t,i,a,a,l,u,m),this}ellipse(t,i,a,l,u,m,g,v){const M=this.currentPoint.x,E=this.currentPoint.y;return this.absellipse(t+M,i+E,a,l,u,m,g,v),this}absellipse(t,i,a,l,u,m,g,v){const M=new ol(t,i,a,l,u,m,g,v);if(this.curves.length>0){const A=M.getPoint(0);A.equals(this.currentPoint)||this.lineTo(A.x,A.y)}this.curves.push(M);const E=M.getPoint(1);return this.currentPoint.copy(E),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zs extends ct{constructor(t=[new Ue(0,-.5),new Ue(.5,0),new Ue(0,.5)],i=12,a=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:a,phiLength:l},i=Math.floor(i),l=on(l,0,Math.PI*2);const u=[],m=[],g=[],v=[],M=[],E=1/i,A=new Z,o=new Ue,e=new Z,n=new Z,r=new Z;let s=0,c=0;for(let h=0;h<=t.length-1;h++)switch(h){case 0:s=t[h+1].x-t[h].x,c=t[h+1].y-t[h].y,e.x=c*1,e.y=-s,e.z=c*0,r.copy(e),e.normalize(),v.push(e.x,e.y,e.z);break;case t.length-1:v.push(r.x,r.y,r.z);break;default:s=t[h+1].x-t[h].x,c=t[h+1].y-t[h].y,e.x=c*1,e.y=-s,e.z=c*0,n.copy(e),e.x+=r.x,e.y+=r.y,e.z+=r.z,e.normalize(),v.push(e.x,e.y,e.z),r.copy(n)}for(let h=0;h<=i;h++){const d=a+h*E*l,p=Math.sin(d),_=Math.cos(d);for(let y=0;y<=t.length-1;y++){A.x=t[y].x*p,A.y=t[y].y,A.z=t[y].x*_,m.push(A.x,A.y,A.z),o.x=h/i,o.y=y/(t.length-1),g.push(o.x,o.y);const S=v[3*y+0]*p,x=v[3*y+1],b=v[3*y+0]*_;M.push(S,x,b)}}for(let h=0;h<i;h++)for(let d=0;d<t.length-1;d++){const p=d+h*t.length,_=p,y=p+t.length,S=p+t.length+1,x=p+1;u.push(_,y,x),u.push(S,x,y)}this.setIndex(u),this.setAttribute("position",new nt(m,3)),this.setAttribute("uv",new nt(g,2)),this.setAttribute("normal",new nt(M,3))}static fromJSON(t){return new zs(t.points,t.segments,t.phiStart,t.phiLength)}}class Gs extends zs{constructor(t=1,i=1,a=4,l=8){const u=new Wo;u.absarc(0,-i/2,t,Math.PI*1.5,0),u.absarc(0,i/2,t,0,Math.PI*.5),super(u.getPoints(a),l),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:a,radialSegments:l}}static fromJSON(t){return new Gs(t.radius,t.length,t.capSegments,t.radialSegments)}}class ks extends ct{constructor(t=1,i=8,a=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:a,thetaLength:l},i=Math.max(3,i);const u=[],m=[],g=[],v=[],M=new Z,E=new Ue;m.push(0,0,0),g.push(0,0,1),v.push(.5,.5);for(let A=0,o=3;A<=i;A++,o+=3){const e=a+A/i*l;M.x=t*Math.cos(e),M.y=t*Math.sin(e),m.push(M.x,M.y,M.z),g.push(0,0,1),E.x=(m[o]/t+1)/2,E.y=(m[o+1]/t+1)/2,v.push(E.x,E.y)}for(let A=1;A<=i;A++)u.push(A,A+1,0);this.setIndex(u),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(g,3)),this.setAttribute("uv",new nt(v,2))}static fromJSON(t){return new ks(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vs extends ct{constructor(t=1,i=1,a=1,l=8,u=1,m=!1,g=0,v=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:a,radialSegments:l,heightSegments:u,openEnded:m,thetaStart:g,thetaLength:v};const M=this;l=Math.floor(l),u=Math.floor(u);const E=[],A=[],o=[],e=[];let n=0;const r=[],s=a/2;let c=0;h(),m===!1&&(t>0&&d(!0),i>0&&d(!1)),this.setIndex(E),this.setAttribute("position",new nt(A,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(e,2));function h(){const p=new Z,_=new Z;let y=0;const S=(i-t)/a;for(let x=0;x<=u;x++){const b=[],T=x/u,C=T*(i-t)+t;for(let R=0;R<=l;R++){const w=R/l,P=w*v+g,L=Math.sin(P),I=Math.cos(P);_.x=C*L,_.y=-T*a+s,_.z=C*I,A.push(_.x,_.y,_.z),p.set(L,S,I).normalize(),o.push(p.x,p.y,p.z),e.push(w,1-T),b.push(n++)}r.push(b)}for(let x=0;x<l;x++)for(let b=0;b<u;b++){const T=r[b][x],C=r[b+1][x],R=r[b+1][x+1],w=r[b][x+1];E.push(T,C,w),E.push(C,R,w),y+=6}M.addGroup(c,y,0),c+=y}function d(p){const _=n,y=new Ue,S=new Z;let x=0;const b=p===!0?t:i,T=p===!0?1:-1;for(let R=1;R<=l;R++)A.push(0,s*T,0),o.push(0,T,0),e.push(.5,.5),n++;const C=n;for(let R=0;R<=l;R++){const P=R/l*v+g,L=Math.cos(P),I=Math.sin(P);S.x=b*I,S.y=s*T,S.z=b*L,A.push(S.x,S.y,S.z),o.push(0,T,0),y.x=L*.5+.5,y.y=I*.5*T+.5,e.push(y.x,y.y),n++}for(let R=0;R<l;R++){const w=_+R,P=C+R;p===!0?E.push(P,P+1,w):E.push(P+1,P,w),x+=3}M.addGroup(c,x,p===!0?1:2),c+=x}}static fromJSON(t){return new Vs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xo extends Vs{constructor(t=1,i=1,a=8,l=1,u=!1,m=0,g=Math.PI*2){super(0,t,i,a,l,u,m,g),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:m,thetaLength:g}}static fromJSON(t){return new Xo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kr extends ct{constructor(t=[],i=[],a=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:a,detail:l};const u=[],m=[];g(l),M(a),E(),this.setAttribute("position",new nt(u,3)),this.setAttribute("normal",new nt(u.slice(),3)),this.setAttribute("uv",new nt(m,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function g(h){const d=new Z,p=new Z,_=new Z;for(let y=0;y<i.length;y+=3)e(i[y+0],d),e(i[y+1],p),e(i[y+2],_),v(d,p,_,h)}function v(h,d,p,_){const y=_+1,S=[];for(let x=0;x<=y;x++){S[x]=[];const b=h.clone().lerp(p,x/y),T=d.clone().lerp(p,x/y),C=y-x;for(let R=0;R<=C;R++)R===0&&x===y?S[x][R]=b:S[x][R]=b.clone().lerp(T,R/C)}for(let x=0;x<y;x++)for(let b=0;b<2*(y-x)-1;b++){const T=Math.floor(b/2);b%2===0?(o(S[x][T+1]),o(S[x+1][T]),o(S[x][T])):(o(S[x][T+1]),o(S[x+1][T+1]),o(S[x+1][T]))}}function M(h){const d=new Z;for(let p=0;p<u.length;p+=3)d.x=u[p+0],d.y=u[p+1],d.z=u[p+2],d.normalize().multiplyScalar(h),u[p+0]=d.x,u[p+1]=d.y,u[p+2]=d.z}function E(){const h=new Z;for(let d=0;d<u.length;d+=3){h.x=u[d+0],h.y=u[d+1],h.z=u[d+2];const p=s(h)/2/Math.PI+.5,_=c(h)/Math.PI+.5;m.push(p,1-_)}n(),A()}function A(){for(let h=0;h<m.length;h+=6){const d=m[h+0],p=m[h+2],_=m[h+4],y=Math.max(d,p,_),S=Math.min(d,p,_);y>.9&&S<.1&&(d<.2&&(m[h+0]+=1),p<.2&&(m[h+2]+=1),_<.2&&(m[h+4]+=1))}}function o(h){u.push(h.x,h.y,h.z)}function e(h,d){const p=h*3;d.x=t[p+0],d.y=t[p+1],d.z=t[p+2]}function n(){const h=new Z,d=new Z,p=new Z,_=new Z,y=new Ue,S=new Ue,x=new Ue;for(let b=0,T=0;b<u.length;b+=9,T+=6){h.set(u[b+0],u[b+1],u[b+2]),d.set(u[b+3],u[b+4],u[b+5]),p.set(u[b+6],u[b+7],u[b+8]),y.set(m[T+0],m[T+1]),S.set(m[T+2],m[T+3]),x.set(m[T+4],m[T+5]),_.copy(h).add(d).add(p).divideScalar(3);const C=s(_);r(y,T+0,h,C),r(S,T+2,d,C),r(x,T+4,p,C)}}function r(h,d,p,_){_<0&&h.x===1&&(m[d]=h.x-1),p.x===0&&p.z===0&&(m[d]=_/2/Math.PI+.5)}function s(h){return Math.atan2(h.z,-h.x)}function c(h){return Math.atan2(-h.y,Math.sqrt(h.x*h.x+h.z*h.z))}}static fromJSON(t){return new Kr(t.vertices,t.indices,t.radius,t.details)}}class hl extends Kr{constructor(t=1,i=0){const a=(1+Math.sqrt(5))/2,l=1/a,u=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-l,-a,0,-l,a,0,l,-a,0,l,a,-l,-a,0,-l,a,0,l,-a,0,l,a,0,-a,0,-l,a,0,-l,-a,0,l,a,0,l],m=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(u,m,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new hl(t.radius,t.detail)}}const Fa=new Z,$h=new Z,Ud=new Z,Kh=new Un;class Ai extends ct{constructor(t=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:i},t!==null){const l=Math.pow(10,4),u=Math.cos(ua*i),m=t.getIndex(),g=t.getAttribute("position"),v=m?m.count:g.count,M=[0,0,0],E=["a","b","c"],A=new Array(3),o={},e=[];for(let n=0;n<v;n+=3){m?(M[0]=m.getX(n),M[1]=m.getX(n+1),M[2]=m.getX(n+2)):(M[0]=n,M[1]=n+1,M[2]=n+2);const{a:r,b:s,c}=Kh;if(r.fromBufferAttribute(g,M[0]),s.fromBufferAttribute(g,M[1]),c.fromBufferAttribute(g,M[2]),Kh.getNormal(Ud),A[0]=`${Math.round(r.x*l)},${Math.round(r.y*l)},${Math.round(r.z*l)}`,A[1]=`${Math.round(s.x*l)},${Math.round(s.y*l)},${Math.round(s.z*l)}`,A[2]=`${Math.round(c.x*l)},${Math.round(c.y*l)},${Math.round(c.z*l)}`,!(A[0]===A[1]||A[1]===A[2]||A[2]===A[0]))for(let h=0;h<3;h++){const d=(h+1)%3,p=A[h],_=A[d],y=Kh[E[h]],S=Kh[E[d]],x=`${p}_${_}`,b=`${_}_${p}`;b in o&&o[b]?(Ud.dot(o[b].normal)<=u&&(e.push(y.x,y.y,y.z),e.push(S.x,S.y,S.z)),o[b]=null):x in o||(o[x]={index0:M[h],index1:M[d],normal:Ud.clone()})}}for(const n in o)if(o[n]){const{index0:r,index1:s}=o[n];Fa.fromBufferAttribute(g,r),$h.fromBufferAttribute(g,s),e.push(Fa.x,Fa.y,Fa.z),e.push($h.x,$h.y,$h.z)}this.setAttribute("position",new nt(e,3))}}}class ur extends Wo{constructor(t){super(t),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let a=0,l=this.holes.length;a<l;a++)i[a]=this.holes[a].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,a=t.holes.length;i<a;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,a=this.holes.length;i<a;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,a=t.holes.length;i<a;i++){const l=t.holes[i];this.holes.push(new Wo().fromJSON(l))}return this}}const Ap={triangulate:function(f,t,i=2){const a=t&&t.length,l=a?t[0]*i:f.length;let u=Qh(f,0,l,i,!0);const m=[];if(!u||u.next===u.prev)return m;let g,v,M,E,A,o,e;if(a&&(u=q0(f,t,u,i)),f.length>80*i){g=M=f[0],v=E=f[1];for(let n=i;n<l;n+=i)A=f[n],o=f[n+1],A<g&&(g=A),o<v&&(v=o),A>M&&(M=A),o>E&&(E=o);e=Math.max(M-g,E-v),e=e!==0?32767/e:0}return Oa(u,m,i,g,v,e,0),m}};function Qh(f,t,i,a,l){let u,m;if(l===eu(f,t,i,a)>0)for(u=t;u<i;u+=a)m=ml(u,f[u],f[u+1],m);else for(u=i-a;u>=t;u-=a)m=ml(u,f[u],f[u+1],m);return m&&fl(m,m.next)&&(Ws(m),m=m.next),m}function dr(f,t){if(!f)return f;t||(t=f);let i=f,a;do if(a=!1,!i.steiner&&(fl(i,i.next)||Gt(i.prev,i,i.next)===0)){if(Ws(i),i=t=i.prev,i===i.next)break;a=!0}else i=i.next;while(a||i!==t);return t}function Oa(f,t,i,a,l,u,m){if(!f)return;!m&&u&&$0(f,a,l,u);let g=f,v,M;for(;f.prev!==f.next;){if(v=f.prev,M=f.next,u?Fd(f,a,l,u):Nd(f)){t.push(v.i/i|0),t.push(f.i/i|0),t.push(M.i/i|0),Ws(f),f=M.next,g=M.next;continue}if(f=M,f===g){m?m===1?(f=Rp(dr(f),t,i),Oa(f,t,i,a,l,u,2)):m===2&&Cp(f,t,i,a,l,u):Oa(dr(f),t,i,a,l,u,1);break}}}function Nd(f){const t=f.prev,i=f,a=f.next;if(Gt(t,i,a)>=0)return!1;const l=t.x,u=i.x,m=a.x,g=t.y,v=i.y,M=a.y,E=l<u?l<m?l:m:u<m?u:m,A=g<v?g<M?g:M:v<M?v:M,o=l>u?l>m?l:m:u>m?u:m,e=g>v?g>M?g:M:v>M?v:M;let n=a.next;for(;n!==t;){if(n.x>=E&&n.x<=o&&n.y>=A&&n.y<=e&&Hs(l,g,u,v,m,M,n.x,n.y)&&Gt(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function Fd(f,t,i,a){const l=f.prev,u=f,m=f.next;if(Gt(l,u,m)>=0)return!1;const g=l.x,v=u.x,M=m.x,E=l.y,A=u.y,o=m.y,e=g<v?g<M?g:M:v<M?v:M,n=E<A?E<o?E:o:A<o?A:o,r=g>v?g>M?g:M:v>M?v:M,s=E>A?E>o?E:o:A>o?A:o,c=Od(e,n,t,i,a),h=Od(r,s,t,i,a);let d=f.prevZ,p=f.nextZ;for(;d&&d.z>=c&&p&&p.z<=h;){if(d.x>=e&&d.x<=r&&d.y>=n&&d.y<=s&&d!==l&&d!==m&&Hs(g,E,v,A,M,o,d.x,d.y)&&Gt(d.prev,d,d.next)>=0||(d=d.prevZ,p.x>=e&&p.x<=r&&p.y>=n&&p.y<=s&&p!==l&&p!==m&&Hs(g,E,v,A,M,o,p.x,p.y)&&Gt(p.prev,p,p.next)>=0))return!1;p=p.nextZ}for(;d&&d.z>=c;){if(d.x>=e&&d.x<=r&&d.y>=n&&d.y<=s&&d!==l&&d!==m&&Hs(g,E,v,A,M,o,d.x,d.y)&&Gt(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;p&&p.z<=h;){if(p.x>=e&&p.x<=r&&p.y>=n&&p.y<=s&&p!==l&&p!==m&&Hs(g,E,v,A,M,o,p.x,p.y)&&Gt(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function Rp(f,t,i){let a=f;do{const l=a.prev,u=a.next.next;!fl(l,u)&&jh(l,a,a.next,u)&&Zo(l,u)&&Zo(u,l)&&(t.push(l.i/i|0),t.push(a.i/i|0),t.push(u.i/i|0),Ws(a),Ws(a.next),a=f=u),a=a.next}while(a!==f);return dr(a)}function Cp(f,t,i,a,l,u){let m=f;do{let g=m.next.next;for(;g!==m.prev;){if(m.i!==g.i&&Lp(m,g)){let v=Jo(m,g);m=dr(m,m.next),v=dr(v,v.next),Oa(m,t,i,a,l,u,0),Oa(v,t,i,a,l,u,0);return}g=g.next}m=m.next}while(m!==f)}function q0(f,t,i,a){const l=[];let u,m,g,v,M;for(u=0,m=t.length;u<m;u++)g=t[u]*a,v=u<m-1?t[u+1]*a:f.length,M=Qh(f,g,v,a,!1),M===M.next&&(M.steiner=!0),l.push(dl(M));for(l.sort(Y0),u=0;u<l.length;u++)i=Z0(l[u],i);return i}function Y0(f,t){return f.x-t.x}function Z0(f,t){const i=ul(f,t);if(!i)return t;const a=Jo(i,f);return dr(a,a.next),dr(i,i.next)}function ul(f,t){let i=t,a=-1/0,l;const u=f.x,m=f.y;do{if(m<=i.y&&m>=i.next.y&&i.next.y!==i.y){const o=i.x+(m-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(o<=u&&o>a&&(a=o,l=i.x<i.next.x?i:i.next,o===u))return l}i=i.next}while(i!==t);if(!l)return null;const g=l,v=l.x,M=l.y;let E=1/0,A;i=l;do u>=i.x&&i.x>=v&&u!==i.x&&Hs(m<M?u:a,m,v,M,m<M?a:u,m,i.x,i.y)&&(A=Math.abs(m-i.y)/(u-i.x),Zo(i,f)&&(A<E||A===E&&(i.x>l.x||i.x===l.x&&J0(l,i)))&&(l=i,E=A)),i=i.next;while(i!==g);return l}function J0(f,t){return Gt(f.prev,f,t.prev)<0&&Gt(t.next,f,f.next)<0}function $0(f,t,i,a){let l=f;do l.z===0&&(l.z=Od(l.x,l.y,t,i,a)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==f);l.prevZ.nextZ=null,l.prevZ=null,K0(l)}function K0(f){let t,i,a,l,u,m,g,v,M=1;do{for(i=f,f=null,u=null,m=0;i;){for(m++,a=i,g=0,t=0;t<M&&(g++,a=a.nextZ,!!a);t++);for(v=M;g>0||v>0&&a;)g!==0&&(v===0||!a||i.z<=a.z)?(l=i,i=i.nextZ,g--):(l=a,a=a.nextZ,v--),u?u.nextZ=l:f=l,l.prevZ=u,u=l;i=a}u.nextZ=null,M*=2}while(m>1);return f}function Od(f,t,i,a,l){return f=(f-i)*l|0,t=(t-a)*l|0,f=(f|f<<8)&16711935,f=(f|f<<4)&252645135,f=(f|f<<2)&858993459,f=(f|f<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,f|t<<1}function dl(f){let t=f,i=f;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==f);return i}function Hs(f,t,i,a,l,u,m,g){return(l-m)*(t-g)>=(f-m)*(u-g)&&(f-m)*(a-g)>=(i-m)*(t-g)&&(i-m)*(u-g)>=(l-m)*(a-g)}function Lp(f,t){return f.next.i!==t.i&&f.prev.i!==t.i&&!Bd(f,t)&&(Zo(f,t)&&Zo(t,f)&&pl(f,t)&&(Gt(f.prev,f,t.prev)||Gt(f,t.prev,t))||fl(f,t)&&Gt(f.prev,f,f.next)>0&&Gt(t.prev,t,t.next)>0)}function Gt(f,t,i){return(t.y-f.y)*(i.x-t.x)-(t.x-f.x)*(i.y-t.y)}function fl(f,t){return f.x===t.x&&f.y===t.y}function jh(f,t,i,a){const l=Yo(Gt(f,t,i)),u=Yo(Gt(f,t,a)),m=Yo(Gt(i,a,f)),g=Yo(Gt(i,a,t));return!!(l!==u&&m!==g||l===0&&qo(f,i,t)||u===0&&qo(f,a,t)||m===0&&qo(i,f,a)||g===0&&qo(i,t,a))}function qo(f,t,i){return t.x<=Math.max(f.x,i.x)&&t.x>=Math.min(f.x,i.x)&&t.y<=Math.max(f.y,i.y)&&t.y>=Math.min(f.y,i.y)}function Yo(f){return f>0?1:f<0?-1:0}function Bd(f,t){let i=f;do{if(i.i!==f.i&&i.next.i!==f.i&&i.i!==t.i&&i.next.i!==t.i&&jh(i,i.next,f,t))return!0;i=i.next}while(i!==f);return!1}function Zo(f,t){return Gt(f.prev,f,f.next)<0?Gt(f,t,f.next)>=0&&Gt(f,f.prev,t)>=0:Gt(f,t,f.prev)<0||Gt(f,f.next,t)<0}function pl(f,t){let i=f,a=!1;const l=(f.x+t.x)/2,u=(f.y+t.y)/2;do i.y>u!=i.next.y>u&&i.next.y!==i.y&&l<(i.next.x-i.x)*(u-i.y)/(i.next.y-i.y)+i.x&&(a=!a),i=i.next;while(i!==f);return a}function Jo(f,t){const i=new Xs(f.i,f.x,f.y),a=new Xs(t.i,t.x,t.y),l=f.next,u=t.prev;return f.next=t,t.prev=f,i.next=l,l.prev=i,a.next=i,i.prev=a,u.next=a,a.prev=u,a}function ml(f,t,i,a){const l=new Xs(f,t,i);return a?(l.next=a.next,l.prev=a,a.next.prev=l,a.next=l):(l.prev=l,l.next=l),l}function Ws(f){f.next.prev=f.prev,f.prev.next=f.next,f.prevZ&&(f.prevZ.nextZ=f.nextZ),f.nextZ&&(f.nextZ.prevZ=f.prevZ)}function Xs(f,t,i){this.i=f,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function eu(f,t,i,a){let l=0;for(let u=t,m=i-a;u<i;u+=a)l+=(f[m]-f[u])*(f[u+1]+f[m+1]),m=u;return l}class Cn{static area(t){const i=t.length;let a=0;for(let l=i-1,u=0;u<i;l=u++)a+=t[l].x*t[u].y-t[u].x*t[l].y;return a*.5}static isClockWise(t){return Cn.area(t)<0}static triangulateShape(t,i){const a=[],l=[],u=[];gl(t),_l(a,t);let m=t.length;i.forEach(gl);for(let v=0;v<i.length;v++)l.push(m),m+=i[v].length,_l(a,i[v]);const g=Ap.triangulate(a,l);for(let v=0;v<g.length;v+=3)u.push(g.slice(v,v+3));return u}}function gl(f){const t=f.length;t>2&&f[t-1].equals(f[0])&&f.pop()}function _l(f,t){for(let i=0;i<t.length;i++)f.push(t[i].x),f.push(t[i].y)}class qs extends ct{constructor(t=new ur([new Ue(.5,.5),new Ue(-.5,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const a=this,l=[],u=[];for(let g=0,v=t.length;g<v;g++){const M=t[g];m(M)}this.setAttribute("position",new nt(l,3)),this.setAttribute("uv",new nt(u,2)),this.computeVertexNormals();function m(g){const v=[],M=i.curveSegments!==void 0?i.curveSegments:12,E=i.steps!==void 0?i.steps:1,A=i.depth!==void 0?i.depth:1;let o=i.bevelEnabled!==void 0?i.bevelEnabled:!0,e=i.bevelThickness!==void 0?i.bevelThickness:.2,n=i.bevelSize!==void 0?i.bevelSize:e-.1,r=i.bevelOffset!==void 0?i.bevelOffset:0,s=i.bevelSegments!==void 0?i.bevelSegments:3;const c=i.extrudePath,h=i.UVGenerator!==void 0?i.UVGenerator:zd;let d,p=!1,_,y,S,x;c&&(d=c.getSpacedPoints(E),p=!0,o=!1,_=c.computeFrenetFrames(E,!1),y=new Z,S=new Z,x=new Z),o||(s=0,e=0,n=0,r=0);const b=g.extractPoints(M);let T=b.shape;const C=b.holes;if(!Cn.isClockWise(T)){T=T.reverse();for(let j=0,K=C.length;j<K;j++){const te=C[j];Cn.isClockWise(te)&&(C[j]=te.reverse())}}const w=Cn.triangulateShape(T,C),P=T;for(let j=0,K=C.length;j<K;j++){const te=C[j];T=T.concat(te)}function L(j,K,te){return K||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().multiplyScalar(te).add(j)}const I=T.length,O=w.length;function F(j,K,te){let Re,be,De;const Oe=j.x-K.x,Fe=j.y-K.y,Xe=te.x-j.x,it=te.y-j.y,$=Oe*Oe+Fe*Fe,V=Oe*it-Fe*Xe;if(Math.abs(V)>Number.EPSILON){const G=Math.sqrt($),fe=Math.sqrt(Xe*Xe+it*it),ie=K.x-Fe/G,xe=K.y+Oe/G,Me=te.x-it/fe,Le=te.y+Xe/fe,ce=((Me-ie)*it-(Le-xe)*Xe)/(Oe*it-Fe*Xe);Re=ie+Oe*ce-j.x,be=xe+Fe*ce-j.y;const Ie=Re*Re+be*be;if(Ie<=2)return new Ue(Re,be);De=Math.sqrt(Ie/2)}else{let G=!1;Oe>Number.EPSILON?Xe>Number.EPSILON&&(G=!0):Oe<-Number.EPSILON?Xe<-Number.EPSILON&&(G=!0):Math.sign(Fe)===Math.sign(it)&&(G=!0),G?(Re=-Fe,be=Oe,De=Math.sqrt($)):(Re=Oe,be=Fe,De=Math.sqrt($/2))}return new Ue(Re/De,be/De)}const N=[];for(let j=0,K=P.length,te=K-1,Re=j+1;j<K;j++,te++,Re++)te===K&&(te=0),Re===K&&(Re=0),N[j]=F(P[j],P[te],P[Re]);const k=[];let D,B=N.concat();for(let j=0,K=C.length;j<K;j++){const te=C[j];D=[];for(let Re=0,be=te.length,De=be-1,Oe=Re+1;Re<be;Re++,De++,Oe++)De===be&&(De=0),Oe===be&&(Oe=0),D[Re]=F(te[Re],te[De],te[Oe]);k.push(D),B=B.concat(D)}for(let j=0;j<s;j++){const K=j/s,te=e*Math.cos(K*Math.PI/2),Re=n*Math.sin(K*Math.PI/2)+r;for(let be=0,De=P.length;be<De;be++){const Oe=L(P[be],N[be],Re);he(Oe.x,Oe.y,-te)}for(let be=0,De=C.length;be<De;be++){const Oe=C[be];D=k[be];for(let Fe=0,Xe=Oe.length;Fe<Xe;Fe++){const it=L(Oe[Fe],D[Fe],Re);he(it.x,it.y,-te)}}}const Q=n+r;for(let j=0;j<I;j++){const K=o?L(T[j],B[j],Q):T[j];p?(S.copy(_.normals[0]).multiplyScalar(K.x),y.copy(_.binormals[0]).multiplyScalar(K.y),x.copy(d[0]).add(S).add(y),he(x.x,x.y,x.z)):he(K.x,K.y,0)}for(let j=1;j<=E;j++)for(let K=0;K<I;K++){const te=o?L(T[K],B[K],Q):T[K];p?(S.copy(_.normals[j]).multiplyScalar(te.x),y.copy(_.binormals[j]).multiplyScalar(te.y),x.copy(d[j]).add(S).add(y),he(x.x,x.y,x.z)):he(te.x,te.y,A/E*j)}for(let j=s-1;j>=0;j--){const K=j/s,te=e*Math.cos(K*Math.PI/2),Re=n*Math.sin(K*Math.PI/2)+r;for(let be=0,De=P.length;be<De;be++){const Oe=L(P[be],N[be],Re);he(Oe.x,Oe.y,A+te)}for(let be=0,De=C.length;be<De;be++){const Oe=C[be];D=k[be];for(let Fe=0,Xe=Oe.length;Fe<Xe;Fe++){const it=L(Oe[Fe],D[Fe],Re);p?he(it.x,it.y+d[E-1].y,d[E-1].x+te):he(it.x,it.y,A+te)}}}ge(),re();function ge(){const j=l.length/3;if(o){let K=0,te=I*K;for(let Re=0;Re<O;Re++){const be=w[Re];ye(be[2]+te,be[1]+te,be[0]+te)}K=E+s*2,te=I*K;for(let Re=0;Re<O;Re++){const be=w[Re];ye(be[0]+te,be[1]+te,be[2]+te)}}else{for(let K=0;K<O;K++){const te=w[K];ye(te[2],te[1],te[0])}for(let K=0;K<O;K++){const te=w[K];ye(te[0]+I*E,te[1]+I*E,te[2]+I*E)}}a.addGroup(j,l.length/3-j,0)}function re(){const j=l.length/3;let K=0;W(P,K),K+=P.length;for(let te=0,Re=C.length;te<Re;te++){const be=C[te];W(be,K),K+=be.length}a.addGroup(j,l.length/3-j,1)}function W(j,K){let te=j.length;for(;--te>=0;){const Re=te;let be=te-1;be<0&&(be=j.length-1);for(let De=0,Oe=E+s*2;De<Oe;De++){const Fe=I*De,Xe=I*(De+1),it=K+Re+Fe,$=K+be+Fe,V=K+be+Xe,G=K+Re+Xe;_e(it,$,V,G)}}}function he(j,K,te){v.push(j),v.push(K),v.push(te)}function ye(j,K,te){ae(j),ae(K),ae(te);const Re=l.length/3,be=h.generateTopUV(a,l,Re-3,Re-2,Re-1);we(be[0]),we(be[1]),we(be[2])}function _e(j,K,te,Re){ae(j),ae(K),ae(Re),ae(K),ae(te),ae(Re);const be=l.length/3,De=h.generateSideWallUV(a,l,be-6,be-3,be-2,be-1);we(De[0]),we(De[1]),we(De[3]),we(De[1]),we(De[2]),we(De[3])}function ae(j){l.push(v[j*3+0]),l.push(v[j*3+1]),l.push(v[j*3+2])}function we(j){u.push(j.x),u.push(j.y)}}}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,a=this.parameters.options;return tu(i,a,t)}static fromJSON(t,i){const a=[];for(let u=0,m=t.shapes.length;u<m;u++){const g=i[t.shapes[u]];a.push(g)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Zh[l.type]().fromJSON(l)),new qs(a,t.options)}}const zd={generateTopUV:function(f,t,i,a,l){const u=t[i*3],m=t[i*3+1],g=t[a*3],v=t[a*3+1],M=t[l*3],E=t[l*3+1];return[new Ue(u,m),new Ue(g,v),new Ue(M,E)]},generateSideWallUV:function(f,t,i,a,l,u){const m=t[i*3],g=t[i*3+1],v=t[i*3+2],M=t[a*3],E=t[a*3+1],A=t[a*3+2],o=t[l*3],e=t[l*3+1],n=t[l*3+2],r=t[u*3],s=t[u*3+1],c=t[u*3+2];return Math.abs(g-E)<Math.abs(m-M)?[new Ue(m,1-v),new Ue(M,1-A),new Ue(o,1-n),new Ue(r,1-c)]:[new Ue(g,1-v),new Ue(E,1-A),new Ue(e,1-n),new Ue(s,1-c)]}};function tu(f,t,i){if(i.shapes=[],Array.isArray(f))for(let a=0,l=f.length;a<l;a++){const u=f[a];i.shapes.push(u.uuid)}else i.shapes.push(f.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class $o extends Kr{constructor(t=1,i=0){const a=(1+Math.sqrt(5))/2,l=[-1,a,0,1,a,0,-1,-a,0,1,-a,0,0,-1,a,0,1,a,0,-1,-a,0,1,-a,a,0,-1,a,0,1,-a,0,-1,-a,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new $o(t.radius,t.detail)}}class Ri extends Kr{constructor(t=1,i=0){const a=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(a,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Ri(t.radius,t.detail)}}class xl extends ct{constructor(t=.5,i=1,a=8,l=1,u=0,m=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:a,phiSegments:l,thetaStart:u,thetaLength:m},a=Math.max(3,a),l=Math.max(1,l);const g=[],v=[],M=[],E=[];let A=t;const o=(i-t)/l,e=new Z,n=new Ue;for(let r=0;r<=l;r++){for(let s=0;s<=a;s++){const c=u+s/a*m;e.x=A*Math.cos(c),e.y=A*Math.sin(c),v.push(e.x,e.y,e.z),M.push(0,0,1),n.x=(e.x/i+1)/2,n.y=(e.y/i+1)/2,E.push(n.x,n.y)}A+=o}for(let r=0;r<l;r++){const s=r*(a+1);for(let c=0;c<a;c++){const h=c+s,d=h,p=h+a+1,_=h+a+2,y=h+1;g.push(d,p,y),g.push(p,_,y)}}this.setIndex(g),this.setAttribute("position",new nt(v,3)),this.setAttribute("normal",new nt(M,3)),this.setAttribute("uv",new nt(E,2))}static fromJSON(t){return new xl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ko extends ct{constructor(t=new ur([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const a=[],l=[],u=[],m=[];let g=0,v=0;if(Array.isArray(t)===!1)M(t);else for(let E=0;E<t.length;E++)M(t[E]),this.addGroup(g,v,E),g+=v,v=0;this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(m,2));function M(E){const A=l.length/3,o=E.extractPoints(i);let e=o.shape;const n=o.holes;Cn.isClockWise(e)===!1&&(e=e.reverse());for(let s=0,c=n.length;s<c;s++){const h=n[s];Cn.isClockWise(h)===!0&&(n[s]=h.reverse())}const r=Cn.triangulateShape(e,n);for(let s=0,c=n.length;s<c;s++){const h=n[s];e=e.concat(h)}for(let s=0,c=e.length;s<c;s++){const h=e[s];l.push(h.x,h.y,0),u.push(0,0,1),m.push(h.x,h.y)}for(let s=0,c=r.length;s<c;s++){const h=r[s],d=h[0]+A,p=h[1]+A,_=h[2]+A;a.push(d,p,_),v+=3}}}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return Ba(i,t)}static fromJSON(t,i){const a=[];for(let l=0,u=t.shapes.length;l<u;l++){const m=i[t.shapes[l]];a.push(m)}return new Ko(a,t.curveSegments)}}function Ba(f,t){if(t.shapes=[],Array.isArray(f))for(let i=0,a=f.length;i<a;i++){const l=f[i];t.shapes.push(l.uuid)}else t.shapes.push(f.uuid);return t}class fr extends ct{constructor(t=1,i=32,a=16,l=0,u=Math.PI*2,m=0,g=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:a,phiStart:l,phiLength:u,thetaStart:m,thetaLength:g},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const v=Math.min(m+g,Math.PI);let M=0;const E=[],A=new Z,o=new Z,e=[],n=[],r=[],s=[];for(let c=0;c<=a;c++){const h=[],d=c/a;let p=0;c==0&&m==0?p=.5/i:c==a&&v==Math.PI&&(p=-.5/i);for(let _=0;_<=i;_++){const y=_/i;A.x=-t*Math.cos(l+y*u)*Math.sin(m+d*g),A.y=t*Math.cos(m+d*g),A.z=t*Math.sin(l+y*u)*Math.sin(m+d*g),n.push(A.x,A.y,A.z),o.copy(A).normalize(),r.push(o.x,o.y,o.z),s.push(y+p,1-d),h.push(M++)}E.push(h)}for(let c=0;c<a;c++)for(let h=0;h<i;h++){const d=E[c][h+1],p=E[c][h],_=E[c+1][h],y=E[c+1][h+1];(c!==0||m>0)&&e.push(d,p,y),(c!==a-1||v<Math.PI)&&e.push(p,_,y)}this.setIndex(e),this.setAttribute("position",new nt(n,3)),this.setAttribute("normal",new nt(r,3)),this.setAttribute("uv",new nt(s,2))}static fromJSON(t){return new fr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class yl extends Kr{constructor(t=1,i=0){const a=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],l=[2,1,0,0,3,2,1,3,0,2,3,1];super(a,l,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new yl(t.radius,t.detail)}}class vl extends ct{constructor(t=1,i=.4,a=8,l=6,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:a,tubularSegments:l,arc:u},a=Math.floor(a),l=Math.floor(l);const m=[],g=[],v=[],M=[],E=new Z,A=new Z,o=new Z;for(let e=0;e<=a;e++)for(let n=0;n<=l;n++){const r=n/l*u,s=e/a*Math.PI*2;A.x=(t+i*Math.cos(s))*Math.cos(r),A.y=(t+i*Math.cos(s))*Math.sin(r),A.z=i*Math.sin(s),g.push(A.x,A.y,A.z),E.x=t*Math.cos(r),E.y=t*Math.sin(r),o.subVectors(A,E).normalize(),v.push(o.x,o.y,o.z),M.push(n/l),M.push(e/a)}for(let e=1;e<=a;e++)for(let n=1;n<=l;n++){const r=(l+1)*e+n-1,s=(l+1)*(e-1)+n-1,c=(l+1)*(e-1)+n,h=(l+1)*e+n;m.push(r,s,h),m.push(s,c,h)}this.setIndex(m),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(v,3)),this.setAttribute("uv",new nt(M,2))}static fromJSON(t){return new vl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ml extends ct{constructor(t=1,i=.4,a=64,l=8,u=2,m=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:a,radialSegments:l,p:u,q:m},a=Math.floor(a),l=Math.floor(l);const g=[],v=[],M=[],E=[],A=new Z,o=new Z,e=new Z,n=new Z,r=new Z,s=new Z,c=new Z;for(let d=0;d<=a;++d){const p=d/a*u*Math.PI*2;h(p,u,m,t,e),h(p+.01,u,m,t,n),s.subVectors(n,e),c.addVectors(n,e),r.crossVectors(s,c),c.crossVectors(r,s),r.normalize(),c.normalize();for(let _=0;_<=l;++_){const y=_/l*Math.PI*2,S=-i*Math.cos(y),x=i*Math.sin(y);A.x=e.x+(S*c.x+x*r.x),A.y=e.y+(S*c.y+x*r.y),A.z=e.z+(S*c.z+x*r.z),v.push(A.x,A.y,A.z),o.subVectors(A,e).normalize(),M.push(o.x,o.y,o.z),E.push(d/a),E.push(_/l)}}for(let d=1;d<=a;d++)for(let p=1;p<=l;p++){const _=(l+1)*(d-1)+(p-1),y=(l+1)*d+(p-1),S=(l+1)*d+p,x=(l+1)*(d-1)+p;g.push(_,y,x),g.push(y,S,x)}this.setIndex(g),this.setAttribute("position",new nt(v,3)),this.setAttribute("normal",new nt(M,3)),this.setAttribute("uv",new nt(E,2));function h(d,p,_,y,S){const x=Math.cos(d),b=Math.sin(d),T=_/p*d,C=Math.cos(T);S.x=y*(2+C)*.5*x,S.y=y*(2+C)*b*.5,S.z=y*Math.sin(T)*.5}}static fromJSON(t){return new Ml(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Sl extends ct{constructor(t=new Yh(new Z(-1,-1,0),new Z(-1,1,0),new Z(1,1,0)),i=64,a=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:a,radialSegments:l,closed:u};const m=t.computeFrenetFrames(i,u);this.tangents=m.tangents,this.normals=m.normals,this.binormals=m.binormals;const g=new Z,v=new Z,M=new Ue;let E=new Z;const A=[],o=[],e=[],n=[];r(),this.setIndex(n),this.setAttribute("position",new nt(A,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(e,2));function r(){for(let d=0;d<i;d++)s(d);s(u===!1?i:0),h(),c()}function s(d){E=t.getPointAt(d/i,E);const p=m.normals[d],_=m.binormals[d];for(let y=0;y<=l;y++){const S=y/l*Math.PI*2,x=Math.sin(S),b=-Math.cos(S);v.x=b*p.x+x*_.x,v.y=b*p.y+x*_.y,v.z=b*p.z+x*_.z,v.normalize(),o.push(v.x,v.y,v.z),g.x=E.x+a*v.x,g.y=E.y+a*v.y,g.z=E.z+a*v.z,A.push(g.x,g.y,g.z)}}function c(){for(let d=1;d<=i;d++)for(let p=1;p<=l;p++){const _=(l+1)*(d-1)+(p-1),y=(l+1)*d+(p-1),S=(l+1)*d+p,x=(l+1)*(d-1)+p;n.push(_,y,x),n.push(y,S,x)}}function h(){for(let d=0;d<=i;d++)for(let p=0;p<=l;p++)M.x=d/i,M.y=p/l,e.push(M.x,M.y)}}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Sl(new Zh[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Pp extends ct{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],a=new Set,l=new Z,u=new Z;if(t.index!==null){const m=t.attributes.position,g=t.index;let v=t.groups;v.length===0&&(v=[{start:0,count:g.count,materialIndex:0}]);for(let M=0,E=v.length;M<E;++M){const A=v[M],o=A.start,e=A.count;for(let n=o,r=o+e;n<r;n+=3)for(let s=0;s<3;s++){const c=g.getX(n+s),h=g.getX(n+(s+1)%3);l.fromBufferAttribute(m,c),u.fromBufferAttribute(m,h),Ip(l,u,a)===!0&&(i.push(l.x,l.y,l.z),i.push(u.x,u.y,u.z))}}}else{const m=t.attributes.position;for(let g=0,v=m.count/3;g<v;g++)for(let M=0;M<3;M++){const E=3*g+M,A=3*g+(M+1)%3;l.fromBufferAttribute(m,E),u.fromBufferAttribute(m,A),Ip(l,u,a)===!0&&(i.push(l.x,l.y,l.z),i.push(u.x,u.y,u.z))}}this.setAttribute("position",new nt(i,3))}}}function Ip(f,t,i){const a=`${f.x},${f.y},${f.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${f.x},${f.y},${f.z}`;return i.has(a)===!0||i.has(l)===!0?!1:(i.add(a),i.add(l),!0)}var Dp=Object.freeze({__proto__:null,BoxGeometry:Ts,CapsuleGeometry:Gs,CircleGeometry:ks,ConeGeometry:Xo,CylinderGeometry:Vs,DodecahedronGeometry:hl,EdgesGeometry:Ai,ExtrudeGeometry:qs,IcosahedronGeometry:$o,LatheGeometry:zs,OctahedronGeometry:Ri,PlaneGeometry:Ea,PolyhedronGeometry:Kr,RingGeometry:xl,ShapeGeometry:Ko,SphereGeometry:fr,TetrahedronGeometry:yl,TorusGeometry:vl,TorusKnotGeometry:Ml,TubeGeometry:Sl,WireframeGeometry:Pp});class Up extends Nn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ue(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Np extends jt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gd extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fp extends Gd{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return on(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ue(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class nu extends Nn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ue(16777215),this.specular=new ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Op extends Nn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class za extends Nn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Bp extends Nn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ht extends Nn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ds,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bl extends fn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function gi(f,t,i){return Qo(f)?new f.constructor(f.subarray(t,i!==void 0?i:f.length)):f.slice(t,i)}function pr(f,t,i){return!f||!i&&f.constructor===t?f:typeof t.BYTES_PER_ELEMENT=="number"?new t(f):Array.prototype.slice.call(f)}function Qo(f){return ArrayBuffer.isView(f)&&!(f instanceof DataView)}function zp(f){function t(l,u){return f[l]-f[u]}const i=f.length,a=new Array(i);for(let l=0;l!==i;++l)a[l]=l;return a.sort(t),a}function Ga(f,t,i){const a=f.length,l=new f.constructor(a);for(let u=0,m=0;m!==a;++u){const g=i[u]*t;for(let v=0;v!==t;++v)l[m++]=f[g+v]}return l}function kd(f,t,i,a){let l=1,u=f[0];for(;u!==void 0&&u[a]===void 0;)u=f[l++];if(u===void 0)return;let m=u[a];if(m!==void 0)if(Array.isArray(m))do m=u[a],m!==void 0&&(t.push(u.time),i.push.apply(i,m)),u=f[l++];while(u!==void 0);else if(m.toArray!==void 0)do m=u[a],m!==void 0&&(t.push(u.time),m.toArray(i,i.length)),u=f[l++];while(u!==void 0);else do m=u[a],m!==void 0&&(t.push(u.time),i.push(m)),u=f[l++];while(u!==void 0)}function Gp(f,t,i,a,l=30){const u=f.clone();u.name=t;const m=[];for(let v=0;v<u.tracks.length;++v){const M=u.tracks[v],E=M.getValueSize(),A=[],o=[];for(let e=0;e<M.times.length;++e){const n=M.times[e]*l;if(!(n<i||n>=a)){A.push(M.times[e]);for(let r=0;r<E;++r)o.push(M.values[e*E+r])}}A.length!==0&&(M.times=pr(A,M.times.constructor),M.values=pr(o,M.values.constructor),m.push(M))}u.tracks=m;let g=1/0;for(let v=0;v<u.tracks.length;++v)g>u.tracks[v].times[0]&&(g=u.tracks[v].times[0]);for(let v=0;v<u.tracks.length;++v)u.tracks[v].shift(-1*g);return u.resetDuration(),u}function kp(f,t=0,i=f,a=30){a<=0&&(a=30);const l=i.tracks.length,u=t/a;for(let m=0;m<l;++m){const g=i.tracks[m],v=g.ValueTypeName;if(v==="bool"||v==="string")continue;const M=f.tracks.find(function(c){return c.name===g.name&&c.ValueTypeName===v});if(M===void 0)continue;let E=0;const A=g.getValueSize();g.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(E=A/3);let o=0;const e=M.getValueSize();M.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(o=e/3);const n=g.times.length-1;let r;if(u<=g.times[0]){const c=E,h=A-E;r=gi(g.values,c,h)}else if(u>=g.times[n]){const c=n*A+E,h=c+A-E;r=gi(g.values,c,h)}else{const c=g.createInterpolant(),h=E,d=A-E;c.evaluate(u),r=gi(c.resultBuffer,h,d)}v==="quaternion"&&new jn().fromArray(r).normalize().conjugate().toArray(r);const s=M.times.length;for(let c=0;c<s;++c){const h=c*e+o;if(v==="quaternion")jn.multiplyQuaternionsFlat(M.values,h,r,0,M.values,h);else{const d=e-o*2;for(let p=0;p<d;++p)M.values[h+p]-=r[p]}}}return f.blendMode=io,f}var El=Object.freeze({__proto__:null,arraySlice:gi,convertArray:pr,isTypedArray:Qo,getKeyframeOrder:zp,sortedArray:Ga,flattenJSON:kd,subclip:Gp,makeClipAdditive:kp});class ka{constructor(t,i,a,l){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=l!==void 0?l:new i.constructor(a),this.sampleValues=i,this.valueSize=a,this.settings=null,this.DefaultSettings_={}}evaluate(t){const i=this.parameterPositions;let a=this._cachedIndex,l=i[a],u=i[a-1];e:{t:{let m;n:{i:if(!(t<l)){for(let g=a+2;;){if(l===void 0){if(t<u)break i;return a=i.length,this._cachedIndex=a,this.copySampleValue_(a-1)}if(a===g)break;if(u=l,l=i[++a],t<l)break t}m=i.length;break n}if(!(t>=u)){const g=i[1];t<g&&(a=2,u=g);for(let v=a-2;;){if(u===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===v)break;if(l=u,u=i[--a-1],t>=u)break t}m=a,a=0;break n}break e}for(;a<m;){const g=a+m>>>1;t<i[g]?m=g:a=g+1}if(l=i[a],u=i[a-1],u===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(l===void 0)return a=i.length,this._cachedIndex=a,this.copySampleValue_(a-1)}this._cachedIndex=a,this.intervalChanged_(a,u,l)}return this.interpolate_(a,u,t,l)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const i=this.resultBuffer,a=this.sampleValues,l=this.valueSize,u=t*l;for(let m=0;m!==l;++m)i[m]=a[u+m];return i}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Vp extends ka{constructor(t,i,a,l){super(t,i,a,l),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ls,endingEnd:ls}}intervalChanged_(t,i,a){const l=this.parameterPositions;let u=t-2,m=t+1,g=l[u],v=l[m];if(g===void 0)switch(this.getSettings_().endingStart){case hs:u=t,g=2*i-a;break;case Ur:u=l.length-2,g=i+l[u]-l[u+1];break;default:u=t,g=a}if(v===void 0)switch(this.getSettings_().endingEnd){case hs:m=t,v=2*a-i;break;case Ur:m=1,v=a+l[1]-l[0];break;default:m=t-1,v=i}const M=(a-i)*.5,E=this.valueSize;this._weightPrev=M/(i-g),this._weightNext=M/(v-a),this._offsetPrev=u*E,this._offsetNext=m*E}interpolate_(t,i,a,l){const u=this.resultBuffer,m=this.sampleValues,g=this.valueSize,v=t*g,M=v-g,E=this._offsetPrev,A=this._offsetNext,o=this._weightPrev,e=this._weightNext,n=(a-i)/(l-i),r=n*n,s=r*n,c=-o*s+2*o*r-o*n,h=(1+o)*s+(-1.5-2*o)*r+(-.5+o)*n+1,d=(-1-e)*s+(1.5+e)*r+.5*n,p=e*s-e*r;for(let _=0;_!==g;++_)u[_]=c*m[E+_]+h*m[M+_]+d*m[v+_]+p*m[A+_];return u}}class Ci extends ka{constructor(t,i,a,l){super(t,i,a,l)}interpolate_(t,i,a,l){const u=this.resultBuffer,m=this.sampleValues,g=this.valueSize,v=t*g,M=v-g,E=(a-i)/(l-i),A=1-E;for(let o=0;o!==g;++o)u[o]=m[M+o]*A+m[v+o]*E;return u}}class Vd extends ka{constructor(t,i,a,l){super(t,i,a,l)}interpolate_(t){return this.copySampleValue_(t-1)}}class Li{constructor(t,i,a,l){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(i===void 0||i.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=pr(i,this.TimeBufferType),this.values=pr(a,this.ValueBufferType),this.setInterpolation(l||this.DefaultInterpolation)}static toJSON(t){const i=t.constructor;let a;if(i.toJSON!==this.toJSON)a=i.toJSON(t);else{a={name:t.name,times:pr(t.times,Array),values:pr(t.values,Array)};const l=t.getInterpolation();l!==t.DefaultInterpolation&&(a.interpolation=l)}return a.type=t.ValueTypeName,a}InterpolantFactoryMethodDiscrete(t){return new Vd(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ci(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Vp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let i;switch(t){case oa:i=this.InterpolantFactoryMethodDiscrete;break;case ca:i=this.InterpolantFactoryMethodLinear;break;case Pc:i=this.InterpolantFactoryMethodSmooth;break}if(i===void 0){const a="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(a);return console.warn("THREE.KeyframeTrack:",a),this}return this.createInterpolant=i,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oa;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const i=this.times;for(let a=0,l=i.length;a!==l;++a)i[a]+=t}return this}scale(t){if(t!==1){const i=this.times;for(let a=0,l=i.length;a!==l;++a)i[a]*=t}return this}trim(t,i){const a=this.times,l=a.length;let u=0,m=l-1;for(;u!==l&&a[u]<t;)++u;for(;m!==-1&&a[m]>i;)--m;if(++m,u!==0||m!==l){u>=m&&(m=Math.max(m,1),u=m-1);const g=this.getValueSize();this.times=gi(a,u,m),this.values=gi(this.values,u*g,m*g)}return this}validate(){let t=!0;const i=this.getValueSize();i-Math.floor(i)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const a=this.times,l=this.values,u=a.length;u===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let m=null;for(let g=0;g!==u;g++){const v=a[g];if(typeof v=="number"&&isNaN(v)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,g,v),t=!1;break}if(m!==null&&m>v){console.error("THREE.KeyframeTrack: Out of order keys.",this,g,v,m),t=!1;break}m=v}if(l!==void 0&&Qo(l))for(let g=0,v=l.length;g!==v;++g){const M=l[g];if(isNaN(M)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,g,M),t=!1;break}}return t}optimize(){const t=gi(this.times),i=gi(this.values),a=this.getValueSize(),l=this.getInterpolation()===Pc,u=t.length-1;let m=1;for(let g=1;g<u;++g){let v=!1;const M=t[g],E=t[g+1];if(M!==E&&(g!==1||M!==t[0]))if(l)v=!0;else{const A=g*a,o=A-a,e=A+a;for(let n=0;n!==a;++n){const r=i[A+n];if(r!==i[o+n]||r!==i[e+n]){v=!0;break}}}if(v){if(g!==m){t[m]=t[g];const A=g*a,o=m*a;for(let e=0;e!==a;++e)i[o+e]=i[A+e]}++m}}if(u>0){t[m]=t[u];for(let g=u*a,v=m*a,M=0;M!==a;++M)i[v+M]=i[g+M];++m}return m!==t.length?(this.times=gi(t,0,m),this.values=gi(i,0,m*a)):(this.times=t,this.values=i),this}clone(){const t=gi(this.times,0),i=gi(this.values,0),a=this.constructor,l=new a(this.name,t,i);return l.createInterpolant=this.createInterpolant,l}}Li.prototype.TimeBufferType=Float32Array,Li.prototype.ValueBufferType=Float32Array,Li.prototype.DefaultInterpolation=ca;class mr extends Li{}mr.prototype.ValueTypeName="bool",mr.prototype.ValueBufferType=Array,mr.prototype.DefaultInterpolation=oa,mr.prototype.InterpolantFactoryMethodLinear=void 0,mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hd extends Li{}Hd.prototype.ValueTypeName="color";class Tl extends Li{}Tl.prototype.ValueTypeName="number";class wl extends ka{constructor(t,i,a,l){super(t,i,a,l)}interpolate_(t,i,a,l){const u=this.resultBuffer,m=this.sampleValues,g=this.valueSize,v=(a-i)/(l-i);let M=t*g;for(let E=M+g;M!==E;M+=4)jn.slerpFlat(u,0,m,M-g,m,M,v);return u}}class gr extends Li{InterpolantFactoryMethodLinear(t){return new wl(this.times,this.values,this.getValueSize(),t)}}gr.prototype.ValueTypeName="quaternion",gr.prototype.DefaultInterpolation=ca,gr.prototype.InterpolantFactoryMethodSmooth=void 0;class _r extends Li{}_r.prototype.ValueTypeName="string",_r.prototype.ValueBufferType=Array,_r.prototype.DefaultInterpolation=oa,_r.prototype.InterpolantFactoryMethodLinear=void 0,_r.prototype.InterpolantFactoryMethodSmooth=void 0;class Ys extends Li{}Ys.prototype.ValueTypeName="vector";class Al{constructor(t,i=-1,a,l=us){this.name=t,this.tracks=a,this.duration=i,this.blendMode=l,this.uuid=oi(),this.duration<0&&this.resetDuration()}static parse(t){const i=[],a=t.tracks,l=1/(t.fps||1);for(let m=0,g=a.length;m!==g;++m)i.push(iu(a[m]).scale(l));const u=new this(t.name,t.duration,i,t.blendMode);return u.uuid=t.uuid,u}static toJSON(t){const i=[],a=t.tracks,l={name:t.name,duration:t.duration,tracks:i,uuid:t.uuid,blendMode:t.blendMode};for(let u=0,m=a.length;u!==m;++u)i.push(Li.toJSON(a[u]));return l}static CreateFromMorphTargetSequence(t,i,a,l){const u=i.length,m=[];for(let g=0;g<u;g++){let v=[],M=[];v.push((g+u-1)%u,g,(g+1)%u),M.push(0,1,0);const E=zp(v);v=Ga(v,1,E),M=Ga(M,1,E),!l&&v[0]===0&&(v.push(u),M.push(M[0])),m.push(new Tl(".morphTargetInfluences["+i[g].name+"]",v,M).scale(1/a))}return new this(t,-1,m)}static findByName(t,i){let a=t;if(!Array.isArray(t)){const l=t;a=l.geometry&&l.geometry.animations||l.animations}for(let l=0;l<a.length;l++)if(a[l].name===i)return a[l];return null}static CreateClipsFromMorphTargetSequences(t,i,a){const l={},u=/^([\w-]*?)([\d]+)$/;for(let g=0,v=t.length;g<v;g++){const M=t[g],E=M.name.match(u);if(E&&E.length>1){const A=E[1];let o=l[A];o||(l[A]=o=[]),o.push(M)}}const m=[];for(const g in l)m.push(this.CreateFromMorphTargetSequence(g,l[g],i,a));return m}static parseAnimation(t,i){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const a=function(A,o,e,n,r){if(e.length!==0){const s=[],c=[];kd(e,s,c,n),s.length!==0&&r.push(new A(o,s,c))}},l=[],u=t.name||"default",m=t.fps||30,g=t.blendMode;let v=t.length||-1;const M=t.hierarchy||[];for(let A=0;A<M.length;A++){const o=M[A].keys;if(!(!o||o.length===0))if(o[0].morphTargets){const e={};let n;for(n=0;n<o.length;n++)if(o[n].morphTargets)for(let r=0;r<o[n].morphTargets.length;r++)e[o[n].morphTargets[r]]=-1;for(const r in e){const s=[],c=[];for(let h=0;h!==o[n].morphTargets.length;++h){const d=o[n];s.push(d.time),c.push(d.morphTarget===r?1:0)}l.push(new Tl(".morphTargetInfluence["+r+"]",s,c))}v=e.length*m}else{const e=".bones["+i[A].name+"]";a(Ys,e+".position",o,"pos",l),a(gr,e+".quaternion",o,"rot",l),a(Ys,e+".scale",o,"scl",l)}}return l.length===0?null:new this(u,v,l,g)}resetDuration(){const t=this.tracks;let i=0;for(let a=0,l=t.length;a!==l;++a){const u=this.tracks[a];i=Math.max(i,u.times[u.times.length-1])}return this.duration=i,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let i=0;i<this.tracks.length;i++)t=t&&this.tracks[i].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let i=0;i<this.tracks.length;i++)t.push(this.tracks[i].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Rl(f){switch(f.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tl;case"vector":case"vector2":case"vector3":case"vector4":return Ys;case"color":return Hd;case"quaternion":return gr;case"bool":case"boolean":return mr;case"string":return _r}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+f)}function iu(f){if(f.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Rl(f.type);if(f.times===void 0){const i=[],a=[];kd(f.keys,i,a,"value"),f.times=i,f.values=a}return t.parse!==void 0?t.parse(f):new t(f.name,f.times,f.values,f.interpolation)}const xr={enabled:!1,files:{},add:function(f,t){this.enabled!==!1&&(this.files[f]=t)},get:function(f){if(this.enabled!==!1)return this.files[f]},remove:function(f){delete this.files[f]},clear:function(){this.files={}}};class jo{constructor(t,i,a){const l=this;let u=!1,m=0,g=0,v;const M=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=a,this.itemStart=function(E){g++,u===!1&&l.onStart!==void 0&&l.onStart(E,m,g),u=!0},this.itemEnd=function(E){m++,l.onProgress!==void 0&&l.onProgress(E,m,g),m===g&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(E){l.onError!==void 0&&l.onError(E)},this.resolveURL=function(E){return v?v(E):E},this.setURLModifier=function(E){return v=E,this},this.addHandler=function(E,A){return M.push(E,A),this},this.removeHandler=function(E){const A=M.indexOf(E);return A!==-1&&M.splice(A,2),this},this.getHandler=function(E){for(let A=0,o=M.length;A<o;A+=2){const e=M[A],n=M[A+1];if(e.global&&(e.lastIndex=0),e.test(E))return n}return null}}}const Cl=new jo;class ii{constructor(t){this.manager=t!==void 0?t:Cl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const a=this;return new Promise(function(l,u){a.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const yr={};class Hp extends Error{constructor(t,i){super(t),this.response=i}}class vr extends ii{constructor(t){super(t)}load(t,i,a,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=xr.get(t);if(u!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(u),this.manager.itemEnd(t)},0),u;if(yr[t]!==void 0){yr[t].push({onLoad:i,onProgress:a,onError:l});return}yr[t]=[],yr[t].push({onLoad:i,onProgress:a,onError:l});const m=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),g=this.mimeType,v=this.responseType;fetch(m).then(M=>{if(M.status===200||M.status===0){if(M.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||M.body===void 0||M.body.getReader===void 0)return M;const E=yr[t],A=M.body.getReader(),o=M.headers.get("Content-Length"),e=o?parseInt(o):0,n=e!==0;let r=0;const s=new ReadableStream({start(c){h();function h(){A.read().then(({done:d,value:p})=>{if(d)c.close();else{r+=p.byteLength;const _=new ProgressEvent("progress",{lengthComputable:n,loaded:r,total:e});for(let y=0,S=E.length;y<S;y++){const x=E[y];x.onProgress&&x.onProgress(_)}c.enqueue(p),h()}})}}});return new Response(s)}else throw new Hp(`fetch for "${M.url}" responded with ${M.status}: ${M.statusText}`,M)}).then(M=>{switch(v){case"arraybuffer":return M.arrayBuffer();case"blob":return M.blob();case"document":return M.text().then(E=>new DOMParser().parseFromString(E,g));case"json":return M.json();default:if(g===void 0)return M.text();{const A=/charset="?([^;"\s]*)"?/i.exec(g),o=A&&A[1]?A[1].toLowerCase():void 0,e=new TextDecoder(o);return M.arrayBuffer().then(n=>e.decode(n))}}}).then(M=>{xr.add(t,M);const E=yr[t];delete yr[t];for(let A=0,o=E.length;A<o;A++){const e=E[A];e.onLoad&&e.onLoad(M)}}).catch(M=>{const E=yr[t];if(E===void 0)throw this.manager.itemError(t),M;delete yr[t];for(let A=0,o=E.length;A<o;A++){const e=E[A];e.onError&&e.onError(M)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Wp extends ii{constructor(t){super(t)}load(t,i,a,l){const u=this,m=new vr(this.manager);m.setPath(this.path),m.setRequestHeader(this.requestHeader),m.setWithCredentials(this.withCredentials),m.load(t,function(g){try{i(u.parse(JSON.parse(g)))}catch(v){l?l(v):console.error(v),u.manager.itemError(t)}},a,l)}parse(t){const i=[];for(let a=0;a<t.length;a++){const l=Al.parse(t[a]);i.push(l)}return i}}class Wd extends ii{constructor(t){super(t)}load(t,i,a,l){const u=this,m=[],g=new Fs,v=new vr(this.manager);v.setPath(this.path),v.setResponseType("arraybuffer"),v.setRequestHeader(this.requestHeader),v.setWithCredentials(u.withCredentials);let M=0;function E(A){v.load(t[A],function(o){const e=u.parse(o,!0);m[A]={width:e.width,height:e.height,format:e.format,mipmaps:e.mipmaps},M+=1,M===6&&(e.mipmapCount===1&&(g.minFilter=kt),g.image=m,g.format=e.format,g.needsUpdate=!0,i&&i(g))},a,l)}if(Array.isArray(t))for(let A=0,o=t.length;A<o;++A)E(A);else v.load(t,function(A){const o=u.parse(A,!0);if(o.isCubemap){const e=o.mipmaps.length/o.mipmapCount;for(let n=0;n<e;n++){m[n]={mipmaps:[]};for(let r=0;r<o.mipmapCount;r++)m[n].mipmaps.push(o.mipmaps[n*o.mipmapCount+r]),m[n].format=o.format,m[n].width=o.width,m[n].height=o.height}g.image=m}else g.image.width=o.width,g.image.height=o.height,g.mipmaps=o.mipmaps;o.mipmapCount===1&&(g.minFilter=kt),g.format=o.format,g.needsUpdate=!0,i&&i(g)},a,l);return g}}class ec extends ii{constructor(t){super(t)}load(t,i,a,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,m=xr.get(t);if(m!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(m),u.manager.itemEnd(t)},0),m;const g=zc("img");function v(){E(),xr.add(t,this),i&&i(this),u.manager.itemEnd(t)}function M(A){E(),l&&l(A),u.manager.itemError(t),u.manager.itemEnd(t)}function E(){g.removeEventListener("load",v,!1),g.removeEventListener("error",M,!1)}return g.addEventListener("load",v,!1),g.addEventListener("error",M,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(g.crossOrigin=this.crossOrigin),u.manager.itemStart(t),g.src=t,g}}class Xp extends ii{constructor(t){super(t)}load(t,i,a,l){const u=new Rs,m=new ec(this.manager);m.setCrossOrigin(this.crossOrigin),m.setPath(this.path);let g=0;function v(M){m.load(t[M],function(E){u.images[M]=E,g++,g===6&&(u.needsUpdate=!0,i&&i(u))},void 0,l)}for(let M=0;M<t.length;++M)v(M);return u}}class qp extends ii{constructor(t){super(t)}load(t,i,a,l){const u=this,m=new Pa,g=new vr(this.manager);return g.setResponseType("arraybuffer"),g.setRequestHeader(this.requestHeader),g.setPath(this.path),g.setWithCredentials(u.withCredentials),g.load(t,function(v){const M=u.parse(v);M&&(M.image!==void 0?m.image=M.image:M.data!==void 0&&(m.image.width=M.width,m.image.height=M.height,m.image.data=M.data),m.wrapS=M.wrapS!==void 0?M.wrapS:rn,m.wrapT=M.wrapT!==void 0?M.wrapT:rn,m.magFilter=M.magFilter!==void 0?M.magFilter:kt,m.minFilter=M.minFilter!==void 0?M.minFilter:kt,m.anisotropy=M.anisotropy!==void 0?M.anisotropy:1,M.encoding!==void 0&&(m.encoding=M.encoding),M.flipY!==void 0&&(m.flipY=M.flipY),M.format!==void 0&&(m.format=M.format),M.type!==void 0&&(m.type=M.type),M.mipmaps!==void 0&&(m.mipmaps=M.mipmaps,m.minFilter=Lr),M.mipmapCount===1&&(m.minFilter=kt),M.generateMipmaps!==void 0&&(m.generateMipmaps=M.generateMipmaps),m.needsUpdate=!0,i&&i(m,M))},a,l),m}}class Yp extends ii{constructor(t){super(t)}load(t,i,a,l){const u=new qt,m=new ec(this.manager);return m.setCrossOrigin(this.crossOrigin),m.setPath(this.path),m.load(t,function(g){u.image=g,u.needsUpdate=!0,i!==void 0&&i(u)},a,l),u}}class Qr extends At{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}class Xd extends Qr{constructor(t,i,a){super(t,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DefaultUp),this.updateMatrix(),this.groundColor=new ue(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const ru=new ot,_i=new Z,Zs=new Z;class Ll{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ba,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,a=this.matrix;_i.setFromMatrixPosition(t.matrixWorld),i.position.copy(_i),Zs.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Zs),i.updateMatrixWorld(),ru.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ru),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(ru)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Zp extends Ll{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const i=this.camera,a=Fc*2*t.angle*this.focus,l=this.mapSize.width/this.mapSize.height,u=t.distance||i.far;(a!==i.fov||l!==i.aspect||u!==i.far)&&(i.fov=a,i.aspect=l,i.far=u,i.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class su extends Qr{constructor(t,i,a=0,l=Math.PI/3,u=0,m=1){super(t,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DefaultUp),this.updateMatrix(),this.target=new At,this.distance=a,this.angle=l,this.penumbra=u,this.decay=m,this.map=null,this.shadow=new Zp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const au=new ot,Pl=new Z,qd=new Z;class Q0 extends Ll{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new Z(1,0,0),new Z(-1,0,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,1,0),new Z(0,-1,0)],this._cubeUps=[new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,1,0),new Z(0,0,1),new Z(0,0,-1)]}updateMatrices(t,i=0){const a=this.camera,l=this.matrix,u=t.distance||a.far;u!==a.far&&(a.far=u,a.updateProjectionMatrix()),Pl.setFromMatrixPosition(t.matrixWorld),a.position.copy(Pl),qd.copy(a.position),qd.add(this._cubeDirections[i]),a.up.copy(this._cubeUps[i]),a.lookAt(qd),a.updateMatrixWorld(),l.makeTranslation(-Pl.x,-Pl.y,-Pl.z),au.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(au)}}class tc extends Qr{constructor(t,i,a=0,l=1){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=a,this.decay=l,this.shadow=new Q0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Jp extends Ll{constructor(){super(new ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ou extends Qr{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DefaultUp),this.updateMatrix(),this.target=new At,this.shadow=new Jp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yd extends Qr{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pi extends Qr{constructor(t,i,a=10,l=10){super(t,i),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=a,this.height=l}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const i=super.toJSON(t);return i.object.width=this.width,i.object.height=this.height,i}}class Js{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new Z)}set(t){for(let i=0;i<9;i++)this.coefficients[i].copy(t[i]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,i){const a=t.x,l=t.y,u=t.z,m=this.coefficients;return i.copy(m[0]).multiplyScalar(.282095),i.addScaledVector(m[1],.488603*l),i.addScaledVector(m[2],.488603*u),i.addScaledVector(m[3],.488603*a),i.addScaledVector(m[4],1.092548*(a*l)),i.addScaledVector(m[5],1.092548*(l*u)),i.addScaledVector(m[6],.315392*(3*u*u-1)),i.addScaledVector(m[7],1.092548*(a*u)),i.addScaledVector(m[8],.546274*(a*a-l*l)),i}getIrradianceAt(t,i){const a=t.x,l=t.y,u=t.z,m=this.coefficients;return i.copy(m[0]).multiplyScalar(.886227),i.addScaledVector(m[1],2*.511664*l),i.addScaledVector(m[2],2*.511664*u),i.addScaledVector(m[3],2*.511664*a),i.addScaledVector(m[4],2*.429043*a*l),i.addScaledVector(m[5],2*.429043*l*u),i.addScaledVector(m[6],.743125*u*u-.247708),i.addScaledVector(m[7],2*.429043*a*u),i.addScaledVector(m[8],.429043*(a*a-l*l)),i}add(t){for(let i=0;i<9;i++)this.coefficients[i].add(t.coefficients[i]);return this}addScaledSH(t,i){for(let a=0;a<9;a++)this.coefficients[a].addScaledVector(t.coefficients[a],i);return this}scale(t){for(let i=0;i<9;i++)this.coefficients[i].multiplyScalar(t);return this}lerp(t,i){for(let a=0;a<9;a++)this.coefficients[a].lerp(t.coefficients[a],i);return this}equals(t){for(let i=0;i<9;i++)if(!this.coefficients[i].equals(t.coefficients[i]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,i=0){const a=this.coefficients;for(let l=0;l<9;l++)a[l].fromArray(t,i+l*3);return this}toArray(t=[],i=0){const a=this.coefficients;for(let l=0;l<9;l++)a[l].toArray(t,i+l*3);return t}static getBasisAt(t,i){const a=t.x,l=t.y,u=t.z;i[0]=.282095,i[1]=.488603*l,i[2]=.488603*u,i[3]=.488603*a,i[4]=1.092548*a*l,i[5]=1.092548*l*u,i[6]=.315392*(3*u*u-1),i[7]=1.092548*a*u,i[8]=.546274*(a*a-l*l)}}class nc extends Qr{constructor(t=new Js,i=1){super(void 0,i),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const i=super.toJSON(t);return i.object.sh=this.sh.toArray(),i}}class $s extends ii{constructor(t){super(t),this.textures={}}load(t,i,a,l){const u=this,m=new vr(u.manager);m.setPath(u.path),m.setRequestHeader(u.requestHeader),m.setWithCredentials(u.withCredentials),m.load(t,function(g){try{i(u.parse(JSON.parse(g)))}catch(v){l?l(v):console.error(v),u.manager.itemError(t)}},a,l)}parse(t){const i=this.textures;function a(u){return i[u]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",u),i[u]}const l=$s.createMaterialFromType(t.type);if(t.uuid!==void 0&&(l.uuid=t.uuid),t.name!==void 0&&(l.name=t.name),t.color!==void 0&&l.color!==void 0&&l.color.setHex(t.color),t.roughness!==void 0&&(l.roughness=t.roughness),t.metalness!==void 0&&(l.metalness=t.metalness),t.sheen!==void 0&&(l.sheen=t.sheen),t.sheenColor!==void 0&&(l.sheenColor=new ue().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(l.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&l.emissive!==void 0&&l.emissive.setHex(t.emissive),t.specular!==void 0&&l.specular!==void 0&&l.specular.setHex(t.specular),t.specularIntensity!==void 0&&(l.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&l.specularColor!==void 0&&l.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(l.shininess=t.shininess),t.clearcoat!==void 0&&(l.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(l.clearcoatRoughness=t.clearcoatRoughness),t.iridescence!==void 0&&(l.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(l.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(l.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(l.transmission=t.transmission),t.thickness!==void 0&&(l.thickness=t.thickness),t.attenuationDistance!==void 0&&(l.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&l.attenuationColor!==void 0&&l.attenuationColor.setHex(t.attenuationColor),t.fog!==void 0&&(l.fog=t.fog),t.flatShading!==void 0&&(l.flatShading=t.flatShading),t.blending!==void 0&&(l.blending=t.blending),t.combine!==void 0&&(l.combine=t.combine),t.side!==void 0&&(l.side=t.side),t.shadowSide!==void 0&&(l.shadowSide=t.shadowSide),t.opacity!==void 0&&(l.opacity=t.opacity),t.transparent!==void 0&&(l.transparent=t.transparent),t.alphaTest!==void 0&&(l.alphaTest=t.alphaTest),t.depthTest!==void 0&&(l.depthTest=t.depthTest),t.depthWrite!==void 0&&(l.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(l.colorWrite=t.colorWrite),t.stencilWrite!==void 0&&(l.stencilWrite=t.stencilWrite),t.stencilWriteMask!==void 0&&(l.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(l.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(l.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(l.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(l.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(l.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(l.stencilZPass=t.stencilZPass),t.wireframe!==void 0&&(l.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(l.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(l.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(l.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(l.rotation=t.rotation),t.linewidth!==1&&(l.linewidth=t.linewidth),t.dashSize!==void 0&&(l.dashSize=t.dashSize),t.gapSize!==void 0&&(l.gapSize=t.gapSize),t.scale!==void 0&&(l.scale=t.scale),t.polygonOffset!==void 0&&(l.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(l.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(l.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(l.dithering=t.dithering),t.alphaToCoverage!==void 0&&(l.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(l.premultipliedAlpha=t.premultipliedAlpha),t.visible!==void 0&&(l.visible=t.visible),t.toneMapped!==void 0&&(l.toneMapped=t.toneMapped),t.userData!==void 0&&(l.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?l.vertexColors=t.vertexColors>0:l.vertexColors=t.vertexColors),t.uniforms!==void 0)for(const u in t.uniforms){const m=t.uniforms[u];switch(l.uniforms[u]={},m.type){case"t":l.uniforms[u].value=a(m.value);break;case"c":l.uniforms[u].value=new ue().setHex(m.value);break;case"v2":l.uniforms[u].value=new Ue().fromArray(m.value);break;case"v3":l.uniforms[u].value=new Z().fromArray(m.value);break;case"v4":l.uniforms[u].value=new Nt().fromArray(m.value);break;case"m3":l.uniforms[u].value=new Kn().fromArray(m.value);break;case"m4":l.uniforms[u].value=new ot().fromArray(m.value);break;default:l.uniforms[u].value=m.value}}if(t.defines!==void 0&&(l.defines=t.defines),t.vertexShader!==void 0&&(l.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(l.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(l.glslVersion=t.glslVersion),t.extensions!==void 0)for(const u in t.extensions)l.extensions[u]=t.extensions[u];if(t.size!==void 0&&(l.size=t.size),t.sizeAttenuation!==void 0&&(l.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(l.map=a(t.map)),t.matcap!==void 0&&(l.matcap=a(t.matcap)),t.alphaMap!==void 0&&(l.alphaMap=a(t.alphaMap)),t.bumpMap!==void 0&&(l.bumpMap=a(t.bumpMap)),t.bumpScale!==void 0&&(l.bumpScale=t.bumpScale),t.normalMap!==void 0&&(l.normalMap=a(t.normalMap)),t.normalMapType!==void 0&&(l.normalMapType=t.normalMapType),t.normalScale!==void 0){let u=t.normalScale;Array.isArray(u)===!1&&(u=[u,u]),l.normalScale=new Ue().fromArray(u)}return t.displacementMap!==void 0&&(l.displacementMap=a(t.displacementMap)),t.displacementScale!==void 0&&(l.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(l.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(l.roughnessMap=a(t.roughnessMap)),t.metalnessMap!==void 0&&(l.metalnessMap=a(t.metalnessMap)),t.emissiveMap!==void 0&&(l.emissiveMap=a(t.emissiveMap)),t.emissiveIntensity!==void 0&&(l.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(l.specularMap=a(t.specularMap)),t.specularIntensityMap!==void 0&&(l.specularIntensityMap=a(t.specularIntensityMap)),t.specularColorMap!==void 0&&(l.specularColorMap=a(t.specularColorMap)),t.envMap!==void 0&&(l.envMap=a(t.envMap)),t.envMapIntensity!==void 0&&(l.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(l.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(l.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(l.lightMap=a(t.lightMap)),t.lightMapIntensity!==void 0&&(l.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(l.aoMap=a(t.aoMap)),t.aoMapIntensity!==void 0&&(l.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(l.gradientMap=a(t.gradientMap)),t.clearcoatMap!==void 0&&(l.clearcoatMap=a(t.clearcoatMap)),t.clearcoatRoughnessMap!==void 0&&(l.clearcoatRoughnessMap=a(t.clearcoatRoughnessMap)),t.clearcoatNormalMap!==void 0&&(l.clearcoatNormalMap=a(t.clearcoatNormalMap)),t.clearcoatNormalScale!==void 0&&(l.clearcoatNormalScale=new Ue().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(l.iridescenceMap=a(t.iridescenceMap)),t.iridescenceThicknessMap!==void 0&&(l.iridescenceThicknessMap=a(t.iridescenceThicknessMap)),t.transmissionMap!==void 0&&(l.transmissionMap=a(t.transmissionMap)),t.thicknessMap!==void 0&&(l.thicknessMap=a(t.thicknessMap)),t.sheenColorMap!==void 0&&(l.sheenColorMap=a(t.sheenColorMap)),t.sheenRoughnessMap!==void 0&&(l.sheenRoughnessMap=a(t.sheenRoughnessMap)),l}setTextures(t){return this.textures=t,this}static createMaterialFromType(t){const i={ShadowMaterial:Up,SpriteMaterial:bd,RawShaderMaterial:Np,ShaderMaterial:jt,PointsMaterial:ko,MeshPhysicalMaterial:Fp,MeshStandardMaterial:Gd,MeshPhongMaterial:nu,MeshToonMaterial:Op,MeshNormalMaterial:za,MeshLambertMaterial:Bp,MeshDepthMaterial:Ra,MeshDistanceMaterial:Ih,MeshBasicMaterial:Hr,MeshMatcapMaterial:Ht,LineDashedMaterial:bl,LineBasicMaterial:fn,Material:Nn};return new i[t]}}class cu{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let i="";for(let a=0,l=t.length;a<l;a++)i+=String.fromCharCode(t[a]);try{return decodeURIComponent(escape(i))}catch(a){return i}}static extractUrlBase(t){const i=t.lastIndexOf("/");return i===-1?"./":t.slice(0,i+1)}static resolveURL(t,i){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(i)&&/^\//.test(t)&&(i=i.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:i+t)}}class Va extends ct{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Ks extends ii{constructor(t){super(t)}load(t,i,a,l){const u=this,m=new vr(u.manager);m.setPath(u.path),m.setRequestHeader(u.requestHeader),m.setWithCredentials(u.withCredentials),m.load(t,function(g){try{i(u.parse(JSON.parse(g)))}catch(v){l?l(v):console.error(v),u.manager.itemError(t)}},a,l)}parse(t){const i={},a={};function l(e,n){if(i[n]!==void 0)return i[n];const s=e.interleavedBuffers[n],c=u(e,s.buffer),h=oo(s.type,c),d=new Nh(h,s.stride);return d.uuid=s.uuid,i[n]=d,d}function u(e,n){if(a[n]!==void 0)return a[n];const s=e.arrayBuffers[n],c=new Uint32Array(s).buffer;return a[n]=c,c}const m=t.isInstancedBufferGeometry?new Va:new ct,g=t.data.index;if(g!==void 0){const e=oo(g.type,g.array);m.setIndex(new Bt(e,1))}const v=t.data.attributes;for(const e in v){const n=v[e];let r;if(n.isInterleavedBufferAttribute){const s=l(t.data,n.data);r=new Ds(s,n.itemSize,n.offset,n.normalized)}else{const s=oo(n.type,n.array),c=n.isInstancedBufferAttribute?Yr:Bt;r=new c(s,n.itemSize,n.normalized)}n.name!==void 0&&(r.name=n.name),n.usage!==void 0&&r.setUsage(n.usage),n.updateRange!==void 0&&(r.updateRange.offset=n.updateRange.offset,r.updateRange.count=n.updateRange.count),m.setAttribute(e,r)}const M=t.data.morphAttributes;if(M)for(const e in M){const n=M[e],r=[];for(let s=0,c=n.length;s<c;s++){const h=n[s];let d;if(h.isInterleavedBufferAttribute){const p=l(t.data,h.data);d=new Ds(p,h.itemSize,h.offset,h.normalized)}else{const p=oo(h.type,h.array);d=new Bt(p,h.itemSize,h.normalized)}h.name!==void 0&&(d.name=h.name),r.push(d)}m.morphAttributes[e]=r}t.data.morphTargetsRelative&&(m.morphTargetsRelative=!0);const A=t.data.groups||t.data.drawcalls||t.data.offsets;if(A!==void 0)for(let e=0,n=A.length;e!==n;++e){const r=A[e];m.addGroup(r.start,r.count,r.materialIndex)}const o=t.data.boundingSphere;if(o!==void 0){const e=new Z;o.center!==void 0&&e.fromArray(o.center),m.boundingSphere=new ys(e,o.radius)}return t.name&&(m.name=t.name),t.userData&&(m.userData=t.userData),m}}class Il extends ii{constructor(t){super(t)}load(t,i,a,l){const u=this,m=this.path===""?cu.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||m;const g=new vr(this.manager);g.setPath(this.path),g.setRequestHeader(this.requestHeader),g.setWithCredentials(this.withCredentials),g.load(t,function(v){let M=null;try{M=JSON.parse(v)}catch(A){l!==void 0&&l(A),console.error("THREE:ObjectLoader: Can't parse "+t+".",A.message);return}const E=M.metadata;if(E===void 0||E.type===void 0||E.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+t);return}u.parse(M,i)},a,l)}loadAsync(t,i){return rs(this,null,function*(){const a=this,l=this.path===""?cu.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||l;const u=new vr(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials);const m=yield u.loadAsync(t,i),g=JSON.parse(m),v=g.metadata;if(v===void 0||v.type===void 0||v.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return yield a.parseAsync(g)})}parse(t,i){const a=this.parseAnimations(t.animations),l=this.parseShapes(t.shapes),u=this.parseGeometries(t.geometries,l),m=this.parseImages(t.images,function(){i!==void 0&&i(M)}),g=this.parseTextures(t.textures,m),v=this.parseMaterials(t.materials,g),M=this.parseObject(t.object,u,v,g,a),E=this.parseSkeletons(t.skeletons,M);if(this.bindSkeletons(M,E),i!==void 0){let A=!1;for(const o in m)if(m[o].data instanceof HTMLImageElement){A=!0;break}A===!1&&i(M)}return M}parseAsync(t){return rs(this,null,function*(){const i=this.parseAnimations(t.animations),a=this.parseShapes(t.shapes),l=this.parseGeometries(t.geometries,a),u=yield this.parseImagesAsync(t.images),m=this.parseTextures(t.textures,u),g=this.parseMaterials(t.materials,m),v=this.parseObject(t.object,l,g,m,i),M=this.parseSkeletons(t.skeletons,v);return this.bindSkeletons(v,M),v})}parseShapes(t){const i={};if(t!==void 0)for(let a=0,l=t.length;a<l;a++){const u=new ur().fromJSON(t[a]);i[u.uuid]=u}return i}parseSkeletons(t,i){const a={},l={};if(i.traverse(function(u){u.isBone&&(l[u.uuid]=u)}),t!==void 0)for(let u=0,m=t.length;u<m;u++){const g=new il().fromJSON(t[u],l);a[g.uuid]=g}return a}parseGeometries(t,i){const a={};if(t!==void 0){const l=new Ks;for(let u=0,m=t.length;u<m;u++){let g;const v=t[u];switch(v.type){case"BufferGeometry":case"InstancedBufferGeometry":g=l.parse(v);break;default:v.type in Dp?g=Dp[v.type].fromJSON(v,i):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${v.type}"`)}g.uuid=v.uuid,v.name!==void 0&&(g.name=v.name),g.isBufferGeometry===!0&&v.userData!==void 0&&(g.userData=v.userData),a[v.uuid]=g}}return a}parseMaterials(t,i){const a={},l={};if(t!==void 0){const u=new $s;u.setTextures(i);for(let m=0,g=t.length;m<g;m++){const v=t[m];a[v.uuid]===void 0&&(a[v.uuid]=u.parse(v)),l[v.uuid]=a[v.uuid]}}return l}parseAnimations(t){const i={};if(t!==void 0)for(let a=0;a<t.length;a++){const l=t[a],u=Al.parse(l);i[u.uuid]=u}return i}parseImages(t,i){const a=this,l={};let u;function m(v){return a.manager.itemStart(v),u.load(v,function(){a.manager.itemEnd(v)},void 0,function(){a.manager.itemError(v),a.manager.itemEnd(v)})}function g(v){if(typeof v=="string"){const M=v,E=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(M)?M:a.resourcePath+M;return m(E)}else return v.data?{data:oo(v.type,v.data),width:v.width,height:v.height}:null}if(t!==void 0&&t.length>0){const v=new jo(i);u=new ec(v),u.setCrossOrigin(this.crossOrigin);for(let M=0,E=t.length;M<E;M++){const A=t[M],o=A.url;if(Array.isArray(o)){const e=[];for(let n=0,r=o.length;n<r;n++){const s=o[n],c=g(s);c!==null&&(c instanceof HTMLImageElement?e.push(c):e.push(new Pa(c.data,c.width,c.height)))}l[A.uuid]=new gs(e)}else{const e=g(A.url);l[A.uuid]=new gs(e)}}}return l}parseImagesAsync(t){return rs(this,null,function*(){const i=this,a={};let l;function u(m){return rs(this,null,function*(){if(typeof m=="string"){const g=m,v=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(g)?g:i.resourcePath+g;return yield l.loadAsync(v)}else return m.data?{data:oo(m.type,m.data),width:m.width,height:m.height}:null})}if(t!==void 0&&t.length>0){l=new ec(this.manager),l.setCrossOrigin(this.crossOrigin);for(let m=0,g=t.length;m<g;m++){const v=t[m],M=v.url;if(Array.isArray(M)){const E=[];for(let A=0,o=M.length;A<o;A++){const e=M[A],n=yield u(e);n!==null&&(n instanceof HTMLImageElement?E.push(n):E.push(new Pa(n.data,n.width,n.height)))}a[v.uuid]=new gs(E)}else{const E=yield u(v.url);a[v.uuid]=new gs(E)}}}return a})}parseTextures(t,i){function a(u,m){return typeof u=="number"?u:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",u),m[u])}const l={};if(t!==void 0)for(let u=0,m=t.length;u<m;u++){const g=t[u];g.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid),i[g.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",g.image);const v=i[g.image],M=v.data;let E;Array.isArray(M)?(E=new Rs,M.length===6&&(E.needsUpdate=!0)):(M&&M.data?E=new Pa:E=new qt,M&&(E.needsUpdate=!0)),E.source=v,E.uuid=g.uuid,g.name!==void 0&&(E.name=g.name),g.mapping!==void 0&&(E.mapping=a(g.mapping,Dl)),g.offset!==void 0&&E.offset.fromArray(g.offset),g.repeat!==void 0&&E.repeat.fromArray(g.repeat),g.center!==void 0&&E.center.fromArray(g.center),g.rotation!==void 0&&(E.rotation=g.rotation),g.wrap!==void 0&&(E.wrapS=a(g.wrap[0],$p),E.wrapT=a(g.wrap[1],$p)),g.format!==void 0&&(E.format=g.format),g.type!==void 0&&(E.type=g.type),g.encoding!==void 0&&(E.encoding=g.encoding),g.minFilter!==void 0&&(E.minFilter=a(g.minFilter,Kp)),g.magFilter!==void 0&&(E.magFilter=a(g.magFilter,Kp)),g.anisotropy!==void 0&&(E.anisotropy=g.anisotropy),g.flipY!==void 0&&(E.flipY=g.flipY),g.premultiplyAlpha!==void 0&&(E.premultiplyAlpha=g.premultiplyAlpha),g.unpackAlignment!==void 0&&(E.unpackAlignment=g.unpackAlignment),g.userData!==void 0&&(E.userData=g.userData),l[g.uuid]=E}return l}parseObject(t,i,a,l,u){let m;function g(o){return i[o]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",o),i[o]}function v(o){if(o!==void 0){if(Array.isArray(o)){const e=[];for(let n=0,r=o.length;n<r;n++){const s=o[n];a[s]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",s),e.push(a[s])}return e}return a[o]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",o),a[o]}}function M(o){return l[o]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",o),l[o]}let E,A;switch(t.type){case"Scene":m=new fp,t.background!==void 0&&(Number.isInteger(t.background)?m.background=new ue(t.background):m.background=M(t.background)),t.environment!==void 0&&(m.environment=M(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?m.fog=new Uh(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(m.fog=new Dh(t.fog.color,t.fog.density))),t.backgroundBlurriness!==void 0&&(m.backgroundBlurriness=t.backgroundBlurriness);break;case"PerspectiveCamera":m=new Rt(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(m.focus=t.focus),t.zoom!==void 0&&(m.zoom=t.zoom),t.filmGauge!==void 0&&(m.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(m.filmOffset=t.filmOffset),t.view!==void 0&&(m.view=Object.assign({},t.view));break;case"OrthographicCamera":m=new ud(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(m.zoom=t.zoom),t.view!==void 0&&(m.view=Object.assign({},t.view));break;case"AmbientLight":m=new Yd(t.color,t.intensity);break;case"DirectionalLight":m=new ou(t.color,t.intensity);break;case"PointLight":m=new tc(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":m=new Pi(t.color,t.intensity,t.width,t.height);break;case"SpotLight":m=new su(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay);break;case"HemisphereLight":m=new Xd(t.color,t.groundColor,t.intensity);break;case"LightProbe":m=new nc().fromJSON(t);break;case"SkinnedMesh":E=g(t.geometry),A=v(t.material),m=new Mp(E,A),t.bindMode!==void 0&&(m.bindMode=t.bindMode),t.bindMatrix!==void 0&&m.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(m.skeleton=t.skeleton);break;case"Mesh":E=g(t.geometry),A=v(t.material),m=new gn(E,A);break;case"InstancedMesh":E=g(t.geometry),A=v(t.material);const o=t.count,e=t.instanceMatrix,n=t.instanceColor;m=new Ia(E,A,o),m.instanceMatrix=new Yr(new Float32Array(e.array),16),n!==void 0&&(m.instanceColor=new Yr(new Float32Array(n.array),n.itemSize));break;case"LOD":m=new xp;break;case"Line":m=new Zi(g(t.geometry),v(t.material));break;case"LineLoop":m=new Rd(g(t.geometry),v(t.material));break;case"LineSegments":m=new Ji(g(t.geometry),v(t.material));break;case"PointCloud":case"Points":m=new Cd(g(t.geometry),v(t.material));break;case"Sprite":m=new _p(v(t.material));break;case"Group":m=new Lo;break;case"Bone":m=new Bh;break;default:m=new At}if(m.uuid=t.uuid,t.name!==void 0&&(m.name=t.name),t.matrix!==void 0?(m.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(m.matrixAutoUpdate=t.matrixAutoUpdate),m.matrixAutoUpdate&&m.matrix.decompose(m.position,m.quaternion,m.scale)):(t.position!==void 0&&m.position.fromArray(t.position),t.rotation!==void 0&&m.rotation.fromArray(t.rotation),t.quaternion!==void 0&&m.quaternion.fromArray(t.quaternion),t.scale!==void 0&&m.scale.fromArray(t.scale)),t.castShadow!==void 0&&(m.castShadow=t.castShadow),t.receiveShadow!==void 0&&(m.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.bias!==void 0&&(m.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(m.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(m.shadow.radius=t.shadow.radius),t.shadow.mapSize!==void 0&&m.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(m.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(m.visible=t.visible),t.frustumCulled!==void 0&&(m.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(m.renderOrder=t.renderOrder),t.userData!==void 0&&(m.userData=t.userData),t.layers!==void 0&&(m.layers.mask=t.layers),t.children!==void 0){const o=t.children;for(let e=0;e<o.length;e++)m.add(this.parseObject(o[e],i,a,l,u))}if(t.animations!==void 0){const o=t.animations;for(let e=0;e<o.length;e++){const n=o[e];m.animations.push(u[n])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(m.autoUpdate=t.autoUpdate);const o=t.levels;for(let e=0;e<o.length;e++){const n=o[e],r=m.getObjectByProperty("uuid",n.object);r!==void 0&&m.addLevel(r,n.distance)}}return m}bindSkeletons(t,i){Object.keys(i).length!==0&&t.traverse(function(a){if(a.isSkinnedMesh===!0&&a.skeleton!==void 0){const l=i[a.skeleton];l===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",a.skeleton):a.bind(l,a.bindMatrix)}})}}const Dl={UVMapping:hc,CubeReflectionMapping:Ar,CubeRefractionMapping:Ui,EquirectangularReflectionMapping:ai,EquirectangularRefractionMapping:yi,CubeUVReflectionMapping:tr},$p={RepeatWrapping:Rr,ClampToEdgeWrapping:rn,MirroredRepeatWrapping:Cr},Kp={NearestFilter:wt,NearestMipmapNearestFilter:os,NearestMipmapLinearFilter:na,LinearFilter:kt,LinearMipmapNearestFilter:ku,LinearMipmapLinearFilter:Lr};class Ha extends ii{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,i,a,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=this,m=xr.get(t);if(m!==void 0)return u.manager.itemStart(t),setTimeout(function(){i&&i(m),u.manager.itemEnd(t)},0),m;const g={};g.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",g.headers=this.requestHeader,fetch(t,g).then(function(v){return v.blob()}).then(function(v){return createImageBitmap(v,Object.assign(u.options,{colorSpaceConversion:"none"}))}).then(function(v){xr.add(t,v),i&&i(v),u.manager.itemEnd(t)}).catch(function(v){l&&l(v),u.manager.itemError(t),u.manager.itemEnd(t)}),u.manager.itemStart(t)}}let ic;class lu{static getContext(){return ic===void 0&&(ic=new(window.AudioContext||window.webkitAudioContext)),ic}static setContext(t){ic=t}}class ri extends ii{constructor(t){super(t)}load(t,i,a,l){const u=this,m=new vr(this.manager);m.setResponseType("arraybuffer"),m.setPath(this.path),m.setRequestHeader(this.requestHeader),m.setWithCredentials(this.withCredentials),m.load(t,function(g){try{const v=g.slice(0);lu.getContext().decodeAudioData(v,function(E){i(E)})}catch(v){l?l(v):console.error(v),u.manager.itemError(t)}},a,l)}}class jr extends nc{constructor(t,i,a=1){super(void 0,a),this.isHemisphereLightProbe=!0;const l=new ue().set(t),u=new ue().set(i),m=new Z(l.r,l.g,l.b),g=new Z(u.r,u.g,u.b),v=Math.sqrt(Math.PI),M=v*Math.sqrt(.75);this.sh.coefficients[0].copy(m).add(g).multiplyScalar(v),this.sh.coefficients[1].copy(m).sub(g).multiplyScalar(M)}}class j0 extends nc{constructor(t,i=1){super(void 0,i),this.isAmbientLightProbe=!0;const a=new ue().set(t);this.sh.coefficients[0].set(a.r,a.g,a.b).multiplyScalar(2*Math.sqrt(Math.PI))}}const Mr=new ot,Qp=new ot,Wa=new ot;class Ul{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Rt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Rt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const i=this._cache;if(i.focus!==t.focus||i.fov!==t.fov||i.aspect!==t.aspect*this.aspect||i.near!==t.near||i.far!==t.far||i.zoom!==t.zoom||i.eyeSep!==this.eyeSep){i.focus=t.focus,i.fov=t.fov,i.aspect=t.aspect*this.aspect,i.near=t.near,i.far=t.far,i.zoom=t.zoom,i.eyeSep=this.eyeSep,Wa.copy(t.projectionMatrix);const l=i.eyeSep/2,u=l*i.near/i.focus,m=i.near*Math.tan(ua*i.fov*.5)/i.zoom;let g,v;Qp.elements[12]=-l,Mr.elements[12]=l,g=-m*i.aspect+u,v=m*i.aspect+u,Wa.elements[0]=2*i.near/(v-g),Wa.elements[8]=(v+g)/(v-g),this.cameraL.projectionMatrix.copy(Wa),g=-m*i.aspect-u,v=m*i.aspect-u,Wa.elements[0]=2*i.near/(v-g),Wa.elements[8]=(v+g)/(v-g),this.cameraR.projectionMatrix.copy(Wa)}this.cameraL.matrixWorld.copy(t.matrixWorld).multiply(Qp),this.cameraR.matrixWorld.copy(t.matrixWorld).multiply(Mr)}}class jp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=em(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=em();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function em(){return(typeof performance=="undefined"?Date:performance).now()}const Xa=new Z,es=new jn,tm=new Z,ts=new Z;class nm extends At{constructor(){super(),this.type="AudioListener",this.context=lu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new jp}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const i=this.context.listener,a=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Xa,es,tm),ts.set(0,0,-1).applyQuaternion(es),i.positionX){const l=this.context.currentTime+this.timeDelta;i.positionX.linearRampToValueAtTime(Xa.x,l),i.positionY.linearRampToValueAtTime(Xa.y,l),i.positionZ.linearRampToValueAtTime(Xa.z,l),i.forwardX.linearRampToValueAtTime(ts.x,l),i.forwardY.linearRampToValueAtTime(ts.y,l),i.forwardZ.linearRampToValueAtTime(ts.z,l),i.upX.linearRampToValueAtTime(a.x,l),i.upY.linearRampToValueAtTime(a.y,l),i.upZ.linearRampToValueAtTime(a.z,l)}else i.setPosition(Xa.x,Xa.y,Xa.z),i.setOrientation(ts.x,ts.y,ts.z,a.x,a.y,a.z)}}class Zd extends At{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const i=this.context.createBufferSource();return i.buffer=this.buffer,i.loop=this.loop,i.loopStart=this.loopStart,i.loopEnd=this.loopEnd,i.onended=this.onEnded.bind(this),i.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=i,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,i=this.filters.length;t<i;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,i=this.filters.length;t<i;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}const ns=new Z,im=new jn,rm=new Z,Qs=new Z;class Nl extends Zd{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,i,a){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=i,this.panner.coneOuterGain=a,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ns,im,rm),Qs.set(0,0,1).applyQuaternion(im);const i=this.panner;if(i.positionX){const a=this.context.currentTime+this.listener.timeDelta;i.positionX.linearRampToValueAtTime(ns.x,a),i.positionY.linearRampToValueAtTime(ns.y,a),i.positionZ.linearRampToValueAtTime(ns.z,a),i.orientationX.linearRampToValueAtTime(Qs.x,a),i.orientationY.linearRampToValueAtTime(Qs.y,a),i.orientationZ.linearRampToValueAtTime(Qs.z,a)}else i.setPosition(ns.x,ns.y,ns.z),i.setOrientation(Qs.x,Qs.y,Qs.z)}}class Jd{constructor(t,i=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=i,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const i=this.getFrequencyData();for(let a=0;a<i.length;a++)t+=i[a];return t/i.length}}class sm{constructor(t,i,a){this.binding=t,this.valueSize=a;let l,u,m;switch(i){case"quaternion":l=this._slerp,u=this._slerpAdditive,m=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(a*6),this._workIndex=5;break;case"string":case"bool":l=this._select,u=this._select,m=this._setAdditiveIdentityOther,this.buffer=new Array(a*5);break;default:l=this._lerp,u=this._lerpAdditive,m=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(a*5)}this._mixBufferRegion=l,this._mixBufferRegionAdditive=u,this._setIdentity=m,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,i){const a=this.buffer,l=this.valueSize,u=t*l+l;let m=this.cumulativeWeight;if(m===0){for(let g=0;g!==l;++g)a[u+g]=a[g];m=i}else{m+=i;const g=i/m;this._mixBufferRegion(a,u,0,g,l)}this.cumulativeWeight=m}accumulateAdditive(t){const i=this.buffer,a=this.valueSize,l=a*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(i,l,0,t,a),this.cumulativeWeightAdditive+=t}apply(t){const i=this.valueSize,a=this.buffer,l=t*i+i,u=this.cumulativeWeight,m=this.cumulativeWeightAdditive,g=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,u<1){const v=i*this._origIndex;this._mixBufferRegion(a,l,v,1-u,i)}m>0&&this._mixBufferRegionAdditive(a,l,this._addIndex*i,1,i);for(let v=i,M=i+i;v!==M;++v)if(a[v]!==a[v+i]){g.setValue(a,l);break}}saveOriginalState(){const t=this.binding,i=this.buffer,a=this.valueSize,l=a*this._origIndex;t.getValue(i,l);for(let u=a,m=l;u!==m;++u)i[u]=i[l+u%a];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,i=t+this.valueSize;for(let a=t;a<i;a++)this.buffer[a]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,i=this._addIndex*this.valueSize;for(let a=0;a<this.valueSize;a++)this.buffer[i+a]=this.buffer[t+a]}_select(t,i,a,l,u){if(l>=.5)for(let m=0;m!==u;++m)t[i+m]=t[a+m]}_slerp(t,i,a,l){jn.slerpFlat(t,i,t,i,t,a,l)}_slerpAdditive(t,i,a,l,u){const m=this._workIndex*u;jn.multiplyQuaternionsFlat(t,m,t,i,t,a),jn.slerpFlat(t,i,t,i,t,m,l)}_lerp(t,i,a,l,u){const m=1-l;for(let g=0;g!==u;++g){const v=i+g;t[v]=t[v]*m+t[a+g]*l}}_lerpAdditive(t,i,a,l,u){for(let m=0;m!==u;++m){const g=i+m;t[g]=t[g]+t[a+m]*l}}}const hu="\\[\\]\\.:\\/",ex=new RegExp("["+hu+"]","g"),uu="[^"+hu+"]",am="[^"+hu.replace("\\.","")+"]",om=/((?:WC+[\/:])*)/.source.replace("WC",uu),cm=/(WCOD+)?/.source.replace("WCOD",am),du=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uu),fu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uu),$d=new RegExp("^"+om+cm+du+fu+"$"),lm=["material","materials","bones","map"];class hm{constructor(t,i,a){const l=a||Lt.parseTrackName(i);this._targetGroup=t,this._bindings=t.subscribe_(i,l)}getValue(t,i){this.bind();const a=this._targetGroup.nCachedObjects_,l=this._bindings[a];l!==void 0&&l.getValue(t,i)}setValue(t,i){const a=this._bindings;for(let l=this._targetGroup.nCachedObjects_,u=a.length;l!==u;++l)a[l].setValue(t,i)}bind(){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=t.length;i!==a;++i)t[i].bind()}unbind(){const t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,a=t.length;i!==a;++i)t[i].unbind()}}class Lt{constructor(t,i,a){this.path=i,this.parsedPath=a||Lt.parseTrackName(i),this.node=Lt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,a){return t&&t.isAnimationObjectGroup?new Lt.Composite(t,i,a):new Lt(t,i,a)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ex,"")}static parseTrackName(t){const i=$d.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const a={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},l=a.nodeName&&a.nodeName.lastIndexOf(".");if(l!==void 0&&l!==-1){const u=a.nodeName.substring(l+1);lm.indexOf(u)!==-1&&(a.nodeName=a.nodeName.substring(0,l),a.objectName=u)}if(a.propertyName===null||a.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return a}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){const a=t.skeleton.getBoneByName(i);if(a!==void 0)return a}if(t.children){const a=function(u){for(let m=0;m<u.length;m++){const g=u[m];if(g.name===i||g.uuid===i)return g;const v=a(g.children);if(v)return v}return null},l=a(t.children);if(l)return l}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){const a=this.resolvedProperty;for(let l=0,u=a.length;l!==u;++l)t[i++]=a[l]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){const a=this.resolvedProperty;for(let l=0,u=a.length;l!==u;++l)a[l]=t[i++]}_setValue_array_setNeedsUpdate(t,i){const a=this.resolvedProperty;for(let l=0,u=a.length;l!==u;++l)a[l]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){const a=this.resolvedProperty;for(let l=0,u=a.length;l!==u;++l)a[l]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node;const i=this.parsedPath,a=i.objectName,l=i.propertyName;let u=i.propertyIndex;if(t||(t=Lt.findNode(this.rootNode,i.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(a){let M=i.objectIndex;switch(a){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let E=0;E<t.length;E++)if(t[E].name===M){M=E;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[a]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[a]}if(M!==void 0){if(t[M]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[M]}}const m=t[l];if(m===void 0){const M=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+M+"."+l+" but it wasn't found.",t);return}let g=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?g=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(g=this.Versioning.MatrixWorldNeedsUpdate);let v=this.BindingType.Direct;if(u!==void 0){if(l==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[u]!==void 0&&(u=t.morphTargetDictionary[u])}v=this.BindingType.ArrayElement,this.resolvedProperty=m,this.propertyIndex=u}else m.fromArray!==void 0&&m.toArray!==void 0?(v=this.BindingType.HasFromToArray,this.resolvedProperty=m):Array.isArray(m)?(v=this.BindingType.EntireArray,this.resolvedProperty=m):this.propertyName=l;this.getValue=this.GetterByBindingType[v],this.setValue=this.SetterByBindingTypeAndVersioning[v][g]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=hm,Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray],Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=oi(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let a=0,l=arguments.length;a!==l;++a)t[arguments[a].uuid]=a;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const i=this;this.stats={objects:{get total(){return i._objects.length},get inUse(){return this.total-i.nCachedObjects_}},get bindingsPerObject(){return i._bindings.length}}}add(){const t=this._objects,i=this._indicesByUUID,a=this._paths,l=this._parsedPaths,u=this._bindings,m=u.length;let g,v=t.length,M=this.nCachedObjects_;for(let E=0,A=arguments.length;E!==A;++E){const o=arguments[E],e=o.uuid;let n=i[e];if(n===void 0){n=v++,i[e]=n,t.push(o);for(let r=0,s=m;r!==s;++r)u[r].push(new Lt(o,a[r],l[r]))}else if(n<M){g=t[n];const r=--M,s=t[r];i[s.uuid]=n,t[n]=s,i[e]=r,t[r]=o;for(let c=0,h=m;c!==h;++c){const d=u[c],p=d[r];let _=d[n];d[n]=p,_===void 0&&(_=new Lt(o,a[c],l[c])),d[r]=_}}else t[n]!==g&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=M}remove(){const t=this._objects,i=this._indicesByUUID,a=this._bindings,l=a.length;let u=this.nCachedObjects_;for(let m=0,g=arguments.length;m!==g;++m){const v=arguments[m],M=v.uuid,E=i[M];if(E!==void 0&&E>=u){const A=u++,o=t[A];i[o.uuid]=E,t[E]=o,i[M]=A,t[A]=v;for(let e=0,n=l;e!==n;++e){const r=a[e],s=r[A],c=r[E];r[E]=s,r[A]=c}}}this.nCachedObjects_=u}uncache(){const t=this._objects,i=this._indicesByUUID,a=this._bindings,l=a.length;let u=this.nCachedObjects_,m=t.length;for(let g=0,v=arguments.length;g!==v;++g){const M=arguments[g],E=M.uuid,A=i[E];if(A!==void 0)if(delete i[E],A<u){const o=--u,e=t[o],n=--m,r=t[n];i[e.uuid]=A,t[A]=e,i[r.uuid]=o,t[o]=r,t.pop();for(let s=0,c=l;s!==c;++s){const h=a[s],d=h[o],p=h[n];h[A]=d,h[o]=p,h.pop()}}else{const o=--m,e=t[o];o>0&&(i[e.uuid]=A),t[A]=e,t.pop();for(let n=0,r=l;n!==r;++n){const s=a[n];s[A]=s[o],s.pop()}}}this.nCachedObjects_=u}subscribe_(t,i){const a=this._bindingsIndicesByPath;let l=a[t];const u=this._bindings;if(l!==void 0)return u[l];const m=this._paths,g=this._parsedPaths,v=this._objects,M=v.length,E=this.nCachedObjects_,A=new Array(M);l=u.length,a[t]=l,m.push(t),g.push(i),u.push(A);for(let o=E,e=v.length;o!==e;++o){const n=v[o];A[o]=new Lt(n,t,i)}return A}unsubscribe_(t){const i=this._bindingsIndicesByPath,a=i[t];if(a!==void 0){const l=this._paths,u=this._parsedPaths,m=this._bindings,g=m.length-1,v=m[g],M=t[g];i[M]=a,m[a]=v,m.pop(),u[a]=u[g],u.pop(),l[a]=l[g],l.pop()}}}class um{constructor(t,i,a=null,l=i.blendMode){this._mixer=t,this._clip=i,this._localRoot=a,this.blendMode=l;const u=i.tracks,m=u.length,g=new Array(m),v={endingStart:ls,endingEnd:ls};for(let M=0;M!==m;++M){const E=u[M].createInterpolant(null);g[M]=E,E.settings=v}this._interpolantSettings=v,this._interpolants=g,this._propertyBindings=new Array(m),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=qu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,i){return this.loop=t,this.repetitions=i,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,i,a){if(t.fadeOut(i),this.fadeIn(i),a){const l=this._clip.duration,u=t._clip.duration,m=u/l,g=l/u;t.warp(1,m,i),this.warp(g,1,i)}return this}crossFadeTo(t,i,a){return t.crossFadeFrom(this,i,a)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,i,a){const l=this._mixer,u=l.time,m=this.timeScale;let g=this._timeScaleInterpolant;g===null&&(g=l._lendControlInterpolant(),this._timeScaleInterpolant=g);const v=g.parameterPositions,M=g.sampleValues;return v[0]=u,v[1]=u+a,M[0]=t/m,M[1]=i/m,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,i,a,l){if(!this.enabled){this._updateWeight(t);return}const u=this._startTime;if(u!==null){const v=(t-u)*a;v<0||a===0?i=0:(this._startTime=null,i=a*v)}i*=this._updateTimeScale(t);const m=this._updateTime(i),g=this._updateWeight(t);if(g>0){const v=this._interpolants,M=this._propertyBindings;switch(this.blendMode){case io:for(let E=0,A=v.length;E!==A;++E)v[E].evaluate(m),M[E].accumulateAdditive(g);break;case us:default:for(let E=0,A=v.length;E!==A;++E)v[E].evaluate(m),M[E].accumulate(l,g)}}}_updateWeight(t){let i=0;if(this.enabled){i=this.weight;const a=this._weightInterpolant;if(a!==null){const l=a.evaluate(t)[0];i*=l,t>a.parameterPositions[1]&&(this.stopFading(),l===0&&(this.enabled=!1))}}return this._effectiveWeight=i,i}_updateTimeScale(t){let i=0;if(!this.paused){i=this.timeScale;const a=this._timeScaleInterpolant;if(a!==null){const l=a.evaluate(t)[0];i*=l,t>a.parameterPositions[1]&&(this.stopWarping(),i===0?this.paused=!0:this.timeScale=i)}}return this._effectiveTimeScale=i,i}_updateTime(t){const i=this._clip.duration,a=this.loop;let l=this.time+t,u=this._loopCount;const m=a===rh;if(t===0)return u===-1?l:m&&(u&1)===1?i-l:l;if(a===Lc){u===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(l>=i)l=i;else if(l<0)l=0;else{this.time=l;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=l,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(u===-1&&(t>=0?(u=0,this._setEndings(!0,this.repetitions===0,m)):this._setEndings(this.repetitions===0,!0,m)),l>=i||l<0){const g=Math.floor(l/i);l-=i*g,u+=Math.abs(g);const v=this.repetitions-u;if(v<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,l=t>0?i:0,this.time=l,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(v===1){const M=t<0;this._setEndings(M,!M,m)}else this._setEndings(!1,!1,m);this._loopCount=u,this.time=l,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:g})}}else this.time=l;if(m&&(u&1)===1)return i-l}return l}_setEndings(t,i,a){const l=this._interpolantSettings;a?(l.endingStart=hs,l.endingEnd=hs):(t?l.endingStart=this.zeroSlopeAtStart?hs:ls:l.endingStart=Ur,i?l.endingEnd=this.zeroSlopeAtEnd?hs:ls:l.endingEnd=Ur)}_scheduleFading(t,i,a){const l=this._mixer,u=l.time;let m=this._weightInterpolant;m===null&&(m=l._lendControlInterpolant(),this._weightInterpolant=m);const g=m.parameterPositions,v=m.sampleValues;return g[0]=u,v[0]=i,g[1]=u+t,v[1]=a,this}}const dm=new Float32Array(1);class nx extends ir{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,i){const a=t._localRoot||this._root,l=t._clip.tracks,u=l.length,m=t._propertyBindings,g=t._interpolants,v=a.uuid,M=this._bindingsByRootAndName;let E=M[v];E===void 0&&(E={},M[v]=E);for(let A=0;A!==u;++A){const o=l[A],e=o.name;let n=E[e];if(n!==void 0)++n.referenceCount,m[A]=n;else{if(n=m[A],n!==void 0){n._cacheIndex===null&&(++n.referenceCount,this._addInactiveBinding(n,v,e));continue}const r=i&&i._propertyBindings[A].binding.parsedPath;n=new sm(Lt.create(a,e,r),o.ValueTypeName,o.getValueSize()),++n.referenceCount,this._addInactiveBinding(n,v,e),m[A]=n}g[A].resultBuffer=n.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const a=(t._localRoot||this._root).uuid,l=t._clip.uuid,u=this._actionsByClip[l];this._bindAction(t,u&&u.knownActions[0]),this._addInactiveAction(t,l,a)}const i=t._propertyBindings;for(let a=0,l=i.length;a!==l;++a){const u=i[a];u.useCount++===0&&(this._lendBinding(u),u.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const i=t._propertyBindings;for(let a=0,l=i.length;a!==l;++a){const u=i[a];--u.useCount===0&&(u.restoreOriginalState(),this._takeBackBinding(u))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const i=t._cacheIndex;return i!==null&&i<this._nActiveActions}_addInactiveAction(t,i,a){const l=this._actions,u=this._actionsByClip;let m=u[i];if(m===void 0)m={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,u[i]=m;else{const g=m.knownActions;t._byClipCacheIndex=g.length,g.push(t)}t._cacheIndex=l.length,l.push(t),m.actionByRoot[a]=t}_removeInactiveAction(t){const i=this._actions,a=i[i.length-1],l=t._cacheIndex;a._cacheIndex=l,i[l]=a,i.pop(),t._cacheIndex=null;const u=t._clip.uuid,m=this._actionsByClip,g=m[u],v=g.knownActions,M=v[v.length-1],E=t._byClipCacheIndex;M._byClipCacheIndex=E,v[E]=M,v.pop(),t._byClipCacheIndex=null;const A=g.actionByRoot,o=(t._localRoot||this._root).uuid;delete A[o],v.length===0&&delete m[u],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const i=t._propertyBindings;for(let a=0,l=i.length;a!==l;++a){const u=i[a];--u.referenceCount===0&&this._removeInactiveBinding(u)}}_lendAction(t){const i=this._actions,a=t._cacheIndex,l=this._nActiveActions++,u=i[l];t._cacheIndex=l,i[l]=t,u._cacheIndex=a,i[a]=u}_takeBackAction(t){const i=this._actions,a=t._cacheIndex,l=--this._nActiveActions,u=i[l];t._cacheIndex=l,i[l]=t,u._cacheIndex=a,i[a]=u}_addInactiveBinding(t,i,a){const l=this._bindingsByRootAndName,u=this._bindings;let m=l[i];m===void 0&&(m={},l[i]=m),m[a]=t,t._cacheIndex=u.length,u.push(t)}_removeInactiveBinding(t){const i=this._bindings,a=t.binding,l=a.rootNode.uuid,u=a.path,m=this._bindingsByRootAndName,g=m[l],v=i[i.length-1],M=t._cacheIndex;v._cacheIndex=M,i[M]=v,i.pop(),delete g[u],Object.keys(g).length===0&&delete m[l]}_lendBinding(t){const i=this._bindings,a=t._cacheIndex,l=this._nActiveBindings++,u=i[l];t._cacheIndex=l,i[l]=t,u._cacheIndex=a,i[a]=u}_takeBackBinding(t){const i=this._bindings,a=t._cacheIndex,l=--this._nActiveBindings,u=i[l];t._cacheIndex=l,i[l]=t,u._cacheIndex=a,i[a]=u}_lendControlInterpolant(){const t=this._controlInterpolants,i=this._nActiveControlInterpolants++;let a=t[i];return a===void 0&&(a=new Ci(new Float32Array(2),new Float32Array(2),1,dm),a.__cacheIndex=i,t[i]=a),a}_takeBackControlInterpolant(t){const i=this._controlInterpolants,a=t.__cacheIndex,l=--this._nActiveControlInterpolants,u=i[l];t.__cacheIndex=l,i[l]=t,u.__cacheIndex=a,i[a]=u}clipAction(t,i,a){const l=i||this._root,u=l.uuid;let m=typeof t=="string"?Al.findByName(l,t):t;const g=m!==null?m.uuid:t,v=this._actionsByClip[g];let M=null;if(a===void 0&&(m!==null?a=m.blendMode:a=us),v!==void 0){const A=v.actionByRoot[u];if(A!==void 0&&A.blendMode===a)return A;M=v.knownActions[0],m===null&&(m=M._clip)}if(m===null)return null;const E=new um(this,m,i,a);return this._bindAction(E,M),this._addInactiveAction(E,g,u),E}existingAction(t,i){const a=i||this._root,l=a.uuid,u=typeof t=="string"?Al.findByName(a,t):t,m=u?u.uuid:t,g=this._actionsByClip[m];return g!==void 0&&g.actionByRoot[l]||null}stopAllAction(){const t=this._actions,i=this._nActiveActions;for(let a=i-1;a>=0;--a)t[a].stop();return this}update(t){t*=this.timeScale;const i=this._actions,a=this._nActiveActions,l=this.time+=t,u=Math.sign(t),m=this._accuIndex^=1;for(let M=0;M!==a;++M)i[M]._update(l,t,u,m);const g=this._bindings,v=this._nActiveBindings;for(let M=0;M!==v;++M)g[M].apply(m);return this}setTime(t){this.time=0;for(let i=0;i<this._actions.length;i++)this._actions[i].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const i=this._actions,a=t.uuid,l=this._actionsByClip,u=l[a];if(u!==void 0){const m=u.knownActions;for(let g=0,v=m.length;g!==v;++g){const M=m[g];this._deactivateAction(M);const E=M._cacheIndex,A=i[i.length-1];M._cacheIndex=null,M._byClipCacheIndex=null,A._cacheIndex=E,i[E]=A,i.pop(),this._removeInactiveBindingsForAction(M)}delete l[a]}}uncacheRoot(t){const i=t.uuid,a=this._actionsByClip;for(const m in a){const g=a[m].actionByRoot,v=g[i];v!==void 0&&(this._deactivateAction(v),this._removeInactiveAction(v))}const l=this._bindingsByRootAndName,u=l[i];if(u!==void 0)for(const m in u){const g=u[m];g.restoreOriginalState(),this._removeInactiveBinding(g)}}uncacheAction(t,i){const a=this.existingAction(t,i);a!==null&&(this._deactivateAction(a),this._removeInactiveAction(a))}}class rc{constructor(t){this.value=t}clone(){return new rc(this.value.clone===void 0?this.value:this.value.clone())}}let Kd=0;class ix extends ir{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.usage=Uc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const i=this.uniforms.indexOf(t);return i!==-1&&this.uniforms.splice(i,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(t){this.name=t.name,this.usage=t.usage;const i=t.uniforms;this.uniforms.length=0;for(let a=0,l=i.length;a<l;a++)this.uniforms.push(i[a].clone());return this}clone(){return new this.constructor().copy(this)}}class rx extends Nh{constructor(t,i,a=1){super(t,i),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=a}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const i=super.clone(t);return i.meshPerAttribute=this.meshPerAttribute,i}toJSON(t){const i=super.toJSON(t);return i.isInstancedInterleavedBuffer=!0,i.meshPerAttribute=this.meshPerAttribute,i}}class sx{constructor(t,i,a,l,u){this.isGLBufferAttribute=!0,this.buffer=t,this.type=i,this.itemSize=a,this.elementSize=l,this.count=u,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,i){return this.type=t,this.elementSize=i,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}class fm{constructor(t,i,a=0,l=1/0){this.ray=new Si(t,i),this.near=a,this.far=l,this.camera=null,this.layers=new Ei,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}intersectObject(t,i=!0,a=[]){return is(t,this,a,i),a.sort(Qd),a}intersectObjects(t,i=!0,a=[]){for(let l=0,u=t.length;l<u;l++)is(t[l],this,a,i);return a.sort(Qd),a}}function Qd(f,t){return f.distance-t.distance}function is(f,t,i,a){if(f.layers.test(t.layers)&&f.raycast(t,i),a===!0){const l=f.children;for(let u=0,m=l.length;u<m;u++)is(l[u],t,i,!0)}}class ax{constructor(t=1,i=0,a=0){return this.radius=t,this.phi=i,this.theta=a,this}set(t,i,a){return this.radius=t,this.phi=i,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,a){return this.radius=Math.sqrt(t*t+i*i+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(on(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class pm{constructor(t=1,i=0,a=0){return this.radius=t,this.theta=i,this.y=a,this}set(t,i,a){return this.radius=t,this.theta=i,this.y=a,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,a){return this.radius=Math.sqrt(t*t+a*a),this.theta=Math.atan2(t,a),this.y=i,this}clone(){return new this.constructor().copy(this)}}const jd=new Ue;class qa{constructor(t=new Ue(1/0,1/0),i=new Ue(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromPoints(t){this.makeEmpty();for(let i=0,a=t.length;i<a;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const a=jd.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y)}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return jd.copy(t).clamp(this.min,this.max).sub(t).length()}intersect(t){return this.min.max(t.min),this.max.min(t.max),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ef=new Z,pu=new Z;class Ya{constructor(t=new Z,i=new Z){this.start=t,this.end=i}set(t,i){return this.start.copy(t),this.end.copy(i),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,i){return this.delta(i).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,i){ef.subVectors(t,this.start),pu.subVectors(this.end,this.start);const a=pu.dot(pu);let u=pu.dot(ef)/a;return i&&(u=on(u,0,1)),u}closestPointToPoint(t,i,a){const l=this.closestPointToPointParameter(t,i);return this.delta(a).multiplyScalar(l).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const mm=new Z;class gm extends At{constructor(t,i){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=i;const a=new ct,l=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let m=0,g=1,v=32;m<v;m++,g++){const M=m/v*Math.PI*2,E=g/v*Math.PI*2;l.push(Math.cos(M),Math.sin(M),1,Math.cos(E),Math.sin(E),1)}a.setAttribute("position",new nt(l,3));const u=new fn({fog:!1,toneMapped:!1});this.cone=new Ji(a,u),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateMatrixWorld();const t=this.light.distance?this.light.distance:1e3,i=t*Math.tan(this.light.angle);this.cone.scale.set(i,i,t),mm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(mm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const si=new Z,Fl=new ot,tf=new ot;class Za extends Ji{constructor(t){const i=_m(t),a=new ct,l=[],u=[],m=new ue(0,0,1),g=new ue(0,1,0);for(let M=0;M<i.length;M++){const E=i[M];E.parent&&E.parent.isBone&&(l.push(0,0,0),l.push(0,0,0),u.push(m.r,m.g,m.b),u.push(g.r,g.g,g.b))}a.setAttribute("position",new nt(l,3)),a.setAttribute("color",new nt(u,3));const v=new fn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(a,v),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=i,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const i=this.bones,a=this.geometry,l=a.getAttribute("position");tf.copy(this.root.matrixWorld).invert();for(let u=0,m=0;u<i.length;u++){const g=i[u];g.parent&&g.parent.isBone&&(Fl.multiplyMatrices(tf,g.matrixWorld),si.setFromMatrixPosition(Fl),l.setXYZ(m,si.x,si.y,si.z),Fl.multiplyMatrices(tf,g.parent.matrixWorld),si.setFromMatrixPosition(Fl),l.setXYZ(m+1,si.x,si.y,si.z),m+=2)}a.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose()}}function _m(f){const t=[];f.isBone===!0&&t.push(f);for(let i=0;i<f.children.length;i++)t.push.apply(t,_m(f.children[i]));return t}class ox extends gn{constructor(t,i,a){const l=new fr(i,4,2),u=new Hr({wireframe:!0,fog:!1,toneMapped:!1});super(l,u),this.light=t,this.light.updateMatrixWorld(),this.color=a,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const xm=new Z,mu=new ue,ym=new ue;class nf extends At{constructor(t,i,a){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=a;const l=new Ri(i);l.rotateY(Math.PI*.5),this.material=new Hr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const u=l.getAttribute("position"),m=new Float32Array(u.count*3);l.setAttribute("color",new Bt(m,3)),this.add(new gn(l,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const i=t.geometry.getAttribute("color");mu.copy(this.light.color),ym.copy(this.light.groundColor);for(let a=0,l=i.count;a<l;a++){const u=a<l/2?mu:ym;i.setXYZ(a,u.r,u.g,u.b)}i.needsUpdate=!0}t.lookAt(xm.setFromMatrixPosition(this.light.matrixWorld).negate())}}class cx extends Ji{constructor(t=10,i=10,a=4473924,l=8947848){a=new ue(a),l=new ue(l);const u=i/2,m=t/i,g=t/2,v=[],M=[];for(let o=0,e=0,n=-g;o<=i;o++,n+=m){v.push(-g,0,n,g,0,n),v.push(n,0,-g,n,0,g);const r=o===u?a:l;r.toArray(M,e),e+=3,r.toArray(M,e),e+=3,r.toArray(M,e),e+=3,r.toArray(M,e),e+=3}const E=new ct;E.setAttribute("position",new nt(v,3)),E.setAttribute("color",new nt(M,3));const A=new fn({vertexColors:!0,toneMapped:!1});super(E,A),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class lx extends Ji{constructor(t=10,i=16,a=8,l=64,u=4473924,m=8947848){u=new ue(u),m=new ue(m);const g=[],v=[];if(i>1)for(let A=0;A<i;A++){const o=A/i*(Math.PI*2),e=Math.sin(o)*t,n=Math.cos(o)*t;g.push(0,0,0),g.push(e,0,n);const r=A&1?u:m;v.push(r.r,r.g,r.b),v.push(r.r,r.g,r.b)}for(let A=0;A<a;A++){const o=A&1?u:m,e=t-t/a*A;for(let n=0;n<l;n++){let r=n/l*(Math.PI*2),s=Math.sin(r)*e,c=Math.cos(r)*e;g.push(s,0,c),v.push(o.r,o.g,o.b),r=(n+1)/l*(Math.PI*2),s=Math.sin(r)*e,c=Math.cos(r)*e,g.push(s,0,c),v.push(o.r,o.g,o.b)}}const M=new ct;M.setAttribute("position",new nt(g,3)),M.setAttribute("color",new nt(v,3));const E=new fn({vertexColors:!0,toneMapped:!1});super(M,E),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const vm=new Z,gu=new Z,Mm=new Z;class hx extends At{constructor(t,i,a){super(),this.light=t,this.light.updateMatrixWorld(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=a,i===void 0&&(i=1);let l=new ct;l.setAttribute("position",new nt([-i,i,0,i,i,0,i,-i,0,-i,-i,0,-i,i,0],3));const u=new fn({fog:!1,toneMapped:!1});this.lightPlane=new Zi(l,u),this.add(this.lightPlane),l=new ct,l.setAttribute("position",new nt([0,0,0,0,0,1],3)),this.targetLine=new Zi(l,u),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){vm.setFromMatrixPosition(this.light.matrixWorld),gu.setFromMatrixPosition(this.light.target.matrixWorld),Mm.subVectors(gu,vm),this.lightPlane.lookAt(gu),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(gu),this.targetLine.scale.z=Mm.length()}}const _u=new Z,en=new ws;class Pt extends Ji{constructor(t){const i=new ct,a=new fn({color:16777215,vertexColors:!0,toneMapped:!1}),l=[],u=[],m={};g("n1","n2"),g("n2","n4"),g("n4","n3"),g("n3","n1"),g("f1","f2"),g("f2","f4"),g("f4","f3"),g("f3","f1"),g("n1","f1"),g("n2","f2"),g("n3","f3"),g("n4","f4"),g("p","n1"),g("p","n2"),g("p","n3"),g("p","n4"),g("u1","u2"),g("u2","u3"),g("u3","u1"),g("c","t"),g("p","c"),g("cn1","cn2"),g("cn3","cn4"),g("cf1","cf2"),g("cf3","cf4");function g(n,r){v(n),v(r)}function v(n){l.push(0,0,0),u.push(0,0,0),m[n]===void 0&&(m[n]=[]),m[n].push(l.length/3-1)}i.setAttribute("position",new nt(l,3)),i.setAttribute("color",new nt(u,3)),super(i,a),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=m,this.update();const M=new ue(16755200),E=new ue(16711680),A=new ue(43775),o=new ue(16777215),e=new ue(3355443);this.setColors(M,E,A,o,e)}setColors(t,i,a,l,u){const g=this.geometry.getAttribute("color");g.setXYZ(0,t.r,t.g,t.b),g.setXYZ(1,t.r,t.g,t.b),g.setXYZ(2,t.r,t.g,t.b),g.setXYZ(3,t.r,t.g,t.b),g.setXYZ(4,t.r,t.g,t.b),g.setXYZ(5,t.r,t.g,t.b),g.setXYZ(6,t.r,t.g,t.b),g.setXYZ(7,t.r,t.g,t.b),g.setXYZ(8,t.r,t.g,t.b),g.setXYZ(9,t.r,t.g,t.b),g.setXYZ(10,t.r,t.g,t.b),g.setXYZ(11,t.r,t.g,t.b),g.setXYZ(12,t.r,t.g,t.b),g.setXYZ(13,t.r,t.g,t.b),g.setXYZ(14,t.r,t.g,t.b),g.setXYZ(15,t.r,t.g,t.b),g.setXYZ(16,t.r,t.g,t.b),g.setXYZ(17,t.r,t.g,t.b),g.setXYZ(18,t.r,t.g,t.b),g.setXYZ(19,t.r,t.g,t.b),g.setXYZ(20,t.r,t.g,t.b),g.setXYZ(21,t.r,t.g,t.b),g.setXYZ(22,t.r,t.g,t.b),g.setXYZ(23,t.r,t.g,t.b),g.setXYZ(24,i.r,i.g,i.b),g.setXYZ(25,i.r,i.g,i.b),g.setXYZ(26,i.r,i.g,i.b),g.setXYZ(27,i.r,i.g,i.b),g.setXYZ(28,i.r,i.g,i.b),g.setXYZ(29,i.r,i.g,i.b),g.setXYZ(30,i.r,i.g,i.b),g.setXYZ(31,i.r,i.g,i.b),g.setXYZ(32,a.r,a.g,a.b),g.setXYZ(33,a.r,a.g,a.b),g.setXYZ(34,a.r,a.g,a.b),g.setXYZ(35,a.r,a.g,a.b),g.setXYZ(36,a.r,a.g,a.b),g.setXYZ(37,a.r,a.g,a.b),g.setXYZ(38,l.r,l.g,l.b),g.setXYZ(39,l.r,l.g,l.b),g.setXYZ(40,u.r,u.g,u.b),g.setXYZ(41,u.r,u.g,u.b),g.setXYZ(42,u.r,u.g,u.b),g.setXYZ(43,u.r,u.g,u.b),g.setXYZ(44,u.r,u.g,u.b),g.setXYZ(45,u.r,u.g,u.b),g.setXYZ(46,u.r,u.g,u.b),g.setXYZ(47,u.r,u.g,u.b),g.setXYZ(48,u.r,u.g,u.b),g.setXYZ(49,u.r,u.g,u.b),g.needsUpdate=!0}update(){const t=this.geometry,i=this.pointMap,a=1,l=1;en.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),hn("c",i,t,en,0,0,-1),hn("t",i,t,en,0,0,1),hn("n1",i,t,en,-a,-l,-1),hn("n2",i,t,en,a,-l,-1),hn("n3",i,t,en,-a,l,-1),hn("n4",i,t,en,a,l,-1),hn("f1",i,t,en,-a,-l,1),hn("f2",i,t,en,a,-l,1),hn("f3",i,t,en,-a,l,1),hn("f4",i,t,en,a,l,1),hn("u1",i,t,en,a*.7,l*1.1,-1),hn("u2",i,t,en,-a*.7,l*1.1,-1),hn("u3",i,t,en,0,l*2,-1),hn("cf1",i,t,en,-a,0,1),hn("cf2",i,t,en,a,0,1),hn("cf3",i,t,en,0,-l,1),hn("cf4",i,t,en,0,l,1),hn("cn1",i,t,en,-a,0,-1),hn("cn2",i,t,en,a,0,-1),hn("cn3",i,t,en,0,-l,-1),hn("cn4",i,t,en,0,l,-1),t.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function hn(f,t,i,a,l,u,m){_u.set(l,u,m).unproject(a);const g=t[f];if(g!==void 0){const v=i.getAttribute("position");for(let M=0,E=g.length;M<E;M++)v.setXYZ(g[M],_u.x,_u.y,_u.z)}}const Ol=new vi;class ux extends Ji{constructor(t,i=16776960){const a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=new Float32Array(8*3),u=new ct;u.setIndex(new Bt(a,1)),u.setAttribute("position",new Bt(l,3)),super(u,new fn({color:i,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Ol.setFromObject(this.object),Ol.isEmpty())return;const i=Ol.min,a=Ol.max,l=this.geometry.attributes.position,u=l.array;u[0]=a.x,u[1]=a.y,u[2]=a.z,u[3]=i.x,u[4]=a.y,u[5]=a.z,u[6]=i.x,u[7]=i.y,u[8]=a.z,u[9]=a.x,u[10]=i.y,u[11]=a.z,u[12]=a.x,u[13]=a.y,u[14]=i.z,u[15]=i.x,u[16]=a.y,u[17]=i.z,u[18]=i.x,u[19]=i.y,u[20]=i.z,u[21]=a.x,u[22]=i.y,u[23]=i.z,l.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,i){return super.copy(t,i),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class dx extends Ji{constructor(t,i=16776960){const a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),l=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],u=new ct;u.setIndex(new Bt(a,1)),u.setAttribute("position",new nt(l,3)),super(u,new fn({color:i,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const i=this.box;i.isEmpty()||(i.getCenter(this.position),i.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){this.geometry.dispose(),this.material.dispose()}}class rf extends Zi{constructor(t,i=1,a=16776960){const l=a,u=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],m=new ct;m.setAttribute("position",new nt(u,3)),m.computeBoundingSphere(),super(m,new fn({color:l,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=i;const g=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],v=new ct;v.setAttribute("position",new nt(g,3)),v.computeBoundingSphere(),this.add(new gn(v,new Hr({color:l,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Sm=new Z;let xu,sf;class fx extends At{constructor(t=new Z(0,0,1),i=new Z(0,0,0),a=1,l=16776960,u=a*.2,m=u*.2){super(),this.type="ArrowHelper",xu===void 0&&(xu=new ct,xu.setAttribute("position",new nt([0,0,0,0,1,0],3)),sf=new Vs(0,.5,1,5,1),sf.translate(0,-.5,0)),this.position.copy(i),this.line=new Zi(xu,new fn({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new gn(sf,new Hr({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(a,u,m)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Sm.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(Sm,i)}}setLength(t,i=t*.2,a=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(a,i,a),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class px extends Ji{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],a=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new ct;l.setAttribute("position",new nt(i,3)),l.setAttribute("color",new nt(a,3));const u=new fn({vertexColors:!0,toneMapped:!1});super(l,u),this.type="AxesHelper"}setColors(t,i,a){const l=new ue,u=this.geometry.attributes.color.array;return l.set(t),l.toArray(u,0),l.toArray(u,3),l.set(i),l.toArray(u,6),l.toArray(u,9),l.set(a),l.toArray(u,12),l.toArray(u,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class bm{constructor(){this.type="ShapePath",this.color=new ue,this.subPaths=[],this.currentPath=null}moveTo(t,i){return this.currentPath=new Wo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,i),this}lineTo(t,i){return this.currentPath.lineTo(t,i),this}quadraticCurveTo(t,i,a,l){return this.currentPath.quadraticCurveTo(t,i,a,l),this}bezierCurveTo(t,i,a,l,u,m){return this.currentPath.bezierCurveTo(t,i,a,l,u,m),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function i(c){const h=[];for(let d=0,p=c.length;d<p;d++){const _=c[d],y=new ur;y.curves=_.curves,h.push(y)}return h}function a(c,h){const d=h.length;let p=!1;for(let _=d-1,y=0;y<d;_=y++){let S=h[_],x=h[y],b=x.x-S.x,T=x.y-S.y;if(Math.abs(T)>Number.EPSILON){if(T<0&&(S=h[y],b=-b,x=h[_],T=-T),c.y<S.y||c.y>x.y)continue;if(c.y===S.y){if(c.x===S.x)return!0}else{const C=T*(c.x-S.x)-b*(c.y-S.y);if(C===0)return!0;if(C<0)continue;p=!p}}else{if(c.y!==S.y)continue;if(x.x<=c.x&&c.x<=S.x||S.x<=c.x&&c.x<=x.x)return!0}}return p}const l=Cn.isClockWise,u=this.subPaths;if(u.length===0)return[];let m,g,v;const M=[];if(u.length===1)return g=u[0],v=new ur,v.curves=g.curves,M.push(v),M;let E=!l(u[0].getPoints());E=t?!E:E;const A=[],o=[];let e=[],n=0,r;o[n]=void 0,e[n]=[];for(let c=0,h=u.length;c<h;c++)g=u[c],r=g.getPoints(),m=l(r),m=t?!m:m,m?(!E&&o[n]&&n++,o[n]={s:new ur,p:r},o[n].s.curves=g.curves,E&&n++,e[n]=[]):e[n].push({h:g,p:r[0]});if(!o[0])return i(u);if(o.length>1){let c=!1,h=0;for(let d=0,p=o.length;d<p;d++)A[d]=[];for(let d=0,p=o.length;d<p;d++){const _=e[d];for(let y=0;y<_.length;y++){const S=_[y];let x=!0;for(let b=0;b<o.length;b++)a(S.p,o[b].p)&&(d!==b&&h++,x?(x=!1,A[b].push(S)):c=!0);x&&A[d].push(S)}}h>0&&c===!1&&(e=A)}let s;for(let c=0,h=o.length;c<h;c++){v=o[c].s,M.push(v),s=e[c];for(let d=0,p=s.length;d<p;d++)v.holes.push(s[d].h)}return M}}const $i=mx();function mx(){const f=new ArrayBuffer(4),t=new Float32Array(f),i=new Uint32Array(f),a=new Uint32Array(512),l=new Uint32Array(512);for(let v=0;v<256;++v){const M=v-127;M<-27?(a[v]=0,a[v|256]=32768,l[v]=24,l[v|256]=24):M<-14?(a[v]=1024>>-M-14,a[v|256]=1024>>-M-14|32768,l[v]=-M-1,l[v|256]=-M-1):M<=15?(a[v]=M+15<<10,a[v|256]=M+15<<10|32768,l[v]=13,l[v|256]=13):M<128?(a[v]=31744,a[v|256]=64512,l[v]=24,l[v|256]=24):(a[v]=31744,a[v|256]=64512,l[v]=13,l[v|256]=13)}const u=new Uint32Array(2048),m=new Uint32Array(64),g=new Uint32Array(64);for(let v=1;v<1024;++v){let M=v<<13,E=0;for(;!(M&8388608);)M<<=1,E-=8388608;M&=-8388609,E+=947912704,u[v]=M|E}for(let v=1024;v<2048;++v)u[v]=939524096+(v-1024<<13);for(let v=1;v<31;++v)m[v]=v<<23;m[31]=1199570944,m[32]=2147483648;for(let v=33;v<63;++v)m[v]=2147483648+(v-32<<23);m[63]=3347054592;for(let v=1;v<64;++v)v!==32&&(g[v]=1024);return{floatView:t,uint32View:i,baseTable:a,shiftTable:l,mantissaTable:u,exponentTable:m,offsetTable:g}}function gx(f){Math.abs(f)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),f=on(f,-65504,65504),$i.floatView[0]=f;const t=$i.uint32View[0],i=t>>23&511;return $i.baseTable[i]+((t&8388607)>>$i.shiftTable[i])}function Em(f){const t=f>>10;return $i.uint32View[0]=$i.mantissaTable[$i.offsetTable[t]+(f&1023)]+$i.exponentTable[t],$i.floatView[0]}var _x=Object.freeze({__proto__:null,toHalfFloat:gx,fromHalfFloat:Em});function Tm(){console.error("THREE.ImmediateRenderObject has been removed.")}class yu extends In{constructor(t,i,a){console.error('THREE.WebGLMultisampleRenderTarget has been removed. Use a normal render target and set the "samples" property to greater 0 to enable multisampling.'),super(t,i,a),this.samples=4}}class xx extends sr{constructor(t,i,a,l){console.warn("THREE.DataTexture2DArray has been renamed to DataArrayTexture."),super(t,i,a,l)}}class wm extends uh{constructor(t,i,a,l){console.warn("THREE.DataTexture3D has been renamed to Data3DTexture."),super(t,i,a,l)}}class yx extends Ts{constructor(t,i,a,l,u,m){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(t,i,a,l,u,m)}}class js extends Gs{constructor(t,i,a,l){console.warn("THREE.CapsuleBufferGeometry has been renamed to THREE.CapsuleGeometry."),super(t,i,a,l)}}class vu extends ks{constructor(t,i,a,l){console.warn("THREE.CircleBufferGeometry has been renamed to THREE.CircleGeometry."),super(t,i,a,l)}}class af extends Xo{constructor(t,i,a,l,u,m,g){console.warn("THREE.ConeBufferGeometry has been renamed to THREE.ConeGeometry."),super(t,i,a,l,u,m,g)}}class vx extends Vs{constructor(t,i,a,l,u,m,g,v){console.warn("THREE.CylinderBufferGeometry has been renamed to THREE.CylinderGeometry."),super(t,i,a,l,u,m,g,v)}}class Am extends hl{constructor(t,i){console.warn("THREE.DodecahedronBufferGeometry has been renamed to THREE.DodecahedronGeometry."),super(t,i)}}class Mx extends qs{constructor(t,i){console.warn("THREE.ExtrudeBufferGeometry has been renamed to THREE.ExtrudeGeometry."),super(t,i)}}class Sx extends $o{constructor(t,i){console.warn("THREE.IcosahedronBufferGeometry has been renamed to THREE.IcosahedronGeometry."),super(t,i)}}class Rm extends zs{constructor(t,i,a,l){console.warn("THREE.LatheBufferGeometry has been renamed to THREE.LatheGeometry."),super(t,i,a,l)}}class Cm extends Ri{constructor(t,i){console.warn("THREE.OctahedronBufferGeometry has been renamed to THREE.OctahedronGeometry."),super(t,i)}}class bx extends Ea{constructor(t,i,a,l){console.warn("THREE.PlaneBufferGeometry has been renamed to THREE.PlaneGeometry."),super(t,i,a,l)}}class Ex extends Kr{constructor(t,i,a,l){console.warn("THREE.PolyhedronBufferGeometry has been renamed to THREE.PolyhedronGeometry."),super(t,i,a,l)}}class Tx extends xl{constructor(t,i,a,l,u,m){console.warn("THREE.RingBufferGeometry has been renamed to THREE.RingGeometry."),super(t,i,a,l,u,m)}}class Lm extends Ko{constructor(t,i){console.warn("THREE.ShapeBufferGeometry has been renamed to THREE.ShapeGeometry."),super(t,i)}}class Mu extends fr{constructor(t,i,a,l,u,m,g){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(t,i,a,l,u,m,g)}}class Pm extends yl{constructor(t,i){console.warn("THREE.TetrahedronBufferGeometry has been renamed to THREE.TetrahedronGeometry."),super(t,i)}}class wx extends vl{constructor(t,i,a,l,u){console.warn("THREE.TorusBufferGeometry has been renamed to THREE.TorusGeometry."),super(t,i,a,l,u)}}class Su extends Ml{constructor(t,i,a,l,u,m){console.warn("THREE.TorusKnotBufferGeometry has been renamed to THREE.TorusKnotGeometry."),super(t,i,a,l,u,m)}}class tn extends Sl{constructor(t,i,a,l,u){console.warn("THREE.TubeBufferGeometry has been renamed to THREE.TubeGeometry."),super(t,i,a,l,u)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qi}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qi),U.ACESFilmicToneMapping=zu,U.AddEquation=wr,U.AddOperation=eo,U.AdditiveAnimationBlendMode=io,U.AdditiveBlending=Ii,U.AlphaFormat=jl,U.AlwaysDepth=Pu,U.AlwaysStencilFunc=uf,U.AmbientLight=Yd,U.AmbientLightProbe=j0,U.AnimationClip=Al,U.AnimationLoader=Wp,U.AnimationMixer=nx,U.AnimationObjectGroup=tx,U.AnimationUtils=El,U.ArcCurve=Vh,U.ArrayCamera=Md,U.ArrowHelper=fx,U.Audio=Zd,U.AudioAnalyser=Jd,U.AudioContext=lu,U.AudioListener=nm,U.AudioLoader=ri,U.AxesHelper=px,U.BackSide=nn,U.BasicDepthPacking=lf,U.BasicShadowMap=ac,U.Bone=Bh,U.BooleanKeyframeTrack=mr,U.Box2=qa,U.Box3=vi,U.Box3Helper=dx,U.BoxBufferGeometry=yx,U.BoxGeometry=Ts,U.BoxHelper=ux,U.BufferAttribute=Bt,U.BufferGeometry=ct,U.BufferGeometryLoader=Ks,U.ByteType=cf,U.Cache=xr,U.Camera=ws,U.CameraHelper=Pt,U.CanvasTexture=bp,U.CapsuleBufferGeometry=js,U.CapsuleGeometry=Gs,U.CatmullRomCurve3=Ua,U.CineonToneMapping=Bu,U.CircleBufferGeometry=vu,U.CircleGeometry=ks,U.ClampToEdgeWrapping=rn,U.Clock=jp,U.Color=ue,U.ColorKeyframeTrack=Hd,U.ColorManagement=Qn,U.CompressedArrayTexture=Pd,U.CompressedTexture=Fs,U.CompressedTextureLoader=Wd,U.ConeBufferGeometry=af,U.ConeGeometry=Xo,U.CubeCamera=As,U.CubeReflectionMapping=Ar,U.CubeRefractionMapping=Ui,U.CubeTexture=Rs,U.CubeTextureLoader=Xp,U.CubeUVReflectionMapping=tr,U.CubicBezierCurve=Wh,U.CubicBezierCurve3=Xh,U.CubicInterpolant=Vp,U.CullFaceBack=Qa,U.CullFaceFront=ss,U.CullFaceFrontBack=ji,U.CullFaceNone=kl,U.Curve=mi,U.CurvePath=Jh,U.CustomBlending=Hl,U.CustomToneMapping=Gu,U.CylinderBufferGeometry=vx,U.CylinderGeometry=Vs,U.Cylindrical=pm,U.Data3DTexture=uh,U.DataArrayTexture=sr,U.DataTexture=Pa,U.DataTexture2DArray=xx,U.DataTexture3D=wm,U.DataTextureLoader=qp,U.DataUtils=_x,U.DecrementStencilOp=Gi,U.DecrementWrapStencilOp=Fm,U.DefaultLoadingManager=Cl,U.DepthFormat=Dr,U.DepthStencilFormat=$n,U.DepthTexture=hp,U.DirectionalLight=ou,U.DirectionalLightHelper=hx,U.DiscreteInterpolant=Vd,U.DodecahedronBufferGeometry=Am,U.DodecahedronGeometry=hl,U.DoubleSide=Wt,U.DstAlphaFactor=$l,U.DstColorFactor=Au,U.DynamicCopyUsage=pf,U.DynamicDrawUsage=Wm,U.DynamicReadUsage=Ym,U.EdgesGeometry=Ai,U.EllipseCurve=ol,U.EqualDepth=Du,U.EqualStencilFunc=zm,U.EquirectangularReflectionMapping=ai,U.EquirectangularRefractionMapping=yi,U.Euler=Dn,U.EventDispatcher=ir,U.ExtrudeBufferGeometry=Mx,U.ExtrudeGeometry=qs,U.FileLoader=vr,U.Float16BufferAttribute=_o,U.Float32BufferAttribute=nt,U.Float64BufferAttribute=rd,U.FloatType=Fi,U.Fog=Uh,U.FogExp2=Dh,U.FramebufferTexture=Sp,U.FrontSide=Ln,U.Frustum=ba,U.GLBufferAttribute=sx,U.GLSL1=gf,U.GLSL3=oh,U.GreaterDepth=Uu,U.GreaterEqualDepth=lc,U.GreaterEqualStencilFunc=Hm,U.GreaterStencilFunc=km,U.GridHelper=cx,U.Group=Lo,U.HalfFloatType=Yn,U.HemisphereLight=Xd,U.HemisphereLightHelper=nf,U.HemisphereLightProbe=jr,U.IcosahedronBufferGeometry=Sx,U.IcosahedronGeometry=$o,U.ImageBitmapLoader=Ha,U.ImageLoader=ec,U.ImageUtils=Gc,U.ImmediateRenderObject=Tm,U.IncrementStencilOp=_t,U.IncrementWrapStencilOp=Yu,U.InstancedBufferAttribute=Yr,U.InstancedBufferGeometry=Va,U.InstancedInterleavedBuffer=rx,U.InstancedMesh=Ia,U.Int16BufferAttribute=Wr,U.Int32BufferAttribute=Xr,U.Int8BufferAttribute=vf,U.IntType=Vu,U.InterleavedBuffer=Nh,U.InterleavedBufferAttribute=Ds,U.Interpolant=ka,U.InterpolateDiscrete=oa,U.InterpolateLinear=ca,U.InterpolateSmooth=Pc,U.InvertStencilOp=ah,U.KeepStencilOp=Dc,U.KeyframeTrack=Li,U.LOD=xp,U.LatheBufferGeometry=Rm,U.LatheGeometry=zs,U.Layers=Ei,U.LessDepth=Iu,U.LessEqualDepth=cc,U.LessEqualStencilFunc=Gm,U.LessStencilFunc=Bm,U.Light=Qr,U.LightProbe=nc,U.Line=Zi,U.Line3=Ya,U.LineBasicMaterial=fn,U.LineCurve=Na,U.LineCurve3=$r,U.LineDashedMaterial=bl,U.LineLoop=Rd,U.LineSegments=Ji,U.LinearEncoding=Bi,U.LinearFilter=kt,U.LinearInterpolant=Ci,U.LinearMipMapLinearFilter=Nm,U.LinearMipMapNearestFilter=an,U.LinearMipmapLinearFilter=Lr,U.LinearMipmapNearestFilter=ku,U.LinearSRGBColorSpace=Nr,U.LinearToneMapping=Ou,U.Loader=ii,U.LoaderUtils=cu,U.LoadingManager=jo,U.LoopOnce=Lc,U.LoopPingPong=rh,U.LoopRepeat=qu,U.LuminanceAlphaFormat=Hu,U.LuminanceFormat=Jn,U.MOUSE=Ka,U.Material=Nn,U.MaterialLoader=$s,U.MathUtils=Qm,U.Matrix3=Kn,U.Matrix4=ot,U.MaxEquation=Xl,U.Mesh=gn,U.MeshBasicMaterial=Hr,U.MeshDepthMaterial=Ra,U.MeshDistanceMaterial=Ih,U.MeshLambertMaterial=Bp,U.MeshMatcapMaterial=Ht,U.MeshNormalMaterial=za,U.MeshPhongMaterial=nu,U.MeshPhysicalMaterial=Fp,U.MeshStandardMaterial=Gd,U.MeshToonMaterial=Op,U.MinEquation=Wl,U.MirroredRepeatWrapping=Cr,U.MixOperation=Fu,U.MultiplyBlending=oc,U.MultiplyOperation=ja,U.NearestFilter=wt,U.NearestMipMapLinearFilter=Um,U.NearestMipMapNearestFilter=sn,U.NearestMipmapLinearFilter=na,U.NearestMipmapNearestFilter=os,U.NeverDepth=Lu,U.NeverStencilFunc=Om,U.NoBlending=vn,U.NoColorSpace=fs,U.NoToneMapping=Di,U.NormalAnimationBlendMode=us,U.NormalBlending=ta,U.NotEqualDepth=Nu,U.NotEqualStencilFunc=Vm,U.NumberKeyframeTrack=Tl,U.Object3D=At,U.ObjectLoader=Il,U.ObjectSpaceNormalMap=sh,U.OctahedronBufferGeometry=Cm,U.OctahedronGeometry=Ri,U.OneFactor=Yl,U.OneMinusDstAlphaFactor=Kl,U.OneMinusDstColorFactor=Ru,U.OneMinusSrcAlphaFactor=Jl,U.OneMinusSrcColorFactor=wu,U.OrthographicCamera=ud,U.PCFShadowMap=bu,U.PCFSoftShadowMap=Vl,U.PMREMGenerator=Lf,U.Path=Wo,U.PerspectiveCamera=Rt,U.Plane=or,U.PlaneBufferGeometry=bx,U.PlaneGeometry=Ea,U.PlaneHelper=rf,U.PointLight=tc,U.PointLightHelper=ox,U.Points=Cd,U.PointsMaterial=ko,U.PolarGridHelper=lx,U.PolyhedronBufferGeometry=Ex,U.PolyhedronGeometry=Kr,U.PositionalAudio=Nl,U.PropertyBinding=Lt,U.PropertyMixer=sm,U.QuadraticBezierCurve=qh,U.QuadraticBezierCurve3=Yh,U.Quaternion=jn,U.QuaternionKeyframeTrack=gr,U.QuaternionLinearInterpolant=wl,U.REVISION=Qi,U.RGBADepthPacking=hf,U.RGBAFormat=Zn,U.RGBAIntegerFormat=th,U.RGBA_ASTC_10x10_Format=wc,U.RGBA_ASTC_10x5_Format=bc,U.RGBA_ASTC_10x6_Format=Ec,U.RGBA_ASTC_10x8_Format=Tc,U.RGBA_ASTC_12x10_Format=Ac,U.RGBA_ASTC_12x12_Format=Rc,U.RGBA_ASTC_4x4_Format=mc,U.RGBA_ASTC_5x4_Format=gc,U.RGBA_ASTC_5x5_Format=_c,U.RGBA_ASTC_6x5_Format=xc,U.RGBA_ASTC_6x6_Format=yc,U.RGBA_ASTC_8x5_Format=vc,U.RGBA_ASTC_8x6_Format=Mc,U.RGBA_ASTC_8x8_Format=Sc,U.RGBA_BPTC_Format=Cc,U.RGBA_ETC2_EAC_Format=pc,U.RGBA_PVRTC_2BPPV1_Format=fc,U.RGBA_PVRTC_4BPPV1_Format=dc,U.RGBA_S3TC_DXT1_Format=ra,U.RGBA_S3TC_DXT3_Format=sa,U.RGBA_S3TC_DXT5_Format=aa,U.RGBFormat=Ir,U.RGB_ETC1_Format=nh,U.RGB_ETC2_Format=ih,U.RGB_PVRTC_2BPPV1_Format=uc,U.RGB_PVRTC_4BPPV1_Format=no,U.RGB_S3TC_DXT1_Format=to,U.RGFormat=eh,U.RGIntegerFormat=Xu,U.RawShaderMaterial=Np,U.Ray=Si,U.Raycaster=fm,U.RectAreaLight=Pi,U.RedFormat=cs,U.RedIntegerFormat=Wu,U.ReinhardToneMapping=er,U.RepeatWrapping=Rr,U.ReplaceStencilOp=ms,U.ReverseSubtractEquation=as,U.RingBufferGeometry=Tx,U.RingGeometry=xl,U.SRGBColorSpace=zi,U.Scene=fp,U.ShaderChunk=Mt,U.ShaderLib=lr,U.ShaderMaterial=jt,U.ShadowMaterial=Up,U.Shape=ur,U.ShapeBufferGeometry=Lm,U.ShapeGeometry=Ko,U.ShapePath=bm,U.ShapeUtils=Cn,U.ShortType=nr,U.Skeleton=il,U.SkeletonHelper=Za,U.SkinnedMesh=Mp,U.Source=gs,U.Sphere=ys,U.SphereBufferGeometry=Mu,U.SphereGeometry=fr,U.Spherical=ax,U.SphericalHarmonics3=Js,U.SplineCurve=wi,U.SpotLight=su,U.SpotLightHelper=gm,U.Sprite=_p,U.SpriteMaterial=bd,U.SrcAlphaFactor=Zl,U.SrcAlphaSaturateFactor=Cu,U.SrcColorFactor=Tu,U.StaticCopyUsage=ff,U.StaticDrawUsage=Uc,U.StaticReadUsage=qm,U.StereoCamera=Ul,U.StreamCopyUsage=mf,U.StreamDrawUsage=Xm,U.StreamReadUsage=df,U.StringKeyframeTrack=_r,U.SubtractEquation=Eu,U.SubtractiveBlending=Tr,U.TOUCH=Gl,U.TangentSpaceNormalMap=ds,U.TetrahedronBufferGeometry=Pm,U.TetrahedronGeometry=yl,U.Texture=qt,U.TextureLoader=Yp,U.TorusBufferGeometry=wx,U.TorusGeometry=vl,U.TorusKnotBufferGeometry=Su,U.TorusKnotGeometry=Ml,U.Triangle=Un,U.TriangleFanDrawMode=Ic,U.TriangleStripDrawMode=ha,U.TrianglesDrawMode=la,U.TubeBufferGeometry=tn,U.TubeGeometry=Sl,U.UVMapping=hc,U.Uint16BufferAttribute=Wc,U.Uint32BufferAttribute=bs,U.Uint8BufferAttribute=It,U.Uint8ClampedBufferAttribute=qi,U.Uniform=rc,U.UniformsGroup=ix,U.UniformsLib=We,U.UniformsUtils=pi,U.UnsignedByteType=Gn,U.UnsignedInt248Type=Pr,U.UnsignedIntType=Ni,U.UnsignedShort4444Type=Oi,U.UnsignedShort5551Type=ia,U.UnsignedShortType=Ql,U.VSMShadowMap=ea,U.Vector2=Ue,U.Vector3=Z,U.Vector4=Nt,U.VectorKeyframeTrack=Ys,U.VideoTexture=W0,U.WebGL1Renderer=dp,U.WebGL3DRenderTarget=eg,U.WebGLArrayRenderTarget=ju,U.WebGLCubeRenderTarget=ld,U.WebGLMultipleRenderTargets=tg,U.WebGLMultisampleRenderTarget=yu,U.WebGLRenderTarget=In,U.WebGLRenderer=up,U.WebGLUtils=cp,U.WireframeGeometry=Pp,U.WrapAroundEnding=Ur,U.ZeroCurvatureEnding=ls,U.ZeroFactor=ql,U.ZeroSlopeEnding=hs,U.ZeroStencilOp=ps,U._SRGBAFormat=Nc,U.sRGBEncoding=Vt},12077:function(Dm,U,Qi){Qi.r(U),Qi.d(U,{ACESFilmicToneMapping:function(){return hc},AddEquation:function(){return as},AddOperation:function(){return Ou},AdditiveAnimationBlendMode:function(){return Vt},AdditiveBlending:function(){return oc},AlphaFormat:function(){return Zn},AlwaysCompare:function(){return En},AlwaysDepth:function(){return cc},AlwaysStencilFunc:function(){return df},AmbientLight:function(){return am},AmbientLightProbe:function(){return sx},AnimationAction:function(){return Ol},AnimationClip:function(){return Dl},AnimationLoader:function(){return Qp},AnimationMixer:function(){return dx},AnimationObjectGroup:function(){return hn},AnimationUtils:function(){return Q0},ArcCurve:function(){return Ap},ArrayCamera:function(){return tl},ArrowHelper:function(){return M},Audio:function(){return gm},AudioAnalyser:function(){return ox},AudioContext:function(){return Kd},AudioListener:function(){return mm},AudioLoader:function(){return ix},AxesHelper:function(){return E},BackSide:function(){return Wt},BasicDepthPacking:function(){return zi},BasicShadowMap:function(){return bu},Bone:function(){return Vh},BooleanKeyframeTrack:function(){return Js},Box2:function(){return _x},Box3:function(){return Mn},Box3Helper:function(){return l},BoxGeometry:function(){return Ta},BoxHelper:function(){return a},BufferAttribute:function(){return Ft},BufferGeometry:function(){return pt},BufferGeometryLoader:function(){return hm},ByteType:function(){return Ql},Cache:function(){return Ha},Camera:function(){return Eh},CameraHelper:function(){return f},CanvasTexture:function(){return Kh},CapsuleGeometry:function(){return ml},CatmullRomCurve3:function(){return Rp},CineonToneMapping:function(){return Gu},CircleGeometry:function(){return Ws},ClampToEdgeWrapping:function(){return wt},Clock:function(){return pm},Color:function(){return Ze},ColorKeyframeTrack:function(){return nc},ColorManagement:function(){return ci},CompressedArrayTexture:function(){return $h},CompressedCubeTexture:function(){return Ud},CompressedTexture:function(){return Fa},CompressedTextureLoader:function(){return Wa},ConeGeometry:function(){return eu},CubeCamera:function(){return Tf},CubeReflectionMapping:function(){return ai},CubeRefractionMapping:function(){return yi},CubeTexture:function(){return Yc},CubeTextureLoader:function(){return jp},CubeUVReflectionMapping:function(){return rn},CubicBezierCurve:function(){return Hs},CubicBezierCurve3:function(){return Lp},CubicInterpolant:function(){return Jp},CullFaceBack:function(){return ss},CullFaceFront:function(){return ji},CullFaceFrontBack:function(){return ac},CullFaceNone:function(){return Qa},Curve:function(){return Ai},CurvePath:function(){return Zo},CustomBlending:function(){return Eu},CustomToneMapping:function(){return Ar},CylinderGeometry:function(){return Xs},Cylindrical:function(){return gx},Data3DTexture:function(){return ho},DataArrayTexture:function(){return xs},DataTexture:function(){return Os},DataTextureLoader:function(){return em},DataUtils:function(){return _h},DecrementStencilOp:function(){return zm},DecrementWrapStencilOp:function(){return km},DefaultLoadingManager:function(){return lu},DepthFormat:function(){return $n},DepthStencilFormat:function(){return cs},DepthTexture:function(){return Td},DirectionalLight:function(){return uu},DirectionalLightHelper:function(){return wx},DiscreteInterpolant:function(){return Yd},DisplayP3ColorSpace:function(){return Yu},DodecahedronGeometry:function(){return gl},DoubleSide:function(){return vn},DstAlphaFactor:function(){return Au},DstColorFactor:function(){return Cu},DynamicCopyUsage:function(){return Jm},DynamicDrawUsage:function(){return ua},DynamicReadUsage:function(){return on},EdgesGeometry:function(){return $o},EllipseCurve:function(){return ur},EqualCompare:function(){return mf},EqualDepth:function(){return Uu},EqualStencilFunc:function(){return Uc},EquirectangularReflectionMapping:function(){return tr},EquirectangularRefractionMapping:function(){return Rr},Euler:function(){return di},EventDispatcher:function(){return Fr},ExtrudeGeometry:function(){return mr},FileLoader:function(){return Mr},Float16BufferAttribute:function(){return Ts},Float32BufferAttribute:function(){return Qe},Float64BufferAttribute:function(){return Wn},FloatType:function(){return Oi},Fog:function(){return zh},FogExp2:function(){return nl},FramebufferTexture:function(){return hl},FrontSide:function(){return nn},Frustum:function(){return wh},GLBufferAttribute:function(){return fx},GLSL1:function(){return $m},GLSL3:function(){return Ju},GreaterCompare:function(){return oh},GreaterDepth:function(){return ja},GreaterEqualCompare:function(){return ir},GreaterEqualDepth:function(){return Nu},GreaterEqualStencilFunc:function(){return Ym},GreaterStencilFunc:function(){return Xm},GridHelper:function(){return Ex},Group:function(){return La},HalfFloatType:function(){return ia},HemisphereLight:function(){return tm},HemisphereLightHelper:function(){return bx},HemisphereLightProbe:function(){return rx},IcosahedronGeometry:function(){return wl},ImageBitmapLoader:function(){return nx},ImageLoader:function(){return Ul},ImageUtils:function(){return Vi},IncrementStencilOp:function(){return Bm},IncrementWrapStencilOp:function(){return Gm},InstancedBufferAttribute:function(){return Bs},InstancedBufferGeometry:function(){return lm},InstancedInterleavedBuffer:function(){return sf},InstancedMesh:function(){return Tp},Int16BufferAttribute:function(){return vh},Int32BufferAttribute:function(){return rg},Int8BufferAttribute:function(){return xh},IntType:function(){return Fi},InterleavedBuffer:function(){return Yr},InterleavedBufferAttribute:function(){return Us},Interpolant:function(){return tc},InterpolateDiscrete:function(){return Ur},InterpolateLinear:function(){return us},InterpolateSmooth:function(){return io},InvertStencilOp:function(){return Vm},KeepStencilOp:function(){return ah},KeyframeTrack:function(){return Pi},LOD:function(){return sl},LatheGeometry:function(){return Jo},Layers:function(){return Vr},LessCompare:function(){return pf},LessDepth:function(){return Du},LessEqualCompare:function(){return gf},LessEqualDepth:function(){return lc},LessEqualStencilFunc:function(){return Wm},LessStencilFunc:function(){return uf},Light:function(){return es},LightProbe:function(){return du},Line:function(){return $r},Line3:function(){return xx},LineBasicMaterial:function(){return qn},LineCurve:function(){return Gt},LineCurve3:function(){return fl},LineDashedMaterial:function(){return ru},LineLoop:function(){return Zh},LineSegments:function(){return wi},LinearEncoding:function(){return sh},LinearFilter:function(){return an},LinearInterpolant:function(){return ou},LinearMipMapLinearFilter:function(){return cf},LinearMipMapNearestFilter:function(){return Nm},LinearMipmapLinearFilter:function(){return Gn},LinearMipmapNearestFilter:function(){return Lr},LinearSRGBColorSpace:function(){return Gi},LinearToneMapping:function(){return Bu},Loader:function(){return ri},LoaderUtils:function(){return $d},LoadingManager:function(){return ic},LoopOnce:function(){return Pc},LoopPingPong:function(){return hs},LoopRepeat:function(){return ls},LuminanceAlphaFormat:function(){return Dr},LuminanceFormat:function(){return Hu},MOUSE:function(){return Gl},Material:function(){return un},MaterialLoader:function(){return fu},MathUtils:function(){return hh},Matrix3:function(){return dt},Matrix4:function(){return gt},MaxEquation:function(){return Yl},Mesh:function(){return An},MeshBasicMaterial:function(){return Hn},MeshDepthMaterial:function(){return Fo},MeshDistanceMaterial:function(){return Ca},MeshLambertMaterial:function(){return Qr},MeshMatcapMaterial:function(){return Xd},MeshNormalMaterial:function(){return Yp},MeshPhongMaterial:function(){return Xp},MeshPhysicalMaterial:function(){return ec},MeshStandardMaterial:function(){return Wd},MeshToonMaterial:function(){return qp},MinEquation:function(){return ql},MirroredRepeatWrapping:function(){return os},MixOperation:function(){return Di},MultiplyBlending:function(){return wr},MultiplyOperation:function(){return eo},NearestFilter:function(){return sn},NearestMipMapLinearFilter:function(){return ku},NearestMipMapNearestFilter:function(){return Um},NearestMipmapLinearFilter:function(){return kt},NearestMipmapNearestFilter:function(){return na},NeverCompare:function(){return ff},NeverDepth:function(){return Iu},NeverStencilFunc:function(){return Hm},NoBlending:function(){return Ii},NoColorSpace:function(){return ms},NoToneMapping:function(){return er},NormalAnimationBlendMode:function(){return Bi},NormalBlending:function(){return Tr},NotEqualCompare:function(){return Nc},NotEqualDepth:function(){return Fu},NotEqualStencilFunc:function(){return qm},NumberKeyframeTrack:function(){return $s},Object3D:function(){return It},ObjectLoader:function(){return Lt},ObjectSpaceNormalMap:function(){return Dc},OctahedronGeometry:function(){return gr},OneFactor:function(){return wu},OneMinusDstAlphaFactor:function(){return Ru},OneMinusDstColorFactor:function(){return Lu},OneMinusSrcAlphaFactor:function(){return Kl},OneMinusSrcColorFactor:function(){return Jl},OrthographicCamera:function(){return Kc},PCFShadowMap:function(){return Vl},PCFSoftShadowMap:function(){return ea},PMREMGenerator:function(){return pd},Path:function(){return pl},PerspectiveCamera:function(){return Rn},Plane:function(){return Ls},PlaneGeometry:function(){return Zc},PlaneHelper:function(){return u},PointLight:function(){return hu},PointLightHelper:function(){return Mx},Points:function(){return Vs},PointsMaterial:function(){return Jh},PolarGridHelper:function(){return Tx},PolyhedronGeometry:function(){return Cn},PositionalAudio:function(){return _m},PropertyBinding:function(){return Pt},PropertyMixer:function(){return xm},QuadraticBezierCurve:function(){return jh},QuadraticBezierCurve3:function(){return qo},Quaternion:function(){return ei},QuaternionKeyframeTrack:function(){return Va},QuaternionLinearInterpolant:function(){return cu},RED_GREEN_RGTC2_Format:function(){return oa},RED_RGTC1_Format:function(){return qu},REVISION:function(){return Ka},RGBADepthPacking:function(){return Nr},RGBAFormat:function(){return Jn},RGBAIntegerFormat:function(){return to},RGBA_ASTC_10x10_Format:function(){return Ac},RGBA_ASTC_10x5_Format:function(){return Ec},RGBA_ASTC_10x6_Format:function(){return Tc},RGBA_ASTC_10x8_Format:function(){return wc},RGBA_ASTC_12x10_Format:function(){return Rc},RGBA_ASTC_12x12_Format:function(){return Cc},RGBA_ASTC_4x4_Format:function(){return gc},RGBA_ASTC_5x4_Format:function(){return _c},RGBA_ASTC_5x5_Format:function(){return xc},RGBA_ASTC_6x5_Format:function(){return yc},RGBA_ASTC_6x6_Format:function(){return vc},RGBA_ASTC_8x5_Format:function(){return Mc},RGBA_ASTC_8x6_Format:function(){return Sc},RGBA_ASTC_8x8_Format:function(){return bc},RGBA_BPTC_Format:function(){return Lc},RGBA_ETC2_EAC_Format:function(){return mc},RGBA_PVRTC_2BPPV1_Format:function(){return nh},RGBA_PVRTC_4BPPV1_Format:function(){return fc},RGBA_S3TC_DXT1_Format:function(){return sa},RGBA_S3TC_DXT3_Format:function(){return aa},RGBA_S3TC_DXT5_Format:function(){return no},RGB_ETC1_Format:function(){return ih},RGB_ETC2_Format:function(){return pc},RGB_PVRTC_2BPPV1_Format:function(){return dc},RGB_PVRTC_4BPPV1_Format:function(){return uc},RGB_S3TC_DXT1_Format:function(){return ra},RGFormat:function(){return Xu},RGIntegerFormat:function(){return th},RawShaderMaterial:function(){return Wp},Ray:function(){return po},Raycaster:function(){return px},RectAreaLight:function(){return om},RedFormat:function(){return Wu},RedIntegerFormat:function(){return eh},ReinhardToneMapping:function(){return zu},RenderTarget:function(){return zr},RepeatWrapping:function(){return Cr},ReplaceStencilOp:function(){return Om},ReverseSubtractEquation:function(){return Xl},RingGeometry:function(){return _r},SIGNED_RED_GREEN_RGTC2_Format:function(){return ca},SIGNED_RED_RGTC1_Format:function(){return rh},SRGBColorSpace:function(){return _t},Scene:function(){return il},ShaderChunk:function(){return xt},ShaderLib:function(){return Yi},ShaderMaterial:function(){return cr},ShadowMaterial:function(){return vr},Shape:function(){return Ri},ShapeGeometry:function(){return Ys},ShapePath:function(){return A},ShapeUtils:function(){return Ci},ShortType:function(){return Vu},Skeleton:function(){return Vo},SkeletonHelper:function(){return vx},SkinnedMesh:function(){return ol},Source:function(){return Br},Sphere:function(){return Dn},SphereGeometry:function(){return Rl},Spherical:function(){return mx},SphericalHarmonics3:function(){return cm},SplineCurve:function(){return Yo},SpotLight:function(){return rm},SpotLightHelper:function(){return yx},Sprite:function(){return Rd},SpriteMaterial:function(){return Oo},SrcAlphaFactor:function(){return $l},SrcAlphaSaturateFactor:function(){return Pu},SrcColorFactor:function(){return Zl},StaticCopyUsage:function(){return Zm},StaticDrawUsage:function(){return ro},StaticReadUsage:function(){return oi},StereoCamera:function(){return ax},StreamCopyUsage:function(){return Oc},StreamDrawUsage:function(){return Fc},StreamReadUsage:function(){return Zu},StringKeyframeTrack:function(){return Ks},SubtractEquation:function(){return Wl},SubtractiveBlending:function(){return Hl},TOUCH:function(){return kl},TangentSpaceNormalMap:function(){return ps},TetrahedronGeometry:function(){return iu},Texture:function(){return zt},TextureLoader:function(){return Xa},TorusGeometry:function(){return xr},TorusKnotGeometry:function(){return jo},Triangle:function(){return pn},TriangleFanDrawMode:function(){return ds},TriangleStripDrawMode:function(){return hf},TrianglesDrawMode:function(){return lf},TubeGeometry:function(){return Cl},TwoPassDoubleSide:function(){return ta},UVMapping:function(){return Ui},Uint16BufferAttribute:function(){return gn},Uint32BufferAttribute:function(){return yo},Uint8BufferAttribute:function(){return yh},Uint8ClampedBufferAttribute:function(){return od},Uniform:function(){return rf},UniformsGroup:function(){return xu},UniformsLib:function(){return He},UniformsUtils:function(){return Ef},UnsignedByteType:function(){return nr},UnsignedInt248Type:function(){return Ir},UnsignedIntType:function(){return Yn},UnsignedShort4444Type:function(){return Pr},UnsignedShort5551Type:function(){return jl},UnsignedShortType:function(){return Ni},VSMShadowMap:function(){return Ln},Vector2:function(){return ue},Vector3:function(){return J},Vector4:function(){return bt},VectorKeyframeTrack:function(){return Il},VideoTexture:function(){return Kr},WebGL1Renderer:function(){return Pa},WebGL3DRenderTarget:function(){return ma},WebGLArrayRenderTarget:function(){return dh},WebGLCoordinateSystem:function(){return rr},WebGLCubeRenderTarget:function(){return wf},WebGLMultipleRenderTargets:function(){return td},WebGLRenderTarget:function(){return wn},WebGLRenderer:function(){return Bh},WebGLUtils:function(){return el},WebGPUCoordinateSystem:function(){return Bc},WireframeGeometry:function(){return ii},WrapAroundEnding:function(){return Ic},ZeroCurvatureEnding:function(){return la},ZeroFactor:function(){return Tu},ZeroSlopeEnding:function(){return ha},ZeroStencilOp:function(){return Fm},_SRGBAFormat:function(){return ch},sRGBEncoding:function(){return fs}});const Ka="155",Gl={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},kl={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qa=0,ss=1,ji=2,ac=3,bu=0,Vl=1,ea=2,Ln=3,nn=0,Wt=1,vn=2,ta=2,Ii=0,Tr=1,oc=2,Hl=3,wr=4,Eu=5,as=100,Wl=101,Xl=102,ql=103,Yl=104,Tu=200,wu=201,Zl=202,Jl=203,$l=204,Kl=205,Au=206,Ru=207,Cu=208,Lu=209,Pu=210,Iu=0,cc=1,Du=2,lc=3,Uu=4,Nu=5,ja=6,Fu=7,eo=0,Di=1,Ou=2,er=0,Bu=1,zu=2,Gu=3,hc=4,Ar=5,Ui=300,ai=301,yi=302,tr=303,Rr=304,rn=306,Cr=1e3,wt=1001,os=1002,sn=1003,na=1004,Um=1004,kt=1005,ku=1005,an=1006,Lr=1007,Nm=1007,Gn=1008,cf=1008,nr=1009,Ql=1010,Vu=1011,Ni=1012,Fi=1013,Yn=1014,Oi=1015,ia=1016,Pr=1017,jl=1018,Ir=1020,Zn=1021,Jn=1023,Hu=1024,Dr=1025,$n=1026,cs=1027,Wu=1028,eh=1029,Xu=1030,th=1031,to=1033,ra=33776,sa=33777,aa=33778,no=33779,uc=35840,dc=35841,fc=35842,nh=35843,ih=36196,pc=37492,mc=37496,gc=37808,_c=37809,xc=37810,yc=37811,vc=37812,Mc=37813,Sc=37814,bc=37815,Ec=37816,Tc=37817,wc=37818,Ac=37819,Rc=37820,Cc=37821,Lc=36492,qu=36283,rh=36284,oa=36285,ca=36286,Pc=2200,ls=2201,hs=2202,Ur=2300,us=2301,io=2302,la=2400,ha=2401,Ic=2402,Bi=2500,Vt=2501,lf=0,hf=1,ds=2,sh=3e3,fs=3001,zi=3200,Nr=3201,ps=0,Dc=1,ms="",_t="srgb",Gi="srgb-linear",Yu="display-p3",Fm=0,ah=7680,Om=7681,Bm=7682,zm=7683,Gm=34055,km=34056,Vm=5386,Hm=512,uf=513,Uc=514,Wm=515,Xm=516,qm=517,Ym=518,df=519,ff=512,pf=513,mf=514,gf=515,oh=516,Nc=517,ir=518,En=519,ro=35044,ua=35048,Fc=35040,oi=35045,on=35049,Zu=35041,Zm=35046,Jm=35050,Oc=35042,$m="100",Ju="300 es",ch=1035,rr=2e3,Bc=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const c=s.indexOf(n);c!==-1&&s.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let c=0,h=s.length;c<h;c++)s[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _f=1234567;const da=Math.PI/180,so=180/Math.PI;function kn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Xt(o,e,n){return Math.max(e,Math.min(n,o))}function ao(o,e){return(o%e+e)%e}function Km(o,e,n,r,s){return r+(o-e)*(s-r)/(n-e)}function Or(o,e,n){return o!==e?(n-o)/(e-o):0}function Dt(o,e,n){return(1-n)*o+n*e}function Qm(o,e,n,r){return Dt(o,e,1-Math.exp(-n*r))}function Ue(o,e=1){return e-Math.abs(ao(o,e*2)-e)}function Kn(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*(3-2*o))}function xf(o,e,n){return o<=e?0:o>=n?1:(o=(o-e)/(n-e),o*o*o*(o*(o*6-15)+10))}function jm(o,e){return o+Math.floor(Math.random()*(e-o+1))}function oo(o,e){return o+Math.random()*(e-o)}function zc(o){return o*(.5-Math.random())}function fa(o){o!==void 0&&(_f=o);let e=_f+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lh(o){return o*da}function $u(o){return o*so}function Qn(o){return(o&o-1)===0&&o!==0}function Ku(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Qt(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ki(o,e,n,r,s){const c=Math.cos,h=Math.sin,d=c(n/2),p=h(n/2),_=c((e+r)/2),y=h((e+r)/2),S=c((e-r)/2),x=h((e-r)/2),b=c((r-e)/2),T=h((r-e)/2);switch(s){case"XYX":o.set(d*y,p*S,p*x,d*_);break;case"YZY":o.set(p*x,d*y,p*S,d*_);break;case"ZXZ":o.set(p*S,p*x,d*y,d*_);break;case"XZX":o.set(d*y,p*T,p*b,d*_);break;case"YXY":o.set(p*b,d*y,p*T,d*_);break;case"ZYZ":o.set(p*T,p*b,d*y,d*_);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Tn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function mt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const hh={DEG2RAD:da,RAD2DEG:so,generateUUID:kn,clamp:Xt,euclideanModulo:ao,mapLinear:Km,inverseLerp:Or,lerp:Dt,damp:Qm,pingpong:Ue,smoothstep:Kn,smootherstep:xf,randInt:jm,randFloat:oo,randFloatSpread:zc,seededRandom:fa,degToRad:lh,radToDeg:$u,isPowerOfTwo:Qn,ceilPowerOfTwo:Ku,floorPowerOfTwo:Qt,setQuaternionFromProperEuler:ki,normalize:mt,denormalize:Tn};class ue{constructor(e=0,n=0){ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,s=e.elements;return this.x=s[0]*n+s[3]*r+s[6],this.y=s[1]*n+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),s=Math.sin(n),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*s+e.x,this.y=c*s+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class dt{constructor(e,n,r,s,c,h,d,p,_){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,s,c,h,d,p,_)}set(e,n,r,s,c,h,d,p,_){const y=this.elements;return y[0]=e,y[1]=s,y[2]=d,y[3]=n,y[4]=c,y[5]=p,y[6]=r,y[7]=h,y[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,s=n.elements,c=this.elements,h=r[0],d=r[3],p=r[6],_=r[1],y=r[4],S=r[7],x=r[2],b=r[5],T=r[8],C=s[0],R=s[3],w=s[6],P=s[1],L=s[4],I=s[7],O=s[2],F=s[5],N=s[8];return c[0]=h*C+d*P+p*O,c[3]=h*R+d*L+p*F,c[6]=h*w+d*I+p*N,c[1]=_*C+y*P+S*O,c[4]=_*R+y*L+S*F,c[7]=_*w+y*I+S*N,c[2]=x*C+b*P+T*O,c[5]=x*R+b*L+T*F,c[8]=x*w+b*I+T*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],s=e[2],c=e[3],h=e[4],d=e[5],p=e[6],_=e[7],y=e[8];return n*h*y-n*d*_-r*c*y+r*d*p+s*c*_-s*h*p}invert(){const e=this.elements,n=e[0],r=e[1],s=e[2],c=e[3],h=e[4],d=e[5],p=e[6],_=e[7],y=e[8],S=y*h-d*_,x=d*p-y*c,b=_*c-h*p,T=n*S+r*x+s*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(s*_-y*r)*C,e[2]=(d*r-s*h)*C,e[3]=x*C,e[4]=(y*n-s*p)*C,e[5]=(s*c-d*n)*C,e[6]=b*C,e[7]=(r*p-_*n)*C,e[8]=(h*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,s,c,h,d){const p=Math.cos(c),_=Math.sin(c);return this.set(r*p,r*_,-r*(p*h+_*d)+h+e,-s*_,s*p,-s*(-_*h+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Gc.makeScale(e,n)),this}rotate(e){return this.premultiply(Gc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Gc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let s=0;s<9;s++)if(n[s]!==r[s])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new dt;function gs(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}const Qu={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function co(o,e){return new Qu[o](e)}function qt(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}const Nt={};function In(o){o in Nt||(Nt[o]=!0,console.warn(o))}function sr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ju(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const uh=new dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),eg=new dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function tg(o){return o.convertSRGBToLinear().applyMatrix3(eg)}function jn(o){return o.applyMatrix3(uh).convertLinearToSRGB()}const Z={[Gi]:o=>o,[_t]:o=>o.convertSRGBToLinear(),[Yu]:tg},ed={[Gi]:o=>o,[_t]:o=>o.convertLinearToSRGB(),[Yu]:jn},ci={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(o){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!o},get workingColorSpace(){return Gi},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=Z[e],s=ed[n];if(r===void 0||s===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return s(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}};let vi;class Vi{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vi===void 0&&(vi=qt("canvas")),vi.width=e.width,vi.height=e.height;const r=vi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=vi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const n=qt("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),c=s.data;for(let h=0;h<c.length;h++)c[h]=sr(c[h]/255)*255;return r.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(sr(n[r]/255)*255):n[r]=sr(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pa=0;class Br{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pa++}),this.uuid=kn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let c;if(Array.isArray(s)){c=[];for(let h=0,d=s.length;h<d;h++)s[h].isDataTexture?c.push(_s(s[h].image)):c.push(_s(s[h]))}else c=_s(s);r.url=c}return n||(e.images[this.uuid]=r),r}}function _s(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?Vi.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lo=0;class zt extends Fr{constructor(e=zt.DEFAULT_IMAGE,n=zt.DEFAULT_MAPPING,r=wt,s=wt,c=an,h=Gn,d=Jn,p=nr,_=zt.DEFAULT_ANISOTROPY,y=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lo++}),this.uuid=kn(),this.name="",this.source=new Br(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=c,this.minFilter=h,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=p,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof y=="string"?this.colorSpace=y:(In("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=y===fs?_t:ms),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ui)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cr:e.x=e.x-Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cr:e.y=e.y-Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return In("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?fs:sh}set encoding(e){In("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===fs?_t:ms}}zt.DEFAULT_IMAGE=null,zt.DEFAULT_MAPPING=Ui,zt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,r=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,s){return this.x=e,this.y=n,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,s=this.z,c=this.w,h=e.elements;return this.x=h[0]*n+h[4]*r+h[8]*s+h[12]*c,this.y=h[1]*n+h[5]*r+h[9]*s+h[13]*c,this.z=h[2]*n+h[6]*r+h[10]*s+h[14]*c,this.w=h[3]*n+h[7]*r+h[11]*s+h[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,s,c;const p=e.elements,_=p[0],y=p[4],S=p[8],x=p[1],b=p[5],T=p[9],C=p[2],R=p[6],w=p[10];if(Math.abs(y-x)<.01&&Math.abs(S-C)<.01&&Math.abs(T-R)<.01){if(Math.abs(y+x)<.1&&Math.abs(S+C)<.1&&Math.abs(T+R)<.1&&Math.abs(_+b+w-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(_+1)/2,I=(b+1)/2,O=(w+1)/2,F=(y+x)/4,N=(S+C)/4,k=(T+R)/4;return L>I&&L>O?L<.01?(r=0,s=.707106781,c=.707106781):(r=Math.sqrt(L),s=F/r,c=N/r):I>O?I<.01?(r=.707106781,s=0,c=.707106781):(s=Math.sqrt(I),r=F/s,c=k/s):O<.01?(r=.707106781,s=.707106781,c=0):(c=Math.sqrt(O),r=N/c,s=k/c),this.set(r,s,c,n),this}let P=Math.sqrt((R-T)*(R-T)+(S-C)*(S-C)+(x-y)*(x-y));return Math.abs(P)<.001&&(P=1),this.x=(R-T)/P,this.y=(S-C)/P,this.z=(x-y)/P,this.w=Math.acos((_+b+w-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zr extends Fr{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const s={width:e,height:n,depth:1};r.encoding!==void 0&&(In("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===fs?_t:ms),this.texture=new zt(s,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:an,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,n,r=1){(this.width!==e||this.height!==n||this.depth!==r)&&(this.width=e,this.height=n,this.depth=r,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Br(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wn extends zr{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class xs extends zt{constructor(e=null,n=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dh extends wn{constructor(e=1,n=1,r=1){super(e,n),this.isWebGLArrayRenderTarget=!0,this.depth=r,this.texture=new xs(null,e,n,r),this.texture.isRenderTargetTexture=!0}}class ho extends zt{constructor(e=null,n=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma extends wn{constructor(e=1,n=1,r=1){super(e,n),this.isWebGL3DRenderTarget=!0,this.depth=r,this.texture=new ho(null,e,n,r),this.texture.isRenderTargetTexture=!0}}class td extends wn{constructor(e=1,n=1,r=1,s={}){super(e,n,s),this.isWebGLMultipleRenderTargets=!0;const c=this.texture;this.texture=[];for(let h=0;h<r;h++)this.texture[h]=c.clone(),this.texture[h].isRenderTargetTexture=!0}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let s=0,c=this.texture.length;s<c;s++)this.texture[s].image.width=e,this.texture[s].image.height=n,this.texture[s].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let n=0,r=e.texture.length;n<r;n++)this.texture[n]=e.texture[n].clone(),this.texture[n].isRenderTargetTexture=!0;return this}}class ei{constructor(e=0,n=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=s}static slerpFlat(e,n,r,s,c,h,d){let p=r[s+0],_=r[s+1],y=r[s+2],S=r[s+3];const x=c[h+0],b=c[h+1],T=c[h+2],C=c[h+3];if(d===0){e[n+0]=p,e[n+1]=_,e[n+2]=y,e[n+3]=S;return}if(d===1){e[n+0]=x,e[n+1]=b,e[n+2]=T,e[n+3]=C;return}if(S!==C||p!==x||_!==b||y!==T){let R=1-d;const w=p*x+_*b+y*T+S*C,P=w>=0?1:-1,L=1-w*w;if(L>Number.EPSILON){const O=Math.sqrt(L),F=Math.atan2(O,w*P);R=Math.sin(R*F)/O,d=Math.sin(d*F)/O}const I=d*P;if(p=p*R+x*I,_=_*R+b*I,y=y*R+T*I,S=S*R+C*I,R===1-d){const O=1/Math.sqrt(p*p+_*_+y*y+S*S);p*=O,_*=O,y*=O,S*=O}}e[n]=p,e[n+1]=_,e[n+2]=y,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,s,c,h){const d=r[s],p=r[s+1],_=r[s+2],y=r[s+3],S=c[h],x=c[h+1],b=c[h+2],T=c[h+3];return e[n]=d*T+y*S+p*b-_*x,e[n+1]=p*T+y*x+_*S-d*b,e[n+2]=_*T+y*b+d*x-p*S,e[n+3]=y*T-d*S-p*x-_*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,s){return this._x=e,this._y=n,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const r=e._x,s=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,_=d(r/2),y=d(s/2),S=d(c/2),x=p(r/2),b=p(s/2),T=p(c/2);switch(h){case"XYZ":this._x=x*y*S+_*b*T,this._y=_*b*S-x*y*T,this._z=_*y*T+x*b*S,this._w=_*y*S-x*b*T;break;case"YXZ":this._x=x*y*S+_*b*T,this._y=_*b*S-x*y*T,this._z=_*y*T-x*b*S,this._w=_*y*S+x*b*T;break;case"ZXY":this._x=x*y*S-_*b*T,this._y=_*b*S+x*y*T,this._z=_*y*T+x*b*S,this._w=_*y*S-x*b*T;break;case"ZYX":this._x=x*y*S-_*b*T,this._y=_*b*S+x*y*T,this._z=_*y*T-x*b*S,this._w=_*y*S+x*b*T;break;case"YZX":this._x=x*y*S+_*b*T,this._y=_*b*S+x*y*T,this._z=_*y*T-x*b*S,this._w=_*y*S-x*b*T;break;case"XZY":this._x=x*y*S-_*b*T,this._y=_*b*S-x*y*T,this._z=_*y*T+x*b*S,this._w=_*y*S+x*b*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],s=n[4],c=n[8],h=n[1],d=n[5],p=n[9],_=n[2],y=n[6],S=n[10],x=r+d+S;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(y-p)*b,this._y=(c-_)*b,this._z=(h-s)*b}else if(r>d&&r>S){const b=2*Math.sqrt(1+r-d-S);this._w=(y-p)/b,this._x=.25*b,this._y=(s+h)/b,this._z=(c+_)/b}else if(d>S){const b=2*Math.sqrt(1+d-r-S);this._w=(c-_)/b,this._x=(s+h)/b,this._y=.25*b,this._z=(p+y)/b}else{const b=2*Math.sqrt(1+S-r-d);this._w=(h-s)/b,this._x=(c+_)/b,this._y=(p+y)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,n/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,s=e._y,c=e._z,h=e._w,d=n._x,p=n._y,_=n._z,y=n._w;return this._x=r*y+h*d+s*_-c*p,this._y=s*y+h*p+c*d-r*_,this._z=c*y+h*_+r*p-s*d,this._w=h*y-r*d-s*p-c*_,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,s=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+s*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=s,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const b=1-n;return this._w=b*h+n*this._w,this._x=b*r+n*this._x,this._y=b*s+n*this._y,this._z=b*c+n*this._z,this.normalize(),this._onChangeCallback(),this}const _=Math.sqrt(p),y=Math.atan2(_,d),S=Math.sin((1-n)*y)/_,x=Math.sin(n*y)/_;return this._w=h*S+this._w*x,this._x=r*S+this._x*x,this._y=s*S+this._y*x,this._z=c*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=Math.random(),n=Math.sqrt(1-e),r=Math.sqrt(e),s=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(n*Math.cos(s),r*Math.sin(c),r*Math.cos(c),n*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ys.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ys.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,s=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*s,this.y=c[1]*n+c[4]*r+c[7]*s,this.z=c[2]*n+c[5]*r+c[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,s=this.z,c=e.elements,h=1/(c[3]*n+c[7]*r+c[11]*s+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*s+c[12])*h,this.y=(c[1]*n+c[5]*r+c[9]*s+c[13])*h,this.z=(c[2]*n+c[6]*r+c[10]*s+c[14])*h,this}applyQuaternion(e){const n=this.x,r=this.y,s=this.z,c=e.x,h=e.y,d=e.z,p=e.w,_=p*n+h*s-d*r,y=p*r+d*n-c*s,S=p*s+c*r-h*n,x=-c*n-h*r-d*s;return this.x=_*p+x*-c+y*-d-S*-h,this.y=y*p+x*-h+S*-c-_*-d,this.z=S*p+x*-d+_*-h-y*-c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,s=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*s,this.y=c[1]*n+c[5]*r+c[9]*s,this.z=c[2]*n+c[6]*r+c[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,s=e.y,c=e.z,h=n.x,d=n.y,p=n.z;return this.x=s*p-c*d,this.y=c*h-r*p,this.z=r*d-s*h,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kc.copy(this).projectOnVector(e),this.sub(kc)}reflect(e){return this.sub(kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Xt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return n*n+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const s=Math.sin(n)*e;return this.x=s*Math.sin(r),this.y=Math.cos(n)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,r=Math.sqrt(1-Im(e,2));return this.x=r*Math.cos(n),this.y=r*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kc=new J,ys=new ei;class Mn{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),li.copy(e.boundingBox),li.applyMatrix4(e.matrixWorld),this.union(li);else{const s=e.geometry;if(s!==void 0)if(n&&s.attributes!==void 0&&s.attributes.position!==void 0){const c=s.attributes.position;for(let h=0,d=c.count;h<d;h++)Mi.fromBufferAttribute(c,h).applyMatrix4(e.matrixWorld),this.expandByPoint(Mi)}else s.boundingBox===null&&s.computeBoundingBox(),li.copy(s.boundingBox),li.applyMatrix4(e.matrixWorld),this.union(li)}const r=e.children;for(let s=0,c=r.length;s<c;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vn),fh.subVectors(this.max,Vn),vs.subVectors(e.a,Vn),Gr.subVectors(e.b,Vn),Ms.subVectors(e.c,Vn),Si.subVectors(Gr,vs),ot.subVectors(Ms,Gr),bi.subVectors(vs,Ms);let n=[0,-Si.z,Si.y,0,-ot.z,ot.y,0,-bi.z,bi.y,Si.z,0,-Si.x,ot.z,0,-ot.x,bi.z,0,-bi.x,-Si.y,Si.x,0,-ot.y,ot.x,0,-bi.y,bi.x,0];return!uo(n,vs,Gr,Ms,fh)||(n=[1,0,0,0,1,0,0,0,1],!uo(n,vs,Gr,Ms,fh))?!1:(ph.crossVectors(Si,ot),n=[ph.x,ph.y,ph.z],uo(n,vs,Gr,Ms,fh))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hi=[new J,new J,new J,new J,new J,new J,new J,new J],Mi=new J,li=new Mn,vs=new J,Gr=new J,Ms=new J,Si=new J,ot=new J,bi=new J,Vn=new J,fh=new J,ph=new J,ti=new J;function uo(o,e,n,r,s){for(let c=0,h=o.length-3;c<=h;c+=3){ti.fromArray(o,c);const d=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),p=e.dot(ti),_=n.dot(ti),y=r.dot(ti);if(Math.max(-Math.max(p,_,y),Math.min(p,_,y))>d)return!1}return!0}const hi=new Mn,fo=new J,mh=new J;class Dn{constructor(e=new J,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):hi.setFromPoints(e).getCenter(r);let s=0;for(let c=0,h=e.length;c<h;c++)s=Math.max(s,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fo.subVectors(e,this.center);const n=fo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),s=(r-this.radius)*.5;this.center.addScaledVector(fo,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fo.copy(e.center).add(mh)),this.expandByPoint(fo.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new J,nd=new J,Vc=new J,ui=new J,Wi=new J,ga=new J,_a=new J;class po{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,r,s){nd.copy(e).add(n).multiplyScalar(.5),Vc.copy(n).sub(e).normalize(),ui.copy(this.origin).sub(nd);const c=e.distanceTo(n)*.5,h=-this.direction.dot(Vc),d=ui.dot(this.direction),p=-ui.dot(Vc),_=ui.lengthSq(),y=Math.abs(1-h*h);let S,x,b,T;if(y>0)if(S=h*p-d,x=h*d-p,T=c*y,S>=0)if(x>=-T)if(x<=T){const C=1/y;S*=C,x*=C,b=S*(S+h*x+2*d)+x*(h*S+x+2*p)+_}else x=c,S=Math.max(0,-(h*x+d)),b=-S*S+x*(x+2*p)+_;else x=-c,S=Math.max(0,-(h*x+d)),b=-S*S+x*(x+2*p)+_;else x<=-T?(S=Math.max(0,-(-h*c+d)),x=S>0?-c:Math.min(Math.max(-c,-p),c),b=-S*S+x*(x+2*p)+_):x<=T?(S=0,x=Math.min(Math.max(-c,-p),c),b=x*(x+2*p)+_):(S=Math.max(0,-(h*c+d)),x=S>0?c:Math.min(Math.max(-c,-p),c),b=-S*S+x*(x+2*p)+_);else x=h>0?-c:c,S=Math.max(0,-(h*x+d)),b=-S*S+x*(x+2*p)+_;return r&&r.copy(this.origin).addScaledVector(this.direction,S),s&&s.copy(nd).addScaledVector(Vc,x),b}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const r=Ei.dot(this.direction),s=Ei.dot(Ei)-r*r,c=e.radius*e.radius;if(s>c)return null;const h=Math.sqrt(c-s),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,s,c,h,d,p;const _=1/this.direction.x,y=1/this.direction.y,S=1/this.direction.z,x=this.origin;return _>=0?(r=(e.min.x-x.x)*_,s=(e.max.x-x.x)*_):(r=(e.max.x-x.x)*_,s=(e.min.x-x.x)*_),y>=0?(c=(e.min.y-x.y)*y,h=(e.max.y-x.y)*y):(c=(e.max.y-x.y)*y,h=(e.min.y-x.y)*y),r>h||c>s||((c>r||isNaN(r))&&(r=c),(h<s||isNaN(s))&&(s=h),S>=0?(d=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||d>s)||((d>r||r!==r)&&(r=d),(p<s||s!==s)&&(s=p),s<0)?null:this.at(r>=0?r:s,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,r,s,c){Wi.subVectors(n,e),ga.subVectors(r,e),_a.crossVectors(Wi,ga);let h=this.direction.dot(_a),d;if(h>0){if(s)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ui.subVectors(this.origin,e);const p=d*this.direction.dot(ga.crossVectors(ui,ga));if(p<0)return null;const _=d*this.direction.dot(Wi.cross(ui));if(_<0||p+_>h)return null;const y=-d*ui.dot(_a);return y<0?null:this.at(y/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,n,r,s,c,h,d,p,_,y,S,x,b,T,C,R){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,s,c,h,d,p,_,y,S,x,b,T,C,R)}set(e,n,r,s,c,h,d,p,_,y,S,x,b,T,C,R){const w=this.elements;return w[0]=e,w[4]=n,w[8]=r,w[12]=s,w[1]=c,w[5]=h,w[9]=d,w[13]=p,w[2]=_,w[6]=y,w[10]=S,w[14]=x,w[3]=b,w[7]=T,w[11]=C,w[15]=R,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,s=1/xa.setFromMatrixColumn(e,0).length(),c=1/xa.setFromMatrixColumn(e,1).length(),h=1/xa.setFromMatrixColumn(e,2).length();return n[0]=r[0]*s,n[1]=r[1]*s,n[2]=r[2]*s,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*h,n[9]=r[9]*h,n[10]=r[10]*h,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,s=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(s),_=Math.sin(s),y=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=h*y,b=h*S,T=d*y,C=d*S;n[0]=p*y,n[4]=-p*S,n[8]=_,n[1]=b+T*_,n[5]=x-C*_,n[9]=-d*p,n[2]=C-x*_,n[6]=T+b*_,n[10]=h*p}else if(e.order==="YXZ"){const x=p*y,b=p*S,T=_*y,C=_*S;n[0]=x+C*d,n[4]=T*d-b,n[8]=h*_,n[1]=h*S,n[5]=h*y,n[9]=-d,n[2]=b*d-T,n[6]=C+x*d,n[10]=h*p}else if(e.order==="ZXY"){const x=p*y,b=p*S,T=_*y,C=_*S;n[0]=x-C*d,n[4]=-h*S,n[8]=T+b*d,n[1]=b+T*d,n[5]=h*y,n[9]=C-x*d,n[2]=-h*_,n[6]=d,n[10]=h*p}else if(e.order==="ZYX"){const x=h*y,b=h*S,T=d*y,C=d*S;n[0]=p*y,n[4]=T*_-b,n[8]=x*_+C,n[1]=p*S,n[5]=C*_+x,n[9]=b*_-T,n[2]=-_,n[6]=d*p,n[10]=h*p}else if(e.order==="YZX"){const x=h*p,b=h*_,T=d*p,C=d*_;n[0]=p*y,n[4]=C-x*S,n[8]=T*S+b,n[1]=S,n[5]=h*y,n[9]=-d*y,n[2]=-_*y,n[6]=b*S+T,n[10]=x-C*S}else if(e.order==="XZY"){const x=h*p,b=h*_,T=d*p,C=d*_;n[0]=p*y,n[4]=-S,n[8]=_*y,n[1]=x*S+C,n[5]=h*y,n[9]=b*S-T,n[2]=T*S-b,n[6]=d*y,n[10]=C*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,ng)}lookAt(e,n,r){const s=this.elements;return Yt.subVectors(e,n),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),kr.crossVectors(r,Yt),kr.lengthSq()===0&&(Math.abs(r.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),kr.crossVectors(r,Yt)),kr.normalize(),At.crossVectors(Yt,kr),s[0]=kr.x,s[4]=At.x,s[8]=Yt.x,s[1]=kr.y,s[5]=At.y,s[9]=Yt.y,s[2]=kr.z,s[6]=At.z,s[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,s=n.elements,c=this.elements,h=r[0],d=r[4],p=r[8],_=r[12],y=r[1],S=r[5],x=r[9],b=r[13],T=r[2],C=r[6],R=r[10],w=r[14],P=r[3],L=r[7],I=r[11],O=r[15],F=s[0],N=s[4],k=s[8],D=s[12],B=s[1],Q=s[5],ge=s[9],re=s[13],W=s[2],he=s[6],ye=s[10],_e=s[14],ae=s[3],we=s[7],j=s[11],K=s[15];return c[0]=h*F+d*B+p*W+_*ae,c[4]=h*N+d*Q+p*he+_*we,c[8]=h*k+d*ge+p*ye+_*j,c[12]=h*D+d*re+p*_e+_*K,c[1]=y*F+S*B+x*W+b*ae,c[5]=y*N+S*Q+x*he+b*we,c[9]=y*k+S*ge+x*ye+b*j,c[13]=y*D+S*re+x*_e+b*K,c[2]=T*F+C*B+R*W+w*ae,c[6]=T*N+C*Q+R*he+w*we,c[10]=T*k+C*ge+R*ye+w*j,c[14]=T*D+C*re+R*_e+w*K,c[3]=P*F+L*B+I*W+O*ae,c[7]=P*N+L*Q+I*he+O*we,c[11]=P*k+L*ge+I*ye+O*j,c[15]=P*D+L*re+I*_e+O*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],s=e[8],c=e[12],h=e[1],d=e[5],p=e[9],_=e[13],y=e[2],S=e[6],x=e[10],b=e[14],T=e[3],C=e[7],R=e[11],w=e[15];return T*(+c*p*S-s*_*S-c*d*x+r*_*x+s*d*b-r*p*b)+C*(+n*p*b-n*_*x+c*h*x-s*h*b+s*_*y-c*p*y)+R*(+n*_*S-n*d*b-c*h*S+r*h*b+c*d*y-r*_*y)+w*(-s*d*y-n*p*S+n*d*x+s*h*S-r*h*x+r*p*y)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],s=e[2],c=e[3],h=e[4],d=e[5],p=e[6],_=e[7],y=e[8],S=e[9],x=e[10],b=e[11],T=e[12],C=e[13],R=e[14],w=e[15],P=S*R*_-C*x*_+C*p*b-d*R*b-S*p*w+d*x*w,L=T*x*_-y*R*_-T*p*b+h*R*b+y*p*w-h*x*w,I=y*C*_-T*S*_+T*d*b-h*C*b-y*d*w+h*S*w,O=T*S*p-y*C*p-T*d*x+h*C*x+y*d*R-h*S*R,F=n*P+r*L+s*I+c*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/F;return e[0]=P*N,e[1]=(C*x*c-S*R*c-C*s*b+r*R*b+S*s*w-r*x*w)*N,e[2]=(d*R*c-C*p*c+C*s*_-r*R*_-d*s*w+r*p*w)*N,e[3]=(S*p*c-d*x*c-S*s*_+r*x*_+d*s*b-r*p*b)*N,e[4]=L*N,e[5]=(y*R*c-T*x*c+T*s*b-n*R*b-y*s*w+n*x*w)*N,e[6]=(T*p*c-h*R*c-T*s*_+n*R*_+h*s*w-n*p*w)*N,e[7]=(h*x*c-y*p*c+y*s*_-n*x*_-h*s*b+n*p*b)*N,e[8]=I*N,e[9]=(T*S*c-y*C*c-T*r*b+n*C*b+y*r*w-n*S*w)*N,e[10]=(h*C*c-T*d*c+T*r*_-n*C*_-h*r*w+n*d*w)*N,e[11]=(y*d*c-h*S*c-y*r*_+n*S*_+h*r*b-n*d*b)*N,e[12]=O*N,e[13]=(y*C*s-T*S*s+T*r*x-n*C*x-y*r*R+n*S*R)*N,e[14]=(T*d*s-h*C*s-T*r*p+n*C*p+h*r*R-n*d*R)*N,e[15]=(h*S*s-y*d*s+y*r*p-n*S*p-h*r*x+n*d*x)*N,this}scale(e){const n=this.elements,r=e.x,s=e.y,c=e.z;return n[0]*=r,n[4]*=s,n[8]*=c,n[1]*=r,n[5]*=s,n[9]*=c,n[2]*=r,n[6]*=s,n[10]*=c,n[3]*=r,n[7]*=s,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,s))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),s=Math.sin(n),c=1-r,h=e.x,d=e.y,p=e.z,_=c*h,y=c*d;return this.set(_*h+r,_*d-s*p,_*p+s*d,0,_*d+s*p,y*d+r,y*p-s*h,0,_*p-s*d,y*p+s*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,s,c,h){return this.set(1,r,c,0,e,1,h,0,n,s,1,0,0,0,0,1),this}compose(e,n,r){const s=this.elements,c=n._x,h=n._y,d=n._z,p=n._w,_=c+c,y=h+h,S=d+d,x=c*_,b=c*y,T=c*S,C=h*y,R=h*S,w=d*S,P=p*_,L=p*y,I=p*S,O=r.x,F=r.y,N=r.z;return s[0]=(1-(C+w))*O,s[1]=(b+I)*O,s[2]=(T-L)*O,s[3]=0,s[4]=(b-I)*F,s[5]=(1-(x+w))*F,s[6]=(R+P)*F,s[7]=0,s[8]=(T+L)*N,s[9]=(R-P)*N,s[10]=(1-(x+C))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,r){const s=this.elements;let c=xa.set(s[0],s[1],s[2]).length();const h=xa.set(s[4],s[5],s[6]).length(),d=xa.set(s[8],s[9],s[10]).length();this.determinant()<0&&(c=-c),e.x=s[12],e.y=s[13],e.z=s[14],Ti.copy(this);const _=1/c,y=1/h,S=1/d;return Ti.elements[0]*=_,Ti.elements[1]*=_,Ti.elements[2]*=_,Ti.elements[4]*=y,Ti.elements[5]*=y,Ti.elements[6]*=y,Ti.elements[8]*=S,Ti.elements[9]*=S,Ti.elements[10]*=S,n.setFromRotationMatrix(Ti),r.x=c,r.y=h,r.z=d,this}makePerspective(e,n,r,s,c,h,d=rr){const p=this.elements,_=2*c/(n-e),y=2*c/(r-s),S=(n+e)/(n-e),x=(r+s)/(r-s);let b,T;if(d===rr)b=-(h+c)/(h-c),T=-2*h*c/(h-c);else if(d===Bc)b=-h/(h-c),T=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=y,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,s,c,h,d=rr){const p=this.elements,_=1/(n-e),y=1/(r-s),S=1/(h-c),x=(n+e)*_,b=(r+s)*y;let T,C;if(d===rr)T=(h+c)*S,C=-2*S;else if(d===Bc)T=c*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*_,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*y,p[9]=0,p[13]=-b,p[2]=0,p[6]=0,p[10]=C,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const xa=new J,Ti=new gt,yf=new J(0,0,0),ng=new J(1,1,1),kr=new J,At=new J,Yt=new J,ar=new gt,gh=new ei;class di{constructor(e=0,n=0,r=0,s=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,s=this._order){return this._x=e,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const s=e.elements,c=s[0],h=s[4],d=s[8],p=s[1],_=s[5],y=s[9],S=s[2],x=s[6],b=s[10];switch(n){case"XYZ":this._y=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-y,b),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(d,b),this._z=Math.atan2(p,_)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,b),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Xt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(Xt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,_),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(d,b));break;case"XZY":this._z=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,_),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-y,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return ar.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ar,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gh.setFromEuler(this),this.setFromQuaternion(gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Vr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mo=0;const id=new J,Ss=new ei,Xi=new gt,go=new J,Un=new J,ig=new J,Nn=new ei,Hr=new J(1,0,0),cn=new J(0,1,0),Hc=new J(0,0,1),Bt={type:"added"},vf={type:"removed"};class It extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mo++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new J,n=new di,r=new ei,s=new J(1,1,1);function c(){r.setFromEuler(n,!1)}function h(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new dt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(e,n){return Ss.setFromAxisAngle(e,n),this.quaternion.premultiply(Ss),this}rotateX(e){return this.rotateOnAxis(Hr,e)}rotateY(e){return this.rotateOnAxis(cn,e)}rotateZ(e){return this.rotateOnAxis(Hc,e)}translateOnAxis(e,n){return id.copy(e).applyQuaternion(this.quaternion),this.position.add(id.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Hr,e)}translateY(e){return this.translateOnAxis(cn,e)}translateZ(e){return this.translateOnAxis(Hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?go.copy(e):go.set(e,n,r);const s=this.parent;this.updateWorldMatrix(!0,!1),Un.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Un,go,this.up):Xi.lookAt(go,Un,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(Xi),this.quaternion.premultiply(Ss.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bt)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(vf)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,s=this.children.length;r<s;r++){const h=this.children[r].getObjectByProperty(e,n);if(h!==void 0)return h}}getObjectsByProperty(e,n){let r=[];this[e]===n&&r.push(this);for(let s=0,c=this.children.length;s<c;s++){const h=this.children[s].getObjectsByProperty(e,n);h.length>0&&(r=r.concat(h))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Un,e,ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Un,Nn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,s=n.length;r<s;r++){const c=n[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const s=this.children;for(let c=0,h=s.length;c<h;c++){const d=s[c];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let _=0,y=p.length;_<y;_++){const S=p[_];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,_=this.material.length;p<_;p++)d.push(c(e.materials,this.material[p]));s.material=d}else s.material=c(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];s.animations.push(c(e.animations,p))}}if(n){const d=h(e.geometries),p=h(e.materials),_=h(e.textures),y=h(e.images),S=h(e.shapes),x=h(e.skeletons),b=h(e.animations),T=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),_.length>0&&(r.textures=_),y.length>0&&(r.images=y),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=s,r;function h(d){const p=[];for(const _ in d){const y=d[_];delete y.metadata,p.push(y)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}}It.DEFAULT_UP=new J(0,1,0),It.DEFAULT_MATRIX_AUTO_UPDATE=!0,It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new J,Wr=new J,Wc=new J,Xr=new J,bs=new J,_o=new J,nt=new J,rd=new J,sd=new J,ni=new J;let xo=!1;class pn{constructor(e=new J,n=new J,r=new J){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,s){s.subVectors(r,n),qi.subVectors(e,n),s.cross(qi);const c=s.lengthSq();return c>0?s.multiplyScalar(1/Math.sqrt(c)):s.set(0,0,0)}static getBarycoord(e,n,r,s,c){qi.subVectors(s,n),Wr.subVectors(r,n),Wc.subVectors(e,n);const h=qi.dot(qi),d=qi.dot(Wr),p=qi.dot(Wc),_=Wr.dot(Wr),y=Wr.dot(Wc),S=h*_-d*d;if(S===0)return c.set(-2,-1,-1);const x=1/S,b=(_*p-d*y)*x,T=(h*y-d*p)*x;return c.set(1-b-T,T,b)}static containsPoint(e,n,r,s){return this.getBarycoord(e,n,r,s,Xr),Xr.x>=0&&Xr.y>=0&&Xr.x+Xr.y<=1}static getUV(e,n,r,s,c,h,d,p){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),this.getInterpolation(e,n,r,s,c,h,d,p)}static getInterpolation(e,n,r,s,c,h,d,p){return this.getBarycoord(e,n,r,s,Xr),p.setScalar(0),p.addScaledVector(c,Xr.x),p.addScaledVector(h,Xr.y),p.addScaledVector(d,Xr.z),p}static isFrontFacing(e,n,r,s){return qi.subVectors(r,n),Wr.subVectors(e,n),qi.cross(Wr).dot(s)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,s){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,r,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Wr.subVectors(this.a,this.b),qi.cross(Wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return pn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,r,s,c){return xo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),xo=!0),pn.getInterpolation(e,this.a,this.b,this.c,n,r,s,c)}getInterpolation(e,n,r,s,c){return pn.getInterpolation(e,this.a,this.b,this.c,n,r,s,c)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,s=this.b,c=this.c;let h,d;bs.subVectors(s,r),_o.subVectors(c,r),rd.subVectors(e,r);const p=bs.dot(rd),_=_o.dot(rd);if(p<=0&&_<=0)return n.copy(r);sd.subVectors(e,s);const y=bs.dot(sd),S=_o.dot(sd);if(y>=0&&S<=y)return n.copy(s);const x=p*S-y*_;if(x<=0&&p>=0&&y<=0)return h=p/(p-y),n.copy(r).addScaledVector(bs,h);ni.subVectors(e,c);const b=bs.dot(ni),T=_o.dot(ni);if(T>=0&&b<=T)return n.copy(c);const C=b*_-p*T;if(C<=0&&_>=0&&T<=0)return d=_/(_-T),n.copy(r).addScaledVector(_o,d);const R=y*T-b*S;if(R<=0&&S-y>=0&&b-T>=0)return nt.subVectors(c,s),d=(S-y)/(S-y+(b-T)),n.copy(s).addScaledVector(nt,d);const w=1/(R+C+x);return h=C*w,d=x*w,n.copy(r).addScaledVector(bs,h).addScaledVector(_o,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let fi=0;class un extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fi++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Tr,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Kl,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=lc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ah,this.stencilZFail=ah,this.stencilZPass=ah,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Tr&&(r.blending=this.blending),this.side!==nn&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(n){const c=s(e.textures),h=s(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const s=n.length;r=new Array(s);for(let c=0;c!==s;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ct={h:0,s:0,l:0},Xc={h:0,s:0,l:0};function Es(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class Ze{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ci.toWorkingColorSpace(this,n),this}setRGB(e,n,r,s=ci.workingColorSpace){return this.r=e,this.g=n,this.b=r,ci.toWorkingColorSpace(this,s),this}setHSL(e,n,r,s=ci.workingColorSpace){if(e=ao(e,1),n=Xt(n,0,1),r=Xt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,h=2*r-c;this.r=Es(h,c,e+1/3),this.g=Es(h,c,e),this.b=Es(h,c,e-1/3)}return ci.toWorkingColorSpace(this,s),this}setStyle(e,n=_t){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=s[1],d=s[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=s[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(h===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_t){const r=mn[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=ju(e.r),this.g=ju(e.g),this.b=ju(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return ci.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Xt(Zt.r*255,0,255))*65536+Math.round(Xt(Zt.g*255,0,255))*256+Math.round(Xt(Zt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ci.workingColorSpace){ci.fromWorkingColorSpace(Zt.copy(this),n);const r=Zt.r,s=Zt.g,c=Zt.b,h=Math.max(r,s,c),d=Math.min(r,s,c);let p,_;const y=(d+h)/2;if(d===h)p=0,_=0;else{const S=h-d;switch(_=y<=.5?S/(h+d):S/(2-h-d),h){case r:p=(s-c)/S+(s<c?6:0);break;case s:p=(c-r)/S+2;break;case c:p=(r-s)/S+4;break}p/=6}return e.h=p,e.s=_,e.l=y,e}getRGB(e,n=ci.workingColorSpace){return ci.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=_t){ci.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,r=Zt.g,s=Zt.b;return e!==_t?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,n,r){return this.getHSL(ct),ct.h+=e,ct.s+=n,ct.l+=r,this.setHSL(ct.h,ct.s,ct.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(ct),e.getHSL(Xc);const r=Dt(ct.h,Xc.h,n),s=Dt(ct.s,Xc.s,n),c=Dt(ct.l,Xc.l,n);return this.setHSL(r,s,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,s=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*s,this.g=c[1]*n+c[4]*r+c[7]*s,this.b=c[2]*n+c[5]*r+c[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ze;Ze.NAMES=mn;class Hn extends un{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=eo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fn=ad();function ad(){const o=new ArrayBuffer(4),e=new Float32Array(o),n=new Uint32Array(o),r=new Uint32Array(512),s=new Uint32Array(512);for(let p=0;p<256;++p){const _=p-127;_<-27?(r[p]=0,r[p|256]=32768,s[p]=24,s[p|256]=24):_<-14?(r[p]=1024>>-_-14,r[p|256]=1024>>-_-14|32768,s[p]=-_-1,s[p|256]=-_-1):_<=15?(r[p]=_+15<<10,r[p|256]=_+15<<10|32768,s[p]=13,s[p|256]=13):_<128?(r[p]=31744,r[p|256]=64512,s[p]=24,s[p|256]=24):(r[p]=31744,r[p|256]=64512,s[p]=13,s[p|256]=13)}const c=new Uint32Array(2048),h=new Uint32Array(64),d=new Uint32Array(64);for(let p=1;p<1024;++p){let _=p<<13,y=0;for(;!(_&8388608);)_<<=1,y-=8388608;_&=-8388609,y+=947912704,c[p]=_|y}for(let p=1024;p<2048;++p)c[p]=939524096+(p-1024<<13);for(let p=1;p<31;++p)h[p]=p<<23;h[31]=1199570944,h[32]=2147483648;for(let p=33;p<63;++p)h[p]=2147483648+(p-32<<23);h[63]=3347054592;for(let p=1;p<64;++p)p!==32&&(d[p]=1024);return{floatView:e,uint32View:n,baseTable:r,shiftTable:s,mantissaTable:c,exponentTable:h,offsetTable:d}}function On(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=Xt(o,-65504,65504),Fn.floatView[0]=o;const e=Fn.uint32View[0],n=e>>23&511;return Fn.baseTable[n]+((e&8388607)>>Fn.shiftTable[n])}function ya(o){const e=o>>10;return Fn.uint32View[0]=Fn.mantissaTable[Fn.offsetTable[e]+(o&1023)]+Fn.exponentTable[e],Fn.floatView[0]}const _h={toHalfFloat:On,fromHalfFloat:ya},Jt=new J,va=new ue;class Ft{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=ro,this.updateRange={offset:0,count:-1},this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let s=0,c=this.itemSize;s<c;s++)this.array[e+s]=n.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)va.fromBufferAttribute(this,n),va.applyMatrix3(e),this.setXY(n,va.x,va.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Tn(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=mt(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Tn(n,this.array)),n}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Tn(n,this.array)),n}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Tn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Tn(n,this.array)),n}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,s){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,n,r,s,c){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),r=mt(r,this.array),s=mt(s,this.array),c=mt(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ro&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class xh extends Ft{constructor(e,n,r){super(new Int8Array(e),n,r)}}class yh extends Ft{constructor(e,n,r){super(new Uint8Array(e),n,r)}}class od extends Ft{constructor(e,n,r){super(new Uint8ClampedArray(e),n,r)}}class vh extends Ft{constructor(e,n,r){super(new Int16Array(e),n,r)}}class gn extends Ft{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class rg extends Ft{constructor(e,n,r){super(new Int32Array(e),n,r)}}class yo extends Ft{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ts extends Ft{constructor(e,n,r){super(new Uint16Array(e),n,r),this.isFloat16BufferAttribute=!0}getX(e){let n=ya(this.array[e*this.itemSize]);return this.normalized&&(n=Tn(n,this.array)),n}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize]=On(n),this}getY(e){let n=ya(this.array[e*this.itemSize+1]);return this.normalized&&(n=Tn(n,this.array)),n}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+1]=On(n),this}getZ(e){let n=ya(this.array[e*this.itemSize+2]);return this.normalized&&(n=Tn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+2]=On(n),this}getW(e){let n=ya(this.array[e*this.itemSize+3]);return this.normalized&&(n=Tn(n,this.array)),n}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+3]=On(n),this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),r=mt(r,this.array)),this.array[e+0]=On(n),this.array[e+1]=On(r),this}setXYZ(e,n,r,s){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=On(n),this.array[e+1]=On(r),this.array[e+2]=On(s),this}setXYZW(e,n,r,s,c){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),r=mt(r,this.array),s=mt(s,this.array),c=mt(c,this.array)),this.array[e+0]=On(n),this.array[e+1]=On(r),this.array[e+2]=On(s),this.array[e+3]=On(c),this}}class Qe extends Ft{constructor(e,n,r){super(new Float32Array(e),n,r)}}class Wn extends Ft{constructor(e,n,r){super(new Float64Array(e),n,r)}}let sg=0;const pi=new gt,cd=new It,vo=new J,jt=new Mn,ws=new Mn,Rt=new J;class pt extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gs(e)?yo:gn)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,n,r){return pi.makeTranslation(e,n,r),this.applyMatrix4(pi),this}scale(e,n,r){return pi.makeScale(e,n,r),this.applyMatrix4(pi),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vo).negate(),this.translate(vo.x,vo.y,vo.z),this}setFromPoints(e){const n=[];for(let r=0,s=e.length;r<s;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Qe(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,s=n.length;r<s;r++){const c=n[r];jt.setFromBufferAttribute(c),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),n)for(let c=0,h=n.length;c<h;c++){const d=n[c];ws.setFromBufferAttribute(d),this.morphTargetsRelative?(Rt.addVectors(jt.min,ws.min),jt.expandByPoint(Rt),Rt.addVectors(jt.max,ws.max),jt.expandByPoint(Rt)):(jt.expandByPoint(ws.min),jt.expandByPoint(ws.max))}jt.getCenter(r);let s=0;for(let c=0,h=e.count;c<h;c++)Rt.fromBufferAttribute(e,c),s=Math.max(s,r.distanceToSquared(Rt));if(n)for(let c=0,h=n.length;c<h;c++){const d=n[c],p=this.morphTargetsRelative;for(let _=0,y=d.count;_<y;_++)Rt.fromBufferAttribute(d,_),p&&(vo.fromBufferAttribute(e,_),Rt.add(vo)),s=Math.max(s,r.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,s=n.position.array,c=n.normal.array,h=n.uv.array,d=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*d),4));const p=this.getAttribute("tangent").array,_=[],y=[];for(let B=0;B<d;B++)_[B]=new J,y[B]=new J;const S=new J,x=new J,b=new J,T=new ue,C=new ue,R=new ue,w=new J,P=new J;function L(B,Q,ge){S.fromArray(s,B*3),x.fromArray(s,Q*3),b.fromArray(s,ge*3),T.fromArray(h,B*2),C.fromArray(h,Q*2),R.fromArray(h,ge*2),x.sub(S),b.sub(S),C.sub(T),R.sub(T);const re=1/(C.x*R.y-R.x*C.y);isFinite(re)&&(w.copy(x).multiplyScalar(R.y).addScaledVector(b,-C.y).multiplyScalar(re),P.copy(b).multiplyScalar(C.x).addScaledVector(x,-R.x).multiplyScalar(re),_[B].add(w),_[Q].add(w),_[ge].add(w),y[B].add(P),y[Q].add(P),y[ge].add(P))}let I=this.groups;I.length===0&&(I=[{start:0,count:r.length}]);for(let B=0,Q=I.length;B<Q;++B){const ge=I[B],re=ge.start,W=ge.count;for(let he=re,ye=re+W;he<ye;he+=3)L(r[he+0],r[he+1],r[he+2])}const O=new J,F=new J,N=new J,k=new J;function D(B){N.fromArray(c,B*3),k.copy(N);const Q=_[B];O.copy(Q),O.sub(N.multiplyScalar(N.dot(Q))).normalize(),F.crossVectors(k,Q);const re=F.dot(y[B])<0?-1:1;p[B*4]=O.x,p[B*4+1]=O.y,p[B*4+2]=O.z,p[B*4+3]=re}for(let B=0,Q=I.length;B<Q;++B){const ge=I[B],re=ge.start,W=ge.count;for(let he=re,ye=re+W;he<ye;he+=3)D(r[he+0]),D(r[he+1]),D(r[he+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ft(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,b=r.count;x<b;x++)r.setXYZ(x,0,0,0);const s=new J,c=new J,h=new J,d=new J,p=new J,_=new J,y=new J,S=new J;if(e)for(let x=0,b=e.count;x<b;x+=3){const T=e.getX(x+0),C=e.getX(x+1),R=e.getX(x+2);s.fromBufferAttribute(n,T),c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,R),y.subVectors(h,c),S.subVectors(s,c),y.cross(S),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,R),d.add(y),p.add(y),_.add(y),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(R,_.x,_.y,_.z)}else for(let x=0,b=n.count;x<b;x+=3)s.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),h.fromBufferAttribute(n,x+2),y.subVectors(h,c),S.subVectors(s,c),y.cross(S),r.setXYZ(x+0,y.x,y.y,y.z),r.setXYZ(x+1,y.x,y.y,y.z),r.setXYZ(x+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(d,p){const _=d.array,y=d.itemSize,S=d.normalized,x=new _.constructor(p.length*y);let b=0,T=0;for(let C=0,R=p.length;C<R;C++){d.isInterleavedBufferAttribute?b=p[C]*d.data.stride+d.offset:b=p[C]*y;for(let w=0;w<y;w++)x[T++]=_[b++]}return new Ft(x,y,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new pt,r=this.index.array,s=this.attributes;for(const d in s){const p=s[d],_=e(p,r);n.setAttribute(d,_)}const c=this.morphAttributes;for(const d in c){const p=[],_=c[d];for(let y=0,S=_.length;y<S;y++){const x=_[y],b=e(x,r);p.push(b)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const _=h[d];n.addGroup(_.start,_.count,_.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const _ in p)p[_]!==void 0&&(e[_]=p[_]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const _=r[p];e.data.attributes[p]=_.toJSON(e.data)}const s={};let c=!1;for(const p in this.morphAttributes){const _=this.morphAttributes[p],y=[];for(let S=0,x=_.length;S<x;S++){const b=_[S];y.push(b.toJSON(e.data))}y.length>0&&(s[p]=y,c=!0)}c&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const s=e.attributes;for(const _ in s){const y=s[_];this.setAttribute(_,y.clone(n))}const c=e.morphAttributes;for(const _ in c){const y=[],S=c[_];for(let x=0,b=S.length;x<b;x++)y.push(S[x].clone(n));this.morphAttributes[_]=y}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let _=0,y=h.length;_<y;_++){const S=h[_];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ma=new gt,As=new po,Rs=new Dn,ld=new J,Cs=new J,Mo=new J,So=new J,or=new J,qr=new J,Sa=new ue,ba=new ue,qc=new ue,Mf=new J,Ea=new J,Sf=new J,Mh=new J,Sh=new J;class An extends It{constructor(e=new pt,n=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const s=n[r[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=s.length;c<h;c++){const d=s[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,s=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;n.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(c&&d){qr.set(0,0,0);for(let p=0,_=c.length;p<_;p++){const y=d[p],S=c[p];y!==0&&(or.fromBufferAttribute(S,e),h?qr.addScaledVector(or,y):qr.addScaledVector(or.sub(n),y))}n.add(qr)}return n}raycast(e,n){const r=this.geometry,s=this.material,c=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rs.copy(r.boundingSphere),Rs.applyMatrix4(c),As.copy(e.ray).recast(e.near),!(Rs.containsPoint(As.origin)===!1&&(As.intersectSphere(Rs,ld)===null||As.origin.distanceToSquared(ld)>Im(e.far-e.near,2)))&&(Ma.copy(c).invert(),As.copy(e.ray).applyMatrix4(Ma),!(r.boundingBox!==null&&As.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,As)))}_computeIntersections(e,n,r){let s;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,_=c.attributes.uv,y=c.attributes.uv1,S=c.attributes.normal,x=c.groups,b=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,C=x.length;T<C;T++){const R=x[T],w=h[R.materialIndex],P=Math.max(R.start,b.start),L=Math.min(d.count,Math.min(R.start+R.count,b.start+b.count));for(let I=P,O=L;I<O;I+=3){const F=d.getX(I),N=d.getX(I+1),k=d.getX(I+2);s=bh(this,w,e,r,_,y,S,F,N,k),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=R.materialIndex,n.push(s))}}else{const T=Math.max(0,b.start),C=Math.min(d.count,b.start+b.count);for(let R=T,w=C;R<w;R+=3){const P=d.getX(R),L=d.getX(R+1),I=d.getX(R+2);s=bh(this,h,e,r,_,y,S,P,L,I),s&&(s.faceIndex=Math.floor(R/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,C=x.length;T<C;T++){const R=x[T],w=h[R.materialIndex],P=Math.max(R.start,b.start),L=Math.min(p.count,Math.min(R.start+R.count,b.start+b.count));for(let I=P,O=L;I<O;I+=3){const F=I,N=I+1,k=I+2;s=bh(this,w,e,r,_,y,S,F,N,k),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=R.materialIndex,n.push(s))}}else{const T=Math.max(0,b.start),C=Math.min(p.count,b.start+b.count);for(let R=T,w=C;R<w;R+=3){const P=R,L=R+1,I=R+2;s=bh(this,h,e,r,_,y,S,P,L,I),s&&(s.faceIndex=Math.floor(R/3),n.push(s))}}}}function ag(o,e,n,r,s,c,h,d){let p;if(e.side===Wt?p=r.intersectTriangle(h,c,s,!0,d):p=r.intersectTriangle(s,c,h,e.side===nn,d),p===null)return null;Sh.copy(d),Sh.applyMatrix4(o.matrixWorld);const _=n.ray.origin.distanceTo(Sh);return _<n.near||_>n.far?null:{distance:_,point:Sh.clone(),object:o}}function bh(o,e,n,r,s,c,h,d,p,_){o.getVertexPosition(d,Cs),o.getVertexPosition(p,Mo),o.getVertexPosition(_,So);const y=ag(o,e,n,r,Cs,Mo,So,Mh);if(y){s&&(Sa.fromBufferAttribute(s,d),ba.fromBufferAttribute(s,p),qc.fromBufferAttribute(s,_),y.uv=pn.getInterpolation(Mh,Cs,Mo,So,Sa,ba,qc,new ue)),c&&(Sa.fromBufferAttribute(c,d),ba.fromBufferAttribute(c,p),qc.fromBufferAttribute(c,_),y.uv1=pn.getInterpolation(Mh,Cs,Mo,So,Sa,ba,qc,new ue),y.uv2=y.uv1),h&&(Mf.fromBufferAttribute(h,d),Ea.fromBufferAttribute(h,p),Sf.fromBufferAttribute(h,_),y.normal=pn.getInterpolation(Mh,Cs,Mo,So,Mf,Ea,Sf,new J),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const S={a:d,b:p,c:_,normal:new J,materialIndex:0};pn.getNormal(Cs,Mo,So,S.normal),y.face=S}return y}class Ta extends pt{constructor(e=1,n=1,r=1,s=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:s,heightSegments:c,depthSegments:h};const d=this;s=Math.floor(s),c=Math.floor(c),h=Math.floor(h);const p=[],_=[],y=[],S=[];let x=0,b=0;T("z","y","x",-1,-1,r,n,e,h,c,0),T("z","y","x",1,-1,r,n,-e,h,c,1),T("x","z","y",1,1,e,r,n,s,h,2),T("x","z","y",1,-1,e,r,-n,s,h,3),T("x","y","z",1,-1,e,n,r,s,c,4),T("x","y","z",-1,-1,e,n,-r,s,c,5),this.setIndex(p),this.setAttribute("position",new Qe(_,3)),this.setAttribute("normal",new Qe(y,3)),this.setAttribute("uv",new Qe(S,2));function T(C,R,w,P,L,I,O,F,N,k,D){const B=I/N,Q=O/k,ge=I/2,re=O/2,W=F/2,he=N+1,ye=k+1;let _e=0,ae=0;const we=new J;for(let j=0;j<ye;j++){const K=j*Q-re;for(let te=0;te<he;te++){const Re=te*B-ge;we[C]=Re*P,we[R]=K*L,we[w]=W,_.push(we.x,we.y,we.z),we[C]=0,we[R]=0,we[w]=F>0?1:-1,y.push(we.x,we.y,we.z),S.push(te/N),S.push(1-j/k),_e+=1}}for(let j=0;j<k;j++)for(let K=0;K<N;K++){const te=x+K+he*j,Re=x+K+he*(j+1),be=x+(K+1)+he*(j+1),De=x+(K+1)+he*j;p.push(te,Re,De),p.push(Re,be,De),ae+=6}d.addGroup(b,ae,D),b+=ae,x+=_e}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function bo(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const s=o[n][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=s.clone():Array.isArray(s)?e[n][r]=s.slice():e[n][r]=s}}return e}function Xn(o){const e={};for(let n=0;n<o.length;n++){const r=bo(o[n]);for(const s in r)e[s]=r[s]}return e}function og(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function bf(o){return o.getRenderTarget()===null?o.outputColorSpace:Gi}const Ef={clone:bo,merge:Xn};var cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cr extends un{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cg,this.fragmentShader=lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bo(e.uniforms),this.uniformsGroups=og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const h=this.uniforms[s].value;h&&h.isTexture?n.uniforms[s]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?n.uniforms[s]={type:"c",value:h.getHex()}:h&&h.isVector2?n.uniforms[s]={type:"v2",value:h.toArray()}:h&&h.isVector3?n.uniforms[s]={type:"v3",value:h.toArray()}:h&&h.isVector4?n.uniforms[s]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?n.uniforms[s]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?n.uniforms[s]={type:"m4",value:h.toArray()}:n.uniforms[s]={value:h}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Eh extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=rr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rn extends Eh{constructor(e=50,n=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=so*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return so*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,r,s,c,h){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=s,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(da*.5*this.fov)/this.zoom,r=2*n,s=this.aspect*r,c=-.5*s;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,_=h.fullHeight;c+=h.offsetX*s/p,n-=h.offsetY*r/_,s*=h.width/p,r*=h.height/_}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+s,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Eo=-90,To=1;class Tf extends It{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const s=new Rn(Eo,To,e,n);s.layers=this.layers,this.add(s);const c=new Rn(Eo,To,e,n);c.layers=this.layers,this.add(c);const h=new Rn(Eo,To,e,n);h.layers=this.layers,this.add(h);const d=new Rn(Eo,To,e,n);d.layers=this.layers,this.add(d);const p=new Rn(Eo,To,e,n);p.layers=this.layers,this.add(p);const _=new Rn(Eo,To,e,n);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,s,c,h,d,p]=n;for(const _ of n)this.remove(_);if(e===rr)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Bc)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of n)this.add(_),_.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,c,h,d,p,_]=this.children,y=e.getRenderTarget(),S=e.xr.enabled;e.xr.enabled=!1;const x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(n,s),e.setRenderTarget(r,1),e.render(n,c),e.setRenderTarget(r,2),e.render(n,h),e.setRenderTarget(r,3),e.render(n,d),e.setRenderTarget(r,4),e.render(n,p),r.texture.generateMipmaps=x,e.setRenderTarget(r,5),e.render(n,_),e.setRenderTarget(y),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Yc extends zt{constructor(e,n,r,s,c,h,d,p,_,y){e=e!==void 0?e:[],n=n!==void 0?n:ai,super(e,n,r,s,c,h,d,p,_,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wf extends wn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];n.encoding!==void 0&&(In("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===fs?_t:ms),this.texture=new Yc(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:an}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ta(5,5,5),c=new cr({name:"CubemapFromEquirect",uniforms:bo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wt,blending:Ii});c.uniforms.tEquirect.value=n;const h=new An(s,c),d=n.minFilter;return n.minFilter===Gn&&(n.minFilter=an),new Tf(1,10,this).update(e,h),n.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,n,r,s){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(n,r,s);e.setRenderTarget(c)}}const hd=new J,hg=new J,ug=new dt;class Ls{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,s){return this.normal.set(e,n,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const s=hd.subVectors(r,n).cross(hg.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(hd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/s;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||ug.getNormalMatrix(e),s=this.coplanarPoint(hd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wa=new Dn,Th=new J;class wh{constructor(e=new Ls,n=new Ls,r=new Ls,s=new Ls,c=new Ls,h=new Ls){this.planes=[e,n,r,s,c,h]}set(e,n,r,s,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(s),d[4].copy(c),d[5].copy(h),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=rr){const r=this.planes,s=e.elements,c=s[0],h=s[1],d=s[2],p=s[3],_=s[4],y=s[5],S=s[6],x=s[7],b=s[8],T=s[9],C=s[10],R=s[11],w=s[12],P=s[13],L=s[14],I=s[15];if(r[0].setComponents(p-c,x-_,R-b,I-w).normalize(),r[1].setComponents(p+c,x+_,R+b,I+w).normalize(),r[2].setComponents(p+h,x+y,R+T,I+P).normalize(),r[3].setComponents(p-h,x-y,R-T,I-P).normalize(),r[4].setComponents(p-d,x-S,R-C,I-L).normalize(),n===rr)r[5].setComponents(p+d,x+S,R+C,I+L).normalize();else if(n===Bc)r[5].setComponents(d,S,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wa)}intersectsSprite(e){return wa.center.set(0,0,0),wa.radius=.7071067811865476,wa.applyMatrix4(e.matrixWorld),this.intersectsSphere(wa)}intersectsSphere(e){const n=this.planes,r=e.center,s=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const s=n[r];if(Th.x=s.normal.x>0?e.max.x:e.min.x,Th.y=s.normal.y>0?e.max.y:e.min.y,Th.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Th)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Af(){let o=null,e=!1,n=null,r=null;function s(c,h){n(c,h),r=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){o=c}}}function dg(o,e){const n=e.isWebGL2,r=new WeakMap;function s(_,y){const S=_.array,x=_.usage,b=o.createBuffer();o.bindBuffer(y,b),o.bufferData(y,S,x),_.onUploadCallback();let T;if(S instanceof Float32Array)T=o.FLOAT;else if(S instanceof Uint16Array)if(_.isFloat16BufferAttribute)if(n)T=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=o.UNSIGNED_SHORT;else if(S instanceof Int16Array)T=o.SHORT;else if(S instanceof Uint32Array)T=o.UNSIGNED_INT;else if(S instanceof Int32Array)T=o.INT;else if(S instanceof Int8Array)T=o.BYTE;else if(S instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:b,type:T,bytesPerElement:S.BYTES_PER_ELEMENT,version:_.version}}function c(_,y,S){const x=y.array,b=y.updateRange;o.bindBuffer(S,_),b.count===-1?o.bufferSubData(S,0,x):(n?o.bufferSubData(S,b.offset*x.BYTES_PER_ELEMENT,x,b.offset,b.count):o.bufferSubData(S,b.offset*x.BYTES_PER_ELEMENT,x.subarray(b.offset,b.offset+b.count)),b.count=-1),y.onUploadCallback()}function h(_){return _.isInterleavedBufferAttribute&&(_=_.data),r.get(_)}function d(_){_.isInterleavedBufferAttribute&&(_=_.data);const y=r.get(_);y&&(o.deleteBuffer(y.buffer),r.delete(_))}function p(_,y){if(_.isGLBufferAttribute){const x=r.get(_);(!x||x.version<_.version)&&r.set(_,{buffer:_.buffer,type:_.type,bytesPerElement:_.elementSize,version:_.version});return}_.isInterleavedBufferAttribute&&(_=_.data);const S=r.get(_);S===void 0?r.set(_,s(_,y)):S.version<_.version&&(c(S.buffer,_,y),S.version=_.version)}return{get:h,remove:d,update:p}}class Zc extends pt{constructor(e=1,n=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:s};const c=e/2,h=n/2,d=Math.floor(r),p=Math.floor(s),_=d+1,y=p+1,S=e/d,x=n/p,b=[],T=[],C=[],R=[];for(let w=0;w<y;w++){const P=w*x-h;for(let L=0;L<_;L++){const I=L*S-c;T.push(I,-P,0),C.push(0,0,1),R.push(L/d),R.push(1-w/p)}}for(let w=0;w<p;w++)for(let P=0;P<d;P++){const L=P+_*w,I=P+_*(w+1),O=P+1+_*(w+1),F=P+1+_*w;b.push(L,I,F),b.push(I,O,F)}this.setIndex(b),this.setAttribute("position",new Qe(T,3)),this.setAttribute("normal",new Qe(C,3)),this.setAttribute("uv",new Qe(R,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_g=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Eg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Tg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ig=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ug=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ng=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$g=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,h_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,p_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,x_=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,w_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,R_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,C_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Px=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ix=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Dx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ox=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,$x=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ty=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ny=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xt={alphahash_fragment:fg,alphahash_pars_fragment:pg,alphamap_fragment:mg,alphamap_pars_fragment:gg,alphatest_fragment:_g,alphatest_pars_fragment:xg,aomap_fragment:yg,aomap_pars_fragment:vg,begin_vertex:Mg,beginnormal_vertex:Sg,bsdfs:bg,iridescence_fragment:Eg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:wg,clipping_planes_pars_fragment:Ag,clipping_planes_pars_vertex:Rg,clipping_planes_vertex:Cg,color_fragment:Lg,color_pars_fragment:Pg,color_pars_vertex:Ig,color_vertex:Dg,common:Ug,cube_uv_reflection_fragment:Ng,defaultnormal_vertex:Fg,displacementmap_pars_vertex:Og,displacementmap_vertex:Bg,emissivemap_fragment:zg,emissivemap_pars_fragment:Gg,colorspace_fragment:kg,colorspace_pars_fragment:Vg,envmap_fragment:Hg,envmap_common_pars_fragment:Wg,envmap_pars_fragment:Xg,envmap_pars_vertex:qg,envmap_physical_pars_fragment:r_,envmap_vertex:Yg,fog_vertex:Zg,fog_pars_vertex:Jg,fog_fragment:$g,fog_pars_fragment:Kg,gradientmap_pars_fragment:Qg,lightmap_fragment:jg,lightmap_pars_fragment:e_,lights_lambert_fragment:t_,lights_lambert_pars_fragment:n_,lights_pars_begin:i_,lights_toon_fragment:s_,lights_toon_pars_fragment:a_,lights_phong_fragment:o_,lights_phong_pars_fragment:c_,lights_physical_fragment:l_,lights_physical_pars_fragment:h_,lights_fragment_begin:u_,lights_fragment_maps:d_,lights_fragment_end:f_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:m_,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:__,map_fragment:x_,map_pars_fragment:y_,map_particle_fragment:v_,map_particle_pars_fragment:M_,metalnessmap_fragment:S_,metalnessmap_pars_fragment:b_,morphcolor_vertex:E_,morphnormal_vertex:T_,morphtarget_pars_vertex:w_,morphtarget_vertex:A_,normal_fragment_begin:R_,normal_fragment_maps:C_,normal_pars_fragment:L_,normal_pars_vertex:P_,normal_vertex:I_,normalmap_pars_fragment:Px,clearcoat_normal_fragment_begin:Ix,clearcoat_normal_fragment_maps:Dx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Nx,opaque_fragment:Fx,packing:Ox,premultiplied_alpha_fragment:Bx,project_vertex:zx,dithering_fragment:Gx,dithering_pars_fragment:kx,roughnessmap_fragment:Vx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Wx,shadowmap_pars_vertex:Xx,shadowmap_vertex:qx,shadowmask_pars_fragment:Yx,skinbase_vertex:Zx,skinning_pars_vertex:Jx,skinning_vertex:$x,skinnormal_vertex:Kx,specularmap_fragment:Qx,specularmap_pars_fragment:jx,tonemapping_fragment:ey,tonemapping_pars_fragment:ty,transmission_fragment:ny,transmission_pars_fragment:iy,uv_pars_fragment:ry,uv_pars_vertex:sy,uv_vertex:ay,worldpos_vertex:oy,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},He={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Yi={basic:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ze(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Xn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Xn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Xn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Ze(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Xn([He.points,He.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Xn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Xn([He.common,He.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Xn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Xn([He.sprite,He.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:Xn([He.common,He.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:Xn([He.lights,He.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Yi.physical={uniforms:Xn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Ah={r:0,b:0,g:0};function z_(o,e,n,r,s,c,h){const d=new Ze(0);let p=c===!0?0:1,_,y,S=null,x=0,b=null;function T(R,w){let P=!1,L=w.isScene===!0?w.background:null;switch(L&&L.isTexture&&(L=(w.backgroundBlurriness>0?n:e).get(L)),L===null?C(d,p):L&&L.isColor&&(C(L,1),P=!0),o.xr.getEnvironmentBlendMode()){case"opaque":P=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,h),P=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,h),P=!0;break}(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),L&&(L.isCubeTexture||L.mapping===rn)?(y===void 0&&(y=new An(new Ta(1,1,1),new cr({name:"BackgroundCubeMaterial",uniforms:bo(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),y.geometry.deleteAttribute("normal"),y.geometry.deleteAttribute("uv"),y.onBeforeRender=function(F,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(y)),y.material.uniforms.envMap.value=L,y.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,y.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,y.material.toneMapped=L.colorSpace!==_t,(S!==L||x!==L.version||b!==o.toneMapping)&&(y.material.needsUpdate=!0,S=L,x=L.version,b=o.toneMapping),y.layers.enableAll(),R.unshift(y,y.geometry,y.material,0,0,null)):L&&L.isTexture&&(_===void 0&&(_=new An(new Zc(2,2),new cr({name:"BackgroundMaterial",uniforms:bo(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(_)),_.material.uniforms.t2D.value=L,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.toneMapped=L.colorSpace!==_t,L.matrixAutoUpdate===!0&&L.updateMatrix(),_.material.uniforms.uvTransform.value.copy(L.matrix),(S!==L||x!==L.version||b!==o.toneMapping)&&(_.material.needsUpdate=!0,S=L,x=L.version,b=o.toneMapping),_.layers.enableAll(),R.unshift(_,_.geometry,_.material,0,0,null))}function C(R,w){R.getRGB(Ah,bf(o)),r.buffers.color.setClear(Ah.r,Ah.g,Ah.b,w,h)}return{getClearColor:function(){return d},setClearColor:function(R,w=1){d.set(R),p=w,C(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,C(d,p)},render:T}}function If(o,e,n,r){const s=o.getParameter(o.MAX_VERTEX_ATTRIBS),c=r.isWebGL2?null:e.get("OES_vertex_array_object"),h=r.isWebGL2||c!==null,d={},p=R(null);let _=p,y=!1;function S(W,he,ye,_e,ae){let we=!1;if(h){const j=C(_e,ye,he);_!==j&&(_=j,b(_.object)),we=w(W,_e,ye,ae),we&&P(W,_e,ye,ae)}else{const j=he.wireframe===!0;(_.geometry!==_e.id||_.program!==ye.id||_.wireframe!==j)&&(_.geometry=_e.id,_.program=ye.id,_.wireframe=j,we=!0)}ae!==null&&n.update(ae,o.ELEMENT_ARRAY_BUFFER),(we||y)&&(y=!1,k(W,he,ye,_e),ae!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,n.get(ae).buffer))}function x(){return r.isWebGL2?o.createVertexArray():c.createVertexArrayOES()}function b(W){return r.isWebGL2?o.bindVertexArray(W):c.bindVertexArrayOES(W)}function T(W){return r.isWebGL2?o.deleteVertexArray(W):c.deleteVertexArrayOES(W)}function C(W,he,ye){const _e=ye.wireframe===!0;let ae=d[W.id];ae===void 0&&(ae={},d[W.id]=ae);let we=ae[he.id];we===void 0&&(we={},ae[he.id]=we);let j=we[_e];return j===void 0&&(j=R(x()),we[_e]=j),j}function R(W){const he=[],ye=[],_e=[];for(let ae=0;ae<s;ae++)he[ae]=0,ye[ae]=0,_e[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:he,enabledAttributes:ye,attributeDivisors:_e,object:W,attributes:{},index:null}}function w(W,he,ye,_e){const ae=_.attributes,we=he.attributes;let j=0;const K=ye.getAttributes();for(const te in K)if(K[te].location>=0){const be=ae[te];let De=we[te];if(De===void 0&&(te==="instanceMatrix"&&W.instanceMatrix&&(De=W.instanceMatrix),te==="instanceColor"&&W.instanceColor&&(De=W.instanceColor)),be===void 0||be.attribute!==De||De&&be.data!==De.data)return!0;j++}return _.attributesNum!==j||_.index!==_e}function P(W,he,ye,_e){const ae={},we=he.attributes;let j=0;const K=ye.getAttributes();for(const te in K)if(K[te].location>=0){let be=we[te];be===void 0&&(te==="instanceMatrix"&&W.instanceMatrix&&(be=W.instanceMatrix),te==="instanceColor"&&W.instanceColor&&(be=W.instanceColor));const De={};De.attribute=be,be&&be.data&&(De.data=be.data),ae[te]=De,j++}_.attributes=ae,_.attributesNum=j,_.index=_e}function L(){const W=_.newAttributes;for(let he=0,ye=W.length;he<ye;he++)W[he]=0}function I(W){O(W,0)}function O(W,he){const ye=_.newAttributes,_e=_.enabledAttributes,ae=_.attributeDivisors;ye[W]=1,_e[W]===0&&(o.enableVertexAttribArray(W),_e[W]=1),ae[W]!==he&&((r.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](W,he),ae[W]=he)}function F(){const W=_.newAttributes,he=_.enabledAttributes;for(let ye=0,_e=he.length;ye<_e;ye++)he[ye]!==W[ye]&&(o.disableVertexAttribArray(ye),he[ye]=0)}function N(W,he,ye,_e,ae,we,j){j===!0?o.vertexAttribIPointer(W,he,ye,ae,we):o.vertexAttribPointer(W,he,ye,_e,ae,we)}function k(W,he,ye,_e){if(r.isWebGL2===!1&&(W.isInstancedMesh||_e.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;L();const ae=_e.attributes,we=ye.getAttributes(),j=he.defaultAttributeValues;for(const K in we){const te=we[K];if(te.location>=0){let Re=ae[K];if(Re===void 0&&(K==="instanceMatrix"&&W.instanceMatrix&&(Re=W.instanceMatrix),K==="instanceColor"&&W.instanceColor&&(Re=W.instanceColor)),Re!==void 0){const be=Re.normalized,De=Re.itemSize,Oe=n.get(Re);if(Oe===void 0)continue;const Fe=Oe.buffer,Xe=Oe.type,it=Oe.bytesPerElement,$=r.isWebGL2===!0&&(Xe===o.INT||Xe===o.UNSIGNED_INT||Re.gpuType===Fi);if(Re.isInterleavedBufferAttribute){const V=Re.data,G=V.stride,fe=Re.offset;if(V.isInstancedInterleavedBuffer){for(let ie=0;ie<te.locationSize;ie++)O(te.location+ie,V.meshPerAttribute);W.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ie=0;ie<te.locationSize;ie++)I(te.location+ie);o.bindBuffer(o.ARRAY_BUFFER,Fe);for(let ie=0;ie<te.locationSize;ie++)N(te.location+ie,De/te.locationSize,Xe,be,G*it,(fe+De/te.locationSize*ie)*it,$)}else{if(Re.isInstancedBufferAttribute){for(let V=0;V<te.locationSize;V++)O(te.location+V,Re.meshPerAttribute);W.isInstancedMesh!==!0&&_e._maxInstanceCount===void 0&&(_e._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let V=0;V<te.locationSize;V++)I(te.location+V);o.bindBuffer(o.ARRAY_BUFFER,Fe);for(let V=0;V<te.locationSize;V++)N(te.location+V,De/te.locationSize,Xe,be,De*it,De/te.locationSize*V*it,$)}}else if(j!==void 0){const be=j[K];if(be!==void 0)switch(be.length){case 2:o.vertexAttrib2fv(te.location,be);break;case 3:o.vertexAttrib3fv(te.location,be);break;case 4:o.vertexAttrib4fv(te.location,be);break;default:o.vertexAttrib1fv(te.location,be)}}}}F()}function D(){ge();for(const W in d){const he=d[W];for(const ye in he){const _e=he[ye];for(const ae in _e)T(_e[ae].object),delete _e[ae];delete he[ye]}delete d[W]}}function B(W){if(d[W.id]===void 0)return;const he=d[W.id];for(const ye in he){const _e=he[ye];for(const ae in _e)T(_e[ae].object),delete _e[ae];delete he[ye]}delete d[W.id]}function Q(W){for(const he in d){const ye=d[he];if(ye[W.id]===void 0)continue;const _e=ye[W.id];for(const ae in _e)T(_e[ae].object),delete _e[ae];delete ye[W.id]}}function ge(){re(),y=!0,_!==p&&(_=p,b(_.object))}function re(){p.geometry=null,p.program=null,p.wireframe=!1}return{setup:S,reset:ge,resetDefaultState:re,dispose:D,releaseStatesOfGeometry:B,releaseStatesOfProgram:Q,initAttributes:L,enableAttribute:I,disableUnusedAttributes:F}}function Df(o,e,n,r){const s=r.isWebGL2;let c;function h(_){c=_}function d(_,y){o.drawArrays(c,_,y),n.update(y,c,1)}function p(_,y,S){if(S===0)return;let x,b;if(s)x=o,b="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[b](c,_,y,S),n.update(y,c,S)}this.setMode=h,this.render=d,this.renderInstances=p}function Uf(o,e,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext!="undefined"&&o.constructor.name==="WebGL2RenderingContext";let d=n.precision!==void 0?n.precision:"highp";const p=c(d);p!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const _=h||e.has("WEBGL_draw_buffers"),y=n.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),C=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),w=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=x>0,I=h||e.has("OES_texture_float"),O=L&&I,F=h?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:h,drawBuffers:_,getMaxAnisotropy:s,getMaxPrecision:c,precision:d,logarithmicDepthBuffer:y,maxTextures:S,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:T,maxAttributes:C,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:P,vertexTextures:L,floatFragmentTextures:I,floatVertexTextures:O,maxSamples:F}}function Nf(o){const e=this;let n=null,r=0,s=!1,c=!1;const h=new Ls,d=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const b=S.length!==0||x||r!==0||s;return s=x,r=S.length,b},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){n=y(S,x,0)},this.setState=function(S,x,b){const T=S.clippingPlanes,C=S.clipIntersection,R=S.clipShadows,w=o.get(S);if(!s||T===null||T.length===0||c&&!R)c?y(null):_();else{const P=c?0:r,L=P*4;let I=w.clippingState||null;p.value=I,I=y(T,x,L,b);for(let O=0;O!==L;++O)I[O]=n[O];w.clippingState=I,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function _(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(S,x,b,T){const C=S!==null?S.length:0;let R=null;if(C!==0){if(R=p.value,T!==!0||R===null){const w=b+C*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(R===null||R.length<w)&&(R=new Float32Array(w));for(let L=0,I=b;L!==C;++L,I+=4)h.copy(S[L]).applyMatrix4(P,d),h.normal.toArray(R,I),R[I+3]=h.constant}p.value=R,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,R}}function Ff(o){let e=new WeakMap;function n(h,d){return d===tr?h.mapping=ai:d===Rr&&(h.mapping=yi),h}function r(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const d=h.mapping;if(d===tr||d===Rr)if(e.has(h)){const p=e.get(h).texture;return n(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new wf(p.height/2);return _.fromEquirectangularTexture(o,h),e.set(h,_),h.addEventListener("dispose",s),n(_.texture,h.mapping)}else return null}}return h}function s(h){const d=h.target;d.removeEventListener("dispose",s);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Kc extends Eh{constructor(e=-1,n=1,r=1,s=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=s,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,s,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=s,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=_*this.view.offsetX,h=c+_*this.view.width,d-=y*this.view.offsetY,p=d-y*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Aa=4,fd=[.125,.215,.35,.446,.526,.582],Ps=20,Is=new Kc,dn=new Ze;let ln=null;const hr=(1+Math.sqrt(5))/2,Ro=1/hr,Of=[new J(1,1,1),new J(-1,1,1),new J(1,1,-1),new J(-1,1,-1),new J(0,hr,Ro),new J(0,hr,-Ro),new J(Ro,0,hr),new J(-Ro,0,hr),new J(hr,Ro,0),new J(-hr,Ro,0)];class pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,s=100){ln=this._renderer.getRenderTarget(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,s,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ln),e.scissorTest=!1,Rh(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ai||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ln=this._renderer.getRenderTarget();const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:an,minFilter:an,generateMipmaps:!1,type:ia,format:Jn,colorSpace:Gi,depthBuffer:!1},s=Bf(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bf(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=G_(c)),this._blurMaterial=k_(c,e,n)}return s}_compileMaterial(e){const n=new An(this._lodPlanes[0],e);this._renderer.compile(n,Is)}_sceneToCubeUV(e,n,r,s){const d=new Rn(90,1,n,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],y=this._renderer,S=y.autoClear,x=y.toneMapping;y.getClearColor(dn),y.toneMapping=er,y.autoClear=!1;const b=new Hn({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),T=new An(new Ta,b);let C=!1;const R=e.background;R?R.isColor&&(b.color.copy(R),e.background=null,C=!0):(b.color.copy(dn),C=!0);for(let w=0;w<6;w++){const P=w%3;P===0?(d.up.set(0,p[w],0),d.lookAt(_[w],0,0)):P===1?(d.up.set(0,0,p[w]),d.lookAt(0,_[w],0)):(d.up.set(0,p[w],0),d.lookAt(0,0,_[w]));const L=this._cubeSize;Rh(s,P*L,w>2?L:0,L,L),y.setRenderTarget(s),C&&y.render(T,d),y.render(e,d)}T.geometry.dispose(),T.material.dispose(),y.toneMapping=x,y.autoClear=S,e.background=R}_textureToCubeUV(e,n){const r=this._renderer,s=e.mapping===ai||e.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());const c=s?this._cubemapMaterial:this._equirectMaterial,h=new An(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Rh(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(h,Is)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const c=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),h=Of[(s-1)%Of.length];this._blur(e,s-1,s,c,h)}n.autoClear=r}_blur(e,n,r,s,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,n,r,s,"latitudinal",c),this._halfBlur(h,e,r,r,s,"longitudinal",c)}_halfBlur(e,n,r,s,c,h,d){const p=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const y=3,S=new An(this._lodPlanes[s],_),x=_.uniforms,b=this._sizeLods[r]-1,T=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ps-1),C=c/T,R=isFinite(c)?1+Math.floor(y*C):Ps;R>Ps&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${R} samples when the maximum is set to ${Ps}`);const w=[];let P=0;for(let N=0;N<Ps;++N){const k=N/C,D=Math.exp(-k*k/2);w.push(D),N===0?P+=D:N<R&&(P+=2*D)}for(let N=0;N<w.length;N++)w[N]=w[N]/P;x.envMap.value=e.texture,x.samples.value=R,x.weights.value=w,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const I=this._sizeLods[s],O=3*I*(s>L-Aa?s-L+Aa:0),F=4*(this._cubeSize-I);Rh(n,O,F,3*I,2*I),p.setRenderTarget(n),p.render(S,Is)}}function G_(o){const e=[],n=[],r=[];let s=o;const c=o-Aa+1+fd.length;for(let h=0;h<c;h++){const d=Math.pow(2,s);n.push(d);let p=1/d;h>o-Aa?p=fd[h-o+Aa-1]:h===0&&(p=0),r.push(p);const _=1/(d-2),y=-_,S=1+_,x=[y,y,S,y,S,S,y,y,S,S,y,S],b=6,T=6,C=3,R=2,w=1,P=new Float32Array(C*T*b),L=new Float32Array(R*T*b),I=new Float32Array(w*T*b);for(let F=0;F<b;F++){const N=F%3*2/3-1,k=F>2?0:-1,D=[N,k,0,N+2/3,k,0,N+2/3,k+1,0,N,k,0,N+2/3,k+1,0,N,k+1,0];P.set(D,C*T*F),L.set(x,R*T*F);const B=[F,F,F,F,F,F];I.set(B,w*T*F)}const O=new pt;O.setAttribute("position",new Ft(P,C)),O.setAttribute("uv",new Ft(L,R)),O.setAttribute("faceIndex",new Ft(I,w)),e.push(O),s>Aa&&s--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Bf(o,e,n){const r=new wn(o,e,n);return r.texture.mapping=rn,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Rh(o,e,n,r,s){o.viewport.set(e,n,r,s),o.scissor.set(e,n,r,s)}function k_(o,e,n){const r=new Float32Array(Ps),s=new J(0,1,0);return new cr({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function zf(){return new cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Gf(){return new cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V_(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,_=p===tr||p===Rr,y=p===ai||p===yi;if(_||y)if(d.isRenderTargetTexture&&d.needsPMREMUpdate===!0){d.needsPMREMUpdate=!1;let S=e.get(d);return n===null&&(n=new pd(o)),S=_?n.fromEquirectangular(d,S):n.fromCubemap(d,S),e.set(d,S),S.texture}else{if(e.has(d))return e.get(d).texture;{const S=d.image;if(_&&S&&S.height>0||y&&S&&s(S)){n===null&&(n=new pd(o));const x=_?n.fromEquirectangular(d):n.fromCubemap(d);return e.set(d,x),d.addEventListener("dispose",c),x.texture}else return null}}}return d}function s(d){let p=0;const _=6;for(let y=0;y<_;y++)d[y]!==void 0&&p++;return p===_}function c(d){const p=d.target;p.removeEventListener("dispose",c);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function H_(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let s;switch(r){case"WEBGL_depth_texture":s=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=o.getExtension(r)}return e[r]=s,s}return{has:function(r){return n(r)!==null},init:function(r){r.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(r){const s=n(r);return s===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function W_(o,e,n,r){const s={},c=new WeakMap;function h(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const C=x.morphAttributes[T];for(let R=0,w=C.length;R<w;R++)e.remove(C[R])}x.removeEventListener("dispose",h),delete s[x.id];const b=c.get(x);b&&(e.remove(b),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(S,x){return s[x.id]===!0||(x.addEventListener("dispose",h),s[x.id]=!0,n.memory.geometries++),x}function p(S){const x=S.attributes;for(const T in x)e.update(x[T],o.ARRAY_BUFFER);const b=S.morphAttributes;for(const T in b){const C=b[T];for(let R=0,w=C.length;R<w;R++)e.update(C[R],o.ARRAY_BUFFER)}}function _(S){const x=[],b=S.index,T=S.attributes.position;let C=0;if(b!==null){const P=b.array;C=b.version;for(let L=0,I=P.length;L<I;L+=3){const O=P[L+0],F=P[L+1],N=P[L+2];x.push(O,F,F,N,N,O)}}else if(T!==void 0){const P=T.array;C=T.version;for(let L=0,I=P.length/3-1;L<I;L+=3){const O=L+0,F=L+1,N=L+2;x.push(O,F,F,N,N,O)}}else return;const R=new(gs(x)?yo:gn)(x,1);R.version=C;const w=c.get(S);w&&e.remove(w),c.set(S,R)}function y(S){const x=c.get(S);if(x){const b=S.index;b!==null&&x.version<b.version&&_(S)}else _(S);return c.get(S)}return{get:d,update:p,getWireframeAttribute:y}}function X_(o,e,n,r){const s=r.isWebGL2;let c;function h(x){c=x}let d,p;function _(x){d=x.type,p=x.bytesPerElement}function y(x,b){o.drawElements(c,b,d,x*p),n.update(b,c,1)}function S(x,b,T){if(T===0)return;let C,R;if(s)C=o,R="drawElementsInstanced";else if(C=e.get("ANGLE_instanced_arrays"),R="drawElementsInstancedANGLE",C===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}C[R](c,b,d,x*p,T),n.update(b,c,T)}this.setMode=h,this.setIndex=_,this.render=y,this.renderInstances=S}function q_(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(n.calls++,h){case o.TRIANGLES:n.triangles+=d*(c/3);break;case o.LINES:n.lines+=d*(c/2);break;case o.LINE_STRIP:n.lines+=d*(c-1);break;case o.LINE_LOOP:n.lines+=d*c;break;case o.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:r}}function Y_(o,e){return o[0]-e[0]}function Z_(o,e){return Math.abs(e[1])-Math.abs(o[1])}function J_(o,e,n){const r={},s=new Float32Array(8),c=new WeakMap,h=new bt,d=[];for(let _=0;_<8;_++)d[_]=[_,0];function p(_,y,S){const x=_.morphTargetInfluences;if(e.isWebGL2===!0){const b=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=b!==void 0?b.length:0;let C=c.get(y);if(C===void 0||C.count!==T){let W=function(){ge.dispose(),c.delete(y),y.removeEventListener("dispose",W)};C!==void 0&&C.texture.dispose();const P=y.morphAttributes.position!==void 0,L=y.morphAttributes.normal!==void 0,I=y.morphAttributes.color!==void 0,O=y.morphAttributes.position||[],F=y.morphAttributes.normal||[],N=y.morphAttributes.color||[];let k=0;P===!0&&(k=1),L===!0&&(k=2),I===!0&&(k=3);let D=y.attributes.position.count*k,B=1;D>e.maxTextureSize&&(B=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const Q=new Float32Array(D*B*4*T),ge=new xs(Q,D,B,T);ge.type=Oi,ge.needsUpdate=!0;const re=k*4;for(let he=0;he<T;he++){const ye=O[he],_e=F[he],ae=N[he],we=D*B*4*he;for(let j=0;j<ye.count;j++){const K=j*re;P===!0&&(h.fromBufferAttribute(ye,j),Q[we+K+0]=h.x,Q[we+K+1]=h.y,Q[we+K+2]=h.z,Q[we+K+3]=0),L===!0&&(h.fromBufferAttribute(_e,j),Q[we+K+4]=h.x,Q[we+K+5]=h.y,Q[we+K+6]=h.z,Q[we+K+7]=0),I===!0&&(h.fromBufferAttribute(ae,j),Q[we+K+8]=h.x,Q[we+K+9]=h.y,Q[we+K+10]=h.z,Q[we+K+11]=ae.itemSize===4?h.w:1)}}C={count:T,texture:ge,size:new ue(D,B)},c.set(y,C),y.addEventListener("dispose",W)}let R=0;for(let P=0;P<x.length;P++)R+=x[P];const w=y.morphTargetsRelative?1:1-R;S.getUniforms().setValue(o,"morphTargetBaseInfluence",w),S.getUniforms().setValue(o,"morphTargetInfluences",x),S.getUniforms().setValue(o,"morphTargetsTexture",C.texture,n),S.getUniforms().setValue(o,"morphTargetsTextureSize",C.size)}else{const b=x===void 0?0:x.length;let T=r[y.id];if(T===void 0||T.length!==b){T=[];for(let L=0;L<b;L++)T[L]=[L,0];r[y.id]=T}for(let L=0;L<b;L++){const I=T[L];I[0]=L,I[1]=x[L]}T.sort(Z_);for(let L=0;L<8;L++)L<b&&T[L][1]?(d[L][0]=T[L][0],d[L][1]=T[L][1]):(d[L][0]=Number.MAX_SAFE_INTEGER,d[L][1]=0);d.sort(Y_);const C=y.morphAttributes.position,R=y.morphAttributes.normal;let w=0;for(let L=0;L<8;L++){const I=d[L],O=I[0],F=I[1];O!==Number.MAX_SAFE_INTEGER&&F?(C&&y.getAttribute("morphTarget"+L)!==C[O]&&y.setAttribute("morphTarget"+L,C[O]),R&&y.getAttribute("morphNormal"+L)!==R[O]&&y.setAttribute("morphNormal"+L,R[O]),s[L]=F,w+=F):(C&&y.hasAttribute("morphTarget"+L)===!0&&y.deleteAttribute("morphTarget"+L),R&&y.hasAttribute("morphNormal"+L)===!0&&y.deleteAttribute("morphNormal"+L),s[L]=0)}const P=y.morphTargetsRelative?1:1-w;S.getUniforms().setValue(o,"morphTargetBaseInfluence",P),S.getUniforms().setValue(o,"morphTargetInfluences",s)}}return{update:p}}function $_(o,e,n,r){let s=new WeakMap;function c(p){const _=r.render.frame,y=p.geometry,S=e.get(p,y);if(s.get(S)!==_&&(e.update(S),s.set(S,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),s.get(p)!==_&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),s.set(p,_))),p.isSkinnedMesh){const x=p.skeleton;s.get(x)!==_&&(x.update(),s.set(x,_))}return S}function h(){s=new WeakMap}function d(p){const _=p.target;_.removeEventListener("dispose",d),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:c,dispose:h}}const kf=new zt,Vf=new xs,Hf=new ho,Wf=new Yc,Xf=[],qf=[],Yf=new Float32Array(16),Zf=new Float32Array(9),Jf=new Float32Array(4);function Co(o,e,n){const r=o[0];if(r<=0||r>0)return o;const s=e*n;let c=Xf[s];if(c===void 0&&(c=new Float32Array(s),Xf[s]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=n,o[h].toArray(c,d)}return c}function _n(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function xn(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Ch(o,e){let n=qf[e];n===void 0&&(n=new Int32Array(e),qf[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function K_(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function Q_(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2fv(this.addr,e),xn(n,e)}}function j_(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(_n(n,e))return;o.uniform3fv(this.addr,e),xn(n,e)}}function e0(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4fv(this.addr,e),xn(n,e)}}function t0(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;Jf.set(r),o.uniformMatrix2fv(this.addr,!1,Jf),xn(n,r)}}function n0(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;Zf.set(r),o.uniformMatrix3fv(this.addr,!1,Zf),xn(n,r)}}function i0(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(_n(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(n,e)}else{if(_n(n,r))return;Yf.set(r),o.uniformMatrix4fv(this.addr,!1,Yf),xn(n,r)}}function r0(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function s0(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2iv(this.addr,e),xn(n,e)}}function a0(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;o.uniform3iv(this.addr,e),xn(n,e)}}function o0(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4iv(this.addr,e),xn(n,e)}}function gd(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function $f(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(_n(n,e))return;o.uniform2uiv(this.addr,e),xn(n,e)}}function c0(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(_n(n,e))return;o.uniform3uiv(this.addr,e),xn(n,e)}}function Lh(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(_n(n,e))return;o.uniform4uiv(this.addr,e),xn(n,e)}}function Kf(o,e,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTexture2D(e||kf,s)}function l0(o,e,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTexture3D(e||Hf,s)}function h0(o,e,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTextureCube(e||Wf,s)}function u0(o,e,n){const r=this.cache,s=n.allocateTextureUnit();r[0]!==s&&(o.uniform1i(this.addr,s),r[0]=s),n.setTexture2DArray(e||Vf,s)}function Qf(o){switch(o){case 5126:return K_;case 35664:return Q_;case 35665:return j_;case 35666:return e0;case 35674:return t0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return r0;case 35667:case 35671:return s0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return gd;case 36294:return $f;case 36295:return c0;case 36296:return Lh;case 35678:case 36198:case 36298:case 36306:case 35682:return Kf;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return u0}}function d0(o,e){o.uniform1fv(this.addr,e)}function f0(o,e){const n=Co(e,this.size,2);o.uniform2fv(this.addr,n)}function p0(o,e){const n=Co(e,this.size,3);o.uniform3fv(this.addr,n)}function m0(o,e){const n=Co(e,this.size,4);o.uniform4fv(this.addr,n)}function g0(o,e){const n=Co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Qc(o,e){const n=Co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function jf(o,e){const n=Co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function ep(o,e){o.uniform1iv(this.addr,e)}function _0(o,e){o.uniform2iv(this.addr,e)}function _d(o,e){o.uniform3iv(this.addr,e)}function x0(o,e){o.uniform4iv(this.addr,e)}function y0(o,e){o.uniform1uiv(this.addr,e)}function tp(o,e){o.uniform2uiv(this.addr,e)}function v0(o,e){o.uniform3uiv(this.addr,e)}function np(o,e){o.uniform4uiv(this.addr,e)}function M0(o,e,n){const r=this.cache,s=e.length,c=Ch(n,s);_n(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==s;++h)n.setTexture2D(e[h]||kf,c[h])}function S0(o,e,n){const r=this.cache,s=e.length,c=Ch(n,s);_n(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==s;++h)n.setTexture3D(e[h]||Hf,c[h])}function b0(o,e,n){const r=this.cache,s=e.length,c=Ch(n,s);_n(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==s;++h)n.setTextureCube(e[h]||Wf,c[h])}function E0(o,e,n){const r=this.cache,s=e.length,c=Ch(n,s);_n(r,c)||(o.uniform1iv(this.addr,c),xn(r,c));for(let h=0;h!==s;++h)n.setTexture2DArray(e[h]||Vf,c[h])}function T0(o){switch(o){case 5126:return d0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return Qc;case 35676:return jf;case 5124:case 35670:return ep;case 35667:case 35671:return _0;case 35668:case 35672:return _d;case 35669:case 35673:return x0;case 5125:return y0;case 36294:return tp;case 36295:return v0;case 36296:return np;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return E0}}class w0{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.setValue=Qf(n.type)}}class A0{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.size=n.size,this.setValue=T0(n.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const s=this.seq;for(let c=0,h=s.length;c!==h;++c){const d=s[c];d.setValue(e,n[d.id],r)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function ip(o,e){o.seq.push(e),o.map[e.id]=e}function C0(o,e,n){const r=o.name,s=r.length;for(xd.lastIndex=0;;){const c=xd.exec(r),h=xd.lastIndex;let d=c[1];const p=c[2]==="]",_=c[3];if(p&&(d=d|0),_===void 0||_==="["&&h+2===s){ip(n,_===void 0?new w0(d,o,e):new A0(d,o,e));break}else{let S=n.map[d];S===void 0&&(S=new R0(d),ip(n,S)),n=S}}}class Ph{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const c=e.getActiveUniform(n,s),h=e.getUniformLocation(n,c.name);C0(c,h,this)}}setValue(e,n,r,s){const c=this.map[n];c!==void 0&&c.setValue(e,r,s)}setOptional(e,n,r){const s=n[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,n,r,s){for(let c=0,h=n.length;c!==h;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,s)}}static seqWithValue(e,n){const r=[];for(let s=0,c=e.length;s!==c;++s){const h=e[s];h.id in n&&r.push(h)}return r}}function yd(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}let rp=0;function L0(o,e){const n=o.split(`
`),r=[],s=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let h=s;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${n[h]}`)}return r.join(`
`)}function P0(o){switch(o){case Gi:return["Linear","( value )"];case _t:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),["Linear","( value )"]}}function sp(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),s=o.getShaderInfoLog(e).trim();if(r&&s==="")return"";const c=/ERROR: 0:(\d+)/.exec(s);if(c){const h=parseInt(c[1]);return n.toUpperCase()+`

`+s+`

`+L0(o.getShaderSource(e),h)}else return s}function I0(o,e){const n=P0(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function D0(o,e){let n;switch(e){case Bu:n="Linear";break;case zu:n="Reinhard";break;case Gu:n="OptimizedCineon";break;case hc:n="ACESFilmic";break;case Ar:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function U0(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ra).join(`
`)}function ap(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function N0(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const c=o.getActiveAttrib(e,s),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),n[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return n}function Ra(o){return o!==""}function Ih(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function op(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F0=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(o){return o.replace(F0,B0)}const O0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function B0(o,e){let n=xt[e];if(n===void 0){const r=O0.get(e);if(r!==void 0)n=xt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return vd(n)}const cp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Md(o){return o.replace(cp,Lo)}function Lo(o,e,n,r){let s="";for(let c=parseInt(e);c<parseInt(n);c++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return s}function lp(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sd(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Vl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ea?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function hp(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ai:case yi:e="ENVMAP_TYPE_CUBE";break;case rn:e="ENVMAP_TYPE_CUBE_UV";break}return e}function z0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function G0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case eo:e="ENVMAP_BLENDING_MULTIPLY";break;case Di:e="ENVMAP_BLENDING_MIX";break;case Ou:e="ENVMAP_BLENDING_ADD";break}return e}function k0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function V0(o,e,n,r){const s=o.getContext(),c=n.defines;let h=n.vertexShader,d=n.fragmentShader;const p=Sd(n),_=hp(n),y=z0(n),S=G0(n),x=k0(n),b=n.isWebGL2?"":U0(n),T=ap(c),C=s.createProgram();let R,w,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(R=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ra).join(`
`),R.length>0&&(R+=`
`),w=[b,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Ra).join(`
`),w.length>0&&(w+=`
`)):(R=[lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),w=[b,lp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.envMap?"#define "+y:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?xt.tonemapping_pars_fragment:"",n.toneMapping!==er?D0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,I0("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ra).join(`
`)),h=vd(h),h=Ih(h,n),h=op(h,n),d=vd(d),d=Ih(d,n),d=op(d,n),h=Md(h),d=Md(d),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,R=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+R,w=["#define varying in",n.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const L=P+R+h,I=P+w+d,O=yd(s,s.VERTEX_SHADER,L),F=yd(s,s.FRAGMENT_SHADER,I);if(s.attachShader(C,O),s.attachShader(C,F),n.index0AttributeName!==void 0?s.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C),o.debug.checkShaderErrors){const D=s.getProgramInfoLog(C).trim(),B=s.getShaderInfoLog(O).trim(),Q=s.getShaderInfoLog(F).trim();let ge=!0,re=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(ge=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,C,O,F);else{const W=sp(s,O,"vertex"),he=sp(s,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Program Info Log: `+D+`
`+W+`
`+he)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(B===""||Q==="")&&(re=!1);re&&(this.diagnostics={runnable:ge,programLog:D,vertexShader:{log:B,prefix:R},fragmentShader:{log:Q,prefix:w}})}s.deleteShader(O),s.deleteShader(F);let N;this.getUniforms=function(){return N===void 0&&(N=new Ph(s,C)),N};let k;return this.getAttributes=function(){return k===void 0&&(k=N0(s,C)),k},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=rp++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=F,this}let up=0;class dp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,s=this._getShaderStage(n),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(s)===!1&&(h.add(s),s.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new Dh(e),n.set(e,r)),r}}class Dh{constructor(e){this.id=up++,this.code=e,this.usedTimes=0}}function Uh(o,e,n,r,s,c,h){const d=new Vr,p=new dp,_=[],y=s.isWebGL2,S=s.logarithmicDepthBuffer,x=s.vertexTextures;let b=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return D===0?"uv":`uv${D}`}function R(D,B,Q,ge,re){const W=ge.fog,he=re.geometry,ye=D.isMeshStandardMaterial?ge.environment:null,_e=(D.isMeshStandardMaterial?n:e).get(D.envMap||ye),ae=_e&&_e.mapping===rn?_e.image.height:null,we=T[D.type];D.precision!==null&&(b=s.getMaxPrecision(D.precision),b!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const j=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,K=j!==void 0?j.length:0;let te=0;he.morphAttributes.position!==void 0&&(te=1),he.morphAttributes.normal!==void 0&&(te=2),he.morphAttributes.color!==void 0&&(te=3);let Re,be,De,Oe;if(we){const qe=Yi[we];Re=qe.vertexShader,be=qe.fragmentShader}else Re=D.vertexShader,be=D.fragmentShader,p.update(D),De=p.getVertexShaderID(D),Oe=p.getFragmentShaderID(D);const Fe=o.getRenderTarget(),Xe=re.isInstancedMesh===!0,it=!!D.map,$=!!D.matcap,V=!!_e,G=!!D.aoMap,fe=!!D.lightMap,ie=!!D.bumpMap,xe=!!D.normalMap,Me=!!D.displacementMap,Le=!!D.emissiveMap,ce=!!D.metalnessMap,Ie=!!D.roughnessMap,ze=D.anisotropy>0,Be=D.clearcoat>0,Je=D.iridescence>0,X=D.sheen>0,z=D.transmission>0,me=ze&&!!D.anisotropyMap,Ne=Be&&!!D.clearcoatMap,q=Be&&!!D.clearcoatNormalMap,ee=Be&&!!D.clearcoatRoughnessMap,Se=Je&&!!D.iridescenceMap,ve=Je&&!!D.iridescenceThicknessMap,se=X&&!!D.sheenColorMap,Ve=X&&!!D.sheenRoughnessMap,$e=!!D.specularMap,Ke=!!D.specularColorMap,je=!!D.specularIntensityMap,Ge=z&&!!D.transmissionMap,ft=z&&!!D.thicknessMap,St=!!D.gradientMap,ne=!!D.alphaMap,Ye=D.alphaTest>0,Ae=!!D.alphaHash,ke=!!D.extensions,H=!!he.attributes.uv1,oe=!!he.attributes.uv2,Ee=!!he.attributes.uv3;let le=er;return D.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(le=o.toneMapping),{isWebGL2:y,shaderID:we,shaderType:D.type,shaderName:D.name,vertexShader:Re,fragmentShader:be,defines:D.defines,customVertexShaderID:De,customFragmentShaderID:Oe,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,instancing:Xe,instancingColor:Xe&&re.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Fe===null?o.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Gi,map:it,matcap:$,envMap:V,envMapMode:V&&_e.mapping,envMapCubeUVHeight:ae,aoMap:G,lightMap:fe,bumpMap:ie,normalMap:xe,displacementMap:x&&Me,emissiveMap:Le,normalMapObjectSpace:xe&&D.normalMapType===Dc,normalMapTangentSpace:xe&&D.normalMapType===ps,metalnessMap:ce,roughnessMap:Ie,anisotropy:ze,anisotropyMap:me,clearcoat:Be,clearcoatMap:Ne,clearcoatNormalMap:q,clearcoatRoughnessMap:ee,iridescence:Je,iridescenceMap:Se,iridescenceThicknessMap:ve,sheen:X,sheenColorMap:se,sheenRoughnessMap:Ve,specularMap:$e,specularColorMap:Ke,specularIntensityMap:je,transmission:z,transmissionMap:Ge,thicknessMap:ft,gradientMap:St,opaque:D.transparent===!1&&D.blending===Tr,alphaMap:ne,alphaTest:Ye,alphaHash:Ae,combine:D.combine,mapUv:it&&C(D.map.channel),aoMapUv:G&&C(D.aoMap.channel),lightMapUv:fe&&C(D.lightMap.channel),bumpMapUv:ie&&C(D.bumpMap.channel),normalMapUv:xe&&C(D.normalMap.channel),displacementMapUv:Me&&C(D.displacementMap.channel),emissiveMapUv:Le&&C(D.emissiveMap.channel),metalnessMapUv:ce&&C(D.metalnessMap.channel),roughnessMapUv:Ie&&C(D.roughnessMap.channel),anisotropyMapUv:me&&C(D.anisotropyMap.channel),clearcoatMapUv:Ne&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:q&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:se&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&C(D.sheenRoughnessMap.channel),specularMapUv:$e&&C(D.specularMap.channel),specularColorMapUv:Ke&&C(D.specularColorMap.channel),specularIntensityMapUv:je&&C(D.specularIntensityMap.channel),transmissionMapUv:Ge&&C(D.transmissionMap.channel),thicknessMapUv:ft&&C(D.thicknessMap.channel),alphaMapUv:ne&&C(D.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(xe||ze),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,vertexUv1s:H,vertexUv2s:oe,vertexUv3s:Ee,pointsUvs:re.isPoints===!0&&!!he.attributes.uv&&(it||ne),fog:!!W,useFog:D.fog===!0,fogExp2:W&&W.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:re.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:te,numDirLights:B.directional.length,numPointLights:B.point.length,numSpotLights:B.spot.length,numSpotLightMaps:B.spotLightMap.length,numRectAreaLights:B.rectArea.length,numHemiLights:B.hemi.length,numDirLightShadows:B.directionalShadowMap.length,numPointLightShadows:B.pointShadowMap.length,numSpotLightShadows:B.spotShadowMap.length,numSpotLightShadowsWithMaps:B.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&Q.length>0,shadowMapType:o.shadowMap.type,toneMapping:le,useLegacyLights:o._useLegacyLights,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===vn,flipSided:D.side===Wt,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionDerivatives:ke&&D.extensions.derivatives===!0,extensionFragDepth:ke&&D.extensions.fragDepth===!0,extensionDrawBuffers:ke&&D.extensions.drawBuffers===!0,extensionShaderTextureLOD:ke&&D.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:y||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:y||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:y||r.has("EXT_shader_texture_lod"),customProgramCacheKey:D.customProgramCacheKey()}}function w(D){const B=[];if(D.shaderID?B.push(D.shaderID):(B.push(D.customVertexShaderID),B.push(D.customFragmentShaderID)),D.defines!==void 0)for(const Q in D.defines)B.push(Q),B.push(D.defines[Q]);return D.isRawShaderMaterial===!1&&(P(B,D),L(B,D),B.push(o.outputColorSpace)),B.push(D.customProgramCacheKey),B.join()}function P(D,B){D.push(B.precision),D.push(B.outputColorSpace),D.push(B.envMapMode),D.push(B.envMapCubeUVHeight),D.push(B.mapUv),D.push(B.alphaMapUv),D.push(B.lightMapUv),D.push(B.aoMapUv),D.push(B.bumpMapUv),D.push(B.normalMapUv),D.push(B.displacementMapUv),D.push(B.emissiveMapUv),D.push(B.metalnessMapUv),D.push(B.roughnessMapUv),D.push(B.anisotropyMapUv),D.push(B.clearcoatMapUv),D.push(B.clearcoatNormalMapUv),D.push(B.clearcoatRoughnessMapUv),D.push(B.iridescenceMapUv),D.push(B.iridescenceThicknessMapUv),D.push(B.sheenColorMapUv),D.push(B.sheenRoughnessMapUv),D.push(B.specularMapUv),D.push(B.specularColorMapUv),D.push(B.specularIntensityMapUv),D.push(B.transmissionMapUv),D.push(B.thicknessMapUv),D.push(B.combine),D.push(B.fogExp2),D.push(B.sizeAttenuation),D.push(B.morphTargetsCount),D.push(B.morphAttributeCount),D.push(B.numDirLights),D.push(B.numPointLights),D.push(B.numSpotLights),D.push(B.numSpotLightMaps),D.push(B.numHemiLights),D.push(B.numRectAreaLights),D.push(B.numDirLightShadows),D.push(B.numPointLightShadows),D.push(B.numSpotLightShadows),D.push(B.numSpotLightShadowsWithMaps),D.push(B.shadowMapType),D.push(B.toneMapping),D.push(B.numClippingPlanes),D.push(B.numClipIntersection),D.push(B.depthPacking)}function L(D,B){d.disableAll(),B.isWebGL2&&d.enable(0),B.supportsVertexTextures&&d.enable(1),B.instancing&&d.enable(2),B.instancingColor&&d.enable(3),B.matcap&&d.enable(4),B.envMap&&d.enable(5),B.normalMapObjectSpace&&d.enable(6),B.normalMapTangentSpace&&d.enable(7),B.clearcoat&&d.enable(8),B.iridescence&&d.enable(9),B.alphaTest&&d.enable(10),B.vertexColors&&d.enable(11),B.vertexAlphas&&d.enable(12),B.vertexUv1s&&d.enable(13),B.vertexUv2s&&d.enable(14),B.vertexUv3s&&d.enable(15),B.vertexTangents&&d.enable(16),B.anisotropy&&d.enable(17),D.push(d.mask),d.disableAll(),B.fog&&d.enable(0),B.useFog&&d.enable(1),B.flatShading&&d.enable(2),B.logarithmicDepthBuffer&&d.enable(3),B.skinning&&d.enable(4),B.morphTargets&&d.enable(5),B.morphNormals&&d.enable(6),B.morphColors&&d.enable(7),B.premultipliedAlpha&&d.enable(8),B.shadowMapEnabled&&d.enable(9),B.useLegacyLights&&d.enable(10),B.doubleSided&&d.enable(11),B.flipSided&&d.enable(12),B.useDepthPacking&&d.enable(13),B.dithering&&d.enable(14),B.transmission&&d.enable(15),B.sheen&&d.enable(16),B.opaque&&d.enable(17),B.pointsUvs&&d.enable(18),D.push(d.mask)}function I(D){const B=T[D.type];let Q;if(B){const ge=Yi[B];Q=Ef.clone(ge.uniforms)}else Q=D.uniforms;return Q}function O(D,B){let Q;for(let ge=0,re=_.length;ge<re;ge++){const W=_[ge];if(W.cacheKey===B){Q=W,++Q.usedTimes;break}}return Q===void 0&&(Q=new V0(o,B,D,c),_.push(Q)),Q}function F(D){if(--D.usedTimes===0){const B=_.indexOf(D);_[B]=_[_.length-1],_.pop(),D.destroy()}}function N(D){p.remove(D)}function k(){p.dispose()}return{getParameters:R,getProgramCacheKey:w,getUniforms:I,acquireProgram:O,releaseProgram:F,releaseShaderCache:N,programs:_,dispose:k}}function fp(){let o=new WeakMap;function e(c){let h=o.get(c);return h===void 0&&(h={},o.set(c,h)),h}function n(c){o.delete(c)}function r(c,h,d){o.get(c)[h]=d}function s(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:s}}function Nh(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bn(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Ds(){const o=[];let e=0;const n=[],r=[],s=[];function c(){e=0,n.length=0,r.length=0,s.length=0}function h(S,x,b,T,C,R){let w=o[e];return w===void 0?(w={id:S.id,object:S,geometry:x,material:b,groupOrder:T,renderOrder:S.renderOrder,z:C,group:R},o[e]=w):(w.id=S.id,w.object=S,w.geometry=x,w.material=b,w.groupOrder=T,w.renderOrder=S.renderOrder,w.z=C,w.group=R),e++,w}function d(S,x,b,T,C,R){const w=h(S,x,b,T,C,R);b.transmission>0?r.push(w):b.transparent===!0?s.push(w):n.push(w)}function p(S,x,b,T,C,R){const w=h(S,x,b,T,C,R);b.transmission>0?r.unshift(w):b.transparent===!0?s.unshift(w):n.unshift(w)}function _(S,x){n.length>1&&n.sort(S||Nh),r.length>1&&r.sort(x||Bn),s.length>1&&s.sort(x||Bn)}function y(){for(let S=e,x=o.length;S<x;S++){const b=o[S];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:n,transmissive:r,transparent:s,init:c,push:d,unshift:p,finish:y,sort:_}}function bd(){let o=new WeakMap;function e(r,s){const c=o.get(r);let h;return c===void 0?(h=new Ds,o.set(r,[h])):s>=c.length?(h=new Ds,c.push(h)):h=c[s],h}function n(){o=new WeakMap}return{get:e,dispose:n}}function Po(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ze};break;case"SpotLight":n={position:new J,direction:new J,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new J,halfWidth:new J,halfHeight:new J};break}return o[e.id]=n,n}}}function jc(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let Io=0;function Do(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Uo(o,e){const n=new Po,r=jc(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let y=0;y<9;y++)s.probe.push(new J);const c=new J,h=new gt,d=new gt;function p(y,S){let x=0,b=0,T=0;for(let Q=0;Q<9;Q++)s.probe[Q].set(0,0,0);let C=0,R=0,w=0,P=0,L=0,I=0,O=0,F=0,N=0,k=0;y.sort(Do);const D=S===!0?Math.PI:1;for(let Q=0,ge=y.length;Q<ge;Q++){const re=y[Q],W=re.color,he=re.intensity,ye=re.distance,_e=re.shadow&&re.shadow.map?re.shadow.map.texture:null;if(re.isAmbientLight)x+=W.r*he*D,b+=W.g*he*D,T+=W.b*he*D;else if(re.isLightProbe)for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(re.sh.coefficients[ae],he);else if(re.isDirectionalLight){const ae=n.get(re);if(ae.color.copy(re.color).multiplyScalar(re.intensity*D),re.castShadow){const we=re.shadow,j=r.get(re);j.shadowBias=we.bias,j.shadowNormalBias=we.normalBias,j.shadowRadius=we.radius,j.shadowMapSize=we.mapSize,s.directionalShadow[C]=j,s.directionalShadowMap[C]=_e,s.directionalShadowMatrix[C]=re.shadow.matrix,I++}s.directional[C]=ae,C++}else if(re.isSpotLight){const ae=n.get(re);ae.position.setFromMatrixPosition(re.matrixWorld),ae.color.copy(W).multiplyScalar(he*D),ae.distance=ye,ae.coneCos=Math.cos(re.angle),ae.penumbraCos=Math.cos(re.angle*(1-re.penumbra)),ae.decay=re.decay,s.spot[w]=ae;const we=re.shadow;if(re.map&&(s.spotLightMap[N]=re.map,N++,we.updateMatrices(re),re.castShadow&&k++),s.spotLightMatrix[w]=we.matrix,re.castShadow){const j=r.get(re);j.shadowBias=we.bias,j.shadowNormalBias=we.normalBias,j.shadowRadius=we.radius,j.shadowMapSize=we.mapSize,s.spotShadow[w]=j,s.spotShadowMap[w]=_e,F++}w++}else if(re.isRectAreaLight){const ae=n.get(re);ae.color.copy(W).multiplyScalar(he),ae.halfWidth.set(re.width*.5,0,0),ae.halfHeight.set(0,re.height*.5,0),s.rectArea[P]=ae,P++}else if(re.isPointLight){const ae=n.get(re);if(ae.color.copy(re.color).multiplyScalar(re.intensity*D),ae.distance=re.distance,ae.decay=re.decay,re.castShadow){const we=re.shadow,j=r.get(re);j.shadowBias=we.bias,j.shadowNormalBias=we.normalBias,j.shadowRadius=we.radius,j.shadowMapSize=we.mapSize,j.shadowCameraNear=we.camera.near,j.shadowCameraFar=we.camera.far,s.pointShadow[R]=j,s.pointShadowMap[R]=_e,s.pointShadowMatrix[R]=re.shadow.matrix,O++}s.point[R]=ae,R++}else if(re.isHemisphereLight){const ae=n.get(re);ae.skyColor.copy(re.color).multiplyScalar(he*D),ae.groundColor.copy(re.groundColor).multiplyScalar(he*D),s.hemi[L]=ae,L++}}P>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=He.LTC_FLOAT_1,s.rectAreaLTC2=He.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=He.LTC_HALF_1,s.rectAreaLTC2=He.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=x,s.ambient[1]=b,s.ambient[2]=T;const B=s.hash;(B.directionalLength!==C||B.pointLength!==R||B.spotLength!==w||B.rectAreaLength!==P||B.hemiLength!==L||B.numDirectionalShadows!==I||B.numPointShadows!==O||B.numSpotShadows!==F||B.numSpotMaps!==N)&&(s.directional.length=C,s.spot.length=w,s.rectArea.length=P,s.point.length=R,s.hemi.length=L,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=F+N-k,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=k,B.directionalLength=C,B.pointLength=R,B.spotLength=w,B.rectAreaLength=P,B.hemiLength=L,B.numDirectionalShadows=I,B.numPointShadows=O,B.numSpotShadows=F,B.numSpotMaps=N,s.version=Io++)}function _(y,S){let x=0,b=0,T=0,C=0,R=0;const w=S.matrixWorldInverse;for(let P=0,L=y.length;P<L;P++){const I=y[P];if(I.isDirectionalLight){const O=s.directional[x];O.direction.setFromMatrixPosition(I.matrixWorld),c.setFromMatrixPosition(I.target.matrixWorld),O.direction.sub(c),O.direction.transformDirection(w),x++}else if(I.isSpotLight){const O=s.spot[T];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(w),O.direction.setFromMatrixPosition(I.matrixWorld),c.setFromMatrixPosition(I.target.matrixWorld),O.direction.sub(c),O.direction.transformDirection(w),T++}else if(I.isRectAreaLight){const O=s.rectArea[C];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(w),d.identity(),h.copy(I.matrixWorld),h.premultiply(w),d.extractRotation(h),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),O.halfWidth.applyMatrix4(d),O.halfHeight.applyMatrix4(d),C++}else if(I.isPointLight){const O=s.point[b];O.position.setFromMatrixPosition(I.matrixWorld),O.position.applyMatrix4(w),b++}else if(I.isHemisphereLight){const O=s.hemi[R];O.direction.setFromMatrixPosition(I.matrixWorld),O.direction.transformDirection(w),R++}}}return{setup:p,setupView:_,state:s}}function No(o,e){const n=new Uo(o,e),r=[],s=[];function c(){r.length=0,s.length=0}function h(S){r.push(S)}function d(S){s.push(S)}function p(S){n.setup(r,S)}function _(S){n.setupView(r,S)}return{init:c,state:{lightsArray:r,shadowsArray:s,lights:n},setupLights:p,setupLightsView:_,pushLight:h,pushShadow:d}}function pp(o,e){let n=new WeakMap;function r(c,h=0){const d=n.get(c);let p;return d===void 0?(p=new No(o,e),n.set(c,[p])):h>=d.length?(p=new No(o,e),d.push(p)):p=d[h],p}function s(){n=new WeakMap}return{get:r,dispose:s}}class Fo extends un{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zi,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ca extends un{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );