

export default {

  '/' : {
      'type'      : 'root',
      'archetype' : 'grid',
      'data'      : {
        'title': 'Hospital Clinico',
        'lead' : 'Bienvenido al sistema de citas médicas'
      },
      'links': [
        { 'rel' : 'info'     , 'label' : 'Info'      , 'href' : '/info'     , 'method' : 'GET' },
        { 'rel' : 'doctors'  , 'label' : 'Doctores'  , 'href' : '/doctors'  , 'method' : 'GET' },
        { 'rel' : 'hospitals', 'label' : 'Hospitales', 'href' : '/hospitals', 'method' : 'GET' },
      ]
  },

  '/doctors' : {
      'type'      : 'doctors',
      'archetype' : 'collection',
      'data'      : [
        { 'rel' : 'doctor', 'label' : 'Dra. Gomez', 'href' : '/doctor/101', 'method' : 'GET' },
        { 'rel' : 'doctor', 'label' : 'Dr. Pérez' , 'href' : '/doctor/102', 'method' : 'GET' },
        { 'rel' : 'doctor', 'label' : 'Dra. Ruiz' , 'href' : '/doctor/103', 'method' : 'GET' },
      ],
      'links': [
        { 'rel' : 'first',    'href' : '/doctors', 'method' : 'GET' },
        { 'rel' : 'previous', 'href' : '/doctors', 'method' : 'GET' },
        { 'rel' : 'next',     'href' : '/doctors', 'method' : 'GET' },
        { 'rel' : 'last',     'href' : '/doctors', 'method' : 'GET' },
      ]
  },

  '/doctor/101' :  {
      'type'      : 'doctor',
      'archetype' : 'entity',
      'data'      : {
        'code'       : 'CR-3425',
        'name'       : 'Dra. Gómez',
        'speciality' : 'Dermatología',
      },
      'links': [
        { 'rel' : 'slot', 'label' : '10:00', 'href' : '/slot/201', 'method' : 'GET' },
        { 'rel' : 'slot', 'label' : '11:00', 'href' : '/slot/202', 'method' : 'GET' },
        { 'rel' : 'slot', 'label' : '12:00', 'href' : '/slot/203', 'method' : 'GET' },
      ]
  },

  '/doctor/102' : {
      'type'      : 'doctor',
      'archetype' : 'entity',
      'data'      : {
        'code'       : 'CR-4573',
        'name'       : 'Dr. Pérez',
        'speciality' : 'Cardiología',
      },
      'links': [
        { 'rel' : 'slot', 'label' : '10:00', 'href' : '/slot/204', 'method' : 'GET' },
        { 'rel' : 'slot', 'label' : '11:00', 'href' : '/slot/205', 'method' : 'GET' },
        { 'rel' : 'slot', 'label' : '12:00', 'href' : '/slot/206', 'method' : 'GET' },
      ]
  },

  '/doctor/103' : {
      'type'      : 'doctor',
      'archetype' : 'entity',
      'data'      : {
        'code'       : '103',
        'name'       : 'Dra. Ruiz',
        'speciality' : 'Neurología',
      },
      'links': [
        { 'rel' : 'slot', 'label' : '10:00', 'href' : '/slot/207', 'method' : 'GET' },
        { 'rel' : 'slot', 'label' : '11:00', 'href' : '/slot/208', 'method' : 'GET' },
        { 'rel' : 'slot', 'label' : '12:00', 'href' : '/slot/209', 'method' : 'GET' },
      ]
  },

  '/slot/201' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '10:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/201', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/201', 'method' : 'DELETE' },
      ]
  },

  '/slot/202' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '11:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/202', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/202', 'method' : 'DELETE' },
      ]
  },

  '/slot/203' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '12:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/203', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/203', 'method' : 'DELETE' },
      ]
  },

  '/slot/204' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '10:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/204', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/204', 'method' : 'DELETE' },
      ]
  },

  '/slot/205' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '11:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/205', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/205', 'method' : 'DELETE' },
      ]
  },

  '/slot/206' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '12:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/206', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/206', 'method' : 'DELETE' },
      ]
  },

  '/slot/207' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '10:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/207', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/207', 'method' : 'DELETE' },
      ]
  },

  '/slot/208' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '11:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/208', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/208', 'method' : 'DELETE' },
      ]
  },

  '/slot/209' : {
      'type'      : 'slot',
      'archetype' : 'entity',
      'data'      : {
        'date'   : '2025-05-28',
        'time'   : '12:00',
        'status' : 'free',
      },
      'links': [
        { 'rel' : 'reserve', 'label' : 'Reservar', 'href' : '/slot/209', 'method' : 'POST'   },
        { 'rel' : 'release', 'label' : 'Liberar',  'href' : '/slot/209', 'method' : 'DELETE' },
      ]
  },


}