<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between py-3">
      Купить в 1 клик
      <v-btn icon @click="closePopup">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text class="py-2">
      <v-alert v-if="error" type="error">{{ error }}</v-alert>
      <v-form>
        <v-text-field
          label="Контактное лицо *"
          filled
          dense
          v-model="form.name"
        ></v-text-field>
        <v-text-field
          label="Телефон *"
          filled
          dense
          v-model="form.phone"
        ></v-text-field>
        <v-text-field
          label="E-Mail *"
          filled
          dense
          v-model="form.email"
        ></v-text-field>
        <v-text-field
          label="Город *"
          filled
          dense
          v-model="form.city"
        ></v-text-field>
        <v-file-input
          label="Реквизиты (для юридических лиц)"
          filled
          dense
          truncate-length="15"
          @change="handleFileChange"
        ></v-file-input>
        <v-textarea
          v-model="form.comment"
          filled
          name="input-7-4"
          label="Комментарий к заказу"
          value=""
        ></v-textarea>
        <v-btn color="primary" @click="sendOrder">Отправить</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        city: "",
        file: null,
        comment: "",
      },
      error: null,
    };
  },
  computed: {
    ...mapState({
      cartItems: (state) => state.appStore.cartItems,
    }),
  },
  methods: {
    handleFileChange(file) {
      // Обработка выбора файла и обновление свойства в форме
      this.form.file = file;
    },
    closePopup() {
      this.$emit("close-popup");
    },
    async sendOrder() {
      try {
        const url = `${this.$config.API}order/`;
        let data = new FormData();
        data.append("contact_person", this.form.name);
        data.append("phone", this.form.phone);
        data.append("email", this.form.email);
        data.append("city", this.form.city);
        data.append("file", this.form.file);
        data.append("comment", this.form.comment);
        const orderData = JSON.stringify(this.cartItems);
        data.append("order", orderData);
        const resp = await this.$axios.post(url, data);
        console.log(resp);
      } catch (error) {
        console.log(error);
        this.error = 'Произошла ошибка при отправке заказа.';
      }
    },
  },
};
</script>