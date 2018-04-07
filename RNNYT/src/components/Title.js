import React, { PropTypes } from "react";
import {
    StyleSheet,
    Text
} from 'react-native';

import AppText from './AppText';
import * as globalStyles from '../styles/global';

const Title = ({style, children}) => (
    <AppText style={[styles.title, style]}>
        {children}
    </AppText>
);

Title.PropTypes = {
    style : Text.PropTypes.style,
    children : PropTypes.node
};

const styles = StyleSheet.create({
    title : {
        fontFamily: 'HelveticaNeue-CondensedBold',
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`
    }
});