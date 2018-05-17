<template>
  <div id="join" v-loading="onSubmit">
    <div>
      <h2 class="h2">회원가입</h2>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="Name" prop="name">
          <el-input v-model="ruleForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email" prop="email">
          <el-input v-model.number="ruleForm.email" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Confirm" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <div class="btn">
          <el-button type="primary" @click="submitForm('ruleForm')" round>Join</el-button>
          <el-button @click="resetForm('ruleForm')" round>Reset</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };
    return {
      onSubmit : false,
      ruleForm: {
        name: '',
        email: '',
        pass: '',
        checkPass: ''        
      },
      rules: {
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' }
        ],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.onSubmit = true;
          this.$notify({
            title: '로그인 성공',
            message: '로그인 되었습니다.',
            duration: 2000,
            type: 'success'
          });
          setTimeout(() => this.$router.push('/'), 1000 );
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style scoped>
  #join {
    max-width:980px;
    margin:0 auto;
  }
  #join > div {
    max-width:480px;
    margin:0 auto;
    padding:30px;
    border:1px solid #ddd;
    border-radius:10px;
  }
  #join > div h2 {
    margin:-10px 0 20px 0;
    color:#000;
    text-align:center;
  }
  .btn {
    text-align:center;
  }
</style>
