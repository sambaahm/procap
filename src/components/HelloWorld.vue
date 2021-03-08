
<script>
    import FullCalendar from '@fullcalendar/vue'
    import dayGridPlugin from '@fullcalendar/daygrid'
    import timeGridPlugin from '@fullcalendar/timegrid'
    import interactionPlugin from '@fullcalendar/interaction'
    import PlannigService from '@/services/PlanningService'
    import draggable from "vuedraggable"
    //import Events from '/components/Events'
    //import { INITIAL_EVENTS, createEventId } from './event-utils'


    export default {

        components: {
            FullCalendar,
            draggable,

        },
        /* setup(){
         const items = ref ([
           {id: 0 ,title: 'events A', list:1},
           {id: 1 ,title: 'events B', list:2},

         ])
         const getList = (events)=>{
           return events.value.filter((item)=>item.events == list)
         }
         const startDrag = (event, events) =>{
           console.log(items)
           event.dataTransfer.dropEffect ='move'
           event.dataTransfer.effectAllowed ='move'
           event.dataTransfer.setData('itemID', item.id)

         }
         const onDrop = (event,events) =>{
           const itemID = event.dataTransfer.getData('itemID')
           const item = items.value.find((item) => item.id == itemID )
           item.list = list
         }

         return{getList,
         startDrag,
         onDrop
         } */

        data: function () {
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
                    buttonText: {
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
                    eventsSet: this.handleEvents,
                    droppable: true

                },
                currentEvents: []
                ,
                events: [
                    {
                        id: 1,
                        title: "travail"
                    },
                    {
                        id: 2,
                        title: "pause"
                    },
                    {
                        id: 3,
                        title: "reunion"
                    }
                ]

            }
        },
        async mounted() {
            this.currentEvents = await PlannigService.index()
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
                        //id: createEventId(),
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

            },

        }

    }
</script>

<template>

    <div class='testapp'>



        <div class='testapp-sidebar'>
            <div class='testapp-sidebar-section-menu'>
                <div>
                    <!-- <div list="events" :key="events.id" class="drag-el" draggable="true" @dragstart="startDrag($events)"/>
                              <draggable :list="events">
                    <user-card
                               :id="id"
                               class="event"
                               @dragover.prevent
                               @drop.prevent="drop">

                    </user-card>
                </draggable>
                                 -->
                </div>

                <label>
                    <router-link to="/about">HomePage</router-link><br />
                    <router-link to="/user">Utilisateur</router-link><br />
                    <router-link to="/Notifications">Notifications</router-link><br />
                    <router-link to="/Parameters">Paramètres</router-link>
                    <router-view></router-view>
                </label>

            </div>


            <div class='testapp-sidebar-section'>
                <label>
                    <input type='checkbox'
                           :checked='calendarOptions.weekends'
                           @change='handleWeekendsToggle' />
                    afficher le weekend
                </label>
            </div>
            <div class='testapp-sidebar-section'>
                <h2>les evenements <!--({{ currentEvents.length }})--></h2>
                <!--<ul>
            <li v-for='event in currentEvents' :key='event.id'>
                  <!--<b>{{ event.startStr }}</b>-->
                <!-- <i>{{ event.title }}</i>
            </li>
            </ul>-->
                <div id='events'>
                    <!--<div id='external-events-listing'>

                        <div class='fc-event' v-fcevent>My Event 1</div>
                        <div class='fc-event' v-fcevent>My Event 2</div>
                    </div>
                    <p>
                        <input type='checkbox' id='drop-remove' checked='checked' />
                        <label for='drop-remove'>remove after drop</label>
                    </p>
                </div>-->
                    <ul>
                        <li v-for='event in events' :key='events.id' draggable="true" class="drag-el" dropzone="testapp-calendar">
                            {{ event.title }}

                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class='testapp-main'>
            <FullCalendar class='testapp-calendar'
                          :options='calendarOptions'
                          @dragenter.prevent
                          @dragover.prevent>
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
    #external-events {
        float: left;
        width: 150px;
        padding: 0 10px;

        text-align: left;
    }

        #external-events h4 {
            font-size: 16px;
            margin-top: 0;
            padding-top: 1em;
        }

        #external-events .fc-event {
            margin: 10px 0;
            cursor: pointer;
        }

        #external-events p {
            margin: 1.5em 0;
            font-size: 11px;
            color: #666;
        }

         #external-events p input {
                margin: 0;
                vertical-align: middle;
            }
    .drag-el {
        background-color: dodgerblue;
        color: aliceblue;
        padding: 5px;
        margin: 10px;
    }

</style>
   
