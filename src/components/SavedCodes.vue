<template>
  <ion-page
    class="ion-page">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Saved Codes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content></ion-content>
  </ion-page>
</template>

<script>
import { add } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  "ios-add": add.ios,
  "md-add": add.md
});
export default {
  name: "HomePage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
