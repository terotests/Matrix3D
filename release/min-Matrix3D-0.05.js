(function(){var t={},i=function(){!function(t){t.__traitInit&&!t.hasOwnProperty("__traitInit")&&(t.__traitInit=t.__traitInit.slice()),t.__traitInit||(t.__traitInit=[]),t.__traitInit.push(function(){this._data={m00:1,m01:0,m02:0,m03:0,m10:0,m11:1,m12:0,m13:0,m20:0,m21:0,m22:1,m23:0,m30:0,m31:0,m32:0,m33:1}}),t.m00=function(t){return"undefined"!=typeof t?(this._data.m00!=t&&(this._dirty=!0),this._data.m00=t,this):this._data.m00},t.m01=function(t){return"undefined"!=typeof t?(this._data.m01!=t&&(this._dirty=!0),this._data.m01=t,this):this._data.m01},t.m02=function(t){return"undefined"!=typeof t?(this._data.m02!=t&&(this._dirty=!0),this._data.m02=t,this):this._data.m02},t.m03=function(t){return"undefined"!=typeof t?(this._data.m03!=t&&(this._dirty=!0),this._data.m03=t,this):this._data.m03},t.m10=function(t){return"undefined"!=typeof t?(this._data.m10!=t&&(this._dirty=!0),this._data.m10=t,this):this._data.m10},t.m11=function(t){return"undefined"!=typeof t?(this._data.m11!=t&&(this._dirty=!0),this._data.m11=t,this):this._data.m11},t.m12=function(t){return"undefined"!=typeof t?(this._data.m12!=t&&(this._dirty=!0),this._data.m12=t,this):this._data.m12},t.m13=function(t){return"undefined"!=typeof t?(this._data.m13!=t&&(this._dirty=!0),this._data.m13=t,this):this._data.m13},t.m20=function(t){return"undefined"!=typeof t?(this._data.m20!=t&&(this._dirty=!0),this._data.m20=t,this):this._data.m20},t.m21=function(t){return"undefined"!=typeof t?(this._data.m21!=t&&(this._dirty=!0),this._data.m21=t,this):this._data.m21},t.m22=function(t){return"undefined"!=typeof t?(this._data.m22!=t&&(this._dirty=!0),this._data.m22=t,this):this._data.m22},t.m23=function(t){return"undefined"!=typeof t?(this._data.m23!=t&&(this._dirty=!0),this._data.m23=t,this):this._data.m23},t.m30=function(t){return"undefined"!=typeof t?(this._data.m30!=t&&(this._dirty=!0),this._data.m30=t,this):this._data.m30},t.m31=function(t){return"undefined"!=typeof t?(this._data.m31!=t&&(this._dirty=!0),this._data.m31=t,this):this._data.m31},t.m32=function(t){return"undefined"!=typeof t?(this._data.m32!=t&&(this._dirty=!0),this._data.m32=t,this):this._data.m32},t.m33=function(t){return"undefined"!=typeof t?(this._data.m33!=t&&(this._dirty=!0),this._data.m33=t,this):this._data.m33}}(this),function(t){var i;t.applyTransformations=function(t,i,s,a){if(!t._scaleMatrix&&!t._rotMatrix&&!t._transMatrix&&s){var r=s(t);if(r){var n=this;r.forEach(function(t){n.applyTransformations(t,i,s,a)})}}var e=m();if(i=i?i.createCopy():m(),t._lastParentMatrix?t._lastParentMatrix.copyFrom(i):t._lastParentMatrix=i.createCopy(),t._pivotPoint){var h=m();h.translate({x:-1*t._pivotPoint.x,y:-1*t._pivotPoint.y,z:-1*(t._pivotPoint.z||0)})}if(t._transMatrix){e.matMul(t._transMatrix);var o=i.createCopy();o.matMul(t._transMatrix),t._beforeRot=o}if(t._scaleMatrix&&e.matMul(t._scaleMatrix),t._rotMatrix&&e.matMul(t._rotMatrix),h&&e.matMul(h),t._localTransform=e,i.matMul(e),t._renderMatrix||(t._renderMatrix=new m),t._renderMatrix.copyFrom(i),a){var d=a._renderMatrix.createCopy().inverse();d.matMul(t._renderMatrix),t._projectionMatrix=d}if(s){var r=s(t);if(r){var u=t._renderMatrix,n=this;r.forEach(function(t){n.applyTransformations(t,u,s,a)})}}},t.copyFrom=function(t){var i=t._data;this._data.m00=i.m00,this._data.m01=i.m01,this._data.m02=i.m02,this._data.m03=i.m03,this._data.m10=i.m10,this._data.m11=i.m11,this._data.m12=i.m12,this._data.m13=i.m13,this._data.m20=i.m20,this._data.m21=i.m21,this._data.m22=i.m22,this._data.m23=i.m23,this._data.m30=i.m30,this._data.m31=i.m31,this._data.m32=i.m32,this._data.m33=i.m33},t.createCopy=function(){var t=this.createIdentity();return t.updateFromParams(this.m00(),this.m01(),this.m02(),this.m03(),this.m10(),this.m11(),this.m12(),this.m13(),this.m20(),this.m21(),this.m22(),this.m23(),this.m30(),this.m31(),this.m32(),this.m33()),t},t.createIdentity=function(){return m()},t.createThreeMatrix=function(){var t=new THREE.Matrix4;return t.set(this.m00(),this.m10(),this.m20(),this.m30(),this.m01(),this.m11(),this.m21(),this.m31(),this.m02(),this.m12(),this.m22(),this.m32(),this.m03(),this.m13(),this.m23(),this.m33()),t},t.createTransformCopy=function(){var t=m();return t.m30(this.m30()),t.m31(this.m31()),t.m32(this.m32()),t},t.det=function(){var t=this.m00(),i=this.m01(),m=this.m02(),s=this.m03(),a=this.m10(),r=this.m11(),n=this.m12(),e=this.m13(),h=this.m20(),o=this.m21(),d=this.m22(),u=this.m23(),f=this.m30(),_=this.m31(),c=this.m32(),y=this.m33(),x=t*r-a*i,l=t*o-h*i,p=t*_-f*i,v=a*o-h*r,M=a*_-f*r,F=h*_-f*o,z=m*e-n*s,N=m*u-d*s,g=m*y-c*s,w=n*u-d*e,C=n*y-c*e,P=d*y-c*u;return x*P-l*C+p*w+v*g-M*N+F*z},t.getCSSMatrix3D=function(){i=this.systemHas3D();var t=5;if(i){var m="matrix3d("+this.m00().toFixed(t)+", "+this.m01().toFixed(t)+", "+this.m02().toFixed(t)+", "+this.m03().toFixed(t)+","+this.m10().toFixed(t)+", "+this.m11().toFixed(t)+", "+this.m12().toFixed(t)+", "+this.m13().toFixed(t)+","+this.m20().toFixed(t)+", "+this.m21().toFixed(t)+", "+this.m22().toFixed(t)+", "+this.m23().toFixed(t)+","+this.m30().toFixed(t)+", "+this.m31().toFixed(t)+", "+this.m32().toFixed(t)+", "+this.m33().toFixed(t)+")";return"transform:"+m+";-webkit-transform:"+m+";-ms-transform:"+m+";-webkit-transform-origin:0 0;-ms-transform-origin:0 0;"}var m="matrix("+this.m00().toFixed(t)+", "+this.m01().toFixed(t)+", "+this.m10().toFixed(t)+", "+this.m11().toFixed(t)+", "+this.m30().toFixed(t)+", "+this.m31().toFixed(t)+")";return"transform:"+m+";-webkit-transform:"+m+";-ms-transform:"+m+";-webkit-transform-origin:0 0;-ms-transform-origin:0 0;"},t.getRotation2D=function(){var t,i=this.m00(),m=this.m01();return t=m>=0?Math.acos(i):-1*Math.acos(i)},t.getSVGTransform=function(){return"matrix("+this.m00().toFixed(5)+","+this.m01().toFixed(5)+","+this.m10().toFixed(5)+","+this.m11().toFixed(5)+","+this.m30().toFixed(5)+","+this.m31().toFixed(5)+")"},t.intersectPlane=function(t,i,m){var s=this.normalizeVector3D({x:this.m20(),y:this.m21(),z:this.m22()});if(m)var a={x:m.x-t.x,y:m.y-t.y,z:m.z-t.z};else var a={x:this.m30()-t.x,y:this.m31()-t.y,z:this.m32()-t.z};var r=a.x*s.x+a.y*s.y+a.z*s.z,n={x:i.x-t.x,y:i.y-t.y,z:i.z-t.z},e=n.x*s.x+n.y*s.y+n.z*s.z;if(Math.abs(r)>0&&Math.abs(e)>0){var h=r/e;if(Math.abs(h)>0){var o={x:t.x+n.x*h,y:t.y+n.y*h,z:t.z+n.z*h};return o}}},t.inverse=function(){var t=this.m00(),i=this.m01(),m=this.m02(),s=this.m03(),a=this.m10(),r=this.m11(),n=this.m12(),e=this.m13(),h=this.m20(),o=this.m21(),d=this.m22(),u=this.m23(),f=this.m30(),_=this.m31(),c=this.m32(),y=this.m33(),x=t*r-a*i,l=t*o-h*i,p=t*_-f*i,v=a*o-h*r,M=a*_-f*r,F=h*_-f*o,z=m*e-n*s,N=m*u-d*s,g=m*y-c*s,w=n*u-d*e,C=n*y-c*e,P=d*y-c*u,I=x*P-l*C+p*w+v*g-M*N+F*z;if(0!=I){var D=1/I;return this.m00((r*P-o*C+_*w)*D),this.m01((-i*P+o*g-_*N)*D),this.m02((i*C-r*g+_*z)*D),this.m03((-i*w+r*N-o*z)*D),this.m10((-a*P+h*C-f*w)*D),this.m11((t*P-h*g+f*N)*D),this.m12((-t*C+a*g-f*z)*D),this.m13((t*w-a*N+h*z)*D),this.m20((e*F-u*M+y*v)*D),this.m21((-s*F+u*p-y*l)*D),this.m22((s*M-e*p+y*x)*D),this.m23((-s*v+e*l-u*x)*D),this.m30((-n*F+d*M-c*v)*D),this.m31((m*F-d*p+c*l)*D),this.m32((-m*M+n*p-c*x)*D),this.m33((m*v-n*l+d*x)*D),this}},t.isValidMatrix=function(){var t=this._data;return isNaN(t.m00)?!1:isNaN(t.m01)?!1:isNaN(t.m02)?!1:isNaN(t.m03)?!1:isNaN(t.m10)?!1:isNaN(t.m11)?!1:isNaN(t.m12)?!1:isNaN(t.m13)?!1:isNaN(t.m20)?!1:isNaN(t.m21)?!1:isNaN(t.m22)?!1:isNaN(t.m23)?!1:isNaN(t.m30)?!1:isNaN(t.m31)?!1:isNaN(t.m32)?!1:isNaN(t.m33)?!1:!0},t.log=function(){console.log(this._data)},t.matMul=function(t){var i=this.m00(),m=this.m01(),s=this.m02(),a=this.m03(),r=this.m10(),n=this.m11(),e=this.m12(),h=this.m13(),o=this.m20(),d=this.m21(),u=this.m22(),f=this.m23(),_=this.m30(),c=this.m31(),y=this.m32(),x=this.m33(),l=t.m00(),p=t.m01(),v=t.m02(),M=t.m03(),F=t.m10(),z=t.m11(),N=t.m12(),g=t.m13(),w=t.m20(),C=t.m21(),P=t.m22(),I=t.m23(),D=t.m30(),T=t.m31(),b=t.m32(),V=t.m33();return this.updateFromParams(i*l+r*p+o*v+_*M,m*l+n*p+d*v+c*M,s*l+e*p+u*v+y*M,a*l+h*p+f*v+x*M,i*F+r*z+o*N+_*g,m*F+n*z+d*N+c*g,s*F+e*z+u*N+y*g,a*F+h*z+f*N+x*g,i*w+r*C+o*P+_*I,m*w+n*C+d*P+c*I,s*w+e*C+u*P+y*I,a*w+h*C+f*P+x*I,i*D+r*T+o*b+_*V,m*D+n*T+d*b+c*V,s*D+e*T+u*b+y*V,a*D+h*T+f*b+x*V),this},t.normalize=function(){this.copyFrom(new m)},t.normalizeVector3D=function(t){var i=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);return 0==i||isNaN(i)?{x:1,y:0,z:0}:{x:t.x/i,y:t.y/i,z:t.z/i}},t.projectVector=function(t){var i=this.m00(),m=this.m01(),s=this.m02(),a=this.m03(),r=this.m10(),n=this.m11(),e=this.m12(),h=this.m13(),o=this.m20(),d=this.m21(),u=this.m22(),f=this.m23(),_=this.m30(),c=this.m31(),y=this.m32(),x=this.m33();return{x:i*t.x+r*t.y+o*t.z+_*t.w,y:m*t.x+n*t.y+d*t.z+c*t.w,z:s*t.x+e*t.y+u*t.z+y*t.w,w:a*t.x+h*t.y+f*t.z+x*t.w}},t.rotate=function(t,i){var t=this.normalizeVector3D(t),m=t.x,s=t.y,a=t.z,r=Math.cos(i),n=Math.sin(i);return this.updateFromParams(r+m*m*(1-r),s*m*(1-r)+a*n,a*m*(1-r)-s*n,0,s*m*(1-r)-a*n,r+s*s*(1-r),a*s*(1-r)+m*n,0,a*m*(1-r)+s*n,s*a*(1-r)-m*n,r+a*a*(1-r),0,0,0,0,1),this},t.scale=function(t){return this.updateFromParams(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1),this},t.screenProjection=function(t,i){var m=this.projectVector(t);if(!i.d)return a=m.x,r=m.y,{x:a,y:r};var s=i.d-m.z,a=m.x-(i.cx||500),r=m.y-(i.cy||500);return s>0?{x:i.cx+a*i.d/s,y:i.cy+r*i.d/s}:void 0},t.setCanvasContext=function(t){t.setTransform(this.m00(),this.m01(),this.m10(),this.m11(),this.m30(),this.m31())},t.setDomContext=function(t){this.setCanvasContext(t)},t.systemHas3D=function(t){if("undefined"!=typeof i)return i;if("undefined"==typeof window)return!1;if(!window.getComputedStyle)return!1;var m,s=document.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(s,null);for(var t in a)void 0!==s.style[t]&&(s.style[t]="translate3d(1px,1px,1px)",m=window.getComputedStyle(s).getPropertyValue(a[t]));return document.body.removeChild(s),void 0!==m&&m.length>0&&"none"!==m},t.translate=function(t){return this.updateFromParams(1,0,0,0,0,1,0,0,0,0,1,0,t.x,t.y,t.z,1),this},t.updateFromParams=function(){var t=this._data,i=0;t.m00=arguments[i++],t.m01=arguments[i++],t.m02=arguments[i++],t.m03=arguments[i++],t.m10=arguments[i++],t.m11=arguments[i++],t.m12=arguments[i++],t.m13=arguments[i++],t.m20=arguments[i++],t.m21=arguments[i++],t.m22=arguments[i++],t.m23=arguments[i++],t.m30=arguments[i++],t.m31=arguments[i++],t.m32=arguments[i++],t.m33=arguments[i++]}}(this)},m=function(t,i,s,a,r,n,e,h){var o,d=this;if(!(d instanceof m))return new m(t,i,s,a,r,n,e,h);var u=[t,i,s,a,r,n,e,h];if(d.__factoryClass)if(d.__factoryClass.forEach(function(t){o=t.apply(d,u)}),"function"==typeof o){if(o._classInfo.name!=m._classInfo.name)return new o(t,i,s,a,r,n,e,h)}else if(o)return o;d.__traitInit?d.__traitInit.forEach(function(t){t.apply(d,u)}):"function"==typeof d.init&&d.init.apply(d,u)};m._classInfo={name:"Matrix3D"},m.prototype=new i,function(){"undefined"!=typeof define&&null!==define&&null!=define.amd?(t.Matrix3D=m,this.Matrix3D=m):"undefined"!=typeof module&&null!==module&&null!=module.exports?module.exports.Matrix3D=m:this.Matrix3D=m}.call(new Function("return this")()),"undefined"!=typeof define&&null!==define&&null!=define.amd&&define(t)}).call(new Function("return this")());