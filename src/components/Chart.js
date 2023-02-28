import Template from "./Template";
import { useEffect, useRef } from "react";

const Chart = ({ nodes }) => {
    const divRef = useRef(null);

    useEffect(() => {
        new Template(divRef.current, {
            nodes,
            orientation: Template.orientation.left,
            enableSearch: false,
            mode: "dark",
            template: "myTemplate",
            levelSeparation: 150,
            miniMap: true,
            collapse: {
                level: 1,
                allChildren: true,
            },
            nodeBinding: {
                img_0: "img",
                field_0: "name",
                field_1: "title",
            },
        });
    }, [nodes]);

    return <div ref={divRef}></div>;
};

export default Chart;
