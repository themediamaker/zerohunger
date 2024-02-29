export const getuserid = () => {
    if (typeof sessionStorage !== 'undefined') {
        const userid = decodeURIComponent(sessionStorage.getItem('userID'));
        const gender = sessionStorage.getItem('gender');
        return { userid, gender };
    } else {
        // Handle the case when sessionStorage is not available
        return { userid: null, gender: null };
    }
}