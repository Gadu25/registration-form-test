import Stepper from "../components/Register/Stepper.vue"

const props = {
    count: 3,
    active: 1,
    handleStepperClick: () => {}
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
        handleStepperClick: {
            description: 'Function to switch the active steps',
            defaultValue: {
                summary: '{}'
            },
            action: 'clicked' // This will log the action in Storybook
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
                        :handleStepperClick=handleStepperClick
                    />
                </div>`
});

StepperComponent.args = Object.assign({}, props, {});