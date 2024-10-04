import CustomInput from "../components/Form/CustomInput.vue";

const props = {
    index: 0,
    label: 'Title',
    name: 'username',
    rules: 'required',
    placeHolder: 'Input a text',
    type: 'text',
    value: '',
    subText: 'something to say',
    dark: false
}

export default {
    title: 'Form/Input',
    argTypes: {
        index: {
            description: 'index of the input',
            defaultValue: {
                summary: "0"
            },
            control: {
                type: 'number'
            }
        },
        label: {
            description: 'The label to be displayed above the input box.',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        name: {
            description: 'Name of the input.',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        rules: {
            description: 'Rules to be applied in Vee Validation',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        placeHolder: {
            description: 'Placeholder of the input box',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        type: {
            description: 'Input type',
            defaultValue: {
                summary: 'text'
            },
            control: {
                type: 'text'
            }
        },
        value: {
            description: 'Value of the input field',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        subText: {
            description: 'text to be displayed below the input field',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        dark: {
            description: 'Input design.',
            defaultValue: {
                summary: 'false'
            },
            control: {
                type: 'boolean'
            }
        }
    }
}

export const CustomInputComponent = (args, {argTypes}) => ({
    components: {CustomInput},
    props: Object.keys(argTypes),
    template: `<div>
                    <CustomInput
                        :index=index
                        :label=label
                        :name=name
                        :rules=rules
                        :placeHolder=placeHolder
                        :type=type
                        :value=value
                        :subText=subText
                        :dark=dark
                    />
                </div>`
});

CustomInputComponent.args = Object.assign({}, props, {});