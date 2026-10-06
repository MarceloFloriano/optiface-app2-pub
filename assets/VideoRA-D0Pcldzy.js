import{bR as cu,aU as mt,dd as lu,bE as $i,as as uu,aD as du,dl as fu,az as pu,aL as Si,u as ji,v as rt,au as hu,I as Ra,bJ as Vo,bX as mu,s as _u,bU as gu,t as Zi,bb as Dt,g as zo,df as vu,bk as Eu,H as gr,bL as vr,bA as Er,q as Qi,a0 as Su}from"./index-B7_c55SD.js";import{c as Mu,N as Bn,S as eo,C as Mt,F as Ec,M as oi,V as He,R as xu,a as an,w as Br,W as Wo,b as wi,d as It,L as na,H as Va,U as si,D as mn,B as ln,e as oa,f as za,p as Tu,E as Au,g as Zt,P as aa,A as bu,h as Sr,i as Dn,j as Oa,k as to,l as sa,m as ca,n as Sc,o as Ru,q as Ti,r as Ba,s as wu,t as Cu,u as Ji,O as yu,v as Pu,x as Lu,y as Du,z as Iu,G as Nu,I as Uu,J as Fu,K as Ou,Q as Bu,T as Hu,X as Gu,Y as ku,Z as Vu,_ as zu,$ as Wu,a0 as Xu,a1 as qu,a2 as Mr,a3 as Ai,a4 as wa,a5 as Yu,a6 as ra,a7 as Ku,a8 as $u,a9 as ju,aa as Zu,ab as Mc,ac as Qu,ad as Ju,ae as ed,af as td,ag as lt,ah as nd,ai as id,aj as ad,ak as ci,al as la,am as In,an as An,ao as xc,ap as ri,aq as Pn,ar as Ha,as as Tc,at as Ac,au as bc,av as Rc,aw as rd,ax as od,ay as sd,az as cd,aA as wc,aB as ai,aC as ld,aD as ud,aE as dd,aF as Cc,aG as fd,aH as yc,aI as Pc,aJ as xr,aK as Tr,aL as Ar,aM as br,aN as Rt,aO as Xo,aP as qo,aQ as Yo,aR as Ko,aS as $o,aT as jo,aU as Zo,aV as Qo,aW as Jo,aX as es,aY as ts,aZ as ns,a_ as is,a$ as as,b0 as rs,b1 as os,b2 as ss,b3 as cs,b4 as ls,b5 as us,b6 as ds,b7 as fs,b8 as ps,b9 as hs,ba as ms,bb as _s,bc as gs,bd as vs,be as Hr,bf as Gr,bg as kr,bh as Vr,bi as zr,bj as Wr,bk as Xr,bl as pd,bm as Es,bn as hd,bo as Na,bp as md,bq as Ss,br as Ms,bs as xs,bt as qr,bu as Yr,bv as _d,bw as Lc,bx as gd,by as Wa,bz as vd,bA as Ed,bB as Dc,bC as Ic,bD as Ts,bE as bi,bF as As,bG as Nc,bH as ua,bI as Ci,bJ as Sd,bK as Uc,bL as Md,bM as xd,bN as Td,bO as bs,bP as tn,bQ as Ad,bR as bd,bS as Rd,bT as wd,bU as Cd,bV as yd,bW as Pd,bX as Ld,bY as Dd,bZ as Id,b_ as Nd,b$ as Ud,c0 as Fd,c1 as Od,c2 as Bd,c3 as Hd,c4 as Gd,c5 as kd,c6 as Vd,c7 as zd,c8 as Rs,c9 as St,ca as Zn,cb as Wd,cc as Xd,cd as qd,ce as Yd,cf as Kd}from"./three.core-BchmhVRD.js";import{U as Kr,u as Fc,R as Oc,s as $d,g as jd,i as ws}from"./faceLandmarkerWorkerClient-BjHY3rkl.js";import{a as Zd,b as Qd}from"./cameraPreference-DlAyC_Us.js";function Bc(){let e=null,n=!1,t=null,i=null;function a(r,c){t(r,c),i=e.requestAnimationFrame(a)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(a),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(r){t=r},setContext:function(r){e=r}}}function Jd(e){const n=new WeakMap;function t(f,w){const g=f.array,v=f.usage,h=g.byteLength,b=e.createBuffer();e.bindBuffer(w,b),e.bufferData(w,g,v),f.onUploadCallback();let T;if(g instanceof Float32Array)T=e.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)T=e.HALF_FLOAT;else if(g instanceof Uint16Array)f.isFloat16BufferAttribute?T=e.HALF_FLOAT:T=e.UNSIGNED_SHORT;else if(g instanceof Int16Array)T=e.SHORT;else if(g instanceof Uint32Array)T=e.UNSIGNED_INT;else if(g instanceof Int32Array)T=e.INT;else if(g instanceof Int8Array)T=e.BYTE;else if(g instanceof Uint8Array)T=e.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)T=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:b,type:T,bytesPerElement:g.BYTES_PER_ELEMENT,version:f.version,size:h}}function i(f,w,g){const v=w.array,h=w.updateRanges;if(e.bindBuffer(g,f),h.length===0)e.bufferSubData(g,0,v);else{h.sort((T,I)=>T.start-I.start);let b=0;for(let T=1;T<h.length;T++){const I=h[b],C=h[T];C.start<=I.start+I.count+1?I.count=Math.max(I.count,C.start+C.count-I.start):(++b,h[b]=C)}h.length=b+1;for(let T=0,I=h.length;T<I;T++){const C=h[T];e.bufferSubData(g,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}w.clearUpdateRanges()}w.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function r(f){f.isInterleavedBufferAttribute&&(f=f.data);const w=n.get(f);w&&(e.deleteBuffer(w.buffer),n.delete(f))}function c(f,w){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=n.get(f);(!v||v.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const g=n.get(f);if(g===void 0)n.set(f,t(f,w));else if(g.version<f.version){if(g.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(g.buffer,f,w),g.version=f.version}}return{get:a,remove:r,update:c}}var ef=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tf=`#ifdef USE_ALPHAHASH
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
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,af=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,of=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
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
#endif`,cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hf=`#ifdef USE_IRIDESCENCE
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
#endif`,mf=`#ifdef USE_BUMPMAP
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Af=`#define PI 3.141592653589793
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
} // validated`,bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,If=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Nf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Of=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qf=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Yf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,ep=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,np=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ap=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,op=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_p=`#ifdef USE_MORPHTARGETS
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
#endif`,gp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ep=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tp=`#ifdef USE_NORMALMAP
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
#endif`,Ap=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Np=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Up=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kp=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,th=`uniform sampler2D t2D;
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
}`,nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ih=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ah=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oh=`#include <common>
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
}`,sh=`#if DEPTH_PACKING == 3200
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
}`,ch=`#define DISTANCE
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
}`,lh=`#define DISTANCE
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fh=`uniform float scale;
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
}`,ph=`uniform vec3 diffuse;
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
}`,hh=`#include <common>
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
}`,mh=`uniform vec3 diffuse;
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
}`,_h=`#define LAMBERT
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
}`,gh=`#define LAMBERT
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
}`,vh=`#define MATCAP
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
}`,Eh=`#define MATCAP
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
}`,Sh=`#define NORMAL
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
}`,Mh=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xh=`#define PHONG
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
}`,Th=`#define PHONG
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
}`,Ah=`#define STANDARD
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
}`,bh=`#define STANDARD
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Rh=`#define TOON
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
}`,wh=`#define TOON
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
}`,Ch=`uniform float size;
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
}`,yh=`uniform vec3 diffuse;
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
}`,Ph=`#include <common>
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
}`,Lh=`uniform vec3 color;
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
}`,Dh=`uniform float rotation;
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
}`,Ih=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:ef,alphahash_pars_fragment:tf,alphamap_fragment:nf,alphamap_pars_fragment:af,alphatest_fragment:rf,alphatest_pars_fragment:of,aomap_fragment:sf,aomap_pars_fragment:cf,batching_pars_vertex:lf,batching_vertex:uf,begin_vertex:df,beginnormal_vertex:ff,bsdfs:pf,iridescence_fragment:hf,bumpmap_pars_fragment:mf,clipping_planes_fragment:_f,clipping_planes_pars_fragment:gf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:Ef,color_fragment:Sf,color_pars_fragment:Mf,color_pars_vertex:xf,color_vertex:Tf,common:Af,cube_uv_reflection_fragment:bf,defaultnormal_vertex:Rf,displacementmap_pars_vertex:wf,displacementmap_vertex:Cf,emissivemap_fragment:yf,emissivemap_pars_fragment:Pf,colorspace_fragment:Lf,colorspace_pars_fragment:Df,envmap_fragment:If,envmap_common_pars_fragment:Nf,envmap_pars_fragment:Uf,envmap_pars_vertex:Ff,envmap_physical_pars_fragment:Yf,envmap_vertex:Of,fog_vertex:Bf,fog_pars_vertex:Hf,fog_fragment:Gf,fog_pars_fragment:kf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:zf,lights_lambert_fragment:Wf,lights_lambert_pars_fragment:Xf,lights_pars_begin:qf,lights_toon_fragment:Kf,lights_toon_pars_fragment:$f,lights_phong_fragment:jf,lights_phong_pars_fragment:Zf,lights_physical_fragment:Qf,lights_physical_pars_fragment:Jf,lights_fragment_begin:ep,lights_fragment_maps:tp,lights_fragment_end:np,logdepthbuf_fragment:ip,logdepthbuf_pars_fragment:ap,logdepthbuf_pars_vertex:rp,logdepthbuf_vertex:op,map_fragment:sp,map_pars_fragment:cp,map_particle_fragment:lp,map_particle_pars_fragment:up,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphinstance_vertex:pp,morphcolor_vertex:hp,morphnormal_vertex:mp,morphtarget_pars_vertex:_p,morphtarget_vertex:gp,normal_fragment_begin:vp,normal_fragment_maps:Ep,normal_pars_fragment:Sp,normal_pars_vertex:Mp,normal_vertex:xp,normalmap_pars_fragment:Tp,clearcoat_normal_fragment_begin:Ap,clearcoat_normal_fragment_maps:bp,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:wp,opaque_fragment:Cp,packing:yp,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Dp,dithering_pars_fragment:Ip,roughnessmap_fragment:Np,roughnessmap_pars_fragment:Up,shadowmap_pars_fragment:Fp,shadowmap_pars_vertex:Op,shadowmap_vertex:Bp,shadowmask_pars_fragment:Hp,skinbase_vertex:Gp,skinning_pars_vertex:kp,skinning_vertex:Vp,skinnormal_vertex:zp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:qp,tonemapping_pars_fragment:Yp,transmission_fragment:Kp,transmission_pars_fragment:$p,uv_pars_fragment:jp,uv_pars_vertex:Zp,uv_vertex:Qp,worldpos_vertex:Jp,background_vert:eh,background_frag:th,backgroundCube_vert:nh,backgroundCube_frag:ih,cube_vert:ah,cube_frag:rh,depth_vert:oh,depth_frag:sh,distanceRGBA_vert:ch,distanceRGBA_frag:lh,equirect_vert:uh,equirect_frag:dh,linedashed_vert:fh,linedashed_frag:ph,meshbasic_vert:hh,meshbasic_frag:mh,meshlambert_vert:_h,meshlambert_frag:gh,meshmatcap_vert:vh,meshmatcap_frag:Eh,meshnormal_vert:Sh,meshnormal_frag:Mh,meshphong_vert:xh,meshphong_frag:Th,meshphysical_vert:Ah,meshphysical_frag:bh,meshtoon_vert:Rh,meshtoon_frag:wh,points_vert:Ch,points_frag:yh,shadow_vert:Ph,shadow_frag:Lh,sprite_vert:Dh,sprite_frag:Ih},he={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Tn={basic:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Mt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:tn([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:tn([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:tn([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Mt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:tn([he.points,he.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:tn([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:tn([he.common,he.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:tn([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:tn([he.sprite,he.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:tn([he.common,he.displacementmap,{referencePosition:{value:new He},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:tn([he.lights,he.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Tn.physical={uniforms:tn([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Ca={r:0,b:0,g:0},Qn=new bi,Nh=new oi;function Uh(e,n,t,i,a,r,c){const f=new Mt(0);let w=r===!0?0:1,g,v,h=null,b=0,T=null;function I(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?t:n).get(M)),M}function C(x){let M=!1;const D=I(x);D===null?o(f,w):D&&D.isColor&&(o(D,1),M=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,c):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(e.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function d(x,M){const D=I(M);D&&(D.isCubeTexture||D.mapping===Wa)?(v===void 0&&(v=new An(new Ic(1,1,1),new ci({name:"BackgroundCubeMaterial",uniforms:Ts(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(A,F,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Qn.copy(M.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Nh.makeRotationFromEuler(Qn)),v.material.toneMapped=It.getTransfer(D.colorSpace)!==Rt,(h!==D||b!==D.version||T!==e.toneMapping)&&(v.material.needsUpdate=!0,h=D,b=D.version,T=e.toneMapping),v.layers.enableAll(),x.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(g===void 0&&(g=new An(new Rc(2,2),new ci({name:"BackgroundMaterial",uniforms:Ts(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(g)),g.material.uniforms.t2D.value=D,g.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,g.material.toneMapped=It.getTransfer(D.colorSpace)!==Rt,D.matrixAutoUpdate===!0&&D.updateMatrix(),g.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||b!==D.version||T!==e.toneMapping)&&(g.material.needsUpdate=!0,h=D,b=D.version,T=e.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null))}function o(x,M){x.getRGB(Ca,Dc(e)),i.buffers.color.setClear(Ca.r,Ca.g,Ca.b,M,c)}function L(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(x,M=1){f.set(x),w=M,o(f,w)},getClearAlpha:function(){return w},setClearAlpha:function(x){w=x,o(f,w)},render:C,addToRenderList:d,dispose:L}}function Fh(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},a=b(null);let r=a,c=!1;function f(_,y,G,X,j){let Z=!1;const Y=h(X,G,y);r!==Y&&(r=Y,g(r.object)),Z=T(_,X,G,j),Z&&I(_,X,G,j),j!==null&&n.update(j,e.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,M(_,y,G,X),j!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(j).buffer))}function w(){return e.createVertexArray()}function g(_){return e.bindVertexArray(_)}function v(_){return e.deleteVertexArray(_)}function h(_,y,G){const X=G.wireframe===!0;let j=i[_.id];j===void 0&&(j={},i[_.id]=j);let Z=j[y.id];Z===void 0&&(Z={},j[y.id]=Z);let Y=Z[X];return Y===void 0&&(Y=b(w()),Z[X]=Y),Y}function b(_){const y=[],G=[],X=[];for(let j=0;j<t;j++)y[j]=0,G[j]=0,X[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:G,attributeDivisors:X,object:_,attributes:{},index:null}}function T(_,y,G,X){const j=r.attributes,Z=y.attributes;let Y=0;const ce=G.getAttributes();for(const q in ce)if(ce[q].location>=0){const Be=j[q];let Ke=Z[q];if(Ke===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(Ke=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(Ke=_.instanceColor)),Be===void 0||Be.attribute!==Ke||Ke&&Be.data!==Ke.data)return!0;Y++}return r.attributesNum!==Y||r.index!==X}function I(_,y,G,X){const j={},Z=y.attributes;let Y=0;const ce=G.getAttributes();for(const q in ce)if(ce[q].location>=0){let Be=Z[q];Be===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(Be=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(Be=_.instanceColor));const Ke={};Ke.attribute=Be,Be&&Be.data&&(Ke.data=Be.data),j[q]=Ke,Y++}r.attributes=j,r.attributesNum=Y,r.index=X}function C(){const _=r.newAttributes;for(let y=0,G=_.length;y<G;y++)_[y]=0}function d(_){o(_,0)}function o(_,y){const G=r.newAttributes,X=r.enabledAttributes,j=r.attributeDivisors;G[_]=1,X[_]===0&&(e.enableVertexAttribArray(_),X[_]=1),j[_]!==y&&(e.vertexAttribDivisor(_,y),j[_]=y)}function L(){const _=r.newAttributes,y=r.enabledAttributes;for(let G=0,X=y.length;G<X;G++)y[G]!==_[G]&&(e.disableVertexAttribArray(G),y[G]=0)}function x(_,y,G,X,j,Z,Y){Y===!0?e.vertexAttribIPointer(_,y,G,j,Z):e.vertexAttribPointer(_,y,G,X,j,Z)}function M(_,y,G,X){C();const j=X.attributes,Z=G.getAttributes(),Y=y.defaultAttributeValues;for(const ce in Z){const q=Z[ce];if(q.location>=0){let Pe=j[ce];if(Pe===void 0&&(ce==="instanceMatrix"&&_.instanceMatrix&&(Pe=_.instanceMatrix),ce==="instanceColor"&&_.instanceColor&&(Pe=_.instanceColor)),Pe!==void 0){const Be=Pe.normalized,Ke=Pe.itemSize,ot=n.get(Pe);if(ot===void 0)continue;const wt=ot.buffer,tt=ot.type,Ee=ot.bytesPerElement,W=tt===e.INT||tt===e.UNSIGNED_INT||Pe.gpuType===wc;if(Pe.isInterleavedBufferAttribute){const J=Pe.data,ge=J.stride,Le=Pe.offset;if(J.isInstancedInterleavedBuffer){for(let Re=0;Re<q.locationSize;Re++)o(q.location+Re,J.meshPerAttribute);_.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Re=0;Re<q.locationSize;Re++)d(q.location+Re);e.bindBuffer(e.ARRAY_BUFFER,wt);for(let Re=0;Re<q.locationSize;Re++)x(q.location+Re,Ke/q.locationSize,tt,Be,ge*Ee,(Le+Ke/q.locationSize*Re)*Ee,W)}else{if(Pe.isInstancedBufferAttribute){for(let J=0;J<q.locationSize;J++)o(q.location+J,Pe.meshPerAttribute);_.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Pe.meshPerAttribute*Pe.count)}else for(let J=0;J<q.locationSize;J++)d(q.location+J);e.bindBuffer(e.ARRAY_BUFFER,wt);for(let J=0;J<q.locationSize;J++)x(q.location+J,Ke/q.locationSize,tt,Be,Ke*Ee,Ke/q.locationSize*J*Ee,W)}}else if(Y!==void 0){const Be=Y[ce];if(Be!==void 0)switch(Be.length){case 2:e.vertexAttrib2fv(q.location,Be);break;case 3:e.vertexAttrib3fv(q.location,Be);break;case 4:e.vertexAttrib4fv(q.location,Be);break;default:e.vertexAttrib1fv(q.location,Be)}}}}L()}function D(){V();for(const _ in i){const y=i[_];for(const G in y){const X=y[G];for(const j in X)v(X[j].object),delete X[j];delete y[G]}delete i[_]}}function A(_){if(i[_.id]===void 0)return;const y=i[_.id];for(const G in y){const X=y[G];for(const j in X)v(X[j].object),delete X[j];delete y[G]}delete i[_.id]}function F(_){for(const y in i){const G=i[y];if(G[_.id]===void 0)continue;const X=G[_.id];for(const j in X)v(X[j].object),delete X[j];delete G[_.id]}}function V(){m(),c=!0,r!==a&&(r=a,g(r.object))}function m(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:m,dispose:D,releaseStatesOfGeometry:A,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:d,disableUnusedAttributes:L}}function Oh(e,n,t){let i;function a(g){i=g}function r(g,v){e.drawArrays(i,g,v),t.update(v,i,1)}function c(g,v,h){h!==0&&(e.drawArraysInstanced(i,g,v,h),t.update(v,i,h))}function f(g,v,h){if(h===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,g,0,v,0,h);let T=0;for(let I=0;I<h;I++)T+=v[I];t.update(T,i,1)}function w(g,v,h,b){if(h===0)return;const T=n.get("WEBGL_multi_draw");if(T===null)for(let I=0;I<g.length;I++)c(g[I],v[I],b[I]);else{T.multiDrawArraysInstancedWEBGL(i,g,0,v,0,b,0,h);let I=0;for(let C=0;C<h;C++)I+=v[C]*b[C];t.update(I,i,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=w}function Bh(e,n,t,i){let a;function r(){if(a!==void 0)return a;if(n.has("EXT_texture_filter_anisotropic")===!0){const F=n.get("EXT_texture_filter_anisotropic");a=e.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Dn&&i.convert(F)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const V=F===Va&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(F!==si&&i.convert(F)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ai&&!V)}function w(F){if(F==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=t.precision!==void 0?t.precision:"highp";const v=w(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const h=t.logarithmicDepthBuffer===!0,b=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),T=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),I=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=e.getParameter(e.MAX_TEXTURE_SIZE),d=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),o=e.getParameter(e.MAX_VERTEX_ATTRIBS),L=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),x=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),D=I>0,A=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:w,textureFormatReadable:c,textureTypeReadable:f,precision:g,logarithmicDepthBuffer:h,reversedDepthBuffer:b,maxTextures:T,maxVertexTextures:I,maxTextureSize:C,maxCubemapSize:d,maxAttributes:o,maxVertexUniforms:L,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:D,maxSamples:A}}function Hh(e){const n=this;let t=null,i=0,a=!1,r=!1;const c=new td,f=new lt,w={value:null,needsUpdate:!1};this.uniform=w,this.numPlanes=0,this.numIntersection=0,this.init=function(h,b){const T=h.length!==0||b||i!==0||a;return a=b,i=h.length,T},this.beginShadows=function(){r=!0,v(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,b){t=v(h,b,0)},this.setState=function(h,b,T){const I=h.clippingPlanes,C=h.clipIntersection,d=h.clipShadows,o=e.get(h);if(!a||I===null||I.length===0||r&&!d)r?v(null):g();else{const L=r?0:i,x=L*4;let M=o.clippingState||null;w.value=M,M=v(I,b,x,T);for(let D=0;D!==x;++D)M[D]=t[D];o.clippingState=M,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function g(){w.value!==t&&(w.value=t,w.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function v(h,b,T,I){const C=h!==null?h.length:0;let d=null;if(C!==0){if(d=w.value,I!==!0||d===null){const o=T+C*4,L=b.matrixWorldInverse;f.getNormalMatrix(L),(d===null||d.length<o)&&(d=new Float32Array(o));for(let x=0,M=T;x!==C;++x,M+=4)c.copy(h[x]).applyMatrix4(L,f),c.normal.toArray(d,M),d[M+3]=c.constant}w.value=d,w.needsUpdate=!0}return n.numPlanes=C,n.numIntersection=0,d}}function Gh(e){let n=new WeakMap;function t(c,f){return f===qr?c.mapping=ua:f===Yr&&(c.mapping=Ci),c}function i(c){if(c&&c.isTexture){const f=c.mapping;if(f===qr||f===Yr)if(n.has(c)){const w=n.get(c).texture;return t(w,c.mapping)}else{const w=c.image;if(w&&w.height>0){const g=new _d(w.height);return g.fromEquirectangularTexture(e,c),n.set(c,g),c.addEventListener("dispose",a),t(g.texture,c.mapping)}else return null}}return c}function a(c){const f=c.target;f.removeEventListener("dispose",a);const w=n.get(f);w!==void 0&&(n.delete(f),w.dispose())}function r(){n=new WeakMap}return{get:i,dispose:r}}const Ri=4,Cs=[.125,.215,.35,.446,.526,.582],ii=20,Rr=new Sd,ys=new Mt;let wr=null,Cr=0,yr=0,Pr=!1;const ni=(1+Math.sqrt(5))/2,Mi=1/ni,Ps=[new He(-ni,Mi,0),new He(ni,Mi,0),new He(-Mi,0,ni),new He(Mi,0,ni),new He(0,ni,-Mi),new He(0,ni,Mi),new He(-1,1,-1),new He(1,1,-1),new He(-1,1,1),new He(1,1,1)],kh=new He;class Ls{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,a=100,r={}){const{size:c=256,position:f=kh}=r;wr=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const w=this._allocateTargets();return w.depthBuffer=!0,this._sceneToCubeUV(n,i,a,w,f),t>0&&this._blur(w,0,0,t),this._applyPMREM(w),this._cleanup(w),w}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ns(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Is(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(wr,Cr,yr),this._renderer.xr.enabled=Pr,n.scissorTest=!1,ya(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===ua||n.mapping===Ci?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),wr=this._renderer.getRenderTarget(),Cr=this._renderer.getActiveCubeFace(),yr=this._renderer.getActiveMipmapLevel(),Pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:Va,format:Dn,colorSpace:za,depthBuffer:!1},a=Ds(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ds(n,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vh(r)),this._blurMaterial=zh(r,n,t)}return a}_compileMaterial(n){const t=new An(this._lodPlanes[0],n);this._renderer.compile(t,Rr)}_sceneToCubeUV(n,t,i,a,r){const w=new aa(90,1,t,i),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],h=this._renderer,b=h.autoClear,T=h.toneMapping;h.getClearColor(ys),h.toneMapping=Bn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(a),h.clearDepth(),h.setRenderTarget(null));const C=new Uc({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),d=new An(new Ic,C);let o=!1;const L=n.background;L?L.isColor&&(C.color.copy(L),n.background=null,o=!0):(C.color.copy(ys),o=!0);for(let x=0;x<6;x++){const M=x%3;M===0?(w.up.set(0,g[x],0),w.position.set(r.x,r.y,r.z),w.lookAt(r.x+v[x],r.y,r.z)):M===1?(w.up.set(0,0,g[x]),w.position.set(r.x,r.y,r.z),w.lookAt(r.x,r.y+v[x],r.z)):(w.up.set(0,g[x],0),w.position.set(r.x,r.y,r.z),w.lookAt(r.x,r.y,r.z+v[x]));const D=this._cubeSize;ya(a,M*D,x>2?D:0,D,D),h.setRenderTarget(a),o&&h.render(d,w),h.render(n,w)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=T,h.autoClear=b,n.background=L}_textureToCubeUV(n,t){const i=this._renderer,a=n.mapping===ua||n.mapping===Ci;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ns()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Is());const r=a?this._cubemapMaterial:this._equirectMaterial,c=new An(this._lodPlanes[0],r),f=r.uniforms;f.envMap.value=n;const w=this._cubeSize;ya(t,0,0,3*w,2*w),i.setRenderTarget(t),i.render(c,Rr)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const c=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),f=Ps[(a-r-1)%Ps.length];this._blur(n,r-1,r,c,f)}t.autoClear=i}_blur(n,t,i,a,r){const c=this._pingPongRenderTarget;this._halfBlur(n,c,t,i,a,"latitudinal",r),this._halfBlur(c,n,i,i,a,"longitudinal",r)}_halfBlur(n,t,i,a,r,c,f){const w=this._renderer,g=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,h=new An(this._lodPlanes[a],g),b=g.uniforms,T=this._sizeLods[i]-1,I=isFinite(r)?Math.PI/(2*T):2*Math.PI/(2*ii-1),C=r/I,d=isFinite(r)?1+Math.floor(v*C):ii;d>ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${ii}`);const o=[];let L=0;for(let F=0;F<ii;++F){const V=F/C,m=Math.exp(-V*V/2);o.push(m),F===0?L+=m:F<d&&(L+=2*m)}for(let F=0;F<o.length;F++)o[F]=o[F]/L;b.envMap.value=n.texture,b.samples.value=d,b.weights.value=o,b.latitudinal.value=c==="latitudinal",f&&(b.poleAxis.value=f);const{_lodMax:x}=this;b.dTheta.value=I,b.mipInt.value=x-i;const M=this._sizeLods[a],D=3*M*(a>x-Ri?a-x+Ri:0),A=4*(this._cubeSize-M);ya(t,D,A,3*M,2*M),w.setRenderTarget(t),w.render(h,Rr)}}function Vh(e){const n=[],t=[],i=[];let a=e;const r=e-Ri+1+Cs.length;for(let c=0;c<r;c++){const f=Math.pow(2,a);t.push(f);let w=1/f;c>e-Ri?w=Cs[c-e+Ri-1]:c===0&&(w=0),i.push(w);const g=1/(f-2),v=-g,h=1+g,b=[v,v,h,v,h,h,v,v,h,h,v,h],T=6,I=6,C=3,d=2,o=1,L=new Float32Array(C*I*T),x=new Float32Array(d*I*T),M=new Float32Array(o*I*T);for(let A=0;A<T;A++){const F=A%3*2/3-1,V=A>2?0:-1,m=[F,V,0,F+2/3,V,0,F+2/3,V+1,0,F,V,0,F+2/3,V+1,0,F,V+1,0];L.set(m,C*I*A),x.set(b,d*I*A);const _=[A,A,A,A,A,A];M.set(_,o*I*A)}const D=new la;D.setAttribute("position",new In(L,C)),D.setAttribute("uv",new In(x,d)),D.setAttribute("faceIndex",new In(M,o)),n.push(D),a>Ri&&a--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Ds(e,n,t){const i=new wi(e,n,t);return i.texture.mapping=Wa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(e,n,t,i,a){e.viewport.set(n,t,i,a),e.scissor.set(n,t,i,a)}function zh(e,n,t){const i=new Float32Array(ii),a=new He(0,1,0);return new ci({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:no(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Is(){return new ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ns(){return new ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function no(){return`

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
	`}function Wh(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const w=f.mapping,g=w===qr||w===Yr,v=w===ua||w===Ci;if(g||v){let h=n.get(f);const b=h!==void 0?h.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==b)return t===null&&(t=new Ls(e)),h=g?t.fromEquirectangular(f,h):t.fromCubemap(f,h),h.texture.pmremVersion=f.pmremVersion,n.set(f,h),h.texture;if(h!==void 0)return h.texture;{const T=f.image;return g&&T&&T.height>0||v&&T&&a(T)?(t===null&&(t=new Ls(e)),h=g?t.fromEquirectangular(f):t.fromCubemap(f),h.texture.pmremVersion=f.pmremVersion,n.set(f,h),f.addEventListener("dispose",r),h.texture):null}}}return f}function a(f){let w=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&w++;return w===g}function r(f){const w=f.target;w.removeEventListener("dispose",r);const g=n.get(w);g!==void 0&&(n.delete(w),g.dispose())}function c(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:c}}function Xh(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let a;switch(i){case"WEBGL_depth_texture":a=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=e.getExtension(i)}return n[i]=a,a}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const a=t(i);return a===null&&Br("THREE.WebGLRenderer: "+i+" extension not supported."),a}}}function qh(e,n,t,i){const a={},r=new WeakMap;function c(h){const b=h.target;b.index!==null&&n.remove(b.index);for(const I in b.attributes)n.remove(b.attributes[I]);b.removeEventListener("dispose",c),delete a[b.id];const T=r.get(b);T&&(n.remove(T),r.delete(b)),i.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function f(h,b){return a[b.id]===!0||(b.addEventListener("dispose",c),a[b.id]=!0,t.memory.geometries++),b}function w(h){const b=h.attributes;for(const T in b)n.update(b[T],e.ARRAY_BUFFER)}function g(h){const b=[],T=h.index,I=h.attributes.position;let C=0;if(T!==null){const L=T.array;C=T.version;for(let x=0,M=L.length;x<M;x+=3){const D=L[x+0],A=L[x+1],F=L[x+2];b.push(D,A,A,F,F,D)}}else if(I!==void 0){const L=I.array;C=I.version;for(let x=0,M=L.length/3-1;x<M;x+=3){const D=x+0,A=x+1,F=x+2;b.push(D,A,A,F,F,D)}}else return;const d=new(Td(b)?Md:xd)(b,1);d.version=C;const o=r.get(h);o&&n.remove(o),r.set(h,d)}function v(h){const b=r.get(h);if(b){const T=h.index;T!==null&&b.version<T.version&&g(h)}else g(h);return r.get(h)}return{get:f,update:w,getWireframeAttribute:v}}function Yh(e,n,t){let i;function a(b){i=b}let r,c;function f(b){r=b.type,c=b.bytesPerElement}function w(b,T){e.drawElements(i,T,r,b*c),t.update(T,i,1)}function g(b,T,I){I!==0&&(e.drawElementsInstanced(i,T,r,b*c,I),t.update(T,i,I))}function v(b,T,I){if(I===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,T,0,r,b,0,I);let d=0;for(let o=0;o<I;o++)d+=T[o];t.update(d,i,1)}function h(b,T,I,C){if(I===0)return;const d=n.get("WEBGL_multi_draw");if(d===null)for(let o=0;o<b.length;o++)g(b[o]/c,T[o],C[o]);else{d.multiDrawElementsInstancedWEBGL(i,T,0,r,b,0,C,0,I);let o=0;for(let L=0;L<I;L++)o+=T[L]*C[L];t.update(o,i,1)}}this.setMode=a,this.setIndex=f,this.render=w,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=h}function Kh(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,c,f){switch(t.calls++,c){case e.TRIANGLES:t.triangles+=f*(r/3);break;case e.LINES:t.lines+=f*(r/2);break;case e.LINE_STRIP:t.lines+=f*(r-1);break;case e.LINE_LOOP:t.lines+=f*r;break;case e.POINTS:t.points+=f*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:a,update:i}}function $h(e,n,t){const i=new WeakMap,a=new an;function r(c,f,w){const g=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,h=v!==void 0?v.length:0;let b=i.get(f);if(b===void 0||b.count!==h){let m=function(){F.dispose(),i.delete(f),f.removeEventListener("dispose",m)};b!==void 0&&b.texture.dispose();const T=f.morphAttributes.position!==void 0,I=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,d=f.morphAttributes.position||[],o=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let x=0;T===!0&&(x=1),I===!0&&(x=2),C===!0&&(x=3);let M=f.attributes.position.count*x,D=1;M>n.maxTextureSize&&(D=Math.ceil(M/n.maxTextureSize),M=n.maxTextureSize);const A=new Float32Array(M*D*4*h),F=new Lc(A,M,D,h);F.type=ai,F.needsUpdate=!0;const V=x*4;for(let _=0;_<h;_++){const y=d[_],G=o[_],X=L[_],j=M*D*4*_;for(let Z=0;Z<y.count;Z++){const Y=Z*V;T===!0&&(a.fromBufferAttribute(y,Z),A[j+Y+0]=a.x,A[j+Y+1]=a.y,A[j+Y+2]=a.z,A[j+Y+3]=0),I===!0&&(a.fromBufferAttribute(G,Z),A[j+Y+4]=a.x,A[j+Y+5]=a.y,A[j+Y+6]=a.z,A[j+Y+7]=0),C===!0&&(a.fromBufferAttribute(X,Z),A[j+Y+8]=a.x,A[j+Y+9]=a.y,A[j+Y+10]=a.z,A[j+Y+11]=X.itemSize===4?a.w:1)}}b={count:h,texture:F,size:new Zt(M,D)},i.set(f,b),f.addEventListener("dispose",m)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)w.getUniforms().setValue(e,"morphTexture",c.morphTexture,t);else{let T=0;for(let C=0;C<g.length;C++)T+=g[C];const I=f.morphTargetsRelative?1:1-T;w.getUniforms().setValue(e,"morphTargetBaseInfluence",I),w.getUniforms().setValue(e,"morphTargetInfluences",g)}w.getUniforms().setValue(e,"morphTargetsTexture",b.texture,t),w.getUniforms().setValue(e,"morphTargetsTextureSize",b.size)}return{update:r}}function jh(e,n,t,i){let a=new WeakMap;function r(w){const g=i.render.frame,v=w.geometry,h=n.get(w,v);if(a.get(h)!==g&&(n.update(h),a.set(h,g)),w.isInstancedMesh&&(w.hasEventListener("dispose",f)===!1&&w.addEventListener("dispose",f),a.get(w)!==g&&(t.update(w.instanceMatrix,e.ARRAY_BUFFER),w.instanceColor!==null&&t.update(w.instanceColor,e.ARRAY_BUFFER),a.set(w,g))),w.isSkinnedMesh){const b=w.skeleton;a.get(b)!==g&&(b.update(),a.set(b,g))}return h}function c(){a=new WeakMap}function f(w){const g=w.target;g.removeEventListener("dispose",f),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:r,dispose:c}}const Hc=new Ud,Us=new Sc(1,1),Gc=new Lc,kc=new Nd,Vc=new Id,Fs=[],Os=[],Bs=new Float32Array(16),Hs=new Float32Array(9),Gs=new Float32Array(4);function yi(e,n,t){const i=e[0];if(i<=0||i>0)return e;const a=n*t;let r=Fs[a];if(r===void 0&&(r=new Float32Array(a),Fs[a]=r),n!==0){i.toArray(r,0);for(let c=1,f=0;c!==n;++c)f+=t,e[c].toArray(r,f)}return r}function Bt(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function Ht(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Xa(e,n){let t=Os[n];t===void 0&&(t=new Int32Array(n),Os[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function Zh(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function Qh(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Bt(t,n))return;e.uniform2fv(this.addr,n),Ht(t,n)}}function Jh(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(Bt(t,n))return;e.uniform3fv(this.addr,n),Ht(t,n)}}function em(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Bt(t,n))return;e.uniform4fv(this.addr,n),Ht(t,n)}}function tm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Bt(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),Ht(t,n)}else{if(Bt(t,i))return;Gs.set(i),e.uniformMatrix2fv(this.addr,!1,Gs),Ht(t,i)}}function nm(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Bt(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),Ht(t,n)}else{if(Bt(t,i))return;Hs.set(i),e.uniformMatrix3fv(this.addr,!1,Hs),Ht(t,i)}}function im(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(Bt(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),Ht(t,n)}else{if(Bt(t,i))return;Bs.set(i),e.uniformMatrix4fv(this.addr,!1,Bs),Ht(t,i)}}function am(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function rm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Bt(t,n))return;e.uniform2iv(this.addr,n),Ht(t,n)}}function om(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Bt(t,n))return;e.uniform3iv(this.addr,n),Ht(t,n)}}function sm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Bt(t,n))return;e.uniform4iv(this.addr,n),Ht(t,n)}}function cm(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function lm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Bt(t,n))return;e.uniform2uiv(this.addr,n),Ht(t,n)}}function um(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Bt(t,n))return;e.uniform3uiv(this.addr,n),Ht(t,n)}}function dm(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Bt(t,n))return;e.uniform4uiv(this.addr,n),Ht(t,n)}}function fm(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a);let r;this.type===e.SAMPLER_2D_SHADOW?(Us.compareFunction=Mc,r=Us):r=Hc,t.setTexture2D(n||r,a)}function pm(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture3D(n||kc,a)}function hm(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTextureCube(n||Vc,a)}function mm(e,n,t){const i=this.cache,a=t.allocateTextureUnit();i[0]!==a&&(e.uniform1i(this.addr,a),i[0]=a),t.setTexture2DArray(n||Gc,a)}function _m(e){switch(e){case 5126:return Zh;case 35664:return Qh;case 35665:return Jh;case 35666:return em;case 35674:return tm;case 35675:return nm;case 35676:return im;case 5124:case 35670:return am;case 35667:case 35671:return rm;case 35668:case 35672:return om;case 35669:case 35673:return sm;case 5125:return cm;case 36294:return lm;case 36295:return um;case 36296:return dm;case 35678:case 36198:case 36298:case 36306:case 35682:return fm;case 35679:case 36299:case 36307:return pm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return mm}}function gm(e,n){e.uniform1fv(this.addr,n)}function vm(e,n){const t=yi(n,this.size,2);e.uniform2fv(this.addr,t)}function Em(e,n){const t=yi(n,this.size,3);e.uniform3fv(this.addr,t)}function Sm(e,n){const t=yi(n,this.size,4);e.uniform4fv(this.addr,t)}function Mm(e,n){const t=yi(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function xm(e,n){const t=yi(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Tm(e,n){const t=yi(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Am(e,n){e.uniform1iv(this.addr,n)}function bm(e,n){e.uniform2iv(this.addr,n)}function Rm(e,n){e.uniform3iv(this.addr,n)}function wm(e,n){e.uniform4iv(this.addr,n)}function Cm(e,n){e.uniform1uiv(this.addr,n)}function ym(e,n){e.uniform2uiv(this.addr,n)}function Pm(e,n){e.uniform3uiv(this.addr,n)}function Lm(e,n){e.uniform4uiv(this.addr,n)}function Dm(e,n,t){const i=this.cache,a=n.length,r=Xa(t,a);Bt(i,r)||(e.uniform1iv(this.addr,r),Ht(i,r));for(let c=0;c!==a;++c)t.setTexture2D(n[c]||Hc,r[c])}function Im(e,n,t){const i=this.cache,a=n.length,r=Xa(t,a);Bt(i,r)||(e.uniform1iv(this.addr,r),Ht(i,r));for(let c=0;c!==a;++c)t.setTexture3D(n[c]||kc,r[c])}function Nm(e,n,t){const i=this.cache,a=n.length,r=Xa(t,a);Bt(i,r)||(e.uniform1iv(this.addr,r),Ht(i,r));for(let c=0;c!==a;++c)t.setTextureCube(n[c]||Vc,r[c])}function Um(e,n,t){const i=this.cache,a=n.length,r=Xa(t,a);Bt(i,r)||(e.uniform1iv(this.addr,r),Ht(i,r));for(let c=0;c!==a;++c)t.setTexture2DArray(n[c]||Gc,r[c])}function Fm(e){switch(e){case 5126:return gm;case 35664:return vm;case 35665:return Em;case 35666:return Sm;case 35674:return Mm;case 35675:return xm;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return bm;case 35668:case 35672:return Rm;case 35669:case 35673:return wm;case 5125:return Cm;case 36294:return ym;case 36295:return Pm;case 36296:return Lm;case 35678:case 36198:case 36298:case 36306:case 35682:return Dm;case 35679:case 36299:case 36307:return Im;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Um}}class Om{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=_m(t.type)}}class Bm{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fm(t.type)}}class Hm{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const a=this.seq;for(let r=0,c=a.length;r!==c;++r){const f=a[r];f.setValue(n,t[f.id],i)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function ks(e,n){e.seq.push(n),e.map[n.id]=n}function Gm(e,n,t){const i=e.name,a=i.length;for(Lr.lastIndex=0;;){const r=Lr.exec(i),c=Lr.lastIndex;let f=r[1];const w=r[2]==="]",g=r[3];if(w&&(f=f|0),g===void 0||g==="["&&c+2===a){ks(t,g===void 0?new Om(f,e,n):new Bm(f,e,n));break}else{let h=t.map[f];h===void 0&&(h=new Hm(f),ks(t,h)),t=h}}}class Ua{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const r=n.getActiveUniform(t,a),c=n.getUniformLocation(t,r.name);Gm(r,c,this)}}setValue(n,t,i,a){const r=this.map[t];r!==void 0&&r.setValue(n,i,a)}setOptional(n,t,i){const a=t[i];a!==void 0&&this.setValue(n,i,a)}static upload(n,t,i,a){for(let r=0,c=t.length;r!==c;++r){const f=t[r],w=i[f.id];w.needsUpdate!==!1&&f.setValue(n,w.value,a)}}static seqWithValue(n,t){const i=[];for(let a=0,r=n.length;a!==r;++a){const c=n[a];c.id in t&&i.push(c)}return i}}function Vs(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const km=37297;let Vm=0;function zm(e,n){const t=e.split(`
`),i=[],a=Math.max(n-6,0),r=Math.min(n+6,t.length);for(let c=a;c<r;c++){const f=c+1;i.push(`${f===n?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const zs=new lt;function Wm(e){It._getMatrix(zs,It.workingColorSpace,e);const n=`mat3( ${zs.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(e)){case Nc:return[n,"LinearTransferOETF"];case Rt:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Ws(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=(e.getShaderInfoLog(n)||"").trim();if(i&&r==="")return"";const c=/ERROR: 0:(\d+)/.exec(r);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+r+`

`+zm(e.getShaderSource(n),f)}else return r}function Xm(e,n){const t=Wm(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function qm(e,n){let t;switch(n){case Dd:t="Linear";break;case Ld:t="Reinhard";break;case Pd:t="Cineon";break;case yd:t="ACESFilmic";break;case Cd:t="AgX";break;case wd:t="Neutral";break;case Rd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Pa=new He;function Ym(){It.getLuminanceCoefficients(Pa);const e=Pa.x.toFixed(4),n=Pa.y.toFixed(4),t=Pa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Km(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function $m(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function jm(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const r=e.getActiveAttrib(n,a),c=r.name;let f=1;r.type===e.FLOAT_MAT2&&(f=2),r.type===e.FLOAT_MAT3&&(f=3),r.type===e.FLOAT_MAT4&&(f=4),t[c]={type:r.type,location:e.getAttribLocation(n,c),locationSize:f}}return t}function ia(e){return e!==""}function Xs(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function qs(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(e){return e.replace(Zm,Jm)}const Qm=new Map;function Jm(e,n){let t=je[n];if(t===void 0){const i=Qm.get(n);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return $r(t)}const e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ys(e){return e.replace(e_,t_)}function t_(e,n,t,i){let a="";for(let r=parseInt(n);r<parseInt(t);r++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function Ks(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function n_(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===xc?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===bd?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Pn&&(n="SHADOWMAP_TYPE_VSM"),n}function i_(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case ua:case Ci:n="ENVMAP_TYPE_CUBE";break;case Wa:n="ENVMAP_TYPE_CUBE_UV";break}return n}function a_(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Ci&&(n="ENVMAP_MODE_REFRACTION"),n}function r_(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Hd:n="ENVMAP_BLENDING_MULTIPLY";break;case Bd:n="ENVMAP_BLENDING_MIX";break;case Od:n="ENVMAP_BLENDING_ADD";break}return n}function o_(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function s_(e,n,t,i){const a=e.getContext(),r=t.defines;let c=t.vertexShader,f=t.fragmentShader;const w=n_(t),g=i_(t),v=a_(t),h=r_(t),b=o_(t),T=Km(t),I=$m(r),C=a.createProgram();let d,o,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,I].filter(ia).join(`
`),d.length>0&&(d+=`
`),o=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,I].filter(ia).join(`
`),o.length>0&&(o+=`
`)):(d=[Ks(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,I,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+w:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),o=[Ks(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,I,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",t.envMap?"#define "+h:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+w:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bn?"#define TONE_MAPPING":"",t.toneMapping!==Bn?je.tonemapping_pars_fragment:"",t.toneMapping!==Bn?qm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Xm("linearToOutputTexel",t.outputColorSpace),Ym(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),c=$r(c),c=Xs(c,t),c=qs(c,t),f=$r(f),f=Xs(f,t),f=qs(f,t),c=Ys(c),f=Ys(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,d=[T,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,o=["#define varying in",t.glslVersion===bs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o);const x=L+d+c,M=L+o+f,D=Vs(a,a.VERTEX_SHADER,x),A=Vs(a,a.FRAGMENT_SHADER,M);a.attachShader(C,D),a.attachShader(C,A),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function F(y){if(e.debug.checkShaderErrors){const G=a.getProgramInfoLog(C)||"",X=a.getShaderInfoLog(D)||"",j=a.getShaderInfoLog(A)||"",Z=G.trim(),Y=X.trim(),ce=j.trim();let q=!0,Pe=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,C,D,A);else{const Be=Ws(a,D,"vertex"),Ke=Ws(a,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+Z+`
`+Be+`
`+Ke)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(Y===""||ce==="")&&(Pe=!1);Pe&&(y.diagnostics={runnable:q,programLog:Z,vertexShader:{log:Y,prefix:d},fragmentShader:{log:ce,prefix:o}})}a.deleteShader(D),a.deleteShader(A),V=new Ua(a,C),m=jm(a,C)}let V;this.getUniforms=function(){return V===void 0&&F(this),V};let m;this.getAttributes=function(){return m===void 0&&F(this),m};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=a.getProgramParameter(C,km)),_},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vm++,this.cacheKey=n,this.usedTimes=1,this.program=C,this.vertexShader=D,this.fragmentShader=A,this}let c_=0;class l_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(i),c=this._getShaderCacheForMaterial(n);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(r)===!1&&(c.add(r),r.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new u_(n),t.set(n,i)),i}}class u_{constructor(n){this.id=c_++,this.code=n,this.usedTimes=0}}function d_(e,n,t,i,a,r,c){const f=new Ad,w=new l_,g=new Set,v=[],h=a.logarithmicDepthBuffer,b=a.vertexTextures;let T=a.precision;const I={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(m){return g.add(m),m===0?"uv":`uv${m}`}function d(m,_,y,G,X){const j=G.fog,Z=X.geometry,Y=m.isMeshStandardMaterial?G.environment:null,ce=(m.isMeshStandardMaterial?t:n).get(m.envMap||Y),q=ce&&ce.mapping===Wa?ce.image.height:null,Pe=I[m.type];m.precision!==null&&(T=a.getMaxPrecision(m.precision),T!==m.precision&&console.warn("THREE.WebGLProgram.getParameters:",m.precision,"not supported, using",T,"instead."));const Be=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Ke=Be!==void 0?Be.length:0;let ot=0;Z.morphAttributes.position!==void 0&&(ot=1),Z.morphAttributes.normal!==void 0&&(ot=2),Z.morphAttributes.color!==void 0&&(ot=3);let wt,tt,Ee,W;if(Pe){const ct=Tn[Pe];wt=ct.vertexShader,tt=ct.fragmentShader}else wt=m.vertexShader,tt=m.fragmentShader,w.update(m),Ee=w.getVertexShaderID(m),W=w.getFragmentShaderID(m);const J=e.getRenderTarget(),ge=e.state.buffers.depth.getReversed(),Le=X.isInstancedMesh===!0,Re=X.isBatchedMesh===!0,Oe=!!m.map,Ge=!!m.matcap,R=!!ce,et=!!m.aoMap,Ve=!!m.lightMap,Ae=!!m.bumpMap,Se=!!m.normalMap,st=!!m.displacementMap,me=!!m.emissiveMap,Ye=!!m.metalnessMap,Ct=!!m.roughnessMap,ut=m.anisotropy>0,S=m.clearcoat>0,u=m.dispersion>0,H=m.iridescence>0,$=m.sheen>0,te=m.transmission>0,K=ut&&!!m.anisotropyMap,Fe=S&&!!m.clearcoatMap,le=S&&!!m.clearcoatNormalMap,Ie=S&&!!m.clearcoatRoughnessMap,Ue=H&&!!m.iridescenceMap,oe=H&&!!m.iridescenceThicknessMap,_e=$&&!!m.sheenColorMap,ze=$&&!!m.sheenRoughnessMap,Ne=!!m.specularMap,fe=!!m.specularColorMap,Xe=!!m.specularIntensityMap,P=te&&!!m.transmissionMap,re=te&&!!m.thicknessMap,ue=!!m.gradientMap,be=!!m.alphaMap,ie=m.alphaTest>0,ee=!!m.alphaHash,Me=!!m.extensions;let We=Bn;m.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(We=e.toneMapping);const dt={shaderID:Pe,shaderType:m.type,shaderName:m.name,vertexShader:wt,fragmentShader:tt,defines:m.defines,customVertexShaderID:Ee,customFragmentShaderID:W,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:T,batching:Re,batchingColor:Re&&X._colorsTexture!==null,instancing:Le,instancingColor:Le&&X.instanceColor!==null,instancingMorph:Le&&X.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:J===null?e.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:za,alphaToCoverage:!!m.alphaToCoverage,map:Oe,matcap:Ge,envMap:R,envMapMode:R&&ce.mapping,envMapCubeUVHeight:q,aoMap:et,lightMap:Ve,bumpMap:Ae,normalMap:Se,displacementMap:b&&st,emissiveMap:me,normalMapObjectSpace:Se&&m.normalMapType===Ed,normalMapTangentSpace:Se&&m.normalMapType===vd,metalnessMap:Ye,roughnessMap:Ct,anisotropy:ut,anisotropyMap:K,clearcoat:S,clearcoatMap:Fe,clearcoatNormalMap:le,clearcoatRoughnessMap:Ie,dispersion:u,iridescence:H,iridescenceMap:Ue,iridescenceThicknessMap:oe,sheen:$,sheenColorMap:_e,sheenRoughnessMap:ze,specularMap:Ne,specularColorMap:fe,specularIntensityMap:Xe,transmission:te,transmissionMap:P,thicknessMap:re,gradientMap:ue,opaque:m.transparent===!1&&m.blending===Na&&m.alphaToCoverage===!1,alphaMap:be,alphaTest:ie,alphaHash:ee,combine:m.combine,mapUv:Oe&&C(m.map.channel),aoMapUv:et&&C(m.aoMap.channel),lightMapUv:Ve&&C(m.lightMap.channel),bumpMapUv:Ae&&C(m.bumpMap.channel),normalMapUv:Se&&C(m.normalMap.channel),displacementMapUv:st&&C(m.displacementMap.channel),emissiveMapUv:me&&C(m.emissiveMap.channel),metalnessMapUv:Ye&&C(m.metalnessMap.channel),roughnessMapUv:Ct&&C(m.roughnessMap.channel),anisotropyMapUv:K&&C(m.anisotropyMap.channel),clearcoatMapUv:Fe&&C(m.clearcoatMap.channel),clearcoatNormalMapUv:le&&C(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&C(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&C(m.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&C(m.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&C(m.sheenColorMap.channel),sheenRoughnessMapUv:ze&&C(m.sheenRoughnessMap.channel),specularMapUv:Ne&&C(m.specularMap.channel),specularColorMapUv:fe&&C(m.specularColorMap.channel),specularIntensityMapUv:Xe&&C(m.specularIntensityMap.channel),transmissionMapUv:P&&C(m.transmissionMap.channel),thicknessMapUv:re&&C(m.thicknessMap.channel),alphaMapUv:be&&C(m.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Se||ut),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Z.attributes.uv&&(Oe||be),fog:!!j,useFog:m.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ge,skinning:X.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Ke,morphTextureStride:ot,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:m.dithering,shadowMapEnabled:e.shadowMap.enabled&&y.length>0,shadowMapType:e.shadowMap.type,toneMapping:We,decodeVideoTexture:Oe&&m.map.isVideoTexture===!0&&It.getTransfer(m.map.colorSpace)===Rt,decodeVideoTextureEmissive:me&&m.emissiveMap.isVideoTexture===!0&&It.getTransfer(m.emissiveMap.colorSpace)===Rt,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===mn,flipSided:m.side===ln,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:Me&&m.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&m.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return dt.vertexUv1s=g.has(1),dt.vertexUv2s=g.has(2),dt.vertexUv3s=g.has(3),g.clear(),dt}function o(m){const _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(const y in m.defines)_.push(y),_.push(m.defines[y]);return m.isRawShaderMaterial===!1&&(L(_,m),x(_,m),_.push(e.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()}function L(m,_){m.push(_.precision),m.push(_.outputColorSpace),m.push(_.envMapMode),m.push(_.envMapCubeUVHeight),m.push(_.mapUv),m.push(_.alphaMapUv),m.push(_.lightMapUv),m.push(_.aoMapUv),m.push(_.bumpMapUv),m.push(_.normalMapUv),m.push(_.displacementMapUv),m.push(_.emissiveMapUv),m.push(_.metalnessMapUv),m.push(_.roughnessMapUv),m.push(_.anisotropyMapUv),m.push(_.clearcoatMapUv),m.push(_.clearcoatNormalMapUv),m.push(_.clearcoatRoughnessMapUv),m.push(_.iridescenceMapUv),m.push(_.iridescenceThicknessMapUv),m.push(_.sheenColorMapUv),m.push(_.sheenRoughnessMapUv),m.push(_.specularMapUv),m.push(_.specularColorMapUv),m.push(_.specularIntensityMapUv),m.push(_.transmissionMapUv),m.push(_.thicknessMapUv),m.push(_.combine),m.push(_.fogExp2),m.push(_.sizeAttenuation),m.push(_.morphTargetsCount),m.push(_.morphAttributeCount),m.push(_.numDirLights),m.push(_.numPointLights),m.push(_.numSpotLights),m.push(_.numSpotLightMaps),m.push(_.numHemiLights),m.push(_.numRectAreaLights),m.push(_.numDirLightShadows),m.push(_.numPointLightShadows),m.push(_.numSpotLightShadows),m.push(_.numSpotLightShadowsWithMaps),m.push(_.numLightProbes),m.push(_.shadowMapType),m.push(_.toneMapping),m.push(_.numClippingPlanes),m.push(_.numClipIntersection),m.push(_.depthPacking)}function x(m,_){f.disableAll(),_.supportsVertexTextures&&f.enable(0),_.instancing&&f.enable(1),_.instancingColor&&f.enable(2),_.instancingMorph&&f.enable(3),_.matcap&&f.enable(4),_.envMap&&f.enable(5),_.normalMapObjectSpace&&f.enable(6),_.normalMapTangentSpace&&f.enable(7),_.clearcoat&&f.enable(8),_.iridescence&&f.enable(9),_.alphaTest&&f.enable(10),_.vertexColors&&f.enable(11),_.vertexAlphas&&f.enable(12),_.vertexUv1s&&f.enable(13),_.vertexUv2s&&f.enable(14),_.vertexUv3s&&f.enable(15),_.vertexTangents&&f.enable(16),_.anisotropy&&f.enable(17),_.alphaHash&&f.enable(18),_.batching&&f.enable(19),_.dispersion&&f.enable(20),_.batchingColor&&f.enable(21),_.gradientMap&&f.enable(22),m.push(f.mask),f.disableAll(),_.fog&&f.enable(0),_.useFog&&f.enable(1),_.flatShading&&f.enable(2),_.logarithmicDepthBuffer&&f.enable(3),_.reversedDepthBuffer&&f.enable(4),_.skinning&&f.enable(5),_.morphTargets&&f.enable(6),_.morphNormals&&f.enable(7),_.morphColors&&f.enable(8),_.premultipliedAlpha&&f.enable(9),_.shadowMapEnabled&&f.enable(10),_.doubleSided&&f.enable(11),_.flipSided&&f.enable(12),_.useDepthPacking&&f.enable(13),_.dithering&&f.enable(14),_.transmission&&f.enable(15),_.sheen&&f.enable(16),_.opaque&&f.enable(17),_.pointsUvs&&f.enable(18),_.decodeVideoTexture&&f.enable(19),_.decodeVideoTextureEmissive&&f.enable(20),_.alphaToCoverage&&f.enable(21),m.push(f.mask)}function M(m){const _=I[m.type];let y;if(_){const G=Tn[_];y=gd.clone(G.uniforms)}else y=m.uniforms;return y}function D(m,_){let y;for(let G=0,X=v.length;G<X;G++){const j=v[G];if(j.cacheKey===_){y=j,++y.usedTimes;break}}return y===void 0&&(y=new s_(e,_,m,r),v.push(y)),y}function A(m){if(--m.usedTimes===0){const _=v.indexOf(m);v[_]=v[v.length-1],v.pop(),m.destroy()}}function F(m){w.remove(m)}function V(){w.dispose()}return{getParameters:d,getProgramCacheKey:o,getUniforms:M,acquireProgram:D,releaseProgram:A,releaseShaderCache:F,programs:v,dispose:V}}function f_(){let e=new WeakMap;function n(c){return e.has(c)}function t(c){let f=e.get(c);return f===void 0&&(f={},e.set(c,f)),f}function i(c){e.delete(c)}function a(c,f,w){e.get(c)[f]=w}function r(){e=new WeakMap}return{has:n,get:t,remove:i,update:a,dispose:r}}function p_(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function $s(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function js(){const e=[];let n=0;const t=[],i=[],a=[];function r(){n=0,t.length=0,i.length=0,a.length=0}function c(h,b,T,I,C,d){let o=e[n];return o===void 0?(o={id:h.id,object:h,geometry:b,material:T,groupOrder:I,renderOrder:h.renderOrder,z:C,group:d},e[n]=o):(o.id=h.id,o.object=h,o.geometry=b,o.material=T,o.groupOrder=I,o.renderOrder=h.renderOrder,o.z=C,o.group=d),n++,o}function f(h,b,T,I,C,d){const o=c(h,b,T,I,C,d);T.transmission>0?i.push(o):T.transparent===!0?a.push(o):t.push(o)}function w(h,b,T,I,C,d){const o=c(h,b,T,I,C,d);T.transmission>0?i.unshift(o):T.transparent===!0?a.unshift(o):t.unshift(o)}function g(h,b){t.length>1&&t.sort(h||p_),i.length>1&&i.sort(b||$s),a.length>1&&a.sort(b||$s)}function v(){for(let h=n,b=e.length;h<b;h++){const T=e[h];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:i,transparent:a,init:r,push:f,unshift:w,finish:v,sort:g}}function h_(){let e=new WeakMap;function n(i,a){const r=e.get(i);let c;return r===void 0?(c=new js,e.set(i,[c])):a>=r.length?(c=new js,r.push(c)):c=r[a],c}function t(){e=new WeakMap}return{get:n,dispose:t}}function m_(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new He,color:new Mt};break;case"SpotLight":t={position:new He,direction:new He,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new He,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new He,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new He,halfWidth:new He,halfHeight:new He};break}return e[n.id]=t,t}}}function __(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let g_=0;function v_(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function E_(e){const n=new m_,t=__(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)i.probe.push(new He);const a=new He,r=new oi,c=new oi;function f(g){let v=0,h=0,b=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let T=0,I=0,C=0,d=0,o=0,L=0,x=0,M=0,D=0,A=0,F=0;g.sort(v_);for(let m=0,_=g.length;m<_;m++){const y=g[m],G=y.color,X=y.intensity,j=y.distance,Z=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)v+=G.r*X,h+=G.g*X,b+=G.b*X;else if(y.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(y.sh.coefficients[Y],X);F++}else if(y.isDirectionalLight){const Y=n.get(y);if(Y.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const ce=y.shadow,q=t.get(y);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,i.directionalShadow[T]=q,i.directionalShadowMap[T]=Z,i.directionalShadowMatrix[T]=y.shadow.matrix,L++}i.directional[T]=Y,T++}else if(y.isSpotLight){const Y=n.get(y);Y.position.setFromMatrixPosition(y.matrixWorld),Y.color.copy(G).multiplyScalar(X),Y.distance=j,Y.coneCos=Math.cos(y.angle),Y.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),Y.decay=y.decay,i.spot[C]=Y;const ce=y.shadow;if(y.map&&(i.spotLightMap[D]=y.map,D++,ce.updateMatrices(y),y.castShadow&&A++),i.spotLightMatrix[C]=ce.matrix,y.castShadow){const q=t.get(y);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,i.spotShadow[C]=q,i.spotShadowMap[C]=Z,M++}C++}else if(y.isRectAreaLight){const Y=n.get(y);Y.color.copy(G).multiplyScalar(X),Y.halfWidth.set(y.width*.5,0,0),Y.halfHeight.set(0,y.height*.5,0),i.rectArea[d]=Y,d++}else if(y.isPointLight){const Y=n.get(y);if(Y.color.copy(y.color).multiplyScalar(y.intensity),Y.distance=y.distance,Y.decay=y.decay,y.castShadow){const ce=y.shadow,q=t.get(y);q.shadowIntensity=ce.intensity,q.shadowBias=ce.bias,q.shadowNormalBias=ce.normalBias,q.shadowRadius=ce.radius,q.shadowMapSize=ce.mapSize,q.shadowCameraNear=ce.camera.near,q.shadowCameraFar=ce.camera.far,i.pointShadow[I]=q,i.pointShadowMap[I]=Z,i.pointShadowMatrix[I]=y.shadow.matrix,x++}i.point[I]=Y,I++}else if(y.isHemisphereLight){const Y=n.get(y);Y.skyColor.copy(y.color).multiplyScalar(X),Y.groundColor.copy(y.groundColor).multiplyScalar(X),i.hemi[o]=Y,o++}}d>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=v,i.ambient[1]=h,i.ambient[2]=b;const V=i.hash;(V.directionalLength!==T||V.pointLength!==I||V.spotLength!==C||V.rectAreaLength!==d||V.hemiLength!==o||V.numDirectionalShadows!==L||V.numPointShadows!==x||V.numSpotShadows!==M||V.numSpotMaps!==D||V.numLightProbes!==F)&&(i.directional.length=T,i.spot.length=C,i.rectArea.length=d,i.point.length=I,i.hemi.length=o,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=M+D-A,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=F,V.directionalLength=T,V.pointLength=I,V.spotLength=C,V.rectAreaLength=d,V.hemiLength=o,V.numDirectionalShadows=L,V.numPointShadows=x,V.numSpotShadows=M,V.numSpotMaps=D,V.numLightProbes=F,i.version=g_++)}function w(g,v){let h=0,b=0,T=0,I=0,C=0;const d=v.matrixWorldInverse;for(let o=0,L=g.length;o<L;o++){const x=g[o];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),h++}else if(x.isSpotLight){const M=i.spot[T];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(d),T++}else if(x.isRectAreaLight){const M=i.rectArea[I];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),c.identity(),r.copy(x.matrixWorld),r.premultiply(d),c.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(c),M.halfHeight.applyMatrix4(c),I++}else if(x.isPointLight){const M=i.point[b];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),b++}else if(x.isHemisphereLight){const M=i.hemi[C];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),C++}}}return{setup:f,setupView:w,state:i}}function Zs(e){const n=new E_(e),t=[],i=[];function a(v){g.camera=v,t.length=0,i.length=0}function r(v){t.push(v)}function c(v){i.push(v)}function f(){n.setup(t)}function w(v){n.setupView(t,v)}const g={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:a,state:g,setupLights:f,setupLightsView:w,pushLight:r,pushShadow:c}}function S_(e){let n=new WeakMap;function t(a,r=0){const c=n.get(a);let f;return c===void 0?(f=new Zs(e),n.set(a,[f])):r>=c.length?(f=new Zs(e),c.push(f)):f=c[r],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x_=`uniform sampler2D shadow_pass;
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
}`;function T_(e,n,t){let i=new Ec;const a=new Zt,r=new Zt,c=new an,f=new nd({depthPacking:id}),w=new ad,g={},v=t.maxTextureSize,h={[oa]:ln,[ln]:oa,[mn]:mn},b=new ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zt},radius:{value:4}},vertexShader:M_,fragmentShader:x_}),T=b.clone();T.defines.HORIZONTAL_PASS=1;const I=new la;I.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new An(I,b),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let o=this.type;this.render=function(A,F,V){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const m=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),G=e.state;G.setBlending(ri),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const X=o!==Pn&&this.type===Pn,j=o===Pn&&this.type!==Pn;for(let Z=0,Y=A.length;Z<Y;Z++){const ce=A[Z],q=ce.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;a.copy(q.mapSize);const Pe=q.getFrameExtents();if(a.multiply(Pe),r.copy(q.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(r.x=Math.floor(v/Pe.x),a.x=r.x*Pe.x,q.mapSize.x=r.x),a.y>v&&(r.y=Math.floor(v/Pe.y),a.y=r.y*Pe.y,q.mapSize.y=r.y)),q.map===null||X===!0||j===!0){const Ke=this.type!==Pn?{minFilter:ra,magFilter:ra}:{};q.map!==null&&q.map.dispose(),q.map=new wi(a.x,a.y,Ke),q.map.texture.name=ce.name+".shadowMap",q.camera.updateProjectionMatrix()}e.setRenderTarget(q.map),e.clear();const Be=q.getViewportCount();for(let Ke=0;Ke<Be;Ke++){const ot=q.getViewport(Ke);c.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),G.viewport(c),q.updateMatrices(ce,Ke),i=q.getFrustum(),M(F,V,q.camera,ce,this.type)}q.isPointLightShadow!==!0&&this.type===Pn&&L(q,V),q.needsUpdate=!1}o=this.type,d.needsUpdate=!1,e.setRenderTarget(m,_,y)};function L(A,F){const V=n.update(C);b.defines.VSM_SAMPLES!==A.blurSamples&&(b.defines.VSM_SAMPLES=A.blurSamples,T.defines.VSM_SAMPLES=A.blurSamples,b.needsUpdate=!0,T.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new wi(a.x,a.y)),b.uniforms.shadow_pass.value=A.map.texture,b.uniforms.resolution.value=A.mapSize,b.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(F,null,V,b,C,null),T.uniforms.shadow_pass.value=A.mapPass.texture,T.uniforms.resolution.value=A.mapSize,T.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(F,null,V,T,C,null)}function x(A,F,V,m){let _=null;const y=V.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(y!==void 0)_=y;else if(_=V.isPointLight===!0?w:f,e.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const G=_.uuid,X=F.uuid;let j=g[G];j===void 0&&(j={},g[G]=j);let Z=j[X];Z===void 0&&(Z=_.clone(),j[X]=Z,F.addEventListener("dispose",D)),_=Z}if(_.visible=F.visible,_.wireframe=F.wireframe,m===Pn?_.side=F.shadowSide!==null?F.shadowSide:F.side:_.side=F.shadowSide!==null?F.shadowSide:h[F.side],_.alphaMap=F.alphaMap,_.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,_.map=F.map,_.clipShadows=F.clipShadows,_.clippingPlanes=F.clippingPlanes,_.clipIntersection=F.clipIntersection,_.displacementMap=F.displacementMap,_.displacementScale=F.displacementScale,_.displacementBias=F.displacementBias,_.wireframeLinewidth=F.wireframeLinewidth,_.linewidth=F.linewidth,V.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=e.properties.get(_);G.light=V}return _}function M(A,F,V,m,_){if(A.visible===!1)return;if(A.layers.test(F.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Pn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld);const X=n.update(A),j=A.material;if(Array.isArray(j)){const Z=X.groups;for(let Y=0,ce=Z.length;Y<ce;Y++){const q=Z[Y],Pe=j[q.materialIndex];if(Pe&&Pe.visible){const Be=x(A,Pe,m,_);A.onBeforeShadow(e,A,F,V,X,Be,q),e.renderBufferDirect(V,null,X,Be,A,q),A.onAfterShadow(e,A,F,V,X,Be,q)}}}else if(j.visible){const Z=x(A,j,m,_);A.onBeforeShadow(e,A,F,V,X,Z,null),e.renderBufferDirect(V,null,X,Z,A,null),A.onAfterShadow(e,A,F,V,X,Z,null)}}const G=A.children;for(let X=0,j=G.length;X<j;X++)M(G[X],F,V,m,_)}function D(A){A.target.removeEventListener("dispose",D);for(const V in g){const m=g[V],_=A.target.uuid;_ in m&&(m[_].dispose(),delete m[_])}}}const A_={[Xr]:Wr,[zr]:Gr,[Vr]:Hr,[Ba]:kr,[Wr]:Xr,[Gr]:zr,[Hr]:Vr,[kr]:Ba};function b_(e,n){function t(){let P=!1;const re=new an;let ue=null;const be=new an(0,0,0,0);return{setMask:function(ie){ue!==ie&&!P&&(e.colorMask(ie,ie,ie,ie),ue=ie)},setLocked:function(ie){P=ie},setClear:function(ie,ee,Me,We,dt){dt===!0&&(ie*=We,ee*=We,Me*=We),re.set(ie,ee,Me,We),be.equals(re)===!1&&(e.clearColor(ie,ee,Me,We),be.copy(re))},reset:function(){P=!1,ue=null,be.set(-1,0,0,0)}}}function i(){let P=!1,re=!1,ue=null,be=null,ie=null;return{setReversed:function(ee){if(re!==ee){const Me=n.get("EXT_clip_control");ee?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),re=ee;const We=ie;ie=null,this.setClear(We)}},getReversed:function(){return re},setTest:function(ee){ee?J(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(ee){ue!==ee&&!P&&(e.depthMask(ee),ue=ee)},setFunc:function(ee){if(re&&(ee=A_[ee]),be!==ee){switch(ee){case Xr:e.depthFunc(e.NEVER);break;case Wr:e.depthFunc(e.ALWAYS);break;case zr:e.depthFunc(e.LESS);break;case Ba:e.depthFunc(e.LEQUAL);break;case Vr:e.depthFunc(e.EQUAL);break;case kr:e.depthFunc(e.GEQUAL);break;case Gr:e.depthFunc(e.GREATER);break;case Hr:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}be=ee}},setLocked:function(ee){P=ee},setClear:function(ee){ie!==ee&&(re&&(ee=1-ee),e.clearDepth(ee),ie=ee)},reset:function(){P=!1,ue=null,be=null,ie=null,re=!1}}}function a(){let P=!1,re=null,ue=null,be=null,ie=null,ee=null,Me=null,We=null,dt=null;return{setTest:function(ct){P||(ct?J(e.STENCIL_TEST):ge(e.STENCIL_TEST))},setMask:function(ct){re!==ct&&!P&&(e.stencilMask(ct),re=ct)},setFunc:function(ct,Xt,cn){(ue!==ct||be!==Xt||ie!==cn)&&(e.stencilFunc(ct,Xt,cn),ue=ct,be=Xt,ie=cn)},setOp:function(ct,Xt,cn){(ee!==ct||Me!==Xt||We!==cn)&&(e.stencilOp(ct,Xt,cn),ee=ct,Me=Xt,We=cn)},setLocked:function(ct){P=ct},setClear:function(ct){dt!==ct&&(e.clearStencil(ct),dt=ct)},reset:function(){P=!1,re=null,ue=null,be=null,ie=null,ee=null,Me=null,We=null,dt=null}}}const r=new t,c=new i,f=new a,w=new WeakMap,g=new WeakMap;let v={},h={},b=new WeakMap,T=[],I=null,C=!1,d=null,o=null,L=null,x=null,M=null,D=null,A=null,F=new Mt(0,0,0),V=0,m=!1,_=null,y=null,G=null,X=null,j=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,ce=0;const q=e.getParameter(e.VERSION);q.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ce>=1):q.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ce>=2);let Pe=null,Be={};const Ke=e.getParameter(e.SCISSOR_BOX),ot=e.getParameter(e.VIEWPORT),wt=new an().fromArray(Ke),tt=new an().fromArray(ot);function Ee(P,re,ue,be){const ie=new Uint8Array(4),ee=e.createTexture();e.bindTexture(P,ee),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Me=0;Me<ue;Me++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(re,0,e.RGBA,1,1,be,0,e.RGBA,e.UNSIGNED_BYTE,ie):e.texImage2D(re+Me,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ie);return ee}const W={};W[e.TEXTURE_2D]=Ee(e.TEXTURE_2D,e.TEXTURE_2D,1),W[e.TEXTURE_CUBE_MAP]=Ee(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[e.TEXTURE_2D_ARRAY]=Ee(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),W[e.TEXTURE_3D]=Ee(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),c.setClear(1),f.setClear(0),J(e.DEPTH_TEST),c.setFunc(Ba),Ae(!1),Se(Es),J(e.CULL_FACE),et(ri);function J(P){v[P]!==!0&&(e.enable(P),v[P]=!0)}function ge(P){v[P]!==!1&&(e.disable(P),v[P]=!1)}function Le(P,re){return h[P]!==re?(e.bindFramebuffer(P,re),h[P]=re,P===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=re),P===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=re),!0):!1}function Re(P,re){let ue=T,be=!1;if(P){ue=b.get(re),ue===void 0&&(ue=[],b.set(re,ue));const ie=P.textures;if(ue.length!==ie.length||ue[0]!==e.COLOR_ATTACHMENT0){for(let ee=0,Me=ie.length;ee<Me;ee++)ue[ee]=e.COLOR_ATTACHMENT0+ee;ue.length=ie.length,be=!0}}else ue[0]!==e.BACK&&(ue[0]=e.BACK,be=!0);be&&e.drawBuffers(ue)}function Oe(P){return I!==P?(e.useProgram(P),I=P,!0):!1}const Ge={[Ji]:e.FUNC_ADD,[Cu]:e.FUNC_SUBTRACT,[wu]:e.FUNC_REVERSE_SUBTRACT};Ge[Gd]=e.MIN,Ge[kd]=e.MAX;const R={[zu]:e.ZERO,[Vu]:e.ONE,[ku]:e.SRC_COLOR,[Gu]:e.SRC_ALPHA,[Hu]:e.SRC_ALPHA_SATURATE,[Bu]:e.DST_COLOR,[Ou]:e.DST_ALPHA,[Fu]:e.ONE_MINUS_SRC_COLOR,[Uu]:e.ONE_MINUS_SRC_ALPHA,[Nu]:e.ONE_MINUS_DST_COLOR,[Iu]:e.ONE_MINUS_DST_ALPHA,[Du]:e.CONSTANT_COLOR,[Lu]:e.ONE_MINUS_CONSTANT_COLOR,[Pu]:e.CONSTANT_ALPHA,[yu]:e.ONE_MINUS_CONSTANT_ALPHA};function et(P,re,ue,be,ie,ee,Me,We,dt,ct){if(P===ri){C===!0&&(ge(e.BLEND),C=!1);return}if(C===!1&&(J(e.BLEND),C=!0),P!==md){if(P!==d||ct!==m){if((o!==Ji||M!==Ji)&&(e.blendEquation(e.FUNC_ADD),o=Ji,M=Ji),ct)switch(P){case Na:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xs:e.blendFunc(e.ONE,e.ONE);break;case Ms:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ss:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Na:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case xs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Ms:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ss:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}L=null,x=null,D=null,A=null,F.set(0,0,0),V=0,d=P,m=ct}return}ie=ie||re,ee=ee||ue,Me=Me||be,(re!==o||ie!==M)&&(e.blendEquationSeparate(Ge[re],Ge[ie]),o=re,M=ie),(ue!==L||be!==x||ee!==D||Me!==A)&&(e.blendFuncSeparate(R[ue],R[be],R[ee],R[Me]),L=ue,x=be,D=ee,A=Me),(We.equals(F)===!1||dt!==V)&&(e.blendColor(We.r,We.g,We.b,dt),F.copy(We),V=dt),d=P,m=!1}function Ve(P,re){P.side===mn?ge(e.CULL_FACE):J(e.CULL_FACE);let ue=P.side===ln;re&&(ue=!ue),Ae(ue),P.blending===Na&&P.transparent===!1?et(ri):et(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),c.setFunc(P.depthFunc),c.setTest(P.depthTest),c.setMask(P.depthWrite),r.setMask(P.colorWrite);const be=P.stencilWrite;f.setTest(be),be&&(f.setMask(P.stencilWriteMask),f.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),f.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),me(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?J(e.SAMPLE_ALPHA_TO_COVERAGE):ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(P){_!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),_=P)}function Se(P){P!==pd?(J(e.CULL_FACE),P!==y&&(P===Es?e.cullFace(e.BACK):P===hd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ge(e.CULL_FACE),y=P}function st(P){P!==G&&(Y&&e.lineWidth(P),G=P)}function me(P,re,ue){P?(J(e.POLYGON_OFFSET_FILL),(X!==re||j!==ue)&&(e.polygonOffset(re,ue),X=re,j=ue)):ge(e.POLYGON_OFFSET_FILL)}function Ye(P){P?J(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function Ct(P){P===void 0&&(P=e.TEXTURE0+Z-1),Pe!==P&&(e.activeTexture(P),Pe=P)}function ut(P,re,ue){ue===void 0&&(Pe===null?ue=e.TEXTURE0+Z-1:ue=Pe);let be=Be[ue];be===void 0&&(be={type:void 0,texture:void 0},Be[ue]=be),(be.type!==P||be.texture!==re)&&(Pe!==ue&&(e.activeTexture(ue),Pe=ue),e.bindTexture(P,re||W[P]),be.type=P,be.texture=re)}function S(){const P=Be[Pe];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function u(){try{e.compressedTexImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function H(){try{e.compressedTexImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{e.texSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function te(){try{e.texSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{e.compressedTexSubImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Fe(){try{e.compressedTexSubImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function le(){try{e.texStorage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(){try{e.texStorage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ue(){try{e.texImage2D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{e.texImage3D(...arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(P){wt.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),wt.copy(P))}function ze(P){tt.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),tt.copy(P))}function Ne(P,re){let ue=g.get(re);ue===void 0&&(ue=new WeakMap,g.set(re,ue));let be=ue.get(P);be===void 0&&(be=e.getUniformBlockIndex(re,P.name),ue.set(P,be))}function fe(P,re){const be=g.get(re).get(P);w.get(re)!==be&&(e.uniformBlockBinding(re,be,P.__bindingPointIndex),w.set(re,be))}function Xe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),c.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),v={},Pe=null,Be={},h={},b=new WeakMap,T=[],I=null,C=!1,d=null,o=null,L=null,x=null,M=null,D=null,A=null,F=new Mt(0,0,0),V=0,m=!1,_=null,y=null,G=null,X=null,j=null,wt.set(0,0,e.canvas.width,e.canvas.height),tt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),c.reset(),f.reset()}return{buffers:{color:r,depth:c,stencil:f},enable:J,disable:ge,bindFramebuffer:Le,drawBuffers:Re,useProgram:Oe,setBlending:et,setMaterial:Ve,setFlipSided:Ae,setCullFace:Se,setLineWidth:st,setPolygonOffset:me,setScissorTest:Ye,activeTexture:Ct,bindTexture:ut,unbindTexture:S,compressedTexImage2D:u,compressedTexImage3D:H,texImage2D:Ue,texImage3D:oe,updateUBOMapping:Ne,uniformBlockBinding:fe,texStorage2D:le,texStorage3D:Ie,texSubImage2D:$,texSubImage3D:te,compressedTexSubImage2D:K,compressedTexSubImage3D:Fe,scissor:_e,viewport:ze,reset:Xe}}function R_(e,n,t,i,a,r,c){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,w=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Zt,v=new WeakMap;let h;const b=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(S,u){return T?new OffscreenCanvas(S,u):Fd("canvas")}function C(S,u,H){let $=1;const te=ut(S);if((te.width>H||te.height>H)&&($=H/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const K=Math.floor($*te.width),Fe=Math.floor($*te.height);h===void 0&&(h=I(K,Fe));const le=u?I(K,Fe):h;return le.width=K,le.height=Fe,le.getContext("2d").drawImage(S,0,0,K,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+K+"x"+Fe+")."),le}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),S;return S}function d(S){return S.generateMipmaps}function o(S){e.generateMipmap(S)}function L(S){return S.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?e.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function x(S,u,H,$,te=!1){if(S!==null){if(e[S]!==void 0)return e[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let K=u;if(u===e.RED&&(H===e.FLOAT&&(K=e.R32F),H===e.HALF_FLOAT&&(K=e.R16F),H===e.UNSIGNED_BYTE&&(K=e.R8)),u===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(K=e.R8UI),H===e.UNSIGNED_SHORT&&(K=e.R16UI),H===e.UNSIGNED_INT&&(K=e.R32UI),H===e.BYTE&&(K=e.R8I),H===e.SHORT&&(K=e.R16I),H===e.INT&&(K=e.R32I)),u===e.RG&&(H===e.FLOAT&&(K=e.RG32F),H===e.HALF_FLOAT&&(K=e.RG16F),H===e.UNSIGNED_BYTE&&(K=e.RG8)),u===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(K=e.RG8UI),H===e.UNSIGNED_SHORT&&(K=e.RG16UI),H===e.UNSIGNED_INT&&(K=e.RG32UI),H===e.BYTE&&(K=e.RG8I),H===e.SHORT&&(K=e.RG16I),H===e.INT&&(K=e.RG32I)),u===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(K=e.RGB8UI),H===e.UNSIGNED_SHORT&&(K=e.RGB16UI),H===e.UNSIGNED_INT&&(K=e.RGB32UI),H===e.BYTE&&(K=e.RGB8I),H===e.SHORT&&(K=e.RGB16I),H===e.INT&&(K=e.RGB32I)),u===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(K=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(K=e.RGBA16UI),H===e.UNSIGNED_INT&&(K=e.RGBA32UI),H===e.BYTE&&(K=e.RGBA8I),H===e.SHORT&&(K=e.RGBA16I),H===e.INT&&(K=e.RGBA32I)),u===e.RGB&&(H===e.UNSIGNED_INT_5_9_9_9_REV&&(K=e.RGB9_E5),H===e.UNSIGNED_INT_10F_11F_11F_REV&&(K=e.R11F_G11F_B10F)),u===e.RGBA){const Fe=te?Nc:It.getTransfer($);H===e.FLOAT&&(K=e.RGBA32F),H===e.HALF_FLOAT&&(K=e.RGBA16F),H===e.UNSIGNED_BYTE&&(K=Fe===Rt?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT_4_4_4_4&&(K=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(K=e.RGB5_A1)}return(K===e.R16F||K===e.R32F||K===e.RG16F||K===e.RG32F||K===e.RGBA16F||K===e.RGBA32F)&&n.get("EXT_color_buffer_float"),K}function M(S,u){let H;return S?u===null||u===ca||u===sa?H=e.DEPTH24_STENCIL8:u===ai?H=e.DEPTH32F_STENCIL8:u===Ha&&(H=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):u===null||u===ca||u===sa?H=e.DEPTH_COMPONENT24:u===ai?H=e.DEPTH_COMPONENT32F:u===Ha&&(H=e.DEPTH_COMPONENT16),H}function D(S,u){return d(S)===!0||S.isFramebufferTexture&&S.minFilter!==ra&&S.minFilter!==Ai?Math.log2(Math.max(u.width,u.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?u.mipmaps.length:1}function A(S){const u=S.target;u.removeEventListener("dispose",A),V(u),u.isVideoTexture&&v.delete(u)}function F(S){const u=S.target;u.removeEventListener("dispose",F),_(u)}function V(S){const u=i.get(S);if(u.__webglInit===void 0)return;const H=S.source,$=b.get(H);if($){const te=$[u.__cacheKey];te.usedTimes--,te.usedTimes===0&&m(S),Object.keys($).length===0&&b.delete(H)}i.remove(S)}function m(S){const u=i.get(S);e.deleteTexture(u.__webglTexture);const H=S.source,$=b.get(H);delete $[u.__cacheKey],c.memory.textures--}function _(S){const u=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(u.__webglFramebuffer[$]))for(let te=0;te<u.__webglFramebuffer[$].length;te++)e.deleteFramebuffer(u.__webglFramebuffer[$][te]);else e.deleteFramebuffer(u.__webglFramebuffer[$]);u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer[$])}else{if(Array.isArray(u.__webglFramebuffer))for(let $=0;$<u.__webglFramebuffer.length;$++)e.deleteFramebuffer(u.__webglFramebuffer[$]);else e.deleteFramebuffer(u.__webglFramebuffer);if(u.__webglDepthbuffer&&e.deleteRenderbuffer(u.__webglDepthbuffer),u.__webglMultisampledFramebuffer&&e.deleteFramebuffer(u.__webglMultisampledFramebuffer),u.__webglColorRenderbuffer)for(let $=0;$<u.__webglColorRenderbuffer.length;$++)u.__webglColorRenderbuffer[$]&&e.deleteRenderbuffer(u.__webglColorRenderbuffer[$]);u.__webglDepthRenderbuffer&&e.deleteRenderbuffer(u.__webglDepthRenderbuffer)}const H=S.textures;for(let $=0,te=H.length;$<te;$++){const K=i.get(H[$]);K.__webglTexture&&(e.deleteTexture(K.__webglTexture),c.memory.textures--),i.remove(H[$])}i.remove(S)}let y=0;function G(){y=0}function X(){const S=y;return S>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),y+=1,S}function j(S){const u=[];return u.push(S.wrapS),u.push(S.wrapT),u.push(S.wrapR||0),u.push(S.magFilter),u.push(S.minFilter),u.push(S.anisotropy),u.push(S.internalFormat),u.push(S.format),u.push(S.type),u.push(S.generateMipmaps),u.push(S.premultiplyAlpha),u.push(S.flipY),u.push(S.unpackAlignment),u.push(S.colorSpace),u.join()}function Z(S,u){const H=i.get(S);if(S.isVideoTexture&&Ye(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&H.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(H,S,u);return}}else S.isExternalTexture&&(H.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+u)}function Y(S,u){const H=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&H.__version!==S.version){W(H,S,u);return}t.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+u)}function ce(S,u){const H=i.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&H.__version!==S.version){W(H,S,u);return}t.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+u)}function q(S,u){const H=i.get(S);if(S.version>0&&H.__version!==S.version){J(H,S,u);return}t.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+u)}const Pe={[qu]:e.REPEAT,[Xu]:e.CLAMP_TO_EDGE,[Wu]:e.MIRRORED_REPEAT},Be={[ra]:e.NEAREST,[Yu]:e.NEAREST_MIPMAP_NEAREST,[wa]:e.NEAREST_MIPMAP_LINEAR,[Ai]:e.LINEAR,[Mr]:e.LINEAR_MIPMAP_NEAREST,[na]:e.LINEAR_MIPMAP_LINEAR},Ke={[ed]:e.NEVER,[Ju]:e.ALWAYS,[Qu]:e.LESS,[Mc]:e.LEQUAL,[Zu]:e.EQUAL,[ju]:e.GEQUAL,[$u]:e.GREATER,[Ku]:e.NOTEQUAL};function ot(S,u){if(u.type===ai&&n.has("OES_texture_float_linear")===!1&&(u.magFilter===Ai||u.magFilter===Mr||u.magFilter===wa||u.magFilter===na||u.minFilter===Ai||u.minFilter===Mr||u.minFilter===wa||u.minFilter===na)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(S,e.TEXTURE_WRAP_S,Pe[u.wrapS]),e.texParameteri(S,e.TEXTURE_WRAP_T,Pe[u.wrapT]),(S===e.TEXTURE_3D||S===e.TEXTURE_2D_ARRAY)&&e.texParameteri(S,e.TEXTURE_WRAP_R,Pe[u.wrapR]),e.texParameteri(S,e.TEXTURE_MAG_FILTER,Be[u.magFilter]),e.texParameteri(S,e.TEXTURE_MIN_FILTER,Be[u.minFilter]),u.compareFunction&&(e.texParameteri(S,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(S,e.TEXTURE_COMPARE_FUNC,Ke[u.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(u.magFilter===ra||u.minFilter!==wa&&u.minFilter!==na||u.type===ai&&n.has("OES_texture_float_linear")===!1)return;if(u.anisotropy>1||i.get(u).__currentAnisotropy){const H=n.get("EXT_texture_filter_anisotropic");e.texParameterf(S,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(u.anisotropy,a.getMaxAnisotropy())),i.get(u).__currentAnisotropy=u.anisotropy}}}function wt(S,u){let H=!1;S.__webglInit===void 0&&(S.__webglInit=!0,u.addEventListener("dispose",A));const $=u.source;let te=b.get($);te===void 0&&(te={},b.set($,te));const K=j(u);if(K!==S.__cacheKey){te[K]===void 0&&(te[K]={texture:e.createTexture(),usedTimes:0},c.memory.textures++,H=!0),te[K].usedTimes++;const Fe=te[S.__cacheKey];Fe!==void 0&&(te[S.__cacheKey].usedTimes--,Fe.usedTimes===0&&m(u)),S.__cacheKey=K,S.__webglTexture=te[K].texture}return H}function tt(S,u,H){return Math.floor(Math.floor(S/H)/u)}function Ee(S,u,H,$){const K=S.updateRanges;if(K.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,u.width,u.height,H,$,u.data);else{K.sort((oe,_e)=>oe.start-_e.start);let Fe=0;for(let oe=1;oe<K.length;oe++){const _e=K[Fe],ze=K[oe],Ne=_e.start+_e.count,fe=tt(ze.start,u.width,4),Xe=tt(_e.start,u.width,4);ze.start<=Ne+1&&fe===Xe&&tt(ze.start+ze.count-1,u.width,4)===fe?_e.count=Math.max(_e.count,ze.start+ze.count-_e.start):(++Fe,K[Fe]=ze)}K.length=Fe+1;const le=e.getParameter(e.UNPACK_ROW_LENGTH),Ie=e.getParameter(e.UNPACK_SKIP_PIXELS),Ue=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,u.width);for(let oe=0,_e=K.length;oe<_e;oe++){const ze=K[oe],Ne=Math.floor(ze.start/4),fe=Math.ceil(ze.count/4),Xe=Ne%u.width,P=Math.floor(Ne/u.width),re=fe,ue=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Xe),e.pixelStorei(e.UNPACK_SKIP_ROWS,P),t.texSubImage2D(e.TEXTURE_2D,0,Xe,P,re,ue,H,$,u.data)}S.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,le),e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ie),e.pixelStorei(e.UNPACK_SKIP_ROWS,Ue)}}function W(S,u,H){let $=e.TEXTURE_2D;(u.isDataArrayTexture||u.isCompressedArrayTexture)&&($=e.TEXTURE_2D_ARRAY),u.isData3DTexture&&($=e.TEXTURE_3D);const te=wt(S,u),K=u.source;t.bindTexture($,S.__webglTexture,e.TEXTURE0+H);const Fe=i.get(K);if(K.version!==Fe.__version||te===!0){t.activeTexture(e.TEXTURE0+H);const le=It.getPrimaries(It.workingColorSpace),Ie=u.colorSpace===Ti?null:It.getPrimaries(u.colorSpace),Ue=u.colorSpace===Ti||le===Ie?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let oe=C(u.image,!1,a.maxTextureSize);oe=Ct(u,oe);const _e=r.convert(u.format,u.colorSpace),ze=r.convert(u.type);let Ne=x(u.internalFormat,_e,ze,u.colorSpace,u.isVideoTexture);ot($,u);let fe;const Xe=u.mipmaps,P=u.isVideoTexture!==!0,re=Fe.__version===void 0||te===!0,ue=K.dataReady,be=D(u,oe);if(u.isDepthTexture)Ne=M(u.format===Oa,u.type),re&&(P?t.texStorage2D(e.TEXTURE_2D,1,Ne,oe.width,oe.height):t.texImage2D(e.TEXTURE_2D,0,Ne,oe.width,oe.height,0,_e,ze,null));else if(u.isDataTexture)if(Xe.length>0){P&&re&&t.texStorage2D(e.TEXTURE_2D,be,Ne,Xe[0].width,Xe[0].height);for(let ie=0,ee=Xe.length;ie<ee;ie++)fe=Xe[ie],P?ue&&t.texSubImage2D(e.TEXTURE_2D,ie,0,0,fe.width,fe.height,_e,ze,fe.data):t.texImage2D(e.TEXTURE_2D,ie,Ne,fe.width,fe.height,0,_e,ze,fe.data);u.generateMipmaps=!1}else P?(re&&t.texStorage2D(e.TEXTURE_2D,be,Ne,oe.width,oe.height),ue&&Ee(u,oe,_e,ze)):t.texImage2D(e.TEXTURE_2D,0,Ne,oe.width,oe.height,0,_e,ze,oe.data);else if(u.isCompressedTexture)if(u.isCompressedArrayTexture){P&&re&&t.texStorage3D(e.TEXTURE_2D_ARRAY,be,Ne,Xe[0].width,Xe[0].height,oe.depth);for(let ie=0,ee=Xe.length;ie<ee;ie++)if(fe=Xe[ie],u.format!==Dn)if(_e!==null)if(P){if(ue)if(u.layerUpdates.size>0){const Me=As(fe.width,fe.height,u.format,u.type);for(const We of u.layerUpdates){const dt=fe.data.subarray(We*Me/fe.data.BYTES_PER_ELEMENT,(We+1)*Me/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,We,fe.width,fe.height,1,_e,dt)}u.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,oe.depth,_e,fe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ie,Ne,fe.width,fe.height,oe.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ue&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,oe.depth,_e,ze,fe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,ie,Ne,fe.width,fe.height,oe.depth,0,_e,ze,fe.data)}else{P&&re&&t.texStorage2D(e.TEXTURE_2D,be,Ne,Xe[0].width,Xe[0].height);for(let ie=0,ee=Xe.length;ie<ee;ie++)fe=Xe[ie],u.format!==Dn?_e!==null?P?ue&&t.compressedTexSubImage2D(e.TEXTURE_2D,ie,0,0,fe.width,fe.height,_e,fe.data):t.compressedTexImage2D(e.TEXTURE_2D,ie,Ne,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ue&&t.texSubImage2D(e.TEXTURE_2D,ie,0,0,fe.width,fe.height,_e,ze,fe.data):t.texImage2D(e.TEXTURE_2D,ie,Ne,fe.width,fe.height,0,_e,ze,fe.data)}else if(u.isDataArrayTexture)if(P){if(re&&t.texStorage3D(e.TEXTURE_2D_ARRAY,be,Ne,oe.width,oe.height,oe.depth),ue)if(u.layerUpdates.size>0){const ie=As(oe.width,oe.height,u.format,u.type);for(const ee of u.layerUpdates){const Me=oe.data.subarray(ee*ie/oe.data.BYTES_PER_ELEMENT,(ee+1)*ie/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,_e,ze,Me)}u.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,ze,oe.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,_e,ze,oe.data);else if(u.isData3DTexture)P?(re&&t.texStorage3D(e.TEXTURE_3D,be,Ne,oe.width,oe.height,oe.depth),ue&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,ze,oe.data)):t.texImage3D(e.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,_e,ze,oe.data);else if(u.isFramebufferTexture){if(re)if(P)t.texStorage2D(e.TEXTURE_2D,be,Ne,oe.width,oe.height);else{let ie=oe.width,ee=oe.height;for(let Me=0;Me<be;Me++)t.texImage2D(e.TEXTURE_2D,Me,Ne,ie,ee,0,_e,ze,null),ie>>=1,ee>>=1}}else if(Xe.length>0){if(P&&re){const ie=ut(Xe[0]);t.texStorage2D(e.TEXTURE_2D,be,Ne,ie.width,ie.height)}for(let ie=0,ee=Xe.length;ie<ee;ie++)fe=Xe[ie],P?ue&&t.texSubImage2D(e.TEXTURE_2D,ie,0,0,_e,ze,fe):t.texImage2D(e.TEXTURE_2D,ie,Ne,_e,ze,fe);u.generateMipmaps=!1}else if(P){if(re){const ie=ut(oe);t.texStorage2D(e.TEXTURE_2D,be,Ne,ie.width,ie.height)}ue&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,_e,ze,oe)}else t.texImage2D(e.TEXTURE_2D,0,Ne,_e,ze,oe);d(u)&&o($),Fe.__version=K.version,u.onUpdate&&u.onUpdate(u)}S.__version=u.version}function J(S,u,H){if(u.image.length!==6)return;const $=wt(S,u),te=u.source;t.bindTexture(e.TEXTURE_CUBE_MAP,S.__webglTexture,e.TEXTURE0+H);const K=i.get(te);if(te.version!==K.__version||$===!0){t.activeTexture(e.TEXTURE0+H);const Fe=It.getPrimaries(It.workingColorSpace),le=u.colorSpace===Ti?null:It.getPrimaries(u.colorSpace),Ie=u.colorSpace===Ti||Fe===le?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,u.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,u.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,u.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ue=u.isCompressedTexture||u.image[0].isCompressedTexture,oe=u.image[0]&&u.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!Ue&&!oe?_e[ee]=C(u.image[ee],!0,a.maxCubemapSize):_e[ee]=oe?u.image[ee].image:u.image[ee],_e[ee]=Ct(u,_e[ee]);const ze=_e[0],Ne=r.convert(u.format,u.colorSpace),fe=r.convert(u.type),Xe=x(u.internalFormat,Ne,fe,u.colorSpace),P=u.isVideoTexture!==!0,re=K.__version===void 0||$===!0,ue=te.dataReady;let be=D(u,ze);ot(e.TEXTURE_CUBE_MAP,u);let ie;if(Ue){P&&re&&t.texStorage2D(e.TEXTURE_CUBE_MAP,be,Xe,ze.width,ze.height);for(let ee=0;ee<6;ee++){ie=_e[ee].mipmaps;for(let Me=0;Me<ie.length;Me++){const We=ie[Me];u.format!==Dn?Ne!==null?P?ue&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,0,0,We.width,We.height,Ne,We.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,Xe,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,0,0,We.width,We.height,Ne,fe,We.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,Xe,We.width,We.height,0,Ne,fe,We.data)}}}else{if(ie=u.mipmaps,P&&re){ie.length>0&&be++;const ee=ut(_e[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,be,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){P?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Ne,fe,_e[ee].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,_e[ee].width,_e[ee].height,0,Ne,fe,_e[ee].data);for(let Me=0;Me<ie.length;Me++){const dt=ie[Me].image[ee].image;P?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,0,0,dt.width,dt.height,Ne,fe,dt.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,Xe,dt.width,dt.height,0,Ne,fe,dt.data)}}else{P?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,fe,_e[ee]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Ne,fe,_e[ee]);for(let Me=0;Me<ie.length;Me++){const We=ie[Me];P?ue&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,0,0,Ne,fe,We.image[ee]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,Xe,Ne,fe,We.image[ee])}}}d(u)&&o(e.TEXTURE_CUBE_MAP),K.__version=te.version,u.onUpdate&&u.onUpdate(u)}S.__version=u.version}function ge(S,u,H,$,te,K){const Fe=r.convert(H.format,H.colorSpace),le=r.convert(H.type),Ie=x(H.internalFormat,Fe,le,H.colorSpace),Ue=i.get(u),oe=i.get(H);if(oe.__renderTarget=u,!Ue.__hasExternalTextures){const _e=Math.max(1,u.width>>K),ze=Math.max(1,u.height>>K);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?t.texImage3D(te,K,Ie,_e,ze,u.depth,0,Fe,le,null):t.texImage2D(te,K,Ie,_e,ze,0,Fe,le,null)}t.bindFramebuffer(e.FRAMEBUFFER,S),me(u)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,$,te,oe.__webglTexture,0,st(u)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,$,te,oe.__webglTexture,K),t.bindFramebuffer(e.FRAMEBUFFER,null)}function Le(S,u,H){if(e.bindRenderbuffer(e.RENDERBUFFER,S),u.depthBuffer){const $=u.depthTexture,te=$&&$.isDepthTexture?$.type:null,K=M(u.stencilBuffer,te),Fe=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,le=st(u);me(u)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,le,K,u.width,u.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,le,K,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,K,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Fe,e.RENDERBUFFER,S)}else{const $=u.textures;for(let te=0;te<$.length;te++){const K=$[te],Fe=r.convert(K.format,K.colorSpace),le=r.convert(K.type),Ie=x(K.internalFormat,Fe,le,K.colorSpace),Ue=st(u);H&&me(u)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ue,Ie,u.width,u.height):me(u)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ue,Ie,u.width,u.height):e.renderbufferStorage(e.RENDERBUFFER,Ie,u.width,u.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Re(S,u){if(u&&u.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,S),!(u.depthTexture&&u.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(u.depthTexture);$.__renderTarget=u,(!$.__webglTexture||u.depthTexture.image.width!==u.width||u.depthTexture.image.height!==u.height)&&(u.depthTexture.image.width=u.width,u.depthTexture.image.height=u.height,u.depthTexture.needsUpdate=!0),Z(u.depthTexture,0);const te=$.__webglTexture,K=st(u);if(u.depthTexture.format===to)me(u)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,te,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,te,0);else if(u.depthTexture.format===Oa)me(u)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,te,0,K):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Oe(S){const u=i.get(S),H=S.isWebGLCubeRenderTarget===!0;if(u.__boundDepthTexture!==S.depthTexture){const $=S.depthTexture;if(u.__depthDisposeCallback&&u.__depthDisposeCallback(),$){const te=()=>{delete u.__boundDepthTexture,delete u.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),u.__depthDisposeCallback=te}u.__boundDepthTexture=$}if(S.depthTexture&&!u.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const $=S.texture.mipmaps;$&&$.length>0?Re(u.__webglFramebuffer[0],S):Re(u.__webglFramebuffer,S)}else if(H){u.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[$]),u.__webglDepthbuffer[$]===void 0)u.__webglDepthbuffer[$]=e.createRenderbuffer(),Le(u.__webglDepthbuffer[$],S,!1);else{const te=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=u.__webglDepthbuffer[$];e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,K)}}else{const $=S.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),u.__webglDepthbuffer===void 0)u.__webglDepthbuffer=e.createRenderbuffer(),Le(u.__webglDepthbuffer,S,!1);else{const te=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,K=u.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,K),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,K)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ge(S,u,H){const $=i.get(S);u!==void 0&&ge($.__webglFramebuffer,S,S.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&Oe(S)}function R(S){const u=S.texture,H=i.get(S),$=i.get(u);S.addEventListener("dispose",F);const te=S.textures,K=S.isWebGLCubeRenderTarget===!0,Fe=te.length>1;if(Fe||($.__webglTexture===void 0&&($.__webglTexture=e.createTexture()),$.__version=u.version,c.memory.textures++),K){H.__webglFramebuffer=[];for(let le=0;le<6;le++)if(u.mipmaps&&u.mipmaps.length>0){H.__webglFramebuffer[le]=[];for(let Ie=0;Ie<u.mipmaps.length;Ie++)H.__webglFramebuffer[le][Ie]=e.createFramebuffer()}else H.__webglFramebuffer[le]=e.createFramebuffer()}else{if(u.mipmaps&&u.mipmaps.length>0){H.__webglFramebuffer=[];for(let le=0;le<u.mipmaps.length;le++)H.__webglFramebuffer[le]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(Fe)for(let le=0,Ie=te.length;le<Ie;le++){const Ue=i.get(te[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=e.createTexture(),c.memory.textures++)}if(S.samples>0&&me(S)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Ie=te[le];H.__webglColorRenderbuffer[le]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[le]);const Ue=r.convert(Ie.format,Ie.colorSpace),oe=r.convert(Ie.type),_e=x(Ie.internalFormat,Ue,oe,Ie.colorSpace,S.isXRRenderTarget===!0),ze=st(S);e.renderbufferStorageMultisample(e.RENDERBUFFER,ze,_e,S.width,S.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+le,e.RENDERBUFFER,H.__webglColorRenderbuffer[le])}e.bindRenderbuffer(e.RENDERBUFFER,null),S.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),Le(H.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(K){t.bindTexture(e.TEXTURE_CUBE_MAP,$.__webglTexture),ot(e.TEXTURE_CUBE_MAP,u);for(let le=0;le<6;le++)if(u.mipmaps&&u.mipmaps.length>0)for(let Ie=0;Ie<u.mipmaps.length;Ie++)ge(H.__webglFramebuffer[le][Ie],S,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ie);else ge(H.__webglFramebuffer[le],S,u,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);d(u)&&o(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let le=0,Ie=te.length;le<Ie;le++){const Ue=te[le],oe=i.get(Ue);let _e=e.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(_e=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(_e,oe.__webglTexture),ot(_e,Ue),ge(H.__webglFramebuffer,S,Ue,e.COLOR_ATTACHMENT0+le,_e,0),d(Ue)&&o(_e)}t.unbindTexture()}else{let le=e.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(le=S.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),ot(le,u),u.mipmaps&&u.mipmaps.length>0)for(let Ie=0;Ie<u.mipmaps.length;Ie++)ge(H.__webglFramebuffer[Ie],S,u,e.COLOR_ATTACHMENT0,le,Ie);else ge(H.__webglFramebuffer,S,u,e.COLOR_ATTACHMENT0,le,0);d(u)&&o(le),t.unbindTexture()}S.depthBuffer&&Oe(S)}function et(S){const u=S.textures;for(let H=0,$=u.length;H<$;H++){const te=u[H];if(d(te)){const K=L(S),Fe=i.get(te).__webglTexture;t.bindTexture(K,Fe),o(K),t.unbindTexture()}}}const Ve=[],Ae=[];function Se(S){if(S.samples>0){if(me(S)===!1){const u=S.textures,H=S.width,$=S.height;let te=e.COLOR_BUFFER_BIT;const K=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Fe=i.get(S),le=u.length>1;if(le)for(let Ue=0;Ue<u.length;Ue++)t.bindFramebuffer(e.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ue,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ue,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Ie=S.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Ue=0;Ue<u.length;Ue++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),le){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ue]);const oe=i.get(u[Ue]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,oe,0)}e.blitFramebuffer(0,0,H,$,0,0,H,$,te,e.NEAREST),w===!0&&(Ve.length=0,Ae.length=0,Ve.push(e.COLOR_ATTACHMENT0+Ue),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Ve.push(K),Ae.push(K),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ae)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),le)for(let Ue=0;Ue<u.length;Ue++){t.bindFramebuffer(e.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ue,e.RENDERBUFFER,Fe.__webglColorRenderbuffer[Ue]);const oe=i.get(u[Ue]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Fe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ue,e.TEXTURE_2D,oe,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&w){const u=S.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[u])}}}function st(S){return Math.min(a.maxSamples,S.samples)}function me(S){const u=i.get(S);return S.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&u.__useRenderToTexture!==!1}function Ye(S){const u=c.render.frame;v.get(S)!==u&&(v.set(S,u),S.update())}function Ct(S,u){const H=S.colorSpace,$=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||H!==za&&H!==Ti&&(It.getTransfer(H)===Rt?($!==Dn||te!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),u}function ut(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(g.width=S.naturalWidth||S.width,g.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(g.width=S.displayWidth,g.height=S.displayHeight):(g.width=S.width,g.height=S.height),g}this.allocateTextureUnit=X,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=Y,this.setTexture3D=ce,this.setTextureCube=q,this.rebindTextures=Ge,this.setupRenderTarget=R,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=me}function w_(e,n){function t(i,a=Ti){let r;const c=It.getTransfer(a);if(i===si)return e.UNSIGNED_BYTE;if(i===Tc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Ac)return e.UNSIGNED_SHORT_5_5_5_1;if(i===rd)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===od)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===sd)return e.BYTE;if(i===cd)return e.SHORT;if(i===Ha)return e.UNSIGNED_SHORT;if(i===wc)return e.INT;if(i===ca)return e.UNSIGNED_INT;if(i===ai)return e.FLOAT;if(i===Va)return e.HALF_FLOAT;if(i===ld)return e.ALPHA;if(i===ud)return e.RGB;if(i===Dn)return e.RGBA;if(i===to)return e.DEPTH_COMPONENT;if(i===Oa)return e.DEPTH_STENCIL;if(i===dd)return e.RED;if(i===Cc)return e.RED_INTEGER;if(i===fd)return e.RG;if(i===yc)return e.RG_INTEGER;if(i===Pc)return e.RGBA_INTEGER;if(i===xr||i===Tr||i===Ar||i===br)if(c===Rt)if(r=n.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=n.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Tr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===qo||i===Yo||i===Ko)if(r=n.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$o||i===jo||i===Zo)if(r=n.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$o||i===jo)return c===Rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zo)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qo||i===Jo||i===es||i===ts||i===ns||i===is||i===as||i===rs||i===os||i===ss||i===cs||i===ls||i===us||i===ds)if(r=n.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qo)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jo)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===es)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ts)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ns)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===is)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===as)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rs)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===os)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ss)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cs)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ls)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===us)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ds)return c===Rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fs||i===ps||i===hs)if(r=n.get("EXT_texture_compression_bptc"),r!==null){if(i===fs)return c===Rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ps)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hs)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ms||i===_s||i===gs||i===vs)if(r=n.get("EXT_texture_compression_rgtc"),r!==null){if(i===ms)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_s)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gs)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vs)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sa?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const C_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y_=`
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

}`;class P_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new bc(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new ci({vertexShader:C_,fragmentShader:y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new An(new Rc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class L_ extends Au{constructor(n,t){super();const i=this;let a=null,r=1,c=null,f="local-floor",w=1,g=null,v=null,h=null,b=null,T=null,I=null;const C=typeof XRWebGLBinding<"u",d=new P_,o={},L=t.getContextAttributes();let x=null,M=null;const D=[],A=[],F=new Zt;let V=null;const m=new aa;m.viewport=new an;const _=new aa;_.viewport=new an;const y=[m,_],G=new bu;let X=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=D[W];return J===void 0&&(J=new Sr,D[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=D[W];return J===void 0&&(J=new Sr,D[W]=J),J.getGripSpace()},this.getHand=function(W){let J=D[W];return J===void 0&&(J=new Sr,D[W]=J),J.getHandSpace()};function Z(W){const J=A.indexOf(W.inputSource);if(J===-1)return;const ge=D[J];ge!==void 0&&(ge.update(W.inputSource,W.frame,g||c),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){a.removeEventListener("select",Z),a.removeEventListener("selectstart",Z),a.removeEventListener("selectend",Z),a.removeEventListener("squeeze",Z),a.removeEventListener("squeezestart",Z),a.removeEventListener("squeezeend",Z),a.removeEventListener("end",Y),a.removeEventListener("inputsourceschange",ce);for(let W=0;W<D.length;W++){const J=A[W];J!==null&&(A[W]=null,D[W].disconnect(J))}X=null,j=null,d.reset();for(const W in o)delete o[W];n.setRenderTarget(x),T=null,b=null,h=null,a=null,M=null,Ee.stop(),i.isPresenting=!1,n.setPixelRatio(V),n.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){f=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||c},this.setReferenceSpace=function(W){g=W},this.getBaseLayer=function(){return b!==null?b:T},this.getBinding=function(){return h===null&&C&&(h=new XRWebGLBinding(a,t)),h},this.getFrame=function(){return I},this.getSession=function(){return a},this.setSession=async function(W){if(a=W,a!==null){if(x=n.getRenderTarget(),a.addEventListener("select",Z),a.addEventListener("selectstart",Z),a.addEventListener("selectend",Z),a.addEventListener("squeeze",Z),a.addEventListener("squeezestart",Z),a.addEventListener("squeezeend",Z),a.addEventListener("end",Y),a.addEventListener("inputsourceschange",ce),L.xrCompatible!==!0&&await t.makeXRCompatible(),V=n.getPixelRatio(),n.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Le=null,Re=null;L.depth&&(Re=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=L.stencil?Oa:to,Le=L.stencil?sa:ca);const Oe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=this.getBinding(),b=h.createProjectionLayer(Oe),a.updateRenderState({layers:[b]}),n.setPixelRatio(1),n.setSize(b.textureWidth,b.textureHeight,!1),M=new wi(b.textureWidth,b.textureHeight,{format:Dn,type:si,depthTexture:new Sc(b.textureWidth,b.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:L.stencil,colorSpace:n.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}else{const ge={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:r};T=new XRWebGLLayer(a,t,ge),a.updateRenderState({baseLayer:T}),n.setPixelRatio(1),n.setSize(T.framebufferWidth,T.framebufferHeight,!1),M=new wi(T.framebufferWidth,T.framebufferHeight,{format:Dn,type:si,colorSpace:n.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:T.ignoreDepthValues===!1,resolveStencilBuffer:T.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(w),g=null,c=await a.requestReferenceSpace(f),Ee.setContext(a),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function ce(W){for(let J=0;J<W.removed.length;J++){const ge=W.removed[J],Le=A.indexOf(ge);Le>=0&&(A[Le]=null,D[Le].disconnect(ge))}for(let J=0;J<W.added.length;J++){const ge=W.added[J];let Le=A.indexOf(ge);if(Le===-1){for(let Oe=0;Oe<D.length;Oe++)if(Oe>=A.length){A.push(ge),Le=Oe;break}else if(A[Oe]===null){A[Oe]=ge,Le=Oe;break}if(Le===-1)break}const Re=D[Le];Re&&Re.connect(ge)}}const q=new He,Pe=new He;function Be(W,J,ge){q.setFromMatrixPosition(J.matrixWorld),Pe.setFromMatrixPosition(ge.matrixWorld);const Le=q.distanceTo(Pe),Re=J.projectionMatrix.elements,Oe=ge.projectionMatrix.elements,Ge=Re[14]/(Re[10]-1),R=Re[14]/(Re[10]+1),et=(Re[9]+1)/Re[5],Ve=(Re[9]-1)/Re[5],Ae=(Re[8]-1)/Re[0],Se=(Oe[8]+1)/Oe[0],st=Ge*Ae,me=Ge*Se,Ye=Le/(-Ae+Se),Ct=Ye*-Ae;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ct),W.translateZ(Ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Re[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ut=Ge+Ye,S=R+Ye,u=st-Ct,H=me+(Le-Ct),$=et*R/S*ut,te=Ve*R/S*ut;W.projectionMatrix.makePerspective(u,H,$,te,ut,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function Ke(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(a===null)return;let J=W.near,ge=W.far;d.texture!==null&&(d.depthNear>0&&(J=d.depthNear),d.depthFar>0&&(ge=d.depthFar)),G.near=_.near=m.near=J,G.far=_.far=m.far=ge,(X!==G.near||j!==G.far)&&(a.updateRenderState({depthNear:G.near,depthFar:G.far}),X=G.near,j=G.far),G.layers.mask=W.layers.mask|6,m.layers.mask=G.layers.mask&3,_.layers.mask=G.layers.mask&5;const Le=W.parent,Re=G.cameras;Ke(G,Le);for(let Oe=0;Oe<Re.length;Oe++)Ke(Re[Oe],Le);Re.length===2?Be(G,m,_):G.projectionMatrix.copy(m.projectionMatrix),ot(W,G,Le)};function ot(W,J,ge){ge===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ru*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(b===null&&T===null))return w},this.setFoveation=function(W){w=W,b!==null&&(b.fixedFoveation=W),T!==null&&T.fixedFoveation!==void 0&&(T.fixedFoveation=W)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(G)},this.getCameraTexture=function(W){return o[W]};let wt=null;function tt(W,J){if(v=J.getViewerPose(g||c),I=J,v!==null){const ge=v.views;T!==null&&(n.setRenderTargetFramebuffer(M,T.framebuffer),n.setRenderTarget(M));let Le=!1;ge.length!==G.cameras.length&&(G.cameras.length=0,Le=!0);for(let R=0;R<ge.length;R++){const et=ge[R];let Ve=null;if(T!==null)Ve=T.getViewport(et);else{const Se=h.getViewSubImage(b,et);Ve=Se.viewport,R===0&&(n.setRenderTargetTextures(M,Se.colorTexture,Se.depthStencilTexture),n.setRenderTarget(M))}let Ae=y[R];Ae===void 0&&(Ae=new aa,Ae.layers.enable(R),Ae.viewport=new an,y[R]=Ae),Ae.matrix.fromArray(et.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(et.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ve.x,Ve.y,Ve.width,Ve.height),R===0&&(G.matrix.copy(Ae.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Le===!0&&G.cameras.push(Ae)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){h=i.getBinding();const R=h.getDepthInformation(ge[0]);R&&R.isValid&&R.texture&&d.init(R,a.renderState)}if(Re&&Re.includes("camera-access")&&C){n.state.unbindTexture(),h=i.getBinding();for(let R=0;R<ge.length;R++){const et=ge[R].camera;if(et){let Ve=o[et];Ve||(Ve=new bc,o[et]=Ve);const Ae=h.getCameraImage(et);Ve.sourceTexture=Ae}}}}for(let ge=0;ge<D.length;ge++){const Le=A[ge],Re=D[ge];Le!==null&&Re!==void 0&&Re.update(Le,J,g||c)}wt&&wt(W,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),I=null}const Ee=new Bc;Ee.setAnimationLoop(tt),this.setAnimationLoop=function(W){wt=W},this.dispose=function(){}}}const Jn=new bi,D_=new oi;function I_(e,n){function t(d,o){d.matrixAutoUpdate===!0&&d.updateMatrix(),o.value.copy(d.matrix)}function i(d,o){o.color.getRGB(d.fogColor.value,Dc(e)),o.isFog?(d.fogNear.value=o.near,d.fogFar.value=o.far):o.isFogExp2&&(d.fogDensity.value=o.density)}function a(d,o,L,x,M){o.isMeshBasicMaterial||o.isMeshLambertMaterial?r(d,o):o.isMeshToonMaterial?(r(d,o),h(d,o)):o.isMeshPhongMaterial?(r(d,o),v(d,o)):o.isMeshStandardMaterial?(r(d,o),b(d,o),o.isMeshPhysicalMaterial&&T(d,o,M)):o.isMeshMatcapMaterial?(r(d,o),I(d,o)):o.isMeshDepthMaterial?r(d,o):o.isMeshDistanceMaterial?(r(d,o),C(d,o)):o.isMeshNormalMaterial?r(d,o):o.isLineBasicMaterial?(c(d,o),o.isLineDashedMaterial&&f(d,o)):o.isPointsMaterial?w(d,o,L,x):o.isSpriteMaterial?g(d,o):o.isShadowMaterial?(d.color.value.copy(o.color),d.opacity.value=o.opacity):o.isShaderMaterial&&(o.uniformsNeedUpdate=!1)}function r(d,o){d.opacity.value=o.opacity,o.color&&d.diffuse.value.copy(o.color),o.emissive&&d.emissive.value.copy(o.emissive).multiplyScalar(o.emissiveIntensity),o.map&&(d.map.value=o.map,t(o.map,d.mapTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,t(o.alphaMap,d.alphaMapTransform)),o.bumpMap&&(d.bumpMap.value=o.bumpMap,t(o.bumpMap,d.bumpMapTransform),d.bumpScale.value=o.bumpScale,o.side===ln&&(d.bumpScale.value*=-1)),o.normalMap&&(d.normalMap.value=o.normalMap,t(o.normalMap,d.normalMapTransform),d.normalScale.value.copy(o.normalScale),o.side===ln&&d.normalScale.value.negate()),o.displacementMap&&(d.displacementMap.value=o.displacementMap,t(o.displacementMap,d.displacementMapTransform),d.displacementScale.value=o.displacementScale,d.displacementBias.value=o.displacementBias),o.emissiveMap&&(d.emissiveMap.value=o.emissiveMap,t(o.emissiveMap,d.emissiveMapTransform)),o.specularMap&&(d.specularMap.value=o.specularMap,t(o.specularMap,d.specularMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest);const L=n.get(o),x=L.envMap,M=L.envMapRotation;x&&(d.envMap.value=x,Jn.copy(M),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),d.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Jn)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=o.reflectivity,d.ior.value=o.ior,d.refractionRatio.value=o.refractionRatio),o.lightMap&&(d.lightMap.value=o.lightMap,d.lightMapIntensity.value=o.lightMapIntensity,t(o.lightMap,d.lightMapTransform)),o.aoMap&&(d.aoMap.value=o.aoMap,d.aoMapIntensity.value=o.aoMapIntensity,t(o.aoMap,d.aoMapTransform))}function c(d,o){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,o.map&&(d.map.value=o.map,t(o.map,d.mapTransform))}function f(d,o){d.dashSize.value=o.dashSize,d.totalSize.value=o.dashSize+o.gapSize,d.scale.value=o.scale}function w(d,o,L,x){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,d.size.value=o.size*L,d.scale.value=x*.5,o.map&&(d.map.value=o.map,t(o.map,d.uvTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,t(o.alphaMap,d.alphaMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest)}function g(d,o){d.diffuse.value.copy(o.color),d.opacity.value=o.opacity,d.rotation.value=o.rotation,o.map&&(d.map.value=o.map,t(o.map,d.mapTransform)),o.alphaMap&&(d.alphaMap.value=o.alphaMap,t(o.alphaMap,d.alphaMapTransform)),o.alphaTest>0&&(d.alphaTest.value=o.alphaTest)}function v(d,o){d.specular.value.copy(o.specular),d.shininess.value=Math.max(o.shininess,1e-4)}function h(d,o){o.gradientMap&&(d.gradientMap.value=o.gradientMap)}function b(d,o){d.metalness.value=o.metalness,o.metalnessMap&&(d.metalnessMap.value=o.metalnessMap,t(o.metalnessMap,d.metalnessMapTransform)),d.roughness.value=o.roughness,o.roughnessMap&&(d.roughnessMap.value=o.roughnessMap,t(o.roughnessMap,d.roughnessMapTransform)),o.envMap&&(d.envMapIntensity.value=o.envMapIntensity)}function T(d,o,L){d.ior.value=o.ior,o.sheen>0&&(d.sheenColor.value.copy(o.sheenColor).multiplyScalar(o.sheen),d.sheenRoughness.value=o.sheenRoughness,o.sheenColorMap&&(d.sheenColorMap.value=o.sheenColorMap,t(o.sheenColorMap,d.sheenColorMapTransform)),o.sheenRoughnessMap&&(d.sheenRoughnessMap.value=o.sheenRoughnessMap,t(o.sheenRoughnessMap,d.sheenRoughnessMapTransform))),o.clearcoat>0&&(d.clearcoat.value=o.clearcoat,d.clearcoatRoughness.value=o.clearcoatRoughness,o.clearcoatMap&&(d.clearcoatMap.value=o.clearcoatMap,t(o.clearcoatMap,d.clearcoatMapTransform)),o.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=o.clearcoatRoughnessMap,t(o.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),o.clearcoatNormalMap&&(d.clearcoatNormalMap.value=o.clearcoatNormalMap,t(o.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(o.clearcoatNormalScale),o.side===ln&&d.clearcoatNormalScale.value.negate())),o.dispersion>0&&(d.dispersion.value=o.dispersion),o.iridescence>0&&(d.iridescence.value=o.iridescence,d.iridescenceIOR.value=o.iridescenceIOR,d.iridescenceThicknessMinimum.value=o.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=o.iridescenceThicknessRange[1],o.iridescenceMap&&(d.iridescenceMap.value=o.iridescenceMap,t(o.iridescenceMap,d.iridescenceMapTransform)),o.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=o.iridescenceThicknessMap,t(o.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),o.transmission>0&&(d.transmission.value=o.transmission,d.transmissionSamplerMap.value=L.texture,d.transmissionSamplerSize.value.set(L.width,L.height),o.transmissionMap&&(d.transmissionMap.value=o.transmissionMap,t(o.transmissionMap,d.transmissionMapTransform)),d.thickness.value=o.thickness,o.thicknessMap&&(d.thicknessMap.value=o.thicknessMap,t(o.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=o.attenuationDistance,d.attenuationColor.value.copy(o.attenuationColor)),o.anisotropy>0&&(d.anisotropyVector.value.set(o.anisotropy*Math.cos(o.anisotropyRotation),o.anisotropy*Math.sin(o.anisotropyRotation)),o.anisotropyMap&&(d.anisotropyMap.value=o.anisotropyMap,t(o.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=o.specularIntensity,d.specularColor.value.copy(o.specularColor),o.specularColorMap&&(d.specularColorMap.value=o.specularColorMap,t(o.specularColorMap,d.specularColorMapTransform)),o.specularIntensityMap&&(d.specularIntensityMap.value=o.specularIntensityMap,t(o.specularIntensityMap,d.specularIntensityMapTransform))}function I(d,o){o.matcap&&(d.matcap.value=o.matcap)}function C(d,o){const L=n.get(o).light;d.referencePosition.value.setFromMatrixPosition(L.matrixWorld),d.nearDistance.value=L.shadow.camera.near,d.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function N_(e,n,t,i){let a={},r={},c=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function w(L,x){const M=x.program;i.uniformBlockBinding(L,M)}function g(L,x){let M=a[L.id];M===void 0&&(I(L),M=v(L),a[L.id]=M,L.addEventListener("dispose",d));const D=x.program;i.updateUBOMapping(L,D);const A=n.render.frame;r[L.id]!==A&&(b(L),r[L.id]=A)}function v(L){const x=h();L.__bindingPointIndex=x;const M=e.createBuffer(),D=L.__size,A=L.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,D,A),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,x,M),M}function h(){for(let L=0;L<f;L++)if(c.indexOf(L)===-1)return c.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(L){const x=a[L.id],M=L.uniforms,D=L.__cache;e.bindBuffer(e.UNIFORM_BUFFER,x);for(let A=0,F=M.length;A<F;A++){const V=Array.isArray(M[A])?M[A]:[M[A]];for(let m=0,_=V.length;m<_;m++){const y=V[m];if(T(y,A,m,D)===!0){const G=y.__offset,X=Array.isArray(y.value)?y.value:[y.value];let j=0;for(let Z=0;Z<X.length;Z++){const Y=X[Z],ce=C(Y);typeof Y=="number"||typeof Y=="boolean"?(y.__data[0]=Y,e.bufferSubData(e.UNIFORM_BUFFER,G+j,y.__data)):Y.isMatrix3?(y.__data[0]=Y.elements[0],y.__data[1]=Y.elements[1],y.__data[2]=Y.elements[2],y.__data[3]=0,y.__data[4]=Y.elements[3],y.__data[5]=Y.elements[4],y.__data[6]=Y.elements[5],y.__data[7]=0,y.__data[8]=Y.elements[6],y.__data[9]=Y.elements[7],y.__data[10]=Y.elements[8],y.__data[11]=0):(Y.toArray(y.__data,j),j+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,G,y.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function T(L,x,M,D){const A=L.value,F=x+"_"+M;if(D[F]===void 0)return typeof A=="number"||typeof A=="boolean"?D[F]=A:D[F]=A.clone(),!0;{const V=D[F];if(typeof A=="number"||typeof A=="boolean"){if(V!==A)return D[F]=A,!0}else if(V.equals(A)===!1)return V.copy(A),!0}return!1}function I(L){const x=L.uniforms;let M=0;const D=16;for(let F=0,V=x.length;F<V;F++){const m=Array.isArray(x[F])?x[F]:[x[F]];for(let _=0,y=m.length;_<y;_++){const G=m[_],X=Array.isArray(G.value)?G.value:[G.value];for(let j=0,Z=X.length;j<Z;j++){const Y=X[j],ce=C(Y),q=M%D,Pe=q%ce.boundary,Be=q+Pe;M+=Pe,Be!==0&&D-Be<ce.storage&&(M+=D-Be),G.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=ce.storage}}}const A=M%D;return A>0&&(M+=D-A),L.__size=M,L.__cache={},this}function C(L){const x={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(x.boundary=4,x.storage=4):L.isVector2?(x.boundary=8,x.storage=8):L.isVector3||L.isColor?(x.boundary=16,x.storage=12):L.isVector4?(x.boundary=16,x.storage=16):L.isMatrix3?(x.boundary=48,x.storage=48):L.isMatrix4?(x.boundary=64,x.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),x}function d(L){const x=L.target;x.removeEventListener("dispose",d);const M=c.indexOf(x.__bindingPointIndex);c.splice(M,1),e.deleteBuffer(a[x.id]),delete a[x.id],delete r[x.id]}function o(){for(const L in a)e.deleteBuffer(a[L]);c=[],a={},r={}}return{bind:w,update:g,dispose:o}}class U_{constructor(n={}){const{canvas:t=Mu(),context:i=null,depth:a=!0,stencil:r=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:w=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:b=!1}=n;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=c;const I=new Uint32Array(4),C=new Int32Array(4);let d=null,o=null;const L=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=eo;let A=0,F=0,V=null,m=-1,_=null;const y=new an,G=new an;let X=null;const j=new Mt(0);let Z=0,Y=t.width,ce=t.height,q=1,Pe=null,Be=null;const Ke=new an(0,0,Y,ce),ot=new an(0,0,Y,ce);let wt=!1;const tt=new Ec;let Ee=!1,W=!1;const J=new oi,ge=new He,Le=new an,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function Ge(){return V===null?q:1}let R=i;function et(p,O){return t.getContext(p,O)}try{const p={alpha:!0,depth:a,stencil:r,antialias:f,premultipliedAlpha:w,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xu}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",ie,!1),R===null){const O="webgl2";if(R=et(O,p),R===null)throw et(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(p){throw console.error("THREE.WebGLRenderer: "+p.message),p}let Ve,Ae,Se,st,me,Ye,Ct,ut,S,u,H,$,te,K,Fe,le,Ie,Ue,oe,_e,ze,Ne,fe,Xe;function P(){Ve=new Xh(R),Ve.init(),Ne=new w_(R,Ve),Ae=new Bh(R,Ve,n,Ne),Se=new b_(R,Ve),Ae.reversedDepthBuffer&&b&&Se.buffers.depth.setReversed(!0),st=new Kh(R),me=new f_,Ye=new R_(R,Ve,Se,me,Ae,Ne,st),Ct=new Gh(M),ut=new Wh(M),S=new Jd(R),fe=new Fh(R,S),u=new qh(R,S,st,fe),H=new jh(R,u,S,st),oe=new $h(R,Ae,Ye),le=new Hh(me),$=new d_(M,Ct,ut,Ve,Ae,fe,le),te=new I_(M,me),K=new h_,Fe=new S_(Ve),Ue=new Uh(M,Ct,ut,Se,H,T,w),Ie=new T_(M,H,Ae),Xe=new N_(R,st,Ae,Se),_e=new Oh(R,Ve,st),ze=new Yh(R,Ve,st),st.programs=$.programs,M.capabilities=Ae,M.extensions=Ve,M.properties=me,M.renderLists=K,M.shadowMap=Ie,M.state=Se,M.info=st}P();const re=new L_(M,R);this.xr=re,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const p=Ve.get("WEBGL_lose_context");p&&p.loseContext()},this.forceContextRestore=function(){const p=Ve.get("WEBGL_lose_context");p&&p.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(p){p!==void 0&&(q=p,this.setSize(Y,ce,!1))},this.getSize=function(p){return p.set(Y,ce)},this.setSize=function(p,O,k=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=p,ce=O,t.width=Math.floor(p*q),t.height=Math.floor(O*q),k===!0&&(t.style.width=p+"px",t.style.height=O+"px"),this.setViewport(0,0,p,O)},this.getDrawingBufferSize=function(p){return p.set(Y*q,ce*q).floor()},this.setDrawingBufferSize=function(p,O,k){Y=p,ce=O,q=k,t.width=Math.floor(p*k),t.height=Math.floor(O*k),this.setViewport(0,0,p,O)},this.getCurrentViewport=function(p){return p.copy(y)},this.getViewport=function(p){return p.copy(Ke)},this.setViewport=function(p,O,k,z){p.isVector4?Ke.set(p.x,p.y,p.z,p.w):Ke.set(p,O,k,z),Se.viewport(y.copy(Ke).multiplyScalar(q).round())},this.getScissor=function(p){return p.copy(ot)},this.setScissor=function(p,O,k,z){p.isVector4?ot.set(p.x,p.y,p.z,p.w):ot.set(p,O,k,z),Se.scissor(G.copy(ot).multiplyScalar(q).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(p){Se.setScissorTest(wt=p)},this.setOpaqueSort=function(p){Pe=p},this.setTransparentSort=function(p){Be=p},this.getClearColor=function(p){return p.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(p=!0,O=!0,k=!0){let z=0;if(p){let N=!1;if(V!==null){const ae=V.texture.format;N=ae===Pc||ae===yc||ae===Cc}if(N){const ae=V.texture.type,de=ae===si||ae===ca||ae===Ha||ae===sa||ae===Tc||ae===Ac,xe=Ue.getClearColor(),ve=Ue.getClearAlpha(),we=xe.r,De=xe.g,Ce=xe.b;de?(I[0]=we,I[1]=De,I[2]=Ce,I[3]=ve,R.clearBufferuiv(R.COLOR,0,I)):(C[0]=we,C[1]=De,C[2]=Ce,C[3]=ve,R.clearBufferiv(R.COLOR,0,C))}else z|=R.COLOR_BUFFER_BIT}O&&(z|=R.DEPTH_BUFFER_BIT),k&&(z|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",ie,!1),Ue.dispose(),K.dispose(),Fe.dispose(),me.dispose(),Ct.dispose(),ut.dispose(),H.dispose(),fe.dispose(),Xe.dispose(),$.dispose(),re.dispose(),re.removeEventListener("sessionstart",cn),re.removeEventListener("sessionend",li),rn.stop()};function ue(p){p.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const p=st.autoReset,O=Ie.enabled,k=Ie.autoUpdate,z=Ie.needsUpdate,N=Ie.type;P(),st.autoReset=p,Ie.enabled=O,Ie.autoUpdate=k,Ie.needsUpdate=z,Ie.type=N}function ie(p){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",p.statusMessage)}function ee(p){const O=p.target;O.removeEventListener("dispose",ee),Me(O)}function Me(p){We(p),me.remove(p)}function We(p){const O=me.get(p).programs;O!==void 0&&(O.forEach(function(k){$.releaseProgram(k)}),p.isShaderMaterial&&$.releaseShaderCache(p))}this.renderBufferDirect=function(p,O,k,z,N,ae){O===null&&(O=Re);const de=N.isMesh&&N.matrixWorld.determinant()<0,xe=gn(p,O,k,z,N);Se.setMaterial(z,de);let ve=k.index,we=1;if(z.wireframe===!0){if(ve=u.getWireframeAttribute(k),ve===void 0)return;we=2}const De=k.drawRange,Ce=k.attributes.position;let $e=De.start*we,nt=(De.start+De.count)*we;ae!==null&&($e=Math.max($e,ae.start*we),nt=Math.min(nt,(ae.start+ae.count)*we)),ve!==null?($e=Math.max($e,0),nt=Math.min(nt,ve.count)):Ce!=null&&($e=Math.max($e,0),nt=Math.min(nt,Ce.count));const Tt=nt-$e;if(Tt<0||Tt===1/0)return;fe.setup(N,z,xe,k,ve);let ft,Je=_e;if(ve!==null&&(ft=S.get(ve),Je=ze,Je.setIndex(ft)),N.isMesh)z.wireframe===!0?(Se.setLineWidth(z.wireframeLinewidth*Ge()),Je.setMode(R.LINES)):Je.setMode(R.TRIANGLES);else if(N.isLine){let ke=z.linewidth;ke===void 0&&(ke=1),Se.setLineWidth(ke*Ge()),N.isLineSegments?Je.setMode(R.LINES):N.isLineLoop?Je.setMode(R.LINE_LOOP):Je.setMode(R.LINE_STRIP)}else N.isPoints?Je.setMode(R.POINTS):N.isSprite&&Je.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Br("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Je.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Je.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const ke=N._multiDrawStarts,pt=N._multiDrawCounts,Qe=N._multiDrawCount,Nt=ve?S.get(ve).bytesPerElement:1,dn=me.get(z).currentProgram.getUniforms();for(let Vt=0;Vt<Qe;Vt++)dn.setValue(R,"_gl_DrawID",Vt),Je.render(ke[Vt]/Nt,pt[Vt])}else if(N.isInstancedMesh)Je.renderInstances($e,Tt,N.count);else if(k.isInstancedBufferGeometry){const ke=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,pt=Math.min(k.instanceCount,ke);Je.renderInstances($e,Tt,pt)}else Je.render($e,Tt)};function dt(p,O,k){p.transparent===!0&&p.side===mn&&p.forceSinglePass===!1?(p.side=ln,p.needsUpdate=!0,_n(p,O,k),p.side=oa,p.needsUpdate=!0,_n(p,O,k),p.side=mn):_n(p,O,k)}this.compile=function(p,O,k=null){k===null&&(k=p),o=Fe.get(k),o.init(O),x.push(o),k.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(o.pushLight(N),N.castShadow&&o.pushShadow(N))}),p!==k&&p.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(o.pushLight(N),N.castShadow&&o.pushShadow(N))}),o.setupLights();const z=new Set;return p.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let de=0;de<ae.length;de++){const xe=ae[de];dt(xe,k,N),z.add(xe)}else dt(ae,k,N),z.add(ae)}),o=x.pop(),z},this.compileAsync=function(p,O,k=null){const z=this.compile(p,O,k);return new Promise(N=>{function ae(){if(z.forEach(function(de){me.get(de).currentProgram.isReady()&&z.delete(de)}),z.size===0){N(p);return}setTimeout(ae,10)}Ve.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let ct=null;function Xt(p){ct&&ct(p)}function cn(){rn.stop()}function li(){rn.start()}const rn=new Bc;rn.setAnimationLoop(Xt),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(p){ct=p,re.setAnimationLoop(p),p===null?rn.stop():rn.start()},re.addEventListener("sessionstart",cn),re.addEventListener("sessionend",li),this.render=function(p,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(O),O=re.getCamera()),p.isScene===!0&&p.onBeforeRender(M,p,O,V),o=Fe.get(p,x.length),o.init(O),x.push(o),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),tt.setFromProjectionMatrix(J,Wo,O.reversedDepth),W=this.localClippingEnabled,Ee=le.init(this.clippingPlanes,W),d=K.get(p,L.length),d.init(),L.push(d),re.enabled===!0&&re.isPresenting===!0){const ae=M.xr.getDepthSensingMesh();ae!==null&&ui(ae,O,-1/0,M.sortObjects)}ui(p,O,0,M.sortObjects),d.finish(),M.sortObjects===!0&&d.sort(Pe,Be),Oe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Oe&&Ue.addToRenderList(d,p),this.info.render.frame++,Ee===!0&&le.beginShadows();const k=o.state.shadowsArray;Ie.render(k,p,O),Ee===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=d.opaque,N=d.transmissive;if(o.setupLights(),O.isArrayCamera){const ae=O.cameras;if(N.length>0)for(let de=0,xe=ae.length;de<xe;de++){const ve=ae[de];kn(z,N,p,ve)}Oe&&Ue.render(p);for(let de=0,xe=ae.length;de<xe;de++){const ve=ae[de];Pi(d,p,ve,ve.viewport)}}else N.length>0&&kn(z,N,p,O),Oe&&Ue.render(p),Pi(d,p,O);V!==null&&F===0&&(Ye.updateMultisampleRenderTarget(V),Ye.updateRenderTargetMipmap(V)),p.isScene===!0&&p.onAfterRender(M,p,O),fe.resetDefaultState(),m=-1,_=null,x.pop(),x.length>0?(o=x[x.length-1],Ee===!0&&le.setGlobalState(M.clippingPlanes,o.state.camera)):o=null,L.pop(),L.length>0?d=L[L.length-1]:d=null};function ui(p,O,k,z){if(p.visible===!1)return;if(p.layers.test(O.layers)){if(p.isGroup)k=p.renderOrder;else if(p.isLOD)p.autoUpdate===!0&&p.update(O);else if(p.isLight)o.pushLight(p),p.castShadow&&o.pushShadow(p);else if(p.isSprite){if(!p.frustumCulled||tt.intersectsSprite(p)){z&&Le.setFromMatrixPosition(p.matrixWorld).applyMatrix4(J);const de=H.update(p),xe=p.material;xe.visible&&d.push(p,de,xe,k,Le.z,null)}}else if((p.isMesh||p.isLine||p.isPoints)&&(!p.frustumCulled||tt.intersectsObject(p))){const de=H.update(p),xe=p.material;if(z&&(p.boundingSphere!==void 0?(p.boundingSphere===null&&p.computeBoundingSphere(),Le.copy(p.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Le.copy(de.boundingSphere.center)),Le.applyMatrix4(p.matrixWorld).applyMatrix4(J)),Array.isArray(xe)){const ve=de.groups;for(let we=0,De=ve.length;we<De;we++){const Ce=ve[we],$e=xe[Ce.materialIndex];$e&&$e.visible&&d.push(p,de,$e,k,Le.z,Ce)}}else xe.visible&&d.push(p,de,xe,k,Le.z,null)}}const ae=p.children;for(let de=0,xe=ae.length;de<xe;de++)ui(ae[de],O,k,z)}function Pi(p,O,k,z){const N=p.opaque,ae=p.transmissive,de=p.transparent;o.setupLightsView(k),Ee===!0&&le.setGlobalState(M.clippingPlanes,k),z&&Se.viewport(y.copy(z)),N.length>0&&ht(N,O,k),ae.length>0&&ht(ae,O,k),de.length>0&&ht(de,O,k),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function kn(p,O,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;o.state.transmissionRenderTarget[z.id]===void 0&&(o.state.transmissionRenderTarget[z.id]=new wi(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?Va:si,minFilter:na,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace}));const ae=o.state.transmissionRenderTarget[z.id],de=z.viewport||y;ae.setSize(de.z*M.transmissionResolutionScale,de.w*M.transmissionResolutionScale);const xe=M.getRenderTarget(),ve=M.getActiveCubeFace(),we=M.getActiveMipmapLevel();M.setRenderTarget(ae),M.getClearColor(j),Z=M.getClearAlpha(),Z<1&&M.setClearColor(16777215,.5),M.clear(),Oe&&Ue.render(k);const De=M.toneMapping;M.toneMapping=Bn;const Ce=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),o.setupLightsView(z),Ee===!0&&le.setGlobalState(M.clippingPlanes,z),ht(p,k,z),Ye.updateMultisampleRenderTarget(ae),Ye.updateRenderTargetMipmap(ae),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let nt=0,Tt=O.length;nt<Tt;nt++){const ft=O[nt],Je=ft.object,ke=ft.geometry,pt=ft.material,Qe=ft.group;if(pt.side===mn&&Je.layers.test(z.layers)){const Nt=pt.side;pt.side=ln,pt.needsUpdate=!0,un(Je,k,z,ke,pt,Qe),pt.side=Nt,pt.needsUpdate=!0,$e=!0}}$e===!0&&(Ye.updateMultisampleRenderTarget(ae),Ye.updateRenderTargetMipmap(ae))}M.setRenderTarget(xe,ve,we),M.setClearColor(j,Z),Ce!==void 0&&(z.viewport=Ce),M.toneMapping=De}function ht(p,O,k){const z=O.isScene===!0?O.overrideMaterial:null;for(let N=0,ae=p.length;N<ae;N++){const de=p[N],xe=de.object,ve=de.geometry,we=de.group;let De=de.material;De.allowOverride===!0&&z!==null&&(De=z),xe.layers.test(k.layers)&&un(xe,O,k,ve,De,we)}}function un(p,O,k,z,N,ae){p.onBeforeRender(M,O,k,z,N,ae),p.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,p.matrixWorld),p.normalMatrix.getNormalMatrix(p.modelViewMatrix),N.onBeforeRender(M,O,k,z,p,ae),N.transparent===!0&&N.side===mn&&N.forceSinglePass===!1?(N.side=ln,N.needsUpdate=!0,M.renderBufferDirect(k,O,z,N,p,ae),N.side=oa,N.needsUpdate=!0,M.renderBufferDirect(k,O,z,N,p,ae),N.side=mn):M.renderBufferDirect(k,O,z,N,p,ae),p.onAfterRender(M,O,k,z,N,ae)}function _n(p,O,k){O.isScene!==!0&&(O=Re);const z=me.get(p),N=o.state.lights,ae=o.state.shadowsArray,de=N.state.version,xe=$.getParameters(p,N.state,ae,O,k),ve=$.getProgramCacheKey(xe);let we=z.programs;z.environment=p.isMeshStandardMaterial?O.environment:null,z.fog=O.fog,z.envMap=(p.isMeshStandardMaterial?ut:Ct).get(p.envMap||z.environment),z.envMapRotation=z.environment!==null&&p.envMap===null?O.environmentRotation:p.envMapRotation,we===void 0&&(p.addEventListener("dispose",ee),we=new Map,z.programs=we);let De=we.get(ve);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===de)return on(p,xe),De}else xe.uniforms=$.getUniforms(p),p.onBeforeCompile(xe,M),De=$.acquireProgram(xe,ve),we.set(ve,De),z.uniforms=xe.uniforms;const Ce=z.uniforms;return(!p.isShaderMaterial&&!p.isRawShaderMaterial||p.clipping===!0)&&(Ce.clippingPlanes=le.uniform),on(p,xe),z.needsLights=Vn(p),z.lightsStateVersion=de,z.needsLights&&(Ce.ambientLightColor.value=N.state.ambient,Ce.lightProbe.value=N.state.probe,Ce.directionalLights.value=N.state.directional,Ce.directionalLightShadows.value=N.state.directionalShadow,Ce.spotLights.value=N.state.spot,Ce.spotLightShadows.value=N.state.spotShadow,Ce.rectAreaLights.value=N.state.rectArea,Ce.ltc_1.value=N.state.rectAreaLTC1,Ce.ltc_2.value=N.state.rectAreaLTC2,Ce.pointLights.value=N.state.point,Ce.pointLightShadows.value=N.state.pointShadow,Ce.hemisphereLights.value=N.state.hemi,Ce.directionalShadowMap.value=N.state.directionalShadowMap,Ce.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ce.spotShadowMap.value=N.state.spotShadowMap,Ce.spotLightMatrix.value=N.state.spotLightMatrix,Ce.spotLightMap.value=N.state.spotLightMap,Ce.pointShadowMap.value=N.state.pointShadowMap,Ce.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function bn(p){if(p.uniformsList===null){const O=p.currentProgram.getUniforms();p.uniformsList=Ua.seqWithValue(O.seq,p.uniforms)}return p.uniformsList}function on(p,O){const k=me.get(p);k.outputColorSpace=O.outputColorSpace,k.batching=O.batching,k.batchingColor=O.batchingColor,k.instancing=O.instancing,k.instancingColor=O.instancingColor,k.instancingMorph=O.instancingMorph,k.skinning=O.skinning,k.morphTargets=O.morphTargets,k.morphNormals=O.morphNormals,k.morphColors=O.morphColors,k.morphTargetsCount=O.morphTargetsCount,k.numClippingPlanes=O.numClippingPlanes,k.numIntersection=O.numClipIntersection,k.vertexAlphas=O.vertexAlphas,k.vertexTangents=O.vertexTangents,k.toneMapping=O.toneMapping}function gn(p,O,k,z,N){O.isScene!==!0&&(O=Re),Ye.resetTextureUnits();const ae=O.fog,de=z.isMeshStandardMaterial?O.environment:null,xe=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:za,ve=(z.isMeshStandardMaterial?ut:Ct).get(z.envMap||de),we=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,De=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,nt=!!k.morphAttributes.color;let Tt=Bn;z.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Tt=M.toneMapping);const ft=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Je=ft!==void 0?ft.length:0,ke=me.get(z),pt=o.state.lights;if(Ee===!0&&(W===!0||p!==_)){const Ut=p===_&&z.id===m;le.setState(z,p,Ut)}let Qe=!1;z.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==pt.state.version||ke.outputColorSpace!==xe||N.isBatchedMesh&&ke.batching===!1||!N.isBatchedMesh&&ke.batching===!0||N.isBatchedMesh&&ke.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&ke.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&ke.instancing===!1||!N.isInstancedMesh&&ke.instancing===!0||N.isSkinnedMesh&&ke.skinning===!1||!N.isSkinnedMesh&&ke.skinning===!0||N.isInstancedMesh&&ke.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ke.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&ke.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&ke.instancingMorph===!1&&N.morphTexture!==null||ke.envMap!==ve||z.fog===!0&&ke.fog!==ae||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==le.numPlanes||ke.numIntersection!==le.numIntersection)||ke.vertexAlphas!==we||ke.vertexTangents!==De||ke.morphTargets!==Ce||ke.morphNormals!==$e||ke.morphColors!==nt||ke.toneMapping!==Tt||ke.morphTargetsCount!==Je)&&(Qe=!0):(Qe=!0,ke.__version=z.version);let Nt=ke.currentProgram;Qe===!0&&(Nt=_n(z,O,N));let dn=!1,Vt=!1,Rn=!1;const vt=Nt.getUniforms(),qt=ke.uniforms;if(Se.useProgram(Nt.program)&&(dn=!0,Vt=!0,Rn=!0),z.id!==m&&(m=z.id,Vt=!0),dn||_!==p){Se.buffers.depth.getReversed()&&p.reversedDepth!==!0&&(p._reversedDepth=!0,p.updateProjectionMatrix()),vt.setValue(R,"projectionMatrix",p.projectionMatrix),vt.setValue(R,"viewMatrix",p.matrixWorldInverse);const Gt=vt.map.cameraPosition;Gt!==void 0&&Gt.setValue(R,ge.setFromMatrixPosition(p.matrixWorld)),Ae.logarithmicDepthBuffer&&vt.setValue(R,"logDepthBufFC",2/(Math.log(p.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&vt.setValue(R,"isOrthographic",p.isOrthographicCamera===!0),_!==p&&(_=p,Vt=!0,Rn=!0)}if(N.isSkinnedMesh){vt.setOptional(R,N,"bindMatrix"),vt.setOptional(R,N,"bindMatrixInverse");const Ut=N.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),vt.setValue(R,"boneTexture",Ut.boneTexture,Ye))}N.isBatchedMesh&&(vt.setOptional(R,N,"batchingTexture"),vt.setValue(R,"batchingTexture",N._matricesTexture,Ye),vt.setOptional(R,N,"batchingIdTexture"),vt.setValue(R,"batchingIdTexture",N._indirectTexture,Ye),vt.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&vt.setValue(R,"batchingColorTexture",N._colorsTexture,Ye));const Yt=k.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&oe.update(N,k,Nt),(Vt||ke.receiveShadow!==N.receiveShadow)&&(ke.receiveShadow=N.receiveShadow,vt.setValue(R,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(qt.envMap.value=ve,qt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&O.environment!==null&&(qt.envMapIntensity.value=O.environmentIntensity),Vt&&(vt.setValue(R,"toneMappingExposure",M.toneMappingExposure),ke.needsLights&&vn(qt,Rn),ae&&z.fog===!0&&te.refreshFogUniforms(qt,ae),te.refreshMaterialUniforms(qt,z,q,ce,o.state.transmissionRenderTarget[p.id]),Ua.upload(R,bn(ke),qt,Ye)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ua.upload(R,bn(ke),qt,Ye),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&vt.setValue(R,"center",N.center),vt.setValue(R,"modelViewMatrix",N.modelViewMatrix),vt.setValue(R,"normalMatrix",N.normalMatrix),vt.setValue(R,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ut=z.uniformsGroups;for(let Gt=0,wn=Ut.length;Gt<wn;Gt++){const kt=Ut[Gt];Xe.update(kt,Nt),Xe.bind(kt,Nt)}}return Nt}function vn(p,O){p.ambientLightColor.needsUpdate=O,p.lightProbe.needsUpdate=O,p.directionalLights.needsUpdate=O,p.directionalLightShadows.needsUpdate=O,p.pointLights.needsUpdate=O,p.pointLightShadows.needsUpdate=O,p.spotLights.needsUpdate=O,p.spotLightShadows.needsUpdate=O,p.rectAreaLights.needsUpdate=O,p.hemisphereLights.needsUpdate=O}function Vn(p){return p.isMeshLambertMaterial||p.isMeshToonMaterial||p.isMeshPhongMaterial||p.isMeshStandardMaterial||p.isShadowMaterial||p.isShaderMaterial&&p.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(p,O,k){const z=me.get(p);z.__autoAllocateDepthBuffer=p.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),me.get(p.texture).__webglTexture=O,me.get(p.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:k,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(p,O){const k=me.get(p);k.__webglFramebuffer=O,k.__useDefaultFramebuffer=O===void 0};const zn=R.createFramebuffer();this.setRenderTarget=function(p,O=0,k=0){V=p,A=O,F=k;let z=!0,N=null,ae=!1,de=!1;if(p){const ve=me.get(p);if(ve.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(R.FRAMEBUFFER,null),z=!1;else if(ve.__webglFramebuffer===void 0)Ye.setupRenderTarget(p);else if(ve.__hasExternalTextures)Ye.rebindTextures(p,me.get(p.texture).__webglTexture,me.get(p.depthTexture).__webglTexture);else if(p.depthBuffer){const Ce=p.depthTexture;if(ve.__boundDepthTexture!==Ce){if(Ce!==null&&me.has(Ce)&&(p.width!==Ce.image.width||p.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(p)}}const we=p.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(de=!0);const De=me.get(p).__webglFramebuffer;p.isWebGLCubeRenderTarget?(Array.isArray(De[O])?N=De[O][k]:N=De[O],ae=!0):p.samples>0&&Ye.useMultisampledRTT(p)===!1?N=me.get(p).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[k]:N=De,y.copy(p.viewport),G.copy(p.scissor),X=p.scissorTest}else y.copy(Ke).multiplyScalar(q).floor(),G.copy(ot).multiplyScalar(q).floor(),X=wt;if(k!==0&&(N=zn),Se.bindFramebuffer(R.FRAMEBUFFER,N)&&z&&Se.drawBuffers(p,N),Se.viewport(y),Se.scissor(G),Se.setScissorTest(X),ae){const ve=me.get(p.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,k)}else if(de){const ve=O;for(let we=0;we<p.textures.length;we++){const De=me.get(p.textures[we]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+we,De.__webglTexture,k,ve)}}else if(p!==null&&k!==0){const ve=me.get(p.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,ve.__webglTexture,k)}m=-1},this.readRenderTargetPixels=function(p,O,k,z,N,ae,de,xe=0){if(!(p&&p.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=me.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve){Se.bindFramebuffer(R.FRAMEBUFFER,ve);try{const we=p.textures[xe],De=we.format,Ce=we.type;if(!Ae.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ae.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=p.width-z&&k>=0&&k<=p.height-N&&(p.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xe),R.readPixels(O,k,z,N,Ne.convert(De),Ne.convert(Ce),ae))}finally{const we=V!==null?me.get(V).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(p,O,k,z,N,ae,de,xe=0){if(!(p&&p.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=me.get(p).__webglFramebuffer;if(p.isWebGLCubeRenderTarget&&de!==void 0&&(ve=ve[de]),ve)if(O>=0&&O<=p.width-z&&k>=0&&k<=p.height-N){Se.bindFramebuffer(R.FRAMEBUFFER,ve);const we=p.textures[xe],De=we.format,Ce=we.type;if(!Ae.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ae.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,$e),R.bufferData(R.PIXEL_PACK_BUFFER,ae.byteLength,R.STREAM_READ),p.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+xe),R.readPixels(O,k,z,N,Ne.convert(De),Ne.convert(Ce),0);const nt=V!==null?me.get(V).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,nt);const Tt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Tu(R,Tt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,$e),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ae),R.deleteBuffer($e),R.deleteSync(Tt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(p,O=null,k=0){const z=Math.pow(2,-k),N=Math.floor(p.image.width*z),ae=Math.floor(p.image.height*z),de=O!==null?O.x:0,xe=O!==null?O.y:0;Ye.setTexture2D(p,0),R.copyTexSubImage2D(R.TEXTURE_2D,k,0,0,de,xe,N,ae),Se.unbindTexture()};const Wn=R.createFramebuffer(),Xn=R.createFramebuffer();this.copyTextureToTexture=function(p,O,k=null,z=null,N=0,ae=null){ae===null&&(N!==0?(Br("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=N,N=0):ae=0);let de,xe,ve,we,De,Ce,$e,nt,Tt;const ft=p.isCompressedTexture?p.mipmaps[ae]:p.image;if(k!==null)de=k.max.x-k.min.x,xe=k.max.y-k.min.y,ve=k.isBox3?k.max.z-k.min.z:1,we=k.min.x,De=k.min.y,Ce=k.isBox3?k.min.z:0;else{const Yt=Math.pow(2,-N);de=Math.floor(ft.width*Yt),xe=Math.floor(ft.height*Yt),p.isDataArrayTexture?ve=ft.depth:p.isData3DTexture?ve=Math.floor(ft.depth*Yt):ve=1,we=0,De=0,Ce=0}z!==null?($e=z.x,nt=z.y,Tt=z.z):($e=0,nt=0,Tt=0);const Je=Ne.convert(O.format),ke=Ne.convert(O.type);let pt;O.isData3DTexture?(Ye.setTexture3D(O,0),pt=R.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ye.setTexture2DArray(O,0),pt=R.TEXTURE_2D_ARRAY):(Ye.setTexture2D(O,0),pt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,O.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=R.getParameter(R.UNPACK_ROW_LENGTH),Nt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),dn=R.getParameter(R.UNPACK_SKIP_PIXELS),Vt=R.getParameter(R.UNPACK_SKIP_ROWS),Rn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,ft.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,ft.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,we),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ce);const vt=p.isDataArrayTexture||p.isData3DTexture,qt=O.isDataArrayTexture||O.isData3DTexture;if(p.isDepthTexture){const Yt=me.get(p),Ut=me.get(O),Gt=me.get(Yt.__renderTarget),wn=me.get(Ut.__renderTarget);Se.bindFramebuffer(R.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,wn.__webglFramebuffer);for(let kt=0;kt<ve;kt++)vt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.get(p).__webglTexture,N,Ce+kt),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,me.get(O).__webglTexture,ae,Tt+kt)),R.blitFramebuffer(we,De,de,xe,$e,nt,de,xe,R.DEPTH_BUFFER_BIT,R.NEAREST);Se.bindFramebuffer(R.READ_FRAMEBUFFER,null),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||p.isRenderTargetTexture||me.has(p)){const Yt=me.get(p),Ut=me.get(O);Se.bindFramebuffer(R.READ_FRAMEBUFFER,Wn),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,Xn);for(let Gt=0;Gt<ve;Gt++)vt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Yt.__webglTexture,N,Ce+Gt):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Yt.__webglTexture,N),qt?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ut.__webglTexture,ae,Tt+Gt):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ut.__webglTexture,ae),N!==0?R.blitFramebuffer(we,De,de,xe,$e,nt,de,xe,R.COLOR_BUFFER_BIT,R.NEAREST):qt?R.copyTexSubImage3D(pt,ae,$e,nt,Tt+Gt,we,De,de,xe):R.copyTexSubImage2D(pt,ae,$e,nt,we,De,de,xe);Se.bindFramebuffer(R.READ_FRAMEBUFFER,null),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else qt?p.isDataTexture||p.isData3DTexture?R.texSubImage3D(pt,ae,$e,nt,Tt,de,xe,ve,Je,ke,ft.data):O.isCompressedArrayTexture?R.compressedTexSubImage3D(pt,ae,$e,nt,Tt,de,xe,ve,Je,ft.data):R.texSubImage3D(pt,ae,$e,nt,Tt,de,xe,ve,Je,ke,ft):p.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ae,$e,nt,de,xe,Je,ke,ft.data):p.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ae,$e,nt,ft.width,ft.height,Je,ft.data):R.texSubImage2D(R.TEXTURE_2D,ae,$e,nt,de,xe,Je,ke,ft);R.pixelStorei(R.UNPACK_ROW_LENGTH,Qe),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Nt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,dn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Vt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Rn),ae===0&&O.generateMipmaps&&R.generateMipmap(pt),Se.unbindTexture()},this.initRenderTarget=function(p){me.get(p).__webglFramebuffer===void 0&&Ye.setupRenderTarget(p)},this.initTexture=function(p){p.isCubeTexture?Ye.setTextureCube(p,0):p.isData3DTexture?Ye.setTexture3D(p,0):p.isDataArrayTexture||p.isCompressedArrayTexture?Ye.setTexture2DArray(p,0):Ye.setTexture2D(p,0),Se.unbindTexture()},this.resetState=function(){A=0,F=0,V=null,Se.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(n),t.unpackColorSpace=It._getUnpackColorSpace()}}class F_ extends Vd{constructor(n){super(n)}load(n,t,i,a){const r=this,c=new zd(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(n,function(f){try{t(r.parse(f))}catch(w){a?a(w):console.error(w),r.manager.itemError(n)}},i,a)}parse(n){function t(g){const v=new DataView(g),h=32/8*3+32/8*3*3+16/8,b=v.getUint32(80,!0);if(80+32/8+b*h===v.byteLength)return!0;const I=[115,111,108,105,100];for(let C=0;C<5;C++)if(i(I,v,C))return!1;return!0}function i(g,v,h){for(let b=0,T=g.length;b<T;b++)if(g[b]!==v.getUint8(h+b))return!1;return!0}function a(g){const v=new DataView(g),h=v.getUint32(80,!0);let b,T,I,C=!1,d,o,L,x,M;for(let y=0;y<70;y++)v.getUint32(y,!1)==1129270351&&v.getUint8(y+4)==82&&v.getUint8(y+5)==61&&(C=!0,d=new Float32Array(h*3*3),o=v.getUint8(y+6)/255,L=v.getUint8(y+7)/255,x=v.getUint8(y+8)/255,M=v.getUint8(y+9)/255);const D=84,A=50,F=new la,V=new Float32Array(h*3*3),m=new Float32Array(h*3*3),_=new Mt;for(let y=0;y<h;y++){const G=D+y*A,X=v.getFloat32(G,!0),j=v.getFloat32(G+4,!0),Z=v.getFloat32(G+8,!0);if(C){const Y=v.getUint16(G+48,!0);(Y&32768)===0?(b=(Y&31)/31,T=(Y>>5&31)/31,I=(Y>>10&31)/31):(b=o,T=L,I=x)}for(let Y=1;Y<=3;Y++){const ce=G+Y*12,q=y*3*3+(Y-1)*3;V[q]=v.getFloat32(ce,!0),V[q+1]=v.getFloat32(ce+4,!0),V[q+2]=v.getFloat32(ce+8,!0),m[q]=X,m[q+1]=j,m[q+2]=Z,C&&(_.setRGB(b,T,I,eo),d[q]=_.r,d[q+1]=_.g,d[q+2]=_.b)}}return F.setAttribute("position",new In(V,3)),F.setAttribute("normal",new In(m,3)),C&&(F.setAttribute("color",new In(d,3)),F.hasColors=!0,F.alpha=M),F}function r(g){const v=new la,h=/solid([\s\S]*?)endsolid/g,b=/facet([\s\S]*?)endfacet/g,T=/solid\s(.+)/;let I=0;const C=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,d=new RegExp("vertex"+C+C+C,"g"),o=new RegExp("normal"+C+C+C,"g"),L=[],x=[],M=[],D=new He;let A,F=0,V=0,m=0;for(;(A=h.exec(g))!==null;){V=m;const _=A[0],y=(A=T.exec(_))!==null?A[1]:"";for(M.push(y);(A=b.exec(_))!==null;){let j=0,Z=0;const Y=A[0];for(;(A=o.exec(Y))!==null;)D.x=parseFloat(A[1]),D.y=parseFloat(A[2]),D.z=parseFloat(A[3]),Z++;for(;(A=d.exec(Y))!==null;)L.push(parseFloat(A[1]),parseFloat(A[2]),parseFloat(A[3])),x.push(D.x,D.y,D.z),j++,m++;Z!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+I),j!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+I),I++}const G=V,X=m-V;v.userData.groupNames=M,v.addGroup(G,X,F),F++}return v.setAttribute("position",new Rs(L,3)),v.setAttribute("normal",new Rs(x,3)),v}function c(g){return typeof g!="string"?new TextDecoder().decode(g):g}function f(g){if(typeof g=="string"){const v=new Uint8Array(g.length);for(let h=0;h<g.length;h++)v[h]=g.charCodeAt(h)&255;return v.buffer||v}else return g}const w=f(n);return t(w)?a(w):r(c(n))}}const zc=3,O_="face-skin-v1",Ga=1e-6,B_=Object.freeze([10,338,297,332,284,251,389,356,454,323,361,288,397,365,379,378,400,377,152,148,176,149,150,136,172,58,132,93,234,127,162,21,54,103,67,109]),H_=Object.freeze([10,33,263,1,152,234,454,172,397]),Qs=Object.freeze({diamond:"diamante",heart:"coracao",oblong:"retangular",oval:"oval",round:"redondo",square:"quadrado",triangle:"triangular"});function On(e,n,t){return Math.max(n,Math.min(t,e))}function jr(e){if(!e.length)return 0;const n=[...e].sort((i,a)=>i-a),t=Math.floor(n.length/2);return n.length%2?n[t]:(n[t-1]+n[t])*.5}function Fa(e,n,t,i){const a=e?.[n];return a?{x:a.x*t,y:a.y*i}:null}function Wc(e,n,t){const i=Fa(e,33,n,t),a=Fa(e,263,n,t),r=Fa(e,152,n,t);if(!i||!a||!r)return null;const c=a.x-i.x,f=a.y-i.y,w=Math.hypot(c,f);if(w<Ga)return null;const g={x:c/w,y:f/w};let v={x:-g.y,y:g.x};const h={x:(i.x+a.x)*.5,y:(i.y+a.y)*.5},b={x:r.x-h.x,y:r.y-h.y};b.x*v.x+b.y*v.y<0&&(v={x:-v.x,y:-v.y});const T=C=>{const d=C.x-h.x,o=C.y-h.y;return{x:d*g.x+o*g.y,y:d*v.x+o*v.y}},I=C=>({x:h.x+C.x*g.x+C.y*v.x,y:h.y+C.x*g.y+C.y*v.y});return{origin:h,horizontal:g,vertical:v,eyeDistance:w,rollDegrees:Math.atan2(f,c)*180/Math.PI,project:T,unproject:I}}function nn(e,n,t,i,a){const r=Fa(n,t,i,a);return r?e.project(r):null}function Zr(e,n,t,i,a,r){const c=i.unproject({x:a,y:r}),f=Math.round(c.x),w=Math.round(c.y);return f<0||w<0||f>=n||w>=t?0:Number(e[w*n+f])||0}function Dr(e,n,t,i,a,r,c,f,w){const g=[],v=[];for(let h=-w;h<=w;h+=1){let b=Number.POSITIVE_INFINITY,T=Number.NEGATIVE_INFINITY;for(let I=Math.floor(r);I<=Math.ceil(c);I+=1)Zr(e,n,t,i,I,a+h)<f||(b=Math.min(b,I),T=Math.max(T,I));Number.isFinite(b)&&T>b&&(g.push(b),v.push(T))}return g.length?{left:jr(g),right:jr(v)}:null}function G_(e,n){const t=[];for(let i=0;i<e.length;i+=1){const a=e[i],r=e[(i+1)%e.length];if(!a||!r||!(a.y<=n&&n<r.y||r.y<=n&&n<a.y))continue;const c=(n-a.y)/(r.y-a.y);t.push(a.x+c*(r.x-a.x))}return t.length<2?null:{left:Math.min(...t),right:Math.max(...t)}}function Js(e,n,t,i){const a=G_(n,t);if(!e||!a)return e;const r=i*.055;return{left:Math.max(e.left,a.left-r),right:Math.min(e.right,a.right+r)}}function ec({mask:e,width:n,height:t,frame:i,centerX:a,radius:r,yMinimum:c,yMaximum:f,threshold:w,findTop:g}){const v=[];for(let h=Math.round(a-r);h<=Math.round(a+r);h+=1){let b=null;if(g){for(let T=Math.floor(c);T<=Math.ceil(f);T+=1)if(Zr(e,n,t,i,h,T)>=w){b=T;break}}else for(let T=Math.ceil(f);T>=Math.floor(c);T-=1)if(Zr(e,n,t,i,h,T)>=w){b=T;break}b!=null&&v.push(b)}return v.length?jr(v):null}function k_(e,n,t){const i={x:e.x-n.x,y:e.y-n.y},a={x:t.x-n.x,y:t.y-n.y},r=Math.hypot(i.x,i.y)*Math.hypot(a.x,a.y);if(r<Ga)return 0;const c=On((i.x*a.x+i.y*a.y)/r,-1,1);return Math.acos(c)*180/Math.PI}function ei(e,n,t){return Math.max(0,1-Math.abs(e-n)/t)}function ti(e,n,t){return On((n-e)/t,0,1)}function xi(e,n,t){return On((e-n)/t,0,1)}function V_(e,n){const t=e.lengthToCheek,i=e.foreheadToCheek,a=e.jawToCheek,r=e.jawToForehead,c=e.chinAngleDegrees,f={oval:.4*ei(t,1.38,.28)+.3*ei(i,.91,.18)+.3*ei(a,.82,.18),round:.45*ti(t,1.24,.25)+.3*ei(i,.94,.16)+.25*xi(c,105,35),square:.35*ti(t,1.34,.24)+.35*ei(a,.94,.15)+.3*ti(c,105,35),oblong:.6*xi(t,1.38,.28)+.2*ei(i,.94,.16)+.2*ei(a,.88,.16),heart:.35*xi(i,.94,.16)+.4*ti(r,.88,.2)+.25*ti(c,100,35),diamond:.45*ti(i,.9,.18)+.4*ti(a,.84,.18)+.15*xi(t,1.25,.28),triangle:.65*xi(r,1.02,.22)+.35*xi(a,.9,.16)},w=Object.fromEntries(Object.entries(f).map(([C,d])=>[C,Math.max(d,.001)**2])),g=Object.values(w).reduce((C,d)=>C+d,0),v=Object.fromEntries(Object.entries(w).map(([C,d])=>[C,d/g])),h=Object.entries(v).sort((C,d)=>d[1]-C[1]),[b,T]=h[0],I=T-(h[1]?.[1]||0);return{label:b,appLabel:Qs[b]||"indefinido",scores:f,probabilities:v,appProbabilities:Object.fromEntries(Object.entries(v).map(([C,d])=>[Qs[C],d])),confidence:On((T*.7+I*.3)*n,0,1)}}function Xc(e,n,t=null){const i=Number(n?.width)||0,a=Number(n?.height)||0,r=Wc(e,i,a);if(!r||e.length<=454)return{eligible:!1,poseQuality:0,motion:Number.POSITIVE_INFINITY};const c=nn(r,e,1,i,a),f=nn(r,e,152,i,a),w=nn(r,e,234,i,a),g=nn(r,e,454,i,a),v=Math.abs(g.x-w.x),h=Math.abs(c.x)/Math.max(r.eyeDistance,Ga),b=v/Math.max(1,Math.min(i,a)),T=f.y/Math.max(v,Ga),I=1-On((Math.abs(r.rollDegrees)-2)/8,0,1),C=1-On((h-.035)/.15,0,1),d=1-On(Math.abs(T-.82)/.42,0,1),o=On(.38*C+.32*I+.3*d,0,1);let L=0;if(t?.length>454){let x=0,M=0;for(const D of H_){const A=e[D],F=t[D];!A||!F||(x+=(A.x-F.x)**2+(A.y-F.y)**2,M+=1)}L=M?Math.sqrt(x/M):Number.POSITIVE_INFINITY}return{eligible:o>=.72&&Math.abs(r.rollDegrees)<=9&&h<=.16&&b>=.24&&T>=.42&&T<=1.25&&(!t||L<=.008),poseQuality:o,motion:L,rollDegrees:r.rollDegrees,yawProxy:h,faceScale:b,eyeToChin:T}}function qc({landmarks:e,faceSkinMask:n,width:t,height:i,threshold:a=.35,poseQuality:r=1}){if(!Array.isArray(e)||e.length<=454)throw new Error("Landmarks insuficientes para medir o rosto.");if(!n||n.length!==t*i)throw new Error("A máscara face-skin não corresponde às dimensões informadas.");const c=Wc(e,t,i);if(!c)throw new Error("Não foi possível construir o sistema local do rosto.");const f=B_.map(Be=>nn(c,e,Be,t,i)),w=f.map(Be=>Be.x),g=Math.max(...w)-Math.min(...w),v=nn(c,e,1,t,i),h=nn(c,e,152,t,i),b=nn(c,e,10,t,i),T=(v.x+h.x)*.5,I=Math.max(2,Math.round(g*.035)),C=ec({mask:n,width:t,height:i,frame:c,centerX:T,radius:I,yMinimum:-g*.62,yMaximum:b.y+g*.12,threshold:a,findTop:!0}),d=ec({mask:n,width:t,height:i,frame:c,centerX:h.x,radius:I,yMinimum:h.y-g*.12,yMaximum:h.y+g*.14,threshold:a,findTop:!1});if(C==null||d==null||d<=C)throw new Error("A máscara não contém extremos válidos de testa e queixo.");const o=d-C,L=Math.max(1,Math.round(o*.009)),x=nn(c,e,55,t,i),M=nn(c,e,285,t,i),D=nn(c,e,93,t,i),A=nn(c,e,323,t,i),F=nn(c,e,172,t,i),V=nn(c,e,397,t,i),m=(x.y+M.y)*.5,_={forehead:C+(m-C)*.48,cheek:(D.y+A.y)*.5,jaw:(F.y+V.y)*.5},y=T-g*.68,G=T+g*.68,X=Dr(n,t,i,c,_.forehead,y,G,a,L),j=Js(Dr(n,t,i,c,_.cheek,y,G,a,L),f,_.cheek,g),Z=Js(Dr(n,t,i,c,_.jaw,y,G,a,L),f,_.jaw,g);if(!X||!j||!Z)throw new Error("Não foi possível medir testa, maçãs do rosto e mandíbula.");const Y={forehead:X.right-X.left,cheek:j.right-j.left,jaw:Z.right-Z.left};if(Math.min(...Object.values(Y))<=0)throw new Error("A segmentação produziu larguras faciais inválidas.");const ce=k_({x:Z.left,y:_.jaw},{x:h.x,y:d},{x:Z.right,y:_.jaw}),q={lengthToCheek:o/Y.cheek,foreheadToCheek:Y.forehead/Y.cheek,jawToCheek:Y.jaw/Y.cheek,jawToForehead:Y.jaw/Y.forehead,chinAngleDegrees:ce};return{...V_(q,r),version:O_,poseQuality:r,rollDegrees:c.rollDegrees,measurements:{faceLength:o,...Y},ratios:q,levels:_,points:{hairline:c.unproject({x:T,y:C}),chin:c.unproject({x:h.x,y:d}),foreheadLeft:c.unproject({x:X.left,y:_.forehead}),foreheadRight:c.unproject({x:X.right,y:_.forehead}),cheekLeft:c.unproject({x:j.left,y:_.cheek}),cheekRight:c.unproject({x:j.right,y:_.cheek}),jawLeft:c.unproject({x:Z.left,y:_.jaw}),jawRight:c.unproject({x:Z.right,y:_.jaw})}}}const z_="/mediapipe/wasm",W_="/face_landmarker.task",X_="/selfie_multiclass_256x256.tflite",q_=512;function Y_(e,n){const t={diamante:"quadrado",retangular:"oval"},i={};for(const[c,f]of Object.entries(e||{})){const w=Object.prototype.hasOwnProperty.call(t,c)?t[c]:c;Object.prototype.hasOwnProperty.call(n,w)&&(i[w]=(i[w]||0)+f)}const a=Object.values(i).reduce((c,f)=>c+f,0);if(!a)return{};const r={};for(const c of Object.keys(n))r[c]=Math.round((i[c]||0)/a*100);return r}function Yc(e,n,t,i,a){const r=document.createElement("canvas");r.width=i,r.height=a;const c=r.getContext("2d");c.drawImage(e,0,0,i,a);const f=document.createElement("canvas");f.width=i,f.height=a;const w=f.getContext("2d"),g=w.createImageData(i,a),v=Object.values(n.points),h=Math.max(0,Math.floor(Math.min(...v.map(x=>x.x))-i*.05)),b=Math.min(i-1,Math.ceil(Math.max(...v.map(x=>x.x))+i*.05)),T=Math.max(0,Math.floor(n.points.hairline.y-a*.025)),I=Math.min(a-1,Math.ceil(n.points.chin.y+a*.025)),C=(x,M)=>{for(let D=-1;D<=1;D+=1){const A=Math.round(x+D),F=Math.round(M);if(A<0||A>=i||F<0||F>=a)continue;const V=(F*i+A)*4;g.data[V]=24,g.data[V+1]=235,g.data[V+2]=226,g.data[V+3]=245}};for(let x=T;x<=I;x+=1){let M=-1,D=-1;for(let A=h;A<=b;A+=1)t[x*i+A]<.35||(M<0&&(M=A),D=A);M>=0&&D>M&&(C(M,x),C(D,x))}for(let x=h;x<=b;x+=1){let M=-1,D=-1;for(let A=T;A<=I;A+=1)t[A*i+x]<.35||(M<0&&(M=A),D=A);M>=0&&D>M&&(C(x,M),C(x,D))}w.putImageData(g,0,0),c.drawImage(f,0,0);const d=Math.max(2,i/220),o=(x,M,D)=>{c.save(),c.strokeStyle="rgba(0, 0, 0, 0.72)",c.lineWidth=d+3,c.beginPath(),c.moveTo(x.x,x.y),c.lineTo(M.x,M.y),c.stroke(),c.strokeStyle=D,c.lineWidth=d,c.beginPath(),c.moveTo(x.x,x.y),c.lineTo(M.x,M.y),c.stroke(),c.fillStyle=D;for(const A of[x,M])c.beginPath(),c.arc(A.x,A.y,d*1.8,0,Math.PI*2),c.fill();c.restore()},L=n.points;return o(L.hairline,L.chin,"#ffd429"),o(L.foreheadLeft,L.foreheadRight,"#ef5bff"),o(L.cheekLeft,L.cheekRight,"#39e36d"),o(L.jawLeft,L.jawRight,"#ff9b35"),c.save(),c.strokeStyle="#47a7ff",c.lineWidth=d,c.beginPath(),c.moveTo(L.jawLeft.x,L.jawLeft.y),c.lineTo(L.chin.x,L.chin.y),c.lineTo(L.jawRight.x,L.jawRight.y),c.stroke(),c.restore(),r.toDataURL("image/jpeg",.93)}function K_(e){return new Promise((n,t)=>{const i=new Image;i.onload=()=>n(i),i.onerror=()=>t(new Error("Não foi possível ler a foto.")),i.src=e})}async function $_(e){const n=await K_(e),t=Math.min(1,q_/Math.max(n.width,n.height)),i=document.createElement("canvas");return i.width=Math.max(1,Math.round(n.width*t)),i.height=Math.max(1,Math.round(n.height*t)),i.getContext("2d",{alpha:!1}).drawImage(n,0,0,i.width,i.height),i}async function j_(e,n){const t=await Fc.createFromOptions(e,{baseOptions:{modelAssetPath:W_,delegate:"CPU"},runningMode:"IMAGE",numFaces:1});try{return t.detect(n).faceLandmarks?.[0]||null}finally{t.close()}}async function Z_(e,n){const t=await Oc.createFromOptions(e,{baseOptions:{modelAssetPath:X_,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1});try{let i=null;return t.segment(n,a=>{const r=a.confidenceMasks?.[zc];r&&(i={dados:r.getAsFloat32Array(),width:r.width,height:r.height}),a.close?.()}),i}finally{t.close()}}async function Yg(e){const n=await $_(e),t=await Kr.forVisionTasks(z_),i=await j_(t,n);if(!i)throw new Error("Nenhum rosto encontrado na foto.");const a=Xc(i,{width:n.width,height:n.height}),r=await Z_(t,n);if(!r)throw new Error("O segmentador não retornou a classe face-skin.");const c=qc({landmarks:i,faceSkinMask:r.dados,width:r.width,height:r.height,threshold:.35,poseQuality:a.poseQuality});return{ready:!0,image:Yc(n,c,r.dados,r.width,r.height),details:c}}const Q_={redondo:{x:21.2,y:27.6,w:257.7,h:364.9},quadrado:{x:22.8,y:19,w:254.5,h:382},coracao:{x:10.1,y:14.5,w:279.8,h:391},triangular:{x:28.7,y:10.3,w:242.5,h:399.4},oval:{x:19.2,y:13.7,w:261.6,h:392.6}},J_={redondo:"M154.7,27.6c41,0,95.2,20.4,112.7,77.9c21,69.1,9.3,153.6-3,190.6c-11.5,34.6-62.2,96.4-122,96.4c-27.9,0-69.5-19-109.8-109.7c-11.4-25.6-21-128.4,6.3-195.2C62,30.8,130.2,27.9,143.7,27.9c0.8,0,1.3,0,1.4,0l0.6,0l0.6,0C148.9,27.7,151.7,27.6,154.7,27.6z",quadrado:"M264.7,94.6C249.3,32.9,176.4,19,152,19l-1.1,0v0c-0.1,0-0.3,0-0.4,0l-0.5,0l-0.5,0c-0.1,0-0.3,0-0.4,0v0l-1.1,0c-24.3,0-97.2,13.9-112.6,75.6c-15.5,62-18.1,176.7,0.3,213.6c18.2,36.4,73.9,89.5,76.2,91.6l1.2,1.1l36,0.1v0l1,0l1,0v0l36-0.1l1.2-1.1c2.4-2.1,58-55.1,76.2-91.6C282.8,271.3,280.2,156.6,264.7,94.6z",coracao:"M289.8,214.2c-5.9-82.9-9.5-133-34.3-159.2C232.1,30.3,189.1,13.9,150,14.5C110.9,13.9,67.9,30.3,44.5,55c-24.8,26.2-28.4,76.2-34.3,159.2l-0.1,0.9l0.3,0.9C42.2,305.7,98.9,407,150,405.5c51.1,1.5,107.8-99.9,139.6-189.5l0.3-0.9L289.8,214.2z",triangular:"M264.7,101C255,52.4,204.6,12.7,151,10.4v-0.1c-0.3,0-0.7,0-1,0c-0.3,0-0.7,0-1,0v0.1C95.4,12.7,45,52.4,35.3,101c-7.4,37-6.8,100.2-6.3,150.9c0.1,11.9,0.2,23.2,0.2,33.5v0.6l0.2,0.6c14.3,48.7,74.8,115.3,119.6,122.8v0.3c0.3,0,0.7-0.1,1-0.2c0.3,0,0.7,0.1,1,0.2v-0.3c44.8-7.5,105.3-74.1,119.6-122.8l0.2-0.6v-0.6c0-10.2,0.1-21.5,0.2-33.5C271.5,201.2,272.1,138.1,264.7,101z",oval:"M280.7,173.8c-13.1-65.3-32.8-109.4-60.4-134.8c-24.7-22.7-51.4-25.6-70.3-25.3c-18.9-0.3-45.6,2.6-70.3,25.3c-27.6,25.3-47.3,69.4-60.4,134.8l-0.1,0.5l0,0.5c1.5,68.2,15.3,97.7,36.1,142.3l0.4,0.9c26.2,56.1,60,88.3,92.8,88.3c0.5,0,1,0,1.5,0c0.5,0,1,0,1.5,0c32.8,0,66.6-32.2,92.8-88.3l0.4-0.9c20.8-44.6,34.6-74.1,36.1-142.3l0-0.5L280.7,173.8z"},Ir={};function eg(e){const n=J_[e];return n?(Ir[e]||(Ir[e]=new Path2D(n)),Ir[e]):null}function gt(e,n=0){const t=Number(e);return Number.isFinite(t)?t:n}function tg({userAgent:e="",platform:n="",maxTouchPoints:t=0}={}){const i=String(e||""),a=String(n||""),r=Math.max(0,gt(t)),c=/Android|iPhone|iPad|iPod/i.test(i),f=a==="MacIntel"&&r>1;return{isPhysicalMobile:c||f,isIPadLike:/iPad/i.test(i)||f,reason:f?"ipad-touch-desktop-identity":c?"mobile-user-agent":"desktop"}}function ng({viewportWidth:e=0,viewportHeight:n=0,orientationType:t=""}={}){const i=gt(e),a=gt(n),r=String(t||"").toLowerCase();return(i>0&&a>0&&i!==a?i>a:r.startsWith("landscape"))?{key:"landscape",width:1280,height:720,aspectRatio:16/9}:{key:"portrait",width:720,height:1280,aspectRatio:9/16}}function ig({isPhysicalMobile:e=!1,viewportWidth:n=0,viewportHeight:t=0,rawContentRotation:i=0,deviceGamma:a=null,deviceOrientationAgeMs:r=Number.POSITIVE_INFINITY,deviceLandscapeStableMs:c=0,sensorFreshForMs:f=2500,sensorMinimumStableMs:w=600}={}){const g=gt(n),v=gt(t),h=g>0&&v>0&&g>v,b=g>0&&v>0&&v>g,T=Hn(i),I=Math.abs(T)===90,C=Number(a),d=Number.isFinite(C)&&Number.isFinite(Number(r))&&Number(r)>=0&&Number(r)<=Math.max(0,gt(f,2500)),o=d&&Math.abs(C)>=45&&gt(c)>=Math.max(0,gt(w,600)),L=I||o;return{mismatch:!!(e&&b&&L),viewportLandscape:h,viewportPortrait:b,physicalLandscape:L,cameraLandscape:I,sensorLandscape:o,sensorFresh:d,evidence:I&&o?"camera+sensor":I?"camera":o?"sensor":"none",rawContentRotation:T}}function io(e){let n=gt(e);for(;n>90;)n-=180;for(;n<-90;)n+=180;return n}function Qr(e){const n=e?.[33],t=e?.[263];if(!n||!t)return null;const i=gt(t.x,NaN)-gt(n.x,NaN),a=gt(t.y,NaN)-gt(n.y,NaN);return!Number.isFinite(i)||!Number.isFinite(a)||Math.hypot(i,a)<1e-6?null:io(Math.atan2(a,i)*180/Math.PI)}function tc(e,n=65){const t=Qr(e),i=e?.[33],a=e?.[263],r=e?.[1];if(!Number.isFinite(t)||!r)return 0;const c=(gt(i.x)+gt(a.x))/2,f=(gt(i.y)+gt(a.y))/2,w=gt(r.x,NaN)-c,g=gt(r.y,NaN)-f;if(!Number.isFinite(w)||!Number.isFinite(g))return 0;const v=Math.hypot(gt(a.x)-gt(i.x),gt(a.y)-gt(i.y));return Math.abs(t)>=n?-w>=w?-90:90:g<-Math.max(v*.08,.005)?180:0}function nc({calculatedRotation:e=0,eyeLineAngleDeg:n=null,activeRotation:t=null,initialFlatMaximumDeg:i=28,initialQuarterMinimumDeg:a=78,switchToFlatMaximumDeg:r=30,switchToQuarterMinimumDeg:c=78}={}){const f=Number(n);if(!Number.isFinite(f))return null;const w=Hn(e),g=Number(t),h=t!=null&&t!==""&&[0,-90,90,180,-180].includes(g)?Hn(g):null,b=Math.abs(io(f)),T=Math.abs(w)===90;return h===null?(T?b>=gt(a,78):b<=gt(i,28))?w:null:(Math.abs(h)===90?T||b<=gt(r,30):!T||b>=gt(c,78))?w:null}function ag(e,{minimumSamples:n=6,requiredRatio:t=.75}={}){const i=(Array.isArray(e)?e:[]).map(Number).filter(Number.isFinite);if(i.length<n)return null;const a=i.reduce((c,f)=>{const w=f===-90||f===90||Math.abs(f)===180?f:0,g=Math.abs(w)===180?180:w;return c[g]+=1,c},{"-90":0,0:0,90:0,180:0}),r=[0,-90,90,180].sort((c,f)=>a[f]-a[c])[0];return a[r]/i.length>=t?r:null}function Hn(e){const n=Number(e);return Math.abs(n)===180?180:n===-90||n===90?n:0}function La(e,n=!1){const t=Hn(e);return n&&Math.abs(t)===90?-t:t}function rg(e,n=0){return io(gt(e)-Hn(n))}function og({initialRotation:e=0,minimumSamples:n=14,minimumStableMs:t=650,requiredRatio:i=.82,maximumSamples:a=24,maximumGapMs:r=350,cooldownMs:c=1500,reportCandidateAfterSamples:f=5,rejectionSamples:w=4}={}){let g=Hn(e),v=null,h=[],b=!1,T=0,I=Number.NEGATIVE_INFINITY,C=Number.NEGATIVE_INFINITY;function d(){v=null,h=[],b=!1,T=0}function o(L){const x=h.filter(A=>A.rotation===v),M=x.length>1?L-x[0].at:0,D=h.length?x.length/h.length:0;return{candidateRotation:v,sampleCount:x.length,windowSamples:h.length,stableMs:Math.max(0,M),confidence:D}}return{reset(L=g,x=Number.NEGATIVE_INFINITY){return g=Hn(L),I=Number(x),d(),g},observe(L,x=performance.now()){const M=Number.isFinite(Number(x))?Number(x):0,D=Hn(L);let A=null;if(M-I>r&&v!==null){const G=o(I);G.sampleCount>=f&&(A=G),d()}if(I=M,D===g){if(v===null)return{changed:!1,candidateStarted:!1,rejected:A,activeRotation:g};h.push({rotation:D,at:M}),h=h.slice(-a),T+=1;const G=o(M);return T>=w&&(G.sampleCount>=f&&(A=G),d()),{changed:!1,candidateStarted:!1,rejected:A,activeRotation:g,...A?{}:G}}if(v!==D){if(v!==null){const G=o(M);G.sampleCount>=f&&(A=G)}v=D,h=[],b=!1}T=0,h.push({rotation:D,at:M}),h=h.slice(-a);const F=o(M),V=!b&&F.sampleCount>=f;V&&(b=!0);const m=F.sampleCount>=n&&F.stableMs>=t&&F.confidence>=i,_=M-C>=c;if(!m||!_)return{changed:!1,candidateStarted:V,rejected:A,activeRotation:g,...F};const y=g;return g=v,C=M,d(),{changed:!0,candidateStarted:V,rejected:A,previousRotation:y,activeRotation:g,...F}},getState(){return{activeRotation:g,candidateRotation:v,candidateSamples:h.length,lastAppliedAt:C}}}}function ic(e){const n=Math.round(Number(e)||0);return Math.max(0,n)}function Gn(e){const n=Number(e);return n===90||n===-90?n:Math.abs(n)===180?180:0}function ac(e,n,t=0){const i=ic(e),a=ic(n),r=Gn(t),c=Math.abs(r)===90;return{width:c?a:i,height:c?i:a,rotationDeg:r}}function sg(e,n=0){const t=Number(e?.x)||0,i=Number(e?.y)||0;switch(Gn(n)){case 90:return{...e,x:i,y:1-t};case-90:return{...e,x:1-i,y:t};case 180:return{...e,x:1-t,y:1-i};default:return{...e,x:t,y:i}}}function cg(e,n=0){if(!Array.isArray(e))return[];const t=Gn(n);return t?e.map(i=>sg(i,t)):e}const Jr=Object.freeze([0,90,-90,180]);function rc(e){const n=Number(e);return Number.isFinite(n)&&n>0?n:0}function oc(e,n,t=.08){const i=rc(e),a=rc(n);if(!i||!a)return"unknown";const r=i/a;return Math.abs(r-1)<=Math.max(0,Number(t)||0)?"square":r>1?"landscape":"portrait"}function Kc(e){return e.reduce((n,t)=>{const i=Gn(t);return n.includes(i)||n.push(i),n},[])}function lg({sourceWidth:e=0,sourceHeight:n=0,viewportWidth:t=0,viewportHeight:i=0,preferredRotation:a=null}={}){const r=oc(e,n),c=oc(t,i),g=!["unknown","square"].includes(r)&&!["unknown","square"].includes(c)&&r!==c?[90,-90,0,180]:[0,180,90,-90],v=a!=null;return Kc([...v?[a]:[],...g,...Jr])}function ug({minimumFramesWithoutFace:e=24,minimumMsWithoutFace:n=700,maximumMsUnconfirmedFace:t=1800,retryPauseMs:i=3500,maximumTotalMs:a=0}={}){const r=Math.max(1,Number(e)||1),c=Math.max(0,Number(n)||0),f=Math.max(c,Number(t)||0),w=Math.max(c,Number(i)||0),g=Math.max(0,Number(a)||0);let v=null;function h(x={}){return v?{active:v.active,confirmed:v.confirmed,phase:v.phase,candidates:[...v.candidates],candidateIndex:v.candidateIndex,candidateRotation:v.candidates[v.candidateIndex],round:v.round,...x}:{active:!1,phase:"idle",...x}}function b({candidates:x=Jr,processedFrames:M=0,now:D=0}={}){return v={active:!0,confirmed:!1,phase:"probing",candidates:Kc([...Array.isArray(x)?x:[],...Jr]),candidateIndex:0,candidateStartedFrame:Number(M)||0,candidateStartedAt:Number(D)||0,startedAt:Number(D)||0,lastFaceAt:Number.NEGATIVE_INFINITY,round:0},h({changed:!0,reason:"started"})}function T(x,M){if(!v?.active||!g)return null;const D=M-v.startedAt;return D<g?null:(v.active=!1,v.confirmed=!1,v.phase="fallback",v.candidateIndex=0,v.candidateStartedFrame=x,v.candidateStartedAt=M,h({changed:!0,fallback:!0,reason:"time_budget",elapsedTotalMs:D}))}function I({currentFrame:x,currentTime:M,reason:D,elapsedMs:A}){const F=v.candidateIndex>=v.candidates.length-1;return F?(v.round+=1,v.candidateIndex=0):v.candidateIndex+=1,v.candidateStartedFrame=x,v.candidateStartedAt=M,v.lastFaceAt=Number.NEGATIVE_INFINITY,h({changed:!0,reason:F?"retry_round":D,elapsedMs:A})}function C({processedFrames:x=0,now:M=0}={}){if(!v?.active)return h();const D=Number(x)||0,A=Number(M)||0,F=T(D,A);if(F)return F;const V=A-v.candidateStartedAt,m=D-v.candidateStartedFrame;return v.lastFaceAt=A,m>=r&&V>=f?I({currentFrame:D,currentTime:A,reason:"face_unconfirmed",elapsedMs:V}):h({faceObserved:!0})}function d({processedFrames:x=0,now:M=0}={}){if(!v?.active)return h();const D=Number(x)||0,A=Number(M)||0,F=T(D,A);if(F)return F;const V=D-v.candidateStartedFrame,m=A-v.candidateStartedAt,_=A-v.lastFaceAt<c,G=v.candidateIndex>=v.candidates.length-1?w:c;return _||V<r||m<G?h({changed:!1,framesWithoutFace:V,elapsedMs:m}):I({currentFrame:D,currentTime:A,reason:"no_face",elapsedMs:m})}function o(x){return v?(v.active=!1,v.confirmed=!0,v.phase="locked",h({changed:!1,rotation:Gn(x)})):{active:!1,confirmed:!0,phase:"locked",rotation:Gn(x)}}function L(){v=null}return{reset:b,observeFace:C,observeNoFace:d,confirm:o,stop:L,snapshot:h}}function dg(e){const n=Number(e);return Number.isFinite(n)?Math.max(0,n):0}function Nr(e=[],n=0){return e.map((i,a)=>({rotation:Gn(i?.rotation),score:dg(i?.score),detections:Math.max(0,Number(i?.detections)||0),index:a})).filter(i=>i.detections>0).sort((i,a)=>a.detections-i.detections||a.score-i.score||i.index-a.index)[0]||{rotation:Gn(n),score:0,detections:0,index:-1}}function Fn(e){const n=Number(e);return Number.isFinite(n)?n:0}function fg({stabilityMs:e=1200,minimumSamples:n=4,dimensionTolerancePx:t=3,cooldownMs:i=2500}={}){const a=Math.max(0,Fn(e)),r=Math.max(1,Fn(n)),c=Math.max(0,Fn(t)),f=Math.max(0,Fn(i));let w="",g=null,v=Number.NEGATIVE_INFINITY;function h(C=""){w=String(C||""),g=null,v=Number.NEGATIVE_INFINITY}function b(C,d=0){w=String(C||""),g=null,v=Fn(d)+f}function T({key:C="",width:d=0,height:o=0,now:L=0}={}){const x=String(C||""),M=Fn(d),D=Fn(o),A=Fn(L);if(!x||x===w)return g=null,{confirmed:!1,pending:!1,reason:"active_orientation"};g?.key===x&&Math.abs(g.width-M)<=c&&Math.abs(g.height-D)<=c?(g.width=M,g.height=D,g.samples+=1):g={key:x,width:M,height:D,firstSeenAt:A,samples:1};const V=Math.max(0,A-g.firstSeenAt),m={key:g.key,width:g.width,height:g.height,samples:g.samples,stableMs:V,confirmed:!1,pending:!0};return A<v?{...m,reason:"restart_cooldown"}:g.samples<r||V<a?{...m,reason:"collecting_stability"}:{...m,confirmed:!0,pending:!1,reason:"stable_viewport"}}function I(){return{activeKey:w,candidate:g?{...g}:null,cooldownUntil:v}}return{reset:h,confirm:b,observe:T,snapshot:I}}function ka(e,n=0){const t=Number(e);return Number.isFinite(t)?t:n}function Ln(e,n,t,i){const a=e?.[n];return a?{x:ka(a.x,.5)*t,y:ka(a.y,.5)*i}:null}function pg(e,n){const t=Math.hypot(e,n);return!Number.isFinite(t)||t<1e-6?null:{x:e/t,y:n/t}}function hg(e,n,t,i,a){return{x:e.x+n.x*i+t.x*a,y:e.y+n.y*i+t.y*a}}function mg(e,n,t){const i=Math.max(1,ka(n,1)),a=Math.max(1,ka(t,1)),r=Ln(e,33,i,a),c=Ln(e,263,i,a),f=Ln(e,152,i,a);if(!r||!c||!f)return null;const w={x:(r.x+c.x)/2,y:(r.y+c.y)/2},g=pg(c.x-r.x,c.y-r.y);if(!g)return null;let v={x:-g.y,y:g.x};const h={x:f.x-w.x,y:f.y-w.y};v.x*h.x+v.y*h.y<0&&(v={x:-v.x,y:-v.y});const b=T=>({horizontal:(T.x-w.x)*g.x+(T.y-w.y)*g.y,vertical:(T.x-w.x)*v.x+(T.y-w.y)*v.y});return{width:i,height:a,origin:w,horizontal:g,vertical:v,horizontalAngleRad:Math.atan2(g.y,g.x),project:b,pointAt:(T,I)=>hg(w,g,v,T,I)}}function sc(e,n,t,{sideScale:i=1.12,sidePaddingPx:a=24,hairlineLift:r=.4}={}){const c=mg(e,n,t);if(!c)return null;const f=Ln(e,10,c.width,c.height),g=[46,53,52,65,55,276,283,282,295,285].map(X=>Ln(e,X,c.width,c.height)),v=Ln(e,2,c.width,c.height),h=Ln(e,152,c.width,c.height),b=Ln(e,127,c.width,c.height),T=Ln(e,356,c.width,c.height);if(!f||g.some(X=>!X)||!v||!h)return null;const I=c.project(f),C=g.map(X=>c.project(X).vertical).reduce((X,j)=>X+j,0)/g.length,d=c.project(v),o=c.project(h),x=[I.vertical-Math.max(0,C-I.vertical)*r,C,d.vertical,o.vertical],M=[x[1]-x[0],x[2]-x[1],x[3]-x[2]],D=M.reduce((X,j)=>X+j,0);if(!M.every(X=>Number.isFinite(X)&&X>0)||D<=0)return null;const A=[b,T].filter(Boolean).map(X=>c.project(X).horizontal),F=Math.max(40,Math.hypot(T?.x-b?.x||c.width*.3,T?.y-b?.y||0)/2),V=A.length?Math.min(...A):-F,m=A.length?Math.max(...A):F,_=Math.max(Math.abs(V),Math.abs(m))*i+a,y=-_,G=_;return{frame:c,levels:x,segments:M,percentages:M.map(X=>X/D*100),midLevels:[(x[0]+x[1])/2,(x[1]+x[2])/2,(x[2]+x[3])/2],horizontalStart:y,horizontalEnd:G,lines:x.map(X=>({start:c.pointAt(y,X),end:c.pointAt(G,X)}))}}const _g={key:0,class:"orientation-gate",role:"alert","aria-live":"assertive"},gg={class:"orientation-gate__card"},vg={key:1,class:"orientation-gate__hint"},Eg={key:0,class:"camera-adjusting",role:"status","aria-live":"polite"},Sg={key:0,class:"ui"},Mg={class:"metrics"},cc=30,xg=42,Tg=24,Ag=900,Ur="__optifaceLandscapeLockOwned",Da="/face_landmarker.task",ea="/mediapipe/wasm",lc="/selfie_multiclass_256x256.tflite",bg=15e3,uc=8,Rg=512,Fr=10,dc=468,wg=.84,Cg=.14,yg=.032,Pg=.105,fc=.08,pc=.42,hc=8,Lg=24,Dg=.38,Ig=65,mc="/models",_c="/vendor/face-api.min.js",gc=8e3,Or=12e3,Ng=6e4,Ug=1800,Fg=450,Ia=160,vc=.5,Og=3500,Bg=900,Hg=60,Gg=1.25,ta="/models3d/wrap.stl",kg={__name:"VideoRA",props:{initialModel:{type:String,default:"wrap"},initialColor:{type:[String,Number],default:"#000000"},anchorUpperIdx:{type:Number,default:9},anchorLowerIdx:{type:Number,default:1},anchorBlendT:{type:Number,default:.35},smoothing:{type:Number,default:1},anchorFracX:{type:Number,default:0},anchorFracY:{type:Number,default:0},anchorFracZ:{type:Number,default:0},localOffXFrac:{type:Number,default:0},localOffYFrac:{type:Number,default:0},localOffZFrac:{type:Number,default:0},rotOffsetDeg:{type:Object,default:()=>({yaw:0,pitch:0,roll:0})},stlPreRotateDeg:{type:Object,default:()=>({x:0,y:0,z:0})},initialDepthOffset:{type:Number,default:.011},initialScaleInIPD:{type:Number,default:1.63},hastesOpenDeg:{type:Number,default:8},initialCameraFovDeg:{type:Number,default:60},autoCalibrate:{type:Boolean,default:!0},calibFrames:{type:Number,default:12},targetWidthInIPD:{type:Number,default:2.1},developerMode:{type:Boolean,default:!0},previewMirror:{type:Boolean,default:!0},trackingQuality:{type:String,default:""},rotGlobalGain:{type:Number,default:.9},yawRotGain:{type:Number,default:1},pitchGain:{type:Number,default:1},rollGain:{type:Number,default:1}},setup(e,{expose:n}){const t=tg({userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints}),i=t.isPhysicalMobile,a=i&&!1,r=Object.freeze({balanced:{desktopInputWidth:448,desktopInputWidths:Object.freeze([320,352,384,416,448]),mobileInputWidths:Object.freeze([320,352,384,416,448]),mobileDefaultInputWidth:384,minFaceDetectionConfidence:.55,minFacePresenceConfidence:.55,minTrackingConfidence:.55},high:{desktopInputWidth:448,desktopInputWidths:Object.freeze([352,384,448,512,640]),mobileInputWidths:Object.freeze([352,384,448,512,640]),mobileDefaultInputWidth:448,minFaceDetectionConfidence:.5,minFacePresenceConfidence:.5,minTrackingConfidence:.5}}),c=Object.freeze([33,133,159,145]),f=Object.freeze([263,362,386,374]),w=Object.freeze([10,9,168,151]),g=Object.freeze([152,13,14,17]),v=Object.freeze([1,4,6,197]),h=e,b={x:h.stlPreRotateDeg.x,y:h.stlPreRotateDeg.y,z:h.stlPreRotateDeg.z};n({startAR:Xi,suspendAR:eu,resumeAR:tu,btnArmacao:Zl,btnCor:Ql,btnCaptura:Fo,btnCapturaBase:Jl,getFaceShapeReport:Yl,resetFaceShapeReport:Kl,trackFaceShapeReportEvent:$l,requestFaceShapeReanalysis:jl,setProfundidad:Oo,setEscala:mr,ajustarEscala:nu,setCameraFov:Bo,btnProporcoes:Po,btnMarcadores:yo,setTrackingMode:ir,requestLandscapeOrientation:_o});const T=mt(h.initialDepthOffset),I=mt(h.initialScaleInIPD),C=mt(St.clamp(Number(h.initialCameraFovDeg)||60,35,95)),d=mt(h.developerMode),o=mt(rn(h.trackingQuality||"high")),L=mt(0);let x=!1,M=!1;const D=mt({x:0,y:0}),A=mt(0),F=mt(0),V=mt(0),m=mt({width:0,height:0,frameRate:0,aspectRatio:0,facingMode:"",resizeMode:""}),_=mt({width:0,height:0}),y=mt("aguardando"),G=mt("Aguardando"),X=mt(0),j=mt(!1),Z=mt(""),Y=mt(!1),ce=mt(!1),q=window.matchMedia?.("(display-mode: standalone)")?.matches||!!navigator.standalone,Pe=Qi(()=>q&&typeof window.screen?.orientation?.lock=="function"),Be=Object.freeze({oval:"Oval",redondo:"Redondo",quadrado:"Quadrado",retangular:"Retangular",diamante:"Diamante",coracao:"Coração",triangular:"Triangular",indefinido:"Indefinido",aguardando:"Aguardando"}),Ke=Qi(()=>Be[y.value]||y.value||"Aguardando"),ot=Qi(()=>{const s=Number(X.value)||0;return s>0?`${G.value} · ${(s*100).toFixed(0)}%`:G.value}),wt=mt(null),tt=mt(null),Ee=mt(null),W=mt(null),J=mt(null),ge=mt(null);let Le=null,Re=null,Oe=null,Ge=null,R=null,et=null,Ve=null,Ae=null,Se=null,st=null,me=null,Ye=.25,Ct=0;const ut=new He(0,0,0);let S=null;const u=new He,H=new He,$=new He,te=new He,K=new oi,Fe=new He,le=new He,Ie=new He,Ue=new He,oe=new He,_e=new He,ze=new He,Ne=new He,fe=new He,Xe=new He,P=new He,re=new oi,ue=new He,be=new He,ie=new Zn,ee={wrap:{left:"/models3d/luas/Wrap_Haste_Esquerda.stl",right:"/models3d/luas/Wrap_Haste_Dereita.stl",leftMaxX:!0,rightMaxX:!1},PantoV2:{left:"/models3d/luas/PantoV2_Haste_Esquerda.stl",right:"/models3d/luas/PantoV2_Haste_Dereita.stl",leftMaxX:!1,rightMaxX:!1}},Me={pos:new He,quat:new Zn,scale:1};let We=!1;const dt=new Zn;function ct(){const s=St.degToRad,{yaw:l=0,pitch:E=0,roll:U=0}=h.rotOffsetDeg||{};dt.setFromEuler(new bi(s(E),s(l),s(U),"YXZ"))}function Xt(s,l=1){const E=Number(s);return Number.isFinite(E)?E:l}function cn(s,l=1){return St.clamp(Xt(s,l),0,1)}function li(s){return St.clamp(Xt(s,h.initialCameraFovDeg||Hg),35,95)}function rn(s){return s==="high"?"high":"balanced"}function ui(s=o.value){const l=r[rn(s)];return l?i?l.mobileDefaultInputWidth:l.desktopInputWidth:448}function Pi(s=o.value){const l=r[rn(s)];if(!l)return r.balanced;const E=i?pt||l.mobileDefaultInputWidth:pt||l.desktopInputWidth;return{...l,inputWidth:E}}function kn(s=o.value,l="VIDEO"){const E=Pi(s);return{runningMode:l,numFaces:1,minFaceDetectionConfidence:E.minFaceDetectionConfidence,minFacePresenceConfidence:E.minFacePresenceConfidence,minTrackingConfidence:E.minTrackingConfidence,outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!0}}let ht=null,un=!1,_n=null,bn=null,on=null,gn=null,vn=null,Vn=0,zn=0,Wn=0,Xn=0;const p=document.createElement("canvas"),O=p.getContext("2d",{willReadFrequently:!0}),k=document.createElement("canvas"),z=k.getContext("2d",{willReadFrequently:!0}),N=document.createElement("canvas"),ae=N.getContext("2d",{willReadFrequently:!0});let de=0,xe=0,ve=null,we=null,De=!1,Ce=!1,$e=-1,nt=-1,Tt=!1,ft=0,Je=0,ke=0,pt=0,Qe=0,Nt=null,dn=null,Vt=null,Rn=null,vt=null,qt=null,Yt=null,Ut=null,Gt=null,wn=null,kt=0,Li=0,qa=!1,zt=null;const Di=fg();let it=0,Et=0,di=0,fn=[],Qt=!1;const pn=ug({minimumFramesWithoutFace:24,minimumMsWithoutFace:700,maximumMsUnconfirmedFace:1800,retryPauseMs:3500,maximumTotalMs:Og});let qn=null,ao=Number.NEGATIVE_INFINITY,Ii=Number.NEGATIVE_INFINITY,Ni=Number.NEGATIVE_INFINITY,ro=Number.NEGATIVE_INFINITY,Ya="";const Nn=og();let En=!1,da=null,fa=null,pa=null,oo=!1,so=!1,Ka=!1,co=0,hn=0,lo=0,uo=0,Ui=0,Fi=null,ha=!1,fo=Number.NEGATIVE_INFINITY,$a=0,po=!1,Oi=0,ho=0,mo=Number.NEGATIVE_INFINITY,ja=0,Za=0,Bi=0,fi=!1,ma=!1,pi=0,Yn=0,Kn=0,_a=null,Hi=null,ga="";const se=lu("visagismo-video-ra");function Qa(s=0){return new Promise(l=>setTimeout(l,s))}function Gi(s,l,E,U=null){let B=0,Q=!1;const ne=Promise.resolve(s);ne.then(ye=>{Q&&U?.(ye)}).catch(()=>{});const pe=new Promise((ye,Te)=>{B=window.setTimeout(()=>{Q=!0;const qe=new Error(`${E} excedeu ${l}ms`);qe.name="TimeoutError",Te(qe)},l)});return Promise.race([ne,pe]).finally(()=>window.clearTimeout(B))}function Cn(s,{autoRelease:l=!0}={}){Li&&(window.clearTimeout(Li),Li=0),ce.value=!!s,s&&l&&(Li=window.setTimeout(()=>{Li=0,ce.value=!1},2200))}function va(){return ng({viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,orientationType:window.screen?.orientation?.type||""})}function jt(){return{innerWidth:window.innerWidth||0,innerHeight:window.innerHeight||0,visualWidth:window.visualViewport?.width||0,visualHeight:window.visualViewport?.height||0,screenType:window.screen?.orientation?.type||"",screenAngle:window.screen?.orientation?.angle||0}}function $c(){const s=performance.now();return ig({isPhysicalMobile:i,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,rawContentRotation:it,deviceGamma:qn?.gamma,deviceOrientationAgeMs:s-ao,deviceLandscapeStableMs:s-Ii})}function $n(s="state_changed"){const l=$c();j.value=l.mismatch,l.mismatch||(Z.value="");const E=`${l.mismatch}:${l.evidence}:${l.viewportLandscape}`;if(E!==Ya){const U=Ya;Ya=E,se.track("orientation",l.mismatch?"physical_viewport_mismatch_detected":"physical_viewport_state_resolved",{reason:s,previousKey:U,evidence:l.evidence,physicalLandscape:l.physicalLandscape,cameraLandscape:l.cameraLandscape,sensorLandscape:l.sensorLandscape,sensorFresh:l.sensorFresh,rawContentRotationDeg:it,displayContentRotationDeg:Et,sensor:qn,standalone:q,orientationLockSupported:Pe.value,...jt()},l.mismatch?"warn":"info")}return l}async function _o(s="manual"){const l=$n(s);if(!l.mismatch)return!0;if(se.track("orientation","landscape_lock_requested",{reason:s,standalone:q,supported:Pe.value,evidence:l.evidence,...jt()}),!q)return Z.value="Abra os atalhos do aparelho e ative a rotação automática.",se.track("orientation","landscape_lock_unavailable",{reason:"browser_tab",...jt()},"warn"),!1;if(!Pe.value)return Z.value="Ative a rotação automática nas configurações do aparelho.",se.track("orientation","landscape_lock_unavailable",{reason:"api_unavailable",...jt()},"warn"),!1;Y.value=!0,Z.value="";try{return await window.screen.orientation.lock("landscape"),window[Ur]=!0,se.track("orientation","landscape_lock_succeeded",{reason:s,...jt()}),window.setTimeout(()=>$n("landscape_lock_settled"),250),!0}catch(E){return Z.value="Não foi possível girar automaticamente. Ative a rotação do aparelho.",se.captureError("orientation","landscape_lock_failed",E,{reason:s,...jt()}),!1}finally{Y.value=!1}}function jc(s="device_returned_portrait"){if(!window[Ur])return!1;window[Ur]=!1;try{return window.screen?.orientation?.unlock?.(),se.track("orientation","landscape_lock_released",{reason:s,sensor:qn,...jt()}),!0}catch(l){return se.captureError("orientation","landscape_unlock_failed",l,{reason:s,...jt()}),!1}}function go(s=o.value){Je=0,Qe=0,pt=ui(s)}function vo(){return ac(Ee.value?.videoWidth||m.value.width||0,Ee.value?.videoHeight||m.value.height||0,it)}function Eo(s=0,l=0){const E=s===l?"square":s>l?"landscape":"portrait",U=zt?.key||va().key;return`optiface:camera-orientation:v1:${m.value.facingMode||"unknown"}:${U}:${E}`}function Ja(s,l){try{const E=sessionStorage.getItem(Eo(s,l));if(E===null)return null;const U=Number(E);return[0,90,-90,180].includes(U)?U:null}catch{return null}}function So(s,l,E){try{sessionStorage.setItem(Eo(l,E),String(s))}catch{}}function hi(s,l="candidate_selected"){const E=it;it=s.candidateRotation,Et=La(it,en.value),fn=[],Qt=!1,Nn.reset(Et),Cn(!0);const U=Ea(l);return mi(),se.track("camera","orientation_bootstrap_candidate_selected",{reason:s.reason||l,candidateRotationDeg:it,displayRotationDeg:Et,candidateIndex:s.candidateIndex,candidateCount:s.candidates.length,round:s.round,candidates:s.candidates,previousRawRotationDeg:E,sourceWidth:Ee.value?.videoWidth||0,sourceHeight:Ee.value?.videoHeight||0,processingWidth:W.value?.width||0,processingHeight:W.value?.height||0,requestedOrientation:zt?.key||"",...jt()}),U||E!==it}function Zc(s="camera_started"){const l=Ee.value?.videoWidth||m.value.width||0,E=Ee.value?.videoHeight||m.value.height||0,U=Ja(l,E),B=lg({sourceWidth:l,sourceHeight:E,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,preferredRotation:U}),Q=pn.reset({candidates:B,processedFrames:hn,now:performance.now()});return se.track("camera","orientation_bootstrap_started",{reason:s,sourceWidth:l,sourceHeight:E,viewportWidth:window.innerWidth||0,viewportHeight:window.innerHeight||0,preferredRotation:U,candidates:B}),hi(Q,s)}function Mo(s=0){const l=Ee.value,E=l?.videoWidth||0,U=l?.videoHeight||0;if(!E||!U||l.readyState<2||!ae)return!1;const B=ac(E,U,s),ne=Math.min(1,Ia/Math.max(B.width,B.height));N.width=Math.max(1,Math.round(B.width*ne)),N.height=Math.max(1,Math.round(B.height*ne));const pe=ae;return pe.setTransform(1,0,0,1,0,0),pe.clearRect(0,0,N.width,N.height),pe.translate(N.width/2,N.height/2),pe.rotate(St.degToRad(B.rotationDeg)),pe.drawImage(l,-(E*ne)/2,-(U*ne)/2,E*ne,U*ne),pe.setTransform(1,0,0,1,0,0),!0}async function Qc(s="camera_started"){const l=performance.now(),E=pn.snapshot(),U=E.candidateRotation??0,B=Ee.value?.videoWidth||m.value.width||0,Q=Ee.value?.videoHeight||m.value.height||0,ne=Ja(B,Q),pe=[];let ye=!1,Te=!1;try{ye=await Gi(Ro(),Ug,"Carregamento do detector de orientação")}catch(at){se.captureError("camera","orientation_probe_load_failed",at,{reason:s,fallbackRotation:U})}if(ye&&globalThis.faceapi)for(let at=0;at<E.candidates.length;at+=1){const At=E.candidates[at],xt=performance.now();let Ft=0,Lt=0,$t=0;for(let bt=0;bt<2;bt+=1)if(Mo(At)){try{const Wt=globalThis.faceapi,Sn=await Gi(Wt.detectSingleFace(N,new Wt.TinyFaceDetectorOptions({inputSize:Ia,scoreThreshold:.35})),Fg,"Amostra do detector de orientação");Sn&&(Lt+=1,Ft+=Number(Sn.score)||0)}catch(Wt){$t+=1,se.captureError("camera","orientation_probe_sample_failed",Wt,{rotation:At,sample:bt})}await Qa(20)}pe.push({rotation:At,detections:Lt,score:Lt?Ft/Lt:0,failedSamples:$t,durationMs:Number((performance.now()-xt).toFixed(1))});const Ot=Nr(pe,U),Pt=ne!==null&&at===0&&Ot.detections>0&&Ot.score>=vc,yt=at%2===1&&Ot.detections>0&&Ot.score>=vc;if(Pt||yt){Te=at<E.candidates.length-1;break}}const qe=Nr(pe,U),Ze=pn.reset({candidates:[qe.rotation,...E.candidates.filter(at=>at!==qe.rotation)],processedFrames:hn,now:performance.now()});return hi({...Ze,reason:qe.detections?"visual_probe":"priority_fallback"},"orientation_probe_completed"),se.track("camera","orientation_probe_completed",{reason:s,selectedRotationDeg:qe.rotation,selectedScore:Number(qe.score.toFixed(4)),selectedDetections:qe.detections,detectorAvailable:ye,fallbackUsed:qe.detections===0,preferredRotation:ne,stoppedEarly:Te,testedCandidates:pe.length,inputSize:Ia,durationMs:Number((performance.now()-l).toFixed(1)),results:pe},qe.detections?"info":"warn"),qe.rotation}async function Jc(s="camera_started"){const l=performance.now(),E=pn.snapshot(),U=E.candidateRotation??0,B=Ee.value?.videoWidth||m.value.width||0,Q=Ee.value?.videoHeight||m.value.height||0,ne=Ja(B,Q),pe=[];for(let qe=0;qe<E.candidates.length;qe+=1){const Ze=E.candidates[qe],at=performance.now();let At=0,xt=0,Ft=0;for(let Lt=0;Lt<2;Lt+=1)if(Mo(Ze)){try{const Ot=(await ht.detectForVideo(N,rr(performance.now())))?.result?.faceLandmarks?.[0];if(Ot){xt+=1;const Pt=tc(Ot),yt=Qr(Ot);nc({calculatedRotation:Pt,eyeLineAngleDeg:yt,activeRotation:null})===0&&(At+=1)}}catch($t){Ft+=1,se.captureError("camera","orientation_worker_probe_sample_failed",$t,{rotation:Ze,sample:Lt})}await Qa(20)}if(pe.push({rotation:Ze,detections:At,score:At/2,faces:xt,failedSamples:Ft,durationMs:Number((performance.now()-at).toFixed(1))}),At===2)break}const ye=Nr(pe,U),Te=pn.reset({candidates:[ye.rotation,...E.candidates.filter(qe=>qe!==ye.rotation)],processedFrames:hn,now:performance.now()});return hi({...Te,reason:ye.detections?"worker_landmarks_probe":"priority_fallback"},"orientation_worker_probe_completed"),await Ao("orientation_worker_probe_completed"),se.track("camera","orientation_probe_completed",{reason:s,selectedRotationDeg:ye.rotation,selectedDetections:ye.detections,detectorAvailable:!0,detectorContext:"worker",fallbackUsed:ye.detections===0,preferredRotation:ne,testedCandidates:pe.length,inputSize:Ia,durationMs:Number((performance.now()-l).toFixed(1)),results:pe},ye.detections?"info":"warn"),ye.rotation}function el(){const s=Ee.value?.videoWidth||m.value.width||0,l=Ee.value?.videoHeight||m.value.height||0,E=pn.confirm(it);So(it,s,l),Cn(!1),se.track("camera","orientation_bootstrap_confirmed",{rotationDeg:it,displayRotationDeg:Et,validationSource:"face_landmarks",validationSamples:fn.length,candidateIndex:E.candidateIndex??-1,round:E.round||0,sourceWidth:s,sourceHeight:l,processingWidth:W.value?.width||0,processingHeight:W.value?.height||0,detectorMode:gn||""})}function xo(s,l){hi(s,l),Qt=!0,fn=[],Nn.reset(Et,performance.now()),Cn(!1),se.track("camera","orientation_bootstrap_fallback_accepted",{reason:s.reason||l,elapsedTotalMs:Number((s.elapsedTotalMs||0).toFixed(1)),rotationDeg:it,displayRotationDeg:Et,candidateCount:s.candidates?.length||0,sourceWidth:Ee.value?.videoWidth||0,sourceHeight:Ee.value?.videoHeight||0},"warn")}function Ea(s="orientation_changed"){const l=vo();if(!l.width||!l.height||!tt.value)return!1;const E=Number(tt.value.dataset.nw||0),U=Number(tt.value.dataset.nh||0),B=di,Q=E!==l.width||U!==l.height||B!==l.rotationDeg;return di=l.rotationDeg,tt.value.style.width=`${l.width}px`,tt.value.style.height=`${l.height}px`,tt.value.dataset.nw=String(l.width),tt.value.dataset.nh=String(l.height),[W.value,ge.value].forEach(ne=>{ne&&(ne.width!==l.width&&(ne.width=l.width),ne.height!==l.height&&(ne.height=l.height),ne.style.width="100%",ne.style.height="100%")}),J.value&&(J.value.style.width="100%",J.value.style.height="100%",Le?Le.setSize(l.width,l.height,!1):(J.value.width=l.width,J.value.height=l.height)),ki(o.value),Oe&&Vi(l.width,l.height),Q&&(We=!1,Jt=null,Kt.collecting=h.autoCalibrate,Kt.samples=[],Kt.ipd0Ndc=null,Ge&&(Ge.visible=!1),Ma(),se.track("camera","processing_frame_normalized",{reason:s,sourceWidth:Ee.value?.videoWidth||0,sourceHeight:Ee.value?.videoHeight||0,processingWidth:l.width,processingHeight:l.height,rawRotationDeg:it,displayRotationDeg:Et,previousRotationDeg:B})),Ei(),Q}function mi(){const s=Ee.value,l=W.value;if(!s||!l||s.readyState<2||!l.width||!l.height)return;const E=l.getContext("2d",{alpha:!1});if(!E)return;const U=s.videoWidth,B=s.videoHeight;E.setTransform(1,0,0,1,0,0),E.clearRect(0,0,l.width,l.height),E.translate(l.width/2,l.height/2),E.rotate(St.degToRad(di)),E.drawImage(s,-U/2,-B/2,U,B),E.setTransform(1,0,0,1,0,0)}function ki(s=o.value){const l=W.value?.width||0,E=W.value?.height||0;if(!l||!E)return;const U=Math.min(l,Pi(s).inputWidth),B=Math.max(1,Math.round(U*E/l));de===U&&xe===B||(p.width=U,p.height=B,de=U,xe=B,_.value={width:U,height:B})}function tl(s,l=o.value){if(!Number.isFinite(s))return;Je=Je?St.lerp(Je,s,.22):s;const E=performance.now();if(E-Qe<Ag)return;const U=r[rn(l)],B=i?U?.mobileInputWidths||[]:U?.desktopInputWidths||[];if(!B.length)return;const Q=pt||ui(l),ne=B.indexOf(Q);if(!(ne<0)){if(Je>xg&&ne>0){pt=B[ne-1],Qe=E,ki(l);return}Je<Tg&&ne<B.length-1&&(pt=B[ne+1],Qe=E,ki(l))}}function Vi(s=0,l=0){if(!Oe)return;const E=Number(s)||W.value?.width||1,U=Number(l)||W.value?.height||1;Oe.fov=li(C.value),Oe.aspect=E/Math.max(1,U),Oe.updateProjectionMatrix()}function nl(s=ve){const l=s?.getVideoTracks?.()?.[0],E=l?.getSettings?.()||{},U=Number(E.width)||Ee.value?.videoWidth||0,B=Number(E.height)||Ee.value?.videoHeight||0,Q=Number(E.frameRate)||0,ne=Number(E.aspectRatio)||(U&&B?U/B:0),pe=E.facingMode||"",ye=E.resizeMode||"";m.value={width:U,height:B,frameRate:Q,aspectRatio:ne,facingMode:pe,resizeMode:ye},se.track("camera","stream_settings_resolved",{settings:m.value,constraints:l?.getConstraints?.()||{},capabilities:l?.getCapabilities?.()||{},previewMirrored:en.value,physicalMobile:i,physicalMobileReason:t.reason,ipadLike:t.isIPadLike,requestedOrientation:zt?.key||"",requestedAspectRatio:zt?.aspectRatio||0}),l&&console.info("[VideoRA] Active camera track",{settings:E,constraints:l.getConstraints?.()||{}})}async function il(s){if(!i)return;const l=s?.getVideoTracks?.()?.[0],E=l?.getCapabilities?.()||{},U=Number(E?.zoom?.min);if(!(!l||!Number.isFinite(U)))try{await l.applyConstraints({advanced:[{zoom:U}]})}catch(B){console.warn("[VideoRA] Não foi possível aplicar o zoom mínimo no celular.",B)}}function Sa(){const s=Ee.value?.srcObject||ve;try{s?.getTracks?.().forEach(l=>l.stop())}catch{}try{Ee.value?.pause?.()}catch{}Ee.value&&(Ee.value.srcObject=null),ve=null,m.value={width:0,height:0,frameRate:0,aspectRatio:0,facingMode:"",resizeMode:""}}async function al(){if(!navigator?.mediaDevices?.getUserMedia)throw new Error("getUserMedia indisponível");const s=Zd(),l=va();zt=l,se.track("camera","orientation_profile_requested",{profile:l.key,width:l.width,height:l.height,aspectRatio:l.aspectRatio,...jt()});const E=Qd({deviceId:s.deviceId,facingMode:s.facingMode,width:l.width,height:l.height,mobile:i}).map(B=>!B?.video||typeof B.video!="object"?B:i?{...B,video:{...B.video,resizeMode:"none",aspectRatio:{ideal:l.aspectRatio},frameRate:{ideal:cc,max:cc}}}:{...B,video:{...B.video,frameRate:{ideal:60,max:60}}});let U=null;for(let B=0;B<E.length;B++)try{se.track("camera","get_user_media_attempt",{attempt:B+1,total:E.length,constraints:E[B]});const Q=await navigator.mediaDevices.getUserMedia(E[B]);return se.track("camera","stream_opened",{attempt:B+1}),Q}catch(Q){U=Q,se.track("camera","get_user_media_failed",{attempt:B+1,tipo:Q?.name||"Error",mensagem:Q?.message||String(Q)},"warn"),await Qa(120)}throw U||new Error("Não foi possível iniciar a câmera")}function er(s=""){const l=ht;ht=null,un=!1,gn=null,window.__vra_fl===l&&(window.__vra_fl=null,window.__vra_vf=null,window.__vra_fl_mode=null);try{l?.workerMode?s==="tracking_graph_failure"&&ws(l):l?.close?.()}catch{}s&&se.track("mediapipe","landmarker_disposed",{reason:s},"warn")}function rl(){const s=_n;_n=null,bn=null;try{s?.close?.()}catch{}}function tr(){Kn+=1,fi=!1,ma=!1,pi=0,Yn=0,_a=null,Hi=null,ga="",y.value="aguardando",Bi=0;const s=_t?.visagismo;s?.rostoProbabilidades&&(s.rostoProbabilidades.value={})}async function ol(){return _n||bn||(bn=(async()=>{on=on||await Gi(Kr.forVisionTasks(ea),bg,"Inicialização do runtime de segmentação facial");const s=await Oc.createFromOptions(on,{baseOptions:{modelAssetPath:lc,delegate:"CPU"},runningMode:"IMAGE",outputConfidenceMasks:!0,outputCategoryMask:!1});if(En)throw s.close?.(),new Error("Componente desmontado durante a inicialização do segmentador.");return _n=s,se.track("analysis","face_segmenter_ready",{modelPath:lc,delegate:"CPU"}),s})().catch(s=>{throw bn=null,s}),bn)}async function nr({forceRecreate:s=!1,preferCpu:l=!1,allowWorker:E=!0}={}){if(s&&er("forced_recreate"),!ht&&E&&$d()){const B=jd(),Q=performance.now();try{se.track("mediapipe","worker_initialization_started",{wasmPath:ea,modelPath:Da,trackingMode:o.value});const ne=await B.init({wasmPath:ea,modelPath:Da,options:kn(o.value,"VIDEO"),timeoutMs:Ng,delegate:l||ha?"CPU":"GPU"});return ht=B,un=!0,gn="VIDEO",se.track("mediapipe","landmarker_ready",{delegate:ne.delegate||B.delegate||"",executionContext:"worker",reused:!!ne.reused,durationMs:Number((performance.now()-Q).toFixed(1))}),ht}catch(ne){throw ws(B),se.captureError("mediapipe","worker_initialization_failed",ne,{fallback:"camera_only"}),ne.workerInitializationFailed=!0,ne}}if(!ht&&window.__vra_fl&&(ht=window.__vra_fl,on=window.__vra_vf??on,gn=window.__vra_fl_mode||null,se.track("mediapipe","cached_instance_reused")),ht)if(gn!=="VIDEO")er("cached_non_video_instance");else return ht;se.track("mediapipe","initialization_started",{wasmPath:ea,modelPath:Da,trackingMode:o.value}),on=on||await Gi(Kr.forVisionTasks(ea),Or,"Inicialização do runtime MediaPipe"),se.track("mediapipe","wasm_fileset_ready");const U=(B,Q)=>{const ne=Fc.createFromOptions(on,{baseOptions:{modelAssetPath:Da,delegate:B},...kn(o.value,"VIDEO")});return Gi(ne,Q,`Inicialização do FaceLandmarker (${B})`,pe=>{try{pe?.close?.()}catch{}})};if(l||ha)ht=await U("CPU",Or),se.track("mediapipe","landmarker_ready",{delegate:"CPU"});else try{ht=await U("GPU",gc),se.track("mediapipe","landmarker_ready",{delegate:"GPU"})}catch(B){console.warn("[VideoRA] GPU delegate indisponível, usando CPU.",B),se.track("mediapipe","gpu_delegate_failed",{tipo:B?.name||"Error",mensagem:B?.message||String(B)},"warn"),B?.name==="TimeoutError"&&se.track("mediapipe","landmarker_initialization_timeout",{delegate:"GPU",timeoutMs:gc},"warn"),ht=await U("CPU",Or),se.track("mediapipe","landmarker_ready",{delegate:"CPU"})}return window.__vra_fl=ht,window.__vra_vf=on,gn="VIDEO",window.__vra_fl_mode="VIDEO",ht}function sl(s){const l=String(s?.message||s||"");return/CalculatorGraph|FaceGeometryPipelineCalculator|Graph has errors|design_matrix\.norm/i.test(l)}async function To(s){return Fi||(Fi=(async()=>{se.captureError("mediapipe","landmarker_recovery_started",s,{consecutiveTrackingErrors:Ui}),gi(),ha=!0,er("tracking_graph_failure"),await nr({preferCpu:!0,allowWorker:!1}),Ui=0,nt=-1,De&&ve?.active&&wo(),se.track("mediapipe","landmarker_recovery_completed",{delegate:"CPU"})})().catch(l=>{se.captureError("mediapipe","landmarker_recovery_failed",l)}).finally(()=>{Fi=null}),Fi)}async function ir(s){const l=rn(s);if(o.value=l,go(l),ki(l),!ht)return o.value;Ce=!0;try{await ht.setOptions(kn(l,"VIDEO"))}finally{Ce=!1}return o.value}function Ao(s="orientation_recalibrated"){return ht?vn||(vn=(async()=>(Ce=!0,await ht.setOptions(kn(o.value,"VIDEO")),nt=-1,se.track("mediapipe","temporal_tracking_reset",{reason:s,runningMode:"VIDEO"}),!0))().catch(l=>(se.captureError("mediapipe","temporal_tracking_reset_failed",l,{reason:s}),queueMicrotask(()=>{To(l)}),!1)).finally(()=>{Ce=!1,vn=null}),vn):Promise.resolve(!1)}function ar(){Vn&&(cancelAnimationFrame(Vn),Vn=0)}function _i(){zn&&(cancelAnimationFrame(zn),zn=0)}function cl(){_i();const s=()=>{Ee.value?.readyState>=2&&mi(),zn=requestAnimationFrame(s)};zn=requestAnimationFrame(s),se.track("camera","preview_loop_started",{phase:"model_initialization"})}function gi(){Wn&&(cancelAnimationFrame(Wn),Wn=0),Xn&&Ee.value?.cancelVideoFrameCallback&&(Ee.value.cancelVideoFrameCallback(Xn),Xn=0),Ce=!1,$e=-1,Je=0}async function bo(s,l){if(!ht||Ce||vn)return;Ce=!0;const E=performance.now(),U=s?.width||0,B=s?.height||0;try{if(gn!=="VIDEO")return;const Q=un?await ht.detectForVideo(s,l):null,ne=Q?.result||ht.detectForVideo(s,l);Ui=0,ke=un&&Number(Q?.inferenceMs)||0,L.value=performance.now()-E,hn+=1,tl(L.value),Vl(ne),_t?.app?.metricas?.value&&fl(s),ll()}catch(Q){uo+=1,Ui+=1;const ne=performance.now();ne-fo>=5e3?(se.captureError("tracking","detect_for_video_failed",Q,{timestampMs:l,processedFrames:hn,suppressedSinceLastReport:$a,inputWidth:U,inputHeight:B,videoTime:Ee.value?.currentTime||0}),fo=ne,$a=0):$a+=1,Ui>=3&&sl(Q)&&queueMicrotask(()=>{To(Q)})}finally{Ce=!1}}function rr(s){const l=Number.isFinite(s)?s:performance.now(),E=l>nt?l:nt+1;return nt=E,E}function ll(){const s=performance.now();s-ho<15e3||(ho=s,se.track("tracking","metrics",{processedFrames:hn,detectedFrames:lo,trackingErrors:uo,latencyMs:Number(L.value.toFixed(2)),workerInferenceMs:Number(ke.toFixed(2)),executionContext:un?"worker":"main_thread",trackingMode:o.value,inputWidth:de,inputHeight:xe,camera:m.value,pose:{yawDeg:Number(A.value.toFixed(2)),pitchDeg:Number(F.value.toFixed(2)),rollDeg:Number(V.value.toFixed(2)),rawRollDeg:Number(ja.toFixed(2)),renderedRollDeg:Number(Za.toFixed(2))},orientation:{requested:zt?.key||"",screenType:window.screen?.orientation?.type||"",screenAngle:window.screen?.orientation?.angle||0,contentRotationDeg:Et,rawContentRotationDeg:it,frameNormalized:Qt,processingRotationDeg:di,processingWidth:W.value?.width||0,processingHeight:W.value?.height||0,resolverPhase:pn.snapshot().phase,detectorMode:gn||""},analysis:{faceShape:y.value,faceShapePoseQuality:Number(Bi.toFixed(3)),orientationNormalized:Qt}}))}async function Ro(){if(oo)return!0;const s=await dl();return s?(da||(da=s.nets.tinyFaceDetector.loadFromUri(mc).then(()=>(oo=!0,!0)).catch(l=>(console.warn("[VideoRA] Não foi possível carregar o detector facial leve.",l),da=null,!1))),da):!1}async function ul(){if(so)return!0;const s=await Ro(),l=globalThis.faceapi;return!s||!l?!1:(fa||(fa=l.nets.ageGenderNet.loadFromUri(mc).then(()=>(so=!0,!0)).catch(E=>(console.warn("[VideoRA] Não foi possível carregar o modelo de gênero.",E),G.value="Indisponível",X.value=0,fa=null,!1))),fa)}function dl(){return globalThis.faceapi?Promise.resolve(globalThis.faceapi):pa||(pa=new Promise(s=>{const l=document.querySelector(`script[src="${_c}"]`);if(l){l.addEventListener("load",()=>s(globalThis.faceapi||null),{once:!0}),l.addEventListener("error",()=>s(null),{once:!0});return}const E=document.createElement("script");E.src=_c,E.async=!0,E.onload=()=>s(globalThis.faceapi||null),E.onerror=()=>{console.warn("[VideoRA] Não foi possível carregar face-api.js."),s(null)},document.head.appendChild(E)}),pa)}function fl(s){if(!_t?.app?.metricas?.value||Ka)return;const l=performance.now();l-co<Bg||(co=l,!(!s?.width||!s?.height||!z)&&(k.width=s.width,k.height=s.height,z.drawImage(s,0,0,k.width,k.height),Ka=!0,(async()=>{try{if(!await ul())return;const U=globalThis.faceapi;if(!U)return;const B=await U.detectSingleFace(k,new U.TinyFaceDetectorOptions({inputSize:224,scoreThreshold:.5})).withAgeAndGender();if(!B){G.value="Não detectado",X.value=0;return}G.value=B.gender==="male"?"Masculino":"Feminino",X.value=B.genderProbability||0}catch(E){console.warn("[VideoRA] Erro na predição de gênero.",E),G.value="Indisponível",X.value=0}finally{Ka=!1}})()))}function pl(){const s=()=>{if(Wn=requestAnimationFrame(s),!(Ee.value?.readyState>=2))return;const l=Ee.value.currentTime;l!==$e&&($e=l,mi(),!Ce&&(O.drawImage(W.value,0,0,de,xe),bo(p,rr(performance.now()))))};Wn=requestAnimationFrame(s)}function wo(){if(gi(),ki(o.value),typeof Ee.value?.requestVideoFrameCallback=="function"){const s=(l,E)=>{if(!De||(Xn=Ee.value.requestVideoFrameCallback(s),!(Ee.value?.readyState>=2))||(mi(),Ce))return;O.drawImage(W.value,0,0,de,xe);const U=rr(l);Tt||(Tt=!0,se.track("tracking","timestamp_source_selected",{callbackNow:Number.isFinite(l)?Number(l.toFixed(3)):null,mediaTimeMs:Number.isFinite(E?.mediaTime)?Number((E.mediaTime*1e3).toFixed(3)):null,timestampMs:Number(U.toFixed(3)),source:"callback_now_monotonic"})),bo(p,U)};Xn=Ee.value.requestVideoFrameCallback(s);return}pl()}const Kt={collecting:h.autoCalibrate,samples:[],ipd0Ndc:null};function hl(s){const l=[...s].sort((U,B)=>U-B),E=l.length;return E?E&1?l[(E-1)/2]:(l[E/2-1]+l[E/2])*.5:0}const _t=Su()?.appContext?.config?.globalProperties?.$db,or=Number(_t?.visagismo?.armacaoEscala?.value)||0;or&&or!==Number(h.initialScaleInIPD)&&(I.value=or,M=!0);const sr=mt(!1),cr=mt(!1),Co=mt(!1);let Jt=null;const ml=mt(!0),vi=Qi(()=>_t?.visagismo?.molduraRosto?.value??Co.value?!1:_t?.visagismo?.armacaoVisivel?.value!==void 0?_t.visagismo.armacaoVisivel.value:ml.value),en=Qi(()=>!!h.previewMirror);$i(en,(s,l)=>{const E=Et;Et=La(it,s),Nn.reset(Et,performance.now()),Ei(),se.track("camera","preview_mirror_changed",{mirrored:s,previous:!!l,facingMode:m.value.facingMode||"",rawRotation:it,previousDisplayRotation:E,displayRotation:Et})},{immediate:!0}),$i(vi,s=>{R&&(R.visible=!!s&&!!Ge?.visible),Ae&&(Ae.visible=!!s&&!!Ge?.visible),dr(A.value||0,V.value||0)},{immediate:!0}),$i(()=>h.developerMode,s=>{d.value=!!s,kl()}),$i(()=>h.trackingQuality,s=>{ir(s)}),$i(C,()=>{Vi()});function yo(){se.track("ui","landmarks_toggled"),_t?.visagismo?_t.visagismo.marcadores.value=!_t.visagismo.marcadores.value:sr.value=!sr.value}function Po(){se.track("ui","proportions_toggled"),_t?.visagismo?_t.visagismo.proporcoes.value=!_t.visagismo.proporcoes.value:cr.value=!cr.value}function _l(){const s=o.value==="high"?"balanced":"high";ir(s)}function lr(s){return new Zt(s.x*2-1,1-s.y*2)}function gl(s){const l=s[h.anchorUpperIdx]||s[9],E=s[h.anchorLowerIdx]||s[1],U=Math.max(0,Math.min(1,h.anchorBlendT));return lr({x:l.x*(1-U)+E.x*U,y:l.y*(1-U)+E.y*U})}function vl(s){const l=new He(s.x,s.y,-1).unproject(Oe),E=new He(s.x,s.y,1).unproject(Oe);return{origin:Oe.position.clone(),dir:E.sub(l).normalize()}}function ur(s,l){const{origin:E,dir:U}=vl(s);return E.add(U.multiplyScalar(l))}function El(s,l,E,U){return u.set(s,l,-1).unproject(Oe),H.set(s,l,1).unproject(Oe),U.copy(Oe.position).add(H.sub(u).normalize().multiplyScalar(E))}function Sl(){const s=ge.value?.width||0,l=ge.value?.height||0;return s>0&&l>s?l/s:1}function Ml(s,l=new He){const E=Sl();return l.set((s.x??.5)-.5,(.5-(s.y??.5))*E,-(s.z||0))}function zi(s,l,E){E.set(0,0,0);let U=0;for(let B=0;B<l.length;B++){const Q=s[l[B]];Q&&(Ml(Q,_e),E.add(_e),U+=1)}return U?E.multiplyScalar(1/U):null}function xl(s){const l=s?.data;if(!Array.isArray(l)||l.length!==16)return null;re.fromArray(l),re.decompose(ue,ie,be);const E=ie.x+ie.y+ie.z+ie.w;return Number.isFinite(E)?ie.clone().normalize():null}function Tl(s,l=null){const E=zi(s,c,Fe),U=zi(s,f,le),B=zi(s,w,Ie),Q=zi(s,g,Ue),ne=zi(s,v,oe);if(!E||!U||!B||!Q||!ne)return new Zn;fe.subVectors(U,E).normalize(),Xe.subVectors(B,Q).normalize(),P.crossVectors(fe,Xe).normalize(),ze.addVectors(E,U).multiplyScalar(.5),Ne.subVectors(ne,ze).normalize(),P.dot(Ne)<0&&P.negate(),Xe.crossVectors(P,fe).normalize();const pe=new Zn().setFromRotationMatrix(re.makeBasis(fe,Xe,P)),ye=xl(l);if(!ye)return pe;const Te=St.radToDeg(pe.angleTo(ye));return!Number.isFinite(Te)||Te>Ig?pe:pe.slerp(ye,Dg)}function Al(s,l){const E=s.clone().applyMatrix4(Oe.matrixWorldInverse);return E.z+=l,E.applyMatrix4(Oe.matrixWorld)}function bl(s,l){return s.applyMatrix4(Oe.matrixWorldInverse),s.z+=l,s.applyMatrix4(Oe.matrixWorld)}function Lo(s,l){return l>.76*s+5.8}function dr(s,l){if(!et&&!Ve)return;const E=!!vi.value&&!!Ge?.visible,U=Lo(l,s),B=Lo(-l,-s);et&&(et.visible=E&&U),Ve&&(Ve.visible=E&&B)}function Ma(){const s=ge.value;if(!s)return;s.getContext("2d").clearRect(0,0,s.width,s.height)}function Rl(s){const l=ge.value;if(!l)return;const E=l.getContext("2d"),U=l.width,B=l.height;E.fillStyle="cyan";for(let Q=0;Q<s.length;Q++){const ne=s[Q].x*U,pe=s[Q].y*B;E.beginPath(),E.arc(ne,pe,1,0,Math.PI*2),E.fill()}}function wl(s){const l=ge.value;if(!l)return;const E=l.getContext("2d"),U=l.width,B=l.height,Q=sc(s,U,B);if(!Q)return;const ne=performance.now();ne-mo>=1e4&&(mo=ne,se.track("analysis","facial_thirds_geometry",{percentages:Q.percentages.map(xt=>Number(xt.toFixed(2))),faceAxisAngleDeg:Number(St.radToDeg(Q.frame.horizontalAngleRad).toFixed(2)),streamWidth:U,streamHeight:B,rawContentRotationDeg:it,displayContentRotationDeg:Et}));const pe=getComputedStyle(document.documentElement),ye=pe.getPropertyValue("--primary").trim()||"#1eebe2",Te=pe.getPropertyValue("--primary").trim()||"#1eebe2";E.save(),E.strokeStyle=ye,E.lineWidth=1.5,Q.lines.forEach(xt=>{E.beginPath(),E.moveTo(xt.start.x,xt.start.y),E.lineTo(xt.end.x,xt.end.y),E.stroke()}),E.restore();const qe=19,Ze=8,at=7;E.font=`bold ${qe}px monospace`;const At=xt=>({x:en.value?U-xt.x:xt.x,y:xt.y});Q.percentages.forEach((xt,Ft)=>{const Lt=`${xt.toFixed(0)}%`,Ot=E.measureText(Lt).width+Ze*2,Pt=qe+at*2,yt=[Q.horizontalStart,Q.horizontalEnd].map(Wt=>Q.frame.pointAt(Wt,Q.midLevels[Ft])),bt=At(yt[0]).x>At(yt[1]).x?yt[0]:yt[1];E.save(),E.translate(bt.x,bt.y),en.value&&E.scale(-1,1),E.translate(8,-Pt/2),E.fillStyle="rgba(0, 0, 0, 0.72)",E.roundRect?(E.beginPath(),E.roundRect(0,0,Ot,Pt,9),E.fill()):E.fillRect(0,0,Ot,Pt),E.fillStyle=Te,E.textBaseline="middle",E.fillText(Lt,Ze,Pt/2),E.restore()})}function Cl(s,l,E,U){if(!s)return!1;const B=s[10],Q=s[152],ne=(B.x+Q.x)/2*l-U.centerX,pe=(B.y+Q.y)/2*E-U.centerY,Te=Math.hypot((Q.x-B.x)*l,(Q.y-B.y)*E)/(U.radiusY*2);return(ne/U.radiusX)**2+(pe/U.radiusY)**2<=.3&&Te>=.7&&Te<=1.05}function Do(s){const l=ge.value;if(!l)return;const E=l.getContext("2d"),U=l.width,B=l.height,Q=B*.26,ne=Math.min(Q*.72,U*.4),pe={centerX:U/2,centerY:B/2,radiusX:ne,radiusY:Q};E.clearRect(0,0,U,B),E.fillStyle="rgba(0, 0, 0, 0.58)",E.fillRect(0,0,U,B),E.globalCompositeOperation="destination-out",E.beginPath(),E.ellipse(pe.centerX,pe.centerY,pe.radiusX,pe.radiusY,0,0,Math.PI*2),E.fill(),E.globalCompositeOperation="source-over";const ye=Cl(s,U,B,pe);E.strokeStyle=ye?"#4CAF50":"rgba(255, 255, 255, 0.6)",E.lineWidth=6,E.stroke()}function yl(s){const l=ge.value;if(!l)return;const E=_t?.visagismo?.rosto.value||"redondo",U=eg(E);if(!U)return;const B=Q_[E]||{h:360},Q=l.getContext("2d"),ne=l.width,pe=l.height;let ye=ne/2,Te=pe*.45,qe=Math.min(ne,pe)*.8/B.h,Ze=0;if(s&&s.length>0){const At=sc(s,ne,pe);if(!At)return;const xt=At.levels[0],Ft=At.levels[3],Lt=Math.max(.06*Math.min(ne,pe),Ft-xt),$t=At.frame.pointAt(0,(xt+Ft)/2),Pt={cx:$t.x,cy:$t.y,scale:Lt*1.12/B.h,rot:At.frame.horizontalAngleRad};Jt?(Jt.cx+=(Pt.cx-Jt.cx)*.6,Jt.cy+=(Pt.cy-Jt.cy)*.6,Jt.scale+=(Pt.scale-Jt.scale)*.6,Jt.rot+=(Pt.rot-Jt.rot)*.6):Jt=Pt;const yt=Jt;ye=yt.cx,Te=yt.cy,qe=yt.scale,Ze=yt.rot}const at=getComputedStyle(document.documentElement).getPropertyValue("--primary").trim()||"#18ffff";Q.save(),Q.fillStyle="rgba(0, 0, 0, 0.58)",Q.fillRect(0,0,ne,pe),Q.globalCompositeOperation="destination-out",Q.translate(ye,Te),Q.rotate(Ze),Q.scale(qe,qe),Q.translate(-150,-210),Q.fill(U),Q.restore(),Q.save(),Q.translate(ye,Te),Q.rotate(Ze),Q.scale(qe,qe),Q.translate(-150,-210),Q.strokeStyle=at,Q.lineWidth=4/qe,Q.stroke(U),Q.restore()}function Pl(s){const E=St.clamp(Xt(h.smoothing,1),0,1);!We||E===1?(Ge.position.copy(s.pos),Ge.quaternion.copy(s.quat),Ge.scale.setScalar(s.scale)):(Ge.position.lerpVectors(Me.pos,s.pos,E),Ge.quaternion.slerpQuaternions(Me.quat,s.quat,E),Ge.scale.setScalar(Me.scale+(s.scale-Me.scale)*E)),Me.pos.copy(Ge.position),Me.quat.copy(Ge.quaternion),Me.scale=Ge.scale.x,We=!0}function Ll(){const s=globalThis?.FACEMESH_TESSELATION;if(!Array.isArray(s)||!s.length)return null;const l=[];for(let E=0;E+2<s.length;E+=3){const U=s[E],B=s[E+1];if(!Array.isArray(U)||!Array.isArray(B))continue;const Q=U[0],ne=U[1],pe=B[1];[Q,ne,pe].every(Number.isInteger)&&l.push(Q,ne,pe)}return l.length?new Uint16Array(l):null}function Io(){if(!Ge||Ae)return;const s=Ll();if(!s)return;Se=new la,st=new Float32Array(dc*3),Se.setAttribute("position",new In(st,3)),Se.setIndex(new In(s,1));const l=new Uc({side:mn});l.colorWrite=!1,l.depthTest=!0,l.depthWrite=!0,Ae=new An(Se,l),Ae.renderOrder=5,Ae.frustumCulled=!1,Ae.visible=!1,Ge.add(Ae)}function Dl(s,{dEst:l,ipdWorld:E,anchorZ:U,yawDeg:B}){if(!vi.value){Ae&&(Ae.visible=!1);return}if(Io(),!Ae||!Se||!st||!Ge)return;const Q=s[33],ne=s[263],pe=s[1];if(!Q||!ne)return;const ye=Math.max(1e-6,Math.hypot((ne.x??0)-(Q.x??0),(ne.y??0)-(Q.y??0))),Te=E/ye,qe=Math.min(dc,s.length),Ze=Math.abs(B||0),at=St.clamp((Ze-hc)/Math.max(1,Lg-hc),0,1),At=St.lerp(wg,.64,at),xt=St.lerp(Cg,.03,at),Ft=St.lerp(yg,.024,at),Lt=St.lerp(Pg,.072,at),$t=E*St.lerp(fc,fc+.05,at),Ot=E*St.lerp(pc,pc+.2,at),Pt=0;Ge.updateMatrixWorld(!0),K.copy(Ge.matrixWorld).invert();for(let yt=0;yt<qe;yt++){const bt=s[yt],Wt=bt.x*2-1,Sn=1-bt.y*2,qi=Math.hypot((bt.x??0)-(pe?.x??0),((bt.y??0)-(pe?.y??0))*1.15),Mn=1-St.clamp((qi-Ft)/Math.max(1e-6,Lt-Ft),0,1),Un=St.lerp(xt,At,Mn),Yi=St.lerp(Ot,$t,Mn),yn=((bt.z??U)-U)*Te*Un-Yi-Pt;El(Wt,Sn,l,$),bl($,yn),te.copy($).applyMatrix4(K);const xn=yt*3;st[xn]=te.x,st[xn+1]=te.y,st[xn+2]=te.z}Se.attributes.position.needsUpdate=!0,Se.computeBoundingSphere(),Ae.visible=!!Ge.visible&&!!vi.value}function Il(s,l,E){if(!s||En||l!==Kn)return;Hi=s,ga=E,ma=!0,y.value=s.appLabel||"indefinido",Bi=Number(s.poseQuality)||0;const U=_t?.visagismo;U&&(!U.molduraRosto?.value&&!U.rostoFixado?.value&&Object.prototype.hasOwnProperty.call(U.rostos,y.value)&&(U.rosto.value=y.value),U.rostoProbabilidades.value=Y_(s.appProbabilities,U.rostos)),se.track("analysis","face_shape_segmented",{version:s.version,faceShape:s.appLabel,confidence:Number(s.confidence.toFixed(4)),poseQuality:Number(s.poseQuality.toFixed(4)),attempts:pi,ratios:Object.fromEntries(Object.entries(s.ratios).map(([B,Q])=>[B,Number(Q.toFixed(4))]))})}async function Nl(s,l,E,U){if(U===Kn){pi+=1;try{const B=await ol();if(En||!B||U!==Kn)return;let Q=null,ne="";if(B.segment(s,pe=>{try{const ye=pe.confidenceMasks?.[zc];if(!ye)throw new Error("O segmentador não retornou a classe 3 face-skin.");const Te=ye.getAsFloat32Array();Q=qc({landmarks:l,faceSkinMask:Te,width:ye.width,height:ye.height,threshold:.35,poseQuality:E}),ne=Yc(s,Q,Te,ye.width,ye.height)}finally{pe.close?.()}}),!Q)throw new Error("A segmentação facial terminou sem resultado.");Il(Q,U,ne)}catch(B){se.captureError("analysis","face_shape_segmentation_failed",B,{attempt:pi,maxAttempts:Fr}),console.warn("[VideoRA] Falha na análise segmentada do formato do rosto.",B),pi>=Fr?(ma=!0,y.value="indefinido"):Yn=0}finally{U===Kn&&(fi=!1)}}}function Ul(s){if(ma||fi||pi>=Fr||!W.value?.width||!W.value?.height||hn<45||Je>55)return;const l=Xc(s,{width:W.value.width,height:W.value.height},_a);if(_a=s.map(Te=>({x:Te.x,y:Te.y,z:Te.z||0})),Bi=l.poseQuality||0,!l.eligible){Yn=Math.max(0,Yn-2);return}if(Yn+=1,Yn<uc)return;const E=W.value,U=Math.min(1,Rg/Math.max(E.width,E.height)),B=document.createElement("canvas");B.width=Math.max(1,Math.round(E.width*U)),B.height=Math.max(1,Math.round(E.height*U)),B.getContext("2d",{alpha:!1}).drawImage(E,0,0,B.width,B.height);const Q=_a,ne=l.poseQuality,pe=Kn;fi=!0;const ye=()=>{if(En){fi=!1;return}pe===Kn&&Nl(B,Q,ne,pe)};typeof window.requestIdleCallback=="function"?window.requestIdleCallback(ye,{timeout:500}):window.setTimeout(ye,0)}function No(){ft+=1,!(ft<2)&&(We=!1,D.value={x:0,y:0},A.value=0,F.value=0,V.value=0,Hi||(y.value="aguardando",Bi=0),ja=0,Za=0,G.value="Aguardando",X.value=0,Ge&&(Ge.visible=!1),Ae&&(Ae.visible=!1),Ma(),_t?.visagismo?.calculandoRosto.value&&Do(null))}function Fl(s,l=null){if(!Ge||!R)return;const E=s[33],U=s[263],B=s[1];if(!E||!U||!B)return;const ne=Tl(s,l).clone().multiply(dt),pe=lr(E),ye=lr(U),Te=Math.max(1e-6,Math.hypot(ye.x-pe.x,ye.y-pe.y));Kt.collecting&&(Kt.samples.push(Te),Kt.samples.length>=Math.max(3,h.calibFrames|0)&&(Kt.ipd0Ndc=hl(Kt.samples),Kt.collecting=!1,x||(T.value=h.initialDepthOffset),M||(I.value=h.initialScaleInIPD||h.targetWidthInIPD)));const qe=Kt.ipd0Ndc||Te,Ze=Gg*(qe/Te),at=ur(gl(s),Ze),At=Al(at,T.value),xt=s[h.anchorUpperIdx]||s[9],Ft=s[h.anchorLowerIdx]||s[1],Lt=Math.max(0,Math.min(1,h.anchorBlendT)),$t=(xt.z??0)*(1-Lt)+(Ft.z??0)*Lt,Ot=ur(pe,Ze),Pt=ur(ye,Ze),yt=Math.max(1e-6,Ot.distanceTo(Pt)),bt=yt/Ye*(Number(I.value)||1),Wt=new bi().setFromQuaternion(ne,"YXZ");let Sn=St.radToDeg(Wt.y),qi=St.radToDeg(Wt.x),Mn=St.radToDeg(Wt.z);en.value&&(Sn=-Sn,Mn=-Mn),ja=Mn,A.value=Sn,F.value=qi,V.value=rg(Mn,0);const Un=Qt&&!ce.value;Un&&Ul(s);const yn=cn(h.rotGlobalGain,1),_r=dt.clone().clone().slerp(ne,yn);let iu=Xt(h.yawRotGain,1),au=Xt(h.pitchGain,1),ru=Xt(h.rollGain,1);const Ki=new bi().setFromQuaternion(_r,"YXZ");Ki.x*=au,Ki.y*=iu,Ki.z*=ru,Za=St.radToDeg(Ki.z),_r.setFromEuler(Ki),Pl({pos:At,quat:_r,scale:bt}),Ge.visible=!0;const ba=ge.value;if(ba){const ko=(B.x??.5)*ba.width,su=(B.y??.5)*ba.height;D.value={x:Math.round(en.value?ba.width-ko:ko),y:Math.round(su)}}Ma();const ou=_t?.visagismo?!!_t.visagismo.marcadores.value:sr.value,Ho=_t?.visagismo?!!_t.visagismo.proporcoes.value:cr.value,Go=_t?.visagismo?!!_t.visagismo.molduraRosto.value:Co.value;ou&&Rl(s),Un&&Ho&&!Go&&wl(s),Un&&Go&&!Ho&&yl(s),_t?.visagismo?.calculandoRosto.value&&Do(s),dr(A.value||0,V.value||0),Dl(s,{dEst:Ze,ipdWorld:yt,anchorZ:$t,yawDeg:Sn})}async function Ol(s,l){Re=new Wd,Oe=new aa(li(C.value),s/l,.01,1e3),Oe.position.set(0,0,2),Le=new U_({canvas:J.value,alpha:!0,antialias:!0,powerPreference:"high-performance"}),Le.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),Le.outputColorSpace=eo,Le.setSize(s,l,!1);const E=new Xd(16777215,1);E.position.set(0,0,2),Re.add(E,new qd(16777215,.6)),Ge=new Yd,Ge.visible=!1,Re.add(Ge),Io(),Vi(s,l)}function Bl(){ar();const s=()=>{Le&&Re&&Oe&&Le.render(Re,Oe),Vn=requestAnimationFrame(s)};Vn=requestAnimationFrame(s)}function xa(s){if(!s)return ta;let l=s;return/\.stl$/i.test(l)||(l=`/models3d/${l}.stl`),l.startsWith("/")||(l="/"+l),l}function Hl(s){return s?(s.split("/").pop()||"").replace(/\.stl$/i,""):""}function Gl(s){const l=Hl(s);return ee[l]||null}function Ta(s){return new Kd({color:new Mt(typeof s=="string"?s:s||"#000"),shininess:100,side:mn,depthTest:!0,depthWrite:!0})}async function fr(s,l,{center:E=!1,preRotate:U=!0}={}){return new Promise((B,Q)=>{new F_().load(s,ne=>{if(ne.computeBoundingBox(),ne.computeVertexNormals(),E){const Te=new He;ne.boundingBox.getCenter(Te),ne.translate(-Te.x,-Te.y,-Te.z),ne.computeBoundingBox()}const pe=l||Ta(h.initialColor),ye=new An(ne,pe);if(U){const Te=St.degToRad,qe=b;ye.setRotationFromEuler(new bi(Te(qe.x),Te(qe.y),Te(qe.z),"YXZ"))}B({mesh:ye,geo:ne})},void 0,ne=>Q(ne))})}function jn(s,{disposeMaterial:l=!1}={}){if(s)try{Ge?.remove(s),s.geometry?.dispose?.(),l&&s.material?.dispose?.()}catch{}}function Aa(){Ct++,ar(),jn(et),jn(Ve),jn(R),jn(Ae,{disposeMaterial:!0}),et=null,Ve=null,R=null,Ae=null,Se=null,st=null;try{me?.dispose?.()}catch{}me=null;try{Le?.dispose?.()}catch{}Le=null,Re=null,Oe=null,Ge=null,We=!1}function Uo(s){s&&(s.position.copy(R.position),s.quaternion.copy(R.quaternion),s.renderOrder=10,s.visible=!!vi.value)}async function pr(s){const l=++Ct;jn(et),jn(Ve),jn(R),et=null,Ve=null,R=null,ut.set(0,0,0),me=me||Ta(h.initialColor);const E=xa(s||ta);S=E;const{mesh:U,geo:B}=await fr(E,me,{center:!1,preRotate:!0});if(l!==Ct||!Ge)return;B.computeBoundingBox();const Q=new He;B.boundingBox.getCenter(Q),B.translate(-Q.x,-Q.y,-Q.z),B.computeBoundingBox(),ut.copy(Q);const ne=new He;B.boundingBox.getSize(ne),Ye=Math.max(1e-6,ne.x),U.position.set(-(ne.x*h.anchorFracX)+ne.x*h.localOffXFrac,-(ne.y*h.anchorFracY)+ne.x*h.localOffYFrac,-(ne.z*h.anchorFracZ)+ne.x*h.localOffZFrac),U.renderOrder=10,U.visible=!!vi.value,R=U,Ge.add(R);const pe=Gl(E);if(!pe)return;const{mesh:ye}=await fr(pe.left,me,{center:!1,preRotate:!0}),{mesh:Te}=await fr(pe.right,me,{center:!1,preRotate:!0});if(l!==Ct||!Ge||!R)return;ye.geometry.translate(-ut.x,-ut.y,-ut.z),Te.geometry.translate(-ut.x,-ut.y,-ut.z),Uo(ye),Uo(Te);const qe=St.degToRad(Number(h.hastesOpenDeg)||0),Ze=new He(0,1,0).applyQuaternion(R.quaternion);function at(Pt,yt){Pt.computeBoundingBox();const bt=Pt.boundingBox,Wt=Pt.attributes.position,qi=(bt.max.x-bt.min.x)*.04,Mn=yt?bt.max.x:bt.min.x;let Un=0,Yi=0,yn=0;for(let xn=0;xn<Wt.count;xn++)Math.abs(Wt.getX(xn)-Mn)<qi&&(Un+=Wt.getY(xn),Yi+=Wt.getZ(xn),yn++);return new He(Mn,yn>0?Un/yn:(bt.min.y+bt.max.y)/2,yn>0?Yi/yn:(bt.min.z+bt.max.z)/2)}const At=at(ye.geometry,pe.leftMaxX??!0),xt=at(Te.geometry,pe.rightMaxX??!1),Ft=At.clone().applyQuaternion(ye.quaternion).add(ye.position),Lt=xt.clone().applyQuaternion(Te.quaternion).add(Te.position),$t=new Zn().setFromAxisAngle(Ze,-qe),Ot=new Zn().setFromAxisAngle(Ze,qe);ye.position.sub(Ft).applyQuaternion($t).add(Ft),ye.quaternion.premultiply($t),Te.position.sub(Lt).applyQuaternion(Ot).add(Lt),Te.quaternion.premultiply(Ot),et=ye,Ve=Te,Ge.add(et),Ge.add(Ve),dr(A.value||0,V.value||0)}async function kl(){if(!Ge)return;const s=S||xa(h.initialModel)||ta;await pr(s)}let Wi;async function Xi(){return we||(De&&ve?.active?!0:(we=(async()=>{const s=performance.now();se.track("app","ar_start_requested",{physicalMobile:i,physicalMobileReason:t.reason,ipadLike:t.isIPadLike,mobileBehavior:a,trackingMode:o.value}),ct();const l=S,E=me?.color?`#${me.color.getHexString()}`:"";gi(),_i(),vn&&await vn,ar(),Wi?.disconnect?.(),window.removeEventListener("orientationchange",sn),window.removeEventListener("resize",sn),window.visualViewport?.removeEventListener("resize",sn),Sa(),Aa(),Et=0,it=0,di=0,fn=[],Qt=!1,Nn.reset(0),pn.stop(),tr();const U=await al();await il(U);const B=Ee.value;if(En||!B)return U.getTracks().forEach(Ze=>Ze.stop()),se.track("camera","startup_cancelled",{reason:En?"component_unmounted":"video_element_unavailable"},"warn"),!1;if(ve=U,B.srcObject=U,await new Promise(Ze=>{const at=()=>Ze();B.addEventListener("loadedmetadata",at,{once:!0}),B.readyState>=1&&(B.removeEventListener("loadedmetadata",at),Ze())}),await B.play(),await uu(),En||Ee.value!==B)return U.getTracks().forEach(Ze=>Ze.stop()),se.track("camera","startup_cancelled",{reason:"view_changed"},"warn"),!1;const Q=B.videoWidth,ne=B.videoHeight;nl(U),se.track("camera","video_ready",{width:Q,height:ne,settings:m.value}),Zc("camera_started"),cl();const pe=vo();await Ol(pe.width,pe.height),se.track("webgl","three_renderer_ready",{renderer:Le?.capabilities?{isWebGL2:Le.capabilities.isWebGL2,maxTextures:Le.capabilities.maxTextures,precision:Le.capabilities.precision}:{}}),Vi(pe.width,pe.height),Bl(),E&&(me=Ta(E));const ye=l||(h.initialModel?xa(h.initialModel):ta);pr(ye).catch(Ze=>(se.captureError("rendering","frame_model_load_failed",Ze,{mainPath:ye}),!1)),Ei(),Wi=new ResizeObserver(()=>Ei()),Wi.observe(document.documentElement),window.addEventListener("orientationchange",sn),window.addEventListener("resize",sn),window.visualViewport?.addEventListener("resize",sn),go(o.value),Kt.collecting=h.autoCalibrate,Kt.samples=[],Kt.ipd0Ndc=null,ft=0;const Te=nr().catch(async Ze=>(se.captureError("mediapipe","cached_landmarker_rejected",Ze),Ze?.workerInitializationFailed?null:(ha=!0,nr({forceRecreate:!0,preferCpu:!0,allowWorker:!1})))),qe=Te.then(()=>ht?un?Jc("camera_started"):Qc("camera_started"):it).catch(Ze=>(se.captureError("camera","orientation_probe_unexpected_failure",Ze),it));return await Promise.all([qe,Te]),De=!0,Di.confirm(zt?.key||"",performance.now()),_i(),wo(),se.track("tracking","tracking_started",{inputWidth:de,inputHeight:xe,executionContext:un?"worker":"main_thread",startupDurationMs:Number((performance.now()-s).toFixed(1)),callback:typeof Ee.value?.requestVideoFrameCallback=="function"?"requestVideoFrameCallback":"requestAnimationFrame"}),sn("camera_started"),!0})().catch(s=>(De=!1,Cn(!1),gi(),_i(),Sa(),Aa(),console.error("[VideoRA] Falha ao iniciar câmera:",s),se.captureError("app","ar_start_failed",s),!1)).finally(()=>{we=null}),we))}function Vl(s){const l=s.faceLandmarks?.[0];if(!l){if(!Qt){const U=pn.observeNoFace({processedFrames:hn,now:performance.now()});if(U.fallback){xo(U,"orientation_bootstrap_no_face_timeout"),No();return}if(U.changed){hi(U,"orientation_bootstrap_no_face");return}}Oi||(Oi=performance.now()),performance.now()-Oi>=1e4&&(se.track("tracking","face_not_detected_for_10s",{processedFrames:hn,latencyMs:Number(L.value.toFixed(2))},"warn"),Oi=performance.now()),No();return}if(!Qt){const U=pn.observeFace({processedFrames:hn,now:performance.now()});if(U.fallback){xo(U,"orientation_bootstrap_face_timeout");return}if(U.changed){hi(U,"orientation_bootstrap_face_unconfirmed");return}}if(!zl(l)){if(!Qt){Ge&&(Ge.visible=!1),Ae&&(Ae.visible=!1),Ma();return}lo+=1,Oi=0,po||(po=!0,se.track("tracking","first_face_detected",{processedFrames:hn,latencyMs:Number(L.value.toFixed(2)),points:l.length})),ft=0,Fl(l,s.facialTransformationMatrixes?.[0]||null)}}function zl(s){const l=cg(s,di),E=Qr(l);if(!Number.isFinite(E))return!1;const U=tc(l),B=nc({calculatedRotation:U,eyeLineAngleDeg:E,activeRotation:Qt?it:null});if(B===null)return!1;const Q=La(B,en.value);if(Qt){const Te=Nn.observe(Q,performance.now()),qe={eyeLineAngleDeg:Number(E.toFixed(2)),rawObservedRotation:B,previewMirrored:en.value,previousRotation:Et,candidateRotation:Te.candidateRotation??Q,sampleCount:Te.sampleCount||0,windowSamples:Te.windowSamples||0,stableMs:Number((Te.stableMs||0).toFixed(1)),confidence:Number((Te.confidence||0).toFixed(3)),requestedOrientation:zt?.key||"",streamWidth:m.value.width||0,streamHeight:m.value.height||0,screenType:window.screen?.orientation?.type||""};if(Te.rejected&&(Cn(!1),se.track("camera","content_orientation_candidate_rejected",{...qe,candidateRotation:Te.rejected.candidateRotation,sampleCount:Te.rejected.sampleCount,windowSamples:Te.rejected.windowSamples,stableMs:Number(Te.rejected.stableMs.toFixed(1)),confidence:Number(Te.rejected.confidence.toFixed(3))},"info")),Te.candidateStarted&&(Cn(!0),se.track("camera","content_orientation_candidate_detected",qe,"info")),Te.changed){Cn(!1),Jt=null;const Ze=Et,at=it;it=B,Et=Te.activeRotation,se.track("camera","content_orientation_recalibrated",{...qe,previousRawRotation:at,rawCorrectionDeg:it,previousRotation:Ze,correctionDeg:Et},"warn");const At=Ea("content_orientation_recalibrated");return queueMicrotask(()=>{Ao("content_orientation_recalibrated")}),So(it,Ee.value?.videoWidth||0,Ee.value?.videoHeight||0),$n("camera_content_recalibrated"),At}return!1}if(fn.push(B),fn.length<10)return!1;fn=fn.slice(-12);const ne=ag(fn,{minimumSamples:10,requiredRatio:.9});if(ne===null)return!1;const pe=it;it=ne,Et=La(it,en.value),Qt=!0,Nn.reset(Et,performance.now()),el(),se.track("camera","content_orientation_resolved",{eyeLineAngleDeg:Number(E.toFixed(2)),sampleCount:fn.length,rawCorrectionDeg:it,previewMirrored:en.value,correctionDeg:Et,requestedOrientation:zt?.key||"",streamWidth:m.value.width||0,streamHeight:m.value.height||0,screenType:window.screen?.orientation?.type||""},Et?"warn":"info");const ye=Ea("content_orientation_resolved");return $n("camera_content_resolved"),ye||pe!==it}function Ei(){const s=Number(tt.value?.dataset?.nw||0),l=Number(tt.value?.dataset?.nh||0);if(!s||!l)return;const E=window.innerWidth,U=window.innerHeight,B=Math.max(E/s,U/l);tt.value.style.transform=`translate(-50%, -50%) scale(${B})`}function Wl(){it=0,Et=0,fn=[],Qt=!1,Jt=null,Cn(!1),Nn.reset(0),pn.stop(),Ea("content_orientation_reset"),$n("camera_content_reset")}function Xl(s="manual"){Qt&&(Nn.reset(Et,performance.now()),se.track("camera","content_orientation_watchdog_rearmed",{reason:s,rawCorrectionDeg:it,correctionDeg:Et,requestedOrientation:zt?.key||"",screenType:window.screen?.orientation?.type||"",...jt()}))}function hr(s="viewport_changed",l=500){kt&&window.clearTimeout(kt),kt=window.setTimeout(()=>{kt=0,ql(s)},l)}async function ql(s){if(En||document.visibilityState!=="visible")return;const l=jt(),E=va(),U=Di.observe({key:E.key,width:l.innerWidth,height:l.innerHeight,now:performance.now()});if(U.pending){hr("viewport_stability_pending",250);return}if(!(qa||!De)){if(!U.confirmed||E.key===zt?.key){Ei();return}qa=!0,Di.confirm(E.key,performance.now()),Wl(),se.track("camera","orientation_restart_started",{reason:s,previous:zt?.key||"",current:E.key,stableMs:U.stableMs,stabilitySamples:U.samples,...l});try{await we,De=!1,we=null;const B=await Xi();se.track("camera","orientation_restart_completed",{orientation:zt?.key||"",restarted:!!B,...jt()})}catch(B){se.captureError("camera","orientation_restart_failed",B),Di.reset(zt?.key||"")}finally{qa=!1}}}function sn(s){Ei();const l=typeof s=="string"?s:s?.type||"viewport_changed",E=va();(E.key!==zt?.key||l==="orientationchange"||l==="camera_started")&&se.track("camera","screen_orientation_changed",{reason:l,previous:zt?.key||"",current:E.key,...jt()}),$n(l),hr(l)}function Yl(){return!Hi||!ga?{ready:!1,status:fi?"processando":"aguardando",stableFrames:Yn,requiredStableFrames:uc}:{ready:!0,image:ga,details:Hi}}function Kl(){tr(),se.track("analysis","face_shape_report_reset")}function $l(s,l={},E="info"){se.track("analysis",s,l,E)}function jl(){return tr(),se.track("analysis","face_shape_reanalysis_requested"),!0}async function Zl(s){try{const l=s?xa(s):ta;await pr(l),Kt.collecting=h.autoCalibrate,Kt.samples=[],Kt.ipd0Ndc=null}catch{}}function Ql(s){const l=new Mt(typeof s=="string"?s:s||"#000");me||(me=Ta(s)),me.color.copy(l),me.needsUpdate=!0,[R,et,Ve].forEach(E=>{E?.material?.color&&E.material.color.copy(l)})}function Fo(){if(!Re||!Oe||!Le)return null;mi(),Le.render(Re,Oe);const s=W.value?.width||1280,l=W.value?.height||720,E=document.createElement("canvas");E.width=s,E.height=l;const U=E.getContext("2d");return en.value&&(U.translate(s,0),U.scale(-1,1)),U.drawImage(W.value,0,0,s,l),U.drawImage(J.value,0,0,s,l),U.drawImage(ge.value,0,0,s,l),E.toDataURL("image/png")}function Jl(){if(!W.value)return null;mi();const s=W.value.width||1280,l=W.value.height||720,E=document.createElement("canvas");E.width=s,E.height=l;const U=E.getContext("2d");return en.value&&(U.translate(s,0),U.scale(-1,1)),U.drawImage(W.value,0,0,s,l),E.toDataURL("image/jpeg",.92)}async function eu(){try{await we}catch{}De=!1,we=null,gi(),_i(),Wi?.disconnect?.(),window.removeEventListener("orientationchange",sn),window.removeEventListener("resize",sn),window.visualViewport?.removeEventListener("resize",sn),Sa(),Aa(),se.track("lifecycle","ar_suspended_for_try_on")}async function tu(){return En||De?De:(se.track("lifecycle","ar_resuming_after_try_on"),we=null,Xi())}function Oo(s){return x=!0,T.value=Number(s)||0,T.value}function mr(s){return M=!0,I.value=Number(s)||1,_t?.visagismo?.armacaoEscala&&(_t.visagismo.armacaoEscala.value=I.value),I.value}function nu(s){const l=Number(I.value)||1;return mr(St.clamp(l+(Number(s)||0),.9,2.8))}function Bo(s){return C.value=li(s),Vi(),C.value}return du(()=>{se.start({appVersion:_t?.app?.versao?.value||"",route:_t?.app?.rota?.value||"visagismo"}),Vt=s=>{String(s?.message||"").includes("ResizeObserver loop completed")||se.captureError("javascript","window_error",s?.error||s?.message||"Erro global",{arquivo:s?.filename||"",linha:s?.lineno||0,coluna:s?.colno||0})},Rn=s=>{se.captureError("javascript","unhandled_rejection",s?.reason||"Promise rejeitada")},vt=()=>{se.track("lifecycle","visibility_changed",{state:document.visibilityState}),document.visibilityState==="visible"?(Xl("visibility_restored"),Di.reset(zt?.key||""),hr("visibility_restored",300)):kt&&(window.clearTimeout(kt),kt=0)},qt=()=>se.track("network","online"),Yt=()=>se.track("network","offline",{},"warn"),Ut=s=>{s.preventDefault?.(),se.track("webgl","context_lost",{},"error"),se.flush({keepalive:!0})},Gt=()=>se.track("webgl","context_restored"),window.addEventListener("error",Vt),window.addEventListener("unhandledrejection",Rn),document.addEventListener("visibilitychange",vt),window.addEventListener("online",qt),window.addEventListener("offline",Yt),wn=s=>{const l=performance.now();qn={alpha:Number.isFinite(s?.alpha)?Number(s.alpha.toFixed(2)):null,beta:Number.isFinite(s?.beta)?Number(s.beta.toFixed(2)):null,gamma:Number.isFinite(s?.gamma)?Number(s.gamma.toFixed(2)):null,absolute:!!s?.absolute},ao=l,Math.abs(qn.gamma||0)>=45?(Number.isFinite(Ii)||(Ii=l),Ni=Number.NEGATIVE_INFINITY):Math.abs(qn.gamma||0)<=30?(Ii=Number.NEGATIVE_INFINITY,Number.isFinite(Ni)||(Ni=l)):(Ii=Number.NEGATIVE_INFINITY,Ni=Number.NEGATIVE_INFINITY),$n("device_orientation"),l-Ni>=800&&jc("device_returned_portrait"),l-ro>=1e4&&(ro=l,se.track("sensor","device_orientation_sample",{...qn,rawContentRotationDeg:it,displayContentRotationDeg:Et,gateVisible:j.value,...jt()}))},window.addEventListener("deviceorientation",wn,{passive:!0}),J.value?.addEventListener("webglcontextlost",Ut),J.value?.addEventListener("webglcontextrestored",Gt),Nt=async()=>{se.track("camera","camera_change_requested");try{await we}catch{}De=!1,we=null,await Xi()},window.addEventListener("cameraAlterada",Nt),dn=fu({videoEl:()=>Ee.value,estaAtivo:()=>De&&!!Ee.value?.srcObject,reiniciar:async()=>{try{await we}catch{}De=!1,we=null,await Xi()},delayMs:450})}),pu(()=>{En=!0,window.removeEventListener("error",Vt),window.removeEventListener("unhandledrejection",Rn),document.removeEventListener("visibilitychange",vt),window.removeEventListener("online",qt),window.removeEventListener("offline",Yt),wn&&(window.removeEventListener("deviceorientation",wn),wn=null),J.value?.removeEventListener("webglcontextlost",Ut),J.value?.removeEventListener("webglcontextrestored",Gt),Nt&&(window.removeEventListener("cameraAlterada",Nt),Nt=null),dn&&(dn(),dn=null),De=!1,gi(),_i(),Wi?.disconnect?.(),window.removeEventListener("orientationchange",sn),window.removeEventListener("resize",sn),window.visualViewport?.removeEventListener("resize",sn),kt&&(window.clearTimeout(kt),kt=0),Cn(!1),Sa(),Aa(),ht=null,un=!1,rl(),on=null,se.stop("component_unmounted")}),(s,l)=>(Si(),ji("div",{id:"AR3D",ref_key:"root",ref:wt},[rt("div",{class:hu(["present",{mirror:en.value,"present--orientation-adjusting":ce.value}])},[rt("div",{ref_key:"stage",ref:tt,class:"stage"},[rt("video",{ref_key:"videoEl",ref:Ee,autoplay:"",playsinline:"",muted:"",class:"camera-source"},null,512),rt("canvas",{ref_key:"canvasFrame",ref:W,class:"layer"},null,512),rt("canvas",{ref_key:"canvas3d",ref:J,class:"layer"},null,512),rt("canvas",{ref_key:"canvasLandmarks",ref:ge,class:"layer hud"},null,512)],512)],2),Ra(zo,{name:"orientation-gate-fade"},{default:Vo(()=>[j.value?(Si(),ji("div",_g,[rt("div",gg,[Ra(mu,{name:"screen_rotation",class:"orientation-gate__icon"}),l[7]||(l[7]=rt("div",{class:"orientation-gate__title"},"Ative a rotação automática",-1)),l[8]||(l[8]=rt("div",{class:"orientation-gate__text"}," O aparelho está deitado, mas a tela continua na vertical. Ative a rotação automática para usar o Optiface em modo horizontal. ",-1)),Pe.value?(Si(),_u(gu,{key:0,onClick:l[0]||(l[0]=E=>_o("orientation_gate_button")),loading:Y.value,label:"USAR EM HORIZONTAL",color:"primary",rounded:"",unelevated:"","no-caps":""},null,8,["loading"])):Zi("",!0),Z.value?(Si(),ji("div",vg,Dt(Z.value),1)):Zi("",!0)])])):Zi("",!0)]),_:1}),Ra(zo,{name:"orientation-gate-fade"},{default:Vo(()=>[ce.value&&!j.value?(Si(),ji("div",Eg,[Ra(vu,{color:"primary",size:"28px"}),l[9]||(l[9]=rt("span",null,"Ajustando a câmera…",-1))])):Zi("",!0)]),_:1}),Eu(_t).app.metricas.value?(Si(),ji("div",Sg,[rt("label",null,[l[10]||(l[10]=gr("Profundidade ",-1)),vr(rt("input",{type:"range",min:"-0.50",max:"0.50",step:"0.001","onUpdate:modelValue":l[1]||(l[1]=E=>T.value=E),onInput:l[2]||(l[2]=E=>Oo(T.value))},null,544),[[Er,T.value,void 0,{number:!0}]]),rt("b",null,Dt(T.value.toFixed(3)),1)]),rt("label",null,[l[11]||(l[11]=gr("Tamanho ",-1)),vr(rt("input",{type:"range",min:"0.90",max:"2.80",step:"0.01","onUpdate:modelValue":l[3]||(l[3]=E=>I.value=E),onInput:l[4]||(l[4]=E=>mr(I.value))},null,544),[[Er,I.value,void 0,{number:!0}]]),rt("b",null,Dt(I.value.toFixed(2))+"×",1)]),rt("label",null,[l[12]||(l[12]=gr("FOV ",-1)),vr(rt("input",{type:"range",min:"35",max:"95",step:"0.1","onUpdate:modelValue":l[5]||(l[5]=E=>C.value=E),onInput:l[6]||(l[6]=E=>Bo(C.value))},null,544),[[Er,C.value,void 0,{number:!0}]]),rt("b",null,Dt(C.value.toFixed(1))+"°",1)]),rt("div",Mg,[rt("span",null,"Centro do nariz: X "+Dt(D.value.x)+" px · Y "+Dt(D.value.y)+" px",1),rt("span",null,"Inclinação (rosto deitado): "+Dt(V.value.toFixed(1))+"°",1),rt("span",null,"Cabeça virada (esq/dir): "+Dt(A.value.toFixed(1))+"°",1),rt("span",null,"Cabeça up/down (esq/dir): "+Dt(F.value.toFixed(1))+"°",1),rt("span",null,"Tipo de rosto: "+Dt(Ke.value),1),rt("span",null,"Predição: "+Dt(ot.value),1),rt("span",null,"Tracking: "+Dt(o.value)+" · "+Dt(L.value.toFixed(1))+" ms",1),rt("span",null,"Cam: "+Dt(m.value.width||0)+"x"+Dt(m.value.height||0)+" · "+Dt(m.value.frameRate?m.value.frameRate.toFixed(0):"0")+" fps · "+Dt(m.value.facingMode||"unknown"),1),rt("span",null,"Input: "+Dt(_.value.width||0)+"x"+Dt(_.value.height||0)+" · aspect "+Dt(m.value.aspectRatio?m.value.aspectRatio.toFixed(3):"--"),1)]),rt("button",{class:"btn",onClick:yo},"Marcadores"),rt("button",{class:"btn",onClick:Po},"Proporções"),rt("button",{class:"btn",onClick:_l}," Tracking "+Dt(o.value==="high"?"HQ":"Normal"),1),rt("button",{class:"btn",onClick:Fo},"📸")])):Zi("",!0)],512))}},Kg=cu(kg,[["__scopeId","data-v-142c335e"]]);export{Kg as V,Yg as a,Y_ as n};
