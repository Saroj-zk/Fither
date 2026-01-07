import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronRight, Check } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const questions = [
    {
        id: 'goal',
        title: "What is your primary goal?",
        options: ["Weight Loss", "Muscle Gain", "PCOD/F Management", "Post-Pregnancy Recovery", "Diabetes Management"]
    },
    {
        id: 'gender',
        title: "Gender",
        options: ["Male", "Female", "Prefer not to say"]
    },
    {
        id: 'activity',
        title: "How active are you?",
        options: ["Sedentary (Desk Job)", "Lightly Active (1-3 days/week)", "Active (Daily Exercise)", "Athlete"]
    },
    {
        id: 'diet',
        title: "Dietary Preference",
        options: ["Vegetarian", "Non-Vegetarian", "Eggetarian", "Jain (No Onion/Garlic)", "Vegan"]
    },
    {
        id: 'complications',
        title: "Any medical conditions?",
        options: ["None", "Diabetes (Type 1/2)", "PCOS/PCOD", "Hypertension (BP)", "Thyroid"]
    },
    {
        id: 'sugar',
        title: "Sugar Preference",
        options: ["No Sugar", "Low Sugar", "Normal Sugar", "Jaggery Only"]
    },
    {
        id: 'salt',
        title: "Salt Preference",
        options: ["Low Sodium", "Normal Salt"]
    }
];

const OnboardingScreen = ({ navigation }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleSelect = (option) => {
        const currentQ = questions[step];
        setAnswers(prev => ({ ...prev, [currentQ.id]: option }));

        // Auto advance after short delay for better UX
        setTimeout(() => {
            if (step < questions.length - 1) {
                setStep(step + 1);
            } else {
                // Finished
                navigation.replace('AnalysisResult', { answers: { ...answers, [currentQ.id]: option } });
            }
        }, 200);
    };

    const currentQ = questions[step];
    const progress = ((step + 1) / questions.length) * 100;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.progressBarBgContainer}>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
                        </View>
                        <Text style={styles.stepText}>Step {step + 1} of {questions.length}</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.replace('Main')}>
                        <Text style={styles.skipText}>Skip & Order</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.questionTitle}>{currentQ.title}</Text>

                <View style={styles.optionsContainer}>
                    {currentQ.options.map((opt, idx) => (
                        <TouchableOpacity
                            key={idx}
                            style={[
                                styles.optionCard,
                                answers[currentQ.id] === opt && styles.optionCardSelected
                            ]}
                            onPress={() => handleSelect(opt)}
                        >
                            <Text style={[
                                styles.optionText,
                                answers[currentQ.id] === opt && styles.optionTextSelected
                            ]}>{opt}</Text>
                            {answers[currentQ.id] === opt && <Check size={20} color="#fff" />}
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { padding: 20 },
    headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 },
    progressBarBgContainer: { flex: 1 },
    progressBarBg: { height: 6, backgroundColor: '#f0f0f0', borderRadius: 3, overflow: 'hidden', marginBottom: 8 },
    progressBarFill: { height: '100%', backgroundColor: '#F97316' },
    stepText: { fontSize: 12, color: '#999', fontWeight: 'bold', textTransform: 'uppercase' },
    skipText: { fontSize: 13, color: '#F97316', fontWeight: 'bold' },

    content: { padding: 20 },
    questionTitle: { fontSize: 28, fontWeight: '800', color: '#111', marginBottom: 30, lineHeight: 36 },

    optionsContainer: { gap: 12 },
    optionCard: { padding: 20, borderRadius: 16, backgroundColor: '#f8f9fa', borderWidth: 1, borderColor: '#eee', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    optionCardSelected: { backgroundColor: '#F97316', borderColor: '#F97316' },
    optionText: { fontSize: 16, fontWeight: '600', color: '#333' },
    optionTextSelected: { color: '#fff' }
});

export default OnboardingScreen;
