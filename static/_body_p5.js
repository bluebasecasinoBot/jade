import { __c , __SYD, __sC, __p} from "./sydneyLib/sydneyDom.js"

__SYD._p5 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'#791102',
                    flexDirection:__p(['_p5','__flex'],'row'),
                    justifyContent:'center',
                    padding:'20px 10px',
                    minHeight:'unset',
                    color:'#fff'
                    // transform:'unset'
                }
            }),
            id:'tokenomics'
        },
        [
            // __c(
            //     'div',
            //     {
            //         style:`min-height:${__p(['_p5','__size'],'4.5rem') === '4.5rem' ? '50vh' : '300px'};min-width:${__p(['_p5','__size'],'4.5rem') === '4.5rem' ? '40%' : '100%'};background-image:url("./assets/peck.gif");`
            //     },
            //     [
                    
            //     ],
            //     {
            //         genericStyle:['bg_cover'],
            //     }
            // ),
            __c(
                'div',
                {
                    style:'width:fit-content;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:left;padding:20px;border:3px solid #171717;border-top:7px solid #171717;border-radius:20px;row-gap:10px;background:#d83f2a'
                },
                [
                    __c('h1',{style:`font-weight:900;font-weight:100;font-size:${__p(['_p5','__size'],'4rem')};width:max-content;`},['Tokenomics']),
                    __SYD.about_text_tokenomics('Tac 0/0'),
                    __SYD.about_text_tokenomics('1B supply'),
                    __SYD.about_text_tokenomics('Lp burnt'),
                ]
            )
        ],
        {
            createState:{
                stateName:'_p5',
                state:{__size:'4.5rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem',__flex:'column'}}],
                defState:{__size:'4.5rem',__flex:'row'}
            }
        }
    )
}

__SYD.about_text_tokenomics = (text) =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;text-align:left;font-weight:100;width:max-content;padding:15px 20px;width:200px;text-align:center;',class:'btn_buy'},[
        text
    ])
}