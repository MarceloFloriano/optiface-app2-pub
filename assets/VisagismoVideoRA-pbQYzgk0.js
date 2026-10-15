import{bR as Au,aU as _t,de as Ru,bE as ea,as as wu,aD as Cu,dm as Pu,az as yu,aL as Ri,u as ta,v as ut,au as Lu,I as Da,bJ as Xo,bX as Nu,s as Du,bU as Iu,t as na,bb as Ot,g as qo,dg as Uu,bk as Fu,H as Mr,bL as Tr,bA as br,q as ia,a0 as Ou}from"./index-CjXFXcEQ.js";import{U as Nn,c as Bu,N as Dn,S as no,C as wt,R as Gu,e as yt,w as gt,V as ln,l as Yo,M as ti,F as Ac,W as Ko,a as xn,b as Dt,L as yi,H as kn,D as En,B as hn,d as fa,f as Ie,p as Hu,g as jo,h as Vu,i as ku,A as aa,O as Wu,j as zu,k as Xu,m as qu,n as Yu,o as Ku,q as ju,r as $u,s as Zu,t as Qu,u as Ju,v as ed,x as td,y as nd,Z as id,z as ad,E as Xr,G as rd,I as Ar,J as pn,K as Ia,P as od,Q as pi,T as sd,X as cd,Y as io,_ as ld,$ as ao,a0 as ud,a1 as dd,a2 as fd,a3 as pd,a4 as hd,a5 as Wn,a6 as nn,a7 as mi,a8 as Jn,a9 as Mn,aa as Va,ab as md,ac as Vn,ad as la,ae as Di,af as za,ag as Zn,ah as Ii,ai as _d,aj as _i,ak as Xa,al as gd,am as Rc,an as Ct,ao as vd,ap as da,aq as Sd,ar as Rr,as as Hn,at as Li,au as pa,av as Ed,aw as xd,ax as Md,ay as Pi,az as st,aA as Td,aB as wc,aC as Cc,aD as Pc,aE as qa,aF as yc,aG as Lc,aH as bd,aI as Ad,aJ as Rd,aK as wd,aL as Cd,aM as Pd,aN as yd,aO as Ld,aP as $o,aQ as Nd,aR as ka,aS as Dd,aT as Zo,aU as Qo,aV as Jo,aW as Id,aX as ja,aY as es,aZ as Ud,a_ as ro,a$ as qr,b0 as Nc,b1 as Dc,b2 as Ic,b3 as Fd,b4 as Uc,b5 as Od,b6 as Bd,b7 as Gd,b8 as Hd,b9 as Fc,ba as Vd,bb as kd,bc as Wd,bd as wr,be as Cr,bf as Pr,bg as yr,bh as ts,bi as ns,bj as is,bk as as,bl as rs,bm as os,bn as ss,bo as cs,bp as ls,bq as Yr,br as us,bs as ds,bt as fs,bu as ps,bv as hs,bw as ms,bx as _s,by as gs,bz as vs,bA as Ss,bB as Es,bC as xs,bD as Ms,bE as Ts,bF as bs,bG as As,bH as Rs,bI as ws,bJ as Cs,bK as Ps,bL as Kr,bM as ys,bN as Oc,bO as Ls,bP as Bc,bQ as Ns,bR as sn,bS as zd,bT as Gc,bU as Hc,bV as Vc,bW as kc,bX as Wc,bY as zc,bZ as Xc,b_ as Lr,b$ as Nr,c0 as Xd,c1 as qd,c2 as qc,c3 as ha,c4 as Ui,c5 as Yc,c6 as Yd,c7 as Kd,c8 as jd,c9 as $d,ca as Zd,cb as Qd,cc as Jd,cd as ef,ce as tf,cf as nf,cg as af,ch as Rt,ci as li,cj as Ua,ck as rf,cl as of,cm as sf,cn as cf,co as lf}from"./three.core-aXXCO3ex.js";import{Z as jr,S as Kc,W as jc,s as uf,g as df,i as Ds}from"./faceLandmarkerWorkerClient-BcfgsVVR.js";import{a as ff,b as pf}from"./cameraPreference-DlAyC_Us.js";function $c(){let e=null,n=!1,t=null,i=null;function r(a,o){i=e.requestAnimationFrame(r),t(a,o)}return{start:function(){n!==!0&&t!==null&&e!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function hf(e){const n=new WeakMap;function t(g,R){const _=g.array,x=g.usage,S=_.byteLength,m=e.createBuffer();e.bindBuffer(R,m),e.bufferData(R,_,x),g.onUploadCallback();let b;if(_ instanceof Float32Array)b=e.FLOAT;else if(typeof Float16Array<"u"&&_ instanceof Float16Array)b=e.HALF_FLOAT;else if(_ instanceof Uint16Array)g.isFloat16BufferAttribute?b=e.HALF_FLOAT:b=e.UNSIGNED_SHORT;else if(_ instanceof Int16Array)b=e.SHORT;else if(_ instanceof Uint32Array)b=e.UNSIGNED_INT;else if(_ instanceof Int32Array)b=e.INT;else if(_ instanceof Int8Array)b=e.BYTE;else if(_ instanceof Uint8Array)b=e.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)b=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:m,type:b,bytesPerElement:_.BYTES_PER_ELEMENT,version:g.version,size:S}}function i(g,R,_){const x=R.array,S=R.updateRanges;if(e.bindBuffer(_,g),S.length===0)e.bufferSubData(_,0,x);else{S.sort((b,P)=>b.start-P.start);let m=0;for(let b=1;b<S.length;b++){const P=S[m],y=S[b];y.start<=P.start+P.count+1?P.count=Math.max(P.count,y.start+y.count-P.start):(++m,S[m]=y)}S.length=m+1;for(let b=0,P=S.length;b<P;b++){const y=S[b];e.bufferSubData(_,y.start*x.BYTES_PER_ELEMENT,x,y.start,y.count)}R.clearUpdateRanges()}R.onUploadCallback()}function r(g){return g.isInterleavedBufferAttribute&&(g=g.data),n.get(g)}function a(g){g.isInterleavedBufferAttribute&&(g=g.data);const R=n.get(g);R&&(e.deleteBuffer(R.buffer),n.delete(g))}function o(g,R){if(g.isInterleavedBufferAttribute&&(g=g.data),g.isGLBufferAttribute){const x=n.get(g);(!x||x.version<g.version)&&n.set(g,{buffer:g.buffer,type:g.type,bytesPerElement:g.elementSize,version:g.version});return}const _=n.get(g);if(_===void 0)n.set(g,t(g,R));else if(_.version<g.version){if(_.size!==g.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(_.buffer,g,R),_.version=g.version}}return{get:r,remove:a,update:o}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
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
#endif`,bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Pf=`#ifdef USE_BUMPMAP
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
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Bf=`#define PI 3.141592653589793
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
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
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
#endif`,Kf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
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
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,op=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,sp=`#ifdef USE_ENVMAP
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
#endif`,cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fp=`PhysicalMaterial material;
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
#endif`,pp=`uniform sampler2D dfgLUT;
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
}`,hp=`
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
#endif`,mp=`#if defined( RE_IndirectDiffuse )
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eh=`float getShadowMask() {
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
}`,th=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nh=`#ifdef USE_SKINNING
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
#endif`,ih=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ah=`#ifdef USE_SKINNING
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
#endif`,rh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,oh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ch=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lh=`#ifdef USE_TRANSMISSION
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
#endif`,uh=`#ifdef USE_TRANSMISSION
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
#endif`,dh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ph=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_h=`uniform sampler2D t2D;
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
}`,gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xh=`#include <common>
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
}`,Mh=`#if DEPTH_PACKING == 3200
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
}`,Th=`#define DISTANCE
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
}`,bh=`#define DISTANCE
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
}`,Ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wh=`uniform float scale;
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
}`,Ch=`uniform vec3 diffuse;
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
}`,Ph=`#include <common>
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
}`,yh=`uniform vec3 diffuse;
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
}`,Lh=`#define LAMBERT
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
}`,Nh=`#define LAMBERT
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
}`,Dh=`#define MATCAP
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
}`,Ih=`#define MATCAP
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
}`,Uh=`#define NORMAL
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
}`,Fh=`#define NORMAL
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
}`,Oh=`#define PHONG
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
}`,Bh=`#define PHONG
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
}`,Gh=`#define STANDARD
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
}`,Hh=`#define STANDARD
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
}`,Vh=`#define TOON
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
}`,kh=`#define TOON
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
}`,Wh=`uniform float size;
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
}`,zh=`uniform vec3 diffuse;
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
}`,Xh=`#include <common>
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
}`,qh=`uniform vec3 color;
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
}`,Yh=`uniform float rotation;
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
}`,Kh=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:mf,alphahash_pars_fragment:_f,alphamap_fragment:gf,alphamap_pars_fragment:vf,alphatest_fragment:Sf,alphatest_pars_fragment:Ef,aomap_fragment:xf,aomap_pars_fragment:Mf,batching_pars_vertex:Tf,batching_vertex:bf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:wf,iridescence_fragment:Cf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:yf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Nf,clipping_planes_vertex:Df,color_fragment:If,color_pars_fragment:Uf,color_pars_vertex:Ff,color_vertex:Of,common:Bf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:Vf,displacementmap_vertex:kf,emissivemap_fragment:Wf,emissivemap_pars_fragment:zf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Kf,envmap_pars_fragment:jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:sp,envmap_vertex:Zf,fog_vertex:Qf,fog_pars_vertex:Jf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:ap,lights_lambert_pars_fragment:rp,lights_pars_begin:op,lights_toon_fragment:cp,lights_toon_pars_fragment:lp,lights_phong_fragment:up,lights_phong_pars_fragment:dp,lights_physical_fragment:fp,lights_physical_pars_fragment:pp,lights_fragment_begin:hp,lights_fragment_maps:mp,lights_fragment_end:_p,lightprobes_pars_fragment:gp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:Ep,logdepthbuf_vertex:xp,map_fragment:Mp,map_pars_fragment:Tp,map_particle_fragment:bp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Cp,morphcolor_vertex:Pp,morphnormal_vertex:yp,morphtarget_pars_vertex:Lp,morphtarget_vertex:Np,normal_fragment_begin:Dp,normal_fragment_maps:Ip,normal_pars_fragment:Up,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:kp,opaque_fragment:Wp,packing:zp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:Kp,roughnessmap_fragment:jp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Zp,shadowmap_pars_vertex:Qp,shadowmap_vertex:Jp,shadowmask_pars_fragment:eh,skinbase_vertex:th,skinning_pars_vertex:nh,skinning_vertex:ih,skinnormal_vertex:ah,specularmap_fragment:rh,specularmap_pars_fragment:oh,tonemapping_fragment:sh,tonemapping_pars_fragment:ch,transmission_fragment:lh,transmission_pars_fragment:uh,uv_pars_fragment:dh,uv_pars_vertex:fh,uv_vertex:ph,worldpos_vertex:hh,background_vert:mh,background_frag:_h,backgroundCube_vert:gh,backgroundCube_frag:vh,cube_vert:Sh,cube_frag:Eh,depth_vert:xh,depth_frag:Mh,distance_vert:Th,distance_frag:bh,equirect_vert:Ah,equirect_frag:Rh,linedashed_vert:wh,linedashed_frag:Ch,meshbasic_vert:Ph,meshbasic_frag:yh,meshlambert_vert:Lh,meshlambert_frag:Nh,meshmatcap_vert:Dh,meshmatcap_frag:Ih,meshnormal_vert:Uh,meshnormal_frag:Fh,meshphong_vert:Oh,meshphong_frag:Bh,meshphysical_vert:Gh,meshphysical_frag:Hh,meshtoon_vert:Vh,meshtoon_frag:kh,points_vert:Wh,points_frag:zh,shadow_vert:Xh,shadow_frag:qh,sprite_vert:Yh,sprite_frag:Kh},Te={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new nn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Ie},probesMax:{value:new Ie},probesResolution:{value:new Ie}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new nn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Ln={basic:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:sn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:sn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:sn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new wt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:sn([Te.points,Te.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:sn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:sn([Te.common,Te.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:sn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:sn([Te.sprite,Te.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:sn([Te.common,Te.displacementmap,{referencePosition:{value:new Ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:sn([Te.lights,Te.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Ln.physical={uniforms:sn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new nn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new nn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new nn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Fa={r:0,b:0,g:0},jh=new ti,Zc=new st;Zc.set(-1,0,0,0,1,0,0,0,1);function $h(e,n,t,i,r,a){const o=new wt(0);let g=r===!0?0:1,R,_,x=null,S=0,m=null;function b(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const M=D.backgroundBlurriness>0;U=n.get(U,M)}return U}function P(D){let U=!1;const M=b(D);M===null?p(o,g):M&&M.isColor&&(p(M,1),U=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(e.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(D,U){const M=b(U);M&&(M.isCubeTexture||M.mapping===ja)?(_===void 0&&(_=new Mn(new ro(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:qr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(A,h,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(_)),_.material.uniforms.envMap.value=M,_.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(jh.makeRotationFromEuler(U.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.material.uniforms.backgroundRotation.value.premultiply(Zc),_.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Ct,(x!==M||S!==M.version||m!==e.toneMapping)&&(_.material.needsUpdate=!0,x=M,S=M.version,m=e.toneMapping),_.layers.enableAll(),D.unshift(_,_.geometry,_.material,0,0,null)):M&&M.isTexture&&(R===void 0&&(R=new Mn(new Nc(2,2),new Wn({name:"BackgroundMaterial",uniforms:qr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:fa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),R.geometry.deleteAttribute("normal"),Object.defineProperty(R.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(R)),R.material.uniforms.t2D.value=M,R.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,R.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),R.material.uniforms.uvTransform.value.copy(M.matrix),(x!==M||S!==M.version||m!==e.toneMapping)&&(R.material.needsUpdate=!0,x=M,S=M.version,m=e.toneMapping),R.layers.enableAll(),D.unshift(R,R.geometry,R.material,0,0,null))}function p(D,U){D.getRGB(Fa,Dc(e)),t.buffers.color.setClear(Fa.r,Fa.g,Fa.b,U,a)}function l(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),R!==void 0&&(R.geometry.dispose(),R.material.dispose(),R=void 0)}return{getClearColor:function(){return o},setClearColor:function(D,U=1){o.set(D),g=U,p(o,g)},getClearAlpha:function(){return g},setClearAlpha:function(D){g=D,p(o,g)},render:P,addToRenderList:y,dispose:l}}function Zh(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=m(null);let a=r,o=!1;function g(B,k,q,F,$){let K=!1;const Q=S(B,F,q,k);a!==Q&&(a=Q,_(a.object)),K=b(B,F,q,$),K&&P(B,F,q,$),$!==null&&n.update($,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,M(B,k,q,F),$!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get($).buffer))}function R(){return e.createVertexArray()}function _(B){return e.bindVertexArray(B)}function x(B){return e.deleteVertexArray(B)}function S(B,k,q,F){const $=F.wireframe===!0;let K=i[k.id];K===void 0&&(K={},i[k.id]=K);const Q=B.isInstancedMesh===!0?B.id:0;let oe=K[Q];oe===void 0&&(oe={},K[Q]=oe);let ie=oe[q.id];ie===void 0&&(ie={},oe[q.id]=ie);let se=ie[$];return se===void 0&&(se=m(R()),ie[$]=se),se}function m(B){const k=[],q=[],F=[];for(let $=0;$<t;$++)k[$]=0,q[$]=0,F[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:q,attributeDivisors:F,object:B,attributes:{},index:null}}function b(B,k,q,F){const $=a.attributes,K=k.attributes;let Q=0;const oe=q.getAttributes();for(const ie in oe)if(oe[ie].location>=0){const ce=$[ie];let Ye=K[ie];if(Ye===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(Ye=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(Ye=B.instanceColor)),ce===void 0||ce.attribute!==Ye||Ye&&ce.data!==Ye.data)return!0;Q++}return a.attributesNum!==Q||a.index!==F}function P(B,k,q,F){const $={},K=k.attributes;let Q=0;const oe=q.getAttributes();for(const ie in oe)if(oe[ie].location>=0){let ce=K[ie];ce===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(ce=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(ce=B.instanceColor));const Ye={};Ye.attribute=ce,ce&&ce.data&&(Ye.data=ce.data),$[ie]=Ye,Q++}a.attributes=$,a.attributesNum=Q,a.index=F}function y(){const B=a.newAttributes;for(let k=0,q=B.length;k<q;k++)B[k]=0}function p(B){l(B,0)}function l(B,k){const q=a.newAttributes,F=a.enabledAttributes,$=a.attributeDivisors;q[B]=1,F[B]===0&&(e.enableVertexAttribArray(B),F[B]=1),$[B]!==k&&(e.vertexAttribDivisor(B,k),$[B]=k)}function D(){const B=a.newAttributes,k=a.enabledAttributes;for(let q=0,F=k.length;q<F;q++)k[q]!==B[q]&&(e.disableVertexAttribArray(q),k[q]=0)}function U(B,k,q,F,$,K,Q){Q===!0?e.vertexAttribIPointer(B,k,q,$,K):e.vertexAttribPointer(B,k,q,F,$,K)}function M(B,k,q,F){y();const $=F.attributes,K=q.getAttributes(),Q=k.defaultAttributeValues;for(const oe in K){const ie=K[oe];if(ie.location>=0){let se=$[oe];if(se===void 0&&(oe==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),oe==="instanceColor"&&B.instanceColor&&(se=B.instanceColor)),se!==void 0){const ce=se.normalized,Ye=se.itemSize,Ve=n.get(se);if(Ve===void 0)continue;const ct=Ve.buffer,Re=Ve.type,Be=Ve.bytesPerElement,Y=Re===e.INT||Re===e.UNSIGNED_INT||se.gpuType===Fc;if(se.isInterleavedBufferAttribute){const te=se.data,Me=te.stride,We=se.offset;if(te.isInstancedInterleavedBuffer){for(let fe=0;fe<ie.locationSize;fe++)l(ie.location+fe,te.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<ie.locationSize;fe++)p(ie.location+fe);e.bindBuffer(e.ARRAY_BUFFER,ct);for(let fe=0;fe<ie.locationSize;fe++)U(ie.location+fe,Ye/ie.locationSize,Re,ce,Me*Be,(We+Ye/ie.locationSize*fe)*Be,Y)}else{if(se.isInstancedBufferAttribute){for(let te=0;te<ie.locationSize;te++)l(ie.location+te,se.meshPerAttribute);B.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let te=0;te<ie.locationSize;te++)p(ie.location+te);e.bindBuffer(e.ARRAY_BUFFER,ct);for(let te=0;te<ie.locationSize;te++)U(ie.location+te,Ye/ie.locationSize,Re,ce,Ye*Be,Ye/ie.locationSize*te*Be,Y)}}else if(Q!==void 0){const ce=Q[oe];if(ce!==void 0)switch(ce.length){case 2:e.vertexAttrib2fv(ie.location,ce);break;case 3:e.vertexAttrib3fv(ie.location,ce);break;case 4:e.vertexAttrib4fv(ie.location,ce);break;default:e.vertexAttrib1fv(ie.location,ce)}}}}D()}function A(){v();for(const B in i){const k=i[B];for(const q in k){const F=k[q];for(const $ in F){const K=F[$];for(const Q in K)x(K[Q].object),delete K[Q];delete F[$]}}delete i[B]}}function h(B){if(i[B.id]===void 0)return;const k=i[B.id];for(const q in k){const F=k[q];for(const $ in F){const K=F[$];for(const Q in K)x(K[Q].object),delete K[Q];delete F[$]}}delete i[B.id]}function w(B){for(const k in i){const q=i[k];for(const F in q){const $=q[F];if($[B.id]===void 0)continue;const K=$[B.id];for(const Q in K)x(K[Q].object),delete K[Q];delete $[B.id]}}}function f(B){for(const k in i){const q=i[k],F=B.isInstancedMesh===!0?B.id:0,$=q[F];if($!==void 0){for(const K in $){const Q=$[K];for(const oe in Q)x(Q[oe].object),delete Q[oe];delete $[K]}delete q[F],Object.keys(q).length===0&&delete i[k]}}}function v(){I(),o=!0,a!==r&&(a=r,_(a.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:g,reset:v,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:h,releaseStatesOfObject:f,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:p,disableUnusedAttributes:D}}function Qh(e,n,t){let i;function r(R){i=R}function a(R,_){e.drawArrays(i,R,_),t.update(_,i,1)}function o(R,_,x){x!==0&&(e.drawArraysInstanced(i,R,_,x),t.update(_,i,x))}function g(R,_,x){if(x===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,R,0,_,0,x);let m=0;for(let b=0;b<x;b++)m+=_[b];t.update(m,i,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=g}function Jh(e,n,t,i){let r;function a(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const w=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Hn&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function g(w){const f=w===kn&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(w!==Nn&&w!==Zn&&!f&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function R(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=t.precision!==void 0?t.precision:"highp";const x=R(_);x!==_&&(gt("WebGLRenderer:",_,"not supported, using",x,"instead."),_=x);const S=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const b=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),P=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),p=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),l=e.getParameter(e.MAX_VERTEX_ATTRIBS),D=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),U=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),h=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:R,textureFormatReadable:o,textureTypeReadable:g,precision:_,logarithmicDepthBuffer:S,reversedDepthBuffer:m,maxTextures:b,maxVertexTextures:P,maxTextureSize:y,maxCubemapSize:p,maxAttributes:l,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:M,maxSamples:A,samples:h}}function em(e){const n=this;let t=null,i=0,r=!1,a=!1;const o=new Td,g=new st,R={value:null,needsUpdate:!1};this.uniform=R,this.numPlanes=0,this.numIntersection=0,this.init=function(S,m){const b=S.length!==0||m||i!==0||r;return r=m,i=S.length,b},this.beginShadows=function(){a=!0,x(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(S,m){t=x(S,m,0)},this.setState=function(S,m,b){const P=S.clippingPlanes,y=S.clipIntersection,p=S.clipShadows,l=e.get(S);if(!r||P===null||P.length===0||a&&!p)a?x(null):_();else{const D=a?0:i,U=D*4;let M=l.clippingState||null;R.value=M,M=x(P,m,U,b);for(let A=0;A!==U;++A)M[A]=t[A];l.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=D}};function _(){R.value!==t&&(R.value=t,R.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function x(S,m,b,P){const y=S!==null?S.length:0;let p=null;if(y!==0){if(p=R.value,P!==!0||p===null){const l=b+y*4,D=m.matrixWorldInverse;g.getNormalMatrix(D),(p===null||p.length<l)&&(p=new Float32Array(l));for(let U=0,M=b;U!==y;++U,M+=4)o.copy(S[U]).applyMatrix4(D,g),o.normal.toArray(p,M),p[M+3]=o.constant}R.value=p,R.needsUpdate=!0}return n.numPlanes=y,n.numIntersection=0,p}}const Ni=4,tm=6,nm=20,im=256,ra=new Rc,Is=new wt;let Dr=null,Ir=0,Ur=0,Fr=!1;const am=new Ie,ui=new Ie;class Us{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(n,t=0,i=.1,r=100,a={}){const{size:o=256,position:g=am}=a;Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const R=this._allocateTargets();return R.depthBuffer=!0,this._sceneToCubeUV(n,i,r,R,g),t>0&&this._blur(R,0,0,t),this._applyPMREM(R),this._cleanup(R),R}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bs(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Os(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodMeshes.length;n++)this._lodMeshes[n].geometry.dispose()}_cleanup(n){this._renderer.setRenderTarget(Dr,Ir,Ur),this._renderer.xr.enabled=Fr,n.scissorTest=!1,wi(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===ha||n.mapping===Ui?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Dr=this._renderer.getRenderTarget(),Ir=this._renderer.getActiveCubeFace(),Ur=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:kn,format:Hn,colorSpace:qc,depthBuffer:!1},r=Fs(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fs(n,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=rm(a)),this._blurMaterial=sm(a,n,t),this._ggxMaterial=om(a,n,t)}return r}_compileMaterial(n){const t=new Mn(new mi,n);this._renderer.compile(t,ra)}_sceneToCubeUV(n,t,i,r,a){const R=new da(90,1,t,i),_=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,m=S.autoClear,b=S.toneMapping;S.getClearColor(Is),S.toneMapping=Dn,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(r),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new ro,new Yc({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,p=y.material;let l=!1;const D=n.background;D?D.isColor&&(p.color.copy(D),n.background=null,l=!0):(p.color.copy(Is),l=!0);for(let U=0;U<6;U++){const M=U%3;M===0?(R.up.set(0,_[U],0),R.position.set(a.x,a.y,a.z),R.lookAt(a.x+x[U],a.y,a.z)):M===1?(R.up.set(0,0,_[U]),R.position.set(a.x,a.y,a.z),R.lookAt(a.x,a.y+x[U],a.z)):(R.up.set(0,_[U],0),R.position.set(a.x,a.y,a.z),R.lookAt(a.x,a.y,a.z+x[U]));const A=this._cubeSize;wi(r,M*A,U>2?A:0,A,A),S.setRenderTarget(r),l&&S.render(y,R),S.render(n,R)}S.toneMapping=b,S.autoClear=m,n.background=D}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===ha||n.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bs()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Os());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const g=a.uniforms;g.envMap.value=n;const R=this._cubeSize;wi(t,0,0,3*R,2*R),i.setRenderTarget(t),i.render(o,ra)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(n,a-1,a);t.autoClear=i}_applyGGXFilter(n,t,i){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,g=this._lodMeshes[i];g.material=o;const R=o.uniforms,_=i/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),S=Math.sqrt(_*_-x*x),m=_*1.25,b=S*m,{_lodMax:P}=this,y=this._sizeLods[i],p=3*y*(i>P-Ni?i-P+Ni:0),l=4*(this._cubeSize-y);R.envMap.value=n.texture,R.roughness.value=b,R.mipInt.value=P-t,wi(a,p,l,3*y,2*y),r.setRenderTarget(a),r.render(g,ra),R.envMap.value=a.texture,R.roughness.value=0,R.mipInt.value=P-i,wi(n,p,l,3*y,2*y),r.setRenderTarget(n),r.render(g,ra)}_blur(n,t,i,r){const a=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(n,a,t,i,o),this._blurPass(a,n,i,i,o)}_blurPass(n,t,i,r,a){const o=this._renderer,g=this._blurMaterial,R=this._lodMeshes[r];R.material=g;const _=g.uniforms;_.envMap.value=n.texture,_.sigma.value=a,_.mipInt.value=this._lodMax-i;const x=this._sizeLods[r],S=3*x*(r>this._lodMax-Ni?r-this._lodMax+Ni:0),m=4*(this._cubeSize-x);wi(t,S,m,3*x,2*x),o.setRenderTarget(t),o.render(R,ra)}}function rm(e){const n=[],t=[];let i=e;const r=e-Ni+1+tm;for(let a=0;a<r;a++){const o=Math.pow(2,i);n.push(o);const g=1/(o-2),R=-g,_=1+g,x=[R,R,_,R,_,_,R,R,_,_,R,_],S=6,m=6,b=3,P=new Float32Array(b*m*S),y=new Float32Array(b*m*S);for(let l=0;l<S;l++){const D=l%3*2/3-1,U=l>2?0:-1,M=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];P.set(M,b*m*l);for(let A=0;A<m;A++){const h=x[A*2]*2-1,w=x[A*2+1]*2-1;l===0?ui.set(1,w,h):l===1?ui.set(-h,1,-w):l===2?ui.set(-h,w,1):l===3?ui.set(-1,w,-h):l===4?ui.set(-h,-1,w):ui.set(h,w,-1),ui.toArray(y,(l*m+A)*b)}}const p=new mi;p.setAttribute("position",new Jn(P,b)),p.setAttribute("outputDirection",new Jn(y,b)),t.push(new Mn(p,null)),i>Ni&&i--}return{lodMeshes:t,sizeLods:n}}function Fs(e,n,t){const i=new xn(e,n,t);return i.texture.mapping=ja,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wi(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function om(e,n,t){return new Wn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:im,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function sm(e,n,t){return new Wn({name:"SphericalGaussianBlur",defines:{SAMPLES:nm,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$a(),fragmentShader:`

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
	`}class Qc extends xn{constructor(n=1,t={}){super(n,n,t),this.isWebGLCubeRenderTarget=!0;const i={width:n,height:n,depth:1},r=[i,i,i,i,i,i];this.texture=new Ic(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(n,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ro(5,5,5),a=new Wn({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Vn});a.uniforms.tEquirect.value=t;const o=new Mn(r,a),g=t.minFilter;return t.minFilter===yi&&(t.minFilter=pn),new Fd(1,10,this).update(n,o),t.minFilter=g,o.geometry.dispose(),o.material.dispose(),this}clear(n,t=!0,i=!0,r=!0){const a=n.getRenderTarget();for(let o=0;o<6;o++)n.setRenderTarget(this,o),n.clear(t,i,r);n.setRenderTarget(a)}}function cm(e){let n=new WeakMap,t=new WeakMap,i=null;function r(m,b=!1){return m==null?null:b?o(m):a(m)}function a(m){if(m&&m.isTexture){const b=m.mapping;if(b===Lr||b===Nr)if(n.has(m)){const P=n.get(m).texture;return g(P,m.mapping)}else{const P=m.image;if(P&&P.height>0){const y=new Qc(P.height);return y.fromEquirectangularTexture(e,m),n.set(m,y),m.addEventListener("dispose",_),g(y.texture,m.mapping)}else return null}}return m}function o(m){if(m&&m.isTexture){const b=m.mapping,P=b===Lr||b===Nr,y=b===ha||b===Ui;if(P||y){let p=t.get(m);const l=p!==void 0?p.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==l)return i===null&&(i=new Us(e)),p=P?i.fromEquirectangular(m,p):i.fromCubemap(m,p),p.texture.pmremVersion=m.pmremVersion,t.set(m,p),p.texture;if(p!==void 0)return p.texture;{const D=m.image;return P&&D&&D.height>0||y&&D&&R(D)?(i===null&&(i=new Us(e)),p=P?i.fromEquirectangular(m):i.fromCubemap(m),p.texture.pmremVersion=m.pmremVersion,t.set(m,p),m.addEventListener("dispose",x),p.texture):null}}}return m}function g(m,b){return b===Lr?m.mapping=ha:b===Nr&&(m.mapping=Ui),m}function R(m){let b=0;const P=6;for(let y=0;y<P;y++)m[y]!==void 0&&b++;return b===P}function _(m){const b=m.target;b.removeEventListener("dispose",_);const P=n.get(b);P!==void 0&&(n.delete(b),P.dispose())}function x(m){const b=m.target;b.removeEventListener("dispose",x);const P=t.get(b);P!==void 0&&(t.delete(b),P.dispose())}function S(){n=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:S}}function lm(e){const n={};function t(i){if(n[i]!==void 0)return n[i];const r=e.getExtension(i);return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Md("WebGLRenderer: "+i+" extension not supported."),r}}}function um(e,n,t,i){const r={},a=new WeakMap;function o(S){const m=S.target;m.index!==null&&n.remove(m.index);for(const P in m.attributes)n.remove(m.attributes[P]);m.removeEventListener("dispose",o),delete r[m.id];const b=a.get(m);b&&(n.remove(b),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function g(S,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function R(S){const m=S.attributes;for(const b in m)n.update(m[b],e.ARRAY_BUFFER)}function _(S){const m=[],b=S.index,P=S.attributes.position;let y=0;if(P===void 0)return;if(b!==null){const D=b.array;y=b.version;for(let U=0,M=D.length;U<M;U+=3){const A=D[U+0],h=D[U+1],w=D[U+2];m.push(A,h,h,w,w,A)}}else{const D=P.array;y=P.version;for(let U=0,M=D.length/3-1;U<M;U+=3){const A=U+0,h=U+1,w=U+2;m.push(A,h,h,w,w,A)}}const p=new(P.count>=65535?Xd:qd)(m,1);p.version=y;const l=a.get(S);l&&n.remove(l),a.set(S,p)}function x(S){const m=a.get(S);if(m){const b=S.index;b!==null&&m.version<b.version&&_(S)}else _(S);return a.get(S)}return{get:g,update:R,getWireframeAttribute:x}}function dm(e,n,t){let i;function r(S){i=S}let a,o;function g(S){a=S.type,o=S.bytesPerElement}function R(S,m){e.drawElements(i,m,a,S*o),t.update(m,i,1)}function _(S,m,b){b!==0&&(e.drawElementsInstanced(i,m,a,S*o,b),t.update(m,i,b))}function x(S,m,b){if(b===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,a,S,0,b);let y=0;for(let p=0;p<b;p++)y+=m[p];t.update(y,i,1)}this.setMode=r,this.setIndex=g,this.render=R,this.renderInstances=_,this.renderMultiDraw=x}function fm(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,g){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=g*(a/3);break;case e.LINES:t.lines+=g*(a/2);break;case e.LINE_STRIP:t.lines+=g*(a-1);break;case e.LINE_LOOP:t.lines+=g*a;break;case e.POINTS:t.points+=g*a;break;default:yt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pm(e,n,t){const i=new WeakMap,r=new ln;function a(o,g,R){const _=o.morphTargetInfluences,x=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,S=x!==void 0?x.length:0;let m=i.get(g);if(m===void 0||m.count!==S){let v=function(){w.dispose(),i.delete(g),g.removeEventListener("dispose",v)};m!==void 0&&m.texture.dispose();const b=g.morphAttributes.position!==void 0,P=g.morphAttributes.normal!==void 0,y=g.morphAttributes.color!==void 0,p=g.morphAttributes.position||[],l=g.morphAttributes.normal||[],D=g.morphAttributes.color||[];let U=0;b===!0&&(U=1),P===!0&&(U=2),y===!0&&(U=3);let M=g.attributes.position.count*U,A=1;M>n.maxTextureSize&&(A=Math.ceil(M/n.maxTextureSize),M=n.maxTextureSize);const h=new Float32Array(M*A*4*S),w=new Oc(h,M,A,S);w.type=Zn,w.needsUpdate=!0;const f=U*4;for(let I=0;I<S;I++){const B=p[I],k=l[I],q=D[I],F=M*A*4*I;for(let $=0;$<B.count;$++){const K=$*f;b===!0&&(r.fromBufferAttribute(B,$),h[F+K+0]=r.x,h[F+K+1]=r.y,h[F+K+2]=r.z,h[F+K+3]=0),P===!0&&(r.fromBufferAttribute(k,$),h[F+K+4]=r.x,h[F+K+5]=r.y,h[F+K+6]=r.z,h[F+K+7]=0),y===!0&&(r.fromBufferAttribute(q,$),h[F+K+8]=r.x,h[F+K+9]=r.y,h[F+K+10]=r.z,h[F+K+11]=q.itemSize===4?r.w:1)}}m={count:S,texture:w,size:new nn(M,A)},i.set(g,m),g.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)R.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let b=0;for(let y=0;y<_.length;y++)b+=_[y];const P=g.morphTargetsRelative?1:1-b;R.getUniforms().setValue(e,"morphTargetBaseInfluence",P),R.getUniforms().setValue(e,"morphTargetInfluences",_)}R.getUniforms().setValue(e,"morphTargetsTexture",m.texture,t),R.getUniforms().setValue(e,"morphTargetsTextureSize",m.size)}return{update:a}}function hm(e,n,t,i,r){let a=new WeakMap;function o(_){const x=r.render.frame,S=_.geometry,m=n.get(_,S);if(a.get(m)!==x&&(n.update(m),a.set(m,x)),_.isInstancedMesh&&(_.hasEventListener("dispose",R)===!1&&_.addEventListener("dispose",R),a.get(_)!==x&&(t.update(_.instanceMatrix,e.ARRAY_BUFFER),_.instanceColor!==null&&t.update(_.instanceColor,e.ARRAY_BUFFER),a.set(_,x))),_.isSkinnedMesh){const b=_.skeleton;a.get(b)!==x&&(b.update(),a.set(b,x))}return m}function g(){a=new WeakMap}function R(_){const x=_.target;x.removeEventListener("dispose",R),i.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:o,dispose:g}}const mm={[Xc]:"LINEAR_TONE_MAPPING",[zc]:"REINHARD_TONE_MAPPING",[Wc]:"CINEON_TONE_MAPPING",[kc]:"ACES_FILMIC_TONE_MAPPING",[Vc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[Gc]:"CUSTOM_TONE_MAPPING"};function _m(e,n,t,i,r,a){const o=new xn(n,t,{type:e,depthBuffer:r,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let g=null,R=null;const _=new mi;_.setAttribute("position",new Xa([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new Xa([0,2,0,0,2,0],2));const x=new gd({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new Mn(_,x),m=new Rc(-1,1,1,-1,0,1);let b=null,P=null,y=!1,p,l=null,D=[],U=!1;this.setSize=function(M,A){o.setSize(M,A),g!==null&&g.setSize(M,A),R!==null&&R.setSize(M,A);for(let h=0;h<D.length;h++){const w=D[h];w.setSize&&w.setSize(M,A)}},this.setEffects=function(M){D=M,U=D.length>0&&D[0].isRenderPass===!0;const A=o.width,h=o.height;D.length>0&&g===null&&(g=new xn(A,h,{type:kn,depthBuffer:!1,stencilBuffer:!1}),R=new xn(A,h,{type:kn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<D.length;w++){const f=D[w];f.setSize&&f.setSize(A,h)}},this.begin=function(M,A){if(y||M.toneMapping===Dn&&D.length===0)return!1;if(l=A,A!==null){const h=A.width,w=A.height;(o.width!==h||o.height!==w)&&this.setSize(h,w)}return U===!1&&M.setRenderTarget(o),p=M.toneMapping,M.toneMapping=Dn,!0},this.hasRenderPass=function(){return U},this.end=function(M,A){M.toneMapping=p,y=!0;let h=o,w=g;for(let f=0;f<D.length;f++){const v=D[f];v.enabled!==!1&&(v.render(M,w,h,A),v.needsSwap!==!1&&(h=w,w=w===g?R:g))}if(b!==M.outputColorSpace||P!==M.toneMapping){b=M.outputColorSpace,P=M.toneMapping,x.defines={},Dt.getTransfer(b)===Ct&&(x.defines.SRGB_TRANSFER="");const f=mm[P];f&&(x.defines[f]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=h.texture,M.setRenderTarget(l),M.render(S,m),l=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),g!==null&&g.dispose(),R!==null&&R.dispose(),_.dispose(),x.dispose()}}const Jc=new Qd,$r=new za(1,1),el=new Oc,tl=new Zd,nl=new Ic,Gs=[],Hs=[],Vs=new Float32Array(16),ks=new Float32Array(9),Ws=new Float32Array(4);function Fi(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let a=Gs[r];if(a===void 0&&(a=new Float32Array(r),Gs[r]=a),n!==0){i.toArray(a,0);for(let o=1,g=0;o!==n;++o)g+=t,e[o].toArray(a,g)}return a}function Wt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function zt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Za(e,n){let t=Hs[n];t===void 0&&(t=new Int32Array(n),Hs[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function gm(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function vm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2fv(this.addr,n),zt(t,n)}}function Sm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(Wt(t,n))return;e.uniform3fv(this.addr,n),zt(t,n)}}function Em(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4fv(this.addr,n),zt(t,n)}}function xm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;Ws.set(i),e.uniformMatrix2fv(this.addr,!1,Ws),zt(t,i)}}function Mm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;ks.set(i),e.uniformMatrix3fv(this.addr,!1,ks),zt(t,i)}}function Tm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Wt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),zt(t,n)}else{if(Wt(t,i))return;Vs.set(i),e.uniformMatrix4fv(this.addr,!1,Vs),zt(t,i)}}function bm(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function Am(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2iv(this.addr,n),zt(t,n)}}function Rm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Wt(t,n))return;e.uniform3iv(this.addr,n),zt(t,n)}}function wm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4iv(this.addr,n),zt(t,n)}}function Cm(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function Pm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Wt(t,n))return;e.uniform2uiv(this.addr,n),zt(t,n)}}function ym(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Wt(t,n))return;e.uniform3uiv(this.addr,n),zt(t,n)}}function Lm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Wt(t,n))return;e.uniform4uiv(this.addr,n),zt(t,n)}}function Nm(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let a;this.type===e.SAMPLER_2D_SHADOW?($r.compareFunction=t.isReversedDepthBuffer()?io:ao,a=$r):a=Jc,t.setTexture2D(n||a,r)}function Dm(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||tl,r)}function Im(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||nl,r)}function Um(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||el,r)}function Fm(e){switch(e){case 5126:return gm;case 35664:return vm;case 35665:return Sm;case 35666:return Em;case 35674:return xm;case 35675:return Mm;case 35676:return Tm;case 5124:case 35670:return bm;case 35667:case 35671:return Am;case 35668:case 35672:return Rm;case 35669:case 35673:return wm;case 5125:return Cm;case 36294:return Pm;case 36295:return ym;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Um}}function Om(e,n){e.uniform1fv(this.addr,n)}function Bm(e,n){const t=Fi(n,this.size,2);e.uniform2fv(this.addr,t)}function Gm(e,n){const t=Fi(n,this.size,3);e.uniform3fv(this.addr,t)}function Hm(e,n){const t=Fi(n,this.size,4);e.uniform4fv(this.addr,t)}function Vm(e,n){const t=Fi(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function km(e,n){const t=Fi(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Wm(e,n){const t=Fi(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function zm(e,n){e.uniform1iv(this.addr,n)}function Xm(e,n){e.uniform2iv(this.addr,n)}function qm(e,n){e.uniform3iv(this.addr,n)}function Ym(e,n){e.uniform4iv(this.addr,n)}function Km(e,n){e.uniform1uiv(this.addr,n)}function jm(e,n){e.uniform2uiv(this.addr,n)}function $m(e,n){e.uniform3uiv(this.addr,n)}function Zm(e,n){e.uniform4uiv(this.addr,n)}function Qm(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));let o;this.type===e.SAMPLER_2D_SHADOW?o=$r:o=Jc;for(let g=0;g!==r;++g)t.setTexture2D(n[g]||o,a[g])}function Jm(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(n[o]||tl,a[o])}function e_(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(n[o]||nl,a[o])}function t_(e,n,t){const i=this.cache,r=n.length,a=Za(t,r);Wt(i,a)||(e.uniform1iv(this.addr,a),zt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(n[o]||el,a[o])}function n_(e){switch(e){case 5126:return Om;case 35664:return Bm;case 35665:return Gm;case 35666:return Hm;case 35674:return Vm;case 35675:return km;case 35676:return Wm;case 5124:case 35670:return zm;case 35667:case 35671:return Xm;case 35668:case 35672:return qm;case 35669:case 35673:return Ym;case 5125:return Km;case 36294:return jm;case 36295:return $m;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}class i_{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Fm(t.type)}}class a_{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}}class r_{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const g=r[a];g.setValue(n,t[g.id],i)}}}const Or=/(\w+)(\])?(\[|\.)?/g;function zs(e,n){e.seq.push(n),e.map[n.id]=n}function o_(e,n,t){const i=e.name,r=i.length;for(Or.lastIndex=0;;){const a=Or.exec(i),o=Or.lastIndex;let g=a[1];const R=a[2]==="]",_=a[3];if(R&&(g=g|0),_===void 0||_==="["&&o+2===r){zs(t,_===void 0?new i_(g,e,n):new a_(g,e,n));break}else{let S=t.map[g];S===void 0&&(S=new r_(g),zs(t,S)),t=S}}}class Wa{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const g=n.getActiveUniform(t,o),R=n.getUniformLocation(t,g.name);o_(g,R,this)}const r=[],a=[];for(const o of this.seq)o.type===n.SAMPLER_2D_SHADOW||o.type===n.SAMPLER_CUBE_SHADOW||o.type===n.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(n,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let a=0,o=t.length;a!==o;++a){const g=t[a],R=i[g.id];R.needsUpdate!==!1&&g.setValue(n,R.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.id in t&&i.push(o)}return i}}function Xs(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const s_=37297;let c_=0;function l_(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=r;o<a;o++){const g=o+1;i.push(`${g===n?">":" "} ${g}: ${t[o]}`)}return i.join(`
