const gameQuestions = [
      {
        _id: 1,
        category: "Science",
        question: "She was the inventor of laser cataract surgery",
        options: [
            { answer: "Who is Mary Jackson?", isCorrect: false },
            { answer: "Who is Dorothy Vaughan?", isCorrect: false },
            { answer: "Who is Patricia Bath?", isCorrect: true }
        ],
        isFlipped: false 
    },
        {
        _id: 2,
        category: "Tech",
        question: "She is considered to be the very first computer programmer.",
        options: [
            { answer: "Who is Grace Hopper?", isCorrect: false },
            { answer: "Who is Katherine Johnson?", isCorrect: false },
            { answer: "Who is Ada Lovelace?", isCorrect: true }
        ]
    },
        {
        _id: 3,
        category: "Engineering",
        question: "She invented a frequency hopping invention, called a 'Secret Communications System', that became the basis for tech we use today such as wi-fi and bluetooth",
        options: [
            { answer: "Who is Dr. Gladys West?", isCorrect: false },
            { answer: "Who is Hedy Lamarr?", isCorrect: true },
            { answer: "Who is Annie Easeley?", isCorrect: false }
        ]
    },
    {
        _id: 4,
        category: "Math",
        question: "Mathematician noted for her flight trajectory calculations and significant contributions to the success of various NASA space missions.",
        options: [
            { answer: "Who is Mary Jackson?", isCorrect: false },
            { answer: "Who is Dorothy Vaughan?", isCorrect: false },
            { answer: "Who is Katherine Johnson?", isCorrect: true }
        ]
    },
        {
        _id: 5,
        category: "Science",
        question: "She is the only woman to have won the Nobel Prize twice (in Chemistry and Physics).",
        options: [
            { answer: "Who is Jennifer Doudna?", isCorrect: false },
            { answer: "Who is Marie Curie?", isCorrect: true },
            { answer: "Who is Andrea Ghez?", isCorrect: false }
        ]
    },
      {
        _id: 6,
        category: "Tech",
        question: "She is said to have coined the term 'debugging'",
        options: [
            { answer: "Who is Ada Lovelace?", isCorrect: false },
            { answer: "Who is Grace Hopper?", isCorrect: true },
            { answer: "Who is Marissa Mayer?", isCorrect: false }
        ]
    },
        {
        _id: 7,
        category: "Engineering",
        question: "She contributed to the completion of the Brooklyn Bridge over span of 10 years after her husband (the Chief Engineer on the project) fell ill.",
        options: [
            { answer: "Who is Emily Warren Roebling?", isCorrect: true },
            { answer: "Who is Lillian Gilbreth?", isCorrect: false },
            { answer: "Who is Edith Clarke?", isCorrect: false }
        ]
    },
    {
        _id: 8,
        category: "Math",
        question: "'Hidden Figure' mathematician who became the first African American supervisor at NACA (which later became NASA).",
        options: [
            { answer: "Who is Dorothy Vaughan?", isCorrect: true },
            { answer: "Who is Katherine Johnson?", isCorrect: false },
            { answer: "Who is Mary Jackson?", isCorrect: false }
        ]
    },
        {
        _id: 9,
        category: "Science",
        question: "She was the first black woman to travel into space as a Mission Specialist with the Shuttle Endeavour crew.",
        options: [
            { answer: "Who is Dr. Sian Proctor?", isCorrect: false },
            { answer: "Who is Dr. Mae Jemison?", isCorrect: true },
            { answer: "Who is Jeanette Epps?", isCorrect: false }
        ]
    },
    
    {
        _id: 10,
        category: "Tech",
        question: "This Software Engineer's team developed the 'asynchronous executive' feature that saved the NASA Apollo mission landing",
        options: [
            { answer: "Who is Grace Hopper?", isCorrect: false },
            { answer: "Who is Annie Easeley?", isCorrect: false },
            { answer: "Who is Margaret Hamilton?", isCorrect: true }
        ]
    },
    
    {
        _id: 11,
        category: "Engineering",
        question: "She was the first professionally employed female electrical engineer in the U.S., the inventor of a patented graphical calculator and contributor to the design of the Hoover Dam.",
        options: [
            { answer: "Who is Lillian Gilbreth?", isCorrect: false },
            { answer: "Who is Emily Warren Roebling?", isCorrect: false },
            { answer: "Who is Edith Clarke?", isCorrect: true }
        ]
    },
    {
        _id: 12,
        category: "Math",
        question: "She made significant contributions to abstract Algebra, and Albert Einstein described her as a 'creative mathematical genius'",
        options: [
            { answer: "Who is Emily Noether?", isCorrect: true },
            { answer: "Who is Hypatia?", isCorrect: false },
            { answer: "Who is Sophia Germain?", isCorrect: false }
        ]
    },

      {
        _id: 13,
        category: "Science",
        question: "She was the first Hispanic woman in space aboard the Space Shuttle Discovery",
        options: [
            { answer: "Who is Serena M. Auñón-Chancellor?", isCorrect: false },
            { answer: "Who is Adriana Ocampo?", isCorrect: false },
            { answer: "Who is Dr. Ellen Ochoa?", isCorrect: true }
        ]
    },
      {
        _id: 14,
        category: "Tech",
        question: "She is a computer programmer and network engineer responsible for developing the algorithm for spanning tree protocol (STP), which was key to the development of network operations and the Internet.",
        options: [
            { answer: "Who is Sister Mary Kenneth Keller?", isCorrect: false },
            { answer: "Who is Radia Perlman?", isCorrect: true },
            { answer: "Who is Beatrice Worsley?", isCorrect: false }
        ]
    },
      {
        _id: 15,
        category: "Engineering",
        question: "In 1958, she became NASA's first black female engineer.",
        options: [
            { answer: "Who is Mary Jackson?", isCorrect: true },
            { answer: "Who is Katherine Johnson?", isCorrect: false },
            { answer: "Who is Dorothy Vaughan?", isCorrect: false }
        ]
    },
        {
        _id: 16,
        category: "Math",
        question: "This mathematician's work led to the development of the Global Positioning System(GPS).",
        options: [
            { answer: "Who is Hedy Lamarr?", isCorrect: false },
            { answer: "Who is Katherine Johnson?", isCorrect: false },
            { answer: "Who is Dr. Gladys West?", isCorrect: true }
        ]
    }


    // {
    //     _id: 17,
    //     category: "Science",
    //     question: "She was the first American woman to fly into space.",
    //     options: [
    //         { answer: "Who is Jessica Meir?", isCorrect: false },
    //         { answer: "Who is Peggy Whitson?", isCorrect: false },
    //         { answer: "Who is Dr. Sally Ride?", isCorrect: true }
    //     ]
    // },
    // {
    //     _id: 18,
    //     category: "Science",
    //     question: "This English primatologist/anthropologist studied chimpanzees in the forest of Gombe",
    //     options: [
    //         { answer: "Who is Dian Fossey?", isCorrect: false },
    //         { answer: "Who is Biruté Marija Filomena Galdikas?", isCorrect: false },
    //         { answer: "Who is Dr. Jane Goodall?", isCorrect: true }
    //     ]
    // },
    // {
    //     _id: 19,
    //     category: "Science",
    //     question: "This English paleontologist found the first complete Ichthyosaur fossil in 1811, when she was just 12 years old.",
    //     options: [
    //         { answer: "Who is Annie Montague Alexander?", isCorrect: false },
    //         { answer: "Who is Mary Anning?", isCorrect: true },
    //         { answer: "Who is Mignon Talbot?", isCorrect: false }
    //     ]
    // },
    // {
    //     _id: 20,
    //     category: "Science",
    //     question: "She has logged more time in space than any other American astronaut.",
    //     options: [
    //         { answer: "Who is Peggy Whitson?", isCorrect: true },
    //         { answer: "Who is Dr. Sally Ride?", isCorrect: false },
    //         { answer: "Who is Christina Koch?", isCorrect: false }
    //     ]
    // },
    // {
    //     _id: 21,
    //     category: "Science",
    //     question: "In 1821, she was the first woman to graduate from medical school in the U.S.",
    //     options: [
    //         { answer: "Who is Elizabeth Blackwell?", isCorrect: true },
    //         { answer: "Who is Rebecca Lee Crumpler?", isCorrect: false },
    //         { answer: "Who is Margaret Chung?", isCorrect: false }
    //     ]
    // }

    
    // {
    //     _id: 22,
    //     category: "STEM Stats",
    //     question: "According to PEW Research, this percentage of adults employed in Engineering & Architecture fields combined are women",
    //     options: [
    //         { answer: "What is 6%?", isCorrect: false },
    //         { answer: "What is 34%?", isCorrect: false },
    //         { answer: "What is 15%?", isCorrect: true }
    //     ]
    // },
    // {
    //     _id: 23,
    //     category: "STEM Stats",
    //     question: "Men in STEM occupations earn a median of $90,000 per year.  This is the median salary for women in STEM occupations (based on PEW Research)",
    //     options: [
    //         { answer: "What is $89,000?", isCorrect: false },
    //         { answer: "What is $102,000?", isCorrect: false },
    //         { answer: "What is $66,200?", isCorrect: true }
    //     ]
    // },
    // {
    //     _id: 24,
    //     category: "STEM Stats",
    //     question: "From 2010-2018, the growth in college & university degrees awarded was 20%.  This was the growth in STEM degrees awarded during that same period. (Source: PEW Research)",
    //     options: [
    //         { answer: "What is 45%?", isCorrect: false },
    //         { answer: "What is 62%?", isCorrect: true },
    //         { answer: "What is 75?", isCorrect: false }
    //     ]
    // },
    // {
    //     _id: 25,
    //     category: "STEM Stats",
    //     question: "According to census.gov, in 2019 women represented about 48% of the total workforce.  Women represented this percentage of the total STEM workforce that same year.",
    //     options: [
    //         { answer: "What is 55%?", isCorrect: false },
    //         { answer: "What is 31%?", isCorrect: false },
    //         { answer: "What is 27%?", isCorrect: true }
    //     ]
    // }
]