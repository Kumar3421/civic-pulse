export interface TimelineItem {
  id: number;
  title: string;
  period: string;
  description: string;
  details: string[];
}

export interface LiveData {
  name: string;
  totalSeats: number;
  turnout: string;
  leads: Record<string, number>;
}

export interface Minister {
  name: string;
  role: string;
  dept: string;
  image: string;
  party: string;
  partyFlag: string;
}

export interface StateLeader {
  name: string;
  region: string;
  image: string;
  party: string;
  partyFlag: string;
  deputies?: { name: string; image: string; }[];
}

export interface CountryData {
  name: string;
  flag: string;
  votingSite: string;
  languages: Record<string, {
    label: string;
    timeline: TimelineItem[];
    leadership: {
      title: string;
      president?: Minister;
      pm: Minister;
      ministers: Minister[];
      stateLeadersTitle: string;
      stateLeaders: StateLeader[];
    };
    faq: Record<string, string>;
    partyKnowledge: Record<string, { desc: string; ideology: string; founded: string; }>;
    ui: Record<string, string>;
    reports: {
      tag: string;
      title: string;
      content: string;
      meta: string;
    }[];
    voterJourney: {
      id: number;
      title: string;
      desc: string;
      icon: string;
    }[];
    pollChecklist?: {
      title: string;
      items: string[];
    };
    politicalKnowledge?: Record<string, string>;
  }>;
  live: Record<string, LiveData>;
}

