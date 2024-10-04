import Stepper from "../components/Register/Stepper.vue"

const props = {
    count: 3,
    active: 1
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
                    />
                </div>`
});

StepperComponent.args = Object.assign({}, props, {});