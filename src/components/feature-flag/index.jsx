import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import LightDarkMode from "../light-dark-mode";
import TicTacToe from "../tic-tact-toe";
import RandomColor from "../random-color";
import Accordian from "../accordian";
import TreeView from "../tree-view";
import menus from "../tree-view/data";
import TabsTest from "../custom-tabs/tab-test";

export default function FeatureFlags() {
    const { loading, enabledFlags } = useContext(FeatureFlagsContext)
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component: <LightDarkMode />,
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />,
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />,
        },
        {
            key: 'showAccordian',
            component: <Accordian />,
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />,
        },
        {
            key: 'showTabs',
            component: <TabsTest />,
        },
    ];

    function checkEnabledFlags(getCurrentKey) {
        return enabledFlags[getCurrentKey]
    }

    if (loading) return <h1>Loading data ! Please wait</h1>

    return (
        <div>
            <h1>Feature Flags START</h1>
            {
                componentsToRender.map(componentItem => checkEnabledFlags(componentItem.key) ? componentItem.component : null)
            }
            <h1>Feature Flags END</h1>
        </div>
    );
}