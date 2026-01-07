import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Check, Zap, Percent } from 'lucide-react-native';

const PLANS = [
    {
        id: 1,
        title: "Weight Loss Pro",
        subtitle: "Rapid fat loss while maintaining muscle",
        price: "2499",
        color: "#F97316",
        features: ["Low Carb, High Protein", "2 Meals (Lunch & Dinner)", "Calorie Counted: 1200 kcal"],
        offer: "20% OFF"
    },
    {
        id: 2,
        title: "Muscle Gain Beast",
        subtitle: "High protein for hypertrophy",
        price: "2999",
        color: "#EF4444",
        features: ["Hyper-Protein Macros", "3 Meals + Snack", "Post-Workout Nutrition"],
        offer: null
    },
    {
        id: 3,
        title: "Diabetes Management",
        subtitle: "Sugar-control & low GI meals",
        price: "2299",
        color: "#16A34A",
        features: ["Zero Processed Sugar", "High Fiber Complex Carbs", "Diabetic Friendly Snacks"],
        offer: "FREE GLUCOMETER"
    },
    {
        id: 4,
        title: "PCOS Balance",
        subtitle: "Hormonal balance nutrition",
        price: "2499",
        color: "#D946EF",
        features: ["Anti-inflammatory Foods", "Gluten & Dairy Monitor", "Cycle-Syncing Nutrition"],
        offer: null
    },
    {
        id: 5,
        title: "Detox & Cleanse",
        subtitle: "7-Day system reset",
        price: "1999",
        color: "#0EA5E9",
        features: ["All Plant Based", "Includes Detox Juices", "Gut Health Focus"],
        offer: "limited time"
    }
];

const PlansScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Subscription Plans</Text>
                <Text style={styles.headerSub}>Choose a plan that fits your goal</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {/* Special Offer Banner */}
                <View style={styles.offerBanner}>
                    <View style={styles.offerIcon}>
                        <Percent size={20} color="#fff" />
                    </View>
                    <View>
                        <Text style={styles.offerTitle}>Flat 25% OFF</Text>
                        <Text style={styles.offerSub}>On all 3-month subscriptions</Text>
                    </View>
                </View>

                {PLANS.map((plan, idx) => (
                    <View key={plan.id} style={styles.planCard}>
                        {plan.offer && (
                            <View style={styles.planTag}>
                                <Text style={styles.planTagText}>{plan.offer}</Text>
                            </View>
                        )}
                        <View style={[styles.colorStrip, { backgroundColor: plan.color }]} />

                        <View style={styles.cardContent}>
                            <View style={styles.cardHeader}>
                                <View style={{ flex: 1 }}>
                                    <Text style={styles.planTitle}>{plan.title}</Text>
                                    <Text style={styles.planSub}>{plan.subtitle}</Text>
                                </View>
                                <View>
                                    <Text style={styles.price}>₹{plan.price}</Text>
                                    <Text style={styles.period}>/week</Text>
                                </View>
                            </View>

                            <View style={styles.divider} />

                            <View style={styles.features}>
                                {plan.features.map((feat, i) => (
                                    <View key={i} style={styles.featRow}>
                                        <Check size={16} color={plan.color} />
                                        <Text style={styles.featText}>{feat}</Text>
                                    </View>
                                ))}
                            </View>

                            <TouchableOpacity style={[styles.subBtn, { backgroundColor: plan.color }]}>
                                <Text style={styles.subBtnText}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa' },
    header: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
    headerTitle: { fontSize: 24, fontWeight: '900', color: '#111' },
    headerSub: { fontSize: 14, color: '#666', marginTop: 4 },

    content: { padding: 16, gap: 20 },

    offerBanner: { backgroundColor: '#111', borderRadius: 16, padding: 20, flexDirection: 'row', alignItems: 'center', gap: 16, marginBottom: 8 },
    offerIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#2563EB', alignItems: 'center', justifyContent: 'center' },
    offerTitle: { color: '#fff', fontSize: 18, fontWeight: '800' },
    offerSub: { color: '#aaa', fontSize: 13 },

    planCard: { backgroundColor: '#fff', borderRadius: 20, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
    planTag: { position: 'absolute', top: 12, right: 0, backgroundColor: '#FCD34D', paddingHorizontal: 12, paddingVertical: 4, borderTopLeftRadius: 12, borderBottomLeftRadius: 12, zIndex: 10 },
    planTagText: { fontSize: 10, fontWeight: '800', color: '#78350F', textTransform: 'uppercase' },

    colorStrip: { height: 6 },
    cardContent: { padding: 24 },
    cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
    planTitle: { fontSize: 20, fontWeight: '800', color: '#333', marginBottom: 4 },
    planSub: { fontSize: 13, color: '#666', marginRight: 8 },
    price: { fontSize: 22, fontWeight: '800', color: '#111' },
    period: { fontSize: 12, color: '#888', textAlign: 'right' },

    divider: { height: 1, backgroundColor: '#f0f0f0', marginBottom: 20 },

    features: { gap: 12, marginBottom: 24 },
    featRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
    featText: { fontSize: 14, color: '#444', fontWeight: '500' },

    subBtn: { paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
    subBtnText: { color: '#fff', fontWeight: '800', fontSize: 14, textTransform: 'uppercase' }

});

export default PlansScreen;
