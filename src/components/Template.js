import OrgChart from "@balkangraph/orgchart.js";

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.size = [400, 200];
OrgChart.templates.myTemplate.node =
    '<rect x="0" y="0" width="400" height="200" rx="10" ry="10" fill="#4D4D4D" stroke-width="1" stroke="#aeaeae"></rect>';

OrgChart.templates.myTemplate.ripple = {
    radius: 0,
    color: "none",
    rect: null,
};
OrgChart.templates.myTemplate.img_0 =
    '<clipPath id="ulaImg"><circle cx="60" cy="100" r="40"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#ulaImg)" xlink:href="{val}" x="20" y="60"  width="80" height="80"></image>';

OrgChart.templates.myTemplate.field_0 =
    '<text style="font-size: 20px;" fill="#ffffff" x="110" y="40" text-anchor="start">{val}</text>';
OrgChart.templates.myTemplate.field_1 = '<text style="font-size: 14px;" fill="#ffffff" x="350" y="30" text-anchor="end">{val}</text>';
OrgChart.templates.myTemplate.edge =
    '<path  stroke="#686868" stroke-width="1px" fill="none" edge-id="[{id}][{child-id}]" d="M{xa},{ya} C{xb},{yb} {xc},{yc} {xd},{yd}"/>';

OrgChart.templates.myTemplate.plus =
    '<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>' +
    '<text x="10" y="25.5" fill="yellow" style="font-size:24px";>&gt</text>';

OrgChart.templates.myTemplate.minus =
    '<rect x="0" y="0" width="36" height="36" rx="12" ry="12" fill="#2E2E2E" stroke="#aeaeae" stroke-width="1"></rect>' +
    '<line x1="4" y1="18" x2="32" y2="18" stroke-width="1" stroke="#aeaeae"></line>';

OrgChart.templates.myTemplate.pointer =
    '<g data-pointer="pointer" transform="matrix(0,0,0,0,100,100)">><g transform="matrix(0.3,0,0,0.3,-17,-17)">' +
    '<polygon fill="rgb(255, 202, 40)" points="53.004,173.004 53.004,66.996 0,120" />' +
    '<polygon fill="rgb(255, 202, 40)" points="186.996,66.996 186.996,173.004 240,120" />' +
    '<polygon fill="rgb(255, 202, 40)" points="66.996,53.004 173.004,53.004 120,0" />' +
    '<polygon fill="rgb(255, 202, 40)" points="120,240 173.004,186.996 66.996,186.996" />' +
    '<circle fill="rgb(255, 202, 40)" cx="120" cy="120" r="30" />' +
    "</g></g>";


OrgChart.miniMap.colors = ["#FFCA28", "#F57C00", "#039be5", "#757575"];
OrgChart.miniMap.selectorBackgroundColor = "#888888";
OrgChart.miniMap.focusStroke = "#039BE5";
OrgChart.miniMap.opacity = 0.8;
OrgChart.miniMap.border = '2px solid #039BE5';
OrgChart.miniMap.width = 200;
OrgChart.miniMap.height = 100;
OrgChart.miniMap.padding = 10;

export default OrgChart;
