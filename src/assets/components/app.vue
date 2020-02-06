<template>
  <div class="app">
    <div class="container">
      <div class="header">
        <div class="column">
          <img class="profile__picture" :src="profile.picture" alt="Profile Picture">
        </div>
        <div class="column">
          <h1 v-html="profile.name"></h1>
          <h5 v-html="profile.role"></h5>
          <h5>Currently <span v-if="profile.looking === false">not</span> looking for new job opportunities.</h5>
        </div>
      </div>
      <div class="columns">
        <div class="block">
          <div class="column title">
            <strong>CONTACT</strong>
          </div>
          <div class="column">
            <a v-for="(value, key) in contact" target="_blank" :href="value" class="btn">{{ key }}</a>
          </div>
        </div>
        <div class="block">
          <div class="column title">
            <strong>OVERVIEW</strong>
          </div>
          <div class="column">
            <p v-html="about"></p>
          </div>
        </div>
        <div class="block">
          <div class="column title">
            <strong>EXPERIENCE</strong>
          </div>
          <div class="column">
            <div class="item" v-for="place in experience">
              <div class="subtitle">
                <b>{{ place.job }}</b> - <a v-for="resource in place.links" :href="resource.url">{{ resource.name }}</a>
              </div>
              <small>{{ place.period }}</small>
              <p>{{ place.description }}</p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="column title">
            <strong>PROJECTS</strong>
          </div>
          <div class="column">
            <div class="item" v-for="project in projects">
              <div class="subtitle"><b>{{ project.name }}, </b><a v-for="resource in project.links" target="_blank" :href="resource.url">{{ resource.name }} </a></div>
              <p v-html="project.description"></p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="column title">
            <strong>EDUCATION</strong>
          </div>
          <div class="column">
            <div class="item" v-for="value in education">
              <div class="subtitle"><b v-html="value.name"></b></div>
              <small v-html="value.period"></small>
              <p v-html="value.subject"></p>
            </div>
          </div>
        </div>
        <div class="block">
          <div class="column title">
            <strong>SKILLS</strong>
          </div>
          <div class="column">
            <div class="item">
              <div class="subtitle"><b>Proficient</b></div>
              <p v-html="renderList(skills.proficient)"></p>
            </div>
            <div class="item">
              <div class="subtitle"><b>Familiar</b></div>
              <p v-html="renderList(skills.familiar)"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'App',
        data: function () {
            return {
                looking: false,
                profile: {
                    name: 'Mindaugas Dangveckis',
                    role: 'Web Apps / Software Developer',
                    picture: 'https://graph.facebook.com/100000129340380/picture?width=100&height=100'
                },
                contact: {
                    LinkedIn: 'https://www.linkedin.com/in/mindaugas-dangveckis',
                    GitHub: 'https://github.com/Miindaugas'
                },
                about: 'Experienced <b>Mid Level Developer</b> with a demonstrated history of working in the information technology and services industry.',
                experience: [
                    {
                        job: 'Front-End Developer',
                        period: 'April 2019 - Present',
                        description: 'Front-End Development (Angular / ES6)',
                        links: [
                            {
                                name: 'Telesoftas',
                                url: 'http://telesoftas.com'
                            }
                        ]
                    },
                    {
                        job: 'Front-End Developer',
                        period: 'December 2017 - March 2019',
                        description: 'Front-End Development (React / ES6)',
                        links: [
                            {
                                name: 'EMR Express Inc',
                                url: '#'
                            }
                        ]
                    },
                    {
                        job: 'Web / iOS / Android Developer',
                        period: 'January 2015 - September 2017',
                        description: 'Working with IT projects, Mobile Applications development.',
                        links: [
                            {
                                name: 'Creative Partner',
                                url: 'http://cpartner.lt'
                            }
                        ]
                    },
                    {
                        job: 'IT technician',
                        period: 'August 2013 - July 2014',
                        description: 'Computer and other hardware fault detection, repair, and maintenance..',
                        links: [
                            {
                                name: 'Klaipėda State University of Applied Science',
                                url: 'http://kvk.lt'
                            }
                        ]
                    },
                    {
                        job: 'Web Developer',
                        period: 'February 2012 - December 2014',
                        description: 'Various IT solutions programming, mostly for web. HTML / CSS / PHP / JS / MYSQL / Flash AS3 / etc.',
                        links: [
                            {
                                name: 'Amburia Branding',
                                url: '#'
                            }
                        ]
                    }
                ],
                projects: [
                    {
                        name: 'SMK Timetable',
                        description: 'Web based system with allow to manage school schedule, has custom time grid, teacher list, subjects, and lots more requested functionality.',
                        links: [
                            {
                                name: 'Website',
                                url: 'http://tvarkarasciai.smk.lt'
                            },
                            {
                                name: 'Android',
                                url: 'https://play.google.com/store/apps/details?id=lt.cpartner.smktimetable&hl=en'
                            }
                        ]
                    },
                    {
                        name: 'Skydiving Booking System',
                        description: 'Booking system with allows you to set time frame for available reservations. Implemented Google Calendar with syncs reservations between calendar application and website and allows you to manage them through calendar.',
                        links: [
                            {
                                name: 'Website',
                                url: 'https://rezervacijos.skydiving.lt'
                            }
                        ]
                    },
                    {
                        name: 'Akumai.lt',
                        description: 'API Service for akumai.lt with suggest battery for your car. Batteries import, database, algorithms, admin panel to manage data.',
                        links: [
                            {
                                name: 'Website',
                                url: 'http://akumai.lt'
                            }
                        ]
                    },
                    {
                        name: 'Klaipėdos Universitetas',
                        description: 'Application for Klaipėda University with presents university news with includes audio and photo files.',
                        links: [
                            {
                                name: 'iOS',
                                url: 'https://itunes.apple.com/st/app/klaip%C4%97dos-universitetas/id1110002893?mt=8'
                            }
                        ]
                    }
                ],
                education: [
                    {
                        name: 'Klaipeda State University of Applied Sciences',
                        period: 'September 2012 - June 2015',
                        subject: 'Informatics'
                    },
                    {
                        name: 'Klaipėdos "Aukuro" High School',
                        period: 'September 2000 - June 2012'
                    }
                ],
                skills: {
                    proficient: ['JavaScript', 'Node.js', 'ES6', 'Angular', 'React', 'Webpack', 'Git'],
                    familiar: ['Java', 'Android', 'iOS', 'Kotlin', 'Swift', 'PHP']
                }
            }
        },
        methods: {
            renderList: function (list) {
                return list.join(', ') + '.';
            }
        }
    }
</script>

