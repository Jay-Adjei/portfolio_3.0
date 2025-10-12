import React, {cloneElement} from "react";
import { IconType } from "react-icons";
import Animated from "./Animated";

const AnimatedTools = ({
    delay = 0,
    stepSize = 0.1,
    children,
    iconSize,
    className,
}) => {
    const items = React.Children.toArray(children);

    return (
        <div className={className}>
            {items.map((child, index) => (
                <Animated key={index} delay={delay + index * stepSize}>
                    {React.isValidElement(child) ? cloneElement(child, { size: iconSize }) : child}
                </Animated>
            ))}
        </div>
    );
};

export default AnimatedTools;