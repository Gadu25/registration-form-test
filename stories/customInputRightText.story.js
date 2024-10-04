import CustomInputRightText from "../components/Form/CustomInputRightText.vue";

const props = {
    index: 0,
    label: 'Title',
    name: 'username',
    rules: 'required',
    placeHolder: 'Input a text',
    type: 'text',
    value: '',
    form: {
        verificationError: {
        error: false,
        message: ""
        },
        verificationCodeBase: "1234",
    },
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
        form: {
            description: 'Form requirement for displaying of verification code',
            defaultValue: {
                summary: '{}'
            },
            control: {
                type: 'object'
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

export const CustomInputRightTextComponent = (args, {argTypes}) => ({
    components: {CustomInputRightText},
    props: Object.keys(argTypes),
    template: `<div>
                    <CustomInputRightText
                        :index=index
                        :label=label
                        :name=name
                        :rules=rules
                        :placeHolder=placeHolder
                        :type=type
                        :value=value
                        :form=form
                        :dark=dark
                    />
                </div>`
});

CustomInputRightTextComponent.args = Object.assign({}, props, {});