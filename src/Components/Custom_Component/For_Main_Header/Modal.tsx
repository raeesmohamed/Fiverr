import * as React from 'react';
import { Box, Button, Modal, Typography, createTheme } from '@mui/material'
import { NavBarIndividualComponentNames } from '../../../static';
import * as BsIcons from 'react-icons/bs';
import * as FcIcons from 'react-icons/fc'
import "./Modal.scss";
import { ThemeProvider } from '@emotion/react';
// import styled from '@mui/system';

const createModalstyle = (modalHeight: string, modalWidth: string) => {
    return {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: parseInt(modalHeight) || null,
        width: parseInt(modalWidth) || null,
        bgcolor: 'background.paper',
        borderRadius: '5px',
        // border: '2px solid white',
        outline: "none",
    }
}


const createCustomTheme = (buttonColor: string) => {
    return createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        minWidth: 350,
                        height: 45
                    },

                },
            }
        },
        palette: {
            primary: {
                main: buttonColor,
            }
        }
    })
}

export default function Main_header_Sticky_Modal({ data }: { data: NavBarIndividualComponentNames }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const checkModules = (module: string) => {
        let firstTwoLetter = module.toLocaleLowerCase().slice(0, 2)
        switch (firstTwoLetter) {
            case 'bs':
                return BsIcons
            case "fc":
                return FcIcons
            default:
                return Error("That Icon module or Icons doesnt exist")
        }
    }
    return (
        <div>
            {
            data.htmlElement==="span" &&
                <>
                    <span onClick={handleOpen}>
                        {data.icon && ((icons: string) => {
                            let checkModule = checkModules(icons)
                            const IconComponent: React.FC<any> = checkModule[icons as never]
                            return <IconComponent />
                        })(data.icon)}
                        {data.name}
                    </span>                    
                </>
            }
            {
                data.htmlElement==="button" &&
                <>
                    <Button onClick={handleOpen}>{data.name}</Button>
                </>
            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="modalComponent" sx={createModalstyle(data.popupOrRedirectorModal?.cssdata?.height ?? "", data.popupOrRedirectorModal?.cssdata?.width ?? "")}>
                    {
                        data.popupOrRedirectorModal?.cssdata?.modalName === "Language" ?
                            <Box>
                                <Typography></Typography>
                            </Box>
                            :

                            data.popupOrRedirectorModal?.cssdata?.modalName === "SignIn" || data.popupOrRedirectorModal?.cssdata?.modalName === 'Join' ?
                                <>
                                    <Box className="left-modal"></Box>
                                    <Box className="right-modal">
                                        <Box className="right-modal-container">
                                            <Box className="close"></Box>
                                            <Box
                                                className={data.popupOrRedirectorModal.cssdata.position === "flex-start" ? "modal-main-flex-start"
                                                    : data.popupOrRedirectorModal.cssdata.position === 'center' ? 'modal-main-flex-center'
                                                        : data.popupOrRedirectorModal.cssdata.position === "flex-end" ? "modal-main-flex-end"
                                                            : ""
                                                }
                                            >
                                                <Typography className="modal-title">{data.popupOrRedirectorModal.cssdata.title}</Typography>
                                                {Object.values(data.popupOrRedirectorModal.cssdata.loginVia ?? "").map((buttons): any => {
                                                    return (
                                                        <Box>
                                                            <ThemeProvider theme={createCustomTheme(buttons.buttonColor)}>
                                                                <Button variant={buttons.variant}>
                                                                    {
                                                                        buttons.icon && ((icons: string) => {
                                                                            let checkModule = checkModules(icons)
                                                                            const IconComponent: React.FC<any> = checkModule[icons as never]
                                                                            return <IconComponent />
                                                                        })(buttons.icon)
                                                                    }
                                                                    {buttons.text}
                                                                </Button>
                                                            </ThemeProvider>

                                                        </Box>
                                                    )
                                                })}

                                                {Object.values(data.popupOrRedirectorModal.cssdata.field ?? "").map((field): any =>
                                                    <div>{field}</div>
                                                )}
                                            </Box>
                                        </Box>
                                    </Box>
                                </>


                                :
                                null
                    }
                </Box>
            </Modal>            
        </div>
    );
}


//undefined= [promise:pending]==>http in the bacjground bcasue of ajaX=>STORED IN A MEMEROY LCOATION IN BROWSER,ONCE IT IS DPNE
                // ==>CALLBACK QUEUUE==> MICROTASK QUEUE==>     .then(.finally) or .catch(.finally) ===>
                // ==>event checks if main stack is empty?==> if empty then evbent loop put from microtask to main stackClasses,(and microtask is given more priroity trhan callbakcqueue)
                //it starts executing resolve() or reject()==>now that undefiend wii be full
//A
//A = [promise :resolved or reject,data:if htttp using then readable stream() or resolve or reject value]

//A.then((a)=>a.json()).
// then((a)=>console.log(a))

// A.then((a)=>console.log(a))


//

// const a = async()=>{
//     let a = getPokemon(); // returns a promise ;ie pending
//     let b = await a;//this resolves the values;
//     console.log(b)
//     let c = await a;//this revoles teh values too
//     console.log(c)
// }





// let obj = {
//     component1:{
//         heigth:"100",
//         width:"200"
//     },
//     component2:{
//         height:"100",
//         width:"300"
//     }
    
// }

// when im mapping throuh obj ,and components are generated dynamically
//Sass

// import "aa.scss"


// obj.map((val,index)=>{

//     return(
//         <div id={`components${index}`}>
            
//         </div>
//     )
// })

// now is it possble to generated id in sass dynamically,and then the height adn teh width should be passsed into the dynamically created sass id
//anything im sending from here==> 