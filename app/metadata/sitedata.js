module.exports = {
  statistics: [{
    counter: 100,
    caption: 'Attendees'
  }, {
    counter: 3,
    caption: 'Parallel tracks'
  }, {
    counter: '10+',
    caption: 'Code Labs'
  }, {
    counter: 20,
    caption: 'Sessions'
  }],
  callToAction: {
    text: 'GDG DevFest Sun Coast 2015',
    buttonText: 'See how it was',
    video: {
      id: 't95z_HLMTmM',
      title: 'GDG DevFest Ukraine 2014 - Highlights'
    }
  },
  galleryBlock: {
    title: 'GDG DevFest Sun Coast 2015 - Photos',
    photos: {
      big: '../images/backgrounds/2015_1.jpg',
      small: ['../images/backgrounds/2015_2.jpg', '../images/backgrounds/2015_3.jpg']
    },
    albumUrl: 'https://plus.google.com/photos/103948420531198832035/albums/6215552964698512225'
  },
  ticketsBlock: {
    title: 'Tickets',
    tickets: [{
      name: 'Early Bird',
      price: 30,
      currency: 'USD',
      info: '*Before September 30',
      soldOut: false
    }, {
      name: 'Lazy Bird',
      price: 45,
      currency: 'USD',
      info: '*After September 30',
      soldOut: false
    }],
    details: 'Tickets grant access to all speaker sessions, breakouts, codelabs, coffee breaks, lunch and after party. Accommodation and/or travel is NOT included in the ticket price.'
  },
  socialFeed: {
    source: '/data/tweets.json'
  },
  partnershipProposition: '/assets/GDG_DevFest_Ukraine_2015_Partnership_Proposition.pdf'
};
