import { Button } from "react-native-elements"
import { Percentage } from '@tarot-viii/ui/src/theme/fonts'
import { ROUTES } from '../navigation/config'
import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        paddingLeft: 0,
        paddingRight: 40,
        position: 'relative',
        left: -5
    },
    icon: {
        position: 'absolute',
        left: 0
    }
})

const CloseScreen = ({ navigation }) => {
    const onClose = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: ROUTES.screens.HOME.name }],
        })
    }
    return (
        <Button
            style={styles.container}
            type="clear"
            iconContainerStyle={styles.icon}
            icon={{
                name: "close",
                size: Percentage(4),
                color: "black"
            }}
            onPress={onClose}
        />
    )
}
export default CloseScreen