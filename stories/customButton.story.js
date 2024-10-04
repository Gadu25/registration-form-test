import CustomButton from "../components/Form/CustomButton.vue";

const props = {
    label: 'Button name',
    type: 'submit',
    size: 'lg',
    color: 'yellow-9',
}

export default {
    title: 'Form/Button',
    argTypes: {
        label: {
            description: 'button label to display',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        type: {
            description: 'submit | nothing',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        size: {
            description: 'size of the button sm | md | lg |...',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        color: {
            description: 'color of the button -check quasar docu.',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        }
    }
}

export const CustomButtonComponent = (args, {argTypes}) => ({
    components: {CustomButton},
    props: Object.keys(argTypes),
    template: `<div>
                    <CustomButton
                        :label=label
                        :type=type
                        :size=size
                        :color=color
                    />
                </div>`
});

CustomButtonComponent.args = Object.assign({}, props, {});