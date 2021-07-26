import button from "./Button";
import Input from "./Input";
import {Select, Option} from "./Select";
import {CheckboxGroup, CheckBox} from "component/CheckBox";
import BreadCrumb from "./BreadCrumb";
import card from "./Card";
import Row from "./Row";
import Col from "./Col";
import {DropDown, DropItem} from "./DropDown";

const dic = [
    {
        name: "button-f",
        component: button
    },
    {
        name: "select-f",
        component: Select
    },
    {
        name: "option-f",
        component: Option
    },

    {
        name: "input-f",
        component: Input
    },
    {
        name: "checkgroup-f",
        component: CheckboxGroup
    },
    {
        name: "checkbox-f",
        component: CheckBox
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
    {
        name: "drop-item-f",
        component: DropItem
    },
];


dic.forEach((obj) => {
    customElements.define(obj.name, obj.component);
});

