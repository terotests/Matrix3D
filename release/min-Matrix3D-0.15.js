(function(){var t={},i=function(){!function(t){var i,s,r,m;t.addChangeListener=function(t){this._chListeners||(this._chListeners=[]),this._chListeners.push(t)},t.addToBatch=function(){s&&(i[this._id]=this)},t.guid=function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)},t.__traitInit&&!t.hasOwnProperty("__traitInit")&&(t.__traitInit=t.__traitInit.slice()),t.__traitInit||(t.__traitInit=[]),t.__traitInit.push(function(t){if(this._data={m00:1,m01:0,m02:0,m03:0,m10:0,m11:1,m12:0,m13:0,m20:0,m21:0,m22:1,m23:0,m30:0,m31:0,m32:0,m33:1},i||(i={},m={}),this.isArray(t)){this._subMatrixes=t;for(var n=this,a=0;a<t.length;a++){var e=t[a];e.onChange(function(){m[n._id]=n})}this._id=this.guid()}else{var h=t;this._id=h?"t":this.guid()}r||(r=!0,"undefined"!=typeof later?(later().onFrame(function(){for(var t in m){var s=m[t],r=s._subMatrixes;s.normalize(),r.forEach(function(t){s.matMul(t)}),delete m[t]}for(var t in i){var s=i[t];s._chListeners&&s._chListeners.forEach(function(t){t(s)}),delete i[t]}}),s=!0):s=!1)}),t.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)},t.m00=function(t){return"undefined"!=typeof t?(this._data.m00!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m00=t,this):this._data.m00},t.m01=function(t){return"undefined"!=typeof t?(this._data.m01!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m01=t,this):this._data.m01},t.m02=function(t){return"undefined"!=typeof t?(this._data.m02!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m02=t,this):this._data.m02},t.m03=function(t){return"undefined"!=typeof t?(this._data.m03!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m03=t,this):this._data.m03},t.m10=function(t){return"undefined"!=typeof t?(this._data.m10!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m10=t,this):this._data.m10},t.m11=function(t){return"undefined"!=typeof t?(this._data.m11!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m11=t,this):this._data.m11},t.m12=function(t){return"undefined"!=typeof t?(this._data.m12!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m12=t,this):this._data.m12},t.m13=function(t){return"undefined"!=typeof t?(this._data.m13!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m13=t,this):this._data.m13},t.m20=function(t){return"undefined"!=typeof t?(this._data.m20!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m20=t,this):this._data.m20},t.m21=function(t){return"undefined"!=typeof t?(this._data.m21!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m21=t,this):this._data.m21},t.m22=function(t){return"undefined"!=typeof t?(this._data.m22!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m22=t,this):this._data.m22},t.m23=function(t){return"undefined"!=typeof t?(this._data.m23!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m23=t,this):this._data.m23},t.m30=function(t){return"undefined"!=typeof t?(this._data.m30!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m30=t,this):this._data.m30},t.m31=function(t){return"undefined"!=typeof t?(this._data.m31!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m31=t,this):this._data.m31},t.m32=function(t){return"undefined"!=typeof t?(this._data.m32!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m32=t,this):this._data.m32},t.m33=function(t){return"undefined"!=typeof t?(this._data.m33!=t&&(this._dirty=!0,s&&(i[this._id]=this)),this._data.m33=t,this):this._data.m33},t.onChange=function(t){this._chListeners||(this._chListeners=[]),this._chListeners.push(t)},t.removeListener=function(t){if(this._chListeners){var i=this._chListeners.indexOf(t);i>=0&&this._chListeners.splice(i,1)}},t.setBatching=function(t){s=t}}(this),function(t){var i;t.applyTransformations=function(t,i,r,m){if(!t._scaleMatrix&&!t._rotMatrix&&!t._transMatrix&&r){var n=r(t);if(n){var a=this;n.forEach(function(t){a.applyTransformations(t,i,r,m)})}}var e=s();if(t._localTransform||(t._localTransform=s()),i=i?i.createCopy():s(),t._lastParentMatrix?t._lastParentMatrix.copyFrom(i):t._lastParentMatrix=i.createCopy(),t._pivotPoint){var h=s();h.translate({x:-1*t._pivotPoint.x,y:-1*t._pivotPoint.y,z:-1*(t._pivotPoint.z||0)})}if(t._transMatrix){e.matMul(t._transMatrix);var o=i.createCopy();o.matMul(t._transMatrix),t._beforeRot=o}if(t._scaleMatrix&&e.matMul(t._scaleMatrix),t._rotMatrix&&e.matMul(t._rotMatrix),h&&e.matMul(h),t._localTransform.copyFrom(e),i.matMul(e),t._renderMatrix||(t._renderMatrix=new s),t._renderMatrix.copyFrom(i),m){var d=m._renderMatrix.createCopy().inverse();d.matMul(t._renderMatrix),t._projectionMatrix||(t._projectionMatrix=new s),t._projectionMatrix.copyFrom(d)}if(r){var n=r(t);if(n){var f=t._renderMatrix,a=this;n.forEach(function(t){a.applyTransformations(t,f,r,m)})}}},t.copyFrom=function(t){var i=t._data;this.m00(i.m00),this.m01(i.m01),this.m02(i.m02),this.m03(i.m03),this.m10(i.m10),this.m11(i.m11),this.m12(i.m12),this.m13(i.m13),this.m20(i.m20),this.m21(i.m21),this.m22(i.m22),this.m23(i.m23),this.m30(i.m30),this.m31(i.m31),this.m32(i.m32),this.m33(i.m33)},t.createCopy=function(){var t=this.createIdentity();return t.updateFromParams(this.m00(),this.m01(),this.m02(),this.m03(),this.m10(),this.m11(),this.m12(),this.m13(),this.m20(),this.m21(),this.m22(),this.m23(),this.m30(),this.m31(),this.m32(),this.m33()),t},t.createIdentity=function(){return s()},t.createThreeMatrix=function(){var t=new THREE.Matrix4;return t.set(this.m00(),this.m10(),this.m20(),this.m30(),this.m01(),this.m11(),this.m21(),this.m31(),this.m02(),this.m12(),this.m22(),this.m32(),this.m03(),this.m13(),this.m23(),this.m33()),t},t.createTransformCopy=function(){var t=s();return t.m30(this.m30()),t.m31(this.m31()),t.m32(this.m32()),t},t.det=function(){var t=this.m00(),i=this.m01(),s=this.m02(),r=this.m03(),m=this.m10(),n=this.m11(),a=this.m12(),e=this.m13(),h=this.m20(),o=this.m21(),d=this.m22(),f=this.m23(),u=this.m30(),c=this.m31(),_=this.m32(),y=this.m33(),x=t*n-m*i,p=t*o-h*i,l=t*c-u*i,v=m*o-h*n,M=m*c-u*n,g=h*c-u*o,F=s*e-a*r,z=s*f-d*r,N=s*y-_*r,w=a*f-d*e,D=a*y-_*e,C=d*y-_*f;return x*C-p*D+l*w+v*N-M*z+g*F},t.dragTransformation=function(t,i){var s={},r=this.intersectPlane({x:i.screenWidth/2,y:i.screenHeight/2,z:i.perspective},{x:t.mx-i.offset.x,y:t.my-i.offset.y,z:0}),m=this.createCopy().inverse(),n=m.projectVector({x:r.x,y:r.y,z:r.z,w:1});return t.start&&(t.spaceSx=n.x,t.spaceSy=n.y),t.spaceDx=parseInt(n.x-t.spaceSx),t.spaceDy=parseInt(n.y-t.spaceSy),s.sx=t.spaceSx,s.sy=t.spaceSy,s.x=t.spaceSx+t.spaceDx,s.y=t.spaceSy+t.spaceDy,s.dx=t.spaceDx,s.dy=t.spaceDy,s},t.get2DTransform=function(t){var i=t||3;return"matrix("+this.m00().toFixed(i)+", "+this.m01().toFixed(i)+", "+this.m10().toFixed(i)+", "+this.m11().toFixed(i)+", "+this.m30().toFixed(i)+", "+this.m31().toFixed(i)+")"},t.get3DTransform=function(t){var i=t||3;return"matrix3d("+this.m00().toFixed(i)+", "+this.m01().toFixed(i)+", "+this.m02().toFixed(i)+", "+this.m03().toFixed(i)+","+this.m10().toFixed(i)+", "+this.m11().toFixed(i)+", "+this.m12().toFixed(i)+", "+this.m13().toFixed(i)+","+this.m20().toFixed(i)+", "+this.m21().toFixed(i)+", "+this.m22().toFixed(i)+", "+this.m23().toFixed(i)+","+this.m30().toFixed(i)+", "+this.m31().toFixed(i)+", "+this.m32().toFixed(i)+", "+this.m33().toFixed(i)+")"},t.getCSSMatrix2D=function(){var t=this.get2DTransform();return"transform:"+t+";-webkit-transform:"+t+";-ms-transform:"+t+";-webkit-transform-origin:0 0;-ms-transform-origin:0 0;"},t.getCSSMatrix3D=function(){i=this.systemHas3D();if(i){var t=this.get3DTransform();return"transform:"+t+";-webkit-transform:"+t+";-ms-transform:"+t+";-webkit-transform-origin:0 0;-ms-transform-origin:0 0;"}return getCSSMatrix2D()},t.getRotation2D=function(){var t,i=this.m00(),s=this.m01();return t=s>=0?Math.acos(i):-1*Math.acos(i)},t.getSVGTransform=function(){return"matrix("+this.m00().toFixed(5)+","+this.m01().toFixed(5)+","+this.m10().toFixed(5)+","+this.m11().toFixed(5)+","+this.m30().toFixed(5)+","+this.m31().toFixed(5)+")"},t.intersectPlane=function(t,i,s){var r=this.normalizeVector3D({x:this.m20(),y:this.m21(),z:this.m22()});if(s)var m={x:s.x-t.x,y:s.y-t.y,z:s.z-t.z};else var m={x:this.m30()-t.x,y:this.m31()-t.y,z:this.m32()-t.z};var n=m.x*r.x+m.y*r.y+m.z*r.z,a={x:i.x-t.x,y:i.y-t.y,z:i.z-t.z},e=a.x*r.x+a.y*r.y+a.z*r.z;if(Math.abs(n)>0&&Math.abs(e)>0){var h=n/e;if(Math.abs(h)>0){var o={x:t.x+a.x*h,y:t.y+a.y*h,z:t.z+a.z*h};return o}}},t.inverse=function(){var t=this.m00(),i=this.m01(),s=this.m02(),r=this.m03(),m=this.m10(),n=this.m11(),a=this.m12(),e=this.m13(),h=this.m20(),o=this.m21(),d=this.m22(),f=this.m23(),u=this.m30(),c=this.m31(),_=this.m32(),y=this.m33(),x=t*n-m*i,p=t*o-h*i,l=t*c-u*i,v=m*o-h*n,M=m*c-u*n,g=h*c-u*o,F=s*e-a*r,z=s*f-d*r,N=s*y-_*r,w=a*f-d*e,D=a*y-_*e,C=d*y-_*f,T=x*C-p*D+l*w+v*N-M*z+g*F;if(0!=T){var S=1/T;return this.m00((n*C-o*D+c*w)*S),this.m01((-i*C+o*N-c*z)*S),this.m02((i*D-n*N+c*F)*S),this.m03((-i*w+n*z-o*F)*S),this.m10((-m*C+h*D-u*w)*S),this.m11((t*C-h*N+u*z)*S),this.m12((-t*D+m*N-u*F)*S),this.m13((t*w-m*z+h*F)*S),this.m20((e*g-f*M+y*v)*S),this.m21((-r*g+f*l-y*p)*S),this.m22((r*M-e*l+y*x)*S),this.m23((-r*v+e*p-f*x)*S),this.m30((-a*g+d*M-_*v)*S),this.m31((s*g-d*l+_*p)*S),this.m32((-s*M+a*l-_*x)*S),this.m33((s*v-a*p+d*x)*S),this}},t.isValidMatrix=function(){var t=this._data;return isNaN(t.m00)?!1:isNaN(t.m01)?!1:isNaN(t.m02)?!1:isNaN(t.m03)?!1:isNaN(t.m10)?!1:isNaN(t.m11)?!1:isNaN(t.m12)?!1:isNaN(t.m13)?!1:isNaN(t.m20)?!1:isNaN(t.m21)?!1:isNaN(t.m22)?!1:isNaN(t.m23)?!1:isNaN(t.m30)?!1:isNaN(t.m31)?!1:isNaN(t.m32)?!1:isNaN(t.m33)?!1:!0},t.log=function(){console.log(this._data)},t.matMul=function(t){var i=this.m00(),s=this.m01(),r=this.m02(),m=this.m03(),n=this.m10(),a=this.m11(),e=this.m12(),h=this.m13(),o=this.m20(),d=this.m21(),f=this.m22(),u=this.m23(),c=this.m30(),_=this.m31(),y=this.m32(),x=this.m33(),p=t.m00(),l=t.m01(),v=t.m02(),M=t.m03(),g=t.m10(),F=t.m11(),z=t.m12(),N=t.m13(),w=t.m20(),D=t.m21(),C=t.m22(),T=t.m23(),S=t.m30(),b=t.m31(),P=t.m32(),I=t.m33();return this.updateFromParams(i*p+n*l+o*v+c*M,s*p+a*l+d*v+_*M,r*p+e*l+f*v+y*M,m*p+h*l+u*v+x*M,i*g+n*F+o*z+c*N,s*g+a*F+d*z+_*N,r*g+e*F+f*z+y*N,m*g+h*F+u*z+x*N,i*w+n*D+o*C+c*T,s*w+a*D+d*C+_*T,r*w+e*D+f*C+y*T,m*w+h*D+u*C+x*T,i*S+n*b+o*P+c*I,s*S+a*b+d*P+_*I,r*S+e*b+f*P+y*I,m*S+h*b+u*P+x*I),this},t.normalize=function(){this.copyFrom(new s)},t.normalizeVector3D=function(t){var i=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z);return 0==i||isNaN(i)?{x:1,y:0,z:0}:{x:t.x/i,y:t.y/i,z:t.z/i}},t.projectVector=function(t){var i=this.m00(),s=this.m01(),r=this.m02(),m=this.m03(),n=this.m10(),a=this.m11(),e=this.m12(),h=this.m13(),o=this.m20(),d=this.m21(),f=this.m22(),u=this.m23(),c=this.m30(),_=this.m31(),y=this.m32(),x=this.m33();return{x:i*t.x+n*t.y+o*t.z+c*t.w,y:s*t.x+a*t.y+d*t.z+_*t.w,z:r*t.x+e*t.y+f*t.z+y*t.w,w:m*t.x+h*t.y+u*t.z+x*t.w}},t.rotate=function(t,i){var t=this.normalizeVector3D(t),s=t.x,r=t.y,m=t.z,n=Math.cos(i),a=Math.sin(i);return this.updateFromParams(n+s*s*(1-n),r*s*(1-n)+m*a,m*s*(1-n)-r*a,0,r*s*(1-n)-m*a,n+r*r*(1-n),m*r*(1-n)+s*a,0,m*s*(1-n)+r*a,r*m*(1-n)-s*a,n+m*m*(1-n),0,0,0,0,1),this},t.scale=function(t){return this.updateFromParams(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1),this},t.screenProjection=function(t,i){var s=this.projectVector(t);if(!i.d)return m=s.x,n=s.y,{x:m,y:n};var r=i.d-s.z,m=s.x-(i.cx||500),n=s.y-(i.cy||500);return r>0?{x:i.cx+m*i.d/r,y:i.cy+n*i.d/r}:void 0},t.setCanvasContext=function(t){t.setTransform(this.m00(),this.m01(),this.m10(),this.m11(),this.m30(),this.m31())},t.setDomContext=function(t){this.setCanvasContext(t)},t.systemHas3D=function(t){if("undefined"!=typeof i)return i;if("undefined"==typeof window)return!1;if(!window.getComputedStyle)return!1;var s,r=document.createElement("p"),m={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};document.body.insertBefore(r,null);for(var t in m)void 0!==r.style[t]&&(r.style[t]="translate3d(1px,1px,1px)",s=window.getComputedStyle(r).getPropertyValue(m[t]));return document.body.removeChild(r),void 0!==s&&s.length>0&&"none"!==s},t.translate=function(t){return this.updateFromParams(1,0,0,0,0,1,0,0,0,0,1,0,t.x,t.y,t.z,1),this},t.updateFromParams=function(){var t=0;this.m00(arguments[t++]),this.m01(arguments[t++]),this.m02(arguments[t++]),this.m03(arguments[t++]),this.m10(arguments[t++]),this.m11(arguments[t++]),this.m12(arguments[t++]),this.m13(arguments[t++]),this.m20(arguments[t++]),this.m21(arguments[t++]),this.m22(arguments[t++]),this.m23(arguments[t++]),this.m30(arguments[t++]),this.m31(arguments[t++]),this.m32(arguments[t++]),this.m33(arguments[t++])}}(this)},s=function(t,i,r,m,n,a,e,h){var o,d=this;if(!(d instanceof s))return new s(t,i,r,m,n,a,e,h);var f=[t,i,r,m,n,a,e,h];if(d.__factoryClass)if(d.__factoryClass.forEach(function(t){o=t.apply(d,f)}),"function"==typeof o){if(o._classInfo.name!=s._classInfo.name)return new o(t,i,r,m,n,a,e,h)}else if(o)return o;d.__traitInit?d.__traitInit.forEach(function(t){t.apply(d,f)}):"function"==typeof d.init&&d.init.apply(d,f)};s._classInfo={name:"Matrix3D"},s.prototype=new i,function(){"undefined"!=typeof define&&null!==define&&null!=define.amd?(t.Matrix3D=s,this.Matrix3D=s):"undefined"!=typeof module&&null!==module&&null!=module.exports?module.exports.Matrix3D=s:this.Matrix3D=s}.call(new Function("return this")()),"undefined"!=typeof define&&null!==define&&null!=define.amd&&define(t)}).call(new Function("return this")());