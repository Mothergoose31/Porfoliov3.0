
import React from "react";

// react components for routing our app without refresh


// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons


// core components

import Button from "../Button/Button.jsx";

import styles from "../../styles/headerLinksStyle.jsx";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
            
            </ListItem>
            <ListItem className={classes.listItem}>
                {/*<Tooltip title="Delete">
                <IconButton aria-label="Delete">
                    <DeleteIcon />
                </IconButton>
                </Tooltip>*/}
                <Tooltip
                    id="linkedin"
                    title="linkedin"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                <Button
                        href="https://www.linkedin.com/in/joseph-beech/"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </Button>
                </Tooltip>
                <Tooltip
                    id="instagram-twitter"
                    title="Twitter"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        href="https://twitter.com/BeechNathaniel"
                        target="_blank"
                        color="transparent"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com/joseph.alvarenga"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                </Tooltip>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                <Button
                    color="transparent"
                    href="https://www.instagram.com/joseph_n.b/"
                    target="_blank"
                    className={classes.navLink}
                >
                    <i className={classes.socialIcons + " fab fa-instagram"} />
                </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}
