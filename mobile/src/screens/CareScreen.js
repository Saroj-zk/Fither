import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar, Clock, MessageSquare, Phone, UserRound, CheckCircle2 } from 'lucide-react-native';

const CareScreen = () => {
    const consultationsLeft = 2; // Mock data

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Expert Care</Text>
                    <Text style={styles.headerSub}>Personalized guidance for your health journey</Text>
                </View>

                {/* Consultations Left Card */}
                <View style={styles.statsCard}>
                    <View style={styles.statsContent}>
                        <View>
                            <Text style={styles.statsValue}>{consultationsLeft}</Text>
                            <Text style={styles.statsLabel}>Consultations Left</Text>
                        </View>
                        <TouchableOpacity style={styles.buyBtn}>
                            <Text style={styles.buyBtnText}>Purchase More</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.statsFooter}>
                        <CheckCircle2 size={16} color="#16A34A" />
                        <Text style={styles.statsFooterText}>Included in your Active Plan</Text>
                    </View>
                </View>

                {/* Book Consultation */}
                <Text style={styles.sectionTitle}>Book a Consultation</Text>
                <View style={styles.doctorCard}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }}
                        style={styles.doctorImage}
                    />
                    <View style={styles.doctorInfo}>
                        <Text style={styles.doctorName}>Dr. Anjali Sharma</Text>
                        <Text style={styles.doctorSpecialty}>Senior Clinical Nutritionist</Text>
                        <View style={styles.availabilityRow}>
                            <Clock size={14} color="#666" />
                            <Text style={styles.availabilityText}>Available: Mon - Fri (10 AM - 6 PM)</Text>
                        </View>
                        <TouchableOpacity style={styles.bookBtn}>
                            <Text style={styles.bookBtnText}>Schedule Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.doctorCard}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }}
                        style={styles.doctorImage}
                    />
                    <View style={styles.doctorInfo}>
                        <Text style={styles.doctorName}>Dr. Priya Patel</Text>
                        <Text style={styles.doctorSpecialty}>Consultant Gynecologist</Text>
                        <View style={styles.availabilityRow}>
                            <Clock size={14} color="#666" />
                            <Text style={styles.availabilityText}>Available: Tue, Thu, Sat</Text>
                        </View>
                        <TouchableOpacity style={styles.bookBtn}>
                            <Text style={styles.bookBtnText}>Schedule Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Support Options */}
                <Text style={styles.sectionTitle}>Need Help?</Text>
                <View style={styles.supportGrid}>
                    <TouchableOpacity style={styles.supportCard}>
                        <MessageSquare size={24} color="#F97316" />
                        <Text style={styles.supportLabel}>Chat Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.supportCard}>
                        <Phone size={24} color="#16A34A" />
                        <Text style={styles.supportLabel}>Call Expert</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa' },
    content: { padding: 20 },
    header: { marginBottom: 24 },
    headerTitle: { fontSize: 28, fontWeight: '900', color: '#111' },
    headerSub: { fontSize: 14, color: '#666', marginTop: 4 },

    statsCard: { backgroundColor: '#fff', borderRadius: 24, padding: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2, marginBottom: 32 },
    statsContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
    statsValue: { fontSize: 36, fontWeight: '900', color: '#F97316' },
    statsLabel: { fontSize: 14, fontWeight: '600', color: '#444' },
    buyBtn: { backgroundColor: '#FFF5EB', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 12 },
    buyBtnText: { color: '#F97316', fontSize: 12, fontWeight: '700' },
    statsFooter: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingTop: 16, borderTopWidth: 1, borderTopColor: '#f0f0f0' },
    statsFooterText: { fontSize: 12, color: '#666', fontWeight: '500' },

    sectionTitle: { fontSize: 20, fontWeight: '800', color: '#111', marginBottom: 16 },
    doctorCard: { backgroundColor: '#fff', borderRadius: 20, padding: 16, flexDirection: 'row', gap: 16, marginBottom: 16, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 },
    doctorImage: { width: 80, height: 80, borderRadius: 16 },
    doctorInfo: { flex: 1, justifyContent: 'center' },
    doctorName: { fontSize: 18, fontWeight: '800', color: '#111', marginBottom: 2 },
    doctorSpecialty: { fontSize: 13, color: '#F97316', fontWeight: '600', marginBottom: 8 },
    availabilityRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 12 },
    availabilityText: { fontSize: 11, color: '#666' },
    bookBtn: { backgroundColor: '#111', paddingVertical: 10, borderRadius: 10, alignItems: 'center' },
    bookBtnText: { color: '#fff', fontSize: 12, fontWeight: '700' },

    supportGrid: { flexDirection: 'row', gap: 16 },
    supportCard: { flex: 1, backgroundColor: '#fff', borderRadius: 16, padding: 20, alignItems: 'center', gap: 12, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 8, elevation: 1 },
    supportLabel: { fontSize: 13, fontWeight: '700', color: '#333' }
});

export default CareScreen;