export const countryData: Record<string, CountryData> = {
  india: {
    name: "India",
    flag: "🇮🇳",
    votingSite: "https://voters.eci.gov.in",
    languages: {
      en: {
        label: "English",
        timeline: [
          { id: 1, title: "Announcement of Dates", period: "Phase 1", description: "Election Commission announces schedule.", details: ["Model Code of Conduct", "EVM setup"] },
          { id: 2, title: "Nomination Process", period: "Phase 2", description: "Candidates file their nominations.", details: ["Scrutiny of papers", "Withdrawal period"] },
          { id: 3, title: "Polling Days", period: "Phase 3", description: "Voters cast their votes across states.", details: ["VVPAT verification", "Security deployment"] }
        ],
        leadership: {
          title: "Governance & Leadership (2026)",
          president: {
            name: "Droupadi Murmu", role: "President", dept: "Head of State",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/President_of_India_Droupadi_Murmu_official_portrait_%28cropped%29.jpg/330px-President_of_India_Droupadi_Murmu_official_portrait_%28cropped%29.jpg",
            party: "President of India", partyFlag: "🇮🇳"
          },
          pm: { 
            name: "Narendra Modi", role: "Prime Minister", dept: "Head of Government", 
            image: "/narendra_modi.webp", 
            party: "Bharatiya Janata Party", partyFlag: "🟠" 
          },
          ministers: [
            { name: "Amit Shah", role: "Home Minister", dept: "Ministry of Home Affairs", image: "/amit_shah.webp", party: "Bharatiya Janata Party", partyFlag: "🟠" },
            { name: "Rajnath Singh", role: "Defence Minister", dept: "Ministry of Defence", image: "/rajnath_singh.webp", party: "Bharatiya Janata Party", partyFlag: "🟠" },
            { name: "Nirmala Sitharaman", role: "Finance Minister", dept: "Ministry of Finance", image: "/nirmala_sitharaman.webp", party: "Bharatiya Janata Party", partyFlag: "🟠" },
            { name: "S. Jaishankar", role: "External Affairs", dept: "Ministry of External Affairs", image: "/jaishankar.webp", party: "Bharatiya Janata Party", partyFlag: "🟠" }
          ],
          stateLeadersTitle: "State Chief Ministers",
          stateLeaders: [
            { name: "N. Chandrababu Naidu", region: "Andhra Pradesh", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/The_portrait_of_CM_Shri_Nara_Chandrababu_Naidu.jpg/330px-The_portrait_of_CM_Shri_Nara_Chandrababu_Naidu.jpg", party: "Telugu Desam Party", partyFlag: "🚲" , deputies: [{"name":"Konidala Pawan Kalyan","image":"https://upload.wikimedia.org/wikipedia/commons/1/16/Shri_Konidela_Pawan_Kalyan.jpg"}] },
            { name: "Pema Khandu", region: "Arunachal Pradesh", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Pema_Khandu_in_2018.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠" , deputies: [{"name":"Chowna Mein","image":"https://upload.wikimedia.org/wikipedia/commons/8/8e/Chowna_Mein.jpg"}] },
            { name: "Himanta Biswa Sarma", region: "Assam", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Himanta_Biswa_Sarma_in_2025.jpg/330px-Himanta_Biswa_Sarma_in_2025.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠"  },
            { name: "Samrat Choudhary", region: "Bihar", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Chief_Minister_Samrat_Chaudhary%28cropped%29.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠" , deputies: [{"name":"Bijendra Prasad Yadav","image":"https://upload.wikimedia.org/wikipedia/commons/6/65/Bijendra_Yadav.jpg"},{"name":"Vijay Kumar Chaudhary","image":"https://upload.wikimedia.org/wikipedia/commons/a/ad/Vijay_Kumar_Chaudhary_2022.jpg"}] },
            { name: "Vishnu Deo Sai", region: "Chhattisgarh", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Vishnu_Deo_Sai%2C_Chief_Minister_of_Chhattisgarh.jpg/330px-Vishnu_Deo_Sai%2C_Chief_Minister_of_Chhattisgarh.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠" , deputies: [{"name":"Arun Sao","image":"https://upload.wikimedia.org/wikipedia/commons/b/b3/Arun_Sao_BJP.jpg"},{"name":"Vijay Sharma","image":"https://upload.wikimedia.org/wikipedia/commons/8/86/Vijay_Shekhar_Sharma_%282019%29.jpg"}] },
            { name: "Rekha Gupta", region: "Delhi (NCT)", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chief_Minister_of_Delhi%2C_Smt._Rekha_Gupta.jpg/330px-Chief_Minister_of_Delhi%2C_Smt._Rekha_Gupta.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠" },
            { name: "Pramod Sawant", region: "Goa", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pramod_Sawant_at_the_inauguration_of_the_Chhatrapati_Shivaji_Maharaj_Chair_in_Goa_University_%28cropped%29.jpg/330px-Pramod_Sawant_at_the_inauguration_of_the_Chhatrapati_Shivaji_Maharaj_Chair_in_Goa_University_%28cropped%29.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠"  },
            { name: "Bhupendrabhai Patel", region: "Gujarat", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chief_Minister_of_Gujarat%2C_Shri_Bhupendra_Patel_%282%29.jpg/330px-Chief_Minister_of_Gujarat%2C_Shri_Bhupendra_Patel_%282%29.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠" , deputies: [{"name":"Harsh Sanghavi","image":"https://upload.wikimedia.org/wikipedia/commons/2/28/Harsh_Sanghavi.jpg"}] },
            { name: "Nayab Singh Saini", region: "Haryana", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nayab_Singh_Saini.jpg/330px-Nayab_Singh_Saini.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠"  },
            { name: "Sukhvinder Singh Sukhu", region: "Himachal Pradesh", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sukhvinder_Singh_Sukhu.jpg/330px-Sukhvinder_Singh_Sukhu.jpg", party: "Indian National Congress", partyFlag: "✋" , deputies: [{"name":"Mukesh Agnihotri","image":"https://upload.wikimedia.org/wikipedia/commons/4/47/Mukesh_Agnihotri_%28cropped%29.jpg"}] },
            { name: "Omar Abdullah", region: "Jammu and Kashmir", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Omar_Abdullah%2C_Chief_Minister_of_Jammu_%26_Kashmir.jpg/330px-Omar_Abdullah%2C_Chief_Minister_of_Jammu_%26_Kashmir.jpg", party: "Jammu & Kashmir National Conference", partyFlag: "🏹" , deputies: [{"name":"Surinder Kumar Choudhary","image":"https://upload.wikimedia.org/wikipedia/commons/a/aa/Surinder_Kumar_Choudhary.jpg"}] },
            { name: "Hemant Soren", region: "Jharkhand", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hemant_Soren_01.jpg/330px-Hemant_Soren_01.jpg", party: "Jharkhand Mukti Morcha", partyFlag: "🏹"  },
            { name: "Siddaramaiah", region: "Karnataka", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Chief_Minister_of_Karnataka_Siddaramaiah_visits_PMO.jpg/330px-The_Chief_Minister_of_Karnataka_Siddaramaiah_visits_PMO.jpg", party: "Indian National Congress", partyFlag: "✋" , deputies: [{"name":"D. K. Shivakumar","image":"https://upload.wikimedia.org/wikipedia/commons/3/39/DK_Shivkumar.png"}] },
            { name: "Pinarayi Vijayan", region: "Kerala", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pinarayi_Vijayan_1.jpg/330px-Pinarayi_Vijayan_1.jpg", party: "Communist Party of India (Marxist)", partyFlag: "☭"  },
            { name: "Mohan Yadav", region: "Madhya Pradesh", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mohan_Yadav%2C_Chief_Minister_of_Madhya_Pradesh.jpg/330px-Mohan_Yadav%2C_Chief_Minister_of_Madhya_Pradesh.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠" , deputies: [{"name":"Rajendra Shukla","image":"https://upload.wikimedia.org/wikipedia/commons/4/45/Rajendra_Shukla_in_Rewa_-_March_2026.jpg"},{"name":"Jagdish Devda","image":"https://upload.wikimedia.org/wikipedia/commons/d/d2/DCM_Jagdish_Dewda.jpeg"}] },
            { name: "Uddhav Thackeray", region: "Maharashtra", image: "/uddhav_thackeray.webp", party: "Shiv Sena (UBT)", partyFlag: "🏹", deputies: [{"name":"Devendra Fadnavis","image":"https://upload.wikimedia.org/wikipedia/commons/e/ee/Devendra_Fadnavis_2022.jpg"},{"name":"Ajit Pawar","image":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Shri_Ajit_Anantrao_Pawar.jpg"}] },
            { name: "Yumnam Khemchand Singh", region: "Manipur", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_Chief_Minister_of_Manipur%2C_Shri_Biren_Singh_calling_on_the_Vice_President%2C_Shri_M._Venkaiah_Naidu%2C_in_New_Delhi_on_September_06%2C_2017_%28cropped%29.jpg/330px-The_Chief_Minister_of_Manipur%2C_Shri_Biren_Singh_calling_on_the_Vice_President%2C_Shri_M._Venkaiah_Naidu%2C_in_New_Delhi_on_September_06%2C_2017_%28cropped%29.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠", deputies: [{"name":"Nemcha Kipgen","image":"https://assembly.mn.gov.in/storage/members/1739857904.jpg"},{"name":"Losii Dikho","image":"https://assembly.mn.gov.in/storage/members/1739856557.jpg"}] },
            { name: "Conrad Sangma", region: "Meghalaya", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/The_Chief_Minister_of_Meghalaya%2C_Shri_Conrad_Sangma.JPG/330px-The_Chief_Minister_of_Meghalaya%2C_Shri_Conrad_Sangma.JPG", party: "National People's Party", partyFlag: "📖" , deputies: [{"name":"Prestone Tynsong","image":"https://upload.wikimedia.org/wikipedia/commons/f/fe/A_delegation_from_North_Eastern_States_led_by_the_Minister_General_Administration_Home_%28Civil_Defence_And_Home_Guards%29_Public_Health_Engineering_Relief_And_Rehabilitation_%28cropped%29.jpg"},{"name":"Sniawbhalang Dhar","image":"https://upload.wikimedia.org/wikipedia/commons/0/06/DCM_Sniawbhalang_Dhar.jpg"}] },
            { name: "Lalduhoma", region: "Mizoram", image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Lalduhawma1.jpg", party: "Zoram People's Movement", partyFlag: "🏹"  },
            { name: "Neiphiu Rio", region: "Nagaland", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/NeiphiuRio.jpg", party: "Nationalist Democratic Progressive Party", partyFlag: "🌏" , deputies: [{"name":"Yanthungo Patton","image":"https://upload.wikimedia.org/wikipedia/commons/f/ff/The_Nagaland_Home_Minister%2C_Shri_Yanthungo_Patton_meeting_the_Minister_of_State_for_Home_Affairs%2C_Shri_Hansraj_Gangaram_Ahir%2C_in_New_Delhi_on_November_09%2C_2016_%28cropped%29.jpg"},{"name":"T. R. Zeliang","image":"https://upload.wikimedia.org/wikipedia/commons/8/83/T._R._Zeliang_%28cropped%29.jpg"}] },
            { name: "Mohan Charan Majhi", region: "Odisha", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/%E0%AC%B6%E0%AD%8D%E0%AC%B0%E0%AD%80_%E0%AC%AE%E0%AD%8B%E0%AC%B9%E0%AC%A8_%E0%AC%9A%E0%AC%B0%E0%AC%A3_%E0%AC%AE%E0%AC%BE%E0%AC%9D%E0%AD%80.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠" , deputies: [{"name":"Kanak Vardhan Singh Deo","image":"https://upload.wikimedia.org/wikipedia/commons/1/13/Kanak_Vardhan_Singh_Deo_2024.jpg"},{"name":"Pravati Parida","image":"https://upload.wikimedia.org/wikipedia/commons/7/7a/Pravati_Parida_in_2025.jpg"}] },
            { name: "N. Rangaswamy", region: "Puducherry", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/N_Rangaswamy.jpg/330px-N_Rangaswamy.jpg", party: "All India N.R. Congress", partyFlag: "🏺"  },
            { name: "Bhagwant Mann", region: "Punjab", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Bhagwant_Mann.png", party: "Aam Aadmi Party", partyFlag: "🧹"  },
            { name: "Bhajan Lal Sharma", region: "Rajasthan", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bhajan_Lal_Sharma_and_deputies_meets_VP_of_India.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠", deputies: [{"name":"Diya Kumari","image":"https://upload.wikimedia.org/wikipedia/commons/1/1d/The_Deputy_Chief_Minister_of_Rajasthan%2C_Shrimathi_Diya_Kumari_%26_her_colleague_meet_VP_of_India_with_their_head.jpg"},{"name":"Prem Chand Bairwa","image":"https://upload.wikimedia.org/wikipedia/commons/d/dc/Prem_Chand_Bairwa_%28cropped%29.jpg"}] },
            { name: "Prem Singh Tamang", region: "Sikkim", image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Prem_Singh_Tamang%2C_Chief_Minister_of_Sikkim.jpg", party: "Sikkim Krantikari Morcha", partyFlag: "☀️"  },
            { name: "M. K. Stalin", region: "Tamil Nadu", image: "/mk_stalin.webp", party: "Dravida Munnetra Kazhagam", partyFlag: "☀️" , deputies: [{"name":"Udhayanidhi Stalin","image":"https://upload.wikimedia.org/wikipedia/commons/0/07/Udhaya.jpg"}] },
            { name: "A. Revanth Reddy", region: "Telangana", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Portrait_of_Telangana_CM_Revanth_Reddy.png/330px-Portrait_of_Telangana_CM_Revanth_Reddy.png", party: "Indian National Congress", partyFlag: "✋" , deputies: [{"name":"Mallu Bhatti Vikramarka","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Portrait_of_Telangana_Deputy_CM_Bhatti_Vikramarka_Mallu%2815_June_2025%29.jpg/330px-Portrait_of_Telangana_Deputy_CM_Bhatti_Vikramarka_Mallu%2815_June_2025%29.jpg"}] },
            { name: "Manik Saha", region: "Tripura", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Manik_Saha_Invitation_for_HWC_2023.jpg/330px-Manik_Saha_Invitation_for_HWC_2023.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠"  },
            { name: "Yogi Adityanath", region: "Uttar Pradesh", image: "/yogi_adityanath.webp", party: "Bharatiya Janata Party", partyFlag: "🟠", deputies: [{"name":"Keshav Prasad Maurya","image":"https://upload.wikimedia.org/wikipedia/commons/8/80/Shri_Keshav_Prasad_Maurya%2C_MP%2C_Phoolpur_%28U.P%29_and_Shri_Satyapal_Singh_Saini%2C_MP%2C_Sambhal_%28U.P%29_meeting_the_Minister_of_State_for_Culture_%28Independent_Charge%29%2C_Tourism_%28Independent_Charge%29_and_Civil_Aviation_%28cropped%29.jpg"},{"name":"Brajesh Pathak","image":"https://upload.wikimedia.org/wikipedia/commons/f/f5/Brajesh_Pathak.jpg"}] },
            { name: "Pushkar Singh Dhami", region: "Uttarakhand", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pushkar_Singh_Dhami%2C_Chief_Minister_of_Uttarakhand.jpg/330px-Pushkar_Singh_Dhami%2C_Chief_Minister_of_Uttarakhand.jpg", party: "Bharatiya Janata Party", partyFlag: "🟠"  },
            { name: "Mamata Banerjee", region: "West Bengal", image: "/mamata_banerjee.webp", party: "All India Trinamool Congress", partyFlag: "🌿"  }
          ]
        },
        faq: { 
          "voter id": "Apply at voters.eci.gov.in. You need proof of age, residence, and identity. The EPIC (Electors Photo Identity Card) is your primary document.",
          "registration": "Register online via the ECI portal or Voter Helpline App. Form 6 is for new voters, Form 8 is for corrections.",
          "deadlines": "The final date to register is typically 30 days before the polling date in your constituency.",
          "eligibility": "Any Indian citizen aged 18 or above on the qualifying date (Jan 1st, April 1st, July 1st, or Oct 1st) can register.",
          "evm": "Electronic Voting Machines are secure, standalone devices. They consist of a Balloting Unit and a Control Unit, now paired with VVPAT for verification.",
          "nota": "None of the Above (NOTA) allows you to officially register a vote of rejection for all candidates in your constituency.",
          "mcc": "Model Code of Conduct: Guidelines for parties and candidates regarding speeches, polling day, and election manifestos to ensure fair play.",
          "documents": "Besides Voter ID, you can use 12 alternative documents: Aadhaar, MGNREGA Job Card, Passbooks with photo, Health Insurance Smart Card, Driving License, PAN Card, Indian Passport, Pension Document, Service ID Cards, etc.",
          "cvigil": "Use the cVIGIL App to report any violations of the Model Code of Conduct or expenditure limits in real-time.",
          "booth": "Locate your polling booth using the 'Know Your Polling Station' tool on the ECI website or the Voter Helpline App.",
          "voter slip": "The Voter Information Slip is distributed by the ECI before polling. It contains your serial number and booth details but is NOT an identity proof.",
          "aadhaar": "Yes, Aadhaar card is a valid identity document for voting. Ensure your name is in the electoral roll of your constituency.",
          "pan card": "Your PAN Card is accepted as an alternative identity document at the polling booth if you don't have a Voter ID.",
          "passport": "An Indian Passport is a valid document for identity verification at the polling station."
        },
        politicalKnowledge: {
          "lok sabha": "The Lok Sabha (House of the People) is the lower house of India's Parliament. It has 543 elected members. The majority party chooses the Prime Minister.",
          "rajya sabha": "The Rajya Sabha (Council of States) is the upper house. It has a maximum strength of 250 members, representing States and Union Territories.",
          "seats": "Lok Sabha: 543 elected seats. Rajya Sabha: 245 current seats (233 elected, 12 nominated).",
          "president": "The President of India is Smt. Droupadi Murmu, the first tribal woman to hold the office.",
          "vice president": "The Vice President of India is Shri Jagdeep Dhankhar.",
          "aviation minister": "The Union Minister of Civil Aviation is Shri Kinjarapu Ram Mohan Naidu.",
          "home minister": "The Union Minister of Home Affairs is Shri Amit Shah.",
          "finance minister": "The Union Minister of Finance is Smt. Nirmala Sitharaman.",
          "defense minister": "The Union Minister of Defence is Shri Rajnath Singh.",
          "nsa": "The National Security Advisor (NSA) of India is Shri Ajit Doval.",
          "isro chairman": "The Chairman of ISRO is Shri S. Somanath."
        },
        partyKnowledge: {
          "Bharatiya Janata Party": {
                    "desc": "One of the two major political parties in India, known for its right-wing nationalist policies and emphasis on Hindutva. It has been the ruling party at the center since 2014.",
                    "ideology": "Right-wing, Hindutva, Conservatism",
                    "founded": "1980"
          },
          "Indian National Congress": {
                    "desc": "A major political party with deep historical roots in India's independence movement. It generally promotes secularism, social democracy, and a centrist to center-left agenda.",
                    "ideology": "Center to Center-left, Social Democracy, Secularism",
                    "founded": "1885"
          },
          "Telugu Desam Party": {
                    "desc": "A regional political party active primarily in the states of Andhra Pradesh and Telangana, focusing on the welfare and development of Telugu-speaking people.",
                    "ideology": "Regionalism, Populism",
                    "founded": "1982"
          },
          "Jammu & Kashmir National Conference": {
                    "desc": "A prominent regional party in Jammu and Kashmir advocating for state autonomy and the protection of the unique identity of the region.",
                    "ideology": "Regionalism, Autonomy, Secularism",
                    "founded": "1932"
          },
          "Jharkhand Mukti Morcha": {
                    "desc": "A state political party in Jharkhand, formed to demand a separate state for tribals and advocating for the rights of indigenous communities.",
                    "ideology": "Regionalism, Tribal Rights",
                    "founded": "1972"
          },
          "Communist Party of India (Marxist)": {
                    "desc": "A major left-wing communist party in India, having significant presence historically in West Bengal, Kerala, and Tripura.",
                    "ideology": "Left-wing, Marxism-Leninism, Socialism",
                    "founded": "1964"
          },
          "National People's Party": {
                    "desc": "A national-level political party primarily concentrated in Meghalaya and other northeastern states, focusing on tribal and regional development.",
                    "ideology": "Regionalism, Tribal rights",
                    "founded": "2013"
          },
          "Zoram People's Movement": {
                    "desc": "A regional political alliance in Mizoram advocating for administrative reform, youth welfare, and transparency.",
                    "ideology": "Regionalism, Anti-corruption",
                    "founded": "2017"
          },
          "Nationalist Democratic Progressive Party": {
                    "desc": "A regional political party active in Nagaland, known for leading the state government with an emphasis on regional identity and peace processes.",
                    "ideology": "Regionalism, Naga Identity",
                    "founded": "2017"
          },
          "All India N.R. Congress": {
                    "desc": "A regional political party in the Union Territory of Puducherry, formed as a breakaway faction from the Indian National Congress.",
                    "ideology": "Regionalism, Populism",
                    "founded": "2011"
          },
          "Aam Aadmi Party": {
                    "desc": "A national party born out of the 2011 Indian anti-corruption movement, known for its focus on free utilities, public education, and healthcare.",
                    "ideology": "Populism, Anti-corruption, Secularism",
                    "founded": "2012"
          },
          "Sikkim Krantikari Morcha": {
                    "desc": "A regional political party in Sikkim, leading the state government with a focus on grassroots development and regional welfare.",
                    "ideology": "Regionalism, Democratic Socialism",
                    "founded": "2013"
          },
          "Dravida Munnetra Kazhagam": {
                    "desc": "A major regional party in Tamil Nadu with strong roots in the Dravidian movement, advocating for social justice, anti-Brahminism, and state autonomy.",
                    "ideology": "Social Justice, Dravidianism, Regionalism",
                    "founded": "1949"
          },
          "All India Trinamool Congress": {
                    "desc": "A political party predominantly active in West Bengal, formed as a breakaway from the Indian National Congress, known for its anti-left stance and regional populism.",
                    "ideology": "Populism, Secularism, Regionalism",
                    "founded": "1998"
          },
          "President of India": {
                    "desc": "The head of state of the Republic of India. The President is the formal head of the executive, legislature and judiciary of India and is also the commander-in-chief of the Indian Armed Forces.",
                    "ideology": "Non-partisan Constitutional Authority",
                    "founded": "1950"
          }
        },
        ui: { 
          hero_title: "Indian Democracy", 
          hero_p: "A guide to the world's largest election.", 
          btn_timeline: "View Phases", 
          btn_bot: "Ask Assistant",
          leadership_title: "Union Council of Ministers (2026)",
          state_leadership_title: "State Chief Ministers",
          live_title: "Live Dashboard",
          reports_title: "Latest Reports",
          timeline_title: "The Election Cycle",
          guide_title: "Step-by-Step Breakdown",
          resources_title: "Helpful Resources",
          nav_live: "Live Tracker",
          nav_reports: "Reports",
          nav_timeline: "Timeline",
          nav_guide: "Guide",
          res_poll_title: "Find Your Polling Place",
          res_poll_p: "Use official maps to find the nearest polling station in your precinct.",
          res_poll_btn: "Open Map",
          res_reg_title: "Official Registration",
          res_reg_p: "The official portal for voter registration and information.",
          res_reg_btn: "Visit Portal",
          settings_title: "Personalize",
          settings_dark: "Dark Mode",
          settings_glass: "Transparency",
          settings_anim: "Animations",
          hero_badge: "Election 2026 Education",
          footer_text: "© 2026 Civic Pulse. Built for Promptwars Hackathon.",
          google_badge: "Powered by Google Cloud Run",
          journey_title: "Your Voter Journey",
          journey_step_1: "Registration",
          journey_step_2: "Verification",
          journey_step_3: "Booth Locator",
          journey_step_4: "Polling Day",
          journey_step_5: "Verify VVPAT"
        },
        reports: [
          { tag: "Live", title: "West Bengal Trends", content: "TMC maintains a strong lead in the urban centers of Kolkata, while BJP shows gains in the northern districts. Turnout has reached a record 78%.", meta: "Updated 2m ago" },
          { tag: "Analysis", title: "Youth Voter Turnout", content: "Over 15 million first-time voters have registered for the 2026 cycle.", meta: "Updated 1h ago" }
        ],
        voterJourney: [
          { id: 1, title: "Register Online", desc: "Complete Form 6 on the NVSP portal. You'll need age and residence proof.", icon: "📝" },
          { id: 2, title: "Check Voter List", desc: "Ensure your name is in the electoral roll of your constituency.", icon: "🔍" },
          { id: 3, title: "Find Your Booth", desc: "Use the Voter Helpline App to find your assigned polling station.", icon: "📍" },
          { id: 4, title: "Cast Your Vote", desc: "Show your ID, get inked, and press the candidate button on EVM.", icon: "🗳️" },
          { id: 5, title: "Audit the VVPAT", desc: "Watch the paper slip for 7 seconds to confirm your choice was recorded.", icon: "✅" }
        ],
        pollChecklist: {
          title: "Poll Day Checklist",
          items: [
            "Voter ID (EPIC Card) or Alternate ID",
            "Locate your Polling Booth in advance",
            "Check your name in the Electoral Roll",
            "Follow queue discipline at the booth",
            "Verify the VVPAT slip after voting"
          ]
        }
      },
      hi: {
        label: "हिन्दी",
        timeline: [
          { id: 1, title: "तारीखों की घोषणा", period: "चरण 1", description: "चुनाव आयोग कार्यक्रम की घोषणा करता है।", details: ["आचार संहिता लागू", "ईवीएम सेटअप"] },
          { id: 2, title: "नामांकन प्रक्रिया", period: "चरण 2", description: "उम्मीदवार अपना नामांकन दाखिल करते हैं।", details: ["कागजातों की जांच", "नाम वापसी की अवधि"] },
          { id: 3, title: "मतदान के दिन", period: "चरण 3", description: "मतदाता राज्यों में अपना वोट डालते हैं।", details: ["VVPAT सत्यापन", "सुरक्षा तैनाती"] }
        ],
        leadership: {
          title: "शासन और नेतृत्व (2026)",
          president: {
            name: "द्रौपदी मुर्मू", role: "राष्ट्रपति", dept: "राष्ट्र प्रमुख",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/President_of_India_Droupadi_Murmu_official_portrait_%28cropped%29.jpg/330px-President_of_India_Droupadi_Murmu_official_portrait_%28cropped%29.jpg",
            party: "भारत की राष्ट्रपति", partyFlag: "🇮🇳"
          },
          pm: { 
            name: "नरेन्द्र मोदी", role: "प्रधानमंत्री", dept: "सरकार के प्रमुख", 
            image: "/narendra_modi.webp", 
            party: "भारतीय जनता पार्टी", partyFlag: "🟠" 
          },
          ministers: [
            { name: "अमित शाह", role: "गृह मंत्री", dept: "गृह मंत्रालय", image: "/amit_shah.webp", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "राजनाथ सिंह", role: "रक्षा मंत्री", dept: "रक्षा मंत्रालय", image: "/rajnath_singh.webp", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "निर्मला सीतारमण", role: "वित्त मंत्री", dept: "वित्त मंत्रालय", image: "/nirmala_sitharaman.webp", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "एस. जयशंकर", role: "विदेश मंत्री", dept: "विदेश मंत्रालय", image: "/jaishankar.webp", party: "भारतीय जनता पार्टी", partyFlag: "🟠" }
          ],
          stateLeadersTitle: "राज्यों के मुख्यमंत्री",
          stateLeaders: [
            { name: "एन. चंद्रबाबू नायडू", region: "आंध्र प्रदेश", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/The_portrait_of_CM_Shri_Nara_Chandrababu_Naidu.jpg/330px-The_portrait_of_CM_Shri_Nara_Chandrababu_Naidu.jpg", party: "तेलुगु देशम पार्टी", partyFlag: "🚲", deputies: [{"name":"कोनिडेला पवन कल्याण","image":"https://upload.wikimedia.org/wikipedia/commons/1/16/Shri_Konidela_Pawan_Kalyan.jpg"}] },
            { name: "पेमा खांडू", region: "अरुणाचल प्रदेश", image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Pema_Khandu_in_2018.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"चोउना मीन","image":"https://upload.wikimedia.org/wikipedia/commons/8/8e/Chowna_Mein.jpg"}] },
            { name: "हिमंता बिस्वा सरमा", region: "असम", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Himanta_Biswa_Sarma_in_2025.jpg/330px-Himanta_Biswa_Sarma_in_2025.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "सम्राट चौधरी", region: "बिहार", image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Chief_Minister_Samrat_Chaudhary%28cropped%29.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"बिजेंद्र प्रसाद यादव","image":"https://upload.wikimedia.org/wikipedia/commons/6/65/Bijendra_Yadav.jpg"},{"name":"विजय कुमार चौधरी","image":"https://upload.wikimedia.org/wikipedia/commons/a/ad/Vijay_Kumar_Chaudhary_2022.jpg"}] },
            { name: "विष्णु देव साय", region: "छत्तीसगढ़", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Vishnu_Deo_Sai%2C_Chief_Minister_of_Chhattisgarh.jpg/330px-Vishnu_Deo_Sai%2C_Chief_Minister_of_Chhattisgarh.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"अरुण साव","image":"https://upload.wikimedia.org/wikipedia/commons/b/b3/Arun_Sao_BJP.jpg"},{"name":"विजय शर्मा","image":"https://upload.wikimedia.org/wikipedia/commons/8/86/Vijay_Shekhar_Sharma_%282019%29.jpg"}] },
            { name: "रेखा गुप्ता", region: "दिल्ली", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chief_Minister_of_Delhi%2C_Smt._Rekha_Gupta.jpg/330px-Chief_Minister_of_Delhi%2C_Smt._Rekha_Gupta.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "प्रमोद सावंत", region: "गोवा", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pramod_Sawant_at_the_inauguration_of_the_Chhatrapati_Shivaji_Maharaj_Chair_in_Goa_University_%28cropped%29.jpg/330px-Pramod_Sawant_at_the_inauguration_of_the_Chhatrapati_Shivaji_Maharaj_Chair_in_Goa_University_%28cropped%29.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "भूपेंद्रभाई पटेल", region: "गुजरात", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Chief_Minister_of_Gujarat%2C_Shri_Bhupendra_Patel_%282%29.jpg/330px-Chief_Minister_of_Gujarat%2C_Shri_Bhupendra_Patel_%282%29.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"हर्ष संघवी","image":"https://upload.wikimedia.org/wikipedia/commons/2/28/Harsh_Sanghavi.jpg"}] },
            { name: "नायब सिंह सैनी", region: "हरियाणा", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Nayab_Singh_Saini.jpg/330px-Nayab_Singh_Saini.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "सुखविंदर सिंह सुक्खू", region: "हिमाचल प्रदेश", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Sukhvinder_Singh_Sukhu.jpg/330px-Sukhvinder_Singh_Sukhu.jpg", party: "भारतीय राष्ट्रीय कांग्रेस", partyFlag: "✋", deputies: [{"name":"मुकेश अग्निहोत्री","image":"https://upload.wikimedia.org/wikipedia/commons/4/47/Mukesh_Agnihotri_%28cropped%29.jpg"}] },
            { name: "उमर अब्दुल्ला", region: "जम्मू और कश्मीर", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Omar_Abdullah%2C_Chief_Minister_of_Jammu_%26_Kashmir.jpg/330px-Omar_Abdullah%2C_Chief_Minister_of_Jammu_%26_Kashmir.jpg", party: "जम्मू और कश्मीर नेशनल कॉन्फ्रेंस", partyFlag: "🏹", deputies: [{"name":"सुरिंदर कुमार चौधरी","image":"https://upload.wikimedia.org/wikipedia/commons/a/aa/Surinder_Kumar_Choudhary.jpg"}] },
            { name: "हेमंत सोरेन", region: "झारखण्ड", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Hemant_Soren_01.jpg/330px-Hemant_Soren_01.jpg", party: "झारखंड मुक्ति मोर्चा", partyFlag: "🏹" },
            { name: "सिद्धारमैया", region: "कर्नाटक", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Chief_Minister_of_Karnataka_Siddaramaiah_visits_PMO.jpg/330px-The_Chief_Minister_of_Karnataka_Siddaramaiah_visits_PMO.jpg", party: "भारतीय राष्ट्रीय कांग्रेस", partyFlag: "✋", deputies: [{"name":"डी. के. शिवकुमार","image":"https://upload.wikimedia.org/wikipedia/commons/3/39/DK_Shivkumar.png"}] },
            { name: "पिनाराई विजयन", region: "केरल", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pinarayi_Vijayan_1.jpg/330px-Pinarayi_Vijayan_1.jpg", party: "भारतीय कम्युनिस्ट पार्टी (मार्क्सवादी)", partyFlag: "☭" },
            { name: "मोहन यादव", region: "मध्य प्रदेश", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mohan_Yadav%2C_Chief_Minister_of_Madhya_Pradesh.jpg/330px-Mohan_Yadav%2C_Chief_Minister_of_Madhya_Pradesh.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"राजेंद्र शुक्ला","image":"https://upload.wikimedia.org/wikipedia/commons/4/45/Rajendra_Shukla_in_Rewa_-_March_2026.jpg"},{"name":"जगदीश देवड़ा","image":"https://upload.wikimedia.org/wikipedia/commons/d/d2/DCM_Jagdish_Dewda.jpeg"}] },
            { name: "उद्धव ठाकरे", region: "महाराष्ट्र", image: "/uddhav_thackeray.webp", party: "शिवसेना (यूबीटी)", partyFlag: "🏹", deputies: [{"name":"देवेंद्र फडणवीस","image":"https://upload.wikimedia.org/wikipedia/commons/e/ee/Devendra_Fadnavis_2022.jpg"},{"name":"अजीत पवार","image":"https://upload.wikimedia.org/wikipedia/commons/f/fc/Shri_Ajit_Anantrao_Pawar.jpg"}] },
            { name: "युमनाम खेमचंद सिंह", region: "मणिपुर", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/The_Chief_Minister_of_Manipur%2C_Shri_Biren_Singh_calling_on_the_Vice_President%2C_Shri_M._Venkaiah_Naidu%2C_in_New_Delhi_on_September_06%2C_2017_%28cropped%29.jpg/330px-The_Chief_Minister_of_Manipur%2C_Shri_Biren_Singh_calling_on_the_Vice_President%2C_Shri_M._Venkaiah_Naidu%2C_in_New_Delhi_on_September_06%2C_2017_%28cropped%29.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"नेमचा किपजेन","image":"https://assembly.mn.gov.in/storage/members/1739857904.jpg"},{"name":"लोसी दीखो","image":"https://assembly.mn.gov.in/storage/members/1739856557.jpg"}] },
            { name: "कोनराड संगमा", region: "मेघालय", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/The_Chief_Minister_of_Meghalaya%2C_Shri_Conrad_Sangma.JPG/330px-The_Chief_Minister_of_Meghalaya%2C_Shri_Conrad_Sangma.JPG", party: "नेशनल पीपुल्स पार्टी", partyFlag: "📖", deputies: [{"name":"प्रेस्टोन टिनसोंग","image":"https://upload.wikimedia.org/wikipedia/commons/f/fe/A_delegation_from_North_Eastern_States_led_by_the_Minister_General_Administration_Home_%28Civil_Defence_And_Home_Guards%29_Public_Health_Engineering_Relief_And_Rehabilitation_%28cropped%29.jpg"},{"name":"स्नियावभलंग धर","image":"https://upload.wikimedia.org/wikipedia/commons/0/06/DCM_Sniawbhalang_Dhar.jpg"}] },
            { name: "लालदुहोमा", region: "मिजोरम", image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Lalduhawma1.jpg", party: "जोरम पीपुल्स मूवमेंट", partyFlag: "🏹" },
            { name: "नेफ्यू रियो", region: "नागालैंड", image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/NeiphiuRio.jpg", party: "नेशनलिस्ट डेमोक्रेटिक प्रोग्रेसिव पार्टी", partyFlag: "🌏", deputies: [{"name":"यंथुंगो पैटन","image":"https://upload.wikimedia.org/wikipedia/commons/f/ff/The_Nagaland_Home_Minister%2C_Shri_Yanthungo_Patton_meeting_the_Minister_of_State_for_Home_Affairs%2C_Shri_Hansraj_Gangaram_Ahir%2C_in_New_Delhi_on_November_09%2C_2016_%28cropped%29.jpg"},{"name":"टी. आर. जेलियांग","image":"https://upload.wikimedia.org/wikipedia/commons/8/83/T._R._Zeliang_%28cropped%29.jpg"}] },
            { name: "मोहन चरण माझी", region: "ओडिशा", image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/%E0%AC%B6%E0%AD%8D%E0%AC%B0%E0%AD%80_%E0%AC%AE%E0%AD%8B%E0%AC%B9%E0%AC%A8_%E0%AC%9A%E0%AC%B0%E0%AC%A3_%E0%AC%AE%E0%AC%BE%E0%AC%9D%E0%AD%80.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"कनक वर्धन सिंह देव","image":"https://upload.wikimedia.org/wikipedia/commons/1/13/Kanak_Vardhan_Singh_Deo_2024.jpg"},{"name":"प्रभाती परिडा","image":"https://upload.wikimedia.org/wikipedia/commons/7/7a/Pravati_Parida_in_2025.jpg"}] },
            { name: "एन. रंगास्वामी", region: "पुडुचेरी", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/N_Rangaswamy.jpg/330px-N_Rangaswamy.jpg", party: "अखिल भारतीय एन.आर. कांग्रेस", partyFlag: "🏺" },
            { name: "भगवंत मान", region: "पंजाब", image: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Bhagwant_Mann.png", party: "आम आदमी पार्टी", partyFlag: "🧹" },
            { name: "भजन लाल शर्मा", region: "राजस्थान", image: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bhajan_Lal_Sharma_and_deputies_meets_VP_of_India.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"दीया कुमारी","image":"https://upload.wikimedia.org/wikipedia/commons/1/1d/The_Deputy_Chief_Minister_of_Rajasthan%2C_Shrimathi_Diya_Kumari_%26_her_colleague_meet_VP_of_India_with_their_head.jpg"},{"name":"प्रेम चंद बैरवा","image":"https://upload.wikimedia.org/wikipedia/commons/d/dc/Prem_Chand_Bairwa_%28cropped%29.jpg"}] },
            { name: "प्रेम सिंह तमांग", region: "सिक्किम", image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Prem_Singh_Tamang%2C_Chief_Minister_of_Sikkim.jpg", party: "सिक्किम क्रांतिकारी मोर्चा", partyFlag: "☀️" },
            { name: "एम. के. स्टालिन", region: "तमिलनाडु", image: "/mk_stalin.webp", party: "द्रविड़ मुनेत्र कड़गम", partyFlag: "☀️", deputies: [{"name":"उधयनिधि स्टालिन","image":"https://upload.wikimedia.org/wikipedia/commons/0/07/Udhaya.jpg"}] },
            { name: "ए. रेवंत रेड्डी", region: "तेलंगाना", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Portrait_of_Telangana_CM_Revanth_Reddy.png/330px-Portrait_of_Telangana_CM_Revanth_Reddy.png", party: "भारतीय राष्ट्रीय कांग्रेस", partyFlag: "✋", deputies: [{"name":"मल्लू भट्टी विक्रमार्क","image":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Portrait_of_Telangana_Deputy_CM_Bhatti_Vikramarka_Mallu%2815_June_2025%29.jpg/330px-Portrait_of_Telangana_Deputy_CM_Bhatti_Vikramarka_Mallu%2815_June_2025%29.jpg"}] },
            { name: "माणिक साहा", region: "त्रिपुरा", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Manik_Saha_Invitation_for_HWC_2023.jpg/330px-Manik_Saha_Invitation_for_HWC_2023.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "योगी आदित्यनाथ", region: "उत्तर प्रदेश", image: "/yogi_adityanath.webp", party: "भारतीय जनता पार्टी", partyFlag: "🟠", deputies: [{"name":"केशव प्रसाद मौर्य","image":"https://upload.wikimedia.org/wikipedia/commons/8/80/Shri_Keshav_Prasad_Maurya%2C_MP%2C_Phoolpur_%28U.P%29_and_Shri_Satyapal_Singh_Saini%2C_MP%2C_Sambhal_%28U.P%29_meeting_the_Minister_of_State_for_Culture_%28Independent_Charge%29%2C_Tourism_%28Independent_Charge%29_and_Civil_Aviation_%28cropped%29.jpg"},{"name":"ब्रजेश पाठक","image":"https://upload.wikimedia.org/wikipedia/commons/f/f5/Brajesh_Pathak.jpg"}] },
            { name: "पुष्कर सिंह धामी", region: "उत्तराखण्ड", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pushkar_Singh_Dhami%2C_Chief_Minister_of_Uttarakhand.jpg/330px-Pushkar_Singh_Dhami%2C_Chief_Minister_of_Uttarakhand.jpg", party: "भारतीय जनता पार्टी", partyFlag: "🟠" },
            { name: "ममता बनर्जी", region: "पश्चिम बंगाल", image: "/mamata_banerjee.webp", party: "अखिल भारतीय तृणमूल कांग्रेस", partyFlag: "🌿" }
          ]
        },
        faq: { 
          "voter id": "voters.eci.gov.in पर आवेदन करें। आपको आयु, निवास और पहचान के प्रमाण की आवश्यकता होगी। EPIC आपका मुख्य दस्तावेज़ है।",
          "registration": "ECI पोर्टल या वोटर हेल्पलाइन ऐप के माध्यम से ऑनलाइन पंजीकरण करें। नए मतदाताओं के लिए फॉर्म 6 है, सुधार के लिए फॉर्म 8।",
          "deadlines": "पंजीकरण की अंतिम तिथि आमतौर पर आपके निर्वाचन क्षेत्र में मतदान की तिथि से 30 दिन पहले होती है।",
          "eligibility": "कोई भी भारतीय नागरिक जो पात्रता तिथि पर 18 वर्ष या उससे अधिक का है, पंजीकरण कर सकता है।",
          "evm": "ईवीएम सुरक्षित डिवाइस हैं। इसमें एक बैलेटिंग यूनिट और एक कंट्रोल यूनिट होती है, जिसे अब सत्यापन के लिए VVPAT के साथ जोड़ा गया है।",
          "nota": "इनमें से कोई नहीं (नोटा) मतदाताओं को सभी उम्मीदवारों के लिए आधिकारिक तौर पर अस्वीकृति का वोट दर्ज करने की अनुमति देता है।",
          "mcc": "आदर्श आचार संहिता: चुनाव के दौरान पार्टियों और उम्मीदवारों के लिए निष्पक्ष खेल सुनिश्चित करने हेतु दिशा-निर्देश।",
          "documents": "वोटर आईडी के अलावा, आप 12 वैकल्पिक दस्तावेज़ों का उपयोग कर सकते हैं: आधार, मनरेगा जॉब कार्ड, फोटो वाली पासबुक, ड्राइविंग लाइसेंस, पैन कार्ड, आदि।",
          "cvigil": "आचार संहिता के उल्लंघन की रीयल-टाइम रिपोर्ट करने के लिए cVIGIL ऐप का उपयोग करें।",
          "booth": "ECI वेबसाइट या वोटर हेल्पलाइन ऐप पर 'अपने मतदान केंद्र को जानें' टूल का उपयोग करके अपना बूथ खोजें।",
          "voter slip": "वोटर सूचना पर्ची मतदान से पहले वितरित की जाती है। इसमें आपका बूथ विवरण होता है, लेकिन यह पहचान प्रमाण नहीं है।",
          "aadhaar": "हाँ, आधार कार्ड मतदान के लिए एक वैध पहचान दस्तावेज़ है। सुनिश्चित करें कि आपका नाम आपकी निर्वाचन क्षेत्र की मतदाता सूची में है।",
          "pan card": "यदि आपके पास वोटर आईडी नहीं है, तो आपके पैन कार्ड को मतदान केंद्र पर वैकल्पिक पहचान दस्तावेज़ के रूप में स्वीकार किया जाता है।",
          "passport": "भारतीय पासपोर्ट मतदान केंद्र पर पहचान सत्यापन के लिए एक वैध दस्तावेज़ है।"
        },
        politicalKnowledge: {
          "लोक सभा": "लोक सभा (House of the People) भारतीय संसद का निचला सदन है। इसमें 543 निर्वाचित सदस्य होते हैं।",
          "राज्य सभा": "राज्य सभा (Council of States) ऊपरी सदन है। इसकी अधिकतम संख्या 250 सदस्य है।",
          "सीट": "लोक सभा: 543 निर्वाचित सीटें। राज्य सभा: 245 वर्तमान सीटें।",
          "राष्ट्रपति": "भारत की राष्ट्रपति श्रीमती द्रौपदी मुर्मू हैं।",
          "उपराष्ट्रपति": "भारत के उपराष्ट्रपति श्री जगदीप धनखड़ हैं।",
          "नागर विमानन मंत्री": "केंद्रीय नागरिक उड्डयन मंत्री श्री किंजरापु राम मोहन नायडू हैं।",
          "गृह मंत्री": "केंद्रीय गृह मंत्री श्री अमित शाह हैं।",
          "वित्त मंत्री": "केंद्रीय वित्त मंत्री श्रीमती निर्मला सीतारमण हैं।",
          "रक्षा मंत्री": "केंद्रीय रक्षा मंत्री श्री राजनाथ सिंह हैं।",
          "एनएसए": "भारत के राष्ट्रीय सुरक्षा सलाहकार (NSA) श्री अजीत डोभाल हैं।",
          "इसरो अध्यक्ष": "इसरो (ISRO) के अध्यक्ष श्री एस. सोमनाथ हैं।"
        },
        partyKnowledge: {
          "भारतीय जनता पार्टी": {
                    "desc": "भारत के दो प्रमुख राजनीतिक दलों में से एक, जो अपनी दक्षिणपंथी राष्ट्रवादी नीतियों और हिंदुत्व पर जोर देने के लिए जाना जाता है।",
                    "ideology": "दक्षिणपंथी, हिंदुत्व, रूढ़िवाद",
                    "founded": "1980"
          },
          "भारतीय राष्ट्रीय कांग्रेस": {
                    "desc": "भारत के स्वतंत्रता आंदोलन में गहरी ऐतिहासिक जड़ों वाला एक प्रमुख राजनीतिक दल। यह आमतौर पर धर्मनिरपेक्षता और सामाजिक लोकतंत्र को बढ़ावा देता है।",
                    "ideology": "मध्यमार्गी से वाम-मध्यमार्गी, सामाजिक लोकतंत्र, धर्मनिरपेक्षता",
                    "founded": "1885"
          },
          "तेलुगु देशम पार्टी": {
                    "desc": "मुख्य रूप से आंध्र प्रदेश और तेलंगाना में सक्रिय एक क्षेत्रीय राजनीतिक दल, जो तेलुगु भाषी लोगों के कल्याण पर केंद्रित है।",
                    "ideology": "क्षेत्रवाद, लोकलुभावनवाद",
                    "founded": "1982"
          },
          "जम्मू और कश्मीर नेशनल कॉन्फ्रेंस": {
                    "desc": "जम्मू और कश्मीर में एक प्रमुख क्षेत्रीय पार्टी जो राज्य की स्वायत्तता और क्षेत्र की अनूठी पहचान की रक्षा की वकालत करती है।",
                    "ideology": "क्षेत्रवाद, स्वायत्तता, धर्मनिरपेक्षता",
                    "founded": "1932"
          },
          "झारखंड मुक्ति मोर्चा": {
                    "desc": "झारखंड में एक राज्य स्तरीय राजनीतिक दल, जिसका गठन आदिवासियों के लिए एक अलग राज्य की मांग और स्वदेशी समुदायों के अधिकारों की वकालत करने के लिए किया गया था।",
                    "ideology": "क्षेत्रवाद, आदिवासी अधिकार",
                    "founded": "1972"
          },
          "भारतीय कम्युनिस्ट पार्टी (मार्क्सवादी)": {
                    "desc": "भारत में एक प्रमुख वामपंथी कम्युनिस्ट पार्टी, जिसकी पश्चिम बंगाल, केरल और त्रिपुरा में ऐतिहासिक रूप से महत्वपूर्ण उपस्थिति रही है।",
                    "ideology": "वामपंथी, मार्क्सवाद-लेनिनवाद, समाजवाद",
                    "founded": "1964"
          },
          "नेशनल पीपुल्स पार्टी": {
                    "desc": "मुख्य रूप से मेघालय और अन्य पूर्वोत्तर राज्यों में केंद्रित एक राष्ट्रीय स्तर का राजनीतिक दल, जो आदिवासी और क्षेत्रीय विकास पर केंद्रित है।",
                    "ideology": "क्षेत्रवाद, आदिवासी अधिकार",
                    "founded": "2013"
          },
          "जोरम पीपुल्स मूवमेंट": {
                    "desc": "मिजोरम में एक क्षेत्रीय राजनीतिक गठबंधन जो प्रशासनिक सुधार, युवा कल्याण और पारदर्शिता की वकालत करता है।",
                    "ideology": "क्षेत्रवाद, भ्रष्टाचार विरोधी",
                    "founded": "2017"
          },
          "नेशनलिस्ट डेमोक्रेटिक प्रोग्रेसिव पार्टी": {
                    "desc": "नागालैंड में सक्रिय एक क्षेत्रीय राजनीतिक दल, जो क्षेत्रीय पहचान और शांति प्रक्रियाओं पर जोर देने के साथ राज्य सरकार का नेतृत्व करने के लिए जाना जाता है।",
                    "ideology": "क्षेत्रवाद, नागा पहचान",
                    "founded": "2017"
          },
          "अखिल भारतीय एन.आर. कांग्रेस": {
                    "desc": "पुडुचेरी के केंद्र शासित प्रदेश में एक क्षेत्रीय राजनीतिक दल, जिसका गठन भारतीय राष्ट्रीय कांग्रेस से अलग होकर किया गया था।",
                    "ideology": "क्षेत्रवाद, लोकलुभावनवाद",
                    "founded": "2011"
          },
          "आम आदमी पार्टी": {
                    "desc": "2011 के भारतीय भ्रष्टाचार विरोधी आंदोलन से पैदा हुई एक राष्ट्रीय पार्टी, जो मुफ्त उपयोगिताओं, सार्वजनिक शिक्षा और स्वास्थ्य सेवा पर ध्यान केंद्रित करने के लिए जानी जाती है।",
                    "ideology": "लोकलुभावनवाद, भ्रष्टाचार विरोधी, धर्मनिरपेक्षता",
                    "founded": "2012"
          },
          "सिक्किम क्रांतिकारी मोर्चा": {
                    "desc": "सिक्किम में एक क्षेत्रीय राजनीतिक दल, जो जमीनी स्तर के विकास और क्षेत्रीय कल्याण पर ध्यान केंद्रित करते हुए राज्य सरकार का नेतृत्व कर रहा है।",
                    "ideology": "क्षेत्रवाद, लोकतांत्रिक समाजवाद",
                    "founded": "2013"
          },
          "द्रविड़ मुनेत्र कड़गम": {
                    "desc": "तमिलनाडु में द्रविड़ आंदोलन में मजबूत जड़ों वाला एक प्रमुख क्षेत्रीय दल, जो सामाजिक न्याय और राज्य की स्वायत्तता की वकालत करता है।",
                    "ideology": "सामाजिक न्याय, द्रविड़वाद, क्षेत्रवाद",
                    "founded": "1949"
          },
          "अखिल भारतीय तृणमूल कांग्रेस": {
                    "desc": "मुख्य रूप से पश्चिम बंगाल में सक्रिय एक राजनीतिक दल, जो भारतीय राष्ट्रीय कांग्रेस से अलग होकर बना है, जो अपने वाम-विरोधी रुख और क्षेत्रीय लोकलुभावनवाद के लिए जाना जाता है।",
                    "ideology": "लोकलुभावनवाद, धर्मनिरपेक्षता, क्षेत्रवाद",
                    "founded": "1998"
          },
          "भारत की राष्ट्रपति": {
                    "desc": "भारत गणराज्य के राज्य प्रमुख। राष्ट्रपति भारत की कार्यपालिका, विधायिका और न्यायपालिका का औपचारिक प्रमुख होता है।",
                    "ideology": "गैर-पक्षपाती संवैधानिक प्राधिकरण",
                    "founded": "1950"
          }
        },
        ui: { 
          hero_title: "भारतीय लोकतंत्र", 
          hero_p: "दुनिया के सबसे बड़े चुनाव के लिए एक मार्गदर्शिका।", 
          btn_timeline: "चरण देखें", 
          btn_bot: "सहायक से पूछें",
          leadership_title: "केंद्रीय मंत्रिपरिषद (2026)",
          state_leadership_title: "राज्यों के मुख्यमंत्री",
          live_title: "लाइव डैशबोर्ड",
          reports_title: "नवीनतम रिपोर्ट",
          timeline_title: "चुनाव चक्र",
          guide_title: "क्रमबद्ध विवरण",
          resources_title: "उपयोगी संसाधन",
          nav_live: "लाइव ट्रैकर",
          nav_reports: "रिपोर्ट",
          nav_timeline: "टाइमलाइन",
          nav_guide: "गाइड",
          res_poll_title: "अपना मतदान केंद्र खोजें",
          res_poll_p: "अपने क्षेत्र में निकटतम मतदान केंद्र खोजने के लिए आधिकारिक मानचित्रों का उपयोग करें।",
          res_poll_btn: "मानचित्र खोलें",
          res_reg_title: "आधिकारिक पंजीकरण",
          res_reg_p: "मतदाता पंजीकरण और जानकारी के लिए आधिकारिक पोर्टल।",
          res_reg_btn: "पोर्टल पर जाएं",
          settings_title: "व्यक्तिगत करें",
          settings_dark: "डार्क मोड",
          settings_glass: "पारदर्शिता",
          settings_anim: "एनिमेशन",
          hero_badge: "चुनाव 2026 शिक्षा",
          footer_text: "© 2026 सिविक पल्स। प्रॉम्प्टवॉर्स हैकाथॉन के लिए निर्मित।",
          google_badge: "गूगल क्लाउड रन द्वारा संचालित",
          journey_title: "आपकी मतदान यात्रा",
          journey_step_1: "पंजीकरण",
          journey_step_2: "सत्यापन",
          journey_step_3: "बूथ खोजें",
          journey_step_4: "मतदान का दिन",
          journey_step_5: "VVPAT सत्यापन"
        },
        reports: [
          { tag: "लाइव", title: "पश्चिम बंगाल रुझान", content: "टीएमसी कोलकाता के शहरी केंद्रों में मजबूत बढ़त बनाए हुए है, जबकि भाजपा उत्तरी जिलों में बढ़त दिखा रही है।", meta: "2 मिनट पहले अपडेट किया गया" },
          { tag: "विश्लेषण", title: "युवा मतदाता मतदान", content: "2026 चक्र के लिए 1.5 करोड़ से अधिक पहली बार मतदाताओं ने पंजीकरण कराया है।", meta: "1 घंटे पहले अपडेट किया गया" }
        ],
        voterJourney: [
          { id: 1, title: "ऑनलाइन पंजीकरण", desc: "NVSP पोर्टल पर फॉर्म 6 भरें। आपको आयु और निवास प्रमाण की आवश्यकता होगी।", icon: "📝" },
          { id: 2, title: "मतदाता सूची जांचें", desc: "सुनिश्चित करें कि आपका नाम आपके निर्वाचन क्षेत्र की मतदाता सूची में है।", icon: "🔍" },
          { id: 3, title: "अपना बूथ खोजें", desc: "अपना मतदान केंद्र खोजने के लिए वोटर हेल्पलाइन ऐप का उपयोग करें।", icon: "📍" },
          { id: 4, title: "वोट डालें", desc: "अपनी पहचान दिखाएं, स्याही लगवाएं और ईवीएम पर उम्मीदवार का बटन दबाएं।", icon: "🗳️" },
          { id: 5, title: "VVPAT का ऑडिट करें", desc: "अपनी पसंद की पुष्टि करने के लिए 7 सेकंड तक पेपर स्लिप देखें।", icon: "✅" }
        ],
        pollChecklist: {
          title: "मतदान दिवस चेकलिस्ट",
          items: [
            "मतदाता पहचान पत्र (EPIC कार्ड) या वैकल्पिक आईडी",
            "अपने मतदान केंद्र का पहले से पता लगाएं",
            "मतदाता सूची में अपना नाम जांचें",
            "बूथ पर कतार अनुशासन का पालन करें",
            "मतदान के बाद VVPAT पर्ची का सत्यापन करें"
          ]
        }
      }
    },
    live: {
      wb: {
        name: "West Bengal 2026",
        totalSeats: 294,
        turnout: "78.4%",
        leads: { TMC: 142, BJP: 110, Left: 20, Others: 22 }
      },
      tn: {
        name: "Tamil Nadu 2026",
        totalSeats: 234,
        turnout: "72.1%",
        leads: { DMK: 125, ADMK: 85, BJP: 12, Others: 12 }
      }
    }
  }
};
