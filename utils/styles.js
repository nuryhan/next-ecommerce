import { makeStyles } from "@material-ui/core";

;

const usesStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    main: {
        minHeight: '80vh',
    },
    footer: {
        textAlign: 'center',
    },
    image:{
        width: 300,
        height: 300,
    }
 

})

export default usesStyles;