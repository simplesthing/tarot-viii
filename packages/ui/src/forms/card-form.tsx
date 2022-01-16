import { Button, Text } from 'react-native-elements';
import { Field, Form, Formik } from 'formik';
import { GestureResponderEvent, Image, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';

import { default as Colors } from '../theme/colors';
import { Value } from '../theme/fonts';
import has from 'lodash.has';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    formRow: {
        marginVertical: 10,
        marginRight: 10
    },
    formRowReversed: {
        padding: 10,
        backgroundColor: Colors.silver_sand.light
    },
    field: {
        padding: 10
    },
    label: {
        color: Colors.spanish_gray.dark,
        fontSize: Value(9),
        marginBottom: 5,
        marginTop: 10
    },
    readOnly: {
        fontSize: Value(8.5),
        minWidth: 180,
        marginBottom: 10
    },
    splitRow: {
        flexDirection: 'row',
        alignContent: 'stretch'
    }
});

type CelticCross = {
    situation: string;
    challenge: string;
    root: string;
    crowns: string;
    past: string;
    future: string;
    self: string;
    influences: string;
    hope: string;
    outcome: string;
};

export interface CardFormValues {
    arcana: string;
    color: string;
    decan: string;
    description: string;
    element: string;
    hex: string;
    image: string;
    index: number;
    keywords: string;
    title: string;
    reversedKeywords: string;
    name: string;
    type: string;
    path: string;
    celtic_cross: {
        upright: CelticCross;
        reversed: CelticCross;
    };
}

