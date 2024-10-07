import BlankCircles from "../components/Register/BlankCircles.vue";

const props = {
    count: 3
}

export default {
    title: 'Others',
    argTypes: {
        count: {
            description: 'Count of circles',
            defaultValue: {
                summary: "3"
            },
            control: {
                type: 'number'
            }
        }
    }
};

export const BlankCirclesComponent = (args, {argTypes}) => ({
    components: {BlankCircles},
    props: Object.keys(argTypes),
    template:  `<div>
                    <BlankCircles
                        :count=count
                    />
                </div>`
});

BlankCirclesComponent.args = Object.assign({}, props, {});