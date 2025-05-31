export const campuses = {
  harvarde: {
    name: "Harvarde",
    address: "Sorobi Road Off Obada Iyana-Adigbe Road, Abeokuta, Ogun State.",
    heroImage: "/assets/harvardeABOUT.jpg",
    aboutImage: "/assets/harvardeABOUT.jpg",
    call_to_action_image: "/assets/actionImage.jpg",
    email: "wacfharvarde@gmail.com",
    phone: "+234 913 407 4269",
    testimonies: [
      {
        quote:
          "I joined Word Assembly in 2017 as a paid keyboardist but became frustrated and left for Benin...",
        author: "Mr. Kenny",
      },
    ],
  },
  fuoye: {
    name: "FUOYE",
    address: "Federal University Oye-Ekiti, Ekiti State.",
    heroImage: "/assets/harvardeHERO.jpg",
    aboutImage: "",
    call_to_action_image: "/assets/actionImage.jpg",
    email: "wacffuoye@gmail.com",
    phone: "+234 913 407 4269",
    testimonies: [
      {
        quote: "This fellowship transformed my spiritual life...",
        author: "Miss Adeola",
      },
    ],
  },
} as const;

export type CampusSlug = keyof typeof campuses;
