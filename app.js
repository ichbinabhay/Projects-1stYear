/**
 * VERDANTIA - Botanical & Nature Sanctuary
 * Core Application Engine & Interactive Systems
 */

function getPlantFallbackSvg(name, category) {
  const bg = category === 'trees' ? '%23132e22' : (category === 'medicinal' ? '%23261a33' : (category === 'rare' ? '%23331b24' : '%230c2419'));
  const accent = category === 'trees' ? '%234ade80' : (category === 'medicinal' ? '%23c084fc' : (category === 'rare' ? '%23f472b6' : '%2334d399'));
  const encodedName = encodeURIComponent(name);
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="${bg}"/><circle cx="400" cy="220" r="140" fill="${accent}" opacity="0.15"/><path d="M400 100 C320 200 300 310 400 370 C500 310 480 200 400 100 Z" fill="${accent}" opacity="0.45"/><path d="M400 120 L400 355 M380 220 L400 190 M420 250 L400 220 M375 280 L400 250" stroke="%23ffffff" stroke-width="4" stroke-linecap="round" opacity="0.6"/><text x="400" y="420" fill="%23ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle">${encodedName}</text></svg>`;
}

// ============================================================================
// 1. BOTANICAL ENCYCLOPEDIA DATABASE
// ============================================================================
const BOTANICAL_DATABASE = [
  {
    id: "monstera-deliciosa",
    name: "Swiss Cheese Plant",
    latinName: "Monstera deliciosa",
    family: "Araceae",
    category: "indoor",
    origin: "Tropical forests of southern Mexico and Central America",
    careLevel: "Beginner",
    light: "Bright, indirect light",
    water: "Every 1-2 weeks",
    humidity: "60% - 80%",
    toxicity: "Toxic to cats & dogs (calcium oxalate)",
    airPurifyScore: "94/100",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80",
    description: "Famed for its dramatic perforated leaves with natural fenestrations, Monstera is an epiphytic vine that climbs rainforest canopy trees.",
    careTips: "Wipe leaves regularly with a damp cloth to remove dust. Provide a moss pole for aerial roots to climb.",
    ecologicalRole: "Provides canopy microhabitats for tree frogs and arboreal insects in neotropical ecosystems.",
    funFact: "In the wild, its fenestrations (holes) allow intense tropical winds to pass through without tearing the leaves.",
    soilPh: "5.5 - 7.0 (Slightly acidic to neutral)"
  },
  {
    id: "sansevieria-trifasciata",
    name: "Snake Plant / Mother-in-Law's Tongue",
    latinName: "Dracaena trifasciata",
    family: "Asparagaceae",
    category: "indoor",
    origin: "Tropical West Africa from Nigeria east to the Congo",
    careLevel: "Very Easy",
    light: "Low to bright direct light",
    water: "Every 2-4 weeks (drought hardy)",
    humidity: "30% - 50%",
    toxicity: "Mildly toxic to pets",
    airPurifyScore: "98/100 (NASA Clean Air Study)",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bf6?auto=format&fit=crop&w=800&q=80",
    description: "An architectural marvel with sword-shaped succulent leaves banded with silver-grey and bordered in vibrant gold.",
    careTips: "Allow soil to completely dry between waterings. Highly resilient against neglect.",
    ecologicalRole: "Thrives in arid savanna scrublands, binding soil and supporting indigenous pollinators during twilight blooms.",
    funFact: "Performs Crassulacean Acid Metabolism (CAM), releasing oxygen at night, making it the premier bedroom plant.",
    soilPh: "6.0 - 7.5 (Well-draining cactus mix)"
  },
  {
    id: "ficus-lyrata",
    name: "Fiddle Leaf Fig",
    latinName: "Ficus lyrata",
    family: "Moraceae",
    category: "indoor",
    origin: "Lowland tropical rainforests of Western Africa",
    careLevel: "Intermediate",
    light: "Abundant bright filtered light",
    water: "Weekly when top 2 inches dry",
    humidity: "50% - 70%",
    toxicity: "Toxic to pets",
    airPurifyScore: "88/100",
    image: "https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=800&q=80",
    description: "Celebrated for its broad, violin-shaped foliage with sculptured veining that commands attention in any interior.",
    careTips: "Sensitive to cold drafts and sudden relocations. Keep away from air conditioning vents.",
    ecologicalRole: "Starts life as an epiphyte in the crowns of other trees before sending roots down to anchor into forest earth.",
    funFact: "In their native African habitat, they grow over 50 feet tall and produce heavy green figs.",
    soilPh: "6.0 - 7.0"
  },
  {
    id: "spathiphyllum-wallisii",
    name: "Peace Lily",
    latinName: "Spathiphyllum wallisii",
    family: "Araceae",
    category: "indoor",
    origin: "Rainforest understories of Colombia and Venezuela",
    careLevel: "Beginner",
    light: "Medium to low shade",
    water: "1-2 times weekly",
    humidity: "60%+",
    toxicity: "Toxic to pets",
    airPurifyScore: "96/100",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=800&q=80",
    description: "Featuring lush emerald foliage accented by immaculate ivory-white spathes resembling peace flags.",
    careTips: "Communicates thirst by gently drooping, recovering briskly after a refreshing watering.",
    ecologicalRole: "Forms dense ground cover along humid riverbanks, preventing soil erosion.",
    funFact: "What appears to be a white petal is actually a modified leaf called a spathe enclosing the spadix flowers.",
    soilPh: "5.8 - 6.5"
  },
  {
    id: "sequoiadendron-giganteum",
    name: "Giant Sequoia",
    latinName: "Sequoiadendron giganteum",
    family: "Cupressaceae",
    category: "trees",
    origin: "Sierra Nevada Mountains, California, USA",
    careLevel: "Natural Keystone",
    light: "Full sun",
    water: "Deep mountain moisture & snowmelt",
    humidity: "Mountain alpine air",
    toxicity: "Non-toxic",
    airPurifyScore: "100/100",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80",
    description: "The most massive individual living organisms on Planet Earth, living over 3,000 years and reaching colossal dimensions.",
    careTips: "Requires serotinous fire regimes to crack open resinous cones and clear forest understory for seeds.",
    ecologicalRole: "Creates unique micro-canopy ecosystems 300 feet in the sky, housing rare flying squirrels and epiphytic lichens.",
    funFact: "Their fibrous, tannin-rich bark can measure up to 3 feet thick, protecting them from wildfires.",
    soilPh: "5.5 - 6.5 (Granitic mountain loam)"
  },
  {
    id: "ginkgo-biloba",
    name: "Ginkgo / Maidenhair Tree",
    latinName: "Ginkgo biloba",
    family: "Ginkgoaceae",
    category: "trees",
    origin: "Zhejiang province, Southeastern China",
    careLevel: "Hardy",
    light: "Full sun to partial shade",
    water: "Moderate, highly drought-tolerant once mature",
    humidity: "Adaptable",
    toxicity: "Fruit pulp is irritating; leaves non-toxic",
    airPurifyScore: "95/100",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80",
    description: "A living fossil unchanged for over 200 million years, predating the dinosaurs with fan-shaped split leaves that turn gold in autumn.",
    careTips: "Incredibly tolerant of urban pollution, compacted soils, and winter frost.",
    ecologicalRole: "The sole surviving representative of the order Ginkgoales; bridges Mesozoic paleobotany with modern ecosystems.",
    funFact: "Six Ginkgo trees survived the atomic blast in Hiroshima in 1945 and continue to bud green leaves today.",
    soilPh: "5.0 - 8.0 (Wide adaptability)"
  },
  {
    id: "adansonia-digitata",
    name: "African Baobab / Tree of Life",
    latinName: "Adansonia digitata",
    family: "Malvaceae",
    category: "trees",
    origin: "Sub-Saharan African Savannas",
    careLevel: "Wild Keystone",
    light: "Intense full equatorial sun",
    water: "Stores up to 32,000 gallons in trunk",
    humidity: "Arid to semi-arid",
    toxicity: "Non-toxic; nutrient-rich fruit",
    airPurifyScore: "97/100",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=800&q=80",
    description: "An iconic silhouette of the African plains with swollen succulent trunks that store water through scorching droughts.",
    careTips: "Thrives in deep sandy soils with long dry dormant periods.",
    ecologicalRole: "Provides shelter, water, and food for elephants, baboons, fruit bats, and thousands of migratory bird species.",
    funFact: "Known as the 'Upside-Down Tree' because its bare winter branches look like roots reaching into the sky.",
    soilPh: "6.0 - 7.5"
  },
  {
    id: "eucalyptus-deglupta",
    name: "Rainbow Eucalyptus",
    latinName: "Eucalyptus deglupta",
    family: "Myrtaceae",
    category: "trees",
    origin: "Philippines, Indonesia, and Papua New Guinea",
    careLevel: "Tropical Wonder",
    light: "Full sun",
    water: "Abundant tropical rainfall",
    humidity: "High tropical (70%+)",
    toxicity: "Foliage contains aromatic oils",
    airPurifyScore: "92/100",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    description: "Famous for its extraordinary bark that peels away annually in vertical strips, revealing brilliant neon streaks of green, blue, purple, and orange.",
    careTips: "Rapidly growing pioneer species needing moist, rich organic soil.",
    ecologicalRole: "The only Eucalyptus native to the Northern Hemisphere, stabilizing wet river bluffs.",
    funFact: "The vibrant colors are caused by varying levels of chlorophyll and tannins as freshly exposed bark oxidizes in air.",
    soilPh: "5.5 - 6.5"
  },
  {
    id: "aloe-barbadensis",
    name: "Aloe Vera",
    latinName: "Aloe barbadensis miller",
    family: "Asphodelaceae",
    category: "medicinal",
    origin: "Arabian Peninsula & arid North Africa",
    careLevel: "Very Easy",
    light: "Bright direct to indirect sunlight",
    water: "Every 2-3 weeks (soak & dry)",
    humidity: "Low (30% - 40%)",
    toxicity: "Gel is safe; outer rind latex toxic to pets",
    airPurifyScore: "90/100",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80",
    description: "Fleshy, serrated succulent leaves brimming with soothing, polysaccharide-rich mucilaginous gel used for over 4,000 years.",
    careTips: "Use a terracotta pot with drainage to avoid soggy roots.",
    ecologicalRole: "Attracts desert pollinators like sunbirds with vivid coral-yellow floral spikes.",
    funFact: "Queen Cleopatra and Nefertiti used fresh aloe gel as part of their daily skincare regimens.",
    soilPh: "7.0 - 8.5"
  },
  {
    id: "lavandula-angustifolia",
    name: "English Lavender",
    latinName: "Lavandula angustifolia",
    family: "Lamiaceae",
    category: "medicinal",
    origin: "Mediterranean scrub and rocky mountain hills",
    careLevel: "Easy",
    light: "6-8 hours of direct sunshine",
    water: "Low to moderate once established",
    humidity: "Low to moderate",
    toxicity: "Non-toxic to humans; mild for pets",
    airPurifyScore: "85/100",
    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=800&q=80",
    description: "Aromatic perennial shrub bearing serene violet flower spikes saturated with calming linalool and linalyl acetate.",
    careTips: "Prune lightly after blooming to maintain compact bushy growth and encourage spring flushes.",
    ecologicalRole: "One of the world's premier nectar sources for native bees, bumblebees, and butterflies.",
    funFact: "Romans used lavender to perfume public thermal baths; its name derives from Latin 'lavare' (to wash).",
    soilPh: "6.5 - 7.5 (Well-drained calcareous soil)"
  },
  {
    id: "dionaea-muscipula",
    name: "Venus Flytrap",
    latinName: "Dionaea muscipula",
    family: "Droseraceae",
    category: "rare",
    origin: "Coastal peat bogs of North and South Carolina, USA",
    careLevel: "Specialized",
    light: "Full sun",
    water: "Distilled or rainwater only (never tap)",
    humidity: "50% - 70%",
    toxicity: "Non-toxic",
    airPurifyScore: "75/100",
    image: "https://images.unsplash.com/photo-1596724803697-a72049d5df63?auto=format&fit=crop&w=800&q=80",
    description: "An extraordinary carnivorous plant featuring hinged bivalve trap leaves lined with ultra-sensitive sensory trigger hairs.",
    careTips: "Never fertilize with regular plant food. Requires nutrient-poor peat and sphagnum moss.",
    ecologicalRole: "Adapted to nutrient-starved, acidic peat bogs by obtaining nitrogen and phosphorus from prey.",
    funFact: "The trap snaps shut in 1/10th of a second only when two trigger hairs are touched within 20 seconds, preventing false alarms from raindrops.",
    soilPh: "3.5 - 5.0 (Acidic sphagnum peat)"
  },
  {
    id: "rafflesia-arnoldii",
    name: "Corpse Lily / Monster Flower",
    latinName: "Rafflesia arnoldii",
    family: "Rafflesiaceae",
    category: "rare",
    origin: "Rainforests of Sumatra and Borneo, Indonesia",
    careLevel: "Wild Parasitic (Cannot be cultivated)",
    light: "Dark rainforest floor",
    water: "Parasitizes host vine sap",
    humidity: "85% - 95%",
    toxicity: "Non-edible",
    airPurifyScore: "50/100",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    description: "Produces the largest individual flower on Earth, measuring up to 3 feet in diameter and weighing over 20 pounds.",
    careTips: "Has no leaves, stems, or roots; lives entirely within the stems of Tetrastigma jungle vines.",
    ecologicalRole: "Emits an aroma of decomposing flesh to lure carrion flies as specialized pollinators.",
    funFact: "The flower takes up to 9 months to develop from a tiny cabbage-like bud, yet stays in bloom for only 5 to 7 days.",
    soilPh: "N/A (Endoparasite)"
  }
];

// ============================================================================
// 2. BIOME ECOSYSTEM DATABASE
// ============================================================================
const BIOMES_DATA = {
  amazon: {
    id: "amazon",
    name: "Amazonian Tropical Rainforest",
    location: "South American Amazon Basin (9 Nations)",
    rainfall: "2,500 - 3,500 mm / yr",
    temperature: "24°C - 31°C (Warm & Humid)",
    carbonStorage: "150–200 Billion Tons CO₂",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
    narrative: "Often revered as the lungs of our planet, the Amazon contains over 16,000 tree species and one in ten known species on Earth. Dense multistoried canopies trap moisture, producing their own flying rivers that nourish continents.",
    hotspots: [
      { x: 30, y: 40, title: "Canopy Layer (30-45m)", text: "Home to 90% of all rainforest organisms including toucans, sloths, and bromeliads that catch natural rainwater cisterns." },
      { x: 65, y: 65, title: "Buttress Roots", text: "Massive flanged roots extending 15 feet high to anchor giant emergent kapok trees in shallow tropical topsoil." },
      { x: 80, y: 35, title: "Epiphytic Orchids", text: "Air plants that absorb moisture and nutrients directly from mist and airborne leaf debris without parasitizing their host." }
    ]
  },
  taiga: {
    id: "taiga",
    name: "Pacific Northwest Temperate Rainforest",
    location: "Cascadia, British Columbia & Alaska",
    rainfall: "2,000 - 4,000 mm / yr",
    temperature: "5°C - 18°C (Cool & Maritime)",
    carbonStorage: "Highest Biomass Density on Earth",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80",
    narrative: "Shrouded in perpetual ocean fog and Pacific storms, this ancient wilderness is dominated by towering Sitka spruces, Douglas firs, and Western red cedars whose trunks are draped in centuries of emerald hanging moss.",
    hotspots: [
      { x: 25, y: 35, title: "Nurse Logs", text: "Fallen century-old giant logs that decompose slowly, providing concentrated moisture and nutrients for newborn saplings." },
      { x: 55, y: 60, title: "Mycorrhizal Web", text: "Underground mycelial fungal filaments connecting trees miles apart, trading sugars for deep soil phosphorus." },
      { x: 75, y: 45, title: "Old-Growth Cedar", text: "Trees reaching over 1,000 years of age, resisting rot through natural aromatic antibacterial thujaplicins." }
    ]
  },
  sonoran: {
    id: "sonoran",
    name: "Sonoran Desert Succulent Haven",
    location: "Southwestern United States & Mexico",
    rainfall: "75 - 380 mm / yr",
    temperature: "12°C - 42°C (Bimodal Rain)",
    carbonStorage: "Caliche Soil Inorganic Carbon",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    narrative: "The world's greenest and most biologically rich desert. Sustained by unique winter storms and summer monsoons, it is populated by giant Saguaro cacti that stand as sentinels of resilience against extreme heat.",
    hotspots: [
      { x: 35, y: 45, title: "Saguaro Cactus (Carnegiea)", text: "Can live 200 years and weigh 6 tons when fully engorged with rainwater after summer flash storms." },
      { x: 60, y: 70, title: "Waxy Cuticle Coating", text: "Succulent plants produce a thick microscopic wax layer on stems to reflect ultraviolet light and halt moisture loss." },
      { x: 80, y: 50, title: "Nurse Tree Effect", text: "Desert ironwood and paloverde trees shield fragile cactus seedlings from blistering sun and winter frosts." }
    ]
  },
  alpine: {
    id: "alpine",
    name: "Alpine Tundra & Glacial Meadows",
    location: "Rocky Mountains, Alps & Himalayas",
    rainfall: "Snowpack & Meltwater Dependent",
    temperature: "-15°C - 15°C (Extreme UV)",
    carbonStorage: "Permafrost & Peat Reserves",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    narrative: "Perched above the tree line where biting gale winds and freezing nights test the boundaries of life. Cushion plants, edelweiss, and dwarf gentians hug the rocky terrain in compact mats to capture ground heat.",
    hotspots: [
      { x: 30, y: 55, title: "Cushion Plant Morphology", text: "Tightly packed hemispherical domes that create their own micro-climate up to 10°C warmer than the frigid air." },
      { x: 50, y: 35, title: "Anthocyanin Sunscreen", text: "Alpine flowers produce vibrant red and purple pigments that act as natural sunscreen against high-altitude UV radiation." },
      { x: 75, y: 65, title: "Deep Taproots", text: "Roots penetrating 3 to 6 feet into rocky scree to anchor against 100 mph wind gusts and tap subterranean water." }
    ]
  }
};

// ============================================================================
// 3. PROCEDURAL NATURE SOUNDSCAPE SYNTHESIZER (WEB AUDIO API)
// ============================================================================
class NatureSoundEngine {
  constructor() {
    this.audioCtx = null;
    this.isPlaying = false;
    this.nodes = {};
    this.volumes = {
      master: 0.7,
      rain: 0.35,
      wind: 0.25,
      birds: 0.4,
      stream: 0.3
    };
    this.birdTimer = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
    }
  }

  async togglePlay() {
    this.init();
    if (this.audioCtx.state === 'suspended') {
      await this.audioCtx.resume();
    }

    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  start() {
    if (this.isPlaying) return;
    this.init();

    // Master Gain
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(this.volumes.master, this.audioCtx.currentTime);
    this.masterGain.connect(this.audioCtx.destination);

    // 1. Rain Synthesizer (Pink Noise + Bandpass Filter)
    this.setupRain();

    // 2. Wind Synthesizer (Modulated Bandpass Noise)
    this.setupWind();

    // 3. Stream Synthesizer (Low-pass Brownian stream)
    this.setupStream();

    // 4. Procedural Bird Chirp Scheduler
    this.setupBirds();

    this.isPlaying = true;
  }

  stop() {
    if (!this.isPlaying) return;
    try {
      if (this.nodes.rainSource) this.nodes.rainSource.stop();
      if (this.nodes.windSource) this.nodes.windSource.stop();
      if (this.nodes.streamSource) this.nodes.streamSource.stop();
      if (this.nodes.windLfo) this.nodes.windLfo.stop();
      if (this.birdTimer) clearTimeout(this.birdTimer);
    } catch (e) {
      console.warn("Audio stop error", e);
    }
    this.isPlaying = false;
  }

  createNoiseBuffer(type = 'white', seconds = 5) {
    const bufferSize = this.audioCtx.sampleRate * seconds;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);

    let lastOut = 0.0;
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (type === 'pink') {
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
        b6 = white * 0.115926;
      } else if (type === 'brown') {
        data[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = data[i];
        data[i] *= 3.5;
      } else {
        data[i] = white * 0.5;
      }
    }
    return buffer;
  }

  setupRain() {
    const rainBuffer = this.createNoiseBuffer('pink', 4);
    const rainSource = this.audioCtx.createBufferSource();
    rainSource.buffer = rainBuffer;
    rainSource.loop = true;

    const rainFilter = this.audioCtx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.value = 1800;

    const rainGain = this.audioCtx.createGain();
    rainGain.gain.value = this.volumes.rain;

    rainSource.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(this.masterGain);

    rainSource.start();
    this.nodes.rainSource = rainSource;
    this.nodes.rainGain = rainGain;
  }

  setupWind() {
    const windBuffer = this.createNoiseBuffer('pink', 6);
    const windSource = this.audioCtx.createBufferSource();
    windSource.buffer = windBuffer;
    windSource.loop = true;

    const windFilter = this.audioCtx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 400;
    windFilter.Q.value = 2.5;

    // Wind modulation LFO
    const windLfo = this.audioCtx.createOscillator();
    windLfo.frequency.value = 0.2; // 0.2 Hz slow breeze modulation
    const lfoGain = this.audioCtx.createGain();
    lfoGain.gain.value = 250;
    windLfo.connect(lfoGain);
    lfoGain.connect(windFilter.frequency);

    const windGain = this.audioCtx.createGain();
    windGain.gain.value = this.volumes.wind;

    windSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(this.masterGain);

    windSource.start();
    windLfo.start();

    this.nodes.windSource = windSource;
    this.nodes.windLfo = windLfo;
    this.nodes.windGain = windGain;
  }

  setupStream() {
    const streamBuffer = this.createNoiseBuffer('brown', 5);
    const streamSource = this.audioCtx.createBufferSource();
    streamSource.buffer = streamBuffer;
    streamSource.loop = true;

    const streamFilter = this.audioCtx.createBiquadFilter();
    streamFilter.type = 'bandpass';
    streamFilter.frequency.value = 750;
    streamFilter.Q.value = 1.8;

    const streamGain = this.audioCtx.createGain();
    streamGain.gain.value = this.volumes.stream;

    streamSource.connect(streamFilter);
    streamFilter.connect(streamGain);
    streamGain.connect(this.masterGain);

    streamSource.start();
    this.nodes.streamSource = streamSource;
    this.nodes.streamGain = streamGain;
  }

  setupBirds() {
    this.nodes.birdsGain = this.audioCtx.createGain();
    this.nodes.birdsGain.gain.value = this.volumes.birds;
    this.nodes.birdsGain.connect(this.masterGain);

    const scheduleNextChirp = () => {
      if (!this.isPlaying) return;
      if (this.volumes.birds > 0.05) {
        this.synthesizeBirdCall();
      }
      const nextDelay = 1800 + Math.random() * 4200;
      this.birdTimer = setTimeout(scheduleNextChirp, nextDelay);
    };

    scheduleNextChirp();
  }

  synthesizeBirdCall() {
    if (!this.audioCtx || this.audioCtx.state !== 'running') return;
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const chirpGain = this.audioCtx.createGain();

    const baseFreq = 2200 + Math.random() * 1400;
    osc.type = 'sine';

    // Sequence 2 or 3 micro-chirps
    const count = Math.random() > 0.4 ? 3 : 2;
    chirpGain.gain.setValueAtTime(0.001, now);

    for (let i = 0; i < count; i++) {
      const startT = now + i * 0.12;
      const midT = startT + 0.04;
      const endT = startT + 0.09;

      osc.frequency.setValueAtTime(baseFreq * (0.9 + Math.random() * 0.3), startT);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, midT);
      osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.8, endT);

      chirpGain.gain.setValueAtTime(0.001, startT);
      chirpGain.gain.linearRampToValueAtTime(0.18, midT);
      chirpGain.gain.linearRampToValueAtTime(0.001, endT);
    }

    osc.connect(chirpGain);
    chirpGain.connect(this.nodes.birdsGain);

    osc.start(now);
    osc.stop(now + count * 0.15);
  }

  setVolume(track, val) {
    this.volumes[track] = parseFloat(val);
    if (!this.isPlaying) return;

    if (track === 'rain' && this.nodes.rainGain) {
      this.nodes.rainGain.gain.setTargetAtTime(this.volumes.rain, this.audioCtx.currentTime, 0.05);
    } else if (track === 'wind' && this.nodes.windGain) {
      this.nodes.windGain.gain.setTargetAtTime(this.volumes.wind, this.audioCtx.currentTime, 0.05);
    } else if (track === 'birds' && this.nodes.birdsGain) {
      this.nodes.birdsGain.gain.setTargetAtTime(this.volumes.birds, this.audioCtx.currentTime, 0.05);
    } else if (track === 'stream' && this.nodes.streamGain) {
      this.nodes.streamGain.gain.setTargetAtTime(this.volumes.stream, this.audioCtx.currentTime, 0.05);
    } else if (track === 'master' && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(this.volumes.master, this.audioCtx.currentTime, 0.05);
    }
  }
}

// ============================================================================
// 4. FLOATING LEAVES BACKGROUND CANVAS
// ============================================================================
function initLeavesCanvas() {
  const canvas = document.getElementById('leaves-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const mouse = { x: -1000, y: -1000, radius: 120 };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  const leavesCount = 28;
  const leaves = [];
  const leafColors = [
    'rgba(46, 204, 113, 0.4)',
    'rgba(16, 185, 129, 0.35)',
    'rgba(52, 211, 153, 0.3)',
    'rgba(245, 158, 11, 0.25)',
    'rgba(132, 204, 22, 0.3)'
  ];

  for (let i = 0; i < leavesCount; i++) {
    leaves.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 10 + Math.random() * 16,
      vx: 0.3 + Math.random() * 0.7,
      vy: 0.5 + Math.random() * 0.9,
      angle: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.02,
      color: leafColors[Math.floor(Math.random() * leafColors.length)],
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.01 + Math.random() * 0.02
    });
  }

  function drawLeaf(ctx, x, y, size, angle, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, -size);
    ctx.quadraticCurveTo(size * 0.75, 0, 0, size);
    ctx.quadraticCurveTo(-size * 0.75, 0, 0, -size);
    ctx.fill();
    // Midrib vein
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.85);
    ctx.lineTo(0, size * 0.85);
    ctx.stroke();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let leaf of leaves) {
      leaf.sway += leaf.swaySpeed;
      leaf.x += leaf.vx + Math.sin(leaf.sway) * 0.8;
      leaf.y += leaf.vy;
      leaf.angle += leaf.spin;

      // Mouse repulsion interaction
      const dx = leaf.x - mouse.x;
      const dy = leaf.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        leaf.x += (dx / dist) * force * 5;
        leaf.y += (dy / dist) * force * 5;
      }

      // Recycle when off-screen
      if (leaf.y > height + 40) {
        leaf.y = -30;
        leaf.x = Math.random() * width;
      }
      if (leaf.x > width + 40) {
        leaf.x = -30;
      }

      drawLeaf(ctx, leaf.x, leaf.y, leaf.size, leaf.angle, leaf.color);
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ============================================================================
// 5. VIRTUAL TERRARIUM CANVAS SIMULATOR
// ============================================================================
class TerrariumSimulator {
  constructor() {
    this.canvas = document.getElementById('terrarium-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.plants = [];
    this.raindrops = [];
    this.fireflies = [];
    this.selectedSeed = 'fern';
    this.sunlight = 75; // 0 (night) to 100 (high noon)
    this.moisture = 60;
    this.isMisting = false;

    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.setupListeners();
    this.seedInitialGarden();
    this.animate();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  setupListeners() {
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const groundY = this.canvas.height - 70;
      this.addPlant(x, groundY, this.selectedSeed);
    });

    // Seed selector buttons
    document.querySelectorAll('.seed-choice-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.seed-choice-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.selectedSeed = btn.dataset.seed;
      });
    });

    // Sunlight slider
    const sunSlider = document.getElementById('terrarium-sun-slider');
    if (sunSlider) {
      sunSlider.addEventListener('input', (e) => {
        this.sunlight = parseInt(e.target.value);
        document.getElementById('sun-value-display').textContent = `${this.sunlight}%`;
      });
    }

    // Mist Button
    const mistBtn = document.getElementById('terrarium-mist-btn');
    if (mistBtn) {
      mistBtn.addEventListener('click', () => {
        this.triggerMist();
      });
    }

    // Reset Button
    const resetBtn = document.getElementById('terrarium-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.plants = [];
        this.seedInitialGarden();
        showToast("🌿 Terrarium reseeded with fresh sprouts!");
      });
    }

    // Snapshot Button
    const snapBtn = document.getElementById('terrarium-snap-btn');
    if (snapBtn) {
      snapBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.download = `my-verdantia-terrarium-${Date.now()}.png`;
        link.href = this.canvas.toDataURL('image/png');
        link.click();
        showToast("📸 Terrarium snapshot saved to your downloads!");
      });
    }
  }

  seedInitialGarden() {
    const w = this.canvas.width;
    const groundY = this.canvas.height - 70;
    this.addPlant(w * 0.25, groundY, 'fern');
    this.addPlant(w * 0.45, groundY, 'succulent');
    this.addPlant(w * 0.65, groundY, 'mushroom');
    this.addPlant(w * 0.82, groundY, 'wildflower');

    // Spawn 14 night fireflies
    this.fireflies = [];
    for (let i = 0; i < 16; i++) {
      this.fireflies.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * (this.canvas.height - 100),
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        pulse: Math.random() * Math.PI,
        size: 2 + Math.random() * 2
      });
    }
  }

  addPlant(x, y, type) {
    this.plants.push({
      x,
      y,
      type,
      growth: 0.1, // 0.1 to 1.0
      targetGrowth: 0.8 + Math.random() * 0.4,
      hueOffset: (Math.random() - 0.5) * 20,
      sway: Math.random() * Math.PI,
      swaySpeed: 0.02 + Math.random() * 0.02
    });
    showToast(`🌱 Planted a new ${type}! Click & mist to nourish it.`);
  }

  triggerMist() {
    this.moisture = Math.min(100, this.moisture + 25);
    for (let i = 0; i < 60; i++) {
      this.raindrops.push({
        x: Math.random() * this.canvas.width,
        y: -10 - Math.random() * 50,
        speed: 4 + Math.random() * 5,
        len: 8 + Math.random() * 12
      });
    }
    // Plants boost growth
    this.plants.forEach(p => {
      p.targetGrowth = Math.min(1.4, p.targetGrowth + 0.15);
    });
    showToast("💧 Gentle morning mist delivered to the terrarium!");
  }

  animate() {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    // 1. Sky & Ambient Lighting based on sunlight slider
    const sunRatio = this.sunlight / 100;
    const skyGrad = ctx.createLinearGradient(0, 0, 0, h);

    if (sunRatio > 0.4) {
      // Daylight / Golden hour
      skyGrad.addColorStop(0, `rgba(18, 50, 36, ${0.4 + sunRatio * 0.4})`);
      skyGrad.addColorStop(1, `rgba(6, 20, 14, 0.95)`);
    } else {
      // Twilight / Night
      skyGrad.addColorStop(0, `rgba(5, 12, 18, 0.9)`);
      skyGrad.addColorStop(1, `rgba(2, 6, 8, 0.98)`);
    }
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h);

    // Sun / Moon Glow
    const orbX = w * 0.8;
    const orbY = 60 + (1 - sunRatio) * 60;
    const orbGrad = ctx.createRadialGradient(orbX, orbY, 5, orbX, orbY, 80);
    if (sunRatio > 0.4) {
      orbGrad.addColorStop(0, `rgba(245, 158, 11, ${sunRatio * 0.8})`);
      orbGrad.addColorStop(1, 'transparent');
    } else {
      orbGrad.addColorStop(0, `rgba(224, 242, 254, ${(1 - sunRatio) * 0.6})`);
      orbGrad.addColorStop(1, 'transparent');
    }
    ctx.fillStyle = orbGrad;
    ctx.beginPath();
    ctx.arc(orbX, orbY, 80, 0, Math.PI * 2);
    ctx.fill();

    // 2. Terrarium Soil Layers (Gravel, Charcoal, Rich Loam, Moss)
    const groundY = h - 70;

    // Gravel base
    ctx.fillStyle = '#1c2220';
    ctx.fillRect(0, h - 25, w, 25);
    for (let x = 8; x < w; x += 18) {
      ctx.fillStyle = (x % 36 === 0) ? '#38433e' : '#28312d';
      ctx.beginPath();
      ctx.arc(x, h - 12, 6, 0, Math.PI * 2);
      ctx.fill();
    }

    // Active Charcoal layer
    ctx.fillStyle = '#111815';
    ctx.fillRect(0, h - 45, w, 20);

    // Rich Loam Soil
    ctx.fillStyle = '#221811';
    ctx.fillRect(0, groundY, w, 25);

    // Living Surface Moss
    ctx.fillStyle = '#2e6b3f';
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    for (let x = 0; x <= w; x += 20) {
      const hill = Math.sin(x * 0.05) * 4;
      ctx.lineTo(x, groundY + hill);
    }
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.fill();

    // 3. Raindrops
    ctx.strokeStyle = 'rgba(165, 243, 252, 0.6)';
    ctx.lineWidth = 1.5;
    for (let i = this.raindrops.length - 1; i >= 0; i--) {
      const drop = this.raindrops[i];
      drop.y += drop.speed;
      ctx.beginPath();
      ctx.moveTo(drop.x, drop.y);
      ctx.lineTo(drop.x, drop.y + drop.len);
      ctx.stroke();

      if (drop.y > groundY) {
        this.raindrops.splice(i, 1);
      }
    }

    // 4. Render Terrarium Plants
    for (let plant of this.plants) {
      if (plant.growth < plant.targetGrowth) {
        plant.growth += 0.003;
      }
      plant.sway += plant.swaySpeed;

      this.drawPlant(ctx, plant);
    }

    // 5. Fireflies at Twilight / Night
    if (sunRatio < 0.6) {
      const flyAlpha = (0.6 - sunRatio) / 0.6;
      for (let f of this.fireflies) {
        f.x += f.vx;
        f.y += f.vy;
        f.pulse += 0.05;

        if (f.x < 10) f.vx = Math.abs(f.vx);
        if (f.x > w - 10) f.vx = -Math.abs(f.vx);
        if (f.y < 20) f.vy = Math.abs(f.vy);
        if (f.y > groundY - 10) f.vy = -Math.abs(f.vy);

        const glow = (Math.sin(f.pulse) + 1) * 0.5;
        const rad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.size * 5);
        rad.addColorStop(0, `rgba(250, 204, 21, ${flyAlpha * glow})`);
        rad.addColorStop(1, 'transparent');
        ctx.fillStyle = rad;
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.size * 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 6. Terrarium Glass Reflection Highlight
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.48, h * 0.48, 0, 0, Math.PI * 2);
    ctx.stroke();

    requestAnimationFrame(() => this.animate());
  }

  drawPlant(ctx, p) {
    const swayOffset = Math.sin(p.sway) * 4;
    const g = p.growth;

    ctx.save();
    ctx.translate(p.x, p.y);

    if (p.type === 'fern') {
      // Feathery emerald fern fronds
      ctx.strokeStyle = '#22c55e';
      ctx.lineWidth = 2.5;
      const frondHeight = -70 * g;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(swayOffset, frondHeight * 0.5, swayOffset * 1.5, frondHeight);
      ctx.stroke();

      // Pinnae frond leaves
      for (let i = 0.2; i <= 0.9; i += 0.15) {
        const py = frondHeight * i;
        const px = swayOffset * i;
        ctx.fillStyle = '#4ade80';
        ctx.beginPath();
        ctx.ellipse(px + 12 * g, py, 14 * g, 5 * g, 0.3, 0, Math.PI * 2);
        ctx.ellipse(px - 12 * g, py, 14 * g, 5 * g, -0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (p.type === 'succulent') {
      // Rosette rosette succulent petals
      ctx.fillStyle = '#10b981';
      const petals = 8;
      const radius = 26 * g;
      for (let i = 0; i < petals; i++) {
        const ang = (i / petals) * Math.PI * 2;
        const petalX = Math.cos(ang) * radius;
        const petalY = Math.sin(ang) * (radius * 0.5) - 10;
        ctx.beginPath();
        ctx.ellipse(petalX, petalY, 12 * g, 8 * g, ang, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#34d399';
      ctx.beginPath();
      ctx.arc(0, -10, 8 * g, 0, Math.PI * 2);
      ctx.fill();
    } else if (p.type === 'mushroom') {
      // Glowing woodland toadstool
      const stemH = -45 * g;
      ctx.fillStyle = '#e2e8f0';
      ctx.beginPath();
      ctx.moveTo(-4 * g, 0);
      ctx.lineTo(-2 * g, stemH);
      ctx.lineTo(2 * g, stemH);
      ctx.lineTo(4 * g, 0);
      ctx.fill();

      // Scarlet cap
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(0, stemH, 20 * g, Math.PI, 0);
      ctx.fill();

      // White spore dots
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(-8 * g, stemH - 8 * g, 2.5 * g, 0, Math.PI * 2);
      ctx.arc(0, stemH - 12 * g, 3 * g, 0, Math.PI * 2);
      ctx.arc(8 * g, stemH - 7 * g, 2.5 * g, 0, Math.PI * 2);
      ctx.fill();
    } else if (p.type === 'wildflower') {
      // Graceful tall wildflower stem
      const stemH = -80 * g;
      ctx.strokeStyle = '#84cc16';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(swayOffset, stemH * 0.5, swayOffset, stemH);
      ctx.stroke();

      // Flower bloom
      const headX = swayOffset;
      const headY = stemH;
      ctx.fillStyle = '#f59e0b';
      for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(headX + Math.cos(ang) * (10 * g), headY + Math.sin(ang) * (10 * g), 7 * g, 5 * g, ang, 0, Math.PI * 2);
        ctx.fill();
      }
      // Golden nectar center
      ctx.fillStyle = '#d97706';
      ctx.beginPath();
      ctx.arc(headX, headY, 5 * g, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

// ============================================================================
// 6. PLANT DOCTOR & SYMPTOM DIAGNOSTIC WIZARD
// ============================================================================
const DIAGNOSTIC_DATABASE = {
  "yellow-overwater": {
    name: "Overwatering & Root Hypoxia",
    icon: "🌊",
    cause: "Saturated soil pockets depriving root capillaries of oxygen, encouraging root-rot fungal pathogens.",
    triage: "Cease watering immediately. Aerate the potting soil by gently poking holes with a clean chopstick.",
    prescription: [
      { title: "Immediate Action", text: "Remove the plant from its container to inspect roots. Snip away black, mushy, or foul-smelling roots with sterilized shears." },
      { title: "Substrate Upgrade", text: "Repot in fresh potting soil heavily amended with perlite, pumice, or orchid bark to ensure rapid drainage." },
      { title: "Watering Rhythm", text: "Only water when the top 2-3 inches of soil test completely dry via the finger test or a moisture meter." }
    ]
  },
  "crisp-humidity": {
    name: "Sub-optimal Humidity & Fluoride Burn",
    icon: "🍂",
    cause: "Dry ambient indoor heating/cooling air stripping moisture faster than root transpiration can replenish.",
    triage: "Trim dead crispy margins with sharp shears, leaving a tiny sliver of brown to avoid cutting live leaf tissue.",
    prescription: [
      { title: "Atmosphere Elevation", text: "Position a cool-mist ultrasonic humidifier nearby, or cluster plants atop a pebble tray filled with water." },
      { title: "Water Quality", text: "Switch from municipal tap water to filtered, distilled, or harvested rainwater to prevent mineral edge salts." },
      { title: "Air Currents", text: "Keep at least 6 feet away from central HVAC heating vents, space heaters, and drafty exterior doorways." }
    ]
  },
  "droop-underwater": {
    name: "Chronic Dehydration & Hydrophobic Soil",
    icon: "🏜️",
    cause: "Peat-based potting soil has dried out to the point of becoming hydrophobic, causing water to channel down sides.",
    triage: "Give the pot a deep bottom-watering bath for 30-45 minutes until the topsoil feels damp.",
    prescription: [
      { title: "Bottom Soak", text: "Fill a basin with 3 inches of room-temperature water. Submerge the nursery pot until capillary action saturates the root ball." },
      { title: "Moisture Retention", text: "Top-dress the soil with sphagnum moss or coconut coir to slow surface evaporation." },
      { title: "Schedule Adjustment", text: "Increase watering frequency and avoid letting succulent or foliage leaves wrinkle before watering." }
    ]
  },
  "spots-pest": {
    name: "Spider Mite or Powdery Mildew Infestation",
    icon: "🔬",
    cause: "Sap-sucking microscopic mites flourishing in dry stagnant air or foliar fungi from standing water on leaves.",
    triage: "Quarantine this plant from your other green companions immediately to stop pest contagion.",
    prescription: [
      { title: "Foliar Wash", text: "Take the plant to the shower and vigorously spray undersides of leaves with lukewarm water to dislodge pest colonies." },
      { title: "Organic Treatment", text: "Apply cold-pressed organic Neem oil solution or insecticidal potassium soap every 5-7 days for three weeks." },
      { title: "Air Circulation", text: "Introduce gentle fan air circulation to discourage fungal spore settlement." }
    ]
  },
  "etiolation-light": {
    name: "Etiolation (Light Starvation & Legginess)",
    icon: "☀️",
    cause: "Insufficient photon density causing the plant to produce excess gibberellins, stretching frantically toward windows.",
    triage: "Gradually move the plant into brighter, indirect light over 5-7 days to prevent sunburn shock.",
    prescription: [
      { title: "Light Exposure", text: "Move to an unobstructed east or south-facing window, or supplement with a full-spectrum 6500K LED grow light." },
      { title: "Pruning & Propagation", text: "Prune long leggy stems just above a node; propagate the healthy cuttings in clean water to start bushy new plants." },
      { title: "Rotation Discipline", text: "Quarter-turn the pot every week so all sides receive balanced light exposure." }
    ]
  }
};

class PlantDoctorEngine {
  constructor() {
    this.currentStep = 1;
    this.selections = {
      plantType: null,
      symptom: null,
      environment: null
    };
    this.setupUI();
  }

  setupUI() {
    // Step 1: Plant Types
    document.querySelectorAll('[data-step="1"] .diagnostic-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectOption(1, 'plantType', btn.dataset.val, btn);
      });
    });

    // Step 2: Symptoms
    document.querySelectorAll('[data-step="2"] .diagnostic-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectOption(2, 'symptom', btn.dataset.val, btn);
      });
    });

    // Step 3: Environment
    document.querySelectorAll('[data-step="3"] .diagnostic-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectOption(3, 'environment', btn.dataset.val, btn);
      });
    });

    // Restart button
    const restartBtn = document.getElementById('doctor-restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => this.reset());
    }
  }

  selectOption(step, key, val, elem) {
    this.selections[key] = val;
    elem.parentElement.querySelectorAll('.diagnostic-option-btn').forEach(b => b.classList.remove('selected'));
    elem.classList.add('selected');

    if (step < 3) {
      setTimeout(() => this.goToStep(step + 1), 250);
    } else {
      setTimeout(() => this.generateDiagnosis(), 300);
    }
  }

  goToStep(stepNum) {
    this.currentStep = stepNum;
    document.querySelectorAll('.doctor-wizard-screen').forEach(s => s.classList.remove('active'));
    document.querySelector(`[data-screen="${stepNum}"]`).classList.add('active');

    // Update progress bubbles
    document.querySelectorAll('.step-bubble').forEach(b => {
      const s = parseInt(b.dataset.stepIndex);
      b.classList.remove('active', 'done');
      if (s === stepNum) b.classList.add('active');
      else if (s < stepNum) b.classList.add('done');
    });
  }

  generateDiagnosis() {
    let diagKey = "yellow-overwater";
    const s = this.selections.symptom;
    const env = this.selections.environment;

    if (s === "brown-crisp" || env === "dry-air") {
      diagKey = "crisp-humidity";
    } else if (s === "drooping" || env === "infrequent-water") {
      diagKey = "droop-underwater";
    } else if (s === "white-spots") {
      diagKey = "spots-pest";
    } else if (s === "leggy" || env === "low-light") {
      diagKey = "etiolation-light";
    }

    const diag = DIAGNOSTIC_DATABASE[diagKey];
    this.renderDiagnosisResult(diag);
  }

  renderDiagnosisResult(diag) {
    const container = document.getElementById('diagnosis-result-container');
    if (!container) return;

    let rxHtml = diag.prescription.map(rx => `
      <div class="rx-box">
        <div class="rx-title">
          <span>🌿</span> ${rx.title}
        </div>
        <div class="rx-text">${rx.text}</div>
      </div>
    `).join('');

    container.innerHTML = `
      <div class="diagnosis-result-card">
        <div class="diagnosis-header">
          <div class="diagnosis-badge-icon">${diag.icon}</div>
          <div>
            <div class="badge badge-amber" style="margin-bottom: 6px;">Diagnosis Result</div>
            <h3 class="diagnosis-title">${diag.name}</h3>
            <p class="diagnosis-cause">Primary Cause: ${diag.cause}</p>
          </div>
        </div>
        <div class="rx-box" style="margin-bottom: 20px; border-left: 4px solid var(--accent-primary);">
          <div class="rx-title">⚡ Immediate Triage</div>
          <div class="rx-text">${diag.triage}</div>
        </div>
        <div class="diagnosis-prescription-list">
          ${rxHtml}
        </div>
        <div style="text-align: center; margin-top: 24px;">
          <button id="doctor-restart-btn-inner" class="btn btn-secondary">
            <span>↺</span> Diagnose Another Plant
          </button>
        </div>
      </div>
    `;

    document.getElementById('doctor-restart-btn-inner').addEventListener('click', () => this.reset());

    this.goToStep(4);
  }

  reset() {
    this.selections = { plantType: null, symptom: null, environment: null };
    document.querySelectorAll('.diagnostic-option-btn').forEach(b => b.classList.remove('selected'));
    this.goToStep(1);
  }
}

// ============================================================================
// 7. BOTANICAL COLLECTION & MODAL DOSSIER
// ============================================================================
class BotanicalAppUI {
  constructor() {
    this.savedPlants = JSON.parse(localStorage.getItem('verdantia_saved_plants') || '[]');
    this.activeCategory = 'all';
    this.searchQuery = '';
    this.theme = localStorage.getItem('verdantia_theme') || 'dark';

    this.initTheme();
    this.initSoundscape();
    this.renderPlants();
    this.setupSearchAndFilter();
    this.setupSavedModal();
    this.setupBiomes();
    this.setupCarbonCalc();
    this.setupPledges();
    this.setupStoryModal();
  }

  initTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
      themeBtn.addEventListener('click', () => {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('verdantia_theme', this.theme);
        themeBtn.innerHTML = this.theme === 'dark' ? '☀️' : '🌙';
        showToast(`Switched to ${this.theme} theme`);
      });
    }
  }

  initSoundscape() {
    const soundEngine = new NatureSoundEngine();
    const playBtn = document.getElementById('soundscape-play-btn');
    const vizBars = document.querySelectorAll('.viz-bar');

    if (playBtn) {
      playBtn.addEventListener('click', async () => {
        const isPlaying = await soundEngine.togglePlay();
        playBtn.innerHTML = isPlaying ? '<span>⏸</span> Pause Ambient' : '<span>▶</span> Play Ambient Audio';
        playBtn.classList.toggle('btn-primary', !isPlaying);
        playBtn.classList.toggle('btn-amber', isPlaying);

        vizBars.forEach(b => b.classList.toggle('active', isPlaying));
        showToast(isPlaying ? "🎧 Real-time Nature Soundscape Playing" : "🔇 Soundscape Paused");
      });
    }

    // Sliders
    ['rain', 'wind', 'birds', 'stream'].forEach(track => {
      const slider = document.getElementById(`slider-${track}`);
      if (slider) {
        slider.addEventListener('input', (e) => {
          soundEngine.setVolume(track, e.target.value);
        });
      }
    });
  }

  renderPlants() {
    const grid = document.getElementById('plants-grid');
    if (!grid) return;

    const filtered = BOTANICAL_DATABASE.filter(p => {
      const matchesCat = this.activeCategory === 'all' || p.category === this.activeCategory;
      const q = this.searchQuery.toLowerCase();
      const matchesQuery = !q ||
        p.name.toLowerCase().includes(q) ||
        p.latinName.toLowerCase().includes(q) ||
        p.family.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });

    const countDisplay = document.getElementById('plant-results-count');
    if (countDisplay) {
      countDisplay.textContent = `Displaying ${filtered.length} botanical species`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <p style="font-size: 2.5rem; margin-bottom: 12px;">🌿</p>
          <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin-bottom: 8px;">No Botanical Matches Found</h3>
          <p style="color: var(--text-muted);">Try loosening your search keywords or selecting "All Flora" filter.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(plant => {
      const isSaved = this.savedPlants.includes(plant.id);
      return `
        <div class="plant-card" data-plant-id="${plant.id}" style="cursor: pointer;">
          <div class="plant-img-box">
            <img class="plant-img" src="${plant.image}" alt="${plant.name}" loading="lazy" onerror="this.onerror=null; this.src=getPlantFallbackSvg('${plant.name}', '${plant.category}');">
            <div class="plant-badge-corner">
              <span class="badge ${plant.category === 'indoor' ? 'badge-green' : (plant.category === 'trees' ? 'badge-blue' : 'badge-amber')}">
                ${plant.category.toUpperCase()}
              </span>
            </div>
            <button class="plant-save-btn ${isSaved ? 'saved' : ''}" data-id="${plant.id}" title="${isSaved ? 'Remove from My Garden' : 'Add to My Garden'}">
              ${isSaved ? '★' : '☆'}
            </button>
          </div>
          <div class="plant-card-body">
            <div class="plant-card-names">
              <h3 class="plant-common-name">${plant.name}</h3>
              <p class="plant-botanical-name">${plant.latinName} (${plant.family})</p>
            </div>
            <p class="plant-card-desc">${plant.description}</p>
            <div class="plant-quick-specs">
              <div class="spec-cell">
                <span class="spec-icon">☀️</span>
                <span class="spec-title">Light</span>
                <span class="spec-val">${plant.light.split(',')[0]}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-icon">💧</span>
                <span class="spec-title">Water</span>
                <span class="spec-val">${plant.water.split('(')[0]}</span>
              </div>
              <div class="spec-cell">
                <span class="spec-icon">🌿</span>
                <span class="spec-title">Care</span>
                <span class="spec-val">${plant.careLevel}</span>
              </div>
            </div>
            <div class="plant-card-footer">
              <span style="font-size: 0.8rem; color: var(--text-muted);">Purify: ${plant.airPurifyScore}</span>
              <button class="btn btn-sm btn-secondary view-dossier-btn" data-id="${plant.id}">
                View Dossier →
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach listeners to newly rendered items
    grid.querySelectorAll('.plant-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.plant-save-btn')) {
          this.openDossierModal(card.dataset.plantId);
        }
      });
    });

    grid.querySelectorAll('.plant-save-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.toggleSavePlant(btn.dataset.id);
      });
    });
  }

  setupSearchAndFilter() {
    const searchInput = document.getElementById('encyclopedia-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.trim();
        this.renderPlants();
      });
    }

    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.activeCategory = chip.dataset.cat;
        this.renderPlants();
      });
    });
  }

  toggleSavePlant(id) {
    const index = this.savedPlants.indexOf(id);
    const plant = BOTANICAL_DATABASE.find(p => p.id === id);
    if (index > -1) {
      this.savedPlants.splice(index, 1);
      showToast(`Removed ${plant ? plant.name : 'plant'} from your garden collection.`);
    } else {
      this.savedPlants.push(id);
      showToast(`⭐ Saved ${plant ? plant.name : 'plant'} to your botanical collection!`);
    }
    localStorage.setItem('verdantia_saved_plants', JSON.stringify(this.savedPlants));
    this.updateSavedBadge();
    this.renderPlants();
  }

  updateSavedBadge() {
    const badge = document.getElementById('saved-plants-badge');
    if (badge) {
      badge.textContent = this.savedPlants.length;
      badge.style.display = this.savedPlants.length > 0 ? 'flex' : 'none';
    }
  }

  openDossierModal(id) {
    const plant = BOTANICAL_DATABASE.find(p => p.id === id);
    if (!plant) return;

    const modal = document.getElementById('dossier-modal');
    const body = document.getElementById('dossier-modal-body');

    body.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 32px; align-items: start;">
        <div style="border-radius: var(--radius-md); overflow: hidden; height: 380px;">
          <img src="${plant.image}" alt="${plant.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.onerror=null; this.src=getPlantFallbackSvg('${plant.name}', '${plant.category}');">
        </div>
        <div>
          <div class="badge badge-green" style="margin-bottom: 8px;">${plant.category.toUpperCase()} SPECIMEN</div>
          <h2 style="font-family: var(--font-serif); font-size: 2.2rem; margin-bottom: 4px;">${plant.name}</h2>
          <p style="font-style: italic; color: var(--accent-light); margin-bottom: 16px;">${plant.latinName} • Family: ${plant.family}</p>
          <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">${plant.description}</p>
          
          <div style="background: rgba(0,0,0,0.2); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px; border: 1px solid var(--border-subtle);">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 0.9rem;">
              <div><strong>Native Range:</strong> ${plant.origin}</div>
              <div><strong>Soil pH:</strong> ${plant.soilPh}</div>
              <div><strong>Humidity:</strong> ${plant.humidity}</div>
              <div><strong>Toxicity:</strong> ${plant.toxicity}</div>
            </div>
          </div>

          <div style="margin-bottom: 16px;">
            <h4 style="font-weight: 700; color: var(--accent-primary); margin-bottom: 6px;">🌱 Master Care Recommendations</h4>
            <p style="font-size: 0.92rem; color: var(--text-secondary);">${plant.careTips}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <h4 style="font-weight: 700; color: var(--earth-gold); margin-bottom: 6px;">🌍 Ecological Keystone Role</h4>
            <p style="font-size: 0.92rem; color: var(--text-secondary);">${plant.ecologicalRole}</p>
          </div>

          <div style="background: rgba(245, 158, 11, 0.1); border-left: 3px solid var(--earth-gold); padding: 12px; border-radius: 4px;">
            <p style="font-size: 0.88rem; color: #fef3c7;"><strong>Fascinating Lore:</strong> ${plant.funFact}</p>
          </div>
        </div>
      </div>
    `;

    modal.classList.add('open');
  }

  setupSavedModal() {
    const savedBtn = document.getElementById('view-saved-btn');
    const modal = document.getElementById('saved-modal');
    const body = document.getElementById('saved-modal-body');

    if (savedBtn && modal) {
      savedBtn.addEventListener('click', () => {
        const savedList = BOTANICAL_DATABASE.filter(p => this.savedPlants.includes(p.id));
        if (savedList.length === 0) {
          body.innerHTML = `
            <div style="text-align: center; padding: 40px 20px;">
              <p style="font-size: 3rem;">🌱</p>
              <h3 style="font-family: var(--font-serif); font-size: 1.5rem; margin: 12px 0;">Your Garden is Empty</h3>
              <p style="color: var(--text-muted); margin-bottom: 24px;">Click the star icon on any plant in the encyclopedia to curate your personal collection!</p>
            </div>
          `;
        } else {
          body.innerHTML = `
            <h3 style="font-family: var(--font-serif); font-size: 1.8rem; margin-bottom: 20px;">My Botanical Garden (${savedList.length})</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px;">
              ${savedList.map(p => `
                <div style="background: var(--bg-card); border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-subtle);">
                  <img src="${p.image}" alt="${p.name}" style="height: 130px; width: 100%; object-fit: cover;" onerror="this.onerror=null; this.src=getPlantFallbackSvg('${p.name}', '${p.category}');">
                  <div style="padding: 12px;">
                    <h4 style="font-size: 1rem; font-weight: 700;">${p.name}</h4>
                    <p style="font-size: 0.8rem; font-style: italic; color: var(--text-muted);">${p.latinName}</p>
                    <button class="btn btn-sm btn-secondary view-dossier-btn" data-id="${p.id}" style="width: 100%; margin-top: 10px;">
                      View Dossier
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
          body.querySelectorAll('.view-dossier-btn').forEach(b => {
            b.addEventListener('click', () => {
              modal.classList.remove('open');
              this.openDossierModal(b.dataset.id);
            });
          });
        }
        modal.classList.add('open');
      });
    }

    // Close buttons for all modals
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-overlay');
        if (modal) modal.classList.remove('open');
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el) {
          el.classList.remove('open');
        }
      });
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
      }
    });
  }

  setupBiomes() {
    const stage = document.getElementById('biome-stage');
    if (!stage) return;

    const renderBiome = (biomeKey) => {
      const data = BIOMES_DATA[biomeKey];
      if (!data) return;

      const hotspotsHtml = data.hotspots.map(h => `
        <div class="biome-hotspot" style="left: ${h.x}%; top: ${h.y}%;">
          <div class="hotspot-tooltip">
            <strong>${h.title}</strong>
            <p style="margin-top: 4px; font-size: 0.78rem; opacity: 0.9;">${h.text}</p>
          </div>
        </div>
      `).join('');

      stage.innerHTML = `
        <img class="biome-backdrop-img" src="${data.image}" alt="${data.name}">
        <div class="biome-overlay-content">
          <div class="biome-info-card">
            <span class="badge badge-green" style="margin-bottom: 8px;">LIVING BIOME SPOTLIGHT</span>
            <h3 class="biome-name">${data.name}</h3>
            <p class="biome-location"><span>📍</span> ${data.location}</p>
            <p class="biome-narrative">${data.narrative}</p>
          </div>
          <div class="biome-metrics-grid">
            <div class="biome-metric-pill">
              <div class="metric-kpi">${data.rainfall}</div>
              <div class="metric-label">Annual Rainfall</div>
            </div>
            <div class="biome-metric-pill">
              <div class="metric-kpi">${data.temperature}</div>
              <div class="metric-label">Temp Spectrum</div>
            </div>
            <div class="biome-metric-pill">
              <div class="metric-kpi">${data.carbonStorage}</div>
              <div class="metric-label">Carbon Biomass</div>
            </div>
          </div>
        </div>
        ${hotspotsHtml}
      `;
    };

    renderBiome('amazon');

    document.querySelectorAll('.biome-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.biome-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderBiome(btn.dataset.biome);
      });
    });
  }

  setupCarbonCalc() {
    const slider = document.getElementById('tree-calc-slider');
    const countDisplay = document.getElementById('calc-tree-count');
    const co2Display = document.getElementById('calc-co2-val');
    const milesDisplay = document.getElementById('calc-miles-val');
    const habitatDisplay = document.getElementById('calc-habitat-val');

    if (slider) {
      slider.addEventListener('input', (e) => {
        const trees = parseInt(e.target.value);
        countDisplay.textContent = trees;

        // Approx: 1 mature tree absorbs ~48 lbs (21.7 kg) of CO2 per year
        const co2Lbs = (trees * 48).toLocaleString();
        // Equivalent to driving ~2.4 miles per lb of CO2
        const carMiles = Math.round(trees * 48 * 2.4).toLocaleString();
        // Habitat sq meters
        const sqMeters = (trees * 15).toLocaleString();

        co2Display.textContent = `${co2Lbs} lbs`;
        milesDisplay.textContent = `${carMiles} mi`;
        habitatDisplay.textContent = `${sqMeters} m²`;
      });
    }
  }

  setupPledges() {
    const pledges = JSON.parse(localStorage.getItem('verdantia_daily_pledges') || '[]');
    const items = document.querySelectorAll('.pledge-item');
    const progressFill = document.getElementById('pledge-progress-fill');
    const progressText = document.getElementById('pledge-progress-text');

    const updatePledgeProgress = () => {
      const checkedCount = document.querySelectorAll('.pledge-checkbox:checked').length;
      const total = items.length;
      const pct = Math.round((checkedCount / total) * 100);

      if (progressFill) progressFill.style.width = `${pct}%`;
      if (progressText) progressText.textContent = `${checkedCount} of ${total} commitments fulfilled today (${pct}%)`;

      if (checkedCount === total && total > 0) {
        showToast("🌟 Incredible! You fulfilled all daily Earth commitments!");
      }
    };

    items.forEach(item => {
      const id = item.dataset.pledgeId;
      const checkbox = item.querySelector('.pledge-checkbox');

      if (pledges.includes(id)) {
        checkbox.checked = true;
        item.classList.add('checked');
      }

      item.addEventListener('click', (e) => {
        if (e.target !== checkbox) {
          checkbox.checked = !checkbox.checked;
        }
        item.classList.toggle('checked', checkbox.checked);

        const currentSaved = JSON.parse(localStorage.getItem('verdantia_daily_pledges') || '[]');
        if (checkbox.checked) {
          if (!currentSaved.includes(id)) currentSaved.push(id);
        } else {
          const idx = currentSaved.indexOf(id);
          if (idx > -1) currentSaved.splice(idx, 1);
        }
        localStorage.setItem('verdantia_daily_pledges', JSON.stringify(currentSaved));
        updatePledgeProgress();
      });
    });

    updatePledgeProgress();
  }

  setupStoryModal() {
    const stories = {
      "wood-wide-web": {
        title: "The Wood Wide Web: Underground Fungal Networks That Enable Forest Communication",
        author: "Botanical Ecology Journal",
        date: "Curated Article",
        content: `
          <p>Beneath the silence of old-growth forests lies an extraordinary, sentient superhighway known to biologists as the <strong>Wood Wide Web</strong>. For decades, traditional forestry viewed trees solely as cutthroat competitors vying for sunlight and raindrops. Groundbreaking isotopic tracing led by forest ecologists such as Dr. Suzanne Simard has unmasked a radically cooperative truth: forests function as interconnected communal super-organisms.</p>
          <br>
          <p>This communication network is made possible by <strong>mycorrhizal fungi</strong>. Fungal hyphae—delicate microscopic filaments measuring mere micrometers in diameter—weave themselves into root tips, forming symbiotic mycorrhizae. A single pinch of rich forest soil contains tens of miles of these fungal threads. The relationship is mutually reciprocal: because fungi cannot photosynthesize, the trees transfer between 20% to 40% of their carbon sugars produced in canopy leaves down to the fungi. In exchange, the vast mycelial network mining deep rock fissures returns nitrogen, phosphorus, zinc, and water back up to the trees.</p>
          <br>
          <p>Even more startling is the forest's emergency alert system. When a Douglas fir is attacked by western spruce budworms, it sends chemical and electrical warning signals through the fungal network to neighboring trees. Warned in advance, trees miles away begin synthesizing bitter tannins and defensive enzyme inhibitors before a single caterpillar lands on their needles. Mother trees use the network to nurse their own saplings, sending carbon rations to seedlings shaded beneath the heavy canopy.</p>
        `
      },
      "fibonacci-nature": {
        title: "Nature's Sacred Geometry: The Fibonacci Sequence in Flora & Fronds",
        author: "Biomathematics Review",
        date: "Mathematical Botany",
        content: `
          <p>Why do sunflower seeds spiral in interlocking counter-rotations? Why do pinecones, artichokes, and daisy florets consistently count out the sequence <strong>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89</strong>? Across millions of years of evolutionary pressure, plants solved mathematical optimization problems long before humans formulated algebra.</p>
          <br>
          <p>This biological phenomenon is governed by <strong>phyllotaxis</strong>—the arrangement of leaves, seeds, or petals around a plant's central stem. As a plant's apical meristem develops, each new primordium emerges at a golden angle of approximately <strong>137.5°</strong> from the previous one. This precise angle divides the 360-degree circle by the Golden Ratio (Phi: 1.6180339...).</p>
          <br>
          <p>By employing the golden angle, no leaf ever directly shadows the leaf below it, maximizing sun exposure and precipitation runoff down to the root crown. In seed heads, this creates the highest possible packing density with zero wasted voids. Nature did not adopt mathematics for vanity; geometry is Earth's blueprint for survival and efficient energy capture.</p>
        `
      },
      "phytoremediation-clean-air": {
        title: "How Houseplants Cleanse Modern Indoor VOCs: The Science Behind Phytoremediation",
        author: "Atmospheric Science & Botany",
        date: "Indoor Environmental Health",
        content: `
          <p>Modern homes, building insulation, paints, synthetic carpeting, and plastics continually off-gas volatile organic compounds (VOCs) such as formaldehyde, benzene, and trichloroethylene. Decades ago, NASA's pioneering <em>Clean Air Study</em> discovered that certain indoor foliage acts as natural bio-filters, purifying hermetically sealed environments.</p>
          <br>
          <p>This natural cleansing mechanism is known as <strong>phytoremediation</strong>. While foliage absorbs gaseous contaminants through open leaf stomata during photosynthesis, the true heavy lifters reside below the soil line. Microbes living in the root rhizosphere metabolize hazardous VOC molecules, breaking complex synthetic compounds down into harmless trace elements, water, and amino acids.</p>
          <br>
          <p>Species such as the Snake Plant (<em>Dracaena trifasciata</em>) and Peace Lily (<em>Spathiphyllum</em>) stand out because they maintain transpiration currents and produce nighttime oxygenation, continuously cleansing your living sanctuary while you rest.</p>
        `
      }
    };

    document.querySelectorAll('.story-read-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const key = link.dataset.story;
        const story = stories[key];
        if (!story) return;

        const modal = document.getElementById('story-modal');
        const body = document.getElementById('story-modal-body');

        body.innerHTML = `
          <div style="max-width: 680px; margin: 0 auto;">
            <div class="badge badge-amber" style="margin-bottom: 12px;">${story.date}</div>
            <h2 style="font-family: var(--font-serif); font-size: 2.2rem; line-height: 1.25; margin-bottom: 12px;">${story.title}</h2>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px;">By ${story.author}</p>
            <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-secondary);">
              ${story.content}
            </div>
          </div>
        `;
        modal.classList.add('open');
      });
    });
  }
}

// ============================================================================
// 8. TOAST NOTIFICATION UTILITY
// ============================================================================
function showToast(message) {
  let toast = document.getElementById('toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// ============================================================================
// 9. APP INITIALIZATION ON DOM READY
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initLeavesCanvas();
  window.botanicalApp = new BotanicalAppUI();
  window.plantDoctor = new PlantDoctorEngine();
  window.terrariumSim = new TerrariumSimulator();

  // Mobile menu toggle
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
    });
  }

  // Header scroll shadow effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }
  });

  // Initial badge update
  window.botanicalApp.updateSavedBadge();
});
