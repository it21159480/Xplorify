import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const InquiryPage = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        personContact: '',
        contactNumber: '',
        subject: '',
        message: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const validateInput = () => {
        let errorMessages = {};

        if (!formData.companyName.trim()) {
            errorMessages.companyName = "Company name is required";
        }

        if (!formData.personContact.trim()) {
            errorMessages.personContact = "Person name is required";
        }

        if (!formData.contactNumber.trim()) {
            errorMessages.contactNumber = "Contact number is required";
        } else if (formData.contactNumber.trim().length !== 10) {
            errorMessages.contactNumber = "Contact number should be 10 digits long";
        }

        if (!formData.subject.trim()) {
            errorMessages.subject = "Subject is required";
        }

        if (!formData.message.trim()) {
            errorMessages.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            errorMessages.message = "Message should be at least 10 characters long";
        }

        setFormErrors(errorMessages);

        return Object.keys(errorMessages).length === 0;
    };
    const handleSend = () => {
        if (validateInput()) {
            axios.post('http://192.168.254.78:8080/api/inquiry', formData)
            .then((response) => {
                alert("Success", "Inquiry sent successfully!");
                setFormData({
                    companyName: '',
                    personContact: '',
                    contactNumber: '',
                    subject: '',
                    message: '',
                });
                console.log("Form is valid!");
                alert("Success", "Inquiry sent successfully!");
            })
            .catch((error) => {
                console.error("There was an error sending the inquiry:", error);
                alert("Error", "There was an error sending the inquiry. Please try again later.");
            });
    
           
        } 
        else {
            console.log("Form has errors!");
        }
    };

    return (
        <ImageBackground
            source={require('../../assets/h.png')}
            style={styles.backgroundImage}
        >
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ height: 100, backgroundColor: '#3F3825' }}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Inquiry</Text>
                        </View>
                    </View>

                    <Text style={styles.title}>Send your inquiry with ease and confidence!</Text>
                    <View style={styles.form}>
                        <TextInput
                            placeholder="Company name"
                            value={formData.companyName}
                            onChangeText={(text) => setFormData({ ...formData, companyName: text })}
                            style={[styles.input, formErrors.companyName && styles.errorInput]}
                            keyboardType={'default'}
                        />
                        {formErrors.companyName && <Text style={styles.errorText}>{formErrors.companyName}</Text>}
                        <TextInput
                            placeholder="Person name"
                            value={formData.personContact}
                            onChangeText={(text) => setFormData({ ...formData, personContact: text })}
                            style={[styles.input, formErrors.personContact && styles.errorInput]}
                            keyboardType={'default'}
                        />
                        {formErrors.personContact && <Text style={styles.errorText}>{formErrors.personContact}</Text>}
                        <TextInput
                            placeholder="Contact Number"
                            value={formData.contactNumber}
                            onChangeText={(text) => setFormData({ ...formData, contactNumber: text })}
                            style={[styles.input, formErrors.contactNumber && styles.errorInput]}
                            keyboardType={'phone-pad'}
                            maxLength={10}
                        />
                        {formErrors.contactNumber && <Text style={styles.errorText}>{formErrors.contactNumber}</Text>}
                        <TextInput
                            placeholder="Subject"
                            value={formData.subject}
                            onChangeText={(text) => setFormData({ ...formData, subject: text })}
                            style={[styles.input, formErrors.subject && styles.errorInput]}
                            keyboardType={'default'}
                        />
                        {formErrors.subject && <Text style={styles.errorText}>{formErrors.subject}</Text>}
                        <TextInput
                            placeholder="Message"
                            value={formData.message}
                            onChangeText={(text) => setFormData({ ...formData, message: text })}
                            multiline={true}
                            maxLength={250}
                            autoCapitalize="sentences"
                            autoCorrect={true}
                            keyboardType={'default'}
                            style={[styles.input, formErrors.message && styles.errorInput, { height: 100, textAlignVertical: 'top' }]}
                        />
                        {formErrors.message && <Text style={styles.errorText}>{formErrors.message}</Text>}
                        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                            <Text style={styles.sendButtonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    errorInput: {
        borderColor: 'red',
        borderWidth: 1,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    backgroundImage: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
    },
    header: {
        marginTop: 40
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 30,

    },
    title: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        padding: 30,
        fontWeight: 'bold'
    },
    form: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: 20,
        borderRadius: 10,
        marginHorizontal: 15

    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#908e8c'
    },
    sendButton: {
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
    },
    sendButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default InquiryPage;
