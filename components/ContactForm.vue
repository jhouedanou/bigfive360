<script setup>
import { ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
const formStatus = ref({ message: "", isSuccess: false });
const isSubmitting = ref(false);
const globalData = inject("globalData");
const form = ref({
  prenom: "",
  nom: "",
  email: "",
  telephone: "",
  societe: "",
  secteur: "",
  message: "",
});

const rules = {
  prenom: { required },
  nom: { required },
  email: { required, email },
  telephone: { required },
  societe: { required },
  secteur: { required },
  message: { required },
};

const v$ = useVuelidate(rules, form);

const submitForm = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (isFormCorrect) {
    isSubmitting.value = true;
    try {
      const response = await fetch(
        "https://public.herotofu.com/v1/7213c4e0-484b-11ef-a0b7-6772a76ef8ef",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(form.value),
        }
      );
      if (response.ok) {
        formStatus.value = {
          message: "Formulaire envoyé avec succès",
          isSuccess: true,
        };
      } else {
        formStatus.value = {
          message: "Erreur lors de l'envoi du formulaire",
          isSuccess: false,
        };
      }
    } catch (error) {
      formStatus.value = {
        message: "Erreur lors de l'envoi du formulaire",
        isSuccess: false,
      };
    } finally {
      isSubmitting.value = false;
    }
  }
};
</script>
<template>
  <div id="demo" class="container">
    <div
      v-if="formStatus.message"
      :class="['notification', formStatus.isSuccess ? 'is-success' : 'is-danger']"
    >
      {{ formStatus.message }}
    </div>

    <form @submit.prevent="submitForm" class="box">
      <div class="field">
        <label class="label">Prénom</label>
        <div class="control">
          <input
            v-model="form.prenom"
            class="input"
            :class="{ 'is-danger': v$.prenom.$error }"
            type="text"
            placeholder="Prénom"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Nom</label>
        <div class="control">
          <input
            v-model="form.nom"
            class="input"
            :class="{ 'is-danger': v$.nom.$error }"
            type="text"
            placeholder="Nom"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            v-model="form.email"
            class="input"
            :class="{ 'is-danger': v$.email.$error }"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Téléphone</label>
        <div class="control">
          <input
            v-model="form.telephone"
            class="input"
            :class="{ 'is-danger': v$.telephone.$error }"
            type="tel"
            placeholder="Téléphone"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Société</label>
        <div class="control">
          <input
            v-model="form.societe"
            class="input"
            :class="{ 'is-danger': v$.societe.$error }"
            type="text"
            placeholder="Société"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Secteur d'activité</label>
        <div class="control">
          <input
            v-model="form.secteur"
            class="input"
            :class="{ 'is-danger': v$.secteur.$error }"
            type="text"
            placeholder="Secteur d'activité"
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea
            v-model="form.message"
            class="textarea"
            :class="{ 'is-danger': v$.message.$error }"
            placeholder="Message"
          ></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-primary" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Envoyer</span>
            <span v-else class="loader"></span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.loader {
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
  display: inline-block;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.is-invalid {
  border-color: red;
}
.box {
  width: 100%;
}
button {
  background: red;
  color: white;
  font-size: 1em;
  text-transform: uppercase;
}
</style>
