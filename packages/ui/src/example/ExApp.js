import {
    ActivityIndicator,
    Dimensions,
    Image,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { BottomBar, Planet } from './components';
import React, { Component } from 'react';

import SideSwipe from 'react-native-sideswipe'; // 1.3.0

const { width, height } = Dimensions.get('window');

const planets = [
    { title: 'Sun', value: 'sun', abbr: 'SUN' },
    { title: 'Mercury', value: 'mercury', abbr: 'MRC' },
    { title: 'Venus', value: 'venus', abbr: 'VNS' },
    { title: 'Earth', value: 'earth', abbr: 'ERH' },
    { title: 'Tesla', value: 'tesla', abbr: 'TSL' },
    { title: 'Moon', value: 'moon', abbr: 'MON' },
    { title: 'Mars', value: 'mars', abbr: 'MAR' },
    { title: 'Jupiter', value: 'jupiter', abbr: 'JYT' },
    { title: 'Saturn', value: 'saturn', abbr: 'SAT' },
    { title: 'Uranus', value: 'uranus', abbr: 'UNS' },
    { title: 'Neptune', value: 'neptune', abbr: 'NEP' }
];

export default class ExApp extends Component {
    state = {
        currentIndex: 0,
        fontsLoaded: false
    };

    componentDidMount = async () => {
        this.setState({ fontsLoaded: true });
    };

    render = () => {
        const offset = (width - Planet.WIDTH) / 2;

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <SideSwipe
                    data={planets}
                    shouldCapture={() => true}
                    style={[styles.fill, { width }]}
                    contentContainerStyle={{ paddingTop: 100 }}
                    itemWidth={Planet.WIDTH}
                    threshold={Planet.WIDTH / 4}
                    extractKey={item => item.value}
                    contentOffset={offset}
                    onIndexChange={index =>
                        this.setState(() => ({ currentIndex: index }))
                    }
                    renderItem={({ itemIndex, currentIndex, item, animatedValue }) => (
                      <View style={{ width: width - 10, paddingHorizontal: 20 }}>
   
                        <Text style={{ marginTop: 10 }}>
                          Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10. I don't know what you could say about a day in which you have seen four beautiful sunsets.
                        </Text>
                    </View>
                    )}
                />
                <Text style={[styles.title, styles.titlePlatformSpecific]}>SPACED</Text>
                <BottomBar destination={planets[this.state.currentIndex].abbr} />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingTop: 50,
        backgroundColor: 'pink'
    },
    fill: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    title: {
        fontSize: 32,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginTop: 8,
        letterSpacing: 1.6,
        zIndex: 2,
        alignSelf: 'center'
    },
    titlePlatformSpecific: Platform.select({
        ios: {
            marginBottom: 10
        }
    })
});
