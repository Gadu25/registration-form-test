import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

    import Vue from "vue";
    import Quasar from "quasar";
    //     import "quasar/dist/quasar.css";
    import "quasar/dist/quasar.sass";
    import "@quasar/extras/material-icons/material-icons.css";

    Vue.use(Quasar, {
      iconSet: Quasar.iconSet.materialIcons,
    });

    export const parameters = {
      controls: { expanded: true },
      viewport: {
        viewports: {
          ...INITIAL_VIEWPORTS,
        },
      },
      actions: { argTypesRegex: "^on.*" },
    };

    export const decorators = [
      (story) => ({
        components: { story },
        template: '<div style="max-width: 600px"><story /></div>',
      }),
    ];