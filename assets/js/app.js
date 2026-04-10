
// ══════════════════════════════════════════════
//  WebCraft AI — app.js (Upgraded V2.1)
//  Layout unik per kategori + konten lebih kaya
// ══════════════════════════════════════════════

// ── PALETTES ──
const palettes = {
  hangat: {
    primary:'#D94F0A', nav:'#1a0800', bg:'#FFF8F5', accent:'#FF6B35',
    text:'#1a0a00', muted:'#8B4513', btn:'#D94F0A', btnHover:'#BF3A00',
    card:'#FFF0E8', border:'#FFD5B8', tag:'#FF6B35', tagBg:'rgba(217,79,10,0.1)',
    font:'Playfair+Display:wght@700;800|Lato:wght@300;400;700',
    fontHead:'Playfair Display', fontBody:'Lato'
  },
  segar: {
    primary:'#0F7A5A', nav:'#001a0f', bg:'#F0FDF7', accent:'#1DB97A',
    text:'#001a0f', muted:'#2D6A4F', btn:'#0F7A5A', btnHover:'#0A6047',
    card:'#E8FBF2', border:'#B7EDD5', tag:'#0F7A5A', tagBg:'rgba(15,122,90,0.1)',
    font:'Plus+Jakarta+Sans:wght@400;500;700;800',
    fontHead:'Plus Jakarta Sans', fontBody:'Plus Jakarta Sans'
  },
  profesional: {
    primary:'#1A5FA8', nav:'#050D1A', bg:'#F3F8FF', accent:'#3B82F6',
    text:'#000d1a', muted:'#1E4D8C', btn:'#1A5FA8', btnHover:'#144D8A',
    card:'#EBF3FF', border:'#BFDBFE', tag:'#1A5FA8', tagBg:'rgba(26,95,168,0.1)',
    font:'DM+Sans:wght@300;400;500;700|DM+Serif+Display',
    fontHead:'DM Serif Display', fontBody:'DM Sans'
  },
  elegan: {
    primary:'#4A35B5', nav:'#08051A', bg:'#F5F3FF', accent:'#7C6EFF',
    text:'#0a0818', muted:'#3D2F8A', btn:'#4A35B5', btnHover:'#3A2899',
    card:'#EEEBff', border:'#D4CFFF', tag:'#4A35B5', tagBg:'rgba(74,53,181,0.1)',
    font:'Cormorant+Garamond:wght@400;600;700|Inter:wght@300;400;500',
    fontHead:'Cormorant Garamond', fontBody:'Inter'
  }
};

