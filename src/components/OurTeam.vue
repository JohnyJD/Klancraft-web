<template>
    <div id="ourteam">
        <h2 class="main-header-h2">SPOZNAJ NÁŠ <span class="greenish">TÍM</span></h2>
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
import getImgPath from '@/imgPath.js'

export default {
  components: { TeamItem },
    setup() {
        const teamData = ref([{nick: 'Idepatooo', desc: 'Majiteľ', imgPath: 'Idepato_head'}, {nick: 'Crelo_X', desc: 'Hlavný developer', imgPath: 'Crelo_x_head'}, {nick: 'P3p1kSvK', desc: 'Developer', imgPath: 'p3p1ksvk'}, {nick: 'Samdzi', desc: 'Developer', imgPath: 'samdzi'}, {nick: 'Forest_18', desc: 'Developer', imgPath: 'Forest_18'}]);    
        const getExceptRoot = computed(() => {
            return teamData.value.filter((member, id) => {
                return id !== 0
            })
        })
        return {teamData, getExceptRoot, getImgPath}
    },
    async mounted() {
        for(const el of this.teamData) {
            const img = await this.getImgPath(el.imgPath, 'team')
            el.imgPath = img;
        }
    }
}
</script>

<style scoped>
    #ourteam {
        margin: var(--main-margin-size);
        position: relative;
        overflow: hidden;
    }
    #ourteam::before, #ourteam::after {
        position: absolute;
        content: "";
        width: 15%;
        max-width: 200px;
        height: 200px;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        transform-origin: center center;
        background: var(--main-green-dark);
        
    }
    #ourteam::before {
        left: -100px;
    }
    #ourteam::after {
        right: -100px;
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