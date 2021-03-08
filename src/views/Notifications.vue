<template>
    <div class="notif">
        <notif />
    </div>
</template>

<script>
    // @ is an alias to /src
    import notif from '@/components/notif.vue'

    export default {
        name: 'Notification',
        components: {
            notif
        }
    }
</script>
