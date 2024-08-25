uniform float uTime;
varying vec2 vUv;

void main() {
    vec3 color = 0.5 + 0.5 * cos(uTime + vUv.xyx + vec3(0, 2, 4));
    gl_FragColor = vec4(color, 1.0);

    #include <tonemapping_fragment>
    #include <colorspace_fragment>
}
