import React from 'react';
import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { MapPin, User, Search, Star, Clock, Percent } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={styles.header}>
                <View style={styles.locationContainer}>
                    <MapPin size={24} color="#F97316" fill="#F97316" fillOpacity={0.2} />
                    <View>
                        <View style={styles.row}>
                            <Text style={styles.locationTitle}>Home</Text>
                            <Text style={styles.downArrow}>▼</Text>
                        </View>
                        <Text style={styles.locationSubtitle} numberOfLines={1}>
                            B-404, Green Heights, Andheri West, Mumbai
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.profileButton}>
                    <User size={20} color="#333" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <Search size={20} color="#666" />
                        <Text style={styles.searchText}>Search "Paneer Tikka"</Text>
                    </View>
                    <View style={styles.micButton}>
                        {/* Mic Icon equivalent */}
                        <View style={styles.verticalLine} />
                        <Text style={styles.micText}>🎤</Text>
                    </View>
                </View>

                {/* Categories / "What's on your mind?" */}
                <Text style={styles.sectionTitle}>What's on your mind?</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesList}>
                    {['Healthy', 'Thali', 'Salad', 'Keto', 'Pasta', 'Biryani'].map((item, index) => (
                        <View key={index} style={styles.categoryItem}>
                            <View style={styles.categoryImagePlaceholder}>
                                {/* Replace with actual images in prod */}
                                <Text style={{ fontSize: 30 }}>🥘</Text>
                            </View>
                            <Text style={styles.categoryText}>{item}</Text>
                        </View>
                    ))}
                </ScrollView>

                {/* Banners */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bannerList}>
                    {[1, 2].map((i) => (
                        <View key={i} style={styles.bannerCard}>
                            <View style={styles.bannerTextContainer}>
                                <Text style={styles.bannerTitle}>30% OFF</Text>
                                <Text style={styles.bannerSubtitle}>On First Order</Text>
                                <Text style={styles.bannerCode}>Use: FITHER30</Text>
                            </View>
                            <Image
                                source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80' }}
                                style={styles.bannerImage}
                            />
                        </View>
                    ))}
                </ScrollView>

                {/* Featured Restaurants / Plans */}
                <Text style={styles.sectionTitle}>Recommended for you</Text>

                {[
                    { name: 'FitHer Daily', time: '30-40 mins', rating: '4.8', tags: ['Healthy', 'North Indian'], offer: 'PRO FREE DELIVERY', img: 'https://images.unsplash.com/photo-1628294895950-98052523e036?ixlib=rb-4.0.3' },
                    { name: 'Italino Fresh', time: '45-50 mins', rating: '4.5', tags: ['Pasta', 'Salads'], offer: '60% OFF', img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3' },
                    { name: 'Green Bowl', time: '25-30 mins', rating: '4.9', tags: ['Salads', 'Keto'], offer: 'ITEMS AT ₹129', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3' }
                ].map((rest, index) => (
                    <View key={index} style={styles.restaurantCard}>
                        <View style={styles.restImageContainer}>
                            <Image source={{ uri: rest.img }} style={styles.restImage} />
                            <View style={styles.offerTag}>
                                <Percent size={12} color="#fff" />
                                <Text style={styles.offerText}>{rest.offer}</Text>
                            </View>
                            <View style={styles.timeTag}>
                                <Clock size={12} color="#333" />
                                <Text style={styles.timeText}>{rest.time}</Text>
                            </View>
                        </View>
                        <View style={styles.restDetails}>
                            <View style={styles.rowBetween}>
                                <Text style={styles.restName}>{rest.name}</Text>
                                <View style={styles.ratingBadge}>
                                    <Text style={styles.ratingText}>{rest.rating}</Text>
                                    <Star size={10} color="#fff" fill="#fff" />
                                </View>
                            </View>
                            <Text style={styles.restTags}>{rest.tags.join(" • ")}</Text>
                            <View style={styles.dashedLine} />
                            <Text style={styles.safetyTag}>🟢 100% Hygienic Kitchen</Text>
                        </View>
                    </View>
                ))}

                <View style={{ height: 100 }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
    locationContainer: { flexDirection: 'row', alignItems: 'center', flex: 1 },
    locationTitle: { fontWeight: '800', fontSize: 18, color: '#333', marginRight: 4 },
    downArrow: { fontSize: 12, color: '#F97316' },
    locationSubtitle: { color: '#666', fontSize: 12, maxWidth: '80%' },
    profileButton: { padding: 8, backgroundColor: '#f0f0f0', rounded: 20, borderRadius: 20 },

    scrollContent: { paddingBottom: 20 },

    searchContainer: { padding: 16, flexDirection: 'row', alignItems: 'center', gap: 12 },
    searchBar: { flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f6f8', padding: 12, borderRadius: 12, gap: 12 },
    searchText: { color: '#888', fontWeight: '500' },
    micButton: { flexDirection: 'row', alignItems: 'center', gap: 12 },
    verticalLine: { width: 1, height: 20, backgroundColor: '#ccc' },
    micText: { fontSize: 18 },

    sectionTitle: { fontSize: 18, fontWeight: '800', color: '#111', marginLeft: 16, marginBottom: 12, letterSpacing: -0.5 },

    categoriesList: { paddingLeft: 16, marginBottom: 24 },
    categoryItem: { alignItems: 'center', marginRight: 20 },
    categoryImagePlaceholder: { width: 64, height: 64, borderRadius: 32, backgroundColor: '#FFF5EB', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
    categoryText: { fontSize: 12, fontWeight: '600', color: '#444' },

    bannerList: { paddingLeft: 16, marginBottom: 32 },
    bannerCard: { width: 300, height: 140, backgroundColor: '#1E1E2E', borderRadius: 20, marginRight: 16, flexDirection: 'row', overflow: 'hidden' },
    bannerTextContainer: { flex: 1, padding: 20, justifyContent: 'center' },
    bannerTitle: { color: '#F97316', fontSize: 24, fontWeight: '900' },
    bannerSubtitle: { color: '#fff', fontSize: 14, fontWeight: '600', marginBottom: 8 },
    bannerCode: { color: '#aaa', fontSize: 10, borderWidth: 1, borderColor: '#aaa', alignSelf: 'flex-start', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4, textTransform: 'uppercase' },
    bannerImage: { width: 120, height: '100%', resizeMode: 'cover' },

    restaurantCard: { marginHorizontal: 16, marginBottom: 24, backgroundColor: '#fff', borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
    restImageContainer: { height: 200, borderTopLeftRadius: 20, borderTopRightRadius: 20, overflow: 'hidden', position: 'relative' },
    restImage: { width: '100%', height: '100%' },
    offerTag: { position: 'absolute', top: 16, left: 0, backgroundColor: '#2563EB', paddingHorizontal: 10, paddingVertical: 4, flexDirection: 'row', alignItems: 'center', gap: 4, borderTopRightRadius: 4, borderBottomRightRadius: 4 },
    offerText: { color: '#fff', fontSize: 10, fontWeight: '800' },
    timeTag: { position: 'absolute', bottom: 12, right: 12, backgroundColor: '#fff', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, flexDirection: 'row', alignItems: 'center', gap: 4 },
    timeText: { fontSize: 10, fontWeight: 'bold' },

    restDetails: { padding: 16 },
    rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
    restName: { fontSize: 18, fontWeight: '800', color: '#111' },
    ratingBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#16A34A', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 6, gap: 2 },
    ratingText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
    restTags: { color: '#666', fontSize: 12, marginBottom: 12 },
    dashedLine: { height: 1, borderStyle: 'dotted', borderWidth: 1, borderColor: '#f0f0f0', marginBottom: 12 },
    safetyTag: { fontSize: 10, color: '#666' }
});

export default HomeScreen;
