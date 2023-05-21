import React from 'react'
// import Main_Header_Modal from '../Custom_Component/For_Main_Header/Modal'
import { Button, ThemeProvider, createTheme } from '@mui/material'

let Buttons = {
        csspropertiesForButton1 : {
            height: 300,
            width: 400,
            color: "red",
            // backgroundColor: "lime",
            variant:"contained"

        },
        csspropertiesForButton2:{
            height: 100,
            width: 200,
            color: "black",
            // backgroundColor: "purple",
            name:"sss",
            variant:"outlined"

        },
        csspropertiesForButton3:{
            height: 500,
            width: 200,
            color: "teal",
            // backgroundColor: "green",
            name:"Jalfffbei",
            variant:"text"
        }
}

let cssproperties: any = {
    height: 100,
    width: 200,
    color: "orange",
    backgroundColor: "blue"
}

let createCustomTheme = (props: any) => {
    return createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        ...props
                    }
                }
            }
        }
    })
}


const Main_Footer = () => {
    return (
        <>
                {Object.values(Buttons).map((button)=>{
                    return <>
                        <ThemeProvider theme={createCustomTheme(button)}>
                        <Button variant={button.variant as any}>{button.name}</Button>
                        </ThemeProvider>
                    </>
                })}

        </>

    )
}

export default Main_Footer