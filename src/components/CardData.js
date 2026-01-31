const cardsData = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrB1tlfgWbPfkTNVkgTNues2qe3uGDGwefwg&s",
    title: "Jailer Indian Movie",
    button: "Book Now",
    time : "200 min",
    description:
      "Jailer (2023) is a blockbuster Tamil-language action-comedy starring Rajinikanth as 'Tiger' Muthuvel Pandian, a retired jailer seeking vengeance against an idol smuggler who harmed his family. Directed by Nelson Dilipkumar, the film features an ensemble cast including Mohanlal, Shiva Rajkumar, Jackie Shroff, and Vinayakan.  ",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWW7oafUlfsv6aKKwTBGzwXZMERovmN5v_vg&s",
    title: "The Spector Movie",
    time : "200 min",
    description:
      "Spectre (2015) is the 24th James Bond film, directed by Sam Mendes and starring Daniel Craig as 007 in his fourth outing. The plot follows Bond as he uncovers the sinister organization SPECTRE, led by a villain (Christoph Waltz) with a personal connection to his past. ",
    button: "Book Now",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITlfKnkFUN7KS7g0LneUYGjk6Bk5iVKIQow&s",
    title: "Dora the Lost city",
    time : "200 min",
    button: "Book Now",
    description: "Dora and the Lost City of Gold (2019) is a live-action family adventure comedy starring Isabela Merced (née Moner) as a teenage Dora navigating high school and a dangerous jungle quest to save her parents. Directed by James Bobin, the PG-rated film grossed $119.7 million, focusing on themes of friendship and courage"
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCPg3qoDqoTSXO2XNotJZeETU8KCqPWcg-Jg&s",
    title: "Universal Picture",
    time : "200 min",
    button: "Book Now",
    description:"Universal Pictures, a major division of NBCUniversal, has a deep library and an active 2024-2026 slate featuring Despicable Me 4, The Wild Robot (DreamWorks), Twisters, and Jurassic World 4. Upcoming 2026 films include Minions 3, Forgotten Island, and Violent Night 2. The studio is renowned for franchises like Fast & Furious, Jurassic World, and Blumhouse horror. "
  },
  {
    id: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPj6RFA9rTidY7mkUXDtpQxGnQ46OVSe9EA&s",
    title: "Section 375 Movie",
    button: "Book Now",
    time : "200 min",
    description:
      "Section 375 (2019) is a critically acclaimed Hindi courtroom drama directed by Ajay Bahl, focusing on the complexities of rape laws in India. Starring Akshaye Khanna, Richa Chadha, Meera Chopra, and Rahul Bhat, the film explores a high-profile case where a filmmaker is accused of sexual assault by a crew member. ",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXoQK1IH282C34Vz8EzszOxxgHJXqjheJAA&s",
    title: "Dhurandhar indian ",
    button: "Book Now",
    time : "200 min",
    description:"Dhurandhar (2025) is a high-octane Hindi-language action-espionage thriller directed by Aditya Dhar, starring Ranveer Singh as a covert agent infiltrating Karachi's underworld to dismantle terror networks. Released on December 5, 2025, the film features a stellar cast including Akshaye Khanna, Sanjay Dutt, Arjun Rampal, and R. Madhavan, grossing over ₹1400 crores worldwide before releasing on Netflix. "
  },
  {
    id: 7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDvLhZdC6rVQieUi11JRth1hkhkw5w7jmmw&s",
    title: "Mercy hollywood ",
    button: "Book Now",
    time : "200 min",
    description:"Mercy (2026) is an Amazon MGM Studios sci-fi thriller starring Chris Pratt as a detective in a near-future AI-led police state who must prove his innocence in a 90-minute trial after being accused of murdering his wife. Directed by Timur Bekmambetov, the film also stars Rebecca Ferguson as an AI judge and was released in theaters on January 23, 2026. "
  },
  {
    id: 8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMJnbMWpNIYqK9hLgDr8-g0g8d_6aqoOi95A&s",
    title: "The screct solider ",
    button: "Book Now",
    time : "200 min",
    description:"13 Hours: The Secret Soldiers of Benghazi (2016) is a biographical war thriller directed by Michael Bay, detailing the 2012 terror attack on a U.S. compound in Libya. Based on a true story, it follows six CIA security contractors who fought to protect American lives against overwhelming odd"
  },
  {
    id: 9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUHFINTzLVo48Ez0nvrPyhozvEKO60q46KgA&s",
    title: "The Running wood",
    button: "Book Now",
    time : "200 min",
    description:`Runaway Woods (2018) - Adventure/Horror
Plot: A group of misfit kids, recently placed in an alternative school, decide to run away and hide in a local haunted wood. Strange things begin to happen, and they disappear one by one.
Details: Described as a "Breakfast Club meets the occult" style film, offering a gritty depiction of teen life. 
`
  },
  {
    id: 10,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5TT4DFFdI02Z4r0N3F5Kz0xid1gzaBgzdxw&s",
    title: "Bachel McAdams",
    time : "200 min",
    button: "Book Now",
    description:`Rachel McAdams is a acclaimed Canadian actress known for her versatile roles in romance, comedy, and drama, rising to fame in 2004 with Mean Girls and The Notebook. Her notable filmography includes Spotlight, Midnight in Paris, About Time, Red Eye, Doctor Strange, and Are You There God? It's Me, Margaret.. `
  },
  {
    id: 11,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwslcZUSBj7KqiqLJkfwMBR5ExbeGk9mlEFQ&s",
    title: "Professior and Token",
    button: "Book Now",time : "200 min",
    description:`The Professor (2018/2019)
Alternative Title: Richard Says Goodbye
Genre: Comedy-Drama
Release Date: May 17, 2019 (USA - Limited & Streaming)
Director/Writer: Wayne Roberts
Starring: Johnny Depp (Richard), Rosemarie DeWitt, Zoey Deutch, Danny Huston, Ron Livingston
Plot: After being diagnosed with terminal cancer and given six months to live, a buttoned-down college professor (Depp) decides to abandon all pretense and conventions, living his life with reckless abandon, drinking, smoking, and speaking his mind to his students and family.
Runtime: 90 Minutes`
  },
  {
    id: 12,time : "200 min",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYjxEnHFro_TOqMVoGLnrDbK-KL-Shf2-CLg&s",
    title: "The Women Right",
    button: "Book Now",
    description:`The Women (2008)
Release Date: September 12, 2008 (USA)
Director & Writer: Diane English
Genre: Comedy/Drama
Runtime: 114 minutes
Rating: PG-13 (for language, brief smoking, sex-related material, and some drug use)
Box Office: $50 million worldwide `
  },
];
export default cardsData;
