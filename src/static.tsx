export type Translation = {
    en: {
        BelowNavBars: BelowNavBars,
        NavBarNames: NavBarNames
    },
    fr: {
        BelowNavBars: BelowNavBars,
        NavBarNames: NavBarNames

    },
    hi: {
        BelowNavBars: BelowNavBars,
        NavBarNames: NavBarNames

    }
    ru: {
        BelowNavBars: BelowNavBars,
        NavBarNames: NavBarNames
    }
}

export type BelowNavBars = {
    Graphics_Designs: { id: number, name: string, path: string },
    Digital_Marketing: { id: number, name: string, path: string },
    Writing_Translation: { id: number, name: string, path: string },
    Video_Animation: { id: number, name: string, path: string },
    Music_Audio: { id: number, name: string, path: string },
    Programming_Tech: { id: number, name: string, path: string },
    Photography: { id: number, name: string, path: string },
    Business: { id: number, name: string, path: string },
    AI_Services: { id: number, name: string, path: string },
}
export type NavBarNames = {
    heading:{id:number,name:string}
    fiver_business: NavBarIndividualComponentNames,
    Explore: NavBarIndividualComponentNames,
    language: NavBarIndividualComponentNames,
    Become_a_seller: NavBarIndividualComponentNames,
    Sign_In: NavBarIndividualComponentNames,
    Join: NavBarIndividualComponentNames,
}

export type NavBarIndividualComponentNames = {
    id: number,
    name: string,
    htmlElement?: string,
    icon?: string
    popupOrRedirectorModal?: { type: string, cssdata?:CssData}
}



export type CssData = {
    modalName:string,
    position?:string,
    title?:string,
    loginVia?:{
        google?:{icon:string,text:string,variant:string,buttonColor:string},
        facebook?:{icon:string,text:string,variant:string,buttonColor:string},
        apple?:{icon:string,text:string,variant:string,buttonColor:string},
    },
    height?:string,
    width?:string
    field?:{
        email?:string,
    },
    button?:{
        continue?:string
    },
    text?:{
        OR?:string,
        agreements_terms?:string,
        Already_a_member?:string,
        SignINLink?:string
    }

}



