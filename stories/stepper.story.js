// import { action } from "@storybook/addon-actions";
import Stepper from "../components/Register/Stepper.vue"

const props = {
    count: 3,
    active: 1,
    handleStepperClick: () => {
        action('click')([{id:0}])
    },
    // handleClickEvent: () => {
    //     // action('Clicked')
    //     // alert('test')
    // }
}

export default {
    title: 'Form/Stepper',
    argTypes: {
        count: {
            description: 'Count of steps',
            defaultValue: {
                summary: "3"
            },
            control: {
                type: 'number'
            }
        },
        active: {
            description: 'The active number on the available steps',
            defaultValue: {
                summary: "1"
            },
            control: {
                type: 'number'
            }
        },
        handleClickEvent: {
            description: 'Function to switch the active steps', 
            type: {
                required: false,
              },
            defaultValue: {
                summary: '() => ({})'
            },
            action: 'clicked'
        }
    }
};

export const StepperComponent = (args, {argTypes}) => ({
    components: {Stepper},
    props: Object.keys(argTypes),
    template:  `<div>
                    <Stepper
                        :count=count
                        :active=active
                        :handleClickEvent="handleClickEvent"
                    />
                </div>`
});

StepperComponent.args = Object.assign({}, props, {
    // handleClickEvent: () => {
    //     action('Clicked 2')
    //     // alert('test')
    // }
});