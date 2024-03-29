<template>
  <van-form ref="form" class="form" @submit="onSubmit">
    <van-field
      left-icon="phone-o"
      v-model="phone"
      name="phone"
      label="手机"
      maxlength="11"
      placeholder="请输入手机号"
      clickable
      clearable
      :rules="rules.phone"
    />

    <van-field
      left-icon="closed-eye"
      v-model="password"
      type="password"
      maxlength="20"
      clearable
      clickable
      name="password"
      label="密码"
      placeholder="请输入密码"
      :rules="rules.password"
    />

    <div style="margin: 16px;">
      <van-button
        round
        block
        :loading="isLoading"
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
        native-type="submit"
      >登 录</van-button>
    </div>
  </van-form>
</template>

<script>
import { userLogin } from 'api/user'
import { TOKEN_NAME, SERVER_ERROR } from '@/config'
import { musicCollectionGet } from 'api/collection'
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    const validatePhoneLen = (val) => {
      val = val.trim();
      if (val) {
        const len = val.length;
        return len === 11;
      }
      return false;
    }

    const validatePhoneValid = (val) => {
      val = val.trim();
      const reg = /^1[3-9]\d{9}$/
      return reg.test(val);
    }

    const validatePasswordLen = (val) => {
      val = val.trim();
      if (val) {
        const len = val.length;
        return len >= 6 && len <= 20
      }
      return false;
    }

    return {
      isLoading: false,
      phone: '',
      password: '',
      rules: {
        password: [
          { required: true, message: '请填写密码' },
          { validator: validatePasswordLen, message: '密码长度为6-20位' }
        ],
        phone: [
          { required: true, message: '请填写手机号' },
          { validator: validatePhoneLen, message: '手机为11位数字' },
          { validator: validatePhoneValid, message: '手机号不合法' }
        ],
      }
    };
  },

  activated () {
    this.resetForm();
  },

  methods: {
    ...mapActions('user', ['SetUser']),
    ...mapActions('music', ['SetMusicList']),

    async onSubmit (values) {
      this.isLoading = true;

      const [err, result] = await userLogin(values);

      if (err) {
        this.$toast.fail(SERVER_ERROR);
        return;
      }

      const { code, profile, msg } = result;

      this.getData(profile);
      profile && localStorage.setItem(TOKEN_NAME, JSON.stringify(profile));
      code === 200 && this.$router.push('recom');

      this.$toast({
        message: msg || 'success',
        position: 'top'
      })

      this.isLoading = false;
    },

    async getData (profile) {
      if (profile) {
        await this.SetUser(profile);

        const [err, result] = await musicCollectionGet();

        if (err) {
          return;
        }

        if (err) {
          return;
        }

        const { msg, code, data } = result;

        code === 0 && this.SetMusicList(data);
      }
    },

    resetForm () {
      this.phone = '';
      this.password = '';
      this.$refs.form.resetValidation();
    }
  },

}
</script>
