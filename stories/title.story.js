import Title from "../components/Register/Title.vue";

const props = {
    title: "Title",
    color: "text-white"
}

export default {
    title: 'Form/Title',
    argTypes: {
        title: {
            description: 'text to be displayed',
            defaultValue: {
                summary: ""
            },
            control: {
                type: 'text'
            }
        },
        color: {
            description: 'font color',
            defaultValue: {
                summary: ""
            },
            control: {
                type: 'text'
            }
        }
    }
}

export const TitleComponent = (args, {argTypes}) => ({
    components: {Title},
    props: Object.keys(argTypes),
    template: `<div>
                    <Title
                        :title=title
                    />
                </div>`
});

TitleComponent.args = Object.assign({}, props, {});