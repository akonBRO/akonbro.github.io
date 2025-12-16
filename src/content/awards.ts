export type AwardCategory = "Tech" | "Sports";

export type AwardItem = {
  title: string;
  issuer?: string;
  date?: string;
  note?: string;
  featuredOnHome?: boolean;
};

export const awards: { category: AwardCategory; items: AwardItem[] }[] = [
  {
    category: "Tech",
    items: [
      { title: "BRAC IC6 — 3rd", issuer: "University Innovation Hub Program (UIHP)", date: "Jul 2025", featuredOnHome: true },
      { title: "42nd National Science and Technology Week — 6th Position", issuer: "Dhaka District Science and Technology Committee", date: "Jan 2021", note: "Project Display segment", featuredOnHome: true },
      { title: "AIUB Presents 7th DCSC National Science Exposition — Champion", issuer: "Dhaka College", date: "Feb 2020", note: "Project Display segment", featuredOnHome: true },
    ],
  },
  {
    category: "Sports",
    items: [
      { title: "RS 62 Football Tournament — Champion + Player of the Match (+ Best GK)", issuer: "BRAC University", date: "Mar 2023", featuredOnHome: true },
      { title: "Battle of Fall23 — Champion", issuer: "FCBU", date: "Nov 2023" },
      { title: "BRACU FL 2022 — Semi Finalist", issuer: "FCBU", date: "Sep 2022" },
      { title: "FCBU Rising Star 2022 — Runners-up", issuer: "FCBU", date: "Aug 2022" },
      { title: "Udayan Inter-Class Football Championship — Champion", issuer: "Udayan Higher Secondary School", date: "Jan 2021" },
    ],
  },
];
