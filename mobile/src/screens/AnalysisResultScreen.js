import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle, ArrowRight, Star } from 'lucide-react-native';

const AnalysisResultScreen = ({ route, navigation }) => {
    const { answers } = route.params || {};
    const [analyzing, setAnalyzing] = useState(true);

    // Fake analysis timer
    useEffect(() => {
        const timer = setTimeout(() => {
            setAnalyzing(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleBookConsultation = () => {
        // Navigate to main app but maybe jump to care tab or show success modal
        navigation.reset({
            index: 0,
            routes: [{ name: 'Main' }], // We will define 'Main' as the Tab Navigator
        });
    };

    if (analyzing) {
        return (
            <SafeAreaView style={[styles.container, styles.center]}>
                <View style={styles.pulseDisk} />
                <Text style={styles.analyzingText}>Analyzing your lifestyle...</Text>
                <Text style={styles.subText}>Creating your custom nutrition plan based on {answers?.goal || "your goals"}</Text>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                {/* Success Header */}
                <View style={styles.successHeader}>
                    <View style={styles.iconCircle}>
                        <CheckCircle size={40} color="#16A34A" />
                    </View>
                    <Text style={styles.title}>Your "Life-Plan" is Ready!</Text>
                    <Text style={styles.summary}>
                        Tailored for a <Text style={styles.bold}>{answers?.diet}</Text> lifestyle focusing on <Text style={styles.bold}>{answers?.goal}</Text>.
                    </Text>
                </View>

                {/* Suggestion Card */}
                <View style={styles.suggestionCard}>
                    <Text style={styles.cardLabel}>RECOMMENDED PLAN</Text>
                    <View style={styles.planHeader}>
                        <View>
                            <Text style={styles.planTitle}>FitHer Essential</Text>
                            <Text style={styles.planSubtitle}>Perfect for beginners</Text>
                        </View>
                        <Text style={styles.price}>₹2,499<Text style={styles.period}>/week</Text></Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.featureRow}>
                        <CheckCircle size={16} color="#F97316" />
                        <Text style={styles.featureText}>Custom {answers?.diet} Menu</Text>
                    </View>
                    <View style={styles.featureRow}>
                        <CheckCircle size={16} color="#F97316" />
                        <Text style={styles.featureText}>{answers?.sugar} Optimization</Text>
                    </View>
                    <View style={styles.featureRow}>
                        <CheckCircle size={16} color="#F97316" />
                        <Text style={styles.featureText}>1 Free Dietician Consultation</Text>
                    </View>

                    <TouchableOpacity style={styles.selectPlanBtn} onPress={handleBookConsultation}>
                        <Text style={styles.btnText}>Start My Plan</Text>
                        <ArrowRight size={20} color="#fff" />
                    </TouchableOpacity>
                </View>

                {/* Consultation Prompt */}
                <View style={styles.consultCard}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3' }}
                        style={styles.doctorImg}
                    />
                    <View style={styles.consultContent}>
                        <Text style={styles.consultTitle}>Need expert advice?</Text>
                        <Text style={styles.consultDesc}>Speak to Dr. Anjali before starting.</Text>
                        <TouchableOpacity onPress={handleBookConsultation}>
                            <Text style={styles.linkText}>Book Free Consultation &gt;</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    center: { justifyContent: 'center', alignItems: 'center' },
    scrollContent: { padding: 24 },

    pulseDisk: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#FFF5EB', marginBottom: 24, borderWidth: 4, borderColor: '#F97316' },
    analyzingText: { fontSize: 22, fontWeight: '800', color: '#333', marginBottom: 8 },
    subText: { fontSize: 14, color: '#666', textAlign: 'center', maxWidth: '80%' },

    successHeader: { alignItems: 'center', marginBottom: 32 },
    iconCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#DCFCE7', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
    title: { fontSize: 26, fontWeight: '900', color: '#111', marginBottom: 8, textAlign: 'center' },
    summary: { fontSize: 16, color: '#555', textAlign: 'center', lineHeight: 24 },
    bold: { fontWeight: '700', color: '#111' },

    suggestionCard: { backgroundColor: '#fff', borderRadius: 24, padding: 24, shadowColor: '#F97316', shadowOpacity: 0.15, shadowRadius: 20, elevation: 8, borderWidth: 1, borderColor: '#FFF5EB', marginBottom: 24 },
    cardLabel: { fontSize: 10, fontWeight: '900', color: '#F97316', letterSpacing: 1, marginBottom: 12 },
    planHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
    planTitle: { fontSize: 20, fontWeight: '800', color: '#111' },
    planSubtitle: { fontSize: 12, color: '#888' },
    price: { fontSize: 24, fontWeight: '800', color: '#111' },
    period: { fontSize: 12, color: '#888', fontWeight: '500' },

    divider: { height: 1, backgroundColor: '#f0f0f0', marginBottom: 20 },
    featureRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12 },
    featureText: { fontSize: 14, color: '#444', fontWeight: '500' },

    selectPlanBtn: { backgroundColor: '#F97316', paddingVertical: 16, borderRadius: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 12 },
    btnText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

    consultCard: { flexDirection: 'row', backgroundColor: '#F8FAFC', padding: 16, borderRadius: 20, alignItems: 'center', gap: 16 },
    doctorImg: { width: 56, height: 56, borderRadius: 28 },
    consultContent: { flex: 1 },
    consultTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
    consultDesc: { fontSize: 12, color: '#666', marginBottom: 4 },
    linkText: { color: '#2563EB', fontSize: 12, fontWeight: '700' }
});

export default AnalysisResultScreen;
