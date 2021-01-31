
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
//import { INITIAL_EVENTS, createEventId } from './event-utils'


export default {

  components: {
    FullCalendar,
  },

  data: function() {
    return {
      calendarOptions: {
        plugins: [
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin // needed for dateClick
        ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        buttonText :{
                today: 'Aujourd\'hui',
                month: 'Mois',
                week: 'Semaine',
                day: 'Jour',   
            },
            
        initialView: 'timeGridDay',
        //initialEvents: INITIAL_EVENTS, 
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        weekends: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents
       
      },
      currentEvents: []
    }
  },

  methods: {
    

    handleWeekendsToggle() {
      this.calendarOptions.weekends = !this.calendarOptions.weekends // affichage du weekend
    },

    handleDateSelect(selectInfo) {
      let title = prompt('entrer le titre de la tranche horaire')
      let calendarApi = selectInfo.view.calendar

      calendarApi.unselect() // clear date selection

      if (title) {
        calendarApi.addEvent({
         // id: createEventId(),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
          allDay: selectInfo.allDay
        })
      }
    },

    handleEventClick(clickInfo) {
      if (confirm(`etes vous sur de vouloir supprimer'${clickInfo.event.title}'`)) {
        clickInfo.event.remove()
      }
    },

    handleEvents(events) {
      this.currentEvents = events
    }
  }
  
}
</script>

<template>

  <div class='testapp'>

    <div class='testapp-sidebar'>
        <div class='testapp-sidebar-section-menu'>

        <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQHYyaiHKZxWkw/company-logo_200_200/0/1555486766503?e=1619049600&amp;v=beta&amp;t=bYggFxmZFNLHnMKqtP7Gto2w7dUQGyjbBIzzAxZ0U-U" loading="lazy" alt="Logo de COLAS DIGITAL SOLUTIONS" id="ember62" class="lazy-image ember-view org-top-card-primary-content__logo" title="" style="--darkreader-inline-outline:#ac2622;"/>

        <label>


          <router-link to="/">Accueil</router-link><br/>
          <router-link to="/user">Utilisateur</router-link><br/>
          <router-link to="/Notifications">Notifications</router-link><br/>
          <router-link to="/Parameters">Paramètres</router-link>
          <router-view></router-view>
        </label>

      </div>

 
      <div class='testapp-sidebar-section'>
        <label>
          <input
            type='checkbox'
            :checked='calendarOptions.weekends'
            @change='handleWeekendsToggle'
          />
          afficher le weekend
        </label>
      </div>
      <div class='testapp-sidebar-section'>
        <h2>les evenements ({{ currentEvents.length }})</h2>
        <ul>
          <li v-for='event in currentEvents' :key='event.id'>
            <!--<b>{{ event.startStr }}</b>-->
           <!-- <i>{{ event.title }}</i>-->
          </li>
        </ul>
      </div>
    </div>
    <div class='testapp-main'>
      <FullCalendar
        class='testapp-calendar'
        :options='calendarOptions'
      >
        <template v-slot:eventContent='arg'>
          <b>{{ arg.timeText }}</b>
          <i>{{ arg.event.title }}</i>
        </template>
      </FullCalendar>
     
    </div>
  </div>
</template>

<style lang='css'>

h2 {
  margin: 0;
  font-size: 16px;
}

ul {
  margin: 0;
  padding: 0 0 0 1.5em;
}

li {
  margin: 1.5em 0;
  padding: 0;
}

b { /* used for event dates/times */
  margin-right: 3px;
}

.testapp {
  display: flex;
  min-height: 100%;
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
}

.testapp-sidebar {
  width: 300px;
  line-height: 1.5;
  background: #eaf9ff;
  border-right: 1px solid #d3e2e8;
}

.testapp-sidebar-section {
  padding: 2em;
}
.testapp-sidebar-section-menu {
  background-color: #eaf9ff;
  border: black;
  color: black;
  padding: 2em;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.testapp-main {
  flex-grow: 1;
  padding: 3em;
}

.fc { /* the calendar root */
  max-width: 1100px;
  margin: 0 auto;
}

</style>
