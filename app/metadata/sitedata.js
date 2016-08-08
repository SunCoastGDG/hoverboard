module.exports = {
  statistics: [{
    counter: 100,
    caption: 'Attendees'
  }, {
    counter: 3,
    caption: 'Parallel tracks'
  }, {
    counter: '2+',
    caption: 'Code Labs'
  }, {
    counter: '20+',
    caption: 'Sessions'
  }],
  callToAction: {
    text: 'Android DevFest Space Coast 2014 - Photos',
    buttonText: 'See how it was',
    video: {
      id: 't95z_HLMTmM',
      title: 'GDG DevFest Ukraine 2014 - Highlights'
    }
  },
  galleryBlock: {
    title: 'Android DevFest Space Coast 2014 - Photos',
    photos: {
      big: '../images/backgrounds/AndroidDevFestSpaceCoast2014_AndroidTV.jpg',
      small: [
        '../images/backgrounds/AndroidDevFestSpaceCoast2014_Design-Winners.jpg',
        '../images/backgrounds/AndroidDevFestSpaceCoast2014_Auditorium.jpg'
      ]
    },
    albumUrl: 'https://goo.gl/photos/e4FPjXYXJYUh9YqSA'
  },
  ticketsBlock: {
    title: 'Tickets',
    tickets: [{
      name: 'Early Bird',
      price: 'TBA',
      currency: 'USD',
      info: '*Before September 30',
      soldOut: false
    }, {
      name: 'Lazy Bird',
      price: 'TBA',
      currency: 'USD',
      info: '*After September 30',
      soldOut: false
    }],
    details: 'Tickets grant access to all speaker sessions, breakouts, code labs, coffee breaks, lunch, and after party. Accommodation and/or travel is NOT included in the ticket price.'
  },
  socialFeed: {
    source: '/data/tweets.json'
  },
  partnershipProposition: '/assets/DevFestFloridaPartnershipProposal.pdf'
};
