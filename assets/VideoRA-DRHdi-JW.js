import{bR as Md,aU as _t,df as Td,bE as Ji,as as bd,aD as Ad,dn as Rd,az as wd,aL as Ai,u as ea,v as dt,au as Cd,I as Na,bJ as Xo,bX as Pd,s as yd,bU as Ld,t as ta,bb as Ot,g as qo,dh as Nd,bk as Dd,H as Mr,bL as Tr,bA as br,q as na,a0 as Id}from"./index-DzZt5NmS.js";import{U as Nn,c as Ud,N as Dn,S as no,C as At,R as Fd,e as yt,w as gt,V as ln,l as Yo,M as ti,F as Tc,W as Ko,a as En,b as Dt,L as Pi,H as kn,D as xn,B as hn,d as ua,f as Ie,p as Od,g as jo,h as Bd,i as Gd,A as ia,O as Hd,j as Vd,k as kd,m as Wd,n as zd,o as Xd,q as qd,r as Yd,s as Kd,t as jd,u as $d,v as Zd,x as Qd,y as Jd,Z as eu,z as tu,E as Xr,G as nu,I as Ar,J as pn,K as Da,P as iu,Q as pi,T as au,X as ru,Y as io,_ as ou,$ as ao,a0 as su,a1 as cu,a2 as lu,a3 as du,a4 as uu,a5 as Wn,a6 as nn,a7 as hi,a8 as Jn,a9 as Mn,aa as Ha,ab as fu,ac as Vn,ad as ca,ae as Ni,af as za,ag as Zn,ah as Di,ai as pu,aj as mi,ak as Xa,al as hu,am as bc,an as wt,ao as mu,ap as da,aq as _u,ar as Rr,as as Hn,at as yi,au as fa,av as gu,aw as vu,ax as Su,ay as Ci,az as ot,aA as xu,aB as Ac,aC as Rc,aD as wc,aE as qa,aF as Cc,aG as Pc,aH as Eu,aI as Mu,aJ as Tu,aK as bu,aL as Au,aM as Ru,aN as wu,aO as Cu,aP as $o,aQ as Pu,aR as Va,aS as yu,aT as Zo,aU as Qo,aV as Jo,aW as Lu,aX as ja,aY as es,aZ as Nu,a_ as ro,a$ as qr,b0 as yc,b1 as Lc,b2 as Nc,b3 as Du,b4 as Dc,b5 as Iu,b6 as Uu,b7 as Fu,b8 as Ou,b9 as Ic,ba as Bu,bb as Gu,bc as Hu,bd as wr,be as Cr,bf as Pr,bg as yr,bh as ts,bi as ns,bj as is,bk as as,bl as rs,bm as os,bn as ss,bo as cs,bp as ls,bq as Yr,br as ds,bs as us,bt as fs,bu as ps,bv as hs,bw as ms,bx as _s,by as gs,bz as vs,bA as Ss,bB as xs,bC as Es,bD as Ms,bE as Ts,bF as bs,bG as As,bH as Rs,bI as ws,bJ as Cs,bK as Ps,bL as Kr,bM as ys,bN as Uc,bO as Ls,bP as Fc,bQ as Ns,bR as sn,bS as Vu,bT as Oc,bU as Bc,bV as Gc,bW as Hc,bX as Vc,bY as kc,bZ as Wc,b_ as Lr,b$ as Nr,c0 as ku,c1 as Wu,c2 as zc,c3 as pa,c4 as Ii,c5 as Xc,c6 as zu,c7 as Xu,c8 as qu,c9 as Yu,ca as Ku,cb as ju,cc as $u,cd as Zu,ce as Qu,cf as Ju,cg as ef,ch as bt,ci as li,cj as Ia,ck as tf,cl as nf,cm as af,cn as rf,co as of}from"./three.core-aXXCO3ex.js";import{Z as jr,S as qc,W as Yc,s as sf,g as cf,i as Ds}from"./faceLandmarkerWorkerClient-BcfgsVVR.js";import{a as lf,b as df}from"./cameraPreference-DlAyC_Us.js";function Kc(){let e=null,n=!1,t=null,i=null;function r(a,o){i=e.requestAnimationFrame(r),t(a,o)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function uf(e){const n=new WeakMap;function t(v,R){const _=v.array,E=v.usage,S=_.byteLength,h=e.createBuffer();e.bindBuffer(R,h),e.bufferData(R,_,E),v.onUploadCallback();let T;if(_ instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)T=e.HALF_FLOAT;else if(_ instanceof Uint16Array)v.isFloat16BufferAttribute?T=e.HALF_FLOAT:T=e.UNSIGNED_SHORT;else if(_ instanceof Int16Array)T=e.SHORT;else if(_ instanceof Uint32Array)T=e.UNSIGNED_INT;else if(_ instanceof Int32Array)T=e.INT;else if(_ instanceof Int8Array)T=e.BYTE;else if(_ instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:h,type:T,bytesPerElement:_.BYTES_PER_ELEMENT,version:v.version,size:S}}function i(v,R,_){const E=R.array,S=R.updateRanges;if(e.bindBuffer(_,v),S.length===0)e.bufferSubData(_,0,E);else{S.sort((T,C)=>T.start-C.start);let h=0;for(let T=1;T<S.length;T++){const C=S[h],L=S[T];L.start<=C.start+C.count+1?C.count=Math.max(C.count,L.start+L.count-C.start):(++h,S[h]=L)}S.length=h+1;for(let T=0,C=S.length;T<C;T++){const L=S[T];e.bufferSubData(_,L.start*E.BYTES_PER_ELEMENT,E,L.start,L.count)}R.clearUpdateRanges()}R.onUploadCallback()}function r(v){return v.isInterleavedBufferAttribute&&(v=v.data),n.get(v)}function a(v){v.isInterleavedBufferAttribute&&(v=v.data);const R=n.get(v);R&&(e.deleteBuffer(R.buffer),n.delete(v))}function o(v,R){if(v.isInterleavedBufferAttribute&&(v=v.data),v.isGLBufferAttribute){const E=n.get(v);(!E||E.version<v.version)&&n.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}const _=n.get(v);if(_===void 0)n.set(v,t(v,R));else if(_.version<v.version){if(_.size!==v.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(_.buffer,v,R),_.version=v.version}}return{get:r,remove:a,update:o}}var ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,hf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Uf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Of=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,ap=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,up=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,Tp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Up=`#ifdef USE_NORMALMAP
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
#endif`,Fp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Op=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$p=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,th=`#ifdef USE_SKINNING
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
#endif`,nh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ih=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ah=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rh=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,oh=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ph=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_h=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Sh=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Eh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Th=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ah=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rh=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,wh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Ch=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ph=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,yh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Lh=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Nh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Dh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ih=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Uh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Fh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Oh=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Gh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Hh=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Vh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,kh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Wh=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,zh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Xh=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,et={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:hf,alphamap_pars_fragment:mf,alphatest_fragment:_f,alphatest_pars_fragment:gf,aomap_fragment:vf,aomap_pars_fragment:Sf,batching_pars_vertex:xf,batching_vertex:Ef,begin_vertex:Mf,beginnormal_vertex:Tf,bsdfs:bf,iridescence_fragment:Af,bumpmap_pars_fragment:Rf,clipping_planes_fragment:wf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:yf,color_fragment:Lf,color_pars_fragment:Nf,color_pars_vertex:Df,color_vertex:If,common:Uf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Of,displacementmap_pars_vertex:Bf,displacementmap_vertex:Gf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Vf,colorspace_fragment:kf,colorspace_pars_fragment:Wf,envmap_fragment:zf,envmap_common_pars_fragment:Xf,envmap_pars_fragment:qf,envmap_pars_vertex:Yf,envmap_physical_pars_fragment:ap,envmap_vertex:Kf,fog_vertex:jf,fog_pars_vertex:$f,fog_fragment:Zf,fog_pars_fragment:Qf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:ep,lights_lambert_fragment:tp,lights_lambert_pars_fragment:np,lights_pars_begin:ip,lights_toon_fragment:rp,lights_toon_pars_fragment:op,lights_phong_fragment:sp,lights_phong_pars_fragment:cp,lights_physical_fragment:lp,lights_physical_pars_fragment:dp,lights_fragment_begin:up,lights_fragment_maps:fp,lights_fragment_end:pp,lightprobes_pars_fragment:hp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:_p,logdepthbuf_pars_vertex:gp,logdepthbuf_vertex:vp,map_fragment:Sp,map_pars_fragment:xp,map_particle_fragment:Ep,map_particle_pars_fragment:Mp,metalnessmap_fragment:Tp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Ap,morphcolor_vertex:Rp,morphnormal_vertex:wp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Pp,normal_fragment_begin:yp,normal_fragment_maps:Lp,normal_pars_fragment:Np,normal_pars_vertex:Dp,normal_vertex:Ip,normalmap_pars_fragment:Up,clearcoat_normal_fragment_begin:Fp,clearcoat_normal_fragment_maps:Op,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:Gp,opaque_fragment:Hp,packing:Vp,premultiplied_alpha_fragment:kp,project_vertex:Wp,dithering_fragment:zp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:jp,shadowmap_vertex:$p,shadowmask_pars_fragment:Zp,skinbase_vertex:Qp,skinning_pars_vertex:Jp,skinning_vertex:eh,skinnormal_vertex:th,specularmap_fragment:nh,specularmap_pars_fragment:ih,tonemapping_fragment:ah,tonemapping_pars_fragment:rh,transmission_fragment:oh,transmission_pars_fragment:sh,uv_pars_fragment:ch,uv_pars_vertex:lh,uv_vertex:dh,worldpos_vertex:uh,background_vert:fh,background_frag:ph,backgroundCube_vert:hh,backgroundCube_frag:mh,cube_vert:_h,cube_frag:gh,depth_vert:vh,depth_frag:Sh,distance_vert:xh,distance_frag:Eh,equirect_vert:Mh,equirect_frag:Th,linedashed_vert:bh,linedashed_frag:Ah,meshbasic_vert:Rh,meshbasic_frag:wh,meshlambert_vert:Ch,meshlambert_frag:Ph,meshmatcap_vert:yh,meshmatcap_frag:Lh,meshnormal_vert:Nh,meshnormal_frag:Dh,meshphong_vert:Ih,meshphong_frag:Uh,meshphysical_vert:Fh,meshphysical_frag:Oh,meshtoon_vert:Bh,meshtoon_frag:Gh,points_vert:Hh,points_frag:Vh,shadow_vert:kh,shadow_frag:Wh,sprite_vert:zh,sprite_frag:Xh},Te={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new nn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ie},probesMax:{value:new Ie},probesResolution:{value:new Ie}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new nn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ln={basic:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new At(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:sn([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:sn([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:sn([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:sn([Te.common,Te.displacementmap,{referencePosition:{value:new Ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:sn([Te.lights,Te.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ln.physical={uniforms:sn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new nn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new nn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new nn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ua={r:0,b:0,g:0},qh=new ti,jc=new ot;jc.set(-1,0,0,0,1,0,0,0,1);function Yh(e,n,t,i,r,a){const o=new At(0);let v=r===!0?0:1,R,_,E=null,S=0,h=null;function T(P){let y=P.isScene===!0?P.background:null;if(y&&y.isTexture){const g=P.backgroundBlurriness>0;y=n.get(y,g)}return y}function C(P){let y=!1;const g=T(P);g===null?p(o,v):g&&g.isColor&&(p(g,1),y=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(e.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function L(P,y){const g=T(y);g&&(g.isCubeTexture||g.mapping===ja)?(_===void 0&&(_=new Mn(new ro(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:qr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(A,m,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(_)),_.material.uniforms.envMap.value=g,_.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(qh.makeRotationFromEuler(y.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&_.material.uniforms.backgroundRotation.value.premultiply(jc),_.material.toneMapped=Dt.getTransfer(g.colorSpace)!==wt,(E!==g||S!==g.version||h!==e.toneMapping)&&(_.material.needsUpdate=!0,E=g,S=g.version,h=e.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):g&&g.isTexture&&(R===void 0&&(R=new Mn(new yc(2,2),new Wn({name:"BackgroundMaterial",uniforms:qr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ua,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),R.geometry.deleteAttribute("normal"),Object.defineProperty(R.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(R)),R.material.uniforms.t2D.value=g,R.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,R.material.toneMapped=Dt.getTransfer(g.colorSpace)!==wt,g.matrixAutoUpdate===!0&&g.updateMatrix(),R.material.uniforms.uvTransform.value.copy(g.matrix),(E!==g||S!==g.version||h!==e.toneMapping)&&(R.material.needsUpdate=!0,E=g,S=g.version,h=e.toneMapping),R.layers.enableAll(),P.unshift(R,R.geometry,R.material,0,0,null))}function p(P,y){P.getRGB(Ua,Lc(e)),t.buffers.color.setClear(Ua.r,Ua.g,Ua.b,y,a)}function l(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),R!==void 0&&(R.geometry.dispose(),R.material.dispose(),R=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,y=1){o.set(P),v=y,p(o,v)},getClearAlpha:function(){return v},setClearAlpha:function(P){v=P,p(o,v)},render:C,addToRenderList:L,dispose:l}}function Kh(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,o=!1;function v(G,k,q,F,$){let K=!1;const Q=S(G,F,q,k);a!==Q&&(a=Q,_(a.object)),K=T(G,F,q,$),K&&C(G,F,q,$),$!==null&&n.update($,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,g(G,k,q,F),$!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get($).buffer))}function R(){return e.createVertexArray()}function _(G){return e.bindVertexArray(G)}function E(G){return e.deleteVertexArray(G)}function S(G,k,q,F){const $=F.wireframe===!0;let K=i[k.id];K===void 0&&(K={},i[k.id]=K);const Q=G.isInstancedMesh===!0?G.id:0;let oe=K[Q];oe===void 0&&(oe={},K[Q]=oe);let ie=oe[q.id];ie===void 0&&(ie={},oe[q.id]=ie);let se=ie[$];return se===void 0&&(se=h(R()),ie[$]=se),se}function h(G){const k=[],q=[],F=[];for(let $=0;$<t;$++)k[$]=0,q[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:F,object:G,attributes:{},index:null}}function T(G,k,q,F){const $=a.attributes,K=k.attributes;let Q=0;const oe=q.getAttributes();for(const ie in oe)if(oe[ie].location>=0){const ce=$[ie];let Ye=K[ie];if(Ye===void 0&&(ie==="instanceMatrix"&&G.instanceMatrix&&(Ye=G.instanceMatrix),ie==="instanceColor"&&G.instanceColor&&(Ye=G.instanceColor)),ce===void 0||ce.attribute!==Ye||Ye&&ce.data!==Ye.data)return!0;Q++}return a.attributesNum!==Q||a.index!==F}function C(G,k,q,F){const $={},K=k.attributes;let Q=0;const oe=q.getAttributes();for(const ie in oe)if(oe[ie].location>=0){let ce=K[ie];ce===void 0&&(ie==="instanceMatrix"&&G.instanceMatrix&&(ce=G.instanceMatrix),ie==="instanceColor"&&G.instanceColor&&(ce=G.instanceColor));const Ye={};Ye.attribute=ce,ce&&ce.data&&(Ye.data=ce.data),$[ie]=Ye,Q++}a.attributes=$,a.attributesNum=Q,a.index=F}function L(){const G=a.newAttributes;for(let k=0,q=G.length;k<q;k++)G[k]=0}function p(G){l(G,0)}function l(G,k){const q=a.newAttributes,F=a.enabledAttributes,$=a.attributeDivisors;q[G]=1,F[G]===0&&(e.enableVertexAttribArray(G),F[G]=1),$[G]!==k&&(e.vertexAttribDivisor(G,k),$[G]=k)}function P(){const G=a.newAttributes,k=a.enabledAttributes;for(let q=0,F=k.length;q<F;q++)k[q]!==G[q]&&(e.disableVertexAttribArray(q),k[q]=0)}function y(G,k,q,F,$,K,Q){Q===!0?e.vertexAttribIPointer(G,k,q,$,K):e.vertexAttribPointer(G,k,q,F,$,K)}function g(G,k,q,F){L();const $=F.attributes,K=q.getAttributes(),Q=k.defaultAttributeValues;for(const oe in K){const ie=K[oe];if(ie.location>=0){let se=$[oe];if(se===void 0&&(oe==="instanceMatrix"&&G.instanceMatrix&&(se=G.instanceMatrix),oe==="instanceColor"&&G.instanceColor&&(se=G.instanceColor)),se!==void 0){const ce=se.normalized,Ye=se.itemSize,Ve=n.get(se);if(Ve===void 0)continue;const st=Ve.buffer,Re=Ve.type,Be=Ve.bytesPerElement,Y=Re===e.INT||Re===e.UNSIGNED_INT||se.gpuType===Ic;if(se.isInterleavedBufferAttribute){const te=se.data,Me=te.stride,We=se.offset;if(te.isInstancedInterleavedBuffer){for(let fe=0;fe<ie.locationSize;fe++)l(ie.location+fe,te.meshPerAttribute);G.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<ie.locationSize;fe++)p(ie.location+fe);e.bindBuffer(e.ARRAY_BUFFER,st);for(let fe=0;fe<ie.locationSize;fe++)y(ie.location+fe,Ye/ie.locationSize,Re,ce,Me*Be,(We+Ye/ie.locationSize*fe)*Be,Y)}else{if(se.isInstancedBufferAttribute){for(let te=0;te<ie.locationSize;te++)l(ie.location+te,se.meshPerAttribute);G.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let te=0;te<ie.locationSize;te++)p(ie.location+te);e.bindBuffer(e.ARRAY_BUFFER,st);for(let te=0;te<ie.locationSize;te++)y(ie.location+te,Ye/ie.locationSize,Re,ce,Ye*Be,Ye/ie.locationSize*te*Be,Y)}}else if(Q!==void 0){const ce=Q[oe];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(ie.location,ce);break;case 3:e.vertexAttrib3fv(ie.location,ce);break;case 4:e.vertexAttrib4fv(ie.location,ce);break;default:e.vertexAttrib1fv(ie.location,ce)}}}}P()}function A(){b();for(const G in i){const k=i[G];for(const q in k){const F=k[q];for(const $ in F){const K=F[$];for(const Q in K)E(K[Q].object),delete K[Q];delete F[$]}}delete i[G]}}function m(G){if(i[G.id]===void 0)return;const k=i[G.id];for(const q in k){const F=k[q];for(const $ in F){const K=F[$];for(const Q in K)E(K[Q].object),delete K[Q];delete F[$]}}delete i[G.id]}function N(G){for(const k in i){const q=i[k];for(const F in q){const $=q[F];if($[G.id]===void 0)continue;const K=$[G.id];for(const Q in K)E(K[Q].object),delete K[Q];delete $[G.id]}}}function f(G){for(const k in i){const q=i[k],F=G.isInstancedMesh===!0?G.id:0,$=q[F];if($!==void 0){for(const K in $){const Q=$[K];for(const oe in Q)E(Q[oe].object),delete Q[oe];delete $[K]}delete q[F],Object.keys(q).length===0&&delete i[k]}}}function b(){U(),o=!0,a!==r&&(a=r,_(a.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:v,reset:b,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:m,releaseStatesOfObject:f,releaseStatesOfProgram:N,initAttributes:L,enableAttribute:p,disableUnusedAttributes:P}}function jh(e,n,t){let i;function r(R){i=R}function a(R,_){e.drawArrays(i,R,_),t.update(_,i,1)}function o(R,_,E){E!==0&&(e.drawArraysInstanced(i,R,_,E),t.update(_,i,E))}function v(R,_,E){if(E===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,R,0,_,0,E);let h=0;for(let T=0;T<E;T++)h+=_[T];t.update(h,i,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=v}function $h(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Hn&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function v(N){const f=N===kn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==Nn&&N!==Zn&&!f&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function R(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=t.precision!==void 0?t.precision:"highp";const E=R(_);E!==_&&(gt("WebGLRenderer:",_,"not supported, using",E,"instead."),_=E);const S=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),C=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),P=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),m=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:R,textureFormatReadable:o,textureTypeReadable:v,precision:_,logarithmicDepthBuffer:S,reversedDepthBuffer:h,maxTextures:T,maxVertexTextures:C,maxTextureSize:L,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:P,maxVaryings:y,maxFragmentUniforms:g,maxSamples:A,samples:m}}function Zh(e){const n=this;let t=null,i=0,r=!1,a=!1;const o=new xu,v=new ot,R={value:null,needsUpdate:!1};this.uniform=R,this.numPlanes=0,this.numIntersection=0,this.init=function(S,h){const T=S.length!==0||h||i!==0||r;return r=h,i=S.length,T},this.beginShadows=function(){a=!0,E(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(S,h){t=E(S,h,0)},this.setState=function(S,h,T){const C=S.clippingPlanes,L=S.clipIntersection,p=S.clipShadows,l=e.get(S);if(!r||C===null||C.length===0||a&&!p)a?E(null):_();else{const P=a?0:i,y=P*4;let g=l.clippingState||null;R.value=g,g=E(C,h,y,T);for(let A=0;A!==y;++A)g[A]=t[A];l.clippingState=g,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=P}};function _(){R.value!==t&&(R.value=t,R.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function E(S,h,T,C){const L=S!==null?S.length:0;let p=null;if(L!==0){if(p=R.value,C!==!0||p===null){const l=T+L*4,P=h.matrixWorldInverse;v.getNormalMatrix(P),(p===null||p.length<l)&&(p=new Float32Array(l));for(let y=0,g=T;y!==L;++y,g+=4)o.copy(S[y]).applyMatrix4(P,v),o.normal.toArray(p,g),p[g+3]=o.constant}R.value=p,R.needsUpdate=!0}return n.numPlanes=L,n.numIntersection=0,p}}const Li=4,Qh=6,Jh=20,em=256,aa=new bc,Is=new At;let Dr=null,Ir=0,Ur=0,Fr=!1;const tm=new Ie,di=new Ie;class Us{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,r=100,a={}){const{size:o=256,position:v=tm}=a;Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const R=this._allocateTargets();return R.depthBuffer=!0,this._sceneToCubeUV(n,i,r,R,v),t>0&&this._blur(R,0,0,t),this._applyPMREM(R),this._cleanup(R),R}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Os(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Dr,Ir,Ur),this._renderer.xr.enabled=Fr,n.scissorTest=!1,Ri(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===pa||n.mapping===Ii?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:kn,format:Hn,colorSpace:zc,depthBuffer:!1},r=Fs(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fs(n,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=nm(a)),this._blurMaterial=am(a,n,t),this._ggxMaterial=im(a,n,t)}return r}_compileMaterial(n){const t=new Mn(new hi,n);this._renderer.compile(t,aa)}_sceneToCubeUV(n,t,i,r,a){const R=new da(90,1,t,i),_=[1,-1,1,1,1,1],E=[1,1,1,-1,-1,-1],S=this._renderer,h=S.autoClear,T=S.toneMapping;S.getClearColor(Is),S.toneMapping=Dn,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(r),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new ro,new Xc({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,p=L.material;let l=!1;const P=n.background;P?P.isColor&&(p.color.copy(P),n.background=null,l=!0):(p.color.copy(Is),l=!0);for(let y=0;y<6;y++){const g=y%3;g===0?(R.up.set(0,_[y],0),R.position.set(a.x,a.y,a.z),R.lookAt(a.x+E[y],a.y,a.z)):g===1?(R.up.set(0,0,_[y]),R.position.set(a.x,a.y,a.z),R.lookAt(a.x,a.y+E[y],a.z)):(R.up.set(0,_[y],0),R.position.set(a.x,a.y,a.z),R.lookAt(a.x,a.y,a.z+E[y]));const A=this._cubeSize;Ri(r,g*A,y>2?A:0,A,A),S.setRenderTarget(r),l&&S.render(L,R),S.render(n,R)}S.toneMapping=T,S.autoClear=h,n.background=P}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===pa||n.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Os());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const v=a.uniforms;v.envMap.value=n;const R=this._cubeSize;Ri(t,0,0,3*R,2*R),i.setRenderTarget(t),i.render(o,aa)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(n,a-1,a);t.autoClear=i}_applyGGXFilter(n,t,i){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,v=this._lodMeshes[i];v.material=o;const R=o.uniforms,_=i/(this._lodMeshes.length-1),E=t/(this._lodMeshes.length-1),S=Math.sqrt(_*_-E*E),h=_*1.25,T=S*h,{_lodMax:C}=this,L=this._sizeLods[i],p=3*L*(i>C-Li?i-C+Li:0),l=4*(this._cubeSize-L);R.envMap.value=n.texture,R.roughness.value=T,R.mipInt.value=C-t,Ri(a,p,l,3*L,2*L),r.setRenderTarget(a),r.render(v,aa),R.envMap.value=a.texture,R.roughness.value=0,R.mipInt.value=C-i,Ri(n,p,l,3*L,2*L),r.setRenderTarget(n),r.render(v,aa)}_blur(n,t,i,r){const a=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(n,a,t,i,o),this._blurPass(a,n,i,i,o)}_blurPass(n,t,i,r,a){const o=this._renderer,v=this._blurMaterial,R=this._lodMeshes[r];R.material=v;const _=v.uniforms;_.envMap.value=n.texture,_.sigma.value=a,_.mipInt.value=this._lodMax-i;const E=this._sizeLods[r],S=3*E*(r>this._lodMax-Li?r-this._lodMax+Li:0),h=4*(this._cubeSize-E);Ri(t,S,h,3*E,2*E),o.setRenderTarget(t),o.render(R,aa)}}function nm(e){const n=[],t=[];let i=e;const r=e-Li+1+Qh;for(let a=0;a<r;a++){const o=Math.pow(2,i);n.push(o);const v=1/(o-2),R=-v,_=1+v,E=[R,R,_,R,_,_,R,R,_,_,R,_],S=6,h=6,T=3,C=new Float32Array(T*h*S),L=new Float32Array(T*h*S);for(let l=0;l<S;l++){const P=l%3*2/3-1,y=l>2?0:-1,g=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];C.set(g,T*h*l);for(let A=0;A<h;A++){const m=E[A*2]*2-1,N=E[A*2+1]*2-1;l===0?di.set(1,N,m):l===1?di.set(-m,1,-N):l===2?di.set(-m,N,1):l===3?di.set(-1,N,-m):l===4?di.set(-m,-1,N):di.set(m,N,-1),di.toArray(L,(l*h+A)*T)}}const p=new hi;p.setAttribute("position",new Jn(C,T)),p.setAttribute("outputDirection",new Jn(L,T)),t.push(new Mn(p,null)),i>Li&&i--}return{lodMeshes:t,sizeLods:n}}function Fs(e,n,t){const i=new En(e,n,t);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ri(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function im(e,n,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:em,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function am(e,n,t){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Jh,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Os(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Bs(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class $c extends En{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},r=[i,i,i,i,i,i];this.texture=new Nc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ro(5,5,5),a=new Wn({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Vn});a.uniforms.tEquirect.value=t;const o=new Mn(r,a),v=t.minFilter;return t.minFilter===Pi&&(t.minFilter=pn),new Du(1,10,this).update(n,o),t.minFilter=v,o.geometry.dispose(),o.material.dispose(),this}clear(n,t=!0,i=!0,r=!0){const a=n.getRenderTarget();for(let o=0;o<6;o++)n.setRenderTarget(this,o),n.clear(t,i,r);n.setRenderTarget(a)}}function rm(e){let n=new WeakMap,t=new WeakMap,i=null;function r(h,T=!1){return h==null?null:T?o(h):a(h)}function a(h){if(h&&h.isTexture){const T=h.mapping;if(T===Lr||T===Nr)if(n.has(h)){const C=n.get(h).texture;return v(C,h.mapping)}else{const C=h.image;if(C&&C.height>0){const L=new $c(C.height);return L.fromEquirectangularTexture(e,h),n.set(h,L),h.addEventListener("dispose",_),v(L.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const T=h.mapping,C=T===Lr||T===Nr,L=T===pa||T===Ii;if(C||L){let p=t.get(h);const l=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==l)return i===null&&(i=new Us(e)),p=C?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const P=h.image;return C&&P&&P.height>0||L&&P&&R(P)?(i===null&&(i=new Us(e)),p=C?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",E),p.texture):null}}}return h}function v(h,T){return T===Lr?h.mapping=pa:T===Nr&&(h.mapping=Ii),h}function R(h){let T=0;const C=6;for(let L=0;L<C;L++)h[L]!==void 0&&T++;return T===C}function _(h){const T=h.target;T.removeEventListener("dispose",_);const C=n.get(T);C!==void 0&&(n.delete(T),C.dispose())}function E(h){const T=h.target;T.removeEventListener("dispose",E);const C=t.get(T);C!==void 0&&(t.delete(T),C.dispose())}function S(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:S}}function om(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const r=e.getExtension(i);return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Su("WebGLRenderer: "+i+" extension not supported."),r}}}function sm(e,n,t,i){const r={},a=new WeakMap;function o(S){const h=S.target;h.index!==null&&n.remove(h.index);for(const C in h.attributes)n.remove(h.attributes[C]);h.removeEventListener("dispose",o),delete r[h.id];const T=a.get(h);T&&(n.remove(T),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function v(S,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function R(S){const h=S.attributes;for(const T in h)n.update(h[T],e.ARRAY_BUFFER)}function _(S){const h=[],T=S.index,C=S.attributes.position;let L=0;if(C===void 0)return;if(T!==null){const P=T.array;L=T.version;for(let y=0,g=P.length;y<g;y+=3){const A=P[y+0],m=P[y+1],N=P[y+2];h.push(A,m,m,N,N,A)}}else{const P=C.array;L=C.version;for(let y=0,g=P.length/3-1;y<g;y+=3){const A=y+0,m=y+1,N=y+2;h.push(A,m,m,N,N,A)}}const p=new(C.count>=65535?ku:Wu)(h,1);p.version=L;const l=a.get(S);l&&n.remove(l),a.set(S,p)}function E(S){const h=a.get(S);if(h){const T=S.index;T!==null&&h.version<T.version&&_(S)}else _(S);return a.get(S)}return{get:v,update:R,getWireframeAttribute:E}}function cm(e,n,t){let i;function r(S){i=S}let a,o;function v(S){a=S.type,o=S.bytesPerElement}function R(S,h){e.drawElements(i,h,a,S*o),t.update(h,i,1)}function _(S,h,T){T!==0&&(e.drawElementsInstanced(i,h,a,S*o,T),t.update(h,i,T))}function E(S,h,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,S,0,T);let L=0;for(let p=0;p<T;p++)L+=h[p];t.update(L,i,1)}this.setMode=r,this.setIndex=v,this.render=R,this.renderInstances=_,this.renderMultiDraw=E}function lm(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,v){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=v*(a/3);break;case e.LINES:t.lines+=v*(a/2);break;case e.LINE_STRIP:t.lines+=v*(a-1);break;case e.LINE_LOOP:t.lines+=v*a;break;case e.POINTS:t.points+=v*a;break;default:yt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function dm(e,n,t){const i=new WeakMap,r=new ln;function a(o,v,R){const _=o.morphTargetInfluences,E=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,S=E!==void 0?E.length:0;let h=i.get(v);if(h===void 0||h.count!==S){let b=function(){N.dispose(),i.delete(v),v.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const T=v.morphAttributes.position!==void 0,C=v.morphAttributes.normal!==void 0,L=v.morphAttributes.color!==void 0,p=v.morphAttributes.position||[],l=v.morphAttributes.normal||[],P=v.morphAttributes.color||[];let y=0;T===!0&&(y=1),C===!0&&(y=2),L===!0&&(y=3);let g=v.attributes.position.count*y,A=1;g>n.maxTextureSize&&(A=Math.ceil(g/n.maxTextureSize),g=n.maxTextureSize);const m=new Float32Array(g*A*4*S),N=new Uc(m,g,A,S);N.type=Zn,N.needsUpdate=!0;const f=y*4;for(let U=0;U<S;U++){const G=p[U],k=l[U],q=P[U],F=g*A*4*U;for(let $=0;$<G.count;$++){const K=$*f;T===!0&&(r.fromBufferAttribute(G,$),m[F+K+0]=r.x,m[F+K+1]=r.y,m[F+K+2]=r.z,m[F+K+3]=0),C===!0&&(r.fromBufferAttribute(k,$),m[F+K+4]=r.x,m[F+K+5]=r.y,m[F+K+6]=r.z,m[F+K+7]=0),L===!0&&(r.fromBufferAttribute(q,$),m[F+K+8]=r.x,m[F+K+9]=r.y,m[F+K+10]=r.z,m[F+K+11]=q.itemSize===4?r.w:1)}}h={count:S,texture:N,size:new nn(g,A)},i.set(v,h),v.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)R.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let T=0;for(let L=0;L<_.length;L++)T+=_[L];const C=v.morphTargetsRelative?1:1-T;R.getUniforms().setValue(e,"morphTargetBaseInfluence",C),R.getUniforms().setValue(e,"morphTargetInfluences",_)}R.getUniforms().setValue(e,"morphTargetsTexture",h.texture,t),R.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function um(e,n,t,i,r){let a=new WeakMap;function o(_){const E=r.render.frame,S=_.geometry,h=n.get(_,S);if(a.get(h)!==E&&(n.update(h),a.set(h,E)),_.isInstancedMesh&&(_.hasEventListener("dispose",R)===!1&&_.addEventListener("dispose",R),a.get(_)!==E&&(t.update(_.instanceMatrix,e.ARRAY_BUFFER),_.instanceColor!==null&&t.update(_.instanceColor,e.ARRAY_BUFFER),a.set(_,E))),_.isSkinnedMesh){const T=_.skeleton;a.get(T)!==E&&(T.update(),a.set(T,E))}return h}function v(){a=new WeakMap}function R(_){const E=_.target;E.removeEventListener("dispose",R),i.releaseStatesOfObject(E),t.remove(E.instanceMatrix),E.instanceColor!==null&&t.remove(E.instanceColor)}return{update:o,dispose:v}}const fm={[Wc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function pm(e,n,t,i,r,a){const o=new En(n,t,{type:e,depthBuffer:r,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let v=null,R=null;const _=new hi;_.setAttribute("position",new Xa([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new Xa([0,2,0,0,2,0],2));const E=new hu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),S=new Mn(_,E),h=new bc(-1,1,1,-1,0,1);let T=null,C=null,L=!1,p,l=null,P=[],y=!1;this.setSize=function(g,A){o.setSize(g,A),v!==null&&v.setSize(g,A),R!==null&&R.setSize(g,A);for(let m=0;m<P.length;m++){const N=P[m];N.setSize&&N.setSize(g,A)}},this.setEffects=function(g){P=g,y=P.length>0&&P[0].isRenderPass===!0;const A=o.width,m=o.height;P.length>0&&v===null&&(v=new En(A,m,{type:kn,depthBuffer:!1,stencilBuffer:!1}),R=new En(A,m,{type:kn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<P.length;N++){const f=P[N];f.setSize&&f.setSize(A,m)}},this.begin=function(g,A){if(L||g.toneMapping===Dn&&P.length===0)return!1;if(l=A,A!==null){const m=A.width,N=A.height;(o.width!==m||o.height!==N)&&this.setSize(m,N)}return y===!1&&g.setRenderTarget(o),p=g.toneMapping,g.toneMapping=Dn,!0},this.hasRenderPass=function(){return y},this.end=function(g,A){g.toneMapping=p,L=!0;let m=o,N=v;for(let f=0;f<P.length;f++){const b=P[f];b.enabled!==!1&&(b.render(g,N,m,A),b.needsSwap!==!1&&(m=N,N=N===v?R:v))}if(T!==g.outputColorSpace||C!==g.toneMapping){T=g.outputColorSpace,C=g.toneMapping,E.defines={},Dt.getTransfer(T)===wt&&(E.defines.SRGB_TRANSFER="");const f=fm[C];f&&(E.defines[f]=""),E.needsUpdate=!0}E.uniforms.tDiffuse.value=m.texture,g.setRenderTarget(l),g.render(S,h),l=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){o.dispose(),v!==null&&v.dispose(),R!==null&&R.dispose(),_.dispose(),E.dispose()}}const Zc=new ju,$r=new za(1,1),Qc=new Uc,Jc=new Ku,el=new Nc,Gs=[],Hs=[],Vs=new Float32Array(16),ks=new Float32Array(9),Ws=new Float32Array(4);function Ui(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Gs[r];if(a===void 0&&(a=new Float32Array(r),Gs[r]=a),n!==0){i.toArray(a,0);for(let o=1,v=0;o!==n;++o)v+=t,e[o].toArray(a,v)}return a}function Wt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function zt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Za(e,n){let t=Hs[n];t===void 0&&(t=new Int32Array(n),Hs[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function hm(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function mm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2fv(this.addr,n),zt(t,n)}}function _m(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(Wt(t,n))return;e.uniform3fv(this.addr,n),zt(t,n)}}function gm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4fv(this.addr,n),zt(t,n)}}function vm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;Ws.set(i),e.uniformMatrix2fv(this.addr,!1,Ws),zt(t,i)}}function Sm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;ks.set(i),e.uniformMatrix3fv(this.addr,!1,ks),zt(t,i)}}function xm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;Vs.set(i),e.uniformMatrix4fv(this.addr,!1,Vs),zt(t,i)}}function Em(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Mm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2iv(this.addr,n),zt(t,n)}}function Tm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Wt(t,n))return;e.uniform3iv(this.addr,n),zt(t,n)}}function bm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4iv(this.addr,n),zt(t,n)}}function Am(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Rm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2uiv(this.addr,n),zt(t,n)}}function wm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Wt(t,n))return;e.uniform3uiv(this.addr,n),zt(t,n)}}function Cm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4uiv(this.addr,n),zt(t,n)}}function Pm(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?($r.compareFunction=t.isReversedDepthBuffer()?io:ao,a=$r):a=Zc,t.setTexture2D(n||a,r)}function ym(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Jc,r)}function Lm(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||el,r)}function Nm(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Qc,r)}function Dm(e){switch(e){case 5126:return hm;case 35664:return mm;case 35665:return _m;case 35666:return gm;case 35674:return vm;case 35675:return Sm;case 35676:return xm;case 5124:case 35670:return Em;case 35667:case 35671:return Mm;case 35668:case 35672:return Tm;case 35669:case 35673:return bm;case 5125:return Am;case 36294:return Rm;case 36295:return wm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Nm}}function Im(e,n){e.uniform1fv(this.addr,n)}function Um(e,n){const t=Ui(n,this.size,2);e.uniform2fv(this.addr,t)}function Fm(e,n){const t=Ui(n,this.size,3);e.uniform3fv(this.addr,t)}function Om(e,n){const t=Ui(n,this.size,4);e.uniform4fv(this.addr,t)}function Bm(e,n){const t=Ui(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Gm(e,n){const t=Ui(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Hm(e,n){const t=Ui(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Vm(e,n){e.uniform1iv(this.addr,n)}function km(e,n){e.uniform2iv(this.addr,n)}function Wm(e,n){e.uniform3iv(this.addr,n)}function zm(e,n){e.uniform4iv(this.addr,n)}function Xm(e,n){e.uniform1uiv(this.addr,n)}function qm(e,n){e.uniform2uiv(this.addr,n)}function Ym(e,n){e.uniform3uiv(this.addr,n)}function Km(e,n){e.uniform4uiv(this.addr,n)}function jm(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));let o;this.type===e.SAMPLER_2D_SHADOW?o=$r:o=Zc;for(let v=0;v!==r;++v)t.setTexture2D(n[v]||o,a[v])}function $m(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(n[o]||Jc,a[o])}function Zm(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(n[o]||el,a[o])}function Qm(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(n[o]||Qc,a[o])}function Jm(e){switch(e){case 5126:return Im;case 35664:return Um;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return Gm;case 35676:return Hm;case 5124:case 35670:return Vm;case 35667:case 35671:return km;case 35668:case 35672:return Wm;case 35669:case 35673:return zm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Km;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Qm}}class e_{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Dm(t.type)}}class t_{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jm(t.type)}}class n_{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const v=r[a];v.setValue(n,t[v.id],i)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function zs(e,n){e.seq.push(n),e.map[n.id]=n}function i_(e,n,t){const i=e.name,r=i.length;for(Or.lastIndex=0;;){const a=Or.exec(i),o=Or.lastIndex;let v=a[1];const R=a[2]==="]",_=a[3];if(R&&(v=v|0),_===void 0||_==="["&&o+2===r){zs(t,_===void 0?new e_(v,e,n):new t_(v,e,n));break}else{let S=t.map[v];S===void 0&&(S=new n_(v),zs(t,S)),t=S}}}class ka{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const v=n.getActiveUniform(t,o),R=n.getUniformLocation(t,v.name);i_(v,R,this)}const r=[],a=[];for(const o of this.seq)o.type===n.SAMPLER_2D_SHADOW||o.type===n.SAMPLER_CUBE_SHADOW||o.type===n.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,o=t.length;a!==o;++a){const v=t[a],R=i[v.id];R.needsUpdate!==!1&&v.setValue(n,R.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.id in t&&i.push(o)}return i}}function Xs(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const a_=37297;let r_=0;function o_(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=r;o<a;o++){const v=o+1;i.push(`${v===n?">":" "} ${v}: ${t[o]}`)}return i.join(`
`)}const qs=new ot;function s_(e){Dt._getMatrix(qs,Dt.workingColorSpace,e);const n=`mat3( ${qs.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(e)){case Fc:return[n,"LinearTransferOETF"];case wt:return[n,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Ys(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const v=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+o_(e.getShaderSource(n),v)}else return a}function c_(e,n){const t=s_(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const l_={[Wc]:"Linear",[kc]:"Reinhard",[Vc]:"Cineon",[Hc]:"ACESFilmic",[Gc]:"AgX",[Bc]:"Neutral",[Oc]:"Custom"};function d_(e,n){const t=l_[n];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fa=new Ie;function u_(){Dt.getLuminanceCoefficients(Fa);const e=Fa.x.toFixed(4),n=Fa.y.toFixed(4),t=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function p_(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function h_(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),o=a.name;let v=1;a.type===e.FLOAT_MAT2&&(v=2),a.type===e.FLOAT_MAT3&&(v=3),a.type===e.FLOAT_MAT4&&(v=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:v}}return t}function la(e){return e!==""}function Ks(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function js(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const m_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(e){return e.replace(m_,g_)}const __=new Map;function g_(e,n){let t=et[n];if(t===void 0){const i=__.get(n);if(i!==void 0)t=et[i],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">")}return Zr(t)}const v_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $s(e){return e.replace(v_,S_)}function S_(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Zs(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}const x_={[Ha]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function E_(e){return x_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const M_={[pa]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function T_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":M_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const b_={[Ii]:"ENVMAP_MODE_REFRACTION"};function A_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":b_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R_={[Yu]:"ENVMAP_BLENDING_MULTIPLY",[qu]:"ENVMAP_BLENDING_MIX",[Xu]:"ENVMAP_BLENDING_ADD"};function w_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":R_[e.combine]||"ENVMAP_BLENDING_NONE"}function C_(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function P_(e,n,t,i){const r=e.getContext(),a=t.defines;let o=t.vertexShader,v=t.fragmentShader;const R=E_(t),_=T_(t),E=A_(t),S=w_(t),h=C_(t),T=f_(t),C=p_(a),L=r.createProgram();let p,l,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(la).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(la).join(`
`),l.length>0&&(l+=`
`)):(p=[Zs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+E:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),l=[Zs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.envMap?"#define "+E:"",t.envMap?"#define "+S:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?et.tonemapping_pars_fragment:"",t.toneMapping!==Dn?d_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,c_("linearToOutputTexel",t.outputColorSpace),u_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=Zr(o),o=Ks(o,t),o=js(o,t),v=Zr(v),v=Ks(v,t),v=js(v,t),o=$s(o),v=$s(v),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,p=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",t.glslVersion===Ns?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ns?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const y=P+p+o,g=P+l+v,A=Xs(r,r.VERTEX_SHADER,y),m=Xs(r,r.FRAGMENT_SHADER,g);r.attachShader(L,A),r.attachShader(L,m),t.index0AttributeName!==void 0?r.bindAttribLocation(L,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(L,0,"position"),r.linkProgram(L);function N(G){if(e.debug.checkShaderErrors){const k=r.getProgramInfoLog(L)||"",q=r.getShaderInfoLog(A)||"",F=r.getShaderInfoLog(m)||"",$=k.trim(),K=q.trim(),Q=F.trim();let oe=!0,ie=!0;if(r.getProgramParameter(L,r.LINK_STATUS)===!1)if(oe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,L,A,m);else{const se=Ys(r,A,"vertex"),ce=Ys(r,m,"fragment");yt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(L,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+se+`
`+ce)}else $!==""?gt("WebGLProgram: Program Info Log:",$):(K===""||Q==="")&&(ie=!1);ie&&(G.diagnostics={runnable:oe,programLog:$,vertexShader:{log:K,prefix:p},fragmentShader:{log:Q,prefix:l}})}r.deleteShader(A),r.deleteShader(m),f=new ka(r,L),b=h_(r,L)}let f;this.getUniforms=function(){return f===void 0&&N(this),f};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(L,a_)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=n,this.usedTimes=1,this.program=L,this.vertexShader=A,this.fragmentShader=m,this}let y_=0;class L_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,t,i){const r=this._getShaderCacheForMaterial(n);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new N_(n),t.set(n,i)),i}}class N_{constructor(n){this.id=y_++,this.code=n,this.usedTimes=0}}function D_(e){return e===Ni||e===Yr||e===Kr}function I_(e,n,t,i,r,a){const o=new Vu,v=new L_,R=new Set,_=[],E=new Map,S=i.logarithmicDepthBuffer;let h=i.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(f){return R.add(f),f===0?"uv":`uv${f}`}function L(f,b,U,G,k,q){const F=G.fog,$=k.geometry,K=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?G.environment:null,Q=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,oe=n.get(f.envMap||K,Q),ie=oe&&oe.mapping===ja?oe.image.height:null,se=T[f.type];f.precision!==null&&(h=i.getMaxPrecision(f.precision),h!==f.precision&&gt("WebGLProgram.getParameters:",f.precision,"not supported, using",h,"instead."));const ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ye=ce!==void 0?ce.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let st,Re,Be,Y;if(se){const St=Ln[se];st=St.vertexShader,Re=St.fragmentShader}else{st=f.vertexShader,Re=f.fragmentShader;const St=v.getVertexShaderStage(f),rt=v.getFragmentShaderStage(f);v.update(f,St,rt),Be=St.id,Y=rt.id}const te=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),We=k.isInstancedMesh===!0,fe=k.isBatchedMesh===!0,Ae=!!f.map,at=!!f.matcap,ke=!!oe,Ze=!!f.aoMap,Ke=!!f.lightMap,je=!!f.bumpMap&&f.wireframe===!1,ut=!!f.normalMap,ct=!!f.displacementMap,Yt=!!f.emissiveMap,vt=!!f.metalnessMap,ht=!!f.roughnessMap,I=f.anisotropy>0,Gt=f.clearcoat>0,ft=f.dispersion>0,M=f.retroreflectivity>0,s=f.iridescence>0,B=f.sheen>0,X=f.transmission>0,j=I&&!!f.anisotropyMap,de=Gt&&!!f.clearcoatMap,_e=Gt&&!!f.clearcoatNormalMap,Z=Gt&&!!f.clearcoatRoughnessMap,ee=s&&!!f.iridescenceMap,ge=s&&!!f.iridescenceThicknessMap,Fe=B&&!!f.sheenColorMap,ve=B&&!!f.sheenRoughnessMap,me=!!f.specularMap,De=!!f.specularColorMap,Ge=!!f.specularIntensityMap,$e=X&&!!f.transmissionMap,D=X&&!!f.thicknessMap,he=!!f.gradientMap,J=!!f.alphaMap,pe=f.alphaTest>0,Ee=!!f.alphaHash,ae=!!f.extensions;let Oe=Dn;f.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Oe=e.toneMapping);const Le={shaderID:se,shaderType:f.type,shaderName:f.name,vertexShader:st,fragmentShader:Re,defines:f.defines,customVertexShaderID:Be,customFragmentShaderID:Y,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:h,batching:fe,batchingColor:fe&&k._colorsTexture!==null,instancing:We,instancingColor:We&&k.instanceColor!==null,instancingMorph:We&&k.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Ae,matcap:at,envMap:ke,envMapMode:ke&&oe.mapping,envMapCubeUVHeight:ie,aoMap:Ze,lightMap:Ke,bumpMap:je,normalMap:ut,displacementMap:ct,emissiveMap:Yt,normalMapObjectSpace:ut&&f.normalMapType===Nu,normalMapTangentSpace:ut&&f.normalMapType===es,packedNormalMap:ut&&f.normalMapType===es&&D_(f.normalMap.format),metalnessMap:vt,roughnessMap:ht,anisotropy:I,anisotropyMap:j,clearcoat:Gt,clearcoatMap:de,clearcoatNormalMap:_e,clearcoatRoughnessMap:Z,dispersion:ft,retroreflection:M,iridescence:s,iridescenceMap:ee,iridescenceThicknessMap:ge,sheen:B,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:me,specularColorMap:De,specularIntensityMap:Ge,transmission:X,transmissionMap:$e,thicknessMap:D,gradientMap:he,opaque:f.transparent===!1&&f.blending===Va&&f.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:Ee,combine:f.combine,mapUv:Ae&&C(f.map.channel),aoMapUv:Ze&&C(f.aoMap.channel),lightMapUv:Ke&&C(f.lightMap.channel),bumpMapUv:je&&C(f.bumpMap.channel),normalMapUv:ut&&C(f.normalMap.channel),displacementMapUv:ct&&C(f.displacementMap.channel),emissiveMapUv:Yt&&C(f.emissiveMap.channel),metalnessMapUv:vt&&C(f.metalnessMap.channel),roughnessMapUv:ht&&C(f.roughnessMap.channel),anisotropyMapUv:j&&C(f.anisotropyMap.channel),clearcoatMapUv:de&&C(f.clearcoatMap.channel),clearcoatNormalMapUv:_e&&C(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&C(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(f.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&C(f.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&C(f.sheenColorMap.channel),sheenRoughnessMapUv:ve&&C(f.sheenRoughnessMap.channel),specularMapUv:me&&C(f.specularMap.channel),specularColorMapUv:De&&C(f.specularColorMap.channel),specularIntensityMapUv:Ge&&C(f.specularIntensityMap.channel),transmissionMapUv:$e&&C(f.transmissionMap.channel),thicknessMapUv:D&&C(f.thicknessMap.channel),alphaMapUv:J&&C(f.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ut||I),vertexNormals:!!$.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(Ae||J),fog:!!F,useFog:f.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||$.attributes.normal===void 0&&ut===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ye,morphTextureStride:Ve,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ae&&f.map.isVideoTexture===!0&&Dt.getTransfer(f.map.colorSpace)===wt,decodeVideoTextureEmissive:Yt&&f.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(f.emissiveMap.colorSpace)===wt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===xn,flipSided:f.side===hn,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ae&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&f.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Le.vertexUv1s=R.has(1),Le.vertexUv2s=R.has(2),Le.vertexUv3s=R.has(3),R.clear(),Le}function p(f){const b=[];if(f.shaderID?b.push(f.shaderID):(b.push(f.customVertexShaderID),b.push(f.customFragmentShaderID)),f.defines!==void 0)for(const U in f.defines)b.push(U),b.push(f.defines[U]);return f.isRawShaderMaterial===!1&&(l(b,f),P(b,f),b.push(e.outputColorSpace)),b.push(f.customProgramCacheKey),b.join()}function l(f,b){f.push(b.precision),f.push(b.outputColorSpace),f.push(b.envMapMode),f.push(b.envMapCubeUVHeight),f.push(b.mapUv),f.push(b.alphaMapUv),f.push(b.lightMapUv),f.push(b.aoMapUv),f.push(b.bumpMapUv),f.push(b.normalMapUv),f.push(b.displacementMapUv),f.push(b.emissiveMapUv),f.push(b.metalnessMapUv),f.push(b.roughnessMapUv),f.push(b.anisotropyMapUv),f.push(b.clearcoatMapUv),f.push(b.clearcoatNormalMapUv),f.push(b.clearcoatRoughnessMapUv),f.push(b.iridescenceMapUv),f.push(b.iridescenceThicknessMapUv),f.push(b.sheenColorMapUv),f.push(b.sheenRoughnessMapUv),f.push(b.specularMapUv),f.push(b.specularColorMapUv),f.push(b.specularIntensityMapUv),f.push(b.transmissionMapUv),f.push(b.thicknessMapUv),f.push(b.combine),f.push(b.fogExp2),f.push(b.sizeAttenuation),f.push(b.morphTargetsCount),f.push(b.morphAttributeCount),f.push(b.numSunLights),f.push(b.numDirLights),f.push(b.numPointLights),f.push(b.numSpotLights),f.push(b.numSpotLightMaps),f.push(b.numHemiLights),f.push(b.numRectAreaLights),f.push(b.numSunLightShadows),f.push(b.numDirLightShadows),f.push(b.numPointLightShadows),f.push(b.numSpotLightShadows),f.push(b.numSpotLightShadowsWithMaps),f.push(b.numLightProbes),f.push(b.shadowMapType),f.push(b.toneMapping),f.push(b.numClippingPlanes),f.push(b.numClipIntersection),f.push(b.depthPacking)}function P(f,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),f.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),f.push(o.mask)}function y(f){const b=T[f.type];let U;if(b){const G=Ln[b];U=Lu.clone(G.uniforms)}else U=f.uniforms;return U}function g(f,b){let U=E.get(b);return U!==void 0?++U.usedTimes:(U=new P_(e,b,f,r),_.push(U),E.set(b,U)),U}function A(f){if(--f.usedTimes===0){const b=_.indexOf(f);_[b]=_[_.length-1],_.pop(),E.delete(f.cacheKey),f.destroy()}}function m(f){v.remove(f)}function N(){v.dispose()}return{getParameters:L,getProgramCacheKey:p,getUniforms:y,acquireProgram:g,releaseProgram:A,releaseShaderCache:m,programs:_,dispose:N}}function U_(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let v=e.get(o);return v===void 0&&(v={},e.set(o,v)),v}function i(o){e.delete(o)}function r(o,v,R){e.get(o)[v]=R}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function F_(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function Qs(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Js(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function o(h){let T=0;return h.isInstancedMesh&&(T+=2),h.isSkinnedMesh&&(T+=1),T}function v(h,T,C,L,p,l){let P=e[n];return P===void 0?(P={id:h.id,object:h,geometry:T,material:C,materialVariant:o(h),groupOrder:L,renderOrder:h.renderOrder,z:p,group:l},e[n]=P):(P.id=h.id,P.object=h,P.geometry=T,P.material=C,P.materialVariant=o(h),P.groupOrder=L,P.renderOrder=h.renderOrder,P.z=p,P.group=l),n++,P}function R(h,T,C,L,p,l,P){P.reversedDepth===!0&&(p=-p);const y=v(h,T,C,L,p,l);C.transmission>0?i.push(y):C.transparent===!0?r.push(y):t.push(y)}function _(h,T,C,L,p,l){const P=v(h,T,C,L,p,l);C.transmission>0?i.unshift(P):C.transparent===!0?r.unshift(P):t.unshift(P)}function E(h,T){t.length>1&&t.sort(h||F_),i.length>1&&i.sort(T||Qs),r.length>1&&r.sort(T||Qs)}function S(){for(let h=n,T=e.length;h<T;h++){const C=e[h];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:R,unshift:_,finish:S,sort:E}}function O_(){let e=new WeakMap;function n(i,r){const a=e.get(i);let o;return a===void 0?(o=new Js,e.set(i,[o])):r>=a.length?(o=new Js,a.push(o)):o=a[r],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function B_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={direction:new Ie,color:new At};break;case"SpotLight":t={position:new Ie,direction:new Ie,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ie,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ie,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Ie,halfWidth:new Ie,halfHeight:new Ie};break}return e[n.id]=t,t}}}function G_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let H_=0;function V_(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function k_(e){const n=new B_,t=G_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)i.probe.push(new Ie);const r=new Ie,a=new ti,o=new ti;function v(_){let E=0,S=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let T=0,C=0,L=0,p=0,l=0,P=0,y=0,g=0,A=0,m=0,N=0,f=0,b=0,U=0;_.sort(V_);for(let k=0,q=_.length;k<q;k++){const F=_[k],$=F.color,K=F.intensity,Q=F.distance;let oe=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ni?oe=F.shadow.map.texture:oe=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)E+=$.r*K,S+=$.g*K,h+=$.b*K;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(F.sh.coefficients[ie],K);U++}else if(F.isSunLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),i.sunShadow[C]=ce,i.sunShadowMap[C]=oe;const Ye=se.getViewportCount();for(let Ve=0;Ve<Ye;Ve++)i.sunShadowMatrix[L+Ve]=se.getMatrix(Ve),i.sunShadowCascade[L+Ve]=se._cascadeData[Ve];L+=Ye,C++}i.sun[T]=ie,T++}else if(F.isDirectionalLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,i.directionalShadow[p]=ce,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=F.shadow.matrix,A++}i.directional[p]=ie,p++}else if(F.isSpotLight){const ie=n.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy($).multiplyScalar(K),ie.distance=Q,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,i.spot[P]=ie;const se=F.shadow;if(F.map&&(i.spotLightMap[f]=F.map,f++,se.updateMatrices(F),F.castShadow&&b++),i.spotLightMatrix[P]=se.matrix,F.castShadow){const ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,i.spotShadow[P]=ce,i.spotShadowMap[P]=oe,N++}P++}else if(F.isRectAreaLight){const ie=n.get(F);ie.color.copy($).multiplyScalar(K),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=ie,y++}else if(F.isPointLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,ce.shadowCameraNear=se.camera.near,ce.shadowCameraFar=se.camera.far,i.pointShadow[l]=ce,i.pointShadowMap[l]=oe,i.pointShadowMatrix[l]=F.shadow.matrix,m++}i.point[l]=ie,l++}else if(F.isHemisphereLight){const ie=n.get(F);ie.skyColor.copy(F.color).multiplyScalar(K),ie.groundColor.copy(F.groundColor).multiplyScalar(K),i.hemi[g]=ie,g++}}y>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=E,i.ambient[1]=S,i.ambient[2]=h;const G=i.hash;(G.sunLength!==T||G.directionalLength!==p||G.pointLength!==l||G.spotLength!==P||G.rectAreaLength!==y||G.hemiLength!==g||G.numSunShadows!==C||G.numDirectionalShadows!==A||G.numPointShadows!==m||G.numSpotShadows!==N||G.numSpotMaps!==f||G.numLightProbes!==U)&&(i.sun.length=T,i.directional.length=p,i.spot.length=P,i.rectArea.length=y,i.point.length=l,i.hemi.length=g,i.sunShadow.length=C,i.sunShadowMap.length=C,i.sunShadowMatrix.length=L,i.sunShadowCascade.length=L,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=m,i.pointShadowMap.length=m,i.pointShadowMatrix.length=m,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+f-b,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=U,G.sunLength=T,G.directionalLength=p,G.pointLength=l,G.spotLength=P,G.rectAreaLength=y,G.hemiLength=g,G.numSunShadows=C,G.numDirectionalShadows=A,G.numPointShadows=m,G.numSpotShadows=N,G.numSpotMaps=f,G.numLightProbes=U,i.version=H_++)}function R(_,E){let S=0,h=0,T=0,C=0,L=0,p=0;const l=E.matrixWorldInverse;for(let P=0,y=_.length;P<y;P++){const g=_[P];if(g.isSunLight){const A=i.sun[S];A.direction.setFromMatrixPosition(g.matrixWorld),A.direction.transformDirection(l),S++}else if(g.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(l),h++}else if(g.isSpotLight){const A=i.spot[C];A.position.setFromMatrixPosition(g.matrixWorld),A.position.applyMatrix4(l),A.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(l),C++}else if(g.isRectAreaLight){const A=i.rectArea[L];A.position.setFromMatrixPosition(g.matrixWorld),A.position.applyMatrix4(l),o.identity(),a.copy(g.matrixWorld),a.premultiply(l),o.extractRotation(a),A.halfWidth.set(g.width*.5,0,0),A.halfHeight.set(0,g.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),L++}else if(g.isPointLight){const A=i.point[T];A.position.setFromMatrixPosition(g.matrixWorld),A.position.applyMatrix4(l),T++}else if(g.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(g.matrixWorld),A.direction.transformDirection(l),p++}}}return{setup:v,setupView:R,state:i}}function ec(e){const n=new k_(e),t=[],i=[],r=[];function a(h){S.camera=h,t.length=0,i.length=0,r.length=0}function o(h){t.push(h)}function v(h){i.push(h)}function R(h){r.push(h)}function _(){n.setup(t)}function E(h){n.setupView(t,h)}const S={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:S,setupLights:_,setupLightsView:E,pushLight:o,pushShadow:v,pushLightProbeGrid:R}}function W_(e){let n=new WeakMap;function t(r,a=0){const o=n.get(r);let v;return o===void 0?(v=new ec(e),n.set(r,[v])):a>=o.length?(v=new ec(e),o.push(v)):v=o[a],v}function i(){n=new WeakMap}return{get:t,dispose:i}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,q_=[new Ie(1,0,0),new Ie(-1,0,0),new Ie(0,1,0),new Ie(0,-1,0),new Ie(0,0,1),new Ie(0,0,-1)],Y_=[new Ie(0,-1,0),new Ie(0,-1,0),new Ie(0,0,1),new Ie(0,0,-1),new Ie(0,-1,0),new Ie(0,-1,0)],tc=new ti,ra=new Ie,Br=new Ie;function K_(e,n,t){let i=new Tc;const r=new nn,a=new nn,o=new ln,v=new du,R=new uu,_={},E=t.maxTextureSize,S={[ua]:hn,[hn]:ua,[xn]:xn},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nn},radius:{value:4}},vertexShader:z_,fragmentShader:X_}),T=h.clone();T.defines.HORIZONTAL_PASS=1;const C=new hi;C.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Mn(C,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let l=this.type;this.render=function(m,N,f){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||m.length===0)return;this.type===fu&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ha);const b=e.getRenderTarget(),U=e.getActiveCubeFace(),G=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Vn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=l!==this.type;q&&N.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach($=>$.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,$=m.length;F<$;F++){const K=m[F],Q=K.shadow;if(Q===void 0){gt("WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const oe=Q.getFrameExtents();r.multiply(oe),a.copy(Q.mapSize),(r.x>E||r.y>E)&&(r.x>E&&(a.x=Math.floor(E/oe.x),r.x=a.x*oe.x,Q.mapSize.x=a.x),r.y>E&&(a.y=Math.floor(E/oe.y),r.y=a.y*oe.y,Q.mapSize.y=a.y));const ie=e.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ie,Q.map===null||q===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ca){if(K.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new En(r.x,r.y,{format:Ni,type:kn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Q.map.texture.name=K.name+".shadowMap",Q.map.depthTexture=new za(r.x,r.y,Zn),Q.map.depthTexture.name=K.name+".shadowMapDepth",Q.map.depthTexture.format=Di,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=pi,Q.map.depthTexture.magFilter=pi}else K.isPointLight?(Q.map=new $c(r.x),Q.map.depthTexture=new pu(r.x,mi)):(Q.map=new En(r.x,r.y),Q.map.depthTexture=new za(r.x,r.y,mi)),Q.map.depthTexture.name=K.name+".shadowMap",Q.map.depthTexture.format=Di,this.type===Ha?(Q.map.depthTexture.compareFunction=ie?io:ao,Q.map.depthTexture.minFilter=pn,Q.map.depthTexture.magFilter=pn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=pi,Q.map.depthTexture.magFilter=pi);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==r.x||Q.map.height!==r.y)&&Q.map.setSize(r.x,r.y);const se=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();K.isPointLight!==!0&&Q.updateMatrices(K,f);for(let ce=0;ce<se;ce++){const Ye=Q.getCamera(ce);if(K.isPointLight){const Ve=Q.camera,st=Q.matrix,Re=K.distance||Ve.far;Re!==Ve.far&&(Ve.far=Re,Ve.updateProjectionMatrix()),ra.setFromMatrixPosition(K.matrixWorld),Ve.position.copy(ra),Br.copy(Ve.position),Br.add(q_[ce]),Ve.up.copy(Y_[ce]),Ve.lookAt(Br),Ve.updateMatrixWorld(),st.makeTranslation(-ra.x,-ra.y,-ra.z),tc.multiplyMatrices(Ve.projectionMatrix,Ve.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(tc,Ve.coordinateSystem,Ve.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)e.setRenderTarget(Q.map,ce),e.clear();else{ce===0&&(e.setRenderTarget(Q.map),e.clear());const Ve=Q.getViewport(ce);o.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),k.viewport(o)}i=Q.getFrustum(ce),g(N,f,Ye,K,this.type)}Q.isPointLightShadow!==!0&&this.type===ca&&P(Q,f),Q.needsUpdate=!1}l=this.type,p.needsUpdate=!1,e.setRenderTarget(b,U,G)};function P(m,N){const f=n.update(L);h.defines.VSM_SAMPLES!==m.blurSamples&&(h.defines.VSM_SAMPLES=m.blurSamples,T.defines.VSM_SAMPLES=m.blurSamples,h.needsUpdate=!0,T.needsUpdate=!0),m.mapPass===null?m.mapPass=new En(r.x,r.y,{format:Ni,type:kn}):(m.mapPass.width!==m.map.width||m.mapPass.height!==m.map.height)&&m.mapPass.setSize(m.map.width,m.map.height),h.uniforms.shadow_pass.value=m.map.depthTexture,h.uniforms.resolution.value.set(m.map.width,m.map.height),h.uniforms.radius.value=m.radius,e.setRenderTarget(m.mapPass),e.clear(),e.renderBufferDirect(N,null,f,h,L,null),T.uniforms.shadow_pass.value=m.mapPass.texture,T.uniforms.resolution.value.set(m.map.width,m.map.height),T.uniforms.radius.value=m.radius,e.setRenderTarget(m.map),e.clear(),e.renderBufferDirect(N,null,f,T,L,null)}function y(m,N,f,b){let U=null;const G=f.isPointLight===!0?m.customDistanceMaterial:m.customDepthMaterial;if(G!==void 0)U=G;else if(U=f.isPointLight===!0?R:v,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const k=U.uuid,q=N.uuid;let F=_[k];F===void 0&&(F={},_[k]=F);let $=F[q];$===void 0&&($=U.clone(),F[q]=$,N.addEventListener("dispose",A)),U=$}if(U.visible=N.visible,U.wireframe=N.wireframe,b===ca?U.side=N.shadowSide!==null?N.shadowSide:N.side:U.side=N.shadowSide!==null?N.shadowSide:S[N.side],U.alphaMap=N.alphaMap,U.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,U.map=N.map,U.clipShadows=N.clipShadows,U.clippingPlanes=N.clippingPlanes,U.clipIntersection=N.clipIntersection,U.displacementMap=N.displacementMap,U.displacementScale=N.displacementScale,U.displacementBias=N.displacementBias,U.wireframeLinewidth=N.wireframeLinewidth,U.linewidth=N.linewidth,f.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const k=e.properties.get(U);k.light=f}return U}function g(m,N,f,b,U){if(m.visible===!1)return;if(m.layers.test(N.layers)&&(m.isMesh||m.isLine||m.isPoints)&&(m.castShadow||m.receiveShadow&&U===ca)&&(!m.frustumCulled||m.intersectsFrustum(i))){m.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,m.matrixWorld);const q=n.update(m),F=m.material;if(Array.isArray(F)){const $=q.groups;for(let K=0,Q=$.length;K<Q;K++){const oe=$[K],ie=F[oe.materialIndex];if(ie&&ie.visible){const se=y(m,ie,b,U);m.onBeforeShadow(e,m,N,f,q,se,oe),e.renderBufferDirect(f,null,q,se,m,oe),m.onAfterShadow(e,m,N,f,q,se,oe)}}}else if(F.visible){const $=y(m,F,b,U);m.onBeforeShadow(e,m,N,f,q,$,null),e.renderBufferDirect(f,null,q,$,m,null),m.onAfterShadow(e,m,N,f,q,$,null)}}const k=m.children;for(let q=0,F=k.length;q<F;q++)g(k[q],N,f,b,U)}function A(m){m.target.removeEventListener("dispose",A);for(const f in _){const b=_[f],U=m.target.uuid;U in b&&(b[U].dispose(),delete b[U])}}}function j_(e,n){function t(){let D=!1;const he=new ln;let J=null;const pe=new ln(0,0,0,0);return{setMask:function(Ee){J!==Ee&&!D&&(e.colorMask(Ee,Ee,Ee,Ee),J=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,ae,Oe,Le,St){St===!0&&(Ee*=Le,ae*=Le,Oe*=Le),he.set(Ee,ae,Oe,Le),pe.equals(he)===!1&&(e.clearColor(Ee,ae,Oe,Le),pe.copy(he))},reset:function(){D=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let D=!1,he=!1,J=null,pe=null,Ee=null;return{setReversed:function(ae){if(he!==ae){const Oe=n.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),he=ae;const Le=Ee;Ee=null,this.setClear(Le)}},getReversed:function(){return he},setTest:function(ae){ae?te(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){J!==ae&&!D&&(e.depthMask(ae),J=ae)},setFunc:function(ae){if(he&&(ae=$u[ae]),pe!==ae){switch(ae){case wu:e.depthFunc(e.NEVER);break;case Ru:e.depthFunc(e.ALWAYS);break;case Au:e.depthFunc(e.LESS);break;case jo:e.depthFunc(e.LEQUAL);break;case bu:e.depthFunc(e.EQUAL);break;case Tu:e.depthFunc(e.GEQUAL);break;case Mu:e.depthFunc(e.GREATER);break;case Eu:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=ae}},setLocked:function(ae){D=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,he&&(ae=1-ae),e.clearDepth(ae))},reset:function(){D=!1,J=null,pe=null,Ee=null,he=!1}}}function r(){let D=!1,he=null,J=null,pe=null,Ee=null,ae=null,Oe=null,Le=null,St=null;return{setTest:function(rt){D||(rt?te(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(rt){he!==rt&&!D&&(e.stencilMask(rt),he=rt)},setFunc:function(rt,Kt,dn){(J!==rt||pe!==Kt||Ee!==dn)&&(e.stencilFunc(rt,Kt,dn),J=rt,pe=Kt,Ee=dn)},setOp:function(rt,Kt,dn){(ae!==rt||Oe!==Kt||Le!==dn)&&(e.stencilOp(rt,Kt,dn),ae=rt,Oe=Kt,Le=dn)},setLocked:function(rt){D=rt},setClear:function(rt){St!==rt&&(e.clearStencil(rt),St=rt)},reset:function(){D=!1,he=null,J=null,pe=null,Ee=null,ae=null,Oe=null,Le=null,St=null}}}const a=new t,o=new i,v=new r,R=new WeakMap,_=new WeakMap;let E={},S={},h={},T=new WeakMap,C=[],L=null,p=!1,l=null,P=null,y=null,g=null,A=null,m=null,N=null,f=new At(0,0,0),b=0,U=!1,G=null,k=null,q=null,F=null,$=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=oe>=1):ie.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=oe>=2);let se=null,ce={};const Ye=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),st=new ln().fromArray(Ye),Re=new ln().fromArray(Ve);function Be(D,he,J,pe){const Ee=new Uint8Array(4),ae=e.createTexture();e.bindTexture(D,ae),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Oe=0;Oe<J;Oe++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(he,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D(he+Oe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return ae}const Y={};Y[e.TEXTURE_2D]=Be(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=Be(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=Be(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=Be(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),v.setClear(0),te(e.DEPTH_TEST),o.setFunc(jo),je(!1),ut($o),te(e.CULL_FACE),Ze(Vn);function te(D){E[D]!==!0&&(e.enable(D),E[D]=!0)}function Me(D){E[D]!==!1&&(e.disable(D),E[D]=!1)}function We(D,he){return h[D]!==he?(e.bindFramebuffer(D,he),h[D]=he,D===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=he),D===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=he),!0):!1}function fe(D,he){let J=C,pe=!1;if(D){J=T.get(he),J===void 0&&(J=[],T.set(he,J));const Ee=D.textures;if(J.length!==Ee.length||J[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Oe=Ee.length;ae<Oe;ae++)J[ae]=e.COLOR_ATTACHMENT0+ae;J.length=Ee.length,pe=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,pe=!0);pe&&e.drawBuffers(J)}function Ae(D){return L!==D?(e.useProgram(D),L=D,!0):!1}const at={[ia]:e.FUNC_ADD,[Gd]:e.FUNC_SUBTRACT,[Bd]:e.FUNC_REVERSE_SUBTRACT};at[Zu]=e.MIN,at[Qu]=e.MAX;const ke={[eu]:e.ZERO,[Jd]:e.ONE,[Qd]:e.SRC_COLOR,[Zd]:e.SRC_ALPHA,[$d]:e.SRC_ALPHA_SATURATE,[jd]:e.DST_COLOR,[Kd]:e.DST_ALPHA,[Yd]:e.ONE_MINUS_SRC_COLOR,[qd]:e.ONE_MINUS_SRC_ALPHA,[Xd]:e.ONE_MINUS_DST_COLOR,[zd]:e.ONE_MINUS_DST_ALPHA,[Wd]:e.CONSTANT_COLOR,[kd]:e.ONE_MINUS_CONSTANT_COLOR,[Vd]:e.CONSTANT_ALPHA,[Hd]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,he,J,pe,Ee,ae,Oe,Le,St,rt){if(D===Vn){p===!0&&(Me(e.BLEND),p=!1);return}if(p===!1&&(te(e.BLEND),p=!0),D!==yu){if(D!==l||rt!==U){if((P!==ia||A!==ia)&&(e.blendEquation(e.FUNC_ADD),P=ia,A=ia),rt)switch(D){case Va:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Jo:e.blendFunc(e.ONE,e.ONE);break;case Qo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:yt("WebGLState: Invalid blending: ",D);break}else switch(D){case Va:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Jo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Qo:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",D);break}y=null,g=null,m=null,N=null,f.set(0,0,0),b=0,l=D,U=rt}return}Ee=Ee||he,ae=ae||J,Oe=Oe||pe,(he!==P||Ee!==A)&&(e.blendEquationSeparate(at[he],at[Ee]),P=he,A=Ee),(J!==y||pe!==g||ae!==m||Oe!==N)&&(e.blendFuncSeparate(ke[J],ke[pe],ke[ae],ke[Oe]),y=J,g=pe,m=ae,N=Oe),(Le.equals(f)===!1||St!==b)&&(e.blendColor(Le.r,Le.g,Le.b,St),f.copy(Le),b=St),l=D,U=!1}function Ke(D,he){D.side===xn?Me(e.CULL_FACE):te(e.CULL_FACE);let J=D.side===hn;he&&(J=!J),je(J),D.blending===Va&&D.transparent===!1?Ze(Vn):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),a.setMask(D.colorWrite);const pe=D.stencilWrite;v.setTest(pe),pe&&(v.setMask(D.stencilWriteMask),v.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),v.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){G!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),G=D)}function ut(D){D!==Cu?(te(e.CULL_FACE),D!==k&&(D===$o?e.cullFace(e.BACK):D===Pu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),k=D}function ct(D){D!==q&&(Q&&e.lineWidth(D),q=D)}function Yt(D,he,J){D?(te(e.POLYGON_OFFSET_FILL),(F!==he||$!==J)&&(F=he,$=J,o.getReversed()&&(he=-he),e.polygonOffset(he,J))):Me(e.POLYGON_OFFSET_FILL)}function vt(D){D?te(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function ht(D){D===void 0&&(D=e.TEXTURE0+K-1),se!==D&&(e.activeTexture(D),se=D)}function I(D,he,J){J===void 0&&(se===null?J=e.TEXTURE0+K-1:J=se);let pe=ce[J];pe===void 0&&(pe={type:void 0,texture:void 0},ce[J]=pe),(pe.type!==D||pe.texture!==he)&&(se!==J&&(e.activeTexture(J),se=J),e.bindTexture(D,he||Y[D]),pe.type=D,pe.texture=he)}function Gt(){const D=ce[se];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ft(){try{e.compressedTexImage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function M(){try{e.compressedTexImage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function s(){try{e.texSubImage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function B(){try{e.texSubImage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function j(){try{e.compressedTexSubImage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function de(){try{e.texStorage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function _e(){try{e.texStorage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function Z(){try{e.texImage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function ee(){try{e.texImage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function ge(D){return S[D]!==void 0?S[D]:e.getParameter(D)}function Fe(D,he){S[D]!==he&&(e.pixelStorei(D,he),S[D]=he)}function ve(D){st.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function me(D){Re.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),Re.copy(D))}function De(D,he){let J=_.get(he);J===void 0&&(J=new WeakMap,_.set(he,J));let pe=J.get(D);pe===void 0&&(pe=e.getUniformBlockIndex(he,D.name),J.set(D,pe))}function Ge(D,he){const pe=_.get(he).get(D);R.get(he)!==pe&&(e.uniformBlockBinding(he,pe,D.__bindingPointIndex),R.set(he,pe))}function $e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),E={},S={},se=null,ce={},h={},T=new WeakMap,C=[],L=null,p=!1,l=null,P=null,y=null,g=null,A=null,m=null,N=null,f=new At(0,0,0),b=0,U=!1,G=null,k=null,q=null,F=null,$=null,st.set(0,0,e.canvas.width,e.canvas.height),Re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),v.reset()}return{buffers:{color:a,depth:o,stencil:v},enable:te,disable:Me,bindFramebuffer:We,drawBuffers:fe,useProgram:Ae,setBlending:Ze,setMaterial:Ke,setFlipSided:je,setCullFace:ut,setLineWidth:ct,setPolygonOffset:Yt,setScissorTest:vt,activeTexture:ht,bindTexture:I,unbindTexture:Gt,compressedTexImage2D:ft,compressedTexImage3D:M,texImage2D:Z,texImage3D:ee,pixelStorei:Fe,getParameter:ge,updateUBOMapping:De,uniformBlockBinding:Ge,texStorage2D:de,texStorage3D:_e,texSubImage2D:s,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:ve,viewport:me,reset:$e}}function $_(e,n,t,i,r,a,o){const v=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,R=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new nn,E=new WeakMap,S=new Set;let h;const T=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(M,s){return C?new OffscreenCanvas(M,s):zu("canvas")}function p(M,s,B){let X=1;const j=ft(M);if((j.width>B||j.height>B)&&(X=B/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const de=Math.floor(X*j.width),_e=Math.floor(X*j.height);h===void 0&&(h=L(de,_e));const Z=s?L(de,_e):h;return Z.width=de,Z.height=_e,Z.getContext("2d").drawImage(M,0,0,de,_e),gt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+de+"x"+_e+")."),Z}else return"data"in M&&gt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),M;return M}function l(M){return M.generateMipmaps}function P(M){e.generateMipmap(M)}function y(M){return M.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?e.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(M,s,B,X,j,de=!1){if(M!==null){if(e[M]!==void 0)return e[M];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let _e;X&&(_e=n.get("EXT_texture_norm16"),_e||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=s;if(s===e.RED&&(B===e.FLOAT&&(Z=e.R32F),B===e.HALF_FLOAT&&(Z=e.R16F),B===e.UNSIGNED_BYTE&&(Z=e.R8),B===e.UNSIGNED_SHORT&&_e&&(Z=_e.R16_EXT),B===e.SHORT&&_e&&(Z=_e.R16_SNORM_EXT)),s===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.R8UI),B===e.UNSIGNED_SHORT&&(Z=e.R16UI),B===e.UNSIGNED_INT&&(Z=e.R32UI),B===e.BYTE&&(Z=e.R8I),B===e.SHORT&&(Z=e.R16I),B===e.INT&&(Z=e.R32I)),s===e.RG&&(B===e.FLOAT&&(Z=e.RG32F),B===e.HALF_FLOAT&&(Z=e.RG16F),B===e.UNSIGNED_BYTE&&(Z=e.RG8),B===e.UNSIGNED_SHORT&&_e&&(Z=_e.RG16_EXT),B===e.SHORT&&_e&&(Z=_e.RG16_SNORM_EXT)),s===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RG8UI),B===e.UNSIGNED_SHORT&&(Z=e.RG16UI),B===e.UNSIGNED_INT&&(Z=e.RG32UI),B===e.BYTE&&(Z=e.RG8I),B===e.SHORT&&(Z=e.RG16I),B===e.INT&&(Z=e.RG32I)),s===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),B===e.UNSIGNED_INT&&(Z=e.RGB32UI),B===e.BYTE&&(Z=e.RGB8I),B===e.SHORT&&(Z=e.RGB16I),B===e.INT&&(Z=e.RGB32I)),s===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),B===e.UNSIGNED_INT&&(Z=e.RGBA32UI),B===e.BYTE&&(Z=e.RGBA8I),B===e.SHORT&&(Z=e.RGBA16I),B===e.INT&&(Z=e.RGBA32I)),s===e.RGB&&(B===e.UNSIGNED_SHORT&&_e&&(Z=_e.RGB16_EXT),B===e.SHORT&&_e&&(Z=_e.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),s===e.RGBA){const ee=de?Fc:Dt.getTransfer(j);B===e.FLOAT&&(Z=e.RGBA32F),B===e.HALF_FLOAT&&(Z=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Z=ee===wt?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&_e&&(Z=_e.RGBA16_EXT),B===e.SHORT&&_e&&(Z=_e.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&n.get("EXT_color_buffer_float"),Z}function A(M,s){let B;return M?s===null||s===mi||s===fa?B=e.DEPTH24_STENCIL8:s===Zn?B=e.DEPTH32F_STENCIL8:s===qa&&(B=e.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===mi||s===fa?B=e.DEPTH_COMPONENT24:s===Zn?B=e.DEPTH_COMPONENT32F:s===qa&&(B=e.DEPTH_COMPONENT16),B}function m(M,s){return l(M)===!0||M.isFramebufferTexture&&M.minFilter!==pi&&M.minFilter!==pn?Math.log2(Math.max(s.width,s.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?s.mipmaps.length:1}function N(M){const s=M.target;s.removeEventListener("dispose",N),b(s),s.isVideoTexture&&E.delete(s),s.isHTMLTexture&&S.delete(s)}function f(M){const s=M.target;s.removeEventListener("dispose",f),G(s)}function b(M){const s=i.get(M);if(s.__webglInit===void 0)return;const B=M.source,X=T.get(B);if(X){const j=X[s.__cacheKey];j.usedTimes--,j.usedTimes===0&&U(M),Object.keys(X).length===0&&T.delete(B)}i.remove(M)}function U(M){const s=i.get(M);e.deleteTexture(s.__webglTexture);const B=M.source,X=T.get(B);delete X[s.__cacheKey],o.memory.textures--}function G(M){const s=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(s.__webglFramebuffer[X]))for(let j=0;j<s.__webglFramebuffer[X].length;j++)e.deleteFramebuffer(s.__webglFramebuffer[X][j]);else e.deleteFramebuffer(s.__webglFramebuffer[X]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[X])}else{if(Array.isArray(s.__webglFramebuffer))for(let X=0;X<s.__webglFramebuffer.length;X++)e.deleteFramebuffer(s.__webglFramebuffer[X]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let X=0;X<s.__webglColorRenderbuffer.length;X++)s.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[X]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const B=M.textures;for(let X=0,j=B.length;X<j;X++){const de=i.get(B[X]);de.__webglTexture&&(e.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(B[X])}i.remove(M)}let k=0;function q(){k=0}function F(){return k}function $(M){k=M}function K(){const M=k;return M>=r.maxTextures&&gt("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,M}function Q(M){const s=[];return s.push(M.wrapS),s.push(M.wrapT),s.push(M.wrapR||0),s.push(M.magFilter),s.push(M.minFilter),s.push(M.anisotropy),s.push(M.internalFormat),s.push(M.format),s.push(M.type),s.push(M.generateMipmaps),s.push(M.premultiplyAlpha),s.push(M.flipY),s.push(M.unpackAlignment),s.push(M.colorSpace),s.join()}function oe(M,s){const B=i.get(M);if(M.isVideoTexture&&I(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&B.__version!==M.version){const X=M.image;if(X===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(B,M,s);return}}else M.isExternalTexture&&(B.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+s)}function ie(M,s){const B=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){Me(B,M,s);return}else M.isExternalTexture&&(B.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+s)}function se(M,s){const B=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){Me(B,M,s);return}t.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+s)}function ce(M,s){const B=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&B.__version!==M.version){We(B,M,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+s)}const Ye={[nu]:e.REPEAT,[Xr]:e.CLAMP_TO_EDGE,[tu]:e.MIRRORED_REPEAT},Ve={[pi]:e.NEAREST,[iu]:e.NEAREST_MIPMAP_NEAREST,[Da]:e.NEAREST_MIPMAP_LINEAR,[pn]:e.LINEAR,[Ar]:e.LINEAR_MIPMAP_NEAREST,[Pi]:e.LINEAR_MIPMAP_LINEAR},st={[lu]:e.NEVER,[cu]:e.ALWAYS,[su]:e.LESS,[ao]:e.LEQUAL,[ou]:e.EQUAL,[io]:e.GEQUAL,[ru]:e.GREATER,[au]:e.NOTEQUAL};function Re(M,s){if(s.type===Zn&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===pn||s.magFilter===Ar||s.magFilter===Da||s.magFilter===Pi||s.minFilter===pn||s.minFilter===Ar||s.minFilter===Da||s.minFilter===Pi)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(M,e.TEXTURE_WRAP_S,Ye[s.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,Ye[s.wrapT]),(M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)&&e.texParameteri(M,e.TEXTURE_WRAP_R,Ye[s.wrapR]),e.texParameteri(M,e.TEXTURE_MAG_FILTER,Ve[s.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,Ve[s.minFilter]),s.compareFunction&&(e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,st[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===pi||s.minFilter!==Da&&s.minFilter!==Pi||s.type===Zn&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const B=n.get("EXT_texture_filter_anisotropic");e.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function Be(M,s){let B=!1;M.__webglInit===void 0&&(M.__webglInit=!0,s.addEventListener("dispose",N));const X=s.source;let j=T.get(X);j===void 0&&(j={},T.set(X,j));const de=Q(s);if(de!==M.__cacheKey){j[de]===void 0&&(j[de]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[de].usedTimes++;const _e=j[M.__cacheKey];_e!==void 0&&(j[M.__cacheKey].usedTimes--,_e.usedTimes===0&&U(s)),M.__cacheKey=de,M.__webglTexture=j[de].texture}return B}function Y(M,s,B){return Math.floor(Math.floor(M/B)/s)}function te(M,s,B,X){const de=M.updateRanges;if(de.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,B,X,s.data);else{de.sort((Fe,ve)=>Fe.start-ve.start);let _e=0;for(let Fe=1;Fe<de.length;Fe++){const ve=de[_e],me=de[Fe],De=ve.start+ve.count,Ge=Y(me.start,s.width,4),$e=Y(ve.start,s.width,4);me.start<=De+1&&Ge===$e&&Y(me.start+me.count-1,s.width,4)===Ge?ve.count=Math.max(ve.count,me.start+me.count-ve.start):(++_e,de[_e]=me)}de.length=_e+1;const Z=t.getParameter(e.UNPACK_ROW_LENGTH),ee=t.getParameter(e.UNPACK_SKIP_PIXELS),ge=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let Fe=0,ve=de.length;Fe<ve;Fe++){const me=de[Fe],De=Math.floor(me.start/4),Ge=Math.ceil(me.count/4),$e=De%s.width,D=Math.floor(De/s.width),he=Ge,J=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(e.UNPACK_SKIP_ROWS,D),t.texSubImage2D(e.TEXTURE_2D,0,$e,D,he,J,B,X,s.data)}M.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,Z),t.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(e.UNPACK_SKIP_ROWS,ge)}}function Me(M,s,B){let X=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(X=e.TEXTURE_3D);const j=Be(M,s),de=s.source;t.bindTexture(X,M.__webglTexture,e.TEXTURE0+B);const _e=i.get(de);if(de.version!==_e.__version||j===!0){if(t.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&s.image instanceof ImageBitmap)===!1){const J=Dt.getPrimaries(Dt.workingColorSpace),pe=s.colorSpace===Ci?null:Dt.getPrimaries(s.colorSpace),Ee=s.colorSpace===Ci||J===pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment);let ee=p(s.image,!1,r.maxTextureSize);ee=Gt(s,ee);const ge=a.convert(s.format,s.colorSpace),Fe=a.convert(s.type);let ve=g(s.internalFormat,ge,Fe,s.normalized,s.colorSpace,s.isVideoTexture);Re(X,s);let me;const De=s.mipmaps,Ge=s.isVideoTexture!==!0,$e=_e.__version===void 0||j===!0,D=de.dataReady,he=m(s,ee);if(s.isDepthTexture)ve=A(s.format===yi,s.type),$e&&(Ge?t.texStorage2D(e.TEXTURE_2D,1,ve,ee.width,ee.height):t.texImage2D(e.TEXTURE_2D,0,ve,ee.width,ee.height,0,ge,Fe,null));else if(s.isDataTexture)if(De.length>0){Ge&&$e&&t.texStorage2D(e.TEXTURE_2D,he,ve,De[0].width,De[0].height);for(let J=0,pe=De.length;J<pe;J++)me=De[J],Ge?D&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,me.width,me.height,ge,Fe,me.data):t.texImage2D(e.TEXTURE_2D,J,ve,me.width,me.height,0,ge,Fe,me.data);s.generateMipmaps=!1}else Ge?($e&&t.texStorage2D(e.TEXTURE_2D,he,ve,ee.width,ee.height),D&&te(s,ee,ge,Fe)):t.texImage2D(e.TEXTURE_2D,0,ve,ee.width,ee.height,0,ge,Fe,ee.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){Ge&&$e&&t.texStorage3D(e.TEXTURE_2D_ARRAY,he,ve,De[0].width,De[0].height,ee.depth);for(let J=0,pe=De.length;J<pe;J++)if(me=De[J],s.format!==Hn)if(ge!==null)if(Ge){if(D)if(s.layerUpdates.size>0){const Ee=Ls(me.width,me.height,s.format,s.type);for(const ae of s.layerUpdates){const Oe=me.data.subarray(ae*Ee/me.data.BYTES_PER_ELEMENT,(ae+1)*Ee/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,ae,me.width,me.height,1,ge,Oe)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,me.width,me.height,ee.depth,ge,me.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,ve,me.width,me.height,ee.depth,0,me.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,me.width,me.height,ee.depth,ge,Fe,me.data):t.texImage3D(e.TEXTURE_2D_ARRAY,J,ve,me.width,me.height,ee.depth,0,ge,Fe,me.data);s.layerUpdates.size>0&&s.clearLayerUpdates()}else{Ge&&$e&&t.texStorage2D(e.TEXTURE_2D,he,ve,De[0].width,De[0].height);for(let J=0,pe=De.length;J<pe;J++)me=De[J],s.format!==Hn?ge!==null?Ge?D&&t.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,me.width,me.height,ge,me.data):t.compressedTexImage2D(e.TEXTURE_2D,J,ve,me.width,me.height,0,me.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,me.width,me.height,ge,Fe,me.data):t.texImage2D(e.TEXTURE_2D,J,ve,me.width,me.height,0,ge,Fe,me.data)}else if(s.isDataArrayTexture)if(Ge){if($e&&t.texStorage3D(e.TEXTURE_2D_ARRAY,he,ve,ee.width,ee.height,ee.depth),D)if(s.layerUpdates.size>0){const J=Ls(ee.width,ee.height,s.format,s.type);for(const pe of s.layerUpdates){const Ee=ee.data.subarray(pe*J/ee.data.BYTES_PER_ELEMENT,(pe+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,pe,ee.width,ee.height,1,ge,Fe,Ee)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,Fe,ee.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,ge,Fe,ee.data);else if(s.isData3DTexture)Ge?($e&&t.texStorage3D(e.TEXTURE_3D,he,ve,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,Fe,ee.data)):t.texImage3D(e.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,ge,Fe,ee.data);else if(s.isFramebufferTexture){if($e)if(Ge)t.texStorage2D(e.TEXTURE_2D,he,ve,ee.width,ee.height);else{let J=ee.width,pe=ee.height;for(let Ee=0;Ee<he;Ee++)t.texImage2D(e.TEXTURE_2D,Ee,ve,J,pe,0,ge,Fe,null),J>>=1,pe>>=1}}else if(s.isHTMLTexture){if("texElementImage2D"in e){const J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),S.add(s),J.onpaint=pe=>{const Ee=pe.changedElements;for(const ae of S)Ee.includes(ae.image)&&(ae.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ee);else{const Ee=e.RGBA,ae=e.RGBA,Oe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ee,ae,Oe,ee)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ge&&$e){const J=ft(De[0]);t.texStorage2D(e.TEXTURE_2D,he,ve,J.width,J.height)}for(let J=0,pe=De.length;J<pe;J++)me=De[J],Ge?D&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,ge,Fe,me):t.texImage2D(e.TEXTURE_2D,J,ve,ge,Fe,me);s.generateMipmaps=!1}else if(Ge){if($e){const J=ft(ee);t.texStorage2D(e.TEXTURE_2D,he,ve,J.width,J.height)}D&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ge,Fe,ee)}else t.texImage2D(e.TEXTURE_2D,0,ve,ge,Fe,ee);l(s)&&P(X),_e.__version=de.version,s.onUpdate&&s.onUpdate(s)}M.__version=s.version}function We(M,s,B){if(s.image.length!==6)return;const X=Be(M,s),j=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+B);const de=i.get(j);if(j.version!==de.__version||X===!0){t.activeTexture(e.TEXTURE0+B);const _e=Dt.getPrimaries(Dt.workingColorSpace),Z=s.colorSpace===Ci?null:Dt.getPrimaries(s.colorSpace),ee=s.colorSpace===Ci||_e===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ge=s.isCompressedTexture||s.image[0].isCompressedTexture,Fe=s.image[0]&&s.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!ge&&!Fe?ve[ae]=p(s.image[ae],!0,r.maxCubemapSize):ve[ae]=Fe?s.image[ae].image:s.image[ae],ve[ae]=Gt(s,ve[ae]);const me=ve[0],De=a.convert(s.format,s.colorSpace),Ge=a.convert(s.type),$e=g(s.internalFormat,De,Ge,s.normalized,s.colorSpace),D=s.isVideoTexture!==!0,he=de.__version===void 0||X===!0,J=j.dataReady;let pe=m(s,me);Re(e.TEXTURE_CUBE_MAP,s);let Ee;if(ge){D&&he&&t.texStorage2D(e.TEXTURE_CUBE_MAP,pe,$e,me.width,me.height);for(let ae=0;ae<6;ae++){Ee=ve[ae].mipmaps;for(let Oe=0;Oe<Ee.length;Oe++){const Le=Ee[Oe];s.format!==Hn?De!==null?D?J&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Le.width,Le.height,De,Le.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,$e,Le.width,Le.height,0,Le.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Le.width,Le.height,De,Ge,Le.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,$e,Le.width,Le.height,0,De,Ge,Le.data)}}}else{if(Ee=s.mipmaps,D&&he){Ee.length>0&&pe++;const ae=ft(ve[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,pe,$e,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Fe){D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,De,Ge,ve[ae].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,ve[ae].width,ve[ae].height,0,De,Ge,ve[ae].data);for(let Oe=0;Oe<Ee.length;Oe++){const St=Ee[Oe].image[ae].image;D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,St.width,St.height,De,Ge,St.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,$e,St.width,St.height,0,De,Ge,St.data)}}else{D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Ge,ve[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,De,Ge,ve[ae]);for(let Oe=0;Oe<Ee.length;Oe++){const Le=Ee[Oe];D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,De,Ge,Le.image[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,$e,De,Ge,Le.image[ae])}}}l(s)&&P(e.TEXTURE_CUBE_MAP),de.__version=j.version,s.onUpdate&&s.onUpdate(s)}M.__version=s.version}function fe(M,s,B,X,j,de){const _e=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),ee=g(B.internalFormat,_e,Z,B.normalized,B.colorSpace),ge=i.get(s),Fe=i.get(B);if(Fe.__renderTarget=s,!ge.__hasExternalTextures){const ve=Math.max(1,s.width>>de),me=Math.max(1,s.height>>de);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?t.texImage3D(j,de,ee,ve,me,s.depth,0,_e,Z,null):t.texImage2D(j,de,ee,ve,me,0,_e,Z,null)}t.bindFramebuffer(e.FRAMEBUFFER,M),ht(s)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,j,Fe.__webglTexture,0,vt(s)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,j,Fe.__webglTexture,de),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ae(M,s,B){if(e.bindRenderbuffer(e.RENDERBUFFER,M),s.depthBuffer){const X=s.depthTexture,j=X&&X.isDepthTexture?X.type:null,de=A(s.stencilBuffer,j),_e=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ht(s)?v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt(s),de,s.width,s.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt(s),de,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,de,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,_e,e.RENDERBUFFER,M)}else{const X=s.textures;for(let j=0;j<X.length;j++){const de=X[j],_e=a.convert(de.format,de.colorSpace),Z=a.convert(de.type),ee=g(de.internalFormat,_e,Z,de.normalized,de.colorSpace);ht(s)?v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt(s),ee,s.width,s.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt(s),ee,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,ee,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function at(M,s,B){const X=s.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,M),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(s.depthTexture);if(j.__renderTarget=s,(!j.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,s.depthTexture.addEventListener("dispose",N)),j.__webglTexture===void 0){j.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),Re(e.TEXTURE_CUBE_MAP,s.depthTexture);const ge=a.convert(s.depthTexture.format),Fe=a.convert(s.depthTexture.type);let ve;s.depthTexture.format===Di?ve=e.DEPTH_COMPONENT24:s.depthTexture.format===yi&&(ve=e.DEPTH24_STENCIL8);for(let me=0;me<6;me++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,s.width,s.height,0,ge,Fe,null)}}else oe(s.depthTexture,0);const de=j.__webglTexture,_e=vt(s),Z=X?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,ee=s.depthTexture.format===yi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(s.depthTexture.format===Di)ht(s)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,Z,de,0,_e):e.framebufferTexture2D(e.FRAMEBUFFER,ee,Z,de,0);else if(s.depthTexture.format===yi)ht(s)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,Z,de,0,_e):e.framebufferTexture2D(e.FRAMEBUFFER,ee,Z,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(M){const s=i.get(M),B=M.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==M.depthTexture){const X=M.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),X){const j=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),s.__depthDisposeCallback=j}s.__boundDepthTexture=X}if(M.depthTexture&&!s.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)at(s.__webglFramebuffer[X],M,X);else{const X=M.texture.mipmaps;X&&X.length>0?at(s.__webglFramebuffer[0],M,0):at(s.__webglFramebuffer,M,0)}else if(B){s.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[X]),s.__webglDepthbuffer[X]===void 0)s.__webglDepthbuffer[X]=e.createRenderbuffer(),Ae(s.__webglDepthbuffer[X],M,!1);else{const j=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=s.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,de)}}else{const X=M.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),Ae(s.__webglDepthbuffer,M,!1);else{const j=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,de)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ze(M,s,B){const X=i.get(M);s!==void 0&&fe(X.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&ke(M)}function Ke(M){const s=M.texture,B=i.get(M),X=i.get(s);M.addEventListener("dispose",f);const j=M.textures,de=M.isWebGLCubeRenderTarget===!0,_e=j.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=s.version,o.memory.textures++),de){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(s.mipmaps&&s.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let ee=0;ee<s.mipmaps.length;ee++)B.__webglFramebuffer[Z][ee]=e.createFramebuffer()}else B.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<s.mipmaps.length;Z++)B.__webglFramebuffer[Z]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(_e)for(let Z=0,ee=j.length;Z<ee;Z++){const ge=i.get(j[Z]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),o.memory.textures++)}if(M.samples>0&&ht(M)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){const ee=j[Z];B.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const ge=a.convert(ee.format,ee.colorSpace),Fe=a.convert(ee.type),ve=g(ee.internalFormat,ge,Fe,ee.normalized,ee.colorSpace,M.isXRRenderTarget===!0),me=vt(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,me,ve,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),Ae(B.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(de){t.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Re(e.TEXTURE_CUBE_MAP,s);for(let Z=0;Z<6;Z++)if(s.mipmaps&&s.mipmaps.length>0)for(let ee=0;ee<s.mipmaps.length;ee++)fe(B.__webglFramebuffer[Z][ee],M,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else fe(B.__webglFramebuffer[Z],M,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);l(s)&&P(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let Z=0,ee=j.length;Z<ee;Z++){const ge=j[Z],Fe=i.get(ge);let ve=e.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ve=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ve,Fe.__webglTexture),Re(ve,ge),fe(B.__webglFramebuffer,M,ge,e.COLOR_ATTACHMENT0+Z,ve,0),l(ge)&&P(ve)}t.unbindTexture()}else{let Z=e.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Z=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),Re(Z,s),s.mipmaps&&s.mipmaps.length>0)for(let ee=0;ee<s.mipmaps.length;ee++)fe(B.__webglFramebuffer[ee],M,s,e.COLOR_ATTACHMENT0,Z,ee);else fe(B.__webglFramebuffer,M,s,e.COLOR_ATTACHMENT0,Z,0);l(s)&&P(Z),t.unbindTexture()}M.depthBuffer&&ke(M)}function je(M){const s=M.textures;for(let B=0,X=s.length;B<X;B++){const j=s[B];if(l(j)){const de=y(M),_e=i.get(j).__webglTexture;t.bindTexture(de,_e),P(de),t.unbindTexture()}}}const ut=[],ct=[];function Yt(M){if(M.samples>0){if(ht(M)===!1){const s=M.textures,B=M.width,X=M.height;let j=e.COLOR_BUFFER_BIT;const de=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=i.get(M),Z=s.length>1;if(Z)for(let ge=0;ge<s.length;ge++)t.bindFramebuffer(e.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,_e.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const ee=M.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ge=0;ge<s.length;ge++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const Fe=i.get(s[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Fe,0)}e.blitFramebuffer(0,0,B,X,0,0,B,X,j,e.NEAREST),R===!0&&(ut.length=0,ct.length=0,ut.push(e.COLOR_ATTACHMENT0+ge),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&(ut.push(de),ct.push(de),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ct)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let ge=0;ge<s.length;ge++){t.bindFramebuffer(e.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const Fe=i.get(s[ge]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,_e.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,Fe,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&R){const s=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function vt(M){return Math.min(r.maxSamples,M.samples)}function ht(M){const s=i.get(M);return M.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function I(M){const s=o.render.frame;E.get(M)!==s&&(E.set(M,s),M.update())}function Gt(M,s){const B=M.colorSpace,X=M.format,j=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||B!==zc&&B!==Ci&&(Dt.getTransfer(B)===wt?(X!==Hn||j!==Nn)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",B)),s}function ft(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(_.width=M.naturalWidth||M.width,_.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(_.width=M.displayWidth,_.height=M.displayHeight):(_.width=M.width,_.height=M.height),_}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=F,this.setTextureUnits=$,this.setTexture2D=oe,this.setTexture2DArray=ie,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=Ze,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Z_(e,n){function t(i,r=Ci){let a;const o=Dt.getTransfer(r);if(i===Nn)return e.UNSIGNED_BYTE;if(i===Cc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Iu)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Uu)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fu)return e.BYTE;if(i===Ou)return e.SHORT;if(i===qa)return e.UNSIGNED_SHORT;if(i===Ic)return e.INT;if(i===mi)return e.UNSIGNED_INT;if(i===Zn)return e.FLOAT;if(i===kn)return e.HALF_FLOAT;if(i===Bu)return e.ALPHA;if(i===Gu)return e.RGB;if(i===Hn)return e.RGBA;if(i===Di)return e.DEPTH_COMPONENT;if(i===yi)return e.DEPTH_STENCIL;if(i===Hu)return e.RED;if(i===wc)return e.RED_INTEGER;if(i===Ni)return e.RG;if(i===Rc)return e.RG_INTEGER;if(i===Ac)return e.RGBA_INTEGER;if(i===wr||i===Cr||i===Pr||i===yr)if(o===wt)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===wr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===wr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ts||i===ns||i===is||i===as)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ts)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ns)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===is)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===as)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rs||i===os||i===ss||i===cs||i===ls||i===Yr||i===ds)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===rs||i===os)return o===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ss)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===cs)return a.COMPRESSED_R11_EAC;if(i===ls)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return a.COMPRESSED_RG11_EAC;if(i===ds)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===us||i===fs||i===ps||i===hs||i===ms||i===_s||i===gs||i===vs||i===Ss||i===xs||i===Es||i===Ms||i===Ts||i===bs)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===us)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ps)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ms)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_s)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ss)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Es)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ms)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ts)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===As||i===Rs||i===ws)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===As)return o===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ws)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cs||i===Ps||i===Kr||i===ys)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===Cs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ps)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ys)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Q_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class eg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Dc(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Wn({vertexShader:Q_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tg extends mu{constructor(n,t){super();const i=this;let r=null,a=1,o=null,v="local-floor",R=1,_=null,E=null,S=null,h=null,T=null,C=null;const L=typeof XRWebGLBinding<"u",p=new eg,l={},P=t.getContextAttributes();let y=null,g=null;const A=[],m=[],N=new nn;let f=null,b=null;const U=new da;U.viewport=new ln;const G=new da;G.viewport=new ln;const k=[U,G],q=new _u;let F=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getHandSpace()};function K(Y){const te=m.indexOf(Y.inputSource);if(te===-1)return;const Me=A[te];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,_||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",oe);for(let Y=0;Y<A.length;Y++){const te=m[Y];te!==null&&(m[Y]=null,A[Y].disconnect(te))}F=null,$=null,p.reset();for(const Y in l)delete l[Y];if(n.setRenderTarget(y),T=null,h=null,S=null,r=null,g=null,Be.stop(),i.isPresenting=!1,n.setPixelRatio(f),n.setSize(N.width,N.height,!1),b!==null){const Y=b.camera;Y.fov=b.fov,Y.zoom=b.zoom,Y.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){v=Y,i.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||o},this.setReferenceSpace=function(Y){_=Y},this.getBaseLayer=function(){return h!==null?h:T},this.getBinding=function(){return S===null&&L&&(S=new XRWebGLBinding(r,t)),S},this.getFrame=function(){return C},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=n.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",oe),P.xrCompatible!==!0&&await t.makeXRCompatible(),f=n.getPixelRatio(),n.getSize(N),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,We=null,fe=null;P.depth&&(fe=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=P.stencil?yi:Di,We=P.stencil?fa:mi);const Ae={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:a};S=this.getBinding(),h=S.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),n.setPixelRatio(1),n.setSize(h.textureWidth,h.textureHeight,!1),g=new En(h.textureWidth,h.textureHeight,{format:Hn,type:Nn,depthTexture:new za(h.textureWidth,h.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:P.stencil,colorSpace:n.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};T=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:T}),n.setPixelRatio(1),n.setSize(T.framebufferWidth,T.framebufferHeight,!1),g=new En(T.framebufferWidth,T.framebufferHeight,{format:Hn,type:Nn,colorSpace:n.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(R),_=null,o=await r.requestReferenceSpace(v),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(Y){for(let te=0;te<Y.removed.length;te++){const Me=Y.removed[te],We=m.indexOf(Me);We>=0&&(m[We]=null,A[We].disconnect(Me))}for(let te=0;te<Y.added.length;te++){const Me=Y.added[te];let We=m.indexOf(Me);if(We===-1){for(let Ae=0;Ae<A.length;Ae++)if(Ae>=m.length){m.push(Me),We=Ae;break}else if(m[Ae]===null){m[Ae]=Me,We=Ae;break}if(We===-1)break}const fe=A[We];fe&&fe.connect(Me)}}const ie=new Ie,se=new Ie;function ce(Y,te,Me){ie.setFromMatrixPosition(te.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);const We=ie.distanceTo(se),fe=te.projectionMatrix.elements,Ae=Me.projectionMatrix.elements,at=fe[14]/(fe[10]-1),ke=fe[14]/(fe[10]+1),Ze=(fe[9]+1)/fe[5],Ke=(fe[9]-1)/fe[5],je=(fe[8]-1)/fe[0],ut=(Ae[8]+1)/Ae[0],ct=at*je,Yt=at*ut,vt=We/(-je+ut),ht=vt*-je;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ht),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),fe[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const I=at+vt,Gt=ke+vt,ft=ct-ht,M=Yt+(We-ht),s=Ze*ke/Gt*I,B=Ke*ke/Gt*I;Y.projectionMatrix.makePerspective(ft,M,s,B,I,Gt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ye(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let te=Y.near,Me=Y.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(Me=p.depthFar)),q.near=G.near=U.near=te,q.far=G.far=U.far=Me,(F!==q.near||$!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),F=q.near,$=q.far),q.layers.mask=Y.layers.mask|6,U.layers.mask=q.layers.mask&-5,G.layers.mask=q.layers.mask&-3;const We=Y.parent,fe=q.cameras;Ye(q,We);for(let Ae=0;Ae<fe.length;Ae++)Ye(fe[Ae],We);fe.length===2?ce(q,U,G):q.projectionMatrix.copy(U.projectionMatrix),b===null&&Y.isPerspectiveCamera&&(b={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ve(Y,q,We)};function Ve(Y,te,Me){Me===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=gu*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&T===null))return R},this.setFoveation=function(Y){R=Y,h!==null&&(h.fixedFoveation=Y),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Y){return l[Y]};let st=null;function Re(Y,te){if(E=te.getViewerPose(_||o),C=te,E!==null){const Me=E.views;T!==null&&(n.setRenderTargetFramebuffer(g,T.framebuffer),n.setRenderTarget(g));let We=!1;Me.length!==q.cameras.length&&(q.cameras.length=0,We=!0);for(let ke=0;ke<Me.length;ke++){const Ze=Me[ke];let Ke=null;if(T!==null)Ke=T.getViewport(Ze);else{const ut=S.getViewSubImage(h,Ze);Ke=ut.viewport,ke===0&&(n.setRenderTargetTextures(g,ut.colorTexture,ut.depthStencilTexture),n.setRenderTarget(g))}let je=k[ke];je===void 0&&(je=new da,je.layers.enable(ke),je.viewport=new ln,k[ke]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ke===0&&(q.matrix.copy(je.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),We===!0&&q.cameras.push(je)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&L){S=i.getBinding();const ke=S.getDepthInformation(Me[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,r.renderState)}if(fe&&fe.includes("camera-access")&&L){n.state.unbindTexture(),S=i.getBinding();for(let ke=0;ke<Me.length;ke++){const Ze=Me[ke].camera;if(Ze){let Ke=l[Ze];Ke||(Ke=new Dc,l[Ze]=Ke);const je=S.getCameraImage(Ze);Ke.sourceTexture=je}}}}for(let Me=0;Me<A.length;Me++){const We=m[Me],fe=A[Me];We!==null&&fe!==void 0&&fe.update(We,te,_||o)}st&&st(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),C=null}const Be=new Kc;Be.setAnimationLoop(Re),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}}const ng=new ti,tl=new ot;tl.set(-1,0,0,0,1,0,0,0,1);function ig(e,n){function t(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function i(p,l){l.color.getRGB(p.fogColor.value,Lc(e)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function r(p,l,P,y,g){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?a(p,l):l.isMeshLambertMaterial?(a(p,l),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(a(p,l),S(p,l)):l.isMeshPhongMaterial?(a(p,l),E(p,l),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(a(p,l),h(p,l),l.isMeshPhysicalMaterial&&T(p,l,g)):l.isMeshMatcapMaterial?(a(p,l),C(p,l)):l.isMeshDepthMaterial?a(p,l):l.isMeshDistanceMaterial?(a(p,l),L(p,l)):l.isMeshNormalMaterial?a(p,l):l.isLineBasicMaterial?(o(p,l),l.isLineDashedMaterial&&v(p,l)):l.isPointsMaterial?R(p,l,P,y):l.isSpriteMaterial?_(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,t(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===hn&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,t(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===hn&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,t(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,t(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const P=n.get(l),y=P.envMap,g=P.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(ng.makeRotationFromEuler(g)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tl),p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,p.aoMapTransform))}function o(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform))}function v(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function R(p,l,P,y){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*P,p.scale.value=y*.5,l.map&&(p.map.value=l.map,t(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function _(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function E(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function S(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function h(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function T(p,l,P){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===hn&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.retroreflectivity>0&&(p.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,p.specularIntensityMapTransform))}function C(p,l){l.matcap&&(p.matcap.value=l.matcap)}function L(p,l){const P=n.get(l).light;p.referencePosition.value.setFromMatrixPosition(P.matrixWorld),p.nearDistance.value=P.shadow.camera.near,p.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ag(e,n,t,i){let r={},a={},o=[];const v=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function R(g,A){const m=A.program;i.uniformBlockBinding(g,m)}function _(g,A){let m=r[g.id];m===void 0&&(p(g),m=E(g),r[g.id]=m,g.addEventListener("dispose",P));const N=A.program;i.updateUBOMapping(g,N);const f=n.render.frame;a[g.id]!==f&&(h(g),a[g.id]=f)}function E(g){const A=S();g.__bindingPointIndex=A;const m=e.createBuffer(),N=g.__size,f=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,m),e.bufferData(e.UNIFORM_BUFFER,N,f),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,m),m}function S(){for(let g=0;g<v;g++)if(o.indexOf(g)===-1)return o.push(g),g;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const A=r[g.id],m=g.uniforms,N=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let f=0,b=m.length;f<b;f++){const U=m[f];if(Array.isArray(U))for(let G=0,k=U.length;G<k;G++)T(U[G],f,G,N);else T(U,f,0,N)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function T(g,A,m,N){if(L(g,A,m,N)===!0){const f=g.__offset,b=g.value;if(Array.isArray(b)){let U=0;for(let G=0;G<b.length;G++){const k=b[G],q=l(k);C(k,g.__data,U),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else C(b,g.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,f,g.__data)}}function C(g,A,m){typeof g=="number"||typeof g=="boolean"?A[0]=g:g.isMatrix3?(A[0]=g.elements[0],A[1]=g.elements[1],A[2]=g.elements[2],A[3]=0,A[4]=g.elements[3],A[5]=g.elements[4],A[6]=g.elements[5],A[7]=0,A[8]=g.elements[6],A[9]=g.elements[7],A[10]=g.elements[8],A[11]=0):ArrayBuffer.isView(g)?A.set(new g.constructor(g.buffer,g.byteOffset,A.length)):g.toArray(A,m)}function L(g,A,m,N){const f=g.value,b=A+"_"+m;if(N[b]===void 0)return typeof f=="number"||typeof f=="boolean"?N[b]=f:ArrayBuffer.isView(f)?N[b]=f.slice():N[b]=f.clone(),!0;{const U=N[b];if(typeof f=="number"||typeof f=="boolean"){if(U!==f)return N[b]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(U.equals(f)===!1)return U.copy(f),!0}}return!1}function p(g){const A=g.uniforms;let m=0;const N=16;for(let b=0,U=A.length;b<U;b++){const G=Array.isArray(A[b])?A[b]:[A[b]];for(let k=0,q=G.length;k<q;k++){const F=G[k],$=Array.isArray(F.value)?F.value:[F.value];for(let K=0,Q=$.length;K<Q;K++){const oe=$[K],ie=l(oe),se=m%N,ce=se%ie.boundary,Ye=se+ce;m+=ce,Ye!==0&&N-Ye<ie.storage&&(m+=N-Ye),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=m,m+=ie.storage}}}const f=m%N;return f>0&&(m+=N-f),g.__size=m,g.__cache={},this}function l(g){const A={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(A.boundary=4,A.storage=4):g.isVector2?(A.boundary=8,A.storage=8):g.isVector3||g.isColor?(A.boundary=16,A.storage=12):g.isVector4?(A.boundary=16,A.storage=16):g.isMatrix3?(A.boundary=48,A.storage=48):g.isMatrix4?(A.boundary=64,A.storage=64):g.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(A.boundary=16,A.storage=g.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",g),A}function P(g){const A=g.target;A.removeEventListener("dispose",P);const m=o.indexOf(A.__bindingPointIndex);o.splice(m,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function y(){for(const g in r)e.deleteBuffer(r[g]);o=[],r={},a={}}return{bind:R,update:_,dispose:y}}const rg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function og(){return yn===null&&(yn=new vu(rg,16,16,Ni,kn),yn.name="DFG_LUT",yn.minFilter=pn,yn.magFilter=pn,yn.wrapS=Xr,yn.wrapT=Xr,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class sg{constructor(n={}){const{canvas:t=Ud(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:v=!1,premultipliedAlpha:R=!0,preserveDrawingBuffer:_=!1,powerPreference:E="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:h=!1,outputBufferType:T=Nn}=n;this.isWebGLRenderer=!0;let C;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=i.getContextAttributes().alpha}else C=o;const L=T,p=new Set([Ac,Rc,wc]),l=new Set([Nn,mi,qa,fa,Cc,Pc]),P=new Uint32Array(4),y=new Int32Array(4),g=new Ie;let A=null,m=null;const N=[],f=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1,k=null,q=null,F=null,$=null;this._outputColorSpace=no;let K=0,Q=0,oe=null,ie=-1,se=null;const ce=new ln,Ye=new ln;let Ve=null;const st=new At(0);let Re=0,Be=t.width,Y=t.height,te=1,Me=null,We=null;const fe=new ln(0,0,Be,Y),Ae=new ln(0,0,Be,Y);let at=!1;const ke=new Tc;let Ze=!1,Ke=!1;const je=new ti,ut=new Ie,ct=new ln,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function ht(){return oe===null?te:1}let I=i;function Gt(d,w){return t.getContext(d,w)}let ft,M,s,B,X,j,de,_e,Z,ee,ge,Fe,ve,me,De,Ge,$e,D,he,J,pe,Ee,ae;try{const d={alpha:!0,depth:r,stencil:a,antialias:v,premultipliedAlpha:R,preserveDrawingBuffer:_,powerPreference:E,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fd}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),I===null){const w="webgl2";if(I=Gt(w,d),I===null)throw Gt(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(d){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),yt("WebGLRenderer: "+d.message),d}function Oe(){ft=new om(I),ft.init(),pe=new Z_(I,ft),M=new $h(I,ft,n,pe),s=new j_(I,ft),M.reversedDepthBuffer&&h&&s.buffers.depth.setReversed(!0),q=I.createFramebuffer(),F=I.createFramebuffer(),$=I.createFramebuffer(),B=new lm(I),X=new U_,j=new $_(I,ft,s,X,M,pe,B),de=new rm(U),_e=new uf(I),Ee=new Kh(I,_e),Z=new sm(I,_e,B,Ee),ee=new um(I,Z,_e,Ee,B),D=new dm(I,M,j),De=new Zh(X),ge=new I_(U,de,ft,M,Ee,De),Fe=new ig(U,X),ve=new O_,me=new W_(ft),$e=new Yh(U,de,s,ee,C,R),Ge=new K_(U,ee,M),ae=new ag(I,B,M,s),he=new jh(I,ft,B),J=new cm(I,ft,B),B.programs=ge.programs,U.capabilities=M,U.extensions=ft,U.properties=X,U.renderLists=ve,U.shadowMap=Ge,U.state=s,U.info=B}L!==Nn&&(b=new pm(L,t.width,t.height,v,r,a));const Le=new tg(U,I);this.xr=Le,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const d=ft.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=ft.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(d){d!==void 0&&(te=d,this.setSize(Be,Y,!1))},this.getSize=function(d){return d.set(Be,Y)},this.setSize=function(d,w,z=!0){if(Le.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=d,Y=w,t.width=Math.floor(d*te),t.height=Math.floor(w*te),z===!0&&(t.style.width=d+"px",t.style.height=w+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,d,w)},this.getDrawingBufferSize=function(d){return d.set(Be*te,Y*te).floor()},this.setDrawingBufferSize=function(d,w,z){Be=d,Y=w,te=z,t.width=Math.floor(d*z),t.height=Math.floor(w*z),this.setViewport(0,0,d,w)},this.setEffects=function(d){if(L===Nn){yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(d){for(let w=0;w<d.length;w++)if(d[w].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(d||[])},this.getCurrentViewport=function(d){return d.copy(ce)},this.getViewport=function(d){return d.copy(fe)},this.setViewport=function(d,w,z,H){d.isVector4?fe.set(d.x,d.y,d.z,d.w):fe.set(d,w,z,H),s.viewport(ce.copy(fe).multiplyScalar(te).round())},this.getScissor=function(d){return d.copy(Ae)},this.setScissor=function(d,w,z,H){d.isVector4?Ae.set(d.x,d.y,d.z,d.w):Ae.set(d,w,z,H),s.scissor(Ye.copy(Ae).multiplyScalar(te).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(d){s.setScissorTest(at=d)},this.setOpaqueSort=function(d){Me=d},this.setTransparentSort=function(d){We=d},this.getClearColor=function(d){return d.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(d=!0,w=!0,z=!0){let H=0;if(d){let V=!1;if(oe!==null){const Se=oe.texture.format;V=p.has(Se)}if(V){const Se=oe.texture.type,Pe=l.has(Se),xe=$e.getClearColor(),we=$e.getClearAlpha(),Ue=xe.r,ze=xe.g,Qe=xe.b;Pe?(P[0]=Ue,P[1]=ze,P[2]=Qe,P[3]=we,I.clearBufferuiv(I.COLOR,0,P)):(y[0]=Ue,y[1]=ze,y[2]=Qe,y[3]=we,I.clearBufferiv(I.COLOR,0,y))}else H|=I.COLOR_BUFFER_BIT}w&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(d){d.setRenderer(this),k=d},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),$e.dispose(),ve.dispose(),me.dispose(),X.dispose(),de.dispose(),ee.dispose(),Ee.dispose(),ae.dispose(),ge.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",In),Le.removeEventListener("sessionend",un),Zt.stop()};function St(d){d.preventDefault(),Yo("WebGLRenderer: Context Lost."),G=!0}function rt(){Yo("WebGLRenderer: Context Restored."),G=!1;const d=B.autoReset,w=Ge.enabled,z=Ge.autoUpdate,H=Ge.needsUpdate,V=Ge.type;Oe(),B.autoReset=d,Ge.enabled=w,Ge.autoUpdate=z,Ge.needsUpdate=H,Ge.type=V}function Kt(d){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function dn(d){const w=d.target;w.removeEventListener("dispose",dn),ha(w)}function ha(d){_i(d),X.remove(d)}function _i(d){const w=X.get(d).programs;w!==void 0&&(w.forEach(function(z){ge.releaseProgram(z)}),d.isShaderMaterial&&ge.releaseShaderCache(d))}this.renderBufferDirect=function(d,w,z,H,V,Se){w===null&&(w=Yt);const Pe=V.isMesh&&V.matrixWorld.determinantAffine()<0,xe=gn(d,w,z,H,V);s.setMaterial(H,Pe);let we=z.index,Ue=1;if(H.wireframe===!0){if(we=Z.getWireframeAttribute(z),we===void 0)return;Ue=2}const ze=z.drawRange,Qe=z.attributes.position;let ye=ze.start*Ue,it=(ze.start+ze.count)*Ue;Se!==null&&(ye=Math.max(ye,Se.start*Ue),it=Math.min(it,(Se.start+Se.count)*Ue)),we!==null?(ye=Math.max(ye,0),it=Math.min(it,we.count)):Qe!=null&&(ye=Math.max(ye,0),it=Math.min(it,Qe.count));const Lt=it-ye;if(Lt<0||Lt===1/0)return;Ee.setup(V,H,xe,z,we);let mt,pt=he;if(we!==null&&(mt=_e.get(we),pt=J,pt.setIndex(mt)),V.isMesh)H.wireframe===!0?(s.setLineWidth(H.wireframeLinewidth*ht()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(V.isLine){let Bt=H.linewidth;Bt===void 0&&(Bt=1),s.setLineWidth(Bt*ht()),V.isLineSegments?pt.setMode(I.LINES):V.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else V.isPoints?pt.setMode(I.POINTS):V.isSprite&&pt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,Ce=V._multiDrawCounts,Ht=V._multiDrawCount,nt=we?_e.get(we).bytesPerElement:1,Xt=X.get(H).currentProgram.getUniforms();for(let Ut=0;Ut<Ht;Ut++)Xt.setValue(I,"_gl_DrawID",Ut),pt.render(Bt[Ut]/nt,Ce[Ut])}else if(V.isInstancedMesh)pt.renderInstances(ye,Lt,V.count);else if(z.isInstancedBufferGeometry){const Bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ce=Math.min(z.instanceCount,Bt);pt.renderInstances(ye,Lt,Ce)}else pt.render(ye,Lt)};function Mt(d,w,z,H){k!==null&&d.isNodeMaterial&&k.setObject(H,d),Ze===!0&&De.setState(d,z,!1),d.transparent===!0&&d.side===xn&&d.forceSinglePass===!1?(d.side=hn,d.needsUpdate=!0,bn(d,w,H),d.side=ua,d.needsUpdate=!0,bn(d,w,H),d.side=xn):bn(d,w,H)}this.compile=function(d,w,z=null){z===null&&(z=d),k!==null&&k.renderStart(d,w,z),m=me.get(z),m.init(w),f.push(m),z.traverseVisible(function(V){V.isLight&&V.layers.test(w.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),d!==z&&d.traverseVisible(function(V){V.isLight&&V.layers.test(w.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(),k!==null&&k.updateLights(m.state.lightsArray),Ke=this.localClippingEnabled,Ze=De.init(this.clippingPlanes,Ke),Ze===!0&&De.setGlobalState(this.clippingPlanes,w),k!==null&&Ge.render(m.state.shadowsArray,z,w);const H=new Set;return d.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const xe=Se[Pe];Mt(xe,z,w,V),H.add(xe)}else Mt(Se,z,w,V),H.add(Se)}),m=f.pop(),k!==null&&k.renderEnd(),H},this.compileAsync=function(d,w,z=null){const H=this.compile(d,w,z);return new Promise(V=>{function Se(){if(H.forEach(function(Pe){const we=X.get(Pe).currentProgram;(we===void 0||we.isReady())&&H.delete(Pe)}),H.size===0){V(d);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let mn=null;function ii(d){mn&&mn(d)}function In(){Zt.stop()}function un(){Zt.start()}const Zt=new Kc;Zt.setAnimationLoop(ii),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(d){mn=d,Le.setAnimationLoop(d),d===null?Zt.stop():Zt.start()},Le.addEventListener("sessionstart",In),Le.addEventListener("sessionend",un),this.render=function(d,w){if(w!==void 0&&w.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;k!==null&&k.renderStart(d,w);const z=Le.enabled===!0&&Le.isPresenting===!0,H=b!==null&&(oe===null||z)&&b.begin(U,oe);if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(w),w=Le.getCamera()),d.isScene===!0&&d.onBeforeRender(U,d,w,oe),m=me.get(d,f.length),m.init(w),m.state.textureUnits=j.getTextureUnits(),f.push(m),je.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),ke.setFromProjectionMatrix(je,Ko,w.reversedDepth),Ke=this.localClippingEnabled,Ze=De.init(this.clippingPlanes,Ke),A=ve.get(d,N.length),A.init(),N.push(A),Le.enabled===!0&&Le.isPresenting===!0){const Pe=U.xr.getDepthSensingMesh();Pe!==null&&_n(Pe,w,-1/0,U.sortObjects)}_n(d,w,0,U.sortObjects),A.finish(),k!==null&&k.updateLights(m.state.lightsArray),U.sortObjects===!0&&A.sort(Me,We),vt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,vt&&$e.addToRenderList(A,d),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&De.beginShadows();const V=m.state.shadowsArray;if(Ge.render(V,d,w),Ze===!0&&De.endShadows(),(H&&b.hasRenderPass())===!1){const Pe=A.opaque,xe=A.transmissive;if(m.setupLights(),w.isArrayCamera){const we=w.cameras;if(xe.length>0)for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Qe=we[Ue];Xn(Pe,xe,d,Qe)}vt&&$e.render(d);for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Qe=we[Ue];zn(A,d,Qe,Qe.viewport)}}else xe.length>0&&Xn(Pe,xe,d,w),vt&&$e.render(d),zn(A,d,w)}oe!==null&&Q===0&&(j.updateMultisampleRenderTarget(oe),j.updateRenderTargetMipmap(oe)),H&&b.end(U),d.isScene===!0&&d.onAfterRender(U,d,w),Ee.resetDefaultState(),ie=-1,se=null,f.pop(),f.length>0?(m=f[f.length-1],j.setTextureUnits(m.state.textureUnits),Ze===!0&&De.setGlobalState(U.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?A=N[N.length-1]:A=null,k!==null&&k.renderEnd()};function _n(d,w,z,H){if(d.visible===!1)return;if(d.layers.test(w.layers)){if(d.isGroup)z=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(w);else if(d.isLightProbeGrid)m.pushLightProbeGrid(d);else if(d.isLight)m.pushLight(d),d.castShadow&&m.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||d.intersectsFrustum(ke)){H&&ct.setFromMatrixPosition(d.matrixWorld).applyMatrix4(je);const Pe=ee.update(d),xe=d.material;xe.visible&&A.push(d,Pe,xe,z,ct.z,null,w)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||d.intersectsFrustum(ke))){const Pe=ee.update(d),xe=d.material;if(H&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),ct.copy(d.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ct.copy(Pe.boundingSphere.center)),ct.applyMatrix4(d.matrixWorld).applyMatrix4(je)),Array.isArray(xe)){const we=Pe.groups;for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Qe=we[Ue],ye=xe[Qe.materialIndex];ye&&ye.visible&&A.push(d,Pe,ye,z,ct.z,Qe,w)}}else xe.visible&&A.push(d,Pe,xe,z,ct.z,null,w)}}const Se=d.children;for(let Pe=0,xe=Se.length;Pe<xe;Pe++)_n(Se[Pe],w,z,H)}function zn(d,w,z,H){const{opaque:V,transmissive:Se,transparent:Pe}=d;m.setupLightsView(z),Ze===!0&&De.setGlobalState(U.clippingPlanes,z),H&&s.viewport(ce.copy(H)),V.length>0&&Tn(V,w,z),Se.length>0&&Tn(Se,w,z),Pe.length>0&&Tn(Pe,w,z),s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),s.setPolygonOffset(!1)}function Xn(d,w,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget[H.id]===void 0){const ye=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");m.state.transmissionRenderTarget[H.id]=new En(1,1,{generateMipmaps:!0,type:ye?kn:Nn,minFilter:Pi,samples:Math.max(4,M.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Se=m.state.transmissionRenderTarget[H.id],Pe=H.viewport||ce;Se.setSize(Pe.z*U.transmissionResolutionScale,Pe.w*U.transmissionResolutionScale);const xe=U.getRenderTarget(),we=U.getActiveCubeFace(),Ue=U.getActiveMipmapLevel();U.setRenderTarget(Se),U.getClearColor(st),Re=U.getClearAlpha(),Re<1&&U.setClearColor(16777215,.5),U.clear(),vt&&$e.render(z);const ze=U.toneMapping;U.toneMapping=Dn;const Qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),Ze===!0&&De.setGlobalState(U.clippingPlanes,H),Tn(d,z,H),j.updateMultisampleRenderTarget(Se),j.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let it=0,Lt=w.length;it<Lt;it++){const mt=w[it],{object:pt,geometry:Bt,material:Ce,group:Ht}=mt;if(Ce.side===xn&&pt.layers.test(H.layers)){const nt=Ce.side;Ce.side=hn,Ce.needsUpdate=!0,qn(pt,z,H,Bt,Ce,Ht),Ce.side=nt,Ce.needsUpdate=!0,ye=!0}}ye===!0&&(j.updateMultisampleRenderTarget(Se),j.updateRenderTargetMipmap(Se))}U.setRenderTarget(xe,we,Ue),U.setClearColor(st,Re),Qe!==void 0&&(H.viewport=Qe),U.toneMapping=ze}function Tn(d,w,z){const H=w.isScene===!0?w.overrideMaterial:null;for(let V=0,Se=d.length;V<Se;V++){const Pe=d[V],{object:xe,geometry:we,group:Ue}=Pe;let ze=Pe.material;ze.allowOverride===!0&&H!==null&&(ze=H),xe.layers.test(z.layers)&&qn(xe,w,z,we,ze,Ue)}}function qn(d,w,z,H,V,Se){k!==null&&V.isNodeMaterial&&k.setObject(d,V),d.onBeforeRender(U,w,z,H,V,Se),d.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),V.onBeforeRender(U,w,z,H,d,Se),V.transparent===!0&&V.side===xn&&V.forceSinglePass===!1?(V.side=hn,V.needsUpdate=!0,U.renderBufferDirect(z,w,H,V,d,Se),V.side=ua,V.needsUpdate=!0,U.renderBufferDirect(z,w,H,V,d,Se),V.side=xn):U.renderBufferDirect(z,w,H,V,d,Se),d.onAfterRender(U,w,z,H,V,Se)}function bn(d,w,z){w.isScene!==!0&&(w=Yt);const H=X.get(d),V=m.state.lights,Se=m.state.shadowsArray,Pe=V.state.version,xe=ge.getParameters(d,V.state,Se,w,z,m.state.lightProbeGridArray),we=ge.getProgramCacheKey(xe);let Ue=H.programs;H.environment=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?w.environment:null,H.fog=w.fog;const ze=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap;H.envMap=de.get(d.envMap||H.environment,ze),H.envMapRotation=H.environment!==null&&d.envMap===null?w.environmentRotation:d.envMapRotation,Ue===void 0&&(d.addEventListener("dispose",dn),Ue=new Map,H.programs=Ue);let Qe=Ue.get(we);if(Qe!==void 0){if(H.currentProgram===Qe&&H.lightsStateVersion===Pe)return Un(d,xe),Qe}else xe.uniforms=ge.getUniforms(d),k!==null&&d.isNodeMaterial&&k.build(d,z,xe),d.onBeforeCompile(xe,U),Qe=ge.acquireProgram(xe,we),Ue.set(we,Qe),H.uniforms=xe.uniforms;const ye=H.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(ye.clippingPlanes=De.uniform),Un(d,xe),H.needsLights=Yn(d),H.lightsStateVersion=Pe,H.needsLights&&(ye.ambientLightColor.value=V.state.ambient,ye.lightProbe.value=V.state.probe,ye.sunLights.value=V.state.sun,ye.sunLightShadows.value=V.state.sunShadow,ye.directionalLights.value=V.state.directional,ye.directionalLightShadows.value=V.state.directionalShadow,ye.spotLights.value=V.state.spot,ye.spotLightShadows.value=V.state.spotShadow,ye.rectAreaLights.value=V.state.rectArea,ye.ltc_1.value=V.state.rectAreaLTC1,ye.ltc_2.value=V.state.rectAreaLTC2,ye.pointLights.value=V.state.point,ye.pointLightShadows.value=V.state.pointShadow,ye.hemisphereLights.value=V.state.hemi,ye.sunShadowMatrix.value=V.state.sunShadowMatrix,ye.sunShadowCascade.value=V.state.sunShadowCascade,ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ye.spotLightMatrix.value=V.state.spotLightMatrix,ye.spotLightMap.value=V.state.spotLightMap,ye.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=m.state.lightProbeGridArray.length>0,H.currentProgram=Qe,H.uniformsList=null,Qe}function Fi(d){if(d.uniformsList===null){const w=d.currentProgram.getUniforms();d.uniformsList=ka.seqWithValue(w.seq,d.uniforms)}return d.uniformsList}function Un(d,w){const z=X.get(d);z.outputColorSpace=w.outputColorSpace,z.batching=w.batching,z.batchingColor=w.batchingColor,z.instancing=w.instancing,z.instancingColor=w.instancingColor,z.instancingMorph=w.instancingMorph,z.skinning=w.skinning,z.morphTargets=w.morphTargets,z.morphNormals=w.morphNormals,z.morphColors=w.morphColors,z.morphTargetsCount=w.morphTargetsCount,z.numClippingPlanes=w.numClippingPlanes,z.numIntersection=w.numClipIntersection,z.vertexAlphas=w.vertexAlphas,z.vertexTangents=w.vertexTangents,z.toneMapping=w.toneMapping}function ma(d,w){if(d.length===0)return null;if(d.length===1)return d[0].texture!==null?d[0]:null;g.setFromMatrixPosition(w.matrixWorld);for(let z=0,H=d.length;z<H;z++){const V=d[z];if(V.texture!==null&&V.boundingBox.containsPoint(g))return V}return null}function gn(d,w,z,H,V){w.isScene!==!0&&(w=Yt),j.resetTextureUnits();const Se=w.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?w.environment:null,xe=oe===null?U.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Dt.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ue=de.get(H.envMap||Pe,we),ze=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Qe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!z.morphAttributes.position,it=!!z.morphAttributes.normal,Lt=!!z.morphAttributes.color;let mt=Dn;H.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(mt=U.toneMapping);const pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Bt=pt!==void 0?pt.length:0,Ce=X.get(H),Ht=m.state.lights;if(Ze===!0&&(Ke===!0||d!==se)){const He=d===se&&H.id===ie;De.setState(H,d,He)}let nt=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ht.state.version||Ce.outputColorSpace!==xe||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==Ue||H.fog===!0&&Ce.fog!==Se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==De.numPlanes||Ce.numIntersection!==De.numIntersection)||Ce.vertexAlphas!==ze||Ce.vertexTangents!==Qe||Ce.morphTargets!==ye||Ce.morphNormals!==it||Ce.morphColors!==Lt||Ce.toneMapping!==mt||Ce.morphTargetsCount!==Bt||!!Ce.lightProbeGrid!=m.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ce.__version=H.version);let Xt=Ce.currentProgram;nt===!0&&(Xt=bn(H,w,V),k&&H.isNodeMaterial&&k.onUpdateProgram(H,Xt,Ce));let Ut=!1,an=!1,An=!1;const Xe=Xt.getUniforms(),Tt=Ce.uniforms;if(s.useProgram(Xt.program)&&(Ut=!0,an=!0,An=!0),H.id!==ie&&(ie=H.id,an=!0),Ce.needsLights){const He=ma(m.state.lightProbeGridArray,V);Ce.lightProbeGrid!==He&&(Ce.lightProbeGrid=He,an=!0)}if(Ut||se!==d){s.buffers.depth.getReversed()&&d.reversedDepth!==!0&&(d._reversedDepth=!0,d.updateProjectionMatrix()),Xe.setValue(I,"projectionMatrix",d.projectionMatrix),Xe.setValue(I,"viewMatrix",d.matrixWorldInverse);const en=Xe.map.cameraPosition;en!==void 0&&en.setValue(I,ut.setFromMatrixPosition(d.matrixWorld)),M.logarithmicDepthBuffer&&Xe.setValue(I,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Xe.setValue(I,"isOrthographic",d.isOrthographicCamera===!0),se!==d&&(se=d,an=!0,An=!0)}if(Ce.needsLights&&(Ht.state.sunShadowMap.length>0&&Xe.setValue(I,"sunShadowMap",Ht.state.sunShadowMap,j),Ht.state.directionalShadowMap.length>0&&Xe.setValue(I,"directionalShadowMap",Ht.state.directionalShadowMap,j),Ht.state.spotShadowMap.length>0&&Xe.setValue(I,"spotShadowMap",Ht.state.spotShadowMap,j),Ht.state.pointShadowMap.length>0&&Xe.setValue(I,"pointShadowMap",Ht.state.pointShadowMap,j)),V.isSkinnedMesh){Xe.setOptional(I,V,"bindMatrix"),Xe.setOptional(I,V,"bindMatrixInverse");const He=V.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Xe.setValue(I,"boneTexture",He.boneTexture,j))}V.isBatchedMesh&&(Xe.setOptional(I,V,"batchingTexture"),Xe.setValue(I,"batchingTexture",V._matricesTexture,j),Xe.setOptional(I,V,"batchingIdTexture"),Xe.setValue(I,"batchingIdTexture",V._indirectTexture,j),Xe.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Xe.setValue(I,"batchingColorTexture",V._colorsTexture,j));const Je=z.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&D.update(V,z,Xt),(an||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,Xe.setValue(I,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&w.environment!==null&&(Tt.envMapIntensity.value=w.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=og()),an){if(Xe.setValue(I,"toneMappingExposure",U.toneMappingExposure),Ce.needsLights&&_a(Tt,An),Se&&H.fog===!0&&Fe.refreshFogUniforms(Tt,Se),Fe.refreshMaterialUniforms(Tt,H,te,Y,m.state.transmissionRenderTarget[d.id]),Ce.needsLights&&Ce.lightProbeGrid){const He=Ce.lightProbeGrid;Tt.probesSH.value=He.texture,Tt.probesMin.value.copy(He.boundingBox.min),Tt.probesMax.value.copy(He.boundingBox.max),Tt.probesResolution.value.copy(He.resolution)}ka.upload(I,Fi(Ce),Tt,j)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ka.upload(I,Fi(Ce),Tt,j),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Xe.setValue(I,"center",V.center),Xe.setValue(I,"modelViewMatrix",V.modelViewMatrix),Xe.setValue(I,"normalMatrix",V.normalMatrix),Xe.setValue(I,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const He=H.uniformsGroups;for(let en=0,qt=He.length;en<qt;en++){const jt=He[en];ae.update(jt,Xt),ae.bind(jt,Xt)}}return Xt}function _a(d,w){d.ambientLightColor.needsUpdate=w,d.lightProbe.needsUpdate=w,d.sunLights.needsUpdate=w,d.sunLightShadows.needsUpdate=w,d.directionalLights.needsUpdate=w,d.directionalLightShadows.needsUpdate=w,d.pointLights.needsUpdate=w,d.pointLightShadows.needsUpdate=w,d.spotLights.needsUpdate=w,d.spotLightShadows.needsUpdate=w,d.rectAreaLights.needsUpdate=w,d.hemisphereLights.needsUpdate=w}function Yn(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(d,w,z){const H=X.get(d);H.__autoAllocateDepthBuffer=d.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(d.texture).__webglTexture=w,X.get(d.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(d,w){const z=X.get(d);z.__webglFramebuffer=w,z.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(d,w=0,z=0){oe=d,K=w,Q=z;let H=null,V=!1,Se=!1;if(d){const xe=X.get(d);if(xe.__useDefaultFramebuffer!==void 0){s.bindFramebuffer(I.FRAMEBUFFER,xe.__webglFramebuffer),ce.copy(d.viewport),Ye.copy(d.scissor),Ve=d.scissorTest,s.viewport(ce),s.scissor(Ye),s.setScissorTest(Ve),ie=-1;return}else if(xe.__webglFramebuffer===void 0)j.setupRenderTarget(d);else if(xe.__hasExternalTextures)j.rebindTextures(d,X.get(d.texture).__webglTexture,X.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){const ze=d.depthTexture;if(xe.__boundDepthTexture!==ze){if(ze!==null&&X.has(ze)&&(d.width!==ze.image.width||d.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(d)}}const we=d.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const Ue=X.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(Ue[w])?H=Ue[w][z]:H=Ue[w],V=!0):d.samples>0&&j.useMultisampledRTT(d)===!1?H=X.get(d).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[z]:H=Ue,ce.copy(d.viewport),Ye.copy(d.scissor),Ve=d.scissorTest}else ce.copy(fe).multiplyScalar(te).floor(),Ye.copy(Ae).multiplyScalar(te).floor(),Ve=at;if(z!==0&&(H=q),s.bindFramebuffer(I.FRAMEBUFFER,H)&&s.drawBuffers(d,H),s.viewport(ce),s.scissor(Ye),s.setScissorTest(Ve),V){const xe=X.get(d.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+w,xe.__webglTexture,z)}else if(Se){const xe=w;for(let we=0;we<d.textures.length;we++){const Ue=X.get(d.textures[we]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+we,Ue.__webglTexture,z,xe)}}else if(d!==null&&z!==0){const xe=X.get(d.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xe.__webglTexture,z)}ie=-1};function Fn(d){const w=X.get(d);return(w.__readFormat!==d.format||w.__readType!==d.type)&&(w.__readFormat=d.format,w.__readType=d.type,w.__formatReadable=M.textureFormatReadable(d.format),w.__typeReadable=M.textureTypeReadable(d.type)),w}this.readRenderTargetPixels=function(d,w,z,H,V,Se,Pe,xe=0){if(!(d&&d.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=X.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe]),we){s.bindFramebuffer(I.FRAMEBUFFER,we);try{const Ue=d.textures[xe],ze=Ue.format,Qe=Ue.type;d.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe);const ye=Fn(Ue);if(ye.__formatReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=d.width-H&&z>=0&&z<=d.height-V&&I.readPixels(w,z,H,V,pe.convert(ze),pe.convert(Qe),Se)}finally{const Ue=oe!==null?X.get(oe).__webglFramebuffer:null;s.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(d,w,z,H,V,Se,Pe,xe=0){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=X.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe]),we)if(w>=0&&w<=d.width-H&&z>=0&&z<=d.height-V){s.bindFramebuffer(I.FRAMEBUFFER,we);const Ue=d.textures[xe],ze=Ue.format,Qe=Ue.type;d.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+xe);const ye=Fn(Ue);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.bufferData(I.PIXEL_PACK_BUFFER,Se.byteLength,I.STREAM_READ),I.readPixels(w,z,H,V,pe.convert(ze),pe.convert(Qe),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Lt=oe!==null?X.get(oe).__webglFramebuffer:null;s.bindFramebuffer(I.FRAMEBUFFER,Lt);const mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Od(I,mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Se),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(it),I.deleteSync(mt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(d,w=null,z=0){const H=Math.pow(2,-z),V=Math.floor(d.image.width*H),Se=Math.floor(d.image.height*H),Pe=w!==null?w.x:0,xe=w!==null?w.y:0;j.setTexture2D(d,0),I.copyTexSubImage2D(I.TEXTURE_2D,z,0,0,Pe,xe,V,Se),s.unbindTexture()},this.copyTextureToTexture=function(d,w,z=null,H=null,V=0,Se=0){let Pe,xe,we,Ue,ze,Qe,ye,it,Lt;const mt=d.isCompressedTexture?d.mipmaps[Se]:d.image;if(z!==null)Pe=z.max.x-z.min.x,xe=z.max.y-z.min.y,we=z.isBox3?z.max.z-z.min.z:1,Ue=z.min.x,ze=z.min.y,Qe=z.isBox3?z.min.z:0;else{const Tt=Math.pow(2,-V);Pe=Math.floor(mt.width*Tt),xe=Math.floor(mt.height*Tt),d.isDataArrayTexture?we=mt.depth:d.isData3DTexture?we=Math.floor(mt.depth*Tt):we=1,Ue=0,ze=0,Qe=0}H!==null?(ye=H.x,it=H.y,Lt=H.z):(ye=0,it=0,Lt=0);const pt=pe.convert(w.format),Bt=pe.convert(w.type);let Ce;w.isData3DTexture?(j.setTexture3D(w,0),Ce=I.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(j.setTexture2DArray(w,0),Ce=I.TEXTURE_2D_ARRAY):(j.setTexture2D(w,0),Ce=I.TEXTURE_2D),s.activeTexture(I.TEXTURE0),s.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(I.UNPACK_ALIGNMENT,w.unpackAlignment);const Ht=s.getParameter(I.UNPACK_ROW_LENGTH),nt=s.getParameter(I.UNPACK_IMAGE_HEIGHT),Xt=s.getParameter(I.UNPACK_SKIP_PIXELS),Ut=s.getParameter(I.UNPACK_SKIP_ROWS),an=s.getParameter(I.UNPACK_SKIP_IMAGES);s.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),s.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),s.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(I.UNPACK_SKIP_ROWS,ze),s.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe);const An=d.isDataArrayTexture||d.isData3DTexture,Xe=w.isDataArrayTexture||w.isData3DTexture;if(d.isDepthTexture){const Tt=X.get(d),Je=X.get(w),He=X.get(Tt.__renderTarget),en=X.get(Je.__renderTarget);s.bindFramebuffer(I.READ_FRAMEBUFFER,He.__webglFramebuffer),s.bindFramebuffer(I.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let qt=0;qt<we;qt++)An&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(d).__webglTexture,V,Qe+qt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(w).__webglTexture,Se,Lt+qt)),I.blitFramebuffer(Ue,ze,Pe,xe,ye,it,Pe,xe,I.DEPTH_BUFFER_BIT,I.NEAREST);s.bindFramebuffer(I.READ_FRAMEBUFFER,null),s.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||d.isRenderTargetTexture||X.has(d)){const Tt=X.get(d),Je=X.get(w);s.bindFramebuffer(I.READ_FRAMEBUFFER,F),s.bindFramebuffer(I.DRAW_FRAMEBUFFER,$);for(let He=0;He<we;He++)An?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,V,Qe+He):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,V),Xe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Je.__webglTexture,Se,Lt+He):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Je.__webglTexture,Se),V!==0?I.blitFramebuffer(Ue,ze,Pe,xe,ye,it,Pe,xe,I.COLOR_BUFFER_BIT,I.NEAREST):Xe?I.copyTexSubImage3D(Ce,Se,ye,it,Lt+He,Ue,ze,Pe,xe):I.copyTexSubImage2D(Ce,Se,ye,it,Ue,ze,Pe,xe);s.bindFramebuffer(I.READ_FRAMEBUFFER,null),s.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Xe?d.isDataTexture||d.isData3DTexture?I.texSubImage3D(Ce,Se,ye,it,Lt,Pe,xe,we,pt,Bt,mt.data):w.isCompressedArrayTexture?I.compressedTexSubImage3D(Ce,Se,ye,it,Lt,Pe,xe,we,pt,mt.data):I.texSubImage3D(Ce,Se,ye,it,Lt,Pe,xe,we,pt,Bt,mt):d.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Se,ye,it,Pe,xe,pt,Bt,mt.data):d.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Se,ye,it,mt.width,mt.height,pt,mt.data):I.texSubImage2D(I.TEXTURE_2D,Se,ye,it,Pe,xe,pt,Bt,mt);s.pixelStorei(I.UNPACK_ROW_LENGTH,Ht),s.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),s.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(I.UNPACK_SKIP_ROWS,Ut),s.pixelStorei(I.UNPACK_SKIP_IMAGES,an),Se===0&&w.generateMipmaps&&I.generateMipmap(Ce),s.unbindTexture()},this.initRenderTarget=function(d){X.get(d).__webglFramebuffer===void 0&&j.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?j.setTextureCube(d,0):d.isData3DTexture?j.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?j.setTexture2DArray(d,0):j.setTexture2D(d,0),s.unbindTexture()},this.resetState=function(){K=0,Q=0,oe=null,s.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ko}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(n),t.unpackColorSpace=Dt._getUnpackColorSpace()}}class cg extends Ju{constructor(n){super(n)}load(n,t,i,r){const a=this,o=new ef(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(n,function(v){try{t(a.parse(v))}catch(R){r?r(R):console.error(R),a.manager.itemError(n)}},i,r)}parse(n){function t(_){const E=new DataView(_),S=32/8*3+32/8*3*3+16/8,h=E.getUint32(80,!0);if(80+32/8+h*S===E.byteLength)return!0;const C=[115,111,108,105,100];for(let L=0;L<5;L++)if(i(C,E,L))return!1;return!0}function i(_,E,S){for(let h=0,T=_.length;h<T;h++)if(_[h]!==E.getUint8(S+h))return!1;return!0}function r(_){const E=new DataView(_),S=E.getUint32(80,!0);let h,T,C,L=!1,p,l,P,y,g;for(let G=0;G<70;G++)E.getUint32(G,!1)==1129270351&&E.getUint8(G+4)==82&&E.getUint8(G+5)==61&&(L=!0,p=new Float32Array(S*3*3),l=E.getUint8(G+6)/255,P=E.getUint8(G+7)/255,y=E.getUint8(G+8)/255,g=E.getUint8(G+9)/255);const A=84,m=50,N=new hi,f=new Float32Array(S*3*3),b=new Float32Array(S*3*3),U=new At;for(let G=0;G<S;G++){const k=A+G*m,q=E.getFloat32(k,!0),F=E.getFloat32(k+4,!0),$=E.getFloat32(k+8,!0);if(L){const K=E.getUint16(k+48,!0);(K&32768)===0?(h=(K&31)/31,T=(K>>5&31)/31,C=(K>>10&31)/31):(h=l,T=P,C=y)}for(let K=1;K<=3;K++){const Q=k+K*12,oe=G*3*3+(K-1)*3;f[oe]=E.getFloat32(Q,!0),f[oe+1]=E.getFloat32(Q+4,!0),f[oe+2]=E.getFloat32(Q+8,!0),b[oe]=q,b[oe+1]=F,b[oe+2]=$,L&&(U.setRGB(h,T,C,no),p[oe]=U.r,p[oe+1]=U.g,p[oe+2]=U.b)}}return N.setAttribute("position",new Jn(f,3)),N.setAttribute("normal",new Jn(b,3)),L&&(N.setAttribute("color",new Jn(p,3)),N.hasColors=!0,N.alpha=g),N}function a(_){const E=new hi,S=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,T=/solid\s(.+)/;let C=0;const L=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+L+L+L,"g"),l=new RegExp("normal"+L+L+L,"g"),P=[],y=[],g=[],A=new Ie;let m,N=0,f=0,b=0;for(;(m=S.exec(_))!==null;){f=b;const U=m[0],G=(m=T.exec(U))!==null?m[1]:"";for(g.push(G);(m=h.exec(U))!==null;){let F=0,$=0;const K=m[0];for(;(m=l.exec(K))!==null;)A.x=parseFloat(m[1]),A.y=parseFloat(m[2]),A.z=parseFloat(m[3]),$++;for(;(m=p.exec(K))!==null;)P.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),y.push(A.x,A.y,A.z),F++,b++;$!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+C),F!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+C),C++}const k=f,q=b-f;E.userData.groupNames=g,E.addGroup(k,q,N),N++}return E.setAttribute("position",new Xa(P,3)),E.setAttribute("normal",new Xa(y,3)),E}function o(_){return typeof _!="string"?new TextDecoder().decode(_):_}function v(_){if(typeof _=="string"){const E=new Uint8Array(_.length);for(let S=0;S<_.length;S++)E[S]=_.charCodeAt(S)&255;return E.buffer||E}else return _}const R=v(n);return t(R)?r(R):a(o(n))}}const nl=3,lg="face-skin-v1",Ya=1e-6,dg=Object.freeze([10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109]),ug=Object.freeze([10,33,263,1,152,234,454,172,397]),nc=Object.freeze({diamond:"diamante",heart:"coracao",oblong:"retangular",oval:"oval",round:"redondo",square:"quadrado",triangle:"triangular"});function Qn(e,n,t){return Math.max(n,Math.min(t,e))}function Qr(e){if(!e.length)return 0;const n=[...e].sort((i,r)=>i-r),t=Math.floor(n.length/2);return n.length%2?n[t]:(n[t-1]+n[t])*.5}function Wa(e,n,t,i){const r=e?.[n];return r?{x:r.x*t,y:r.y*i}:null}function il(e,n,t){const i=Wa(e,33,n,t),r=Wa(e,263,n,t),a=Wa(e,152,n,t);if(!i||!r||!a)return null;const o=r.x-i.x,v=r.y-i.y,R=Math.hypot(o,v);if(R<Ya)return null;const _={x:o/R,y:v/R};let E={x:-_.y,y:_.x};const S={x:(i.x+r.x)*.5,y:(i.y+r.y)*.5},h={x:a.x-S.x,y:a.y-S.y};h.x*E.x+h.y*E.y<0&&(E={x:-E.x,y:-E.y});const T=L=>{const p=L.x-S.x,l=L.y-S.y;return{x:p*_.x+l*_.y,y:p*E.x+l*E.y}},C=L=>({x:S.x+L.x*_.x+L.y*E.x,y:S.y+L.x*_.y+L.y*E.y});return{origin:S,horizontal:_,vertical:E,eyeDistance:R,rollDegrees:Math.atan2(v,o)*180/Math.PI,project:T,unproject:C}}function cn(e,n,t,i,r){const a=Wa(n,t,i,r);return a?e.project(a):null}function Jr(e,n,t,i,r,a){const o=i.unproject({x:r,y:a}),v=Math.round(o.x),R=Math.round(o.y);return v<0||R<0||v>=n||R>=t?0:Number(e[R*n+v])||0}function Gr(e,n,t,i,r,a,o,v,R){const _=[],E=[];for(let S=-R;S<=R;S+=1){let h=Number.POSITIVE_INFINITY,T=Number.NEGATIVE_INFINITY;for(let C=Math.floor(a);C<=Math.ceil(o);C+=1)Jr(e,n,t,i,C,r+S)<v||(h=Math.min(h,C),T=Math.max(T,C));Number.isFinite(h)&&T>h&&(_.push(h),E.push(T))}return _.length?{left:Qr(_),right:Qr(E)}:null}function fg(e,n){const t=[];for(let i=0;i<e.length;i+=1){const r=e[i],a=e[(i+1)%e.length];if(!r||!a||!(r.y<=n&&n<a.y||a.y<=n&&n<r.y))continue;const o=(n-r.y)/(a.y-r.y);t.push(r.x+o*(a.x-r.x))}return t.length<2?null:{left:Math.min(...t),right:Math.max(...t)}}function ic(e,n,t,i){const r=fg(n,t);if(!e||!r)return e;const a=i*.055;return{left:Math.max(e.left,r.left-a),right:Math.min(e.right,r.right+a)}}function ac({mask:e,width:n,height:t,frame:i,centerX:r,radius:a,yMinimum:o,yMaximum:v,threshold:R,findTop:_}){const E=[];for(let S=Math.round(r-a);S<=Math.round(r+a);S+=1){let h=null;if(_){for(let T=Math.floor(o);T<=Math.ceil(v);T+=1)if(Jr(e,n,t,i,S,T)>=R){h=T;break}}else for(let T=Math.ceil(v);T>=Math.floor(o);T-=1)if(Jr(e,n,t,i,S,T)>=R){h=T;break}h!=null&&E.push(h)}return E.length?Qr(E):null}function pg(e,n,t){const i={x:e.x-n.x,y:e.y-n.y},r={x:t.x-n.x,y:t.y-n.y},a=Math.hypot(i.x,i.y)*Math.hypot(r.x,r.y);if(a<Ya)return 0;const o=Qn((i.x*r.x+i.y*r.y)/a,-1,1);return Math.acos(o)*180/Math.PI}function ui(e,n,t){return Math.max(0,1-Math.abs(e-n)/t)}function fi(e,n,t){return Qn((n-e)/t,0,1)}function wi(e,n,t){return Qn((e-n)/t,0,1)}function hg(e,n){const t=e.lengthToCheek,i=e.foreheadToCheek,r=e.jawToCheek,a=e.jawToForehead,o=e.chinAngleDegrees,v={oval:.4*ui(t,1.38,.28)+.3*ui(i,.91,.18)+.3*ui(r,.82,.18),round:.45*fi(t,1.24,.25)+.3*ui(i,.94,.16)+.25*wi(o,105,35),square:.35*fi(t,1.34,.24)+.35*ui(r,.94,.15)+.3*fi(o,105,35),oblong:.6*wi(t,1.38,.28)+.2*ui(i,.94,.16)+.2*ui(r,.88,.16),heart:.35*wi(i,.94,.16)+.4*fi(a,.88,.2)+.25*fi(o,100,35),diamond:.45*fi(i,.9,.18)+.4*fi(r,.84,.18)+.15*wi(t,1.25,.28),triangle:.65*wi(a,1.02,.22)+.35*wi(r,.9,.16)},R=Object.fromEntries(Object.entries(v).map(([L,p])=>[L,Math.max(p,.001)**2])),_=Object.values(R).reduce((L,p)=>L+p,0),E=Object.fromEntries(Object.entries(R).map(([L,p])=>[L,p/_])),S=Object.entries(E).sort((L,p)=>p[1]-L[1]),[h,T]=S[0],C=T-(S[1]?.[1]||0);return{label:h,appLabel:nc[h]||"indefinido",scores:v,probabilities:E,appProbabilities:Object.fromEntries(Object.entries(E).map(([L,p])=>[nc[L],p])),confidence:Qn((T*.7+C*.3)*n,0,1)}}function al(e,n,t=null){const i=Number(n?.width)||0,r=Number(n?.height)||0,a=il(e,i,r);if(!a||e.length<=454)return{eligible:!1,poseQuality:0,motion:Number.POSITIVE_INFINITY};const o=cn(a,e,1,i,r),v=cn(a,e,152,i,r),R=cn(a,e,234,i,r),_=cn(a,e,454,i,r),E=Math.abs(_.x-R.x),S=Math.abs(o.x)/Math.max(a.eyeDistance,Ya),h=E/Math.max(1,Math.min(i,r)),T=v.y/Math.max(E,Ya),C=1-Qn((Math.abs(a.rollDegrees)-2)/8,0,1),L=1-Qn((S-.035)/.15,0,1),p=1-Qn(Math.abs(T-.82)/.42,0,1),l=Qn(.38*L+.32*C+.3*p,0,1);let P=0;if(t?.length>454){let y=0,g=0;for(const A of ug){const m=e[A],N=t[A];!m||!N||(y+=(m.x-N.x)**2+(m.y-N.y)**2,g+=1)}P=g?Math.sqrt(y/g):Number.POSITIVE_INFINITY}return{eligible:l>=.72&&Math.abs(a.rollDegrees)<=9&&S<=.16&&h>=.24&&T>=.42&&T<=1.25&&(!t||P<=.008),poseQuality:l,motion:P,rollDegrees:a.rollDegrees,yawProxy:S,faceScale:h,eyeToChin:T}}function rl({landmarks:e,faceSkinMask:n,width:t,height:i,threshold:r=.35,poseQuality:a=1}){if(!Array.isArray(e)||e.length<=454)throw new Error("Landmarks insuficientes para medir o rosto.");if(!n||n.length!==t*i)throw new Error("A máscara face-skin não corresponde às dimensões informadas.");const o=il(e,t,i);if(!o)throw new Error("Não foi possível construir o sistema local do rosto.");const v=dg.map(se=>cn(o,e,se,t,i)),R=v.map(se=>se.x),_=Math.max(...R)-Math.min(...R),E=cn(o,e,1,t,i),S=cn(o,e,152,t,i),h=cn(o,e,10,t,i),T=(E.x+S.x)*.5,C=Math.max(2,Math.round(_*.035)),L=ac({mask:n,width:t,height:i,frame:o,centerX:T,radius:C,yMinimum:-_*.62,yMaximum:h.y+_*.12,threshold:r,findTop:!0}),p=ac({mask:n,width:t,height:i,frame:o,centerX:S.x,radius:C,yMinimum:S.y-_*.12,yMaximum:S.y+_*.14,threshold:r,findTop:!1});if(L==null||p==null||p<=L)throw new Error("A máscara não contém extremos válidos de testa e queixo.");const l=p-L,P=Math.max(1,Math.round(l*.009)),y=cn(o,e,55,t,i),g=cn(o,e,285,t,i),A=cn(o,e,93,t,i),m=cn(o,e,323,t,i),N=cn(o,e,172,t,i),f=cn(o,e,397,t,i),b=(y.y+g.y)*.5,U={forehead:L+(b-L)*.48,cheek:(A.y+m.y)*.5,jaw:(N.y+f.y)*.5},G=T-_*.68,k=T+_*.68,q=Gr(n,t,i,o,U.forehead,G,k,r,P),F=ic(Gr(n,t,i,o,U.cheek,G,k,r,P),v,U.cheek,_),$=ic(Gr(n,t,i,o,U.jaw,G,k,r,P),v,U.jaw,_);if(!q||!F||!$)throw new Error("Não foi possível medir testa, maçãs do rosto e mandíbula.");const K={forehead:q.right-q.left,cheek:F.right-F.left,jaw:$.right-$.left};if(Math.min(...Object.values(K))<=0)throw new Error("A segmentação produziu larguras faciais inválidas.");const Q=pg({x:$.left,y:U.jaw},{x:S.x,y:p},{x:$.right,y:U.jaw}),oe={lengthToCheek:l/K.cheek,foreheadToCheek:K.forehead/K.cheek,jawToCheek:K.jaw/K.cheek,jawToForehead:K.jaw/K.forehead,chinAngleDegrees:Q};return{...hg(oe,a),version:lg,poseQuality:a,rollDegrees:o.rollDegrees,measurements:{faceLength:l,...K},ratios:oe,levels:U,points:{hairline:o.unproject({x:T,y:L}),chin:o.unproject({x:S.x,y:p}),foreheadLeft:o.unproject({x:q.left,y:U.forehead}),foreheadRight:o.unproject({x:q.right,y:U.forehead}),cheekLeft:o.unproject({x:F.left,y:U.cheek}),cheekRight:o.unproject({x:F.right,y:U.cheek}),jawLeft:o.unproject({x:$.left,y:U.jaw}),jawRight:o.unproject({x:$.right,y:U.jaw})}}}const mg="/mediapipe/wasm",_g="/face_landmarker.task",gg="/selfie_multiclass_256x256.tflite",vg=512;function Sg(e,n){const t={diamante:"quadrado",retangular:"oval"},i={};for(const[o,v]of Object.entries(e||{})){const R=Object.prototype.hasOwnProperty.call(t,o)?t[o]:o;Object.prototype.hasOwnProperty.call(n,R)&&(i[R]=(i[R]||0)+v)}const r=Object.values(i).reduce((o,v)=>o+v,0);if(!r)return{};const a={};for(const o of Object.keys(n))a[o]=Math.round((i[o]||0)/r*100);return a}function ol(e,n,t,i,r){const a=document.createElement("canvas");a.width=i,a.height=r;const o=a.getContext("2d");o.drawImage(e,0,0,i,r);const v=document.createElement("canvas");v.width=i,v.height=r;const R=v.getContext("2d"),_=R.createImageData(i,r),E=Object.values(n.points),S=Math.max(0,Math.floor(Math.min(...E.map(y=>y.x))-i*.05)),h=Math.min(i-1,Math.ceil(Math.max(...E.map(y=>y.x))+i*.05)),T=Math.max(0,Math.floor(n.points.hairline.y-r*.025)),C=Math.min(r-1,Math.ceil(n.points.chin.y+r*.025)),L=(y,g)=>{for(let A=-1;A<=1;A+=1){const m=Math.round(y+A),N=Math.round(g);if(m<0||m>=i||N<0||N>=r)continue;const f=(N*i+m)*4;_.data[f]=24,_.data[f+1]=235,_.data[f+2]=226,_.data[f+3]=245}};for(let y=T;y<=C;y+=1){let g=-1,A=-1;for(let m=S;m<=h;m+=1)t[y*i+m]<.35||(g<0&&(g=m),A=m);g>=0&&A>g&&(L(g,y),L(A,y))}for(let y=S;y<=h;y+=1){let g=-1,A=-1;for(let m=T;m<=C;m+=1)t[m*i+y]<.35||(g<0&&(g=m),A=m);g>=0&&A>g&&(L(y,g),L(y,A))}R.putImageData(_,0,0),o.drawImage(v,0,0);const p=Math.max(2,i/220),l=(y,g,A)=>{o.save(),o.strokeStyle="rgba(0, 0, 0, 0.72)",o.lineWidth=p+3,o.beginPath(),o.moveTo(y.x,y.y),o.lineTo(g.x,g.y),o.stroke(),o.strokeStyle=A,o.lineWidth=p,o.beginPath(),o.moveTo(y.x,y.y),o.lineTo(g.x,g.y),o.stroke(),o.fillStyle=A;for(const m of[y,g])o.beginPath(),o.arc(m.x,m.y,p*1.8,0,Math.PI*2),o.fill();o.restore()},P=n.points;return l(P.hairline,P.chin,"#ffd429"),l(P.foreheadLeft,P.foreheadRight,"#ef5bff"),l(P.cheekLeft,P.cheekRight,"#39e36d"),l(P.jawLeft,P.jawRight,"#ff9b35"),o.save(),o.strokeStyle="#47a7ff",o.lineWidth=p,o.beginPath(),o.moveTo(P.jawLeft.x,P.jawLeft.y),o.lineTo(P.chin.x,P.chin.y),o.lineTo(P.jawRight.x,P.jawRight.y),o.stroke(),o.restore(),a.toDataURL("image/jpeg",.93)}function xg(e){return new Promise((n,t)=>{const i=new Image;i.onload=()=>n(i),i.onerror=()=>t(new Error("Não foi possível ler a foto.")),i.src=e})}async function Eg(e){const n=await xg(e),t=Math.min(1,vg/Math.max(n.width,n.height)),i=document.createElement("canvas");return i.width=Math.max(1,Math.round(n.width*t)),i.height=Math.max(1,Math.round(n.height*t)),i.getContext("2d",{alpha:!1}).drawImage(n,0,0,i.width,i.height),i}async function Mg(e,n){const t=await qc.createFromOptions(e,{baseOptions:{modelAssetPath:_g,delegate:"CPU"},runningMode:"IMAGE",numFaces:1});try{return t.detect(n).faceLandmarks?.[0]||null}finally{t.close()}}async function Tg(e,n){const t=await Yc.createFromOptions(e,{baseOptions:{modelAssetPath:gg,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1});try{let i=null;return t.segment(n,r=>{const a=r.confidenceMasks?.[nl];a&&(i={dados:a.getAsFloat32Array(),width:a.width,height:a.height}),r.close?.()}),i}finally{t.close()}}async function Sv(e){const n=await Eg(e),t=await jr.forVisionTasks(mg),i=await Mg(t,n);if(!i)throw new Error("Nenhum rosto encontrado na foto.");const r=al(i,{width:n.width,height:n.height}),a=await Tg(t,n);if(!a)throw new Error("O segmentador não retornou a classe face-skin.");const o=rl({landmarks:i,faceSkinMask:a.dados,width:a.width,height:a.height,threshold:.35,poseQuality:r.poseQuality});return{ready:!0,image:ol(n,o,a.dados,a.width,a.height),details:o}}const bg={redondo:{x:21.2,y:27.6,w:257.7,h:364.9},quadrado:{x:22.8,y:19,w:254.5,h:382},coracao:{x:10.1,y:14.5,w:279.8,h:391},triangular:{x:28.7,y:10.3,w:242.5,h:399.4},oval:{x:19.2,y:13.7,w:261.6,h:392.6}},Ag={redondo:"M154.7,27.6c41,0,95.2,20.4,112.7,77.9c21,69.1,9.3,153.6-3,190.6c-11.5,34.6-62.2,96.4-122,96.4c-27.9,0-69.5-19-109.8-109.7c-11.4-25.6-21-128.4,6.3-195.2C62,30.8,130.2,27.9,143.7,27.9c0.8,0,1.3,0,1.4,0l0.6,0l0.6,0C148.9,27.7,151.7,27.6,154.7,27.6z",quadrado:"M264.7,94.6C249.3,32.9,176.4,19,152,19l-1.1,0v0c-0.1,0-0.3,0-0.4,0l-0.5,0l-0.5,0c-0.1,0-0.3,0-0.4,0v0l-1.1,0c-24.3,0-97.2,13.9-112.6,75.6c-15.5,62-18.1,176.7,0.3,213.6c18.2,36.4,73.9,89.5,76.2,91.6l1.2,1.1l36,0.1v0l1,0l1,0v0l36-0.1l1.2-1.1c2.4-2.1,58-55.1,76.2-91.6C282.8,271.3,280.2,156.6,264.7,94.6z",coracao:"M289.8,214.2c-5.9-82.9-9.5-133-34.3-159.2C232.1,30.3,189.1,13.9,150,14.5C110.9,13.9,67.9,30.3,44.5,55c-24.8,26.2-28.4,76.2-34.3,159.2l-0.1,0.9l0.3,0.9C42.2,305.7,98.9,407,150,405.5c51.1,1.5,107.8-99.9,139.6-189.5l0.3-0.9L289.8,214.2z",triangular:"M264.7,101C255,52.4,204.6,12.7,151,10.4v-0.1c-0.3,0-0.7,0-1,0c-0.3,0-0.7,0-1,0v0.1C95.4,12.7,45,52.4,35.3,101c-7.4,37-6.8,100.2-6.3,150.9c0.1,11.9,0.2,23.2,0.2,33.5v0.6l0.2,0.6c14.3,48.7,74.8,115.3,119.6,122.8v0.3c0.3,0,0.7-0.1,1-0.2c0.3,0,0.7,0.1,1,0.2v-0.3c44.8-7.5,105.3-74.1,119.6-122.8l0.2-0.6v-0.6c0-10.2,0.1-21.5,0.2-33.5C271.5,201.2,272.1,138.1,264.7,101z",oval:"M280.7,173.8c-13.1-65.3-32.8-109.4-60.4-134.8c-24.7-22.7-51.4-25.6-70.3-25.3c-18.9-0.3-45.6,2.6-70.3,25.3c-27.6,25.3-47.3,69.4-60.4,134.8l-0.1,0.5l0,0.5c1.5,68.2,15.3,97.7,36.1,142.3l0.4,0.9c26.2,56.1,60,88.3,92.8,88.3c0.5,0,1,0,1.5,0c0.5,0,1,0,1.5,0c32.8,0,66.6-32.2,92.8-88.3l0.4-0.9c20.8-44.6,34.6-74.1,36.1-142.3l0-0.5L280.7,173.8z"},Hr={};function Rg(e){const n=Ag[e];return n?(Hr[e]||(Hr[e]=new Path2D(n)),Hr[e]):null}function Et(e,n=0){const t=Number(e);return Number.isFinite(t)?t:n}function wg({userAgent:e="",platform:n="",maxTouchPoints:t=0}={}){const i=String(e||""),r=String(n||""),a=Math.max(0,Et(t)),o=/Android|iPhone|iPad|iPod/i.test(i),v=r==="MacIntel"&&a>1;return{isPhysicalMobile:o||v,isIPadLike:/iPad/i.test(i)||v,reason:v?"ipad-touch-desktop-identity":o?"mobile-user-agent":"desktop"}}function Cg({viewportWidth:e=0,viewportHeight:n=0,orientationType:t=""}={}){const i=Et(e),r=Et(n),a=String(t||"").toLowerCase();return(i>0&&r>0&&i!==r?i>r:a.startsWith("landscape"))?{key:"landscape",width:1280,height:720,aspectRatio:16/9}:{key:"portrait",width:720,height:1280,aspectRatio:9/16}}function Pg({isPhysicalMobile:e=!1,viewportWidth:n=0,viewportHeight:t=0,rawContentRotation:i=0,deviceGamma:r=null,deviceOrientationAgeMs:a=Number.POSITIVE_INFINITY,deviceLandscapeStableMs:o=0,sensorFreshForMs:v=2500,sensorMinimumStableMs:R=600}={}){const _=Et(n),E=Et(t),S=_>0&&E>0&&_>E,h=_>0&&E>0&&E>_,T=ei(i),C=Math.abs(T)===90,L=Number(r),p=Number.isFinite(L)&&Number.isFinite(Number(a))&&Number(a)>=0&&Number(a)<=Math.max(0,Et(v,2500)),l=p&&Math.abs(L)>=45&&Et(o)>=Math.max(0,Et(R,600)),P=C||l;return{mismatch:!!(e&&h&&P),viewportLandscape:S,viewportPortrait:h,physicalLandscape:P,cameraLandscape:C,sensorLandscape:l,sensorFresh:p,evidence:C&&l?"camera+sensor":C?"camera":l?"sensor":"none",rawContentRotation:T}}function oo(e){let n=Et(e);for(;n>90;)n-=180;for(;n<-90;)n+=180;return n}function eo(e){const n=e?.[33],t=e?.[263];if(!n||!t)return null;const i=Et(t.x,NaN)-Et(n.x,NaN),r=Et(t.y,NaN)-Et(n.y,NaN);return!Number.isFinite(i)||!Number.isFinite(r)||Math.hypot(i,r)<1e-6?null:oo(Math.atan2(r,i)*180/Math.PI)}function rc(e,n=65){const t=eo(e),i=e?.[33],r=e?.[263],a=e?.[1];if(!Number.isFinite(t)||!a)return 0;const o=(Et(i.x)+Et(r.x))/2,v=(Et(i.y)+Et(r.y))/2,R=Et(a.x,NaN)-o,_=Et(a.y,NaN)-v;if(!Number.isFinite(R)||!Number.isFinite(_))return 0;const E=Math.hypot(Et(r.x)-Et(i.x),Et(r.y)-Et(i.y));return Math.abs(t)>=n?-R>=R?-90:90:_<-Math.max(E*.08,.005)?180:0}function oc({calculatedRotation:e=0,eyeLineAngleDeg:n=null,activeRotation:t=null,initialFlatMaximumDeg:i=28,initialQuarterMinimumDeg:r=78,switchToFlatMaximumDeg:a=30,switchToQuarterMinimumDeg:o=78}={}){const v=Number(n);if(!Number.isFinite(v))return null;const R=ei(e),_=Number(t),S=t!=null&&t!==""&&[0,-90,90,180,-180].includes(_)?ei(_):null,h=Math.abs(oo(v)),T=Math.abs(R)===90;return S===null?(T?h>=Et(r,78):h<=Et(i,28))?R:null:(Math.abs(S)===90?T||h<=Et(a,30):!T||h>=Et(o,78))?R:null}function yg(e,{minimumSamples:n=6,requiredRatio:t=.75}={}){const i=(Array.isArray(e)?e:[]).map(Number).filter(Number.isFinite);if(i.length<n)return null;const r=i.reduce((o,v)=>{const R=v===-90||v===90||Math.abs(v)===180?v:0,_=Math.abs(R)===180?180:R;return o[_]+=1,o},{"-90":0,0:0,90:0,180:0}),a=[0,-90,90,180].sort((o,v)=>r[v]-r[o])[0];return r[a]/i.length>=t?a:null}function ei(e){const n=Number(e);return Math.abs(n)===180?180:n===-90||n===90?n:0}function Oa(e,n=!1){const t=ei(e);return n&&Math.abs(t)===90?-t:t}function Lg(e,n=0){return oo(Et(e)-ei(n))}function Ng({initialRotation:e=0,minimumSamples:n=14,minimumStableMs:t=650,requiredRatio:i=.82,maximumSamples:r=24,maximumGapMs:a=350,cooldownMs:o=1500,reportCandidateAfterSamples:v=5,rejectionSamples:R=4}={}){let _=ei(e),E=null,S=[],h=!1,T=0,C=Number.NEGATIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function p(){E=null,S=[],h=!1,T=0}function l(P){const y=S.filter(m=>m.rotation===E),g=y.length>1?P-y[0].at:0,A=S.length?y.length/S.length:0;return{candidateRotation:E,sampleCount:y.length,windowSamples:S.length,stableMs:Math.max(0,g),confidence:A}}return{reset(P=_,y=Number.NEGATIVE_INFINITY){return _=ei(P),C=Number(y),p(),_},observe(P,y=performance.now()){const g=Number.isFinite(Number(y))?Number(y):0,A=ei(P);let m=null;if(g-C>a&&E!==null){const k=l(C);k.sampleCount>=v&&(m=k),p()}if(C=g,A===_){if(E===null)return{changed:!1,candidateStarted:!1,rejected:m,activeRotation:_};S.push({rotation:A,at:g}),S=S.slice(-r),T+=1;const k=l(g);return T>=R&&(k.sampleCount>=v&&(m=k),p()),{changed:!1,candidateStarted:!1,rejected:m,activeRotation:_,...m?{}:k}}if(E!==A){if(E!==null){const k=l(g);k.sampleCount>=v&&(m=k)}E=A,S=[],h=!1}T=0,S.push({rotation:A,at:g}),S=S.slice(-r);const N=l(g),f=!h&&N.sampleCount>=v;f&&(h=!0);const b=N.sampleCount>=n&&N.stableMs>=t&&N.confidence>=i,U=g-L>=o;if(!b||!U)return{changed:!1,candidateStarted:f,rejected:m,activeRotation:_,...N};const G=_;return _=E,L=g,p(),{changed:!0,candidateStarted:f,rejected:m,previousRotation:G,activeRotation:_,...N}},getState(){return{activeRotation:_,candidateRotation:E,candidateSamples:S.length,lastAppliedAt:L}}}}function sc(e){const n=Math.round(Number(e)||0);return Math.max(0,n)}function ni(e){const n=Number(e);return n===90||n===-90?n:Math.abs(n)===180?180:0}function cc(e,n,t=0){const i=sc(e),r=sc(n),a=ni(t),o=Math.abs(a)===90;return{width:o?r:i,height:o?i:r,rotationDeg:a}}function Dg(e,n=0){const t=Number(e?.x)||0,i=Number(e?.y)||0;switch(ni(n)){case 90:return{...e,x:i,y:1-t};case-90:return{...e,x:1-i,y:t};case 180:return{...e,x:1-t,y:1-i};default:return{...e,x:t,y:i}}}function Ig(e,n=0){if(!Array.isArray(e))return[];const t=ni(n);return t?e.map(i=>Dg(i,t)):e}const to=Object.freeze([0,90,-90,180]);function lc(e){const n=Number(e);return Number.isFinite(n)&&n>0?n:0}function dc(e,n,t=.08){const i=lc(e),r=lc(n);if(!i||!r)return"unknown";const a=i/r;return Math.abs(a-1)<=Math.max(0,Number(t)||0)?"square":a>1?"landscape":"portrait"}function sl(e){return e.reduce((n,t)=>{const i=ni(t);return n.includes(i)||n.push(i),n},[])}function Ug({sourceWidth:e=0,sourceHeight:n=0,viewportWidth:t=0,viewportHeight:i=0,preferredRotation:r=null}={}){const a=dc(e,n),o=dc(t,i),_=!["unknown","square"].includes(a)&&!["unknown","square"].includes(o)&&a!==o?[90,-90,0,180]:[0,180,90,-90],E=r!=null;return sl([...E?[r]:[],..._,...to])}function Fg({minimumFramesWithoutFace:e=24,minimumMsWithoutFace:n=700,maximumMsUnconfirmedFace:t=1800,retryPauseMs:i=3500,maximumTotalMs:r=0}={}){const a=Math.max(1,Number(e)||1),o=Math.max(0,Number(n)||0),v=Math.max(o,Number(t)||0),R=Math.max(o,Number(i)||0),_=Math.max(0,Number(r)||0);let E=null;function S(y={}){return E?{active:E.active,confirmed:E.confirmed,phase:E.phase,candidates:[...E.candidates],candidateIndex:E.candidateIndex,candidateRotation:E.candidates[E.candidateIndex],round:E.round,...y}:{active:!1,phase:"idle",...y}}function h({candidates:y=to,processedFrames:g=0,now:A=0}={}){return E={active:!0,confirmed:!1,phase:"probing",candidates:sl([...Array.isArray(y)?y:[],...to]),candidateIndex:0,candidateStartedFrame:Number(g)||0,candidateStartedAt:Number(A)||0,startedAt:Number(A)||0,lastFaceAt:Number.NEGATIVE_INFINITY,round:0},S({changed:!0,reason:"started"})}function T(y,g){if(!E?.active||!_)return null;const A=g-E.startedAt;return A<_?null:(E.active=!1,E.confirmed=!1,E.phase="fallback",E.candidateIndex=0,E.candidateStartedFrame=y,E.candidateStartedAt=g,S({changed:!0,fallback:!0,reason:"time_budget",elapsedTotalMs:A}))}function C({currentFrame:y,currentTime:g,reason:A,elapsedMs:m}){const N=E.candidateIndex>=E.candidates.length-1;return N?(E.round+=1,E.candidateIndex=0):E.candidateIndex+=1,E.candidateStartedFrame=y,E.candidateStartedAt=g,E.lastFaceAt=Number.NEGATIVE_INFINITY,S({changed:!0,reason:N?"retry_round":A,elapsedMs:m})}function L({processedFrames:y=0,now:g=0}={}){if(!E?.active)return S();const A=Number(y)||0,m=Number(g)||0,N=T(A,m);if(N)return N;const f=m-E.candidateStartedAt,b=A-E.candidateStartedFrame;return E.lastFaceAt=m,b>=a&&f>=v?C({currentFrame:A,currentTime:m,reason:"face_unconfirmed",elapsedMs:f}):S({faceObserved:!0})}function p({processedFrames:y=0,now:g=0}={}){if(!E?.active)return S();const A=Number(y)||0,m=Number(g)||0,N=T(A,m);if(N)return N;const f=A-E.candidateStartedFrame,b=m-E.candidateStartedAt,U=m-E.lastFaceAt<o,k=E.candidateIndex>=E.candidates.length-1?R:o;return U||f<a||b<k?S({changed:!1,framesWithoutFace:f,elapsedMs:b}):C({currentFrame:A,currentTime:m,reason:"no_face",elapsedMs:b})}function l(y){return E?(E.active=!1,E.confirmed=!0,E.phase="locked",S({changed:!1,rotation:ni(y)})):{active:!1,confirmed:!0,phase:"locked",rotation:ni(y)}}function P(){E=null}return{reset:h,observeFace:L,observeNoFace:p,confirm:l,stop:P,snapshot:S}}function Og(e){const n=Number(e);return Number.isFinite(n)?Math.max(0,n):0}function Vr(e=[],n=0){return e.map((i,r)=>({rotation:ni(i?.rotation),score:Og(i?.score),detections:Math.max(0,Number(i?.detections)||0),index:r})).filter(i=>i.detections>0).sort((i,r)=>r.detections-i.detections||r.score-i.score||i.index-r.index)[0]||{rotation:ni(n),score:0,detections:0,index:-1}}function $n(e){const n=Number(e);return Number.isFinite(n)?n:0}function Bg({stabilityMs:e=1200,minimumSamples:n=4,dimensionTolerancePx:t=3,cooldownMs:i=2500}={}){const r=Math.max(0,$n(e)),a=Math.max(1,$n(n)),o=Math.max(0,$n(t)),v=Math.max(0,$n(i));let R="",_=null,E=Number.NEGATIVE_INFINITY;function S(L=""){R=String(L||""),_=null,E=Number.NEGATIVE_INFINITY}function h(L,p=0){R=String(L||""),_=null,E=$n(p)+v}function T({key:L="",width:p=0,height:l=0,now:P=0}={}){const y=String(L||""),g=$n(p),A=$n(l),m=$n(P);if(!y||y===R)return _=null,{confirmed:!1,pending:!1,reason:"active_orientation"};_?.key===y&&Math.abs(_.width-g)<=o&&Math.abs(_.height-A)<=o?(_.width=g,_.height=A,_.samples+=1):_={key:y,width:g,height:A,firstSeenAt:m,samples:1};const f=Math.max(0,m-_.firstSeenAt),b={key:_.key,width:_.width,height:_.height,samples:_.samples,stableMs:f,confirmed:!1,pending:!0};return m<E?{...b,reason:"restart_cooldown"}:_.samples<a||f<r?{...b,reason:"collecting_stability"}:{...b,confirmed:!0,pending:!1,reason:"stable_viewport"}}function C(){return{activeKey:R,candidate:_?{..._}:null,cooldownUntil:E}}return{reset:S,confirm:h,observe:T,snapshot:C}}function Ka(e,n=0){const t=Number(e);return Number.isFinite(t)?t:n}function Gn(e,n,t,i){const r=e?.[n];return r?{x:Ka(r.x,.5)*t,y:Ka(r.y,.5)*i}:null}function Gg(e,n){const t=Math.hypot(e,n);return!Number.isFinite(t)||t<1e-6?null:{x:e/t,y:n/t}}function Hg(e,n,t,i,r){return{x:e.x+n.x*i+t.x*r,y:e.y+n.y*i+t.y*r}}function Vg(e,n,t){const i=Math.max(1,Ka(n,1)),r=Math.max(1,Ka(t,1)),a=Gn(e,33,i,r),o=Gn(e,263,i,r),v=Gn(e,152,i,r);if(!a||!o||!v)return null;const R={x:(a.x+o.x)/2,y:(a.y+o.y)/2},_=Gg(o.x-a.x,o.y-a.y);if(!_)return null;let E={x:-_.y,y:_.x};const S={x:v.x-R.x,y:v.y-R.y};E.x*S.x+E.y*S.y<0&&(E={x:-E.x,y:-E.y});const h=T=>({horizontal:(T.x-R.x)*_.x+(T.y-R.y)*_.y,vertical:(T.x-R.x)*E.x+(T.y-R.y)*E.y});return{width:i,height:r,origin:R,horizontal:_,vertical:E,horizontalAngleRad:Math.atan2(_.y,_.x),project:h,pointAt:(T,C)=>Hg(R,_,E,T,C)}}function uc(e,n,t,{sideScale:i=1.12,sidePaddingPx:r=24,hairlineLift:a=.4}={}){const o=Vg(e,n,t);if(!o)return null;const v=Gn(e,10,o.width,o.height),_=[46,53,52,65,55,276,283,282,295,285].map(q=>Gn(e,q,o.width,o.height)),E=Gn(e,2,o.width,o.height),S=Gn(e,152,o.width,o.height),h=Gn(e,127,o.width,o.height),T=Gn(e,356,o.width,o.height);if(!v||_.some(q=>!q)||!E||!S)return null;const C=o.project(v),L=_.map(q=>o.project(q).vertical).reduce((q,F)=>q+F,0)/_.length,p=o.project(E),l=o.project(S),y=[C.vertical-Math.max(0,L-C.vertical)*a,L,p.vertical,l.vertical],g=[y[1]-y[0],y[2]-y[1],y[3]-y[2]],A=g.reduce((q,F)=>q+F,0);if(!g.every(q=>Number.isFinite(q)&&q>0)||A<=0)return null;const m=[h,T].filter(Boolean).map(q=>o.project(q).horizontal),N=Math.max(40,Math.hypot(T?.x-h?.x||o.width*.3,T?.y-h?.y||0)/2),f=m.length?Math.min(...m):-N,b=m.length?Math.max(...m):N,U=Math.max(Math.abs(f),Math.abs(b))*i+r,G=-U,k=U;return{frame:o,levels:y,segments:g,percentages:g.map(q=>q/A*100),midLevels:[(y[0]+y[1])/2,(y[1]+y[2])/2,(y[2]+y[3])/2],horizontalStart:G,horizontalEnd:k,lines:y.map(q=>({start:o.pointAt(G,q),end:o.pointAt(k,q)}))}}const kg={key:0,class:"orientation-gate",role:"alert","aria-live":"assertive"},Wg={class:"orientation-gate__card"},zg={key:1,class:"orientation-gate__hint"},Xg={key:0,class:"camera-adjusting",role:"status","aria-live":"polite"},qg={key:0,class:"ui"},Yg={class:"metrics"},fc=30,Kg=42,jg=24,$g=900,kr="__optifaceLandscapeLockOwned",Ba="/face_landmarker.task",oa="/mediapipe/wasm",pc="/selfie_multiclass_256x256.tflite",Zg=15e3,hc=8,Qg=512,Wr=10,mc=468,Jg=.84,ev=.14,tv=.032,nv=.105,_c=.08,gc=.42,vc=8,iv=24,av=.38,rv=65,Sc="/models",xc="/vendor/face-api.min.js",Ec=8e3,zr=12e3,ov=6e4,sv=1800,cv=450,Ga=160,Mc=.5,lv=3500,dv=900,uv=60,fv=1.25,sa="/models3d/wrap.stl",pv={__name:"VideoRA",props:{initialModel:{type:String,default:"wrap"},initialColor:{type:[String,Number],default:"#000000"},anchorUpperIdx:{type:Number,default:9},anchorLowerIdx:{type:Number,default:1},anchorBlendT:{type:Number,default:.35},smoothing:{type:Number,default:1},anchorFracX:{type:Number,default:0},anchorFracY:{type:Number,default:0},anchorFracZ:{type:Number,default:0},localOffXFrac:{type:Number,default:0},localOffYFrac:{type:Number,default:0},localOffZFrac:{type:Number,default:0},rotOffsetDeg:{type:Object,default:()=>({yaw:0,pitch:0,roll:0})},stlPreRotateDeg:{type:Object,default:()=>({x:0,y:0,z:0})},initialDepthOffset:{type:Number,default:.011},initialScaleInIPD:{type:Number,default:1.63},hastesOpenDeg:{type:Number,default:8},initialCameraFovDeg:{type:Number,default:60},autoCalibrate:{type:Boolean,default:!0},calibFrames:{type:Number,default:12},targetWidthInIPD:{type:Number,default:2.1},developerMode:{type:Boolean,default:!0},previewMirror:{type:Boolean,default:!0},trackingQuality:{type:String,default:""},rotGlobalGain:{type:Number,default:.9},yawRotGain:{type:Number,default:1},pitchGain:{type:Number,default:1},rollGain:{type:Number,default:1}},setup(e,{expose:n}){const t=wg({userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints}),i=t.isPhysicalMobile,r=i&&!1,a=Object.freeze({balanced:{desktopInputWidth:448,desktopInputWidths:Object.freeze([320,352,384,416,448]),mobileInputWidths:Object.freeze([320,352,384,416,448]),mobileDefaultInputWidth:384,minFaceDetectionConfidence:.55,minFacePresenceConfidence:.55,minTrackingConfidence:.55},high:{desktopInputWidth:448,desktopInputWidths:Object.freeze([352,384,448,512,640]),mobileInputWidths:Object.freeze([352,384,448,512,640]),mobileDefaultInputWidth:448,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5}}),o=Object.freeze([33,133,159,145]),v=Object.freeze([263,362,386,374]),R=Object.freeze([10,9,168,151]),_=Object.freeze([152,13,14,17]),E=Object.freeze([1,4,6,197]),S=e,h={x:S.stlPreRotateDeg.x,y:S.stlPreRotateDeg.y,z:S.stlPreRotateDeg.z};n({startAR:ji,suspendAR:hd,resumeAR:md,btnArmacao:ud,btnCor:fd,btnCaptura:Go,btnCapturaBase:pd,getFaceShapeReport:sd,resetFaceShapeReport:cd,trackFaceShapeReportEvent:ld,requestFaceShapeReanalysis:dd,setProfundidad:Ho,setEscala:xr,ajustarEscala:_d,setCameraFov:Vo,btnProporcoes:Do,btnMarcadores:No,setTrackingMode:cr,requestLandscapeOrientation:So});const T=_t(S.initialDepthOffset),C=_t(S.initialScaleInIPD),L=_t(bt.clamp(Number(S.initialCameraFovDeg)||60,35,95)),p=_t(S.developerMode),l=_t(Kt(S.trackingQuality||"high")),P=_t(0);let y=!1,g=!1;const A=_t({x:0,y:0}),m=_t(0),N=_t(0),f=_t(0),b=_t({width:0,height:0,frameRate:0,aspectRatio:0,facingMode:"",resizeMode:""}),U=_t({width:0,height:0}),G=_t("aguardando"),k=_t("Aguardando"),q=_t(0),F=_t(!1),$=_t(""),K=_t(!1),Q=_t(!1),oe=window.matchMedia?.("(display-mode: standalone)")?.matches||!!navigator.standalone,ie=na(()=>oe&&typeof window.screen?.orientation?.lock=="function"),se=Object.freeze({oval:"Oval",redondo:"Redondo",quadrado:"Quadrado",retangular:"Retangular",diamante:"Diamante",coracao:"Coração",triangular:"Triangular",indefinido:"Indefinido",aguardando:"Aguardando"}),ce=na(()=>se[G.value]||G.value||"Aguardando"),Ye=na(()=>{const c=Number(q.value)||0;return c>0?`${k.value} · ${(c*100).toFixed(0)}%`:k.value}),Ve=_t(null),st=_t(null),Re=_t(null),Be=_t(null),Y=_t(null),te=_t(null);let Me=null,We=null,fe=null,Ae=null,at=null,ke=null,Ze=null,Ke=null,je=null,ut=null,ct=null,Yt=.25,vt=0;const ht=new Ie(0,0,0);let I=null;const Gt=new Ie,ft=new Ie,M=new Ie,s=new Ie,B=new ti,X=new Ie,j=new Ie,de=new Ie,_e=new Ie,Z=new Ie,ee=new Ie,ge=new Ie,Fe=new Ie,ve=new Ie,me=new Ie,De=new Ie,Ge=new ti,$e=new Ie,D=new Ie,he=new li,J={wrap:{left:"/models3d/luas/Wrap_Haste_Esquerda.stl",right:"/models3d/luas/Wrap_Haste_Dereita.stl",leftMaxX:!0,rightMaxX:!1},PantoV2:{left:"/models3d/luas/PantoV2_Haste_Esquerda.stl",right:"/models3d/luas/PantoV2_Haste_Dereita.stl",leftMaxX:!1,rightMaxX:!1}},pe={pos:new Ie,quat:new li,scale:1};let Ee=!1;const ae=new li;function Oe(){const c=bt.degToRad,{yaw:u=0,pitch:x=0,roll:O=0}=S.rotOffsetDeg||{};ae.setFromEuler(new Ia(c(x),c(u),c(O),"YXZ"))}function Le(c,u=1){const x=Number(c);return Number.isFinite(x)?x:u}function St(c,u=1){return bt.clamp(Le(c,u),0,1)}function rt(c){return bt.clamp(Le(c,S.initialCameraFovDeg||uv),35,95)}function Kt(c){return c==="high"?"high":"balanced"}function dn(c=l.value){const u=a[Kt(c)];return u?i?u.mobileDefaultInputWidth:u.desktopInputWidth:448}function ha(c=l.value){const u=a[Kt(c)];if(!u)return a.balanced;const x=i?ze||u.mobileDefaultInputWidth:ze||u.desktopInputWidth;return{...u,inputWidth:x}}function _i(c=l.value,u="VIDEO"){const x=ha(c);return{runningMode:u,numFaces:1,minFaceDetectionConfidence:x.minFaceDetectionConfidence,minFacePresenceConfidence:x.minFacePresenceConfidence,minTrackingConfidence:x.minTrackingConfidence,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!0}}let Mt=null,mn=!1,ii=null,In=null,un=null,Zt=null,_n=null,zn=0,Xn=0,Tn=0,qn=0;const bn=document.createElement("canvas"),Fi=bn.getContext("2d",{willReadFrequently:!0}),Un=document.createElement("canvas"),ma=Un.getContext("2d",{willReadFrequently:!0}),gn=document.createElement("canvas"),_a=gn.getContext("2d",{willReadFrequently:!0});let Yn=0,Fn=0,d=null,w=null,z=!1,H=!1,V=-1,Se=-1,Pe=!1,xe=0,we=0,Ue=0,ze=0,Qe=0,ye=null,it=null,Lt=null,mt=null,pt=null,Bt=null,Ce=null,Ht=null,nt=null,Xt=null,Ut=0,an=0,An=!1,Xe=null;const Tt=Bg();let Je=0,He=0,en=0,qt=[],jt=!1;const vn=Fg({minimumFramesWithoutFace:24,minimumMsWithoutFace:700,maximumMsUnconfirmedFace:1800,retryPauseMs:3500,maximumTotalMs:lv});let ai=null,so=Number.NEGATIVE_INFINITY,Oi=Number.NEGATIVE_INFINITY,Bi=Number.NEGATIVE_INFINITY,co=Number.NEGATIVE_INFINITY,Qa="";const Kn=Ng();let Rn=!1,ga=null,va=null,Sa=null,lo=!1,uo=!1,Ja=!1,fo=0,Sn=0,po=0,ho=0,Gi=0,Hi=null,xa=!1,mo=Number.NEGATIVE_INFINITY,er=0,_o=!1,Vi=0,go=0,vo=Number.NEGATIVE_INFINITY,tr=0,nr=0,ki=0,gi=!1,Ea=!1,vi=0,ri=0,oi=0,Ma=null,Wi=null,Ta="";const le=Td("visagismo-video-ra");function ir(c=0){return new Promise(u=>setTimeout(u,c))}function zi(c,u,x,O=null){let W=0,ne=!1;const re=Promise.resolve(c);re.then(Ne=>{ne&&O?.(Ne)}).catch(()=>{});const ue=new Promise((Ne,be)=>{W=window.setTimeout(()=>{ne=!0;const qe=new Error(`${x} excedeu ${u}ms`);qe.name="TimeoutError",be(qe)},u)});return Promise.race([re,ue]).finally(()=>window.clearTimeout(W))}function On(c,{autoRelease:u=!0}={}){an&&(window.clearTimeout(an),an=0),Q.value=!!c,c&&u&&(an=window.setTimeout(()=>{an=0,Q.value=!1},2200))}function ba(){return Cg({viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,orientationType:window.screen?.orientation?.type||""})}function tn(){return{innerWidth:window.innerWidth||0,innerHeight:window.innerHeight||0,visualWidth:window.visualViewport?.width||0,visualHeight:window.visualViewport?.height||0,screenType:window.screen?.orientation?.type||"",screenAngle:window.screen?.orientation?.angle||0}}function cl(){const c=performance.now();return Pg({isPhysicalMobile:i,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,rawContentRotation:Je,deviceGamma:ai?.gamma,deviceOrientationAgeMs:c-so,deviceLandscapeStableMs:c-Oi})}function si(c="state_changed"){const u=cl();F.value=u.mismatch,u.mismatch||($.value="");const x=`${u.mismatch}:${u.evidence}:${u.viewportLandscape}`;if(x!==Qa){const O=Qa;Qa=x,le.track("orientation",u.mismatch?"physical_viewport_mismatch_detected":"physical_viewport_state_resolved",{reason:c,previousKey:O,evidence:u.evidence,physicalLandscape:u.physicalLandscape,cameraLandscape:u.cameraLandscape,sensorLandscape:u.sensorLandscape,sensorFresh:u.sensorFresh,rawContentRotationDeg:Je,displayContentRotationDeg:He,sensor:ai,standalone:oe,orientationLockSupported:ie.value,...tn()},u.mismatch?"warn":"info")}return u}async function So(c="manual"){const u=si(c);if(!u.mismatch)return!0;if(le.track("orientation","landscape_lock_requested",{reason:c,standalone:oe,supported:ie.value,evidence:u.evidence,...tn()}),!oe)return $.value="Abra os atalhos do aparelho e ative a rotação automática.",le.track("orientation","landscape_lock_unavailable",{reason:"browser_tab",...tn()},"warn"),!1;if(!ie.value)return $.value="Ative a rotação automática nas configurações do aparelho.",le.track("orientation","landscape_lock_unavailable",{reason:"api_unavailable",...tn()},"warn"),!1;K.value=!0,$.value="";try{return await window.screen.orientation.lock("landscape"),window[kr]=!0,le.track("orientation","landscape_lock_succeeded",{reason:c,...tn()}),window.setTimeout(()=>si("landscape_lock_settled"),250),!0}catch(x){return $.value="Não foi possível girar automaticamente. Ative a rotação do aparelho.",le.captureError("orientation","landscape_lock_failed",x,{reason:c,...tn()}),!1}finally{K.value=!1}}function ll(c="device_returned_portrait"){if(!window[kr])return!1;window[kr]=!1;try{return window.screen?.orientation?.unlock?.(),le.track("orientation","landscape_lock_released",{reason:c,sensor:ai,...tn()}),!0}catch(u){return le.captureError("orientation","landscape_unlock_failed",u,{reason:c,...tn()}),!1}}function xo(c=l.value){we=0,Qe=0,ze=dn(c)}function Eo(){return cc(Re.value?.videoWidth||b.value.width||0,Re.value?.videoHeight||b.value.height||0,Je)}function Mo(c=0,u=0){const x=c===u?"square":c>u?"landscape":"portrait",O=Xe?.key||ba().key;return`optiface:camera-orientation:v1:${b.value.facingMode||"unknown"}:${O}:${x}`}function ar(c,u){try{const x=sessionStorage.getItem(Mo(c,u));if(x===null)return null;const O=Number(x);return[0,90,-90,180].includes(O)?O:null}catch{return null}}function To(c,u,x){try{sessionStorage.setItem(Mo(u,x),String(c))}catch{}}function Si(c,u="candidate_selected"){const x=Je;Je=c.candidateRotation,He=Oa(Je,on.value),qt=[],jt=!1,Kn.reset(He),On(!0);const O=Aa(u);return xi(),le.track("camera","orientation_bootstrap_candidate_selected",{reason:c.reason||u,candidateRotationDeg:Je,displayRotationDeg:He,candidateIndex:c.candidateIndex,candidateCount:c.candidates.length,round:c.round,candidates:c.candidates,previousRawRotationDeg:x,sourceWidth:Re.value?.videoWidth||0,sourceHeight:Re.value?.videoHeight||0,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,requestedOrientation:Xe?.key||"",...tn()}),O||x!==Je}function dl(c="camera_started"){const u=Re.value?.videoWidth||b.value.width||0,x=Re.value?.videoHeight||b.value.height||0,O=ar(u,x),W=Ug({sourceWidth:u,sourceHeight:x,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,preferredRotation:O}),ne=vn.reset({candidates:W,processedFrames:Sn,now:performance.now()});return le.track("camera","orientation_bootstrap_started",{reason:c,sourceWidth:u,sourceHeight:x,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,preferredRotation:O,candidates:W}),Si(ne,c)}function bo(c=0){const u=Re.value,x=u?.videoWidth||0,O=u?.videoHeight||0;if(!x||!O||u.readyState<2||!_a)return!1;const W=cc(x,O,c),re=Math.min(1,Ga/Math.max(W.width,W.height));gn.width=Math.max(1,Math.round(W.width*re)),gn.height=Math.max(1,Math.round(W.height*re));const ue=_a;return ue.setTransform(1,0,0,1,0,0),ue.clearRect(0,0,gn.width,gn.height),ue.translate(gn.width/2,gn.height/2),ue.rotate(bt.degToRad(W.rotationDeg)),ue.drawImage(u,-(x*re)/2,-(O*re)/2,x*re,O*re),ue.setTransform(1,0,0,1,0,0),!0}async function ul(c="camera_started"){const u=performance.now(),x=vn.snapshot(),O=x.candidateRotation??0,W=Re.value?.videoWidth||b.value.width||0,ne=Re.value?.videoHeight||b.value.height||0,re=ar(W,ne),ue=[];let Ne=!1,be=!1;try{Ne=await zi(Po(),sv,"Carregamento do detector de orientação")}catch(lt){le.captureError("camera","orientation_probe_load_failed",lt,{reason:c,fallbackRotation:O})}if(Ne&&globalThis.faceapi)for(let lt=0;lt<x.candidates.length;lt+=1){const Ct=x.candidates[lt],Rt=performance.now();let Vt=0,Ft=0,Jt=0;for(let Pt=0;Pt<2;Pt+=1)if(bo(Ct)){try{const $t=globalThis.faceapi,wn=await zi($t.detectSingleFace(gn,new $t.TinyFaceDetectorOptions({inputSize:Ga,scoreThreshold:.35})),cv,"Amostra do detector de orientação");wn&&(Ft+=1,Vt+=Number(wn.score)||0)}catch($t){Jt+=1,le.captureError("camera","orientation_probe_sample_failed",$t,{rotation:Ct,sample:Pt})}await ir(20)}ue.push({rotation:Ct,detections:Ft,score:Ft?Vt/Ft:0,failedSamples:Jt,durationMs:Number((performance.now()-Rt).toFixed(1))});const kt=Vr(ue,O),It=re!==null&&lt===0&&kt.detections>0&&kt.score>=Mc,Nt=lt%2===1&&kt.detections>0&&kt.score>=Mc;if(It||Nt){be=lt<x.candidates.length-1;break}}const qe=Vr(ue,O),tt=vn.reset({candidates:[qe.rotation,...x.candidates.filter(lt=>lt!==qe.rotation)],processedFrames:Sn,now:performance.now()});return Si({...tt,reason:qe.detections?"visual_probe":"priority_fallback"},"orientation_probe_completed"),le.track("camera","orientation_probe_completed",{reason:c,selectedRotationDeg:qe.rotation,selectedScore:Number(qe.score.toFixed(4)),selectedDetections:qe.detections,detectorAvailable:Ne,fallbackUsed:qe.detections===0,preferredRotation:re,stoppedEarly:be,testedCandidates:ue.length,inputSize:Ga,durationMs:Number((performance.now()-u).toFixed(1)),results:ue},qe.detections?"info":"warn"),qe.rotation}async function fl(c="camera_started"){const u=performance.now(),x=vn.snapshot(),O=x.candidateRotation??0,W=Re.value?.videoWidth||b.value.width||0,ne=Re.value?.videoHeight||b.value.height||0,re=ar(W,ne),ue=[];for(let qe=0;qe<x.candidates.length;qe+=1){const tt=x.candidates[qe],lt=performance.now();let Ct=0,Rt=0,Vt=0;for(let Ft=0;Ft<2;Ft+=1)if(bo(tt)){try{const kt=(await Mt.detectForVideo(gn,dr(performance.now())))?.result?.faceLandmarks?.[0];if(kt){Rt+=1;const It=rc(kt),Nt=eo(kt);oc({calculatedRotation:It,eyeLineAngleDeg:Nt,activeRotation:null})===0&&(Ct+=1)}}catch(Jt){Vt+=1,le.captureError("camera","orientation_worker_probe_sample_failed",Jt,{rotation:tt,sample:Ft})}await ir(20)}if(ue.push({rotation:tt,detections:Ct,score:Ct/2,faces:Rt,failedSamples:Vt,durationMs:Number((performance.now()-lt).toFixed(1))}),Ct===2)break}const Ne=Vr(ue,O),be=vn.reset({candidates:[Ne.rotation,...x.candidates.filter(qe=>qe!==Ne.rotation)],processedFrames:Sn,now:performance.now()});return Si({...be,reason:Ne.detections?"worker_landmarks_probe":"priority_fallback"},"orientation_worker_probe_completed"),await wo("orientation_worker_probe_completed"),le.track("camera","orientation_probe_completed",{reason:c,selectedRotationDeg:Ne.rotation,selectedDetections:Ne.detections,detectorAvailable:!0,detectorContext:"worker",fallbackUsed:Ne.detections===0,preferredRotation:re,testedCandidates:ue.length,inputSize:Ga,durationMs:Number((performance.now()-u).toFixed(1)),results:ue},Ne.detections?"info":"warn"),Ne.rotation}function pl(){const c=Re.value?.videoWidth||b.value.width||0,u=Re.value?.videoHeight||b.value.height||0,x=vn.confirm(Je);To(Je,c,u),On(!1),le.track("camera","orientation_bootstrap_confirmed",{rotationDeg:Je,displayRotationDeg:He,validationSource:"face_landmarks",validationSamples:qt.length,candidateIndex:x.candidateIndex??-1,round:x.round||0,sourceWidth:c,sourceHeight:u,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,detectorMode:Zt||""})}function Ao(c,u){Si(c,u),jt=!0,qt=[],Kn.reset(He,performance.now()),On(!1),le.track("camera","orientation_bootstrap_fallback_accepted",{reason:c.reason||u,elapsedTotalMs:Number((c.elapsedTotalMs||0).toFixed(1)),rotationDeg:Je,displayRotationDeg:He,candidateCount:c.candidates?.length||0,sourceWidth:Re.value?.videoWidth||0,sourceHeight:Re.value?.videoHeight||0},"warn")}function Aa(c="orientation_changed"){const u=Eo();if(!u.width||!u.height||!st.value)return!1;const x=Number(st.value.dataset.nw||0),O=Number(st.value.dataset.nh||0),W=en,ne=x!==u.width||O!==u.height||W!==u.rotationDeg;return en=u.rotationDeg,st.value.style.width=`${u.width}px`,st.value.style.height=`${u.height}px`,st.value.dataset.nw=String(u.width),st.value.dataset.nh=String(u.height),[Be.value,te.value].forEach(re=>{re&&(re.width!==u.width&&(re.width=u.width),re.height!==u.height&&(re.height=u.height),re.style.width="100%",re.style.height="100%")}),Y.value&&(Y.value.style.width="100%",Y.value.style.height="100%",Me?Me.setSize(u.width,u.height,!1):(Y.value.width=u.width,Y.value.height=u.height)),Xi(l.value),fe&&qi(u.width,u.height),ne&&(Ee=!1,rn=null,Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null,Ae&&(Ae.visible=!1),wa(),le.track("camera","processing_frame_normalized",{reason:c,sourceWidth:Re.value?.videoWidth||0,sourceHeight:Re.value?.videoHeight||0,processingWidth:u.width,processingHeight:u.height,rawRotationDeg:Je,displayRotationDeg:He,previousRotationDeg:W})),bi(),ne}function xi(){const c=Re.value,u=Be.value;if(!c||!u||c.readyState<2||!u.width||!u.height)return;const x=u.getContext("2d",{alpha:!1});if(!x)return;const O=c.videoWidth,W=c.videoHeight;x.setTransform(1,0,0,1,0,0),x.clearRect(0,0,u.width,u.height),x.translate(u.width/2,u.height/2),x.rotate(bt.degToRad(en)),x.drawImage(c,-O/2,-W/2,O,W),x.setTransform(1,0,0,1,0,0)}function Xi(c=l.value){const u=Be.value?.width||0,x=Be.value?.height||0;if(!u||!x)return;const O=Math.min(u,ha(c).inputWidth),W=Math.max(1,Math.round(O*x/u));Yn===O&&Fn===W||(bn.width=O,bn.height=W,Yn=O,Fn=W,U.value={width:O,height:W})}function hl(c,u=l.value){if(!Number.isFinite(c))return;we=we?bt.lerp(we,c,.22):c;const x=performance.now();if(x-Qe<$g)return;const O=a[Kt(u)],W=i?O?.mobileInputWidths||[]:O?.desktopInputWidths||[];if(!W.length)return;const ne=ze||dn(u),re=W.indexOf(ne);if(!(re<0)){if(we>Kg&&re>0){ze=W[re-1],Qe=x,Xi(u);return}we<jg&&re<W.length-1&&(ze=W[re+1],Qe=x,Xi(u))}}function qi(c=0,u=0){if(!fe)return;const x=Number(c)||Be.value?.width||1,O=Number(u)||Be.value?.height||1;fe.fov=rt(L.value),fe.aspect=x/Math.max(1,O),fe.updateProjectionMatrix()}function ml(c=d){const u=c?.getVideoTracks?.()?.[0],x=u?.getSettings?.()||{},O=Number(x.width)||Re.value?.videoWidth||0,W=Number(x.height)||Re.value?.videoHeight||0,ne=Number(x.frameRate)||0,re=Number(x.aspectRatio)||(O&&W?O/W:0),ue=x.facingMode||"",Ne=x.resizeMode||"";b.value={width:O,height:W,frameRate:ne,aspectRatio:re,facingMode:ue,resizeMode:Ne},le.track("camera","stream_settings_resolved",{settings:b.value,constraints:u?.getConstraints?.()||{},capabilities:u?.getCapabilities?.()||{},previewMirrored:on.value,physicalMobile:i,physicalMobileReason:t.reason,ipadLike:t.isIPadLike,requestedOrientation:Xe?.key||"",requestedAspectRatio:Xe?.aspectRatio||0}),u&&console.info("[VideoRA] Active camera track",{settings:x,constraints:u.getConstraints?.()||{}})}async function _l(c){if(!i)return;const u=c?.getVideoTracks?.()?.[0],x=u?.getCapabilities?.()||{},O=Number(x?.zoom?.min);if(!(!u||!Number.isFinite(O)))try{await u.applyConstraints({advanced:[{zoom:O}]})}catch(W){console.warn("[VideoRA] Não foi possível aplicar o zoom mínimo no celular.",W)}}function Ra(){const c=Re.value?.srcObject||d;try{c?.getTracks?.().forEach(u=>u.stop())}catch{}try{Re.value?.pause?.()}catch{}Re.value&&(Re.value.srcObject=null),d=null,b.value={width:0,height:0,frameRate:0,aspectRatio:0,facingMode:"",resizeMode:""}}async function gl(){if(!navigator?.mediaDevices?.getUserMedia)throw new Error("getUserMedia indisponível");const c=lf(),u=ba();Xe=u,le.track("camera","orientation_profile_requested",{profile:u.key,width:u.width,height:u.height,aspectRatio:u.aspectRatio,...tn()});const x=df({deviceId:c.deviceId,facingMode:c.facingMode,width:u.width,height:u.height,mobile:i}).map(W=>!W?.video||typeof W.video!="object"?W:i?{...W,video:{...W.video,resizeMode:"none",aspectRatio:{ideal:u.aspectRatio},frameRate:{ideal:fc,max:fc}}}:{...W,video:{...W.video,frameRate:{ideal:60,max:60}}});let O=null;for(let W=0;W<x.length;W++)try{le.track("camera","get_user_media_attempt",{attempt:W+1,total:x.length,constraints:x[W]});const ne=await navigator.mediaDevices.getUserMedia(x[W]);return le.track("camera","stream_opened",{attempt:W+1}),ne}catch(ne){O=ne,le.track("camera","get_user_media_failed",{attempt:W+1,tipo:ne?.name||"Error",mensagem:ne?.message||String(ne)},"warn"),await ir(120)}throw O||new Error("Não foi possível iniciar a câmera")}function rr(c=""){const u=Mt;Mt=null,mn=!1,Zt=null,window.__vra_fl===u&&(window.__vra_fl=null,window.__vra_vf=null,window.__vra_fl_mode=null);try{u?.workerMode?c==="tracking_graph_failure"&&Ds(u):u?.close?.()}catch{}c&&le.track("mediapipe","landmarker_disposed",{reason:c},"warn")}function vl(){const c=ii;ii=null,In=null;try{c?.close?.()}catch{}}function or(){oi+=1,gi=!1,Ea=!1,vi=0,ri=0,Ma=null,Wi=null,Ta="",G.value="aguardando",ki=0;const c=xt?.visagismo;c?.rostoProbabilidades&&(c.rostoProbabilidades.value={})}async function Sl(){return ii||In||(In=(async()=>{un=un||await zi(jr.forVisionTasks(oa),Zg,"Inicialização do runtime de segmentação facial");const c=await Yc.createFromOptions(un,{baseOptions:{modelAssetPath:pc,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1});if(Rn)throw c.close?.(),new Error("Componente desmontado durante a inicialização do segmentador.");return ii=c,le.track("analysis","face_segmenter_ready",{modelPath:pc,delegate:"CPU"}),c})().catch(c=>{throw In=null,c}),In)}async function sr({forceRecreate:c=!1,preferCpu:u=!1,allowWorker:x=!0}={}){if(c&&rr("forced_recreate"),!Mt&&x&&sf()){const W=cf(),ne=performance.now();try{le.track("mediapipe","worker_initialization_started",{wasmPath:oa,modelPath:Ba,trackingMode:l.value});const re=await W.init({wasmPath:oa,modelPath:Ba,options:_i(l.value,"VIDEO"),timeoutMs:ov,delegate:u||xa?"CPU":"GPU"});return Mt=W,mn=!0,Zt="VIDEO",le.track("mediapipe","landmarker_ready",{delegate:re.delegate||W.delegate||"",executionContext:"worker",reused:!!re.reused,durationMs:Number((performance.now()-ne).toFixed(1))}),Mt}catch(re){throw Ds(W),le.captureError("mediapipe","worker_initialization_failed",re,{fallback:"camera_only"}),re.workerInitializationFailed=!0,re}}if(!Mt&&window.__vra_fl&&(Mt=window.__vra_fl,un=window.__vra_vf??un,Zt=window.__vra_fl_mode||null,le.track("mediapipe","cached_instance_reused")),Mt)if(Zt!=="VIDEO")rr("cached_non_video_instance");else return Mt;le.track("mediapipe","initialization_started",{wasmPath:oa,modelPath:Ba,trackingMode:l.value}),un=un||await zi(jr.forVisionTasks(oa),zr,"Inicialização do runtime MediaPipe"),le.track("mediapipe","wasm_fileset_ready");const O=(W,ne)=>{const re=qc.createFromOptions(un,{baseOptions:{modelAssetPath:Ba,delegate:W},..._i(l.value,"VIDEO")});return zi(re,ne,`Inicialização do FaceLandmarker (${W})`,ue=>{try{ue?.close?.()}catch{}})};if(u||xa)Mt=await O("CPU",zr),le.track("mediapipe","landmarker_ready",{delegate:"CPU"});else try{Mt=await O("GPU",Ec),le.track("mediapipe","landmarker_ready",{delegate:"GPU"})}catch(W){console.warn("[VideoRA] GPU delegate indisponível, usando CPU.",W),le.track("mediapipe","gpu_delegate_failed",{tipo:W?.name||"Error",mensagem:W?.message||String(W)},"warn"),W?.name==="TimeoutError"&&le.track("mediapipe","landmarker_initialization_timeout",{delegate:"GPU",timeoutMs:Ec},"warn"),Mt=await O("CPU",zr),le.track("mediapipe","landmarker_ready",{delegate:"CPU"})}return window.__vra_fl=Mt,window.__vra_vf=un,Zt="VIDEO",window.__vra_fl_mode="VIDEO",Mt}function xl(c){const u=String(c?.message||c||"");return/CalculatorGraph|FaceGeometryPipelineCalculator|Graph has errors|design_matrix\.norm/i.test(u)}async function Ro(c){return Hi||(Hi=(async()=>{le.captureError("mediapipe","landmarker_recovery_started",c,{consecutiveTrackingErrors:Gi}),Mi(),xa=!0,rr("tracking_graph_failure"),await sr({preferCpu:!0,allowWorker:!1}),Gi=0,Se=-1,z&&d?.active&&yo(),le.track("mediapipe","landmarker_recovery_completed",{delegate:"CPU"})})().catch(u=>{le.captureError("mediapipe","landmarker_recovery_failed",u)}).finally(()=>{Hi=null}),Hi)}async function cr(c){const u=Kt(c);if(l.value=u,xo(u),Xi(u),!Mt)return l.value;H=!0;try{await Mt.setOptions(_i(u,"VIDEO"))}finally{H=!1}return l.value}function wo(c="orientation_recalibrated"){return Mt?_n||(_n=(async()=>(H=!0,await Mt.setOptions(_i(l.value,"VIDEO")),Se=-1,le.track("mediapipe","temporal_tracking_reset",{reason:c,runningMode:"VIDEO"}),!0))().catch(u=>(le.captureError("mediapipe","temporal_tracking_reset_failed",u,{reason:c}),queueMicrotask(()=>{Ro(u)}),!1)).finally(()=>{H=!1,_n=null}),_n):Promise.resolve(!1)}function lr(){zn&&(cancelAnimationFrame(zn),zn=0)}function Ei(){Xn&&(cancelAnimationFrame(Xn),Xn=0)}function El(){Ei();const c=()=>{Re.value?.readyState>=2&&xi(),Xn=requestAnimationFrame(c)};Xn=requestAnimationFrame(c),le.track("camera","preview_loop_started",{phase:"model_initialization"})}function Mi(){Tn&&(cancelAnimationFrame(Tn),Tn=0),qn&&Re.value?.cancelVideoFrameCallback&&(Re.value.cancelVideoFrameCallback(qn),qn=0),H=!1,V=-1,we=0}async function Co(c,u){if(!Mt||H||_n)return;H=!0;const x=performance.now(),O=c?.width||0,W=c?.height||0;try{if(Zt!=="VIDEO")return;const ne=mn?await Mt.detectForVideo(c,u):null,re=ne?.result||Mt.detectForVideo(c,u);Gi=0,Ue=mn&&Number(ne?.inferenceMs)||0,P.value=performance.now()-x,Sn+=1,hl(P.value),nd(re),xt?.app?.metricas?.value&&Al(c),Ml()}catch(ne){ho+=1,Gi+=1;const re=performance.now();re-mo>=5e3?(le.captureError("tracking","detect_for_video_failed",ne,{timestampMs:u,processedFrames:Sn,suppressedSinceLastReport:er,inputWidth:O,inputHeight:W,videoTime:Re.value?.currentTime||0}),mo=re,er=0):er+=1,Gi>=3&&xl(ne)&&queueMicrotask(()=>{Ro(ne)})}finally{H=!1}}function dr(c){const u=Number.isFinite(c)?c:performance.now(),x=u>Se?u:Se+1;return Se=x,x}function Ml(){const c=performance.now();c-go<15e3||(go=c,le.track("tracking","metrics",{processedFrames:Sn,detectedFrames:po,trackingErrors:ho,latencyMs:Number(P.value.toFixed(2)),workerInferenceMs:Number(Ue.toFixed(2)),executionContext:mn?"worker":"main_thread",trackingMode:l.value,inputWidth:Yn,inputHeight:Fn,camera:b.value,pose:{yawDeg:Number(m.value.toFixed(2)),pitchDeg:Number(N.value.toFixed(2)),rollDeg:Number(f.value.toFixed(2)),rawRollDeg:Number(tr.toFixed(2)),renderedRollDeg:Number(nr.toFixed(2))},orientation:{requested:Xe?.key||"",screenType:window.screen?.orientation?.type||"",screenAngle:window.screen?.orientation?.angle||0,contentRotationDeg:He,rawContentRotationDeg:Je,frameNormalized:jt,processingRotationDeg:en,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,resolverPhase:vn.snapshot().phase,detectorMode:Zt||""},analysis:{faceShape:G.value,faceShapePoseQuality:Number(ki.toFixed(3)),orientationNormalized:jt}}))}async function Po(){if(lo)return!0;const c=await bl();return c?(ga||(ga=c.nets.tinyFaceDetector.loadFromUri(Sc).then(()=>(lo=!0,!0)).catch(u=>(console.warn("[VideoRA] Não foi possível carregar o detector facial leve.",u),ga=null,!1))),ga):!1}async function Tl(){if(uo)return!0;const c=await Po(),u=globalThis.faceapi;return!c||!u?!1:(va||(va=u.nets.ageGenderNet.loadFromUri(Sc).then(()=>(uo=!0,!0)).catch(x=>(console.warn("[VideoRA] Não foi possível carregar o modelo de gênero.",x),k.value="Indisponível",q.value=0,va=null,!1))),va)}function bl(){return globalThis.faceapi?Promise.resolve(globalThis.faceapi):Sa||(Sa=new Promise(c=>{const u=document.querySelector(`script[src="${xc}"]`);if(u){u.addEventListener("load",()=>c(globalThis.faceapi||null),{once:!0}),u.addEventListener("error",()=>c(null),{once:!0});return}const x=document.createElement("script");x.src=xc,x.async=!0,x.onload=()=>c(globalThis.faceapi||null),x.onerror=()=>{console.warn("[VideoRA] Não foi possível carregar face-api.js."),c(null)},document.head.appendChild(x)}),Sa)}function Al(c){if(!xt?.app?.metricas?.value||Ja)return;const u=performance.now();u-fo<dv||(fo=u,!(!c?.width||!c?.height||!ma)&&(Un.width=c.width,Un.height=c.height,ma.drawImage(c,0,0,Un.width,Un.height),Ja=!0,(async()=>{try{if(!await Tl())return;const O=globalThis.faceapi;if(!O)return;const W=await O.detectSingleFace(Un,new O.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.5})).withAgeAndGender();if(!W){k.value="Não detectado",q.value=0;return}k.value=W.gender==="male"?"Masculino":"Feminino",q.value=W.genderProbability||0}catch(x){console.warn("[VideoRA] Erro na predição de gênero.",x),k.value="Indisponível",q.value=0}finally{Ja=!1}})()))}function Rl(){const c=()=>{if(Tn=requestAnimationFrame(c),!(Re.value?.readyState>=2))return;const u=Re.value.currentTime;u!==V&&(V=u,xi(),!H&&(Fi.drawImage(Be.value,0,0,Yn,Fn),Co(bn,dr(performance.now()))))};Tn=requestAnimationFrame(c)}function yo(){if(Mi(),Xi(l.value),typeof Re.value?.requestVideoFrameCallback=="function"){const c=(u,x)=>{if(!z||(qn=Re.value.requestVideoFrameCallback(c),!(Re.value?.readyState>=2))||(xi(),H))return;Fi.drawImage(Be.value,0,0,Yn,Fn);const O=dr(u);Pe||(Pe=!0,le.track("tracking","timestamp_source_selected",{callbackNow:Number.isFinite(u)?Number(u.toFixed(3)):null,mediaTimeMs:Number.isFinite(x?.mediaTime)?Number((x.mediaTime*1e3).toFixed(3)):null,timestampMs:Number(O.toFixed(3)),source:"callback_now_monotonic"})),Co(bn,O)};qn=Re.value.requestVideoFrameCallback(c);return}Rl()}const Qt={collecting:S.autoCalibrate,samples:[],ipd0Ndc:null};function wl(c){const u=[...c].sort((O,W)=>O-W),x=u.length;return x?x&1?u[(x-1)/2]:(u[x/2-1]+u[x/2])*.5:0}const xt=Id()?.appContext?.config?.globalProperties?.$db,ur=Number(xt?.visagismo?.armacaoEscala?.value)||0;ur&&ur!==Number(S.initialScaleInIPD)&&(C.value=ur,g=!0);const fr=_t(!1),pr=_t(!1),Lo=_t(!1);let rn=null;const Cl=_t(!0),Ti=na(()=>xt?.visagismo?.molduraRosto?.value??Lo.value?!1:xt?.visagismo?.armacaoVisivel?.value!==void 0?xt.visagismo.armacaoVisivel.value:Cl.value),on=na(()=>!!S.previewMirror);Ji(on,(c,u)=>{const x=He;He=Oa(Je,c),Kn.reset(He,performance.now()),bi(),le.track("camera","preview_mirror_changed",{mirrored:c,previous:!!u,facingMode:b.value.facingMode||"",rawRotation:Je,previousDisplayRotation:x,displayRotation:He})},{immediate:!0}),Ji(Ti,c=>{at&&(at.visible=!!c&&!!Ae?.visible),Ke&&(Ke.visible=!!c&&!!Ae?.visible),_r(m.value||0,f.value||0)},{immediate:!0}),Ji(()=>S.developerMode,c=>{p.value=!!c,td()}),Ji(()=>S.trackingQuality,c=>{cr(c)}),Ji(L,()=>{qi()});function No(){le.track("ui","landmarks_toggled"),xt?.visagismo?xt.visagismo.marcadores.value=!xt.visagismo.marcadores.value:fr.value=!fr.value}function Do(){le.track("ui","proportions_toggled"),xt?.visagismo?xt.visagismo.proporcoes.value=!xt.visagismo.proporcoes.value:pr.value=!pr.value}function Pl(){const c=l.value==="high"?"balanced":"high";cr(c)}function hr(c){return new nn(c.x*2-1,1-c.y*2)}function yl(c){const u=c[S.anchorUpperIdx]||c[9],x=c[S.anchorLowerIdx]||c[1],O=Math.max(0,Math.min(1,S.anchorBlendT));return hr({x:u.x*(1-O)+x.x*O,y:u.y*(1-O)+x.y*O})}function Ll(c){const u=new Ie(c.x,c.y,-1).unproject(fe),x=new Ie(c.x,c.y,1).unproject(fe);return{origin:fe.position.clone(),dir:x.sub(u).normalize()}}function mr(c,u){const{origin:x,dir:O}=Ll(c);return x.add(O.multiplyScalar(u))}function Nl(c,u,x,O){return Gt.set(c,u,-1).unproject(fe),ft.set(c,u,1).unproject(fe),O.copy(fe.position).add(ft.sub(Gt).normalize().multiplyScalar(x))}function Dl(){const c=te.value?.width||0,u=te.value?.height||0;return c>0&&u>c?u/c:1}function Il(c,u=new Ie){const x=Dl();return u.set((c.x??.5)-.5,(.5-(c.y??.5))*x,-(c.z||0))}function Yi(c,u,x){x.set(0,0,0);let O=0;for(let W=0;W<u.length;W++){const ne=c[u[W]];ne&&(Il(ne,ee),x.add(ee),O+=1)}return O?x.multiplyScalar(1/O):null}function Ul(c){const u=c?.data;if(!Array.isArray(u)||u.length!==16)return null;Ge.fromArray(u),Ge.decompose($e,he,D);const x=he.x+he.y+he.z+he.w;return Number.isFinite(x)?he.clone().normalize():null}function Fl(c,u=null){const x=Yi(c,o,X),O=Yi(c,v,j),W=Yi(c,R,de),ne=Yi(c,_,_e),re=Yi(c,E,Z);if(!x||!O||!W||!ne||!re)return new li;ve.subVectors(O,x).normalize(),me.subVectors(W,ne).normalize(),De.crossVectors(ve,me).normalize(),ge.addVectors(x,O).multiplyScalar(.5),Fe.subVectors(re,ge).normalize(),De.dot(Fe)<0&&De.negate(),me.crossVectors(De,ve).normalize();const ue=new li().setFromRotationMatrix(Ge.makeBasis(ve,me,De)),Ne=Ul(u);if(!Ne)return ue;const be=bt.radToDeg(ue.angleTo(Ne));return!Number.isFinite(be)||be>rv?ue:ue.slerp(Ne,av)}function Ol(c,u){const x=c.clone().applyMatrix4(fe.matrixWorldInverse);return x.z+=u,x.applyMatrix4(fe.matrixWorld)}function Bl(c,u){return c.applyMatrix4(fe.matrixWorldInverse),c.z+=u,c.applyMatrix4(fe.matrixWorld)}function Io(c,u){return u>.76*c+5.8}function _r(c,u){if(!ke&&!Ze)return;const x=!!Ti.value&&!!Ae?.visible,O=Io(u,c),W=Io(-u,-c);ke&&(ke.visible=x&&O),Ze&&(Ze.visible=x&&W)}function wa(){const c=te.value;if(!c)return;c.getContext("2d").clearRect(0,0,c.width,c.height)}function Gl(c){const u=te.value;if(!u)return;const x=u.getContext("2d"),O=u.width,W=u.height;x.fillStyle="cyan";for(let ne=0;ne<c.length;ne++){const re=c[ne].x*O,ue=c[ne].y*W;x.beginPath(),x.arc(re,ue,1,0,Math.PI*2),x.fill()}}function Hl(c){const u=te.value;if(!u)return;const x=u.getContext("2d"),O=u.width,W=u.height,ne=uc(c,O,W);if(!ne)return;const re=performance.now();re-vo>=1e4&&(vo=re,le.track("analysis","facial_thirds_geometry",{percentages:ne.percentages.map(Rt=>Number(Rt.toFixed(2))),faceAxisAngleDeg:Number(bt.radToDeg(ne.frame.horizontalAngleRad).toFixed(2)),streamWidth:O,streamHeight:W,rawContentRotationDeg:Je,displayContentRotationDeg:He}));const ue=getComputedStyle(document.documentElement),Ne=ue.getPropertyValue("--primary").trim()||"#1eebe2",be=ue.getPropertyValue("--primary").trim()||"#1eebe2";x.save(),x.strokeStyle=Ne,x.lineWidth=1.5,ne.lines.forEach(Rt=>{x.beginPath(),x.moveTo(Rt.start.x,Rt.start.y),x.lineTo(Rt.end.x,Rt.end.y),x.stroke()}),x.restore();const qe=19,tt=8,lt=7;x.font=`bold ${qe}px monospace`;const Ct=Rt=>({x:on.value?O-Rt.x:Rt.x,y:Rt.y});ne.percentages.forEach((Rt,Vt)=>{const Ft=`${Rt.toFixed(0)}%`,kt=x.measureText(Ft).width+tt*2,It=qe+lt*2,Nt=[ne.horizontalStart,ne.horizontalEnd].map($t=>ne.frame.pointAt($t,ne.midLevels[Vt])),Pt=Ct(Nt[0]).x>Ct(Nt[1]).x?Nt[0]:Nt[1];x.save(),x.translate(Pt.x,Pt.y),on.value&&x.scale(-1,1),x.translate(8,-It/2),x.fillStyle="rgba(0, 0, 0, 0.72)",x.roundRect?(x.beginPath(),x.roundRect(0,0,kt,It,9),x.fill()):x.fillRect(0,0,kt,It),x.fillStyle=be,x.textBaseline="middle",x.fillText(Ft,tt,It/2),x.restore()})}function Vl(c,u,x,O){if(!c)return!1;const W=c[10],ne=c[152],re=(W.x+ne.x)/2*u-O.centerX,ue=(W.y+ne.y)/2*x-O.centerY,be=Math.hypot((ne.x-W.x)*u,(ne.y-W.y)*x)/(O.radiusY*2);return(re/O.radiusX)**2+(ue/O.radiusY)**2<=.3&&be>=.7&&be<=1.05}function Uo(c){const u=te.value;if(!u)return;const x=u.getContext("2d"),O=u.width,W=u.height,ne=W*.22,re=Math.min(ne*.72,O*.4),ue={centerX:O/2,centerY:W/2,radiusX:re,radiusY:ne};x.clearRect(0,0,O,W),x.fillStyle="rgba(0, 0, 0, 0.58)",x.fillRect(0,0,O,W),x.globalCompositeOperation="destination-out",x.beginPath(),x.ellipse(ue.centerX,ue.centerY,ue.radiusX,ue.radiusY,0,0,Math.PI*2),x.fill(),x.globalCompositeOperation="source-over";const be=Vl(c,O,W,ue)?"#4CAF50":"rgba(0, 188, 212, 0.92)";x.strokeStyle=be,x.lineWidth=6,x.beginPath(),x.ellipse(ue.centerX,ue.centerY,ue.radiusX,ue.radiusY,0,0,Math.PI*2),x.stroke(),kl(x,ue,be)}function kl(c,u,x){const W=[{angulo:-Math.PI/2,nx:0,ny:-1},{angulo:Math.PI/2,nx:0,ny:1},{angulo:Math.PI,nx:-1,ny:0},{angulo:0,nx:1,ny:0}];c.strokeStyle=x,c.lineWidth=3,c.lineCap="round",W.forEach(({angulo:ne,nx:re,ny:ue})=>{const Ne=u.centerX+u.radiusX*Math.cos(ne),be=u.centerY+u.radiusY*Math.sin(ne);c.beginPath(),c.moveTo(Ne-re*18/2,be-ue*18/2),c.lineTo(Ne+re*18/2,be+ue*18/2),c.stroke()})}function Wl(c){const u=te.value;if(!u)return;const x=xt?.visagismo?.rosto.value||"redondo",O=Rg(x);if(!O)return;const W=bg[x]||{h:360},ne=u.getContext("2d"),re=u.width,ue=u.height;let Ne=re/2,be=ue*.45,qe=Math.min(re,ue)*.8/W.h,tt=0;if(c&&c.length>0){const Ct=uc(c,re,ue);if(!Ct)return;const Rt=Ct.levels[0],Vt=Ct.levels[3],Ft=Math.max(.06*Math.min(re,ue),Vt-Rt),Jt=Ct.frame.pointAt(0,(Rt+Vt)/2),It={cx:Jt.x,cy:Jt.y,scale:Ft*1.12/W.h,rot:Ct.frame.horizontalAngleRad};rn?(rn.cx+=(It.cx-rn.cx)*.6,rn.cy+=(It.cy-rn.cy)*.6,rn.scale+=(It.scale-rn.scale)*.6,rn.rot+=(It.rot-rn.rot)*.6):rn=It;const Nt=rn;Ne=Nt.cx,be=Nt.cy,qe=Nt.scale,tt=Nt.rot}const lt=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#18ffff";ne.save(),ne.fillStyle="rgba(0, 0, 0, 0.58)",ne.fillRect(0,0,re,ue),ne.globalCompositeOperation="destination-out",ne.translate(Ne,be),ne.rotate(tt),ne.scale(qe,qe),ne.translate(-150,-210),ne.fill(O),ne.restore(),ne.save(),ne.translate(Ne,be),ne.rotate(tt),ne.scale(qe,qe),ne.translate(-150,-210),ne.strokeStyle=lt,ne.lineWidth=4/qe,ne.stroke(O),ne.restore()}function zl(c){const x=bt.clamp(Le(S.smoothing,1),0,1);!Ee||x===1?(Ae.position.copy(c.pos),Ae.quaternion.copy(c.quat),Ae.scale.setScalar(c.scale)):(Ae.position.lerpVectors(pe.pos,c.pos,x),Ae.quaternion.slerpQuaternions(pe.quat,c.quat,x),Ae.scale.setScalar(pe.scale+(c.scale-pe.scale)*x)),pe.pos.copy(Ae.position),pe.quat.copy(Ae.quaternion),pe.scale=Ae.scale.x,Ee=!0}function Xl(){const c=globalThis?.FACEMESH_TESSELATION;if(!Array.isArray(c)||!c.length)return null;const u=[];for(let x=0;x+2<c.length;x+=3){const O=c[x],W=c[x+1];if(!Array.isArray(O)||!Array.isArray(W))continue;const ne=O[0],re=O[1],ue=W[1];[ne,re,ue].every(Number.isInteger)&&u.push(ne,re,ue)}return u.length?new Uint16Array(u):null}function Fo(){if(!Ae||Ke)return;const c=Xl();if(!c)return;je=new hi,ut=new Float32Array(mc*3),je.setAttribute("position",new Jn(ut,3)),je.setIndex(new Jn(c,1));const u=new Xc({side:xn});u.colorWrite=!1,u.depthTest=!0,u.depthWrite=!0,Ke=new Mn(je,u),Ke.renderOrder=5,Ke.frustumCulled=!1,Ke.visible=!1,Ae.add(Ke)}function ql(c,{dEst:u,ipdWorld:x,anchorZ:O,yawDeg:W}){if(!Ti.value){Ke&&(Ke.visible=!1);return}if(Fo(),!Ke||!je||!ut||!Ae)return;const ne=c[33],re=c[263],ue=c[1];if(!ne||!re)return;const Ne=Math.max(1e-6,Math.hypot((re.x??0)-(ne.x??0),(re.y??0)-(ne.y??0))),be=x/Ne,qe=Math.min(mc,c.length),tt=Math.abs(W||0),lt=bt.clamp((tt-vc)/Math.max(1,iv-vc),0,1),Ct=bt.lerp(Jg,.64,lt),Rt=bt.lerp(ev,.03,lt),Vt=bt.lerp(tv,.024,lt),Ft=bt.lerp(nv,.072,lt),Jt=x*bt.lerp(_c,_c+.05,lt),kt=x*bt.lerp(gc,gc+.2,lt),It=0;Ae.updateMatrixWorld(!0),B.copy(Ae.matrixWorld).invert();for(let Nt=0;Nt<qe;Nt++){const Pt=c[Nt],$t=Pt.x*2-1,wn=1-Pt.y*2,$i=Math.hypot((Pt.x??0)-(ue?.x??0),((Pt.y??0)-(ue?.y??0))*1.15),Cn=1-bt.clamp(($i-Vt)/Math.max(1e-6,Ft-Vt),0,1),jn=bt.lerp(Rt,Ct,Cn),Zi=bt.lerp(kt,Jt,Cn),Bn=((Pt.z??O)-O)*be*jn-Zi-It;Nl($t,wn,u,M),Bl(M,Bn),s.copy(M).applyMatrix4(B);const Pn=Nt*3;ut[Pn]=s.x,ut[Pn+1]=s.y,ut[Pn+2]=s.z}je.attributes.position.needsUpdate=!0,je.computeBoundingSphere(),Ke.visible=!!Ae.visible&&!!Ti.value}function Yl(c,u,x){if(!c||Rn||u!==oi)return;Wi=c,Ta=x,Ea=!0,G.value=c.appLabel||"indefinido",ki=Number(c.poseQuality)||0;const O=xt?.visagismo;O&&(!O.molduraRosto?.value&&!O.rostoFixado?.value&&Object.prototype.hasOwnProperty.call(O.rostos,G.value)&&(O.rosto.value=G.value),O.rostoProbabilidades.value=Sg(c.appProbabilities,O.rostos)),le.track("analysis","face_shape_segmented",{version:c.version,faceShape:c.appLabel,confidence:Number(c.confidence.toFixed(4)),poseQuality:Number(c.poseQuality.toFixed(4)),attempts:vi,ratios:Object.fromEntries(Object.entries(c.ratios).map(([W,ne])=>[W,Number(ne.toFixed(4))]))})}async function Kl(c,u,x,O){if(O===oi){vi+=1;try{const W=await Sl();if(Rn||!W||O!==oi)return;let ne=null,re="";if(W.segment(c,ue=>{try{const Ne=ue.confidenceMasks?.[nl];if(!Ne)throw new Error("O segmentador não retornou a classe 3 face-skin.");const be=Ne.getAsFloat32Array();ne=rl({landmarks:u,faceSkinMask:be,width:Ne.width,height:Ne.height,threshold:.35,poseQuality:x}),re=ol(c,ne,be,Ne.width,Ne.height)}finally{ue.close?.()}}),!ne)throw new Error("A segmentação facial terminou sem resultado.");Yl(ne,O,re)}catch(W){le.captureError("analysis","face_shape_segmentation_failed",W,{attempt:vi,maxAttempts:Wr}),console.warn("[VideoRA] Falha na análise segmentada do formato do rosto.",W),vi>=Wr?(Ea=!0,G.value="indefinido"):ri=0}finally{O===oi&&(gi=!1)}}}function jl(c){if(Ea||gi||vi>=Wr||!Be.value?.width||!Be.value?.height||Sn<45||we>55)return;const u=al(c,{width:Be.value.width,height:Be.value.height},Ma);if(Ma=c.map(be=>({x:be.x,y:be.y,z:be.z||0})),ki=u.poseQuality||0,!u.eligible){ri=Math.max(0,ri-2);return}if(ri+=1,ri<hc)return;const x=Be.value,O=Math.min(1,Qg/Math.max(x.width,x.height)),W=document.createElement("canvas");W.width=Math.max(1,Math.round(x.width*O)),W.height=Math.max(1,Math.round(x.height*O)),W.getContext("2d",{alpha:!1}).drawImage(x,0,0,W.width,W.height);const ne=Ma,re=u.poseQuality,ue=oi;gi=!0;const Ne=()=>{if(Rn){gi=!1;return}ue===oi&&Kl(W,ne,re,ue)};typeof window.requestIdleCallback=="function"?window.requestIdleCallback(Ne,{timeout:500}):window.setTimeout(Ne,0)}function Oo(){xe+=1,!(xe<2)&&(Ee=!1,A.value={x:0,y:0},m.value=0,N.value=0,f.value=0,Wi||(G.value="aguardando",ki=0),tr=0,nr=0,k.value="Aguardando",q.value=0,Ae&&(Ae.visible=!1),Ke&&(Ke.visible=!1),wa(),xt?.visagismo?.calculandoRosto.value&&Uo(null))}function $l(c,u=null){if(!Ae||!at)return;const x=c[33],O=c[263],W=c[1];if(!x||!O||!W)return;const re=Fl(c,u).clone().multiply(ae),ue=hr(x),Ne=hr(O),be=Math.max(1e-6,Math.hypot(Ne.x-ue.x,Ne.y-ue.y));Qt.collecting&&(Qt.samples.push(be),Qt.samples.length>=Math.max(3,S.calibFrames|0)&&(Qt.ipd0Ndc=wl(Qt.samples),Qt.collecting=!1,y||(T.value=S.initialDepthOffset),g||(C.value=S.initialScaleInIPD||S.targetWidthInIPD)));const qe=Qt.ipd0Ndc||be,tt=fv*(qe/be),lt=mr(yl(c),tt),Ct=Ol(lt,T.value),Rt=c[S.anchorUpperIdx]||c[9],Vt=c[S.anchorLowerIdx]||c[1],Ft=Math.max(0,Math.min(1,S.anchorBlendT)),Jt=(Rt.z??0)*(1-Ft)+(Vt.z??0)*Ft,kt=mr(ue,tt),It=mr(Ne,tt),Nt=Math.max(1e-6,kt.distanceTo(It)),Pt=Nt/Yt*(Number(C.value)||1),$t=new Ia().setFromQuaternion(re,"YXZ");let wn=bt.radToDeg($t.y),$i=bt.radToDeg($t.x),Cn=bt.radToDeg($t.z);on.value&&(wn=-wn,Cn=-Cn),tr=Cn,m.value=wn,N.value=$i,f.value=Lg(Cn,0);const jn=jt&&!Q.value;jn&&jl(c);const Bn=St(S.rotGlobalGain,1),Er=ae.clone().clone().slerp(re,Bn);let gd=Le(S.yawRotGain,1),vd=Le(S.pitchGain,1),Sd=Le(S.rollGain,1);const Qi=new Ia().setFromQuaternion(Er,"YXZ");Qi.x*=vd,Qi.y*=gd,Qi.z*=Sd,nr=bt.radToDeg(Qi.z),Er.setFromEuler(Qi),zl({pos:Ct,quat:Er,scale:Pt}),Ae.visible=!0;const La=te.value;if(La){const zo=(W.x??.5)*La.width,Ed=(W.y??.5)*La.height;A.value={x:Math.round(on.value?La.width-zo:zo),y:Math.round(Ed)}}wa();const xd=xt?.visagismo?!!xt.visagismo.marcadores.value:fr.value,ko=xt?.visagismo?!!xt.visagismo.proporcoes.value:pr.value,Wo=xt?.visagismo?!!xt.visagismo.molduraRosto.value:Lo.value;xd&&Gl(c),jn&&ko&&!Wo&&Hl(c),jn&&Wo&&!ko&&Wl(c),xt?.visagismo?.calculandoRosto.value&&Uo(c),_r(m.value||0,f.value||0),ql(c,{dEst:tt,ipdWorld:Nt,anchorZ:Jt,yawDeg:wn})}async function Zl(c,u){We=new tf,fe=new da(rt(L.value),c/u,.01,1e3),fe.position.set(0,0,2),Me=new sg({canvas:Y.value,alpha:!0,antialias:!0,powerPreference:"high-performance"}),Me.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Me.outputColorSpace=no,Me.setSize(c,u,!1);const x=new nf(16777215,1);x.position.set(0,0,2),We.add(x,new af(16777215,.6)),Ae=new rf,Ae.visible=!1,We.add(Ae),Fo(),qi(c,u)}function Ql(){lr();const c=()=>{Me&&We&&fe&&Me.render(We,fe),zn=requestAnimationFrame(c)};zn=requestAnimationFrame(c)}function Ca(c){if(!c)return sa;let u=c;return/\.stl$/i.test(u)||(u=`/models3d/${u}.stl`),u.startsWith("/")||(u="/"+u),u}function Jl(c){return c?(c.split("/").pop()||"").replace(/\.stl$/i,""):""}function ed(c){const u=Jl(c);return J[u]||null}function Pa(c){return new of({color:new At(typeof c=="string"?c:c||"#000"),shininess:100,side:xn,depthTest:!0,depthWrite:!0})}async function gr(c,u,{center:x=!1,preRotate:O=!0}={}){return new Promise((W,ne)=>{new cg().load(c,re=>{if(re.computeBoundingBox(),re.computeVertexNormals(),x){const be=new Ie;re.boundingBox.getCenter(be),re.translate(-be.x,-be.y,-be.z),re.computeBoundingBox()}const ue=u||Pa(S.initialColor),Ne=new Mn(re,ue);if(O){const be=bt.degToRad,qe=h;Ne.setRotationFromEuler(new Ia(be(qe.x),be(qe.y),be(qe.z),"YXZ"))}W({mesh:Ne,geo:re})},void 0,re=>ne(re))})}function ci(c,{disposeMaterial:u=!1}={}){if(c)try{Ae?.remove(c),c.geometry?.dispose?.(),u&&c.material?.dispose?.()}catch{}}function ya(){vt++,lr(),ci(ke),ci(Ze),ci(at),ci(Ke,{disposeMaterial:!0}),ke=null,Ze=null,at=null,Ke=null,je=null,ut=null;try{ct?.dispose?.()}catch{}ct=null;try{Me?.dispose?.()}catch{}Me=null,We=null,fe=null,Ae=null,Ee=!1}function Bo(c){c&&(c.position.copy(at.position),c.quaternion.copy(at.quaternion),c.renderOrder=10,c.visible=!!Ti.value)}async function vr(c){const u=++vt;ci(ke),ci(Ze),ci(at),ke=null,Ze=null,at=null,ht.set(0,0,0),ct=ct||Pa(S.initialColor);const x=Ca(c||sa);I=x;const{mesh:O,geo:W}=await gr(x,ct,{center:!1,preRotate:!0});if(u!==vt||!Ae)return;W.computeBoundingBox();const ne=new Ie;W.boundingBox.getCenter(ne),W.translate(-ne.x,-ne.y,-ne.z),W.computeBoundingBox(),ht.copy(ne);const re=new Ie;W.boundingBox.getSize(re),Yt=Math.max(1e-6,re.x),O.position.set(-(re.x*S.anchorFracX)+re.x*S.localOffXFrac,-(re.y*S.anchorFracY)+re.x*S.localOffYFrac,-(re.z*S.anchorFracZ)+re.x*S.localOffZFrac),O.renderOrder=10,O.visible=!!Ti.value,at=O,Ae.add(at);const ue=ed(x);if(!ue)return;const{mesh:Ne}=await gr(ue.left,ct,{center:!1,preRotate:!0}),{mesh:be}=await gr(ue.right,ct,{center:!1,preRotate:!0});if(u!==vt||!Ae||!at)return;Ne.geometry.translate(-ht.x,-ht.y,-ht.z),be.geometry.translate(-ht.x,-ht.y,-ht.z),Bo(Ne),Bo(be);const qe=bt.degToRad(Number(S.hastesOpenDeg)||0),tt=new Ie(0,1,0).applyQuaternion(at.quaternion);function lt(It,Nt){It.computeBoundingBox();const Pt=It.boundingBox,$t=It.attributes.position,$i=(Pt.max.x-Pt.min.x)*.04,Cn=Nt?Pt.max.x:Pt.min.x;let jn=0,Zi=0,Bn=0;for(let Pn=0;Pn<$t.count;Pn++)Math.abs($t.getX(Pn)-Cn)<$i&&(jn+=$t.getY(Pn),Zi+=$t.getZ(Pn),Bn++);return new Ie(Cn,Bn>0?jn/Bn:(Pt.min.y+Pt.max.y)/2,Bn>0?Zi/Bn:(Pt.min.z+Pt.max.z)/2)}const Ct=lt(Ne.geometry,ue.leftMaxX??!0),Rt=lt(be.geometry,ue.rightMaxX??!1),Vt=Ct.clone().applyQuaternion(Ne.quaternion).add(Ne.position),Ft=Rt.clone().applyQuaternion(be.quaternion).add(be.position),Jt=new li().setFromAxisAngle(tt,-qe),kt=new li().setFromAxisAngle(tt,qe);Ne.position.sub(Vt).applyQuaternion(Jt).add(Vt),Ne.quaternion.premultiply(Jt),be.position.sub(Ft).applyQuaternion(kt).add(Ft),be.quaternion.premultiply(kt),ke=Ne,Ze=be,Ae.add(ke),Ae.add(Ze),_r(m.value||0,f.value||0)}async function td(){if(!Ae)return;const c=I||Ca(S.initialModel)||sa;await vr(c)}let Ki;async function ji(){return w||(z&&d?.active?!0:(w=(async()=>{const c=performance.now();le.track("app","ar_start_requested",{physicalMobile:i,physicalMobileReason:t.reason,ipadLike:t.isIPadLike,mobileBehavior:r,trackingMode:l.value}),Oe();const u=I,x=ct?.color?`#${ct.color.getHexString()}`:"";Mi(),Ei(),_n&&await _n,lr(),Ki?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),Ra(),ya(),He=0,Je=0,en=0,qt=[],jt=!1,Kn.reset(0),vn.stop(),or();const O=await gl();await _l(O);const W=Re.value;if(Rn||!W)return O.getTracks().forEach(tt=>tt.stop()),le.track("camera","startup_cancelled",{reason:Rn?"component_unmounted":"video_element_unavailable"},"warn"),!1;if(d=O,W.srcObject=O,await new Promise(tt=>{const lt=()=>tt();W.addEventListener("loadedmetadata",lt,{once:!0}),W.readyState>=1&&(W.removeEventListener("loadedmetadata",lt),tt())}),await W.play(),await bd(),Rn||Re.value!==W)return O.getTracks().forEach(tt=>tt.stop()),le.track("camera","startup_cancelled",{reason:"view_changed"},"warn"),!1;const ne=W.videoWidth,re=W.videoHeight;ml(O),le.track("camera","video_ready",{width:ne,height:re,settings:b.value}),dl("camera_started"),El();const ue=Eo();await Zl(ue.width,ue.height),le.track("webgl","three_renderer_ready",{renderer:Me?.capabilities?{isWebGL2:Me.capabilities.isWebGL2,maxTextures:Me.capabilities.maxTextures,precision:Me.capabilities.precision}:{}}),qi(ue.width,ue.height),Ql(),x&&(ct=Pa(x));const Ne=u||(S.initialModel?Ca(S.initialModel):sa);vr(Ne).catch(tt=>(le.captureError("rendering","frame_model_load_failed",tt,{mainPath:Ne}),!1)),bi(),Ki=new ResizeObserver(()=>bi()),Ki.observe(document.documentElement),window.addEventListener("orientationchange",fn),window.addEventListener("resize",fn),window.visualViewport?.addEventListener("resize",fn),xo(l.value),Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null,xe=0;const be=sr().catch(async tt=>(le.captureError("mediapipe","cached_landmarker_rejected",tt),tt?.workerInitializationFailed?null:(xa=!0,sr({forceRecreate:!0,preferCpu:!0,allowWorker:!1})))),qe=be.then(()=>Mt?mn?fl("camera_started"):ul("camera_started"):Je).catch(tt=>(le.captureError("camera","orientation_probe_unexpected_failure",tt),Je));return await Promise.all([qe,be]),z=!0,Tt.confirm(Xe?.key||"",performance.now()),Ei(),yo(),le.track("tracking","tracking_started",{inputWidth:Yn,inputHeight:Fn,executionContext:mn?"worker":"main_thread",startupDurationMs:Number((performance.now()-c).toFixed(1)),callback:typeof Re.value?.requestVideoFrameCallback=="function"?"requestVideoFrameCallback":"requestAnimationFrame"}),fn("camera_started"),!0})().catch(c=>(z=!1,On(!1),Mi(),Ei(),Ra(),ya(),console.error("[VideoRA] Falha ao iniciar câmera:",c),le.captureError("app","ar_start_failed",c),!1)).finally(()=>{w=null}),w))}function nd(c){const u=c.faceLandmarks?.[0];if(!u){if(!jt){const O=vn.observeNoFace({processedFrames:Sn,now:performance.now()});if(O.fallback){Ao(O,"orientation_bootstrap_no_face_timeout"),Oo();return}if(O.changed){Si(O,"orientation_bootstrap_no_face");return}}Vi||(Vi=performance.now()),performance.now()-Vi>=1e4&&(le.track("tracking","face_not_detected_for_10s",{processedFrames:Sn,latencyMs:Number(P.value.toFixed(2))},"warn"),Vi=performance.now()),Oo();return}if(!jt){const O=vn.observeFace({processedFrames:Sn,now:performance.now()});if(O.fallback){Ao(O,"orientation_bootstrap_face_timeout");return}if(O.changed){Si(O,"orientation_bootstrap_face_unconfirmed");return}}if(!id(u)){if(!jt){Ae&&(Ae.visible=!1),Ke&&(Ke.visible=!1),wa();return}po+=1,Vi=0,_o||(_o=!0,le.track("tracking","first_face_detected",{processedFrames:Sn,latencyMs:Number(P.value.toFixed(2)),points:u.length})),xe=0,$l(u,c.facialTransformationMatrixes?.[0]||null)}}function id(c){const u=Ig(c,en),x=eo(u);if(!Number.isFinite(x))return!1;const O=rc(u),W=oc({calculatedRotation:O,eyeLineAngleDeg:x,activeRotation:jt?Je:null});if(W===null)return!1;const ne=Oa(W,on.value);if(jt){const be=Kn.observe(ne,performance.now()),qe={eyeLineAngleDeg:Number(x.toFixed(2)),rawObservedRotation:W,previewMirrored:on.value,previousRotation:He,candidateRotation:be.candidateRotation??ne,sampleCount:be.sampleCount||0,windowSamples:be.windowSamples||0,stableMs:Number((be.stableMs||0).toFixed(1)),confidence:Number((be.confidence||0).toFixed(3)),requestedOrientation:Xe?.key||"",streamWidth:b.value.width||0,streamHeight:b.value.height||0,screenType:window.screen?.orientation?.type||""};if(be.rejected&&(On(!1),le.track("camera","content_orientation_candidate_rejected",{...qe,candidateRotation:be.rejected.candidateRotation,sampleCount:be.rejected.sampleCount,windowSamples:be.rejected.windowSamples,stableMs:Number(be.rejected.stableMs.toFixed(1)),confidence:Number(be.rejected.confidence.toFixed(3))},"info")),be.candidateStarted&&(On(!0),le.track("camera","content_orientation_candidate_detected",qe,"info")),be.changed){On(!1),rn=null;const tt=He,lt=Je;Je=W,He=be.activeRotation,le.track("camera","content_orientation_recalibrated",{...qe,previousRawRotation:lt,rawCorrectionDeg:Je,previousRotation:tt,correctionDeg:He},"warn");const Ct=Aa("content_orientation_recalibrated");return queueMicrotask(()=>{wo("content_orientation_recalibrated")}),To(Je,Re.value?.videoWidth||0,Re.value?.videoHeight||0),si("camera_content_recalibrated"),Ct}return!1}if(qt.push(W),qt.length<10)return!1;qt=qt.slice(-12);const re=yg(qt,{minimumSamples:10,requiredRatio:.9});if(re===null)return!1;const ue=Je;Je=re,He=Oa(Je,on.value),jt=!0,Kn.reset(He,performance.now()),pl(),le.track("camera","content_orientation_resolved",{eyeLineAngleDeg:Number(x.toFixed(2)),sampleCount:qt.length,rawCorrectionDeg:Je,previewMirrored:on.value,correctionDeg:He,requestedOrientation:Xe?.key||"",streamWidth:b.value.width||0,streamHeight:b.value.height||0,screenType:window.screen?.orientation?.type||""},He?"warn":"info");const Ne=Aa("content_orientation_resolved");return si("camera_content_resolved"),Ne||ue!==Je}function bi(){const c=Number(st.value?.dataset?.nw||0),u=Number(st.value?.dataset?.nh||0);if(!c||!u)return;const x=window.innerWidth,O=window.innerHeight,W=Math.max(x/c,O/u);st.value.style.transform=`translate(-50%, -50%) scale(${W})`}function ad(){Je=0,He=0,qt=[],jt=!1,rn=null,On(!1),Kn.reset(0),vn.stop(),Aa("content_orientation_reset"),si("camera_content_reset")}function rd(c="manual"){jt&&(Kn.reset(He,performance.now()),le.track("camera","content_orientation_watchdog_rearmed",{reason:c,rawCorrectionDeg:Je,correctionDeg:He,requestedOrientation:Xe?.key||"",screenType:window.screen?.orientation?.type||"",...tn()}))}function Sr(c="viewport_changed",u=500){Ut&&window.clearTimeout(Ut),Ut=window.setTimeout(()=>{Ut=0,od(c)},u)}async function od(c){if(Rn||document.visibilityState!=="visible")return;const u=tn(),x=ba(),O=Tt.observe({key:x.key,width:u.innerWidth,height:u.innerHeight,now:performance.now()});if(O.pending){Sr("viewport_stability_pending",250);return}if(!(An||!z)){if(!O.confirmed||x.key===Xe?.key){bi();return}An=!0,Tt.confirm(x.key,performance.now()),ad(),le.track("camera","orientation_restart_started",{reason:c,previous:Xe?.key||"",current:x.key,stableMs:O.stableMs,stabilitySamples:O.samples,...u});try{await w,z=!1,w=null;const W=await ji();le.track("camera","orientation_restart_completed",{orientation:Xe?.key||"",restarted:!!W,...tn()})}catch(W){le.captureError("camera","orientation_restart_failed",W),Tt.reset(Xe?.key||"")}finally{An=!1}}}function fn(c){bi();const u=typeof c=="string"?c:c?.type||"viewport_changed",x=ba();(x.key!==Xe?.key||u==="orientationchange"||u==="camera_started")&&le.track("camera","screen_orientation_changed",{reason:u,previous:Xe?.key||"",current:x.key,...tn()}),si(u),Sr(u)}function sd(){return!Wi||!Ta?{ready:!1,status:gi?"processando":"aguardando",stableFrames:ri,requiredStableFrames:hc}:{ready:!0,image:Ta,details:Wi}}function cd(){or(),le.track("analysis","face_shape_report_reset")}function ld(c,u={},x="info"){le.track("analysis",c,u,x)}function dd(){return or(),le.track("analysis","face_shape_reanalysis_requested"),!0}async function ud(c){try{const u=c?Ca(c):sa;await vr(u),Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null}catch{}}function fd(c){const u=new At(typeof c=="string"?c:c||"#000");ct||(ct=Pa(c)),ct.color.copy(u),ct.needsUpdate=!0,[at,ke,Ze].forEach(x=>{x?.material?.color&&x.material.color.copy(u)})}function Go(){if(!We||!fe||!Me)return null;xi(),Me.render(We,fe);const c=Be.value?.width||1280,u=Be.value?.height||720,x=document.createElement("canvas");x.width=c,x.height=u;const O=x.getContext("2d");return on.value&&(O.translate(c,0),O.scale(-1,1)),O.drawImage(Be.value,0,0,c,u),O.drawImage(Y.value,0,0,c,u),O.drawImage(te.value,0,0,c,u),x.toDataURL("image/png")}function pd(){if(!Be.value)return null;xi();const c=Be.value.width||1280,u=Be.value.height||720,x=document.createElement("canvas");x.width=c,x.height=u;const O=x.getContext("2d");return on.value&&(O.translate(c,0),O.scale(-1,1)),O.drawImage(Be.value,0,0,c,u),x.toDataURL("image/jpeg",.92)}async function hd(){try{await w}catch{}z=!1,w=null,Mi(),Ei(),Ki?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),Ra(),ya(),le.track("lifecycle","ar_suspended_for_try_on")}async function md(){return Rn||z?z:(le.track("lifecycle","ar_resuming_after_try_on"),w=null,ji())}function Ho(c){return y=!0,T.value=Number(c)||0,T.value}function xr(c){return g=!0,C.value=Number(c)||1,xt?.visagismo?.armacaoEscala&&(xt.visagismo.armacaoEscala.value=C.value),C.value}function _d(c){const u=Number(C.value)||1;return xr(bt.clamp(u+(Number(c)||0),.9,2.8))}function Vo(c){return L.value=rt(c),qi(),L.value}return Ad(()=>{le.start({appVersion:xt?.app?.versao?.value||"",route:xt?.app?.rota?.value||"visagismo"}),Lt=c=>{String(c?.message||"").includes("ResizeObserver loop completed")||le.captureError("javascript","window_error",c?.error||c?.message||"Erro global",{arquivo:c?.filename||"",linha:c?.lineno||0,coluna:c?.colno||0})},mt=c=>{le.captureError("javascript","unhandled_rejection",c?.reason||"Promise rejeitada")},pt=()=>{le.track("lifecycle","visibility_changed",{state:document.visibilityState}),document.visibilityState==="visible"?(rd("visibility_restored"),Tt.reset(Xe?.key||""),Sr("visibility_restored",300)):Ut&&(window.clearTimeout(Ut),Ut=0)},Bt=()=>le.track("network","online"),Ce=()=>le.track("network","offline",{},"warn"),Ht=c=>{c.preventDefault?.(),le.track("webgl","context_lost",{},"error"),le.flush({keepalive:!0})},nt=()=>le.track("webgl","context_restored"),window.addEventListener("error",Lt),window.addEventListener("unhandledrejection",mt),document.addEventListener("visibilitychange",pt),window.addEventListener("online",Bt),window.addEventListener("offline",Ce),Xt=c=>{const u=performance.now();ai={alpha:Number.isFinite(c?.alpha)?Number(c.alpha.toFixed(2)):null,beta:Number.isFinite(c?.beta)?Number(c.beta.toFixed(2)):null,gamma:Number.isFinite(c?.gamma)?Number(c.gamma.toFixed(2)):null,absolute:!!c?.absolute},so=u,Math.abs(ai.gamma||0)>=45?(Number.isFinite(Oi)||(Oi=u),Bi=Number.NEGATIVE_INFINITY):Math.abs(ai.gamma||0)<=30?(Oi=Number.NEGATIVE_INFINITY,Number.isFinite(Bi)||(Bi=u)):(Oi=Number.NEGATIVE_INFINITY,Bi=Number.NEGATIVE_INFINITY),si("device_orientation"),u-Bi>=800&&ll("device_returned_portrait"),u-co>=1e4&&(co=u,le.track("sensor","device_orientation_sample",{...ai,rawContentRotationDeg:Je,displayContentRotationDeg:He,gateVisible:F.value,...tn()}))},window.addEventListener("deviceorientation",Xt,{passive:!0}),Y.value?.addEventListener("webglcontextlost",Ht),Y.value?.addEventListener("webglcontextrestored",nt),ye=async()=>{le.track("camera","camera_change_requested");try{await w}catch{}z=!1,w=null,await ji()},window.addEventListener("cameraAlterada",ye),it=Rd({videoEl:()=>Re.value,estaAtivo:()=>z&&!!Re.value?.srcObject,reiniciar:async()=>{try{await w}catch{}z=!1,w=null,await ji()},delayMs:450})}),wd(()=>{Rn=!0,window.removeEventListener("error",Lt),window.removeEventListener("unhandledrejection",mt),document.removeEventListener("visibilitychange",pt),window.removeEventListener("online",Bt),window.removeEventListener("offline",Ce),Xt&&(window.removeEventListener("deviceorientation",Xt),Xt=null),Y.value?.removeEventListener("webglcontextlost",Ht),Y.value?.removeEventListener("webglcontextrestored",nt),ye&&(window.removeEventListener("cameraAlterada",ye),ye=null),it&&(it(),it=null),z=!1,Mi(),Ei(),Ki?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),Ut&&(window.clearTimeout(Ut),Ut=0),On(!1),Ra(),ya(),Mt=null,mn=!1,vl(),un=null,le.stop("component_unmounted")}),(c,u)=>(Ai(),ea("div",{id:"AR3D",ref_key:"root",ref:Ve},[dt("div",{class:Cd(["present",{mirror:on.value,"present--orientation-adjusting":Q.value}])},[dt("div",{ref_key:"stage",ref:st,class:"stage"},[dt("video",{ref_key:"videoEl",ref:Re,autoplay:"",playsinline:"",muted:"",class:"camera-source"},null,512),dt("canvas",{ref_key:"canvasFrame",ref:Be,class:"layer"},null,512),dt("canvas",{ref_key:"canvas3d",ref:Y,class:"layer"},null,512),dt("canvas",{ref_key:"canvasLandmarks",ref:te,class:"layer hud"},null,512)],512)],2),Na(qo,{name:"orientation-gate-fade"},{default:Xo(()=>[F.value?(Ai(),ea("div",kg,[dt("div",Wg,[Na(Pd,{name:"screen_rotation",class:"orientation-gate__icon"}),u[7]||(u[7]=dt("div",{class:"orientation-gate__title"},"Ative a rotação automática",-1)),u[8]||(u[8]=dt("div",{class:"orientation-gate__text"}," O aparelho está deitado, mas a tela continua na vertical. Ative a rotação automática para usar o Optiface em modo horizontal. ",-1)),ie.value?(Ai(),yd(Ld,{key:0,onClick:u[0]||(u[0]=x=>So("orientation_gate_button")),loading:K.value,label:"USAR EM HORIZONTAL",color:"primary",rounded:"",unelevated:"","no-caps":""},null,8,["loading"])):ta("",!0),$.value?(Ai(),ea("div",zg,Ot($.value),1)):ta("",!0)])])):ta("",!0)]),_:1}),Na(qo,{name:"orientation-gate-fade"},{default:Xo(()=>[Q.value&&!F.value?(Ai(),ea("div",Xg,[Na(Nd,{color:"primary",size:"28px"}),u[9]||(u[9]=dt("span",null,"Ajustando a câmera…",-1))])):ta("",!0)]),_:1}),Dd(xt).app.metricas.value?(Ai(),ea("div",qg,[dt("label",null,[u[10]||(u[10]=Mr("Profundidade ",-1)),Tr(dt("input",{type:"range",min:"-0.50",max:"0.50",step:"0.001","onUpdate:modelValue":u[1]||(u[1]=x=>T.value=x),onInput:u[2]||(u[2]=x=>Ho(T.value))},null,544),[[br,T.value,void 0,{number:!0}]]),dt("b",null,Ot(T.value.toFixed(3)),1)]),dt("label",null,[u[11]||(u[11]=Mr("Tamanho ",-1)),Tr(dt("input",{type:"range",min:"0.90",max:"2.80",step:"0.01","onUpdate:modelValue":u[3]||(u[3]=x=>C.value=x),onInput:u[4]||(u[4]=x=>xr(C.value))},null,544),[[br,C.value,void 0,{number:!0}]]),dt("b",null,Ot(C.value.toFixed(2))+"×",1)]),dt("label",null,[u[12]||(u[12]=Mr("FOV ",-1)),Tr(dt("input",{type:"range",min:"35",max:"95",step:"0.1","onUpdate:modelValue":u[5]||(u[5]=x=>L.value=x),onInput:u[6]||(u[6]=x=>Vo(L.value))},null,544),[[br,L.value,void 0,{number:!0}]]),dt("b",null,Ot(L.value.toFixed(1))+"°",1)]),dt("div",Yg,[dt("span",null,"Centro do nariz: X "+Ot(A.value.x)+" px · Y "+Ot(A.value.y)+" px",1),dt("span",null,"Inclinação (rosto deitado): "+Ot(f.value.toFixed(1))+"°",1),dt("span",null,"Cabeça virada (esq/dir): "+Ot(m.value.toFixed(1))+"°",1),dt("span",null,"Cabeça up/down (esq/dir): "+Ot(N.value.toFixed(1))+"°",1),dt("span",null,"Tipo de rosto: "+Ot(ce.value),1),dt("span",null,"Predição: "+Ot(Ye.value),1),dt("span",null,"Tracking: "+Ot(l.value)+" · "+Ot(P.value.toFixed(1))+" ms",1),dt("span",null,"Cam: "+Ot(b.value.width||0)+"x"+Ot(b.value.height||0)+" · "+Ot(b.value.frameRate?b.value.frameRate.toFixed(0):"0")+" fps · "+Ot(b.value.facingMode||"unknown"),1),dt("span",null,"Input: "+Ot(U.value.width||0)+"x"+Ot(U.value.height||0)+" · aspect "+Ot(b.value.aspectRatio?b.value.aspectRatio.toFixed(3):"--"),1)]),dt("button",{class:"btn",onClick:No},"Marcadores"),dt("button",{class:"btn",onClick:Do},"Proporções"),dt("button",{class:"btn",onClick:Pl}," Tracking "+Ot(l.value==="high"?"HQ":"Normal"),1),dt("button",{class:"btn",onClick:Go},"📸")])):ta("",!0)],512))}},xv=Md(pv,[["__scopeId","data-v-66fbe0ea"]]);export{xv as V,Sv as a,Sg as n};