export const translation: Translation = {
    en: {
        BelowNavBars: {
            Graphics_Designs: {
                id: 1,
                name: "Graphics & Designs",
                path: "/categories/graphics-design"
            },
            Digital_Marketing: {
                id: 2,
                name: "Digital Marketing",
                path: "/categories/online-marketing"
            },
            Writing_Translation: {
                id: 3,
                name: "Writing & Translation",
                path: "/categories/writing-translation"
            },
            Video_Animation: {
                id: 4,
                name: "Video & Animation",
                path: "/categories/video-animation"
            },
            Music_Audio: {
                id: 5,
                name: "Music & Audio",
                path: "/categories/music-audio"
            },
            Programming_Tech: {
                id: 6,
                name: "Programming & Tech",
                path: "/categories/programming-tech"
            },
            Photography: {
                id: 7,
                name: "Photography",
                path: "/categories/photography"
            },
            Business: {
                id: 8,
                name: "Business",
                path: "/categories/business"
            },
            AI_Services: {
                id: 9,
                name: "AI Services",
                path: "/categories/ai-services"
            },
        },
        NavBarNames: {
            heading:{
                id:10,
                name:"fiverr"
            },
            fiver_business: {
                id: 20,
                name: "Fiverr business",
                htmlElement: "span",
                className: "blue-business"
            },
            Explore: { 
                id: 30,
                name: "Explore",
                htmlElement: "span",
                popupOrRedirectorModal: {
                     type: "popup",
                    }
                },
            language: {
                id: 40,
                name: "English",
                icon: "BsGlobe",
                htmlElement: "span",
                popupOrRedirectorModal: {
                    type: "modal",
                },

            },
            Become_a_seller: {
                id: 50,
                name: "Become a Seller",
                htmlElement: "span" 
            },
            Sign_In: {
                id: 60,
                name: "Sign In",
                htmlElement: "span", 
                popupOrRedirectorModal: {
                    type: "modal", 
                    cssdata: {
                        modalName:"SignIn",
                        position:"flex-start",  //Center,left,right 
                        title:"Sign in to your account",
                        loginVia:{
                            facebook:{icon:"BsFacebook",text:"Continue with Facebook",variant:"contained",buttonColor:"rgb(66,103,178)"},
                            google:{icon:"FcGoogle",text:"Continue with Google",variant:"outlined",buttonColor:"rgb(150,150,150)"},
                            apple:{icon:"BsApple",text:"Continue with Apple",variant:"outlined",buttonColor:"rgb(150,150,150)"},
                        },
                        height:"645",
                        width:"875",
                        field:{
                            email:"Enter your email"
                        },
                        button:{
                            continue:"Continue"
                        },
                        text:{
                            OR:"OR",
                            agreements_terms:"By joining I agree to receive emails from Fiverr",
                            Already_a_member:"Already a member?",
                            SignINLink:"Sign In"
                        }
 
                    } 
                }, 
            },
            Join: { 
                id: 70, 
                name: "Join", 
                htmlElement: "button", 
                popupOrRedirectorModal: {
                     type: "modal",
                     cssdata:{
                        modalName:"Join",
                        position:"center",
                        title:"Join Fiverr",
                        height:"480",
                        width:"332",
                     }
                    }
            }
        }
    },
    fr: {
        BelowNavBars: {
            Graphics_Designs: {
                id: 1,
                name: "Graphisme & Design",
                path: "/categories/graphics-design"
            },
            Digital_Marketing: {
                id: 2,
                name: "Marketing digital",
                path: "/categories/online-marketing"
            },
            Writing_Translation: {
                id: 3,
                name: "Rédaction & Traduction",
                path: "/categories/writing-translation"
            },
            Video_Animation: {
                id: 4,
                name: "Vidéo & Animation",
                path: "/categories/video-animation"
            },
            Music_Audio: {
                id: 5,
                name: "Musique & Audio",
                path: "/categories/music-audio"
            },
            Programming_Tech: {
                id: 6,
                name: "Programmation & Technologie",
                path: "/categories/programming-tech"
            },
            Photography: {
                id: 7,
                name: "Photographie",
                path: "/categories/photography"
            },
            Business: {
                id: 8,
                name: "Entreprise",
                path: "/categories/business"
            },
            AI_Services: {
                id: 9,
                name: "Services d'IA",
                path: "/categories/ai-services"
            },
        },
        NavBarNames: {
            heading:{
                id:10,
                name:"fiverr"
            },
            fiver_business: {
                id: 20,
                name: "Fiverr Business",
                htmlElement: "span",
                className: "blue-business"
            },
            Explore: {
                id: 30,
                name: "Explorer",
                htmlElement: "span"
            },
            language: {
                id: 40,
                name: "Francais",
                icon: "BsGlobe",
                htmlElement: "span"
            },
            Become_a_seller: {
                id: 50,
                name: "Devenir vendeur",
                htmlElement: "span"
            },
            Sign_In: {
                id: 60,
                name: "Se connecter",
                htmlElement: "span"
            },
            Join: {
                id: 70,
                name: "Rejoindre",
                htmlElement: "button"
            }
        }
    },
    hi: {
        BelowNavBars: {
            Graphics_Designs: {
                id: 1,
                name: "ग्राफिक्स और डिजाइन",
                path: "/categories/graphics-design"
            },
            Digital_Marketing: {
                id: 2,
                name: "डिजिटल मार्केटिंग",
                path: "/categories/online-marketing"
            },
            Writing_Translation: {
                id: 3,
                name: "लेखन और अनुवाद",
                path: "/categories/writing-translation"
            },
            Video_Animation: {
                id: 4,
                name: "वीडियो और एनिमेशन",
                path: "/categories/video-animation"
            },
            Music_Audio: {
                id: 5,
                name: "संगीत और ऑडियो",
                path: "/categories/music-audio"
            },
            Programming_Tech: {
                id: 6,
                name: "प्रोग्रामिंग और टेक्नोलॉजी",
                path: "/categories/programming-tech"
            },
            Photography: {
                id: 7,
                name: "फोटोग्राफी",
                path: "/categories/photography"
            },
            Business: {
                id: 8,
                name: "व्यवसाय",
                path: "/categories/business"
            },
            AI_Services: {
                id: 9,
                name: "एआई सेवाएं",
                path: "/categories/ai-services"
            },
        },
        NavBarNames: {
            heading:{
                id:10,
                name:"fiverr"
            },
            fiver_business: {
                id: 20,
                name: "फाइवर बिज़नेस",
                htmlElement: "span",
                className: "blue-business"
            },
            Explore: {
                id: 30,
                name: "अन्वेषण करें",
                htmlElement: "span"
            },
            language: {
                id: 40,
                name: "हिंदी",
                icon: "BsGlobe",
                htmlElement: "span"
            },
            Become_a_seller: {
                id: 50,
                name: "विक्रेता बनें",
                htmlElement: "span"
            },
            Sign_In: {
                id: 60,
                name: "साइन इन करें",
                htmlElement: "span"
            },
            Join: {
                id: 70,
                name: "शामिल हों",
                htmlElement: "button"
            }
        }
    },
    ru: {
        BelowNavBars: {
            Graphics_Designs: {
                id: 1,
                name: "Графика и дизайн",
                path: "/categories/graphics-design"
            },
            Digital_Marketing: {
                id: 2,
                name: "Цифровой маркетинг",
                path: "/categories/online-marketing"
            },
            Writing_Translation: {
                id: 3,
                name: "Письменный перевод",
                path: "/categories/writing-translation"
            },
            Video_Animation: {
                id: 4,
                name: "Видео и анимация",
                path: "/categories/video-animation"
            },
            Music_Audio: {
                id: 5,
                name: "Музыка и аудио",
                path: "/categories/music-audio"
            },
            Programming_Tech: {
                id: 6,
                name: "Программирование и технологии",
                path: "/categories/programming-tech"
            },
            Photography: {
                id: 7,
                name: "Фотография",
                path: "/categories/photography"
            },
            Business: {
                id: 8,
                name: "Бизнес",
                path: "/categories/business"
            },
            AI_Services: {
                id: 9,
                name: "Искусственный интеллект",
                path: "/categories/ai-services"
            },
        },

        NavBarNames: {
            heading:{
                id:10,
                name:"fiverr"
            },
            fiver_business: {
                id: 20,
                name: "Fiverr Бизнес",
                htmlElement: "span",
                className: "blue-business"
            },
            Explore: {
                id: 30,
                name: "Исследовать",
                htmlElement: "span"
            },
            language: {
                id: 40,
                name: "русский",
                icon: "BsGlobe",
                htmlElement: "span"
            },
            Become_a_seller: {
                id: 50,
                name: "Стать продавцом",
                htmlElement: "span"
            },
            Sign_In: {
                id: 60,
                name: "Войти",
                htmlElement: "span"
            },
            Join: {
                id: 70,
                name: "Присоединиться",
                htmlElement: "button"
            }
        }

    }
}
