/* =====================================================
   B&B AI - API CONFIGURATION
   ===================================================== */

const BBAI_CONFIG = {

    /* =========================
       SUPABASE
    ========================= */

    supabase: {
        url: "https://pgzkclbzouxtheyabjhy.supabase.co/rest/v1/",

        publishableKey: "sb_publishable__KjAlRfBBwv07nr7Rwb_CA_ijkB8rTi"
    },


    /* =========================
       B&B AI LOCAL API
    ========================= */

    ai: {
        baseUrl: "https://bbai.loca.lt",

        endpoints: {
            chat: "/v1/chat",
            image: "/v1/image",
            video: "/v1/video",
            music: "/v1/music",
            model3d: "/v1/3d",
            text: "/v1/text"
        }
    }

};