// ── TEMPLATES ──
const templates = {
  kuliner: {
    headline: 'Cita Rasa yang Tak Terlupakan',
    sub: 'Hidangan lezat dengan bahan pilihan segar setiap hari. Menyajikan pengalaman kuliner terbaik untuk keluarga Anda.',
    emoji: '🍽️',
    badge: 'Buka Setiap Hari',
    tagline: 'Masak dengan Cinta, Sajikan dengan Bangga',
    stats: [
      { num: '500+', label: 'Pelanggan Setia' },
      { num: '15+', label: 'Menu Pilihan' },
      { num: '4.9★', label: 'Rating Google' },
    ],
    categories: ['Makanan Utama', 'Camilan', 'Minuman'],
    menuItems: [
      { name:'Nasi Goreng Spesial', price:'Rp 18.000', desc:'Bumbu rahasia turun-temurun, telur mata sapi', cat:'Makanan Utama', badge:'🔥 Best Seller' },
      { name:'Mie Ayam Bakso', price:'Rp 15.000', desc:'Kuah kaldu sapi asli, bakso homemade', cat:'Makanan Utama', badge:'⭐ Favorit' },
      { name:'Soto Betawi', price:'Rp 20.000', desc:'Santan segar, isian lengkap, kerupuk rambak', cat:'Makanan Utama', badge:'' },
      { name:'Ayam Bakar Kecap', price:'Rp 22.000', desc:'Ayam kampung, marinade 12 jam', cat:'Makanan Utama', badge:'🆕 Baru' },
      { name:'Pisang Goreng Crispy', price:'Rp 8.000', desc:'Tepung renyah, topping coklat/keju', cat:'Camilan', badge:'🔥 Hot' },
      { name:'Tahu Isi Pedas', price:'Rp 6.000', desc:'Isi sayur segar, sambal rawit', cat:'Camilan', badge:'' },
      { name:'Es Teh Manis', price:'Rp 5.000', desc:'Teh pilihan premium, gula aren', cat:'Minuman', badge:'' },
      { name:'Jus Alpukat', price:'Rp 12.000', desc:'Alpukat Garut, susu full cream', cat:'Minuman', badge:'💚 Sehat' },
    ],
    testimonials: [
      { name:'Budi Santoso', role:'Pelanggan Tetap', text:'Udah 3 tahun langganan, rasanya konsisten enak banget! Nasi gorengnya juara.', stars:5 },
      { name:'Dewi Rahayu', role:'Food Blogger', text:'Tempat makan hidden gem! Harga terjangkau, porsi besar, rasa nggak kalah sama resto mahal.', stars:5 },
      { name:'Andi Pratama', role:'Pelanggan', text:'Pelayanannya ramah, makanannya cepat datang. Cocok buat makan siang keluarga.', stars:4 },
    ]
  },
  fashion: {
    headline: 'Style Your Story',
    sub: 'Koleksi fashion kontemporer yang memadukan estetika modern dengan kenyamanan sehari-hari. Ekspresikan dirimu.',
    emoji: '✦',
    badge: 'New Collection',
    tagline: 'Where Style Meets Comfort',
    stats: [
      { num: '200+', label: 'Koleksi Tersedia' },
      { num: '1.2K', label: 'Happy Customers' },
      { num: 'Free', label: 'Ongkir > 200rb' },
    ],
    categories: ['Women', 'Men', 'Accessories'],
    menuItems: [
      { name:'Outer Knit Premium', price:'Rp 235.000', desc:'Bahan wool blend, tersedia 6 warna', cat:'Women', badge:'🔥 Trending' },
      { name:'Dress Midi Slit', price:'Rp 189.000', desc:'Rayon viscose, flow & elegant', cat:'Women', badge:'⭐ Best Pick' },
      { name:'Set Coord Linen', price:'Rp 299.000', desc:'Top + celana, casual chic look', cat:'Women', badge:'🆕 New' },
      { name:'Kemeja Oversize', price:'Rp 165.000', desc:'Oxford cotton, unisex fit', cat:'Men', badge:'🔥 Hot' },
      { name:'Celana Cargo Slim', price:'Rp 210.000', desc:'Twill stretch, multi pocket', cat:'Men', badge:'' },
      { name:'Tote Bag Canvas', price:'Rp 85.000', desc:'14oz canvas, sablon premium', cat:'Accessories', badge:'💛 Fav' },
      { name:'Scrunchie Set', price:'Rp 45.000', desc:'Satin + velvet, isi 3 pcs', cat:'Accessories', badge:'' },
      { name:'Kacamata Retro', price:'Rp 125.000', desc:'Frame acetate, UV400 lens', cat:'Accessories', badge:'🆕 New' },
    ],
    testimonials: [
      { name:'Rania K.', role:'Fashion Enthusiast', text:'Kualitasnya beneran bagus! Jahitannya rapi, bahan adem, ukurannya pas. Puas banget!', stars:5 },
      { name:'Mega S.', role:'Repeat Customer', text:'Udah order 5x, selalu puas. Packagingnya cantik dan pengiriman cepat.', stars:5 },
      { name:'Tara D.', role:'Pelanggan', text:'Dress midi-nya aesthetic banget, banyak yang nanya beli dimana. Worth it!', stars:5 },
    ]
  },
  jasa: {
    headline: 'Solusi Profesional, Hasil Terjamin',
    sub: 'Tim teknisi berpengalaman siap menangani kebutuhan Anda dengan cepat, tepat, dan bergaransi.',
    emoji: '⚙️',
    badge: 'Bergaransi Resmi',
    tagline: 'Fast · Reliable · Affordable',
    stats: [
      { num: '800+', label: 'Proyek Selesai' },
      { num: '5 Thn', label: 'Pengalaman' },
      { num: '24/7', label: 'Siap Dipanggil' },
    ],
    categories: ['AC & Elektronik', 'Rumah & Bangunan', 'Kendaraan'],
    menuItems: [
      { name:'Servis AC Split', price:'Rp 75.000', desc:'Cuci, cek freon, bersihkan filter. Bergaransi 1 bulan', cat:'AC & Elektronik', badge:'🔥 Terlaris' },
      { name:'Instalasi AC Baru', price:'Rp 300.000', desc:'Pasang unit baru, termasuk pipa 3m', cat:'AC & Elektronik', badge:'' },
      { name:'Servis Kulkas', price:'Rp 100.000', desc:'Diagnosa + perbaikan komponen, bergaransi', cat:'AC & Elektronik', badge:'⭐ Terpercaya' },
      { name:'Instalasi Listrik', price:'Rp 150.000', desc:'Pasang stop kontak, saklar, MCB, bergaransi 1 tahun', cat:'Rumah & Bangunan', badge:'' },
      { name:'Atasi Kebocoran', price:'Rp 200.000', desc:'Waterproofing atap & dinding, material premium', cat:'Rumah & Bangunan', badge:'🆕 Baru' },
      { name:'Cat Interior', price:'Rp 35.000/m²', desc:'Cat Dulux/Catylac, 2 lapis, rapi & bersih', cat:'Rumah & Bangunan', badge:'' },
      { name:'Tune Up Motor', price:'Rp 85.000', desc:'Ganti oli + filter + busi, semua merek', cat:'Kendaraan', badge:'🔥 Populer' },
      { name:'Tambal Ban Tubeless', price:'Rp 35.000', desc:'Metode cacing & tambalan dalam', cat:'Kendaraan', badge:'' },
    ],
    testimonials: [
      { name:'Pak Hendra', role:'Pelanggan AC', text:'Teknisinya datang tepat waktu, kerja bersih dan profesional. AC sekarang dingin banget!', stars:5 },
      { name:'Bu Sari', role:'Pelanggan Listrik', text:'Masalah listrik rumah beres dalam 2 jam. Harga sesuai, nggak ada biaya tersembunyi.', stars:5 },
      { name:'Mas Doni', role:'Pelanggan Motor', text:'Tune up motornya oke, nggak lebay nyuruh ganti part. Jujur dan terjangkau.', stars:4 },
    ]
  },
  toko: {
    headline: 'Semua Ada, Harga Bersahabat',
    sub: 'Ribuan produk pilihan dengan kualitas terjamin. Belanja mudah, hemat, dan langsung dari tangan ke tangan.',
    emoji: '🛒',
    badge: 'Grosir & Eceran',
    tagline: 'Lebih Hemat, Lebih Lengkap',
    stats: [
      { num: '5.000+', label: 'Produk Tersedia' },
      { num: 'Gratis', label: 'Ongkir > 100rb' },
      { num: '08.00', label: 'Buka Pagi' },
    ],
    categories: ['Sembako', 'Snack & Minuman', 'Kebutuhan Rumah'],
    menuItems: [
      { name:'Beras Premium 5kg', price:'Rp 68.000', desc:'Beras pulen Cianjur, pilihan ibu rumah tangga', cat:'Sembako', badge:'🔥 Terlaris' },
      { name:'Minyak Goreng 2L', price:'Rp 29.000', desc:'Minyak tropical, jernih & berkualitas', cat:'Sembako', badge:'⭐ Hemat' },
      { name:'Gula Pasir 1kg', price:'Rp 14.500', desc:'Gula kristal putih, SNI terjamin', cat:'Sembako', badge:'' },
      { name:'Paket Sembako Komplit', price:'Rp 155.000', desc:'Beras 2kg + minyak 1L + gula 500gr + telur 10pcs', cat:'Sembako', badge:'💰 Hemat Paket' },
      { name:'Snack Kiloan Mix', price:'Rp 35.000/kg', desc:'Aneka pilihan kripik, biskuit, permen', cat:'Snack & Minuman', badge:'🔥 Hot' },
      { name:'Minuman Kotak 200ml', price:'Rp 5.500/pcs', desc:'Teh, jus, susu — berbagai merek', cat:'Snack & Minuman', badge:'' },
      { name:'Sabun Mandi Batang', price:'Rp 4.500', desc:'Lifebuoy, Lux, Dove — stok lengkap', cat:'Kebutuhan Rumah', badge:'' },
      { name:'Deterjen Bubuk 1kg', price:'Rp 18.000', desc:'Attack, Rinso, So Klin tersedia', cat:'Kebutuhan Rumah', badge:'⭐ Pilihan' },
    ],
    testimonials: [
      { name:'Bu Rina', role:'Ibu Rumah Tangga', text:'Belanjaannya lengkap, harga lebih murah dari supermarket. Tinggal telepon, langsung diantar!', stars:5 },
      { name:'Pak Agus', role:'Pemilik Warung', text:'Kulakan disini udah 2 tahun. Harga grosir, kualitas oke, pelayanan ramah.', stars:5 },
      { name:'Desi', role:'Pelanggan Online', text:'Pesan via WA gampang banget, barang dikemas rapi dan cepat sampai.', stars:4 },
    ]
  }
};

