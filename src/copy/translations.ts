export type Lang = 'taglish' | 'english';

export const t = {
  taglish: {
    navbar: {
      whatsapp: 'WhatsApp Us Now',
      toggle: 'English',
    },
    hero: {
      badge: '✓ DMW-Licensed · Zero Placement Fee',
      headline1: 'Mag-trabaho abroad.',
      headline2: 'Libre. Ligtas. Legit.',
      sub: 'Saudi Arabia · UAE at higit pa. Licensed ng DMW — opisyal at ligal.',
      salaryLabel: 'bawat buwan',
      salaryNote: 'Pwedeng tumaas pagkatapos ng kontrata',
      cta: '💬 Mag-apply sa WhatsApp — Libre!',
      trustLine: 'Libo na kaming nakatulong. Walang bayad. Walang panganib.',
    },
    salary: {
      heading: 'Magkano ang sweldo mo?',
      sa: {
        country: 'Saudi Arabia',
        per: '/ buwan',
        note: '↑ Tumaas pagkatapos ng kontrata',
        badge: 'Pinaka-maraming slot',
      },
      uae: {
        country: 'UAE / Dubai',
        per: '/ buwan',
        note: '↑ Tumaas pagkatapos ng kontrata',
      },
    },
    trust: {
      heading: 'Bakit MaidCares?',
      items: [
        { icon: '🛂', title: "Pasaporte, sa'yo palagi", desc: 'Hindi kukuhanin ng employer' },
        { icon: '💰', title: 'Zero placement fee', desc: 'Libre mag-apply — walang bayad kahit ano' },
        { icon: '🏠', title: 'Sariling kwarto + pagkain', desc: 'Kasama sa kontrata, garantisado' },
        { icon: '🛡️', title: 'Licensed ng DMW', desc: 'Opisyal na ahensya — legit at ligal' },
        { icon: '👩‍⚕️', title: 'May welfare officer ka', desc: 'Lagi kang may kakausapin kung may problema' },
        { icon: '📜', title: 'TESDA-aligned na training', desc: 'Makakakuha ka ng opisyal na sertipiko' },
      ],
    },
    howItWorks: {
      heading: 'Paano mag-apply?',
      steps: [
        { icon: '💬', title: 'I-message kami', desc: 'Mag-WhatsApp lang — libre, walang form' },
        { icon: '📞', title: 'Makipag-usap', desc: 'Tatawag ang aming coordinator — Tagalog' },
        { icon: '✈️', title: 'Umalis na!', desc: 'Aayusin namin lahat — visa, kontrata, papeles' },
      ],
    },
    welfare: {
      eyebrow: "PARA SA'YONG KALIGTASAN",
      heading: 'Hindi ka nag-iisa dito.',
      body: 'Bawat manggagawa ay may nakatalagang welfare officer — isang taong maaari mong tawagan anumang oras. Mula sa araw na umalis ka hanggang sa umuwi ka, nandito siya para sa iyo.',
      bullets: [
        'Lingguhanong check-in — siguruhing okay ka',
        'SOS button — emergency, tutulungan ka agad',
        'Libre — kasama sa lahat ng deployment',
      ],
      cta: 'Alamin pa — Mag-WhatsApp',
    },
    certification: {
      heading: 'Lumago habang nagtatrabaho.',
      sub: 'Lahat ng aming workers ay binibigyan ng libreng training at sertipiko — kinikilala ng TESDA at ng mga employer sa Gulf.',
      cards: [
        {
          icon: '👶',
          title: 'Childcare Specialist',
          desc: 'Sertipiko para sa pag-aalaga ng bata',
          benefit: '↑ AED 300–400 mas mataas ang sweldo',
        },
        {
          icon: '👴',
          title: 'Elderly Care Specialist',
          desc: 'Sertipiko para sa pag-aalaga ng matatanda',
          benefit: '↑ SAR 200–300 mas mataas ang sweldo',
        },
        {
          icon: '🏠',
          title: 'Household Management',
          desc: 'Foundation certificate para sa lahat',
          benefit: 'Standard sa lahat ng deployment',
        },
      ],
      note: 'Ang sertipiko ay kinikilala ng mga employer sa Gulf at UAE.',
    },
    faq: {
      heading: 'Mga tanong? Narito ang sagot.',
      items: [
        {
          q: 'Libre ba talaga? Walang bayad talaga?',
          a: 'Oo, walang bayad kahit ano. Zero placement fee. Ang employer ang nagbabayad — ikaw ay libre.',
        },
        {
          q: 'Mananatili ba ang pasaporte ko?',
          a: 'Oo. Sa ilalim ng batas ng UAE at Saudi Arabia, ikaw ang may hawak ng iyong pasaporte. Hindi ito maaaring kunin ng employer.',
        },
        {
          q: 'Sino ang welfare officer?',
          a: 'Ito ay isang empleyado ng MaidCares — hindi employer, hindi ahente. Siya ang iyong kakausapin kung may problema, emergency, o katanungan.',
        },
        {
          q: 'Legit ba kayo? Paano ko malalaman?',
          a: 'Kami ay opisyal na lisensyado ng DMW — ang Department of Migrant Workers ng Pilipinas. Maaari mong i-verify ang aming lisensya sa opisyal na DMW website.',
        },
        {
          q: 'Ilang taon ang kontrata?',
          a: '2 taon ang standard na kontrata. May option na i-renew — at mas mataas na sweldo pagkatapos.',
        },
        {
          q: 'Ano ang mga kailangan para mag-apply?',
          a: 'Filipino national, edad 23–45, may pasaporte o pwede naming tulungan kang kumuha. I-message lang kami para sa kumpletong listahan.',
        },
      ],
    },
    finalCta: {
      heading: 'Handa ka na ba?',
      sub: 'I-message kami ngayon — libre, walang obligasyon.',
      cta: '💬 Mag-apply sa WhatsApp — Libre!',
      note: 'Sumasagot kami sa loob ng ilang minuto · Tagalog ang gamit',
    },
    stickyBar: '💬 Mag-apply — Libre!',
  },
  english: {
    navbar: {
      whatsapp: 'WhatsApp Us Now',
      toggle: 'Filipino',
    },
    hero: {
      badge: '✓ DMW-Licensed · Zero Placement Fee',
      headline1: 'Work abroad.',
      headline2: 'Free. Safe. Legitimate.',
      sub: 'Saudi Arabia · UAE and more. Licensed by DMW — official and legal.',
      salaryLabel: 'per month',
      salaryNote: 'Salary can increase after your first contract',
      cta: '💬 Apply on WhatsApp — Free!',
      trustLine: 'Thousands helped. No fees. No risk.',
    },
    salary: {
      heading: 'How much will you earn?',
      sa: {
        country: 'Saudi Arabia',
        per: '/ month',
        note: '↑ Increases after your contract',
        badge: 'Most available slots',
      },
      uae: {
        country: 'UAE / Dubai',
        per: '/ month',
        note: '↑ Increases after your contract',
      },
    },
    trust: {
      heading: 'Why MaidCares?',
      items: [
        { icon: '🛂', title: 'Your passport stays with you', desc: 'Your employer cannot take it' },
        { icon: '💰', title: 'Zero placement fee', desc: 'Free to apply — no charges whatsoever' },
        { icon: '🏠', title: 'Private room + meals included', desc: 'Guaranteed in your contract' },
        { icon: '🛡️', title: 'DMW Licensed', desc: 'Official agency — legal and legitimate' },
        { icon: '👩‍⚕️', title: 'You have a welfare officer', desc: 'Someone to call whenever you need help' },
        { icon: '📜', title: 'TESDA-aligned training', desc: 'You will receive an official certificate' },
      ],
    },
    howItWorks: {
      heading: 'How do I apply?',
      steps: [
        { icon: '💬', title: 'Message us', desc: 'WhatsApp only — free, no forms to fill' },
        { icon: '📞', title: 'Talk to our team', desc: 'Our coordinator will call you — in English' },
        { icon: '✈️', title: "You're on your way!", desc: 'We handle everything — visa, contract, documents' },
      ],
    },
    welfare: {
      eyebrow: 'YOUR SAFETY COMES FIRST',
      heading: 'You are never alone.',
      body: 'Every worker is assigned a dedicated welfare officer — a real person you can call at any time. From the day you leave until the day you return, they are there for you.',
      bullets: [
        'Weekly check-in — making sure you are okay',
        'SOS button — emergency help within hours',
        'Free — included with every deployment',
      ],
      cta: 'Learn more — WhatsApp Us',
    },
    certification: {
      heading: 'Grow while you work.',
      sub: 'Every worker receives free training and an official certificate — aligned with TESDA standards and recognized by Gulf employers.',
      cards: [
        {
          icon: '👶',
          title: 'Childcare Specialist',
          desc: 'Certificate for professional childcare',
          benefit: '↑ AED 300–400 higher salary',
        },
        {
          icon: '👴',
          title: 'Elderly Care Specialist',
          desc: 'Certificate for professional elder care',
          benefit: '↑ SAR 200–300 higher salary',
        },
        {
          icon: '🏠',
          title: 'Household Management',
          desc: 'Foundation certificate for all workers',
          benefit: 'Included in every deployment',
        },
      ],
      note: 'Certificates are recognized by Gulf and UAE employers.',
    },
    faq: {
      heading: 'Questions? We have answers.',
      items: [
        {
          q: 'Is it really free? No hidden fees?',
          a: 'Yes, completely free. Zero placement fee. Your employer pays — you pay nothing.',
        },
        {
          q: 'Will I keep my passport?',
          a: 'Yes. Under UAE and Saudi Arabian law, your passport belongs to you. Your employer cannot take it.',
        },
        {
          q: 'Who is the welfare officer?',
          a: 'A MaidCares employee — not your employer, not an agent. They are your point of contact for any problem, emergency, or question.',
        },
        {
          q: 'How do I know you are legitimate?',
          a: 'We are officially licensed by the DMW — the Philippine Department of Migrant Workers. You can verify our license on the official DMW website.',
        },
        {
          q: 'How long is the contract?',
          a: 'Standard contracts are 2 years, with the option to renew at a higher salary.',
        },
        {
          q: 'What do I need to apply?',
          a: 'Filipino national, age 23–45, with a passport (or we can help you get one). Message us for the complete list.',
        },
      ],
    },
    finalCta: {
      heading: 'Ready to apply?',
      sub: 'Message us now — free, no obligation.',
      cta: '💬 Apply on WhatsApp — Free!',
      note: 'We reply within minutes · English and Filipino',
    },
    stickyBar: '💬 Apply Now — Free!',
  },
} as const;
