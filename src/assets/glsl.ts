export const vertex = /* glsl */ `
  attribute vec3 position;
  attribute vec4 random;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;

  varying vec4 vRandom;

  void main() {
    vRandom = random;

    // positions are 0->1, so make -1->1
    vec3 pos = position * 2.0 - 1.0;

    // Scale towards camera to be more interesting
    pos.z *= 10.0;

    // modelMatrix is one of the automatically attached uniforms when using the Mesh class
    vec4 mPos = modelMatrix * vec4(pos, 1.0);

    // add some movement in world space
    float t = uTime * 0.6;
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x);
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w);
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z);

    // get the model view position so that we can scale the points off into the distance
    vec4 mvPos = viewMatrix * mPos;
    gl_PointSize = 300.0 / length(mvPos.xyz) * (random.x + 0.1);
    gl_Position = projectionMatrix * mvPos;
  }
`;

export const fragment = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec3 uColor;


  varying vec4 vRandom;

  void main() {
    vec2 uv = gl_PointCoord.xy;

    float circle = smoothstep(0.5, 0.4, length(uv - 0.5));

    gl_FragColor.rgb = uColor;
    gl_FragColor.a = circle;
  }
`;