`)}const qs=new st;function u_(e){Dt._getMatrix(qs,Dt.workingColorSpace,e);const n=`mat3( ${qs.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(e)){case Bc:return[n,"LinearTransferOETF"];case Ct:return[n,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Ys(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),a=(e.getShaderInfoLog(n)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const g=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+l_(e.getShaderSource(n),g)}else return a}function d_(e,n){const t=u_(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const f_={[Xc]:"Linear",[zc]:"Reinhard",[Wc]:"Cineon",[kc]:"ACESFilmic",[Vc]:"AgX",[Hc]:"Neutral",[Gc]:"Custom"};function p_(e,n){const t=f_[n];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",n),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Oa=new Ie;function h_(){Dt.getLuminanceCoefficients(Oa);const e=Oa.x.toFixed(4),n=Oa.y.toFixed(4),t=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m_(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function __(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function g_(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=e.getActiveAttrib(n,r),o=a.name;let g=1;a.type===e.FLOAT_MAT2&&(g=2),a.type===e.FLOAT_MAT3&&(g=3),a.type===e.FLOAT_MAT4&&(g=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:g}}return t}function ua(e){return e!==""}function Ks(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,n.numSunLights).replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,n.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function js(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const v_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zr(e){return e.replace(v_,E_)}const S_=new Map;function E_(e,n){let t=tt[n];if(t===void 0){const i=S_.get(n);if(i!==void 0)t=tt[i],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+n+">")}return Zr(t)}const x_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $s(e){return e.replace(x_,M_)}function M_(e,n,t,i){let r="";for(let a=parseInt(n);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Zs(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}const T_={[Va]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function b_(e){return T_[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const A_={[ha]:"ENVMAP_TYPE_CUBE",[Ui]:"ENVMAP_TYPE_CUBE",[ja]:"ENVMAP_TYPE_CUBE_UV"};function R_(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":A_[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const w_={[Ui]:"ENVMAP_MODE_REFRACTION"};function C_(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":w_[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const P_={[$d]:"ENVMAP_BLENDING_MULTIPLY",[jd]:"ENVMAP_BLENDING_MIX",[Kd]:"ENVMAP_BLENDING_ADD"};function y_(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":P_[e.combine]||"ENVMAP_BLENDING_NONE"}function L_(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function N_(e,n,t,i){const r=e.getContext(),a=t.defines;let o=t.vertexShader,g=t.fragmentShader;const R=b_(t),_=R_(t),x=C_(t),S=y_(t),m=L_(t),b=m_(t),P=__(a),y=r.createProgram();let p,l,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P].filter(ua).join(`
`),p.length>0&&(p+=`
`),l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P].filter(ua).join(`
`),l.length>0&&(l+=`
`)):(p=[Zs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),l=[Zs(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,P,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.envMap?"#define "+x:"",t.envMap?"#define "+S:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+R:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Dn?"#define TONE_MAPPING":"",t.toneMapping!==Dn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Dn?p_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,d_("linearToOutputTexel",t.outputColorSpace),h_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),o=Zr(o),o=Ks(o,t),o=js(o,t),g=Zr(g),g=Ks(g,t),g=js(g,t),o=$s(o),g=$s(g),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,p=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",t.glslVersion===Ns?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ns?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const U=D+p+o,M=D+l+g,A=Xs(r,r.VERTEX_SHADER,U),h=Xs(r,r.FRAGMENT_SHADER,M);r.attachShader(y,A),r.attachShader(y,h),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(B){if(e.debug.checkShaderErrors){const k=r.getProgramInfoLog(y)||"",q=r.getShaderInfoLog(A)||"",F=r.getShaderInfoLog(h)||"",$=k.trim(),K=q.trim(),Q=F.trim();let oe=!0,ie=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(oe=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,y,A,h);else{const se=Ys(r,A,"vertex"),ce=Ys(r,h,"fragment");yt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+se+`
`+ce)}else $!==""?gt("WebGLProgram: Program Info Log:",$):(K===""||Q==="")&&(ie=!1);ie&&(B.diagnostics={runnable:oe,programLog:$,vertexShader:{log:K,prefix:p},fragmentShader:{log:Q,prefix:l}})}r.deleteShader(A),r.deleteShader(h),f=new Wa(r,y),v=g_(r,y)}let f;this.getUniforms=function(){return f===void 0&&w(this),f};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(y,s_)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c_++,this.cacheKey=n,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=h,this}let D_=0;class I_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n,t,i){const r=this._getShaderCacheForMaterial(n);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderStage(n){return this._getShaderStage(n.vertexShader)}getFragmentShaderStage(n){return this._getShaderStage(n.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new U_(n),t.set(n,i)),i}}class U_{constructor(n){this.id=D_++,this.code=n,this.usedTimes=0}}function F_(e){return e===Di||e===Yr||e===Kr}function O_(e,n,t,i,r,a){const o=new zd,g=new I_,R=new Set,_=[],x=new Map,S=i.logarithmicDepthBuffer;let m=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function P(f){return R.add(f),f===0?"uv":`uv${f}`}function y(f,v,I,B,k,q){const F=B.fog,$=k.geometry,K=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?B.environment:null,Q=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,oe=n.get(f.envMap||K,Q),ie=oe&&oe.mapping===ja?oe.image.height:null,se=b[f.type];f.precision!==null&&(m=i.getMaxPrecision(f.precision),m!==f.precision&&gt("WebGLProgram.getParameters:",f.precision,"not supported, using",m,"instead."));const ce=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ye=ce!==void 0?ce.length:0;let Ve=0;$.morphAttributes.position!==void 0&&(Ve=1),$.morphAttributes.normal!==void 0&&(Ve=2),$.morphAttributes.color!==void 0&&(Ve=3);let ct,Re,Be,Y;if(se){const St=Ln[se];ct=St.vertexShader,Re=St.fragmentShader}else{ct=f.vertexShader,Re=f.fragmentShader;const St=g.getVertexShaderStage(f),rt=g.getFragmentShaderStage(f);g.update(f,St,rt),Be=St.id,Y=rt.id}const te=e.getRenderTarget(),Me=e.state.buffers.depth.getReversed(),We=k.isInstancedMesh===!0,fe=k.isBatchedMesh===!0,be=!!f.map,at=!!f.matcap,ke=!!oe,Ze=!!f.aoMap,Ke=!!f.lightMap,je=!!f.bumpMap&&f.wireframe===!1,dt=!!f.normalMap,lt=!!f.displacementMap,Yt=!!f.emissiveMap,vt=!!f.metalnessMap,ht=!!f.roughnessMap,N=f.anisotropy>0,Gt=f.clearcoat>0,ft=f.dispersion>0,T=f.retroreflectivity>0,s=f.iridescence>0,G=f.sheen>0,X=f.transmission>0,j=N&&!!f.anisotropyMap,ue=Gt&&!!f.clearcoatMap,_e=Gt&&!!f.clearcoatNormalMap,Z=Gt&&!!f.clearcoatRoughnessMap,ee=s&&!!f.iridescenceMap,ge=s&&!!f.iridescenceThicknessMap,Fe=G&&!!f.sheenColorMap,ve=G&&!!f.sheenRoughnessMap,me=!!f.specularMap,De=!!f.specularColorMap,Ge=!!f.specularIntensityMap,$e=X&&!!f.transmissionMap,L=X&&!!f.thicknessMap,he=!!f.gradientMap,J=!!f.alphaMap,pe=f.alphaTest>0,xe=!!f.alphaHash,ae=!!f.extensions;let Oe=Dn;f.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Oe=e.toneMapping);const Le={shaderID:se,shaderType:f.type,shaderName:f.name,vertexShader:ct,fragmentShader:Re,defines:f.defines,customVertexShaderID:Be,customFragmentShaderID:Y,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:m,batching:fe,batchingColor:fe&&k._colorsTexture!==null,instancing:We,instancingColor:We&&k.instanceColor!==null,instancingMorph:We&&k.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:be,matcap:at,envMap:ke,envMapMode:ke&&oe.mapping,envMapCubeUVHeight:ie,aoMap:Ze,lightMap:Ke,bumpMap:je,normalMap:dt,displacementMap:lt,emissiveMap:Yt,normalMapObjectSpace:dt&&f.normalMapType===Ud,normalMapTangentSpace:dt&&f.normalMapType===es,packedNormalMap:dt&&f.normalMapType===es&&F_(f.normalMap.format),metalnessMap:vt,roughnessMap:ht,anisotropy:N,anisotropyMap:j,clearcoat:Gt,clearcoatMap:ue,clearcoatNormalMap:_e,clearcoatRoughnessMap:Z,dispersion:ft,retroreflection:T,iridescence:s,iridescenceMap:ee,iridescenceThicknessMap:ge,sheen:G,sheenColorMap:Fe,sheenRoughnessMap:ve,specularMap:me,specularColorMap:De,specularIntensityMap:Ge,transmission:X,transmissionMap:$e,thicknessMap:L,gradientMap:he,opaque:f.transparent===!1&&f.blending===ka&&f.alphaToCoverage===!1,alphaMap:J,alphaTest:pe,alphaHash:xe,combine:f.combine,mapUv:be&&P(f.map.channel),aoMapUv:Ze&&P(f.aoMap.channel),lightMapUv:Ke&&P(f.lightMap.channel),bumpMapUv:je&&P(f.bumpMap.channel),normalMapUv:dt&&P(f.normalMap.channel),displacementMapUv:lt&&P(f.displacementMap.channel),emissiveMapUv:Yt&&P(f.emissiveMap.channel),metalnessMapUv:vt&&P(f.metalnessMap.channel),roughnessMapUv:ht&&P(f.roughnessMap.channel),anisotropyMapUv:j&&P(f.anisotropyMap.channel),clearcoatMapUv:ue&&P(f.clearcoatMap.channel),clearcoatNormalMapUv:_e&&P(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&P(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&P(f.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&P(f.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&P(f.sheenColorMap.channel),sheenRoughnessMapUv:ve&&P(f.sheenRoughnessMap.channel),specularMapUv:me&&P(f.specularMap.channel),specularColorMapUv:De&&P(f.specularColorMap.channel),specularIntensityMapUv:Ge&&P(f.specularIntensityMap.channel),transmissionMapUv:$e&&P(f.transmissionMap.channel),thicknessMapUv:L&&P(f.thicknessMap.channel),alphaMapUv:J&&P(f.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(dt||N),vertexNormals:!!$.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(be||J),fog:!!F,useFog:f.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||$.attributes.normal===void 0&&dt===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ye,morphTextureStride:Ve,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:e.shadowMap.enabled&&I.length>0,shadowMapType:e.shadowMap.type,toneMapping:Oe,decodeVideoTexture:be&&f.map.isVideoTexture===!0&&Dt.getTransfer(f.map.colorSpace)===Ct,decodeVideoTextureEmissive:Yt&&f.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(f.emissiveMap.colorSpace)===Ct,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===En,flipSided:f.side===hn,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:ae&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&f.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Le.vertexUv1s=R.has(1),Le.vertexUv2s=R.has(2),Le.vertexUv3s=R.has(3),R.clear(),Le}function p(f){const v=[];if(f.shaderID?v.push(f.shaderID):(v.push(f.customVertexShaderID),v.push(f.customFragmentShaderID)),f.defines!==void 0)for(const I in f.defines)v.push(I),v.push(f.defines[I]);return f.isRawShaderMaterial===!1&&(l(v,f),D(v,f),v.push(e.outputColorSpace)),v.push(f.customProgramCacheKey),v.join()}function l(f,v){f.push(v.precision),f.push(v.outputColorSpace),f.push(v.envMapMode),f.push(v.envMapCubeUVHeight),f.push(v.mapUv),f.push(v.alphaMapUv),f.push(v.lightMapUv),f.push(v.aoMapUv),f.push(v.bumpMapUv),f.push(v.normalMapUv),f.push(v.displacementMapUv),f.push(v.emissiveMapUv),f.push(v.metalnessMapUv),f.push(v.roughnessMapUv),f.push(v.anisotropyMapUv),f.push(v.clearcoatMapUv),f.push(v.clearcoatNormalMapUv),f.push(v.clearcoatRoughnessMapUv),f.push(v.iridescenceMapUv),f.push(v.iridescenceThicknessMapUv),f.push(v.sheenColorMapUv),f.push(v.sheenRoughnessMapUv),f.push(v.specularMapUv),f.push(v.specularColorMapUv),f.push(v.specularIntensityMapUv),f.push(v.transmissionMapUv),f.push(v.thicknessMapUv),f.push(v.combine),f.push(v.fogExp2),f.push(v.sizeAttenuation),f.push(v.morphTargetsCount),f.push(v.morphAttributeCount),f.push(v.numSunLights),f.push(v.numDirLights),f.push(v.numPointLights),f.push(v.numSpotLights),f.push(v.numSpotLightMaps),f.push(v.numHemiLights),f.push(v.numRectAreaLights),f.push(v.numSunLightShadows),f.push(v.numDirLightShadows),f.push(v.numPointLightShadows),f.push(v.numSpotLightShadows),f.push(v.numSpotLightShadowsWithMaps),f.push(v.numLightProbes),f.push(v.shadowMapType),f.push(v.toneMapping),f.push(v.numClippingPlanes),f.push(v.numClipIntersection),f.push(v.depthPacking)}function D(f,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),f.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),f.push(o.mask)}function U(f){const v=b[f.type];let I;if(v){const B=Ln[v];I=Id.clone(B.uniforms)}else I=f.uniforms;return I}function M(f,v){let I=x.get(v);return I!==void 0?++I.usedTimes:(I=new N_(e,v,f,r),_.push(I),x.set(v,I)),I}function A(f){if(--f.usedTimes===0){const v=_.indexOf(f);_[v]=_[_.length-1],_.pop(),x.delete(f.cacheKey),f.destroy()}}function h(f){g.remove(f)}function w(){g.dispose()}return{getParameters:y,getProgramCacheKey:p,getUniforms:U,acquireProgram:M,releaseProgram:A,releaseShaderCache:h,programs:_,dispose:w}}function B_(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let g=e.get(o);return g===void 0&&(g={},e.set(o,g)),g}function i(o){e.delete(o)}function r(o,g,R){e.get(o)[g]=R}function a(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:a}}function G_(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.materialVariant!==n.materialVariant?e.materialVariant-n.materialVariant:e.z!==n.z?e.z-n.z:e.id-n.id}function Qs(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Js(){const e=[];let n=0;const t=[],i=[],r=[];function a(){n=0,t.length=0,i.length=0,r.length=0}function o(m){let b=0;return m.isInstancedMesh&&(b+=2),m.isSkinnedMesh&&(b+=1),b}function g(m,b,P,y,p,l){let D=e[n];return D===void 0?(D={id:m.id,object:m,geometry:b,material:P,materialVariant:o(m),groupOrder:y,renderOrder:m.renderOrder,z:p,group:l},e[n]=D):(D.id=m.id,D.object=m,D.geometry=b,D.material=P,D.materialVariant=o(m),D.groupOrder=y,D.renderOrder=m.renderOrder,D.z=p,D.group=l),n++,D}function R(m,b,P,y,p,l,D){D.reversedDepth===!0&&(p=-p);const U=g(m,b,P,y,p,l);P.transmission>0?i.push(U):P.transparent===!0?r.push(U):t.push(U)}function _(m,b,P,y,p,l){const D=g(m,b,P,y,p,l);P.transmission>0?i.unshift(D):P.transparent===!0?r.unshift(D):t.unshift(D)}function x(m,b){t.length>1&&t.sort(m||G_),i.length>1&&i.sort(b||Qs),r.length>1&&r.sort(b||Qs)}function S(){for(let m=n,b=e.length;m<b;m++){const P=e[m];if(P.id===null)break;P.id=null,P.object=null,P.geometry=null,P.material=null,P.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:R,unshift:_,finish:S,sort:x}}function H_(){let e=new WeakMap;function n(i,r){const a=e.get(i);let o;return a===void 0?(o=new Js,e.set(i,[o])):r>=a.length?(o=new Js,a.push(o)):o=a[r],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function V_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={direction:new Ie,color:new wt};break;case"SpotLight":t={position:new Ie,direction:new Ie,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ie,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ie,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new Ie,halfWidth:new Ie,halfHeight:new Ie};break}return e[n.id]=t,t}}}function k_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nn,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let W_=0;function z_(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function X_(e){const n=new V_,t=k_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)i.probe.push(new Ie);const r=new Ie,a=new ti,o=new ti;function g(_){let x=0,S=0,m=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let b=0,P=0,y=0,p=0,l=0,D=0,U=0,M=0,A=0,h=0,w=0,f=0,v=0,I=0;_.sort(z_);for(let k=0,q=_.length;k<q;k++){const F=_[k],$=F.color,K=F.intensity,Q=F.distance;let oe=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===Di?oe=F.shadow.map.texture:oe=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)x+=$.r*K,S+=$.g*K,m+=$.b*K;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)i.probe[ie].addScaledVector(F.sh.coefficients[ie],K);I++}else if(F.isSunLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),i.sunShadow[P]=ce,i.sunShadowMap[P]=oe;const Ye=se.getViewportCount();for(let Ve=0;Ve<Ye;Ve++)i.sunShadowMatrix[y+Ve]=se.getMatrix(Ve),i.sunShadowCascade[y+Ve]=se._cascadeData[Ve];y+=Ye,P++}i.sun[b]=ie,b++}else if(F.isDirectionalLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,i.directionalShadow[p]=ce,i.directionalShadowMap[p]=oe,i.directionalShadowMatrix[p]=F.shadow.matrix,A++}i.directional[p]=ie,p++}else if(F.isSpotLight){const ie=n.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy($).multiplyScalar(K),ie.distance=Q,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,i.spot[D]=ie;const se=F.shadow;if(F.map&&(i.spotLightMap[f]=F.map,f++,se.updateMatrices(F),F.castShadow&&v++),i.spotLightMatrix[D]=se.matrix,F.castShadow){const ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,i.spotShadow[D]=ce,i.spotShadowMap[D]=oe,w++}D++}else if(F.isRectAreaLight){const ie=n.get(F);ie.color.copy($).multiplyScalar(K),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),i.rectArea[U]=ie,U++}else if(F.isPointLight){const ie=n.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const se=F.shadow,ce=t.get(F);ce.shadowIntensity=se.intensity,ce.shadowBias=se.bias,ce.shadowNormalBias=se.normalBias,ce.shadowRadius=se.radius,ce.shadowMapSize=se.mapSize,ce.shadowCameraNear=se.camera.near,ce.shadowCameraFar=se.camera.far,i.pointShadow[l]=ce,i.pointShadowMap[l]=oe,i.pointShadowMatrix[l]=F.shadow.matrix,h++}i.point[l]=ie,l++}else if(F.isHemisphereLight){const ie=n.get(F);ie.skyColor.copy(F.color).multiplyScalar(K),ie.groundColor.copy(F.groundColor).multiplyScalar(K),i.hemi[M]=ie,M++}}U>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=x,i.ambient[1]=S,i.ambient[2]=m;const B=i.hash;(B.sunLength!==b||B.directionalLength!==p||B.pointLength!==l||B.spotLength!==D||B.rectAreaLength!==U||B.hemiLength!==M||B.numSunShadows!==P||B.numDirectionalShadows!==A||B.numPointShadows!==h||B.numSpotShadows!==w||B.numSpotMaps!==f||B.numLightProbes!==I)&&(i.sun.length=b,i.directional.length=p,i.spot.length=D,i.rectArea.length=U,i.point.length=l,i.hemi.length=M,i.sunShadow.length=P,i.sunShadowMap.length=P,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=h,i.pointShadowMap.length=h,i.pointShadowMatrix.length=h,i.spotShadow.length=w,i.spotShadowMap.length=w,i.spotLightMatrix.length=w+f-v,i.spotLightMap.length=f,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=I,B.sunLength=b,B.directionalLength=p,B.pointLength=l,B.spotLength=D,B.rectAreaLength=U,B.hemiLength=M,B.numSunShadows=P,B.numDirectionalShadows=A,B.numPointShadows=h,B.numSpotShadows=w,B.numSpotMaps=f,B.numLightProbes=I,i.version=W_++)}function R(_,x){let S=0,m=0,b=0,P=0,y=0,p=0;const l=x.matrixWorldInverse;for(let D=0,U=_.length;D<U;D++){const M=_[D];if(M.isSunLight){const A=i.sun[S];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(l),S++}else if(M.isDirectionalLight){const A=i.directional[m];A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(l),m++}else if(M.isSpotLight){const A=i.spot[P];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(l),A.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(l),P++}else if(M.isRectAreaLight){const A=i.rectArea[y];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(l),o.identity(),a.copy(M.matrixWorld),a.premultiply(l),o.extractRotation(a),A.halfWidth.set(M.width*.5,0,0),A.halfHeight.set(0,M.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const A=i.point[b];A.position.setFromMatrixPosition(M.matrixWorld),A.position.applyMatrix4(l),b++}else if(M.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(M.matrixWorld),A.direction.transformDirection(l),p++}}}return{setup:g,setupView:R,state:i}}function ec(e){const n=new X_(e),t=[],i=[],r=[];function a(m){S.camera=m,t.length=0,i.length=0,r.length=0}function o(m){t.push(m)}function g(m){i.push(m)}function R(m){r.push(m)}function _(){n.setup(t)}function x(m){n.setupView(t,m)}const S={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:n,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:S,setupLights:_,setupLightsView:x,pushLight:o,pushShadow:g,pushLightProbeGrid:R}}function q_(e){let n=new WeakMap;function t(r,a=0){const o=n.get(r);let g;return o===void 0?(g=new ec(e),n.set(r,[g])):a>=o.length?(g=new ec(e),o.push(g)):g=o[a],g}function i(){n=new WeakMap}return{get:t,dispose:i}}const Y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
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
}`,j_=[new Ie(1,0,0),new Ie(-1,0,0),new Ie(0,1,0),new Ie(0,-1,0),new Ie(0,0,1),new Ie(0,0,-1)],$_=[new Ie(0,-1,0),new Ie(0,-1,0),new Ie(0,0,1),new Ie(0,0,-1),new Ie(0,-1,0),new Ie(0,-1,0)],tc=new ti,oa=new Ie,Br=new Ie;function Z_(e,n,t){let i=new Ac;const r=new nn,a=new nn,o=new ln,g=new pd,R=new hd,_={},x=t.maxTextureSize,S={[fa]:hn,[hn]:fa,[En]:En},m=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nn},radius:{value:4}},vertexShader:Y_,fragmentShader:K_}),b=m.clone();b.defines.HORIZONTAL_PASS=1;const P=new mi;P.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mn(P,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Va;let l=this.type;this.render=function(h,w,f){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||h.length===0)return;this.type===md&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Va);const v=e.getRenderTarget(),I=e.getActiveCubeFace(),B=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Vn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=l!==this.type;q&&w.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach($=>$.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,$=h.length;F<$;F++){const K=h[F],Q=K.shadow;if(Q===void 0){gt("WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const oe=Q.getFrameExtents();r.multiply(oe),a.copy(Q.mapSize),(r.x>x||r.y>x)&&(r.x>x&&(a.x=Math.floor(x/oe.x),r.x=a.x*oe.x,Q.mapSize.x=a.x),r.y>x&&(a.y=Math.floor(x/oe.y),r.y=a.y*oe.y,Q.mapSize.y=a.y));const ie=e.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=ie,Q.map===null||q===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===la){if(K.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new xn(r.x,r.y,{format:Di,type:kn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Q.map.texture.name=K.name+".shadowMap",Q.map.depthTexture=new za(r.x,r.y,Zn),Q.map.depthTexture.name=K.name+".shadowMapDepth",Q.map.depthTexture.format=Ii,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=pi,Q.map.depthTexture.magFilter=pi}else K.isPointLight?(Q.map=new Qc(r.x),Q.map.depthTexture=new _d(r.x,_i)):(Q.map=new xn(r.x,r.y),Q.map.depthTexture=new za(r.x,r.y,_i)),Q.map.depthTexture.name=K.name+".shadowMap",Q.map.depthTexture.format=Ii,this.type===Va?(Q.map.depthTexture.compareFunction=ie?io:ao,Q.map.depthTexture.minFilter=pn,Q.map.depthTexture.magFilter=pn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=pi,Q.map.depthTexture.magFilter=pi);Q.camera.updateProjectionMatrix()}Q.map.isWebGLCubeRenderTarget!==!0&&(Q.map.width!==r.x||Q.map.height!==r.y)&&Q.map.setSize(r.x,r.y);const se=Q.map.isWebGLCubeRenderTarget?6:Q.getViewportCount();K.isPointLight!==!0&&Q.updateMatrices(K,f);for(let ce=0;ce<se;ce++){const Ye=Q.getCamera(ce);if(K.isPointLight){const Ve=Q.camera,ct=Q.matrix,Re=K.distance||Ve.far;Re!==Ve.far&&(Ve.far=Re,Ve.updateProjectionMatrix()),oa.setFromMatrixPosition(K.matrixWorld),Ve.position.copy(oa),Br.copy(Ve.position),Br.add(j_[ce]),Ve.up.copy($_[ce]),Ve.lookAt(Br),Ve.updateMatrixWorld(),ct.makeTranslation(-oa.x,-oa.y,-oa.z),tc.multiplyMatrices(Ve.projectionMatrix,Ve.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(tc,Ve.coordinateSystem,Ve.reversedDepth)}if(Q.map.isWebGLCubeRenderTarget)e.setRenderTarget(Q.map,ce),e.clear();else{ce===0&&(e.setRenderTarget(Q.map),e.clear());const Ve=Q.getViewport(ce);o.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),k.viewport(o)}i=Q.getFrustum(ce),M(w,f,Ye,K,this.type)}Q.isPointLightShadow!==!0&&this.type===la&&D(Q,f),Q.needsUpdate=!1}l=this.type,p.needsUpdate=!1,e.setRenderTarget(v,I,B)};function D(h,w){const f=n.update(y);m.defines.VSM_SAMPLES!==h.blurSamples&&(m.defines.VSM_SAMPLES=h.blurSamples,b.defines.VSM_SAMPLES=h.blurSamples,m.needsUpdate=!0,b.needsUpdate=!0),h.mapPass===null?h.mapPass=new xn(r.x,r.y,{format:Di,type:kn}):(h.mapPass.width!==h.map.width||h.mapPass.height!==h.map.height)&&h.mapPass.setSize(h.map.width,h.map.height),m.uniforms.shadow_pass.value=h.map.depthTexture,m.uniforms.resolution.value.set(h.map.width,h.map.height),m.uniforms.radius.value=h.radius,e.setRenderTarget(h.mapPass),e.clear(),e.renderBufferDirect(w,null,f,m,y,null),b.uniforms.shadow_pass.value=h.mapPass.texture,b.uniforms.resolution.value.set(h.map.width,h.map.height),b.uniforms.radius.value=h.radius,e.setRenderTarget(h.map),e.clear(),e.renderBufferDirect(w,null,f,b,y,null)}function U(h,w,f,v){let I=null;const B=f.isPointLight===!0?h.customDistanceMaterial:h.customDepthMaterial;if(B!==void 0)I=B;else if(I=f.isPointLight===!0?R:g,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=I.uuid,q=w.uuid;let F=_[k];F===void 0&&(F={},_[k]=F);let $=F[q];$===void 0&&($=I.clone(),F[q]=$,w.addEventListener("dispose",A)),I=$}if(I.visible=w.visible,I.wireframe=w.wireframe,v===la?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:S[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,I.map=w.map,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,f.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const k=e.properties.get(I);k.light=f}return I}function M(h,w,f,v,I){if(h.visible===!1)return;if(h.layers.test(w.layers)&&(h.isMesh||h.isLine||h.isPoints)&&(h.castShadow||h.receiveShadow&&I===la)&&(!h.frustumCulled||h.intersectsFrustum(i))){h.modelViewMatrix.multiplyMatrices(f.matrixWorldInverse,h.matrixWorld);const q=n.update(h),F=h.material;if(Array.isArray(F)){const $=q.groups;for(let K=0,Q=$.length;K<Q;K++){const oe=$[K],ie=F[oe.materialIndex];if(ie&&ie.visible){const se=U(h,ie,v,I);h.onBeforeShadow(e,h,w,f,q,se,oe),e.renderBufferDirect(f,null,q,se,h,oe),h.onAfterShadow(e,h,w,f,q,se,oe)}}}else if(F.visible){const $=U(h,F,v,I);h.onBeforeShadow(e,h,w,f,q,$,null),e.renderBufferDirect(f,null,q,$,h,null),h.onAfterShadow(e,h,w,f,q,$,null)}}const k=h.children;for(let q=0,F=k.length;q<F;q++)M(k[q],w,f,v,I)}function A(h){h.target.removeEventListener("dispose",A);for(const f in _){const v=_[f],I=h.target.uuid;I in v&&(v[I].dispose(),delete v[I])}}}function Q_(e,n){function t(){let L=!1;const he=new ln;let J=null;const pe=new ln(0,0,0,0);return{setMask:function(xe){J!==xe&&!L&&(e.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){L=xe},setClear:function(xe,ae,Oe,Le,St){St===!0&&(xe*=Le,ae*=Le,Oe*=Le),he.set(xe,ae,Oe,Le),pe.equals(he)===!1&&(e.clearColor(xe,ae,Oe,Le),pe.copy(he))},reset:function(){L=!1,J=null,pe.set(-1,0,0,0)}}}function i(){let L=!1,he=!1,J=null,pe=null,xe=null;return{setReversed:function(ae){if(he!==ae){const Oe=n.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),he=ae;const Le=xe;xe=null,this.setClear(Le)}},getReversed:function(){return he},setTest:function(ae){ae?te(e.DEPTH_TEST):Me(e.DEPTH_TEST)},setMask:function(ae){J!==ae&&!L&&(e.depthMask(ae),J=ae)},setFunc:function(ae){if(he&&(ae=Jd[ae]),pe!==ae){switch(ae){case yd:e.depthFunc(e.NEVER);break;case Pd:e.depthFunc(e.ALWAYS);break;case Cd:e.depthFunc(e.LESS);break;case jo:e.depthFunc(e.LEQUAL);break;case wd:e.depthFunc(e.EQUAL);break;case Rd:e.depthFunc(e.GEQUAL);break;case Ad:e.depthFunc(e.GREATER);break;case bd:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}pe=ae}},setLocked:function(ae){L=ae},setClear:function(ae){xe!==ae&&(xe=ae,he&&(ae=1-ae),e.clearDepth(ae))},reset:function(){L=!1,J=null,pe=null,xe=null,he=!1}}}function r(){let L=!1,he=null,J=null,pe=null,xe=null,ae=null,Oe=null,Le=null,St=null;return{setTest:function(rt){L||(rt?te(e.STENCIL_TEST):Me(e.STENCIL_TEST))},setMask:function(rt){he!==rt&&!L&&(e.stencilMask(rt),he=rt)},setFunc:function(rt,Kt,un){(J!==rt||pe!==Kt||xe!==un)&&(e.stencilFunc(rt,Kt,un),J=rt,pe=Kt,xe=un)},setOp:function(rt,Kt,un){(ae!==rt||Oe!==Kt||Le!==un)&&(e.stencilOp(rt,Kt,un),ae=rt,Oe=Kt,Le=un)},setLocked:function(rt){L=rt},setClear:function(rt){St!==rt&&(e.clearStencil(rt),St=rt)},reset:function(){L=!1,he=null,J=null,pe=null,xe=null,ae=null,Oe=null,Le=null,St=null}}}const a=new t,o=new i,g=new r,R=new WeakMap,_=new WeakMap;let x={},S={},m={},b=new WeakMap,P=[],y=null,p=!1,l=null,D=null,U=null,M=null,A=null,h=null,w=null,f=new wt(0,0,0),v=0,I=!1,B=null,k=null,q=null,F=null,$=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const ie=e.getParameter(e.VERSION);ie.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Q=oe>=1):ie.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Q=oe>=2);let se=null,ce={};const Ye=e.getParameter(e.SCISSOR_BOX),Ve=e.getParameter(e.VIEWPORT),ct=new ln().fromArray(Ye),Re=new ln().fromArray(Ve);function Be(L,he,J,pe){const xe=new Uint8Array(4),ae=e.createTexture();e.bindTexture(L,ae),e.texParameteri(L,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(L,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Oe=0;Oe<J;Oe++)L===e.TEXTURE_3D||L===e.TEXTURE_2D_ARRAY?e.texImage3D(he,0,e.RGBA,1,1,pe,0,e.RGBA,e.UNSIGNED_BYTE,xe):e.texImage2D(he+Oe,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,xe);return ae}const Y={};Y[e.TEXTURE_2D]=Be(e.TEXTURE_2D,e.TEXTURE_2D,1),Y[e.TEXTURE_CUBE_MAP]=Be(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[e.TEXTURE_2D_ARRAY]=Be(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Y[e.TEXTURE_3D]=Be(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),g.setClear(0),te(e.DEPTH_TEST),o.setFunc(jo),je(!1),dt($o),te(e.CULL_FACE),Ze(Vn);function te(L){x[L]!==!0&&(e.enable(L),x[L]=!0)}function Me(L){x[L]!==!1&&(e.disable(L),x[L]=!1)}function We(L,he){return m[L]!==he?(e.bindFramebuffer(L,he),m[L]=he,L===e.DRAW_FRAMEBUFFER&&(m[e.FRAMEBUFFER]=he),L===e.FRAMEBUFFER&&(m[e.DRAW_FRAMEBUFFER]=he),!0):!1}function fe(L,he){let J=P,pe=!1;if(L){J=b.get(he),J===void 0&&(J=[],b.set(he,J));const xe=L.textures;if(J.length!==xe.length||J[0]!==e.COLOR_ATTACHMENT0){for(let ae=0,Oe=xe.length;ae<Oe;ae++)J[ae]=e.COLOR_ATTACHMENT0+ae;J.length=xe.length,pe=!0}}else J[0]!==e.BACK&&(J[0]=e.BACK,pe=!0);pe&&e.drawBuffers(J)}function be(L){return y!==L?(e.useProgram(L),y=L,!0):!1}const at={[aa]:e.FUNC_ADD,[ku]:e.FUNC_SUBTRACT,[Vu]:e.FUNC_REVERSE_SUBTRACT};at[ef]=e.MIN,at[tf]=e.MAX;const ke={[id]:e.ZERO,[nd]:e.ONE,[td]:e.SRC_COLOR,[ed]:e.SRC_ALPHA,[Ju]:e.SRC_ALPHA_SATURATE,[Qu]:e.DST_COLOR,[Zu]:e.DST_ALPHA,[$u]:e.ONE_MINUS_SRC_COLOR,[ju]:e.ONE_MINUS_SRC_ALPHA,[Ku]:e.ONE_MINUS_DST_COLOR,[Yu]:e.ONE_MINUS_DST_ALPHA,[qu]:e.CONSTANT_COLOR,[Xu]:e.ONE_MINUS_CONSTANT_COLOR,[zu]:e.CONSTANT_ALPHA,[Wu]:e.ONE_MINUS_CONSTANT_ALPHA};function Ze(L,he,J,pe,xe,ae,Oe,Le,St,rt){if(L===Vn){p===!0&&(Me(e.BLEND),p=!1);return}if(p===!1&&(te(e.BLEND),p=!0),L!==Dd){if(L!==l||rt!==I){if((D!==aa||A!==aa)&&(e.blendEquation(e.FUNC_ADD),D=aa,A=aa),rt)switch(L){case ka:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Jo:e.blendFunc(e.ONE,e.ONE);break;case Qo:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zo:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:yt("WebGLState: Invalid blending: ",L);break}else switch(L){case ka:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Jo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Qo:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zo:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",L);break}U=null,M=null,h=null,w=null,f.set(0,0,0),v=0,l=L,I=rt}return}xe=xe||he,ae=ae||J,Oe=Oe||pe,(he!==D||xe!==A)&&(e.blendEquationSeparate(at[he],at[xe]),D=he,A=xe),(J!==U||pe!==M||ae!==h||Oe!==w)&&(e.blendFuncSeparate(ke[J],ke[pe],ke[ae],ke[Oe]),U=J,M=pe,h=ae,w=Oe),(Le.equals(f)===!1||St!==v)&&(e.blendColor(Le.r,Le.g,Le.b,St),f.copy(Le),v=St),l=L,I=!1}function Ke(L,he){L.side===En?Me(e.CULL_FACE):te(e.CULL_FACE);let J=L.side===hn;he&&(J=!J),je(J),L.blending===ka&&L.transparent===!1?Ze(Vn):Ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),a.setMask(L.colorWrite);const pe=L.stencilWrite;g.setTest(pe),pe&&(g.setMask(L.stencilWriteMask),g.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),g.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Yt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(e.SAMPLE_ALPHA_TO_COVERAGE):Me(e.SAMPLE_ALPHA_TO_COVERAGE)}function je(L){B!==L&&(L?e.frontFace(e.CW):e.frontFace(e.CCW),B=L)}function dt(L){L!==Ld?(te(e.CULL_FACE),L!==k&&(L===$o?e.cullFace(e.BACK):L===Nd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Me(e.CULL_FACE),k=L}function lt(L){L!==q&&(Q&&e.lineWidth(L),q=L)}function Yt(L,he,J){L?(te(e.POLYGON_OFFSET_FILL),(F!==he||$!==J)&&(F=he,$=J,o.getReversed()&&(he=-he),e.polygonOffset(he,J))):Me(e.POLYGON_OFFSET_FILL)}function vt(L){L?te(e.SCISSOR_TEST):Me(e.SCISSOR_TEST)}function ht(L){L===void 0&&(L=e.TEXTURE0+K-1),se!==L&&(e.activeTexture(L),se=L)}function N(L,he,J){J===void 0&&(se===null?J=e.TEXTURE0+K-1:J=se);let pe=ce[J];pe===void 0&&(pe={type:void 0,texture:void 0},ce[J]=pe),(pe.type!==L||pe.texture!==he)&&(se!==J&&(e.activeTexture(J),se=J),e.bindTexture(L,he||Y[L]),pe.type=L,pe.texture=he)}function Gt(){const L=ce[se];L!==void 0&&L.type!==void 0&&(e.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ft(){try{e.compressedTexImage2D(...arguments)}catch(L){yt("WebGLState:",L)}}function T(){try{e.compressedTexImage3D(...arguments)}catch(L){yt("WebGLState:",L)}}function s(){try{e.texSubImage2D(...arguments)}catch(L){yt("WebGLState:",L)}}function G(){try{e.texSubImage3D(...arguments)}catch(L){yt("WebGLState:",L)}}function X(){try{e.compressedTexSubImage2D(...arguments)}catch(L){yt("WebGLState:",L)}}function j(){try{e.compressedTexSubImage3D(...arguments)}catch(L){yt("WebGLState:",L)}}function ue(){try{e.texStorage2D(...arguments)}catch(L){yt("WebGLState:",L)}}function _e(){try{e.texStorage3D(...arguments)}catch(L){yt("WebGLState:",L)}}function Z(){try{e.texImage2D(...arguments)}catch(L){yt("WebGLState:",L)}}function ee(){try{e.texImage3D(...arguments)}catch(L){yt("WebGLState:",L)}}function ge(L){return S[L]!==void 0?S[L]:e.getParameter(L)}function Fe(L,he){S[L]!==he&&(e.pixelStorei(L,he),S[L]=he)}function ve(L){ct.equals(L)===!1&&(e.scissor(L.x,L.y,L.z,L.w),ct.copy(L))}function me(L){Re.equals(L)===!1&&(e.viewport(L.x,L.y,L.z,L.w),Re.copy(L))}function De(L,he){let J=_.get(he);J===void 0&&(J=new WeakMap,_.set(he,J));let pe=J.get(L);pe===void 0&&(pe=e.getUniformBlockIndex(he,L.name),J.set(L,pe))}function Ge(L,he){const pe=_.get(he).get(L);R.get(he)!==pe&&(e.uniformBlockBinding(he,pe,L.__bindingPointIndex),R.set(he,pe))}function $e(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),x={},S={},se=null,ce={},m={},b=new WeakMap,P=[],y=null,p=!1,l=null,D=null,U=null,M=null,A=null,h=null,w=null,f=new wt(0,0,0),v=0,I=!1,B=null,k=null,q=null,F=null,$=null,ct.set(0,0,e.canvas.width,e.canvas.height),Re.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),g.reset()}return{buffers:{color:a,depth:o,stencil:g},enable:te,disable:Me,bindFramebuffer:We,drawBuffers:fe,useProgram:be,setBlending:Ze,setMaterial:Ke,setFlipSided:je,setCullFace:dt,setLineWidth:lt,setPolygonOffset:Yt,setScissorTest:vt,activeTexture:ht,bindTexture:N,unbindTexture:Gt,compressedTexImage2D:ft,compressedTexImage3D:T,texImage2D:Z,texImage3D:ee,pixelStorei:Fe,getParameter:ge,updateUBOMapping:De,uniformBlockBinding:Ge,texStorage2D:ue,texStorage3D:_e,texSubImage2D:s,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:j,scissor:ve,viewport:me,reset:$e}}function J_(e,n,t,i,r,a,o){const g=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,R=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new nn,x=new WeakMap,S=new Set;let m;const b=new WeakMap;let P=!1;try{P=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,s){return P?new OffscreenCanvas(T,s):Yd("canvas")}function p(T,s,G){let X=1;const j=ft(T);if((j.width>G||j.height>G)&&(X=G/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const ue=Math.floor(X*j.width),_e=Math.floor(X*j.height);m===void 0&&(m=y(ue,_e));const Z=s?y(ue,_e):m;return Z.width=ue,Z.height=_e,Z.getContext("2d").drawImage(T,0,0,ue,_e),gt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+ue+"x"+_e+")."),Z}else return"data"in T&&gt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function l(T){return T.generateMipmaps}function D(T){e.generateMipmap(T)}function U(T){return T.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?e.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(T,s,G,X,j,ue=!1){if(T!==null){if(e[T]!==void 0)return e[T];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _e;X&&(_e=n.get("EXT_texture_norm16"),_e||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=s;if(s===e.RED&&(G===e.FLOAT&&(Z=e.R32F),G===e.HALF_FLOAT&&(Z=e.R16F),G===e.UNSIGNED_BYTE&&(Z=e.R8),G===e.UNSIGNED_SHORT&&_e&&(Z=_e.R16_EXT),G===e.SHORT&&_e&&(Z=_e.R16_SNORM_EXT)),s===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(Z=e.R8UI),G===e.UNSIGNED_SHORT&&(Z=e.R16UI),G===e.UNSIGNED_INT&&(Z=e.R32UI),G===e.BYTE&&(Z=e.R8I),G===e.SHORT&&(Z=e.R16I),G===e.INT&&(Z=e.R32I)),s===e.RG&&(G===e.FLOAT&&(Z=e.RG32F),G===e.HALF_FLOAT&&(Z=e.RG16F),G===e.UNSIGNED_BYTE&&(Z=e.RG8),G===e.UNSIGNED_SHORT&&_e&&(Z=_e.RG16_EXT),G===e.SHORT&&_e&&(Z=_e.RG16_SNORM_EXT)),s===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(Z=e.RG8UI),G===e.UNSIGNED_SHORT&&(Z=e.RG16UI),G===e.UNSIGNED_INT&&(Z=e.RG32UI),G===e.BYTE&&(Z=e.RG8I),G===e.SHORT&&(Z=e.RG16I),G===e.INT&&(Z=e.RG32I)),s===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(Z=e.RGB8UI),G===e.UNSIGNED_SHORT&&(Z=e.RGB16UI),G===e.UNSIGNED_INT&&(Z=e.RGB32UI),G===e.BYTE&&(Z=e.RGB8I),G===e.SHORT&&(Z=e.RGB16I),G===e.INT&&(Z=e.RGB32I)),s===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(Z=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(Z=e.RGBA16UI),G===e.UNSIGNED_INT&&(Z=e.RGBA32UI),G===e.BYTE&&(Z=e.RGBA8I),G===e.SHORT&&(Z=e.RGBA16I),G===e.INT&&(Z=e.RGBA32I)),s===e.RGB&&(G===e.UNSIGNED_SHORT&&_e&&(Z=_e.RGB16_EXT),G===e.SHORT&&_e&&(Z=_e.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(Z=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(Z=e.R11F_G11F_B10F)),s===e.RGBA){const ee=ue?Bc:Dt.getTransfer(j);G===e.FLOAT&&(Z=e.RGBA32F),G===e.HALF_FLOAT&&(Z=e.RGBA16F),G===e.UNSIGNED_BYTE&&(Z=ee===Ct?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&_e&&(Z=_e.RGBA16_EXT),G===e.SHORT&&_e&&(Z=_e.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(Z=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(Z=e.RGB5_A1)}return(Z===e.R16F||Z===e.R32F||Z===e.RG16F||Z===e.RG32F||Z===e.RGBA16F||Z===e.RGBA32F)&&n.get("EXT_color_buffer_float"),Z}function A(T,s){let G;return T?s===null||s===_i||s===pa?G=e.DEPTH24_STENCIL8:s===Zn?G=e.DEPTH32F_STENCIL8:s===qa&&(G=e.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):s===null||s===_i||s===pa?G=e.DEPTH_COMPONENT24:s===Zn?G=e.DEPTH_COMPONENT32F:s===qa&&(G=e.DEPTH_COMPONENT16),G}function h(T,s){return l(T)===!0||T.isFramebufferTexture&&T.minFilter!==pi&&T.minFilter!==pn?Math.log2(Math.max(s.width,s.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?s.mipmaps.length:1}function w(T){const s=T.target;s.removeEventListener("dispose",w),v(s),s.isVideoTexture&&x.delete(s),s.isHTMLTexture&&S.delete(s)}function f(T){const s=T.target;s.removeEventListener("dispose",f),B(s)}function v(T){const s=i.get(T);if(s.__webglInit===void 0)return;const G=T.source,X=b.get(G);if(X){const j=X[s.__cacheKey];j.usedTimes--,j.usedTimes===0&&I(T),Object.keys(X).length===0&&b.delete(G)}i.remove(T)}function I(T){const s=i.get(T);e.deleteTexture(s.__webglTexture);const G=T.source,X=b.get(G);delete X[s.__cacheKey],o.memory.textures--}function B(T){const s=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(s.__webglFramebuffer[X]))for(let j=0;j<s.__webglFramebuffer[X].length;j++)e.deleteFramebuffer(s.__webglFramebuffer[X][j]);else e.deleteFramebuffer(s.__webglFramebuffer[X]);s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer[X])}else{if(Array.isArray(s.__webglFramebuffer))for(let X=0;X<s.__webglFramebuffer.length;X++)e.deleteFramebuffer(s.__webglFramebuffer[X]);else e.deleteFramebuffer(s.__webglFramebuffer);if(s.__webglDepthbuffer&&e.deleteRenderbuffer(s.__webglDepthbuffer),s.__webglMultisampledFramebuffer&&e.deleteFramebuffer(s.__webglMultisampledFramebuffer),s.__webglColorRenderbuffer)for(let X=0;X<s.__webglColorRenderbuffer.length;X++)s.__webglColorRenderbuffer[X]&&e.deleteRenderbuffer(s.__webglColorRenderbuffer[X]);s.__webglDepthRenderbuffer&&e.deleteRenderbuffer(s.__webglDepthRenderbuffer)}const G=T.textures;for(let X=0,j=G.length;X<j;X++){const ue=i.get(G[X]);ue.__webglTexture&&(e.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(G[X])}i.remove(T)}let k=0;function q(){k=0}function F(){return k}function $(T){k=T}function K(){const T=k;return T>=r.maxTextures&&gt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+r.maxTextures),k+=1,T}function Q(T){const s=[];return s.push(T.wrapS),s.push(T.wrapT),s.push(T.wrapR||0),s.push(T.magFilter),s.push(T.minFilter),s.push(T.anisotropy),s.push(T.internalFormat),s.push(T.format),s.push(T.type),s.push(T.generateMipmaps),s.push(T.premultiplyAlpha),s.push(T.flipY),s.push(T.unpackAlignment),s.push(T.colorSpace),s.join()}function oe(T,s){const G=i.get(T);if(T.isVideoTexture&&N(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&G.__version!==T.version){const X=T.image;if(X===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(G,T,s);return}}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+s)}function ie(T,s){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Me(G,T,s);return}else T.isExternalTexture&&(G.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+s)}function se(T,s){const G=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){Me(G,T,s);return}t.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+s)}function ce(T,s){const G=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&G.__version!==T.version){We(G,T,s);return}t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+s)}const Ye={[rd]:e.REPEAT,[Xr]:e.CLAMP_TO_EDGE,[ad]:e.MIRRORED_REPEAT},Ve={[pi]:e.NEAREST,[od]:e.NEAREST_MIPMAP_NEAREST,[Ia]:e.NEAREST_MIPMAP_LINEAR,[pn]:e.LINEAR,[Ar]:e.LINEAR_MIPMAP_NEAREST,[yi]:e.LINEAR_MIPMAP_LINEAR},ct={[fd]:e.NEVER,[dd]:e.ALWAYS,[ud]:e.LESS,[ao]:e.LEQUAL,[ld]:e.EQUAL,[io]:e.GEQUAL,[cd]:e.GREATER,[sd]:e.NOTEQUAL};function Re(T,s){if(s.type===Zn&&n.has("OES_texture_float_linear")===!1&&(s.magFilter===pn||s.magFilter===Ar||s.magFilter===Ia||s.magFilter===yi||s.minFilter===pn||s.minFilter===Ar||s.minFilter===Ia||s.minFilter===yi)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(T,e.TEXTURE_WRAP_S,Ye[s.wrapS]),e.texParameteri(T,e.TEXTURE_WRAP_T,Ye[s.wrapT]),(T===e.TEXTURE_3D||T===e.TEXTURE_2D_ARRAY)&&e.texParameteri(T,e.TEXTURE_WRAP_R,Ye[s.wrapR]),e.texParameteri(T,e.TEXTURE_MAG_FILTER,Ve[s.magFilter]),e.texParameteri(T,e.TEXTURE_MIN_FILTER,Ve[s.minFilter]),s.compareFunction&&(e.texParameteri(T,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(T,e.TEXTURE_COMPARE_FUNC,ct[s.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(s.magFilter===pi||s.minFilter!==Ia&&s.minFilter!==yi||s.type===Zn&&n.has("OES_texture_float_linear")===!1)return;if(s.anisotropy>1||i.get(s).__currentAnisotropy){const G=n.get("EXT_texture_filter_anisotropic");e.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(s.anisotropy,r.getMaxAnisotropy())),i.get(s).__currentAnisotropy=s.anisotropy}}}function Be(T,s){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,s.addEventListener("dispose",w));const X=s.source;let j=b.get(X);j===void 0&&(j={},b.set(X,j));const ue=Q(s);if(ue!==T.__cacheKey){j[ue]===void 0&&(j[ue]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,G=!0),j[ue].usedTimes++;const _e=j[T.__cacheKey];_e!==void 0&&(j[T.__cacheKey].usedTimes--,_e.usedTimes===0&&I(s)),T.__cacheKey=ue,T.__webglTexture=j[ue].texture}return G}function Y(T,s,G){return Math.floor(Math.floor(T/G)/s)}function te(T,s,G,X){const ue=T.updateRanges;if(ue.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,s.width,s.height,G,X,s.data);else{ue.sort((Fe,ve)=>Fe.start-ve.start);let _e=0;for(let Fe=1;Fe<ue.length;Fe++){const ve=ue[_e],me=ue[Fe],De=ve.start+ve.count,Ge=Y(me.start,s.width,4),$e=Y(ve.start,s.width,4);me.start<=De+1&&Ge===$e&&Y(me.start+me.count-1,s.width,4)===Ge?ve.count=Math.max(ve.count,me.start+me.count-ve.start):(++_e,ue[_e]=me)}ue.length=_e+1;const Z=t.getParameter(e.UNPACK_ROW_LENGTH),ee=t.getParameter(e.UNPACK_SKIP_PIXELS),ge=t.getParameter(e.UNPACK_SKIP_ROWS);t.pixelStorei(e.UNPACK_ROW_LENGTH,s.width);for(let Fe=0,ve=ue.length;Fe<ve;Fe++){const me=ue[Fe],De=Math.floor(me.start/4),Ge=Math.ceil(me.count/4),$e=De%s.width,L=Math.floor(De/s.width),he=Ge,J=1;t.pixelStorei(e.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(e.UNPACK_SKIP_ROWS,L),t.texSubImage2D(e.TEXTURE_2D,0,$e,L,he,J,G,X,s.data)}T.clearUpdateRanges(),t.pixelStorei(e.UNPACK_ROW_LENGTH,Z),t.pixelStorei(e.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(e.UNPACK_SKIP_ROWS,ge)}}function Me(T,s,G){let X=e.TEXTURE_2D;(s.isDataArrayTexture||s.isCompressedArrayTexture)&&(X=e.TEXTURE_2D_ARRAY),s.isData3DTexture&&(X=e.TEXTURE_3D);const j=Be(T,s),ue=s.source;t.bindTexture(X,T.__webglTexture,e.TEXTURE0+G);const _e=i.get(ue);if(ue.version!==_e.__version||j===!0){if(t.activeTexture(e.TEXTURE0+G),(typeof ImageBitmap<"u"&&s.image instanceof ImageBitmap)===!1){const J=Dt.getPrimaries(Dt.workingColorSpace),pe=s.colorSpace===Pi?null:Dt.getPrimaries(s.colorSpace),xe=s.colorSpace===Pi||J===pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment);let ee=p(s.image,!1,r.maxTextureSize);ee=Gt(s,ee);const ge=a.convert(s.format,s.colorSpace),Fe=a.convert(s.type);let ve=M(s.internalFormat,ge,Fe,s.normalized,s.colorSpace,s.isVideoTexture);Re(X,s);let me;const De=s.mipmaps,Ge=s.isVideoTexture!==!0,$e=_e.__version===void 0||j===!0,L=ue.dataReady,he=h(s,ee);if(s.isDepthTexture)ve=A(s.format===Li,s.type),$e&&(Ge?t.texStorage2D(e.TEXTURE_2D,1,ve,ee.width,ee.height):t.texImage2D(e.TEXTURE_2D,0,ve,ee.width,ee.height,0,ge,Fe,null));else if(s.isDataTexture)if(De.length>0){Ge&&$e&&t.texStorage2D(e.TEXTURE_2D,he,ve,De[0].width,De[0].height);for(let J=0,pe=De.length;J<pe;J++)me=De[J],Ge?L&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,me.width,me.height,ge,Fe,me.data):t.texImage2D(e.TEXTURE_2D,J,ve,me.width,me.height,0,ge,Fe,me.data);s.generateMipmaps=!1}else Ge?($e&&t.texStorage2D(e.TEXTURE_2D,he,ve,ee.width,ee.height),L&&te(s,ee,ge,Fe)):t.texImage2D(e.TEXTURE_2D,0,ve,ee.width,ee.height,0,ge,Fe,ee.data);else if(s.isCompressedTexture)if(s.isCompressedArrayTexture){Ge&&$e&&t.texStorage3D(e.TEXTURE_2D_ARRAY,he,ve,De[0].width,De[0].height,ee.depth);for(let J=0,pe=De.length;J<pe;J++)if(me=De[J],s.format!==Hn)if(ge!==null)if(Ge){if(L)if(s.layerUpdates.size>0){const xe=Ls(me.width,me.height,s.format,s.type);for(const ae of s.layerUpdates){const Oe=me.data.subarray(ae*xe/me.data.BYTES_PER_ELEMENT,(ae+1)*xe/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,ae,me.width,me.height,1,ge,Oe)}}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,me.width,me.height,ee.depth,ge,me.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,J,ve,me.width,me.height,ee.depth,0,me.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?L&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,J,0,0,0,me.width,me.height,ee.depth,ge,Fe,me.data):t.texImage3D(e.TEXTURE_2D_ARRAY,J,ve,me.width,me.height,ee.depth,0,ge,Fe,me.data);s.layerUpdates.size>0&&s.clearLayerUpdates()}else{Ge&&$e&&t.texStorage2D(e.TEXTURE_2D,he,ve,De[0].width,De[0].height);for(let J=0,pe=De.length;J<pe;J++)me=De[J],s.format!==Hn?ge!==null?Ge?L&&t.compressedTexSubImage2D(e.TEXTURE_2D,J,0,0,me.width,me.height,ge,me.data):t.compressedTexImage2D(e.TEXTURE_2D,J,ve,me.width,me.height,0,me.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?L&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,me.width,me.height,ge,Fe,me.data):t.texImage2D(e.TEXTURE_2D,J,ve,me.width,me.height,0,ge,Fe,me.data)}else if(s.isDataArrayTexture)if(Ge){if($e&&t.texStorage3D(e.TEXTURE_2D_ARRAY,he,ve,ee.width,ee.height,ee.depth),L)if(s.layerUpdates.size>0){const J=Ls(ee.width,ee.height,s.format,s.type);for(const pe of s.layerUpdates){const xe=ee.data.subarray(pe*J/ee.data.BYTES_PER_ELEMENT,(pe+1)*J/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,pe,ee.width,ee.height,1,ge,Fe,xe)}s.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ge,Fe,ee.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,ve,ee.width,ee.height,ee.depth,0,ge,Fe,ee.data);else if(s.isData3DTexture)Ge?($e&&t.texStorage3D(e.TEXTURE_3D,he,ve,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ge,Fe,ee.data)):t.texImage3D(e.TEXTURE_3D,0,ve,ee.width,ee.height,ee.depth,0,ge,Fe,ee.data);else if(s.isFramebufferTexture){if($e)if(Ge)t.texStorage2D(e.TEXTURE_2D,he,ve,ee.width,ee.height);else{let J=ee.width,pe=ee.height;for(let xe=0;xe<he;xe++)t.texImage2D(e.TEXTURE_2D,xe,ve,J,pe,0,ge,Fe,null),J>>=1,pe>>=1}}else if(s.isHTMLTexture){if("texElementImage2D"in e){const J=e.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),ee.parentNode!==J){J.appendChild(ee),S.add(s),J.onpaint=pe=>{const xe=pe.changedElements;for(const ae of S)xe.includes(ae.image)&&(ae.needsUpdate=!0)},J.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,ee);else{const xe=e.RGBA,ae=e.RGBA,Oe=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,xe,ae,Oe,ee)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ge&&$e){const J=ft(De[0]);t.texStorage2D(e.TEXTURE_2D,he,ve,J.width,J.height)}for(let J=0,pe=De.length;J<pe;J++)me=De[J],Ge?L&&t.texSubImage2D(e.TEXTURE_2D,J,0,0,ge,Fe,me):t.texImage2D(e.TEXTURE_2D,J,ve,ge,Fe,me);s.generateMipmaps=!1}else if(Ge){if($e){const J=ft(ee);t.texStorage2D(e.TEXTURE_2D,he,ve,J.width,J.height)}L&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ge,Fe,ee)}else t.texImage2D(e.TEXTURE_2D,0,ve,ge,Fe,ee);l(s)&&D(X),_e.__version=ue.version,s.onUpdate&&s.onUpdate(s)}T.__version=s.version}function We(T,s,G){if(s.image.length!==6)return;const X=Be(T,s),j=s.source;t.bindTexture(e.TEXTURE_CUBE_MAP,T.__webglTexture,e.TEXTURE0+G);const ue=i.get(j);if(j.version!==ue.__version||X===!0){t.activeTexture(e.TEXTURE0+G);const _e=Dt.getPrimaries(Dt.workingColorSpace),Z=s.colorSpace===Pi?null:Dt.getPrimaries(s.colorSpace),ee=s.colorSpace===Pi||_e===Z?e.NONE:e.BROWSER_DEFAULT_WEBGL;t.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,s.flipY),t.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.premultiplyAlpha),t.pixelStorei(e.UNPACK_ALIGNMENT,s.unpackAlignment),t.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const ge=s.isCompressedTexture||s.image[0].isCompressedTexture,Fe=s.image[0]&&s.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!ge&&!Fe?ve[ae]=p(s.image[ae],!0,r.maxCubemapSize):ve[ae]=Fe?s.image[ae].image:s.image[ae],ve[ae]=Gt(s,ve[ae]);const me=ve[0],De=a.convert(s.format,s.colorSpace),Ge=a.convert(s.type),$e=M(s.internalFormat,De,Ge,s.normalized,s.colorSpace),L=s.isVideoTexture!==!0,he=ue.__version===void 0||X===!0,J=j.dataReady;let pe=h(s,me);Re(e.TEXTURE_CUBE_MAP,s);let xe;if(ge){L&&he&&t.texStorage2D(e.TEXTURE_CUBE_MAP,pe,$e,me.width,me.height);for(let ae=0;ae<6;ae++){xe=ve[ae].mipmaps;for(let Oe=0;Oe<xe.length;Oe++){const Le=xe[Oe];s.format!==Hn?De!==null?L?J&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Le.width,Le.height,De,Le.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,$e,Le.width,Le.height,0,Le.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Le.width,Le.height,De,Ge,Le.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,$e,Le.width,Le.height,0,De,Ge,Le.data)}}}else{if(xe=s.mipmaps,L&&he){xe.length>0&&pe++;const ae=ft(ve[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,pe,$e,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Fe){L?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,De,Ge,ve[ae].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,ve[ae].width,ve[ae].height,0,De,Ge,ve[ae].data);for(let Oe=0;Oe<xe.length;Oe++){const St=xe[Oe].image[ae].image;L?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,St.width,St.height,De,Ge,St.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,$e,St.width,St.height,0,De,Ge,St.data)}}else{L?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,De,Ge,ve[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,$e,De,Ge,ve[ae]);for(let Oe=0;Oe<xe.length;Oe++){const Le=xe[Oe];L?J&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,De,Ge,Le.image[ae]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,$e,De,Ge,Le.image[ae])}}}l(s)&&D(e.TEXTURE_CUBE_MAP),ue.__version=j.version,s.onUpdate&&s.onUpdate(s)}T.__version=s.version}function fe(T,s,G,X,j,ue){const _e=a.convert(G.format,G.colorSpace),Z=a.convert(G.type),ee=M(G.internalFormat,_e,Z,G.normalized,G.colorSpace),ge=i.get(s),Fe=i.get(G);if(Fe.__renderTarget=s,!ge.__hasExternalTextures){const ve=Math.max(1,s.width>>ue),me=Math.max(1,s.height>>ue);j===e.TEXTURE_3D||j===e.TEXTURE_2D_ARRAY?t.texImage3D(j,ue,ee,ve,me,s.depth,0,_e,Z,null):t.texImage2D(j,ue,ee,ve,me,0,_e,Z,null)}t.bindFramebuffer(e.FRAMEBUFFER,T),ht(s)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,X,j,Fe.__webglTexture,0,vt(s)):(j===e.TEXTURE_2D||j>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,X,j,Fe.__webglTexture,ue),t.bindFramebuffer(e.FRAMEBUFFER,null)}function be(T,s,G){if(e.bindRenderbuffer(e.RENDERBUFFER,T),s.depthBuffer){const X=s.depthTexture,j=X&&X.isDepthTexture?X.type:null,ue=A(s.stencilBuffer,j),_e=s.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;ht(s)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt(s),ue,s.width,s.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt(s),ue,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,ue,s.width,s.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,_e,e.RENDERBUFFER,T)}else{const X=s.textures;for(let j=0;j<X.length;j++){const ue=X[j],_e=a.convert(ue.format,ue.colorSpace),Z=a.convert(ue.type),ee=M(ue.internalFormat,_e,Z,ue.normalized,ue.colorSpace);ht(s)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt(s),ee,s.width,s.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt(s),ee,s.width,s.height):e.renderbufferStorage(e.RENDERBUFFER,ee,s.width,s.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function at(T,s,G){const X=s.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(e.FRAMEBUFFER,T),!(s.depthTexture&&s.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const j=i.get(s.depthTexture);if(j.__renderTarget=s,(!j.__webglTexture||s.depthTexture.image.width!==s.width||s.depthTexture.image.height!==s.height)&&(s.depthTexture.image.width=s.width,s.depthTexture.image.height=s.height,s.depthTexture.needsUpdate=!0),X){if(j.__webglInit===void 0&&(j.__webglInit=!0,s.depthTexture.addEventListener("dispose",w)),j.__webglTexture===void 0){j.__webglTexture=e.createTexture(),t.bindTexture(e.TEXTURE_CUBE_MAP,j.__webglTexture),Re(e.TEXTURE_CUBE_MAP,s.depthTexture);const ge=a.convert(s.depthTexture.format),Fe=a.convert(s.depthTexture.type);let ve;s.depthTexture.format===Ii?ve=e.DEPTH_COMPONENT24:s.depthTexture.format===Li&&(ve=e.DEPTH24_STENCIL8);for(let me=0;me<6;me++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,s.width,s.height,0,ge,Fe,null)}}else oe(s.depthTexture,0);const ue=j.__webglTexture,_e=vt(s),Z=X?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,ee=s.depthTexture.format===Li?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(s.depthTexture.format===Ii)ht(s)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,Z,ue,0,_e):e.framebufferTexture2D(e.FRAMEBUFFER,ee,Z,ue,0);else if(s.depthTexture.format===Li)ht(s)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,ee,Z,ue,0,_e):e.framebufferTexture2D(e.FRAMEBUFFER,ee,Z,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(T){const s=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(s.__boundDepthTexture!==T.depthTexture){const X=T.depthTexture;if(s.__depthDisposeCallback&&s.__depthDisposeCallback(),X){const j=()=>{delete s.__boundDepthTexture,delete s.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),s.__depthDisposeCallback=j}s.__boundDepthTexture=X}if(T.depthTexture&&!s.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)at(s.__webglFramebuffer[X],T,X);else{const X=T.texture.mipmaps;X&&X.length>0?at(s.__webglFramebuffer[0],T,0):at(s.__webglFramebuffer,T,0)}else if(G){s.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[X]),s.__webglDepthbuffer[X]===void 0)s.__webglDepthbuffer[X]=e.createRenderbuffer(),be(s.__webglDepthbuffer[X],T,!1);else{const j=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=s.__webglDepthbuffer[X];e.bindRenderbuffer(e.RENDERBUFFER,ue),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,ue)}}else{const X=T.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),s.__webglDepthbuffer===void 0)s.__webglDepthbuffer=e.createRenderbuffer(),be(s.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ue=s.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ue),e.framebufferRenderbuffer(e.FRAMEBUFFER,j,e.RENDERBUFFER,ue)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ze(T,s,G){const X=i.get(T);s!==void 0&&fe(X.__webglFramebuffer,T,T.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&ke(T)}function Ke(T){const s=T.texture,G=i.get(T),X=i.get(s);T.addEventListener("dispose",f);const j=T.textures,ue=T.isWebGLCubeRenderTarget===!0,_e=j.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=e.createTexture()),X.__version=s.version,o.memory.textures++),ue){G.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(s.mipmaps&&s.mipmaps.length>0){G.__webglFramebuffer[Z]=[];for(let ee=0;ee<s.mipmaps.length;ee++)G.__webglFramebuffer[Z][ee]=e.createFramebuffer()}else G.__webglFramebuffer[Z]=e.createFramebuffer()}else{if(s.mipmaps&&s.mipmaps.length>0){G.__webglFramebuffer=[];for(let Z=0;Z<s.mipmaps.length;Z++)G.__webglFramebuffer[Z]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(_e)for(let Z=0,ee=j.length;Z<ee;Z++){const ge=i.get(j[Z]);ge.__webglTexture===void 0&&(ge.__webglTexture=e.createTexture(),o.memory.textures++)}if(T.samples>0&&ht(T)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){const ee=j[Z];G.__webglColorRenderbuffer[Z]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[Z]);const ge=a.convert(ee.format,ee.colorSpace),Fe=a.convert(ee.type),ve=M(ee.internalFormat,ge,Fe,ee.normalized,ee.colorSpace,T.isXRRenderTarget===!0),me=vt(T);e.renderbufferStorageMultisample(e.RENDERBUFFER,me,ve,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Z,e.RENDERBUFFER,G.__webglColorRenderbuffer[Z])}e.bindRenderbuffer(e.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),be(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ue){t.bindTexture(e.TEXTURE_CUBE_MAP,X.__webglTexture),Re(e.TEXTURE_CUBE_MAP,s);for(let Z=0;Z<6;Z++)if(s.mipmaps&&s.mipmaps.length>0)for(let ee=0;ee<s.mipmaps.length;ee++)fe(G.__webglFramebuffer[Z][ee],T,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ee);else fe(G.__webglFramebuffer[Z],T,s,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);l(s)&&D(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let Z=0,ee=j.length;Z<ee;Z++){const ge=j[Z],Fe=i.get(ge);let ve=e.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ve=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ve,Fe.__webglTexture),Re(ve,ge),fe(G.__webglFramebuffer,T,ge,e.COLOR_ATTACHMENT0+Z,ve,0),l(ge)&&D(ve)}t.unbindTexture()}else{let Z=e.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),Re(Z,s),s.mipmaps&&s.mipmaps.length>0)for(let ee=0;ee<s.mipmaps.length;ee++)fe(G.__webglFramebuffer[ee],T,s,e.COLOR_ATTACHMENT0,Z,ee);else fe(G.__webglFramebuffer,T,s,e.COLOR_ATTACHMENT0,Z,0);l(s)&&D(Z),t.unbindTexture()}T.depthBuffer&&ke(T)}function je(T){const s=T.textures;for(let G=0,X=s.length;G<X;G++){const j=s[G];if(l(j)){const ue=U(T),_e=i.get(j).__webglTexture;t.bindTexture(ue,_e),D(ue),t.unbindTexture()}}}const dt=[],lt=[];function Yt(T){if(T.samples>0){if(ht(T)===!1){const s=T.textures,G=T.width,X=T.height;let j=e.COLOR_BUFFER_BIT;const ue=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_e=i.get(T),Z=s.length>1;if(Z)for(let ge=0;ge<s.length;ge++)t.bindFramebuffer(e.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,_e.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const ee=T.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ge=0;ge<s.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=e.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=e.STENCIL_BUFFER_BIT)),Z){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const Fe=i.get(s[ge]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Fe,0)}e.blitFramebuffer(0,0,G,X,0,0,G,X,j,e.NEAREST),R===!0&&(dt.length=0,lt.length=0,dt.push(e.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(dt.push(ue),lt.push(ue),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,lt)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Z)for(let ge=0;ge<s.length;ge++){t.bindFramebuffer(e.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);const Fe=i.get(s[ge]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,_e.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ge,e.TEXTURE_2D,Fe,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&R){const s=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[s])}}}function vt(T){return Math.min(r.maxSamples,T.samples)}function ht(T){const s=i.get(T);return T.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&s.__useRenderToTexture!==!1}function N(T){const s=o.render.frame;x.get(T)!==s&&(x.set(T,s),T.update())}function Gt(T,s){const G=T.colorSpace,X=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==qc&&G!==Pi&&(Dt.getTransfer(G)===Ct?(X!==Hn||j!==Nn)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",G)),s}function ft(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(_.width=T.naturalWidth||T.width,_.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(_.width=T.displayWidth,_.height=T.displayHeight):(_.width=T.width,_.height=T.height),_}this.allocateTextureUnit=K,this.resetTextureUnits=q,this.getTextureUnits=F,this.setTextureUnits=$,this.setTexture2D=oe,this.setTexture2DArray=ie,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=Ze,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Yt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eg(e,n){function t(i,r=Pi){let a;const o=Dt.getTransfer(r);if(i===Nn)return e.UNSIGNED_BYTE;if(i===yc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Lc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Od)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Bd)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gd)return e.BYTE;if(i===Hd)return e.SHORT;if(i===qa)return e.UNSIGNED_SHORT;if(i===Fc)return e.INT;if(i===_i)return e.UNSIGNED_INT;if(i===Zn)return e.FLOAT;if(i===kn)return e.HALF_FLOAT;if(i===Vd)return e.ALPHA;if(i===kd)return e.RGB;if(i===Hn)return e.RGBA;if(i===Ii)return e.DEPTH_COMPONENT;if(i===Li)return e.DEPTH_STENCIL;if(i===Wd)return e.RED;if(i===Pc)return e.RED_INTEGER;if(i===Di)return e.RG;if(i===Cc)return e.RG_INTEGER;if(i===wc)return e.RGBA_INTEGER;if(i===wr||i===Cr||i===Pr||i===yr)if(o===Ct)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===wr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===wr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Cr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ts||i===ns||i===is||i===as)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===ts)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ns)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===is)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===as)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===rs||i===os||i===ss||i===cs||i===ls||i===Yr||i===us)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(i===rs||i===os)return o===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===ss)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===cs)return a.COMPRESSED_R11_EAC;if(i===ls)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Yr)return a.COMPRESSED_RG11_EAC;if(i===us)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ds||i===fs||i===ps||i===hs||i===ms||i===_s||i===gs||i===vs||i===Ss||i===Es||i===xs||i===Ms||i===Ts||i===bs)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(i===ds)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===fs)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ps)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hs)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ms)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_s)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gs)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vs)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ss)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Es)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xs)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ms)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ts)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bs)return o===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===As||i===Rs||i===ws)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(i===As)return o===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ws)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Cs||i===Ps||i===Kr||i===ys)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(i===Cs)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ps)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ys)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===pa?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
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

}`;class ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Uc(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Wn({vertexShader:tg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new Nc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ag extends vd{constructor(n,t){super();const i=this;let r=null,a=1,o=null,g="local-floor",R=1,_=null,x=null,S=null,m=null,b=null,P=null;const y=typeof XRWebGLBinding<"u",p=new ig,l={},D=t.getContextAttributes();let U=null,M=null;const A=[],h=[],w=new nn;let f=null,v=null;const I=new da;I.viewport=new ln;const B=new da;B.viewport=new ln;const k=[I,B],q=new Sd;let F=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=A[Y];return te===void 0&&(te=new Rr,A[Y]=te),te.getHandSpace()};function K(Y){const te=h.indexOf(Y.inputSource);if(te===-1)return;const Me=A[te];Me!==void 0&&(Me.update(Y.inputSource,Y.frame,_||o),Me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function Q(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",oe);for(let Y=0;Y<A.length;Y++){const te=h[Y];te!==null&&(h[Y]=null,A[Y].disconnect(te))}F=null,$=null,p.reset();for(const Y in l)delete l[Y];if(n.setRenderTarget(U),b=null,m=null,S=null,r=null,M=null,Be.stop(),i.isPresenting=!1,n.setPixelRatio(f),n.setSize(w.width,w.height,!1),v!==null){const Y=v.camera;Y.fov=v.fov,Y.zoom=v.zoom,Y.updateProjectionMatrix(),v=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){g=Y,i.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||o},this.setReferenceSpace=function(Y){_=Y},this.getBaseLayer=function(){return m!==null?m:b},this.getBinding=function(){return S===null&&y&&(S=new XRWebGLBinding(r,t)),S},this.getFrame=function(){return P},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(U=n.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",oe),D.xrCompatible!==!0&&await t.makeXRCompatible(),f=n.getPixelRatio(),n.getSize(w),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,We=null,fe=null;D.depth&&(fe=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=D.stencil?Li:Ii,We=D.stencil?pa:_i);const be={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:a};S=this.getBinding(),m=S.createProjectionLayer(be),r.updateRenderState({layers:[m]}),n.setPixelRatio(1),n.setSize(m.textureWidth,m.textureHeight,!1),M=new xn(m.textureWidth,m.textureHeight,{format:Hn,type:Nn,depthTexture:new za(m.textureWidth,m.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:D.stencil,colorSpace:n.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}else{const Me={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};b=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:b}),n.setPixelRatio(1),n.setSize(b.framebufferWidth,b.framebufferHeight,!1),M=new xn(b.framebufferWidth,b.framebufferHeight,{format:Hn,type:Nn,colorSpace:n.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(R),_=null,o=await r.requestReferenceSpace(g),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function oe(Y){for(let te=0;te<Y.removed.length;te++){const Me=Y.removed[te],We=h.indexOf(Me);We>=0&&(h[We]=null,A[We].disconnect(Me))}for(let te=0;te<Y.added.length;te++){const Me=Y.added[te];let We=h.indexOf(Me);if(We===-1){for(let be=0;be<A.length;be++)if(be>=h.length){h.push(Me),We=be;break}else if(h[be]===null){h[be]=Me,We=be;break}if(We===-1)break}const fe=A[We];fe&&fe.connect(Me)}}const ie=new Ie,se=new Ie;function ce(Y,te,Me){ie.setFromMatrixPosition(te.matrixWorld),se.setFromMatrixPosition(Me.matrixWorld);const We=ie.distanceTo(se),fe=te.projectionMatrix.elements,be=Me.projectionMatrix.elements,at=fe[14]/(fe[10]-1),ke=fe[14]/(fe[10]+1),Ze=(fe[9]+1)/fe[5],Ke=(fe[9]-1)/fe[5],je=(fe[8]-1)/fe[0],dt=(be[8]+1)/be[0],lt=at*je,Yt=at*dt,vt=We/(-je+dt),ht=vt*-je;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ht),Y.translateZ(vt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),fe[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const N=at+vt,Gt=ke+vt,ft=lt-ht,T=Yt+(We-ht),s=Ze*ke/Gt*N,G=Ke*ke/Gt*N;Y.projectionMatrix.makePerspective(ft,T,s,G,N,Gt),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ye(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let te=Y.near,Me=Y.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(Me=p.depthFar)),q.near=B.near=I.near=te,q.far=B.far=I.far=Me,(F!==q.near||$!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),F=q.near,$=q.far),q.layers.mask=Y.layers.mask|6,I.layers.mask=q.layers.mask&-5,B.layers.mask=q.layers.mask&-3;const We=Y.parent,fe=q.cameras;Ye(q,We);for(let be=0;be<fe.length;be++)Ye(fe[be],We);fe.length===2?ce(q,I,B):q.projectionMatrix.copy(I.projectionMatrix),v===null&&Y.isPerspectiveCamera&&(v={camera:Y,fov:Y.fov,zoom:Y.zoom}),Ve(Y,q,We)};function Ve(Y,te,Me){Me===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(Me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ed*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&b===null))return R},this.setFoveation=function(Y){R=Y,m!==null&&(m.fixedFoveation=Y),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(Y){return l[Y]};let ct=null;function Re(Y,te){if(x=te.getViewerPose(_||o),P=te,x!==null){const Me=x.views;b!==null&&(n.setRenderTargetFramebuffer(M,b.framebuffer),n.setRenderTarget(M));let We=!1;Me.length!==q.cameras.length&&(q.cameras.length=0,We=!0);for(let ke=0;ke<Me.length;ke++){const Ze=Me[ke];let Ke=null;if(b!==null)Ke=b.getViewport(Ze);else{const dt=S.getViewSubImage(m,Ze);Ke=dt.viewport,ke===0&&(n.setRenderTargetTextures(M,dt.colorTexture,dt.depthStencilTexture),n.setRenderTarget(M))}let je=k[ke];je===void 0&&(je=new da,je.layers.enable(ke),je.viewport=new ln,k[ke]=je),je.matrix.fromArray(Ze.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ze.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ke===0&&(q.matrix.copy(je.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),We===!0&&q.cameras.push(je)}const fe=r.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){S=i.getBinding();const ke=S.getDepthInformation(Me[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,r.renderState)}if(fe&&fe.includes("camera-access")&&y){n.state.unbindTexture(),S=i.getBinding();for(let ke=0;ke<Me.length;ke++){const Ze=Me[ke].camera;if(Ze){let Ke=l[Ze];Ke||(Ke=new Uc,l[Ze]=Ke);const je=S.getCameraImage(Ze);Ke.sourceTexture=je}}}}for(let Me=0;Me<A.length;Me++){const We=h[Me],fe=A[Me];We!==null&&fe!==void 0&&fe.update(We,te,_||o)}ct&&ct(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),P=null}const Be=new $c;Be.setAnimationLoop(Re),this.setAnimationLoop=function(Y){ct=Y},this.dispose=function(){}}}const rg=new ti,il=new st;il.set(-1,0,0,0,1,0,0,0,1);function og(e,n){function t(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function i(p,l){l.color.getRGB(p.fogColor.value,Dc(e)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function r(p,l,D,U,M){l.isNodeMaterial?l.uniformsNeedUpdate=!1:l.isMeshBasicMaterial?a(p,l):l.isMeshLambertMaterial?(a(p,l),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)):l.isMeshToonMaterial?(a(p,l),S(p,l)):l.isMeshPhongMaterial?(a(p,l),x(p,l),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)):l.isMeshStandardMaterial?(a(p,l),m(p,l),l.isMeshPhysicalMaterial&&b(p,l,M)):l.isMeshMatcapMaterial?(a(p,l),P(p,l)):l.isMeshDepthMaterial?a(p,l):l.isMeshDistanceMaterial?(a(p,l),y(p,l)):l.isMeshNormalMaterial?a(p,l):l.isLineBasicMaterial?(o(p,l),l.isLineDashedMaterial&&g(p,l)):l.isPointsMaterial?R(p,l,D,U):l.isSpriteMaterial?_(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function a(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,t(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===hn&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,t(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===hn&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,t(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,t(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const D=n.get(l),U=D.envMap,M=D.envMapRotation;U&&(p.envMap.value=U,p.envMapRotation.value.setFromMatrix4(rg.makeRotationFromEuler(M)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(il),p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap&&(p.lightMap.value=l.lightMap,p.lightMapIntensity.value=l.lightMapIntensity,t(l.lightMap,p.lightMapTransform)),l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,p.aoMapTransform))}function o(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform))}function g(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function R(p,l,D,U){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*D,p.scale.value=U*.5,l.map&&(p.map.value=l.map,t(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function _(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function x(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function S(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function m(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,p.roughnessMapTransform)),l.envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function b(p,l,D){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===hn&&p.clearcoatNormalScale.value.negate())),l.dispersion>0&&(p.dispersion.value=l.dispersion),l.retroreflectivity>0&&(p.retroreflectivity.value=l.retroreflectivity),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=D.texture,p.transmissionSamplerSize.value.set(D.width,D.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),l.anisotropy>0&&(p.anisotropyVector.value.set(l.anisotropy*Math.cos(l.anisotropyRotation),l.anisotropy*Math.sin(l.anisotropyRotation)),l.anisotropyMap&&(p.anisotropyMap.value=l.anisotropyMap,t(l.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,p.specularIntensityMapTransform))}function P(p,l){l.matcap&&(p.matcap.value=l.matcap)}function y(p,l){const D=n.get(l).light;p.referencePosition.value.setFromMatrixPosition(D.matrixWorld),p.nearDistance.value=D.shadow.camera.near,p.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function sg(e,n,t,i){let r={},a={},o=[];const g=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function R(M,A){const h=A.program;i.uniformBlockBinding(M,h)}function _(M,A){let h=r[M.id];h===void 0&&(p(M),h=x(M),r[M.id]=h,M.addEventListener("dispose",D));const w=A.program;i.updateUBOMapping(M,w);const f=n.render.frame;a[M.id]!==f&&(m(M),a[M.id]=f)}function x(M){const A=S();M.__bindingPointIndex=A;const h=e.createBuffer(),w=M.__size,f=M.usage;return e.bindBuffer(e.UNIFORM_BUFFER,h),e.bufferData(e.UNIFORM_BUFFER,w,f),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,h),h}function S(){for(let M=0;M<g;M++)if(o.indexOf(M)===-1)return o.push(M),M;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(M){const A=r[M.id],h=M.uniforms,w=M.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let f=0,v=h.length;f<v;f++){const I=h[f];if(Array.isArray(I))for(let B=0,k=I.length;B<k;B++)b(I[B],f,B,w);else b(I,f,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function b(M,A,h,w){if(y(M,A,h,w)===!0){const f=M.__offset,v=M.value;if(Array.isArray(v)){let I=0;for(let B=0;B<v.length;B++){const k=v[B],q=l(k);P(k,M.__data,I),typeof k!="number"&&typeof k!="boolean"&&!k.isMatrix3&&!ArrayBuffer.isView(k)&&(I+=q.storage/Float32Array.BYTES_PER_ELEMENT)}}else P(v,M.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,f,M.__data)}}function P(M,A,h){typeof M=="number"||typeof M=="boolean"?A[0]=M:M.isMatrix3?(A[0]=M.elements[0],A[1]=M.elements[1],A[2]=M.elements[2],A[3]=0,A[4]=M.elements[3],A[5]=M.elements[4],A[6]=M.elements[5],A[7]=0,A[8]=M.elements[6],A[9]=M.elements[7],A[10]=M.elements[8],A[11]=0):ArrayBuffer.isView(M)?A.set(new M.constructor(M.buffer,M.byteOffset,A.length)):M.toArray(A,h)}function y(M,A,h,w){const f=M.value,v=A+"_"+h;if(w[v]===void 0)return typeof f=="number"||typeof f=="boolean"?w[v]=f:ArrayBuffer.isView(f)?w[v]=f.slice():w[v]=f.clone(),!0;{const I=w[v];if(typeof f=="number"||typeof f=="boolean"){if(I!==f)return w[v]=f,!0}else{if(ArrayBuffer.isView(f))return!0;if(I.equals(f)===!1)return I.copy(f),!0}}return!1}function p(M){const A=M.uniforms;let h=0;const w=16;for(let v=0,I=A.length;v<I;v++){const B=Array.isArray(A[v])?A[v]:[A[v]];for(let k=0,q=B.length;k<q;k++){const F=B[k],$=Array.isArray(F.value)?F.value:[F.value];for(let K=0,Q=$.length;K<Q;K++){const oe=$[K],ie=l(oe),se=h%w,ce=se%ie.boundary,Ye=se+ce;h+=ce,Ye!==0&&w-Ye<ie.storage&&(h+=w-Ye),F.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=h,h+=ie.storage}}}const f=h%w;return f>0&&(h+=w-f),M.__size=h,M.__cache={},this}function l(M){const A={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(A.boundary=4,A.storage=4):M.isVector2?(A.boundary=8,A.storage=8):M.isVector3||M.isColor?(A.boundary=16,A.storage=12):M.isVector4?(A.boundary=16,A.storage=16):M.isMatrix3?(A.boundary=48,A.storage=48):M.isMatrix4?(A.boundary=64,A.storage=64):M.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(A.boundary=16,A.storage=M.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",M),A}function D(M){const A=M.target;A.removeEventListener("dispose",D);const h=o.indexOf(A.__bindingPointIndex);o.splice(h,1),e.deleteBuffer(r[A.id]),delete r[A.id],delete a[A.id]}function U(){for(const M in r)e.deleteBuffer(r[M]);o=[],r={},a={}}return{bind:R,update:_,dispose:U}}const cg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yn=null;function lg(){return yn===null&&(yn=new xd(cg,16,16,Di,kn),yn.name="DFG_LUT",yn.minFilter=pn,yn.magFilter=pn,yn.wrapS=Xr,yn.wrapT=Xr,yn.generateMipmaps=!1,yn.needsUpdate=!0),yn}class ug{constructor(n={}){const{canvas:t=Bu(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:g=!1,premultipliedAlpha:R=!0,preserveDrawingBuffer:_=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:m=!1,outputBufferType:b=Nn}=n;this.isWebGLRenderer=!0;let P;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");P=i.getContextAttributes().alpha}else P=o;const y=b,p=new Set([wc,Cc,Pc]),l=new Set([Nn,_i,qa,pa,yc,Lc]),D=new Uint32Array(4),U=new Int32Array(4),M=new Ie;let A=null,h=null;const w=[],f=[];let v=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let B=!1,k=null,q=null,F=null,$=null;this._outputColorSpace=no;let K=0,Q=0,oe=null,ie=-1,se=null;const ce=new ln,Ye=new ln;let Ve=null;const ct=new wt(0);let Re=0,Be=t.width,Y=t.height,te=1,Me=null,We=null;const fe=new ln(0,0,Be,Y),be=new ln(0,0,Be,Y);let at=!1;const ke=new Ac;let Ze=!1,Ke=!1;const je=new ti,dt=new Ie,lt=new ln,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function ht(){return oe===null?te:1}let N=i;function Gt(u,C){return t.getContext(u,C)}let ft,T,s,G,X,j,ue,_e,Z,ee,ge,Fe,ve,me,De,Ge,$e,L,he,J,pe,xe,ae;try{const u={alpha:!0,depth:r,stencil:a,antialias:g,premultipliedAlpha:R,preserveDrawingBuffer:_,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gu}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Kt,!1),N===null){const C="webgl2";if(N=Gt(C,u),N===null)throw Gt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(u){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),yt("WebGLRenderer: "+u.message),u}function Oe(){ft=new lm(N),ft.init(),pe=new eg(N,ft),T=new Jh(N,ft,n,pe),s=new Q_(N,ft),T.reversedDepthBuffer&&m&&s.buffers.depth.setReversed(!0),q=N.createFramebuffer(),F=N.createFramebuffer(),$=N.createFramebuffer(),G=new fm(N),X=new B_,j=new J_(N,ft,s,X,T,pe,G),ue=new cm(I),_e=new hf(N),xe=new Zh(N,_e),Z=new um(N,_e,G,xe),ee=new hm(N,Z,_e,xe,G),L=new pm(N,T,j),De=new em(X),ge=new O_(I,ue,ft,T,xe,De),Fe=new og(I,X),ve=new H_,me=new q_(ft),$e=new $h(I,ue,s,ee,P,R),Ge=new Z_(I,ee,T),ae=new sg(N,G,T,s),he=new Qh(N,ft,G),J=new dm(N,ft,G),G.programs=ge.programs,I.capabilities=T,I.extensions=ft,I.properties=X,I.renderLists=ve,I.shadowMap=Ge,I.state=s,I.info=G}y!==Nn&&(v=new _m(y,t.width,t.height,g,r,a));const Le=new ag(I,N);this.xr=Le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const u=ft.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){const u=ft.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(u){u!==void 0&&(te=u,this.setSize(Be,Y,!1))},this.getSize=function(u){return u.set(Be,Y)},this.setSize=function(u,C,z=!0){if(Le.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=u,Y=C,t.width=Math.floor(u*te),t.height=Math.floor(C*te),z===!0&&(t.style.width=u+"px",t.style.height=C+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,u,C)},this.getDrawingBufferSize=function(u){return u.set(Be*te,Y*te).floor()},this.setDrawingBufferSize=function(u,C,z){Be=u,Y=C,te=z,t.width=Math.floor(u*z),t.height=Math.floor(C*z),this.setViewport(0,0,u,C)},this.setEffects=function(u){if(y===Nn){yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(u){for(let C=0;C<u.length;C++)if(u[C].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(u||[])},this.getCurrentViewport=function(u){return u.copy(ce)},this.getViewport=function(u){return u.copy(fe)},this.setViewport=function(u,C,z,H){u.isVector4?fe.set(u.x,u.y,u.z,u.w):fe.set(u,C,z,H),s.viewport(ce.copy(fe).multiplyScalar(te).round())},this.getScissor=function(u){return u.copy(be)},this.setScissor=function(u,C,z,H){u.isVector4?be.set(u.x,u.y,u.z,u.w):be.set(u,C,z,H),s.scissor(Ye.copy(be).multiplyScalar(te).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(u){s.setScissorTest(at=u)},this.setOpaqueSort=function(u){Me=u},this.setTransparentSort=function(u){We=u},this.getClearColor=function(u){return u.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(u=!0,C=!0,z=!0){let H=0;if(u){let V=!1;if(oe!==null){const Se=oe.texture.format;V=p.has(Se)}if(V){const Se=oe.texture.type,Pe=l.has(Se),Ee=$e.getClearColor(),we=$e.getClearAlpha(),Ue=Ee.r,ze=Ee.g,Qe=Ee.b;Pe?(D[0]=Ue,D[1]=ze,D[2]=Qe,D[3]=we,N.clearBufferuiv(N.COLOR,0,D)):(U[0]=Ue,U[1]=ze,U[2]=Qe,U[3]=we,N.clearBufferiv(N.COLOR,0,U))}else H|=N.COLOR_BUFFER_BIT}C&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),z&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(u){u.setRenderer(this),k=u},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Kt,!1),$e.dispose(),ve.dispose(),me.dispose(),X.dispose(),ue.dispose(),ee.dispose(),xe.dispose(),ae.dispose(),ge.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",In),Le.removeEventListener("sessionend",dn),Zt.stop()};function St(u){u.preventDefault(),Yo("WebGLRenderer: Context Lost."),B=!0}function rt(){Yo("WebGLRenderer: Context Restored."),B=!1;const u=G.autoReset,C=Ge.enabled,z=Ge.autoUpdate,H=Ge.needsUpdate,V=Ge.type;Oe(),G.autoReset=u,Ge.enabled=C,Ge.autoUpdate=z,Ge.needsUpdate=H,Ge.type=V}function Kt(u){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function un(u){const C=u.target;C.removeEventListener("dispose",un),ma(C)}function ma(u){gi(u),X.remove(u)}function gi(u){const C=X.get(u).programs;C!==void 0&&(C.forEach(function(z){ge.releaseProgram(z)}),u.isShaderMaterial&&ge.releaseShaderCache(u))}this.renderBufferDirect=function(u,C,z,H,V,Se){C===null&&(C=Yt);const Pe=V.isMesh&&V.matrixWorld.determinantAffine()<0,Ee=gn(u,C,z,H,V);s.setMaterial(H,Pe);let we=z.index,Ue=1;if(H.wireframe===!0){if(we=Z.getWireframeAttribute(z),we===void 0)return;Ue=2}const ze=z.drawRange,Qe=z.attributes.position;let ye=ze.start*Ue,it=(ze.start+ze.count)*Ue;Se!==null&&(ye=Math.max(ye,Se.start*Ue),it=Math.min(it,(Se.start+Se.count)*Ue)),we!==null?(ye=Math.max(ye,0),it=Math.min(it,we.count)):Qe!=null&&(ye=Math.max(ye,0),it=Math.min(it,Qe.count));const Lt=it-ye;if(Lt<0||Lt===1/0)return;xe.setup(V,H,Ee,z,we);let mt,pt=he;if(we!==null&&(mt=_e.get(we),pt=J,pt.setIndex(mt)),V.isMesh)H.wireframe===!0?(s.setLineWidth(H.wireframeLinewidth*ht()),pt.setMode(N.LINES)):pt.setMode(N.TRIANGLES);else if(V.isLine){let Bt=H.linewidth;Bt===void 0&&(Bt=1),s.setLineWidth(Bt*ht()),V.isLineSegments?pt.setMode(N.LINES):V.isLineLoop?pt.setMode(N.LINE_LOOP):pt.setMode(N.LINE_STRIP)}else V.isPoints?pt.setMode(N.POINTS):V.isSprite&&pt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Bt=V._multiDrawStarts,Ce=V._multiDrawCounts,Ht=V._multiDrawCount,nt=we?_e.get(we).bytesPerElement:1,Xt=X.get(H).currentProgram.getUniforms();for(let Ut=0;Ut<Ht;Ut++)Xt.setValue(N,"_gl_DrawID",Ut),pt.render(Bt[Ut]/nt,Ce[Ut])}else if(V.isInstancedMesh)pt.renderInstances(ye,Lt,V.count);else if(z.isInstancedBufferGeometry){const Bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ce=Math.min(z.instanceCount,Bt);pt.renderInstances(ye,Lt,Ce)}else pt.render(ye,Lt)};function Tt(u,C,z,H){k!==null&&u.isNodeMaterial&&k.setObject(H,u),Ze===!0&&De.setState(u,z,!1),u.transparent===!0&&u.side===En&&u.forceSinglePass===!1?(u.side=hn,u.needsUpdate=!0,bn(u,C,H),u.side=fa,u.needsUpdate=!0,bn(u,C,H),u.side=En):bn(u,C,H)}this.compile=function(u,C,z=null){z===null&&(z=u),k!==null&&k.renderStart(u,C,z),h=me.get(z),h.init(C),f.push(h),z.traverseVisible(function(V){V.isLight&&V.layers.test(C.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),u!==z&&u.traverseVisible(function(V){V.isLight&&V.layers.test(C.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights(),k!==null&&k.updateLights(h.state.lightsArray),Ke=this.localClippingEnabled,Ze=De.init(this.clippingPlanes,Ke),Ze===!0&&De.setGlobalState(this.clippingPlanes,C),k!==null&&Ge.render(h.state.shadowsArray,z,C);const H=new Set;return u.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const Ee=Se[Pe];Tt(Ee,z,C,V),H.add(Ee)}else Tt(Se,z,C,V),H.add(Se)}),h=f.pop(),k!==null&&k.renderEnd(),H},this.compileAsync=function(u,C,z=null){const H=this.compile(u,C,z);return new Promise(V=>{function Se(){if(H.forEach(function(Pe){const we=X.get(Pe).currentProgram;(we===void 0||we.isReady())&&H.delete(Pe)}),H.size===0){V(u);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let mn=null;function ii(u){mn&&mn(u)}function In(){Zt.stop()}function dn(){Zt.start()}const Zt=new $c;Zt.setAnimationLoop(ii),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(u){mn=u,Le.setAnimationLoop(u),u===null?Zt.stop():Zt.start()},Le.addEventListener("sessionstart",In),Le.addEventListener("sessionend",dn),this.render=function(u,C){if(C!==void 0&&C.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;k!==null&&k.renderStart(u,C);const z=Le.enabled===!0&&Le.isPresenting===!0,H=v!==null&&(oe===null||z)&&v.begin(I,oe);if(u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(C),C=Le.getCamera()),u.isScene===!0&&u.onBeforeRender(I,u,C,oe),h=me.get(u,f.length),h.init(C),h.state.textureUnits=j.getTextureUnits(),f.push(h),je.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),ke.setFromProjectionMatrix(je,Ko,C.reversedDepth),Ke=this.localClippingEnabled,Ze=De.init(this.clippingPlanes,Ke),A=ve.get(u,w.length),A.init(),w.push(A),Le.enabled===!0&&Le.isPresenting===!0){const Pe=I.xr.getDepthSensingMesh();Pe!==null&&_n(Pe,C,-1/0,I.sortObjects)}_n(u,C,0,I.sortObjects),A.finish(),k!==null&&k.updateLights(h.state.lightsArray),I.sortObjects===!0&&A.sort(Me,We),vt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,vt&&$e.addToRenderList(A,u),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ze===!0&&De.beginShadows();const V=h.state.shadowsArray;if(Ge.render(V,u,C),Ze===!0&&De.endShadows(),(H&&v.hasRenderPass())===!1){const Pe=A.opaque,Ee=A.transmissive;if(h.setupLights(),C.isArrayCamera){const we=C.cameras;if(Ee.length>0)for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Qe=we[Ue];Xn(Pe,Ee,u,Qe)}vt&&$e.render(u);for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Qe=we[Ue];zn(A,u,Qe,Qe.viewport)}}else Ee.length>0&&Xn(Pe,Ee,u,C),vt&&$e.render(u),zn(A,u,C)}oe!==null&&Q===0&&(j.updateMultisampleRenderTarget(oe),j.updateRenderTargetMipmap(oe)),H&&v.end(I),u.isScene===!0&&u.onAfterRender(I,u,C),xe.resetDefaultState(),ie=-1,se=null,f.pop(),f.length>0?(h=f[f.length-1],j.setTextureUnits(h.state.textureUnits),Ze===!0&&De.setGlobalState(I.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?A=w[w.length-1]:A=null,k!==null&&k.renderEnd()};function _n(u,C,z,H){if(u.visible===!1)return;if(u.layers.test(C.layers)){if(u.isGroup)z=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(C);else if(u.isLightProbeGrid)h.pushLightProbeGrid(u);else if(u.isLight)h.pushLight(u),u.castShadow&&h.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||u.intersectsFrustum(ke)){H&&lt.setFromMatrixPosition(u.matrixWorld).applyMatrix4(je);const Pe=ee.update(u),Ee=u.material;Ee.visible&&A.push(u,Pe,Ee,z,lt.z,null,C)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||u.intersectsFrustum(ke))){const Pe=ee.update(u),Ee=u.material;if(H&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),lt.copy(u.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),lt.copy(Pe.boundingSphere.center)),lt.applyMatrix4(u.matrixWorld).applyMatrix4(je)),Array.isArray(Ee)){const we=Pe.groups;for(let Ue=0,ze=we.length;Ue<ze;Ue++){const Qe=we[Ue],ye=Ee[Qe.materialIndex];ye&&ye.visible&&A.push(u,Pe,ye,z,lt.z,Qe,C)}}else Ee.visible&&A.push(u,Pe,Ee,z,lt.z,null,C)}}const Se=u.children;for(let Pe=0,Ee=Se.length;Pe<Ee;Pe++)_n(Se[Pe],C,z,H)}function zn(u,C,z,H){const{opaque:V,transmissive:Se,transparent:Pe}=u;h.setupLightsView(z),Ze===!0&&De.setGlobalState(I.clippingPlanes,z),H&&s.viewport(ce.copy(H)),V.length>0&&Tn(V,C,z),Se.length>0&&Tn(Se,C,z),Pe.length>0&&Tn(Pe,C,z),s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),s.setPolygonOffset(!1)}function Xn(u,C,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(h.state.transmissionRenderTarget[H.id]===void 0){const ye=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");h.state.transmissionRenderTarget[H.id]=new xn(1,1,{generateMipmaps:!0,type:ye?kn:Nn,minFilter:yi,samples:Math.max(4,T.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Se=h.state.transmissionRenderTarget[H.id],Pe=H.viewport||ce;Se.setSize(Pe.z*I.transmissionResolutionScale,Pe.w*I.transmissionResolutionScale);const Ee=I.getRenderTarget(),we=I.getActiveCubeFace(),Ue=I.getActiveMipmapLevel();I.setRenderTarget(Se),I.getClearColor(ct),Re=I.getClearAlpha(),Re<1&&I.setClearColor(16777215,.5),I.clear(),vt&&$e.render(z);const ze=I.toneMapping;I.toneMapping=Dn;const Qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),Ze===!0&&De.setGlobalState(I.clippingPlanes,H),Tn(u,z,H),j.updateMultisampleRenderTarget(Se),j.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let it=0,Lt=C.length;it<Lt;it++){const mt=C[it],{object:pt,geometry:Bt,material:Ce,group:Ht}=mt;if(Ce.side===En&&pt.layers.test(H.layers)){const nt=Ce.side;Ce.side=hn,Ce.needsUpdate=!0,qn(pt,z,H,Bt,Ce,Ht),Ce.side=nt,Ce.needsUpdate=!0,ye=!0}}ye===!0&&(j.updateMultisampleRenderTarget(Se),j.updateRenderTargetMipmap(Se))}I.setRenderTarget(Ee,we,Ue),I.setClearColor(ct,Re),Qe!==void 0&&(H.viewport=Qe),I.toneMapping=ze}function Tn(u,C,z){const H=C.isScene===!0?C.overrideMaterial:null;for(let V=0,Se=u.length;V<Se;V++){const Pe=u[V],{object:Ee,geometry:we,group:Ue}=Pe;let ze=Pe.material;ze.allowOverride===!0&&H!==null&&(ze=H),Ee.layers.test(z.layers)&&qn(Ee,C,z,we,ze,Ue)}}function qn(u,C,z,H,V,Se){k!==null&&V.isNodeMaterial&&k.setObject(u,V),u.onBeforeRender(I,C,z,H,V,Se),u.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),V.onBeforeRender(I,C,z,H,u,Se),V.transparent===!0&&V.side===En&&V.forceSinglePass===!1?(V.side=hn,V.needsUpdate=!0,I.renderBufferDirect(z,C,H,V,u,Se),V.side=fa,V.needsUpdate=!0,I.renderBufferDirect(z,C,H,V,u,Se),V.side=En):I.renderBufferDirect(z,C,H,V,u,Se),u.onAfterRender(I,C,z,H,V,Se)}function bn(u,C,z){C.isScene!==!0&&(C=Yt);const H=X.get(u),V=h.state.lights,Se=h.state.shadowsArray,Pe=V.state.version,Ee=ge.getParameters(u,V.state,Se,C,z,h.state.lightProbeGridArray),we=ge.getProgramCacheKey(Ee);let Ue=H.programs;H.environment=u.isMeshStandardMaterial||u.isMeshLambertMaterial||u.isMeshPhongMaterial?C.environment:null,H.fog=C.fog;const ze=u.isMeshStandardMaterial||u.isMeshLambertMaterial&&!u.envMap||u.isMeshPhongMaterial&&!u.envMap;H.envMap=ue.get(u.envMap||H.environment,ze),H.envMapRotation=H.environment!==null&&u.envMap===null?C.environmentRotation:u.envMapRotation,Ue===void 0&&(u.addEventListener("dispose",un),Ue=new Map,H.programs=Ue);let Qe=Ue.get(we);if(Qe!==void 0){if(H.currentProgram===Qe&&H.lightsStateVersion===Pe)return Un(u,Ee),Qe}else Ee.uniforms=ge.getUniforms(u),k!==null&&u.isNodeMaterial&&k.build(u,z,Ee),u.onBeforeCompile(Ee,I),Qe=ge.acquireProgram(Ee,we),Ue.set(we,Qe),H.uniforms=Ee.uniforms;const ye=H.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(ye.clippingPlanes=De.uniform),Un(u,Ee),H.needsLights=Yn(u),H.lightsStateVersion=Pe,H.needsLights&&(ye.ambientLightColor.value=V.state.ambient,ye.lightProbe.value=V.state.probe,ye.sunLights.value=V.state.sun,ye.sunLightShadows.value=V.state.sunShadow,ye.directionalLights.value=V.state.directional,ye.directionalLightShadows.value=V.state.directionalShadow,ye.spotLights.value=V.state.spot,ye.spotLightShadows.value=V.state.spotShadow,ye.rectAreaLights.value=V.state.rectArea,ye.ltc_1.value=V.state.rectAreaLTC1,ye.ltc_2.value=V.state.rectAreaLTC2,ye.pointLights.value=V.state.point,ye.pointLightShadows.value=V.state.pointShadow,ye.hemisphereLights.value=V.state.hemi,ye.sunShadowMatrix.value=V.state.sunShadowMatrix,ye.sunShadowCascade.value=V.state.sunShadowCascade,ye.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ye.spotLightMatrix.value=V.state.spotLightMatrix,ye.spotLightMap.value=V.state.spotLightMap,ye.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=h.state.lightProbeGridArray.length>0,H.currentProgram=Qe,H.uniformsList=null,Qe}function Oi(u){if(u.uniformsList===null){const C=u.currentProgram.getUniforms();u.uniformsList=Wa.seqWithValue(C.seq,u.uniforms)}return u.uniformsList}function Un(u,C){const z=X.get(u);z.outputColorSpace=C.outputColorSpace,z.batching=C.batching,z.batchingColor=C.batchingColor,z.instancing=C.instancing,z.instancingColor=C.instancingColor,z.instancingMorph=C.instancingMorph,z.skinning=C.skinning,z.morphTargets=C.morphTargets,z.morphNormals=C.morphNormals,z.morphColors=C.morphColors,z.morphTargetsCount=C.morphTargetsCount,z.numClippingPlanes=C.numClippingPlanes,z.numIntersection=C.numClipIntersection,z.vertexAlphas=C.vertexAlphas,z.vertexTangents=C.vertexTangents,z.toneMapping=C.toneMapping}function _a(u,C){if(u.length===0)return null;if(u.length===1)return u[0].texture!==null?u[0]:null;M.setFromMatrixPosition(C.matrixWorld);for(let z=0,H=u.length;z<H;z++){const V=u[z];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function gn(u,C,z,H,V){C.isScene!==!0&&(C=Yt),j.resetTextureUnits();const Se=C.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?C.environment:null,Ee=oe===null?I.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Dt.workingColorSpace,we=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ue=ue.get(H.envMap||Pe,we),ze=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Qe=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),ye=!!z.morphAttributes.position,it=!!z.morphAttributes.normal,Lt=!!z.morphAttributes.color;let mt=Dn;H.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(mt=I.toneMapping);const pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Bt=pt!==void 0?pt.length:0,Ce=X.get(H),Ht=h.state.lights;if(Ze===!0&&(Ke===!0||u!==se)){const He=u===se&&H.id===ie;De.setState(H,u,He)}let nt=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ht.state.version||Ce.outputColorSpace!==Ee||V.isBatchedMesh&&Ce.batching===!1||!V.isBatchedMesh&&Ce.batching===!0||V.isBatchedMesh&&Ce.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ce.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ce.instancing===!1||!V.isInstancedMesh&&Ce.instancing===!0||V.isSkinnedMesh&&Ce.skinning===!1||!V.isSkinnedMesh&&Ce.skinning===!0||V.isInstancedMesh&&Ce.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ce.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ce.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ce.instancingMorph===!1&&V.morphTexture!==null||Ce.envMap!==Ue||H.fog===!0&&Ce.fog!==Se||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==De.numPlanes||Ce.numIntersection!==De.numIntersection)||Ce.vertexAlphas!==ze||Ce.vertexTangents!==Qe||Ce.morphTargets!==ye||Ce.morphNormals!==it||Ce.morphColors!==Lt||Ce.toneMapping!==mt||Ce.morphTargetsCount!==Bt||!!Ce.lightProbeGrid!=h.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ce.__version=H.version);let Xt=Ce.currentProgram;nt===!0&&(Xt=bn(H,C,V),k&&H.isNodeMaterial&&k.onUpdateProgram(H,Xt,Ce));let Ut=!1,an=!1,An=!1;const qe=Xt.getUniforms(),bt=Ce.uniforms;if(s.useProgram(Xt.program)&&(Ut=!0,an=!0,An=!0),H.id!==ie&&(ie=H.id,an=!0),Ce.needsLights){const He=_a(h.state.lightProbeGridArray,V);Ce.lightProbeGrid!==He&&(Ce.lightProbeGrid=He,an=!0)}if(Ut||se!==u){s.buffers.depth.getReversed()&&u.reversedDepth!==!0&&(u._reversedDepth=!0,u.updateProjectionMatrix()),qe.setValue(N,"projectionMatrix",u.projectionMatrix),qe.setValue(N,"viewMatrix",u.matrixWorldInverse);const en=qe.map.cameraPosition;en!==void 0&&en.setValue(N,dt.setFromMatrixPosition(u.matrixWorld)),T.logarithmicDepthBuffer&&qe.setValue(N,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&qe.setValue(N,"isOrthographic",u.isOrthographicCamera===!0),se!==u&&(se=u,an=!0,An=!0)}if(Ce.needsLights&&(Ht.state.sunShadowMap.length>0&&qe.setValue(N,"sunShadowMap",Ht.state.sunShadowMap,j),Ht.state.directionalShadowMap.length>0&&qe.setValue(N,"directionalShadowMap",Ht.state.directionalShadowMap,j),Ht.state.spotShadowMap.length>0&&qe.setValue(N,"spotShadowMap",Ht.state.spotShadowMap,j),Ht.state.pointShadowMap.length>0&&qe.setValue(N,"pointShadowMap",Ht.state.pointShadowMap,j)),V.isSkinnedMesh){qe.setOptional(N,V,"bindMatrix"),qe.setOptional(N,V,"bindMatrixInverse");const He=V.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),qe.setValue(N,"boneTexture",He.boneTexture,j))}V.isBatchedMesh&&(qe.setOptional(N,V,"batchingTexture"),qe.setValue(N,"batchingTexture",V._matricesTexture,j),qe.setOptional(N,V,"batchingIdTexture"),qe.setValue(N,"batchingIdTexture",V._indirectTexture,j),qe.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&qe.setValue(N,"batchingColorTexture",V._colorsTexture,j));const Je=z.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&L.update(V,z,Xt),(an||Ce.receiveShadow!==V.receiveShadow)&&(Ce.receiveShadow=V.receiveShadow,qe.setValue(N,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&C.environment!==null&&(bt.envMapIntensity.value=C.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=lg()),an){if(qe.setValue(N,"toneMappingExposure",I.toneMappingExposure),Ce.needsLights&&ga(bt,An),Se&&H.fog===!0&&Fe.refreshFogUniforms(bt,Se),Fe.refreshMaterialUniforms(bt,H,te,Y,h.state.transmissionRenderTarget[u.id]),Ce.needsLights&&Ce.lightProbeGrid){const He=Ce.lightProbeGrid;bt.probesSH.value=He.texture,bt.probesMin.value.copy(He.boundingBox.min),bt.probesMax.value.copy(He.boundingBox.max),bt.probesResolution.value.copy(He.resolution)}Wa.upload(N,Oi(Ce),bt,j)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Wa.upload(N,Oi(Ce),bt,j),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&qe.setValue(N,"center",V.center),qe.setValue(N,"modelViewMatrix",V.modelViewMatrix),qe.setValue(N,"normalMatrix",V.normalMatrix),qe.setValue(N,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const He=H.uniformsGroups;for(let en=0,qt=He.length;en<qt;en++){const jt=He[en];ae.update(jt,Xt),ae.bind(jt,Xt)}}return Xt}function ga(u,C){u.ambientLightColor.needsUpdate=C,u.lightProbe.needsUpdate=C,u.sunLights.needsUpdate=C,u.sunLightShadows.needsUpdate=C,u.directionalLights.needsUpdate=C,u.directionalLightShadows.needsUpdate=C,u.pointLights.needsUpdate=C,u.pointLightShadows.needsUpdate=C,u.spotLights.needsUpdate=C,u.spotLightShadows.needsUpdate=C,u.rectAreaLights.needsUpdate=C,u.hemisphereLights.needsUpdate=C}function Yn(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(u,C,z){const H=X.get(u);H.__autoAllocateDepthBuffer=u.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(u.texture).__webglTexture=C,X.get(u.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(u,C){const z=X.get(u);z.__webglFramebuffer=C,z.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(u,C=0,z=0){oe=u,K=C,Q=z;let H=null,V=!1,Se=!1;if(u){const Ee=X.get(u);if(Ee.__useDefaultFramebuffer!==void 0){s.bindFramebuffer(N.FRAMEBUFFER,Ee.__webglFramebuffer),ce.copy(u.viewport),Ye.copy(u.scissor),Ve=u.scissorTest,s.viewport(ce),s.scissor(Ye),s.setScissorTest(Ve),ie=-1;return}else if(Ee.__webglFramebuffer===void 0)j.setupRenderTarget(u);else if(Ee.__hasExternalTextures)j.rebindTextures(u,X.get(u.texture).__webglTexture,X.get(u.depthTexture).__webglTexture);else if(u.depthBuffer){const ze=u.depthTexture;if(Ee.__boundDepthTexture!==ze){if(ze!==null&&X.has(ze)&&(u.width!==ze.image.width||u.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(u)}}const we=u.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const Ue=X.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(Ue[C])?H=Ue[C][z]:H=Ue[C],V=!0):u.samples>0&&j.useMultisampledRTT(u)===!1?H=X.get(u).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[z]:H=Ue,ce.copy(u.viewport),Ye.copy(u.scissor),Ve=u.scissorTest}else ce.copy(fe).multiplyScalar(te).floor(),Ye.copy(be).multiplyScalar(te).floor(),Ve=at;if(z!==0&&(H=q),s.bindFramebuffer(N.FRAMEBUFFER,H)&&s.drawBuffers(u,H),s.viewport(ce),s.scissor(Ye),s.setScissorTest(Ve),V){const Ee=X.get(u.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+C,Ee.__webglTexture,z)}else if(Se){const Ee=C;for(let we=0;we<u.textures.length;we++){const Ue=X.get(u.textures[we]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+we,Ue.__webglTexture,z,Ee)}}else if(u!==null&&z!==0){const Ee=X.get(u.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ee.__webglTexture,z)}ie=-1};function Fn(u){const C=X.get(u);return(C.__readFormat!==u.format||C.__readType!==u.type)&&(C.__readFormat=u.format,C.__readType=u.type,C.__formatReadable=T.textureFormatReadable(u.format),C.__typeReadable=T.textureTypeReadable(u.type)),C}this.readRenderTargetPixels=function(u,C,z,H,V,Se,Pe,Ee=0){if(!(u&&u.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=X.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe]),we){s.bindFramebuffer(N.FRAMEBUFFER,we);try{const Ue=u.textures[Ee],ze=Ue.format,Qe=Ue.type;u.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ee);const ye=Fn(Ue);if(ye.__formatReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=u.width-H&&z>=0&&z<=u.height-V&&N.readPixels(C,z,H,V,pe.convert(ze),pe.convert(Qe),Se)}finally{const Ue=oe!==null?X.get(oe).__webglFramebuffer:null;s.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(u,C,z,H,V,Se,Pe,Ee=0){if(!(u&&u.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=X.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&Pe!==void 0&&(we=we[Pe]),we)if(C>=0&&C<=u.width-H&&z>=0&&z<=u.height-V){s.bindFramebuffer(N.FRAMEBUFFER,we);const Ue=u.textures[Ee],ze=Ue.format,Qe=Ue.type;u.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ee);const ye=Fn(Ue);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,it),N.bufferData(N.PIXEL_PACK_BUFFER,Se.byteLength,N.STREAM_READ),N.readPixels(C,z,H,V,pe.convert(ze),pe.convert(Qe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Lt=oe!==null?X.get(oe).__webglFramebuffer:null;s.bindFramebuffer(N.FRAMEBUFFER,Lt);const mt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Hu(N,mt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,it),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Se),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(it),N.deleteSync(mt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(u,C=null,z=0){const H=Math.pow(2,-z),V=Math.floor(u.image.width*H),Se=Math.floor(u.image.height*H),Pe=C!==null?C.x:0,Ee=C!==null?C.y:0;j.setTexture2D(u,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,Pe,Ee,V,Se),s.unbindTexture()},this.copyTextureToTexture=function(u,C,z=null,H=null,V=0,Se=0){let Pe,Ee,we,Ue,ze,Qe,ye,it,Lt;const mt=u.isCompressedTexture?u.mipmaps[Se]:u.image;if(z!==null)Pe=z.max.x-z.min.x,Ee=z.max.y-z.min.y,we=z.isBox3?z.max.z-z.min.z:1,Ue=z.min.x,ze=z.min.y,Qe=z.isBox3?z.min.z:0;else{const bt=Math.pow(2,-V);Pe=Math.floor(mt.width*bt),Ee=Math.floor(mt.height*bt),u.isDataArrayTexture?we=mt.depth:u.isData3DTexture?we=Math.floor(mt.depth*bt):we=1,Ue=0,ze=0,Qe=0}H!==null?(ye=H.x,it=H.y,Lt=H.z):(ye=0,it=0,Lt=0);const pt=pe.convert(C.format),Bt=pe.convert(C.type);let Ce;C.isData3DTexture?(j.setTexture3D(C,0),Ce=N.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(j.setTexture2DArray(C,0),Ce=N.TEXTURE_2D_ARRAY):(j.setTexture2D(C,0),Ce=N.TEXTURE_2D),s.activeTexture(N.TEXTURE0),s.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(N.UNPACK_ALIGNMENT,C.unpackAlignment);const Ht=s.getParameter(N.UNPACK_ROW_LENGTH),nt=s.getParameter(N.UNPACK_IMAGE_HEIGHT),Xt=s.getParameter(N.UNPACK_SKIP_PIXELS),Ut=s.getParameter(N.UNPACK_SKIP_ROWS),an=s.getParameter(N.UNPACK_SKIP_IMAGES);s.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),s.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),s.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),s.pixelStorei(N.UNPACK_SKIP_ROWS,ze),s.pixelStorei(N.UNPACK_SKIP_IMAGES,Qe);const An=u.isDataArrayTexture||u.isData3DTexture,qe=C.isDataArrayTexture||C.isData3DTexture;if(u.isDepthTexture){const bt=X.get(u),Je=X.get(C),He=X.get(bt.__renderTarget),en=X.get(Je.__renderTarget);s.bindFramebuffer(N.READ_FRAMEBUFFER,He.__webglFramebuffer),s.bindFramebuffer(N.DRAW_FRAMEBUFFER,en.__webglFramebuffer);for(let qt=0;qt<we;qt++)An&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(u).__webglTexture,V,Qe+qt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(C).__webglTexture,Se,Lt+qt)),N.blitFramebuffer(Ue,ze,Pe,Ee,ye,it,Pe,Ee,N.DEPTH_BUFFER_BIT,N.NEAREST);s.bindFramebuffer(N.READ_FRAMEBUFFER,null),s.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||u.isRenderTargetTexture||X.has(u)){const bt=X.get(u),Je=X.get(C);s.bindFramebuffer(N.READ_FRAMEBUFFER,F),s.bindFramebuffer(N.DRAW_FRAMEBUFFER,$);for(let He=0;He<we;He++)An?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,V,Qe+He):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,V),qe?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Je.__webglTexture,Se,Lt+He):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Je.__webglTexture,Se),V!==0?N.blitFramebuffer(Ue,ze,Pe,Ee,ye,it,Pe,Ee,N.COLOR_BUFFER_BIT,N.NEAREST):qe?N.copyTexSubImage3D(Ce,Se,ye,it,Lt+He,Ue,ze,Pe,Ee):N.copyTexSubImage2D(Ce,Se,ye,it,Ue,ze,Pe,Ee);s.bindFramebuffer(N.READ_FRAMEBUFFER,null),s.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else qe?u.isDataTexture||u.isData3DTexture?N.texSubImage3D(Ce,Se,ye,it,Lt,Pe,Ee,we,pt,Bt,mt.data):C.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,Se,ye,it,Lt,Pe,Ee,we,pt,mt.data):N.texSubImage3D(Ce,Se,ye,it,Lt,Pe,Ee,we,pt,Bt,mt):u.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Se,ye,it,Pe,Ee,pt,Bt,mt.data):u.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Se,ye,it,mt.width,mt.height,pt,mt.data):N.texSubImage2D(N.TEXTURE_2D,Se,ye,it,Pe,Ee,pt,Bt,mt);s.pixelStorei(N.UNPACK_ROW_LENGTH,Ht),s.pixelStorei(N.UNPACK_IMAGE_HEIGHT,nt),s.pixelStorei(N.UNPACK_SKIP_PIXELS,Xt),s.pixelStorei(N.UNPACK_SKIP_ROWS,Ut),s.pixelStorei(N.UNPACK_SKIP_IMAGES,an),Se===0&&C.generateMipmaps&&N.generateMipmap(Ce),s.unbindTexture()},this.initRenderTarget=function(u){X.get(u).__webglFramebuffer===void 0&&j.setupRenderTarget(u)},this.initTexture=function(u){u.isCubeTexture?j.setTextureCube(u,0):u.isData3DTexture?j.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?j.setTexture2DArray(u,0):j.setTexture2D(u,0),s.unbindTexture()},this.resetState=function(){K=0,Q=0,oe=null,s.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ko}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(n),t.unpackColorSpace=Dt._getUnpackColorSpace()}}class dg extends nf{constructor(n){super(n)}load(n,t,i,r){const a=this,o=new af(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(n,function(g){try{t(a.parse(g))}catch(R){r?r(R):console.error(R),a.manager.itemError(n)}},i,r)}parse(n){function t(_){const x=new DataView(_),S=32/8*3+32/8*3*3+16/8,m=x.getUint32(80,!0);if(80+32/8+m*S===x.byteLength)return!0;const P=[115,111,108,105,100];for(let y=0;y<5;y++)if(i(P,x,y))return!1;return!0}function i(_,x,S){for(let m=0,b=_.length;m<b;m++)if(_[m]!==x.getUint8(S+m))return!1;return!0}function r(_){const x=new DataView(_),S=x.getUint32(80,!0);let m,b,P,y=!1,p,l,D,U,M;for(let B=0;B<70;B++)x.getUint32(B,!1)==1129270351&&x.getUint8(B+4)==82&&x.getUint8(B+5)==61&&(y=!0,p=new Float32Array(S*3*3),l=x.getUint8(B+6)/255,D=x.getUint8(B+7)/255,U=x.getUint8(B+8)/255,M=x.getUint8(B+9)/255);const A=84,h=50,w=new mi,f=new Float32Array(S*3*3),v=new Float32Array(S*3*3),I=new wt;for(let B=0;B<S;B++){const k=A+B*h,q=x.getFloat32(k,!0),F=x.getFloat32(k+4,!0),$=x.getFloat32(k+8,!0);if(y){const K=x.getUint16(k+48,!0);(K&32768)===0?(m=(K&31)/31,b=(K>>5&31)/31,P=(K>>10&31)/31):(m=l,b=D,P=U)}for(let K=1;K<=3;K++){const Q=k+K*12,oe=B*3*3+(K-1)*3;f[oe]=x.getFloat32(Q,!0),f[oe+1]=x.getFloat32(Q+4,!0),f[oe+2]=x.getFloat32(Q+8,!0),v[oe]=q,v[oe+1]=F,v[oe+2]=$,y&&(I.setRGB(m,b,P,no),p[oe]=I.r,p[oe+1]=I.g,p[oe+2]=I.b)}}return w.setAttribute("position",new Jn(f,3)),w.setAttribute("normal",new Jn(v,3)),y&&(w.setAttribute("color",new Jn(p,3)),w.hasColors=!0,w.alpha=M),w}function a(_){const x=new mi,S=/solid([\s\S]*?)endsolid/g,m=/facet([\s\S]*?)endfacet/g,b=/solid\s(.+)/;let P=0;const y=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+y+y+y,"g"),l=new RegExp("normal"+y+y+y,"g"),D=[],U=[],M=[],A=new Ie;let h,w=0,f=0,v=0;for(;(h=S.exec(_))!==null;){f=v;const I=h[0],B=(h=b.exec(I))!==null?h[1]:"";for(M.push(B);(h=m.exec(I))!==null;){let F=0,$=0;const K=h[0];for(;(h=l.exec(K))!==null;)A.x=parseFloat(h[1]),A.y=parseFloat(h[2]),A.z=parseFloat(h[3]),$++;for(;(h=p.exec(K))!==null;)D.push(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3])),U.push(A.x,A.y,A.z),F++,v++;$!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+P),F!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+P),P++}const k=f,q=v-f;x.userData.groupNames=M,x.addGroup(k,q,w),w++}return x.setAttribute("position",new Xa(D,3)),x.setAttribute("normal",new Xa(U,3)),x}function o(_){return typeof _!="string"?new TextDecoder().decode(_):_}function g(_){if(typeof _=="string"){const x=new Uint8Array(_.length);for(let S=0;S<_.length;S++)x[S]=_.charCodeAt(S)&255;return x.buffer||x}else return _}const R=g(n);return t(R)?r(R):a(o(n))}}const al=3,fg="face-skin-v1",Ya=1e-6,nc=Object.freeze([10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109]),ic=.012,pg=.055,hg=.05,mg=Object.freeze([10,33,263,1,152,234,454,172,397]),ac=Object.freeze({diamond:"diamante",heart:"coracao",oblong:"retangular",oval:"oval",round:"redondo",square:"quadrado",triangle:"triangular"});function Qn(e,n,t){return Math.max(n,Math.min(t,e))}function Qr(e){if(!e.length)return 0;const n=[...e].sort((i,r)=>i-r),t=Math.floor(n.length/2);return n.length%2?n[t]:(n[t-1]+n[t])*.5}function hi(e,n,t,i){const r=e?.[n];return r?{x:r.x*t,y:r.y*i}:null}function rl(e,n,t){const i=hi(e,33,n,t),r=hi(e,263,n,t),a=hi(e,152,n,t);if(!i||!r||!a)return null;const o=r.x-i.x,g=r.y-i.y,R=Math.hypot(o,g);if(R<Ya)return null;const _={x:o/R,y:g/R};let x={x:-_.y,y:_.x};const S={x:(i.x+r.x)*.5,y:(i.y+r.y)*.5},m={x:a.x-S.x,y:a.y-S.y};m.x*x.x+m.y*x.y<0&&(x={x:-x.x,y:-x.y});const b=y=>{const p=y.x-S.x,l=y.y-S.y;return{x:p*_.x+l*_.y,y:p*x.x+l*x.y}},P=y=>({x:S.x+y.x*_.x+y.y*x.x,y:S.y+y.x*_.y+y.y*x.y});return{origin:S,horizontal:_,vertical:x,eyeDistance:R,rollDegrees:Math.atan2(g,o)*180/Math.PI,project:b,unproject:P}}function cn(e,n,t,i,r){const a=hi(n,t,i,r);return a?e.project(a):null}function Jr(e,n,t,i,r,a){const o=i.unproject({x:r,y:a}),g=Math.round(o.x),R=Math.round(o.y);return g<0||R<0||g>=n||R>=t?0:Number(e[R*n+g])||0}function Gr(e,n,t,i,r,a,o,g,R){const _=[],x=[];for(let S=-R;S<=R;S+=1){let m=Number.POSITIVE_INFINITY,b=Number.NEGATIVE_INFINITY;for(let P=Math.floor(a);P<=Math.ceil(o);P+=1)Jr(e,n,t,i,P,r+S)<g||(m=Math.min(m,P),b=Math.max(b,P));Number.isFinite(m)&&b>m&&(_.push(m),x.push(b))}return _.length?{left:Qr(_),right:Qr(x)}:null}function ol(e,n){const t=[];for(let i=0;i<e.length;i+=1){const r=e[i],a=e[(i+1)%e.length];if(!r||!a||!(r.y<=n&&n<a.y||a.y<=n&&n<r.y))continue;const o=(n-r.y)/(a.y-r.y);t.push(r.x+o*(a.x-r.x))}return t.length<2?null:{left:Math.min(...t),right:Math.max(...t)}}function rc(e,n,t,i,r){const a=ol(n,t);if(!e||!a)return e;const o=i*r;return{left:Math.max(e.left,a.left-o),right:Math.min(e.right,a.right+o)}}function _g(e,n){if(!e||n<e.fromY||n>e.toY)return null;const t=ol(e.oval,n);return t?{left:t.left-e.margin,right:t.right+e.margin}:null}function oc({mask:e,width:n,height:t,frame:i,centerX:r,radius:a,yMinimum:o,yMaximum:g,threshold:R,findTop:_}){const x=[];for(let S=Math.round(r-a);S<=Math.round(r+a);S+=1){let m=null;if(_){for(let b=Math.floor(o);b<=Math.ceil(g);b+=1)if(Jr(e,n,t,i,S,b)>=R){m=b;break}}else for(let b=Math.ceil(g);b>=Math.floor(o);b-=1)if(Jr(e,n,t,i,S,b)>=R){m=b;break}m!=null&&x.push(m)}return x.length?Qr(x):null}function gg(e,n,t){const i={x:e.x-n.x,y:e.y-n.y},r={x:t.x-n.x,y:t.y-n.y},a=Math.hypot(i.x,i.y)*Math.hypot(r.x,r.y);if(a<Ya)return 0;const o=Qn((i.x*r.x+i.y*r.y)/a,-1,1);return Math.acos(o)*180/Math.PI}function di(e,n,t){return Math.max(0,1-Math.abs(e-n)/t)}function fi(e,n,t){return Qn((n-e)/t,0,1)}function Ci(e,n,t){return Qn((e-n)/t,0,1)}function vg(e,n){const t=e.lengthToCheek,i=e.foreheadToCheek,r=e.jawToCheek,a=e.jawToForehead,o=e.chinAngleDegrees,g={oval:.4*di(t,1.38,.28)+.3*di(i,.91,.18)+.3*di(r,.82,.18),round:.45*fi(t,1.24,.25)+.3*di(i,.94,.16)+.25*Ci(o,105,35),square:.35*fi(t,1.34,.24)+.35*di(r,.94,.15)+.3*fi(o,105,35),oblong:.6*Ci(t,1.38,.28)+.2*di(i,.94,.16)+.2*di(r,.88,.16),heart:.35*Ci(i,.94,.16)+.4*fi(a,.88,.2)+.25*fi(o,100,35),diamond:.45*fi(i,.9,.18)+.4*fi(r,.84,.18)+.15*Ci(t,1.25,.28),triangle:.65*Ci(a,1.02,.22)+.35*Ci(r,.9,.16)},R=Object.fromEntries(Object.entries(g).map(([y,p])=>[y,Math.max(p,.001)**2])),_=Object.values(R).reduce((y,p)=>y+p,0),x=Object.fromEntries(Object.entries(R).map(([y,p])=>[y,p/_])),S=Object.entries(x).sort((y,p)=>p[1]-y[1]),[m,b]=S[0],P=b-(S[1]?.[1]||0);return{label:m,appLabel:ac[m]||"indefinido",scores:g,probabilities:x,appProbabilities:Object.fromEntries(Object.entries(x).map(([y,p])=>[ac[y],p])),confidence:Qn((b*.7+P*.3)*n,0,1)}}function sl(e,n,t=null){const i=Number(n?.width)||0,r=Number(n?.height)||0,a=rl(e,i,r);if(!a||e.length<=454)return{eligible:!1,poseQuality:0,motion:Number.POSITIVE_INFINITY};const o=cn(a,e,1,i,r),g=cn(a,e,152,i,r),R=cn(a,e,234,i,r),_=cn(a,e,454,i,r),x=Math.abs(_.x-R.x),S=Math.abs(o.x)/Math.max(a.eyeDistance,Ya),m=x/Math.max(1,Math.min(i,r)),b=g.y/Math.max(x,Ya),P=1-Qn((Math.abs(a.rollDegrees)-2)/8,0,1),y=1-Qn((S-.035)/.15,0,1),p=1-Qn(Math.abs(b-.82)/.42,0,1),l=Qn(.38*y+.32*P+.3*p,0,1);let D=0;if(t?.length>454){let U=0,M=0;for(const A of mg){const h=e[A],w=t[A];!h||!w||(U+=(h.x-w.x)**2+(h.y-w.y)**2,M+=1)}D=M?Math.sqrt(U/M):Number.POSITIVE_INFINITY}return{eligible:l>=.72&&Math.abs(a.rollDegrees)<=9&&S<=.16&&m>=.24&&b>=.42&&b<=1.25&&(!t||D<=.008),poseQuality:l,motion:D,rollDegrees:a.rollDegrees,yawProxy:S,faceScale:m,eyeToChin:b}}function cl({landmarks:e,faceSkinMask:n,width:t,height:i,threshold:r=.35,poseQuality:a=1}){if(!Array.isArray(e)||e.length<=454)throw new Error("Landmarks insuficientes para medir o rosto.");if(!n||n.length!==t*i)throw new Error("A máscara face-skin não corresponde às dimensões informadas.");const o=rl(e,t,i);if(!o)throw new Error("Não foi possível construir o sistema local do rosto.");const g=nc.map(se=>cn(o,e,se,t,i)),R=g.map(se=>se.x),_=Math.max(...R)-Math.min(...R),x=cn(o,e,1,t,i),S=cn(o,e,152,t,i),m=cn(o,e,10,t,i),b=(x.x+S.x)*.5,P=Math.max(2,Math.round(_*.035)),y=oc({mask:n,width:t,height:i,frame:o,centerX:b,radius:P,yMinimum:-_*.62,yMaximum:m.y+_*.12,threshold:r,findTop:!0}),p=oc({mask:n,width:t,height:i,frame:o,centerX:S.x,radius:P,yMinimum:S.y-_*.12,yMaximum:S.y+_*.14,threshold:r,findTop:!1});if(y==null||p==null||p<=y)throw new Error("A máscara não contém extremos válidos de testa e queixo.");const l=p-y,D=Math.max(1,Math.round(l*.009)),U=cn(o,e,55,t,i),M=cn(o,e,285,t,i),A=cn(o,e,93,t,i),h=cn(o,e,323,t,i),w=cn(o,e,172,t,i),f=cn(o,e,397,t,i),v=(U.y+M.y)*.5,I={forehead:y+(v-y)*.48,cheek:(A.y+h.y)*.5,jaw:(w.y+f.y)*.5},B=b-_*.68,k=b+_*.68,q=Gr(n,t,i,o,I.forehead,B,k,r,D),F=rc(Gr(n,t,i,o,I.cheek,B,k,r,D),g,I.cheek,_,ic),$=rc(Gr(n,t,i,o,I.jaw,B,k,r,D),g,I.jaw,_,pg);if(!q||!F||!$)throw new Error("Não foi possível medir testa, maçãs do rosto e mandíbula.");const K={forehead:q.right-q.left,cheek:F.right-F.left,jaw:$.right-$.left};if(Math.min(...Object.values(K))<=0)throw new Error("A segmentação produziu larguras faciais inválidas.");const Q=gg({x:$.left,y:I.jaw},{x:S.x,y:p},{x:$.right,y:I.jaw}),oe={lengthToCheek:l/K.cheek,foreheadToCheek:K.forehead/K.cheek,jawToCheek:K.jaw/K.cheek,jawToForehead:K.jaw/K.forehead,chinAngleDegrees:Q};return{...vg(oe,a),version:fg,poseQuality:a,rollDegrees:o.rollDegrees,faceBounds:{oval:nc.map(se=>hi(e,se,t,i)),margin:_*ic,fromY:Math.min(hi(e,162,t,i).y,hi(e,389,t,i).y),toY:o.unproject({x:0,y:I.cheek+_*hg}).y},measurements:{faceLength:l,...K},ratios:oe,levels:I,points:{hairline:o.unproject({x:b,y}),chin:o.unproject({x:S.x,y:p}),foreheadLeft:o.unproject({x:q.left,y:I.forehead}),foreheadRight:o.unproject({x:q.right,y:I.forehead}),cheekLeft:o.unproject({x:F.left,y:I.cheek}),cheekRight:o.unproject({x:F.right,y:I.cheek}),jawLeft:o.unproject({x:$.left,y:I.jaw}),jawRight:o.unproject({x:$.right,y:I.jaw})}}}const Sg="/mediapipe/wasm",Eg="/face_landmarker.task",xg="/selfie_multiclass_256x256.tflite",Mg=512;function Tg(e,n){const t={diamante:"quadrado",retangular:"oval"},i={};for(const[o,g]of Object.entries(e||{})){const R=Object.prototype.hasOwnProperty.call(t,o)?t[o]:o;Object.prototype.hasOwnProperty.call(n,R)&&(i[R]=(i[R]||0)+g)}const r=Object.values(i).reduce((o,g)=>o+g,0);if(!r)return{};const a={};for(const o of Object.keys(n))a[o]=Math.round((i[o]||0)/r*100);return a}function ll(e,n,t,i,r){const a=document.createElement("canvas");a.width=i,a.height=r;const o=a.getContext("2d");o.drawImage(e,0,0,i,r);const g=document.createElement("canvas");g.width=i,g.height=r;const R=g.getContext("2d"),_=R.createImageData(i,r),x=Object.values(n.points),S=Math.max(0,Math.floor(Math.min(...x.map(h=>h.x))-i*.01)),m=Math.min(i-1,Math.ceil(Math.max(...x.map(h=>h.x))+i*.01)),b=Math.max(0,Math.floor(n.points.hairline.y-r*.025)),P=Math.min(r-1,Math.ceil(n.points.chin.y+r*.025)),y=(h,w)=>{for(let f=-1;f<=1;f+=1){const v=Math.round(h+f),I=Math.round(w);if(v<0||v>=i||I<0||I>=r)continue;const B=(I*i+v)*4;_.data[B]=24,_.data[B+1]=235,_.data[B+2]=226,_.data[B+3]=245}},p=new Map,l=h=>(p.has(h)||p.set(h,_g(n.faceBounds,h)),p.get(h)),D=(h,w)=>{if(t[w*i+h]<.35)return!1;const f=l(w);return!f||h>=f.left&&h<=f.right};for(let h=b;h<=P;h+=1){let w=-1,f=-1;for(let v=S;v<=m;v+=1)D(v,h)&&(w<0&&(w=v),f=v);w>=0&&f>w&&(y(w,h),y(f,h))}for(let h=S;h<=m;h+=1){let w=-1,f=-1;for(let v=b;v<=P;v+=1)D(h,v)&&(w<0&&(w=v),f=v);w>=0&&f>w&&(y(h,w),y(h,f))}R.putImageData(_,0,0),o.drawImage(g,0,0);const U=Math.max(2,i/220),M=(h,w,f)=>{o.save(),o.strokeStyle="rgba(0, 0, 0, 0.72)",o.lineWidth=U+3,o.beginPath(),o.moveTo(h.x,h.y),o.lineTo(w.x,w.y),o.stroke(),o.strokeStyle=f,o.lineWidth=U,o.beginPath(),o.moveTo(h.x,h.y),o.lineTo(w.x,w.y),o.stroke(),o.fillStyle=f;for(const v of[h,w])o.beginPath(),o.arc(v.x,v.y,U*1.8,0,Math.PI*2),o.fill();o.restore()},A=n.points;return M(A.hairline,A.chin,"#ffd429"),M(A.foreheadLeft,A.foreheadRight,"#ef5bff"),M(A.cheekLeft,A.cheekRight,"#39e36d"),M(A.jawLeft,A.jawRight,"#ff9b35"),o.save(),o.strokeStyle="#47a7ff",o.lineWidth=U,o.beginPath(),o.moveTo(A.jawLeft.x,A.jawLeft.y),o.lineTo(A.chin.x,A.chin.y),o.lineTo(A.jawRight.x,A.jawRight.y),o.stroke(),o.restore(),a.toDataURL("image/jpeg",.93)}function bg(e){return new Promise((n,t)=>{const i=new Image;i.onload=()=>n(i),i.onerror=()=>t(new Error("Não foi possível ler a foto.")),i.src=e})}async function Ag(e){const n=await bg(e),t=Math.min(1,Mg/Math.max(n.width,n.height)),i=document.createElement("canvas");return i.width=Math.max(1,Math.round(n.width*t)),i.height=Math.max(1,Math.round(n.height*t)),i.getContext("2d",{alpha:!1}).drawImage(n,0,0,i.width,i.height),i}async function Rg(e,n){const t=await Kc.createFromOptions(e,{baseOptions:{modelAssetPath:Eg,delegate:"CPU"},runningMode:"IMAGE",numFaces:1});try{return t.detect(n).faceLandmarks?.[0]||null}finally{t.close()}}async function wg(e,n){const t=await jc.createFromOptions(e,{baseOptions:{modelAssetPath:xg,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1});try{let i=null;return t.segment(n,r=>{const a=r.confidenceMasks?.[al];a&&(i={dados:a.getAsFloat32Array(),width:a.width,height:a.height}),r.close?.()}),i}finally{t.close()}}async function Tv(e){const n=await Ag(e),t=await jr.forVisionTasks(Sg),i=await Rg(t,n);if(!i)throw new Error("Nenhum rosto encontrado na foto.");const r=sl(i,{width:n.width,height:n.height}),a=await wg(t,n);if(!a)throw new Error("O segmentador não retornou a classe face-skin.");const o=cl({landmarks:i,faceSkinMask:a.dados,width:a.width,height:a.height,threshold:.35,poseQuality:r.poseQuality});return{ready:!0,image:ll(n,o,a.dados,a.width,a.height),details:o}}const Cg={redondo:{x:21.2,y:27.6,w:257.7,h:364.9},quadrado:{x:22.8,y:19,w:254.5,h:382},coracao:{x:10.1,y:14.5,w:279.8,h:391},triangular:{x:28.7,y:10.3,w:242.5,h:399.4},oval:{x:19.2,y:13.7,w:261.6,h:392.6}},Pg={redondo:"M154.7,27.6c41,0,95.2,20.4,112.7,77.9c21,69.1,9.3,153.6-3,190.6c-11.5,34.6-62.2,96.4-122,96.4c-27.9,0-69.5-19-109.8-109.7c-11.4-25.6-21-128.4,6.3-195.2C62,30.8,130.2,27.9,143.7,27.9c0.8,0,1.3,0,1.4,0l0.6,0l0.6,0C148.9,27.7,151.7,27.6,154.7,27.6z",quadrado:"M264.7,94.6C249.3,32.9,176.4,19,152,19l-1.1,0v0c-0.1,0-0.3,0-0.4,0l-0.5,0l-0.5,0c-0.1,0-0.3,0-0.4,0v0l-1.1,0c-24.3,0-97.2,13.9-112.6,75.6c-15.5,62-18.1,176.7,0.3,213.6c18.2,36.4,73.9,89.5,76.2,91.6l1.2,1.1l36,0.1v0l1,0l1,0v0l36-0.1l1.2-1.1c2.4-2.1,58-55.1,76.2-91.6C282.8,271.3,280.2,156.6,264.7,94.6z",coracao:"M289.8,214.2c-5.9-82.9-9.5-133-34.3-159.2C232.1,30.3,189.1,13.9,150,14.5C110.9,13.9,67.9,30.3,44.5,55c-24.8,26.2-28.4,76.2-34.3,159.2l-0.1,0.9l0.3,0.9C42.2,305.7,98.9,407,150,405.5c51.1,1.5,107.8-99.9,139.6-189.5l0.3-0.9L289.8,214.2z",triangular:"M264.7,101C255,52.4,204.6,12.7,151,10.4v-0.1c-0.3,0-0.7,0-1,0c-0.3,0-0.7,0-1,0v0.1C95.4,12.7,45,52.4,35.3,101c-7.4,37-6.8,100.2-6.3,150.9c0.1,11.9,0.2,23.2,0.2,33.5v0.6l0.2,0.6c14.3,48.7,74.8,115.3,119.6,122.8v0.3c0.3,0,0.7-0.1,1-0.2c0.3,0,0.7,0.1,1,0.2v-0.3c44.8-7.5,105.3-74.1,119.6-122.8l0.2-0.6v-0.6c0-10.2,0.1-21.5,0.2-33.5C271.5,201.2,272.1,138.1,264.7,101z",oval:"M280.7,173.8c-13.1-65.3-32.8-109.4-60.4-134.8c-24.7-22.7-51.4-25.6-70.3-25.3c-18.9-0.3-45.6,2.6-70.3,25.3c-27.6,25.3-47.3,69.4-60.4,134.8l-0.1,0.5l0,0.5c1.5,68.2,15.3,97.7,36.1,142.3l0.4,0.9c26.2,56.1,60,88.3,92.8,88.3c0.5,0,1,0,1.5,0c0.5,0,1,0,1.5,0c32.8,0,66.6-32.2,92.8-88.3l0.4-0.9c20.8-44.6,34.6-74.1,36.1-142.3l0-0.5L280.7,173.8z"},Hr={};function yg(e){const n=Pg[e];return n?(Hr[e]||(Hr[e]=new Path2D(n)),Hr[e]):null}function Mt(e,n=0){const t=Number(e);return Number.isFinite(t)?t:n}function Lg({userAgent:e="",platform:n="",maxTouchPoints:t=0}={}){const i=String(e||""),r=String(n||""),a=Math.max(0,Mt(t)),o=/Android|iPhone|iPad|iPod/i.test(i),g=r==="MacIntel"&&a>1;return{isPhysicalMobile:o||g,isIPadLike:/iPad/i.test(i)||g,reason:g?"ipad-touch-desktop-identity":o?"mobile-user-agent":"desktop"}}function Ng({viewportWidth:e=0,viewportHeight:n=0,orientationType:t=""}={}){const i=Mt(e),r=Mt(n),a=String(t||"").toLowerCase();return(i>0&&r>0&&i!==r?i>r:a.startsWith("landscape"))?{key:"landscape",width:1280,height:720,aspectRatio:16/9}:{key:"portrait",width:720,height:1280,aspectRatio:9/16}}function Dg({isPhysicalMobile:e=!1,viewportWidth:n=0,viewportHeight:t=0,rawContentRotation:i=0,deviceGamma:r=null,deviceOrientationAgeMs:a=Number.POSITIVE_INFINITY,deviceLandscapeStableMs:o=0,sensorFreshForMs:g=2500,sensorMinimumStableMs:R=600}={}){const _=Mt(n),x=Mt(t),S=_>0&&x>0&&_>x,m=_>0&&x>0&&x>_,b=ei(i),P=Math.abs(b)===90,y=Number(r),p=Number.isFinite(y)&&Number.isFinite(Number(a))&&Number(a)>=0&&Number(a)<=Math.max(0,Mt(g,2500)),l=p&&Math.abs(y)>=45&&Mt(o)>=Math.max(0,Mt(R,600)),D=P||l;return{mismatch:!!(e&&m&&D),viewportLandscape:S,viewportPortrait:m,physicalLandscape:D,cameraLandscape:P,sensorLandscape:l,sensorFresh:p,evidence:P&&l?"camera+sensor":P?"camera":l?"sensor":"none",rawContentRotation:b}}function oo(e){let n=Mt(e);for(;n>90;)n-=180;for(;n<-90;)n+=180;return n}function eo(e){const n=e?.[33],t=e?.[263];if(!n||!t)return null;const i=Mt(t.x,NaN)-Mt(n.x,NaN),r=Mt(t.y,NaN)-Mt(n.y,NaN);return!Number.isFinite(i)||!Number.isFinite(r)||Math.hypot(i,r)<1e-6?null:oo(Math.atan2(r,i)*180/Math.PI)}function sc(e,n=65){const t=eo(e),i=e?.[33],r=e?.[263],a=e?.[1];if(!Number.isFinite(t)||!a)return 0;const o=(Mt(i.x)+Mt(r.x))/2,g=(Mt(i.y)+Mt(r.y))/2,R=Mt(a.x,NaN)-o,_=Mt(a.y,NaN)-g;if(!Number.isFinite(R)||!Number.isFinite(_))return 0;const x=Math.hypot(Mt(r.x)-Mt(i.x),Mt(r.y)-Mt(i.y));return Math.abs(t)>=n?-R>=R?-90:90:_<-Math.max(x*.08,.005)?180:0}function cc({calculatedRotation:e=0,eyeLineAngleDeg:n=null,activeRotation:t=null,initialFlatMaximumDeg:i=28,initialQuarterMinimumDeg:r=78,switchToFlatMaximumDeg:a=30,switchToQuarterMinimumDeg:o=78}={}){const g=Number(n);if(!Number.isFinite(g))return null;const R=ei(e),_=Number(t),S=t!=null&&t!==""&&[0,-90,90,180,-180].includes(_)?ei(_):null,m=Math.abs(oo(g)),b=Math.abs(R)===90;return S===null?(b?m>=Mt(r,78):m<=Mt(i,28))?R:null:(Math.abs(S)===90?b||m<=Mt(a,30):!b||m>=Mt(o,78))?R:null}function Ig(e,{minimumSamples:n=6,requiredRatio:t=.75}={}){const i=(Array.isArray(e)?e:[]).map(Number).filter(Number.isFinite);if(i.length<n)return null;const r=i.reduce((o,g)=>{const R=g===-90||g===90||Math.abs(g)===180?g:0,_=Math.abs(R)===180?180:R;return o[_]+=1,o},{"-90":0,0:0,90:0,180:0}),a=[0,-90,90,180].sort((o,g)=>r[g]-r[o])[0];return r[a]/i.length>=t?a:null}function ei(e){const n=Number(e);return Math.abs(n)===180?180:n===-90||n===90?n:0}function Ba(e,n=!1){const t=ei(e);return n&&Math.abs(t)===90?-t:t}function Ug(e,n=0){return oo(Mt(e)-ei(n))}function Fg({initialRotation:e=0,minimumSamples:n=14,minimumStableMs:t=650,requiredRatio:i=.82,maximumSamples:r=24,maximumGapMs:a=350,cooldownMs:o=1500,reportCandidateAfterSamples:g=5,rejectionSamples:R=4}={}){let _=ei(e),x=null,S=[],m=!1,b=0,P=Number.NEGATIVE_INFINITY,y=Number.NEGATIVE_INFINITY;function p(){x=null,S=[],m=!1,b=0}function l(D){const U=S.filter(h=>h.rotation===x),M=U.length>1?D-U[0].at:0,A=S.length?U.length/S.length:0;return{candidateRotation:x,sampleCount:U.length,windowSamples:S.length,stableMs:Math.max(0,M),confidence:A}}return{reset(D=_,U=Number.NEGATIVE_INFINITY){return _=ei(D),P=Number(U),p(),_},observe(D,U=performance.now()){const M=Number.isFinite(Number(U))?Number(U):0,A=ei(D);let h=null;if(M-P>a&&x!==null){const k=l(P);k.sampleCount>=g&&(h=k),p()}if(P=M,A===_){if(x===null)return{changed:!1,candidateStarted:!1,rejected:h,activeRotation:_};S.push({rotation:A,at:M}),S=S.slice(-r),b+=1;const k=l(M);return b>=R&&(k.sampleCount>=g&&(h=k),p()),{changed:!1,candidateStarted:!1,rejected:h,activeRotation:_,...h?{}:k}}if(x!==A){if(x!==null){const k=l(M);k.sampleCount>=g&&(h=k)}x=A,S=[],m=!1}b=0,S.push({rotation:A,at:M}),S=S.slice(-r);const w=l(M),f=!m&&w.sampleCount>=g;f&&(m=!0);const v=w.sampleCount>=n&&w.stableMs>=t&&w.confidence>=i,I=M-y>=o;if(!v||!I)return{changed:!1,candidateStarted:f,rejected:h,activeRotation:_,...w};const B=_;return _=x,y=M,p(),{changed:!0,candidateStarted:f,rejected:h,previousRotation:B,activeRotation:_,...w}},getState(){return{activeRotation:_,candidateRotation:x,candidateSamples:S.length,lastAppliedAt:y}}}}function lc(e){const n=Math.round(Number(e)||0);return Math.max(0,n)}function ni(e){const n=Number(e);return n===90||n===-90?n:Math.abs(n)===180?180:0}function uc(e,n,t=0){const i=lc(e),r=lc(n),a=ni(t),o=Math.abs(a)===90;return{width:o?r:i,height:o?i:r,rotationDeg:a}}function Og(e,n=0){const t=Number(e?.x)||0,i=Number(e?.y)||0;switch(ni(n)){case 90:return{...e,x:i,y:1-t};case-90:return{...e,x:1-i,y:t};case 180:return{...e,x:1-t,y:1-i};default:return{...e,x:t,y:i}}}function Bg(e,n=0){if(!Array.isArray(e))return[];const t=ni(n);return t?e.map(i=>Og(i,t)):e}const to=Object.freeze([0,90,-90,180]);function dc(e){const n=Number(e);return Number.isFinite(n)&&n>0?n:0}function fc(e,n,t=.08){const i=dc(e),r=dc(n);if(!i||!r)return"unknown";const a=i/r;return Math.abs(a-1)<=Math.max(0,Number(t)||0)?"square":a>1?"landscape":"portrait"}function ul(e){return e.reduce((n,t)=>{const i=ni(t);return n.includes(i)||n.push(i),n},[])}function Gg({sourceWidth:e=0,sourceHeight:n=0,viewportWidth:t=0,viewportHeight:i=0,preferredRotation:r=null}={}){const a=fc(e,n),o=fc(t,i),_=!["unknown","square"].includes(a)&&!["unknown","square"].includes(o)&&a!==o?[90,-90,0,180]:[0,180,90,-90],x=r!=null;return ul([...x?[r]:[],..._,...to])}function Hg({minimumFramesWithoutFace:e=24,minimumMsWithoutFace:n=700,maximumMsUnconfirmedFace:t=1800,retryPauseMs:i=3500,maximumTotalMs:r=0}={}){const a=Math.max(1,Number(e)||1),o=Math.max(0,Number(n)||0),g=Math.max(o,Number(t)||0),R=Math.max(o,Number(i)||0),_=Math.max(0,Number(r)||0);let x=null;function S(U={}){return x?{active:x.active,confirmed:x.confirmed,phase:x.phase,candidates:[...x.candidates],candidateIndex:x.candidateIndex,candidateRotation:x.candidates[x.candidateIndex],round:x.round,...U}:{active:!1,phase:"idle",...U}}function m({candidates:U=to,processedFrames:M=0,now:A=0}={}){return x={active:!0,confirmed:!1,phase:"probing",candidates:ul([...Array.isArray(U)?U:[],...to]),candidateIndex:0,candidateStartedFrame:Number(M)||0,candidateStartedAt:Number(A)||0,startedAt:Number(A)||0,lastFaceAt:Number.NEGATIVE_INFINITY,round:0},S({changed:!0,reason:"started"})}function b(U,M){if(!x?.active||!_)return null;const A=M-x.startedAt;return A<_?null:(x.active=!1,x.confirmed=!1,x.phase="fallback",x.candidateIndex=0,x.candidateStartedFrame=U,x.candidateStartedAt=M,S({changed:!0,fallback:!0,reason:"time_budget",elapsedTotalMs:A}))}function P({currentFrame:U,currentTime:M,reason:A,elapsedMs:h}){const w=x.candidateIndex>=x.candidates.length-1;return w?(x.round+=1,x.candidateIndex=0):x.candidateIndex+=1,x.candidateStartedFrame=U,x.candidateStartedAt=M,x.lastFaceAt=Number.NEGATIVE_INFINITY,S({changed:!0,reason:w?"retry_round":A,elapsedMs:h})}function y({processedFrames:U=0,now:M=0}={}){if(!x?.active)return S();const A=Number(U)||0,h=Number(M)||0,w=b(A,h);if(w)return w;const f=h-x.candidateStartedAt,v=A-x.candidateStartedFrame;return x.lastFaceAt=h,v>=a&&f>=g?P({currentFrame:A,currentTime:h,reason:"face_unconfirmed",elapsedMs:f}):S({faceObserved:!0})}function p({processedFrames:U=0,now:M=0}={}){if(!x?.active)return S();const A=Number(U)||0,h=Number(M)||0,w=b(A,h);if(w)return w;const f=A-x.candidateStartedFrame,v=h-x.candidateStartedAt,I=h-x.lastFaceAt<o,k=x.candidateIndex>=x.candidates.length-1?R:o;return I||f<a||v<k?S({changed:!1,framesWithoutFace:f,elapsedMs:v}):P({currentFrame:A,currentTime:h,reason:"no_face",elapsedMs:v})}function l(U){return x?(x.active=!1,x.confirmed=!0,x.phase="locked",S({changed:!1,rotation:ni(U)})):{active:!1,confirmed:!0,phase:"locked",rotation:ni(U)}}function D(){x=null}return{reset:m,observeFace:y,observeNoFace:p,confirm:l,stop:D,snapshot:S}}function Vg(e){const n=Number(e);return Number.isFinite(n)?Math.max(0,n):0}function Vr(e=[],n=0){return e.map((i,r)=>({rotation:ni(i?.rotation),score:Vg(i?.score),detections:Math.max(0,Number(i?.detections)||0),index:r})).filter(i=>i.detections>0).sort((i,r)=>r.detections-i.detections||r.score-i.score||i.index-r.index)[0]||{rotation:ni(n),score:0,detections:0,index:-1}}function $n(e){const n=Number(e);return Number.isFinite(n)?n:0}function kg({stabilityMs:e=1200,minimumSamples:n=4,dimensionTolerancePx:t=3,cooldownMs:i=2500}={}){const r=Math.max(0,$n(e)),a=Math.max(1,$n(n)),o=Math.max(0,$n(t)),g=Math.max(0,$n(i));let R="",_=null,x=Number.NEGATIVE_INFINITY;function S(y=""){R=String(y||""),_=null,x=Number.NEGATIVE_INFINITY}function m(y,p=0){R=String(y||""),_=null,x=$n(p)+g}function b({key:y="",width:p=0,height:l=0,now:D=0}={}){const U=String(y||""),M=$n(p),A=$n(l),h=$n(D);if(!U||U===R)return _=null,{confirmed:!1,pending:!1,reason:"active_orientation"};_?.key===U&&Math.abs(_.width-M)<=o&&Math.abs(_.height-A)<=o?(_.width=M,_.height=A,_.samples+=1):_={key:U,width:M,height:A,firstSeenAt:h,samples:1};const f=Math.max(0,h-_.firstSeenAt),v={key:_.key,width:_.width,height:_.height,samples:_.samples,stableMs:f,confirmed:!1,pending:!0};return h<x?{...v,reason:"restart_cooldown"}:_.samples<a||f<r?{...v,reason:"collecting_stability"}:{...v,confirmed:!0,pending:!1,reason:"stable_viewport"}}function P(){return{activeKey:R,candidate:_?{..._}:null,cooldownUntil:x}}return{reset:S,confirm:m,observe:b,snapshot:P}}function Ka(e,n=0){const t=Number(e);return Number.isFinite(t)?t:n}function Gn(e,n,t,i){const r=e?.[n];return r?{x:Ka(r.x,.5)*t,y:Ka(r.y,.5)*i}:null}function Wg(e,n){const t=Math.hypot(e,n);return!Number.isFinite(t)||t<1e-6?null:{x:e/t,y:n/t}}function zg(e,n,t,i,r){return{x:e.x+n.x*i+t.x*r,y:e.y+n.y*i+t.y*r}}function Xg(e,n,t){const i=Math.max(1,Ka(n,1)),r=Math.max(1,Ka(t,1)),a=Gn(e,33,i,r),o=Gn(e,263,i,r),g=Gn(e,152,i,r);if(!a||!o||!g)return null;const R={x:(a.x+o.x)/2,y:(a.y+o.y)/2},_=Wg(o.x-a.x,o.y-a.y);if(!_)return null;let x={x:-_.y,y:_.x};const S={x:g.x-R.x,y:g.y-R.y};x.x*S.x+x.y*S.y<0&&(x={x:-x.x,y:-x.y});const m=b=>({horizontal:(b.x-R.x)*_.x+(b.y-R.y)*_.y,vertical:(b.x-R.x)*x.x+(b.y-R.y)*x.y});return{width:i,height:r,origin:R,horizontal:_,vertical:x,horizontalAngleRad:Math.atan2(_.y,_.x),project:m,pointAt:(b,P)=>zg(R,_,x,b,P)}}function pc(e,n,t,{sideScale:i=1.12,sidePaddingPx:r=24,hairlineLift:a=.4}={}){const o=Xg(e,n,t);if(!o)return null;const g=Gn(e,10,o.width,o.height),_=[46,53,52,65,55,276,283,282,295,285].map(q=>Gn(e,q,o.width,o.height)),x=Gn(e,2,o.width,o.height),S=Gn(e,152,o.width,o.height),m=Gn(e,127,o.width,o.height),b=Gn(e,356,o.width,o.height);if(!g||_.some(q=>!q)||!x||!S)return null;const P=o.project(g),y=_.map(q=>o.project(q).vertical).reduce((q,F)=>q+F,0)/_.length,p=o.project(x),l=o.project(S),U=[P.vertical-Math.max(0,y-P.vertical)*a,y,p.vertical,l.vertical],M=[U[1]-U[0],U[2]-U[1],U[3]-U[2]],A=M.reduce((q,F)=>q+F,0);if(!M.every(q=>Number.isFinite(q)&&q>0)||A<=0)return null;const h=[m,b].filter(Boolean).map(q=>o.project(q).horizontal),w=Math.max(40,Math.hypot(b?.x-m?.x||o.width*.3,b?.y-m?.y||0)/2),f=h.length?Math.min(...h):-w,v=h.length?Math.max(...h):w,I=Math.max(Math.abs(f),Math.abs(v))*i+r,B=-I,k=I;return{frame:o,levels:U,segments:M,percentages:M.map(q=>q/A*100),midLevels:[(U[0]+U[1])/2,(U[1]+U[2])/2,(U[2]+U[3])/2],horizontalStart:B,horizontalEnd:k,lines:U.map(q=>({start:o.pointAt(B,q),end:o.pointAt(k,q)}))}}const qg={key:0,class:"orientation-gate",role:"alert","aria-live":"assertive"},Yg={class:"orientation-gate__card"},Kg={key:1,class:"orientation-gate__hint"},jg={key:0,class:"camera-adjusting",role:"status","aria-live":"polite"},$g={key:0,class:"ui"},Zg={class:"metrics"},hc=30,Qg=42,Jg=24,ev=900,kr="__optifaceLandscapeLockOwned",Ga="/face_landmarker.task",sa="/mediapipe/wasm",mc="/selfie_multiclass_256x256.tflite",tv=15e3,_c=8,nv=512,Wr=10,gc=468,iv=.84,av=.14,rv=.032,ov=.105,vc=.08,Sc=.42,Ec=8,sv=24,cv=.38,lv=65,xc="/models",Mc="/vendor/face-api.min.js",Tc=8e3,zr=12e3,uv=6e4,dv=1800,fv=450,Ha=160,bc=.5,pv=3500,hv=900,mv=60,_v=1.25,ca="/models3d/wrap.stl",gv={__name:"VisagismoVideoRA",props:{initialModel:{type:String,default:"wrap"},initialColor:{type:[String,Number],default:"#000000"},anchorUpperIdx:{type:Number,default:9},anchorLowerIdx:{type:Number,default:1},anchorBlendT:{type:Number,default:.35},smoothing:{type:Number,default:1},anchorFracX:{type:Number,default:0},anchorFracY:{type:Number,default:0},anchorFracZ:{type:Number,default:0},localOffXFrac:{type:Number,default:0},localOffYFrac:{type:Number,default:0},localOffZFrac:{type:Number,default:0},rotOffsetDeg:{type:Object,default:()=>({yaw:0,pitch:0,roll:0})},stlPreRotateDeg:{type:Object,default:()=>({x:0,y:0,z:0})},initialDepthOffset:{type:Number,default:.011},initialScaleInIPD:{type:Number,default:1.63},hastesOpenDeg:{type:Number,default:8},initialCameraFovDeg:{type:Number,default:60},autoCalibrate:{type:Boolean,default:!0},calibFrames:{type:Number,default:12},targetWidthInIPD:{type:Number,default:2.1},developerMode:{type:Boolean,default:!0},previewMirror:{type:Boolean,default:!0},trackingQuality:{type:String,default:""},rotGlobalGain:{type:Number,default:.9},yawRotGain:{type:Number,default:1},pitchGain:{type:Number,default:1},rollGain:{type:Number,default:1}},setup(e,{expose:n}){const t=Lg({userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints}),i=t.isPhysicalMobile,r=i&&!1,a=Object.freeze({balanced:{desktopInputWidth:448,desktopInputWidths:Object.freeze([320,352,384,416,448]),mobileInputWidths:Object.freeze([320,352,384,416,448]),mobileDefaultInputWidth:384,minFaceDetectionConfidence:.55,minFacePresenceConfidence:.55,minTrackingConfidence:.55},high:{desktopInputWidth:448,desktopInputWidths:Object.freeze([352,384,448,512,640]),mobileInputWidths:Object.freeze([352,384,448,512,640]),mobileDefaultInputWidth:448,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5}}),o=Object.freeze([33,133,159,145]),g=Object.freeze([263,362,386,374]),R=Object.freeze([10,9,168,151]),_=Object.freeze([152,13,14,17]),x=Object.freeze([1,4,6,197]),S=e,m={x:S.stlPreRotateDeg.x,y:S.stlPreRotateDeg.y,z:S.stlPreRotateDeg.z};n({startAR:$i,suspendAR:gu,resumeAR:vu,btnArmacao:hu,btnCor:mu,btnCaptura:Go,btnCapturaBase:_u,getFaceShapeReport:uu,resetFaceShapeReport:du,trackFaceShapeReportEvent:fu,requestFaceShapeReanalysis:pu,setProfundidad:Ho,setEscala:Er,ajustarEscala:Su,setCameraFov:Vo,btnProporcoes:Do,btnMarcadores:No,setTrackingMode:cr,requestLandscapeOrientation:So});const b=_t(S.initialDepthOffset),P=_t(S.initialScaleInIPD),y=_t(Rt.clamp(Number(S.initialCameraFovDeg)||60,35,95)),p=_t(S.developerMode),l=_t(Kt(S.trackingQuality||"high")),D=_t(0);let U=!1,M=!1;const A=_t({x:0,y:0}),h=_t(0),w=_t(0),f=_t(0),v=_t({width:0,height:0,frameRate:0,aspectRatio:0,facingMode:"",resizeMode:""}),I=_t({width:0,height:0}),B=_t("aguardando"),k=_t("Aguardando"),q=_t(0),F=_t(!1),$=_t(""),K=_t(!1),Q=_t(!1),oe=window.matchMedia?.("(display-mode: standalone)")?.matches||!!navigator.standalone,ie=ia(()=>oe&&typeof window.screen?.orientation?.lock=="function"),se=Object.freeze({oval:"Oval",redondo:"Redondo",quadrado:"Quadrado",retangular:"Retangular",diamante:"Diamante",coracao:"Coração",triangular:"Triangular",indefinido:"Indefinido",aguardando:"Aguardando"}),ce=ia(()=>se[B.value]||B.value||"Aguardando"),Ye=ia(()=>{const c=Number(q.value)||0;return c>0?`${k.value} · ${(c*100).toFixed(0)}%`:k.value}),Ve=_t(null),ct=_t(null),Re=_t(null),Be=_t(null),Y=_t(null),te=_t(null);let Me=null,We=null,fe=null,be=null,at=null,ke=null,Ze=null,Ke=null,je=null,dt=null,lt=null,Yt=.25,vt=0;const ht=new Ie(0,0,0);let N=null;const Gt=new Ie,ft=new Ie,T=new Ie,s=new Ie,G=new ti,X=new Ie,j=new Ie,ue=new Ie,_e=new Ie,Z=new Ie,ee=new Ie,ge=new Ie,Fe=new Ie,ve=new Ie,me=new Ie,De=new Ie,Ge=new ti,$e=new Ie,L=new Ie,he=new li,J={wrap:{left:"/models3d/luas/Wrap_Haste_Esquerda.stl",right:"/models3d/luas/Wrap_Haste_Dereita.stl",leftMaxX:!0,rightMaxX:!1},PantoV2:{left:"/models3d/luas/PantoV2_Haste_Esquerda.stl",right:"/models3d/luas/PantoV2_Haste_Dereita.stl",leftMaxX:!1,rightMaxX:!1}},pe={pos:new Ie,quat:new li,scale:1};let xe=!1;const ae=new li;function Oe(){const c=Rt.degToRad,{yaw:d=0,pitch:E=0,roll:O=0}=S.rotOffsetDeg||{};ae.setFromEuler(new Ua(c(E),c(d),c(O),"YXZ"))}function Le(c,d=1){const E=Number(c);return Number.isFinite(E)?E:d}function St(c,d=1){return Rt.clamp(Le(c,d),0,1)}function rt(c){return Rt.clamp(Le(c,S.initialCameraFovDeg||mv),35,95)}function Kt(c){return c==="high"?"high":"balanced"}function un(c=l.value){const d=a[Kt(c)];return d?i?d.mobileDefaultInputWidth:d.desktopInputWidth:448}function ma(c=l.value){const d=a[Kt(c)];if(!d)return a.balanced;const E=i?ze||d.mobileDefaultInputWidth:ze||d.desktopInputWidth;return{...d,inputWidth:E}}function gi(c=l.value,d="VIDEO"){const E=ma(c);return{runningMode:d,numFaces:1,minFaceDetectionConfidence:E.minFaceDetectionConfidence,minFacePresenceConfidence:E.minFacePresenceConfidence,minTrackingConfidence:E.minTrackingConfidence,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!0}}let Tt=null,mn=!1,ii=null,In=null,dn=null,Zt=null,_n=null,zn=0,Xn=0,Tn=0,qn=0;const bn=document.createElement("canvas"),Oi=bn.getContext("2d",{willReadFrequently:!0}),Un=document.createElement("canvas"),_a=Un.getContext("2d",{willReadFrequently:!0}),gn=document.createElement("canvas"),ga=gn.getContext("2d",{willReadFrequently:!0});let Yn=0,Fn=0,u=null,C=null,z=!1,H=!1,V=-1,Se=-1,Pe=!1,Ee=0,we=0,Ue=0,ze=0,Qe=0,ye=null,it=null,Lt=null,mt=null,pt=null,Bt=null,Ce=null,Ht=null,nt=null,Xt=null,Ut=0,an=0,An=!1,qe=null;const bt=kg();let Je=0,He=0,en=0,qt=[],jt=!1;const vn=Hg({minimumFramesWithoutFace:24,minimumMsWithoutFace:700,maximumMsUnconfirmedFace:1800,retryPauseMs:3500,maximumTotalMs:pv});let ai=null,so=Number.NEGATIVE_INFINITY,Bi=Number.NEGATIVE_INFINITY,Gi=Number.NEGATIVE_INFINITY,co=Number.NEGATIVE_INFINITY,Qa="";const Kn=Fg();let Rn=!1,va=null,Sa=null,Ea=null,lo=!1,uo=!1,Ja=!1,fo=0,Sn=0,po=0,ho=0,Hi=0,Vi=null,xa=!1,mo=Number.NEGATIVE_INFINITY,er=0,_o=!1,ki=0,go=0,vo=Number.NEGATIVE_INFINITY,tr=0,nr=0,Wi=0,vi=!1,Ma=!1,Si=0,ri=0,oi=0,Ta=null,zi=null,ba="";const le=Ru("visagismo-video-ra");function ir(c=0){return new Promise(d=>setTimeout(d,c))}function Xi(c,d,E,O=null){let W=0,ne=!1;const re=Promise.resolve(c);re.then(Ne=>{ne&&O?.(Ne)}).catch(()=>{});const de=new Promise((Ne,Ae)=>{W=window.setTimeout(()=>{ne=!0;const Xe=new Error(`${E} excedeu ${d}ms`);Xe.name="TimeoutError",Ae(Xe)},d)});return Promise.race([re,de]).finally(()=>window.clearTimeout(W))}function On(c,{autoRelease:d=!0}={}){an&&(window.clearTimeout(an),an=0),Q.value=!!c,c&&d&&(an=window.setTimeout(()=>{an=0,Q.value=!1},2200))}function Aa(){return Ng({viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,orientationType:window.screen?.orientation?.type||""})}function tn(){return{innerWidth:window.innerWidth||0,innerHeight:window.innerHeight||0,visualWidth:window.visualViewport?.width||0,visualHeight:window.visualViewport?.height||0,screenType:window.screen?.orientation?.type||"",screenAngle:window.screen?.orientation?.angle||0}}function dl(){const c=performance.now();return Dg({isPhysicalMobile:i,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,rawContentRotation:Je,deviceGamma:ai?.gamma,deviceOrientationAgeMs:c-so,deviceLandscapeStableMs:c-Bi})}function si(c="state_changed"){const d=dl();F.value=d.mismatch,d.mismatch||($.value="");const E=`${d.mismatch}:${d.evidence}:${d.viewportLandscape}`;if(E!==Qa){const O=Qa;Qa=E,le.track("orientation",d.mismatch?"physical_viewport_mismatch_detected":"physical_viewport_state_resolved",{reason:c,previousKey:O,evidence:d.evidence,physicalLandscape:d.physicalLandscape,cameraLandscape:d.cameraLandscape,sensorLandscape:d.sensorLandscape,sensorFresh:d.sensorFresh,rawContentRotationDeg:Je,displayContentRotationDeg:He,sensor:ai,standalone:oe,orientationLockSupported:ie.value,...tn()},d.mismatch?"warn":"info")}return d}async function So(c="manual"){const d=si(c);if(!d.mismatch)return!0;if(le.track("orientation","landscape_lock_requested",{reason:c,standalone:oe,supported:ie.value,evidence:d.evidence,...tn()}),!oe)return $.value="Abra os atalhos do aparelho e ative a rotação automática.",le.track("orientation","landscape_lock_unavailable",{reason:"browser_tab",...tn()},"warn"),!1;if(!ie.value)return $.value="Ative a rotação automática nas configurações do aparelho.",le.track("orientation","landscape_lock_unavailable",{reason:"api_unavailable",...tn()},"warn"),!1;K.value=!0,$.value="";try{return await window.screen.orientation.lock("landscape"),window[kr]=!0,le.track("orientation","landscape_lock_succeeded",{reason:c,...tn()}),window.setTimeout(()=>si("landscape_lock_settled"),250),!0}catch(E){return $.value="Não foi possível girar automaticamente. Ative a rotação do aparelho.",le.captureError("orientation","landscape_lock_failed",E,{reason:c,...tn()}),!1}finally{K.value=!1}}function fl(c="device_returned_portrait"){if(!window[kr])return!1;window[kr]=!1;try{return window.screen?.orientation?.unlock?.(),le.track("orientation","landscape_lock_released",{reason:c,sensor:ai,...tn()}),!0}catch(d){return le.captureError("orientation","landscape_unlock_failed",d,{reason:c,...tn()}),!1}}function Eo(c=l.value){we=0,Qe=0,ze=un(c)}function xo(){return uc(Re.value?.videoWidth||v.value.width||0,Re.value?.videoHeight||v.value.height||0,Je)}function Mo(c=0,d=0){const E=c===d?"square":c>d?"landscape":"portrait",O=qe?.key||Aa().key;return`optiface:camera-orientation:v1:${v.value.facingMode||"unknown"}:${O}:${E}`}function ar(c,d){try{const E=sessionStorage.getItem(Mo(c,d));if(E===null)return null;const O=Number(E);return[0,90,-90,180].includes(O)?O:null}catch{return null}}function To(c,d,E){try{sessionStorage.setItem(Mo(d,E),String(c))}catch{}}function Ei(c,d="candidate_selected"){const E=Je;Je=c.candidateRotation,He=Ba(Je,on.value),qt=[],jt=!1,Kn.reset(He),On(!0);const O=Ra(d);return xi(),le.track("camera","orientation_bootstrap_candidate_selected",{reason:c.reason||d,candidateRotationDeg:Je,displayRotationDeg:He,candidateIndex:c.candidateIndex,candidateCount:c.candidates.length,round:c.round,candidates:c.candidates,previousRawRotationDeg:E,sourceWidth:Re.value?.videoWidth||0,sourceHeight:Re.value?.videoHeight||0,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,requestedOrientation:qe?.key||"",...tn()}),O||E!==Je}function pl(c="camera_started"){const d=Re.value?.videoWidth||v.value.width||0,E=Re.value?.videoHeight||v.value.height||0,O=ar(d,E),W=Gg({sourceWidth:d,sourceHeight:E,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,preferredRotation:O}),ne=vn.reset({candidates:W,processedFrames:Sn,now:performance.now()});return le.track("camera","orientation_bootstrap_started",{reason:c,sourceWidth:d,sourceHeight:E,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,preferredRotation:O,candidates:W}),Ei(ne,c)}function bo(c=0){const d=Re.value,E=d?.videoWidth||0,O=d?.videoHeight||0;if(!E||!O||d.readyState<2||!ga)return!1;const W=uc(E,O,c),re=Math.min(1,Ha/Math.max(W.width,W.height));gn.width=Math.max(1,Math.round(W.width*re)),gn.height=Math.max(1,Math.round(W.height*re));const de=ga;return de.setTransform(1,0,0,1,0,0),de.clearRect(0,0,gn.width,gn.height),de.translate(gn.width/2,gn.height/2),de.rotate(Rt.degToRad(W.rotationDeg)),de.drawImage(d,-(E*re)/2,-(O*re)/2,E*re,O*re),de.setTransform(1,0,0,1,0,0),!0}async function hl(c="camera_started"){const d=performance.now(),E=vn.snapshot(),O=E.candidateRotation??0,W=Re.value?.videoWidth||v.value.width||0,ne=Re.value?.videoHeight||v.value.height||0,re=ar(W,ne),de=[];let Ne=!1,Ae=!1;try{Ne=await Xi(Po(),dv,"Carregamento do detector de orientação")}catch(ot){le.captureError("camera","orientation_probe_load_failed",ot,{reason:c,fallbackRotation:O})}if(Ne&&globalThis.faceapi)for(let ot=0;ot<E.candidates.length;ot+=1){const xt=E.candidates[ot],At=performance.now();let Vt=0,Ft=0,Jt=0;for(let Pt=0;Pt<2;Pt+=1)if(bo(xt)){try{const $t=globalThis.faceapi,wn=await Xi($t.detectSingleFace(gn,new $t.TinyFaceDetectorOptions({inputSize:Ha,scoreThreshold:.35})),fv,"Amostra do detector de orientação");wn&&(Ft+=1,Vt+=Number(wn.score)||0)}catch($t){Jt+=1,le.captureError("camera","orientation_probe_sample_failed",$t,{rotation:xt,sample:Pt})}await ir(20)}de.push({rotation:xt,detections:Ft,score:Ft?Vt/Ft:0,failedSamples:Jt,durationMs:Number((performance.now()-At).toFixed(1))});const kt=Vr(de,O),It=re!==null&&ot===0&&kt.detections>0&&kt.score>=bc,Nt=ot%2===1&&kt.detections>0&&kt.score>=bc;if(It||Nt){Ae=ot<E.candidates.length-1;break}}const Xe=Vr(de,O),et=vn.reset({candidates:[Xe.rotation,...E.candidates.filter(ot=>ot!==Xe.rotation)],processedFrames:Sn,now:performance.now()});return Ei({...et,reason:Xe.detections?"visual_probe":"priority_fallback"},"orientation_probe_completed"),le.track("camera","orientation_probe_completed",{reason:c,selectedRotationDeg:Xe.rotation,selectedScore:Number(Xe.score.toFixed(4)),selectedDetections:Xe.detections,detectorAvailable:Ne,fallbackUsed:Xe.detections===0,preferredRotation:re,stoppedEarly:Ae,testedCandidates:de.length,inputSize:Ha,durationMs:Number((performance.now()-d).toFixed(1)),results:de},Xe.detections?"info":"warn"),Xe.rotation}async function ml(c="camera_started"){const d=performance.now(),E=vn.snapshot(),O=E.candidateRotation??0,W=Re.value?.videoWidth||v.value.width||0,ne=Re.value?.videoHeight||v.value.height||0,re=ar(W,ne),de=[];for(let Xe=0;Xe<E.candidates.length;Xe+=1){const et=E.candidates[Xe],ot=performance.now();let xt=0,At=0,Vt=0;for(let Ft=0;Ft<2;Ft+=1)if(bo(et)){try{const kt=(await Tt.detectForVideo(gn,ur(performance.now())))?.result?.faceLandmarks?.[0];if(kt){At+=1;const It=sc(kt),Nt=eo(kt);cc({calculatedRotation:It,eyeLineAngleDeg:Nt,activeRotation:null})===0&&(xt+=1)}}catch(Jt){Vt+=1,le.captureError("camera","orientation_worker_probe_sample_failed",Jt,{rotation:et,sample:Ft})}await ir(20)}if(de.push({rotation:et,detections:xt,score:xt/2,faces:At,failedSamples:Vt,durationMs:Number((performance.now()-ot).toFixed(1))}),xt===2)break}const Ne=Vr(de,O),Ae=vn.reset({candidates:[Ne.rotation,...E.candidates.filter(Xe=>Xe!==Ne.rotation)],processedFrames:Sn,now:performance.now()});return Ei({...Ae,reason:Ne.detections?"worker_landmarks_probe":"priority_fallback"},"orientation_worker_probe_completed"),await wo("orientation_worker_probe_completed"),le.track("camera","orientation_probe_completed",{reason:c,selectedRotationDeg:Ne.rotation,selectedDetections:Ne.detections,detectorAvailable:!0,detectorContext:"worker",fallbackUsed:Ne.detections===0,preferredRotation:re,testedCandidates:de.length,inputSize:Ha,durationMs:Number((performance.now()-d).toFixed(1)),results:de},Ne.detections?"info":"warn"),Ne.rotation}function _l(){const c=Re.value?.videoWidth||v.value.width||0,d=Re.value?.videoHeight||v.value.height||0,E=vn.confirm(Je);To(Je,c,d),On(!1),le.track("camera","orientation_bootstrap_confirmed",{rotationDeg:Je,displayRotationDeg:He,validationSource:"face_landmarks",validationSamples:qt.length,candidateIndex:E.candidateIndex??-1,round:E.round||0,sourceWidth:c,sourceHeight:d,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,detectorMode:Zt||""})}function Ao(c,d){Ei(c,d),jt=!0,qt=[],Kn.reset(He,performance.now()),On(!1),le.track("camera","orientation_bootstrap_fallback_accepted",{reason:c.reason||d,elapsedTotalMs:Number((c.elapsedTotalMs||0).toFixed(1)),rotationDeg:Je,displayRotationDeg:He,candidateCount:c.candidates?.length||0,sourceWidth:Re.value?.videoWidth||0,sourceHeight:Re.value?.videoHeight||0},"warn")}function Ra(c="orientation_changed"){const d=xo();if(!d.width||!d.height||!ct.value)return!1;const E=Number(ct.value.dataset.nw||0),O=Number(ct.value.dataset.nh||0),W=en,ne=E!==d.width||O!==d.height||W!==d.rotationDeg;return en=d.rotationDeg,ct.value.style.width=`${d.width}px`,ct.value.style.height=`${d.height}px`,ct.value.dataset.nw=String(d.width),ct.value.dataset.nh=String(d.height),[Be.value,te.value].forEach(re=>{re&&(re.width!==d.width&&(re.width=d.width),re.height!==d.height&&(re.height=d.height),re.style.width="100%",re.style.height="100%")}),Y.value&&(Y.value.style.width="100%",Y.value.style.height="100%",Me?Me.setSize(d.width,d.height,!1):(Y.value.width=d.width,Y.value.height=d.height)),qi(l.value),fe&&Yi(d.width,d.height),ne&&(xe=!1,rn=null,Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null,be&&(be.visible=!1),Ca(),le.track("camera","processing_frame_normalized",{reason:c,sourceWidth:Re.value?.videoWidth||0,sourceHeight:Re.value?.videoHeight||0,processingWidth:d.width,processingHeight:d.height,rawRotationDeg:Je,displayRotationDeg:He,previousRotationDeg:W})),Ai(),ne}function xi(){const c=Re.value,d=Be.value;if(!c||!d||c.readyState<2||!d.width||!d.height)return;const E=d.getContext("2d",{alpha:!1});if(!E)return;const O=c.videoWidth,W=c.videoHeight;E.setTransform(1,0,0,1,0,0),E.clearRect(0,0,d.width,d.height),E.translate(d.width/2,d.height/2),E.rotate(Rt.degToRad(en)),E.drawImage(c,-O/2,-W/2,O,W),E.setTransform(1,0,0,1,0,0)}function qi(c=l.value){const d=Be.value?.width||0,E=Be.value?.height||0;if(!d||!E)return;const O=Math.min(d,ma(c).inputWidth),W=Math.max(1,Math.round(O*E/d));Yn===O&&Fn===W||(bn.width=O,bn.height=W,Yn=O,Fn=W,I.value={width:O,height:W})}function gl(c,d=l.value){if(!Number.isFinite(c))return;we=we?Rt.lerp(we,c,.22):c;const E=performance.now();if(E-Qe<ev)return;const O=a[Kt(d)],W=i?O?.mobileInputWidths||[]:O?.desktopInputWidths||[];if(!W.length)return;const ne=ze||un(d),re=W.indexOf(ne);if(!(re<0)){if(we>Qg&&re>0){ze=W[re-1],Qe=E,qi(d);return}we<Jg&&re<W.length-1&&(ze=W[re+1],Qe=E,qi(d))}}function Yi(c=0,d=0){if(!fe)return;const E=Number(c)||Be.value?.width||1,O=Number(d)||Be.value?.height||1;fe.fov=rt(y.value),fe.aspect=E/Math.max(1,O),fe.updateProjectionMatrix()}function vl(c=u){const d=c?.getVideoTracks?.()?.[0],E=d?.getSettings?.()||{},O=Number(E.width)||Re.value?.videoWidth||0,W=Number(E.height)||Re.value?.videoHeight||0,ne=Number(E.frameRate)||0,re=Number(E.aspectRatio)||(O&&W?O/W:0),de=E.facingMode||"",Ne=E.resizeMode||"";v.value={width:O,height:W,frameRate:ne,aspectRatio:re,facingMode:de,resizeMode:Ne},le.track("camera","stream_settings_resolved",{settings:v.value,constraints:d?.getConstraints?.()||{},capabilities:d?.getCapabilities?.()||{},previewMirrored:on.value,physicalMobile:i,physicalMobileReason:t.reason,ipadLike:t.isIPadLike,requestedOrientation:qe?.key||"",requestedAspectRatio:qe?.aspectRatio||0}),d&&console.info("[VideoRA] Active camera track",{settings:E,constraints:d.getConstraints?.()||{}})}async function Sl(c){if(!i)return;const d=c?.getVideoTracks?.()?.[0],E=d?.getCapabilities?.()||{},O=Number(E?.zoom?.min);if(!(!d||!Number.isFinite(O)))try{await d.applyConstraints({advanced:[{zoom:O}]})}catch(W){console.warn("[VideoRA] Não foi possível aplicar o zoom mínimo no celular.",W)}}function wa(){const c=Re.value?.srcObject||u;try{c?.getTracks?.().forEach(d=>d.stop())}catch{}try{Re.value?.pause?.()}catch{}Re.value&&(Re.value.srcObject=null),u=null,v.value={width:0,height:0,frameRate:0,aspectRatio:0,facingMode:"",resizeMode:""}}async function El(){if(!navigator?.mediaDevices?.getUserMedia)throw new Error("getUserMedia indisponível");const c=ff(),d=Aa();qe=d,le.track("camera","orientation_profile_requested",{profile:d.key,width:d.width,height:d.height,aspectRatio:d.aspectRatio,...tn()});const E=pf({deviceId:c.deviceId,facingMode:c.facingMode,width:d.width,height:d.height,mobile:i}).map(W=>!W?.video||typeof W.video!="object"?W:i?{...W,video:{...W.video,resizeMode:"none",aspectRatio:{ideal:d.aspectRatio},frameRate:{ideal:hc,max:hc}}}:{...W,video:{...W.video,frameRate:{ideal:60,max:60}}});let O=null;for(let W=0;W<E.length;W++)try{le.track("camera","get_user_media_attempt",{attempt:W+1,total:E.length,constraints:E[W]});const ne=await navigator.mediaDevices.getUserMedia(E[W]);return le.track("camera","stream_opened",{attempt:W+1}),ne}catch(ne){O=ne,le.track("camera","get_user_media_failed",{attempt:W+1,tipo:ne?.name||"Error",mensagem:ne?.message||String(ne)},"warn"),await ir(120)}throw O||new Error("Não foi possível iniciar a câmera")}function rr(c=""){const d=Tt;Tt=null,mn=!1,Zt=null,window.__vra_fl===d&&(window.__vra_fl=null,window.__vra_vf=null,window.__vra_fl_mode=null);try{d?.workerMode?c==="tracking_graph_failure"&&Ds(d):d?.close?.()}catch{}c&&le.track("mediapipe","landmarker_disposed",{reason:c},"warn")}function xl(){const c=ii;ii=null,In=null;try{c?.close?.()}catch{}}function or(){oi+=1,vi=!1,Ma=!1,Si=0,ri=0,Ta=null,zi=null,ba="",B.value="aguardando",Wi=0;const c=Et?.visagismo;c?.rostoProbabilidades&&(c.rostoProbabilidades.value={})}async function Ml(){return ii||In||(In=(async()=>{dn=dn||await Xi(jr.forVisionTasks(sa),tv,"Inicialização do runtime de segmentação facial");const c=await jc.createFromOptions(dn,{baseOptions:{modelAssetPath:mc,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1});if(Rn)throw c.close?.(),new Error("Componente desmontado durante a inicialização do segmentador.");return ii=c,le.track("analysis","face_segmenter_ready",{modelPath:mc,delegate:"CPU"}),c})().catch(c=>{throw In=null,c}),In)}async function sr({forceRecreate:c=!1,preferCpu:d=!1,allowWorker:E=!0}={}){if(c&&rr("forced_recreate"),!Tt&&E&&uf()){const W=df(),ne=performance.now();try{le.track("mediapipe","worker_initialization_started",{wasmPath:sa,modelPath:Ga,trackingMode:l.value});const re=await W.init({wasmPath:sa,modelPath:Ga,options:gi(l.value,"VIDEO"),timeoutMs:uv,delegate:d||xa?"CPU":"GPU"});return Tt=W,mn=!0,Zt="VIDEO",le.track("mediapipe","landmarker_ready",{delegate:re.delegate||W.delegate||"",executionContext:"worker",reused:!!re.reused,durationMs:Number((performance.now()-ne).toFixed(1))}),Tt}catch(re){throw Ds(W),le.captureError("mediapipe","worker_initialization_failed",re,{fallback:"camera_only"}),re.workerInitializationFailed=!0,re}}if(!Tt&&window.__vra_fl&&(Tt=window.__vra_fl,dn=window.__vra_vf??dn,Zt=window.__vra_fl_mode||null,le.track("mediapipe","cached_instance_reused")),Tt)if(Zt!=="VIDEO")rr("cached_non_video_instance");else return Tt;le.track("mediapipe","initialization_started",{wasmPath:sa,modelPath:Ga,trackingMode:l.value}),dn=dn||await Xi(jr.forVisionTasks(sa),zr,"Inicialização do runtime MediaPipe"),le.track("mediapipe","wasm_fileset_ready");const O=(W,ne)=>{const re=Kc.createFromOptions(dn,{baseOptions:{modelAssetPath:Ga,delegate:W},...gi(l.value,"VIDEO")});return Xi(re,ne,`Inicialização do FaceLandmarker (${W})`,de=>{try{de?.close?.()}catch{}})};if(d||xa)Tt=await O("CPU",zr),le.track("mediapipe","landmarker_ready",{delegate:"CPU"});else try{Tt=await O("GPU",Tc),le.track("mediapipe","landmarker_ready",{delegate:"GPU"})}catch(W){console.warn("[VideoRA] GPU delegate indisponível, usando CPU.",W),le.track("mediapipe","gpu_delegate_failed",{tipo:W?.name||"Error",mensagem:W?.message||String(W)},"warn"),W?.name==="TimeoutError"&&le.track("mediapipe","landmarker_initialization_timeout",{delegate:"GPU",timeoutMs:Tc},"warn"),Tt=await O("CPU",zr),le.track("mediapipe","landmarker_ready",{delegate:"CPU"})}return window.__vra_fl=Tt,window.__vra_vf=dn,Zt="VIDEO",window.__vra_fl_mode="VIDEO",Tt}function Tl(c){const d=String(c?.message||c||"");return/CalculatorGraph|FaceGeometryPipelineCalculator|Graph has errors|design_matrix\.norm/i.test(d)}async function Ro(c){return Vi||(Vi=(async()=>{le.captureError("mediapipe","landmarker_recovery_started",c,{consecutiveTrackingErrors:Hi}),Ti(),xa=!0,rr("tracking_graph_failure"),await sr({preferCpu:!0,allowWorker:!1}),Hi=0,Se=-1,z&&u?.active&&yo(),le.track("mediapipe","landmarker_recovery_completed",{delegate:"CPU"})})().catch(d=>{le.captureError("mediapipe","landmarker_recovery_failed",d)}).finally(()=>{Vi=null}),Vi)}async function cr(c){const d=Kt(c);if(l.value=d,Eo(d),qi(d),!Tt)return l.value;H=!0;try{await Tt.setOptions(gi(d,"VIDEO"))}finally{H=!1}return l.value}function wo(c="orientation_recalibrated"){return Tt?_n||(_n=(async()=>(H=!0,await Tt.setOptions(gi(l.value,"VIDEO")),Se=-1,le.track("mediapipe","temporal_tracking_reset",{reason:c,runningMode:"VIDEO"}),!0))().catch(d=>(le.captureError("mediapipe","temporal_tracking_reset_failed",d,{reason:c}),queueMicrotask(()=>{Ro(d)}),!1)).finally(()=>{H=!1,_n=null}),_n):Promise.resolve(!1)}function lr(){zn&&(cancelAnimationFrame(zn),zn=0)}function Mi(){Xn&&(cancelAnimationFrame(Xn),Xn=0)}function bl(){Mi();const c=()=>{Re.value?.readyState>=2&&xi(),Xn=requestAnimationFrame(c)};Xn=requestAnimationFrame(c),le.track("camera","preview_loop_started",{phase:"model_initialization"})}function Ti(){Tn&&(cancelAnimationFrame(Tn),Tn=0),qn&&Re.value?.cancelVideoFrameCallback&&(Re.value.cancelVideoFrameCallback(qn),qn=0),H=!1,V=-1,we=0}async function Co(c,d){if(!Tt||H||_n)return;H=!0;const E=performance.now(),O=c?.width||0,W=c?.height||0;try{if(Zt!=="VIDEO")return;const ne=mn?await Tt.detectForVideo(c,d):null,re=ne?.result||Tt.detectForVideo(c,d);Hi=0,Ue=mn&&Number(ne?.inferenceMs)||0,D.value=performance.now()-E,Sn+=1,gl(D.value),ru(re),Et?.app?.metricas?.value&&Cl(c),Al()}catch(ne){ho+=1,Hi+=1;const re=performance.now();re-mo>=5e3?(le.captureError("tracking","detect_for_video_failed",ne,{timestampMs:d,processedFrames:Sn,suppressedSinceLastReport:er,inputWidth:O,inputHeight:W,videoTime:Re.value?.currentTime||0}),mo=re,er=0):er+=1,Hi>=3&&Tl(ne)&&queueMicrotask(()=>{Ro(ne)})}finally{H=!1}}function ur(c){const d=Number.isFinite(c)?c:performance.now(),E=d>Se?d:Se+1;return Se=E,E}function Al(){const c=performance.now();c-go<15e3||(go=c,le.track("tracking","metrics",{processedFrames:Sn,detectedFrames:po,trackingErrors:ho,latencyMs:Number(D.value.toFixed(2)),workerInferenceMs:Number(Ue.toFixed(2)),executionContext:mn?"worker":"main_thread",trackingMode:l.value,inputWidth:Yn,inputHeight:Fn,camera:v.value,pose:{yawDeg:Number(h.value.toFixed(2)),pitchDeg:Number(w.value.toFixed(2)),rollDeg:Number(f.value.toFixed(2)),rawRollDeg:Number(tr.toFixed(2)),renderedRollDeg:Number(nr.toFixed(2))},orientation:{requested:qe?.key||"",screenType:window.screen?.orientation?.type||"",screenAngle:window.screen?.orientation?.angle||0,contentRotationDeg:He,rawContentRotationDeg:Je,frameNormalized:jt,processingRotationDeg:en,processingWidth:Be.value?.width||0,processingHeight:Be.value?.height||0,resolverPhase:vn.snapshot().phase,detectorMode:Zt||""},analysis:{faceShape:B.value,faceShapePoseQuality:Number(Wi.toFixed(3)),orientationNormalized:jt}}))}async function Po(){if(lo)return!0;const c=await wl();return c?(va||(va=c.nets.tinyFaceDetector.loadFromUri(xc).then(()=>(lo=!0,!0)).catch(d=>(console.warn("[VideoRA] Não foi possível carregar o detector facial leve.",d),va=null,!1))),va):!1}async function Rl(){if(uo)return!0;const c=await Po(),d=globalThis.faceapi;return!c||!d?!1:(Sa||(Sa=d.nets.ageGenderNet.loadFromUri(xc).then(()=>(uo=!0,!0)).catch(E=>(console.warn("[VideoRA] Não foi possível carregar o modelo de gênero.",E),k.value="Indisponível",q.value=0,Sa=null,!1))),Sa)}function wl(){return globalThis.faceapi?Promise.resolve(globalThis.faceapi):Ea||(Ea=new Promise(c=>{const d=document.querySelector(`script[src="${Mc}"]`);if(d){d.addEventListener("load",()=>c(globalThis.faceapi||null),{once:!0}),d.addEventListener("error",()=>c(null),{once:!0});return}const E=document.createElement("script");E.src=Mc,E.async=!0,E.onload=()=>c(globalThis.faceapi||null),E.onerror=()=>{console.warn("[VideoRA] Não foi possível carregar face-api.js."),c(null)},document.head.appendChild(E)}),Ea)}function Cl(c){if(!Et?.app?.metricas?.value||Ja)return;const d=performance.now();d-fo<hv||(fo=d,!(!c?.width||!c?.height||!_a)&&(Un.width=c.width,Un.height=c.height,_a.drawImage(c,0,0,Un.width,Un.height),Ja=!0,(async()=>{try{if(!await Rl())return;const O=globalThis.faceapi;if(!O)return;const W=await O.detectSingleFace(Un,new O.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.5})).withAgeAndGender();if(!W){k.value="Não detectado",q.value=0;return}k.value=W.gender==="male"?"Masculino":"Feminino",q.value=W.genderProbability||0}catch(E){console.warn("[VideoRA] Erro na predição de gênero.",E),k.value="Indisponível",q.value=0}finally{Ja=!1}})()))}function Pl(){const c=()=>{if(Tn=requestAnimationFrame(c),!(Re.value?.readyState>=2))return;const d=Re.value.currentTime;d!==V&&(V=d,xi(),!H&&(Oi.drawImage(Be.value,0,0,Yn,Fn),Co(bn,ur(performance.now()))))};Tn=requestAnimationFrame(c)}function yo(){if(Ti(),qi(l.value),typeof Re.value?.requestVideoFrameCallback=="function"){const c=(d,E)=>{if(!z||(qn=Re.value.requestVideoFrameCallback(c),!(Re.value?.readyState>=2))||(xi(),H))return;Oi.drawImage(Be.value,0,0,Yn,Fn);const O=ur(d);Pe||(Pe=!0,le.track("tracking","timestamp_source_selected",{callbackNow:Number.isFinite(d)?Number(d.toFixed(3)):null,mediaTimeMs:Number.isFinite(E?.mediaTime)?Number((E.mediaTime*1e3).toFixed(3)):null,timestampMs:Number(O.toFixed(3)),source:"callback_now_monotonic"})),Co(bn,O)};qn=Re.value.requestVideoFrameCallback(c);return}Pl()}const Qt={collecting:S.autoCalibrate,samples:[],ipd0Ndc:null};function yl(c){const d=[...c].sort((O,W)=>O-W),E=d.length;return E?E&1?d[(E-1)/2]:(d[E/2-1]+d[E/2])*.5:0}const Et=Ou()?.appContext?.config?.globalProperties?.$db,dr=Number(Et?.visagismo?.armacaoEscala?.value)||0;dr&&dr!==Number(S.initialScaleInIPD)&&(P.value=dr,M=!0);const fr=_t(!1),pr=_t(!1),Lo=_t(!1);let rn=null;const Ll=_t(!0),bi=ia(()=>Et?.visagismo?.molduraRosto?.value??Lo.value?!1:Et?.visagismo?.armacaoVisivel?.value!==void 0?Et.visagismo.armacaoVisivel.value:Ll.value),on=ia(()=>!!S.previewMirror);ea(on,(c,d)=>{const E=He;He=Ba(Je,c),Kn.reset(He,performance.now()),Ai(),le.track("camera","preview_mirror_changed",{mirrored:c,previous:!!d,facingMode:v.value.facingMode||"",rawRotation:Je,previousDisplayRotation:E,displayRotation:He})},{immediate:!0}),ea(bi,c=>{at&&(at.visible=!!c&&!!be?.visible),Ke&&(Ke.visible=!!c&&!!be?.visible),_r(h.value||0,f.value||0)},{immediate:!0}),ea(()=>S.developerMode,c=>{p.value=!!c,au()}),ea(()=>S.trackingQuality,c=>{cr(c)}),ea(y,()=>{Yi()});function No(){le.track("ui","landmarks_toggled"),Et?.visagismo?Et.visagismo.marcadores.value=!Et.visagismo.marcadores.value:fr.value=!fr.value}function Do(){le.track("ui","proportions_toggled"),Et?.visagismo?Et.visagismo.proporcoes.value=!Et.visagismo.proporcoes.value:pr.value=!pr.value}function Nl(){const c=l.value==="high"?"balanced":"high";cr(c)}function hr(c){return new nn(c.x*2-1,1-c.y*2)}function Dl(c){const d=c[S.anchorUpperIdx]||c[9],E=c[S.anchorLowerIdx]||c[1],O=Math.max(0,Math.min(1,S.anchorBlendT));return hr({x:d.x*(1-O)+E.x*O,y:d.y*(1-O)+E.y*O})}function Il(c){const d=new Ie(c.x,c.y,-1).unproject(fe),E=new Ie(c.x,c.y,1).unproject(fe);return{origin:fe.position.clone(),dir:E.sub(d).normalize()}}function mr(c,d){const{origin:E,dir:O}=Il(c);return E.add(O.multiplyScalar(d))}function Ul(c,d,E,O){return Gt.set(c,d,-1).unproject(fe),ft.set(c,d,1).unproject(fe),O.copy(fe.position).add(ft.sub(Gt).normalize().multiplyScalar(E))}function Fl(){const c=te.value?.width||0,d=te.value?.height||0;return c>0&&d>c?d/c:1}function Ol(c,d=new Ie){const E=Fl();return d.set((c.x??.5)-.5,(.5-(c.y??.5))*E,-(c.z||0))}function Ki(c,d,E){E.set(0,0,0);let O=0;for(let W=0;W<d.length;W++){const ne=c[d[W]];ne&&(Ol(ne,ee),E.add(ee),O+=1)}return O?E.multiplyScalar(1/O):null}function Bl(c){const d=c?.data;if(!Array.isArray(d)||d.length!==16)return null;Ge.fromArray(d),Ge.decompose($e,he,L);const E=he.x+he.y+he.z+he.w;return Number.isFinite(E)?he.clone().normalize():null}function Gl(c,d=null){const E=Ki(c,o,X),O=Ki(c,g,j),W=Ki(c,R,ue),ne=Ki(c,_,_e),re=Ki(c,x,Z);if(!E||!O||!W||!ne||!re)return new li;ve.subVectors(O,E).normalize(),me.subVectors(W,ne).normalize(),De.crossVectors(ve,me).normalize(),ge.addVectors(E,O).multiplyScalar(.5),Fe.subVectors(re,ge).normalize(),De.dot(Fe)<0&&De.negate(),me.crossVectors(De,ve).normalize();const de=new li().setFromRotationMatrix(Ge.makeBasis(ve,me,De)),Ne=Bl(d);if(!Ne)return de;const Ae=Rt.radToDeg(de.angleTo(Ne));return!Number.isFinite(Ae)||Ae>lv?de:de.slerp(Ne,cv)}function Hl(c,d){const E=c.clone().applyMatrix4(fe.matrixWorldInverse);return E.z+=d,E.applyMatrix4(fe.matrixWorld)}function Vl(c,d){return c.applyMatrix4(fe.matrixWorldInverse),c.z+=d,c.applyMatrix4(fe.matrixWorld)}function Io(c,d){return d>.76*c+5.8}function _r(c,d){if(!ke&&!Ze)return;const E=!!bi.value&&!!be?.visible,O=Io(d,c),W=Io(-d,-c);ke&&(ke.visible=E&&O),Ze&&(Ze.visible=E&&W)}function Ca(){const c=te.value;if(!c)return;c.getContext("2d").clearRect(0,0,c.width,c.height)}function kl(c){const d=te.value;if(!d)return;const E=d.getContext("2d"),O=d.width,W=d.height;E.fillStyle="cyan";for(let ne=0;ne<c.length;ne++){const re=c[ne].x*O,de=c[ne].y*W;E.beginPath(),E.arc(re,de,1,0,Math.PI*2),E.fill()}}function Wl(c){const d=te.value;if(!d)return;const E=d.getContext("2d"),O=d.width,W=d.height,ne=pc(c,O,W);if(!ne)return;const re=performance.now();re-vo>=1e4&&(vo=re,le.track("analysis","facial_thirds_geometry",{percentages:ne.percentages.map(At=>Number(At.toFixed(2))),faceAxisAngleDeg:Number(Rt.radToDeg(ne.frame.horizontalAngleRad).toFixed(2)),streamWidth:O,streamHeight:W,rawContentRotationDeg:Je,displayContentRotationDeg:He}));const de=getComputedStyle(document.documentElement),Ne=de.getPropertyValue("--primary").trim()||"#1eebe2",Ae=de.getPropertyValue("--primary").trim()||"#1eebe2";E.save(),E.strokeStyle=Ne,E.lineWidth=1.5,ne.lines.forEach(At=>{E.beginPath(),E.moveTo(At.start.x,At.start.y),E.lineTo(At.end.x,At.end.y),E.stroke()}),E.restore();const Xe=19,et=8,ot=7;E.font=`bold ${Xe}px monospace`;const xt=At=>({x:on.value?O-At.x:At.x,y:At.y});ne.percentages.forEach((At,Vt)=>{const Ft=`${At.toFixed(0)}%`,kt=E.measureText(Ft).width+et*2,It=Xe+ot*2,Nt=[ne.horizontalStart,ne.horizontalEnd].map($t=>ne.frame.pointAt($t,ne.midLevels[Vt])),Pt=xt(Nt[0]).x>xt(Nt[1]).x?Nt[0]:Nt[1];E.save(),E.translate(Pt.x,Pt.y),on.value&&E.scale(-1,1),E.translate(8,-It/2),E.fillStyle="rgba(0, 0, 0, 0.72)",E.roundRect?(E.beginPath(),E.roundRect(0,0,kt,It,9),E.fill()):E.fillRect(0,0,kt,It),E.fillStyle=Ae,E.textBaseline="middle",E.fillText(Ft,et,It/2),E.restore()})}function zl(c,d,E,O){if(!c)return!1;const W=c[10],ne=c[152],re=c[234],de=c[454];if(!W||!ne||!re||!de)return!1;const Ne=(re.x+de.x)/2*d,Ae=(W.y+ne.y)/2*E,Xe=Ne-O.centerX,et=Ae-O.centerY,xt=Math.hypot((ne.x-W.x)*d,(ne.y-W.y)*E)/(O.radiusY*2);return(Xe/O.radiusX)**2+(et/O.radiusY)**2<=.6&&xt>=.6&&xt<=1.2}function Uo(c){const d=te.value;if(!d)return;const E=d.getContext("2d"),O=d.width,W=d.height,ne=W*.22,re=Math.min(ne*.72,O*.4),de={centerX:O/2,centerY:W/2,radiusX:re,radiusY:ne};E.clearRect(0,0,O,W),E.fillStyle="rgba(0, 0, 0, 0.58)",E.fillRect(0,0,O,W),E.globalCompositeOperation="destination-out",E.beginPath(),E.ellipse(de.centerX,de.centerY,de.radiusX,de.radiusY,0,0,Math.PI*2),E.fill(),E.globalCompositeOperation="source-over";const Ae=zl(c,O,W,de)?"#4CAF50":"rgba(0, 188, 212, 0.92)";E.strokeStyle=Ae,E.lineWidth=6,E.beginPath(),E.ellipse(de.centerX,de.centerY,de.radiusX,de.radiusY,0,0,Math.PI*2),E.stroke(),Xl(E,de,Ae)}function Xl(c,d,E){const W=[{angulo:-Math.PI/2,nx:0,ny:-1},{angulo:Math.PI/2,nx:0,ny:1},{angulo:Math.PI,nx:-1,ny:0},{angulo:0,nx:1,ny:0}];c.strokeStyle=E,c.lineWidth=3,c.lineCap="round",W.forEach(({angulo:ne,nx:re,ny:de})=>{const Ne=d.centerX+d.radiusX*Math.cos(ne),Ae=d.centerY+d.radiusY*Math.sin(ne);c.beginPath(),c.moveTo(Ne-re*18/2,Ae-de*18/2),c.lineTo(Ne+re*18/2,Ae+de*18/2),c.stroke()})}function ql(c){const d=te.value;if(!d)return;const E=Et?.visagismo?.rosto.value||"redondo",O=yg(E);if(!O)return;const W=Cg[E]||{h:360},ne=d.getContext("2d"),re=d.width,de=d.height;let Ne=re/2,Ae=de*.45,Xe=Math.min(re,de)*.8/W.h,et=0;if(c&&c.length>0){const xt=pc(c,re,de);if(!xt)return;const At=xt.levels[0],Vt=xt.levels[3],Ft=Math.max(.06*Math.min(re,de),Vt-At),Jt=xt.frame.pointAt(0,(At+Vt)/2),It={cx:Jt.x,cy:Jt.y,scale:Ft*1.12/W.h,rot:xt.frame.horizontalAngleRad};rn?(rn.cx+=(It.cx-rn.cx)*.6,rn.cy+=(It.cy-rn.cy)*.6,rn.scale+=(It.scale-rn.scale)*.6,rn.rot+=(It.rot-rn.rot)*.6):rn=It;const Nt=rn;Ne=Nt.cx,Ae=Nt.cy,Xe=Nt.scale,et=Nt.rot}const ot=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#18ffff";ne.save(),ne.fillStyle="rgba(0, 0, 0, 0.58)",ne.fillRect(0,0,re,de),ne.globalCompositeOperation="destination-out",ne.translate(Ne,Ae),ne.rotate(et),ne.scale(Xe,Xe),ne.translate(-150,-210),ne.fill(O),ne.restore(),ne.save(),ne.translate(Ne,Ae),ne.rotate(et),ne.scale(Xe,Xe),ne.translate(-150,-210),ne.strokeStyle=ot,ne.lineWidth=4/Xe,ne.stroke(O),ne.restore()}function Yl(c){const E=Rt.clamp(Le(S.smoothing,1),0,1);!xe||E===1?(be.position.copy(c.pos),be.quaternion.copy(c.quat),be.scale.setScalar(c.scale)):(be.position.lerpVectors(pe.pos,c.pos,E),be.quaternion.slerpQuaternions(pe.quat,c.quat,E),be.scale.setScalar(pe.scale+(c.scale-pe.scale)*E)),pe.pos.copy(be.position),pe.quat.copy(be.quaternion),pe.scale=be.scale.x,xe=!0}function Kl(){const c=globalThis?.FACEMESH_TESSELATION;if(!Array.isArray(c)||!c.length)return null;const d=[];for(let E=0;E+2<c.length;E+=3){const O=c[E],W=c[E+1];if(!Array.isArray(O)||!Array.isArray(W))continue;const ne=O[0],re=O[1],de=W[1];[ne,re,de].every(Number.isInteger)&&d.push(ne,re,de)}return d.length?new Uint16Array(d):null}function Fo(){if(!be||Ke)return;const c=Kl();if(!c)return;je=new mi,dt=new Float32Array(gc*3),je.setAttribute("position",new Jn(dt,3)),je.setIndex(new Jn(c,1));const d=new Yc({side:En});d.colorWrite=!1,d.depthTest=!0,d.depthWrite=!0,Ke=new Mn(je,d),Ke.renderOrder=5,Ke.frustumCulled=!1,Ke.visible=!1,be.add(Ke)}function jl(c,{dEst:d,ipdWorld:E,anchorZ:O,yawDeg:W}){if(!bi.value){Ke&&(Ke.visible=!1);return}if(Fo(),!Ke||!je||!dt||!be)return;const ne=c[33],re=c[263],de=c[1];if(!ne||!re)return;const Ne=Math.max(1e-6,Math.hypot((re.x??0)-(ne.x??0),(re.y??0)-(ne.y??0))),Ae=E/Ne,Xe=Math.min(gc,c.length),et=Math.abs(W||0),ot=Rt.clamp((et-Ec)/Math.max(1,sv-Ec),0,1),xt=Rt.lerp(iv,.64,ot),At=Rt.lerp(av,.03,ot),Vt=Rt.lerp(rv,.024,ot),Ft=Rt.lerp(ov,.072,ot),Jt=E*Rt.lerp(vc,vc+.05,ot),kt=E*Rt.lerp(Sc,Sc+.2,ot),It=0;be.updateMatrixWorld(!0),G.copy(be.matrixWorld).invert();for(let Nt=0;Nt<Xe;Nt++){const Pt=c[Nt],$t=Pt.x*2-1,wn=1-Pt.y*2,Zi=Math.hypot((Pt.x??0)-(de?.x??0),((Pt.y??0)-(de?.y??0))*1.15),Cn=1-Rt.clamp((Zi-Vt)/Math.max(1e-6,Ft-Vt),0,1),jn=Rt.lerp(At,xt,Cn),Qi=Rt.lerp(kt,Jt,Cn),Bn=((Pt.z??O)-O)*Ae*jn-Qi-It;Ul($t,wn,d,T),Vl(T,Bn),s.copy(T).applyMatrix4(G);const Pn=Nt*3;dt[Pn]=s.x,dt[Pn+1]=s.y,dt[Pn+2]=s.z}je.attributes.position.needsUpdate=!0,je.computeBoundingSphere(),Ke.visible=!!be.visible&&!!bi.value}function $l(c,d,E){if(!c||Rn||d!==oi)return;zi=c,ba=E,Ma=!0,B.value=c.appLabel||"indefinido",Wi=Number(c.poseQuality)||0;const O=Et?.visagismo;O&&(!O.molduraRosto?.value&&!O.rostoFixado?.value&&Object.prototype.hasOwnProperty.call(O.rostos,B.value)&&(O.rosto.value=B.value),O.rostoProbabilidades.value=Tg(c.appProbabilities,O.rostos)),le.track("analysis","face_shape_segmented",{version:c.version,faceShape:c.appLabel,confidence:Number(c.confidence.toFixed(4)),poseQuality:Number(c.poseQuality.toFixed(4)),attempts:Si,ratios:Object.fromEntries(Object.entries(c.ratios).map(([W,ne])=>[W,Number(ne.toFixed(4))]))})}async function Zl(c,d,E,O){if(O===oi){Si+=1;try{const W=await Ml();if(Rn||!W||O!==oi)return;let ne=null,re="";if(W.segment(c,de=>{try{const Ne=de.confidenceMasks?.[al];if(!Ne)throw new Error("O segmentador não retornou a classe 3 face-skin.");const Ae=Ne.getAsFloat32Array();ne=cl({landmarks:d,faceSkinMask:Ae,width:Ne.width,height:Ne.height,threshold:.35,poseQuality:E}),re=ll(c,ne,Ae,Ne.width,Ne.height)}finally{de.close?.()}}),!ne)throw new Error("A segmentação facial terminou sem resultado.");$l(ne,O,re)}catch(W){le.captureError("analysis","face_shape_segmentation_failed",W,{attempt:Si,maxAttempts:Wr}),console.warn("[VideoRA] Falha na análise segmentada do formato do rosto.",W),Si>=Wr?(Ma=!0,B.value="indefinido"):ri=0}finally{O===oi&&(vi=!1)}}}function Ql(c){if(Ma||vi||Si>=Wr||!Be.value?.width||!Be.value?.height||Sn<45||we>55)return;const d=sl(c,{width:Be.value.width,height:Be.value.height},Ta);if(Ta=c.map(Ae=>({x:Ae.x,y:Ae.y,z:Ae.z||0})),Wi=d.poseQuality||0,!d.eligible){ri=Math.max(0,ri-2);return}if(ri+=1,ri<_c)return;const E=Be.value,O=Math.min(1,nv/Math.max(E.width,E.height)),W=document.createElement("canvas");W.width=Math.max(1,Math.round(E.width*O)),W.height=Math.max(1,Math.round(E.height*O)),W.getContext("2d",{alpha:!1}).drawImage(E,0,0,W.width,W.height);const ne=Ta,re=d.poseQuality,de=oi;vi=!0;const Ne=()=>{if(Rn){vi=!1;return}de===oi&&Zl(W,ne,re,de)};typeof window.requestIdleCallback=="function"?window.requestIdleCallback(Ne,{timeout:500}):window.setTimeout(Ne,0)}function Oo(){Ee+=1,!(Ee<2)&&(xe=!1,A.value={x:0,y:0},h.value=0,w.value=0,f.value=0,zi||(B.value="aguardando",Wi=0),tr=0,nr=0,k.value="Aguardando",q.value=0,be&&(be.visible=!1),Ke&&(Ke.visible=!1),Ca(),Et?.visagismo?.calculandoRosto.value&&Uo(null))}function Jl(c,d=null){if(!be||!at)return;const E=c[33],O=c[263],W=c[1];if(!E||!O||!W)return;const re=Gl(c,d).clone().multiply(ae),de=hr(E),Ne=hr(O),Ae=Math.max(1e-6,Math.hypot(Ne.x-de.x,Ne.y-de.y));Qt.collecting&&(Qt.samples.push(Ae),Qt.samples.length>=Math.max(3,S.calibFrames|0)&&(Qt.ipd0Ndc=yl(Qt.samples),Qt.collecting=!1,U||(b.value=S.initialDepthOffset),M||(P.value=S.initialScaleInIPD||S.targetWidthInIPD)));const Xe=Qt.ipd0Ndc||Ae,et=_v*(Xe/Ae),ot=mr(Dl(c),et),xt=Hl(ot,b.value),At=c[S.anchorUpperIdx]||c[9],Vt=c[S.anchorLowerIdx]||c[1],Ft=Math.max(0,Math.min(1,S.anchorBlendT)),Jt=(At.z??0)*(1-Ft)+(Vt.z??0)*Ft,kt=mr(de,et),It=mr(Ne,et),Nt=Math.max(1e-6,kt.distanceTo(It)),Pt=Nt/Yt*(Number(P.value)||1),$t=new Ua().setFromQuaternion(re,"YXZ");let wn=Rt.radToDeg($t.y),Zi=Rt.radToDeg($t.x),Cn=Rt.radToDeg($t.z);on.value&&(wn=-wn,Cn=-Cn),tr=Cn,h.value=wn,w.value=Zi,f.value=Ug(Cn,0);const jn=jt&&!Q.value;jn&&Ql(c);const Bn=St(S.rotGlobalGain,1),xr=ae.clone().clone().slerp(re,Bn);let Eu=Le(S.yawRotGain,1),xu=Le(S.pitchGain,1),Mu=Le(S.rollGain,1);const Ji=new Ua().setFromQuaternion(xr,"YXZ");Ji.x*=xu,Ji.y*=Eu,Ji.z*=Mu,nr=Rt.radToDeg(Ji.z),xr.setFromEuler(Ji),Yl({pos:xt,quat:xr,scale:Pt}),be.visible=!0;const Na=te.value;if(Na){const zo=(W.x??.5)*Na.width,bu=(W.y??.5)*Na.height;A.value={x:Math.round(on.value?Na.width-zo:zo),y:Math.round(bu)}}Ca();const Tu=Et?.visagismo?!!Et.visagismo.marcadores.value:fr.value,ko=Et?.visagismo?!!Et.visagismo.proporcoes.value:pr.value,Wo=Et?.visagismo?!!Et.visagismo.molduraRosto.value:Lo.value;Tu&&kl(c),jn&&ko&&!Wo&&Wl(c),jn&&Wo&&!ko&&ql(c),Et?.visagismo?.calculandoRosto.value&&Uo(c),_r(h.value||0,f.value||0),jl(c,{dEst:et,ipdWorld:Nt,anchorZ:Jt,yawDeg:wn})}async function eu(c,d){We=new rf,fe=new da(rt(y.value),c/d,.01,1e3),fe.position.set(0,0,2),Me=new ug({canvas:Y.value,alpha:!0,antialias:!0,powerPreference:"high-performance"}),Me.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Me.outputColorSpace=no,Me.setSize(c,d,!1);const E=new of(16777215,1);E.position.set(0,0,2),We.add(E,new sf(16777215,.6)),be=new cf,be.visible=!1,We.add(be),Fo(),Yi(c,d)}function tu(){lr();const c=()=>{Me&&We&&fe&&Me.render(We,fe),zn=requestAnimationFrame(c)};zn=requestAnimationFrame(c)}function Pa(c){if(!c)return ca;let d=c;return/\.stl$/i.test(d)||(d=`/models3d/${d}.stl`),d.startsWith("/")||(d="/"+d),d}function nu(c){return c?(c.split("/").pop()||"").replace(/\.stl$/i,""):""}function iu(c){const d=nu(c);return J[d]||null}function ya(c){return new lf({color:new wt(typeof c=="string"?c:c||"#000"),shininess:100,side:En,depthTest:!0,depthWrite:!0})}async function gr(c,d,{center:E=!1,preRotate:O=!0}={}){return new Promise((W,ne)=>{new dg().load(c,re=>{if(re.computeBoundingBox(),re.computeVertexNormals(),E){const Ae=new Ie;re.boundingBox.getCenter(Ae),re.translate(-Ae.x,-Ae.y,-Ae.z),re.computeBoundingBox()}const de=d||ya(S.initialColor),Ne=new Mn(re,de);if(O){const Ae=Rt.degToRad,Xe=m;Ne.setRotationFromEuler(new Ua(Ae(Xe.x),Ae(Xe.y),Ae(Xe.z),"YXZ"))}W({mesh:Ne,geo:re})},void 0,re=>ne(re))})}function ci(c,{disposeMaterial:d=!1}={}){if(c)try{be?.remove(c),c.geometry?.dispose?.(),d&&c.material?.dispose?.()}catch{}}function La(){vt++,lr(),ci(ke),ci(Ze),ci(at),ci(Ke,{disposeMaterial:!0}),ke=null,Ze=null,at=null,Ke=null,je=null,dt=null;try{lt?.dispose?.()}catch{}lt=null;try{Me?.dispose?.()}catch{}Me=null,We=null,fe=null,be=null,xe=!1}function Bo(c){c&&(c.position.copy(at.position),c.quaternion.copy(at.quaternion),c.renderOrder=10,c.visible=!!bi.value)}async function vr(c){const d=++vt;ci(ke),ci(Ze),ci(at),ke=null,Ze=null,at=null,ht.set(0,0,0),lt=lt||ya(S.initialColor);const E=Pa(c||ca);N=E;const{mesh:O,geo:W}=await gr(E,lt,{center:!1,preRotate:!0});if(d!==vt||!be)return;W.computeBoundingBox();const ne=new Ie;W.boundingBox.getCenter(ne),W.translate(-ne.x,-ne.y,-ne.z),W.computeBoundingBox(),ht.copy(ne);const re=new Ie;W.boundingBox.getSize(re),Yt=Math.max(1e-6,re.x),O.position.set(-(re.x*S.anchorFracX)+re.x*S.localOffXFrac,-(re.y*S.anchorFracY)+re.x*S.localOffYFrac,-(re.z*S.anchorFracZ)+re.x*S.localOffZFrac),O.renderOrder=10,O.visible=!!bi.value,at=O,be.add(at);const de=iu(E);if(!de)return;const{mesh:Ne}=await gr(de.left,lt,{center:!1,preRotate:!0}),{mesh:Ae}=await gr(de.right,lt,{center:!1,preRotate:!0});if(d!==vt||!be||!at)return;Ne.geometry.translate(-ht.x,-ht.y,-ht.z),Ae.geometry.translate(-ht.x,-ht.y,-ht.z),Bo(Ne),Bo(Ae);const Xe=Rt.degToRad(Number(S.hastesOpenDeg)||0),et=new Ie(0,1,0).applyQuaternion(at.quaternion);function ot(It,Nt){It.computeBoundingBox();const Pt=It.boundingBox,$t=It.attributes.position,Zi=(Pt.max.x-Pt.min.x)*.04,Cn=Nt?Pt.max.x:Pt.min.x;let jn=0,Qi=0,Bn=0;for(let Pn=0;Pn<$t.count;Pn++)Math.abs($t.getX(Pn)-Cn)<Zi&&(jn+=$t.getY(Pn),Qi+=$t.getZ(Pn),Bn++);return new Ie(Cn,Bn>0?jn/Bn:(Pt.min.y+Pt.max.y)/2,Bn>0?Qi/Bn:(Pt.min.z+Pt.max.z)/2)}const xt=ot(Ne.geometry,de.leftMaxX??!0),At=ot(Ae.geometry,de.rightMaxX??!1),Vt=xt.clone().applyQuaternion(Ne.quaternion).add(Ne.position),Ft=At.clone().applyQuaternion(Ae.quaternion).add(Ae.position),Jt=new li().setFromAxisAngle(et,-Xe),kt=new li().setFromAxisAngle(et,Xe);Ne.position.sub(Vt).applyQuaternion(Jt).add(Vt),Ne.quaternion.premultiply(Jt),Ae.position.sub(Ft).applyQuaternion(kt).add(Ft),Ae.quaternion.premultiply(kt),ke=Ne,Ze=Ae,be.add(ke),be.add(Ze),_r(h.value||0,f.value||0)}async function au(){if(!be)return;const c=N||Pa(S.initialModel)||ca;await vr(c)}let ji;async function $i(){return C||(z&&u?.active?!0:(C=(async()=>{const c=performance.now();le.track("app","ar_start_requested",{physicalMobile:i,physicalMobileReason:t.reason,ipadLike:t.isIPadLike,mobileBehavior:r,trackingMode:l.value}),Oe();const d=N,E=lt?.color?`#${lt.color.getHexString()}`:"";Ti(),Mi(),_n&&await _n,lr(),ji?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),wa(),La(),He=0,Je=0,en=0,qt=[],jt=!1,Kn.reset(0),vn.stop(),or();const O=await El();await Sl(O);const W=Re.value;if(Rn||!W)return O.getTracks().forEach(et=>et.stop()),le.track("camera","startup_cancelled",{reason:Rn?"component_unmounted":"video_element_unavailable"},"warn"),!1;if(u=O,W.srcObject=O,await new Promise(et=>{const ot=()=>et();W.addEventListener("loadedmetadata",ot,{once:!0}),W.readyState>=1&&(W.removeEventListener("loadedmetadata",ot),et())}),await W.play(),await wu(),Rn||Re.value!==W)return O.getTracks().forEach(et=>et.stop()),le.track("camera","startup_cancelled",{reason:"view_changed"},"warn"),!1;const ne=W.videoWidth,re=W.videoHeight;vl(O),le.track("camera","video_ready",{width:ne,height:re,settings:v.value}),pl("camera_started"),bl();const de=xo();await eu(de.width,de.height),le.track("webgl","three_renderer_ready",{renderer:Me?.capabilities?{isWebGL2:Me.capabilities.isWebGL2,maxTextures:Me.capabilities.maxTextures,precision:Me.capabilities.precision}:{}}),Yi(de.width,de.height),tu(),E&&(lt=ya(E));const Ne=d||(S.initialModel?Pa(S.initialModel):ca);vr(Ne).catch(et=>(le.captureError("rendering","frame_model_load_failed",et,{mainPath:Ne}),!1)),Ai(),ji=new ResizeObserver(()=>Ai()),ji.observe(document.documentElement),window.addEventListener("orientationchange",fn),window.addEventListener("resize",fn),window.visualViewport?.addEventListener("resize",fn),Eo(l.value),Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null,Ee=0;const Ae=sr().catch(async et=>(le.captureError("mediapipe","cached_landmarker_rejected",et),et?.workerInitializationFailed?null:(xa=!0,sr({forceRecreate:!0,preferCpu:!0,allowWorker:!1})))),Xe=Ae.then(()=>Tt?mn?ml("camera_started"):hl("camera_started"):Je).catch(et=>(le.captureError("camera","orientation_probe_unexpected_failure",et),Je));return await Promise.all([Xe,Ae]),z=!0,bt.confirm(qe?.key||"",performance.now()),Mi(),yo(),le.track("tracking","tracking_started",{inputWidth:Yn,inputHeight:Fn,executionContext:mn?"worker":"main_thread",startupDurationMs:Number((performance.now()-c).toFixed(1)),callback:typeof Re.value?.requestVideoFrameCallback=="function"?"requestVideoFrameCallback":"requestAnimationFrame"}),fn("camera_started"),!0})().catch(c=>(z=!1,On(!1),Ti(),Mi(),wa(),La(),console.error("[VideoRA] Falha ao iniciar câmera:",c),le.captureError("app","ar_start_failed",c),!1)).finally(()=>{C=null}),C))}function ru(c){const d=c.faceLandmarks?.[0];if(!d){if(!jt){const O=vn.observeNoFace({processedFrames:Sn,now:performance.now()});if(O.fallback){Ao(O,"orientation_bootstrap_no_face_timeout"),Oo();return}if(O.changed){Ei(O,"orientation_bootstrap_no_face");return}}ki||(ki=performance.now()),performance.now()-ki>=1e4&&(le.track("tracking","face_not_detected_for_10s",{processedFrames:Sn,latencyMs:Number(D.value.toFixed(2))},"warn"),ki=performance.now()),Oo();return}if(!jt){const O=vn.observeFace({processedFrames:Sn,now:performance.now()});if(O.fallback){Ao(O,"orientation_bootstrap_face_timeout");return}if(O.changed){Ei(O,"orientation_bootstrap_face_unconfirmed");return}}if(!ou(d)){if(!jt){be&&(be.visible=!1),Ke&&(Ke.visible=!1),Ca();return}po+=1,ki=0,_o||(_o=!0,le.track("tracking","first_face_detected",{processedFrames:Sn,latencyMs:Number(D.value.toFixed(2)),points:d.length})),Ee=0,Jl(d,c.facialTransformationMatrixes?.[0]||null)}}function ou(c){const d=Bg(c,en),E=eo(d);if(!Number.isFinite(E))return!1;const O=sc(d),W=cc({calculatedRotation:O,eyeLineAngleDeg:E,activeRotation:jt?Je:null});if(W===null)return!1;const ne=Ba(W,on.value);if(jt){const Ae=Kn.observe(ne,performance.now()),Xe={eyeLineAngleDeg:Number(E.toFixed(2)),rawObservedRotation:W,previewMirrored:on.value,previousRotation:He,candidateRotation:Ae.candidateRotation??ne,sampleCount:Ae.sampleCount||0,windowSamples:Ae.windowSamples||0,stableMs:Number((Ae.stableMs||0).toFixed(1)),confidence:Number((Ae.confidence||0).toFixed(3)),requestedOrientation:qe?.key||"",streamWidth:v.value.width||0,streamHeight:v.value.height||0,screenType:window.screen?.orientation?.type||""};if(Ae.rejected&&(On(!1),le.track("camera","content_orientation_candidate_rejected",{...Xe,candidateRotation:Ae.rejected.candidateRotation,sampleCount:Ae.rejected.sampleCount,windowSamples:Ae.rejected.windowSamples,stableMs:Number(Ae.rejected.stableMs.toFixed(1)),confidence:Number(Ae.rejected.confidence.toFixed(3))},"info")),Ae.candidateStarted&&(On(!0),le.track("camera","content_orientation_candidate_detected",Xe,"info")),Ae.changed){On(!1),rn=null;const et=He,ot=Je;Je=W,He=Ae.activeRotation,le.track("camera","content_orientation_recalibrated",{...Xe,previousRawRotation:ot,rawCorrectionDeg:Je,previousRotation:et,correctionDeg:He},"warn");const xt=Ra("content_orientation_recalibrated");return queueMicrotask(()=>{wo("content_orientation_recalibrated")}),To(Je,Re.value?.videoWidth||0,Re.value?.videoHeight||0),si("camera_content_recalibrated"),xt}return!1}if(qt.push(W),qt.length<10)return!1;qt=qt.slice(-12);const re=Ig(qt,{minimumSamples:10,requiredRatio:.9});if(re===null)return!1;const de=Je;Je=re,He=Ba(Je,on.value),jt=!0,Kn.reset(He,performance.now()),_l(),le.track("camera","content_orientation_resolved",{eyeLineAngleDeg:Number(E.toFixed(2)),sampleCount:qt.length,rawCorrectionDeg:Je,previewMirrored:on.value,correctionDeg:He,requestedOrientation:qe?.key||"",streamWidth:v.value.width||0,streamHeight:v.value.height||0,screenType:window.screen?.orientation?.type||""},He?"warn":"info");const Ne=Ra("content_orientation_resolved");return si("camera_content_resolved"),Ne||de!==Je}function Ai(){const c=Number(ct.value?.dataset?.nw||0),d=Number(ct.value?.dataset?.nh||0);if(!c||!d)return;const E=window.innerWidth,O=window.innerHeight,W=Math.max(E/c,O/d);ct.value.style.transform=`translate(-50%, -50%) scale(${W})`}function su(){Je=0,He=0,qt=[],jt=!1,rn=null,On(!1),Kn.reset(0),vn.stop(),Ra("content_orientation_reset"),si("camera_content_reset")}function cu(c="manual"){jt&&(Kn.reset(He,performance.now()),le.track("camera","content_orientation_watchdog_rearmed",{reason:c,rawCorrectionDeg:Je,correctionDeg:He,requestedOrientation:qe?.key||"",screenType:window.screen?.orientation?.type||"",...tn()}))}function Sr(c="viewport_changed",d=500){Ut&&window.clearTimeout(Ut),Ut=window.setTimeout(()=>{Ut=0,lu(c)},d)}async function lu(c){if(Rn||document.visibilityState!=="visible")return;const d=tn(),E=Aa(),O=bt.observe({key:E.key,width:d.innerWidth,height:d.innerHeight,now:performance.now()});if(O.pending){Sr("viewport_stability_pending",250);return}if(!(An||!z)){if(!O.confirmed||E.key===qe?.key){Ai();return}An=!0,bt.confirm(E.key,performance.now()),su(),le.track("camera","orientation_restart_started",{reason:c,previous:qe?.key||"",current:E.key,stableMs:O.stableMs,stabilitySamples:O.samples,...d});try{await C,z=!1,C=null;const W=await $i();le.track("camera","orientation_restart_completed",{orientation:qe?.key||"",restarted:!!W,...tn()})}catch(W){le.captureError("camera","orientation_restart_failed",W),bt.reset(qe?.key||"")}finally{An=!1}}}function fn(c){Ai();const d=typeof c=="string"?c:c?.type||"viewport_changed",E=Aa();(E.key!==qe?.key||d==="orientationchange"||d==="camera_started")&&le.track("camera","screen_orientation_changed",{reason:d,previous:qe?.key||"",current:E.key,...tn()}),si(d),Sr(d)}function uu(){return!zi||!ba?{ready:!1,status:vi?"processando":"aguardando",stableFrames:ri,requiredStableFrames:_c}:{ready:!0,image:ba,details:zi}}function du(){or(),le.track("analysis","face_shape_report_reset")}function fu(c,d={},E="info"){le.track("analysis",c,d,E)}function pu(){return or(),le.track("analysis","face_shape_reanalysis_requested"),!0}async function hu(c){try{const d=c?Pa(c):ca;await vr(d),Qt.collecting=S.autoCalibrate,Qt.samples=[],Qt.ipd0Ndc=null}catch{}}function mu(c){const d=new wt(typeof c=="string"?c:c||"#000");lt||(lt=ya(c)),lt.color.copy(d),lt.needsUpdate=!0,[at,ke,Ze].forEach(E=>{E?.material?.color&&E.material.color.copy(d)})}function Go(){if(!We||!fe||!Me)return null;xi(),Me.render(We,fe);const c=Be.value?.width||1280,d=Be.value?.height||720,E=document.createElement("canvas");E.width=c,E.height=d;const O=E.getContext("2d");return on.value&&(O.translate(c,0),O.scale(-1,1)),O.drawImage(Be.value,0,0,c,d),O.drawImage(Y.value,0,0,c,d),O.drawImage(te.value,0,0,c,d),E.toDataURL("image/png")}function _u(){if(!Be.value)return null;xi();const c=Be.value.width||1280,d=Be.value.height||720,E=document.createElement("canvas");E.width=c,E.height=d;const O=E.getContext("2d");return on.value&&(O.translate(c,0),O.scale(-1,1)),O.drawImage(Be.value,0,0,c,d),E.toDataURL("image/jpeg",.92)}async function gu(){try{await C}catch{}z=!1,C=null,Ti(),Mi(),ji?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),wa(),La(),le.track("lifecycle","ar_suspended_for_try_on")}async function vu(){return Rn||z?z:(le.track("lifecycle","ar_resuming_after_try_on"),C=null,$i())}function Ho(c){return U=!0,b.value=Number(c)||0,b.value}function Er(c){return M=!0,P.value=Number(c)||1,Et?.visagismo?.armacaoEscala&&(Et.visagismo.armacaoEscala.value=P.value),P.value}function Su(c){const d=Number(P.value)||1;return Er(Rt.clamp(d+(Number(c)||0),.9,2.8))}function Vo(c){return y.value=rt(c),Yi(),y.value}return Cu(()=>{le.start({appVersion:Et?.app?.versao?.value||"",route:Et?.app?.rota?.value||"visagismo"}),Lt=c=>{String(c?.message||"").includes("ResizeObserver loop completed")||le.captureError("javascript","window_error",c?.error||c?.message||"Erro global",{arquivo:c?.filename||"",linha:c?.lineno||0,coluna:c?.colno||0})},mt=c=>{le.captureError("javascript","unhandled_rejection",c?.reason||"Promise rejeitada")},pt=()=>{le.track("lifecycle","visibility_changed",{state:document.visibilityState}),document.visibilityState==="visible"?(cu("visibility_restored"),bt.reset(qe?.key||""),Sr("visibility_restored",300)):Ut&&(window.clearTimeout(Ut),Ut=0)},Bt=()=>le.track("network","online"),Ce=()=>le.track("network","offline",{},"warn"),Ht=c=>{c.preventDefault?.(),le.track("webgl","context_lost",{},"error"),le.flush({keepalive:!0})},nt=()=>le.track("webgl","context_restored"),window.addEventListener("error",Lt),window.addEventListener("unhandledrejection",mt),document.addEventListener("visibilitychange",pt),window.addEventListener("online",Bt),window.addEventListener("offline",Ce),Xt=c=>{const d=performance.now();ai={alpha:Number.isFinite(c?.alpha)?Number(c.alpha.toFixed(2)):null,beta:Number.isFinite(c?.beta)?Number(c.beta.toFixed(2)):null,gamma:Number.isFinite(c?.gamma)?Number(c.gamma.toFixed(2)):null,absolute:!!c?.absolute},so=d,Math.abs(ai.gamma||0)>=45?(Number.isFinite(Bi)||(Bi=d),Gi=Number.NEGATIVE_INFINITY):Math.abs(ai.gamma||0)<=30?(Bi=Number.NEGATIVE_INFINITY,Number.isFinite(Gi)||(Gi=d)):(Bi=Number.NEGATIVE_INFINITY,Gi=Number.NEGATIVE_INFINITY),si("device_orientation"),d-Gi>=800&&fl("device_returned_portrait"),d-co>=1e4&&(co=d,le.track("sensor","device_orientation_sample",{...ai,rawContentRotationDeg:Je,displayContentRotationDeg:He,gateVisible:F.value,...tn()}))},window.addEventListener("deviceorientation",Xt,{passive:!0}),Y.value?.addEventListener("webglcontextlost",Ht),Y.value?.addEventListener("webglcontextrestored",nt),ye=async()=>{le.track("camera","camera_change_requested");try{await C}catch{}z=!1,C=null,await $i()},window.addEventListener("cameraAlterada",ye),it=Pu({videoEl:()=>Re.value,estaAtivo:()=>z&&!!Re.value?.srcObject,reiniciar:async()=>{try{await C}catch{}z=!1,C=null,await $i()},delayMs:450})}),yu(()=>{Rn=!0,window.removeEventListener("error",Lt),window.removeEventListener("unhandledrejection",mt),document.removeEventListener("visibilitychange",pt),window.removeEventListener("online",Bt),window.removeEventListener("offline",Ce),Xt&&(window.removeEventListener("deviceorientation",Xt),Xt=null),Y.value?.removeEventListener("webglcontextlost",Ht),Y.value?.removeEventListener("webglcontextrestored",nt),ye&&(window.removeEventListener("cameraAlterada",ye),ye=null),it&&(it(),it=null),z=!1,Ti(),Mi(),ji?.disconnect?.(),window.removeEventListener("orientationchange",fn),window.removeEventListener("resize",fn),window.visualViewport?.removeEventListener("resize",fn),Ut&&(window.clearTimeout(Ut),Ut=0),On(!1),wa(),La(),Tt=null,mn=!1,xl(),dn=null,le.stop("component_unmounted")}),(c,d)=>(Ri(),ta("div",{id:"AR3D",ref_key:"root",ref:Ve},[ut("div",{class:Lu(["present",{mirror:on.value,"present--orientation-adjusting":Q.value}])},[ut("div",{ref_key:"stage",ref:ct,class:"stage"},[ut("video",{ref_key:"videoEl",ref:Re,autoplay:"",playsinline:"",muted:"",class:"camera-source"},null,512),ut("canvas",{ref_key:"canvasFrame",ref:Be,class:"layer"},null,512),ut("canvas",{ref_key:"canvas3d",ref:Y,class:"layer"},null,512),ut("canvas",{ref_key:"canvasLandmarks",ref:te,class:"layer hud"},null,512)],512)],2),Da(qo,{name:"orientation-gate-fade"},{default:Xo(()=>[F.value?(Ri(),ta("div",qg,[ut("div",Yg,[Da(Nu,{name:"screen_rotation",class:"orientation-gate__icon"}),d[7]||(d[7]=ut("div",{class:"orientation-gate__title"},"Ative a rotação automática",-1)),d[8]||(d[8]=ut("div",{class:"orientation-gate__text"}," O aparelho está deitado, mas a tela continua na vertical. Ative a rotação automática para usar o Optiface em modo horizontal. ",-1)),ie.value?(Ri(),Du(Iu,{key:0,onClick:d[0]||(d[0]=E=>So("orientation_gate_button")),loading:K.value,label:"USAR EM HORIZONTAL",color:"primary",rounded:"",unelevated:"","no-caps":""},null,8,["loading"])):na("",!0),$.value?(Ri(),ta("div",Kg,Ot($.value),1)):na("",!0)])])):na("",!0)]),_:1}),Da(qo,{name:"orientation-gate-fade"},{default:Xo(()=>[Q.value&&!F.value?(Ri(),ta("div",jg,[Da(Uu,{color:"primary",size:"28px"}),d[9]||(d[9]=ut("span",null,"Ajustando a câmera…",-1))])):na("",!0)]),_:1}),Fu(Et).app.metricas.value?(Ri(),ta("div",$g,[ut("label",null,[d[10]||(d[10]=Mr("Profundidade ",-1)),Tr(ut("input",{type:"range",min:"-0.50",max:"0.50",step:"0.001","onUpdate:modelValue":d[1]||(d[1]=E=>b.value=E),onInput:d[2]||(d[2]=E=>Ho(b.value))},null,544),[[br,b.value,void 0,{number:!0}]]),ut("b",null,Ot(b.value.toFixed(3)),1)]),ut("label",null,[d[11]||(d[11]=Mr("Tamanho ",-1)),Tr(ut("input",{type:"range",min:"0.90",max:"2.80",step:"0.01","onUpdate:modelValue":d[3]||(d[3]=E=>P.value=E),onInput:d[4]||(d[4]=E=>Er(P.value))},null,544),[[br,P.value,void 0,{number:!0}]]),ut("b",null,Ot(P.value.toFixed(2))+"×",1)]),ut("label",null,[d[12]||(d[12]=Mr("FOV ",-1)),Tr(ut("input",{type:"range",min:"35",max:"95",step:"0.1","onUpdate:modelValue":d[5]||(d[5]=E=>y.value=E),onInput:d[6]||(d[6]=E=>Vo(y.value))},null,544),[[br,y.value,void 0,{number:!0}]]),ut("b",null,Ot(y.value.toFixed(1))+"°",1)]),ut("div",Zg,[ut("span",null,"Centro do nariz: X "+Ot(A.value.x)+" px · Y "+Ot(A.value.y)+" px",1),ut("span",null,"Inclinação (rosto deitado): "+Ot(f.value.toFixed(1))+"°",1),ut("span",null,"Cabeça virada (esq/dir): "+Ot(h.value.toFixed(1))+"°",1),ut("span",null,"Cabeça up/down (esq/dir): "+Ot(w.value.toFixed(1))+"°",1),ut("span",null,"Tipo de rosto: "+Ot(ce.value),1),ut("span",null,"Predição: "+Ot(Ye.value),1),ut("span",null,"Tracking: "+Ot(l.value)+" · "+Ot(D.value.toFixed(1))+" ms",1),ut("span",null,"Cam: "+Ot(v.value.width||0)+"x"+Ot(v.value.height||0)+" · "+Ot(v.value.frameRate?v.value.frameRate.toFixed(0):"0")+" fps · "+Ot(v.value.facingMode||"unknown"),1),ut("span",null,"Input: "+Ot(I.value.width||0)+"x"+Ot(I.value.height||0)+" · aspect "+Ot(v.value.aspectRatio?v.value.aspectRatio.toFixed(3):"--"),1)]),ut("button",{class:"btn",onClick:No},"Marcadores"),ut("button",{class:"btn",onClick:Do},"Proporções"),ut("button",{class:"btn",onClick:Nl}," Tracking "+Ot(l.value==="high"?"HQ":"Normal"),1),ut("button",{class:"btn",onClick:Go},"📸")])):na("",!0)],512))}},bv=Au(gv,[["__scopeId","data-v-bc201ed3"]]);export{bv as V,Tv as a,Tg as n};
