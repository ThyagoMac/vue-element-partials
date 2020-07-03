<template>
    <div>
        <h1>New Heroine</h1>

        <el-form ref="form" :model="heroine" label-width="15%" class="form-center">
            <el-form-item label="Name">
                <el-input v-model="heroine.name"></el-input>
            </el-form-item>
            <el-form-item label="Experience" >
                <el-select v-model="heroine.region" placeholder="Please Select The Tier" style="width: 100%">
                <el-option label="T1" value="t1"></el-option>
                <el-option label="T2" value="t2"></el-option>
                <el-option label="T3" value="t3"></el-option>
                <el-option label="T4" value="t4"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="Power">
                <el-col :span="8">
                    <el-input-number v-model="heroine.power" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
                <el-col class="line" :span="8">Speed</el-col>
                <el-col :span="8">
                    <el-input-number v-model="heroine.speed" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
            </el-form-item>
            <el-form-item label="Skill">
                <el-col :span="8">
                    <el-input-number v-model="heroine.skill" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
                <el-col class="line" :span="8">Mental</el-col>
                <el-col :span="8">
                    <el-input-number v-model="heroine.mental" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
            </el-form-item>
            <el-form-item label="Expereince">
                <el-col :span="8">
                    <el-input-number v-model="heroine.experience" controls-position="right" :min="1" :max="10" style="width: 100%"></el-input-number>
                </el-col>
            </el-form-item>

            <hr>
            <el-form-item label="Buffs">
                <el-checkbox-group v-model="heroine.buff">
                <el-checkbox label="Fire Expert" name="buff"></el-checkbox>
                <el-checkbox label="Air Expert" name="buff"></el-checkbox>
                <el-checkbox label="Earth Expert" name="buff"></el-checkbox>
                <el-checkbox label="Water Expert" name="buff"></el-checkbox>
                <el-checkbox label="Flyer" name="buff"></el-checkbox>
                <el-checkbox label="Well Experienced" name="buff"></el-checkbox>
                <el-checkbox label="Combatent" name="buff"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <hr>
            <el-form-item label="De-Buffs">
                <el-checkbox-group v-model="heroine.debuff">
                <el-checkbox label="Fire Inexperienced" name="debuff"></el-checkbox>
                <el-checkbox label="Air Inexperienced" name="debuff"></el-checkbox>
                <el-checkbox label="Earth Inexperienced" name="debuff"></el-checkbox>
                <el-checkbox label="Water Inexperienced" name="debuff"></el-checkbox>
                <el-checkbox label="Bad Experiences" name="debuff"></el-checkbox>
                <el-checkbox label="Bad Combatent" name="debuff"></el-checkbox>
                <el-checkbox label="Easily to Drain" name="debuff"></el-checkbox>
                <el-checkbox label="Drainable" name="debuff"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <hr>
            <el-form-item label="BIO">
                <el-input type="textarea" v-model="heroine.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
                <el-button>Cancel</el-button>
            </el-form-item>
            </el-form>
</div>
</template>

<script>
  export default {
    data() {
      return {
        heroine: {
          name: '',
          power: 1,
          speed: 1,
          skill: 1,
          mental: 1,
          experience: 1,
          buff: [],
          debuff: [],
          resource: '',
          desc: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log(this.heroine);
      }
    }
  }
</script>