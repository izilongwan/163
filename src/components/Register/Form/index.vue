<template>
  <van-form ref="form">
    <van-field
      left-icon="fire-o"
      v-model="nickname"
      name="nickname"
      label="昵称"
      maxlength="20"
      placeholder="如：我又不乱来"
      clickable
      clearable
      :rules="rules.nickname"
    />

    <van-field
      left-icon="phone-o"
      v-model="phone"
      name="phone"
      label="手机"
      maxlength="30"
      placeholder="手机号 11位数字"
      clickable
      clearable
      :rules="rules.phone"
    />

    <van-field
      left-icon="smile-o"
      v-model="captcha"
      maxlength="4"
      clearable
      clickable
      name="captcha"
      label="验证"
      placeholder="短信验证码"
      :rules="rules.captcha"
    >
      <van-button
        slot="button"
        size="small"
        :loading="isCaptchaLoading"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        type="primary"
        :disabled="sendBtnDisabled"
        @click="onCaptchaSend(phone)"
      >发送验证码</van-button>
    </van-field>

    <van-field
      maxlength="20"
      left-icon="closed-eye"
      v-model="password"
      type="password"
      name="password"
      label="密码"
      placeholder="如：******"
      clickable
      clearable
      :rules="rules.password"
    />

    <div style="margin: 16px;">
      <van-button
        round
        block
        :loading="isRegisterLoading"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        native-type="submit"
        @click="submitForm"
      >注 册</van-button>
    </div>
  </van-form>
</template>

<script>
import { userRegister, userCaptchaVerify, userCaptchaSend } from 'api/user'
import tools from 'utils/tools'
import { SERVER_ERROR } from '@/config'

export default {
  data () {
    const validateNicknameLen = (val) => {
      val = val.trim();
      if (val) {
        const len = val.length;
        return len >= 3 && len <= 20
      }
      return false;
    }

    const validatePasswordLen = (val) => {
      val = val.trim();
      if (val) {
        const len = val.length;
        return len >= 6 && len <= 20
      }
      return false;
    }

    const validatePhone = (val) => tools.checkPhone(val);

    const validateCaptchaLen = (val) => {
      val = val.trim();
      if (val) {
        const reg = /^\d{4}$/;
        return val.length === 4 && reg.test(val);
      }
      return false;
    }

    return {
      isCaptchaLoading: false,
      isRegisterLoading: false,
      phone: '',
      password: '',
      nickname: '',
      captcha: '',
      rules: {
        nickname: [
          { required: true, message: '请填写昵称' },
          { validator: validateNicknameLen, message: '昵称长度为3-20位' }
        ],
        password: [
          { required: true, message: '请填写密码' },
          { validator: validatePasswordLen, message: '密码长度为6-20位' }
        ],
        phone: [
          { required: true, message: '请填写手机号' },
          { validator: validatePhone, message: '请输入正确的手机' }
        ],
        captcha: [
          { required: true, message: '请填写手机验证码' },
          { validator: validateCaptchaLen, message: '验证码为4位数字' }
        ]
      }
    };
  },

  computed: {
    sendBtnDisabled () {
      return !tools.checkPhone(this.phone);
    }
  },

  activated () {
    this.resetForm();
  },

  methods: {
    async submitForm () {
      this.isRegisterLoading = true;

      const { nickname, password, phone, captcha } = this;
      const values = { nickname, password, phone, captcha };

      const [err, { code }] = await tools.asyncFunc(
        () => userCaptchaVerify(values)
      )

      if (err) {
        this.isRegisterLoading = false;
        this.$toast({
          position: 'top',
          message: '验证码不正确'
        });
        return;
      }

      const [err1, { code: code1, msg }] = await tools.asyncFunc(
        () => userRegister(values)
      )

      if (err1) {
        this.$toast.fail(SERVER_ERROR)
        return;
      }

      code1 === 0 && this.$router.push('login');

      this.$toast({
        position: 'top',
        message: msg
      });

      this.isRegisterLoading = false;
    },

    async onCaptchaSend (phone) {
      this.isCaptchaLoading = true;

      const [err, { code, msg }] = await tools.asyncFunc(
        () => userCaptchaSend(phone)
      )

      if (err) {
        this.$toast.fail(SERVER_ERROR)
        return;
      }

      if (code === 200) {
        this.$toast({
          position: 'top',
          message: '验证码已发送'
        });
      }
      this.isCaptchaLoading = false;
    },

    resetForm () {
      this.phone = '';
      this.password = '';
      this.nickname = '';
      this.captcha = '';
      this.$refs.form.resetValidation();
    }
  }
}
</script>