const CardForm = ({ card, save }) => {
    const [initialValues, setInitialValues] = useState(card);

    const fieldStyle = (props, name) => {
        let path = name.split('.');

        return {
            padding: 5,
            fontSize: Value(8.5),
            backgroundColor: has(props.touched, path) ? `${card.hex}80` : 'white'
        };
    };
    const imageRoot =
        'https://raw.githubusercontent.com/simplesthing/tarot-VI/master/client/src/assets/' +
        card.image;

    const onSubmit = async (values, { resetForm }) => {
        setInitialValues(values);

        await save(values).then(() => {
            resetForm({ values });
        });
    };
    return (
        <View style={styles.container}>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {props => (
                    <Form>
                        <View style={styles.splitRow}>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Name</Text>
                                <Text style={styles.readOnly}>{initialValues.name}</Text>
                                <Text style={styles.label}>Arcana</Text>
                                <Text style={styles.readOnly}>
                                    {initialValues.arcana}
                                </Text>
                                <Text style={styles.label}>Number</Text>
                                <Text style={styles.readOnly}>
                                    {initialValues.number}
                                </Text>
                                <Text style={styles.label}>Index</Text>
                                <Text style={styles.readOnly}>{initialValues.index}</Text>
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Upright</Text>
                                <Image
                                    source={{ uri: imageRoot }}
                                    style={{
                                        width: 120,
                                        height: 240,
                                        borderColor: 'black',
                                        borderWidth: 2,
                                        marginRight: '20vw'
                                    }}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Reversed</Text>
                                <Image
                                    source={{ uri: imageRoot }}
                                    style={{
                                        width: 120,
                                        height: 240,
                                        borderColor: 'black',
                                        borderWidth: 2,
                                        marginRight: '20vw',
                                        transform: [{ rotate: '180deg' }]
                                    }}
                                />
                            </View>
                        </View>

                        <View style={styles.formRow}>
                            <Text style={styles.label}>Description</Text>
                            <Field
                                name="description"
                                as="textarea"
                                style={fieldStyle(props, 'description')}
                            />
                        </View>

                        <View style={styles.splitRow}>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Path</Text>
                                <Field name="path" style={fieldStyle(props, 'path')} />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Color (Queen Scale)</Text>
                                <Field name="color" style={fieldStyle(props, 'color')} />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Hex</Text>
                                <Field name="hex" style={fieldStyle(props, 'hex')} />
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    marginHorizontal: 10,
                                    marginTop: 45,
                                    marginBottom: 10,
                                    backgroundColor: initialValues.hex,
                                    borderColor: 'black',
                                    borderWidth: 2
                                }}
                            />
                        </View>

                        <View style={styles.splitRow}>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Element</Text>
                                <Field
                                    name="element"
                                    style={fieldStyle(props, 'element')}
                                />
                            </View>

                            <View style={styles.formRow}>
                                <Text style={styles.label}>Title</Text>
                                <Field name="title" style={fieldStyle(props, 'title')} />
                            </View>

                            <View style={styles.formRow}>
                                <Text style={styles.label}>Decan / Attribution</Text>
                                <Field name="decan" style={fieldStyle(props, 'decan')} />
                            </View>

                            <View style={styles.formRow}>
                                <Text style={styles.label}>Type</Text>
                                <Field name="type" style={fieldStyle(props, 'type')} />
                            </View>
                        </View>

                        <View style={styles.formRow}>
                            <Text style={styles.label}>Keywords</Text>
                            <Field
                                name="keywords"
                                style={fieldStyle(props, 'keywords')}
                            />
                        </View>

                        <View style={styles.formRowReversed}>
                            <Text style={styles.label}>Reversed Keywords</Text>
                            <Field
                                name="reversedKeywords"
                                style={fieldStyle(props, 'reversedKeywords')}
                            />
                        </View>

                        <View style={styles.formRow}>
                            <Text style={styles.label}>Celtic Cross</Text>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Situation</Text>
                                <Field
                                    name="celtic_cross.upright.situation"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.upright.situation'
                                    )}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Situation</Text>
                                <Field
                                    name="celtic_cross.reversed.situation"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.situation'
                                    )}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Challenges</Text>
                                <Field
                                    name="celtic_cross.upright.challenge"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.upright.challenge'
                                    )}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Challenges</Text>
                                <Field
                                    name="celtic_cross.reversed.challenge"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.challenge'
                                    )}
                                />
                            </View>

                            <View style={styles.formRow}>
                                <Text style={styles.label}>Crowning Power</Text>
                                <Field
                                    name="celtic_cross.upright.crowns"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.upright.crowns'
                                    )}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Crowning Power</Text>
                                <Field
                                    name="celtic_cross.reversed.crowns"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.crowns'
                                    )}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Past</Text>
                                <Field
                                    name="celtic_cross.upright.past"
                                    as="textarea"
                                    style={fieldStyle(props, 'celtic_cross.upright.past')}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Past</Text>
                                <Field
                                    name="celtic_cross.reversed.past"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.past'
                                    )}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Root Strength</Text>
                                <Field
                                    name="celtic_cross.upright.root"
                                    as="textarea"
                                    style={fieldStyle(props, 'celtic_cross.upright.root')}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Root Strength</Text>
                                <Field
                                    name="celtic_cross.reversed.root"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.root'
                                    )}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Future</Text>
                                <Field
                                    name="celtic_cross.upright.future"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.upright.future'
                                    )}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Future</Text>
                                <Field
                                    name="celtic_cross.reversed.future"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.future'
                                    )}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Self</Text>
                                <Field
                                    name="celtic_cross.upright.self"
                                    as="textarea"
                                    style={fieldStyle(props, 'celtic_cross.upright.self')}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Self</Text>
                                <Field
                                    name="celtic_cross.reversed.self"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.self'
                                    )}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Influences</Text>
                                <Field
                                    name="celtic_cross.upright.influences"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.upright.influences'
                                    )}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Influences</Text>
                                <Field
                                    name="celtic_cross.reversed.influences"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.influences'
                                    )}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Hopes and Fears</Text>
                                <Field
                                    name="celtic_cross.upright.hope"
                                    as="textarea"
                                    style={fieldStyle(props, 'celtic_cross.upright.hope')}
                                />
                            </View>
                            <View style={styles.formRowReversed}>
                                <Text style={styles.label}>Reversed Hopes and Fears</Text>
                                <Field
                                    name="celtic_cross.reversed.hope"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.reversed.hope'
                                    )}
                                />
                            </View>
                            <View style={styles.formRow}>
                                <Text style={styles.label}>Outcome</Text>
                                <Field
                                    name="celtic_cross.upright.outcome"
                                    as="textarea"
                                    style={fieldStyle(
                                        props,
                                        'celtic_cross.upright.outcome'
                                    )}
                                />
                            </View>
                        </View>
                        <View style={styles.formRowReversed}>
                            <Text style={styles.label}>Reversed Outcome</Text>
                            <Field
                                name="celtic_cross.reversed.outcome"
                                as="textarea"
                                style={fieldStyle(props, 'celtic_cross.reversed.outcome')}
                            />
                        </View>
                        <View style={styles.formRow}>
                            <Button
                                title="save"
                                style={{ marginVertical: 20 }}
                                onPress={
                                    props.handleSubmit as unknown as (
                                        event: GestureResponderEvent
                                    ) => void
                                }
                                disabled={props.isSubmitting}
                            />
                        </View>
                    </Form>
                )}
            </Formik>
        </View>
    );
};

export default CardForm;
