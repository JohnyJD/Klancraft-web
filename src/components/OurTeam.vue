<template>
    <div id="our-team">
        <h2>SPOZNAJ NÁŠ <span class="greenish">TÍM</span></h2>
        <div class="team-list">
            <div>
                <team-item :data="teamData[0]" />
            </div>
            <div class="developers">
                <team-item v-for="member in getExceptRoot" :key="member.nick" :data="member" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref, computed } from 'vue'
import TeamItem from './ListItems/TeamItem.vue'
export default {
  components: { TeamItem },
    setup() {
        const teamData = ref([{nick: 'Idepatooo', desc: 'Majiteľ', imgPath: '/src/assets/team/Idepato_head.png'}, {nick: 'Crelo_X', desc: 'Hlavný developer', imgPath: '/src/assets/team/Crelo_x_head.png'}, {nick: 'P3p1kSvK', desc: 'Developer', imgPath: '/src/assets/team/p3p1ksvk.png'}, {nick: 'Samdzi', desc: 'Developer', imgPath: '/src/assets/team/samdzi.png'}, {nick: 'Forest_18', desc: 'Developer', imgPath: '/src/assets/team/Forest_18.png'}]);    
        const getExceptRoot = computed(() => {
            return teamData.value.filter((member, id) => {
                return id !== 0
            })
        })
        return {teamData, getExceptRoot}
    },
}
</script>

<style scoped>
    #our-team {
        margin: 100px 0;
    }
    #our-team h2 {
        position: relative;
        width: 100%;
        font-size: 3.5em;
        text-align: center;
    }
    #our-team h2::before {
        position: absolute;
        content: "";
        bottom: -20px;
        left: 50%;
        width: 300px;
        height: 3px;
        background: #14461d;
        transform: translateX(-50%);
    }

    .team-list {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .team-list > div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>