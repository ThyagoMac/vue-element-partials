<template>
    <div>
        <h1>Table With the Heroines</h1>

        <ul class="lista-fotos">
            <li class="lista-fotos-item" v-for="heroine in heroines" :key="heroine.id">
                
                <div class="painel">
                    <h2 class="painel-titulo">{{heroine.name}}</h2>
                    <div class="painel-corpo">

                        <img class="imagem-responsiva" :src="heroine.url" :alt="heroine.name">

                    </div>
                    <div>
                        <el-collapse >
                            <el-collapse-item title="Atributes" name="1">
                                Power: {{ heroine.power }} Speed: {{ heroine.speed }} Skill: {{ heroine.skill }} Mental: {{ heroine.mental }} Experience: {{ heroine.experience }}
                            </el-collapse-item>
                            <el-collapse-item title="Feedback" name="2">
                                <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                                <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                            </el-collapse-item>
                            <el-collapse-item title="Efficiency" name="3">
                                <div>Simplify the process: keep operating process simple and intuitive;</div>
                                <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                                <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                            </el-collapse-item>
                            <el-collapse-item title="Controllability" name="4">
                                <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                                <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>

            </li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            heroines: [
                {
                    id: 1,
                    name: 'Captain Hanna',
                    tier: 't2',
                    power: 5,
                    speed: 6,
                    skill: 3,
                    mental: 5,
                    experience: 6,
                    buff1: 'Fire Expert',
                    buff2: '',
                    debuff: 'Confident',
                    desc: 'Bla bla bla Hana is a good girl and found her powers bla bla bla...',
                    url: 'https://static.f-list.net/images/charimage/18281453.jpg'
                },
                {
                    id: 2,
                    name: 'Captain Lin',
                    tier: 't3',
                    power: 6,
                    speed: 4,
                    skill: 1,
                    mental: 2,
                    experience: 2,
                    buff1: '',
                    buff2: '',
                    debuff: 'HeadHot',
                    desc: 'Bla bla bla Lin is a pretty girl and found herself drained two times bla bla bla...',
                    url: 'https://static.f-list.net/images/charimage/18281438.jpg'
                },
            ]

        }
    },
}
</script>

<style scoped>
.titulo {
    text-align: center;
  }

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .imagem-responsiva {
    width: 100%;
  }

  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: rgb(214, 241, 250);
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }
</style>