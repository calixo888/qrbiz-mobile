<template>
  <div>
    <ion-tabs>
      <ion-tab tab="/my-profile">
        <ion-vue-router name="my-profile"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/scan-code">
        <ion-vue-router name="scan"></ion-vue-router>
      </ion-tab>

      <ion-tab tab="/saved-codes">
        <ion-vue-router name="saved-codes"></ion-vue-router>
      </ion-tab>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="/my-profile">
          <ion-icon name="contacts" />
          <ion-label>My Code</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="/scan-code">
          <ion-icon name="map" />
          <ion-label>Scan Code</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="/saved-codes">
          <ion-icon name="map" />
          <ion-label>Saved Codes</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </div>
</template>

<script>
import { add } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  "ios-add": add.ios,
  "md-add": add.md
});
export default {
  name: "Tabs",
  props: {}
};
</script>
