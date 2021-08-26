import button from "component/Button";
import Input from "component/Input";
import {Select, Option} from "component/Select";
import {CheckboxGroup, CheckBox} from "component/CheckBox";
import BreadCrumb from "component/BreadCrumb";
import card from "component/Card";
import {Row, Col} from "component/RowCol";
import {DropDown, DropItem} from "component/DropDown";
import {Menu, MenuItem, SubMenu} from "component/Menu";
import Close from "component/Close";
import Tips from "component/Tips";
import popover from "component/Popover";
import txt from "component/Txt";
import img from "component/Img";
import Div from "component/Div";
import {Tabs, Tab} from "component/Tabs";

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
        name: "menu-f",
        component: Menu
    },
    {
        name: "sub-menu-f",
        component: SubMenu
    },
    {
        name: "menu-item-f",
        component: MenuItem
    },
    {
        name: "tips-f",
        component: Tips
    },
    {
        name: "close-f",
        component: Close
    },
    {
        name: "popover-f",
        component: popover
    },
    {
        name: "txt-f",
        component: txt
    },
    {
        name: "img-f",
        component: img
    },
    {
        name: "tabs-f",
        component: Tabs
    },
    {
        name: "tab-f",
        component: Tab
    },
    {
        name: "div-f",
        component: Div
    },
];

dic.forEach((obj) => {
    customElements.define(obj.name, obj.component);
});

