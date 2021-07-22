import button from "./Button";
import select from "./Select";
import option from "./Option";
import Input from "./Input";
import checkboxGroup from "./CheckboxGroup";
import checkbox from "./Checkbox";
import BreadCrumb from "./BreadCrumb";``
import card from "./Card";
import Row from "./Row";
import Col from "./Col";
import {DropDown} from "./DropDown";

const dic = [
    {
        name: "button-f",
        component: button
    },
    {
        name: "select-f",
        component: select
    },
    {
        name: "option-f",
        component: option
    },
    {
        name: "input-f",
        component: Input
    },
    {
        name: "checkgroup-f",
        component: checkboxGroup
    },
    {
        name: "checkbox-f",
        component: checkbox
    },
    {
        name: "breadcrumb-f",
        component: BreadCrumb
    },
    {
        name: "card-f",
        component: card
    },
    {
        name: "row-f",
        component: Row
    },
    {
        name: "col-f",
        component: Col
    },
    {
        name: "drop-down-f",
        component: DropDown
    },
];


dic.forEach((obj) => {
    customElements.define(obj.name, obj.component);
});

