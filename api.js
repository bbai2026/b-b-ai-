/* =====================================================
   B&B AI - API CONFIGURATION
   ===================================================== */

const BBAI_CONFIG = {

    /* =========================
       SUPABASE
       Public publishable key only. Never put a
       service_role/secret key in frontend code.
    ========================= */

    supabase: {

        url: "https://pgzkclbzouxtheyabjhy.supabase.co",

        publishableKey:
            "sb_publishable__KjAlRfBBwv07nr7Rwb_CA_ijkB8rTi"

    },


    /* =========================
       B&B AI API
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
