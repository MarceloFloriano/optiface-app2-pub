import{bR as Ed,aU as _t,df as Md,bE as Ji,as as Td,aD as bd,dn as Ad,az as Rd,aL as Ai,u as ea,v as dt,au as wd,I as Na,bJ as Xo,bX as Cd,s as Pd,bU as yd,t as ta,bb as Ot,g as qo,dh as Ld,bk as Nd,H as Mr,bL as Tr,bA as br,q as na,a0 as Dd}from"./index-Dmpej2A2.js";import{U as Nn,c as Id,N as Dn,S as no,C as At,R as Ud,e as yt,w as gt,V as ln,l as Yo,M as ti,F as Tc,W as Ko,a as En,b as Dt,L as Pi,H as kn,D as xn,B as hn,d as ua,f as Ie,p as Fd,g as jo,h as Od,i as Bd,A as ia,O as Gd,j as Hd,k as Vd,m as kd,n as Wd,o as zd,q as Xd,r as qd,s as Yd,t as Kd,u as jd,v as $d,x as Zd,y as Qd,Z as Jd,z as eu,E as Xr,G as tu,I as Ar,J as pn,K as Da,P as nu,Q as pi,T as iu,X as au,Y as io,_ as ru,$ as ao,a0 as ou,a1 as su,a2 as cu,a3 as lu,a4 as du,a5 as Wn,a6 as nn,a7 as hi,a8 as Jn,a9 as Mn,aa as Ha,ab as uu,ac as Vn,ad as ca,ae as Ni,af as za,ag as Zn,ah as Di,ai as fu,aj as mi,ak as Xa,al as pu,am as bc,an as wt,ao as hu,ap as da,aq as mu,ar as Rr,as as Hn,at as yi,au as fa,av as _u,aw as gu,ax as vu,ay as Ci,az as ot,aA as Su,aB as Ac,aC as Rc,aD as wc,aE as qa,aF as Cc,aG as Pc,aH as xu,aI as Eu,aJ as Mu,aK as Tu,aL as bu,aM as Au,aN as Ru,aO as wu,aP as $o,aQ as Cu,aR as Va,aS as Pu,aT as Zo,aU as Qo,aV as Jo,aW as yu,aX as ja,aY as es,aZ as Lu,a_ as ro,a$ as qr,b0 as yc,b1 as Lc,b2 as Nc,b3 as Nu,b4 as Dc,b5 as Du,b6 as Iu,b7 as Uu,b8 as Fu,b9 as Ic,ba as Ou,bb as Bu,bc as Gu,bd as wr,be as Cr,bf as Pr,bg as yr,bh as ts,bi as ns,bj as is,bk as as,bl as rs,bm as os,bn as ss,bo as cs,bp as ls,bq as Yr,br as ds,bs as us,bt as fs,bu as ps,bv as hs,bw as ms,bx as _s,by as gs,bz as vs,bA as Ss,bB as xs,bC as Es,bD as Ms,bE as Ts,bF as bs,bG as As,bH as Rs,bI as ws,bJ as Cs,bK as Ps,bL as Kr,bM as ys,bN as Uc,bO as Ls,bP as Fc,bQ as Ns,bR as sn,bS as Hu,bT as Oc,bU as Bc,bV as Gc,bW as Hc,bX as Vc,bY as kc,bZ as Wc,b_ as Lr,b$ as Nr,c0 as Vu,c1 as ku,c2 as zc,c3 as pa,c4 as Ii,c5 as Xc,c6 as Wu,c7 as zu,c8 as Xu,c9 as qu,ca as Yu,cb as Ku,cc as ju,cd as $u,ce as Zu,cf as Qu,cg as Ju,ch as bt,ci as li,cj as Ia,ck as ef,cl as tf,cm as nf,cn as af,co as rf}from"./three.core-aXXCO3ex.js";import{Z as jr,S as qc,W as Yc,s as of,g as sf,i as Ds}from"./faceLandmarkerWorkerClient-BcfgsVVR.js";import{a as cf,b as lf}from"./cameraPreference-DlAyC_Us.js";function Kc(){let e=null,n=!1,t=null,i=null;function r(a,o){i=e.requestAnimationFrame(r),t(a,o)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function df(e){const n=new WeakMap;function t(v,R){const _=v.array,x=v.usage,S=_.byteLength,h=e.createBuffer();e.bindBuffer(R,h),e.bufferData(R,_,x),v.onUploadCallback();let T;if(_ instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)T=e.HALF_FLOAT;else if(_ instanceof Uint16Array)v.isFloat16BufferAttribute?T=e.HALF_FLOAT:T=e.UNSIGNED_SHORT;else if(_ instanceof Int16Array)T=e.SHORT;else if(_ instanceof Uint32Array)T=e.UNSIGNED_INT;else if(_ instanceof Int32Array)T=e.INT;else if(_ instanceof Int8Array)T=e.BYTE;else if(_ instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:h,type:T,bytesPerElement:_.BYTES_PER_ELEMENT,version:v.version,size:S}}function i(v,R,_){const x=R.array,S=R.updateRanges;if(e.bindBuffer(_,v),S.length===0)e.bufferSubData(_,0,x);else{S.sort((T,C)=>T.start-C.start);let h=0;for(let T=1;T<S.length;T++){const C=S[h],L=S[T];L.start<=C.start+C.count+1?C.count=Math.max(C.count,L.start+L.count-C.start):(++h,S[h]=L)}S.length=h+1;for(let T=0,C=S.length;T<C;T++){const L=S[T];e.bufferSubData(_,L.start*x.BYTES_PER_ELEMENT,x,L.start,L.count)}R.clearUpdateRanges()}R.onUploadCallback()}function r(v){return v.isInterleavedBufferAttribute&&(v=v.data),n.get(v)}function a(v){v.isInterleavedBufferAttribute&&(v=v.data);const R=n.get(v);R&&(e.deleteBuffer(R.buffer),n.delete(v))}function o(v,R){if(v.isInterleavedBufferAttribute&&(v=v.data),v.isGLBufferAttribute){const x=n.get(v);(!x||x.version<v.version)&&n.set(v,{buffer:v.buffer,type:v.type,bytesPerElement:v.elementSize,version:v.version});return}const _=n.get(v);if(_===void 0)n.set(v,t(v,R));else if(_.version<v.version){if(_.size!==v.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(_.buffer,v,R),_.version=v.version}}return{get:r,remove:a,update:o}}var uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ff=`#ifdef USE_ALPHAHASH
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
#endif`,pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
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
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,If=`#define PI 3.141592653589793
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
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ff=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vf="gl_FragColor = linearToOutputTexel( gl_FragColor );",kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wf=`#ifdef USE_ENVMAP
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
#endif`,zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
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
}`,Jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ip=`#ifdef USE_ENVMAP
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
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,lp=`uniform sampler2D dfgLUT;
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
}`,dp=`
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,Mp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ap=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$p=`float getShadowMask() {
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
}`,Zp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eh=`#ifdef USE_SKINNING
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
#endif`,th=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ih=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ah=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rh=`#ifdef USE_TRANSMISSION
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
#endif`,oh=`#ifdef USE_TRANSMISSION
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
#endif`,sh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fh=`uniform sampler2D t2D;
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
}`,ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_h=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gh=`#include <common>
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
}`,vh=`#if DEPTH_PACKING == 3200
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
}`,Sh=`#define DISTANCE
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
}`,xh=`#define DISTANCE
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
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Th=`uniform float scale;
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
}`,bh=`uniform vec3 diffuse;
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
}`,Ah=`#include <common>
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
}`,Rh=`uniform vec3 diffuse;
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
}`,wh=`#define LAMBERT
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
}`,Ch=`#define LAMBERT
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
}`,Ph=`#define MATCAP
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
}`,yh=`#define MATCAP
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
}`,Lh=`#define NORMAL
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
}`,Nh=`#define NORMAL
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
}`,Dh=`#define PHONG
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
}`,Ih=`#define PHONG
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
}`,Uh=`#define STANDARD
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
}`,Fh=`#define STANDARD
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
}`,Oh=`#define TOON
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
}`,Bh=`#define TOON
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
}`,Gh=`uniform float size;
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
}`,Hh=`uniform vec3 diffuse;
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
}`,Vh=`#include <common>
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
}`,kh=`uniform vec3 color;
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
}`,Wh=`uniform float rotation;
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
}`,zh=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:uf,alphahash_pars_fragment:ff,alphamap_fragment:pf,alphamap_pars_fragment:hf,alphatest_fragment:mf,alphatest_pars_fragment:_f,aomap_fragment:gf,aomap_pars_fragment:vf,batching_pars_vertex:Sf,batching_vertex:xf,begin_vertex:Ef,beginnormal_vertex:Mf,bsdfs:Tf,iridescence_fragment:bf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Cf,clipping_planes_vertex:Pf,color_fragment:yf,color_pars_fragment:Lf,color_pars_vertex:Nf,color_vertex:Df,common:If,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Ff,displacementmap_pars_vertex:Of,displacementmap_vertex:Bf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Hf,colorspace_fragment:Vf,colorspace_pars_fragment:kf,envmap_fragment:Wf,envmap_common_pars_fragment:zf,envmap_pars_fragment:Xf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:ip,envmap_vertex:Yf,fog_vertex:Kf,fog_pars_vertex:jf,fog_fragment:$f,fog_pars_fragment:Zf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:Jf,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:ap,lights_toon_pars_fragment:rp,lights_phong_fragment:op,lights_phong_pars_fragment:sp,lights_physical_fragment:cp,lights_physical_pars_fragment:lp,lights_fragment_begin:dp,lights_fragment_maps:up,lights_fragment_end:fp,lightprobes_pars_fragment:pp,logdepthbuf_fragment:hp,logdepthbuf_pars_fragment:mp,logdepthbuf_pars_vertex:_p,logdepthbuf_vertex:gp,map_fragment:vp,map_pars_fragment:Sp,map_particle_fragment:xp,map_particle_pars_fragment:Ep,metalnessmap_fragment:Mp,metalnessmap_pars_fragment:Tp,morphinstance_vertex:bp,morphcolor_vertex:Ap,morphnormal_vertex:Rp,morphtarget_pars_vertex:wp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:yp,normal_pars_fragment:Lp,normal_pars_vertex:Np,normal_vertex:Dp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Op,iridescence_pars_fragment:Bp,opaque_fragment:Gp,packing:Hp,premultiplied_alpha_fragment:Vp,project_vertex:kp,dithering_fragment:Wp,dithering_pars_fragment:zp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:Yp,shadowmap_pars_vertex:Kp,shadowmap_vertex:jp,shadowmask_pars_fragment:$p,skinbase_vertex:Zp,skinning_pars_vertex:Qp,skinning_vertex:Jp,skinnormal_vertex:eh,specularmap_fragment:th,specularmap_pars_fragment:nh,tonemapping_fragment:ih,tonemapping_pars_fragment:ah,transmission_fragment:rh,transmission_pars_fragment:oh,uv_pars_fragment:sh,uv_pars_vertex:ch,uv_vertex:lh,worldpos_vertex:dh,background_vert:uh,background_frag:fh,backgroundCube_vert:ph,backgroundCube_frag:hh,cube_vert:mh,cube_frag:_h,depth_vert:gh,depth_frag:vh,distance_vert:Sh,distance_frag:xh,equirect_vert:Eh,equirect_frag:Mh,linedashed_vert:Th,linedashed_frag:bh,meshbasic_vert:Ah,meshbasic_frag:Rh,meshlambert_vert:wh,meshlambert_frag:Ch,meshmatcap_vert:Ph,meshmatcap_frag:yh,meshnormal_vert:Lh,meshnormal_frag:Nh,meshphong_vert:Dh,meshphong_frag:Ih,meshphysical_vert:Uh,meshphysical_frag:Fh,meshtoon_vert:Oh,meshtoon_frag:Bh,points_vert:Gh,points_frag:Hh,shadow_vert:Vh,shadow_frag:kh,sprite_vert:Wh,sprite_frag:zh},Te={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new nn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ie},probesMax:{value:new Ie},probesResolution:{value:new Ie}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new nn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ln={basic:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new At(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:sn([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:sn([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:sn([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:sn([Te.common,Te.displacementmap,{referencePosition:{value:new Ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:sn([Te.lights,Te.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};Ln.physical={uniforms:sn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new nn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new nn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new nn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Ua={r:0,b:0,g:0},Xh=new ti,jc=new ot;jc.set(-1,0,0,0,1,0,0,0,1);function qh(e,n,t,i,r,a){const o=new At(0);let v=r===!0?0:1,R,_,x=null,S=0,h=null;function T(P){let y=P.isScene===!0?P.background:null;if(y&&y.isTexture){const g=P.backgroundBlurriness>0;y=n.get(y,g)}return y}function C(P){let y=!1;const g=T(P);g===null?p(o,v):g&&g.isColor&&(p(g,1),y=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(e.autoClear||y)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function L(P,y){const g=T(y);g&&(g.isCubeTexture||g.mapping===ja)?(_===void 0&&(_=new Mn(new ro(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:qr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(A,m,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(_)),_.material.uniforms.envMap.value=g,_.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Xh.makeRotationFromEuler(y.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&_.material.uniforms.backgroundRotation.value.premultiply(jc),_.material.toneMapped=Dt.getTransfer(g.colorSpace)!==wt,(x!==g||S!==g.version||h!==e.toneMapping)&&(_.material.needsUpdate=!0,x=g,S=g.version,h=e.toneMapping),_.layers.enableAll(),P.unshift(_,_.geometry,_.material,0,0,null)):g&&g.isTexture&&(R===void 0&&(R=new Mn(new yc(2,2),new Wn({name:"BackgroundMaterial",uniforms:qr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:ua,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),R.geometry.deleteAttribute("normal"),Object.defineProperty(R.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(R)),R.material.uniforms.t2D.value=g,R.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,R.material.toneMapped=Dt.getTransfer(g.colorSpace)!==wt,g.matrixAutoUpdate===!0&&g.updateMatrix(),R.material.uniforms.uvTransform.value.copy(g.matrix),(x!==g||S!==g.version||h!==e.toneMapping)&&(R.material.needsUpdate=!0,x=g,S=g.version,h=e.toneMapping),R.layers.enableAll(),P.unshift(R,R.geometry,R.material,0,0,null))}function p(P,y){P.getRGB(Ua,Lc(e)),t.buffers.color.setClear(Ua.r,Ua.g,Ua.b,y,a)}function l(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),R!==void 0&&(R.geometry.dispose(),R.material.dispose(),R=void 0)}return{getClearColor:function(){return o},setClearColor:function(P,y=1){o.set(P),v=y,p(o,v)},getClearAlpha:function(){return v},setClearAlpha:function(P){v=P,p(o,v)},render:C,addToRenderList:L,dispose:l}}function Yh(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=h(null);let a=r,o=!1;function v(G,k,q,F,$){let K=!1;const Q=S(G,F,q,k);a!==Q&&(a=Q,_(a.object)),K=T(G,F,q,$),K&&C(G,F,q,$),$!==null&&n.update($,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,g(G,k,q,F),$!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get($).buffer))}function R(){return e.createVertexArray()}function _(G){return e.bindVertexArray(G)}function x(G){return e.deleteVertexArray(G)}function S(G,k,q,F){const $=F.wireframe===!0;let K=i[k.id];K===void 0&&(K={},i[k.id]=K);const Q=G.isInstancedMesh===!0?G.id:0;let re=K[Q];re===void 0&&(re={},K[Q]=re);let ie=re[q.id];ie===void 0&&(ie={},re[q.id]=ie);let se=ie[$];return se===void 0&&(se=h(R()),ie[$]=se),se}function h(G){const k=[],q=[],F=[];for(let $=0;$<t;$++)k[$]=0,q[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:F,object:G,attributes:{},index:null}}function T(G,k,q,F){const $=a.attributes,K=k.attributes;let Q=0;const re=q.getAttributes();for(const ie in re)if(re[ie].location>=0){const ce=$[ie];let Ye=K[ie];if(Ye===void 0&&(ie==="instanceMatrix"&&G.instanceMatrix&&(Ye=G.instanceMatrix),ie==="instanceColor"&&G.instanceColor&&(Ye=G.instanceColor)),ce===void 0||ce.attribute!==Ye||Ye&&ce.data!==Ye.data)return!0;Q++}return a.attributesNum!==Q||a.index!==F}function C(G,k,q,F){const $={},K=k.attributes;let Q=0;const re=q.getAttributes();for(const ie in re)if(re[ie].location>=0){let ce=K[ie];ce===void 0&&(ie==="instanceMatrix"&&G.instanceMatrix&&(ce=G.instanceMatrix),ie==="instanceColor"&&G.instanceColor&&(ce=G.instanceColor));const Ye={};Ye.attribute=ce,ce&&ce.data&&(Ye.data=ce.data),$[ie]=Ye,Q++}a.attributes=$,a.attributesNum=Q,a.index=F}function L(){const G=a.newAttributes;for(let k=0,q=G.length;k<q;k++)G[k]=0}function p(G){l(G,0)}function l(G,k){const q=a.newAttributes,F=a.enabledAttributes,$=a.attributeDivisors;q[G]=1,F[G]===0&&(e.enableVertexAttribArray(G),F[G]=1),$[G]!==k&&(e.vertexAttribDivisor(G,k),$[G]=k)}function P(){const G=a.newAttributes,k=a.enabledAttributes;for(let q=0,F=k.length;q<F;q++)k[q]!==G[q]&&(e.disableVertexAttribArray(q),k[q]=0)}function y(G,k,q,F,$,K,Q){Q===!0?e.vertexAttribIPointer(G,k,q,$,K):e.vertexAttribPointer(G,k,q,F,$,K)}function g(G,k,q,F){L();const $=F.attributes,K=q.getAttributes(),Q=k.defaultAttributeValues;for(const re in K){const ie=K[re];if(ie.location>=0){let se=$[re];if(se===void 0&&(re==="instanceMatrix"&&G.instanceMatrix&&(se=G.instanceMatrix),re==="instanceColor"&&G.instanceColor&&(se=G.instanceColor)),se!==void 0){const ce=se.normalized,Ye=se.itemSize,Ve=n.get(se);if(Ve===void 0)continue;const st=Ve.buffer,Ae=Ve.type,Be=Ve.bytesPerElement,Y=Ae===e.INT||Ae===e.UNSIGNED_INT||se.gpuType===Ic;if(se.isInterleavedBufferAttribute){const te=se.data,Me=te.stride,We=se.offset;if(te.isInstancedInterleavedBuffer){for(let ue=0;ue<ie.locationSize;ue++)l(ie.location+ue,te.meshPerAttribute);G.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ue=0;ue<ie.locationSize;ue++)p(ie.location+ue);e.bindBuffer(e.ARRAY_BUFFER,st);for(let ue=0;ue<ie.locationSize;ue++)y(ie.location+ue,Ye/ie.locationSize,Ae,ce,Me*Be,(We+Ye/ie.locationSize*ue)*Be,Y)}else{if(se.isInstancedBufferAttribute){for(let te=0;te<ie.locationSize;te++)l(ie.location+te,se.meshPerAttribute);G.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let te=0;te<ie.locationSize;te++)p(ie.location+te);e.bindBuffer(e.ARRAY_BUFFER,st);for(let te=0;te<ie.locationSize;te++)y(ie.location+te,Ye/ie.locationSize,Ae,ce,Ye*Be,Ye/ie.locationSize*te*Be,Y)}}else if(Q!==void 0){const ce=Q[re];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(ie.location,ce);break;case 3:e.vertexAttrib3fv(ie.location,ce);break;case 4:e.vertexAttrib4fv(ie.location,ce);break;default:e.vertexAttrib1fv(ie.location,ce)}}}}P()}function A(){b();for(const G in i){const k=i[G];for(const q in k){const F=k[q];for(const $ in F){const K=F[$];for(const Q in K)x(K[Q].object),delete K[Q];delete F[$]}}delete i[G]}}function m(G){if(i[G.id]===void 0)return;const k=i[G.id];for(const q in k){const F=k[q];for(const $ in F){const K=F[$];for(const Q in K)x(K[Q].object),delete K[Q];delete F[$]}}delete i[G.id]}function N(G){for(const k in i){const q=i[k];for(const F in q){const $=q[F];if($[G.id]===void 0)continue;const K=$[G.id];for(const Q in K)x(K[Q].object),delete K[Q];delete $[G.id]}}}function f(G){for(const k in i){const q=i[k],F=G.isInstancedMesh===!0?G.id:0,$=q[F];if($!==void 0){for(const K in $){const Q=$[K];for(const re in Q)x(Q[re].object),delete Q[re];delete $[K]}delete q[F],Object.keys(q).length===0&&delete i[k]}}}function b(){U(),o=!0,a!==r&&(a=r,_(a.object))}function U(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:v,reset:b,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:m,releaseStatesOfObject:f,releaseStatesOfProgram:N,initAttributes:L,enableAttribute:p,disableUnusedAttributes:P}}function Kh(e,n,t){let i;function r(R){i=R}function a(R,_){e.drawArrays(i,R,_),t.update(_,i,1)}function o(R,_,x){x!==0&&(e.drawArraysInstanced(i,R,_,x),t.update(_,i,x))}function v(R,_,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,R,0,_,0,x);let h=0;for(let T=0;T<x;T++)h+=_[T];t.update(h,i,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=v}function jh(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const N=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(N){return!(N!==Hn&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function v(N){const f=N===kn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(N!==Nn&&N!==Zn&&!f&&i.convert(N)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function R(N){if(N==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=t.precision!==void 0?t.precision:"highp";const x=R(_);x!==_&&(gt("WebGLRenderer:",_,"not supported, using",x,"instead."),_=x);const S=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),C=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),L=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),P=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),g=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),m=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:R,textureFormatReadable:o,textureTypeReadable:v,precision:_,logarithmicDepthBuffer:S,reversedDepthBuffer:h,maxTextures:T,maxVertexTextures:C,maxTextureSize:L,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:P,maxVaryings:y,maxFragmentUniforms:g,maxSamples:A,samples:m}}function $h(e){const n=this;let t=null,i=0,r=!1,a=!1;const o=new Su,v=new ot,R={value:null,needsUpdate:!1};this.uniform=R,this.numPlanes=0,this.numIntersection=0,this.init=function(S,h){const T=S.length!==0||h||i!==0||r;return r=h,i=S.length,T},this.beginShadows=function(){a=!0,x(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(S,h){t=x(S,h,0)},this.setState=function(S,h,T){const C=S.clippingPlanes,L=S.clipIntersection,p=S.clipShadows,l=e.get(S);if(!r||C===null||C.length===0||a&&!p)a?x(null):_();else{const P=a?0:i,y=P*4;let g=l.clippingState||null;R.value=g,g=x(C,h,y,T);for(let A=0;A!==y;++A)g[A]=t[A];l.clippingState=g,this.numIntersection=L?this.numPlanes:0,this.numPlanes+=P}};function _(){R.value!==t&&(R.value=t,R.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function x(S,h,T,C){const L=S!==null?S.length:0;let p=null;if(L!==0){if(p=R.value,C!==!0||p===null){const l=T+L*4,P=h.matrixWorldInverse;v.getNormalMatrix(P),(p===null||p.length<l)&&(p=new Float32Array(l));for(let y=0,g=T;y!==L;++y,g+=4)o.copy(S[y]).applyMatrix4(P,v),o.normal.toArray(p,g),p[g+3]=o.constant}R.value=p,R.needsUpdate=!0}return n.numPlanes=L,n.numIntersection=0,p}}const Li=4,Zh=6,Qh=20,Jh=256,aa=new bc,Is=new At;let Dr=null,Ir=0,Ur=0,Fr=!1;const em=new Ie,di=new Ie;class Us{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,r=100,a={}){const{size:o=256,position:v=em}=a;Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const R=this._allocateTargets();return R.depthBuffer=!0,this._sceneToCubeUV(n,i,r,R,v),t>0&&this._blur(R,0,0,t),this._applyPMREM(R),this._cleanup(R),R}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Os(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Dr,Ir,Ur),this._renderer.xr.enabled=Fr,n.scissorTest=!1,Ri(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===pa||n.mapping===Ii?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:kn,format:Hn,colorSpace:zc,depthBuffer:!1},r=Fs(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fs(n,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tm(a)),this._blurMaterial=im(a,n,t),this._ggxMaterial=nm(a,n,t)}return r}_compileMaterial(n){const t=new Mn(new hi,n);this._renderer.compile(t,aa)}_sceneToCubeUV(n,t,i,r,a){const R=new da(90,1,t,i),_=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,h=S.autoClear,T=S.toneMapping;S.getClearColor(Is),S.toneMapping=Dn,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(r),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new ro,new Xc({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const L=this._backgroundBox,p=L.material;let l=!1;const P=n.background;P?P.isColor&&(p.color.copy(P),n.background=null,l=!0):(p.color.copy(Is),l=!0);for(let y=0;y<6;y++){const g=y%3;g===0?(R.up.set(0,_[y],0),R.position.set(a.x,a.y,a.z),R.lookAt(a.x+x[y],a.y,a.z)):g===1?(R.up.set(0,0,_[y]),R.position.set(a.x,a.y,a.z),R.lookAt(a.x,a.y+x[y],a.z)):(R.up.set(0,_[y],0),R.position.set(a.x,a.y,a.z),R.lookAt(a.x,a.y,a.z+x[y]));const A=this._cubeSize;Ri(r,g*A,y>2?A:0,A,A),S.setRenderTarget(r),l&&S.render(L,R),S.render(n,R)}S.toneMapping=T,S.autoClear=h,n.background=P}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===pa||n.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Os());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const v=a.uniforms;v.envMap.value=n;const R=this._cubeSize;Ri(t,0,0,3*R,2*R),i.setRenderTarget(t),i.render(o,aa)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(n,a-1,a);t.autoClear=i}_applyGGXFilter(n,t,i){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,v=this._lodMeshes[i];v.material=o;const R=o.uniforms,_=i/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),S=Math.sqrt(_*_-x*x),h=_*1.25,T=S*h,{_lodMax:C}=this,L=this._sizeLods[i],p=3*L*(i>C-Li?i-C+Li:0),l=4*(this._cubeSize-L);R.envMap.value=n.texture,R.roughness.value=T,R.mipInt.value=C-t,Ri(a,p,l,3*L,2*L),r.setRenderTarget(a),r.render(v,aa),R.envMap.value=a.texture,R.roughness.value=0,R.mipInt.value=C-i,Ri(n,p,l,3*L,2*L),r.setRenderTarget(n),r.render(v,aa)}_blur(n,t,i,r){const a=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(n,a,t,i,o),this._blurPass(a,n,i,i,o)}_blurPass(n,t,i,r,a){const o=this._renderer,v=this._blurMaterial,R=this._lodMeshes[r];R.material=v;const _=v.uniforms;_.envMap.value=n.texture,_.sigma.value=a,_.mipInt.value=this._lodMax-i;const x=this._sizeLods[r],S=3*x*(r>this._lodMax-Li?r-this._lodMax+Li:0),h=4*(this._cubeSize-x);Ri(t,S,h,3*x,2*x),o.setRenderTarget(t),o.render(R,aa)}}function tm(e){const n=[],t=[];let i=e;const r=e-Li+1+Zh;for(let a=0;a<r;a++){const o=Math.pow(2,i);n.push(o);const v=1/(o-2),R=-v,_=1+v,x=[R,R,_,R,_,_,R,R,_,_,R,_],S=6,h=6,T=3,C=new Float32Array(T*h*S),L=new Float32Array(T*h*S);for(let l=0;l<S;l++){const P=l%3*2/3-1,y=l>2?0:-1,g=[P,y,0,P+2/3,y,0,P+2/3,y+1,0,P,y,0,P+2/3,y+1,0,P,y+1,0];C.set(g,T*h*l);for(let A=0;A<h;A++){const m=x[A*2]*2-1,N=x[A*2+1]*2-1;l===0?di.set(1,N,m):l===1?di.set(-m,1,-N):l===2?di.set(-m,N,1):l===3?di.set(-1,N,-m):l===4?di.set(-m,-1,N):di.set(m,N,-1),di.toArray(L,(l*h+A)*T)}}const p=new hi;p.setAttribute("position",new Jn(C,T)),p.setAttribute("outputDirection",new Jn(L,T)),t.push(new Mn(p,null)),i>Li&&i--}return{lodMeshes:t,sizeLods:n}}function Fs(e,n,t){const i=new En(e,n,t);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ri(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function nm(e,n,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jh,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function im(e,n,t){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:Qh,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
			`},r=new ro(5,5,5),a=new Wn({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Vn});a.uniforms.tEquirect.value=t;const o=new Mn(r,a),v=t.minFilter;return t.minFilter===Pi&&(t.minFilter=pn),new Nu(1,10,this).update(n,o),t.minFilter=v,o.geometry.dispose(),o.material.dispose(),this}clear(n,t=!0,i=!0,r=!0){const a=n.getRenderTarget();for(let o=0;o<6;o++)n.setRenderTarget(this,o),n.clear(t,i,r);n.setRenderTarget(a)}}function am(e){let n=new WeakMap,t=new WeakMap,i=null;function r(h,T=!1){return h==null?null:T?o(h):a(h)}function a(h){if(h&&h.isTexture){const T=h.mapping;if(T===Lr||T===Nr)if(n.has(h)){const C=n.get(h).texture;return v(C,h.mapping)}else{const C=h.image;if(C&&C.height>0){const L=new $c(C.height);return L.fromEquirectangularTexture(e,h),n.set(h,L),h.addEventListener("dispose",_),v(L.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const T=h.mapping,C=T===Lr||T===Nr,L=T===pa||T===Ii;if(C||L){let p=t.get(h);const l=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==l)return i===null&&(i=new Us(e)),p=C?i.fromEquirectangular(h,p):i.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const P=h.image;return C&&P&&P.height>0||L&&P&&R(P)?(i===null&&(i=new Us(e)),p=C?i.fromEquirectangular(h):i.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",x),p.texture):null}}}return h}function v(h,T){return T===Lr?h.mapping=pa:T===Nr&&(h.mapping=Ii),h}function R(h){let T=0;const C=6;for(let L=0;L<C;L++)h[L]!==void 0&&T++;return T===C}function _(h){const T=h.target;T.removeEventListener("dispose",_);const C=n.get(T);C!==void 0&&(n.delete(T),C.dispose())}function x(h){const T=h.target;T.removeEventListener("dispose",x);const C=t.get(T);C!==void 0&&(t.delete(T),C.dispose())}function S(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:S}}function rm(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const r=e.getExtension(i);return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&vu("WebGLRenderer: "+i+" extension not supported."),r}}}function om(e,n,t,i){const r={},a=new WeakMap;function o(S){const h=S.target;h.index!==null&&n.remove(h.index);for(const C in h.attributes)n.remove(h.attributes[C]);h.removeEventListener("dispose",o),delete r[h.id];const T=a.get(h);T&&(n.remove(T),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function v(S,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function R(S){const h=S.attributes;for(const T in h)n.update(h[T],e.ARRAY_BUFFER)}function _(S){const h=[],T=S.index,C=S.attributes.position;let L=0;if(C===void 0)return;if(T!==null){const P=T.array;L=T.version;for(let y=0,g=P.length;y<g;y+=3){const A=P[y+0],m=P[y+1],N=P[y+2];h.push(A,m,m,N,N,A)}}else{const P=C.array;L=C.version;for(let y=0,g=P.length/3-1;y<g;y+=3){const A=y+0,m=y+1,N=y+2;h.push(A,m,m,N,N,A)}}const p=new(C.count>=65535?Vu:ku)(h,1);p.version=L;const l=a.get(S);l&&n.remove(l),a.set(S,p)}function x(S){const h=a.get(S);if(h){const T=S.index;T!==null&&h.version<T.version&&_(S)}else _(S);return a.get(S)}return{get:v,update:R,getWireframeAttribute:x}}function sm(e,n,t){let i;function r(S){i=S}let a,o;function v(S){a=S.type,o=S.bytesPerElement}function R(S,h){e.drawElements(i,h,a,S*o),t.update(h,i,1)}function _(S,h,T){T!==0&&(e.drawElementsInstanced(i,h,a,S*o,T),t.update(h,i,T))}function x(S,h,T){if(T===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,S,0,T);let L=0;for(let p=0;p<T;p++)L+=h[p];t.update(L,i,1)}this.setMode=r,this.setIndex=v,this.render=R,this.renderInstances=_,this.renderMultiDraw=x}function cm(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,v){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=v*(a/3);break;case e.LINES:t.lines+=v*(a/2);break;case e.LINE_STRIP:t.lines+=v*(a-1);break;case e.LINE_LOOP:t.lines+=v*a;break;case e.POINTS:t.points+=v*a;break;default:yt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lm(e,n,t){const i=new WeakMap,r=new ln;function a(o,v,R){const _=o.morphTargetInfluences,x=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,S=x!==void 0?x.length:0;let h=i.get(v);if(h===void 0||h.count!==S){let b=function(){N.dispose(),i.delete(v),v.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const T=v.morphAttributes.position!==void 0,C=v.morphAttributes.normal!==void 0,L=v.morphAttributes.color!==void 0,p=v.morphAttributes.position||[],l=v.morphAttributes.normal||[],P=v.morphAttributes.color||[];let y=0;T===!0&&(y=1),C===!0&&(y=2),L===!0&&(y=3);let g=v.attributes.position.count*y,A=1;g>n.maxTextureSize&&(A=Math.ceil(g/n.maxTextureSize),g=n.maxTextureSize);const m=new Float32Array(g*A*4*S),N=new Uc(m,g,A,S);N.type=Zn,N.needsUpdate=!0;const f=y*4;for(let U=0;U<S;U++){const G=p[U],k=l[U],q=P[U],F=g*A*4*U;for(let $=0;$<G.count;$++){const K=$*f;T===!0&&(r.fromBufferAttribute(G,$),m[F+K+0]=r.x,m[F+K+1]=r.y,m[F+K+2]=r.z,m[F+K+3]=0),C===!0&&(r.fromBufferAttribute(k,$),m[F+K+4]=r.x,m[F+K+5]=r.y,m[F+K+6]=r.z,m[F+K+7]=0),L===!0&&(r.fromBufferAttribute(q,$),m[F+K+8]=r.x,m[F+K+9]=r.y,m[F+K+10]=r.z,m[F+K+11]=q.itemSize===4?r.w:1)}}h={count:S,texture:N,size:new nn(g,A)},i.set(v,h),v.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)R.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let T=0;for(let L=0;L<_.length;L++)T+=_[L];const C=v.morphTargetsRelative?1:1-T;R.getUniforms().setValue(e,"morphTargetBaseInfluence",C),R.getUniforms().setValue(e,"morphTargetInfluences",_)}R.getUniforms().setValue(e,"morphTargetsTexture",h.texture,t),R.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:a}}function dm(e,n,t,i,r){let a=new WeakMap;function o(_){const x=r.render.frame,S=_.geometry,h=n.get(_,S);if(a.get(h)!==x&&(n.update(h),a.set(h,x)),_.isInstancedMesh&&(_.hasEventListener("dispose",R)===!1&&_.addEventListener("dispose",R),a.get(_)!==x&&(t.update(_.instanceMatrix,e.ARRAY_BUFFER),_.instanceColor!==null&&t.update(_.instanceColor,e.ARRAY_BUFFER),a.set(_,x))),_.isSkinnedMesh){const T=_.skeleton;a.get(T)!==x&&(T.update(),a.set(T,x))}return h}function v(){a=new WeakMap}function R(_){const x=_.target;x.removeEventListener("dispose",R),i.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:o,dispose:v}}const um={[Wc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[Gc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function fm(e,n,t,i,r,a){const o=new En(n,t,{type:e,depthBuffer:r,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let v=null,R=null;const _=new hi;_.setAttribute("position",new Xa([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new Xa([0,2,0,0,2,0],2));const x=new pu({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new Mn(_,x),h=new bc(-1,1,1,-1,0,1);let T=null,C=null,L=!1,p,l=null,P=[],y=!1;this.setSize=function(g,A){o.setSize(g,A),v!==null&&v.setSize(g,A),R!==null&&R.setSize(g,A);for(let m=0;m<P.length;m++){const N=P[m];N.setSize&&N.setSize(g,A)}},this.setEffects=function(g){P=g,y=P.length>0&&P[0].isRenderPass===!0;const A=o.width,m=o.height;P.length>0&&v===null&&(v=new En(A,m,{type:kn,depthBuffer:!1,stencilBuffer:!1}),R=new En(A,m,{type:kn,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<P.length;N++){const f=P[N];f.setSize&&f.setSize(A,m)}},this.begin=function(g,A){if(L||g.toneMapping===Dn&&P.length===0)return!1;if(l=A,A!==null){const m=A.width,N=A.height;(o.width!==m||o.height!==N)&&this.setSize(m,N)}return y===!1&&g.setRenderTarget(o),p=g.toneMapping,g.toneMapping=Dn,!0},this.hasRenderPass=function(){return y},this.end=function(g,A){g.toneMapping=p,L=!0;let m=o,N=v;for(let f=0;f<P.length;f++){const b=P[f];b.enabled!==!1&&(b.render(g,N,m,A),b.needsSwap!==!1&&(m=N,N=N===v?R:v))}if(T!==g.outputColorSpace||C!==g.toneMapping){T=g.outputColorSpace,C=g.toneMapping,x.defines={},Dt.getTransfer(T)===wt&&(x.defines.SRGB_TRANSFER="");const f=um[C];f&&(x.defines[f]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=m.texture,g.setRenderTarget(l),g.render(S,h),l=null,L=!1},this.isCompositing=function(){return L},this.dispose=function(){o.dispose(),v!==null&&v.dispose(),R!==null&&R.dispose(),_.dispose(),x.dispose()}}const Zc=new Ku,$r=new za(1,1),Qc=new Uc,Jc=new Yu,el=new Nc,Gs=[],Hs=[],Vs=new Float32Array(16),ks=new Float32Array(9),Ws=new Float32Array(4);function Ui(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Gs[r];if(a===void 0&&(a=new Float32Array(r),Gs[r]=a),n!==0){i.toArray(a,0);for(let o=1,v=0;o!==n;++o)v+=t,e[o].toArray(a,v)}return a}function Wt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function zt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Za(e,n){let t=Hs[n];t===void 0&&(t=new Int32Array(n),Hs[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function pm(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function hm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2fv(this.addr,n),zt(t,n)}}function mm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(Wt(t,n))return;e.uniform3fv(this.addr,n),zt(t,n)}}function _m(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4fv(this.addr,n),zt(t,n)}}function gm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;Ws.set(i),e.uniformMatrix2fv(this.addr,!1,Ws),zt(t,i)}}function vm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;ks.set(i),e.uniformMatrix3fv(this.addr,!1,ks),zt(t,i)}}function Sm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;Vs.set(i),e.uniformMatrix4fv(this.addr,!1,Vs),zt(t,i)}}function xm(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Em(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2iv(this.addr,n),zt(t,n)}}function Mm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Wt(t,n))return;e.uniform3iv(this.addr,n),zt(t,n)}}function Tm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4iv(this.addr,n),zt(t,n)}}function bm(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Am(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2uiv(this.addr,n),zt(t,n)}}function Rm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Wt(t,n))return;e.uniform3uiv(this.addr,n),zt(t,n)}}function wm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4uiv(this.addr,n),zt(t,n)}}function Cm(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?($r.compareFunction=t.isReversedDepthBuffer()?io:ao,a=$r):a=Zc,t.setTexture2D(n||a,r)}function Pm(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Jc,r)}function ym(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||el,r)}function Lm(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||Qc,r)}function Nm(e){switch(e){case 5126:return pm;case 35664:return hm;case 35665:return mm;case 35666:return _m;case 35674:return gm;case 35675:return vm;case 35676:return Sm;case 5124:case 35670:return xm;case 35667:case 35671:return Em;case 35668:case 35672:return Mm;case 35669:case 35673:return Tm;case 5125:return bm;case 36294:return Am;case 36295:return Rm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Cm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Lm}}function Dm(e,n){e.uniform1fv(this.addr,n)}function Im(e,n){const t=Ui(n,this.size,2);e.uniform2fv(this.addr,t)}function Um(e,n){const t=Ui(n,this.size,3);e.uniform3fv(this.addr,t)}function Fm(e,n){const t=Ui(n,this.size,4);e.uniform4fv(this.addr,t)}function Om(e,n){const t=Ui(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Bm(e,n){const t=Ui(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Gm(e,n){const t=Ui(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Hm(e,n){e.uniform1iv(this.addr,n)}function Vm(e,n){e.uniform2iv(this.addr,n)}function km(e,n){e.uniform3iv(this.addr,n)}function Wm(e,n){e.uniform4iv(this.addr,n)}function zm(e,n){e.uniform1uiv(this.addr,n)}function Xm(e,n){e.uniform2uiv(this.addr,n)}function qm(e,n){e.uniform3uiv(this.addr,n)}function Ym(e,n){e.uniform4uiv(this.addr,n)}function Km(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));let o;this.type===e.SAMPLER_2D_SHADOW?o=$r:o=Zc;for(let v=0;v!==r;++v)t.setTexture2D(n[v]||o,a[v])}function jm(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(n[o]||Jc,a[o])}function $m(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(n[o]||el,a[o])}function Zm(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(n[o]||Qc,a[o])}function Qm(e){switch(e){case 5126:return Dm;case 35664:return Im;case 35665:return Um;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return Gm;case 5124:case 35670:return Hm;case 35667:case 35671:return Vm;case 35668:case 35672:return km;case 35669:case 35673:return Wm;case 5125:return zm;case 36294:return Xm;case 36295:return qm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Zm}}class Jm{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Nm(t.type)}}class e_{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qm(t.type)}}class t_{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const v=r[a];v.setValue(n,t[v.id],i)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function zs(e,n){e.seq.push(n),e.map[n.id]=n}function n_(e,n,t){const i=e.name,r=i.length;for(Or.lastIndex=0;;){const a=Or.exec(i),o=Or.lastIndex;let v=a[1];const R=a[2]==="]",_=a[3];if(R&&(v=v|0),_===void 0||_==="["&&o+2===r){zs(t,_===void 0?new Jm(v,e,n):new e_(v,e,n));break}else{let S=t.map[v];S===void 0&&(S=new t_(v),zs(t,S)),t=S}}}class ka{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const v=n.getActiveUniform(t,o),R=n.getUniformLocation(t,v.name);n_(v,R,this)}const r=[],a=[];for(const o of this.seq)o.type===n.SAMPLER_2D_SHADOW||o.type===n.SAMPLER_CUBE_SHADOW||o.type===n.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,o=t.length;a!==o;++a){const v=t[a],R=i[v.id];R.needsUpdate!==!1&&v.setValue(n,R.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.id in t&&i.push(o)}return i}}function Xs(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const i_=37297;let a_=0;function r_(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=r;o<a;o++){const v=o+1;i.push(`${v===n?">":" "} ${v}: ${t[o]}`)}return i.join(`
`)}const qs=new ot;function o_(e){Dt._getMatrix(qs,Dt.workingColorSpace,e);const n=`mat3( ${qs.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(e)){case Fc:return[n,"LinearTransferOETF"];case wt:return[n,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Ys(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const v=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+r_(e.getShaderSource(n),v)}else return a}function s_(e,n){const t=o_(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const c_={[Wc]:"Linear",[kc]:"Reinhard",[Vc]:"Cineon",[Hc]:"ACESFilmic",[Gc]:"AgX",[Bc]:"Neutral",[Oc]:"Custom"};function l_(e,n){const t=c_[n];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fa=new Ie;function d_(){Dt.getLuminanceCoefficients(Fa);const e=Fa.x.toFixed(4),n=Fa.y.toFixed(4),t=Fa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function f_(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function p_(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),o=a.name;let v=1;a.type===e.FLOAT_MAT2&&(v=2),a.type===e.FLOAT_MAT3&&(v=3),a.type===e.FLOAT_MAT4&&(v=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:v}}return t}function la(e){return e!==""}function Ks(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function js(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const h_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(e){return e.replace(h_,__)}const m_=new Map;function __(e,n){let t=et[n];if(t===void 0){const i=m_.get(n);if(i!==void 0)t=et[i],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">")}return Zr(t)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $s(e){return e.replace(g_,v_)}function v_(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Zs(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}const S_={[Ha]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function x_(e){return S_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const E_={[pa]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function M_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":E_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const T_={[Ii]:"ENVMAP_MODE_REFRACTION"};function b_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":T_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const A_={[qu]:"ENVMAP_BLENDING_MULTIPLY",[Xu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function R_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":A_[e.combine]||"ENVMAP_BLENDING_NONE"}function w_(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function C_(e,n,t,i){const r=e.getContext(),a=t.defines;let o=t.vertexShader,v=t.fragmentShader;const R=x_(t),_=M_(t),x=b_(t),S=R_(t),h=w_(t),T=u_(t),C=f_(a),L=r.createProgram();let p,l,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(la).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C].filter(la).join(`
`),l.length>0&&(l+=`
`)):(p=[Zs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),l=[Zs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,C,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",t.envMap?"#define "+S:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?et.tonemapping_pars_fragment:"",t.toneMapping!==Dn?l_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,s_("linearToOutputTexel",t.outputColorSpace),d_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=Zr(o),o=Ks(o,t),o=js(o,t),v=Zr(v),v=Ks(v,t),v=js(v,t),o=$s(o),v=$s(v),t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,p=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",t.glslVersion===Ns?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ns?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const y=P+p+o,g=P+l+v,A=Xs(r,r.VERTEX_SHADER,y),m=Xs(r,r.FRAGMENT_SHADER,g);r.attachShader(L,A),r.attachShader(L,m),t.index0AttributeName!==void 0?r.bindAttribLocation(L,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(L,0,"position"),r.linkProgram(L);function N(G){if(e.debug.checkShaderErrors){const k=r.getProgramInfoLog(L)||"",q=r.getShaderInfoLog(A)||"",F=r.getShaderInfoLog(m)||"",$=k.trim(),K=q.trim(),Q=F.trim();let re=!0,ie=!0;if(r.getProgramParameter(L,r.LINK_STATUS)===!1)if(re=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,L,A,m);else{const se=Ys(r,A,"vertex"),ce=Ys(r,m,"fragment");yt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(L,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+$+`
`+se+`
`+ce)}else $!==""?gt("WebGLProgram: Program Info Log:",$):(K===""||Q==="")&&(ie=!1);ie&&(G.diagnostics={runnable:re,programLog:$,vertexShader:{log:K,prefix:p},fragmentShader:{log:Q,prefix:l}})}r.deleteShader(A),r.deleteShader(m),f=new ka(r,L),b=p_(r,L)}let f;this.getUniforms=function(){return f===void 0&&N(this),f};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(L,i_)),U},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(L),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a_++,this.cacheKey=n,this.usedTimes=1,this.program=L,this.vertexShader=A,this.fragmentShader=m,this}let P_=0;class y_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,t,i){const r=this._getShaderCacheForMaterial(n);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new L_(n),t.set(n,i)),i}}class L_{constructor(n){this.id=P_++,this.code=n,this.usedTimes=0}}function N_(e){return e===Ni||e===Yr||e===Kr}function D_(e,n,t,i,r,a){const o=new Hu,v=new y_,R=new Set,_=[],x=new Map,S=i.logarithmicDepthBuffer;let h=i.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(f){return R.add(f),f===0?"uv":`uv${f}`}function L(f,b,U,G,k,q){const F=G.fog,$=k.geometry,K=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?G.environment:null,Q=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,re=n.get(f.envMap||K,Q),ie=re&&re.mapping===ja?re.image.height:null,se=T[f.type];f.precision!==null&&(h=i.getMaxPrecision(f.precision),h!==f.precision&&gt("WebGLProgram.getParameters:",f.precision,"not supported, using",h,"instead."));const ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ye=ce!==void 0?ce.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let st,Ae,Be,Y;if(se){const St=Ln[se];st=St.vertexShader,Ae=St.fragmentShader}else{st=f.vertexShader,Ae=f.fragmentShader;const St=v.getVertexShaderStage(f),rt=v.getFragmentShaderStage(f);v.update(f,St,rt),Be=St.id,Y=rt.id}const te=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),We=k.isInstancedMesh===!0,ue=k.isBatchedMesh===!0,be=!!f.map,at=!!f.matcap,ke=!!re,Ze=!!f.aoMap,Ke=!!f.lightMap,je=!!f.bumpMap&&f.wireframe===!1,ut=!!f.normalMap,ct=!!f.displacementMap,Yt=!!f.emissiveMap,vt=!!f.metalnessMap,ht=!!f.roughnessMap,I=f.anisotropy>0,Gt=f.clearcoat>0,ft=f.dispersion>0,E=f.retroreflectivity>0,s=f.iridescence>0,B=f.sheen>0,X=f.transmission>0,j=I&&!!f.anisotropyMap,de=Gt&&!!f.clearcoatMap,me=Gt&&!!f.clearcoatNormalMap,Z=Gt&&!!f.clearcoatRoughnessMap,ee=s&&!!f.iridescenceMap,_e=s&&!!f.iridescenceThicknessMap,Fe=B&&!!f.sheenColorMap,ge=B&&!!f.sheenRoughnessMap,he=!!f.specularMap,Ne=!!f.specularColorMap,Ge=!!f.specularIntensityMap,$e=X&&!!f.transmissionMap,D=X&&!!f.thicknessMap,pe=!!f.gradientMap,J=!!f.alphaMap,fe=f.alphaTest>0,Ee=!!f.alphaHash,ae=!!f.extensions;let Oe=Dn;f.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Oe=e.toneMapping);const ye={shaderID:se,shaderType:f.type,shaderName:f.name,vertexShader:st,fragmentShader:Ae,defines:f.defines,customVertexShaderID:Be,customFragmentShaderID:Y,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:h,batching:ue,batchingColor:ue&&k._colorsTexture!==null,instancing:We,instancingColor:We&&k.instanceColor!==null,instancingMorph:We&&k.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:be,matcap:at,envMap:ke,envMapMode:ke&&re.mapping,envMapCubeUVHeight:ie,aoMap:Ze,lightMap:Ke,bumpMap:je,normalMap:ut,displacementMap:ct,emissiveMap:Yt,normalMapObjectSpace:ut&&f.normalMapType===Lu,normalMapTangentSpace:ut&&f.normalMapType===es,packedNormalMap:ut&&f.normalMapType===es&&N_(f.normalMap.format),metalnessMap:vt,roughnessMap:ht,anisotropy:I,anisotropyMap:j,clearcoat:Gt,clearcoatMap:de,clearcoatNormalMap:me,clearcoatRoughnessMap:Z,dispersion:ft,retroreflection:E,iridescence:s,iridescenceMap:ee,iridescenceThicknessMap:_e,sheen:B,sheenColorMap:Fe,sheenRoughnessMap:ge,specularMap:he,specularColorMap:Ne,specularIntensityMap:Ge,transmission:X,transmissionMap:$e,thicknessMap:D,gradientMap:pe,opaque:f.transparent===!1&&f.blending===Va&&f.alphaToCoverage===!1,alphaMap:J,alphaTest:fe,alphaHash:Ee,combine:f.combine,mapUv:be&&C(f.map.channel),aoMapUv:Ze&&C(f.aoMap.channel),lightMapUv:Ke&&C(f.lightMap.channel),bumpMapUv:je&&C(f.bumpMap.channel),normalMapUv:ut&&C(f.normalMap.channel),displacementMapUv:ct&&C(f.displacementMap.channel),emissiveMapUv:Yt&&C(f.emissiveMap.channel),metalnessMapUv:vt&&C(f.metalnessMap.channel),roughnessMapUv:ht&&C(f.roughnessMap.channel),anisotropyMapUv:j&&C(f.anisotropyMap.channel),clearcoatMapUv:de&&C(f.clearcoatMap.channel),clearcoatNormalMapUv:me&&C(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&C(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&C(f.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&C(f.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&C(f.sheenColorMap.channel),sheenRoughnessMapUv:ge&&C(f.sheenRoughnessMap.channel),specularMapUv:he&&C(f.specularMap.channel),specularColorMapUv:Ne&&C(f.specularColorMap.channel),specularIntensityMapUv:Ge&&C(f.specularIntensityMap.channel),transmissionMapUv:$e&&C(f.transmissionMap.channel),thicknessMapUv:D&&C(f.thicknessMap.channel),alphaMapUv:J&&C(f.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ut||I),vertexNormals:!!$.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(be||J),fog:!!F,useFog:f.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||$.attributes.normal===void 0&&ut===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ye,morphTextureStride:Ve,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:be&&f.map.isVideoTexture===!0&&Dt.getTransfer(f.map.colorSpace)===wt,decodeVideoTextureEmissive:Yt&&f.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(f.emissiveMap.colorSpace)===wt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===xn,flipSided:f.side===hn,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ae&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&f.extensions.multiDraw===!0||ue)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return ye.vertexUv1s=R.has(1),ye.vertexUv2s=R.has(2),ye.vertexUv3s=R.has(3),R.clear(),ye}function p(f){const b=[];if(f.shaderID?b.push(f.shaderID):(b.push(f.customVertexShaderID),b.push(f.customFragmentShaderID)),f.defines!==void 0)for(const U in f.defines)b.push(U),b.push(f.defines[U]);return f.isRawShaderMaterial===!1&&(l(b,f),P(b,f),b.push(e.outputColorSpace)),b.push(f.customProgramCacheKey),b.join()}function l(f,b){f.push(b.precision),f.push(b.outputColorSpace),f.push(b.envMapMode),f.push(b.envMapCubeUVHeight),f.push(b.mapUv),f.push(b.alphaMapUv),f.push(b.lightMapUv),f.push(b.aoMapUv),f.push(b.bumpMapUv),f.push(b.normalMapUv),f.push(b.displacementMapUv),f.push(b.emissiveMapUv),f.push(b.metalnessMapUv),f.push(b.roughnessMapUv),f.push(b.anisotropyMapUv),f.push(b.clearcoatMapUv),f.push(b.clearcoatNormalMapUv),f.push(b.clearcoatRoughnessMapUv),f.push(b.iridescenceMapUv),f.push(b.iridescenceThicknessMapUv),f.push(b.sheenColorMapUv),f.push(b.sheenRoughnessMapUv),f.push(b.specularMapUv),f.push(b.specularColorMapUv),f.push(b.specularIntensityMapUv),f.push(b.transmissionMapUv),f.push(b.thicknessMapUv),f.push(b.combine),f.push(b.fogExp2),f.push(b.sizeAttenuation),f.push(b.morphTargetsCount),f.push(b.morphAttributeCount),f.push(b.numSunLights),f.push(b.numDirLights),f.push(b.numPointLights),f.push(b.numSpotLights),f.push(b.numSpotLightMaps),f.push(b.numHemiLights),f.push(b.numRectAreaLights),f.push(b.numSunLightShadows),f.push(b.numDirLightShadows),f.push(b.numPointLightShadows),f.push(b.numSpotLightShadows),f.push(b.numSpotLightShadowsWithMaps),f.push(b.numLightProbes),f.push(b.shadowMapType),f.push(b.toneMapping),f.push(b.numClippingPlanes),f.push(b.numClipIntersection),f.push(b.depthPacking)}function P(f,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),f.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),f.push(o.mask)}function y(f){const b=T[f.type];let U;if(b){const G=Ln[b];U=yu.clone(G.uniforms)}else U=f.uniforms;return U}function g(f,b){let U=x.get(b);return U!==void 0?++U.usedTimes:(U=new C_(e,b,f,r),_.push(U),x.set(b,U)),U}function A(f){if(--f.usedTimes===0){const b=_.indexOf(f);_[b]=_[_.length-1],_.pop(),x.delete(f.cacheKey),f.destroy()}}function m(f){v.remove(f)}function N(){v.dispose()}return{getParameters:L,getProgramCacheKey:p,getUniforms:y,acquireProgram:g,releaseProgram:A,releaseShaderCache:m,programs:_,dispose:N}}function I_(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let v=e.get(o);return v===void 0&&(v={},e.set(o,v)),v}function i(o){e.delete(o)}function r(o,v,R){e.get(o)[v]=R}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function U_(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function Qs(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Js(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function o(h){let T=0;return h.isInstancedMesh&&(T+=2),h.isSkinnedMesh&&(T+=1),T}function v(h,T,C,L,p,l){let P=e[n];return P===void 0?(P={id:h.id,object:h,geometry:T,material:C,materialVariant:o(h),groupOrder:L,renderOrder:h.renderOrder,z:p,group:l},e[n]=P):(P.id=h.id,P.object=h,P.geometry=T,P.material=C,P.materialVariant=o(h),P.groupOrder=L,P.renderOrder=h.renderOrder,P.z=p,P.group=l),n++,P}function R(h,T,C,L,p,l,P){P.reversedDepth===!0&&(p=-p);const y=v(h,T,C,L,p,l);C.transmission>0?i.push(y):C.transparent===!0?r.push(y):t.push(y)}function _(h,T,C,L,p,l){const P=v(h,T,C,L,p,l);C.transmission>0?i.unshift(P):C.transparent===!0?r.unshift(P):t.unshift(P)}function x(h,T){t.length>1&&t.sort(h||U_),i.length>1&&i.sort(T||Qs),r.length>1&&r.sort(T||Qs)}function S(){for(let h=n,T=e.length;h<T;h++){const C=e[h];if(C.id===null)break;C.id=null,C.object=null,C.geometry=null,C.material=null,C.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:R,unshift:_,finish:S,sort:x}}function F_(){let e=new WeakMap;function n(i,r){const a=e.get(i);let o;return a===void 0?(o=new Js,e.set(i,[o])):r>=a.length?(o=new Js,a.push(o)):o=a[r],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function O_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={direction:new Ie,color:new At};break;case"SpotLight":t={position:new Ie,direction:new Ie,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ie,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ie,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Ie,halfWidth:new Ie,halfHeight:new Ie};break}return e[n.id]=t,t}}}function B_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let G_=0;function H_(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function V_(e){const n=new O_,t=B_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)i.probe.push(new Ie);const r=new Ie,a=new ti,o=new ti;function v(_){let x=0,S=0,h=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let T=0,C=0,L=0,p=0,l=0,P=0,y=0,g=0,A=0,m=0,N=0,f=0,b=0,U=0;_.sort(H_);for(let k=0,q=_.length;k<q;k++){const F=_[k],$=F.color,K=F.intensity,Q=F.distance;let re=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Ni?re=F.shadow.map.texture:re=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)x+=$.r*K,S+=$.g*K,h+=$.b*K;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(F.sh.coefficients[ie],K);U++}else if(F.isSunLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),i.sunShadow[C]=ce,i.sunShadowMap[C]=re;const Ye=se.getViewportCount();for(let Ve=0;Ve<Ye;Ve++)i.sunShadowMatrix[L+Ve]=se.getMatrix(Ve),i.sunShadowCascade[L+Ve]=se._cascadeData[Ve];L+=Ye,C++}i.sun[T]=ie,T++}else if(F.isDirectionalLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,i.directionalShadow[p]=ce,i.directionalShadowMap[p]=re,i.directionalShadowMatrix[p]=F.shadow.matrix,A++}i.directional[p]=ie,p++}else if(F.isSpotLight){const ie=n.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy($).multiplyScalar(K),ie.distance=Q,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,i.spot[P]=ie;const se=F.shadow;if(F.map&&(i.spotLightMap[f]=F.map,f++,se.updateMatrices(F),F.castShadow&&b++),i.spotLightMatrix[P]=se.matrix,F.castShadow){const ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,i.spotShadow[P]=ce,i.spotShadowMap[P]=re,N++}P++}else if(F.isRectAreaLight){const ie=n.get(F);ie.color.copy($).multiplyScalar(K),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=ie,y++}else if(F.isPointLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,ce.shadowCameraNear=se.camera.near,ce.shadowCameraFar=se.camera.far,i.pointShadow[l]=ce,i.pointShadowMap[l]=re,i.pointShadowMatrix[l]=F.shadow.matrix,m++}i.point[l]=ie,l++}else if(F.isHemisphereLight){const ie=n.get(F);ie.skyColor.copy(F.color).multiplyScalar(K),ie.groundColor.copy(F.groundColor).multiplyScalar(K),i.hemi[g]=ie,g++}}y>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=x,i.ambient[1]=S,i.ambient[2]=h;const G=i.hash;(G.sunLength!==T||G.directionalLength!==p||G.pointLength!==l||G.spotLength!==P||G.rectAreaLength!==y||G.hemiLength!==g||G.numSunShadows!==C||G.numDirectionalShadows!==A||G.numPointShadows!==m||G.numSpotShadows!==N||G.numSpotMaps!==f||G.numLightProbes!==U)&&(i.sun.length=T,i.directional.length=p,i.spot.length=P,i.rectArea.length=y,i.point.length=l,i.hemi.length=g,i.sunShadow.length=C,i.sunShadowMap.length=C,i.sunShadowMatrix.length=L,i.sunShadowCascade.length=L,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=m,i.pointShadowMap.length=m,i.pointShadowMatrix.length=m,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+f-b,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=U,G.sunLength=T,G.directionalLength=p,G.pointLength=l,G.spotLength=P,G.rectAreaLength=y,G.hemiLength=g,G.numSunShadows=C,G.numDirectionalShadows=A,G.numPointShadows=m,G.numSpotShadows=N,G.numSpotMaps=f,G.numLightProbes=U,i.version=G_++)}function R(_,x){let S=0,h=0,T=0,C=0,L=0,p=0;const l=x.matrixWorldInverse;for(let P=0,y=_.length;P<y;P++){const g=_[P];if(g.isSunLight){const A=i.sun[S];A.direction.setFromMatrixPosition(g.matrixWorld),A.direction.transformDirection(l),S++}else if(g.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(l),h++}else if(g.isSpotLight){const A=i.spot[C];A.position.setFromMatrixPosition(g.matrixWorld),A.position.applyMatrix4(l),A.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(l),C++}else if(g.isRectAreaLight){const A=i.rectArea[L];A.position.setFromMatrixPosition(g.matrixWorld),A.position.applyMatrix4(l),o.identity(),a.copy(g.matrixWorld),a.premultiply(l),o.extractRotation(a),A.halfWidth.set(g.width*.5,0,0),A.halfHeight.set(0,g.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),L++}else if(g.isPointLight){const A=i.point[T];A.position.setFromMatrixPosition(g.matrixWorld),A.position.applyMatrix4(l),T++}else if(g.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(g.matrixWorld),A.direction.transformDirection(l),p++}}}return{setup:v,setupView:R,state:i}}function ec(e){const n=new V_(e),t=[],i=[],r=[];function a(h){S.camera=h,t.length=0,i.length=0,r.length=0}function o(h){t.push(h)}function v(h){i.push(h)}function R(h){r.push(h)}function _(){n.setup(t)}function x(h){n.setupView(t,h)}const S={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:S,setupLights:_,setupLightsView:x,pushLight:o,pushShadow:v,pushLightProbeGrid:R}}function k_(e){let n=new WeakMap;function t(r,a=0){const o=n.get(r);let v;return o===void 0?(v=new ec(e),n.set(r,[v])):a>=o.length?(v=new ec(e),o.push(v)):v=o[a],v}function i(){n=new WeakMap}return{get:t,dispose:i}}const W_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,z_=`uniform sampler2D shadow_pass;
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
}`,X_=[new Ie(1,0,0),new Ie(-1,0,0),new Ie(0,1,0),new Ie(0,-1,0),new Ie(0,0,1),new Ie(0,0,-1)],q_=[new Ie(0,-1,0),new Ie(0,-1,0),new Ie(0,0,1),new Ie(0,0,-1),new Ie(0,-1,0),new Ie(0,-1,0)],tc=new ti,ra=new Ie,Br=new Ie;function Y_(e,n,t){let i=new Tc;const r=new nn,a=new nn,o=new ln,v=new lu,R=new du,_={},x=t.maxTextureSize,S={[ua]:hn,[hn]:ua,[xn]:xn},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nn},radius:{value:4}},vertexShader:W_,fragmentShader:z_}),T=h.clone();T.defines.HORIZONTAL_PASS=1;const C=new hi;C.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const L=new Mn(C,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let l=this.type;this.render=function(m,N,f){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||m.length===0)return;this.type===uu&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ha);const b=e.getRenderTarget(),U=e.getActiveCubeFace(),G=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Vn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=l!==this.type;q&&N.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach($=>$.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,$=m.length;F<$;F++){const K=m[F],Q=K.shadow;if(Q===void 0){gt("WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const re=Q.getFrameExtents();r.multiply(re),a.copy(Q.mapSize),(r.x>x||r.y>x)&&(r.x>x&&(a.x=Math.floor(x/re.x),r.x=a.x*re.x,Q.mapSize.x=a.x),r.y>x&&(a.y=Math.floor(x/re.y),r.y=a.y*re.y,Q.mapSize.y=a.y));const ie=e.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ie,Q.map===null||q===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===ca){if(K.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new En(r.x,r.y,{format:Ni,type:kn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Q.map.texture.name=K.name+".shadowMap",Q.map.depthTexture=new za(r.x,r.y,Zn),Q.map.depthTexture.name=K.name+".shadowMapDepth",Q.map.depthTexture.format=Di,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=pi,Q.map.depthTexture.magFilter=pi}else K.isPointLight?(Q.map=new $c(r.x),Q.map.depthTexture=new fu(r.x,mi)):(Q.map=new En(r.x,r.y),Q.map.depthTexture=new za(r.x,r.y,mi)),Q.map.depthTexture.name=K.name+".shadowMap",Q.map.depthTexture.format=Di,this.type===Ha?(Q.map.depthTexture.compareFunction=ie?io:ao,Q.map.depthTexture.minFilter=pn,Q.map.depthTexture.magFilter=pn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=pi,Q.map.depthTexture.magFilter=pi);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==r.x||Q.map.height!==r.y)&&Q.map.setSize(r.x,r.y);const se=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();K.isPointLight!==!0&&Q.updateMatrices(K,f);for(let ce=0;ce<se;ce++){const Ye=Q.getCamera(ce);if(K.isPointLight){const Ve=Q.camera,st=Q.matrix,Ae=K.distance||Ve.far;Ae!==Ve.far&&(Ve.far=Ae,Ve.updateProjectionMatrix()),ra.setFromMatrixPosition(K.matrixWorld),Ve.position.copy(ra),Br.copy(Ve.position),Br.add(X_[ce]),Ve.up.copy(q_[ce]),Ve.lookAt(Br),Ve.updateMatrixWorld(),st.makeTranslation(-ra.x,-ra.y,-ra.z),tc.multiplyMatrices(Ve.projectionMatrix,Ve.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(tc,Ve.coordinateSystem,Ve.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)e.setRenderTarget(Q.map,ce),e.clear();else{ce===0&&(e.setRenderTarget(Q.map),e.clear());const Ve=Q.getViewport(ce);o.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),k.viewport(o)}i=Q.getFrustum(ce),g(N,f,Ye,K,this.type)}Q.isPointLightShadow!==!0&&this.type===ca&&P(Q,f),Q.needsUpdate=!1}l=this.type,p.needsUpdate=!1,e.setRenderTarget(b,U,G)};function P(m,N){const f=n.update(L);h.defines.VSM_SAMPLES!==m.blurSamples&&(h.defines.VSM_SAMPLES=m.blurSamples,T.defines.VSM_SAMPLES=m.blurSamples,h.needsUpdate=!0,T.needsUpdate=!0),m.mapPass===null?m.mapPass=new En(r.x,r.y,{format:Ni,type:kn}):(m.mapPass.width!==m.map.width||m.mapPass.height!==m.map.height)&&m.mapPass.setSize(m.map.width,m.map.height),h.uniforms.shadow_pass.value=m.map.depthTexture,h.uniforms.resolution.value.set(m.map.width,m.map.height),h.uniforms.radius.value=m.radius,e.setRenderTarget(m.mapPass),e.clear(),e.renderBufferDirect(N,null,f,h,L,null),T.uniforms.shadow_pass.value=m.mapPass.texture,T.uniforms.resolution.value.set(m.map.width,m.map.height),T.uniforms.radius.value=m.radius,e.setRenderTarget(m.map),e.clear(),e.renderBufferDirect(N,null,f,T,L,null)}function y(m,N,f,b){let U=null;const G=f.isPointLight===!0?m.customDistanceMaterial:m.customDepthMaterial;if(G!==void 0)U=G;else if(U=f.isPointLight===!0?R:v,e.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const k=U.uuid,q=N.uuid;let F=_[k];F===void 0&&(F={},_[k]=F);let $=F[q];$===void 0&&($=U.clone(),F[q]=$,N.addEventListener("dispose",A)),U=$}if(U.visible=N.visible,U.wireframe=N.wireframe,b===ca?U.side=N.shadowSide!==null?N.shadowSide:N.side:U.side=N.shadowSide!==null?N.shadowSide:S[N.side],U.alphaMap=N.alphaMap,U.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,U.map=N.map,U.clipShadows=N.clipShadows,U.clippingPlanes=N.clippingPlanes,U.clipIntersection=N.clipIntersection,U.displacementMap=N.displacementMap,U.displacementScale=N.displacementScale,U.displacementBias=N.displacementBias,U.wireframeLinewidth=N.wireframeLinewidth,U.linewidth=N.linewidth,f.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const k=e.properties.get(U);k.light=f}return U}function g(m,N,f,b,U){if(m.visible===!1)return;if(m.layers.test(N.layers)&&(m.isMesh||m.isLine||m.isPoints)&&(m.castShadow||m.receiveShadow&&U===ca)&&(!m.frustumCulled||m.intersectsFrustum(i))){m.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,m.matrixWorld);const q=n.update(m),F=m.material;if(Array.isArray(F)){const $=q.groups;for(let K=0,Q=$.length;K<Q;K++){const re=$[K],ie=F[re.materialIndex];if(ie&&ie.visible){const se=y(m,ie,b,U);m.onBeforeShadow(e,m,N,f,q,se,re),e.renderBufferDirect(f,null,q,se,m,re),m.onAfterShadow(e,m,N,f,q,se,re)}}}else if(F.visible){const $=y(m,F,b,U);m.onBeforeShadow(e,m,N,f,q,$,null),e.renderBufferDirect(f,null,q,$,m,null),m.onAfterShadow(e,m,N,f,q,$,null)}}const k=m.children;for(let q=0,F=k.length;q<F;q++)g(k[q],N,f,b,U)}function A(m){m.target.removeEventListener("dispose",A);for(const f in _){const b=_[f],U=m.target.uuid;U in b&&(b[U].dispose(),delete b[U])}}}function K_(e,n){function t(){let D=!1;const pe=new ln;let J=null;const fe=new ln(0,0,0,0);return{setMask:function(Ee){J!==Ee&&!D&&(e.colorMask(Ee,Ee,Ee,Ee),J=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,ae,Oe,ye,St){St===!0&&(Ee*=ye,ae*=ye,Oe*=ye),pe.set(Ee,ae,Oe,ye),fe.equals(pe)===!1&&(e.clearColor(Ee,ae,Oe,ye),fe.copy(pe))},reset:function(){D=!1,J=null,fe.set(-1,0,0,0)}}}function i(){let D=!1,pe=!1,J=null,fe=null,Ee=null;return{setReversed:function(ae){if(pe!==ae){const Oe=n.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),pe=ae;const ye=Ee;Ee=null,this.setClear(ye)}},getReversed:function(){return pe},setTest:function(ae){ae?te(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){J!==ae&&!D&&(e.depthMask(ae),J=ae)},setFunc:function(ae){if(pe&&(ae=ju[ae]),fe!==ae){switch(ae){case Ru:e.depthFunc(e.NEVER);break;case Au:e.depthFunc(e.ALWAYS);break;case bu:e.depthFunc(e.LESS);break;case jo:e.depthFunc(e.LEQUAL);break;case Tu:e.depthFunc(e.EQUAL);break;case Mu:e.depthFunc(e.GEQUAL);break;case Eu:e.depthFunc(e.GREATER);break;case xu:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}fe=ae}},setLocked:function(ae){D=ae},setClear:function(ae){Ee!==ae&&(Ee=ae,pe&&(ae=1-ae),e.clearDepth(ae))},reset:function(){D=!1,J=null,fe=null,Ee=null,pe=!1}}}function r(){let D=!1,pe=null,J=null,fe=null,Ee=null,ae=null,Oe=null,ye=null,St=null;return{setTest:function(rt){D||(rt?te(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!D&&(e.stencilMask(rt),pe=rt)},setFunc:function(rt,Kt,dn){(J!==rt||fe!==Kt||Ee!==dn)&&(e.stencilFunc(rt,Kt,dn),J=rt,fe=Kt,Ee=dn)},setOp:function(rt,Kt,dn){(ae!==rt||Oe!==Kt||ye!==dn)&&(e.stencilOp(rt,Kt,dn),ae=rt,Oe=Kt,ye=dn)},setLocked:function(rt){D=rt},setClear:function(rt){St!==rt&&(e.clearStencil(rt),St=rt)},reset:function(){D=!1,pe=null,J=null,fe=null,Ee=null,ae=null,Oe=null,ye=null,St=null}}}const a=new t,o=new i,v=new r,R=new WeakMap,_=new WeakMap;let x={},S={},h={},T=new WeakMap,C=[],L=null,p=!1,l=null,P=null,y=null,g=null,A=null,m=null,N=null,f=new At(0,0,0),b=0,U=!1,G=null,k=null,q=null,F=null,$=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,re=0;const ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=re>=1):ie.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=re>=2);let se=null,ce={};const Ye=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),st=new ln().fromArray(Ye),Ae=new ln().fromArray(Ve);function Be(D,pe,J,fe){const Ee=new Uint8Array(4),ae=e.createTexture();e.bindTexture(D,ae),e.texParameteri(D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(D,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Oe=0;Oe<J;Oe++)D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY?e.texImage3D(pe,0,e.RGBA,1,1,fe,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D(pe+Oe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return ae}const Y={};Y[e.TEXTURE_2D]=Be(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=Be(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=Be(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=Be(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),v.setClear(0),te(e.DEPTH_TEST),o.setFunc(jo),je(!1),ut($o),te(e.CULL_FACE),Ze(Vn);function te(D){x[D]!==!0&&(e.enable(D),x[D]=!0)}function Me(D){x[D]!==!1&&(e.disable(D),x[D]=!1)}function We(D,pe){return h[D]!==pe?(e.bindFramebuffer(D,pe),h[D]=pe,D===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=pe),D===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=pe),!0):!1}function ue(D,pe){let J=C,fe=!1;if(D){J=T.get(pe),J===void 0&&(J=[],T.set(pe,J));const Ee=D.textures;if(J.length!==Ee.length||J[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Oe=Ee.length;ae<Oe;ae++)J[ae]=e.COLOR_ATTACHMENT0+ae;J.length=Ee.length,fe=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,fe=!0);fe&&e.drawBuffers(J)}function be(D){return L!==D?(e.useProgram(D),L=D,!0):!1}const at={[ia]:e.FUNC_ADD,[Bd]:e.FUNC_SUBTRACT,[Od]:e.FUNC_REVERSE_SUBTRACT};at[$u]=e.MIN,at[Zu]=e.MAX;const ke={[Jd]:e.ZERO,[Qd]:e.ONE,[Zd]:e.SRC_COLOR,[$d]:e.SRC_ALPHA,[jd]:e.SRC_ALPHA_SATURATE,[Kd]:e.DST_COLOR,[Yd]:e.DST_ALPHA,[qd]:e.ONE_MINUS_SRC_COLOR,[Xd]:e.ONE_MINUS_SRC_ALPHA,[zd]:e.ONE_MINUS_DST_COLOR,[Wd]:e.ONE_MINUS_DST_ALPHA,[kd]:e.CONSTANT_COLOR,[Vd]:e.ONE_MINUS_CONSTANT_COLOR,[Hd]:e.CONSTANT_ALPHA,[Gd]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(D,pe,J,fe,Ee,ae,Oe,ye,St,rt){if(D===Vn){p===!0&&(Me(e.BLEND),p=!1);return}if(p===!1&&(te(e.BLEND),p=!0),D!==Pu){if(D!==l||rt!==U){if((P!==ia||A!==ia)&&(e.blendEquation(e.FUNC_ADD),P=ia,A=ia),rt)switch(D){case Va:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Jo:e.blendFunc(e.ONE,e.ONE);break;case Qo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:yt("WebGLState: Invalid blending: ",D);break}else switch(D){case Va:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Jo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Qo:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",D);break}y=null,g=null,m=null,N=null,f.set(0,0,0),b=0,l=D,U=rt}return}Ee=Ee||pe,ae=ae||J,Oe=Oe||fe,(pe!==P||Ee!==A)&&(e.blendEquationSeparate(at[pe],at[Ee]),P=pe,A=Ee),(J!==y||fe!==g||ae!==m||Oe!==N)&&(e.blendFuncSeparate(ke[J],ke[fe],ke[ae],ke[Oe]),y=J,g=fe,m=ae,N=Oe),(ye.equals(f)===!1||St!==b)&&(e.blendColor(ye.r,ye.g,ye.b,St),f.copy(ye),b=St),l=D,U=!1}function Ke(D,pe){D.side===xn?Me(e.CULL_FACE):te(e.CULL_FACE);let J=D.side===hn;pe&&(J=!J),je(J),D.blending===Va&&D.transparent===!1?Ze(Vn):Ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),a.setMask(D.colorWrite);const fe=D.stencilWrite;v.setTest(fe),fe&&(v.setMask(D.stencilWriteMask),v.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),v.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Yt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function je(D){G!==D&&(D?e.frontFace(e.CW):e.frontFace(e.CCW),G=D)}function ut(D){D!==wu?(te(e.CULL_FACE),D!==k&&(D===$o?e.cullFace(e.BACK):D===Cu?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),k=D}function ct(D){D!==q&&(Q&&e.lineWidth(D),q=D)}function Yt(D,pe,J){D?(te(e.POLYGON_OFFSET_FILL),(F!==pe||$!==J)&&(F=pe,$=J,o.getReversed()&&(pe=-pe),e.polygonOffset(pe,J))):Me(e.POLYGON_OFFSET_FILL)}function vt(D){D?te(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function ht(D){D===void 0&&(D=e.TEXTURE0+K-1),se!==D&&(e.activeTexture(D),se=D)}function I(D,pe,J){J===void 0&&(se===null?J=e.TEXTURE0+K-1:J=se);let fe=ce[J];fe===void 0&&(fe={type:void 0,texture:void 0},ce[J]=fe),(fe.type!==D||fe.texture!==pe)&&(se!==J&&(e.activeTexture(J),se=J),e.bindTexture(D,pe||Y[D]),fe.type=D,fe.texture=pe)}function Gt(){const D=ce[se];D!==void 0&&D.type!==void 0&&(e.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function ft(){try{e.compressedTexImage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function s(){try{e.texSubImage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function B(){try{e.texSubImage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function j(){try{e.compressedTexSubImage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function de(){try{e.texStorage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function me(){try{e.texStorage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function Z(){try{e.texImage2D(...arguments)}catch(D){yt("WebGLState:",D)}}function ee(){try{e.texImage3D(...arguments)}catch(D){yt("WebGLState:",D)}}function _e(D){return S[D]!==void 0?S[D]:e.getParameter(D)}function Fe(D,pe){S[D]!==pe&&(e.pixelStorei(D,pe),S[D]=pe)}function ge(D){st.equals(D)===!1&&(e.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function he(D){Ae.equals(D)===!1&&(e.viewport(D.x,D.y,D.z,D.w),Ae.copy(D))}function Ne(D,pe){let J=_.get(pe);J===void 0&&(J=new WeakMap,_.set(pe,J));let fe=J.get(D);fe===void 0&&(fe=e.getUniformBlockIndex(pe,D.name),J.set(D,fe))}function Ge(D,pe){const fe=_.get(pe).get(D);R.get(pe)!==fe&&(e.uniformBlockBinding(pe,fe,D.__bindingPointIndex),R.set(pe,fe))}function $e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),x={},S={},se=null,ce={},h={},T=new WeakMap,C=[],L=null,p=!1,l=null,P=null,y=null,g=null,A=null,m=null,N=null,f=new At(0,0,0),b=0,U=!1,G=null,k=null,q=null,F=null,$=null,st.set(0,0,e.canvas.width,e.canvas.height),Ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),v.reset()}return{buffers:{color:a,depth:o,stencil:v},enable:te,disable:Me,bindFramebuffer:We,drawBuffers:ue,useProgram:be,setBlending:Ze,setMaterial:Ke,setFlipSided:je,setCullFace:ut,setLineWidth:ct,setPolygonOffset:Yt,setScissorTest:vt,activeTexture:ht,bindTexture:I,unbindTexture:Gt,compressedTexImage2D:ft,compressedTexImage3D:E,texImage2D:Z,texImage3D:ee,pixelStorei:Fe,getParameter:_e,updateUBOMapping:Ne,uniformBlockBinding:Ge,texStorage2D:de,texStorage3D:me,texSubImage2D:s,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:ge,viewport:he,reset:$e}}function j_(e,n,t,i,r,a,o){const v=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,R=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new nn,x=new WeakMap,S=new Set;let h;const T=new WeakMap;let C=!1;try{C=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(E,s){return C?new OffscreenCanvas(E,s):Wu("canvas")}function p(E,s,B){let X=1;const j=ft(E);if((j.width>B||j.height>B)&&(X=B/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const de=Math.floor(X*j.width),me=Math.floor(X*j.height);h===void 0&&(h=L(de,me));const Z=s?L(de,me):h;return Z.width=de,Z.height=me,Z.getContext("2d").drawImage(E,0,0,de,me),gt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+de+"x"+me+")."),Z}else return"data"in E&&gt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function l(E){return E.generateMipmaps}function P(E){e.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(E,s,B,X,j,de=!1){if(E!==null){if(e[E]!==void 0)return e[E];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let me;X&&(me=n.get("EXT_texture_norm16"),me||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=s;if(s===e.RED&&(B===e.FLOAT&&(Z=e.R32F),B===e.HALF_FLOAT&&(Z=e.R16F),B===e.UNSIGNED_BYTE&&(Z=e.R8),B===e.UNSIGNED_SHORT&&me&&(Z=me.R16_EXT),B===e.SHORT&&me&&(Z=me.R16_SNORM_EXT)),s===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.R8UI),B===e.UNSIGNED_SHORT&&(Z=e.R16UI),B===e.UNSIGNED_INT&&(Z=e.R32UI),B===e.BYTE&&(Z=e.R8I),B===e.SHORT&&(Z=e.R16I),B===e.INT&&(Z=e.R32I)),s===e.RG&&(B===e.FLOAT&&(Z=e.RG32F),B===e.HALF_FLOAT&&(Z=e.RG16F),B===e.UNSIGNED_BYTE&&(Z=e.RG8),B===e.UNSIGNED_SHORT&&me&&(Z=me.RG16_EXT),B===e.SHORT&&me&&(Z=me.RG16_SNORM_EXT)),s===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RG8UI),B===e.UNSIGNED_SHORT&&(Z=e.RG16UI),B===e.UNSIGNED_INT&&(Z=e.RG32UI),B===e.BYTE&&(Z=e.RG8I),B===e.SHORT&&(Z=e.RG16I),B===e.INT&&(Z=e.RG32I)),s===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),B===e.UNSIGNED_INT&&(Z=e.RGB32UI),B===e.BYTE&&(Z=e.RGB8I),B===e.SHORT&&(Z=e.RGB16I),B===e.INT&&(Z=e.RGB32I)),s===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),B===e.UNSIGNED_INT&&(Z=e.RGBA32UI),B===e.BYTE&&(Z=e.RGBA8I),B===e.SHORT&&(Z=e.RGBA16I),B===e.INT&&(Z=e.RGBA32I)),s===e.RGB&&(B===e.UNSIGNED_SHORT&&me&&(Z=me.RGB16_EXT),B===e.SHORT&&me&&(Z=me.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),s===e.RGBA){const ee=de?Fc:Dt.getTransfer(j);B===e.FLOAT&&(Z=e.RGBA32F),B===e.HALF_FLOAT&&(Z=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Z=ee===wt?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&me&&(Z=me.RGBA16_EXT),B===e.SHORT&&me&&(Z=me.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&n.get("EXT_color_buffer_float"),Z}function A(E,s){let B;return E?s===null||s===mi||s===fa?B=e.DEPTH24_STENCIL8:s===Zn?B=e.DEPTH32F_STENCIL8:s===qa&&(B=e.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===mi||s===fa?B=e.DEPTH_COMPONENT24:s===Zn?B=e.DEPTH_COMPONENT32F:s===qa&&(B=e.DEPTH_COMPONENT16),B}function m(E,s){return l(E)===!0||E.isFramebufferTexture&&E.minFilter!==pi&&E.minFilter!==pn?Math.log2(Math.max(s.width,s.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?s.mipmaps.length:1}function N(E){const s=E.target;s.removeEventListener("dispose",N),b(s),s.isVideoTexture&&x.delete(s),s.isHTMLTexture&&S.delete(s)}function f(E){const s=E.target;s.removeEventListener("dispose",f),G(s)}function b(E){const s=i.get(E);if(s.__webglInit===void 0)return;const B=E.source,X=T.get(B);if(X){const j=X[s.__cacheKey];j.usedTimes--,j.usedTimes===0&&U(E),Object.keys(X).length===0&&T.delete(B)}i.remove(E)}function U(E){const s=i.get(E);e.deleteTexture(s.__webglTexture);const B=E.source,X=T.get(B);delete X[s.__cacheKey],o.memory.textures--}function G(E){const s=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(s.__webglFramebuffer[X]))for(let j=0;j<s.__webglFramebuffer[X].length;j++)e.deleteFramebuffer(s.__webglFramebuffer[X][j]);else e.deleteFramebuffer(s.__webglFramebuffer[X]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[X])}else{if(Array.isArray(s.__webglFramebuffer))for(let X=0;X<s.__webglFramebuffer.length;X++)e.deleteFramebuffer(s.__webglFramebuffer[X]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let X=0;X<s.__webglColorRenderbuffer.length;X++)s.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[X]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const B=E.textures;for(let X=0,j=B.length;X<j;X++){const de=i.get(B[X]);de.__webglTexture&&(e.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(B[X])}i.remove(E)}let k=0;function q(){k=0}function F(){return k}function $(E){k=E}function K(){const E=k;return E>=r.maxTextures&&gt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,E}function Q(E){const s=[];return s.push(E.wrapS),s.push(E.wrapT),s.push(E.wrapR||0),s.push(E.magFilter),s.push(E.minFilter),s.push(E.anisotropy),s.push(E.internalFormat),s.push(E.format),s.push(E.type),s.push(E.generateMipmaps),s.push(E.premultiplyAlpha),s.push(E.flipY),s.push(E.unpackAlignment),s.push(E.colorSpace),s.join()}function re(E,s){const B=i.get(E);if(E.isVideoTexture&&I(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){const X=E.image;if(X===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(B,E,s);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+s)}function ie(E,s){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Me(B,E,s);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+s)}function se(E,s){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Me(B,E,s);return}t.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+s)}function ce(E,s){const B=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){We(B,E,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+s)}const Ye={[tu]:e.REPEAT,[Xr]:e.CLAMP_TO_EDGE,[eu]:e.MIRRORED_REPEAT},Ve={[pi]:e.NEAREST,[nu]:e.NEAREST_MIPMAP_NEAREST,[Da]:e.NEAREST_MIPMAP_LINEAR,[pn]:e.LINEAR,[Ar]:e.LINEAR_MIPMAP_NEAREST,[Pi]:e.LINEAR_MIPMAP_LINEAR},st={[cu]:e.NEVER,[su]:e.ALWAYS,[ou]:e.LESS,[ao]:e.LEQUAL,[ru]:e.EQUAL,[io]:e.GEQUAL,[au]:e.GREATER,[iu]:e.NOTEQUAL};function Ae(E,s){if(s.type===Zn&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===pn||s.magFilter===Ar||s.magFilter===Da||s.magFilter===Pi||s.minFilter===pn||s.minFilter===Ar||s.minFilter===Da||s.minFilter===Pi)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,Ye[s.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,Ye[s.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,Ye[s.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Ve[s.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Ve[s.minFilter]),s.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,st[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===pi||s.minFilter!==Da&&s.minFilter!==Pi||s.type===Zn&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const B=n.get("EXT_texture_filter_anisotropic");e.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function Be(E,s){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,s.addEventListener("dispose",N));const X=s.source;let j=T.get(X);j===void 0&&(j={},T.set(X,j));const de=Q(s);if(de!==E.__cacheKey){j[de]===void 0&&(j[de]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[de].usedTimes++;const me=j[E.__cacheKey];me!==void 0&&(j[E.__cacheKey].usedTimes--,me.usedTimes===0&&U(s)),E.__cacheKey=de,E.__webglTexture=j[de].texture}return B}function Y(E,s,B){return Math.floor(Math.floor(E/B)/s)}function te(E,s,B,X){const de=E.updateRanges;if(de.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,B,X,s.data);else{de.sort((Fe,ge)=>Fe.start-ge.start);let me=0;for(let Fe=1;Fe<de.length;Fe++){const ge=de[me],he=de[Fe],Ne=ge.start+ge.count,Ge=Y(he.start,s.width,4),$e=Y(ge.start,s.width,4);he.start<=Ne+1&&Ge===$e&&Y(he.start+he.count-1,s.width,4)===Ge?ge.count=Math.max(ge.count,he.start+he.count-ge.start):(++me,de[me]=he)}de.length=me+1;const Z=t.getParameter(e.UNPACK_ROW_LENGTH),ee=t.getParameter(e.UNPACK_SKIP_PIXELS),_e=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let Fe=0,ge=de.length;Fe<ge;Fe++){const he=de[Fe],Ne=Math.floor(he.start/4),Ge=Math.ceil(he.count/4),$e=Ne%s.width,D=Math.floor(Ne/s.width),pe=Ge,J=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(e.UNPACK_SKIP_ROWS,D),t.texSubImage2D(e.TEXTURE_2D,0,$e,D,pe,J,B,X,s.data)}E.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,Z),t.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(e.UNPACK_SKIP_ROWS,_e)}}function Me(E,s,B){let X=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(X=e.TEXTURE_3D);const j=Be(E,s),de=s.source;t.bindTexture(X,E.__webglTexture,e.TEXTURE0+B);const me=i.get(de);if(de.version!==me.__version||j===!0){if(t.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&s.image instanceof ImageBitmap)===!1){const J=Dt.getPrimaries(Dt.workingColorSpace),fe=s.colorSpace===Ci?null:Dt.getPrimaries(s.colorSpace),Ee=s.colorSpace===Ci||J===fe?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment);let ee=p(s.image,!1,r.maxTextureSize);ee=Gt(s,ee);const _e=a.convert(s.format,s.colorSpace),Fe=a.convert(s.type);let ge=g(s.internalFormat,_e,Fe,s.normalized,s.colorSpace,s.isVideoTexture);Ae(X,s);let he;const Ne=s.mipmaps,Ge=s.isVideoTexture!==!0,$e=me.__version===void 0||j===!0,D=de.dataReady,pe=m(s,ee);if(s.isDepthTexture)ge=A(s.format===yi,s.type),$e&&(Ge?t.texStorage2D(e.TEXTURE_2D,1,ge,ee.width,ee.height):t.texImage2D(e.TEXTURE_2D,0,ge,ee.width,ee.height,0,_e,Fe,null));else if(s.isDataTexture)if(Ne.length>0){Ge&&$e&&t.texStorage2D(e.TEXTURE_2D,pe,ge,Ne[0].width,Ne[0].height);for(let J=0,fe=Ne.length;J<fe;J++)he=Ne[J],Ge?D&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,he.width,he.height,_e,Fe,he.data):t.texImage2D(e.TEXTURE_2D,J,ge,he.width,he.height,0,_e,Fe,he.data);s.generateMipmaps=!1}else Ge?($e&&t.texStorage2D(e.TEXTURE_2D,pe,ge,ee.width,ee.height),D&&te(s,ee,_e,Fe)):t.texImage2D(e.TEXTURE_2D,0,ge,ee.width,ee.height,0,_e,Fe,ee.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){Ge&&$e&&t.texStorage3D(e.TEXTURE_2D_ARRAY,pe,ge,Ne[0].width,Ne[0].height,ee.depth);for(let J=0,fe=Ne.length;J<fe;J++)if(he=Ne[J],s.format!==Hn)if(_e!==null)if(Ge){if(D)if(s.layerUpdates.size>0){const Ee=Ls(he.width,he.height,s.format,s.type);for(const ae of s.layerUpdates){const Oe=he.data.subarray(ae*Ee/he.data.BYTES_PER_ELEMENT,(ae+1)*Ee/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,ae,he.width,he.height,1,_e,Oe)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,ee.depth,_e,he.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,ge,he.width,he.height,ee.depth,0,he.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,he.width,he.height,ee.depth,_e,Fe,he.data):t.texImage3D(e.TEXTURE_2D_ARRAY,J,ge,he.width,he.height,ee.depth,0,_e,Fe,he.data);s.layerUpdates.size>0&&s.clearLayerUpdates()}else{Ge&&$e&&t.texStorage2D(e.TEXTURE_2D,pe,ge,Ne[0].width,Ne[0].height);for(let J=0,fe=Ne.length;J<fe;J++)he=Ne[J],s.format!==Hn?_e!==null?Ge?D&&t.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,he.width,he.height,_e,he.data):t.compressedTexImage2D(e.TEXTURE_2D,J,ge,he.width,he.height,0,he.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,he.width,he.height,_e,Fe,he.data):t.texImage2D(e.TEXTURE_2D,J,ge,he.width,he.height,0,_e,Fe,he.data)}else if(s.isDataArrayTexture)if(Ge){if($e&&t.texStorage3D(e.TEXTURE_2D_ARRAY,pe,ge,ee.width,ee.height,ee.depth),D)if(s.layerUpdates.size>0){const J=Ls(ee.width,ee.height,s.format,s.type);for(const fe of s.layerUpdates){const Ee=ee.data.subarray(fe*J/ee.data.BYTES_PER_ELEMENT,(fe+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,fe,ee.width,ee.height,1,_e,Fe,Ee)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,_e,Fe,ee.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ge,ee.width,ee.height,ee.depth,0,_e,Fe,ee.data);else if(s.isData3DTexture)Ge?($e&&t.texStorage3D(e.TEXTURE_3D,pe,ge,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,_e,Fe,ee.data)):t.texImage3D(e.TEXTURE_3D,0,ge,ee.width,ee.height,ee.depth,0,_e,Fe,ee.data);else if(s.isFramebufferTexture){if($e)if(Ge)t.texStorage2D(e.TEXTURE_2D,pe,ge,ee.width,ee.height);else{let J=ee.width,fe=ee.height;for(let Ee=0;Ee<pe;Ee++)t.texImage2D(e.TEXTURE_2D,Ee,ge,J,fe,0,_e,Fe,null),J>>=1,fe>>=1}}else if(s.isHTMLTexture){if("texElementImage2D"in e){const J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),S.add(s),J.onpaint=fe=>{const Ee=fe.changedElements;for(const ae of S)Ee.includes(ae.image)&&(ae.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ee);else{const Ee=e.RGBA,ae=e.RGBA,Oe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Ee,ae,Oe,ee)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ne.length>0){if(Ge&&$e){const J=ft(Ne[0]);t.texStorage2D(e.TEXTURE_2D,pe,ge,J.width,J.height)}for(let J=0,fe=Ne.length;J<fe;J++)he=Ne[J],Ge?D&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,_e,Fe,he):t.texImage2D(e.TEXTURE_2D,J,ge,_e,Fe,he);s.generateMipmaps=!1}else if(Ge){if($e){const J=ft(ee);t.texStorage2D(e.TEXTURE_2D,pe,ge,J.width,J.height)}D&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,_e,Fe,ee)}else t.texImage2D(e.TEXTURE_2D,0,ge,_e,Fe,ee);l(s)&&P(X),me.__version=de.version,s.onUpdate&&s.onUpdate(s)}E.__version=s.version}function We(E,s,B){if(s.image.length!==6)return;const X=Be(E,s),j=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+B);const de=i.get(j);if(j.version!==de.__version||X===!0){t.activeTexture(e.TEXTURE0+B);const me=Dt.getPrimaries(Dt.workingColorSpace),Z=s.colorSpace===Ci?null:Dt.getPrimaries(s.colorSpace),ee=s.colorSpace===Ci||me===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const _e=s.isCompressedTexture||s.image[0].isCompressedTexture,Fe=s.image[0]&&s.image[0].isDataTexture,ge=[];for(let ae=0;ae<6;ae++)!_e&&!Fe?ge[ae]=p(s.image[ae],!0,r.maxCubemapSize):ge[ae]=Fe?s.image[ae].image:s.image[ae],ge[ae]=Gt(s,ge[ae]);const he=ge[0],Ne=a.convert(s.format,s.colorSpace),Ge=a.convert(s.type),$e=g(s.internalFormat,Ne,Ge,s.normalized,s.colorSpace),D=s.isVideoTexture!==!0,pe=de.__version===void 0||X===!0,J=j.dataReady;let fe=m(s,he);Ae(e.TEXTURE_CUBE_MAP,s);let Ee;if(_e){D&&pe&&t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,$e,he.width,he.height);for(let ae=0;ae<6;ae++){Ee=ge[ae].mipmaps;for(let Oe=0;Oe<Ee.length;Oe++){const ye=Ee[Oe];s.format!==Hn?Ne!==null?D?J&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,ye.width,ye.height,Ne,ye.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,$e,ye.width,ye.height,0,ye.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,ye.width,ye.height,Ne,Ge,ye.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,$e,ye.width,ye.height,0,Ne,Ge,ye.data)}}}else{if(Ee=s.mipmaps,D&&pe){Ee.length>0&&fe++;const ae=ft(ge[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,fe,$e,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Fe){D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ge[ae].width,ge[ae].height,Ne,Ge,ge[ae].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,ge[ae].width,ge[ae].height,0,Ne,Ge,ge[ae].data);for(let Oe=0;Oe<Ee.length;Oe++){const St=Ee[Oe].image[ae].image;D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,St.width,St.height,Ne,Ge,St.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,$e,St.width,St.height,0,Ne,Ge,St.data)}}else{D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ne,Ge,ge[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,Ne,Ge,ge[ae]);for(let Oe=0;Oe<Ee.length;Oe++){const ye=Ee[Oe];D?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,Ne,Ge,ye.image[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,$e,Ne,Ge,ye.image[ae])}}}l(s)&&P(e.TEXTURE_CUBE_MAP),de.__version=j.version,s.onUpdate&&s.onUpdate(s)}E.__version=s.version}function ue(E,s,B,X,j,de){const me=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),ee=g(B.internalFormat,me,Z,B.normalized,B.colorSpace),_e=i.get(s),Fe=i.get(B);if(Fe.__renderTarget=s,!_e.__hasExternalTextures){const ge=Math.max(1,s.width>>de),he=Math.max(1,s.height>>de);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?t.texImage3D(j,de,ee,ge,he,s.depth,0,me,Z,null):t.texImage2D(j,de,ee,ge,he,0,me,Z,null)}t.bindFramebuffer(e.FRAMEBUFFER,E),ht(s)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,j,Fe.__webglTexture,0,vt(s)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,j,Fe.__webglTexture,de),t.bindFramebuffer(e.FRAMEBUFFER,null)}function be(E,s,B){if(e.bindRenderbuffer(e.RENDERBUFFER,E),s.depthBuffer){const X=s.depthTexture,j=X&&X.isDepthTexture?X.type:null,de=A(s.stencilBuffer,j),me=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ht(s)?v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt(s),de,s.width,s.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt(s),de,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,de,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,me,e.RENDERBUFFER,E)}else{const X=s.textures;for(let j=0;j<X.length;j++){const de=X[j],me=a.convert(de.format,de.colorSpace),Z=a.convert(de.type),ee=g(de.internalFormat,me,Z,de.normalized,de.colorSpace);ht(s)?v.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt(s),ee,s.width,s.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt(s),ee,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,ee,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function at(E,s,B){const X=s.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,E),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(s.depthTexture);if(j.__renderTarget=s,(!j.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,s.depthTexture.addEventListener("dispose",N)),j.__webglTexture===void 0){j.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),Ae(e.TEXTURE_CUBE_MAP,s.depthTexture);const _e=a.convert(s.depthTexture.format),Fe=a.convert(s.depthTexture.type);let ge;s.depthTexture.format===Di?ge=e.DEPTH_COMPONENT24:s.depthTexture.format===yi&&(ge=e.DEPTH24_STENCIL8);for(let he=0;he<6;he++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ge,s.width,s.height,0,_e,Fe,null)}}else re(s.depthTexture,0);const de=j.__webglTexture,me=vt(s),Z=X?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,ee=s.depthTexture.format===yi?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(s.depthTexture.format===Di)ht(s)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,Z,de,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ee,Z,de,0);else if(s.depthTexture.format===yi)ht(s)?v.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,Z,de,0,me):e.framebufferTexture2D(e.FRAMEBUFFER,ee,Z,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(E){const s=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==E.depthTexture){const X=E.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),X){const j=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),s.__depthDisposeCallback=j}s.__boundDepthTexture=X}if(E.depthTexture&&!s.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)at(s.__webglFramebuffer[X],E,X);else{const X=E.texture.mipmaps;X&&X.length>0?at(s.__webglFramebuffer[0],E,0):at(s.__webglFramebuffer,E,0)}else if(B){s.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[X]),s.__webglDepthbuffer[X]===void 0)s.__webglDepthbuffer[X]=e.createRenderbuffer(),be(s.__webglDepthbuffer[X],E,!1);else{const j=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=s.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,de)}}else{const X=E.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),be(s.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,de=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,de),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,de)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ze(E,s,B){const X=i.get(E);s!==void 0&&ue(X.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&ke(E)}function Ke(E){const s=E.texture,B=i.get(E),X=i.get(s);E.addEventListener("dispose",f);const j=E.textures,de=E.isWebGLCubeRenderTarget===!0,me=j.length>1;if(me||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=s.version,o.memory.textures++),de){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(s.mipmaps&&s.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let ee=0;ee<s.mipmaps.length;ee++)B.__webglFramebuffer[Z][ee]=e.createFramebuffer()}else B.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<s.mipmaps.length;Z++)B.__webglFramebuffer[Z]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(me)for(let Z=0,ee=j.length;Z<ee;Z++){const _e=i.get(j[Z]);_e.__webglTexture===void 0&&(_e.__webglTexture=e.createTexture(),o.memory.textures++)}if(E.samples>0&&ht(E)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){const ee=j[Z];B.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const _e=a.convert(ee.format,ee.colorSpace),Fe=a.convert(ee.type),ge=g(ee.internalFormat,_e,Fe,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),he=vt(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,he,ge,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),be(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(de){t.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Ae(e.TEXTURE_CUBE_MAP,s);for(let Z=0;Z<6;Z++)if(s.mipmaps&&s.mipmaps.length>0)for(let ee=0;ee<s.mipmaps.length;ee++)ue(B.__webglFramebuffer[Z][ee],E,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else ue(B.__webglFramebuffer[Z],E,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);l(s)&&P(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let Z=0,ee=j.length;Z<ee;Z++){const _e=j[Z],Fe=i.get(_e);let ge=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ge=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ge,Fe.__webglTexture),Ae(ge,_e),ue(B.__webglFramebuffer,E,_e,e.COLOR_ATTACHMENT0+Z,ge,0),l(_e)&&P(ge)}t.unbindTexture()}else{let Z=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Z=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),Ae(Z,s),s.mipmaps&&s.mipmaps.length>0)for(let ee=0;ee<s.mipmaps.length;ee++)ue(B.__webglFramebuffer[ee],E,s,e.COLOR_ATTACHMENT0,Z,ee);else ue(B.__webglFramebuffer,E,s,e.COLOR_ATTACHMENT0,Z,0);l(s)&&P(Z),t.unbindTexture()}E.depthBuffer&&ke(E)}function je(E){const s=E.textures;for(let B=0,X=s.length;B<X;B++){const j=s[B];if(l(j)){const de=y(E),me=i.get(j).__webglTexture;t.bindTexture(de,me),P(de),t.unbindTexture()}}}const ut=[],ct=[];function Yt(E){if(E.samples>0){if(ht(E)===!1){const s=E.textures,B=E.width,X=E.height;let j=e.COLOR_BUFFER_BIT;const de=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,me=i.get(E),Z=s.length>1;if(Z)for(let _e=0;_e<s.length;_e++)t.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ee=E.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let _e=0;_e<s.length;_e++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Fe=i.get(s[_e]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Fe,0)}e.blitFramebuffer(0,0,B,X,0,0,B,X,j,e.NEAREST),R===!0&&(ut.length=0,ct.length=0,ut.push(e.COLOR_ATTACHMENT0+_e),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(ut.push(de),ct.push(de),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ct)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let _e=0;_e<s.length;_e++){t.bindFramebuffer(e.FRAMEBUFFER,me.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.RENDERBUFFER,me.__webglColorRenderbuffer[_e]);const Fe=i.get(s[_e]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,me.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+_e,e.TEXTURE_2D,Fe,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&R){const s=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function vt(E){return Math.min(r.maxSamples,E.samples)}function ht(E){const s=i.get(E);return E.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function I(E){const s=o.render.frame;x.get(E)!==s&&(x.set(E,s),E.update())}function Gt(E,s){const B=E.colorSpace,X=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==zc&&B!==Ci&&(Dt.getTransfer(B)===wt?(X!==Hn||j!==Nn)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",B)),s}function ft(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(_.width=E.naturalWidth||E.width,_.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(_.width=E.displayWidth,_.height=E.displayHeight):(_.width=E.width,_.height=E.height),_}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=F,this.setTextureUnits=$,this.setTexture2D=re,this.setTexture2DArray=ie,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=Ze,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $_(e,n){function t(i,r=Ci){let a;const o=Dt.getTransfer(r);if(i===Nn)return e.UNSIGNED_BYTE;if(i===Cc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Pc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Du)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Iu)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Uu)return e.BYTE;if(i===Fu)return e.SHORT;if(i===qa)return e.UNSIGNED_SHORT;if(i===Ic)return e.INT;if(i===mi)return e.UNSIGNED_INT;if(i===Zn)return e.FLOAT;if(i===kn)return e.HALF_FLOAT;if(i===Ou)return e.ALPHA;if(i===Bu)return e.RGB;if(i===Hn)return e.RGBA;if(i===Di)return e.DEPTH_COMPONENT;if(i===yi)return e.DEPTH_STENCIL;if(i===Gu)return e.RED;if(i===wc)return e.RED_INTEGER;if(i===Ni)return e.RG;if(i===Rc)return e.RG_INTEGER;if(i===Ac)return e.RGBA_INTEGER;if(i===wr||i===Cr||i===Pr||i===yr)if(o===wt)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===wr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===wr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ts||i===ns||i===is||i===as)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ts)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ns)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===is)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===as)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rs||i===os||i===ss||i===cs||i===ls||i===Yr||i===ds)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===rs||i===os)return o===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ss)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===cs)return a.COMPRESSED_R11_EAC;if(i===ls)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return a.COMPRESSED_RG11_EAC;if(i===ds)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===us||i===fs||i===ps||i===hs||i===ms||i===_s||i===gs||i===vs||i===Ss||i===xs||i===Es||i===Ms||i===Ts||i===bs)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===us)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ps)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ms)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_s)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ss)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Es)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ms)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ts)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bs)return o===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===As||i===Rs||i===ws)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===As)return o===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ws)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cs||i===Ps||i===Kr||i===ys)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===Cs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ps)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ys)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fa?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Q_=`
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

}`;class J_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Dc(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Wn({vertexShader:Z_,fragmentShader:Q_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new yc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eg extends hu{constructor(n,t){super();const i=this;let r=null,a=1,o=null,v="local-floor",R=1,_=null,x=null,S=null,h=null,T=null,C=null;const L=typeof XRWebGLBinding<"u",p=new J_,l={},P=t.getContextAttributes();let y=null,g=null;const A=[],m=[],N=new nn;let f=null,b=null;const U=new da;U.viewport=new ln;const G=new da;G.viewport=new ln;const k=[U,G],q=new mu;let F=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getHandSpace()};function K(Y){const te=m.indexOf(Y.inputSource);if(te===-1)return;const Me=A[te];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,_||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",re);for(let Y=0;Y<A.length;Y++){const te=m[Y];te!==null&&(m[Y]=null,A[Y].disconnect(te))}F=null,$=null,p.reset();for(const Y in l)delete l[Y];if(n.setRenderTarget(y),T=null,h=null,S=null,r=null,g=null,Be.stop(),i.isPresenting=!1,n.setPixelRatio(f),n.setSize(N.width,N.height,!1),b!==null){const Y=b.camera;Y.fov=b.fov,Y.zoom=b.zoom,Y.updateProjectionMatrix(),b=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){v=Y,i.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||o},this.setReferenceSpace=function(Y){_=Y},this.getBaseLayer=function(){return h!==null?h:T},this.getBinding=function(){return S===null&&L&&(S=new XRWebGLBinding(r,t)),S},this.getFrame=function(){return C},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=n.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",re),P.xrCompatible!==!0&&await t.makeXRCompatible(),f=n.getPixelRatio(),n.getSize(N),L&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,We=null,ue=null;P.depth&&(ue=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=P.stencil?yi:Di,We=P.stencil?fa:mi);const be={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:a};S=this.getBinding(),h=S.createProjectionLayer(be),r.updateRenderState({layers:[h]}),n.setPixelRatio(1),n.setSize(h.textureWidth,h.textureHeight,!1),g=new En(h.textureWidth,h.textureHeight,{format:Hn,type:Nn,depthTexture:new za(h.textureWidth,h.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:P.stencil,colorSpace:n.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:a};T=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:T}),n.setPixelRatio(1),n.setSize(T.framebufferWidth,T.framebufferHeight,!1),g=new En(T.framebufferWidth,T.framebufferHeight,{format:Hn,type:Nn,colorSpace:n.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1,storeMultisampledDepthBuffer:T.ignoreDepthValues===!1,storeMultisampledStencilBuffer:T.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(R),_=null,o=await r.requestReferenceSpace(v),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(Y){for(let te=0;te<Y.removed.length;te++){const Me=Y.removed[te],We=m.indexOf(Me);We>=0&&(m[We]=null,A[We].disconnect(Me))}for(let te=0;te<Y.added.length;te++){const Me=Y.added[te];let We=m.indexOf(Me);if(We===-1){for(let be=0;be<A.length;be++)if(be>=m.length){m.push(Me),We=be;break}else if(m[be]===null){m[be]=Me,We=be;break}if(We===-1)break}const ue=A[We];ue&&ue.connect(Me)}}const ie=new Ie,se=new Ie;function ce(Y,te,Me){ie.setFromMatrixPosition(te.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);const We=ie.distanceTo(se),ue=te.projectionMatrix.elements,be=Me.projectionMatrix.elements,at=ue[14]/(ue[10]-1),ke=ue[14]/(ue[10]+1),Ze=(ue[9]+1)/ue[5],Ke=(ue[9]-1)/ue[5],je=(ue[8]-1)/ue[0],ut=(be[8]+1)/be[0],ct=at*je,Yt=at*ut,vt=We/(-je+ut),ht=vt*-je;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ht),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ue[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const I=at+vt,Gt=ke+vt,ft=ct-ht,E=Yt+(We-ht),s=Ze*ke/Gt*I,B=Ke*ke/Gt*I;Y.projectionMatrix.makePerspective(ft,E,s,B,I,Gt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ye(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let te=Y.near,Me=Y.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(Me=p.depthFar)),q.near=G.near=U.near=te,q.far=G.far=U.far=Me,(F!==q.near||$!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),F=q.near,$=q.far),q.layers.mask=Y.layers.mask|6,U.layers.mask=q.layers.mask&-5,G.layers.mask=q.layers.mask&-3;const We=Y.parent,ue=q.cameras;Ye(q,We);for(let be=0;be<ue.length;be++)Ye(ue[be],We);ue.length===2?ce(q,U,G):q.projectionMatrix.copy(U.projectionMatrix),b===null&&Y.isPerspectiveCamera&&(b={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ve(Y,q,We)};function Ve(Y,te,Me){Me===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_u*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(h===null&&T===null))return R},this.setFoveation=function(Y){R=Y,h!==null&&(h.fixedFoveation=Y),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Y){return l[Y]};let st=null;function Ae(Y,te){if(x=te.getViewerPose(_||o),C=te,x!==null){const Me=x.views;T!==null&&(n.setRenderTargetFramebuffer(g,T.framebuffer),n.setRenderTarget(g));let We=!1;Me.length!==q.cameras.length&&(q.cameras.length=0,We=!0);for(let ke=0;ke<Me.length;ke++){const Ze=Me[ke];let Ke=null;if(T!==null)Ke=T.getViewport(Ze);else{const ut=S.getViewSubImage(h,Ze);Ke=ut.viewport,ke===0&&(n.setRenderTargetTextures(g,ut.colorTexture,ut.depthStencilTexture),n.setRenderTarget(g))}let je=k[ke];je===void 0&&(je=new da,je.layers.enable(ke),je.viewport=new ln,k[ke]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ke===0&&(q.matrix.copy(je.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),We===!0&&q.cameras.push(je)}const ue=r.enabledFeatures;if(ue&&ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&L){S=i.getBinding();const ke=S.getDepthInformation(Me[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,r.renderState)}if(ue&&ue.includes("camera-access")&&L){n.state.unbindTexture(),S=i.getBinding();for(let ke=0;ke<Me.length;ke++){const Ze=Me[ke].camera;if(Ze){let Ke=l[Ze];Ke||(Ke=new Dc,l[Ze]=Ke);const je=S.getCameraImage(Ze);Ke.sourceTexture=je}}}}for(let Me=0;Me<A.length;Me++){const We=m[Me],ue=A[Me];We!==null&&ue!==void 0&&ue.update(We,te,_||o)}st&&st(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),C=null}const Be=new Kc;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(Y){st=Y},this.dispose=function(){}}}const tg=new ti,tl=new ot;tl.set(-1,0,0,0,1,0,0,0,1);function ng(e,n){function t(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function i(p,l){l.color.getRGB(p.fogColor.value,Lc(e)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function r(p,l,P,y,g){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?a(p,l):l.isMeshLambertMaterial?(a(p,l),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(a(p,l),S(p,l)):l.isMeshPhongMaterial?(a(p,l),x(p,l),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(a(p,l),h(p,l),l.isMeshPhysicalMaterial&&T(p,l,g)):l.isMeshMatcapMaterial?(a(p,l),C(p,l)):l.isMeshDepthMaterial?a(p,l):l.isMeshDistanceMaterial?(a(p,l),L(p,l)):l.isMeshNormalMaterial?a(p,l):l.isLineBasicMaterial?(o(p,l),l.isLineDashedMaterial&&v(p,l)):l.isPointsMaterial?R(p,l,P,y):l.isSpriteMaterial?_(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,t(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===hn&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,t(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===hn&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,t(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,t(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const P=n.get(l),y=P.envMap,g=P.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(g)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(tl),p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,p.aoMapTransform))}function o(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform))}function v(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function R(p,l,P,y){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*P,p.scale.value=y*.5,l.map&&(p.map.value=l.map,t(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function _(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function x(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function S(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function h(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function T(p,l,P){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===hn&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.retroreflectivity>0&&(p.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=P.texture,p.transmissionSamplerSize.value.set(P.width,P.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,p.specularIntensityMapTransform))}function C(p,l){l.matcap&&(p.matcap.value=l.matcap)}function L(p,l){const P=n.get(l).light;p.referencePosition.value.setFromMatrixPosition(P.matrixWorld),p.nearDistance.value=P.shadow.camera.near,p.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ig(e,n,t,i){let r={},a={},o=[];const v=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function R(g,A){const m=A.program;i.uniformBlockBinding(g,m)}function _(g,A){let m=r[g.id];m===void 0&&(p(g),m=x(g),r[g.id]=m,g.addEventListener("dispose",P));const N=A.program;i.updateUBOMapping(g,N);const f=n.render.frame;a[g.id]!==f&&(h(g),a[g.id]=f)}function x(g){const A=S();g.__bindingPointIndex=A;const m=e.createBuffer(),N=g.__size,f=g.usage;return e.bindBuffer(e.UNIFORM_BUFFER,m),e.bufferData(e.UNIFORM_BUFFER,N,f),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,m),m}function S(){for(let g=0;g<v;g++)if(o.indexOf(g)===-1)return o.push(g),g;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const A=r[g.id],m=g.uniforms,N=g.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let f=0,b=m.length;f<b;f++){const U=m[f];if(Array.isArray(U))for(let G=0,k=U.length;G<k;G++)T(U[G],f,G,N);else T(U,f,0,N)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function T(g,A,m,N){if(L(g,A,m,N)===!0){const f=g.__offset,b=g.value;if(Array.isArray(b)){let U=0;for(let G=0;G<b.length;G++){const k=b[G],q=l(k);C(k,g.__data,U),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(U+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else C(b,g.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,f,g.__data)}}function C(g,A,m){typeof g=="number"||typeof g=="boolean"?A[0]=g:g.isMatrix3?(A[0]=g.elements[0],A[1]=g.elements[1],A[2]=g.elements[2],A[3]=0,A[4]=g.elements[3],A[5]=g.elements[4],A[6]=g.elements[5],A[7]=0,A[8]=g.elements[6],A[9]=g.elements[7],A[10]=g.elements[8],A[11]=0):ArrayBuffer.isView(g)?A.set(new g.constructor(g.buffer,g.byteOffset,A.length)):g.toArray(A,m)}function L(g,A,m,N){const f=g.value,b=A+"_"+m;if(N[b]===void 0)return typeof f=="number"||typeof f=="boolean"?N[b]=f:ArrayBuffer.isView(f)?N[b]=f.slice():N[b]=f.clone(),!0;{const U=N[b];if(typeof f=="number"||typeof f=="boolean"){if(U!==f)return N[b]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(U.equals(f)===!1)return U.copy(f),!0}}return!1}function p(g){const A=g.uniforms;let m=0;const N=16;for(let b=0,U=A.length;b<U;b++){const G=Array.isArray(A[b])?A[b]:[A[b]];for(let k=0,q=G.length;k<q;k++){const F=G[k],$=Array.isArray(F.value)?F.value:[F.value];for(let K=0,Q=$.length;K<Q;K++){const re=$[K],ie=l(re),se=m%N,ce=se%ie.boundary,Ye=se+ce;m+=ce,Ye!==0&&N-Ye<ie.storage&&(m+=N-Ye),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=m,m+=ie.storage}}}const f=m%N;return f>0&&(m+=N-f),g.__size=m,g.__cache={},this}function l(g){const A={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(A.boundary=4,A.storage=4):g.isVector2?(A.boundary=8,A.storage=8):g.isVector3||g.isColor?(A.boundary=16,A.storage=12):g.isVector4?(A.boundary=16,A.storage=16):g.isMatrix3?(A.boundary=48,A.storage=48):g.isMatrix4?(A.boundary=64,A.storage=64):g.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(A.boundary=16,A.storage=g.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",g),A}function P(g){const A=g.target;A.removeEventListener("dispose",P);const m=o.indexOf(A.__bindingPointIndex);o.splice(m,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function y(){for(const g in r)e.deleteBuffer(r[g]);o=[],r={},a={}}return{bind:R,update:_,dispose:y}}const ag=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function rg(){return yn===null&&(yn=new gu(ag,16,16,Ni,kn),yn.name="DFG_LUT",yn.minFilter=pn,yn.magFilter=pn,yn.wrapS=Xr,yn.wrapT=Xr,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class og{constructor(n={}){const{canvas:t=Id(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:v=!1,premultipliedAlpha:R=!0,preserveDrawingBuffer:_=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:h=!1,outputBufferType:T=Nn}=n;this.isWebGLRenderer=!0;let C;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=i.getContextAttributes().alpha}else C=o;const L=T,p=new Set([Ac,Rc,wc]),l=new Set([Nn,mi,qa,fa,Cc,Pc]),P=new Uint32Array(4),y=new Int32Array(4),g=new Ie;let A=null,m=null;const N=[],f=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1,k=null,q=null,F=null,$=null;this._outputColorSpace=no;let K=0,Q=0,re=null,ie=-1,se=null;const ce=new ln,Ye=new ln;let Ve=null;const st=new At(0);let Ae=0,Be=t.width,Y=t.height,te=1,Me=null,We=null;const ue=new ln(0,0,Be,Y),be=new ln(0,0,Be,Y);let at=!1;const ke=new Tc;let Ze=!1,Ke=!1;const je=new ti,ut=new Ie,ct=new ln,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function ht(){return re===null?te:1}let I=i;function Gt(d,w){return t.getContext(d,w)}let ft,E,s,B,X,j,de,me,Z,ee,_e,Fe,ge,he,Ne,Ge,$e,D,pe,J,fe,Ee,ae;try{const d={alpha:!0,depth:r,stencil:a,antialias:v,premultipliedAlpha:R,preserveDrawingBuffer:_,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ud}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),I===null){const w="webgl2";if(I=Gt(w,d),I===null)throw Gt(w)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(d){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),yt("WebGLRenderer: "+d.message),d}function Oe(){ft=new rm(I),ft.init(),fe=new $_(I,ft),E=new jh(I,ft,n,fe),s=new K_(I,ft),E.reversedDepthBuffer&&h&&s.buffers.depth.setReversed(!0),q=I.createFramebuffer(),F=I.createFramebuffer(),$=I.createFramebuffer(),B=new cm(I),X=new I_,j=new j_(I,ft,s,X,E,fe,B),de=new am(U),me=new df(I),Ee=new Yh(I,me),Z=new om(I,me,B,Ee),ee=new dm(I,Z,me,Ee,B),D=new lm(I,E,j),Ne=new $h(X),_e=new D_(U,de,ft,E,Ee,Ne),Fe=new ng(U,X),ge=new F_,he=new k_(ft),$e=new qh(U,de,s,ee,C,R),Ge=new Y_(U,ee,E),ae=new ig(I,B,E,s),pe=new Kh(I,ft,B),J=new sm(I,ft,B),B.programs=_e.programs,U.capabilities=E,U.extensions=ft,U.properties=X,U.renderLists=ge,U.shadowMap=Ge,U.state=s,U.info=B}L!==Nn&&(b=new fm(L,t.width,t.height,v,r,a));const ye=new eg(U,I);this.xr=ye,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const d=ft.get("WEBGL_lose_context");d&&d.loseContext()},this.forceContextRestore=function(){const d=ft.get("WEBGL_lose_context");d&&d.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(d){d!==void 0&&(te=d,this.setSize(Be,Y,!1))},this.getSize=function(d){return d.set(Be,Y)},this.setSize=function(d,w,W=!0){if(ye.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=d,Y=w,t.width=Math.floor(d*te),t.height=Math.floor(w*te),W===!0&&(t.style.width=d+"px",t.style.height=w+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,d,w)},this.getDrawingBufferSize=function(d){return d.set(Be*te,Y*te).floor()},this.setDrawingBufferSize=function(d,w,W){Be=d,Y=w,te=W,t.width=Math.floor(d*W),t.height=Math.floor(w*W),this.setViewport(0,0,d,w)},this.setEffects=function(d){if(L===Nn){yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(d){for(let w=0;w<d.length;w++)if(d[w].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(d||[])},this.getCurrentViewport=function(d){return d.copy(ce)},this.getViewport=function(d){return d.copy(ue)},this.setViewport=function(d,w,W,H){d.isVector4?ue.set(d.x,d.y,d.z,d.w):ue.set(d,w,W,H),s.viewport(ce.copy(ue).multiplyScalar(te).round())},this.getScissor=function(d){return d.copy(be)},this.setScissor=function(d,w,W,H){d.isVector4?be.set(d.x,d.y,d.z,d.w):be.set(d,w,W,H),s.scissor(Ye.copy(be).multiplyScalar(te).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(d){s.setScissorTest(at=d)},this.setOpaqueSort=function(d){Me=d},this.setTransparentSort=function(d){We=d},this.getClearColor=function(d){return d.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(d=!0,w=!0,W=!0){let H=0;if(d){let V=!1;if(re!==null){const ve=re.texture.format;V=p.has(ve)}if(V){const ve=re.texture.type,Ce=l.has(ve),Se=$e.getClearColor(),Re=$e.getClearAlpha(),Ue=Se.r,ze=Se.g,Qe=Se.b;Ce?(P[0]=Ue,P[1]=ze,P[2]=Qe,P[3]=Re,I.clearBufferuiv(I.COLOR,0,P)):(y[0]=Ue,y[1]=ze,y[2]=Qe,y[3]=Re,I.clearBufferiv(I.COLOR,0,y))}else H|=I.COLOR_BUFFER_BIT}w&&(H|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(d){d.setRenderer(this),k=d},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),$e.dispose(),ge.dispose(),he.dispose(),X.dispose(),de.dispose(),ee.dispose(),Ee.dispose(),ae.dispose(),_e.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",In),ye.removeEventListener("sessionend",un),Zt.stop()};function St(d){d.preventDefault(),Yo("WebGLRenderer: Context Lost."),G=!0}function rt(){Yo("WebGLRenderer: Context Restored."),G=!1;const d=B.autoReset,w=Ge.enabled,W=Ge.autoUpdate,H=Ge.needsUpdate,V=Ge.type;Oe(),B.autoReset=d,Ge.enabled=w,Ge.autoUpdate=W,Ge.needsUpdate=H,Ge.type=V}function Kt(d){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",d.statusMessage)}function dn(d){const w=d.target;w.removeEventListener("dispose",dn),ha(w)}function ha(d){_i(d),X.remove(d)}function _i(d){const w=X.get(d).programs;w!==void 0&&(w.forEach(function(W){_e.releaseProgram(W)}),d.isShaderMaterial&&_e.releaseShaderCache(d))}this.renderBufferDirect=function(d,w,W,H,V,ve){w===null&&(w=Yt);const Ce=V.isMesh&&V.matrixWorld.determinantAffine()<0,Se=gn(d,w,W,H,V);s.setMaterial(H,Ce);let Re=W.index,Ue=1;if(H.wireframe===!0){if(Re=Z.getWireframeAttribute(W),Re===void 0)return;Ue=2}const ze=W.drawRange,Qe=W.attributes.position;let Pe=ze.start*Ue,it=(ze.start+ze.count)*Ue;ve!==null&&(Pe=Math.max(Pe,ve.start*Ue),it=Math.min(it,(ve.start+ve.count)*Ue)),Re!==null?(Pe=Math.max(Pe,0),it=Math.min(it,Re.count)):Qe!=null&&(Pe=Math.max(Pe,0),it=Math.min(it,Qe.count));const Lt=it-Pe;if(Lt<0||Lt===1/0)return;Ee.setup(V,H,Se,W,Re);let mt,pt=pe;if(Re!==null&&(mt=me.get(Re),pt=J,pt.setIndex(mt)),V.isMesh)H.wireframe===!0?(s.setLineWidth(H.wireframeLinewidth*ht()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(V.isLine){let Bt=H.linewidth;Bt===void 0&&(Bt=1),s.setLineWidth(Bt*ht()),V.isLineSegments?pt.setMode(I.LINES):V.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else V.isPoints?pt.setMode(I.POINTS):V.isSprite&&pt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,we=V._multiDrawCounts,Ht=V._multiDrawCount,nt=Re?me.get(Re).bytesPerElement:1,Xt=X.get(H).currentProgram.getUniforms();for(let Ut=0;Ut<Ht;Ut++)Xt.setValue(I,"_gl_DrawID",Ut),pt.render(Bt[Ut]/nt,we[Ut])}else if(V.isInstancedMesh)pt.renderInstances(Pe,Lt,V.count);else if(W.isInstancedBufferGeometry){const Bt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,Bt);pt.renderInstances(Pe,Lt,we)}else pt.render(Pe,Lt)};function Mt(d,w,W,H){k!==null&&d.isNodeMaterial&&k.setObject(H,d),Ze===!0&&Ne.setState(d,W,!1),d.transparent===!0&&d.side===xn&&d.forceSinglePass===!1?(d.side=hn,d.needsUpdate=!0,bn(d,w,H),d.side=ua,d.needsUpdate=!0,bn(d,w,H),d.side=xn):bn(d,w,H)}this.compile=function(d,w,W=null){W===null&&(W=d),k!==null&&k.renderStart(d,w,W),m=he.get(W),m.init(w),f.push(m),W.traverseVisible(function(V){V.isLight&&V.layers.test(w.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),d!==W&&d.traverseVisible(function(V){V.isLight&&V.layers.test(w.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(),k!==null&&k.updateLights(m.state.lightsArray),Ke=this.localClippingEnabled,Ze=Ne.init(this.clippingPlanes,Ke),Ze===!0&&Ne.setGlobalState(this.clippingPlanes,w),k!==null&&Ge.render(m.state.shadowsArray,W,w);const H=new Set;return d.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ve=V.material;if(ve)if(Array.isArray(ve))for(let Ce=0;Ce<ve.length;Ce++){const Se=ve[Ce];Mt(Se,W,w,V),H.add(Se)}else Mt(ve,W,w,V),H.add(ve)}),m=f.pop(),k!==null&&k.renderEnd(),H},this.compileAsync=function(d,w,W=null){const H=this.compile(d,w,W);return new Promise(V=>{function ve(){if(H.forEach(function(Ce){const Re=X.get(Ce).currentProgram;(Re===void 0||Re.isReady())&&H.delete(Ce)}),H.size===0){V(d);return}setTimeout(ve,10)}ft.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let mn=null;function ii(d){mn&&mn(d)}function In(){Zt.stop()}function un(){Zt.start()}const Zt=new Kc;Zt.setAnimationLoop(ii),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(d){mn=d,ye.setAnimationLoop(d),d===null?Zt.stop():Zt.start()},ye.addEventListener("sessionstart",In),ye.addEventListener("sessionend",un),this.render=function(d,w){if(w!==void 0&&w.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;k!==null&&k.renderStart(d,w);const W=ye.enabled===!0&&ye.isPresenting===!0,H=b!==null&&(re===null||W)&&b.begin(U,re);if(d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(w),w=ye.getCamera()),d.isScene===!0&&d.onBeforeRender(U,d,w,re),m=he.get(d,f.length),m.init(w),m.state.textureUnits=j.getTextureUnits(),f.push(m),je.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),ke.setFromProjectionMatrix(je,Ko,w.reversedDepth),Ke=this.localClippingEnabled,Ze=Ne.init(this.clippingPlanes,Ke),A=ge.get(d,N.length),A.init(),N.push(A),ye.enabled===!0&&ye.isPresenting===!0){const Ce=U.xr.getDepthSensingMesh();Ce!==null&&_n(Ce,w,-1/0,U.sortObjects)}_n(d,w,0,U.sortObjects),A.finish(),k!==null&&k.updateLights(m.state.lightsArray),U.sortObjects===!0&&A.sort(Me,We),vt=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,vt&&$e.addToRenderList(A,d),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&Ne.beginShadows();const V=m.state.shadowsArray;if(Ge.render(V,d,w),Ze===!0&&Ne.endShadows(),(H&&b.hasRenderPass())===!1){const Ce=A.opaque,Se=A.transmissive;if(m.setupLights(),w.isArrayCamera){const Re=w.cameras;if(Se.length>0)for(let Ue=0,ze=Re.length;Ue<ze;Ue++){const Qe=Re[Ue];Xn(Ce,Se,d,Qe)}vt&&$e.render(d);for(let Ue=0,ze=Re.length;Ue<ze;Ue++){const Qe=Re[Ue];zn(A,d,Qe,Qe.viewport)}}else Se.length>0&&Xn(Ce,Se,d,w),vt&&$e.render(d),zn(A,d,w)}re!==null&&Q===0&&(j.updateMultisampleRenderTarget(re),j.updateRenderTargetMipmap(re)),H&&b.end(U),d.isScene===!0&&d.onAfterRender(U,d,w),Ee.resetDefaultState(),ie=-1,se=null,f.pop(),f.length>0?(m=f[f.length-1],j.setTextureUnits(m.state.textureUnits),Ze===!0&&Ne.setGlobalState(U.clippingPlanes,m.state.camera)):m=null,N.pop(),N.length>0?A=N[N.length-1]:A=null,k!==null&&k.renderEnd()};function _n(d,w,W,H){if(d.visible===!1)return;if(d.layers.test(w.layers)){if(d.isGroup)W=d.renderOrder;else if(d.isLOD)d.autoUpdate===!0&&d.update(w);else if(d.isLightProbeGrid)m.pushLightProbeGrid(d);else if(d.isLight)m.pushLight(d),d.castShadow&&m.pushShadow(d);else if(d.isSprite){if(!d.frustumCulled||d.intersectsFrustum(ke)){H&&ct.setFromMatrixPosition(d.matrixWorld).applyMatrix4(je);const Ce=ee.update(d),Se=d.material;Se.visible&&A.push(d,Ce,Se,W,ct.z,null,w)}}else if((d.isMesh||d.isLine||d.isPoints)&&(!d.frustumCulled||d.intersectsFrustum(ke))){const Ce=ee.update(d),Se=d.material;if(H&&(d.boundingSphere!==void 0?(d.boundingSphere===null&&d.computeBoundingSphere(),ct.copy(d.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ct.copy(Ce.boundingSphere.center)),ct.applyMatrix4(d.matrixWorld).applyMatrix4(je)),Array.isArray(Se)){const Re=Ce.groups;for(let Ue=0,ze=Re.length;Ue<ze;Ue++){const Qe=Re[Ue],Pe=Se[Qe.materialIndex];Pe&&Pe.visible&&A.push(d,Ce,Pe,W,ct.z,Qe,w)}}else Se.visible&&A.push(d,Ce,Se,W,ct.z,null,w)}}const ve=d.children;for(let Ce=0,Se=ve.length;Ce<Se;Ce++)_n(ve[Ce],w,W,H)}function zn(d,w,W,H){const{opaque:V,transmissive:ve,transparent:Ce}=d;m.setupLightsView(W),Ze===!0&&Ne.setGlobalState(U.clippingPlanes,W),H&&s.viewport(ce.copy(H)),V.length>0&&Tn(V,w,W),ve.length>0&&Tn(ve,w,W),Ce.length>0&&Tn(Ce,w,W),s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),s.setPolygonOffset(!1)}function Xn(d,w,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(m.state.transmissionRenderTarget[H.id]===void 0){const Pe=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");m.state.transmissionRenderTarget[H.id]=new En(1,1,{generateMipmaps:!0,type:Pe?kn:Nn,minFilter:Pi,samples:Math.max(4,E.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const ve=m.state.transmissionRenderTarget[H.id],Ce=H.viewport||ce;ve.setSize(Ce.z*U.transmissionResolutionScale,Ce.w*U.transmissionResolutionScale);const Se=U.getRenderTarget(),Re=U.getActiveCubeFace(),Ue=U.getActiveMipmapLevel();U.setRenderTarget(ve),U.getClearColor(st),Ae=U.getClearAlpha(),Ae<1&&U.setClearColor(16777215,.5),U.clear(),vt&&$e.render(W);const ze=U.toneMapping;U.toneMapping=Dn;const Qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),m.setupLightsView(H),Ze===!0&&Ne.setGlobalState(U.clippingPlanes,H),Tn(d,W,H),j.updateMultisampleRenderTarget(ve),j.updateRenderTargetMipmap(ve),ft.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let it=0,Lt=w.length;it<Lt;it++){const mt=w[it],{object:pt,geometry:Bt,material:we,group:Ht}=mt;if(we.side===xn&&pt.layers.test(H.layers)){const nt=we.side;we.side=hn,we.needsUpdate=!0,qn(pt,W,H,Bt,we,Ht),we.side=nt,we.needsUpdate=!0,Pe=!0}}Pe===!0&&(j.updateMultisampleRenderTarget(ve),j.updateRenderTargetMipmap(ve))}U.setRenderTarget(Se,Re,Ue),U.setClearColor(st,Ae),Qe!==void 0&&(H.viewport=Qe),U.toneMapping=ze}function Tn(d,w,W){const H=w.isScene===!0?w.overrideMaterial:null;for(let V=0,ve=d.length;V<ve;V++){const Ce=d[V],{object:Se,geometry:Re,group:Ue}=Ce;let ze=Ce.material;ze.allowOverride===!0&&H!==null&&(ze=H),Se.layers.test(W.layers)&&qn(Se,w,W,Re,ze,Ue)}}function qn(d,w,W,H,V,ve){k!==null&&V.isNodeMaterial&&k.setObject(d,V),d.onBeforeRender(U,w,W,H,V,ve),d.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,d.matrixWorld),d.normalMatrix.getNormalMatrix(d.modelViewMatrix),V.onBeforeRender(U,w,W,H,d,ve),V.transparent===!0&&V.side===xn&&V.forceSinglePass===!1?(V.side=hn,V.needsUpdate=!0,U.renderBufferDirect(W,w,H,V,d,ve),V.side=ua,V.needsUpdate=!0,U.renderBufferDirect(W,w,H,V,d,ve),V.side=xn):U.renderBufferDirect(W,w,H,V,d,ve),d.onAfterRender(U,w,W,H,V,ve)}function bn(d,w,W){w.isScene!==!0&&(w=Yt);const H=X.get(d),V=m.state.lights,ve=m.state.shadowsArray,Ce=V.state.version,Se=_e.getParameters(d,V.state,ve,w,W,m.state.lightProbeGridArray),Re=_e.getProgramCacheKey(Se);let Ue=H.programs;H.environment=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?w.environment:null,H.fog=w.fog;const ze=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap;H.envMap=de.get(d.envMap||H.environment,ze),H.envMapRotation=H.environment!==null&&d.envMap===null?w.environmentRotation:d.envMapRotation,Ue===void 0&&(d.addEventListener("dispose",dn),Ue=new Map,H.programs=Ue);let Qe=Ue.get(Re);if(Qe!==void 0){if(H.currentProgram===Qe&&H.lightsStateVersion===Ce)return Un(d,Se),Qe}else Se.uniforms=_e.getUniforms(d),k!==null&&d.isNodeMaterial&&k.build(d,W,Se),d.onBeforeCompile(Se,U),Qe=_e.acquireProgram(Se,Re),Ue.set(Re,Qe),H.uniforms=Se.uniforms;const Pe=H.uniforms;return(!d.isShaderMaterial&&!d.isRawShaderMaterial||d.clipping===!0)&&(Pe.clippingPlanes=Ne.uniform),Un(d,Se),H.needsLights=Yn(d),H.lightsStateVersion=Ce,H.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.sunLights.value=V.state.sun,Pe.sunLightShadows.value=V.state.sunShadow,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.sunShadowMatrix.value=V.state.sunShadowMatrix,Pe.sunShadowCascade.value=V.state.sunShadowCascade,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=m.state.lightProbeGridArray.length>0,H.currentProgram=Qe,H.uniformsList=null,Qe}function Fi(d){if(d.uniformsList===null){const w=d.currentProgram.getUniforms();d.uniformsList=ka.seqWithValue(w.seq,d.uniforms)}return d.uniformsList}function Un(d,w){const W=X.get(d);W.outputColorSpace=w.outputColorSpace,W.batching=w.batching,W.batchingColor=w.batchingColor,W.instancing=w.instancing,W.instancingColor=w.instancingColor,W.instancingMorph=w.instancingMorph,W.skinning=w.skinning,W.morphTargets=w.morphTargets,W.morphNormals=w.morphNormals,W.morphColors=w.morphColors,W.morphTargetsCount=w.morphTargetsCount,W.numClippingPlanes=w.numClippingPlanes,W.numIntersection=w.numClipIntersection,W.vertexAlphas=w.vertexAlphas,W.vertexTangents=w.vertexTangents,W.toneMapping=w.toneMapping}function ma(d,w){if(d.length===0)return null;if(d.length===1)return d[0].texture!==null?d[0]:null;g.setFromMatrixPosition(w.matrixWorld);for(let W=0,H=d.length;W<H;W++){const V=d[W];if(V.texture!==null&&V.boundingBox.containsPoint(g))return V}return null}function gn(d,w,W,H,V){w.isScene!==!0&&(w=Yt),j.resetTextureUnits();const ve=w.fog,Ce=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?w.environment:null,Se=re===null?U.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Dt.workingColorSpace,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ue=de.get(H.envMap||Ce,Re),ze=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Qe=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Pe=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,Lt=!!W.morphAttributes.color;let mt=Dn;H.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(mt=U.toneMapping);const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Bt=pt!==void 0?pt.length:0,we=X.get(H),Ht=m.state.lights;if(Ze===!0&&(Ke===!0||d!==se)){const He=d===se&&H.id===ie;Ne.setState(H,d,He)}let nt=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ht.state.version||we.outputColorSpace!==Se||V.isBatchedMesh&&we.batching===!1||!V.isBatchedMesh&&we.batching===!0||V.isBatchedMesh&&we.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&we.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||V.isInstancedMesh&&we.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&we.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&we.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&we.instancingMorph===!1&&V.morphTexture!==null||we.envMap!==Ue||H.fog===!0&&we.fog!==ve||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Ne.numPlanes||we.numIntersection!==Ne.numIntersection)||we.vertexAlphas!==ze||we.vertexTangents!==Qe||we.morphTargets!==Pe||we.morphNormals!==it||we.morphColors!==Lt||we.toneMapping!==mt||we.morphTargetsCount!==Bt||!!we.lightProbeGrid!=m.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,we.__version=H.version);let Xt=we.currentProgram;nt===!0&&(Xt=bn(H,w,V),k&&H.isNodeMaterial&&k.onUpdateProgram(H,Xt,we));let Ut=!1,an=!1,An=!1;const Xe=Xt.getUniforms(),Tt=we.uniforms;if(s.useProgram(Xt.program)&&(Ut=!0,an=!0,An=!0),H.id!==ie&&(ie=H.id,an=!0),we.needsLights){const He=ma(m.state.lightProbeGridArray,V);we.lightProbeGrid!==He&&(we.lightProbeGrid=He,an=!0)}if(Ut||se!==d){s.buffers.depth.getReversed()&&d.reversedDepth!==!0&&(d._reversedDepth=!0,d.updateProjectionMatrix()),Xe.setValue(I,"projectionMatrix",d.projectionMatrix),Xe.setValue(I,"viewMatrix",d.matrixWorldInverse);const en=Xe.map.cameraPosition;en!==void 0&&en.setValue(I,ut.setFromMatrixPosition(d.matrixWorld)),E.logarithmicDepthBuffer&&Xe.setValue(I,"logDepthBufFC",2/(Math.log(d.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Xe.setValue(I,"isOrthographic",d.isOrthographicCamera===!0),se!==d&&(se=d,an=!0,An=!0)}if(we.needsLights&&(Ht.state.sunShadowMap.length>0&&Xe.setValue(I,"sunShadowMap",Ht.state.sunShadowMap,j),Ht.state.directionalShadowMap.length>0&&Xe.setValue(I,"directionalShadowMap",Ht.state.directionalShadowMap,j),Ht.state.spotShadowMap.length>0&&Xe.setValue(I,"spotShadowMap",Ht.state.spotShadowMap,j),Ht.state.pointShadowMap.length>0&&Xe.setValue(I,"pointShadowMap",Ht.state.pointShadowMap,j)),V.isSkinnedMesh){Xe.setOptional(I,V,"bindMatrix"),Xe.setOptional(I,V,"bindMatrixInverse");const He=V.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Xe.setValue(I,"boneTexture",He.boneTexture,j))}V.isBatchedMesh&&(Xe.setOptional(I,V,"batchingTexture"),Xe.setValue(I,"batchingTexture",V._matricesTexture,j),Xe.setOptional(I,V,"batchingIdTexture"),Xe.setValue(I,"batchingIdTexture",V._indirectTexture,j),Xe.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&Xe.setValue(I,"batchingColorTexture",V._colorsTexture,j));const Je=W.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&D.update(V,W,Xt),(an||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,Xe.setValue(I,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&w.environment!==null&&(Tt.envMapIntensity.value=w.environmentIntensity),Tt.dfgLUT!==void 0&&(Tt.dfgLUT.value=rg()),an){if(Xe.setValue(I,"toneMappingExposure",U.toneMappingExposure),we.needsLights&&_a(Tt,An),ve&&H.fog===!0&&Fe.refreshFogUniforms(Tt,ve),Fe.refreshMaterialUniforms(Tt,H,te,Y,m.state.transmissionRenderTarget[d.id]),we.needsLights&&we.lightProbeGrid){const He=we.lightProbeGrid;Tt.probesSH.value=He.texture,Tt.probesMin.value.copy(He.boundingBox.min),Tt.probesMax.value.copy(He.boundingBox.max),Tt.probesResolution.value.copy(He.resolution)}ka.upload(I,Fi(we),Tt,j)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ka.upload(I,Fi(we),Tt,j),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Xe.setValue(I,"center",V.center),Xe.setValue(I,"modelViewMatrix",V.modelViewMatrix),Xe.setValue(I,"normalMatrix",V.normalMatrix),Xe.setValue(I,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const He=H.uniformsGroups;for(let en=0,qt=He.length;en<qt;en++){const jt=He[en];ae.update(jt,Xt),ae.bind(jt,Xt)}}return Xt}function _a(d,w){d.ambientLightColor.needsUpdate=w,d.lightProbe.needsUpdate=w,d.sunLights.needsUpdate=w,d.sunLightShadows.needsUpdate=w,d.directionalLights.needsUpdate=w,d.directionalLightShadows.needsUpdate=w,d.pointLights.needsUpdate=w,d.pointLightShadows.needsUpdate=w,d.spotLights.needsUpdate=w,d.spotLightShadows.needsUpdate=w,d.rectAreaLights.needsUpdate=w,d.hemisphereLights.needsUpdate=w}function Yn(d){return d.isMeshLambertMaterial||d.isMeshToonMaterial||d.isMeshPhongMaterial||d.isMeshStandardMaterial||d.isShadowMaterial||d.isShaderMaterial&&d.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(d,w,W){const H=X.get(d);H.__autoAllocateDepthBuffer=d.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(d.texture).__webglTexture=w,X.get(d.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:W,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(d,w){const W=X.get(d);W.__webglFramebuffer=w,W.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(d,w=0,W=0){re=d,K=w,Q=W;let H=null,V=!1,ve=!1;if(d){const Se=X.get(d);if(Se.__useDefaultFramebuffer!==void 0){s.bindFramebuffer(I.FRAMEBUFFER,Se.__webglFramebuffer),ce.copy(d.viewport),Ye.copy(d.scissor),Ve=d.scissorTest,s.viewport(ce),s.scissor(Ye),s.setScissorTest(Ve),ie=-1;return}else if(Se.__webglFramebuffer===void 0)j.setupRenderTarget(d);else if(Se.__hasExternalTextures)j.rebindTextures(d,X.get(d.texture).__webglTexture,X.get(d.depthTexture).__webglTexture);else if(d.depthBuffer){const ze=d.depthTexture;if(Se.__boundDepthTexture!==ze){if(ze!==null&&X.has(ze)&&(d.width!==ze.image.width||d.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(d)}}const Re=d.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(ve=!0);const Ue=X.get(d).__webglFramebuffer;d.isWebGLCubeRenderTarget?(Array.isArray(Ue[w])?H=Ue[w][W]:H=Ue[w],V=!0):d.samples>0&&j.useMultisampledRTT(d)===!1?H=X.get(d).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[W]:H=Ue,ce.copy(d.viewport),Ye.copy(d.scissor),Ve=d.scissorTest}else ce.copy(ue).multiplyScalar(te).floor(),Ye.copy(be).multiplyScalar(te).floor(),Ve=at;if(W!==0&&(H=q),s.bindFramebuffer(I.FRAMEBUFFER,H)&&s.drawBuffers(d,H),s.viewport(ce),s.scissor(Ye),s.setScissorTest(Ve),V){const Se=X.get(d.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+w,Se.__webglTexture,W)}else if(ve){const Se=w;for(let Re=0;Re<d.textures.length;Re++){const Ue=X.get(d.textures[Re]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Re,Ue.__webglTexture,W,Se)}}else if(d!==null&&W!==0){const Se=X.get(d.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Se.__webglTexture,W)}ie=-1};function Fn(d){const w=X.get(d);return(w.__readFormat!==d.format||w.__readType!==d.type)&&(w.__readFormat=d.format,w.__readType=d.type,w.__formatReadable=E.textureFormatReadable(d.format),w.__typeReadable=E.textureTypeReadable(d.type)),w}this.readRenderTargetPixels=function(d,w,W,H,V,ve,Ce,Se=0){if(!(d&&d.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=X.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&Ce!==void 0&&(Re=Re[Ce]),Re){s.bindFramebuffer(I.FRAMEBUFFER,Re);try{const Ue=d.textures[Se],ze=Ue.format,Qe=Ue.type;d.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Se);const Pe=Fn(Ue);if(Pe.__formatReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pe.__typeReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=d.width-H&&W>=0&&W<=d.height-V&&I.readPixels(w,W,H,V,fe.convert(ze),fe.convert(Qe),ve)}finally{const Ue=re!==null?X.get(re).__webglFramebuffer:null;s.bindFramebuffer(I.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(d,w,W,H,V,ve,Ce,Se=0){if(!(d&&d.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=X.get(d).__webglFramebuffer;if(d.isWebGLCubeRenderTarget&&Ce!==void 0&&(Re=Re[Ce]),Re)if(w>=0&&w<=d.width-H&&W>=0&&W<=d.height-V){s.bindFramebuffer(I.FRAMEBUFFER,Re);const Ue=d.textures[Se],ze=Ue.format,Qe=Ue.type;d.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Se);const Pe=Fn(Ue);if(Pe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(w,W,H,V,fe.convert(ze),fe.convert(Qe),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const Lt=re!==null?X.get(re).__webglFramebuffer:null;s.bindFramebuffer(I.FRAMEBUFFER,Lt);const mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Fd(I,mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,it),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(it),I.deleteSync(mt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(d,w=null,W=0){const H=Math.pow(2,-W),V=Math.floor(d.image.width*H),ve=Math.floor(d.image.height*H),Ce=w!==null?w.x:0,Se=w!==null?w.y:0;j.setTexture2D(d,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,Ce,Se,V,ve),s.unbindTexture()},this.copyTextureToTexture=function(d,w,W=null,H=null,V=0,ve=0){let Ce,Se,Re,Ue,ze,Qe,Pe,it,Lt;const mt=d.isCompressedTexture?d.mipmaps[ve]:d.image;if(W!==null)Ce=W.max.x-W.min.x,Se=W.max.y-W.min.y,Re=W.isBox3?W.max.z-W.min.z:1,Ue=W.min.x,ze=W.min.y,Qe=W.isBox3?W.min.z:0;else{const Tt=Math.pow(2,-V);Ce=Math.floor(mt.width*Tt),Se=Math.floor(mt.height*Tt),d.isDataArrayTexture?Re=mt.depth:d.isData3DTexture?Re=Math.floor(mt.depth*Tt):Re=1,Ue=0,ze=0,Qe=0}H!==null?(Pe=H.x,it=H.y,Lt=H.z):(Pe=0,it=0,Lt=0);const pt=fe.convert(w.format),Bt=fe.convert(w.type);let we;w.isData3DTexture?(j.setTexture3D(w,0),we=I.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(j.setTexture2DArray(w,0),we=I.TEXTURE_2D_ARRAY):(j.setTexture2D(w,0),we=I.TEXTURE_2D),s.activeTexture(I.TEXTURE0),s.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(I.UNPACK_ALIGNMENT,w.unpackAlignment);const Ht=s.getParameter(I.UNPACK_ROW_LENGTH),nt=s.getParameter(I.UNPACK_IMAGE_HEIGHT),Xt=s.getParameter(I.UNPACK_SKIP_PIXELS),Ut=s.getParameter(I.UNPACK_SKIP_ROWS),an=s.getParameter(I.UNPACK_SKIP_IMAGES);s.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),s.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),s.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(I.UNPACK_SKIP_ROWS,ze),s.pixelStorei(I.UNPACK_SKIP_IMAGES,Qe);const An=d.isDataArrayTexture||d.isData3DTexture,Xe=w.isDataArrayTexture||w.isData3DTexture;if(d.isDepthTexture){const Tt=X.get(d),Je=X.get(w),He=X.get(Tt.__renderTarget),en=X.get(Je.__renderTarget);s.bindFramebuffer(I.READ_FRAMEBUFFER,He.__webglFramebuffer),s.bindFramebuffer(I.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let qt=0;qt<Re;qt++)An&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(d).__webglTexture,V,Qe+qt),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,X.get(w).__webglTexture,ve,Lt+qt)),I.blitFramebuffer(Ue,ze,Ce,Se,Pe,it,Ce,Se,I.DEPTH_BUFFER_BIT,I.NEAREST);s.bindFramebuffer(I.READ_FRAMEBUFFER,null),s.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||d.isRenderTargetTexture||X.has(d)){const Tt=X.get(d),Je=X.get(w);s.bindFramebuffer(I.READ_FRAMEBUFFER,F),s.bindFramebuffer(I.DRAW_FRAMEBUFFER,$);for(let He=0;He<Re;He++)An?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Tt.__webglTexture,V,Qe+He):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Tt.__webglTexture,V),Xe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Je.__webglTexture,ve,Lt+He):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Je.__webglTexture,ve),V!==0?I.blitFramebuffer(Ue,ze,Ce,Se,Pe,it,Ce,Se,I.COLOR_BUFFER_BIT,I.NEAREST):Xe?I.copyTexSubImage3D(we,ve,Pe,it,Lt+He,Ue,ze,Ce,Se):I.copyTexSubImage2D(we,ve,Pe,it,Ue,ze,Ce,Se);s.bindFramebuffer(I.READ_FRAMEBUFFER,null),s.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Xe?d.isDataTexture||d.isData3DTexture?I.texSubImage3D(we,ve,Pe,it,Lt,Ce,Se,Re,pt,Bt,mt.data):w.isCompressedArrayTexture?I.compressedTexSubImage3D(we,ve,Pe,it,Lt,Ce,Se,Re,pt,mt.data):I.texSubImage3D(we,ve,Pe,it,Lt,Ce,Se,Re,pt,Bt,mt):d.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,Pe,it,Ce,Se,pt,Bt,mt.data):d.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,Pe,it,mt.width,mt.height,pt,mt.data):I.texSubImage2D(I.TEXTURE_2D,ve,Pe,it,Ce,Se,pt,Bt,mt);s.pixelStorei(I.UNPACK_ROW_LENGTH,Ht),s.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt),s.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(I.UNPACK_SKIP_ROWS,Ut),s.pixelStorei(I.UNPACK_SKIP_IMAGES,an),ve===0&&w.generateMipmaps&&I.generateMipmap(we),s.unbindTexture()},this.initRenderTarget=function(d){X.get(d).__webglFramebuffer===void 0&&j.setupRenderTarget(d)},this.initTexture=function(d){d.isCubeTexture?j.setTextureCube(d,0):d.isData3DTexture?j.setTexture3D(d,0):d.isDataArrayTexture||d.isCompressedArrayTexture?j.setTexture2DArray(d,0):j.setTexture2D(d,0),s.unbindTexture()},this.resetState=function(){K=0,Q=0,re=null,s.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ko}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(n),t.unpackColorSpace=Dt._getUnpackColorSpace()}}class sg extends Qu{constructor(n){super(n)}load(n,t,i,r){const a=this,o=new Ju(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(n,function(v){try{t(a.parse(v))}catch(R){r?r(R):console.error(R),a.manager.itemError(n)}},i,r)}parse(n){function t(_){const x=new DataView(_),S=32/8*3+32/8*3*3+16/8,h=x.getUint32(80,!0);if(80+32/8+h*S===x.byteLength)return!0;const C=[115,111,108,105,100];for(let L=0;L<5;L++)if(i(C,x,L))return!1;return!0}function i(_,x,S){for(let h=0,T=_.length;h<T;h++)if(_[h]!==x.getUint8(S+h))return!1;return!0}function r(_){const x=new DataView(_),S=x.getUint32(80,!0);let h,T,C,L=!1,p,l,P,y,g;for(let G=0;G<70;G++)x.getUint32(G,!1)==1129270351&&x.getUint8(G+4)==82&&x.getUint8(G+5)==61&&(L=!0,p=new Float32Array(S*3*3),l=x.getUint8(G+6)/255,P=x.getUint8(G+7)/255,y=x.getUint8(G+8)/255,g=x.getUint8(G+9)/255);const A=84,m=50,N=new hi,f=new Float32Array(S*3*3),b=new Float32Array(S*3*3),U=new At;for(let G=0;G<S;G++){const k=A+G*m,q=x.getFloat32(k,!0),F=x.getFloat32(k+4,!0),$=x.getFloat32(k+8,!0);if(L){const K=x.getUint16(k+48,!0);(K&32768)===0?(h=(K&31)/31,T=(K>>5&31)/31,C=(K>>10&31)/31):(h=l,T=P,C=y)}for(let K=1;K<=3;K++){const Q=k+K*12,re=G*3*3+(K-1)*3;f[re]=x.getFloat32(Q,!0),f[re+1]=x.getFloat32(Q+4,!0),f[re+2]=x.getFloat32(Q+8,!0),b[re]=q,b[re+1]=F,b[re+2]=$,L&&(U.setRGB(h,T,C,no),p[re]=U.r,p[re+1]=U.g,p[re+2]=U.b)}}return N.setAttribute("position",new Jn(f,3)),N.setAttribute("normal",new Jn(b,3)),L&&(N.setAttribute("color",new Jn(p,3)),N.hasColors=!0,N.alpha=g),N}function a(_){const x=new hi,S=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g,T=/solid\s(.+)/;let C=0;const L=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+L+L+L,"g"),l=new RegExp("normal"+L+L+L,"g"),P=[],y=[],g=[],A=new Ie;let m,N=0,f=0,b=0;for(;(m=S.exec(_))!==null;){f=b;const U=m[0],G=(m=T.exec(U))!==null?m[1]:"";for(g.push(G);(m=h.exec(U))!==null;){let F=0,$=0;const K=m[0];for(;(m=l.exec(K))!==null;)A.x=parseFloat(m[1]),A.y=parseFloat(m[2]),A.z=parseFloat(m[3]),$++;for(;(m=p.exec(K))!==null;)P.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),y.push(A.x,A.y,A.z),F++,b++;$!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+C),F!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+C),C++}const k=f,q=b-f;x.userData.groupNames=g,x.addGroup(k,q,N),N++}return x.setAttribute("position",new Xa(P,3)),x.setAttribute("normal",new Xa(y,3)),x}function o(_){return typeof _!="string"?new TextDecoder().decode(_):_}function v(_){if(typeof _=="string"){const x=new Uint8Array(_.length);for(let S=0;S<_.length;S++)x[S]=_.charCodeAt(S)&255;return x.buffer||x}else return _}const R=v(n);return t(R)?r(R):a(o(n))}}const nl=3,cg="face-skin-v1",Ya=1e-6,lg=Object.freeze([10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109]),dg=Object.freeze([10,33,263,1,152,234,454,172,397]),nc=Object.freeze({diamond:"diamante",heart:"coracao",oblong:"retangular",oval:"oval",round:"redondo",square:"quadrado",triangle:"triangular"});function Qn(e,n,t){return Math.max(n,Math.min(t,e))}function Qr(e){if(!e.length)return 0;const n=[...e].sort((i,r)=>i-r),t=Math.floor(n.length/2);return n.length%2?n[t]:(n[t-1]+n[t])*.5}function Wa(e,n,t,i){const r=e?.[n];return r?{x:r.x*t,y:r.y*i}:null}function il(e,n,t){const i=Wa(e,33,n,t),r=Wa(e,263,n,t),a=Wa(e,152,n,t);if(!i||!r||!a)return null;const o=r.x-i.x,v=r.y-i.y,R=Math.hypot(o,v);if(R<Ya)return null;const _={x:o/R,y:v/R};let x={x:-_.y,y:_.x};const S={x:(i.x+r.x)*.5,y:(i.y+r.y)*.5},h={x:a.x-S.x,y:a.y-S.y};h.x*x.x+h.y*x.y<0&&(x={x:-x.x,y:-x.y});const T=L=>{const p=L.x-S.x,l=L.y-S.y;return{x:p*_.x+l*_.y,y:p*x.x+l*x.y}},C=L=>({x:S.x+L.x*_.x+L.y*x.x,y:S.y+L.x*_.y+L.y*x.y});return{origin:S,horizontal:_,vertical:x,eyeDistance:R,rollDegrees:Math.atan2(v,o)*180/Math.PI,project:T,unproject:C}}function cn(e,n,t,i,r){const a=Wa(n,t,i,r);return a?e.project(a):null}function Jr(e,n,t,i,r,a){const o=i.unproject({x:r,y:a}),v=Math.round(o.x),R=Math.round(o.y);return v<0||R<0||v>=n||R>=t?0:Number(e[R*n+v])||0}function Gr(e,n,t,i,r,a,o,v,R){const _=[],x=[];for(let S=-R;S<=R;S+=1){let h=Number.POSITIVE_INFINITY,T=Number.NEGATIVE_INFINITY;for(let C=Math.floor(a);C<=Math.ceil(o);C+=1)Jr(e,n,t,i,C,r+S)<v||(h=Math.min(h,C),T=Math.max(T,C));Number.isFinite(h)&&T>h&&(_.push(h),x.push(T))}return _.length?{left:Qr(_),right:Qr(x)}:null}function ug(e,n){const t=[];for(let i=0;i<e.length;i+=1){const r=e[i],a=e[(i+1)%e.length];if(!r||!a||!(r.y<=n&&n<a.y||a.y<=n&&n<r.y))continue;const o=(n-r.y)/(a.y-r.y);t.push(r.x+o*(a.x-r.x))}return t.length<2?null:{left:Math.min(...t),right:Math.max(...t)}}function ic(e,n,t,i){const r=ug(n,t);if(!e||!r)return e;const a=i*.055;return{left:Math.max(e.left,r.left-a),right:Math.min(e.right,r.right+a)}}function ac({mask:e,width:n,height:t,frame:i,centerX:r,radius:a,yMinimum:o,yMaximum:v,threshold:R,findTop:_}){const x=[];for(let S=Math.round(r-a);S<=Math.round(r+a);S+=1){let h=null;if(_){for(let T=Math.floor(o);T<=Math.ceil(v);T+=1)if(Jr(e,n,t,i,S,T)>=R){h=T;break}}else for(let T=Math.ceil(v);T>=Math.floor(o);T-=1)if(Jr(e,n,t,i,S,T)>=R){h=T;break}h!=null&&x.push(h)}return x.length?Qr(x):null}function fg(e,n,t){const i={x:e.x-n.x,y:e.y-n.y},r={x:t.x-n.x,y:t.y-n.y},a=Math.hypot(i.x,i.y)*Math.hypot(r.x,r.y);if(a<Ya)return 0;const o=Qn((i.x*r.x+i.y*r.y)/a,-1,1);return Math.acos(o)*180/Math.PI}function ui(e,n,t){return Math.max(0,1-Math.abs(e-n)/t)}function fi(e,n,t){return Qn((n-e)/t,0,1)}function wi(e,n,t){return Qn((e-n)/t,0,1)}function pg(e,n){const t=e.lengthToCheek,i=e.foreheadToCheek,r=e.jawToCheek,a=e.jawToForehead,o=e.chinAngleDegrees,v={oval:.4*ui(t,1.38,.28)+.3*ui(i,.91,.18)+.3*ui(r,.82,.18),round:.45*fi(t,1.24,.25)+.3*ui(i,.94,.16)+.25*wi(o,105,35),square:.35*fi(t,1.34,.24)+.35*ui(r,.94,.15)+.3*fi(o,105,35),oblong:.6*wi(t,1.38,.28)+.2*ui(i,.94,.16)+.2*ui(r,.88,.16),heart:.35*wi(i,.94,.16)+.4*fi(a,.88,.2)+.25*fi(o,100,35),diamond:.45*fi(i,.9,.18)+.4*fi(r,.84,.18)+.15*wi(t,1.25,.28),triangle:.65*wi(a,1.02,.22)+.35*wi(r,.9,.16)},R=Object.fromEntries(Object.entries(v).map(([L,p])=>[L,Math.max(p,.001)**2])),_=Object.values(R).reduce((L,p)=>L+p,0),x=Object.fromEntries(Object.entries(R).map(([L,p])=>[L,p/_])),S=Object.entries(x).sort((L,p)=>p[1]-L[1]),[h,T]=S[0],C=T-(S[1]?.[1]||0);return{label:h,appLabel:nc[h]||"indefinido",scores:v,probabilities:x,appProbabilities:Object.fromEntries(Object.entries(x).map(([L,p])=>[nc[L],p])),confidence:Qn((T*.7+C*.3)*n,0,1)}}function al(e,n,t=null){const i=Number(n?.width)||0,r=Number(n?.height)||0,a=il(e,i,r);if(!a||e.length<=454)return{eligible:!1,poseQuality:0,motion:Number.POSITIVE_INFINITY};const o=cn(a,e,1,i,r),v=cn(a,e,152,i,r),R=cn(a,e,234,i,r),_=cn(a,e,454,i,r),x=Math.abs(_.x-R.x),S=Math.abs(o.x)/Math.max(a.eyeDistance,Ya),h=x/Math.max(1,Math.min(i,r)),T=v.y/Math.max(x,Ya),C=1-Qn((Math.abs(a.rollDegrees)-2)/8,0,1),L=1-Qn((S-.035)/.15,0,1),p=1-Qn(Math.abs(T-.82)/.42,0,1),l=Qn(.38*L+.32*C+.3*p,0,1);let P=0;if(t?.length>454){let y=0,g=0;for(const A of dg){const m=e[A],N=t[A];!m||!N||(y+=(m.x-N.x)**2+(m.y-N.y)**2,g+=1)}P=g?Math.sqrt(y/g):Number.POSITIVE_INFINITY}return{eligible:l>=.72&&Math.abs(a.rollDegrees)<=9&&S<=.16&&h>=.24&&T>=.42&&T<=1.25&&(!t||P<=.008),poseQuality:l,motion:P,rollDegrees:a.rollDegrees,yawProxy:S,faceScale:h,eyeToChin:T}}function rl({landmarks:e,faceSkinMask:n,width:t,height:i,threshold:r=.35,poseQuality:a=1}){if(!Array.isArray(e)||e.length<=454)throw new Error("Landmarks insuficientes para medir o rosto.");if(!n||n.length!==t*i)throw new Error("A máscara face-skin não corresponde às dimensões informadas.");const o=il(e,t,i);if(!o)throw new Error("Não foi possível construir o sistema local do rosto.");const v=lg.map(se=>cn(o,e,se,t,i)),R=v.map(se=>se.x),_=Math.max(...R)-Math.min(...R),x=cn(o,e,1,t,i),S=cn(o,e,152,t,i),h=cn(o,e,10,t,i),T=(x.x+S.x)*.5,C=Math.max(2,Math.round(_*.035)),L=ac({mask:n,width:t,height:i,frame:o,centerX:T,radius:C,yMinimum:-_*.62,yMaximum:h.y+_*.12,threshold:r,findTop:!0}),p=ac({mask:n,width:t,height:i,frame:o,centerX:S.x,radius:C,yMinimum:S.y-_*.12,yMaximum:S.y+_*.14,threshold:r,findTop:!1});if(L==null||p==null||p<=L)throw new Error("A máscara não contém extremos válidos de testa e queixo.");const l=p-L,P=Math.max(1,Math.round(l*.009)),y=cn(o,e,55,t,i),g=cn(o,e,285,t,i),A=cn(o,e,93,t,i),m=cn(o,e,323,t,i),N=cn(o,e,172,t,i),f=cn(o,e,397,t,i),b=(y.y+g.y)*.5,U={forehead:L+(b-L)*.48,cheek:(A.y+m.y)*.5,jaw:(N.y+f.y)*.5},G=T-_*.68,k=T+_*.68,q=Gr(n,t,i,o,U.forehead,G,k,r,P),F=ic(Gr(n,t,i,o,U.cheek,G,k,r,P),v,U.cheek,_),$=ic(Gr(n,t,i,o,U.jaw,G,k,r,P),v,U.jaw,_);if(!q||!F||!$)throw new Error("Não foi possível medir testa, maçãs do rosto e mandíbula.");const K={forehead:q.right-q.left,cheek:F.right-F.left,jaw:$.right-$.left};if(Math.min(...Object.values(K))<=0)throw new Error("A segmentação produziu larguras faciais inválidas.");const Q=fg({x:$.left,y:U.jaw},{x:S.x,y:p},{x:$.right,y:U.jaw}),re={lengthToCheek:l/K.cheek,foreheadToCheek:K.forehead/K.cheek,jawToCheek:K.jaw/K.cheek,jawToForehead:K.jaw/K.forehead,chinAngleDegrees:Q};return{...pg(re,a),version:cg,poseQuality:a,rollDegrees:o.rollDegrees,measurements:{faceLength:l,...K},ratios:re,levels:U,points:{hairline:o.unproject({x:T,y:L}),chin:o.unproject({x:S.x,y:p}),foreheadLeft:o.unproject({x:q.left,y:U.forehead}),foreheadRight:o.unproject({x:q.right,y:U.forehead}),cheekLeft:o.unproject({x:F.left,y:U.cheek}),cheekRight:o.unproject({x:F.right,y:U.cheek}),jawLeft:o.unproject({x:$.left,y:U.jaw}),jawRight:o.unproject({x:$.right,y:U.jaw})}}}const hg="/mediapipe/wasm",mg="/face_landmarker.task",_g="/selfie_multiclass_256x256.tflite",gg=512;function vg(e,n){const t={diamante:"quadrado",retangular:"oval"},i={};for(const[o,v]of Object.entries(e||{})){const R=Object.prototype.hasOwnProperty.call(t,o)?t[o]:o;Object.prototype.hasOwnProperty.call(n,R)&&(i[R]=(i[R]||0)+v)}const r=Object.values(i).reduce((o,v)=>o+v,0);if(!r)return{};const a={};for(const o of Object.keys(n))a[o]=Math.round((i[o]||0)/r*100);return a}function ol(e,n,t,i,r){const a=document.createElement("canvas");a.width=i,a.height=r;const o=a.getContext("2d");o.drawImage(e,0,0,i,r);const v=document.createElement("canvas");v.width=i,v.height=r;const R=v.getContext("2d"),_=R.createImageData(i,r),x=Object.values(n.points),S=Math.max(0,Math.floor(Math.min(...x.map(y=>y.x))-i*.05)),h=Math.min(i-1,Math.ceil(Math.max(...x.map(y=>y.x))+i*.05)),T=Math.max(0,Math.floor(n.points.hairline.y-r*.025)),C=Math.min(r-1,Math.ceil(n.points.chin.y+r*.025)),L=(y,g)=>{for(let A=-1;A<=1;A+=1){const m=Math.round(y+A),N=Math.round(g);if(m<0||m>=i||N<0||N>=r)continue;const f=(N*i+m)*4;_.data[f]=24,_.data[f+1]=235,_.data[f+2]=226,_.data[f+3]=245}};for(let y=T;y<=C;y+=1){let g=-1,A=-1;for(let m=S;m<=h;m+=1)t[y*i+m]<.35||(g<0&&(g=m),A=m);g>=0&&A>g&&(L(g,y),L(A,y))}for(let y=S;y<=h;y+=1){let g=-1,A=-1;for(let m=T;m<=C;m+=1)t[m*i+y]<.35||(g<0&&(g=m),A=m);g>=0&&A>g&&(L(y,g),L(y,A))}R.putImageData(_,0,0),o.drawImage(v,0,0);const p=Math.max(2,i/220),l=(y,g,A)=>{o.save(),o.strokeStyle="rgba(0, 0, 0, 0.72)",o.lineWidth=p+3,o.beginPath(),o.moveTo(y.x,y.y),o.lineTo(g.x,g.y),o.stroke(),o.strokeStyle=A,o.lineWidth=p,o.beginPath(),o.moveTo(y.x,y.y),o.lineTo(g.x,g.y),o.stroke(),o.fillStyle=A;for(const m of[y,g])o.beginPath(),o.arc(m.x,m.y,p*1.8,0,Math.PI*2),o.fill();o.restore()},P=n.points;return l(P.hairline,P.chin,"#ffd429"),l(P.foreheadLeft,P.foreheadRight,"#ef5bff"),l(P.cheekLeft,P.cheekRight,"#39e36d"),l(P.jawLeft,P.jawRight,"#ff9b35"),o.save(),o.strokeStyle="#47a7ff",o.lineWidth=p,o.beginPath(),o.moveTo(P.jawLeft.x,P.jawLeft.y),o.lineTo(P.chin.x,P.chin.y),o.lineTo(P.jawRight.x,P.jawRight.y),o.stroke(),o.restore(),a.toDataURL("image/jpeg",.93)}function Sg(e){return new Promise((n,t)=>{const i=new Image;i.onload=()=>n(i),i.onerror=()=>t(new Error("Não foi possível ler a foto.")),i.src=e})}async function xg(e){const n=await Sg(e),t=Math.min(1,gg/Math.max(n.width,n.height)),i=document.createElement("canvas");return i.width=Math.max(1,Math.round(n.width*t)),i.height=Math.max(1,Math.round(n.height*t)),i.getContext("2d",{alpha:!1}).drawImage(n,0,0,i.width,i.height),i}async function Eg(e,n){const t=await qc.createFromOptions(e,{baseOptions:{modelAssetPath:mg,delegate:"CPU"},runningMode:"IMAGE",numFaces:1});try{return t.detect(n).faceLandmarks?.[0]||null}finally{t.close()}}async function Mg(e,n){const t=await Yc.createFromOptions(e,{baseOptions:{modelAssetPath:_g,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1});try{let i=null;return t.segment(n,r=>{const a=r.confidenceMasks?.[nl];a&&(i={dados:a.getAsFloat32Array(),width:a.width,height:a.height}),r.close?.()}),i}finally{t.close()}}async function vv(e){const n=await xg(e),t=await jr.forVisionTasks(hg),i=await Eg(t,n);if(!i)throw new Error("Nenhum rosto encontrado na foto.");const r=al(i,{width:n.width,height:n.height}),a=await Mg(t,n);if(!a)throw new Error("O segmentador não retornou a classe face-skin.");const o=rl({landmarks:i,faceSkinMask:a.dados,width:a.width,height:a.height,threshold:.35,poseQuality:r.poseQuality});return{ready:!0,image:ol(n,o,a.dados,a.width,a.height),details:o}}const Tg={redondo:{x:21.2,y:27.6,w:257.7,h:364.9},quadrado:{x:22.8,y:19,w:254.5,h:382},coracao:{x:10.1,y:14.5,w:279.8,h:391},triangular:{x:28.7,y:10.3,w:242.5,h:399.4},oval:{x:19.2,y:13.7,w:261.6,h:392.6}},bg={redondo:"M154.7,27.6c41,0,95.2,20.4,112.7,77.9c21,69.1,9.3,153.6-3,190.6c-11.5,34.6-62.2,96.4-122,96.4c-27.9,0-69.5-19-109.8-109.7c-11.4-25.6-21-128.4,6.3-195.2C62,30.8,130.2,27.9,143.7,27.9c0.8,0,1.3,0,1.4,0l0.6,0l0.6,0C148.9,27.7,151.7,27.6,154.7,27.6z",quadrado:"M264.7,94.6C249.3,32.9,176.4,19,152,19l-1.1,0v0c-0.1,0-0.3,0-0.4,0l-0.5,0l-0.5,0c-0.1,0-0.3,0-0.4,0v0l-1.1,0c-24.3,0-97.2,13.9-112.6,75.6c-15.5,62-18.1,176.7,0.3,213.6c18.2,36.4,73.9,89.5,76.2,91.6l1.2,1.1l36,0.1v0l1,0l1,0v0l36-0.1l1.2-1.1c2.4-2.1,58-55.1,76.2-91.6C282.8,271.3,280.2,156.6,264.7,94.6z",coracao:"M289.8,214.2c-5.9-82.9-9.5-133-34.3-159.2C232.1,30.3,189.1,13.9,150,14.5C110.9,13.9,67.9,30.3,44.5,55c-24.8,26.2-28.4,76.2-34.3,159.2l-0.1,0.9l0.3,0.9C42.2,305.7,98.9,407,150,405.5c51.1,1.5,107.8-99.9,139.6-189.5l0.3-0.9L289.8,214.2z",triangular:"M264.7,101C255,52.4,204.6,12.7,151,10.4v-0.1c-0.3,0-0.7,0-1,0c-0.3,0-0.7,0-1,0v0.1C95.4,12.7,45,52.4,35.3,101c-7.4,37-6.8,100.2-6.3,150.9c0.1,11.9,0.2,23.2,0.2,33.5v0.6l0.2,0.6c14.3,48.7,74.8,115.3,119.6,122.8v0.3c0.3,0,0.7-0.1,1-0.2c0.3,0,0.7,0.1,1,0.2v-0.3c44.8-7.5,105.3-74.1,119.6-122.8l0.2-0.6v-0.6c0-10.2,0.1-21.5,0.2-33.5C271.5,201.2,272.1,138.1,264.7,101z",oval:"M280.7,173.8c-13.1-65.3-32.8-109.4-60.4-134.8c-24.7-22.7-51.4-25.6-70.3-25.3c-18.9-0.3-45.6,2.6-70.3,25.3c-27.6,25.3-47.3,69.4-60.4,134.8l-0.1,0.5l0,0.5c1.5,68.2,15.3,97.7,36.1,142.3l0.4,0.9c26.2,56.1,60,88.3,92.8,88.3c0.5,0,1,0,1.5,0c0.5,0,1,0,1.5,0c32.8,0,66.6-32.2,92.8-88.3l0.4-0.9c20.8-44.6,34.6-74.1,36.1-142.3l0-0.5L280.7,173.8z"},Hr={};function Ag(e){const n=bg[e];return n?(Hr[e]||(Hr[e]=new Path2D(n)),Hr[e]):null}function Et(e,n=0){const t=Number(e);return Number.isFinite(t)?t:n}function Rg({userAgent:e="",platform:n="",maxTouchPoints:t=0}={}){const i=String(e||""),r=String(n||""),a=Math.max(0,Et(t)),o=/Android|iPhone|iPad|iPod/i.test(i),v=r==="MacIntel"&&a>1;return{isPhysicalMobile:o||v,isIPadLike:/iPad/i.test(i)||v,reason:v?"ipad-touch-desktop-identity":o?"mobile-user-agent":"desktop"}}function wg({viewportWidth:e=0,viewportHeight:n=0,orientationType:t=""}={}){const i=Et(e),r=Et(n),a=String(t||"").toLowerCase();return(i>0&&r>0&&i!==r?i>r:a.startsWith("landscape"))?{key:"landscape",width:1280,height:720,aspectRatio:16/9}:{key:"portrait",width:720,height:1280,aspectRatio:9/16}}function Cg({isPhysicalMobile:e=!1,viewportWidth:n=0,viewportHeight:t=0,rawContentRotation:i=0,deviceGamma:r=null,deviceOrientationAgeMs:a=Number.POSITIVE_INFINITY,deviceLandscapeStableMs:o=0,sensorFreshForMs:v=2500,sensorMinimumStableMs:R=600}={}){const _=Et(n),x=Et(t),S=_>0&&x>0&&_>x,h=_>0&&x>0&&x>_,T=ei(i),C=Math.abs(T)===90,L=Number(r),p=Number.isFinite(L)&&Number.isFinite(Number(a))&&Number(a)>=0&&Number(a)<=Math.max(0,Et(v,2500)),l=p&&Math.abs(L)>=45&&Et(o)>=Math.max(0,Et(R,600)),P=C||l;return{mismatch:!!(e&&h&&P),viewportLandscape:S,viewportPortrait:h,physicalLandscape:P,cameraLandscape:C,sensorLandscape:l,sensorFresh:p,evidence:C&&l?"camera+sensor":C?"camera":l?"sensor":"none",rawContentRotation:T}}function oo(e){let n=Et(e);for(;n>90;)n-=180;for(;n<-90;)n+=180;return n}function eo(e){const n=e?.[33],t=e?.[263];if(!n||!t)return null;const i=Et(t.x,NaN)-Et(n.x,NaN),r=Et(t.y,NaN)-Et(n.y,NaN);return!Number.isFinite(i)||!Number.isFinite(r)||Math.hypot(i,r)<1e-6?null:oo(Math.atan2(r,i)*180/Math.PI)}function rc(e,n=65){const t=eo(e),i=e?.[33],r=e?.[263],a=e?.[1];if(!Number.isFinite(t)||!a)return 0;const o=(Et(i.x)+Et(r.x))/2,v=(Et(i.y)+Et(r.y))/2,R=Et(a.x,NaN)-o,_=Et(a.y,NaN)-v;if(!Number.isFinite(R)||!Number.isFinite(_))return 0;const x=Math.hypot(Et(r.x)-Et(i.x),Et(r.y)-Et(i.y));return Math.abs(t)>=n?-R>=R?-90:90:_<-Math.max(x*.08,.005)?180:0}function oc({calculatedRotation:e=0,eyeLineAngleDeg:n=null,activeRotation:t=null,initialFlatMaximumDeg:i=28,initialQuarterMinimumDeg:r=78,switchToFlatMaximumDeg:a=30,switchToQuarterMinimumDeg:o=78}={}){const v=Number(n);if(!Number.isFinite(v))return null;const R=ei(e),_=Number(t),S=t!=null&&t!==""&&[0,-90,90,180,-180].includes(_)?ei(_):null,h=Math.abs(oo(v)),T=Math.abs(R)===90;return S===null?(T?h>=Et(r,78):h<=Et(i,28))?R:null:(Math.abs(S)===90?T||h<=Et(a,30):!T||h>=Et(o,78))?R:null}function Pg(e,{minimumSamples:n=6,requiredRatio:t=.75}={}){const i=(Array.isArray(e)?e:[]).map(Number).filter(Number.isFinite);if(i.length<n)return null;const r=i.reduce((o,v)=>{const R=v===-90||v===90||Math.abs(v)===180?v:0,_=Math.abs(R)===180?180:R;return o[_]+=1,o},{"-90":0,0:0,90:0,180:0}),a=[0,-90,90,180].sort((o,v)=>r[v]-r[o])[0];return r[a]/i.length>=t?a:null}function ei(e){const n=Number(e);return Math.abs(n)===180?180:n===-90||n===90?n:0}function Oa(e,n=!1){const t=ei(e);return n&&Math.abs(t)===90?-t:t}function yg(e,n=0){return oo(Et(e)-ei(n))}function Lg({initialRotation:e=0,minimumSamples:n=14,minimumStableMs:t=650,requiredRatio:i=.82,maximumSamples:r=24,maximumGapMs:a=350,cooldownMs:o=1500,reportCandidateAfterSamples:v=5,rejectionSamples:R=4}={}){let _=ei(e),x=null,S=[],h=!1,T=0,C=Number.NEGATIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function p(){x=null,S=[],h=!1,T=0}function l(P){const y=S.filter(m=>m.rotation===x),g=y.length>1?P-y[0].at:0,A=S.length?y.length/S.length:0;return{candidateRotation:x,sampleCount:y.length,windowSamples:S.length,stableMs:Math.max(0,g),confidence:A}}return{reset(P=_,y=Number.NEGATIVE_INFINITY){return _=ei(P),C=Number(y),p(),_},observe(P,y=performance.now()){const g=Number.isFinite(Number(y))?Number(y):0,A=ei(P);let m=null;if(g-C>a&&x!==null){const k=l(C);k.sampleCount>=v&&(m=k),p()}if(C=g,A===_){if(x===null)return{changed:!1,candidateStarted:!1,rejected:m,activeRotation:_};S.push({rotation:A,at:g}),S=S.slice(-r),T+=1;const k=l(g);return T>=R&&(k.sampleCount>=v&&(m=k),p()),{changed:!1,candidateStarted:!1,rejected:m,activeRotation:_,...m?{}:k}}if(x!==A){if(x!==null){const k=l(g);k.sampleCount>=v&&(m=k)}x=A,S=[],h=!1}T=0,S.push({rotation:A,at:g}),S=S.slice(-r);const N=l(g),f=!h&&N.sampleCount>=v;f&&(h=!0);const b=N.sampleCount>=n&&N.stableMs>=t&&N.confidence>=i,U=g-L>=o;if(!b||!U)return{changed:!1,candidateStarted:f,rejected:m,activeRotation:_,...N};const G=_;return _=x,L=g,p(),{changed:!0,candidateStarted:f,rejected:m,previousRotation:G,activeRotation:_,...N}},getState(){return{activeRotation:_,candidateRotation:x,candidateSamples:S.length,lastAppliedAt:L}}}}function sc(e){const n=Math.round(Number(e)||0);return Math.max(0,n)}function ni(e){const n=Number(e);return n===90||n===-90?n:Math.abs(n)===180?180:0}function cc(e,n,t=0){const i=sc(e),r=sc(n),a=ni(t),o=Math.abs(a)===90;return{width:o?r:i,height:o?i:r,rotationDeg:a}}function Ng(e,n=0){const t=Number(e?.x)||0,i=Number(e?.y)||0;switch(ni(n)){case 90:return{...e,x:i,y:1-t};case-90:return{...e,x:1-i,y:t};case 180:return{...e,x:1-t,y:1-i};default:return{...e,x:t,y:i}}}function Dg(e,n=0){if(!Array.isArray(e))return[];const t=ni(n);return t?e.map(i=>Ng(i,t)):e}const to=Object.freeze([0,90,-90,180]);function lc(e){const n=Number(e);return Number.isFinite(n)&&n>0?n:0}function dc(e,n,t=.08){const i=lc(e),r=lc(n);if(!i||!r)return"unknown";const a=i/r;return Math.abs(a-1)<=Math.max(0,Number(t)||0)?"square":a>1?"landscape":"portrait"}function sl(e){return e.reduce((n,t)=>{const i=ni(t);return n.includes(i)||n.push(i),n},[])}function Ig({sourceWidth:e=0,sourceHeight:n=0,viewportWidth:t=0,viewportHeight:i=0,preferredRotation:r=null}={}){const a=dc(e,n),o=dc(t,i),_=!["unknown","square"].includes(a)&&!["unknown","square"].includes(o)&&a!==o?[90,-90,0,180]:[0,180,90,-90],x=r!=null;return sl([...x?[r]:[],..._,...to])}function Ug({minimumFramesWithoutFace:e=24,minimumMsWithoutFace:n=700,maximumMsUnconfirmedFace:t=1800,retryPauseMs:i=3500,maximumTotalMs:r=0}={}){const a=Math.max(1,Number(e)||1),o=Math.max(0,Number(n)||0),v=Math.max(o,Number(t)||0),R=Math.max(o,Number(i)||0),_=Math.max(0,Number(r)||0);let x=null;function S(y={}){return x?{active:x.active,confirmed:x.confirmed,phase:x.phase,candidates:[...x.candidates],candidateIndex:x.candidateIndex,candidateRotation:x.candidates[x.candidateIndex],round:x.round,...y}:{active:!1,phase:"idle",...y}}function h({candidates:y=to,processedFrames:g=0,now:A=0}={}){return x={active:!0,confirmed:!1,phase:"probing",candidates:sl([...Array.isArray(y)?y:[],...to]),candidateIndex:0,candidateStartedFrame:Number(g)||0,candidateStartedAt:Number(A)||0,startedAt:Number(A)||0,lastFaceAt:Number.NEGATIVE_INFINITY,round:0},S({changed:!0,reason:"started"})}function T(y,g){if(!x?.active||!_)return null;const A=g-x.startedAt;return A<_?null:(x.active=!1,x.confirmed=!1,x.phase="fallback",x.candidateIndex=0,x.candidateStartedFrame=y,x.candidateStartedAt=g,S({changed:!0,fallback:!0,reason:"time_budget",elapsedTotalMs:A}))}function C({currentFrame:y,currentTime:g,reason:A,elapsedMs:m}){const N=x.candidateIndex>=x.candidates.length-1;return N?(x.round+=1,x.candidateIndex=0):x.candidateIndex+=1,x.candidateStartedFrame=y,x.candidateStartedAt=g,x.lastFaceAt=Number.NEGATIVE_INFINITY,S({changed:!0,reason:N?"retry_round":A,elapsedMs:m})}function L({processedFrames:y=0,now:g=0}={}){if(!x?.active)return S();const A=Number(y)||0,m=Number(g)||0,N=T(A,m);if(N)return N;const f=m-x.candidateStartedAt,b=A-x.candidateStartedFrame;return x.lastFaceAt=m,b>=a&&f>=v?C({currentFrame:A,currentTime:m,reason:"face_unconfirmed",elapsedMs:f}):S({faceObserved:!0})}function p({processedFrames:y=0,now:g=0}={}){if(!x?.active)return S();const A=Number(y)||0,m=Number(g)||0,N=T(A,m);if(N)return N;const f=A-x.candidateStartedFrame,b=m-x.candidateStartedAt,U=m-x.lastFaceAt<o,k=x.candidateIndex>=x.candidates.length-1?R:o;return U||f<a||b<k?S({changed:!1,framesWithoutFace:f,elapsedMs:b}):C({currentFrame:A,currentTime:m,reason:"no_face",elapsedMs:b})}function l(y){return x?(x.active=!1,x.confirmed=!0,x.phase="locked",S({changed:!1,rotation:ni(y)})):{active:!1,confirmed:!0,phase:"locked",rotation:ni(y)}}function P(){x=null}return{reset:h,observeFace:L,observeNoFace:p,confirm:l,stop:P,snapshot:S}}function Fg(e){const n=Number(e);return Number.isFinite(n)?Math.max(0,n):0}function Vr(e=[],n=0){return e.map((i,r)=>({rotation:ni(i?.rotation),score:Fg(i?.score),detections:Math.max(0,Number(i?.detections)||0),index:r})).filter(i=>i.detections>0).sort((i,r)=>r.detections-i.detections||r.score-i.score||i.index-r.index)[0]||{rotation:ni(n),score:0,detections:0,index:-1}}function $n(e){const n=Number(e);return Number.isFinite(n)?n:0}function Og({stabilityMs:e=1200,minimumSamples:n=4,dimensionTolerancePx:t=3,cooldownMs:i=2500}={}){const r=Math.max(0,$n(e)),a=Math.max(1,$n(n)),o=Math.max(0,$n(t)),v=Math.max(0,$n(i));let R="",_=null,x=Number.NEGATIVE_INFINITY;function S(L=""){R=String(L||""),_=null,x=Number.NEGATIVE_INFINITY}function h(L,p=0){R=String(L||""),_=null,x=$n(p)+v}function T({key:L="",width:p=0,height:l=0,now:P=0}={}){const y=String(L||""),g=$n(p),A=$n(l),m=$n(P);if(!y||y===R)return _=null,{confirmed:!1,pending:!1,reason:"active_orientation"};_?.key===y&&Math.abs(_.width-g)<=o&&Math.abs(_.height-A)<=o?(_.width=g,_.height=A,_.samples+=1):_={key:y,width:g,height:A,firstSeenAt:m,samples:1};const f=Math.max(0,m-_.firstSeenAt),b={key:_.key,width:_.width,height:_.height,samples:_.samples,stableMs:f,confirmed:!1,pending:!0};return m<x?{...b,reason:"restart_cooldown"}:_.samples<a||f<r?{...b,reason:"collecting_stability"}:{...b,confirmed:!0,pending:!1,reason:"stable_viewport"}}function C(){return{activeKey:R,candidate:_?{..._}:null,cooldownUntil:x}}return{reset:S,confirm:h,observe:T,snapshot:C}}function Ka(e,n=0){const t=Number(e);return Number.isFinite(t)?t:n}function Gn(e,n,t,i){const r=e?.[n];return r?{x:Ka(r.x,.5)*t,y:Ka(r.y,.5)*i}:null}function Bg(e,n){const t=Math.hypot(e,n);return!Number.isFinite(t)||t<1e-6?null:{x:e/t,y:n/t}}function Gg(e,n,t,i,r){return{x:e.x+n.x*i+t.x*r,y:e.y+n.y*i+t.y*r}}function Hg(e,n,t){const i=Math.max(1,Ka(n,1)),r=Math.max(1,Ka(t,1)),a=Gn(e,33,i,r),o=Gn(e,263,i,r),v=Gn(e,152,i,r);if(!a||!o||!v)return null;const R={x:(a.x+o.x)/2,y:(a.y+o.y)/2},_=Bg(o.x-a.x,o.y-a.y);if(!_)return null;let x={x:-_.y,y:_.x};const S={x:v.x-R.x,y:v.y-R.y};x.x*S.x+x.y*S.y<0&&(x={x:-x.x,y:-x.y});const h=T=>({horizontal:(T.x-R.x)*_.x+(T.y-R.y)*_.y,vertical:(T.x-R.x)*x.x+(T.y-R.y)*x.y});return{width:i,height:r,origin:R,horizontal:_,vertical:x,horizontalAngleRad:Math.atan2(_.y,_.x),project:h,pointAt:(T,C)=>Gg(R,_,x,T,C)}}function uc(e,n,t,{sideScale:i=1.12,sidePaddingPx:r=24,hairlineLift:a=.4}={}){const o=Hg(e,n,t);if(!o)return null;const v=Gn(e,10,o.width,o.height),_=[46,53,52,65,55,276,283,282,295,285].map(q=>Gn(e,q,o.width,o.height)),x=Gn(e,2,o.width,o.height),S=Gn(e,152,o.width,o.height),h=Gn(e,127,o.width,o.height),T=Gn(e,356,o.width,o.height);if(!v||_.some(q=>!q)||!x||!S)return null;const C=o.project(v),L=_.map(q=>o.project(q).vertical).reduce((q,F)=>q+F,0)/_.length,p=o.project(x),l=o.project(S),y=[C.vertical-Math.max(0,L-C.vertical)*a,L,p.vertical,l.vertical],g=[y[1]-y[0],y[2]-y[1],y[3]-y[2]],A=g.reduce((q,F)=>q+F,0);if(!g.every(q=>Number.isFinite(q)&&q>0)||A<=0)return null;const m=[h,T].filter(Boolean).map(q=>o.project(q).horizontal),N=Math.max(40,Math.hypot(T?.x-h?.x||o.width*.3,T?.y-h?.y||0)/2),f=m.length?Math.min(...m):-N,b=m.length?Math.max(...m):N,U=Math.max(Math.abs(f),Math.abs(b))*i+r,G=-U,k=U;return{frame:o,levels:y,segments:g,percentages:g.map(q=>q/A*100),midLevels:[(y[0]+y[1])/2,(y[1]+y[2])/2,(y[2]+y[3])/2],horizontalStart:G,horizontalEnd:k,lines:y.map(q=>({start:o.pointAt(G,q),end:o.pointAt(k,q)}))}}const Vg={key:0,class:"orientation-gate",role:"alert","aria-live":"assertive"},kg={class:"orientation-gate__card"},Wg={key:1,class:"orientation-gate__hint"},zg={key:0,class:"camera-adjusting",role:"status","aria-live":"polite"},Xg={key:0,class:"ui"},qg={class:"metrics"},fc=30,Yg=42,Kg=24,jg=900,kr="__optifaceLandscapeLockOwned",Ba="/face_landmarker.task",oa="/mediapipe/wasm",pc="/selfie_multiclass_256x256.tflite",$g=15e3,hc=8,Zg=512,Wr=10,mc=468,Qg=.84,Jg=.14,ev=.032,tv=.105,_c=.08,gc=.42,vc=8,nv=24,iv=.38,av=65,Sc="/models",xc="/vendor/face-api.min.js",Ec=8e3,zr=12e3,rv=6e4,ov=1800,sv=450,Ga=160,Mc=.5,cv=3500,lv=900,dv=60,uv=1.25,sa="/models3d/wrap.stl",fv={__name:"VideoRA",props:{initialModel:{type:String,default:"wrap"},initialColor:{type:[String,Number],default:"#000000"},anchorUpperIdx:{type:Number,default:9},anchorLowerIdx:{type:Number,default:1},anchorBlendT:{type:Number,default:.35},smoothing:{type:Number,default:1},anchorFracX:{type:Number,default:0},anchorFracY:{type:Number,default:0},anchorFracZ:{type:Number,default:0},localOffXFrac:{type:Number,default:0},localOffYFrac:{type:Number,default:0},localOffZFrac:{type:Number,default:0},rotOffsetDeg:{type:Object,default:()=>({yaw:0,pitch:0,roll:0})},stlPreRotateDeg:{type:Object,default:()=>({x:0,y:0,z:0})},initialDepthOffset:{type:Number,default:.011},initialScaleInIPD:{type:Number,default:1.63},hastesOpenDeg:{type:Number,default:8},initialCameraFovDeg:{type:Number,default:60},autoCalibrate:{type:Boolean,default:!0},calibFrames:{type:Number,default:12},targetWidthInIPD:{type:Number,default:2.1},developerMode:{type:Boolean,default:!0},previewMirror:{type:Boolean,default:!0},trackingQuality:{type:String,default:""},rotGlobalGain:{type:Number,default:.9},yawRotGain:{type:Number,default:1},pitchGain:{type:Number,default:1},rollGain:{type:Number,default:1}},setup(e,{expose:n}){const t=Rg({userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints}),i=t.isPhysicalMobile,r=i&&!1,a=Object.freeze({balanced:{desktopInputWidth:448,desktopInputWidths:Object.freeze([320,352,384,416,448]),mobileInputWidths:Object.freeze([320,352,384,416,448]),mobileDefaultInputWidth:384,minFaceDetectionConfidence:.55,minFacePresenceConfidence:.55,minTrackingConfidence:.55},high:{desktopInputWidth:448,desktopInputWidths:Object.freeze([352,384,448,512,640]),mobileInputWidths:Object.freeze([352,384,448,512,640]),mobileDefaultInputWidth:448,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5}}),o=Object.freeze([33,133,159,145]),v=Object.freeze([263,362,386,374]),R=Object.freeze([10,9,168,151]),_=Object.freeze([152,13,14,17]),x=Object.freeze([1,4,6,197]),S=e,h={x:S.stlPreRotateDeg.x,y:S.stlPreRotateDeg.y,z:S.stlPreRotateDeg.z};n({startAR:ji,suspendAR:pd,resumeAR:hd,btnArmacao:dd,btnCor:ud,btnCaptura:Go,btnCapturaBase:fd,getFaceShapeReport:od,resetFaceShapeReport:sd,trackFaceShapeReportEvent:cd,requestFaceShapeReanalysis:ld,setProfundidad:Ho,setEscala:xr,ajustarEscala:md,setCameraFov:Vo,btnProporcoes:Do,btnMarcadores:No,setTrackingMode:cr,requestLandscapeOrientation:So});const T=_t(S.initialDepthOffset),C=_t(S.initialScaleInIPD),L=_t(bt.clamp(Number(S.initialCameraFovDeg)||60,35,95)),p=_t(S.developerMode),l=_t(Kt(S.trackingQuality||"high")),P=_t(0);let y=!1,g=!1;const A=_t({x:0,y:0}),m=_t(0),N=_t(0),f=_t(0),b=_t({width:0,height:0,frameRate:0,aspectRatio:0,facingMode:"",resizeMode:""}),U=_t({width:0,height:0}),G=_t("aguardando"),k=_t("Aguardando"),q=_t(0),F=_t(!1),$=_t(""),K=_t(!1),Q=_t(!1),re=window.matchMedia?.("(display-mode: standalone)")?.matches||!!navigator.standalone,ie=na(()=>re&&typeof window.screen?.orientation?.lock=="function"),se=Object.freeze({oval:"Oval",redondo:"Redondo",quadrado:"Quadrado",retangular:"Retangular",diamante:"Diamante",coracao:"Coração",triangular:"Triangular",indefinido:"Indefinido",aguardando:"Aguardando"}),ce=na(()=>se[G.value]||G.value||"Aguardando"),Ye=na(()=>{const c=Number(q.value)||0;return c>0?`${k.value} · ${(c*100).toFixed(0)}%`:k.value}),Ve=_t(null),st=_t(null),Ae=_t(null),Be=_t(null),Y=_t(null),te=_t(null);let Me=null,We=null,ue=null,be=null,at=null,ke=null,Ze=null,Ke=null,je=null,ut=null,ct=null,Yt=.25,vt=0;const ht=new Ie(0,0,0);let I=null;const Gt=new Ie,ft=new Ie,E=new Ie,s=new Ie,B=new ti,X=new Ie,j=new Ie,de=new Ie,me=new Ie,Z=new Ie,ee=new Ie,_e=new Ie,Fe=new Ie,ge=new Ie,he=new Ie,Ne=new Ie,Ge=new ti,$e=new Ie,D=new Ie,pe=new li,J={wrap:{left:"/models3d/luas/Wrap_Haste_Esquerda.stl",right:"/models3d/luas/Wrap_Haste_Dereita.stl",leftMaxX:!0,rightMaxX:!1},PantoV2:{left:"/models3d/luas/PantoV2_Haste_Esquerda.stl",right:"/models3d/luas/PantoV2_Haste_Dereita.stl",leftMaxX:!1,rightMaxX:!1}},fe={pos:new Ie,quat:new li,scale:1};let Ee=!1;const ae=new li;function Oe(){const c=bt.degToRad,{yaw:u=0,pitch:M=0,roll:O=0}=S.rotOffsetDeg||{};ae.setFromEuler(new Ia(c(M),c(u),c(O),"YXZ"))}function ye(c,u=1){const M=Number(c);return Number.isFinite(M)?M:u}function St(c,u=1){return bt.clamp(ye(c,u),0,1)}function rt(c){return bt.clamp(ye(c,S.initialCameraFovDeg||dv),35,95)}function Kt(c){return c==="high"?"high":"balanced"}function dn(c=l.value){const u=a[Kt(c)];return u?i?u.mobileDefaultInputWidth:u.desktopInputWidth:448}function ha(c=l.value){const u=a[Kt(c)];if(!u)return a.balanced;const M=i?ze||u.mobileDefaultInputWidth:ze||u.desktopInputWidth;return{...u,inputWidth:M}}function _i(c=l.value,u="VIDEO"){const M=ha(c);return{runningMode:u,numFaces:1,minFaceDetectionConfidence:M.minFaceDetectionConfidence,minFacePresenceConfidence:M.minFacePresenceConfidence,minTrackingConfidence:M.minTrackingConfidence,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!0}}let Mt=null,mn=!1,ii=null,In=null,un=null,Zt=null,_n=null,zn=0,Xn=0,Tn=0,qn=0;const bn=document.createElement("canvas"),Fi=bn.getContext("2d",{willReadFrequently:!0}),Un=document.createElement("canvas"),ma=Un.getContext("2d",{willReadFrequently:!0}),gn=document.createElement("canvas"),_a=gn.getContext("2d",{willReadFrequently:!0});let Yn=0,Fn=0,d=null,w=null,W=!1,H=!1,V=-1,ve=-1,Ce=!1,Se=0,Re=0,Ue=0,ze=0,Qe=0,Pe=null,it=null,Lt=null,mt=null,pt=null,Bt=null,we=null,Ht=null,nt=null,Xt=null,Ut=0,an=0,An=!1,Xe=null;const Tt=Og();let Je=0,He=0,en=0,qt=[],jt=!1;const vn=Ug({minimumFramesWithoutFace:24,minimumMsWithoutFace:700,maximumMsUnconfirmedFace:1800,retryPauseMs:3500,maximumTotalMs:cv});let ai=null,so=Number.NEGATIVE_INFINITY,Oi=Number.NEGATIVE_INFINITY,Bi=Number.NEGATIVE_INFINITY,co=Number.NEGATIVE_INFINITY,Qa="";const Kn=Lg();let Rn=!1,ga=null,va=null,Sa=null,lo=!1,uo=!1,Ja=!1,fo=0,Sn=0,po=0,ho=0,Gi=0,Hi=null,xa=!1,mo=Number.NEGATIVE_INFINITY,er=0,_o=!1,Vi=0,go=0,vo=Number.NEGATIVE_INFINITY,tr=0,nr=0,ki=0,gi=!1,Ea=!1,vi=0,ri=0,oi=0,Ma=null,Wi=null,Ta="";const le=Md("visagismo-video-ra");function ir(c=0){return new Promise(u=>setTimeout(u,c))}function zi(c,u,M,O=null){let z=0,ne=!1;const oe=Promise.resolve(c);oe.then(De=>{ne&&O?.(De)}).catch(()=>{});const xe=new Promise((De,Le)=>{z=window.setTimeout(()=>{ne=!0;const qe=new Error(`${M} excedeu ${u}ms`);qe.name="TimeoutError",Le(qe)},u)});return Promise.race([oe,xe]).finally(()=>window.clearTimeout(z))}function On(c,{autoRelease:u=!0}={}){an&&(window.clearTimeout(an),an=0),Q.value=!!c,c&&u&&(an=window.setTimeout(()=>{an=0,Q.value=!1},2200))}function ba(){return wg({viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,orientationType:window.screen?.orientation?.type||""})}function tn(){return{innerWidth:window.innerWidth||0,innerHeight:window.innerHeight||0,visualWidth:window.visualViewport?.width||0,visualHeight:window.visualViewport?.height||0,screenType:window.screen?.orientation?.type||"",screenAngle:window.screen?.orientation?.angle||0}}function cl(){const c=performance.now();return Cg({isPhysicalMobile:i,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,rawContentRotation:Je,deviceGamma:ai?.gamma,deviceOrientationAgeMs:c-so,deviceLandscapeStableMs:c-Oi})}function si(c="state_changed"){const u=cl();F.value=u.mismatch,u.mismatch||($.value="");const M=`${u.mismatch}:${u.evidence}:${u.viewportLandscape}`;if(M!==Qa){const O=Qa;Qa=M,le.track("orientation",u.mismatch?"physical_viewport_mismatch_detected":"physical_viewport_state_resolved",{reason:c,previousKey:O,evidence:u.evidence,physicalLandscape:u.physicalLandscape,cameraLandscape:u.cameraLandscape,sensorLandscape:u.sensorLandscape,sensorFresh:u.sensorFresh,rawContentRotationDeg:Je,displayContentRotationDeg:He,sensor:ai,standalone:re,orientationLockSupported:ie.value,...tn()},u.mismatch?"warn":"info")}return u}async function So(c="manual"){const u=si(c);if(!u.mismatch)return!0;if(le.track("orientation","landscape_lock_requested",{reason:c,standalone:re,supported:ie.value,evidence:u.evidence,...tn()}),!re)return $.value="Abra os atalhos do aparelho e ative a rotação automática.",le.track("orientation","landscape_lock_unavailable",{reason:"browser_tab",...tn()},"warn"),!1;if(!ie.value)return $.value="Ative a rotação automática nas configurações do aparelho.",le.track("orientation","landscape_lock_unavailable",{reason:"api_unavailable",...tn()},"warn"),!1;K.value=!0,$.value="";try{return await window.screen.orientation.lock("landscape"),window[kr]=!0,le.track("orientation","landscape_lock_succeeded",{reason:c,...tn()}),window.setTimeout(()=>si("landscape_lock_settled"),250),!0}catch(M){return $.value="Não foi possível girar automaticamente. Ative a rotação do aparelho.",le.captureError("orientation","landscape_lock_failed",M,{reason:c,...tn()}),!1}finally{K.value=!1}}function ll(c="device_returned_portrait"){if(!window[kr])return!1;window[kr]=!1;try{return window.screen?.orientation?.unlock?.(),le.track("orientation","landscape_lock_released",{reason:c,sensor:ai,...tn()}),!0}catch(u){return le.captureError("orientation","landscape_unlock_failed",u,{reason:c,...tn()}),!1}}function xo(c=l.value){Re=0,Qe=0,ze=dn(c)}function Eo(){return cc(Ae.value?.videoWidth||b.value.width||0,Ae.value?.videoHeight||b.value.height||0,Je)}function Mo(c=0,u=0){const M=c===u?"square":c>u?"landscape":"portrait",O=Xe?.key||ba().key;return`optiface:camera-orientation:v1:${b.value.facingMode||"unknown"}:${O}:${M}`}function ar(c,u){try{const M=sessionStorage.getItem(Mo(c,u));if(M===null)return null;const O=Number(M);return[0,90,-90,180].includes(O)?O:null}catch{return null}}function To(c,u,M){try{sessionStorage.setItem(Mo(u,M),String(c))}catch{}}function Si(c,u="candidate_selected"){const M=Je;Je=c.candidateRotation,He=Oa(Je,on.value),qt=[],jt=!1,Kn.reset(He),On(!0);const O=Aa(u);return xi(),le.track("camera","orientation_bootstrap_candidate_selected",{reason:c.reason||u,candidateRotationDeg:Je,displayRotationDeg:He,candidateIndex:c.candidateIndex,candidateCount:c.candidates.length,round:c.round,candidates:c.candidates,previousRawRotationDeg:M,sourceWidth:Ae.value?.videoWidth||0,sourceHeight:Ae.value?.videoHeight||0,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,requestedOrientation:Xe?.key||"",...tn()}),O||M!==Je}function dl(c="camera_started"){const u=Ae.value?.videoWidth||b.value.width||0,M=Ae.value?.videoHeight||b.value.height||0,O=ar(u,M),z=Ig({sourceWidth:u,sourceHeight:M,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,preferredRotation:O}),ne=vn.reset({candidates:z,processedFrames:Sn,now:performance.now()});return le.track("camera","orientation_bootstrap_started",{reason:c,sourceWidth:u,sourceHeight:M,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,preferredRotation:O,candidates:z}),Si(ne,c)}function bo(c=0){const u=Ae.value,M=u?.videoWidth||0,O=u?.videoHeight||0;if(!M||!O||u.readyState<2||!_a)return!1;const z=cc(M,O,c),oe=Math.min(1,Ga/Math.max(z.width,z.height));gn.width=Math.max(1,Math.round(z.width*oe)),gn.height=Math.max(1,Math.round(z.height*oe));const xe=_a;return xe.setTransform(1,0,0,1,0,0),xe.clearRect(0,0,gn.width,gn.height),xe.translate(gn.width/2,gn.height/2),xe.rotate(bt.degToRad(z.rotationDeg)),xe.drawImage(u,-(M*oe)/2,-(O*oe)/2,M*oe,O*oe),xe.setTransform(1,0,0,1,0,0),!0}async function ul(c="camera_started"){const u=performance.now(),M=vn.snapshot(),O=M.candidateRotation??0,z=Ae.value?.videoWidth||b.value.width||0,ne=Ae.value?.videoHeight||b.value.height||0,oe=ar(z,ne),xe=[];let De=!1,Le=!1;try{De=await zi(Po(),ov,"Carregamento do detector de orientação")}catch(lt){le.captureError("camera","orientation_probe_load_failed",lt,{reason:c,fallbackRotation:O})}if(De&&globalThis.faceapi)for(let lt=0;lt<M.candidates.length;lt+=1){const Ct=M.candidates[lt],Rt=performance.now();let Vt=0,Ft=0,Jt=0;for(let Pt=0;Pt<2;Pt+=1)if(bo(Ct)){try{const $t=globalThis.faceapi,wn=await zi($t.detectSingleFace(gn,new $t.TinyFaceDetectorOptions({inputSize:Ga,scoreThreshold:.35})),sv,"Amostra do detector de orientação");wn&&(Ft+=1,Vt+=Number(wn.score)||0)}catch($t){Jt+=1,le.captureError("camera","orientation_probe_sample_failed",$t,{rotation:Ct,sample:Pt})}await ir(20)}xe.push({rotation:Ct,detections:Ft,score:Ft?Vt/Ft:0,failedSamples:Jt,durationMs:Number((performance.now()-Rt).toFixed(1))});const kt=Vr(xe,O),It=oe!==null&&lt===0&&kt.detections>0&&kt.score>=Mc,Nt=lt%2===1&&kt.detections>0&&kt.score>=Mc;if(It||Nt){Le=lt<M.candidates.length-1;break}}const qe=Vr(xe,O),tt=vn.reset({candidates:[qe.rotation,...M.candidates.filter(lt=>lt!==qe.rotation)],processedFrames:Sn,now:performance.now()});return Si({...tt,reason:qe.detections?"visual_probe":"priority_fallback"},"orientation_probe_completed"),le.track("camera","orientation_probe_completed",{reason:c,selectedRotationDeg:qe.rotation,selectedScore:Number(qe.score.toFixed(4)),selectedDetections:qe.detections,detectorAvailable:De,fallbackUsed:qe.detections===0,preferredRotation:oe,stoppedEarly:Le,testedCandidates:xe.length,inputSize:Ga,durationMs:Number((performance.now()-u).toFixed(1)),results:xe},qe.detections?"info":"warn"),qe.rotation}async function fl(c="camera_started"){const u=performance.now(),M=vn.snapshot(),O=M.candidateRotation??0,z=Ae.value?.videoWidth||b.value.width||0,ne=Ae.value?.videoHeight||b.value.height||0,oe=ar(z,ne),xe=[];for(let qe=0;qe<M.candidates.length;qe+=1){const tt=M.candidates[qe],lt=performance.now();let Ct=0,Rt=0,Vt=0;for(let Ft=0;Ft<2;Ft+=1)if(bo(tt)){try{const kt=(await Mt.detectForVideo(gn,dr(performance.now())))?.result?.faceLandmarks?.[0];if(kt){Rt+=1;const It=rc(kt),Nt=eo(kt);oc({calculatedRotation:It,eyeLineAngleDeg:Nt,activeRotation:null})===0&&(Ct+=1)}}catch(Jt){Vt+=1,le.captureError("camera","orientation_worker_probe_sample_failed",Jt,{rotation:tt,sample:Ft})}await ir(20)}if(xe.push({rotation:tt,detections:Ct,score:Ct/2,faces:Rt,failedSamples:Vt,durationMs:Number((performance.now()-lt).toFixed(1))}),Ct===2)break}const De=Vr(xe,O),Le=vn.reset({candidates:[De.rotation,...M.candidates.filter(qe=>qe!==De.rotation)],processedFrames:Sn,now:performance.now()});return Si({...Le,reason:De.detections?"worker_landmarks_probe":"priority_fallback"},"orientation_worker_probe_completed"),await wo("orientation_worker_probe_completed"),le.track("camera","orientation_probe_completed",{reason:c,selectedRotationDeg:De.rotation,selectedDetections:De.detections,detectorAvailable:!0,detectorContext:"worker",fallbackUsed:De.detections===0,preferredRotation:oe,testedCandidates:xe.length,inputSize:Ga,durationMs:Number((performance.now()-u).toFixed(1)),results:xe},De.detections?"info":"warn"),De.rotation}function pl(){const c=Ae.value?.videoWidth||b.value.width||0,u=Ae.value?.videoHeight||b.value.height||0,M=vn.confirm(Je);To(Je,c,u),On(!1),le.track("camera","orientation_bootstrap_confirmed",{rotationDeg:Je,displayRotationDeg:He,validationSource:"face_landmarks",validationSamples:qt.length,candidateIndex:M.candidateIndex??-1,round:M.round||0,sourceWidth:c,sourceHeight:u,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,detectorMode:Zt||""})}function Ao(c,u){Si(c,u),jt=!0,qt=[],Kn.reset(He,performance.now()),On(!1),le.track("camera","orientation_bootstrap_fallback_accepted",{reason:c.reason||u,elapsedTotalMs:Number((c.elapsedTotalMs||0).toFixed(1)),rotationDeg:Je,displayRotationDeg:He,candidateCount:c.candidates?.length||0,sourceWidth:Ae.value?.videoWidth||0,sourceHeight:Ae.value?.videoHeight||0},"warn")}function Aa(c="orientation_changed"){const u=Eo();if(!u.width||!u.height||!st.value)return!1;const M=Number(st.value.dataset.nw||0),O=Number(st.value.dataset.nh||0),z=en,ne=M!==u.width||O!==u.height||z!==u.rotationDeg;return en=u.rotationDeg,st.value.style.width=`${u.width}px`,st.value.style.height=`${u.height}px`,st.value.dataset.nw=String(u.width),st.value.dataset.nh=String(u.height),[Be.value,te.value].forEach(oe=>{oe&&(oe.width!==u.width&&(oe.width=u.width),oe.height!==u.height&&(oe.height=u.height),oe.style.width="100%",oe.style.height="100%")}),Y.value&&(Y.value.style.width="100%",Y.value.style.height="100%",Me?Me.setSize(u.width,u.height,!1):(Y.value.width=u.width,Y.value.height=u.height)),Xi(l.value),ue&&qi(u.width,u.height),ne&&(Ee=!1,rn=null,Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null,be&&(be.visible=!1),wa(),le.track("camera","processing_frame_normalized",{reason:c,sourceWidth:Ae.value?.videoWidth||0,sourceHeight:Ae.value?.videoHeight||0,processingWidth:u.width,processingHeight:u.height,rawRotationDeg:Je,displayRotationDeg:He,previousRotationDeg:z})),bi(),ne}function xi(){const c=Ae.value,u=Be.value;if(!c||!u||c.readyState<2||!u.width||!u.height)return;const M=u.getContext("2d",{alpha:!1});if(!M)return;const O=c.videoWidth,z=c.videoHeight;M.setTransform(1,0,0,1,0,0),M.clearRect(0,0,u.width,u.height),M.translate(u.width/2,u.height/2),M.rotate(bt.degToRad(en)),M.drawImage(c,-O/2,-z/2,O,z),M.setTransform(1,0,0,1,0,0)}function Xi(c=l.value){const u=Be.value?.width||0,M=Be.value?.height||0;if(!u||!M)return;const O=Math.min(u,ha(c).inputWidth),z=Math.max(1,Math.round(O*M/u));Yn===O&&Fn===z||(bn.width=O,bn.height=z,Yn=O,Fn=z,U.value={width:O,height:z})}function hl(c,u=l.value){if(!Number.isFinite(c))return;Re=Re?bt.lerp(Re,c,.22):c;const M=performance.now();if(M-Qe<jg)return;const O=a[Kt(u)],z=i?O?.mobileInputWidths||[]:O?.desktopInputWidths||[];if(!z.length)return;const ne=ze||dn(u),oe=z.indexOf(ne);if(!(oe<0)){if(Re>Yg&&oe>0){ze=z[oe-1],Qe=M,Xi(u);return}Re<Kg&&oe<z.length-1&&(ze=z[oe+1],Qe=M,Xi(u))}}function qi(c=0,u=0){if(!ue)return;const M=Number(c)||Be.value?.width||1,O=Number(u)||Be.value?.height||1;ue.fov=rt(L.value),ue.aspect=M/Math.max(1,O),ue.updateProjectionMatrix()}function ml(c=d){const u=c?.getVideoTracks?.()?.[0],M=u?.getSettings?.()||{},O=Number(M.width)||Ae.value?.videoWidth||0,z=Number(M.height)||Ae.value?.videoHeight||0,ne=Number(M.frameRate)||0,oe=Number(M.aspectRatio)||(O&&z?O/z:0),xe=M.facingMode||"",De=M.resizeMode||"";b.value={width:O,height:z,frameRate:ne,aspectRatio:oe,facingMode:xe,resizeMode:De},le.track("camera","stream_settings_resolved",{settings:b.value,constraints:u?.getConstraints?.()||{},capabilities:u?.getCapabilities?.()||{},previewMirrored:on.value,physicalMobile:i,physicalMobileReason:t.reason,ipadLike:t.isIPadLike,requestedOrientation:Xe?.key||"",requestedAspectRatio:Xe?.aspectRatio||0}),u&&console.info("[VideoRA] Active camera track",{settings:M,constraints:u.getConstraints?.()||{}})}async function _l(c){if(!i)return;const u=c?.getVideoTracks?.()?.[0],M=u?.getCapabilities?.()||{},O=Number(M?.zoom?.min);if(!(!u||!Number.isFinite(O)))try{await u.applyConstraints({advanced:[{zoom:O}]})}catch(z){console.warn("[VideoRA] Não foi possível aplicar o zoom mínimo no celular.",z)}}function Ra(){const c=Ae.value?.srcObject||d;try{c?.getTracks?.().forEach(u=>u.stop())}catch{}try{Ae.value?.pause?.()}catch{}Ae.value&&(Ae.value.srcObject=null),d=null,b.value={width:0,height:0,frameRate:0,aspectRatio:0,facingMode:"",resizeMode:""}}async function gl(){if(!navigator?.mediaDevices?.getUserMedia)throw new Error("getUserMedia indisponível");const c=cf(),u=ba();Xe=u,le.track("camera","orientation_profile_requested",{profile:u.key,width:u.width,height:u.height,aspectRatio:u.aspectRatio,...tn()});const M=lf({deviceId:c.deviceId,facingMode:c.facingMode,width:u.width,height:u.height,mobile:i}).map(z=>!z?.video||typeof z.video!="object"?z:i?{...z,video:{...z.video,resizeMode:"none",aspectRatio:{ideal:u.aspectRatio},frameRate:{ideal:fc,max:fc}}}:{...z,video:{...z.video,frameRate:{ideal:60,max:60}}});let O=null;for(let z=0;z<M.length;z++)try{le.track("camera","get_user_media_attempt",{attempt:z+1,total:M.length,constraints:M[z]});const ne=await navigator.mediaDevices.getUserMedia(M[z]);return le.track("camera","stream_opened",{attempt:z+1}),ne}catch(ne){O=ne,le.track("camera","get_user_media_failed",{attempt:z+1,tipo:ne?.name||"Error",mensagem:ne?.message||String(ne)},"warn"),await ir(120)}throw O||new Error("Não foi possível iniciar a câmera")}function rr(c=""){const u=Mt;Mt=null,mn=!1,Zt=null,window.__vra_fl===u&&(window.__vra_fl=null,window.__vra_vf=null,window.__vra_fl_mode=null);try{u?.workerMode?c==="tracking_graph_failure"&&Ds(u):u?.close?.()}catch{}c&&le.track("mediapipe","landmarker_disposed",{reason:c},"warn")}function vl(){const c=ii;ii=null,In=null;try{c?.close?.()}catch{}}function or(){oi+=1,gi=!1,Ea=!1,vi=0,ri=0,Ma=null,Wi=null,Ta="",G.value="aguardando",ki=0;const c=xt?.visagismo;c?.rostoProbabilidades&&(c.rostoProbabilidades.value={})}async function Sl(){return ii||In||(In=(async()=>{un=un||await zi(jr.forVisionTasks(oa),$g,"Inicialização do runtime de segmentação facial");const c=await Yc.createFromOptions(un,{baseOptions:{modelAssetPath:pc,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1});if(Rn)throw c.close?.(),new Error("Componente desmontado durante a inicialização do segmentador.");return ii=c,le.track("analysis","face_segmenter_ready",{modelPath:pc,delegate:"CPU"}),c})().catch(c=>{throw In=null,c}),In)}async function sr({forceRecreate:c=!1,preferCpu:u=!1,allowWorker:M=!0}={}){if(c&&rr("forced_recreate"),!Mt&&M&&of()){const z=sf(),ne=performance.now();try{le.track("mediapipe","worker_initialization_started",{wasmPath:oa,modelPath:Ba,trackingMode:l.value});const oe=await z.init({wasmPath:oa,modelPath:Ba,options:_i(l.value,"VIDEO"),timeoutMs:rv,delegate:u||xa?"CPU":"GPU"});return Mt=z,mn=!0,Zt="VIDEO",le.track("mediapipe","landmarker_ready",{delegate:oe.delegate||z.delegate||"",executionContext:"worker",reused:!!oe.reused,durationMs:Number((performance.now()-ne).toFixed(1))}),Mt}catch(oe){throw Ds(z),le.captureError("mediapipe","worker_initialization_failed",oe,{fallback:"camera_only"}),oe.workerInitializationFailed=!0,oe}}if(!Mt&&window.__vra_fl&&(Mt=window.__vra_fl,un=window.__vra_vf??un,Zt=window.__vra_fl_mode||null,le.track("mediapipe","cached_instance_reused")),Mt)if(Zt!=="VIDEO")rr("cached_non_video_instance");else return Mt;le.track("mediapipe","initialization_started",{wasmPath:oa,modelPath:Ba,trackingMode:l.value}),un=un||await zi(jr.forVisionTasks(oa),zr,"Inicialização do runtime MediaPipe"),le.track("mediapipe","wasm_fileset_ready");const O=(z,ne)=>{const oe=qc.createFromOptions(un,{baseOptions:{modelAssetPath:Ba,delegate:z},..._i(l.value,"VIDEO")});return zi(oe,ne,`Inicialização do FaceLandmarker (${z})`,xe=>{try{xe?.close?.()}catch{}})};if(u||xa)Mt=await O("CPU",zr),le.track("mediapipe","landmarker_ready",{delegate:"CPU"});else try{Mt=await O("GPU",Ec),le.track("mediapipe","landmarker_ready",{delegate:"GPU"})}catch(z){console.warn("[VideoRA] GPU delegate indisponível, usando CPU.",z),le.track("mediapipe","gpu_delegate_failed",{tipo:z?.name||"Error",mensagem:z?.message||String(z)},"warn"),z?.name==="TimeoutError"&&le.track("mediapipe","landmarker_initialization_timeout",{delegate:"GPU",timeoutMs:Ec},"warn"),Mt=await O("CPU",zr),le.track("mediapipe","landmarker_ready",{delegate:"CPU"})}return window.__vra_fl=Mt,window.__vra_vf=un,Zt="VIDEO",window.__vra_fl_mode="VIDEO",Mt}function xl(c){const u=String(c?.message||c||"");return/CalculatorGraph|FaceGeometryPipelineCalculator|Graph has errors|design_matrix\.norm/i.test(u)}async function Ro(c){return Hi||(Hi=(async()=>{le.captureError("mediapipe","landmarker_recovery_started",c,{consecutiveTrackingErrors:Gi}),Mi(),xa=!0,rr("tracking_graph_failure"),await sr({preferCpu:!0,allowWorker:!1}),Gi=0,ve=-1,W&&d?.active&&yo(),le.track("mediapipe","landmarker_recovery_completed",{delegate:"CPU"})})().catch(u=>{le.captureError("mediapipe","landmarker_recovery_failed",u)}).finally(()=>{Hi=null}),Hi)}async function cr(c){const u=Kt(c);if(l.value=u,xo(u),Xi(u),!Mt)return l.value;H=!0;try{await Mt.setOptions(_i(u,"VIDEO"))}finally{H=!1}return l.value}function wo(c="orientation_recalibrated"){return Mt?_n||(_n=(async()=>(H=!0,await Mt.setOptions(_i(l.value,"VIDEO")),ve=-1,le.track("mediapipe","temporal_tracking_reset",{reason:c,runningMode:"VIDEO"}),!0))().catch(u=>(le.captureError("mediapipe","temporal_tracking_reset_failed",u,{reason:c}),queueMicrotask(()=>{Ro(u)}),!1)).finally(()=>{H=!1,_n=null}),_n):Promise.resolve(!1)}function lr(){zn&&(cancelAnimationFrame(zn),zn=0)}function Ei(){Xn&&(cancelAnimationFrame(Xn),Xn=0)}function El(){Ei();const c=()=>{Ae.value?.readyState>=2&&xi(),Xn=requestAnimationFrame(c)};Xn=requestAnimationFrame(c),le.track("camera","preview_loop_started",{phase:"model_initialization"})}function Mi(){Tn&&(cancelAnimationFrame(Tn),Tn=0),qn&&Ae.value?.cancelVideoFrameCallback&&(Ae.value.cancelVideoFrameCallback(qn),qn=0),H=!1,V=-1,Re=0}async function Co(c,u){if(!Mt||H||_n)return;H=!0;const M=performance.now(),O=c?.width||0,z=c?.height||0;try{if(Zt!=="VIDEO")return;const ne=mn?await Mt.detectForVideo(c,u):null,oe=ne?.result||Mt.detectForVideo(c,u);Gi=0,Ue=mn&&Number(ne?.inferenceMs)||0,P.value=performance.now()-M,Sn+=1,hl(P.value),td(oe),xt?.app?.metricas?.value&&Al(c),Ml()}catch(ne){ho+=1,Gi+=1;const oe=performance.now();oe-mo>=5e3?(le.captureError("tracking","detect_for_video_failed",ne,{timestampMs:u,processedFrames:Sn,suppressedSinceLastReport:er,inputWidth:O,inputHeight:z,videoTime:Ae.value?.currentTime||0}),mo=oe,er=0):er+=1,Gi>=3&&xl(ne)&&queueMicrotask(()=>{Ro(ne)})}finally{H=!1}}function dr(c){const u=Number.isFinite(c)?c:performance.now(),M=u>ve?u:ve+1;return ve=M,M}function Ml(){const c=performance.now();c-go<15e3||(go=c,le.track("tracking","metrics",{processedFrames:Sn,detectedFrames:po,trackingErrors:ho,latencyMs:Number(P.value.toFixed(2)),workerInferenceMs:Number(Ue.toFixed(2)),executionContext:mn?"worker":"main_thread",trackingMode:l.value,inputWidth:Yn,inputHeight:Fn,camera:b.value,pose:{yawDeg:Number(m.value.toFixed(2)),pitchDeg:Number(N.value.toFixed(2)),rollDeg:Number(f.value.toFixed(2)),rawRollDeg:Number(tr.toFixed(2)),renderedRollDeg:Number(nr.toFixed(2))},orientation:{requested:Xe?.key||"",screenType:window.screen?.orientation?.type||"",screenAngle:window.screen?.orientation?.angle||0,contentRotationDeg:He,rawContentRotationDeg:Je,frameNormalized:jt,processingRotationDeg:en,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,resolverPhase:vn.snapshot().phase,detectorMode:Zt||""},analysis:{faceShape:G.value,faceShapePoseQuality:Number(ki.toFixed(3)),orientationNormalized:jt}}))}async function Po(){if(lo)return!0;const c=await bl();return c?(ga||(ga=c.nets.tinyFaceDetector.loadFromUri(Sc).then(()=>(lo=!0,!0)).catch(u=>(console.warn("[VideoRA] Não foi possível carregar o detector facial leve.",u),ga=null,!1))),ga):!1}async function Tl(){if(uo)return!0;const c=await Po(),u=globalThis.faceapi;return!c||!u?!1:(va||(va=u.nets.ageGenderNet.loadFromUri(Sc).then(()=>(uo=!0,!0)).catch(M=>(console.warn("[VideoRA] Não foi possível carregar o modelo de gênero.",M),k.value="Indisponível",q.value=0,va=null,!1))),va)}function bl(){return globalThis.faceapi?Promise.resolve(globalThis.faceapi):Sa||(Sa=new Promise(c=>{const u=document.querySelector(`script[src="${xc}"]`);if(u){u.addEventListener("load",()=>c(globalThis.faceapi||null),{once:!0}),u.addEventListener("error",()=>c(null),{once:!0});return}const M=document.createElement("script");M.src=xc,M.async=!0,M.onload=()=>c(globalThis.faceapi||null),M.onerror=()=>{console.warn("[VideoRA] Não foi possível carregar face-api.js."),c(null)},document.head.appendChild(M)}),Sa)}function Al(c){if(!xt?.app?.metricas?.value||Ja)return;const u=performance.now();u-fo<lv||(fo=u,!(!c?.width||!c?.height||!ma)&&(Un.width=c.width,Un.height=c.height,ma.drawImage(c,0,0,Un.width,Un.height),Ja=!0,(async()=>{try{if(!await Tl())return;const O=globalThis.faceapi;if(!O)return;const z=await O.detectSingleFace(Un,new O.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.5})).withAgeAndGender();if(!z){k.value="Não detectado",q.value=0;return}k.value=z.gender==="male"?"Masculino":"Feminino",q.value=z.genderProbability||0}catch(M){console.warn("[VideoRA] Erro na predição de gênero.",M),k.value="Indisponível",q.value=0}finally{Ja=!1}})()))}function Rl(){const c=()=>{if(Tn=requestAnimationFrame(c),!(Ae.value?.readyState>=2))return;const u=Ae.value.currentTime;u!==V&&(V=u,xi(),!H&&(Fi.drawImage(Be.value,0,0,Yn,Fn),Co(bn,dr(performance.now()))))};Tn=requestAnimationFrame(c)}function yo(){if(Mi(),Xi(l.value),typeof Ae.value?.requestVideoFrameCallback=="function"){const c=(u,M)=>{if(!W||(qn=Ae.value.requestVideoFrameCallback(c),!(Ae.value?.readyState>=2))||(xi(),H))return;Fi.drawImage(Be.value,0,0,Yn,Fn);const O=dr(u);Ce||(Ce=!0,le.track("tracking","timestamp_source_selected",{callbackNow:Number.isFinite(u)?Number(u.toFixed(3)):null,mediaTimeMs:Number.isFinite(M?.mediaTime)?Number((M.mediaTime*1e3).toFixed(3)):null,timestampMs:Number(O.toFixed(3)),source:"callback_now_monotonic"})),Co(bn,O)};qn=Ae.value.requestVideoFrameCallback(c);return}Rl()}const Qt={collecting:S.autoCalibrate,samples:[],ipd0Ndc:null};function wl(c){const u=[...c].sort((O,z)=>O-z),M=u.length;return M?M&1?u[(M-1)/2]:(u[M/2-1]+u[M/2])*.5:0}const xt=Dd()?.appContext?.config?.globalProperties?.$db,ur=Number(xt?.visagismo?.armacaoEscala?.value)||0;ur&&ur!==Number(S.initialScaleInIPD)&&(C.value=ur,g=!0);const fr=_t(!1),pr=_t(!1),Lo=_t(!1);let rn=null;const Cl=_t(!0),Ti=na(()=>xt?.visagismo?.molduraRosto?.value??Lo.value?!1:xt?.visagismo?.armacaoVisivel?.value!==void 0?xt.visagismo.armacaoVisivel.value:Cl.value),on=na(()=>!!S.previewMirror);Ji(on,(c,u)=>{const M=He;He=Oa(Je,c),Kn.reset(He,performance.now()),bi(),le.track("camera","preview_mirror_changed",{mirrored:c,previous:!!u,facingMode:b.value.facingMode||"",rawRotation:Je,previousDisplayRotation:M,displayRotation:He})},{immediate:!0}),Ji(Ti,c=>{at&&(at.visible=!!c&&!!be?.visible),Ke&&(Ke.visible=!!c&&!!be?.visible),_r(m.value||0,f.value||0)},{immediate:!0}),Ji(()=>S.developerMode,c=>{p.value=!!c,ed()}),Ji(()=>S.trackingQuality,c=>{cr(c)}),Ji(L,()=>{qi()});function No(){le.track("ui","landmarks_toggled"),xt?.visagismo?xt.visagismo.marcadores.value=!xt.visagismo.marcadores.value:fr.value=!fr.value}function Do(){le.track("ui","proportions_toggled"),xt?.visagismo?xt.visagismo.proporcoes.value=!xt.visagismo.proporcoes.value:pr.value=!pr.value}function Pl(){const c=l.value==="high"?"balanced":"high";cr(c)}function hr(c){return new nn(c.x*2-1,1-c.y*2)}function yl(c){const u=c[S.anchorUpperIdx]||c[9],M=c[S.anchorLowerIdx]||c[1],O=Math.max(0,Math.min(1,S.anchorBlendT));return hr({x:u.x*(1-O)+M.x*O,y:u.y*(1-O)+M.y*O})}function Ll(c){const u=new Ie(c.x,c.y,-1).unproject(ue),M=new Ie(c.x,c.y,1).unproject(ue);return{origin:ue.position.clone(),dir:M.sub(u).normalize()}}function mr(c,u){const{origin:M,dir:O}=Ll(c);return M.add(O.multiplyScalar(u))}function Nl(c,u,M,O){return Gt.set(c,u,-1).unproject(ue),ft.set(c,u,1).unproject(ue),O.copy(ue.position).add(ft.sub(Gt).normalize().multiplyScalar(M))}function Dl(){const c=te.value?.width||0,u=te.value?.height||0;return c>0&&u>c?u/c:1}function Il(c,u=new Ie){const M=Dl();return u.set((c.x??.5)-.5,(.5-(c.y??.5))*M,-(c.z||0))}function Yi(c,u,M){M.set(0,0,0);let O=0;for(let z=0;z<u.length;z++){const ne=c[u[z]];ne&&(Il(ne,ee),M.add(ee),O+=1)}return O?M.multiplyScalar(1/O):null}function Ul(c){const u=c?.data;if(!Array.isArray(u)||u.length!==16)return null;Ge.fromArray(u),Ge.decompose($e,pe,D);const M=pe.x+pe.y+pe.z+pe.w;return Number.isFinite(M)?pe.clone().normalize():null}function Fl(c,u=null){const M=Yi(c,o,X),O=Yi(c,v,j),z=Yi(c,R,de),ne=Yi(c,_,me),oe=Yi(c,x,Z);if(!M||!O||!z||!ne||!oe)return new li;ge.subVectors(O,M).normalize(),he.subVectors(z,ne).normalize(),Ne.crossVectors(ge,he).normalize(),_e.addVectors(M,O).multiplyScalar(.5),Fe.subVectors(oe,_e).normalize(),Ne.dot(Fe)<0&&Ne.negate(),he.crossVectors(Ne,ge).normalize();const xe=new li().setFromRotationMatrix(Ge.makeBasis(ge,he,Ne)),De=Ul(u);if(!De)return xe;const Le=bt.radToDeg(xe.angleTo(De));return!Number.isFinite(Le)||Le>av?xe:xe.slerp(De,iv)}function Ol(c,u){const M=c.clone().applyMatrix4(ue.matrixWorldInverse);return M.z+=u,M.applyMatrix4(ue.matrixWorld)}function Bl(c,u){return c.applyMatrix4(ue.matrixWorldInverse),c.z+=u,c.applyMatrix4(ue.matrixWorld)}function Io(c,u){return u>.76*c+5.8}function _r(c,u){if(!ke&&!Ze)return;const M=!!Ti.value&&!!be?.visible,O=Io(u,c),z=Io(-u,-c);ke&&(ke.visible=M&&O),Ze&&(Ze.visible=M&&z)}function wa(){const c=te.value;if(!c)return;c.getContext("2d").clearRect(0,0,c.width,c.height)}function Gl(c){const u=te.value;if(!u)return;const M=u.getContext("2d"),O=u.width,z=u.height;M.fillStyle="cyan";for(let ne=0;ne<c.length;ne++){const oe=c[ne].x*O,xe=c[ne].y*z;M.beginPath(),M.arc(oe,xe,1,0,Math.PI*2),M.fill()}}function Hl(c){const u=te.value;if(!u)return;const M=u.getContext("2d"),O=u.width,z=u.height,ne=uc(c,O,z);if(!ne)return;const oe=performance.now();oe-vo>=1e4&&(vo=oe,le.track("analysis","facial_thirds_geometry",{percentages:ne.percentages.map(Rt=>Number(Rt.toFixed(2))),faceAxisAngleDeg:Number(bt.radToDeg(ne.frame.horizontalAngleRad).toFixed(2)),streamWidth:O,streamHeight:z,rawContentRotationDeg:Je,displayContentRotationDeg:He}));const xe=getComputedStyle(document.documentElement),De=xe.getPropertyValue("--primary").trim()||"#1eebe2",Le=xe.getPropertyValue("--primary").trim()||"#1eebe2";M.save(),M.strokeStyle=De,M.lineWidth=1.5,ne.lines.forEach(Rt=>{M.beginPath(),M.moveTo(Rt.start.x,Rt.start.y),M.lineTo(Rt.end.x,Rt.end.y),M.stroke()}),M.restore();const qe=19,tt=8,lt=7;M.font=`bold ${qe}px monospace`;const Ct=Rt=>({x:on.value?O-Rt.x:Rt.x,y:Rt.y});ne.percentages.forEach((Rt,Vt)=>{const Ft=`${Rt.toFixed(0)}%`,kt=M.measureText(Ft).width+tt*2,It=qe+lt*2,Nt=[ne.horizontalStart,ne.horizontalEnd].map($t=>ne.frame.pointAt($t,ne.midLevels[Vt])),Pt=Ct(Nt[0]).x>Ct(Nt[1]).x?Nt[0]:Nt[1];M.save(),M.translate(Pt.x,Pt.y),on.value&&M.scale(-1,1),M.translate(8,-It/2),M.fillStyle="rgba(0, 0, 0, 0.72)",M.roundRect?(M.beginPath(),M.roundRect(0,0,kt,It,9),M.fill()):M.fillRect(0,0,kt,It),M.fillStyle=Le,M.textBaseline="middle",M.fillText(Ft,tt,It/2),M.restore()})}function Vl(c,u,M,O){if(!c)return!1;const z=c[10],ne=c[152],oe=(z.x+ne.x)/2*u-O.centerX,xe=(z.y+ne.y)/2*M-O.centerY,Le=Math.hypot((ne.x-z.x)*u,(ne.y-z.y)*M)/(O.radiusY*2);return(oe/O.radiusX)**2+(xe/O.radiusY)**2<=.3&&Le>=.7&&Le<=1.05}function Uo(c){const u=te.value;if(!u)return;const M=u.getContext("2d"),O=u.width,z=u.height,ne=z*.26,oe=Math.min(ne*.72,O*.4),xe={centerX:O/2,centerY:z/2,radiusX:oe,radiusY:ne};M.clearRect(0,0,O,z),M.fillStyle="rgba(0, 0, 0, 0.58)",M.fillRect(0,0,O,z),M.globalCompositeOperation="destination-out",M.beginPath(),M.ellipse(xe.centerX,xe.centerY,xe.radiusX,xe.radiusY,0,0,Math.PI*2),M.fill(),M.globalCompositeOperation="source-over";const De=Vl(c,O,z,xe);M.strokeStyle=De?"#4CAF50":"rgba(255, 255, 255, 0.6)",M.lineWidth=6,M.stroke()}function kl(c){const u=te.value;if(!u)return;const M=xt?.visagismo?.rosto.value||"redondo",O=Ag(M);if(!O)return;const z=Tg[M]||{h:360},ne=u.getContext("2d"),oe=u.width,xe=u.height;let De=oe/2,Le=xe*.45,qe=Math.min(oe,xe)*.8/z.h,tt=0;if(c&&c.length>0){const Ct=uc(c,oe,xe);if(!Ct)return;const Rt=Ct.levels[0],Vt=Ct.levels[3],Ft=Math.max(.06*Math.min(oe,xe),Vt-Rt),Jt=Ct.frame.pointAt(0,(Rt+Vt)/2),It={cx:Jt.x,cy:Jt.y,scale:Ft*1.12/z.h,rot:Ct.frame.horizontalAngleRad};rn?(rn.cx+=(It.cx-rn.cx)*.6,rn.cy+=(It.cy-rn.cy)*.6,rn.scale+=(It.scale-rn.scale)*.6,rn.rot+=(It.rot-rn.rot)*.6):rn=It;const Nt=rn;De=Nt.cx,Le=Nt.cy,qe=Nt.scale,tt=Nt.rot}const lt=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#18ffff";ne.save(),ne.fillStyle="rgba(0, 0, 0, 0.58)",ne.fillRect(0,0,oe,xe),ne.globalCompositeOperation="destination-out",ne.translate(De,Le),ne.rotate(tt),ne.scale(qe,qe),ne.translate(-150,-210),ne.fill(O),ne.restore(),ne.save(),ne.translate(De,Le),ne.rotate(tt),ne.scale(qe,qe),ne.translate(-150,-210),ne.strokeStyle=lt,ne.lineWidth=4/qe,ne.stroke(O),ne.restore()}function Wl(c){const M=bt.clamp(ye(S.smoothing,1),0,1);!Ee||M===1?(be.position.copy(c.pos),be.quaternion.copy(c.quat),be.scale.setScalar(c.scale)):(be.position.lerpVectors(fe.pos,c.pos,M),be.quaternion.slerpQuaternions(fe.quat,c.quat,M),be.scale.setScalar(fe.scale+(c.scale-fe.scale)*M)),fe.pos.copy(be.position),fe.quat.copy(be.quaternion),fe.scale=be.scale.x,Ee=!0}function zl(){const c=globalThis?.FACEMESH_TESSELATION;if(!Array.isArray(c)||!c.length)return null;const u=[];for(let M=0;M+2<c.length;M+=3){const O=c[M],z=c[M+1];if(!Array.isArray(O)||!Array.isArray(z))continue;const ne=O[0],oe=O[1],xe=z[1];[ne,oe,xe].every(Number.isInteger)&&u.push(ne,oe,xe)}return u.length?new Uint16Array(u):null}function Fo(){if(!be||Ke)return;const c=zl();if(!c)return;je=new hi,ut=new Float32Array(mc*3),je.setAttribute("position",new Jn(ut,3)),je.setIndex(new Jn(c,1));const u=new Xc({side:xn});u.colorWrite=!1,u.depthTest=!0,u.depthWrite=!0,Ke=new Mn(je,u),Ke.renderOrder=5,Ke.frustumCulled=!1,Ke.visible=!1,be.add(Ke)}function Xl(c,{dEst:u,ipdWorld:M,anchorZ:O,yawDeg:z}){if(!Ti.value){Ke&&(Ke.visible=!1);return}if(Fo(),!Ke||!je||!ut||!be)return;const ne=c[33],oe=c[263],xe=c[1];if(!ne||!oe)return;const De=Math.max(1e-6,Math.hypot((oe.x??0)-(ne.x??0),(oe.y??0)-(ne.y??0))),Le=M/De,qe=Math.min(mc,c.length),tt=Math.abs(z||0),lt=bt.clamp((tt-vc)/Math.max(1,nv-vc),0,1),Ct=bt.lerp(Qg,.64,lt),Rt=bt.lerp(Jg,.03,lt),Vt=bt.lerp(ev,.024,lt),Ft=bt.lerp(tv,.072,lt),Jt=M*bt.lerp(_c,_c+.05,lt),kt=M*bt.lerp(gc,gc+.2,lt),It=0;be.updateMatrixWorld(!0),B.copy(be.matrixWorld).invert();for(let Nt=0;Nt<qe;Nt++){const Pt=c[Nt],$t=Pt.x*2-1,wn=1-Pt.y*2,$i=Math.hypot((Pt.x??0)-(xe?.x??0),((Pt.y??0)-(xe?.y??0))*1.15),Cn=1-bt.clamp(($i-Vt)/Math.max(1e-6,Ft-Vt),0,1),jn=bt.lerp(Rt,Ct,Cn),Zi=bt.lerp(kt,Jt,Cn),Bn=((Pt.z??O)-O)*Le*jn-Zi-It;Nl($t,wn,u,E),Bl(E,Bn),s.copy(E).applyMatrix4(B);const Pn=Nt*3;ut[Pn]=s.x,ut[Pn+1]=s.y,ut[Pn+2]=s.z}je.attributes.position.needsUpdate=!0,je.computeBoundingSphere(),Ke.visible=!!be.visible&&!!Ti.value}function ql(c,u,M){if(!c||Rn||u!==oi)return;Wi=c,Ta=M,Ea=!0,G.value=c.appLabel||"indefinido",ki=Number(c.poseQuality)||0;const O=xt?.visagismo;O&&(!O.molduraRosto?.value&&!O.rostoFixado?.value&&Object.prototype.hasOwnProperty.call(O.rostos,G.value)&&(O.rosto.value=G.value),O.rostoProbabilidades.value=vg(c.appProbabilities,O.rostos)),le.track("analysis","face_shape_segmented",{version:c.version,faceShape:c.appLabel,confidence:Number(c.confidence.toFixed(4)),poseQuality:Number(c.poseQuality.toFixed(4)),attempts:vi,ratios:Object.fromEntries(Object.entries(c.ratios).map(([z,ne])=>[z,Number(ne.toFixed(4))]))})}async function Yl(c,u,M,O){if(O===oi){vi+=1;try{const z=await Sl();if(Rn||!z||O!==oi)return;let ne=null,oe="";if(z.segment(c,xe=>{try{const De=xe.confidenceMasks?.[nl];if(!De)throw new Error("O segmentador não retornou a classe 3 face-skin.");const Le=De.getAsFloat32Array();ne=rl({landmarks:u,faceSkinMask:Le,width:De.width,height:De.height,threshold:.35,poseQuality:M}),oe=ol(c,ne,Le,De.width,De.height)}finally{xe.close?.()}}),!ne)throw new Error("A segmentação facial terminou sem resultado.");ql(ne,O,oe)}catch(z){le.captureError("analysis","face_shape_segmentation_failed",z,{attempt:vi,maxAttempts:Wr}),console.warn("[VideoRA] Falha na análise segmentada do formato do rosto.",z),vi>=Wr?(Ea=!0,G.value="indefinido"):ri=0}finally{O===oi&&(gi=!1)}}}function Kl(c){if(Ea||gi||vi>=Wr||!Be.value?.width||!Be.value?.height||Sn<45||Re>55)return;const u=al(c,{width:Be.value.width,height:Be.value.height},Ma);if(Ma=c.map(Le=>({x:Le.x,y:Le.y,z:Le.z||0})),ki=u.poseQuality||0,!u.eligible){ri=Math.max(0,ri-2);return}if(ri+=1,ri<hc)return;const M=Be.value,O=Math.min(1,Zg/Math.max(M.width,M.height)),z=document.createElement("canvas");z.width=Math.max(1,Math.round(M.width*O)),z.height=Math.max(1,Math.round(M.height*O)),z.getContext("2d",{alpha:!1}).drawImage(M,0,0,z.width,z.height);const ne=Ma,oe=u.poseQuality,xe=oi;gi=!0;const De=()=>{if(Rn){gi=!1;return}xe===oi&&Yl(z,ne,oe,xe)};typeof window.requestIdleCallback=="function"?window.requestIdleCallback(De,{timeout:500}):window.setTimeout(De,0)}function Oo(){Se+=1,!(Se<2)&&(Ee=!1,A.value={x:0,y:0},m.value=0,N.value=0,f.value=0,Wi||(G.value="aguardando",ki=0),tr=0,nr=0,k.value="Aguardando",q.value=0,be&&(be.visible=!1),Ke&&(Ke.visible=!1),wa(),xt?.visagismo?.calculandoRosto.value&&Uo(null))}function jl(c,u=null){if(!be||!at)return;const M=c[33],O=c[263],z=c[1];if(!M||!O||!z)return;const oe=Fl(c,u).clone().multiply(ae),xe=hr(M),De=hr(O),Le=Math.max(1e-6,Math.hypot(De.x-xe.x,De.y-xe.y));Qt.collecting&&(Qt.samples.push(Le),Qt.samples.length>=Math.max(3,S.calibFrames|0)&&(Qt.ipd0Ndc=wl(Qt.samples),Qt.collecting=!1,y||(T.value=S.initialDepthOffset),g||(C.value=S.initialScaleInIPD||S.targetWidthInIPD)));const qe=Qt.ipd0Ndc||Le,tt=uv*(qe/Le),lt=mr(yl(c),tt),Ct=Ol(lt,T.value),Rt=c[S.anchorUpperIdx]||c[9],Vt=c[S.anchorLowerIdx]||c[1],Ft=Math.max(0,Math.min(1,S.anchorBlendT)),Jt=(Rt.z??0)*(1-Ft)+(Vt.z??0)*Ft,kt=mr(xe,tt),It=mr(De,tt),Nt=Math.max(1e-6,kt.distanceTo(It)),Pt=Nt/Yt*(Number(C.value)||1),$t=new Ia().setFromQuaternion(oe,"YXZ");let wn=bt.radToDeg($t.y),$i=bt.radToDeg($t.x),Cn=bt.radToDeg($t.z);on.value&&(wn=-wn,Cn=-Cn),tr=Cn,m.value=wn,N.value=$i,f.value=yg(Cn,0);const jn=jt&&!Q.value;jn&&Kl(c);const Bn=St(S.rotGlobalGain,1),Er=ae.clone().clone().slerp(oe,Bn);let _d=ye(S.yawRotGain,1),gd=ye(S.pitchGain,1),vd=ye(S.rollGain,1);const Qi=new Ia().setFromQuaternion(Er,"YXZ");Qi.x*=gd,Qi.y*=_d,Qi.z*=vd,nr=bt.radToDeg(Qi.z),Er.setFromEuler(Qi),Wl({pos:Ct,quat:Er,scale:Pt}),be.visible=!0;const La=te.value;if(La){const zo=(z.x??.5)*La.width,xd=(z.y??.5)*La.height;A.value={x:Math.round(on.value?La.width-zo:zo),y:Math.round(xd)}}wa();const Sd=xt?.visagismo?!!xt.visagismo.marcadores.value:fr.value,ko=xt?.visagismo?!!xt.visagismo.proporcoes.value:pr.value,Wo=xt?.visagismo?!!xt.visagismo.molduraRosto.value:Lo.value;Sd&&Gl(c),jn&&ko&&!Wo&&Hl(c),jn&&Wo&&!ko&&kl(c),xt?.visagismo?.calculandoRosto.value&&Uo(c),_r(m.value||0,f.value||0),Xl(c,{dEst:tt,ipdWorld:Nt,anchorZ:Jt,yawDeg:wn})}async function $l(c,u){We=new ef,ue=new da(rt(L.value),c/u,.01,1e3),ue.position.set(0,0,2),Me=new og({canvas:Y.value,alpha:!0,antialias:!0,powerPreference:"high-performance"}),Me.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Me.outputColorSpace=no,Me.setSize(c,u,!1);const M=new tf(16777215,1);M.position.set(0,0,2),We.add(M,new nf(16777215,.6)),be=new af,be.visible=!1,We.add(be),Fo(),qi(c,u)}function Zl(){lr();const c=()=>{Me&&We&&ue&&Me.render(We,ue),zn=requestAnimationFrame(c)};zn=requestAnimationFrame(c)}function Ca(c){if(!c)return sa;let u=c;return/\.stl$/i.test(u)||(u=`/models3d/${u}.stl`),u.startsWith("/")||(u="/"+u),u}function Ql(c){return c?(c.split("/").pop()||"").replace(/\.stl$/i,""):""}function Jl(c){const u=Ql(c);return J[u]||null}function Pa(c){return new rf({color:new At(typeof c=="string"?c:c||"#000"),shininess:100,side:xn,depthTest:!0,depthWrite:!0})}async function gr(c,u,{center:M=!1,preRotate:O=!0}={}){return new Promise((z,ne)=>{new sg().load(c,oe=>{if(oe.computeBoundingBox(),oe.computeVertexNormals(),M){const Le=new Ie;oe.boundingBox.getCenter(Le),oe.translate(-Le.x,-Le.y,-Le.z),oe.computeBoundingBox()}const xe=u||Pa(S.initialColor),De=new Mn(oe,xe);if(O){const Le=bt.degToRad,qe=h;De.setRotationFromEuler(new Ia(Le(qe.x),Le(qe.y),Le(qe.z),"YXZ"))}z({mesh:De,geo:oe})},void 0,oe=>ne(oe))})}function ci(c,{disposeMaterial:u=!1}={}){if(c)try{be?.remove(c),c.geometry?.dispose?.(),u&&c.material?.dispose?.()}catch{}}function ya(){vt++,lr(),ci(ke),ci(Ze),ci(at),ci(Ke,{disposeMaterial:!0}),ke=null,Ze=null,at=null,Ke=null,je=null,ut=null;try{ct?.dispose?.()}catch{}ct=null;try{Me?.dispose?.()}catch{}Me=null,We=null,ue=null,be=null,Ee=!1}function Bo(c){c&&(c.position.copy(at.position),c.quaternion.copy(at.quaternion),c.renderOrder=10,c.visible=!!Ti.value)}async function vr(c){const u=++vt;ci(ke),ci(Ze),ci(at),ke=null,Ze=null,at=null,ht.set(0,0,0),ct=ct||Pa(S.initialColor);const M=Ca(c||sa);I=M;const{mesh:O,geo:z}=await gr(M,ct,{center:!1,preRotate:!0});if(u!==vt||!be)return;z.computeBoundingBox();const ne=new Ie;z.boundingBox.getCenter(ne),z.translate(-ne.x,-ne.y,-ne.z),z.computeBoundingBox(),ht.copy(ne);const oe=new Ie;z.boundingBox.getSize(oe),Yt=Math.max(1e-6,oe.x),O.position.set(-(oe.x*S.anchorFracX)+oe.x*S.localOffXFrac,-(oe.y*S.anchorFracY)+oe.x*S.localOffYFrac,-(oe.z*S.anchorFracZ)+oe.x*S.localOffZFrac),O.renderOrder=10,O.visible=!!Ti.value,at=O,be.add(at);const xe=Jl(M);if(!xe)return;const{mesh:De}=await gr(xe.left,ct,{center:!1,preRotate:!0}),{mesh:Le}=await gr(xe.right,ct,{center:!1,preRotate:!0});if(u!==vt||!be||!at)return;De.geometry.translate(-ht.x,-ht.y,-ht.z),Le.geometry.translate(-ht.x,-ht.y,-ht.z),Bo(De),Bo(Le);const qe=bt.degToRad(Number(S.hastesOpenDeg)||0),tt=new Ie(0,1,0).applyQuaternion(at.quaternion);function lt(It,Nt){It.computeBoundingBox();const Pt=It.boundingBox,$t=It.attributes.position,$i=(Pt.max.x-Pt.min.x)*.04,Cn=Nt?Pt.max.x:Pt.min.x;let jn=0,Zi=0,Bn=0;for(let Pn=0;Pn<$t.count;Pn++)Math.abs($t.getX(Pn)-Cn)<$i&&(jn+=$t.getY(Pn),Zi+=$t.getZ(Pn),Bn++);return new Ie(Cn,Bn>0?jn/Bn:(Pt.min.y+Pt.max.y)/2,Bn>0?Zi/Bn:(Pt.min.z+Pt.max.z)/2)}const Ct=lt(De.geometry,xe.leftMaxX??!0),Rt=lt(Le.geometry,xe.rightMaxX??!1),Vt=Ct.clone().applyQuaternion(De.quaternion).add(De.position),Ft=Rt.clone().applyQuaternion(Le.quaternion).add(Le.position),Jt=new li().setFromAxisAngle(tt,-qe),kt=new li().setFromAxisAngle(tt,qe);De.position.sub(Vt).applyQuaternion(Jt).add(Vt),De.quaternion.premultiply(Jt),Le.position.sub(Ft).applyQuaternion(kt).add(Ft),Le.quaternion.premultiply(kt),ke=De,Ze=Le,be.add(ke),be.add(Ze),_r(m.value||0,f.value||0)}async function ed(){if(!be)return;const c=I||Ca(S.initialModel)||sa;await vr(c)}let Ki;async function ji(){return w||(W&&d?.active?!0:(w=(async()=>{const c=performance.now();le.track("app","ar_start_requested",{physicalMobile:i,physicalMobileReason:t.reason,ipadLike:t.isIPadLike,mobileBehavior:r,trackingMode:l.value}),Oe();const u=I,M=ct?.color?`#${ct.color.getHexString()}`:"";Mi(),Ei(),_n&&await _n,lr(),Ki?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),Ra(),ya(),He=0,Je=0,en=0,qt=[],jt=!1,Kn.reset(0),vn.stop(),or();const O=await gl();await _l(O);const z=Ae.value;if(Rn||!z)return O.getTracks().forEach(tt=>tt.stop()),le.track("camera","startup_cancelled",{reason:Rn?"component_unmounted":"video_element_unavailable"},"warn"),!1;if(d=O,z.srcObject=O,await new Promise(tt=>{const lt=()=>tt();z.addEventListener("loadedmetadata",lt,{once:!0}),z.readyState>=1&&(z.removeEventListener("loadedmetadata",lt),tt())}),await z.play(),await Td(),Rn||Ae.value!==z)return O.getTracks().forEach(tt=>tt.stop()),le.track("camera","startup_cancelled",{reason:"view_changed"},"warn"),!1;const ne=z.videoWidth,oe=z.videoHeight;ml(O),le.track("camera","video_ready",{width:ne,height:oe,settings:b.value}),dl("camera_started"),El();const xe=Eo();await $l(xe.width,xe.height),le.track("webgl","three_renderer_ready",{renderer:Me?.capabilities?{isWebGL2:Me.capabilities.isWebGL2,maxTextures:Me.capabilities.maxTextures,precision:Me.capabilities.precision}:{}}),qi(xe.width,xe.height),Zl(),M&&(ct=Pa(M));const De=u||(S.initialModel?Ca(S.initialModel):sa);vr(De).catch(tt=>(le.captureError("rendering","frame_model_load_failed",tt,{mainPath:De}),!1)),bi(),Ki=new ResizeObserver(()=>bi()),Ki.observe(document.documentElement),window.addEventListener("orientationchange",fn),window.addEventListener("resize",fn),window.visualViewport?.addEventListener("resize",fn),xo(l.value),Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null,Se=0;const Le=sr().catch(async tt=>(le.captureError("mediapipe","cached_landmarker_rejected",tt),tt?.workerInitializationFailed?null:(xa=!0,sr({forceRecreate:!0,preferCpu:!0,allowWorker:!1})))),qe=Le.then(()=>Mt?mn?fl("camera_started"):ul("camera_started"):Je).catch(tt=>(le.captureError("camera","orientation_probe_unexpected_failure",tt),Je));return await Promise.all([qe,Le]),W=!0,Tt.confirm(Xe?.key||"",performance.now()),Ei(),yo(),le.track("tracking","tracking_started",{inputWidth:Yn,inputHeight:Fn,executionContext:mn?"worker":"main_thread",startupDurationMs:Number((performance.now()-c).toFixed(1)),callback:typeof Ae.value?.requestVideoFrameCallback=="function"?"requestVideoFrameCallback":"requestAnimationFrame"}),fn("camera_started"),!0})().catch(c=>(W=!1,On(!1),Mi(),Ei(),Ra(),ya(),console.error("[VideoRA] Falha ao iniciar câmera:",c),le.captureError("app","ar_start_failed",c),!1)).finally(()=>{w=null}),w))}function td(c){const u=c.faceLandmarks?.[0];if(!u){if(!jt){const O=vn.observeNoFace({processedFrames:Sn,now:performance.now()});if(O.fallback){Ao(O,"orientation_bootstrap_no_face_timeout"),Oo();return}if(O.changed){Si(O,"orientation_bootstrap_no_face");return}}Vi||(Vi=performance.now()),performance.now()-Vi>=1e4&&(le.track("tracking","face_not_detected_for_10s",{processedFrames:Sn,latencyMs:Number(P.value.toFixed(2))},"warn"),Vi=performance.now()),Oo();return}if(!jt){const O=vn.observeFace({processedFrames:Sn,now:performance.now()});if(O.fallback){Ao(O,"orientation_bootstrap_face_timeout");return}if(O.changed){Si(O,"orientation_bootstrap_face_unconfirmed");return}}if(!nd(u)){if(!jt){be&&(be.visible=!1),Ke&&(Ke.visible=!1),wa();return}po+=1,Vi=0,_o||(_o=!0,le.track("tracking","first_face_detected",{processedFrames:Sn,latencyMs:Number(P.value.toFixed(2)),points:u.length})),Se=0,jl(u,c.facialTransformationMatrixes?.[0]||null)}}function nd(c){const u=Dg(c,en),M=eo(u);if(!Number.isFinite(M))return!1;const O=rc(u),z=oc({calculatedRotation:O,eyeLineAngleDeg:M,activeRotation:jt?Je:null});if(z===null)return!1;const ne=Oa(z,on.value);if(jt){const Le=Kn.observe(ne,performance.now()),qe={eyeLineAngleDeg:Number(M.toFixed(2)),rawObservedRotation:z,previewMirrored:on.value,previousRotation:He,candidateRotation:Le.candidateRotation??ne,sampleCount:Le.sampleCount||0,windowSamples:Le.windowSamples||0,stableMs:Number((Le.stableMs||0).toFixed(1)),confidence:Number((Le.confidence||0).toFixed(3)),requestedOrientation:Xe?.key||"",streamWidth:b.value.width||0,streamHeight:b.value.height||0,screenType:window.screen?.orientation?.type||""};if(Le.rejected&&(On(!1),le.track("camera","content_orientation_candidate_rejected",{...qe,candidateRotation:Le.rejected.candidateRotation,sampleCount:Le.rejected.sampleCount,windowSamples:Le.rejected.windowSamples,stableMs:Number(Le.rejected.stableMs.toFixed(1)),confidence:Number(Le.rejected.confidence.toFixed(3))},"info")),Le.candidateStarted&&(On(!0),le.track("camera","content_orientation_candidate_detected",qe,"info")),Le.changed){On(!1),rn=null;const tt=He,lt=Je;Je=z,He=Le.activeRotation,le.track("camera","content_orientation_recalibrated",{...qe,previousRawRotation:lt,rawCorrectionDeg:Je,previousRotation:tt,correctionDeg:He},"warn");const Ct=Aa("content_orientation_recalibrated");return queueMicrotask(()=>{wo("content_orientation_recalibrated")}),To(Je,Ae.value?.videoWidth||0,Ae.value?.videoHeight||0),si("camera_content_recalibrated"),Ct}return!1}if(qt.push(z),qt.length<10)return!1;qt=qt.slice(-12);const oe=Pg(qt,{minimumSamples:10,requiredRatio:.9});if(oe===null)return!1;const xe=Je;Je=oe,He=Oa(Je,on.value),jt=!0,Kn.reset(He,performance.now()),pl(),le.track("camera","content_orientation_resolved",{eyeLineAngleDeg:Number(M.toFixed(2)),sampleCount:qt.length,rawCorrectionDeg:Je,previewMirrored:on.value,correctionDeg:He,requestedOrientation:Xe?.key||"",streamWidth:b.value.width||0,streamHeight:b.value.height||0,screenType:window.screen?.orientation?.type||""},He?"warn":"info");const De=Aa("content_orientation_resolved");return si("camera_content_resolved"),De||xe!==Je}function bi(){const c=Number(st.value?.dataset?.nw||0),u=Number(st.value?.dataset?.nh||0);if(!c||!u)return;const M=window.innerWidth,O=window.innerHeight,z=Math.max(M/c,O/u);st.value.style.transform=`translate(-50%, -50%) scale(${z})`}function id(){Je=0,He=0,qt=[],jt=!1,rn=null,On(!1),Kn.reset(0),vn.stop(),Aa("content_orientation_reset"),si("camera_content_reset")}function ad(c="manual"){jt&&(Kn.reset(He,performance.now()),le.track("camera","content_orientation_watchdog_rearmed",{reason:c,rawCorrectionDeg:Je,correctionDeg:He,requestedOrientation:Xe?.key||"",screenType:window.screen?.orientation?.type||"",...tn()}))}function Sr(c="viewport_changed",u=500){Ut&&window.clearTimeout(Ut),Ut=window.setTimeout(()=>{Ut=0,rd(c)},u)}async function rd(c){if(Rn||document.visibilityState!=="visible")return;const u=tn(),M=ba(),O=Tt.observe({key:M.key,width:u.innerWidth,height:u.innerHeight,now:performance.now()});if(O.pending){Sr("viewport_stability_pending",250);return}if(!(An||!W)){if(!O.confirmed||M.key===Xe?.key){bi();return}An=!0,Tt.confirm(M.key,performance.now()),id(),le.track("camera","orientation_restart_started",{reason:c,previous:Xe?.key||"",current:M.key,stableMs:O.stableMs,stabilitySamples:O.samples,...u});try{await w,W=!1,w=null;const z=await ji();le.track("camera","orientation_restart_completed",{orientation:Xe?.key||"",restarted:!!z,...tn()})}catch(z){le.captureError("camera","orientation_restart_failed",z),Tt.reset(Xe?.key||"")}finally{An=!1}}}function fn(c){bi();const u=typeof c=="string"?c:c?.type||"viewport_changed",M=ba();(M.key!==Xe?.key||u==="orientationchange"||u==="camera_started")&&le.track("camera","screen_orientation_changed",{reason:u,previous:Xe?.key||"",current:M.key,...tn()}),si(u),Sr(u)}function od(){return!Wi||!Ta?{ready:!1,status:gi?"processando":"aguardando",stableFrames:ri,requiredStableFrames:hc}:{ready:!0,image:Ta,details:Wi}}function sd(){or(),le.track("analysis","face_shape_report_reset")}function cd(c,u={},M="info"){le.track("analysis",c,u,M)}function ld(){return or(),le.track("analysis","face_shape_reanalysis_requested"),!0}async function dd(c){try{const u=c?Ca(c):sa;await vr(u),Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null}catch{}}function ud(c){const u=new At(typeof c=="string"?c:c||"#000");ct||(ct=Pa(c)),ct.color.copy(u),ct.needsUpdate=!0,[at,ke,Ze].forEach(M=>{M?.material?.color&&M.material.color.copy(u)})}function Go(){if(!We||!ue||!Me)return null;xi(),Me.render(We,ue);const c=Be.value?.width||1280,u=Be.value?.height||720,M=document.createElement("canvas");M.width=c,M.height=u;const O=M.getContext("2d");return on.value&&(O.translate(c,0),O.scale(-1,1)),O.drawImage(Be.value,0,0,c,u),O.drawImage(Y.value,0,0,c,u),O.drawImage(te.value,0,0,c,u),M.toDataURL("image/png")}function fd(){if(!Be.value)return null;xi();const c=Be.value.width||1280,u=Be.value.height||720,M=document.createElement("canvas");M.width=c,M.height=u;const O=M.getContext("2d");return on.value&&(O.translate(c,0),O.scale(-1,1)),O.drawImage(Be.value,0,0,c,u),M.toDataURL("image/jpeg",.92)}async function pd(){try{await w}catch{}W=!1,w=null,Mi(),Ei(),Ki?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),Ra(),ya(),le.track("lifecycle","ar_suspended_for_try_on")}async function hd(){return Rn||W?W:(le.track("lifecycle","ar_resuming_after_try_on"),w=null,ji())}function Ho(c){return y=!0,T.value=Number(c)||0,T.value}function xr(c){return g=!0,C.value=Number(c)||1,xt?.visagismo?.armacaoEscala&&(xt.visagismo.armacaoEscala.value=C.value),C.value}function md(c){const u=Number(C.value)||1;return xr(bt.clamp(u+(Number(c)||0),.9,2.8))}function Vo(c){return L.value=rt(c),qi(),L.value}return bd(()=>{le.start({appVersion:xt?.app?.versao?.value||"",route:xt?.app?.rota?.value||"visagismo"}),Lt=c=>{String(c?.message||"").includes("ResizeObserver loop completed")||le.captureError("javascript","window_error",c?.error||c?.message||"Erro global",{arquivo:c?.filename||"",linha:c?.lineno||0,coluna:c?.colno||0})},mt=c=>{le.captureError("javascript","unhandled_rejection",c?.reason||"Promise rejeitada")},pt=()=>{le.track("lifecycle","visibility_changed",{state:document.visibilityState}),document.visibilityState==="visible"?(ad("visibility_restored"),Tt.reset(Xe?.key||""),Sr("visibility_restored",300)):Ut&&(window.clearTimeout(Ut),Ut=0)},Bt=()=>le.track("network","online"),we=()=>le.track("network","offline",{},"warn"),Ht=c=>{c.preventDefault?.(),le.track("webgl","context_lost",{},"error"),le.flush({keepalive:!0})},nt=()=>le.track("webgl","context_restored"),window.addEventListener("error",Lt),window.addEventListener("unhandledrejection",mt),document.addEventListener("visibilitychange",pt),window.addEventListener("online",Bt),window.addEventListener("offline",we),Xt=c=>{const u=performance.now();ai={alpha:Number.isFinite(c?.alpha)?Number(c.alpha.toFixed(2)):null,beta:Number.isFinite(c?.beta)?Number(c.beta.toFixed(2)):null,gamma:Number.isFinite(c?.gamma)?Number(c.gamma.toFixed(2)):null,absolute:!!c?.absolute},so=u,Math.abs(ai.gamma||0)>=45?(Number.isFinite(Oi)||(Oi=u),Bi=Number.NEGATIVE_INFINITY):Math.abs(ai.gamma||0)<=30?(Oi=Number.NEGATIVE_INFINITY,Number.isFinite(Bi)||(Bi=u)):(Oi=Number.NEGATIVE_INFINITY,Bi=Number.NEGATIVE_INFINITY),si("device_orientation"),u-Bi>=800&&ll("device_returned_portrait"),u-co>=1e4&&(co=u,le.track("sensor","device_orientation_sample",{...ai,rawContentRotationDeg:Je,displayContentRotationDeg:He,gateVisible:F.value,...tn()}))},window.addEventListener("deviceorientation",Xt,{passive:!0}),Y.value?.addEventListener("webglcontextlost",Ht),Y.value?.addEventListener("webglcontextrestored",nt),Pe=async()=>{le.track("camera","camera_change_requested");try{await w}catch{}W=!1,w=null,await ji()},window.addEventListener("cameraAlterada",Pe),it=Ad({videoEl:()=>Ae.value,estaAtivo:()=>W&&!!Ae.value?.srcObject,reiniciar:async()=>{try{await w}catch{}W=!1,w=null,await ji()},delayMs:450})}),Rd(()=>{Rn=!0,window.removeEventListener("error",Lt),window.removeEventListener("unhandledrejection",mt),document.removeEventListener("visibilitychange",pt),window.removeEventListener("online",Bt),window.removeEventListener("offline",we),Xt&&(window.removeEventListener("deviceorientation",Xt),Xt=null),Y.value?.removeEventListener("webglcontextlost",Ht),Y.value?.removeEventListener("webglcontextrestored",nt),Pe&&(window.removeEventListener("cameraAlterada",Pe),Pe=null),it&&(it(),it=null),W=!1,Mi(),Ei(),Ki?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),Ut&&(window.clearTimeout(Ut),Ut=0),On(!1),Ra(),ya(),Mt=null,mn=!1,vl(),un=null,le.stop("component_unmounted")}),(c,u)=>(Ai(),ea("div",{id:"AR3D",ref_key:"root",ref:Ve},[dt("div",{class:wd(["present",{mirror:on.value,"present--orientation-adjusting":Q.value}])},[dt("div",{ref_key:"stage",ref:st,class:"stage"},[dt("video",{ref_key:"videoEl",ref:Ae,autoplay:"",playsinline:"",muted:"",class:"camera-source"},null,512),dt("canvas",{ref_key:"canvasFrame",ref:Be,class:"layer"},null,512),dt("canvas",{ref_key:"canvas3d",ref:Y,class:"layer"},null,512),dt("canvas",{ref_key:"canvasLandmarks",ref:te,class:"layer hud"},null,512)],512)],2),Na(qo,{name:"orientation-gate-fade"},{default:Xo(()=>[F.value?(Ai(),ea("div",Vg,[dt("div",kg,[Na(Cd,{name:"screen_rotation",class:"orientation-gate__icon"}),u[7]||(u[7]=dt("div",{class:"orientation-gate__title"},"Ative a rotação automática",-1)),u[8]||(u[8]=dt("div",{class:"orientation-gate__text"}," O aparelho está deitado, mas a tela continua na vertical. Ative a rotação automática para usar o Optiface em modo horizontal. ",-1)),ie.value?(Ai(),Pd(yd,{key:0,onClick:u[0]||(u[0]=M=>So("orientation_gate_button")),loading:K.value,label:"USAR EM HORIZONTAL",color:"primary",rounded:"",unelevated:"","no-caps":""},null,8,["loading"])):ta("",!0),$.value?(Ai(),ea("div",Wg,Ot($.value),1)):ta("",!0)])])):ta("",!0)]),_:1}),Na(qo,{name:"orientation-gate-fade"},{default:Xo(()=>[Q.value&&!F.value?(Ai(),ea("div",zg,[Na(Ld,{color:"primary",size:"28px"}),u[9]||(u[9]=dt("span",null,"Ajustando a câmera…",-1))])):ta("",!0)]),_:1}),Nd(xt).app.metricas.value?(Ai(),ea("div",Xg,[dt("label",null,[u[10]||(u[10]=Mr("Profundidade ",-1)),Tr(dt("input",{type:"range",min:"-0.50",max:"0.50",step:"0.001","onUpdate:modelValue":u[1]||(u[1]=M=>T.value=M),onInput:u[2]||(u[2]=M=>Ho(T.value))},null,544),[[br,T.value,void 0,{number:!0}]]),dt("b",null,Ot(T.value.toFixed(3)),1)]),dt("label",null,[u[11]||(u[11]=Mr("Tamanho ",-1)),Tr(dt("input",{type:"range",min:"0.90",max:"2.80",step:"0.01","onUpdate:modelValue":u[3]||(u[3]=M=>C.value=M),onInput:u[4]||(u[4]=M=>xr(C.value))},null,544),[[br,C.value,void 0,{number:!0}]]),dt("b",null,Ot(C.value.toFixed(2))+"×",1)]),dt("label",null,[u[12]||(u[12]=Mr("FOV ",-1)),Tr(dt("input",{type:"range",min:"35",max:"95",step:"0.1","onUpdate:modelValue":u[5]||(u[5]=M=>L.value=M),onInput:u[6]||(u[6]=M=>Vo(L.value))},null,544),[[br,L.value,void 0,{number:!0}]]),dt("b",null,Ot(L.value.toFixed(1))+"°",1)]),dt("div",qg,[dt("span",null,"Centro do nariz: X "+Ot(A.value.x)+" px · Y "+Ot(A.value.y)+" px",1),dt("span",null,"Inclinação (rosto deitado): "+Ot(f.value.toFixed(1))+"°",1),dt("span",null,"Cabeça virada (esq/dir): "+Ot(m.value.toFixed(1))+"°",1),dt("span",null,"Cabeça up/down (esq/dir): "+Ot(N.value.toFixed(1))+"°",1),dt("span",null,"Tipo de rosto: "+Ot(ce.value),1),dt("span",null,"Predição: "+Ot(Ye.value),1),dt("span",null,"Tracking: "+Ot(l.value)+" · "+Ot(P.value.toFixed(1))+" ms",1),dt("span",null,"Cam: "+Ot(b.value.width||0)+"x"+Ot(b.value.height||0)+" · "+Ot(b.value.frameRate?b.value.frameRate.toFixed(0):"0")+" fps · "+Ot(b.value.facingMode||"unknown"),1),dt("span",null,"Input: "+Ot(U.value.width||0)+"x"+Ot(U.value.height||0)+" · aspect "+Ot(b.value.aspectRatio?b.value.aspectRatio.toFixed(3):"--"),1)]),dt("button",{class:"btn",onClick:No},"Marcadores"),dt("button",{class:"btn",onClick:Do},"Proporções"),dt("button",{class:"btn",onClick:Pl}," Tracking "+Ot(l.value==="high"?"HQ":"Normal"),1),dt("button",{class:"btn",onClick:Go},"📸")])):ta("",!0)],512))}},Sv=Ed(fv,[["__scopeId","data-v-142c335e"]]);export{Sv as V,vv as a,vg as n};
