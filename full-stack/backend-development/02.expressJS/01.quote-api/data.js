const quotes = [
  {
    id: 1,
    quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
    person: 'Ellen Ullman',
    year: '1998'
  },
  {
    id: 2,
    quote: 'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    person: 'Anonymous',
    year: '1990'
  },
  {
    id: 3,
    quote: `If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.`,
    person: 'Grace Hopper',
    year: '2019'
  },
  {
    id: 4,
    quote: 'The city’s central computer told you?  R2D2, you know better than to trust a strange computer!',
    person: 'C-3PO',
    year: '1980'
  },
  {
    id: 5,
    quote: 'I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone.',
    person: 'Bjarne Stroustrup',
    year: '1986'
  },
  {
    id: 6,
    quote: 'Understand well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand.',
    person: 'Ada Lovelace',
    year: '2011'
  },
  {
    id: 7,
    quote: 'Java is to JavaScript as ham is to hamster.',
    person: 'Jeremy Keith',
    year: '2009'
  },
  {
    id: 8,
    quote: `The most dangerous phrase in the language is, "We've always done it this way."`,
    person: 'Grace Hopper',
    year: '2014'
  },
  {
    id: 9,
    quote: 'As soon as we started programming, we found to our surprise that it wasn’t as easy to get programs right as we had thought.  Debugging had to be discovered.  I can remember the exact instant when I realized that a large part of my life from then on was going to be spent in finding mistakes in my own programs.',
    person: 'Maurice Wilkes',
    year: '2018'
  },
  {
    id: 10,
    quote: 'Learning to write programs stretches your mind, and helps you think better, creates a way of thinking about things that I think is helpful in all domains.',
    person: 'Bill Gates',
    year: '2013'
  },
  {
    id: 11,
    quote: 'What one programmer can do in one month, two programmers can do in two months.',
    person: 'Fred Brooks',
    year: '2017'
  },
  {
    id: 12,
    quote: 'The Internet? Is that thing still around?',
    person: 'Homer Simpson',
    year: '2006'
  },
  {
    id: 13,
    quote: 'If you tell me precisely what it is a machine cannot do, then I can always make a machine which will do just that.',
    person: 'Jon von Neumann',
    year: '1947'
  },
];

const bioData = [
  {
    id: 1,
    name: "Ada Lovelace",
    dateOfBirth: "December 10, 1815",
    placeOfBirth: "London, England",
    occupation: "Mathematician and writer",
    achievements: [
      "First computer programmer"
    ]
  },
  {
    id: 2,
    name: "Marie Curie",
    dateOfBirth: "November 7, 1867",
    placeOfBirth: "Warsaw, Poland",
    occupation: "Physicist and chemist",
    achievements: [
      "Pioneering research on radioactivity",
      "First woman to win a Nobel Prize"
    ]
  },
  {
    id: 3,
    name: "Homer Simpson",
    dateOfBirth: "May 12, 1956",
    placeOfBirth: "Springfield, USA",
    occupation: "Nuclear safety inspector",
    achievements: [
      "Longest-running animated television series character"
    ]
  },
  {
    id: 4,
    name: "Fred Brooks",
    dateOfBirth: "April 19, 1931",
    placeOfBirth: "Durham, North Carolina, USA",
    occupation: "Computer scientist",
    achievements: [
      "Author of 'The Mythical Man-Month'",
      "Leader in computer architecture, operating systems, and software engineering"
    ]
  },
  {
    id: 5,
    name: "Bill Gates",
    dateOfBirth: "October 28, 1955",
    placeOfBirth: "Seattle, Washington, USA",
    occupation: "Business magnate, software developer, and philanthropist",
    achievements: [
      "Co-founder of Microsoft Corporation",
      "One of the wealthiest individuals in the world",
      "Co-chair of the Bill & Melinda Gates Foundation"
    ]
  },
  {
    id: 6,
    name: "Maurice Wilkes",
    dateOfBirth: "June 26, 1913",
    placeOfBirth: "Dudley, Worcestershire, England",
    occupation: "Computer scientist",
    achievements: [
      "Designer and builder of the Electronic Delay Storage Automatic Calculator (EDSAC)",
      "Pioneering contributions to computer science and programming"
    ]
  },
  {
    id: 7,
    name: "Grace Hopper",
    dateOfBirth: "December 9, 1906",
    placeOfBirth: "New York City, New York, USA",
    occupation: "Computer scientist and United States Navy rear admiral",
    achievements: [
      "Developer of the first compiler for a programming language",
      "Co-creator of COBOL programming language",
      "Recipient of the Presidential Medal of Freedom"
    ]
  },
  {
    id: 8,
    name: "Jeremy Lovelace",
    dateOfBirth: "March 3, 1978",
    placeOfBirth: "San Francisco, California, USA",
    occupation: "Software engineer",
    achievements: [
      "Lead developer of several open-source projects",
      "Contributor to advancements in web development"
    ]
  },
  {
    id: 9,
    name: "Bjarne Stroustrup",
    dateOfBirth: "December 30, 1950",
    placeOfBirth: "Aarhus, Denmark",
    occupation: "Computer scientist",
    achievements: [
      "Creator of the C++ programming language",
      "Author of 'The C++ Programming Language'"
    ]
  },
  {
    id: 10,
    name: "Ellen Ullman",
    dateOfBirth: "January 1, 1955",
    placeOfBirth: "New York City, New York, USA",
    occupation: "Author and software engineer",
    achievements: [
      "Author of 'Close to the Machine: Technophilia and Its Discontents'",
      "Contributor to the development of early programming languages and internet technologies"
    ]
  }
];

module.exports = {
  quotes,
  bioData
};
