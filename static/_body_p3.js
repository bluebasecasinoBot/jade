import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'#cf3d27',
                    flexDirection:__p(['_p3','__flex'],'row'),
                    justifyContent:'flex-start',
                    padding:'20px 10px',
                    minHeight:'unset'
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'3rem') === '3rem' ? '40%' : '100%'};background-image:url("./assets/a2.png");background-size:contain;border-radius:15px;`,
                },
                [
                    
                ],
                {
                    genericStyle:['bg_cover'],
                }
            ),
            __c(
                'div',
                {
                    style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column'
                },
                [
                    __c('h1',{style:`color:#fff;font-family:sunrise;font-weight:900;font-weight:100;font-size:${__p(['_p3','__size'],'3rem')}`},['ABOUT']),
                    __SYD.about_text(),
                    __SYD.about_text_2(),
                ]
            )
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'3rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'2rem',__flex:'column'}}],
                defState:{__size:'3rem',__flex:'row'}
            }
        }
    )
}

__SYD.about_text = () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;max-width:500px;text-align:center;font-weight:100;'},[
        `Just as the Jade Emperor governs the heavens,`,__c('span',{style:'font-family:sunrise;font-size:14px;'},[" $JADE"]),` aims to guide the meme coin space with innovation and excitement. Our goal is to create a coin that's not only entertaining but also meaningful, bringing a touch of ancient grandeur to the modern crypto world.`
    ])
}


__SYD.about_text_2 = () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;max-width:500px;text-align:center;font-weight:100;margin-top:8px;'},[
        `Unleash the power of the heavens with Jade Emperor `, __c('span',{style:'font-family:sunrise;font-size:14px;'},[" $JADE"]) ,` – where ancient myth meets modern crypto innovation!**`
    ])
}