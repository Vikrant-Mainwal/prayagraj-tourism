import Triveni from "../assets/triveni-sangam1.jpg";
import AllahabadFort from "../assets/allahabad-fort.jpg";
import KhusroBagh from "../assets/khusro.jpeg";
import AnandBhavan from "../assets/anand1.jpg";
import AzadPark from "../assets/azad1.jpg";
import AllahabadMuseum from "../assets/museum.jpg";

export const attractions = [
  {
    slug: "triveni-sangam",
    title: "Triveni Sangam",
    shortDesc: "The holiest site where the Ganga, Yamuna, and Saraswati rivers meet.",
    description: `
      The Triveni Sangam is considered the most sacred place in Hindu belief.
      Pilgrims come from all over India to take a dip at the confluence of the three rivers.
      During Kumbh Mela, millions gather here for one of the largest spiritual events on Earth.
    `,
    image: Triveni,
    location: "Sangam Area, Prayagraj",
  },
  {
    slug: "allahabad-fort",
    title: "Allahabad Fort",
    shortDesc: "A majestic Mughal fort built by Emperor Akbar in 1583.",
    description: `
      Allahabad Fort is known for its grand architecture, Ashoka Pillar,
      and the Patalpuri Temple inside. Although much of it is under military control,
      a small portion is open to visitors.
    `,
    image: AllahabadFort,
    location: "Near Sangam, Prayagraj",
  },
  {
    slug: "khusro-bagh",
    title: "Khusro Bagh",
    shortDesc: "Beautiful Mughal-style gardens and royal tombs.",
    description: `
      Khusro Bagh contains the tombs of Prince Khusro, son of Emperor Jahangir,
      and his family members. The lush gardens make it a peaceful historical site
      perfect for photography.
    `,
    image: KhusroBagh,
    location: "Near Allahabad Junction, Civil Lines",
  },
  {
    slug: "anand-bhavan",
    title: "Anand Bhavan",
    shortDesc: "Residence of the Nehru family, now a freedom movement museum.",
    description: `
      Anand Bhavan played a major role in India's independence struggle.
      The house contains preserved rooms, documents, photos, and personal belongings
      of the Nehru family.
    `,
    image: AnandBhavan,
    location: "Colonelganj, Prayagraj",
  },
  {
    slug: "azad-park",
    title: "Chandrashekhar Azad Park",
    shortDesc: "Historic park where freedom fighter Azad embraced martyrdom.",
    description: `
      Spread across 133 acres, this green park includes monuments, walking paths,
      a library, and the famous tree where Azad fought valiantly against British forces.
    `,
    image: AzadPark,
    location: "Civil Lines, Prayagraj",
  },
  {
    slug: "allahabad-museum",
    title: "Allahabad Museum",
    shortDesc: "A major museum showcasing historic artifacts and sculptures.",
    description: `
      The Allahabad Museum contains rare exhibits from ancient India, Mughal miniatures,
      archaeological findings, and items related to the freedom movement.
    `,
    image: AllahabadMuseum,
    location: "Kamla Nehru Road, Chandrashekhar Azad Park",
  },
];
