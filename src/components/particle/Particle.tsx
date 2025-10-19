import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: "push",
                        // },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.5,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#614c85",
                    },
                    links: {
                        color: "#614c85",
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 55,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle" ,
                    },
                    size: {
                        value: { min: 0.2, max: 2, },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};




// // прозрачные круги
// import { useCallback } from "react";
// import type { Container, Engine } from "tsparticles-engine";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
//
// export const Particle = () => {
//     const particlesInit = useCallback(async (engine: Engine) => {
//         await loadSlim(engine);
//     }, []);
//
//     const particlesLoaded = useCallback(async (container: Container | undefined) => {
//         console.log(container);
//     }, []);
//
//     return (
//         <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//                 background: {
//                     // color: "#000010", // тёмное космическое небо
//                     color: "rgba(255,255,255,0.56)",
//                 },
//                 fpsLimit: 120,
//                 interactivity: {
//                     events: {
//                         onHover: {
//                             enable: true,
//                             mode: "repulse",
//                         },
//                         resize: true,
//                     },
//                 },
//                 particles: {
//                     number: {
//                         value: 300, // больше точек, как звёзды
//                         density: {
//                             enable: true,
//                             area: 1200,
//                         },
//                     },
//                     color: {
//                         value: ["rgba(255,255,255,0.47)", "rgb(243,245,246)", "rgb(224,216,237)"], // белые, голубые, жёлтые
//                     },
//                     shape: {
//                         type: "circle",
//                     },
//                     opacity: {
//                         value: 1,
//                         animation: {
//                             enable: true,
//                             speed: 1,
//                             minimumValue: 0.3,
//                             sync: false,
//                         },
//                     },
//                     size: {
//                         value: { min: 0.5, max: 200 },
//                     },
//                     move: {
//                         enable: true,
//                         speed: 0.2, // медленно двигаются, как в глубоком космосе
//                         direction: "none",
//                         random: true,
//                         straight: false,
//                         outModes: {
//                             default: "out",
//                         },
//                     },
//                     twinkle: {
//                         particles: {
//                             enable: true,
//                             frequency: 0.1,
//                             opacity: 1,
//                         },
//                     },
//                 },
//                 detectRetina: true,
//             }}
//         />
//     );
//  };
//
//
//
//
//
