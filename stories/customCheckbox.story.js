import CustomCheckbox from "../components/Form/CustomCheckbox.vue";

const props = {
    label: 'I agree.',
    subText: 'OCMS Terms & Conditions',
    value: false,
    dark: false
}

export default {
    title: 'Form/CheckBox',
    argTypes: {
        label: {
            description: 'label for the checkbox',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        subText: {
            description: 'additional label for the checkbox',
            defaultValue: {
                summary: ''
            },
            control: {
                type: 'text'
            }
        },
        value: {
            description: 'value of the checkbox',
            defaultValue: {
                summary: 'false'
            },
            control: {
                type: 'boolean'
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

export const CustomCheckBoxComponent = (args, {argTypes}) => ({
    components: {CustomCheckbox},
    props: Object.keys(argTypes),
    template: `<div>
                    <CustomCheckbox
                        :label=label
                        :subText=subText
                        :value=value
                        :dark=dark
                    />
                </div>`
})

CustomCheckBoxComponent.args = Object.assign({}, props, {});