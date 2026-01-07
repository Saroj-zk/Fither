import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    User,
    Settings,
    MapPin,
    CreditCard,
    LogOut,
    ChevronRight,
    Bell,
    ShieldCheck,
    ShoppingBag,
    Star,
    Crown
} from 'lucide-react-native';

const AccountScreen = () => {
    const user = {
        name: "Jessica Pearson",
        phone: "+91 98765 43210",
        email: "jessica@example.com",
        plan: "Elite Subscription",
        points: 450
    };

    const menuItems = [
        { id: 1, icon: ShoppingBag, label: "Your Orders", sub: "Check status & history", color: "#F97316" },
        { id: 2, icon: MapPin, label: "Addresses", sub: "2 saved addresses", color: "#3B82F6" },
        { id: 3, icon: CreditCard, label: "Payments", sub: "Manage UPI & cards", color: "#10B981" },
        { id: 4, icon: Bell, label: "Notifications", sub: "Offers & order updates", color: "#F59E0B" },
        { id: 5, icon: Star, label: "Offers & Coupons", sub: "View your rewards", color: "#EC4899" },
    ];

    const supportItems = [
        { id: 6, icon: ShieldCheck, label: "Safety & Privacy", color: "#6B7280" },
        { id: 7, icon: Settings, label: "Account Settings", color: "#6B7280" },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Profile Header */}
                <View style={styles.profileHeader}>
                    <View style={styles.profileTop}>
                        <View style={styles.avatarContainer}>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80' }}
                                style={styles.avatar}
                            />
                            <TouchableOpacity style={styles.editBtn}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.userInfo}>
                            <Text style={styles.userName}>{user.name}</Text>
                            <Text style={styles.userMeta}>{user.phone}</Text>
                            <Text style={styles.userMeta}>{user.email}</Text>
                        </View>
                    </View>

                    {/* Subscription Banner */}
                    <TouchableOpacity style={styles.subscriptionCard}>
                        <View style={styles.subLeft}>
                            <View style={styles.crownCircle}>
                                <Crown size={20} color="#fff" fill="#fff" />
                            </View>
                            <View>
                                <Text style={styles.subTitle}>Elite Member</Text>
                                <Text style={styles.subStatus}>Active until Oct 15, 2026</Text>
                            </View>
                        </View>
                        <ChevronRight size={20} color="#FBBF24" />
                    </TouchableOpacity>
                </View>

                {/* Main Menu */}
                <View style={styles.section}>
                    {menuItems.map((item, idx) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                styles.menuItem,
                                idx !== menuItems.length - 1 && styles.borderBottom
                            ]}
                        >
                            <View style={[styles.iconBox, { backgroundColor: item.color + '15' }]}>
                                <item.icon size={20} color={item.color} />
                            </View>
                            <View style={styles.menuLabelContainer}>
                                <Text style={styles.menuLabel}>{item.label}</Text>
                                <Text style={styles.menuSub}>{item.sub}</Text>
                            </View>
                            <ChevronRight size={18} color="#D1D5DB" />
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Support & Others */}
                <Text style={styles.sectionHeader}>SUPPORT & LEGAL</Text>
                <View style={styles.section}>
                    {supportItems.map((item, idx) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[
                                styles.menuItem,
                                idx !== supportItems.length - 1 && styles.borderBottom
                            ]}
                        >
                            <View style={styles.iconBoxIconOnly}>
                                <item.icon size={20} color="#6B7280" />
                            </View>
                            <Text style={styles.menuLabelOnly}>{item.label}</Text>
                            <ChevronRight size={18} color="#D1D5DB" />
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Logout */}
                <TouchableOpacity style={styles.logoutBtn}>
                    <LogOut size={20} color="#EF4444" />
                    <Text style={styles.logoutText}>Logout</Text>
                </TouchableOpacity>

                <Text style={styles.versionText}>Version 1.0.4 (2026)</Text>
                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f8f9fa' },
    scrollContent: { paddingBottom: 20 },

    profileHeader: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#f1f1f1' },
    profileTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
    avatarContainer: { position: 'relative' },
    avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#f3f4f6' },
    editBtn: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#111', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 10, borderWidth: 2, borderColor: '#fff' },
    editText: { color: '#fff', fontSize: 10, fontWeight: '700' },
    userInfo: { marginLeft: 20, flex: 1 },
    userName: { fontSize: 24, fontWeight: '900', color: '#111', marginBottom: 4 },
    userMeta: { fontSize: 13, color: '#6B7280', marginBottom: 2 },

    subscriptionCard: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1E1B4B', padding: 16, borderRadius: 20 },
    subLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    crownCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#FBBF24', alignItems: 'center', justifyContent: 'center' },
    subTitle: { color: '#FBBF24', fontSize: 16, fontWeight: '800' },
    subStatus: { color: '#A5B4FC', fontSize: 11, fontWeight: '500' },

    sectionHeader: { fontSize: 12, fontWeight: '800', color: '#9CA3AF', marginLeft: 24, marginTop: 32, marginBottom: 8, letterSpacing: 1 },
    section: { backgroundColor: '#fff', borderRadius: 24, marginHorizontal: 20, paddingVertical: 8, shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 10, elevation: 1 },
    menuItem: { flexDirection: 'row', alignItems: 'center', padding: 16 },
    borderBottom: { borderBottomWidth: 1, borderBottomColor: '#f9fafb' },
    iconBox: { width: 44, height: 44, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
    iconBoxIconOnly: { width: 24, paddingLeft: 4 },
    menuLabelContainer: { flex: 1, marginLeft: 16 },
    menuLabel: { fontSize: 16, fontWeight: '700', color: '#1F2937' },
    menuSub: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
    menuLabelOnly: { flex: 1, fontSize: 15, fontWeight: '600', color: '#4B5563', marginLeft: 12 },

    logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 40, marginHorizontal: 20, padding: 18, borderRadius: 20, backgroundColor: '#FEF2F2', borderWidth: 1, borderColor: '#FEE2E2' },
    logoutText: { color: '#EF4444', fontSize: 16, fontWeight: '800' },

    versionText: { textAlign: 'center', color: '#D1D5DB', fontSize: 11, marginTop: 24, fontWeight: '600' }
});

export default AccountScreen;
