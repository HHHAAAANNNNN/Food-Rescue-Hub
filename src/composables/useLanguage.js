import { ref, computed } from 'vue';

const currentLanguage = ref('en');

export const useLanguage = () => {
  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'id', name: 'Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Melayu', flag: '🇲🇾' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' }
  ];

  const translations = {
    // Navbar
    navbar: {
      aboutUs: {
        en: 'About Us',
        id: 'Tentang Kami',
        ms: 'Tentang Kami',
        th: 'เกี่ยวกับเรา'
      },
      whyMatters: {
        en: 'Why It Matters',
        id: 'Mengapa Penting',
        ms: 'Mengapa Penting',
        th: 'ทำไมถึงสำคัญ'
      },
      dataInsights: {
        en: 'Data Insights',
        id: 'Data & Insights',
        ms: 'Data & Pandangan',
        th: 'ข้อมูลเชิงลึก'
      },
      howItWorks: {
        en: 'How It Works',
        id: 'Cara Kerja',
        ms: 'Cara Kerja',
        th: 'วิธีการทำงาน'
      },
      sdgsImpact: {
        en: 'SDGs Impact',
        id: 'Dampak SDGs',
        ms: 'Kesan SDGs',
        th: 'ผลกระทบ SDGs'
      },
      ourRegions: {
        en: 'Our Regions',
        id: 'Wilayah Kami',
        ms: 'Wilayah Kami',
        th: 'พื้นที่ของเรา'
      },
      signUpCommunity: {
        en: 'Sign Up Community',
        id: 'Bergabung Komunitas',
        ms: 'Sertai Komuniti',
        th: 'เข้าร่วมชุมชน'
      }
    },

    // Profile Section
    profile: {
      title: {
        en: 'NourishHub – Sustainable Food Ecosystem',
        id: 'NourishHub – Ekosistem Pangan Berkelanjutan',
        ms: 'NourishHub – Ekosistem Makanan Mampan',
        th: 'NourishHub – ระบบนิเวศอาหารที่ยั่งยืน'
      },
      description: {
        en: 'NourishHub is a community platform that connects food donors with beneficiary communities across various regions. Each region has its own independent dashboard to visualize their sustainable food contributions.',
        id: 'NourishHub adalah platform komunitas yang menghubungkan donatur bahan pangan dengan masyarakat penerima manfaat di berbagai daerah. Setiap daerah memiliki dashboard mandiri untuk memvisualisasikan kontribusi pangan berkelanjutan mereka.',
        ms: 'NourishHub adalah platform komuniti yang menghubungkan penderma makanan dengan komuniti penerima manfaat di pelbagai wilayah. Setiap wilayah mempunyai papan pemuka bebas untuk memvisualisasikan sumbangan makanan mampan mereka.',
        th: 'NourishHub เป็นแพลตฟอร์มชุมชนที่เชื่อมโยงผู้บริจาคอาหารกับชุมชนผู้รับผลประโยชน์ในภูมิภาคต่างๆ แต่ละภูมิภาคมีแดชบอร์ดอิสระเพื่อแสดงภาพการมีส่วนร่วมด้านอาหารที่ยั่งยืน'
      },
      vision: {
        en: 'Building a zero-waste food cycle based on community and environmental awareness.',
        id: 'Membangun siklus pangan tanpa limbah (zero-waste food cycle) berbasis komunitas dan kesadaran lingkungan.',
        ms: 'Membina kitaran makanan tanpa sisa (zero-waste food cycle) berdasarkan kesedaran komuniti dan alam sekitar.',
        th: 'สร้างวัฏจักรอาหารปลอดขยะ (zero-waste food cycle) โดยอาศัยชุมชนและการตระหนักรู้ด้านสิ่งแวดล้อม'
      }
    },

    // Hero Main Section (HeroSection.vue component)
    heroMain: {
      title: {
        en: 'Save Good Food From Going To Waste',
        id: 'Selamatkan Makanan Baik Dari Terbuang Sia-Sia',
        ms: 'Selamatkan Makanan Baik Daripada Pembaziran',
        th: 'ช่วยเหลืออาหารดีๆ ไม่ให้กลายเป็นขยะ'
      },
      subtitle: {
        en: 'Join the movement to rescue surplus food and build sustainable communities across Indonesia',
        id: 'Bergabunglah dengan gerakan untuk menyelamatkan makanan berlebih dan membangun komunitas berkelanjutan di seluruh Indonesia',
        ms: 'Sertailah pergerakan untuk menyelamatkan makanan berlebihan dan membina komuniti mampan di seluruh Indonesia',
        th: 'เข้าร่วมการเคลื่อนไหวเพื่อช่วยเหลืออาหารส่วนเกินและสร้างชุมชนที่ยั่งยืนทั่วอินโดนีเซีย'
      },
      button: {
        en: 'Sign Up Your Community',
        id: 'Daftarkan Komunitas Anda',
        ms: 'Daftar Komuniti Anda',
        th: 'ลงทะเบียนชุมชนของคุณ'
      },
      familiesHelped: {
        en: 'Families Helped',
        id: 'Keluarga Terbantu',
        ms: 'Keluarga Dibantu',
        th: 'ครอบครัวที่ได้รับการช่วยเหลือ'
      },
      foodRescued: {
        en: 'Food Rescued',
        id: 'Makanan Diselamatkan',
        ms: 'Makanan Diselamatkan',
        th: 'อาหารที่ช่วยเหลือ'
      },
      activeRegions: {
        en: 'Active Regions',
        id: 'Wilayah Aktif',
        ms: 'Wilayah Aktif',
        th: 'พื้นที่ที่ใช้งาน'
      }
    },

    // Hero Section
    hero: {
      badge1: {
        en: 'Social Enterprise Platform',
        id: 'Platform Usaha Sosial',
        ms: 'Platform Perusahaan Sosial',
        th: 'แพลตฟอร์มองค์กรเพื่อสังคม'
      },
      badge2: {
        en: 'Empowering Local Communities',
        id: 'Memberdayakan Komunitas Lokal',
        ms: 'Memperkasa Komuniti Tempatan',
        th: 'เสริมพลังชุมชนท้องถิ่น'
      },
      badge3: {
        en: 'Food Waste Management Program',
        id: 'Program Pengelolaan Limbah Makanan',
        ms: 'Program Pengurusan Sisa Makanan',
        th: 'โปรแกรมจัดการเศษอาหาร'
      },
      badge4: {
        en: 'ASEAN Sustainable Initiative',
        id: 'Inisiatif Berkelanjutan ASEAN',
        ms: 'Inisiatif Mampan ASEAN',
        th: 'ความริเริ่มอย่างยั่งยืนอาเซียน'
      },
      floatingCard1: {
        en: 'Zero Hunger',
        id: 'Tanpa Kelaparan',
        ms: 'Tiada Kelaparan',
        th: 'ความหิวโหยเป็นศูนย์'
      },
      floatingCard2: {
        en: 'Reduce Waste',
        id: 'Kurangi Limbah',
        ms: 'Kurangkan Sisa',
        th: 'ลดของเสีย'
      },
      floatingCard3: {
        en: 'Green Cities',
        id: 'Kota Hijau',
        ms: 'Bandar Hijau',
        th: 'เมืองสีเขียว'
      },
      floatingCard4: {
        en: 'Fair Work',
        id: 'Kerja Layak',
        ms: 'Kerja Adil',
        th: 'งานที่ยุติธรรม'
      },
      floatingCard5: {
        en: 'Partnerships',
        id: 'Kemitraan',
        ms: 'Perkongsian',
        th: 'ความร่วมมือ'
      }
    },

    // Why It Matters Section
    whyMatters: {
      badge: {
        en: 'The Crisis We Face',
        id: 'Krisis yang Kita Hadapi',
        ms: 'Krisis yang Kita Hadapi',
        th: 'วิกฤตที่เราเผชิญ'
      },
      title: {
        en: 'Why Your Contribution Matters?',
        id: 'Mengapa Kontribusi Anda Sangat Penting?',
        ms: 'Mengapa Sumbangan Anda Sangat Penting?',
        th: 'ทำไมการมีส่วนร่วมของคุณถึงสำคัญ?'
      },
      subtitle1: {
        en: 'Despite abundant food production, millions still go hungry.',
        id: 'Di tengah melimpahnya produksi pangan, jutaan orang masih kelaparan.',
        ms: 'Di tengah pengeluaran makanan yang melimpah, berjuta-juta orang masih kelaparan.',
        th: 'แม้จะมีการผลิตอาหารมากมาย แต่ผู้คนหลายล้านยังหิวโหย'
      },
      subtitle2: {
        en: 'This is not a shortage problem—it\'s a distribution issue.',
        id: 'Ini bukan masalah kekurangan—ini masalah distribusi yang tidak merata.',
        ms: 'Ini bukan masalah kekurangan—ini masalah pengedaran yang tidak sekata.',
        th: 'นี่ไม่ใช่ปัญหาการขาดแคลน แต่เป็นปัญหาการกระจาย'
      },
      hook: {
        en: '💡 Let\'s look at shocking facts behind the food crisis in Indonesia and ASEAN:',
        id: '💡 Mari kita lihat fakta-fakta mengejutkan di balik krisis pangan Indonesia dan ASEAN:',
        ms: '💡 Mari kita lihat fakta-fakta mengejutkan di sebalik krisis makanan Indonesia dan ASEAN:',
        th: '💡 มาดูข้อเท็จจริงที่น่าตกใจเกี่ยวกับวิกฤตอาหารในอินโดนีเซียและอาเซียน:'
      },
      stat1Label: {
        en: 'Food waste per year in Indonesia',
        id: 'Limbah makanan per tahun di Indonesia',
        ms: 'Sisa makanan setahun di Indonesia',
        th: 'เศษอาหารต่อปีในอินโดนีเซีย'
      },
      stat2Label: {
        en: 'Annual economic loss due to food waste',
        id: 'Kerugian ekonomi tahunan akibat food waste',
        ms: 'Kerugian ekonomi tahunan akibat pembaziran makanan',
        th: 'การสูญเสียทางเศรษฐกิจต่อปีจากเศษอาหาร'
      },
      stat3Label: {
        en: 'People lack access to adequate food in ASEAN',
        id: 'Belum akses makanan layak di ASEAN',
        ms: 'Belum ada akses kepada makanan yang mencukupi di ASEAN',
        th: 'คนขาดการเข้าถึงอาหารที่เพียงพอในอาเซียน'
      },
      stat3Value: {
        en: 'Millions of People',
        id: 'Jutaan Orang',
        ms: 'Berjuta-juta Orang',
        th: 'หลายล้านคน'
      }
    },

    // Chart Section
    chart: {
      badge: {
        en: 'Regional Data Insights',
        id: 'Data Regional',
        ms: 'Pandangan Data Serantau',
        th: 'ข้อมูลเชิงลึกในภูมิภาค'
      },
      title: {
        en: 'Who Contributes Most to Food Waste in ASEAN?',
        id: 'Siapa Penyumbang Terbesar Limbah Makanan di ASEAN?',
        ms: 'Siapa Penyumbang Terbesar Sisa Makanan di ASEAN?',
        th: 'ใครเป็นผู้สร้างเศษอาหารมากที่สุดในอาเซียน?'
      },
      description1: {
        en: 'Among 10 ASEAN countries, food waste distribution is highly uneven.',
        id: 'Dari 10 negara ASEAN, distribusi food waste sangat tidak merata.',
        ms: 'Di antara 10 negara ASEAN, pengedaran sisa makanan sangat tidak sekata.',
        th: 'ในบรรดาประเทศอาเซียน 10 ประเทศ การกระจายเศษอาหารไม่สม่ำเสมอมาก'
      },
      description2: {
        en: '<strong>One country contributes almost half of the total regional food waste</strong>.',
        id: '<strong>Satu negara berkontribusi hampir setengah dari total limbah makanan regional</strong>.',
        ms: '<strong>Satu negara menyumbang hampir separuh daripada jumlah sisa makanan serantau</strong>.',
        th: '<strong>ประเทศหนึ่งมีส่วนสร้างเศษอาหารเกือบครึ่งหนึ่งของภูมิภาค</strong>'
      },
      description3: {
        en: 'The interactive visualization below reveals the actual proportion from each country.',
        id: 'Visualisasi interaktif di bawah mengungkap proporsi sebenarnya dari setiap negara.',
        ms: 'Visualisasi interaktif di bawah mendedahkan perkadaran sebenar dari setiap negara.',
        th: 'การแสดงภาพแบบโต้ตอบด้านล่างเผยให้เห็นสัดส่วนที่แท้จริงจากแต่ละประเทศ'
      },
      chartTitle: {
        en: 'Ranking by Total Food Waste',
        id: 'Peringkat berdasarkan Total Limbah Makanan',
        ms: 'Kedudukan mengikut Jumlah Sisa Makanan',
        th: 'การจัดอันดับตามจำนวนเศษอาหารทั้งหมด'
      },
      chartSubtitle: {
        en: 'Click on a country in the chart to see detailed information',
        id: 'Klik negara di grafik untuk melihat informasi detail',
        ms: 'Klik negara dalam carta untuk melihat maklumat terperinci',
        th: 'คลิกที่ประเทศในแผนภูมิเพื่อดูข้อมูลโดยละเอียด'
      },
      generates: {
        en: 'generates',
        id: 'menghasilkan',
        ms: 'menghasilkan',
        th: 'ผลิต'
      },
      millionTons: {
        en: 'million tons',
        id: 'juta ton',
        ms: 'juta tan',
        th: 'ล้านตัน'
      },
      ofASEAN: {
        en: 'of total ASEAN',
        id: 'dari total ASEAN',
        ms: 'daripada jumlah ASEAN',
        th: 'จากอาเซียนทั้งหมด'
      },
      with: {
        en: 'with',
        id: 'dengan',
        ms: 'dengan',
        th: 'โดยมี'
      },
      perCapita: {
        en: 'kg/capita per year',
        id: 'kg/kapita per tahun',
        ms: 'kg/kapita setahun',
        th: 'กก./คนต่อปี'
      }
    },

    // How It Works Section
    howItWorks: {
      badge: {
        en: 'Our Solution',
        id: 'Solusi Kami',
        ms: 'Penyelesaian Kami',
        th: 'แนวทางของเรา'
      },
      title: {
        en: 'How Does NourishHub Work?',
        id: 'Bagaimana NourishHub Bekerja?',
        ms: 'Bagaimana NourishHub Berfungsi?',
        th: 'NourishHub ทำงานอย่างไร?'
      },
      subtitle: {
        en: 'Sustainable food ecosystem with 4 integrated stages',
        id: 'Sistem ekosistem pangan berkelanjutan dengan 4 tahapan terintegrasi',
        ms: 'Sistem ekosistem makanan mampan dengan 4 peringkat bersepadu',
        th: 'ระบบนิเวศอาหารที่ยั่งยืนด้วย 4 ขั้นตอนที่บูรณาการ'
      },
      step1Title: {
        en: 'Collection',
        id: 'Pengumpulan',
        ms: 'Pengumpulan',
        th: 'การเก็บรวบรวม'
      },
      step1Desc: {
        en: 'We collect surplus food from restaurants, markets, and households at the RT/RW level',
        id: 'Kami mengumpulkan surplus makanan dari restoran, pasar, dan rumah tangga di tingkat RT/RW',
        ms: 'Kami mengumpul lebihan makanan dari restoran, pasar, dan isi rumah di peringkat komuniti',
        th: 'เรารวบรวมอาหารส่วนเกินจากร้านอาหาร ตลาด และครัวเรือนในระดับชุมชน'
      },
      step2Title: {
        en: 'Sorting',
        id: 'Pemilahan',
        ms: 'Pemilahan',
        th: 'การคัดแยก'
      },
      step2Desc: {
        en: 'Community teams sort food: edible for distribution, organic for composting',
        id: 'Tim komunitas memilah makanan: layak konsumsi untuk distribusi, organik untuk kompos',
        ms: 'Pasukan komuniti memilah makanan: boleh dimakan untuk pengedaran, organik untuk kompos',
        th: 'ทีมชุมชนคัดแยกอาหาร: ทานได้สำหรับแจกจ่าย อินทรีย์สำหรับทำปุ๋ย'
      },
      step3Title: {
        en: 'Processing',
        id: 'Pengolahan',
        ms: 'Pemprosesan',
        th: 'การแปรรูป'
      },
      step3Desc: {
        en: 'Good food is packaged, inedible waste is converted into compost for urban farming',
        id: 'Makanan baik dikemas, limbah tidak layak dikonversi menjadi kompos untuk urban farming',
        ms: 'Makanan baik dibungkus, sisa tidak boleh makan ditukar menjadi kompos untuk pertanian bandar',
        th: 'อาหารดีบรรจุ ของเสียที่ไม่ทานได้เปลี่ยนเป็นปุ๋ยสำหรับการเกษตรเมือง'
      },
      step4Title: {
        en: 'Distribution',
        id: 'Distribusi',
        ms: 'Pengedaran',
        th: 'การจัดจำหน่าย'
      },
      step4Desc: {
        en: 'Distribution to underprivileged families via RT/RW data or to PIK Berkebut and other communities',
        id: 'Distribusi ke keluarga pra-sejahtera via Data RT/RW maupun ke PIhak Berkebut lainnya',
        ms: 'Pengedaran kepada keluarga kurang berkemampuan melalui data komuniti atau ke Pihak Berkebut lain',
        th: 'แจกจ่ายให้ครอบครัวด้อยโอกาสผ่านข้อมูลชุมชนหรือองค์กรอื่นๆ'
      },
      rtRw: {
        en: 'RT/RW',
        id: 'RT/RW',
        ms: 'Komuniti',
        th: 'ชุมชน'
      },
      communities: {
        en: 'Communities',
        id: 'Komunitas',
        ms: 'Komuniti',
        th: 'ชุมชน'
      }
    },

    // SDGs Section
    sdgs: {
      badge: {
        en: 'Global Impact Alignment',
        id: 'Keselarasan Dampak Global',
        ms: 'Penjajaran Kesan Global',
        th: 'การจัดตำแหน่งผลกระทบระดับโลก'
      },
      title: {
        en: 'Sustainable Development Goals',
        id: 'Tujuan Pembangunan Berkelanjutan',
        ms: 'Matlamat Pembangunan Mampan',
        th: 'เป้าหมายการพัฒนาที่ยั่งยืน'
      },
      description: {
        en: 'NourishHub contributes directly to achieving the following SDGs:',
        id: 'NourishHub berkontribusi langsung terhadap pencapaian SDGs berikut:',
        ms: 'NourishHub menyumbang secara langsung kepada pencapaian SDG berikut:',
        th: 'NourishHub มีส่วนร่วมโดยตรงในการบรรลุ SDGs ต่อไปนี้:'
      },
      hook: {
        en: '🌍 Every local action creates global impact. Here\'s our contribution to a better world:',
        id: '🌍 Setiap aksi lokal menciptakan dampak global. Inilah kontribusi kami untuk dunia yang lebih baik:',
        ms: '🌍 Setiap tindakan tempatan mencipta kesan global. Inilah sumbangan kami untuk dunia yang lebih baik:',
        th: '🌍 ทุกการกระทำในท้องถิ่นสร้างผลกระทบระดับโลก นี่คือการมีส่วนร่วมของเราเพื่อโลกที่ดีขึ้น:'
      }
    },

    // Regions Section
    regions: {
      badge: {
        en: 'Community Hubs',
        id: 'Hub Komunitas',
        ms: 'Hab Komuniti',
        th: 'ศูนย์ชุมชน'
      },
      title: {
        en: 'Community Contributor Areas',
        id: 'Daerah Kontributor Komunitas',
        ms: 'Kawasan Penyumbang Komuniti',
        th: 'พื้นที่ผู้มีส่วนร่วมในชุมชน'
      },
      description: {
        en: 'Explore various regions actively contributing to the sustainable food ecosystem',
        id: 'Jelajahi berbagai wilayah yang aktif berkontribusi dalam ekosistem pangan berkelanjutan',
        ms: 'Terokai pelbagai wilayah yang aktif menyumbang dalam ekosistem makanan mampan',
        th: 'สำรวจพื้นที่ต่างๆ ที่มีส่วนร่วมในระบบนิเวศอาหารที่ยั่งยืน'
      },
      hook: {
        en: '📍 From neighborhoods to big cities—this movement grows everywhere. See communities that have joined:',
        id: '📍 Dari RT/RW hingga kota besar—gerakan ini tumbuh di mana-mana. Lihat komunitas yang sudah bergabung:',
        ms: '📍 Dari kawasan kejiranan hingga bandar besar—pergerakan ini berkembang di mana-mana. Lihat komuniti yang telah menyertai:',
        th: '📍 จากย่านเล็กๆ ถึงเมืองใหญ่—การเคลื่อนไหวนี้เติบโตทุกที่ ดูชุมชนที่เข้าร่วม:'
      },
      activeRegions: {
        en: 'Active Regions',
        id: 'Wilayah Aktif',
        ms: 'Wilayah Aktif',
        th: 'พื้นที่ที่ใช้งาน'
      }
    },

    // CTA Section
    cta: {
      title: {
        en: 'Every Contribution Creates Real Impact',
        id: 'Setiap Kontribusi Menciptakan Dampak Nyata',
        ms: 'Setiap Sumbangan Mencipta Kesan Sebenar',
        th: 'ทุกการมีส่วนร่วมสร้างผลกระทบที่แท้จริง'
      },
      description: {
        en: 'NourishHub is not just about reducing food waste—we are building a <strong>sustainable food ecosystem</strong> that strengthens the socio-economic resilience of communities at the grassroots level.',
        id: 'NourishHub bukan sekadar mengurangi limbah makanan—kami membangun <strong>ekosistem pangan berkelanjutan</strong> yang memperkuat ketahanan sosial-ekonomi masyarakat di tingkat akar rumput.',
        ms: 'NourishHub bukan sekadar mengurangkan pembaziran makanan—kami membina <strong>ekosistem makanan mampan</strong> yang mengukuhkan daya tahan sosio-ekonomi masyarakat di peringkat akar umbi.',
        th: 'NourishHub ไม่เพียงแค่ลดเศษอาหาร—เรากำลังสร้าง<strong>ระบบนิเวศอาหารที่ยั่งยืน</strong>ที่เสริมสร้างความยืดหยุ่นทางสังคมและเศรษฐกิจของชุมชนในระดับฐานราก'
      },
      button: {
        en: 'Join This Movement',
        id: 'Bergabung dengan Gerakan Ini',
        ms: 'Sertai Pergerakan Ini',
        th: 'เข้าร่วมการเคลื่อนไหวนี้'
      }
    },

    // Loading State
    loading: {
      text: {
        en: 'Loading dashboard data...',
        id: 'Memuat data dashboard...',
        ms: 'Memuatkan data papan pemuka...',
        th: 'กำลังโหลดข้อมูลแดชบอร์ด...'
      }
    },

    // SDG Cards Data
    sdgCards: {
      sdg2: {
        title: {
          en: 'Zero Hunger',
          id: 'Zero Hunger',
          ms: 'Zero Hunger',
          th: 'ขจัดความหิวโหย'
        },
        description: {
          en: 'Addressing food insecurity by distributing nutritious food to pre-prosperous families',
          id: 'Mengatasi kerawanan pangan dengan mendistribusikan makanan bergizi kepada keluarga pra-sejahtera',
          ms: 'Menangani ketidakamanan makanan dengan mengedarkan makanan berkhasiat kepada keluarga pra-sejahtera',
          th: 'แก้ไขปัญหาความไม่มั่นคงทางอาหารโดยแจกจ่ายอาหารที่มีคุณค่าทางโภชนาการแก่ครอบครัวยากจน'
        }
      },
      sdg12: {
        title: {
          en: 'Responsible Consumption',
          id: 'Responsible Consumption',
          ms: 'Responsible Consumption',
          th: 'การบริโภคที่รับผิดชอบ'
        },
        description: {
          en: 'Reducing food waste through the collection and redistribution of surplus food',
          id: 'Mengurangi limbah pangan melalui pengumpulan dan redistribusi makanan berlebih',
          ms: 'Mengurangkan sisa makanan melalui pengumpulan dan pengagihan semula makanan berlebihan',
          th: 'ลดเศษอาหารผ่านการรวบรวมและกระจายอาหารส่วนเกิน'
        }
      },
      sdg11: {
        title: {
          en: 'Sustainable Cities',
          id: 'Sustainable Cities',
          ms: 'Sustainable Cities',
          th: 'เมืองและชุมชนที่ยั่งยืน'
        },
        description: {
          en: 'Building sustainable local communities through physical hubs at the RT/RW level',
          id: 'Membangun komunitas lokal yang berkelanjutan melalui hub fisik di tingkat RT/RW',
          ms: 'Membina komuniti tempatan yang mampan melalui hab fizikal di peringkat RT/RW',
          th: 'สร้างชุมชนท้องถิ่นที่ยั่งยืนผ่านศูนย์กลางทางกายภาพในระดับ RT/RW'
        }
      },
      sdg8: {
        title: {
          en: 'Decent Work & Growth',
          id: 'Decent Work & Growth',
          ms: 'Decent Work & Growth',
          th: 'งานที่มีคุณค่าและการเติบโต'
        },
        description: {
          en: 'Creating economic opportunities through processing surplus into valuable products',
          id: 'Menciptakan peluang ekonomi melalui pengolahan surplus menjadi produk bernilai',
          ms: 'Mencipta peluang ekonomi melalui pemprosesan lebihan menjadi produk bernilai',
          th: 'สร้างโอกาสทางเศรษฐกิจผ่านการแปรรูปอาหารส่วนเกินเป็นผลิตภัณฑ์ที่มีมูลค่า'
        }
      },
      sdg17: {
        title: {
          en: 'Partnerships',
          id: 'Partnerships',
          ms: 'Partnerships',
          th: 'ความร่วมมือเพื่อเป้าหมาย'
        },
        description: {
          en: 'Collaboration with F&B, SMEs, and community leaders for sustainable impact',
          id: 'Kolaborasi dengan F&B, UMKM, dan pemimpin komunitas untuk dampak berkelanjutan',
          ms: 'Kerjasama dengan F&B, PKS, dan pemimpin komuniti untuk kesan mampan',
          th: 'ความร่วมมือกับ F&B, SMEs และผู้นำชุมชนเพื่อผลกระทบที่ยั่งยืน'
        }
      }
    },

    // Region Card
    regionCard: {
      donations: {
        en: 'Donations (kg)',
        id: 'Donasi (kg)',
        ms: 'Sumbangan (kg)',
        th: 'การบริจาค (กก.)'
      },
      receivers: {
        en: 'Receivers',
        id: 'Penerima',
        ms: 'Penerima',
        th: 'ผู้รับ'
      },
      viewDetail: {
        en: 'View Detail →',
        id: 'Lihat Detail →',
        ms: 'Lihat Perincian →',
        th: 'ดูรายละเอียด →'
      }
    }
  };

  const setLanguage = (langCode) => {
    currentLanguage.value = langCode;
    localStorage.setItem('nourishhub_language', langCode);
  };

  const getCurrentLanguage = computed(() => {
    return languages.find(lang => lang.code === currentLanguage.value);
  });

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value[k];
      if (!value) return key;
    }
    
    return value[currentLanguage.value] || value['en'] || key;
  };

  // Initialize language from localStorage
  const initLanguage = () => {
    const savedLang = localStorage.getItem('nourishhub_language');
    if (savedLang && languages.find(lang => lang.code === savedLang)) {
      currentLanguage.value = savedLang;
    }
  };

  return {
    currentLanguage,
    languages,
    setLanguage,
    getCurrentLanguage,
    t,
    initLanguage
  };
};
