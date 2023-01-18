import { FC } from "react"
import { TouchableOpacity, Text } from "react-native"

interface CustomButtonProps {
label: string
onClick: ()=>void
}

export const CustomButton:FC<CustomButtonProps> = ({label, onClick})=>{

    return (
        <TouchableOpacity onPress={onClick} ><Text>{label}</Text></TouchableOpacity>
    )
}