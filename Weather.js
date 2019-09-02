import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
    Mist: {
        iconName:"weather-hail",
        gradient: ["#4da0b0", "#d39d38"],
        title: "In case it is too long",
        subtitle: "This line as well"
    }
};

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions["Mist"].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size={96} 
                    name={weatherOptions["Mist"].iconName} 
                    color="white"
                />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <View>
                    <Text style={styles.title}>{weatherOptions["Mist"].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions["Mist"].subtitle}</Text>
                </View>
            </View>
        </LinearGradient>
    );  

}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 54,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})
