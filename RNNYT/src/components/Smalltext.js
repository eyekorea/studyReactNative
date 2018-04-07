import React, { propTypes } from 'react';
import {
    StyleSheet, 
    Text
} from 'react-native';
import AppText from './AppText';

const SmallText = ({children, style, ...rest})=>(
    <AppText style={[styles.small, style]} {...rest}>
        {children}
    </AppText>
);

SmallText.propTypes = {
    children : propTypes.node,
    style : text.propTypes.style
};
const style = StyleSheet.creat({
    small : {
        fontSize: 11,
    }
});
export default SmallText;