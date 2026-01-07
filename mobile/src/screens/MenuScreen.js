import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Plus } from 'lucide-react-native';

const CATEGORIES = ["All", "Salads", "Bowls", "Thalis", "Keto", "Desserts"];

const MENU_ITEMS = [
    { id: 1, name: "Grilled Chicken Salad", category: "Salads", price: 249, cal: 350, img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Paneer Tikka Bowl", category: "Bowls", price: 299, cal: 450, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Keto Beef Stir Fry", category: "Keto", price: 349, cal: 500, img: "https://images.unsplash.com/photo-1628294895950-98052523e036?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Veggie Delight Thali", category: "Thalis", price: 199, cal: 600, img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 5, name: "Quinoa Power Bowl", category: "Bowls", price: 279, cal: 400, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { id: 6, name: "Berry Greek Yogurt", category: "Desserts", price: 149, cal: 200, img: "https://images.unsplash.com/photo-1488477181946-b423a8040b6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
];

const MenuScreen = () => {
    const [selectedCat, setSelectedCat] = useState("All");

    const filteredItems = selectedCat === "All"
        ? MENU_ITEMS
        : MENU_ITEMS.filter(item => item.category === selectedCat);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Full Menu</Text>
            </View>

            <View style={styles.searchContainer}>
                <Search size={20} color="#888" />
                <TextInput placeholder="Search dishes..." style={styles.searchInput} placeholderTextColor="#aaa" />
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.catDetails} contentContainerStyle={styles.catContent}>
                {CATEGORIES.map((cat, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={[styles.catPill, selectedCat === cat && styles.catPillActive]}
                        onPress={() => setSelectedCat(cat)}
                    >
                        <Text style={[styles.catText, selectedCat === cat && styles.catTextActive]}>{cat}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <ScrollView contentContainerStyle={styles.listContent}>
                {filteredItems.map(item => (
                    <View key={item.id} style={styles.itemCard}>
                        <View style={styles.itemInfo}>
                            <View style={styles.vegIndicator}>
                                <View style={styles.vegDot} />
                            </View>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemPrice}>₹{item.price}</Text>
                            <Text style={styles.itemCal}>{item.cal} kcal • High Protein</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.img }} style={styles.itemImage} />
                            <TouchableOpacity style={styles.addBtn}>
                                <Text style={styles.addBtnText}>ADD</Text>
                                <Plus size={12} color="#16A34A" style={{ position: 'absolute', top: 3, right: 3 }} />
                            </TouchableOpacity>
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
    header: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
    headerTitle: { fontSize: 20, fontWeight: '800', color: '#111' },

    searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f4f6f8', margin: 16, paddingHorizontal: 16, borderRadius: 12, height: 48 },
    searchInput: { flex: 1, marginLeft: 12, fontWeight: '500', color: '#111' },

    catDetails: { maxHeight: 50, marginBottom: 8 },
    catContent: { paddingHorizontal: 16, gap: 10 },
    catPill: { paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20, borderWidth: 1, borderColor: '#eee', backgroundColor: '#fff' },
    catPillActive: { backgroundColor: '#111', borderColor: '#111' },
    catText: { fontSize: 13, fontWeight: '600', color: '#666' },
    catTextActive: { color: '#fff' },

    listContent: { padding: 16, gap: 24 },
    itemCard: { flexDirection: 'row', justifyContent: 'space-between', height: 110 },
    itemInfo: { flex: 1, paddingRight: 16 },
    vegIndicator: { width: 14, height: 14, borderWidth: 1, borderColor: '#16A34A', alignItems: 'center', justifyContent: 'center', marginBottom: 8 },
    vegDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#16A34A' },
    itemName: { fontSize: 16, fontWeight: '700', color: '#333', marginBottom: 4 },
    itemPrice: { fontSize: 14, fontWeight: '600', color: '#111', marginBottom: 4 },
    itemCal: { fontSize: 12, color: '#888' },

    imageContainer: { width: 110, height: 110, borderRadius: 16, position: 'relative' },
    itemImage: { width: '100%', height: '100%', borderRadius: 16 },
    addBtn: { position: 'absolute', bottom: -10, left: 15, right: 15, backgroundColor: '#fff', borderRadius: 8, height: 32, alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOpacity: 0.1, elevation: 4, borderWidth: 1, borderColor: '#e0e0e0' },
    addBtnText: { color: '#16A34A', fontWeight: '900', fontSize: 12 }
});

export default MenuScreen;
