import {
    Animated,
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { Component } from 'react';

// import images from '../images';
import letters from './letters';

const { width: screenWidth } = Dimensions.get('window');
const width = screenWidth - 125;

export class Planet extends Component {
    static WIDTH = width;

    render = () => {
        const { animatedValue, planet, index } = this.props;

        return (
            <Animated.View style={styles.container}>
                <Animated.Image
                    style={[
                        styles.planet,
                        {
                            transform: [
                                {
                                    scale: animatedValue.interpolate({
                                        inputRange: [index - 1, index, index + 1],
                                        outputRange: [1, 1.6, 1],
                                        extrapolate: 'clamp'
                                    })
                                },
                                {
                                    rotate: animatedValue.interpolate({
                                        inputRange: [index - 1, index, index + 1],
                                        outputRange: ['-90deg', '0deg', '90deg'],
                                        extrapolate: 'clamp'
                                    })
                                }
                            ]
                        }
                    ]}
                    source={require('./assets/earth.png')}
                />
                <Animated.Text
                    style={[
                        styles.title,
                        {
                            opacity: animatedValue.interpolate({
                                inputRange: [index - 1, index, index + 1],
                                outputRange: [0, 1, 0]
                            }),
                            transform: [
                                {
                                    translateY: animatedValue.interpolate({
                                        inputRange: [index - 1, index, index + 1],
                                        outputRange: [-30, 0, -30],
                                        extrapolate: 'clamp'
                                    })
                                }
                            ]
                        }
                    ]}>
                    {planet.title.toUpperCase()}
                </Animated.Text>
            </Animated.View>
        );
    };
}

export const BottomBar = ({ destination }) => (
    <View style={styles.bottomBar}>
        <View style={styles.tagLineContainer}>
            <Text style={styles.tagLine}>Explore the Solar System</Text>
        </View>
       

    </View>
);

const styles = StyleSheet.create({
    container: {
        width: width,
        height: width,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
        backgroundColor: 'yellow'
    },
    planet: {
        width: width -500,
        height: width - 500
    },
    title: {
        fontSize: 32,
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 1.2,
        color: 'green',
        backgroundColor: 'transparent'
    },
    tagLine: {
        color: 'white',
      
        fontSize: 15
    },
    tagLineContainer: {
        paddingBottom: 4,
        borderBottomWidth: 2,
        borderBottomColor: '#6D214F'
    },
    ports: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 16,
        height: 150,
        width: '90%'
    },
    port: {
        borderRadius: 4,
        backgroundColor: '#2C3A47',
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    portTitle: {
        color: 'white',
        fontSize: 48,
      
    },
    bottomBar: {
        marginTop: 'auto',
        marginBottom: 16,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bookVoyageButton: {
        backgroundColor: '#6D214F',
        height: 60,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4
    },
    bookVoyageTitle: {
        color: 'white',
        letterSpacing: 1.3,
        fontSize: 24,

    }
});
