import { keyframes } from "./@stitches.config";

const fadein = keyframes({
    "0%":{
        opac:"0",

    },
    "100%":{
        opac:"1",

    }
})


const fadeinScale = keyframes({
    "0%":{
        opac:"0",
        transform:"scale(1.1)"

    },
    "100%":{
        opac:"1",
        transform:"scale(1)"
    }
})


const fadeinScaleLandPageImg = keyframes({
    "0%":{
        opac:"0",
        transform:"scale(1.1)"

    },
    "100%":{
        opac:"0.2",
        transform:"scale(1)"
    }
})

const fadeinTop = keyframes({
    "0%":{
        opacity:"0",
        transform:"translateY(-100px)",
    },
    "100%":{
        opacity:"1",
        transform:"translateY(0px)",
    }
})

const fadeout = keyframes({
    "0%":{
        opacity:"1",
        
    },
    "100%":{
        opacity:"0",
        
    }
})

export {fadein , fadeinTop , fadeinScale , fadeinScaleLandPageImg , fadeout}