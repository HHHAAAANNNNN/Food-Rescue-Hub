# 🎯 SDGs Integration - NourishHub

## Overview
NourishHub mendukung 5 Sustainable Development Goals (SDGs) dari PBB yang relevan dengan misi sosial dan lingkungan proyek ini.

## SDGs yang Didukung

### 1️⃣ SDG 2: Zero Hunger
**Warna**: #DDA63A (Gold/Kuning)

**Kontribusi**:
- Mendistribusikan makanan bergizi kepada keluarga pra-sejahtera
- Mengurangi kerawanan pangan di tingkat komunitas lokal
- Memastikan akses pangan yang layak dan bermartabat

**Impact Metrics**:
- Jumlah penerima manfaat yang terbantu
- Kilogram makanan yang didistribusikan
- Keluarga yang terhindar dari kerawanan pangan

---

### 2️⃣ SDG 8: Decent Work & Economic Growth
**Warna**: #A21942 (Merah Marun)

**Kontribusi**:
- Menciptakan lapangan kerja melalui hub komunitas
- Pemberdayaan ekonomi melalui pengolahan surplus
- Peluang UMKM untuk mendapat bahan baku terjangkau

**Impact Metrics**:
- Jumlah relawan aktif
- UMKM yang bermitra
- Produk olahan yang dihasilkan

---

### 3️⃣ SDG 11: Sustainable Cities & Communities
**Warna**: #FD9D24 (Oranye)

**Kontribusi**:
- Membangun hub fisik di tingkat RT/RW
- Memperkuat solidaritas komunitas lokal
- Sistem pangan berkelanjutan berbasis hyperlocal

**Impact Metrics**:
- Jumlah hub komunitas aktif
- Wilayah yang terlayani
- Tingkat partisipasi masyarakat

---

### 4️⃣ SDG 12: Responsible Consumption & Production
**Warna**: #BF8B2E (Coklat Keemasan)

**Kontribusi**:
- Mengurangi limbah pangan (food waste)
- Redistribusi makanan berlebih
- Edukasi konsumsi bertanggung jawab

**Impact Metrics**:
- Ton limbah pangan yang diselamatkan
- Persentase pengurangan food waste
- Produk daur ulang yang dihasilkan

---

### 5️⃣ SDG 17: Partnerships for the Goals
**Warna**: #19486A (Biru Navy)

**Kontribusi**:
- Kolaborasi dengan mitra F&B
- Kerjasama dengan pemimpin komunitas (RT/RW)
- Partnership dengan UMKM lokal

**Impact Metrics**:
- Jumlah mitra F&B
- Kerjasama lintas sektor
- Program kolaboratif yang berjalan

---

## Implementation

### Data Structure
```javascript
{
  number: 2,              // SDG number
  title: "Zero Hunger",   // SDG title
  description: "...",     // Kontribusi NourishHub
  color: "#DDA63A"        // Official SDG color
}
```

### Component Usage
```vue
<SDGCard :sdg="sdgData" />
```

### Adding New SDG
1. Edit `src/models/Project.js`
2. Add to `sdgs` array:
```javascript
{
  number: X,
  title: "SDG Title",
  description: "How NourishHub contributes",
  color: "#HEXCOLOR"
}
```

3. Add CSS styling in `src/components/SDGCard.vue`:
```css
.sdg-X .sdg-number {
  background: linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%);
}

.sdg-X::before {
  background: linear-gradient(90deg, #COLOR1 0%, #COLOR2 100%);
}

.sdg-X:hover {
  border-color: #COLOR1;
}
```

## Design Features

### Visual Design
- **Number Badge**: Large circular badge with SDG number
- **Color Coding**: Each SDG has official UN color
- **Hover Effects**: Elevation animation + border highlight
- **Top Bar**: Colored bar that expands on hover
- **SDG Tag**: Small "SDG" label on number badge

### Animations
- `fadeInUp`: Initial load animation
- `translateY(-8px)`: Hover elevation
- `scaleX(1)`: Top bar expansion on hover

### Responsive
- Desktop: Grid auto-fit (min 300px)
- Tablet: 2 columns
- Mobile: Single column stack

## Official SDG Colors Reference

| SDG | Color | Hex Code |
|-----|-------|----------|
| 2 | Gold | #DDA63A |
| 8 | Maroon | #A21942 |
| 11 | Orange | #FD9D24 |
| 12 | Brown Gold | #BF8B2E |
| 17 | Navy Blue | #19486A |

## Best Practices

1. **Always use official SDG colors** for consistency
2. **Keep descriptions concise** (max 2 lines)
3. **Focus on measurable impact** when describing contribution
4. **Maintain visual hierarchy** - Number → Title → Description
5. **Test hover states** on different devices

## Resources

- [UN SDGs Official Website](https://sdgs.un.org/)
- [SDG Color Palette](https://www.un.org/sustainabledevelopment/news/communications-material/)
- [SDG Icons & Guidelines](https://www.un.org/sustainabledevelopment/resources/)

## Future Enhancements

- [ ] Add SDG progress tracking
- [ ] Interactive SDG detail modals
- [ ] Link to specific impact metrics per SDG
- [ ] SDG achievement badges
- [ ] Annual SDG impact reports
- [ ] Comparison with other regions

---

**Note**: SDG integration menunjukkan komitmen NourishHub terhadap pembangunan berkelanjutan global sambil tetap fokus pada impact lokal yang terukur.
