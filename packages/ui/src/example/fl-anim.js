import Animated, { interpolateColor, interpolateNode, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { FlatList, Animated as RAnimated, StyleSheet, Text, View } from 'react-native'
import { Image, MotiView } from 'moti'
import React, { useEffect, useRef } from 'react'

import { BlurView } from "expo-blur";
import { useWindowDimensions } from 'react-native'

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)
const images = [
    {
        image: 'https://images.unsplash.com/photo-1624144284128-d476c9231c91?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#47597E'
    },
    {
        image: 'https://images.unsplash.com/photo-1555169062-013468b47731?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmlyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#346751'
    },
    {
        image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdpbnRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#231E23'
    },
    {
        image: 'https://images.unsplash.com/photo-1512819432727-dbcb57a06f13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#47597E'
    },
    {
        image: 'https://images.unsplash.com/photo-1431036101494-66a36de47def?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fHdpbnRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#FFED99'
    },
    {
        image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#3B14A7'
    },
    {
        image: 'https://images.unsplash.com/photo-1528701790053-56b0f31e4577?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fHdpbnRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#4A1C40'
    },
    {
        image: 'https://images.unsplash.com/photo-1605092675701-0dafa674328e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGJpcmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#BB371A'
    },
    {
        image: 'https://images.unsplash.com/photo-1597132990170-ec6f7d86e731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        color: '#0A1931'
    },
    {
        image: 'https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#FFBBCC'
    },
    {
        image: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdpbnRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        color: '#CE97B0'
    },
    {
        image: 'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        color: '#94D0CC'
    },
]
const MDetailView = () => {
    const scrollX = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            console.log('event', event);
            scrollX.value = event.contentOffset.x;
        },
    });
    const { height, width } = useWindowDimensions();
    return (
        <View style={{
            height: height, width, flex: 1,
            backgroundColor: '#fff',
            justifyContent: 'center', alignItems: 'center',
        }}>
            {images.map((image, index) => {
                return (
                    <BackgroundImageView image={image} index={index} scrollX={scrollX} />
                );
            })}
            <AnimatedFlatlist
                horizontal
                scrollEventThrottle={1}
                onScroll={scrollHandler}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: 'center', alignItems: 'center', height: height
                }}
                pagingEnabled
                snapToInterval={width}
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }: any) => {
                    return <ImageView item={item} index={index} scrollX={scrollX} />
                }}
            />
        </View>
    )
}
const ImageView = ({ item, index, scrollX }: any) => {
    const { height, width } = useWindowDimensions();
    const CARD_WIDTH = width * 0.8;
    const CARD_HEIGHT = CARD_WIDTH * 1.6;
    const inputRange = [(index - 1) * width, (index) * width, (index + 1) * width]
    const animatedContainerStyle = useAnimatedStyle(() => {
        return {
            opacity: ((Animated.interpolateNode(scrollX.value,
                inputRange, [0.8, 1, 0.4]
            ))),
            width: CARD_WIDTH, height: CARD_HEIGHT, justifyContent: 'flex-start',
            alignItems: 'flex-start', overflow: 'hidden', borderRadius: 10,
            padding: 20,
            borderWidth: 4,
            borderColor: 'white',
            transform: [{
                scale: ((Animated.interpolateNode(scrollX.value,
                    inputRange, [0.8, 1, 0.8]
                ))),
            }, {
                translateX: (Animated.interpolateNode(scrollX.value,
                    inputRange, [0, 0, width]
                ))
            }
            ],
        };
    });
    const animatedImageStyle = useAnimatedStyle(() => {
        return {

            transform: [{
                translateX: (Animated.interpolateNode(scrollX.value,
                    inputRange, [0, 0, 0]
                ))
            }, {
                scale: (Animated.interpolateNode(scrollX.value,
                    inputRange, [1, 1, 1]
                ))
            }],
        };
    });
    const animatedImageSmallStyle = useAnimatedStyle(() => {
        return {
            height: CARD_HEIGHT * 0.12, width: CARD_HEIGHT * 0.12, margin: 10,
            borderRadius: 50, borderWidth: 2, borderColor: '#fff',
            transform: [{
                translateY: (Animated.interpolate(scrollX.value,
                    inputRange, [CARD_HEIGHT, 0, CARD_HEIGHT - 10]
                ))

            },
            {
                scale: ((Animated.interpolateNode(scrollX.value,
                    inputRange, [0.8, 1, 0.8]
                ))),
            },

            {
                rotate: (Animated.interpolateNode(scrollX.value,
                    inputRange, [-360, 0, 360]
                )) + 'deg'
            }],
        };
    });
    return <MotiView
        style={{
            height: height, width: width, justifyContent: 'center',
            alignItems: 'center'
        }}>
        <Animated.View style={{
            ...animatedContainerStyle,
        }}>
            <Animated.Image style={[StyleSheet.absoluteFillObject, {
                ...animatedImageStyle
            }, { position: 'absolute' }]} source={{ uri: item.image }} />
            <Animated.Image style={[{
                ...animatedImageSmallStyle

            }, { position: 'absolute' }]} source={{ uri: item.image }} />
        </Animated.View>
    </MotiView>
}
const BackgroundImageView = ({ image, index, scrollX }: any) => {
    const { height, width } = useWindowDimensions();
    const CARD_WIDTH = width * 0.9;
    const CARD_HEIGHT = CARD_WIDTH * 1.6;
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const animatedImageStyle = useAnimatedStyle(() => {
        return {
            opacity: (Animated.interpolateNode(scrollX.value,
                inputRange, [0, 1, 0]
            ))
        };
    });
    return <Animated.Image
        key={`image-bg-${index}`}
        source={{ uri: image.image }}
        style={[
            StyleSheet.absoluteFillObject,
            {
                resizeMode: 'cover',
                ...animatedImageStyle
            },
        ]}
        blurRadius={1}
    />
}
export default MDetailView