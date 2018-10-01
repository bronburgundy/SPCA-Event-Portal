exports.seed = (knex, Promise) => {
  return knex('volunteer_times').del()
    .then(function () {
      return knex('volunteer_times').insert([
        {id: 1, volunteer_id: 3, event_time_id: 30008},
        {id: 2, volunteer_id: 8, event_time_id: 30008},
        {id: 3, volunteer_id: 12, event_time_id: 30012},
        {id: 8, volunteer_id: 17, event_time_id: 30003},
        {id: 9, volunteer_id: 28, event_time_id: 30008},
        {id: 12, volunteer_id: 22, event_time_id: 30018},
        {id: 17, volunteer_id: 22, event_time_id: 30018},
        {id: 28, volunteer_id: 22, event_time_id: 30007},
        {id: 29, volunteer_id: 22, event_time_id: 30006},
        {id: 32, volunteer_id: 22, event_time_id: 30002},
        {id: 41, volunteer_id: 46, event_time_id: 30001},
        {id: 43, volunteer_id: 47, event_time_id: 30005},
        {id: 46, volunteer_id: 61, event_time_id: 30014},
        {id: 47, volunteer_id: 22, event_time_id: 30016},
        {id: 61, volunteer_id: 22, event_time_id: 30017},
        {id: 66, volunteer_id: 22, event_time_id: 30009},
        {id: 73, volunteer_id: 22, event_time_id: 30011},
        {id: 89, volunteer_id: 22, event_time_id: 30012},
        {id: 104, volunteer_id: 22, event_time_id: 30018},
        {id: 116, volunteer_id: 22, event_time_id: 30019}
      ])
    })
}
