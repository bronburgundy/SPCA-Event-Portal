exports.seed = (knex, Promise) => {
  return knex('event_times').del()
    .then(() => {
      return knex('event_times').insert([
        {id: 30001, date: '8/03/2019', time_slot: '8-10', event_id: 20181},
        {id: 30002, date: '8/03/2019', time_slot: '10-12', event_id: 20181},
        {id: 30003, date: '8/03/2019', time_slot: '12-2', event_id: 20181},
        {id: 30004, date: '8/03/2019', time_slot: '2-4', event_id: 20181},
        {id: 30005, date: '8/03/2019', time_slot: '4-6', event_id: 20181},
        {id: 30006, date: '9/03/2019', time_slot: '8-10', event_id: 20181},
        {id: 30007, date: '9/03/2019', time_slot: '10-12', event_id: 20181},
        {id: 30008, date: '9/03/2019', time_slot: '12-2', event_id: 20181},
        {id: 30009, date: '9/03/2019', time_slot: '2-4', event_id: 20181},
        {id: 30010, date: '9/03/2019', time_slot: '4-6', event_id: 20181},
        {id: 30011, date: '10/03/2019', time_slot: '8-10', event_id: 20181},
        {id: 30012, date: '10/03/2019', time_slot: '10-12', event_id: 20181},
        {id: 30013, date: '10/03/2019', time_slot: '12-2', event_id: 20181},
        {id: 30014, date: '10/03/2019', time_slot: '2-4', event_id: 20181},
        {id: 30015, date: '10/03/2019', time_slot: '4-6', event_id: 20181},
        {id: 30016, date: '6/08/2019', time_slot: '8-12', event_id: 20182},
        {id: 30017, date: '6/08/2019', time_slot: '12-4', event_id: 20182},
        {id: 30018, date: '28/10/2019', time_slot: '8-12', event_id: 20183},
        {id: 30019, date: '28/10/2019', time_slot: '12-4', event_id: 20183}
      ])
    })
}
