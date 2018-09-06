exports.seed = (knex, Promise) => {
  return knex('events').del()
    .then(() => {
      return knex('events').insert([
        {id: 20181, name: 'Street Appeal', start_date: '8th March', end_date: '- 10th March', location: 'New Zealand', image: '/images/spca_volunteers6_opt.jpg'},
        {id: 20182, name: 'Cupcake Day', start_date: '6th August', end_date: '', location: 'New Zealand', image: '/images/cupcake.jpg'},
        {id: 20183, name: 'Auckland Marathon', start_date: '28th October', end_date: '', location: 'Auckland', image: '/images/marathon_opt.jpg'}
      ])
    })
}