// ── CHIP TOGGLE ──
let selectedFeatures = ['menu','wa'];
document.querySelectorAll('.chip').forEach(c => {
  c.addEventListener('click', () => {
    c.classList.toggle('on');
    selectedFeatures = Array.from(document.querySelectorAll('.chip.on')).map(x => x.dataset.v);
  });
});

// ── SLUG ──
function liveSlug() {
  const nama = document.getElementById('f-nama').value;
  const slug = nama.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
  document.getElementById('browser-url').textContent = 'webcraftai.demo/' + (slug||'bisnis-anda');
}

// ── SWITCH TAB ──
function switchTab(name) {
  ['preview','log','arch'].forEach(t => {
    document.querySelector(`.tab-btn:nth-child(${['preview','log','arch'].indexOf(t)+1})`).classList.toggle('active', t===name);
    const el = document.getElementById('tab-'+t);
    if (el) { el.classList.remove('active'); if (t===name) el.classList.add('active'); }
  });
}

// ══════════════════════════════════════════════
//  LAYOUT BUILDERS — unik per kategori
// ══════════════════════════════════════════════

function buildKuliner(nama, pal, tmpl, wa, fitur) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
      .fade-in { animation: fadeInUp 0.6s ease both; }
    </style>`;

  // Promo banner
  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent});color:white;text-align:center;padding:10px 20px;font-size:13px;font-weight:700;letter-spacing:1px;">
      🎉 PROMO HARI INI — Beli 2 Porsi Gratis 1 Es Teh!&nbsp;&nbsp;|&nbsp;&nbsp;Berlaku 11.00–15.00 WIB
    </div>`;
  }

  // Nav
  html += `<nav style="display:flex;justify-content:space-between;align-items:center;padding:16px 32px;background:${pal.nav};position:sticky;top:0;z-index:10;">
    <span style="font-family:'${pal.fontHead}',serif;color:white;font-size:22px;font-weight:700;">🍽️ ${nama}</span>
    <div style="display:flex;gap:24px;">
      ${['Menu','Tentang','Lokasi'].map(l=>`<a href="#" style="color:rgba(255,255,255,0.7);font-size:13px;transition:color 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='rgba(255,255,255,0.7)'">${l}</a>`).join('')}
    </div>
    <a href="${wa}" style="background:${pal.btn};color:white;padding:8px 18px;border-radius:99px;font-size:13px;font-weight:700;">Pesan WA</a>
  </nav>`;

  // Hero — split layout
  html += `<section style="display:grid;grid-template-columns:1fr 1fr;min-height:460px;background:${pal.bg};" class="fade-in">
    <div style="padding:60px 48px;display:flex;flex-direction:column;justify-content:center;">
      <span style="display:inline-block;background:${pal.tagBg};color:${pal.tag};border:1px solid ${pal.border};padding:5px 14px;border-radius:99px;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:20px;">✦ ${tmpl.badge}</span>
      <h1 style="font-family:'${pal.fontHead}',serif;font-size:clamp(28px,3.5vw,46px);font-weight:800;line-height:1.15;color:${pal.text};margin-bottom:16px;">${tmpl.headline}</h1>
      <p style="color:${pal.muted};font-size:16px;line-height:1.8;margin-bottom:32px;max-width:380px;">${tmpl.sub}</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;">
        <a href="${wa}" style="display:inline-flex;align-items:center;gap:8px;background:${pal.btn};color:white;padding:13px 28px;border-radius:10px;font-size:15px;font-weight:700;">💬 Pesan Sekarang</a>
        <a href="#menu" style="display:inline-flex;align-items:center;gap:8px;background:transparent;color:${pal.primary};border:2px solid ${pal.border};padding:13px 24px;border-radius:10px;font-size:15px;font-weight:600;">Lihat Menu →</a>
      </div>
    </div>
    <div style="background:linear-gradient(135deg,${pal.primary}22,${pal.accent}33);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:40px;">
      <div style="font-size:80px;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.15));">🍽️</div>
      <div style="font-family:'${pal.fontHead}',serif;font-size:18px;color:${pal.muted};font-style:italic;">"${tmpl.tagline}"</div>
    </div>
  </section>`;

  // Stats bar
  html += `<div style="display:grid;grid-template-columns:repeat(3,1fr);background:${pal.primary};">
    ${tmpl.stats.map(s=>`<div style="padding:20px;text-align:center;border-right:1px solid rgba(255,255,255,0.15);">
      <div style="color:white;font-size:26px;font-weight:800;">${s.num}</div>
      <div style="color:rgba(255,255,255,0.7);font-size:12px;margin-top:2px;">${s.label}</div>
    </div>`).join('')}
  </div>`;

  // Menu section
  if (fitur.includes('menu')) {
    html += `<section id="menu" style="padding:56px 32px;background:white;">
      <div style="text-align:center;margin-bottom:40px;">
        <div style="display:inline-block;background:${pal.tagBg};color:${pal.tag};padding:4px 14px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">Menu Kami</div>
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:32px;font-weight:800;color:${pal.text};">Pilihan Menu Terbaik</h2>
      </div>
      ${tmpl.categories.map(cat => {
        const items = tmpl.menuItems.filter(i=>i.cat===cat);
        if(!items.length) return '';
        return `<div style="margin-bottom:36px;">
          <h3 style="font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${pal.muted};margin-bottom:16px;padding-bottom:8px;border-bottom:2px solid ${pal.border};">${cat}</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;">
            ${items.map(item=>`
              <div style="background:${pal.card};border:1px solid ${pal.border};border-radius:14px;padding:18px;display:flex;justify-content:space-between;align-items:flex-start;transition:transform 0.2s;" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='translateY(0)'">
                <div style="flex:1;">
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <span style="font-weight:700;font-size:15px;color:${pal.text};">${item.name}</span>
                    ${item.badge?`<span style="font-size:10px;background:${pal.tagBg};color:${pal.tag};padding:2px 8px;border-radius:99px;font-weight:700;">${item.badge}</span>`:''}
                  </div>
                  <div style="font-size:12px;color:${pal.muted};line-height:1.5;">${item.desc}</div>
                </div>
                <div style="font-size:15px;font-weight:800;color:${pal.primary};white-space:nowrap;margin-left:12px;">${item.price}</div>
              </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  // Galeri
  if (fitur.includes('galeri')) {
    const emojis = ['🍛','🍜','🥘','🍲','☕','🧃'];
    html += `<section style="padding:48px 32px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:32px;">
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:28px;font-weight:800;color:${pal.text};">Galeri Hidangan</h2>
        <p style="color:${pal.muted};margin-top:8px;font-size:14px;">Setiap foto menceritakan cita rasa yang sesungguhnya</p>
      </div>
      <div style="display:grid;grid-template-columns:2fr 1fr 1fr;grid-template-rows:150px 150px;gap:10px;max-width:700px;margin:0 auto;border-radius:16px;overflow:hidden;">
        <div style="grid-row:span 2;background:linear-gradient(135deg,${pal.primary}33,${pal.accent}44);display:flex;align-items:center;justify-content:center;font-size:56px;">🍽️</div>
        ${emojis.slice(0,4).map((e,i)=>`<div style="background:${i%2===0?pal.primary+'22':pal.accent+'22'};display:flex;align-items:center;justify-content:center;font-size:32px;">${e}</div>`).join('')}
      </div>
    </section>`;
  }

  // Testimoni
  if (fitur.includes('review')) {
    html += buildTestimoni(tmpl, pal);
  }

  // Lokasi
  if (fitur.includes('lokasi')) {
    html += buildLokasi(nama, pal);
  }

  // WA CTA
  if (fitur.includes('wa')) {
    html += `<section style="padding:56px 32px;background:${pal.primary};text-align:center;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:30px;font-weight:800;color:white;margin-bottom:12px;">Lapar? Pesan Sekarang! 🍽️</h2>
      <p style="color:rgba(255,255,255,0.8);margin-bottom:28px;font-size:15px;">Hubungi kami via WhatsApp, siap antar atau siap saji di tempat</p>
      <a href="${wa}" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:14px 36px;border-radius:99px;font-size:16px;font-weight:800;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="${pal.primary}"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Chat WhatsApp Sekarang
      </a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}

// ─────────────────────────────────────────────
function buildFashion(nama, pal, tmpl, wa, fitur) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:${pal.text};color:white;text-align:center;padding:10px;font-size:12px;letter-spacing:3px;font-weight:600;text-transform:uppercase;">
      FREE ONGKIR untuk pembelian di atas Rp 200.000 &nbsp;·&nbsp; Kode: UMKM2025
    </div>`;
  }

  // Nav — minimal fashion style
  html += `<nav style="display:flex;justify-content:space-between;align-items:center;padding:20px 40px;background:white;border-bottom:1px solid ${pal.border};position:sticky;top:0;z-index:10;">
    <div style="display:flex;gap:28px;">
      ${['Koleksi','Lookbook','Sale'].map(l=>`<a href="#" style="color:${pal.muted};font-size:13px;letter-spacing:1px;text-transform:uppercase;font-weight:500;">${l}</a>`).join('')}
    </div>
    <span style="font-family:'${pal.fontHead}',serif;font-size:24px;font-weight:800;color:${pal.text};letter-spacing:-1px;">${nama}</span>
    <a href="${wa}" style="font-size:13px;color:${pal.primary};font-weight:600;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid ${pal.primary};">Hubungi →</a>
  </nav>`;

  // Hero — full-width editorial
  html += `<section style="padding:80px 40px;text-align:center;background:${pal.bg};position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 70% 50%,${pal.primary}11,transparent 60%);pointer-events:none;"></div>
    <p style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:${pal.muted};margin-bottom:20px;">— ${tmpl.badge} 2025 —</p>
    <h1 style="font-family:'${pal.fontHead}',serif;font-size:clamp(40px,6vw,72px);font-weight:800;line-height:1.05;color:${pal.text};letter-spacing:-2px;margin-bottom:20px;">${tmpl.headline}</h1>
    <p style="color:${pal.muted};font-size:16px;max-width:480px;margin:0 auto 36px;line-height:1.8;">${tmpl.sub}</p>
    <div style="display:flex;gap:8px;justify-content:center;margin-bottom:40px;">
      ${tmpl.stats.map(s=>`<div style="background:white;border:1px solid ${pal.border};padding:12px 24px;border-radius:8px;text-align:center;">
        <div style="font-size:20px;font-weight:800;color:${pal.primary};">${s.num}</div>
        <div style="font-size:11px;color:${pal.muted};letter-spacing:1px;">${s.label}</div>
      </div>`).join('')}
    </div>
    <div style="display:flex;gap:12px;justify-content:center;">
      <a href="#koleksi" style="background:${pal.btn};color:white;padding:14px 32px;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Shop Now</a>
      <a href="${wa}" style="background:transparent;color:${pal.primary};border:2px solid ${pal.primary};padding:14px 28px;font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">WhatsApp</a>
    </div>
  </section>`;

  // Produk — grid lookbook
  if (fitur.includes('menu')) {
    html += `<section id="koleksi" style="padding:56px 32px;background:white;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:32px;">
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:28px;color:${pal.text};">Koleksi Terbaru</h2>
        <div style="display:flex;gap:16px;">
          ${tmpl.categories.map(c=>`<span style="font-size:12px;letter-spacing:1px;text-transform:uppercase;color:${pal.muted};cursor:pointer;padding-bottom:2px;border-bottom:1px solid transparent;" onmouseover="this.style.borderColor='${pal.primary}';this.style.color='${pal.primary}'" onmouseout="this.style.borderColor='transparent';this.style.color='${pal.muted}'">${c}</span>`).join('')}
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:20px;">
        ${tmpl.menuItems.map((item,i)=>`
          <div style="cursor:pointer;" onmouseover="this.querySelector('.img-box').style.transform='scale(1.03)'" onmouseout="this.querySelector('.img-box').style.transform='scale(1)'">
            <div class="img-box" style="background:linear-gradient(135deg,${pal.card},${pal.primary}22);height:220px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:48px;margin-bottom:12px;transition:transform 0.3s;overflow:hidden;position:relative;">
              ${['👗','👔','👜','🧥','👖','👛','🧣','🕶️'][i%8]}
              ${item.badge?`<span style="position:absolute;top:10px;left:10px;background:${pal.primary};color:white;font-size:10px;padding:3px 9px;border-radius:99px;font-weight:700;">${item.badge}</span>`:''}
            </div>
            <div style="font-size:13px;color:${pal.muted};margin-bottom:3px;letter-spacing:0.5px;">${item.cat}</div>
            <div style="font-weight:700;font-size:15px;color:${pal.text};margin-bottom:4px;">${item.name}</div>
            <div style="font-size:12px;color:${pal.muted};margin-bottom:6px;">${item.desc}</div>
            <div style="font-size:16px;font-weight:800;color:${pal.primary};">${item.price}</div>
          </div>`).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('galeri')) {
    const fashionEmoji = ['✦','◆','●','▲','◉','★'];
    html += `<section style="padding:48px 32px;background:${pal.bg};">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:28px;text-align:center;margin-bottom:8px;color:${pal.text};">Lookbook</h2>
      <p style="text-align:center;color:${pal.muted};font-size:13px;letter-spacing:2px;margin-bottom:28px;">STYLE INSPIRATION</p>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:200px 200px;gap:8px;max-width:640px;margin:0 auto;border-radius:16px;overflow:hidden;">
        ${Array(6).fill(0).map((_,i)=>`<div style="background:${i%3===0?pal.primary+'22':i%3===1?pal.card:pal.primary+'11'};display:flex;align-items:center;justify-content:center;font-size:36px;color:${pal.primary};font-style:italic;font-family:'${pal.fontHead}',serif;">
          ${['Chic','Style','Modis','Look','Fashion','Trend'][i]}
        </div>`).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section style="padding:60px 32px;background:${pal.text};text-align:center;">
      <p style="font-size:11px;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.5);margin-bottom:16px;">— Order Via WhatsApp —</p>
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:32px;color:white;margin-bottom:24px;">${tmpl.tagline}</h2>
      <a href="${wa}" style="display:inline-flex;align-items:center;gap:10px;background:#25D366;color:white;padding:14px 36px;border-radius:4px;font-size:15px;font-weight:700;letter-spacing:1px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        CHAT SEKARANG
      </a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}

// ─────────────────────────────────────────────
function buildJasa(nama, pal, tmpl, wa, fitur) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
      @keyframes fadeInUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:${pal.primary};color:white;text-align:center;padding:10px;font-size:13px;font-weight:600;">
      🛠️ DISKON 15% untuk kunjungan pertama — Hubungi sekarang!
    </div>`;
  }

  // Nav
  html += `<nav style="display:flex;justify-content:space-between;align-items:center;padding:18px 36px;background:${pal.nav};position:sticky;top:0;z-index:10;">
    <div style="display:flex;align-items:center;gap:10px;">
      <div style="background:${pal.primary};width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:18px;">⚙️</div>
      <span style="font-family:'${pal.fontHead}',serif;color:white;font-size:20px;font-weight:700;">${nama}</span>
    </div>
    <div style="display:flex;gap:24px;">${['Layanan','Portofolio','Kontak'].map(l=>`<a href="#" style="color:rgba(255,255,255,0.7);font-size:13px;">${l}</a>`).join('')}</div>
    <a href="${wa}" style="background:${pal.btn};color:white;padding:9px 20px;border-radius:8px;font-size:13px;font-weight:700;">📞 Hubungi Kami</a>
  </nav>`;

  // Hero — left heavy + trust badges
  html += `<section style="background:${pal.nav};padding:64px 36px;display:grid;grid-template-columns:1.2fr 1fr;gap:48px;align-items:center;">
    <div>
      <div style="display:inline-flex;align-items:center;gap:6px;background:${pal.primary}22;border:1px solid ${pal.primary}44;color:${pal.accent};padding:6px 14px;border-radius:99px;font-size:12px;font-weight:700;margin-bottom:20px;">
        ✅ ${tmpl.badge}
      </div>
      <h1 style="font-family:'${pal.fontHead}',serif;font-size:clamp(26px,3.5vw,44px);font-weight:700;color:white;line-height:1.2;margin-bottom:16px;">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.65);font-size:15px;line-height:1.8;margin-bottom:28px;">${tmpl.sub}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:32px;">
        ${['Bergaransi','Tepat Waktu','Harga Transparan','Teknisi Bersertifikat'].map(t=>`<span style="background:${pal.primary}22;border:1px solid ${pal.primary}44;color:${pal.accent};padding:5px 12px;border-radius:99px;font-size:12px;font-weight:600;">✓ ${t}</span>`).join('')}
      </div>
      <a href="${wa}" style="display:inline-flex;align-items:center;gap:8px;background:${pal.btn};color:white;padding:14px 30px;border-radius:10px;font-size:15px;font-weight:700;">💬 Minta Penawaran Gratis</a>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      ${tmpl.stats.map(s=>`<div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:14px;padding:20px;text-align:center;">
        <div style="font-size:28px;font-weight:800;color:${pal.accent};">${s.num}</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:4px;">${s.label}</div>
      </div>`).join('')}
      <div style="background:${pal.primary}22;border:1px solid ${pal.primary}44;border-radius:14px;padding:20px;text-align:center;grid-column:span 1;">
        <div style="font-size:28px;font-weight:800;color:${pal.accent};">★ 4.9</div>
        <div style="font-size:12px;color:rgba(255,255,255,0.55);margin-top:4px;">Rating Pelanggan</div>
      </div>
    </div>
  </section>`;

  // Layanan cards
  if (fitur.includes('menu')) {
    html += `<section style="padding:56px 32px;background:${pal.bg};">
      <div style="text-align:center;margin-bottom:36px;">
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:28px;color:${pal.text};margin-bottom:8px;">Layanan Kami</h2>
        <p style="color:${pal.muted};font-size:14px;">${tmpl.tagline}</p>
      </div>
      ${tmpl.categories.map(cat => {
        const items = tmpl.menuItems.filter(i=>i.cat===cat);
        if(!items.length) return '';
        const catIcons = {'AC & Elektronik':'❄️','Rumah & Bangunan':'🏠','Kendaraan':'🚗'};
        return `<div style="margin-bottom:32px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <span style="font-size:20px;">${catIcons[cat]||'🔧'}</span>
            <h3 style="font-size:16px;font-weight:700;color:${pal.text};">${cat}</h3>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;">
            ${items.map(item=>`
              <div style="background:white;border:1px solid ${pal.border};border-left:4px solid ${pal.primary};border-radius:0 10px 10px 0;padding:16px 20px;display:flex;justify-content:space-between;align-items:center;transition:box-shadow 0.2s;" onmouseover="this.style.boxShadow='0 4px 20px rgba(0,0,0,0.08)'" onmouseout="this.style.boxShadow='none'">
                <div>
                  <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <span style="font-weight:700;font-size:14px;color:${pal.text};">${item.name}</span>
                    ${item.badge?`<span style="font-size:10px;background:${pal.tagBg};color:${pal.tag};padding:2px 8px;border-radius:99px;font-weight:700;">${item.badge}</span>`:''}
                  </div>
                  <div style="font-size:12px;color:${pal.muted};">${item.desc}</div>
                </div>
                <div style="font-size:15px;font-weight:800;color:${pal.primary};white-space:nowrap;margin-left:16px;">${item.price}</div>
              </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  if (fitur.includes('galeri')) {
    html += `<section style="padding:48px 32px;background:white;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:24px;text-align:center;margin-bottom:24px;color:${pal.text};">Hasil Pekerjaan</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:640px;margin:0 auto;">
        ${['🔧','❄️','💡','🏠','🚗','🪛'].map((e,i)=>`<div style="background:${pal.card};border:1px solid ${pal.border};height:130px;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;">
          <span style="font-size:32px;">${e}</span>
          <span style="font-size:11px;color:${pal.muted};font-weight:600;">${['Servis AC','Elektronik','Listrik','Renovasi','Kendaraan','Tools'][i]}</span>
        </div>`).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section style="padding:56px 32px;background:${pal.primary};display:grid;grid-template-columns:1fr auto;align-items:center;gap:24px;flex-wrap:wrap;">
      <div>
        <h2 style="font-family:'${pal.fontHead}',serif;font-size:26px;color:white;margin-bottom:8px;">Butuh Bantuan Segera?</h2>
        <p style="color:rgba(255,255,255,0.75);font-size:14px;">Kami siap melayani 24/7. Respon cepat, hasil memuaskan.</p>
      </div>
      <a href="${wa}" style="display:inline-flex;align-items:center;gap:10px;background:white;color:${pal.primary};padding:14px 28px;border-radius:10px;font-size:15px;font-weight:800;white-space:nowrap;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="${pal.primary}"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp Sekarang
      </a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}

// ─────────────────────────────────────────────
function buildToko(nama, pal, tmpl, wa, fitur) {
  let html = '';
  const fontImport = `@import url('https://fonts.googleapis.com/css2?family=${tmpl.font}&display=swap');`;

  const baseStyle = `
    <style>
      ${fontImport}
      * { margin:0; padding:0; box-sizing:border-box; }
      body { font-family:'${tmpl.fontBody}',sans-serif; background:${pal.bg}; color:${pal.text}; }
      a { text-decoration:none; }
    </style>`;

  if (fitur.includes('promo')) {
    html += `<div style="background:linear-gradient(90deg,${pal.primary},${pal.accent},${pal.primary});background-size:200%;color:white;text-align:center;padding:10px;font-size:13px;font-weight:700;">
      ⚡ FLASH SALE sampai tengah malam! Diskon 25% untuk Paket Sembako — stok terbatas!
    </div>`;
  }

  // Nav
  html += `<nav style="display:flex;justify-content:space-between;align-items:center;padding:14px 28px;background:${pal.nav};position:sticky;top:0;z-index:10;">
    <span style="font-family:'${pal.fontHead}',serif;color:white;font-size:20px;font-weight:800;">🛒 ${nama}</span>
    <div style="display:flex;align-items:center;gap:8px;background:rgba(255,255,255,0.1);padding:6px 14px;border-radius:99px;">
      <span style="font-size:14px;">🔍</span>
      <span style="color:rgba(255,255,255,0.5);font-size:13px;">Cari produk...</span>
    </div>
    <a href="${wa}" style="display:flex;align-items:center;gap:6px;background:#25D366;color:white;padding:8px 16px;border-radius:99px;font-size:13px;font-weight:700;">💬 Order WA</a>
  </nav>`;

  // Hero — promo style
  html += `<section style="background:linear-gradient(135deg,${pal.nav},${pal.primary}44);padding:48px 32px;display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:center;">
    <div>
      <div style="display:inline-block;background:${pal.accent}22;border:1px solid ${pal.accent}44;color:${pal.accent};padding:5px 14px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:1px;margin-bottom:16px;">🏪 ${tmpl.badge}</div>
      <h1 style="font-family:'${pal.fontHead}',serif;font-size:clamp(24px,3.5vw,42px);font-weight:800;color:white;line-height:1.2;margin-bottom:14px;">${tmpl.headline}</h1>
      <p style="color:rgba(255,255,255,0.7);font-size:14px;line-height:1.8;margin-bottom:24px;">${tmpl.sub}</p>
      <a href="${wa}" style="display:inline-flex;align-items:center;gap:8px;background:${pal.btn};color:white;padding:12px 28px;border-radius:10px;font-size:15px;font-weight:700;">Belanja Sekarang →</a>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
      ${tmpl.stats.map(s=>`<div style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px;text-align:center;">
        <div style="font-size:22px;font-weight:800;color:white;">${s.num}</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.55);margin-top:2px;">${s.label}</div>
      </div>`).join('')}
      <div style="background:${pal.accent}22;border:1px solid ${pal.accent}44;border-radius:12px;padding:16px;text-align:center;">
        <div style="font-size:22px;font-weight:800;color:${pal.accent};">★ 4.8</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.55);margin-top:2px;">Rating Toko</div>
      </div>
    </div>
  </section>`;

  // Produk grid
  if (fitur.includes('menu')) {
    html += `<section style="padding:48px 28px;background:${pal.bg};">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:24px;color:${pal.text};margin-bottom:24px;">Produk Pilihan</h2>
      ${tmpl.categories.map(cat=>{
        const items = tmpl.menuItems.filter(i=>i.cat===cat);
        if(!items.length) return '';
        return `<div style="margin-bottom:32px;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;">
            <div style="width:4px;height:18px;background:${pal.primary};border-radius:99px;"></div>
            <h3 style="font-size:14px;font-weight:700;color:${pal.text};">${cat}</h3>
          </div>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:12px;">
            ${items.map(item=>`
              <div style="background:white;border:1px solid ${pal.border};border-radius:12px;overflow:hidden;transition:transform 0.2s,box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 24px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
                <div style="background:linear-gradient(135deg,${pal.card},${pal.primary}18);height:110px;display:flex;align-items:center;justify-content:center;font-size:36px;position:relative;">
                  ${'🛒🌾🧴🍚🛍️🥤🧼🧹'[tmpl.menuItems.indexOf(item)%8]}
                  ${item.badge?`<span style="position:absolute;top:8px;right:8px;background:${pal.primary};color:white;font-size:9px;padding:2px 7px;border-radius:99px;font-weight:700;">${item.badge}</span>`:''}
                </div>
                <div style="padding:12px;">
                  <div style="font-size:13px;font-weight:700;color:${pal.text};margin-bottom:3px;">${item.name}</div>
                  <div style="font-size:11px;color:${pal.muted};margin-bottom:8px;line-height:1.4;">${item.desc}</div>
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:15px;font-weight:800;color:${pal.primary};">${item.price}</span>
                    <a href="${wa}" style="background:${pal.primary};color:white;font-size:11px;padding:4px 10px;border-radius:6px;font-weight:700;">+ Beli</a>
                  </div>
                </div>
              </div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </section>`;
  }

  if (fitur.includes('galeri')) {
    html += `<section style="padding:40px 28px;background:white;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:22px;text-align:center;margin-bottom:20px;color:${pal.text};">Suasana Toko</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:600px;margin:0 auto;">
        ${['🏪','🛒','📦','🥬','🧺','📊'].map((e,i)=>`<div style="background:${pal.card};height:110px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:32px;">${e}</div>`).join('')}
      </div>
    </section>`;
  }

  if (fitur.includes('review')) html += buildTestimoni(tmpl, pal);
  if (fitur.includes('lokasi')) html += buildLokasi(nama, pal);

  if (fitur.includes('wa')) {
    html += `<section style="padding:40px 28px;background:${pal.primary};text-align:center;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:24px;color:white;margin-bottom:8px;">Pesan Langsung via WhatsApp</h2>
      <p style="color:rgba(255,255,255,0.75);font-size:14px;margin-bottom:20px;">Ketik nama produk + jumlah, kami siap kirim!</p>
      <a href="${wa}" style="display:inline-flex;align-items:center;gap:10px;background:#25D366;color:white;padding:12px 28px;border-radius:99px;font-size:15px;font-weight:700;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Chat & Order Sekarang
      </a>
    </section>`;
  }

  html += buildFooter(nama, tmpl, pal);
  return baseStyle + html;
}

// ── SHARED COMPONENTS ──
function buildTestimoni(tmpl, pal) {
  return `<section style="padding:48px 32px;background:white;">
    <div style="text-align:center;margin-bottom:32px;">
      <h2 style="font-family:'${pal.fontHead}',serif;font-size:26px;color:${pal.text};margin-bottom:6px;">Kata Pelanggan Kami</h2>
      <p style="color:${pal.muted};font-size:13px;">Kepuasan pelanggan adalah prioritas utama kami</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px;max-width:800px;margin:0 auto;">
      ${tmpl.testimonials.map(r=>`
        <div style="background:${pal.card};border:1px solid ${pal.border};border-radius:16px;padding:22px;">
          <div style="color:#f59e0b;font-size:14px;margin-bottom:10px;">${'★'.repeat(r.stars)}${'☆'.repeat(5-r.stars)}</div>
          <p style="font-size:13px;color:${pal.text};line-height:1.7;margin-bottom:14px;font-style:italic;">"${r.text}"</p>
          <div style="display:flex;align-items:center;gap:10px;">
            <div style="width:34px;height:34px;border-radius:50%;background:${pal.primary}22;border:1px solid ${pal.border};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:${pal.primary};">${r.name[0]}</div>
            <div>
              <div style="font-size:13px;font-weight:700;color:${pal.text};">${r.name}</div>
              <div style="font-size:11px;color:${pal.muted};">${r.role}</div>
            </div>
          </div>
        </div>`).join('')}
    </div>
  </section>`;
}

function buildLokasi(nama, pal) {
  return `<section style="padding:40px 28px;background:${pal.bg};">
    <h2 style="font-family:'${pal.fontHead}',serif;font-size:24px;text-align:center;color:${pal.text};margin-bottom:24px;">Lokasi Kami</h2>
    <div style="max-width:520px;margin:0 auto;background:white;border:1px solid ${pal.border};border-radius:16px;overflow:hidden;">
      <div style="background:linear-gradient(135deg,${pal.primary}22,${pal.accent}22);height:120px;display:flex;align-items:center;justify-content:center;font-size:48px;">📍</div>
      <div style="padding:20px;">
        <div style="font-weight:700;font-size:16px;color:${pal.text};margin-bottom:6px;">${nama}</div>
        <div style="color:${pal.muted};font-size:13px;line-height:1.7;margin-bottom:14px;">Jl. Contoh Alamat No. 123, RT 01/RW 02<br>Kota Anda, Provinsi 12345</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <span style="display:inline-flex;align-items:center;gap:4px;background:${pal.tagBg};color:${pal.tag};border:1px solid ${pal.border};padding:6px 12px;border-radius:99px;font-size:12px;font-weight:600;">🕐 Buka 07.00–21.00</span>
          <span style="display:inline-flex;align-items:center;gap:4px;background:${pal.tagBg};color:${pal.tag};border:1px solid ${pal.border};padding:6px 12px;border-radius:99px;font-size:12px;font-weight:600;">📅 Senin–Minggu</span>
        </div>
      </div>
    </div>
  </section>`;
}

function buildFooter(nama, tmpl, pal) {
  return `<footer style="background:${pal.nav||pal.text};color:rgba(255,255,255,0.6);text-align:center;padding:28px;font-size:13px;">
    <div style="font-weight:700;font-size:16px;color:white;margin-bottom:4px;">${tmpl.emoji} ${nama}</div>
    <div>© 2025 ${nama} · Dibuat dengan <strong style="color:rgba(255,255,255,0.9);">WebCraft AI</strong></div>
  </footer>`;
}

// ── GENERATE MAIN ──
function generate() {
  const nama  = document.getElementById('f-nama').value || 'Bisnis Saya';
  const jenis = document.getElementById('f-jenis').value;
  const warna = document.getElementById('f-warna').value;
  const waNum = document.getElementById('f-wa').value || '08123456789';
  const fitur = selectedFeatures;
  const pal   = palettes[warna];
  const tmpl  = templates[jenis];

  // Merge palette font data into template for use in builders
  tmpl.fontHead = pal.fontHead;
  tmpl.fontBody = pal.fontBody;
  tmpl.font     = pal.font;

  const wa = `https://wa.me/62${waNum.replace(/^0/,'')}?text=Halo,%20saya%20ingin%20info%20lebih%20lanjut`;

  // ── AI LOG ──
  const logLines = [
    `<span class="lg-dim">────────────────────────────────</span>`,
    `<span class="lg-info">[Orchestrator] Input diterima ✓</span>`,
    `<span class="lg-dim">  nama   : </span><span class="lg-val">"${nama}"</span>`,
    `<span class="lg-dim">  jenis  : </span><span class="lg-val">"${jenis}"</span>`,
    `<span class="lg-dim">  warna  : </span><span class="lg-val">"${warna}"</span>`,
    `<span class="lg-dim">  fitur  : </span><span class="lg-val">[${fitur.join(', ')}]</span>`,
    `<span class="lg-dim">────────────────────────────────</span>`,
    `<span class="lg-info">[Rule Engine] Menjalankan rules...</span>`,
    `<span class="lg-ok">✓ Rule 1</span><span class="lg-dim"> jenis="${jenis}" → layout=</span><span class="lg-key">build${jenis.charAt(0).toUpperCase()+jenis.slice(1)}()</span>`,
    `<span class="lg-ok">✓ Rule 2</span><span class="lg-dim"> warna="${warna}" → fontHead=</span><span class="lg-key">"${pal.fontHead}"</span>`,
    `<span class="lg-ok">✓ Rule 3</span><span class="lg-dim"> warna="${warna}" → primary=</span><span class="lg-key">${pal.primary}</span>`,
    `<span class="lg-ok">✓ Rule 4</span><span class="lg-dim"> fitur=[${fitur.join(',')}] → </span><span class="lg-key">${fitur.length} komponen aktif</span>`,
    `<span class="lg-ok">✓ Rule 5</span><span class="lg-dim"> jenis="${jenis}" → ${tmpl.menuItems.length} items dimuat</span>`,
    `<span class="lg-dim">────────────────────────────────</span>`,
    `<span class="lg-info">[Template Engine] Memuat komponen...</span>`,
    ...fitur.map(f => `<span class="lg-ok">  ✓ ${f}_component dimuat</span>`),
    `<span class="lg-dim">────────────────────────────────</span>`,
    `<span class="lg-info">[HTML Generator] Merender output...</span>`,
    `<span class="lg-ok">✓ Layout unik "${jenis}" terpilih</span>`,
    `<span class="lg-ok">✓ Font: ${pal.fontHead} + ${pal.fontBody}</span>`,
    `<span class="lg-ok">✓ Website berhasil di-generate!</span>`,
    `<span class="lg-dim">  waktu render: ${(Math.random()*200+50).toFixed(0)}ms</span>`,
  ];
  document.getElementById('log-body').innerHTML = logLines.map(l=>`<span class="log-line">${l}</span>`).join('');

  // ── ARCH RULES ──
  const rules = [
    `<span style="color:#7ec8e3">if</span> jenis == <span style="color:#FF9B50">"${jenis}"</span> → layout = <span style="color:#2FFFA0">build${jenis.charAt(0).toUpperCase()+jenis.slice(1)}()</span>`,
    `<span style="color:#7ec8e3">if</span> warna == <span style="color:#FF9B50">"${warna}"</span> → font = <span style="color:#2FFFA0">"${pal.fontHead}"</span>`,
    `<span style="color:#7ec8e3">if</span> warna == <span style="color:#FF9B50">"${warna}"</span> → primary = <span style="color:#2FFFA0">"${pal.primary}"</span>`,
    fitur.includes('menu')   ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"menu"</span>)   → render <span style="color:#a99dff">MenuSection()</span>` : '',
    fitur.includes('wa')     ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"wa"</span>)     → render <span style="color:#a99dff">WAButton()</span>` : '',
    fitur.includes('lokasi') ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"lokasi"</span>)  → render <span style="color:#a99dff">MapSection()</span>` : '',
    fitur.includes('galeri') ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"galeri"</span>)  → render <span style="color:#a99dff">GallerySection()</span>` : '',
    fitur.includes('promo')  ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"promo"</span>)   → render <span style="color:#a99dff">PromoBanner()</span>` : '',
    fitur.includes('review') ? `<span style="color:#7ec8e3">if</span> fitur.includes(<span style="color:#FF9B50">"review"</span>)  → render <span style="color:#a99dff">TestimonialSection()</span>` : '',
  ].filter(Boolean);
  document.getElementById('rule-box').innerHTML = rules.join('<br>');

  // ── BUILD HTML by jenis ──
  let html = '';
  if (jenis === 'kuliner')  html = buildKuliner(nama, pal, tmpl, wa, fitur);
  else if (jenis === 'fashion') html = buildFashion(nama, pal, tmpl, wa, fitur);
  else if (jenis === 'jasa')   html = buildJasa(nama, pal, tmpl, wa, fitur);
  else if (jenis === 'toko')   html = buildToko(nama, pal, tmpl, wa, fitur);

  // Gunakan iframe agar CSS tidak bocor ke halaman utama
  const previewBody = document.getElementById('preview-body');
  previewBody.innerHTML = '';
  const iframe = document.createElement('iframe');
  iframe.style.cssText = 'width:100%;height:100%;border:none;display:block;';
  iframe.srcdoc = `<!DOCTYPE html><html lang="id"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body>${html}</body></html>`;
  previewBody.appendChild(iframe);

  const slug = nama.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
  document.getElementById('browser-url').textContent = 'webcraftai.demo/' + slug;

  switchTab('preview');

  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
  document.getElementById('btn-download').style.display = 'flex';
}

// ── DOWNLOAD ──
function downloadHTML() {
  const nama = document.getElementById('f-nama').value || 'WebCraft-AI-Result';
  const iframe = document.querySelector('#preview-body iframe');
  if (!iframe) return;
  const content = iframe.srcdoc;
  const blob = new Blob([content], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nama.toLowerCase().replace(/\s+/g,'-') + '.html';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  document.body.removeChild(a);
}
