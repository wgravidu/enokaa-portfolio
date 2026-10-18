export interface Project {
  id: string;
  title: string;
  originalTitle?: string;
  year: string;
  category: 'Feature Film' | 'Documentary' | 'Tele-Drama & Series' | 'In Development';
  format: string;
  duration?: string;
  aspectRatio: string;
  role: string;
  logline: string;
  synopsis: string;
  directorStatement: string;
  primaryImage: string;
  galleryImages: string[];
  keyCredits: {
    role: string;
    name: string;
  }[];
  awards: string[];
  festivals: string[];
  quote?: {
    text: string;
    source: string;
  };
  featured?: boolean;
}

export interface StillImage {
  id: string;
  title: string;
  project: string;
  aspectRatio: string;
  year: string;
  captureNote: string;
  src: string;
}

export interface AwardItem {
  year: string;
  festival: string;
  category: string;
  work: string;
  location: string;
}

export const DIRECTOR_PROFILE = {
  name: 'Enokaa Sathyangani Keerthinanda',
  title: 'Film Director · Screenwriter · Producer',
  location: 'Colombo, Sri Lanka',
  tagline: 'Cinema of Human Resilience, Female Autonomy & Poetic Realism',
  showreelUrl: 'https://www.youtube.com/@enokaasathyangani7292',
  youtubeHandle: '@enokaasathyangani7292',
  contactEmailPlaceholder: 'Add later (Inquiries handled via representative form below)',
  shortBio:
    'Enokaa Sathyangani Keerthinanda is one of Sri Lanka’s most critically acclaimed contemporary film directors. Internationally recognized for her landmark cinematic work "Sulan Kirilli" (Wind Bird), her films combine unwavering moral integrity with nuanced humanism, dismantling entrenched social hypocrisies and celebrating quiet female fortitude.',
  fullBio: [
    'Enokaa Sathyangani Keerthinanda entered cinema with an uncompromising creative compass, forging an authorial voice marked by poetic realism, meticulous narrative economy, and deep psychological authenticity.',
    'Her debut feature film "Sulan Kirilli" (Wind Bird, 2002) became a watershed moment in contemporary South Asian cinema. The film claimed the Grand Prix (Best Film) at the Dhaka International Film Festival, swept 12 Sarasaviya National Film Awards, and garnered official invitations and accolades at prestigious international festivals including Fribourg, Singapore, and Cinemanila.',
    'Beyond fiction feature films, Keerthinanda has directed significant investigative documentaries and television works that continuously challenge patriarchal orthodoxies. Her directing methodology privileges prolonged observational takes, authentic location acoustics, and intimate collaborations with actors to excavate the truth behind silence.'
  ],
  artisticPhilosophy: {
    quote:
      'Directing is an act of ethical contemplation. A camera should not violate its characters; it must breathe beside them, honoring silence as deeply as spoken dialogue.',
    tenets: [
      {
        title: 'Empathetic Humanism',
        description:
          'Resisting simplistic victim tropes to reveal the complex agency, courage, and dignity of everyday people confronting structural constraints.'
      },
      {
        title: 'Acoustic & Spatial Realism',
        description:
          'Prioritizing natural atmospheric sounds, diegetic resonance, and authentic environmental framing over artificial emotional manipulation.'
      },
      {
        title: 'The Poetics of Restraint',
        description:
          'Trusting the intelligence of the viewer through measured pacing, visual subtext, and the unspoken weight carried in character glances.'
      }
    ]
  },
  metrics: [
    { value: '15+', label: 'International & National Trophies' },
    { value: '12', label: 'National Sarasaviya Awards (Single Feature Record)' },
    { value: '30+', label: 'Global Festival Screenings & Retrospectives' },
    { value: '20+', label: 'Years of Directorial Mastery' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'sulan-kirilli',
    title: 'Sulan Kirilli',
    originalTitle: 'සුළං කිරිල්ලී (Wind Bird)',
    year: '2002',
    category: 'Feature Film',
    format: '35mm Motion Picture Film · Color',
    duration: '118 Minutes',
    aspectRatio: '1.85:1 Flat',
    role: 'Director, Screenwriter & Producer',
    logline:
      'An unmarried garment factory worker in Sri Lanka confronts hypocritical societal codes and moral ostracism with quiet, unbending resilience.',
    synopsis:
      'Centering on Rathi, an industrious young woman from a rural village employed at an export garment factory outside Colombo, "Sulan Kirilli" departs boldly from customary melodrama. When an unexpected pregnancy with a married soldier leaves her isolated, she refuses easy self-pity. With forensic sensitivity and exquisite naturalistic rhythm, the film chronicles her journey through clandestine clinics, societal judgement, and inner spiritual independence.',
    directorStatement:
      'With Sulan Kirilli, my aim was to dismantle the sentimental victim tropes that so frequently entrap South Asian portrayals of working-class women. I wanted every frame to possess the weight of lived breath, anchored in the unspoken dignity of ordinary lives.',
    primaryImage: '/src/assets/images/film_still_sulan_kirilli_1792332834757.jpg',
    galleryImages: [
      '/src/assets/images/film_still_sulan_kirilli_1792332834757.jpg',
      '/src/assets/images/hero_director_portrait_1792332832590.jpg',
      '/src/assets/images/film_still_cinematic_landscape_1792332834603.jpg'
    ],
    keyCredits: [
      { role: 'Director & Screenplay', name: 'Enokaa Sathyangani Keerthinanda' },
      { role: 'Cinematography', name: 'Palitha Perera' },
      { role: 'Editor', name: 'Ravindra Guruge' },
      { role: 'Music Score', name: 'Pradeep Ratnayake' },
      { role: 'Lead Cast', name: 'Damitha Abeyratne (Rathi)' },
      { role: 'Supporting Cast', name: 'Linton Semage, Jayani Senanayake' },
      { role: 'Art Direction', name: 'Sunil Wijeratne' },
      { role: 'Sound Re-recording', name: 'Lionel Gunaratne' }
    ],
    awards: [
      'Grand Prix for Best Film — Dhaka International Film Festival',
      'Best Actress (Damitha Abeyratne) — Dhaka International Film Festival',
      '12 Sarasaviya National Film Awards (Best Director, Best Screenplay, Best Film)',
      'SIGNIS / OCIC Awards for Best Film & Best Direction',
      'Presidential Film Awards — Best Director'
    ],
    festivals: [
      'Fribourg International Film Festival (Switzerland)',
      'Singapore International Film Festival (Silver Screen Nominee)',
      'Cinemanila International Film Festival',
      'Gothenburg Film Festival',
      'Montreal World Film Festival',
      'Dhaka International Film Festival'
    ],
    quote: {
      text: 'A tour de force of narrative economy and emotional authenticity, setting a bold new benchmark for modern South Asian realist cinema.',
      source: 'International Film Critics Bulletin'
    },
    featured: true
  },
  {
    id: 'the-rain-song',
    title: 'The Rain Song',
    originalTitle: 'වැහි සිහින (Wahi Sihina)',
    year: '2024–2025',
    category: 'In Development',
    format: 'Arri Alexa Mini LF / Anamorphic · Color',
    duration: '110 Minutes (Estimated)',
    aspectRatio: '2.39:1 CinemaScope',
    role: 'Director & Screenwriter',
    logline:
      'During an anomalous monsoon in the central highlands, three generations of women confront colonial land inheritances and impending ecological collapse.',
    synopsis:
      'Isolated in a decaying tea estate bungalow surrounded by mist and torrential downpours, a matriarch, her estranged daughter, and an activist granddaughter find their historical pact unraveling. As mudslides threaten the mountain ridge, the physical isolation mirrors long-suppressed family secrets and the economic precarity of the tea pickers whose labor upholds the estate.',
    directorStatement:
      'Rain in cinema is too often reduced to mere aesthetic flourish. In this film, rain is an acoustic, tactile, and psychological pressure cooker—an elemental force that washes away human posturing to reveal what remains.',
    primaryImage: '/src/assets/images/film_still_cinematic_landscape_1792332834603.jpg',
    galleryImages: [
      '/src/assets/images/film_still_cinematic_landscape_1792332834603.jpg',
      '/src/assets/images/hero_director_portrait_1792332832590.jpg'
    ],
    keyCredits: [
      { role: 'Director & Screenplay', name: 'Enokaa Sathyangani Keerthinanda' },
      { role: 'Cinematography Concept', name: 'Anamorphic 35mm Format' },
      { role: 'Current Stage', name: 'International Co-Production & Script Lab' }
    ],
    awards: ['Selected for International Co-Production & Co-Financing Forums'],
    festivals: ['Project in Active Development'],
    quote: {
      text: 'An evocative eco-familial chamber piece that turns atmospheric pressure into psychological suspense.',
      source: 'Script Pitch Notes'
    },
    featured: true
  },
  {
    id: 'the-silent-weaver',
    title: 'The Silent Weaver',
    originalTitle: 'දියසෙන (Diyasene)',
    year: '2016',
    category: 'Documentary',
    format: 'Digital Cinema 4K · Color',
    duration: '54 Minutes',
    aspectRatio: '1.78:1 HD',
    role: 'Director, Researcher & Producer',
    logline:
      'An intimate meditation on rural matriarchs preserving endangered handloom textile traditions in the face of mechanized consumerism.',
    synopsis:
      'Filmed over two seasons across remote artisanal hamlets in Sri Lanka, "The Silent Weaver" documents the intimate daily rhythm of traditional women weavers. Through long observational sequences, tactile close-ups, and natural ambient recordings, the documentary elevates ancestral knowledge into an enduring visual poem.',
    directorStatement:
      'Documentary cinema is an exercise in patient listening. The filmmaker must surrender the urge to judge or explain, allowing the rhythmic clack of the wooden loom to set the tempo of the narrative.',
    primaryImage: '/src/assets/images/film_still_documentary_1792332834848.jpg',
    galleryImages: [
      '/src/assets/images/film_still_documentary_1792332834848.jpg',
      '/src/assets/images/film_still_sulan_kirilli_1792332834757.jpg'
    ],
    keyCredits: [
      { role: 'Director & Producer', name: 'Enokaa Sathyangani Keerthinanda' },
      { role: 'Cinematography', name: 'Channa Deshapriya' },
      { role: 'Sound Recording', name: 'Kalinga Gihan Perera' },
      { role: 'Research Consultant', name: 'Dr. Indrani Fernando' }
    ],
    awards: [
      'Asian Documentary Heritage Citation',
      'National Tele-Cinema Special Jury Recognition for Cultural Preservation'
    ],
    festivals: [
      'Mumbai International Film Festival Showcase',
      'Kathmandu International Mountain Film Festival'
    ],
    quote: {
      text: 'Sensory cinema at its purest—where every warp and weft vibrates with living history.',
      source: 'Documentary Film Quarterly'
    },
    featured: false
  },
  {
    id: 'sandalu-thalen-eha',
    title: 'Sandalu Thalen Eha',
    originalTitle: 'සඳළු තලෙන් එහා (Beyond the Balcony)',
    year: '2008',
    category: 'Tele-Drama & Series',
    format: 'Broadcast Tele-Feature Series',
    duration: '18 Episodes · 24 min each',
    aspectRatio: '16:9 Widescreen',
    role: 'Director & Screenwriter',
    logline:
      'A psychological dissection of urban domestic isolation, middle-class aspiration, and female identity in modernizing Colombo.',
    synopsis:
      'Commissioned for television, Keerthinanda subverted prime-time conventions by utilizing cinematic staging, low-key lighting, and long uninterrupted dialogue takes. The series dissects the subtle claustrophobia of apartment life and the silent sacrifices demanded of modern women.',
    directorStatement:
      'I refused to treat the television screen as disposable content. We approached every single scene with the architectural discipline and optical precision of a theatrical feature.',
    primaryImage: '/src/assets/images/hero_director_portrait_1792332832590.jpg',
    galleryImages: [
      '/src/assets/images/hero_director_portrait_1792332832590.jpg',
      '/src/assets/images/film_still_sulan_kirilli_1792332834757.jpg'
    ],
    keyCredits: [
      { role: 'Director & Screenwriter', name: 'Enokaa Sathyangani Keerthinanda' },
      { role: 'Cast', name: 'Chandani Seneviratne, Saumya Liyanage, Kaushalya Fernando' },
      { role: 'Production Company', name: 'Tele-Art Independent Productions' }
    ],
    awards: [
      'Raigam Tele’es Award for Best Direction',
      'Sumathi Awards Nomination for Best Script'
    ],
    festivals: ['Broadcast Retrospectives across South Asian Television Archives'],
    featured: false
  }
];

export const STILLS_GALLERY: StillImage[] = [
  {
    id: 'still-01',
    title: 'The Windswept Solitude',
    project: 'Sulan Kirilli (Wind Bird)',
    aspectRatio: '2.39:1 Anamorphic',
    year: '2002',
    captureNote: 'Natural overcast monsoon light, 35mm Eastmancolor, Arriflex 535B',
    src: '/src/assets/images/film_still_sulan_kirilli_1792332834757.jpg'
  },
  {
    id: 'still-02',
    title: 'The Golden Loom Sequence',
    project: 'The Silent Weaver',
    aspectRatio: '4:3 Academy',
    year: '2016',
    captureNote: 'Directional dawn sunlight through stone aperture, Zeiss Supreme Prime',
    src: '/src/assets/images/film_still_documentary_1792332834848.jpg'
  },
  {
    id: 'still-03',
    title: 'Highland Ridge at Dusk',
    project: 'The Rain Song',
    aspectRatio: '2.39:1 Anamorphic',
    year: '2024',
    captureNote: 'Atmospheric mist and twilight ambient grade, Master Anamorphic 50mm',
    src: '/src/assets/images/film_still_cinematic_landscape_1792332834603.jpg'
  },
  {
    id: 'still-04',
    title: 'Directorial Frame Study',
    project: 'Soundstage Production Archive',
    aspectRatio: '16:9 Widescreen',
    year: 'Production Still',
    captureNote: 'Low-key studio key light, monochrome medium format cinema record',
    src: '/src/assets/images/hero_director_portrait_1792332832590.jpg'
  }
];

export const TIMELINE_AWARDS: AwardItem[] = [
  {
    year: '2004',
    festival: 'Dhaka International Film Festival',
    category: 'Grand Prix (Best Film of the Festival)',
    work: 'Sulan Kirilli (Wind Bird)',
    location: 'Dhaka, Bangladesh'
  },
  {
    year: '2004',
    festival: 'Dhaka International Film Festival',
    category: 'Best Actress (Damitha Abeyratne)',
    work: 'Sulan Kirilli (Wind Bird)',
    location: 'Dhaka, Bangladesh'
  },
  {
    year: '2004',
    festival: 'Sarasaviya National Film Awards',
    category: 'Best Director & Best Film (12 Major Trophy Sweep)',
    work: 'Sulan Kirilli (Wind Bird)',
    location: 'Colombo, Sri Lanka'
  },
  {
    year: '2003',
    festival: 'Fribourg International Film Festival',
    category: 'Official Feature Competition Selection',
    work: 'Sulan Kirilli (Wind Bird)',
    location: 'Fribourg, Switzerland'
  },
  {
    year: '2003',
    festival: 'Singapore International Film Festival',
    category: 'Silver Screen Award Best Asian Feature (Nominee)',
    work: 'Sulan Kirilli (Wind Bird)',
    location: 'Singapore'
  },
  {
    year: '2004',
    festival: 'SIGNIS / OCIC Cinema Awards',
    category: 'Special Jury Award for Human Rights & Artistic Courage',
    work: 'Sulan Kirilli (Wind Bird)',
    location: 'International Citation'
  },
  {
    year: '2008',
    festival: 'Raigam Tele’es Awards',
    category: 'Best Directorial Vision & Scriptwriting',
    work: 'Sandalu Thalen Eha',
    location: 'Colombo, Sri Lanka'
  }
];
